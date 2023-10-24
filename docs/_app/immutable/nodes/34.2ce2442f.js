import{S as rr,i as ir,s as sr,k as i,q as n,a as p,l as s,m as o,r as u,h as l,c as m,n as f,b as a,G as t,M as Jl}from"../chunks/index.039744db.js";function or(xt){let d,v,ie,tl,rl,we,U,il,je,h,se,D,sl,ol,oe,H,al,fl,ae,R,nl,ul,fe,B,pl,ml,ne,I,hl,Ae,Z,dl,Le,E,cl,M,vl,El,C,_l,Se,w,Tl,k,yl,bl,Pe,De,He,j,_,ue,wl,jl,Re,A,T,pe,Al,Ll,Be,L,N,Sl,me,Pl,Dl,K,Hl,he,Rl,Ie,F,Bl,Me,X,Il,Ce,G,Vt=`<code class="language-undefined">for (let i = 0; i &lt; len; i++) &#123;
			var objThree = this.rigidBodies[i];
			var motionState = objThree.userData.physicsBody.getMotionState();
			if (motionState) &#123;
				motionState.getWorldTransform(this.tempTransform);

				let p = this.tempTransform.getOrigin();
				objThree.position.set(p.x(), p.y(), p.z());

				let q = this.tempTransform.getRotation();
				objThree.quaternion.set(q.x(), q.y(), q.z(), q.w());
			&#125;
		&#125;</code>`,ke,S,y,de,Ml,Cl,Ge,Y,kl,Oe,O,zt=`<code class="language-undefined">        this.renderer = new THREE.WebGLRenderer();
		this.renderer.setClearColor(clearColor);
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		element.appendChild(this.renderer.domElement);
		this.scene = new THREE.Scene();</code>`,qe,J,ce,Gl,We,q,Qt=`<code class="language-undefined">        const collisionConfiguration = new Ammo.btDefaultCollisionConfiguration();
		const dispatcher = new Ammo.btCollisionDispatcher(collisionConfiguration);
		const overlappingPairCache = new Ammo.btAxisSweep3(new Ammo.btVector3(-1000, -1000, -1000), new Ammo.btVector3(1000, 1000, 1000));
		const solver = new Ammo.btSequentialImpulseConstraintSolver();

		this.physicsWorld = new Ammo.btDiscreteDynamicsWorld(dispatcher, overlappingPairCache, solver, collisionConfiguration);
		this.physicsWorld.setGravity(new Ammo.btVector3(0, -16, 0));</code>`,xe,$,ve,Ol,Ve,W,Ut=`<code class="language-undefined">shoot() &#123;
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
	&#125;</code>`,ze,Qe,Ue,P,b,Ee,ql,Wl,Ze,g,_e,xl,Ne,x,Zt=`<code class="language-undefined">//鼠标按下之后，间隔时间超过0.2秒即射击一次
if (isMouseDowning &amp;&amp; duration &gt; 0.2) &#123;
				duration = 0;
				mouseShooter.shoot();
			&#125;</code>`,Ke,ee,Te,Vl,Fe,V,Nt=`<code class="language-undefined">function recordTotalTime() &#123;
			if (beginTime == 0) &#123;
				beginTime = new Date().getTime();
			&#125; else &#123;
				let _currentTime = new Date().getTime();
				totalTime += (_currentTime - beginTime);
				document.getElementById(&#39;scoreBar&#39;).innerHTML = Math.floor(totalTime / 1000) + &quot;.&quot; + totalTime % 1000;
				beginTime = _currentTime;
			&#125;
		&#125;</code>`,Xe,le,ye,zl,Ye,z,Kt=`<code class="language-undefined">//斜坡底部的z坐标值计算
var edgeZ = Math.cos(groundRotationX) * groundScaleZ / 2;</code>`,Je,Q,Ft=`<code class="language-undefined">//判断斜坡上的物体的z轴坐标是否大于斜坡底部的z坐标值
	private checkGameOver(controls, edgeZ): boolean &#123;
		const len = this.rigidBodies_slope.length;
		for (let i = 0; i &lt; len; i++) &#123;
			var objThree = this.rigidBodies_slope[i];
			if (objThree.position.z &gt; edgeZ) &#123;
				controls.enabled = false;
				const message = document.getElementById(&#39;message&#39;);
				const blocker = document.getElementById(&#39;blocker&#39;);
				const gameOver = document.getElementById(&#39;gameOver&#39;);
				blocker.style.display = &#39;none&#39;;
				message.style.display = &#39;none&#39;;
				gameOver.style.display = &#39;block&#39;;
				lockPointer(controls);
				document.getElementById(&#39;score&#39;).innerHTML = document.getElementById(&#39;scoreBar&#39;).innerHTML;
				this.isGameOver = true;
				return true;
			&#125;
		&#125;
	&#125;</code>`,$e,te,Ql,ge,re,Ul;return{c(){d=i("h2"),v=i("a"),ie=i("span"),tl=n("#"),rl=n("Three.js + Typescript + Ammo.js | A Tiny Shooter Game"),we=p(),U=i("p"),il=n(`按照计划，利用Three.js和Ammo.js制作一个物理小游戏.
通过 学习借鉴以下几个学习资源：`),je=p(),h=i("ul"),se=i("li"),D=i("a"),sl=n("Three.js官方文档"),ol=p(),oe=i("li"),H=i("a"),al=n("Orillusion官方"),fl=p(),ae=i("li"),R=i("a"),nl=n("MIT 线性代数 1080p高清修复重制"),ul=p(),fe=i("li"),B=i("a"),pl=n("threejs-university"),ml=p(),ne=i("li"),I=i("a"),hl=n("《WebGL编程指南》"),Ae=p(),Z=i("p"),dl=n("对3D和Three.js形成了一个初步的认识。"),Le=p(),E=i("p"),cl=n("然后，基于"),M=i("a"),vl=n("https://github.com/hvidal/WebGL-Shooter"),El=n("项目，完成了一个类塔防的物理射击游戏。"),C=i("a"),_l=n("Github地址"),Se=p(),w=i("p"),Tl=n("![QQ图片20220525225341.png]("),k=i("a"),yl=n("https://cdn.hashnode.com/res/hashnode/image/upload/v1653490446005/K7LQBVVSS.png"),bl=n(" align=“left”)"),Pe=p(),De=i("hr"),He=p(),j=i("h2"),_=i("a"),ue=i("span"),wl=n("#"),jl=n("关键概念"),Re=p(),A=i("h4"),T=i("a"),pe=i("span"),Al=n("#"),Ll=n("两个主体世界"),Be=p(),L=i("ul"),N=i("li"),Sl=n("Three.js的视图世界 "),me=i("code"),Pl=n("THREE.Scene"),Dl=p(),K=i("li"),Hl=n("Ammo.js的物理世界 "),he=i("code"),Rl=n("Ammo.btDiscreteDynamicsWorld"),Ie=p(),F=i("p"),Bl=n("通过设置THREE.Object3D 的userData.physicsBody为Ammo.btRigidBody,即使Three.js的物体添加到物理世界。"),Me=p(),X=i("p"),Il=n("每帧更新物理世界的坐标,旋转等各项数据到视图世界，完成位移碰撞的及时调整。"),Ce=p(),G=i("pre"),ke=p(),S=i("h3"),y=i("a"),de=i("span"),Ml=n("#"),Cl=n("基础内容"),Ge=p(),Y=i("p"),kl=n("－创建Three.js场景"),Oe=p(),O=i("pre"),qe=p(),J=i("ul"),ce=i("li"),Gl=n("创建Ammo.js物理世界"),We=p(),q=i("pre"),xe=p(),$=i("ul"),ve=i("li"),Ol=n("射击逻辑"),Ve=p(),W=i("pre"),ze=p(),Qe=i("hr"),Ue=p(),P=i("h3"),b=i("a"),Ee=i("span"),ql=n("#"),Wl=n("增加内容:"),Ze=p(),g=i("ul"),_e=i("li"),xl=n("连击实现"),Ne=p(),x=i("pre"),Ke=p(),ee=i("ul"),Te=i("li"),Vl=n("计时作为最终的游戏得分"),Fe=p(),V=i("pre"),Xe=p(),le=i("ul"),ye=i("li"),zl=n("游戏结束判断（物体在斜坡底部掉落）"),Ye=p(),z=i("pre"),Je=p(),Q=i("pre"),$e=p(),te=i("p"),Ql=n("没想到用three.js和ammo.js做一个小DEMO会花这么多时间去学习,通过这个学习的过程也了解到了3D和物理相关的知识在广度和深度上都是值得去探索的，后面我也会继续在web3D的方向上继续探索学习。"),ge=p(),re=i("p"),Ul=n("做难而正确的事情，让正确的事情持续发生。"),this.h()},l(e){d=s(e,"H2",{id:!0});var r=o(d);v=s(r,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var $l=o(v);ie=s($l,"SPAN",{});var gl=o(ie);tl=u(gl,"#"),gl.forEach(l),$l.forEach(l),rl=u(r,"Three.js + Typescript + Ammo.js | A Tiny Shooter Game"),r.forEach(l),we=m(e),U=s(e,"P",{});var et=o(U);il=u(et,`按照计划，利用Three.js和Ammo.js制作一个物理小游戏.
通过 学习借鉴以下几个学习资源：`),et.forEach(l),je=m(e),h=s(e,"UL",{});var c=o(h);se=s(c,"LI",{});var lt=o(se);D=s(lt,"A",{href:!0,rel:!0});var tt=o(D);sl=u(tt,"Three.js官方文档"),tt.forEach(l),lt.forEach(l),ol=m(c),oe=s(c,"LI",{});var rt=o(oe);H=s(rt,"A",{href:!0,rel:!0});var it=o(H);al=u(it,"Orillusion官方"),it.forEach(l),rt.forEach(l),fl=m(c),ae=s(c,"LI",{});var st=o(ae);R=s(st,"A",{href:!0,rel:!0});var ot=o(R);nl=u(ot,"MIT 线性代数 1080p高清修复重制"),ot.forEach(l),st.forEach(l),ul=m(c),fe=s(c,"LI",{});var at=o(fe);B=s(at,"A",{href:!0,rel:!0});var ft=o(B);pl=u(ft,"threejs-university"),ft.forEach(l),at.forEach(l),ml=m(c),ne=s(c,"LI",{});var nt=o(ne);I=s(nt,"A",{href:!0,rel:!0});var ut=o(I);hl=u(ut,"《WebGL编程指南》"),ut.forEach(l),nt.forEach(l),c.forEach(l),Ae=m(e),Z=s(e,"P",{});var pt=o(Z);dl=u(pt,"对3D和Three.js形成了一个初步的认识。"),pt.forEach(l),Le=m(e),E=s(e,"P",{});var be=o(E);cl=u(be,"然后，基于"),M=s(be,"A",{href:!0,rel:!0});var mt=o(M);vl=u(mt,"https://github.com/hvidal/WebGL-Shooter"),mt.forEach(l),El=u(be,"项目，完成了一个类塔防的物理射击游戏。"),C=s(be,"A",{href:!0,rel:!0});var ht=o(C);_l=u(ht,"Github地址"),ht.forEach(l),be.forEach(l),Se=m(e),w=s(e,"P",{});var el=o(w);Tl=u(el,"![QQ图片20220525225341.png]("),k=s(el,"A",{href:!0,rel:!0});var dt=o(k);yl=u(dt,"https://cdn.hashnode.com/res/hashnode/image/upload/v1653490446005/K7LQBVVSS.png"),dt.forEach(l),bl=u(el," align=“left”)"),el.forEach(l),Pe=m(e),De=s(e,"HR",{}),He=m(e),j=s(e,"H2",{id:!0});var Zl=o(j);_=s(Zl,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var ct=o(_);ue=s(ct,"SPAN",{});var vt=o(ue);wl=u(vt,"#"),vt.forEach(l),ct.forEach(l),jl=u(Zl,"关键概念"),Zl.forEach(l),Re=m(e),A=s(e,"H4",{id:!0});var Nl=o(A);T=s(Nl,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Et=o(T);pe=s(Et,"SPAN",{});var _t=o(pe);Al=u(_t,"#"),_t.forEach(l),Et.forEach(l),Ll=u(Nl,"两个主体世界"),Nl.forEach(l),Be=m(e),L=s(e,"UL",{});var ll=o(L);N=s(ll,"LI",{});var Kl=o(N);Sl=u(Kl,"Three.js的视图世界 "),me=s(Kl,"CODE",{});var Tt=o(me);Pl=u(Tt,"THREE.Scene"),Tt.forEach(l),Kl.forEach(l),Dl=m(ll),K=s(ll,"LI",{});var Fl=o(K);Hl=u(Fl,"Ammo.js的物理世界 "),he=s(Fl,"CODE",{});var yt=o(he);Rl=u(yt,"Ammo.btDiscreteDynamicsWorld"),yt.forEach(l),Fl.forEach(l),ll.forEach(l),Ie=m(e),F=s(e,"P",{});var bt=o(F);Bl=u(bt,"通过设置THREE.Object3D 的userData.physicsBody为Ammo.btRigidBody,即使Three.js的物体添加到物理世界。"),bt.forEach(l),Me=m(e),X=s(e,"P",{});var wt=o(X);Il=u(wt,"每帧更新物理世界的坐标,旋转等各项数据到视图世界，完成位移碰撞的及时调整。"),wt.forEach(l),Ce=m(e),G=s(e,"PRE",{class:!0});var Xt=o(G);Xt.forEach(l),ke=m(e),S=s(e,"H3",{id:!0});var Xl=o(S);y=s(Xl,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var jt=o(y);de=s(jt,"SPAN",{});var At=o(de);Ml=u(At,"#"),At.forEach(l),jt.forEach(l),Cl=u(Xl,"基础内容"),Xl.forEach(l),Ge=m(e),Y=s(e,"P",{});var Lt=o(Y);kl=u(Lt,"－创建Three.js场景"),Lt.forEach(l),Oe=m(e),O=s(e,"PRE",{class:!0});var Yt=o(O);Yt.forEach(l),qe=m(e),J=s(e,"UL",{});var St=o(J);ce=s(St,"LI",{});var Pt=o(ce);Gl=u(Pt,"创建Ammo.js物理世界"),Pt.forEach(l),St.forEach(l),We=m(e),q=s(e,"PRE",{class:!0});var Jt=o(q);Jt.forEach(l),xe=m(e),$=s(e,"UL",{});var Dt=o($);ve=s(Dt,"LI",{});var Ht=o(ve);Ol=u(Ht,"射击逻辑"),Ht.forEach(l),Dt.forEach(l),Ve=m(e),W=s(e,"PRE",{class:!0});var $t=o(W);$t.forEach(l),ze=m(e),Qe=s(e,"HR",{}),Ue=m(e),P=s(e,"H3",{id:!0});var Yl=o(P);b=s(Yl,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Rt=o(b);Ee=s(Rt,"SPAN",{});var Bt=o(Ee);ql=u(Bt,"#"),Bt.forEach(l),Rt.forEach(l),Wl=u(Yl,"增加内容:"),Yl.forEach(l),Ze=m(e),g=s(e,"UL",{});var It=o(g);_e=s(It,"LI",{});var Mt=o(_e);xl=u(Mt,"连击实现"),Mt.forEach(l),It.forEach(l),Ne=m(e),x=s(e,"PRE",{class:!0});var gt=o(x);gt.forEach(l),Ke=m(e),ee=s(e,"UL",{});var Ct=o(ee);Te=s(Ct,"LI",{});var kt=o(Te);Vl=u(kt,"计时作为最终的游戏得分"),kt.forEach(l),Ct.forEach(l),Fe=m(e),V=s(e,"PRE",{class:!0});var er=o(V);er.forEach(l),Xe=m(e),le=s(e,"UL",{});var Gt=o(le);ye=s(Gt,"LI",{});var Ot=o(ye);zl=u(Ot,"游戏结束判断（物体在斜坡底部掉落）"),Ot.forEach(l),Gt.forEach(l),Ye=m(e),z=s(e,"PRE",{class:!0});var lr=o(z);lr.forEach(l),Je=m(e),Q=s(e,"PRE",{class:!0});var tr=o(Q);tr.forEach(l),$e=m(e),te=s(e,"P",{});var qt=o(te);Ql=u(qt,"没想到用three.js和ammo.js做一个小DEMO会花这么多时间去学习,通过这个学习的过程也了解到了3D和物理相关的知识在广度和深度上都是值得去探索的，后面我也会继续在web3D的方向上继续探索学习。"),qt.forEach(l),ge=m(e),re=s(e,"P",{});var Wt=o(re);Ul=u(Wt,"做难而正确的事情，让正确的事情持续发生。"),Wt.forEach(l),this.h()},h(){f(v,"class","heading-link"),f(v,"title","Permalink"),f(v,"aria-hidden","true"),f(v,"href","#threejs--typescript--ammojs--a-tiny-shooter-game"),f(d,"id","threejs--typescript--ammojs--a-tiny-shooter-game"),f(D,"href","https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene"),f(D,"rel","nofollow"),f(H,"href","https://space.bilibili.com/1006136755?spm_id_from=333.337.0.0"),f(H,"rel","nofollow"),f(R,"href","https://www.bilibili.com/video/BV13Y4y1q7ZE?p=1"),f(R,"rel","nofollow"),f(B,"href","https://en.threejs-university.com/"),f(B,"rel","nofollow"),f(I,"href","https://item.jd.com/1210283611.html"),f(I,"rel","nofollow"),f(M,"href","https://github.com/hvidal/WebGL-Shooter"),f(M,"rel","nofollow"),f(C,"href","https://github.com/lizhiyu-me/three-ammo-defense-monster"),f(C,"rel","nofollow"),f(k,"href","https://cdn.hashnode.com/res/hashnode/image/upload/v1653490446005/K7LQBVVSS.png"),f(k,"rel","nofollow"),f(_,"class","heading-link"),f(_,"title","Permalink"),f(_,"aria-hidden","true"),f(_,"href","#关键概念"),f(j,"id","关键概念"),f(T,"class","heading-link"),f(T,"title","Permalink"),f(T,"aria-hidden","true"),f(T,"href","#两个主体世界"),f(A,"id","两个主体世界"),f(G,"class","language-undefined"),f(y,"class","heading-link"),f(y,"title","Permalink"),f(y,"aria-hidden","true"),f(y,"href","#基础内容"),f(S,"id","基础内容"),f(O,"class","language-undefined"),f(q,"class","language-undefined"),f(W,"class","language-undefined"),f(b,"class","heading-link"),f(b,"title","Permalink"),f(b,"aria-hidden","true"),f(b,"href","#增加内容"),f(P,"id","增加内容"),f(x,"class","language-undefined"),f(V,"class","language-undefined"),f(z,"class","language-undefined"),f(Q,"class","language-undefined")},m(e,r){a(e,d,r),t(d,v),t(v,ie),t(ie,tl),t(d,rl),a(e,we,r),a(e,U,r),t(U,il),a(e,je,r),a(e,h,r),t(h,se),t(se,D),t(D,sl),t(h,ol),t(h,oe),t(oe,H),t(H,al),t(h,fl),t(h,ae),t(ae,R),t(R,nl),t(h,ul),t(h,fe),t(fe,B),t(B,pl),t(h,ml),t(h,ne),t(ne,I),t(I,hl),a(e,Ae,r),a(e,Z,r),t(Z,dl),a(e,Le,r),a(e,E,r),t(E,cl),t(E,M),t(M,vl),t(E,El),t(E,C),t(C,_l),a(e,Se,r),a(e,w,r),t(w,Tl),t(w,k),t(k,yl),t(w,bl),a(e,Pe,r),a(e,De,r),a(e,He,r),a(e,j,r),t(j,_),t(_,ue),t(ue,wl),t(j,jl),a(e,Re,r),a(e,A,r),t(A,T),t(T,pe),t(pe,Al),t(A,Ll),a(e,Be,r),a(e,L,r),t(L,N),t(N,Sl),t(N,me),t(me,Pl),t(L,Dl),t(L,K),t(K,Hl),t(K,he),t(he,Rl),a(e,Ie,r),a(e,F,r),t(F,Bl),a(e,Me,r),a(e,X,r),t(X,Il),a(e,Ce,r),a(e,G,r),G.innerHTML=Vt,a(e,ke,r),a(e,S,r),t(S,y),t(y,de),t(de,Ml),t(S,Cl),a(e,Ge,r),a(e,Y,r),t(Y,kl),a(e,Oe,r),a(e,O,r),O.innerHTML=zt,a(e,qe,r),a(e,J,r),t(J,ce),t(ce,Gl),a(e,We,r),a(e,q,r),q.innerHTML=Qt,a(e,xe,r),a(e,$,r),t($,ve),t(ve,Ol),a(e,Ve,r),a(e,W,r),W.innerHTML=Ut,a(e,ze,r),a(e,Qe,r),a(e,Ue,r),a(e,P,r),t(P,b),t(b,Ee),t(Ee,ql),t(P,Wl),a(e,Ze,r),a(e,g,r),t(g,_e),t(_e,xl),a(e,Ne,r),a(e,x,r),x.innerHTML=Zt,a(e,Ke,r),a(e,ee,r),t(ee,Te),t(Te,Vl),a(e,Fe,r),a(e,V,r),V.innerHTML=Nt,a(e,Xe,r),a(e,le,r),t(le,ye),t(ye,zl),a(e,Ye,r),a(e,z,r),z.innerHTML=Kt,a(e,Je,r),a(e,Q,r),Q.innerHTML=Ft,a(e,$e,r),a(e,te,r),t(te,Ql),a(e,ge,r),a(e,re,r),t(re,Ul)},p:Jl,i:Jl,o:Jl,d(e){e&&l(d),e&&l(we),e&&l(U),e&&l(je),e&&l(h),e&&l(Ae),e&&l(Z),e&&l(Le),e&&l(E),e&&l(Se),e&&l(w),e&&l(Pe),e&&l(De),e&&l(He),e&&l(j),e&&l(Re),e&&l(A),e&&l(Be),e&&l(L),e&&l(Ie),e&&l(F),e&&l(Me),e&&l(X),e&&l(Ce),e&&l(G),e&&l(ke),e&&l(S),e&&l(Ge),e&&l(Y),e&&l(Oe),e&&l(O),e&&l(qe),e&&l(J),e&&l(We),e&&l(q),e&&l(xe),e&&l($),e&&l(Ve),e&&l(W),e&&l(ze),e&&l(Qe),e&&l(Ue),e&&l(P),e&&l(Ze),e&&l(g),e&&l(Ne),e&&l(x),e&&l(Ke),e&&l(ee),e&&l(Fe),e&&l(V),e&&l(Xe),e&&l(le),e&&l(Ye),e&&l(z),e&&l(Je),e&&l(Q),e&&l($e),e&&l(te),e&&l(ge),e&&l(re)}}}class fr extends rr{constructor(d){super(),ir(this,d,null,or,sr,{})}}export{fr as component};
