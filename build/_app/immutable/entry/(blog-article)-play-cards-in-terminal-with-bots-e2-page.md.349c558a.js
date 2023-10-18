import{S as oo,i as lo,s as ro,k as a,q as s,a as f,l as i,m as n,r as u,h as t,c as d,n as p,Q as ao,b as l,G as r,M as ft}from"../chunks/index.8378de51.js";function io(Gt){let c,m,J,De,Me,le,g,V,Be,re,I,Z,xe,ae,P,X,Le,ie,T,Y,je,ne,S,$,Ue,se,N,Fe,ue,A,Re,fe,O,D,dt,de,M,ze,pe,B,Qe,ce,x,He,me,L,Ke,he,j,ee,We,we,U,Ge,_e,w,Jt=`<code class="language-undefined">function generateEnum(protoArr) &#123;
    let _enum = &#123;&#125;;
    for (let i = 0; i &lt; protoArr.length; i++) &#123;
        const _protoName = protoArr[i];
        const _cmdID = i;
        _enum[_enum[_protoName] = _cmdID] = _protoName;
    &#125;
    return _enum;
&#125;

const ENUM_CMD_FN = generateEnum(
    [
        &quot;ready_C2S&quot;,
        &quot;dealCards_S2C&quot;,
        &quot;competeForLandLordRole_C2S&quot;,
        &quot;playTurn&quot;,
        &quot;playCards_C2S&quot;,
        &quot;playCards_S2C&quot;,
        &quot;notAllowedByRule_S2C&quot;,
        &quot;gameEnd_S2C&quot;
    ]);

module.exports = &#123; ENUM_CMD_FN: ENUM_CMD_FN &#125;</code>`,be,F,Je,ve,R,Ve,ye,_,Vt=`<code class="language-undefined">function encodeData(cmd, data)&#123;
    let _header = Buffer.alloc(1);
    _header.writeUInt8(cmd);
    let _body = Buffer.from(JSON.stringify(data));
    const _dataBuffer = Buffer.concat([_header, _body]);
    return _dataBuffer;
&#125;</code>`,ke,z,Ze,Ee,b,Zt=`<code class="language-undefined">function decodeData(data) &#123;
    let _cmd = data.readUInt8();
    let _body = JSON.parse(data.slice(1));
    const _funcName = ENUM_CMD_FN[_cmd];
    if (_funcName &amp;&amp; typeof _this[_funcName] == &quot;function&quot;) _this[_funcName](_body);
&#125;</code>`,qe,Q,te,Xe,Ce,v,Xt=`<code class="language-undefined">this.dealCards_S2C = function (data) &#123;
    let _cards = data.cards;
    mCardsArr = sortByValue(_cards);
    let _myHandCardsShowArr = convert2ReadableNames(mCardsArr);
    console.log(&#39;Deal cards complete, your seat number is-&gt; &#39;, data.seatNumber, &#39;your cards-&gt;&#39;, _myHandCardsShowArr.join(&#39;,&#39;));
    console.log(&#39;Select a score to confirm role (you can input 1|2|3, the one who select the biggest number will be the land lord, and the base score is the selected number.): &#39;);
    const _score = getInputFromCmd();
    this.competeForLandLordRole_C2S(_score);
&#125;</code>`,ge,H,oe,Ye,Ie,h,$e,y,et,tt,Pe,k,ot,E,lt,Te,K,rt,Se,W,q,at,C,it,nt,Ne,G,st;return{c(){c=a("h2"),m=a("a"),J=a("span"),De=s("#"),Me=s("Make a multiplayer card game - Episode 2 | Play cards in terminal with bots"),le=f(),g=a("blockquote"),V=a("p"),Be=s(`Before the tech content, I can’t help but express my feeling after writing my
first blog post.`),re=f(),I=a("blockquote"),Z=a("p"),xe=s(`I have learned a lot from writing blog. I will never understand the benefits
contained in it before I wrote the first blog.`),ae=f(),P=a("blockquote"),X=a("p"),Le=s(`The output of the content will prompt you to review the known knowledge. In
the process of reviewing the known knowledge, you will comprehend new
cognition from the old knowledge by sorting out and summarizing the knowledge.
In order to make it easier for readers to understand, you will understand the
previously vague knowledge points by learning new knowledge.`),ie=f(),T=a("blockquote"),Y=a("p"),je=s(`At the same time, I began to understand the author’s gratitude to his family
in the preface of the book. Content output is a time-consuming and
labor-intensive thing that requires a high degree of concentration.`),ne=f(),S=a("blockquote"),$=a("p"),Ue=s(`If you are a developer and have not started your own blog writing, it is
recommended to start now, no matter the content is good or bad, take the first
step and feel the magical power of the output of the content.`),se=f(),N=a("p"),Fe=s(`Based on the server and client we had create in the previous episode, we
concentrate on the logic of game process flow this time. For easy understanding,
we ignore some process such as calculating score which we will supplement in the
multi player version.`),ue=f(),A=a("p"),Re=s("First of all, have a look at the new directory structure:"),fe=f(),O=a("p"),D=a("img"),de=f(),M=a("p"),ze=s(`As we can see above, we add a directory named share, which will be use by both
client and server.`),pe=f(),B=a("code"),Qe=s("helper.js for common logic."),ce=f(),x=a("code"),He=s("proto.js for message definitions."),me=f(),L=a("code"),Ke=s('rule-checker.js for rule of our card game "Doudizhu".'),he=f(),j=a("ol"),ee=a("li"),We=s("Define messages between client and server."),we=f(),U=a("p"),Ge=s("share/proto.js:"),_e=f(),w=a("pre"),be=f(),F=a("p"),Je=s(`The codes above create a enum like structure, which make the communication
intuitive. We define the function in client and server with the same name
created in it.`),ve=f(),R=a("p"),Ve=s("We encode message by the cmdID. server/index.js:"),ye=f(),_=a("pre"),ke=f(),z=a("p"),Ze=s("And decode message by cmdID to find the function to execute. server/index.js"),Ee=f(),b=a("pre"),qe=f(),Q=a("blockquote"),te=a("p"),Xe=s("Caution: the function called through _this[_funcName] must be define as:"),Ce=f(),v=a("pre"),ge=f(),H=a("blockquote"),oe=a("p"),Ye=s("define like function dealCards_S2C(), can not be found."),Ie=f(),h=a("p"),$e=s(`The key point of this episode is all above, other codes are all about the game
process flow and rules which has introduce in my
`),y=a("a"),et=s("previous post"),tt=s(`. If you has
interest in this game, please clone the demo and play with the bots.`),Pe=f(),k=a("p"),ot=s(`The complete demo can be found on:
`),E=a("a"),lt=s("https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode2"),Te=f(),K=a("p"),rt=s("Any problems, discussion is welcome."),Se=f(),W=a("p"),q=a("strong"),at=s(`In the next episode, we will add the
`),C=a("a"),it=s("protobuf.js"),nt=s(` which is most popular
in game development to define our messages between client and server.`),Ne=f(),G=a("p"),st=s("Thanks for your reading."),this.h()},l(e){c=i(e,"H2",{id:!0});var o=n(c);m=i(o,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var pt=n(m);J=i(pt,"SPAN",{});var ct=n(J);De=u(ct,"#"),ct.forEach(t),pt.forEach(t),Me=u(o,"Make a multiplayer card game - Episode 2 | Play cards in terminal with bots"),o.forEach(t),le=d(e),g=i(e,"BLOCKQUOTE",{});var mt=n(g);V=i(mt,"P",{});var ht=n(V);Be=u(ht,`Before the tech content, I can’t help but express my feeling after writing my
first blog post.`),ht.forEach(t),mt.forEach(t),re=d(e),I=i(e,"BLOCKQUOTE",{});var wt=n(I);Z=i(wt,"P",{});var _t=n(Z);xe=u(_t,`I have learned a lot from writing blog. I will never understand the benefits
contained in it before I wrote the first blog.`),_t.forEach(t),wt.forEach(t),ae=d(e),P=i(e,"BLOCKQUOTE",{});var bt=n(P);X=i(bt,"P",{});var vt=n(X);Le=u(vt,`The output of the content will prompt you to review the known knowledge. In
the process of reviewing the known knowledge, you will comprehend new
cognition from the old knowledge by sorting out and summarizing the knowledge.
In order to make it easier for readers to understand, you will understand the
previously vague knowledge points by learning new knowledge.`),vt.forEach(t),bt.forEach(t),ie=d(e),T=i(e,"BLOCKQUOTE",{});var yt=n(T);Y=i(yt,"P",{});var kt=n(Y);je=u(kt,`At the same time, I began to understand the author’s gratitude to his family
in the preface of the book. Content output is a time-consuming and
labor-intensive thing that requires a high degree of concentration.`),kt.forEach(t),yt.forEach(t),ne=d(e),S=i(e,"BLOCKQUOTE",{});var Et=n(S);$=i(Et,"P",{});var qt=n($);Ue=u(qt,`If you are a developer and have not started your own blog writing, it is
recommended to start now, no matter the content is good or bad, take the first
step and feel the magical power of the output of the content.`),qt.forEach(t),Et.forEach(t),se=d(e),N=i(e,"P",{});var Ct=n(N);Fe=u(Ct,`Based on the server and client we had create in the previous episode, we
concentrate on the logic of game process flow this time. For easy understanding,
we ignore some process such as calculating score which we will supplement in the
multi player version.`),Ct.forEach(t),ue=d(e),A=i(e,"P",{});var gt=n(A);Re=u(gt,"First of all, have a look at the new directory structure:"),gt.forEach(t),fe=d(e),O=i(e,"P",{});var It=n(O);D=i(It,"IMG",{src:!0,alt:!0}),It.forEach(t),de=d(e),M=i(e,"P",{});var Pt=n(M);ze=u(Pt,`As we can see above, we add a directory named share, which will be use by both
client and server.`),Pt.forEach(t),pe=d(e),B=i(e,"CODE",{});var Tt=n(B);Qe=u(Tt,"helper.js for common logic."),Tt.forEach(t),ce=d(e),x=i(e,"CODE",{});var St=n(x);He=u(St,"proto.js for message definitions."),St.forEach(t),me=d(e),L=i(e,"CODE",{});var Nt=n(L);Ke=u(Nt,'rule-checker.js for rule of our card game "Doudizhu".'),Nt.forEach(t),he=d(e),j=i(e,"OL",{});var At=n(j);ee=i(At,"LI",{});var Ot=n(ee);We=u(Ot,"Define messages between client and server."),Ot.forEach(t),At.forEach(t),we=d(e),U=i(e,"P",{});var Dt=n(U);Ge=u(Dt,"share/proto.js:"),Dt.forEach(t),_e=d(e),w=i(e,"PRE",{class:!0});var Yt=n(w);Yt.forEach(t),be=d(e),F=i(e,"P",{});var Mt=n(F);Je=u(Mt,`The codes above create a enum like structure, which make the communication
intuitive. We define the function in client and server with the same name
created in it.`),Mt.forEach(t),ve=d(e),R=i(e,"P",{});var Bt=n(R);Ve=u(Bt,"We encode message by the cmdID. server/index.js:"),Bt.forEach(t),ye=d(e),_=i(e,"PRE",{class:!0});var $t=n(_);$t.forEach(t),ke=d(e),z=i(e,"P",{});var xt=n(z);Ze=u(xt,"And decode message by cmdID to find the function to execute. server/index.js"),xt.forEach(t),Ee=d(e),b=i(e,"PRE",{class:!0});var eo=n(b);eo.forEach(t),qe=d(e),Q=i(e,"BLOCKQUOTE",{});var Lt=n(Q);te=i(Lt,"P",{});var jt=n(te);Xe=u(jt,"Caution: the function called through _this[_funcName] must be define as:"),jt.forEach(t),Lt.forEach(t),Ce=d(e),v=i(e,"PRE",{class:!0});var to=n(v);to.forEach(t),ge=d(e),H=i(e,"BLOCKQUOTE",{});var Ut=n(H);oe=i(Ut,"P",{});var Ft=n(oe);Ye=u(Ft,"define like function dealCards_S2C(), can not be found."),Ft.forEach(t),Ut.forEach(t),Ie=d(e),h=i(e,"P",{});var Ae=n(h);$e=u(Ae,`The key point of this episode is all above, other codes are all about the game
process flow and rules which has introduce in my
`),y=i(Ae,"A",{href:!0,rel:!0});var Rt=n(y);et=u(Rt,"previous post"),Rt.forEach(t),tt=u(Ae,`. If you has
interest in this game, please clone the demo and play with the bots.`),Ae.forEach(t),Pe=d(e),k=i(e,"P",{});var ut=n(k);ot=u(ut,`The complete demo can be found on:
`),E=i(ut,"A",{href:!0,rel:!0});var zt=n(E);lt=u(zt,"https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode2"),zt.forEach(t),ut.forEach(t),Te=d(e),K=i(e,"P",{});var Qt=n(K);rt=u(Qt,"Any problems, discussion is welcome."),Qt.forEach(t),Se=d(e),W=i(e,"P",{});var Ht=n(W);q=i(Ht,"STRONG",{});var Oe=n(q);at=u(Oe,`In the next episode, we will add the
`),C=i(Oe,"A",{href:!0,rel:!0});var Kt=n(C);it=u(Kt,"protobuf.js"),Kt.forEach(t),nt=u(Oe,` which is most popular
in game development to define our messages between client and server.`),Oe.forEach(t),Ht.forEach(t),Ne=d(e),G=i(e,"P",{});var Wt=n(G);st=u(Wt,"Thanks for your reading."),Wt.forEach(t),this.h()},h(){p(m,"class","heading-link"),p(m,"title","Permalink"),p(m,"aria-hidden","true"),p(m,"href","#make-a-multiplayer-card-game---episode-2--play-cards-in-terminal-with-bots"),p(c,"id","make-a-multiplayer-card-game---episode-2--play-cards-in-terminal-with-bots"),ao(D.src,dt="https://cdn.hashnode.com/res/hashnode/image/upload/v1645975508993/Svw37SWa5.png")||p(D,"src",dt),p(D,"alt","Screen Shot 2022-02-27 at 23.24.54.png"),p(w,"class","language-undefined"),p(_,"class","language-undefined"),p(b,"class","language-undefined"),p(v,"class","language-undefined"),p(y,"href","https://lizhiyu.me/prior-knowledge-for-episode-2"),p(y,"rel","nofollow"),p(E,"href","https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode2"),p(E,"rel","nofollow"),p(C,"href","https://github.com/protocolbuffers/protobuf"),p(C,"rel","nofollow")},m(e,o){l(e,c,o),r(c,m),r(m,J),r(J,De),r(c,Me),l(e,le,o),l(e,g,o),r(g,V),r(V,Be),l(e,re,o),l(e,I,o),r(I,Z),r(Z,xe),l(e,ae,o),l(e,P,o),r(P,X),r(X,Le),l(e,ie,o),l(e,T,o),r(T,Y),r(Y,je),l(e,ne,o),l(e,S,o),r(S,$),r($,Ue),l(e,se,o),l(e,N,o),r(N,Fe),l(e,ue,o),l(e,A,o),r(A,Re),l(e,fe,o),l(e,O,o),r(O,D),l(e,de,o),l(e,M,o),r(M,ze),l(e,pe,o),l(e,B,o),r(B,Qe),l(e,ce,o),l(e,x,o),r(x,He),l(e,me,o),l(e,L,o),r(L,Ke),l(e,he,o),l(e,j,o),r(j,ee),r(ee,We),l(e,we,o),l(e,U,o),r(U,Ge),l(e,_e,o),l(e,w,o),w.innerHTML=Jt,l(e,be,o),l(e,F,o),r(F,Je),l(e,ve,o),l(e,R,o),r(R,Ve),l(e,ye,o),l(e,_,o),_.innerHTML=Vt,l(e,ke,o),l(e,z,o),r(z,Ze),l(e,Ee,o),l(e,b,o),b.innerHTML=Zt,l(e,qe,o),l(e,Q,o),r(Q,te),r(te,Xe),l(e,Ce,o),l(e,v,o),v.innerHTML=Xt,l(e,ge,o),l(e,H,o),r(H,oe),r(oe,Ye),l(e,Ie,o),l(e,h,o),r(h,$e),r(h,y),r(y,et),r(h,tt),l(e,Pe,o),l(e,k,o),r(k,ot),r(k,E),r(E,lt),l(e,Te,o),l(e,K,o),r(K,rt),l(e,Se,o),l(e,W,o),r(W,q),r(q,at),r(q,C),r(C,it),r(q,nt),l(e,Ne,o),l(e,G,o),r(G,st)},p:ft,i:ft,o:ft,d(e){e&&t(c),e&&t(le),e&&t(g),e&&t(re),e&&t(I),e&&t(ae),e&&t(P),e&&t(ie),e&&t(T),e&&t(ne),e&&t(S),e&&t(se),e&&t(N),e&&t(ue),e&&t(A),e&&t(fe),e&&t(O),e&&t(de),e&&t(M),e&&t(pe),e&&t(B),e&&t(ce),e&&t(x),e&&t(me),e&&t(L),e&&t(he),e&&t(j),e&&t(we),e&&t(U),e&&t(_e),e&&t(w),e&&t(be),e&&t(F),e&&t(ve),e&&t(R),e&&t(ye),e&&t(_),e&&t(ke),e&&t(z),e&&t(Ee),e&&t(b),e&&t(qe),e&&t(Q),e&&t(Ce),e&&t(v),e&&t(ge),e&&t(H),e&&t(Ie),e&&t(h),e&&t(Pe),e&&t(k),e&&t(Te),e&&t(K),e&&t(Se),e&&t(W),e&&t(Ne),e&&t(G)}}}const so={title:"Play cards in terminal with bots - Episode 2",slug:"play-cards-in-terminal-with-bots-e2",coverImage:"/images/posts/blog-posts.jpg",date:"2021-02-08T21:55:15.361Z",excerpt:"Play cards in terminal with bots",tags:["Tutorial:Make a multiplayer card game"]};class uo extends oo{constructor(c){super(),lo(this,c,null,io,ro,{})}}export{uo as default,so as metadata};
