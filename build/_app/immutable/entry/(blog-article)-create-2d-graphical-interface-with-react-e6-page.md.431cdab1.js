import{S as de,i as fe,s as ke,k as o,q as i,a as m,l as p,m as c,r as l,h as a,c as h,n as r,b as n,G as s,M as Y}from"../chunks/index.8378de51.js";function we(le){let u,d,P,B,D,M,C,G,x,f,re=`<code class="language-undefined">export interface IGameSceneView &#123;
    getViewComponent(name: string),
    getNewViewComponent(comp),
    getChild(childPath, parent),
    addClickListener(comp, handler, target),
    setCard(card, name),
    setLabel(labelComp, text),
    removeAllChildren(parent),
    addChild(child, parent),
    isCardSelected(card),
    toggleCardSelectedStatus(card),
    showComponent(comp),
    hideComponent(comp)
&#125;</code>`,S,b,H,U,k,N,w,j,z,_,Z,A,E,F,L,v,ue=`<code class="language-typescript"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">IGameSceneView</span> <span class="token punctuation">&#123;</span>
    <span class="token function">getViewComponent</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getNewViewComponent</span><span class="token punctuation">(</span>comp<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">getChild</span><span class="token punctuation">(</span>childPath<span class="token punctuation">,</span> parent<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">addClickListener</span><span class="token punctuation">(</span>comp<span class="token punctuation">,</span> handler<span class="token punctuation">,</span> target<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">setCard</span><span class="token punctuation">(</span>card<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">setLabel</span><span class="token punctuation">(</span>labelComp<span class="token punctuation">,</span> text<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">removeAllChildren</span><span class="token punctuation">(</span>parent<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">addChild</span><span class="token punctuation">(</span>child<span class="token punctuation">,</span> parent<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">isCardSelected</span><span class="token punctuation">(</span>card<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">toggleCardSelectedStatus</span><span class="token punctuation">(</span>card<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">showComponent</span><span class="token punctuation">(</span>comp<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">hideComponent</span><span class="token punctuation">(</span>comp<span class="token punctuation">)</span>
<span class="token punctuation">&#125;</span></code>`,V,T,J,R,y,K,g,O,q,I,Q;return{c(){u=o("h2"),d=o("a"),P=o("span"),B=i("#"),D=i("Make a multiplayer card game - Episode 6 | Create 2D graphical interface with React"),M=m(),C=o("p"),G=i("This section mainly uses react to implement UI views. Before this section, a UI view version has been implemented with cocos creator. In order to reuse the basic framework, we abstract the game logic and decouple the logic related to the view engine api. The following is an abstracted interface:"),x=m(),f=o("pre"),S=m(),b=o("p"),H=i("Compared with cocos creator, the implementation of react is more operable at the code level. The styles of interface elements are all implemented by handwritten code. The hot-reload that comes with create-react-app also responds to changes very quickly. There is a time to switch editors and wait for the editor to refresh, which is very lightweight."),U=m(),k=o("p"),N=i("Code reference "),w=o("a"),j=i("https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode6-react"),z=m(),_=o("p"),Z=i("The next article mainly introduces the comparison between cocos creator and react implementation in development."),A=m(),E=o("p"),F=i(`本节主要是用react实现UI视图。
在本节之前，已经用cocos creator实现了一个UI视图版本，为了重用基础框架，我们将游戏逻辑进行抽象，并将与视图引擎api相关的逻辑解耦出来。
下面是抽象出来的一个接口：`),L=m(),v=o("pre"),V=m(),T=o("p"),J=i("相对于cocos creator，react的实现在代码层面可操作性较强，体现在界面元素的样式都通过手写代码来实现，create-react-app自带的hot-reload也非常快地反馈变更，不会有切换编辑器和等待编辑器刷新的时间，非常轻量的感觉。"),R=m(),y=o("p"),K=i("代码参考 "),g=o("a"),O=i("https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode6-react"),q=m(),I=o("p"),Q=i("下一篇主要介绍cocos creator 与 react 实现在开发上的对比。"),this.h()},l(e){u=p(e,"H2",{id:!0});var t=c(u);d=p(t,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var $=c(d);P=p($,"SPAN",{});var ee=c(P);B=l(ee,"#"),ee.forEach(a),$.forEach(a),D=l(t,"Make a multiplayer card game - Episode 6 | Create 2D graphical interface with React"),t.forEach(a),M=h(e),C=p(e,"P",{});var ae=c(C);G=l(ae,"This section mainly uses react to implement UI views. Before this section, a UI view version has been implemented with cocos creator. In order to reuse the basic framework, we abstract the game logic and decouple the logic related to the view engine api. The following is an abstracted interface:"),ae.forEach(a),x=h(e),f=p(e,"PRE",{class:!0});var me=c(f);me.forEach(a),S=h(e),b=p(e,"P",{});var te=c(b);H=l(te,"Compared with cocos creator, the implementation of react is more operable at the code level. The styles of interface elements are all implemented by handwritten code. The hot-reload that comes with create-react-app also responds to changes very quickly. There is a time to switch editors and wait for the editor to refresh, which is very lightweight."),te.forEach(a),U=h(e),k=p(e,"P",{});var W=c(k);N=l(W,"Code reference "),w=p(W,"A",{href:!0,rel:!0});var ne=c(w);j=l(ne,"https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode6-react"),ne.forEach(a),W.forEach(a),z=h(e),_=p(e,"P",{});var se=c(_);Z=l(se,"The next article mainly introduces the comparison between cocos creator and react implementation in development."),se.forEach(a),A=h(e),E=p(e,"P",{});var oe=c(E);F=l(oe,`本节主要是用react实现UI视图。
在本节之前，已经用cocos creator实现了一个UI视图版本，为了重用基础框架，我们将游戏逻辑进行抽象，并将与视图引擎api相关的逻辑解耦出来。
下面是抽象出来的一个接口：`),oe.forEach(a),L=h(e),v=p(e,"PRE",{class:!0});var he=c(v);he.forEach(a),V=h(e),T=p(e,"P",{});var pe=c(T);J=l(pe,"相对于cocos creator，react的实现在代码层面可操作性较强，体现在界面元素的样式都通过手写代码来实现，create-react-app自带的hot-reload也非常快地反馈变更，不会有切换编辑器和等待编辑器刷新的时间，非常轻量的感觉。"),pe.forEach(a),R=h(e),y=p(e,"P",{});var X=c(y);K=l(X,"代码参考 "),g=p(X,"A",{href:!0,rel:!0});var ce=c(g);O=l(ce,"https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode6-react"),ce.forEach(a),X.forEach(a),q=h(e),I=p(e,"P",{});var ie=c(I);Q=l(ie,"下一篇主要介绍cocos creator 与 react 实现在开发上的对比。"),ie.forEach(a),this.h()},h(){r(d,"class","heading-link"),r(d,"title","Permalink"),r(d,"aria-hidden","true"),r(d,"href","#make-a-multiplayer-card-game---episode-6--create-2d-graphical-interface-with-react"),r(u,"id","make-a-multiplayer-card-game---episode-6--create-2d-graphical-interface-with-react"),r(f,"class","language-undefined"),r(w,"href","https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode6-react"),r(w,"rel","nofollow"),r(v,"class","language-typescript"),r(g,"href","https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode6-react"),r(g,"rel","nofollow")},m(e,t){n(e,u,t),s(u,d),s(d,P),s(P,B),s(u,D),n(e,M,t),n(e,C,t),s(C,G),n(e,x,t),n(e,f,t),f.innerHTML=re,n(e,S,t),n(e,b,t),s(b,H),n(e,U,t),n(e,k,t),s(k,N),s(k,w),s(w,j),n(e,z,t),n(e,_,t),s(_,Z),n(e,A,t),n(e,E,t),s(E,F),n(e,L,t),n(e,v,t),v.innerHTML=ue,n(e,V,t),n(e,T,t),s(T,J),n(e,R,t),n(e,y,t),s(y,K),s(y,g),s(g,O),n(e,q,t),n(e,I,t),s(I,Q)},p:Y,i:Y,o:Y,d(e){e&&a(u),e&&a(M),e&&a(C),e&&a(x),e&&a(f),e&&a(S),e&&a(b),e&&a(U),e&&a(k),e&&a(z),e&&a(_),e&&a(A),e&&a(E),e&&a(L),e&&a(v),e&&a(V),e&&a(T),e&&a(R),e&&a(y),e&&a(q),e&&a(I)}}}const ye={title:"Make a multiplayer card game - Episode 6 | Create 2D graphical interface with React",slug:"create-2d-graphical-interface-with-react-e6",coverImage:"/images/posts/blog-posts.jpg",date:"2021-03-29T21:55:15.361Z",excerpt:"This section mainly uses react to implement UI views. Before this section, a UI view version has been implemented with cocos creator. In order to reuse the basic framework, we abstract the game logic and decouple the logic related to the view engine api.",tags:["Tutorial:Make a multiplayer card game"]};class ge extends de{constructor(u){super(),fe(this,u,null,we,ke,{})}}export{ge as default,ye as metadata};
