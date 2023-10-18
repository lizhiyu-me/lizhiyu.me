import{S as Ue,i as Ae,s as Ve,k as r,q as s,a as p,l as n,m as l,r as c,h as t,c as d,n as u,b as i,G as o,M as pe}from"../chunks/index.8378de51.js";function Se(ge){let f,m,U,O,Q,S,w,R,z,C,W,D,P,X,j,k,Y,q,_,$,L,b,v,ee,F,E,te,J,I,ae,G,M,ie,H,x,oe,N,T,re,Z,h,A,ne,le,V,se,B,g,y,ce;return{c(){f=r("h2"),m=r("a"),U=r("span"),O=s("#"),Q=s("Make a multiplayer card game - Episode 5 | Create 2D graphical interface with Cocos Creator"),S=p(),w=r("p"),R=s(`This chapter is almost a month away from the previous chapter. During this
period, it is mainly about the transformation and reconstruction of the client.
The content of the overall client is almost completely different from the
command-line version of the previous chapter.`),z=p(),C=r("p"),W=s(`According to the previous plan, I converted all the code written in JS to TS and
transplanted the command-line interactive interface to the conventional game
interactive interface (using cocos creator game engine).`),D=p(),P=r("p"),X=s(`Previously, in order to quickly realize the function, the server and client used
only one file to encode. Up to now, the client code of the project has been
modularized, and the classic PureMVC library has been introduced to completely
decouple the UI interaction and data, network messages and game operation logic,
so as to create conditions for extracting the code of the framework independent
of the game engine (it is planned to use one framework to access different view
layer engines).`),j=p(),k=r("p"),Y=s(`PureMVC has been introduced in previous articles. The core idea is to decouple
view and data. The data is processed by proxy and the facade is controlled by
proxy.`),q=p(),_=r("p"),$=s(`Compared with the previous version, some changes are involved: -The difference
between socket and web socket API. It mainly includes the names of several
monitored events and the interfaces for sending messages. -UI display layer
independent. Command line output and game engine rendering view interactive
operation interface.`),L=p(),b=r("p"),v=r("a"),ee=s("demo url"),F=p(),E=r("p"),te=s("本章离前一章快一个月了，在这段时间，主要是对客户端的改造和重构，整体客户端的内容几乎完全不同于上一章命令行版本。"),J=p(),I=r("p"),ae=s("按照之前的计划，我将之前用js写的代码全部转为了ts，将命令行交互界面移植到常规的游戏交互界面（利用CocosCreator游戏引擎）。"),G=p(),M=r("p"),ie=s(`之前为了快速实现功能，服务器和客户端分别只用一个文件进行编码。
截至目前，项目客户端代码进行了模块化改造，引入了经典的PureMVC库，将UI交互和数据，网络消息和游戏操作逻辑完全解藕，为后面提取与游戏引擎无关的框架（计划用一个框架接入不同视图层引擎）代码创造条件。`),H=p(),x=r("p"),oe=s(`在之前的文章里面已经介绍过PureMVC，核心的思想就是视图与数据解藕。
通过一个门面类（Facade）来统管框架，用视图代理（Mediator）控制显示组件逻辑，用数据模型代理（Proxy）存储和处理数据。`),N=p(),T=r("p"),re=s("相对于上一版，涉及到的一些改动："),Z=p(),h=r("ul"),A=r("li"),ne=s("socket 和 web socket api 的区别。主要是几个监听的事件名字，和发送消息的接口。"),le=p(),V=r("li"),se=s("ui显示层独立。命令行输出和游戏引擎渲染视图交互操作界面。"),B=p(),g=r("p"),y=r("a"),ce=s("demo url"),this.h()},l(e){f=n(e,"H2",{id:!0});var a=l(f);m=n(a,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var de=l(m);U=n(de,"SPAN",{});var fe=l(U);O=c(fe,"#"),fe.forEach(t),de.forEach(t),Q=c(a,"Make a multiplayer card game - Episode 5 | Create 2D graphical interface with Cocos Creator"),a.forEach(t),S=d(e),w=n(e,"P",{});var me=l(w);R=c(me,`This chapter is almost a month away from the previous chapter. During this
period, it is mainly about the transformation and reconstruction of the client.
The content of the overall client is almost completely different from the
command-line version of the previous chapter.`),me.forEach(t),z=d(e),C=n(e,"P",{});var ue=l(C);W=c(ue,`According to the previous plan, I converted all the code written in JS to TS and
transplanted the command-line interactive interface to the conventional game
interactive interface (using cocos creator game engine).`),ue.forEach(t),D=d(e),P=n(e,"P",{});var he=l(P);X=c(he,`Previously, in order to quickly realize the function, the server and client used
only one file to encode. Up to now, the client code of the project has been
modularized, and the classic PureMVC library has been introduced to completely
decouple the UI interaction and data, network messages and game operation logic,
so as to create conditions for extracting the code of the framework independent
of the game engine (it is planned to use one framework to access different view
layer engines).`),he.forEach(t),j=d(e),k=n(e,"P",{});var ve=l(k);Y=c(ve,`PureMVC has been introduced in previous articles. The core idea is to decouple
view and data. The data is processed by proxy and the facade is controlled by
proxy.`),ve.forEach(t),q=d(e),_=n(e,"P",{});var ye=l(_);$=c(ye,`Compared with the previous version, some changes are involved: -The difference
between socket and web socket API. It mainly includes the names of several
monitored events and the interfaces for sending messages. -UI display layer
independent. Command line output and game engine rendering view interactive
operation interface.`),ye.forEach(t),L=d(e),b=n(e,"P",{});var we=l(b);v=n(we,"A",{href:!0,rel:!0});var Ce=l(v);ee=c(Ce,"demo url"),Ce.forEach(t),we.forEach(t),F=d(e),E=n(e,"P",{});var Pe=l(E);te=c(Pe,"本章离前一章快一个月了，在这段时间，主要是对客户端的改造和重构，整体客户端的内容几乎完全不同于上一章命令行版本。"),Pe.forEach(t),J=d(e),I=n(e,"P",{});var ke=l(I);ae=c(ke,"按照之前的计划，我将之前用js写的代码全部转为了ts，将命令行交互界面移植到常规的游戏交互界面（利用CocosCreator游戏引擎）。"),ke.forEach(t),G=d(e),M=n(e,"P",{});var _e=l(M);ie=c(_e,`之前为了快速实现功能，服务器和客户端分别只用一个文件进行编码。
截至目前，项目客户端代码进行了模块化改造，引入了经典的PureMVC库，将UI交互和数据，网络消息和游戏操作逻辑完全解藕，为后面提取与游戏引擎无关的框架（计划用一个框架接入不同视图层引擎）代码创造条件。`),_e.forEach(t),H=d(e),x=n(e,"P",{});var be=l(x);oe=c(be,`在之前的文章里面已经介绍过PureMVC，核心的思想就是视图与数据解藕。
通过一个门面类（Facade）来统管框架，用视图代理（Mediator）控制显示组件逻辑，用数据模型代理（Proxy）存储和处理数据。`),be.forEach(t),N=d(e),T=n(e,"P",{});var Ee=l(T);re=c(Ee,"相对于上一版，涉及到的一些改动："),Ee.forEach(t),Z=d(e),h=n(e,"UL",{});var K=l(h);A=n(K,"LI",{});var Ie=l(A);ne=c(Ie,"socket 和 web socket api 的区别。主要是几个监听的事件名字，和发送消息的接口。"),Ie.forEach(t),le=d(K),V=n(K,"LI",{});var Me=l(V);se=c(Me,"ui显示层独立。命令行输出和游戏引擎渲染视图交互操作界面。"),Me.forEach(t),K.forEach(t),B=d(e),g=n(e,"P",{});var xe=l(g);y=n(xe,"A",{href:!0,rel:!0});var Te=l(y);ce=c(Te,"demo url"),Te.forEach(t),xe.forEach(t),this.h()},h(){u(m,"class","heading-link"),u(m,"title","Permalink"),u(m,"aria-hidden","true"),u(m,"href","#make-a-multiplayer-card-game---episode-5--create-2d-graphical-interface-with-cocos-creator"),u(f,"id","make-a-multiplayer-card-game---episode-5--create-2d-graphical-interface-with-cocos-creator"),u(v,"href","https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode5-UICocosCreator"),u(v,"rel","nofollow"),u(y,"href","https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode5-UICocosCreator"),u(y,"rel","nofollow")},m(e,a){i(e,f,a),o(f,m),o(m,U),o(U,O),o(f,Q),i(e,S,a),i(e,w,a),o(w,R),i(e,z,a),i(e,C,a),o(C,W),i(e,D,a),i(e,P,a),o(P,X),i(e,j,a),i(e,k,a),o(k,Y),i(e,q,a),i(e,_,a),o(_,$),i(e,L,a),i(e,b,a),o(b,v),o(v,ee),i(e,F,a),i(e,E,a),o(E,te),i(e,J,a),i(e,I,a),o(I,ae),i(e,G,a),i(e,M,a),o(M,ie),i(e,H,a),i(e,x,a),o(x,oe),i(e,N,a),i(e,T,a),o(T,re),i(e,Z,a),i(e,h,a),o(h,A),o(A,ne),o(h,le),o(h,V),o(V,se),i(e,B,a),i(e,g,a),o(g,y),o(y,ce)},p:pe,i:pe,o:pe,d(e){e&&t(f),e&&t(S),e&&t(w),e&&t(z),e&&t(C),e&&t(D),e&&t(P),e&&t(j),e&&t(k),e&&t(q),e&&t(_),e&&t(L),e&&t(b),e&&t(F),e&&t(E),e&&t(J),e&&t(I),e&&t(G),e&&t(M),e&&t(H),e&&t(x),e&&t(N),e&&t(T),e&&t(Z),e&&t(h),e&&t(B),e&&t(g)}}}const De={title:"Make a multiplayer card game - Episode 5 | Create 2D graphical interface with Cocos Creator",slug:"make-a-multiplayer-card-game-episode-5",coverImage:"/images/posts/blog-posts.jpg",date:"2021-03-22T21:55:15.361Z",excerpt:"Create 2D graphical interface with Cocos Creator",tags:["Tutorial:Make a multiplayer card game"]};class je extends Ue{constructor(f){super(),Ae(this,f,null,Se,Ve,{})}}export{je as default,De as metadata};
