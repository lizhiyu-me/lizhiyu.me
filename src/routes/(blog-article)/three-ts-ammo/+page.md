---
title: Three.js + Typescript + Ammo.js | A Tiny Shooter Game
slug: three-ts-ammo
coverImage: /images/posts/blog-posts.jpg
date: 2021-07-23T21:55:15.361Z
excerpt:
tags:
---
## Three.js + Typescript + Ammo.js | A Tiny Shooter Game

按照计划，利用Three.js和Ammo.js制作一个物理小游戏.
通过 学习借鉴以下几个学习资源：
- [Three.js官方文档](https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene)
- [Orillusion官方](https://space.bilibili.com/1006136755?spm_id_from=333.337.0.0)
- [MIT 线性代数 1080p高清修复重制](https://www.bilibili.com/video/BV13Y4y1q7ZE?p=1)
- [threejs-university](https://en.threejs-university.com/)
- [《WebGL编程指南》](https://item.jd.com/1210283611.html)

对3D和Three.js形成了一个初步的认识。

然后，基于[https://github.com/hvidal/WebGL-Shooter](https://github.com/hvidal/WebGL-Shooter)项目，完成了一个类塔防的物理射击游戏。[Github地址](https://github.com/lizhiyu-me/three-ammo-defense-monster)


![QQ图片20220525225341.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1653490446005/K7LQBVVSS.png align="left")

---
## 关键概念
#### 两个主体世界
- Three.js的视图世界 `THREE.Scene`
- Ammo.js的物理世界 `Ammo.btDiscreteDynamicsWorld`

通过设置THREE.Object3D 的userData.physicsBody为Ammo.btRigidBody,即使Three.js的物体添加到物理世界。

每帧更新物理世界的坐标,旋转等各项数据到视图世界，完成位移碰撞的及时调整。

```
for (let i = 0; i < len; i++) {
			var objThree = this.rigidBodies[i];
			var motionState = objThree.userData.physicsBody.getMotionState();
			if (motionState) {
				motionState.getWorldTransform(this.tempTransform);

				let p = this.tempTransform.getOrigin();
				objThree.position.set(p.x(), p.y(), p.z());

				let q = this.tempTransform.getRotation();
				objThree.quaternion.set(q.x(), q.y(), q.z(), q.w());
			}
		}
```
### 基础内容
－创建Three.js场景
```
        this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor(clearColor);
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		element.appendChild(this.renderer.domElement);
		this.scene = new THREE.Scene();
```

- 创建Ammo.js物理世界
```
        const collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
		const dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
		const overlappingPairCache = new Ammo.btAxisSweep3(new Ammo.btVector3(-1000, -1000, -1000), new Ammo.btVector3(1000, 1000, 1000));
		const solver = new Ammo.btSequentialImpulseConstraintSolver();

		this.physicsWorld = new Ammo.btDiscreteDynamicsWorld(dispatcher, overlappingPairCache, solver, collisionConfiguration);
		this.physicsWorld.setGravity(new Ammo.btVector3(0, -16, 0));
```

- 射击逻辑

```
shoot() {
		this.raycaster.setFromCamera(this.screenCenter, this.camera);

		this.pos.copy(this.raycaster.ray.direction);
		this.pos.add(this.raycaster.ray.origin);
		this.pos.setZ(this.pos.z - 10);

		const ball = this.factory.createSphere(this.radius, this.mass, this.pos, this.quat, this.ballMaterial);
		ball.castShadow = true;
		ball.receiveShadow = true;

		const body = ball.userData.physicsBody;
		this.pos.copy(this.raycaster.ray.direction);
		this.pos.multiplyScalar(160);
//调整子弹速度
		body.setLinearVelocity(new Ammo.btVector3(this.pos.x, this.pos.y, this.pos.z));
	}
```

---

### 增加内容:
- 连击实现
```
//鼠标按下之后，间隔时间超过0.2秒即射击一次
if (isMouseDowning && duration > 0.2) {
				duration = 0;
				mouseShooter.shoot();
			}
```
- 计时作为最终的游戏得分
```
function recordTotalTime() {
			if (beginTime == 0) {
				beginTime = new Date().getTime();
			} else {
				let _currentTime = new Date().getTime();
				totalTime += (_currentTime - beginTime);
				document.getElementById('scoreBar').innerHTML = Math.floor(totalTime / 1000) + "." + totalTime % 1000;
				beginTime = _currentTime;
			}
		}
```
- 游戏结束判断（物体在斜坡底部掉落）
```
//斜坡底部的z坐标值计算
var edgeZ = Math.cos(groundRotationX) * groundScaleZ / 2;
```
```
//判断斜坡上的物体的z轴坐标是否大于斜坡底部的z坐标值
	private checkGameOver(controls, edgeZ): boolean {
		const len = this.rigidBodies_slope.length;
		for (let i = 0; i < len; i++) {
			var objThree = this.rigidBodies_slope[i];
			if (objThree.position.z > edgeZ) {
				controls.enabled = false;
				const message = document.getElementById('message');
				const blocker = document.getElementById('blocker');
				const gameOver = document.getElementById('gameOver');
				blocker.style.display = 'none';
				message.style.display = 'none';
				gameOver.style.display = 'block';
				lockPointer(controls);
				document.getElementById('score').innerHTML = document.getElementById('scoreBar').innerHTML;
				this.isGameOver = true;
				return true;
			}
		}
	}
```

没想到用three.js和ammo.js做一个小DEMO会花这么多时间去学习,通过这个学习的过程也了解到了3D和物理相关的知识在广度和深度上都是值得去探索的，后面我也会继续在web3D的方向上继续探索学习。

做难而正确的事情，让正确的事情持续发生。



