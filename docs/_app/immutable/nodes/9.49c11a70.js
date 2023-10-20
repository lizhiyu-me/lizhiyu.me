import{S as Ae,i as Ve,s as Se,k as r,q as s,a as p,l as n,m as l,r as c,h as t,c as f,n as u,b as o,G as a,M as pe}from"../chunks/index.72d13981.js";function ze(Ue){let d,m,A,Q,R,z,w,W,j,P,X,q,_,Y,D,C,Z,L,k,$,F,b,v,ee,J,E,te,g,I,ie,G,M,oe,H,x,ae,N,T,re,B,h,V,ne,le,S,se,K,U,y,ce;return{c(){d=r("h2"),m=r("a"),A=r("span"),Q=s("#"),R=s("Make a multiplayer card game - Episode 5 | Create 2D graphical interface with Cocos Creator"),z=p(),w=r("p"),W=s(`This chapter is almost a month away from the previous chapter. During this
period, it is mainly about the transformation and reconstruction of the client.
The content of the overall client is almost completely different from the
command-line version of the previous chapter.`),j=p(),P=r("p"),X=s(`According to the previous plan, I converted all the code written in JS to TS and
transplanted the command-line interactive interface to the conventional game
interactive interface (using cocos creator game engine).`),q=p(),_=r("p"),Y=s(`Previously, in order to quickly realize the function, the server and client used
only one file to encode. Up to now, the client code of the project has been
modularized, and the classic PureMVC library has been introduced to completely
decouple the UI interaction and data, network messages and game operation logic,
so as to create conditions for extracting the code of the framework independent
of the game engine (it is planned to use one framework to access different view
layer engines).`),D=p(),C=r("p"),Z=s(`PureMVC has been introduced in previous articles. The core idea is to decouple
view and data. The data is processed by proxy and the facade is controlled by
proxy.`),L=p(),k=r("p"),$=s(`Compared with the previous version, some changes are involved: -The difference
between socket and web socket API. It mainly includes the names of several
monitored events and the interfaces for sending messages. -UI display layer
independent. Command line output and game engine rendering view interactive
operation interface.`),F=p(),b=r("p"),v=r("a"),ee=s("demo url"),J=p(),E=r("p"),te=s("本章离前一章快一个月了，在这段时间，主要是对客户端的改造和重构，整体客户端的内容几乎完全不同于上一章命令行版本。"),g=p(),I=r("p"),ie=s("按照之前的计划，我将之前用js写的代码全部转为了ts，将命令行交互界面移植到常规的游戏交互界面（利用CocosCreator游戏引擎）。"),G=p(),M=r("p"),oe=s(`之前为了快速实现功能，服务器和客户端分别只用一个文件进行编码。
截至目前，项目客户端代码进行了模块化改造，引入了经典的PureMVC库，将UI交互和数据，网络消息和游戏操作逻辑完全解藕，为后面提取与游戏引擎无关的框架（计划用一个框架接入不同视图层引擎）代码创造条件。`),H=p(),x=r("p"),ae=s(`在之前的文章里面已经介绍过PureMVC，核心的思想就是视图与数据解藕。
通过一个门面类（Facade）来统管框架，用视图代理（Mediator）控制显示组件逻辑，用数据模型代理（Proxy）存储和处理数据。`),N=p(),T=r("p"),re=s("相对于上一版，涉及到的一些改动："),B=p(),h=r("ul"),V=r("li"),ne=s("socket 和 web socket api 的区别。主要是几个监听的事件名字，和发送消息的接口。"),le=p(),S=r("li"),se=s("ui显示层独立。命令行输出和游戏引擎渲染视图交互操作界面。"),K=p(),U=r("p"),y=r("a"),ce=s("demo url"),this.h()},l(e){d=n(e,"H2",{id:!0});var i=l(d);m=n(i,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var fe=l(m);A=n(fe,"SPAN",{});var de=l(A);Q=c(de,"#"),de.forEach(t),fe.forEach(t),R=c(i,"Make a multiplayer card game - Episode 5 | Create 2D graphical interface with Cocos Creator"),i.forEach(t),z=f(e),w=n(e,"P",{});var me=l(w);W=c(me,`This chapter is almost a month away from the previous chapter. During this
period, it is mainly about the transformation and reconstruction of the client.
The content of the overall client is almost completely different from the
command-line version of the previous chapter.`),me.forEach(t),j=f(e),P=n(e,"P",{});var ue=l(P);X=c(ue,`According to the previous plan, I converted all the code written in JS to TS and
transplanted the command-line interactive interface to the conventional game
interactive interface (using cocos creator game engine).`),ue.forEach(t),q=f(e),_=n(e,"P",{});var he=l(_);Y=c(he,`Previously, in order to quickly realize the function, the server and client used
only one file to encode. Up to now, the client code of the project has been
modularized, and the classic PureMVC library has been introduced to completely
decouple the UI interaction and data, network messages and game operation logic,
so as to create conditions for extracting the code of the framework independent
of the game engine (it is planned to use one framework to access different view
layer engines).`),he.forEach(t),D=f(e),C=n(e,"P",{});var ve=l(C);Z=c(ve,`PureMVC has been introduced in previous articles. The core idea is to decouple
view and data. The data is processed by proxy and the facade is controlled by
proxy.`),ve.forEach(t),L=f(e),k=n(e,"P",{});var ye=l(k);$=c(ye,`Compared with the previous version, some changes are involved: -The difference
between socket and web socket API. It mainly includes the names of several
monitored events and the interfaces for sending messages. -UI display layer
independent. Command line output and game engine rendering view interactive
operation interface.`),ye.forEach(t),F=f(e),b=n(e,"P",{});var we=l(b);v=n(we,"A",{href:!0,rel:!0});var Pe=l(v);ee=c(Pe,"demo url"),Pe.forEach(t),we.forEach(t),J=f(e),E=n(e,"P",{});var _e=l(E);te=c(_e,"本章离前一章快一个月了，在这段时间，主要是对客户端的改造和重构，整体客户端的内容几乎完全不同于上一章命令行版本。"),_e.forEach(t),g=f(e),I=n(e,"P",{});var Ce=l(I);ie=c(Ce,"按照之前的计划，我将之前用js写的代码全部转为了ts，将命令行交互界面移植到常规的游戏交互界面（利用CocosCreator游戏引擎）。"),Ce.forEach(t),G=f(e),M=n(e,"P",{});var ke=l(M);oe=c(ke,`之前为了快速实现功能，服务器和客户端分别只用一个文件进行编码。
截至目前，项目客户端代码进行了模块化改造，引入了经典的PureMVC库，将UI交互和数据，网络消息和游戏操作逻辑完全解藕，为后面提取与游戏引擎无关的框架（计划用一个框架接入不同视图层引擎）代码创造条件。`),ke.forEach(t),H=f(e),x=n(e,"P",{});var be=l(x);ae=c(be,`在之前的文章里面已经介绍过PureMVC，核心的思想就是视图与数据解藕。
通过一个门面类（Facade）来统管框架，用视图代理（Mediator）控制显示组件逻辑，用数据模型代理（Proxy）存储和处理数据。`),be.forEach(t),N=f(e),T=n(e,"P",{});var Ee=l(T);re=c(Ee,"相对于上一版，涉及到的一些改动："),Ee.forEach(t),B=f(e),h=n(e,"UL",{});var O=l(h);V=n(O,"LI",{});var Ie=l(V);ne=c(Ie,"socket 和 web socket api 的区别。主要是几个监听的事件名字，和发送消息的接口。"),Ie.forEach(t),le=f(O),S=n(O,"LI",{});var Me=l(S);se=c(Me,"ui显示层独立。命令行输出和游戏引擎渲染视图交互操作界面。"),Me.forEach(t),O.forEach(t),K=f(e),U=n(e,"P",{});var xe=l(U);y=n(xe,"A",{href:!0,rel:!0});var Te=l(y);ce=c(Te,"demo url"),Te.forEach(t),xe.forEach(t),this.h()},h(){u(m,"class","heading-link"),u(m,"title","Permalink"),u(m,"aria-hidden","true"),u(m,"href","#make-a-multiplayer-card-game---episode-5--create-2d-graphical-interface-with-cocos-creator"),u(d,"id","make-a-multiplayer-card-game---episode-5--create-2d-graphical-interface-with-cocos-creator"),u(v,"href","https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode5-UICocosCreator"),u(v,"rel","nofollow"),u(y,"href","https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode5-UICocosCreator"),u(y,"rel","nofollow")},m(e,i){o(e,d,i),a(d,m),a(m,A),a(A,Q),a(d,R),o(e,z,i),o(e,w,i),a(w,W),o(e,j,i),o(e,P,i),a(P,X),o(e,q,i),o(e,_,i),a(_,Y),o(e,D,i),o(e,C,i),a(C,Z),o(e,L,i),o(e,k,i),a(k,$),o(e,F,i),o(e,b,i),a(b,v),a(v,ee),o(e,J,i),o(e,E,i),a(E,te),o(e,g,i),o(e,I,i),a(I,ie),o(e,G,i),o(e,M,i),a(M,oe),o(e,H,i),o(e,x,i),a(x,ae),o(e,N,i),o(e,T,i),a(T,re),o(e,B,i),o(e,h,i),a(h,V),a(V,ne),a(h,le),a(h,S),a(S,se),o(e,K,i),o(e,U,i),a(U,y),a(y,ce)},p:pe,i:pe,o:pe,d(e){e&&t(d),e&&t(z),e&&t(w),e&&t(j),e&&t(P),e&&t(q),e&&t(_),e&&t(D),e&&t(C),e&&t(L),e&&t(k),e&&t(F),e&&t(b),e&&t(J),e&&t(E),e&&t(g),e&&t(I),e&&t(G),e&&t(M),e&&t(H),e&&t(x),e&&t(N),e&&t(T),e&&t(B),e&&t(h),e&&t(K),e&&t(U)}}}class qe extends Ae{constructor(d){super(),Ve(this,d,null,ze,Se,{})}}export{qe as component};
