## Your  Very  First  Start  Of  Three.js

使用Three.js创建一个3D网页一般都会经过以下几个步骤：
- 引入three.js库
- 创建场景
- 创建相机
- 设置相机位置
- 将相机添加到场景
- 创建几何结构
- 创建材质
- 生成3D网格对象
- 将3D对象添加到场景中
- 创建渲染器
- 设置渲染器尺寸
- 将渲染器DOM节点添加到网页DOM树
- 执行渲染器渲染方法


``` typescript
//引入three.js库
import * as THREE from 'three';

//创建场景
let scene = new THREE.Scene();

//创建相机
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);
//设置相机位置
camera.position.set(0, 0, 10);
//将相机添加到场景
scene.add(camera);

//创建几何结构
let boxGeometry = new THREE.BoxGeometry(1, 1, 1);
//创建材质
let boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
//生成3D网格对象
let boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
//将3D对象添加到场景中
scene.add(boxMesh)

//创建渲染器
let renderer = new THREE.WebGLRenderer();
//设置渲染器尺寸
renderer.setSize(window.innerWidth, window.innerHeight);
//将渲染器DOM节点添加到网页DOM树
document.body.appendChild(renderer.domElement)
//执行渲染器渲染方法
renderer.render(scene, camera)

```
渲染结果：

![Screenshot 2022-08-10 231635.png](https://cdn.hashnode.com/res/hashnode/image/upload/v1660144621974/4fSB9gMQ1p.png align="left")
