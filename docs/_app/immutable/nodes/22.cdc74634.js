import{S as oo,i as lo,s as ro,k as a,q as s,a as f,l as i,m as n,r as u,h as t,c as d,n as p,Q as ao,b as l,G as r,M as ft}from"../chunks/index.039744db.js";function io(Gt){let c,m,J,De,Me,le,I,V,Be,re,g,X,Le,ae,P,Y,xe,ie,S,Z,je,ne,N,$,Ue,se,T,Fe,ue,A,Re,fe,O,D,dt,de,M,ze,pe,B,Qe,ce,L,He,me,x,Ke,he,j,ee,We,_e,U,Ge,we,_,Jt=`<code class="language-undefined">function generateEnum(protoArr) &#123;
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

module.exports = &#123; ENUM_CMD_FN: ENUM_CMD_FN &#125;</code>`,be,F,Je,ve,R,Ve,ye,w,Vt=`<code class="language-undefined">function encodeData(cmd, data)&#123;
    let _header = Buffer.alloc(1);
    _header.writeUInt8(cmd);
    let _body = Buffer.from(JSON.stringify(data));
    const _dataBuffer = Buffer.concat([_header, _body]);
    return _dataBuffer;
&#125;</code>`,ke,z,Xe,Ee,b,Xt=`<code class="language-undefined">function decodeData(data) &#123;
    let _cmd = data.readUInt8();
    let _body = JSON.parse(data.slice(1));
    const _funcName = ENUM_CMD_FN[_cmd];
    if (_funcName &amp;&amp; typeof _this[_funcName] == &quot;function&quot;) _this[_funcName](_body);
&#125;</code>`,qe,Q,te,Ye,Ce,v,Yt=`<code class="language-undefined">this.dealCards_S2C = function (data) &#123;
    let _cards = data.cards;
    mCardsArr = sortByValue(_cards);
    let _myHandCardsShowArr = convert2ReadableNames(mCardsArr);
    console.log(&#39;Deal cards complete, your seat number is-&gt; &#39;, data.seatNumber, &#39;your cards-&gt;&#39;, _myHandCardsShowArr.join(&#39;,&#39;));
    console.log(&#39;Select a score to confirm role (you can input 1|2|3, the one who select the biggest number will be the land lord, and the base score is the selected number.): &#39;);
    const _score = getInputFromCmd();
    this.competeForLandLordRole_C2S(_score);
&#125;</code>`,Ie,H,oe,Ze,ge,h,$e,y,et,tt,Pe,k,ot,E,lt,Se,K,rt,Ne,W,q,at,C,it,nt,Te,G,st;return{c(){c=a("h2"),m=a("a"),J=a("span"),De=s("#"),Me=s("Make a multiplayer card game - Episode 2 | Play cards in terminal with bots"),le=f(),I=a("blockquote"),V=a("p"),Be=s(`Before the tech content, I can’t help but express my feeling after writing my
first blog post.`),re=f(),g=a("blockquote"),X=a("p"),Le=s(`I have learned a lot from writing blog. I will never understand the benefits
contained in it before I wrote the first blog.`),ae=f(),P=a("blockquote"),Y=a("p"),xe=s(`The output of the content will prompt you to review the known knowledge. In
the process of reviewing the known knowledge, you will comprehend new
cognition from the old knowledge by sorting out and summarizing the knowledge.
In order to make it easier for readers to understand, you will understand the
previously vague knowledge points by learning new knowledge.`),ie=f(),S=a("blockquote"),Z=a("p"),je=s(`At the same time, I began to understand the author’s gratitude to his family
in the preface of the book. Content output is a time-consuming and
labor-intensive thing that requires a high degree of concentration.`),ne=f(),N=a("blockquote"),$=a("p"),Ue=s(`If you are a developer and have not started your own blog writing, it is
recommended to start now, no matter the content is good or bad, take the first
step and feel the magical power of the output of the content.`),se=f(),T=a("p"),Fe=s(`Based on the server and client we had create in the previous episode, we
concentrate on the logic of game process flow this time. For easy understanding,
we ignore some process such as calculating score which we will supplement in the
multi player version.`),ue=f(),A=a("p"),Re=s("First of all, have a look at the new directory structure:"),fe=f(),O=a("p"),D=a("img"),de=f(),M=a("p"),ze=s(`As we can see above, we add a directory named share, which will be use by both
client and server.`),pe=f(),B=a("code"),Qe=s("helper.js for common logic."),ce=f(),L=a("code"),He=s("proto.js for message definitions."),me=f(),x=a("code"),Ke=s('rule-checker.js for rule of our card game "Doudizhu".'),he=f(),j=a("ol"),ee=a("li"),We=s("Define messages between client and server."),_e=f(),U=a("p"),Ge=s("share/proto.js:"),we=f(),_=a("pre"),be=f(),F=a("p"),Je=s(`The codes above create a enum like structure, which make the communication
intuitive. We define the function in client and server with the same name
created in it.`),ve=f(),R=a("p"),Ve=s("We encode message by the cmdID. server/index.js:"),ye=f(),w=a("pre"),ke=f(),z=a("p"),Xe=s("And decode message by cmdID to find the function to execute. server/index.js"),Ee=f(),b=a("pre"),qe=f(),Q=a("blockquote"),te=a("p"),Ye=s("Caution: the function called through _this[_funcName] must be define as:"),Ce=f(),v=a("pre"),Ie=f(),H=a("blockquote"),oe=a("p"),Ze=s("define like function dealCards_S2C(), can not be found."),ge=f(),h=a("p"),$e=s(`The key point of this episode is all above, other codes are all about the game
process flow and rules which has introduce in my
`),y=a("a"),et=s("previous post"),tt=s(`. If you has
interest in this game, please clone the demo and play with the bots.`),Pe=f(),k=a("p"),ot=s(`The complete demo can be found on:
`),E=a("a"),lt=s("https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode2"),Se=f(),K=a("p"),rt=s("Any problems, discussion is welcome."),Ne=f(),W=a("p"),q=a("strong"),at=s(`In the next episode, we will add the
`),C=a("a"),it=s("protobuf.js"),nt=s(` which is most popular
in game development to define our messages between client and server.`),Te=f(),G=a("p"),st=s("Thanks for your reading."),this.h()},l(e){c=i(e,"H2",{id:!0});var o=n(c);m=i(o,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var pt=n(m);J=i(pt,"SPAN",{});var ct=n(J);De=u(ct,"#"),ct.forEach(t),pt.forEach(t),Me=u(o,"Make a multiplayer card game - Episode 2 | Play cards in terminal with bots"),o.forEach(t),le=d(e),I=i(e,"BLOCKQUOTE",{});var mt=n(I);V=i(mt,"P",{});var ht=n(V);Be=u(ht,`Before the tech content, I can’t help but express my feeling after writing my
first blog post.`),ht.forEach(t),mt.forEach(t),re=d(e),g=i(e,"BLOCKQUOTE",{});var _t=n(g);X=i(_t,"P",{});var wt=n(X);Le=u(wt,`I have learned a lot from writing blog. I will never understand the benefits
contained in it before I wrote the first blog.`),wt.forEach(t),_t.forEach(t),ae=d(e),P=i(e,"BLOCKQUOTE",{});var bt=n(P);Y=i(bt,"P",{});var vt=n(Y);xe=u(vt,`The output of the content will prompt you to review the known knowledge. In
the process of reviewing the known knowledge, you will comprehend new
cognition from the old knowledge by sorting out and summarizing the knowledge.
In order to make it easier for readers to understand, you will understand the
previously vague knowledge points by learning new knowledge.`),vt.forEach(t),bt.forEach(t),ie=d(e),S=i(e,"BLOCKQUOTE",{});var yt=n(S);Z=i(yt,"P",{});var kt=n(Z);je=u(kt,`At the same time, I began to understand the author’s gratitude to his family
in the preface of the book. Content output is a time-consuming and
labor-intensive thing that requires a high degree of concentration.`),kt.forEach(t),yt.forEach(t),ne=d(e),N=i(e,"BLOCKQUOTE",{});var Et=n(N);$=i(Et,"P",{});var qt=n($);Ue=u(qt,`If you are a developer and have not started your own blog writing, it is
recommended to start now, no matter the content is good or bad, take the first
step and feel the magical power of the output of the content.`),qt.forEach(t),Et.forEach(t),se=d(e),T=i(e,"P",{});var Ct=n(T);Fe=u(Ct,`Based on the server and client we had create in the previous episode, we
concentrate on the logic of game process flow this time. For easy understanding,
we ignore some process such as calculating score which we will supplement in the
multi player version.`),Ct.forEach(t),ue=d(e),A=i(e,"P",{});var It=n(A);Re=u(It,"First of all, have a look at the new directory structure:"),It.forEach(t),fe=d(e),O=i(e,"P",{});var gt=n(O);D=i(gt,"IMG",{src:!0,alt:!0}),gt.forEach(t),de=d(e),M=i(e,"P",{});var Pt=n(M);ze=u(Pt,`As we can see above, we add a directory named share, which will be use by both
client and server.`),Pt.forEach(t),pe=d(e),B=i(e,"CODE",{});var St=n(B);Qe=u(St,"helper.js for common logic."),St.forEach(t),ce=d(e),L=i(e,"CODE",{});var Nt=n(L);He=u(Nt,"proto.js for message definitions."),Nt.forEach(t),me=d(e),x=i(e,"CODE",{});var Tt=n(x);Ke=u(Tt,'rule-checker.js for rule of our card game "Doudizhu".'),Tt.forEach(t),he=d(e),j=i(e,"OL",{});var At=n(j);ee=i(At,"LI",{});var Ot=n(ee);We=u(Ot,"Define messages between client and server."),Ot.forEach(t),At.forEach(t),_e=d(e),U=i(e,"P",{});var Dt=n(U);Ge=u(Dt,"share/proto.js:"),Dt.forEach(t),we=d(e),_=i(e,"PRE",{class:!0});var Zt=n(_);Zt.forEach(t),be=d(e),F=i(e,"P",{});var Mt=n(F);Je=u(Mt,`The codes above create a enum like structure, which make the communication
intuitive. We define the function in client and server with the same name
created in it.`),Mt.forEach(t),ve=d(e),R=i(e,"P",{});var Bt=n(R);Ve=u(Bt,"We encode message by the cmdID. server/index.js:"),Bt.forEach(t),ye=d(e),w=i(e,"PRE",{class:!0});var $t=n(w);$t.forEach(t),ke=d(e),z=i(e,"P",{});var Lt=n(z);Xe=u(Lt,"And decode message by cmdID to find the function to execute. server/index.js"),Lt.forEach(t),Ee=d(e),b=i(e,"PRE",{class:!0});var eo=n(b);eo.forEach(t),qe=d(e),Q=i(e,"BLOCKQUOTE",{});var xt=n(Q);te=i(xt,"P",{});var jt=n(te);Ye=u(jt,"Caution: the function called through _this[_funcName] must be define as:"),jt.forEach(t),xt.forEach(t),Ce=d(e),v=i(e,"PRE",{class:!0});var to=n(v);to.forEach(t),Ie=d(e),H=i(e,"BLOCKQUOTE",{});var Ut=n(H);oe=i(Ut,"P",{});var Ft=n(oe);Ze=u(Ft,"define like function dealCards_S2C(), can not be found."),Ft.forEach(t),Ut.forEach(t),ge=d(e),h=i(e,"P",{});var Ae=n(h);$e=u(Ae,`The key point of this episode is all above, other codes are all about the game
process flow and rules which has introduce in my
`),y=i(Ae,"A",{href:!0,rel:!0});var Rt=n(y);et=u(Rt,"previous post"),Rt.forEach(t),tt=u(Ae,`. If you has
interest in this game, please clone the demo and play with the bots.`),Ae.forEach(t),Pe=d(e),k=i(e,"P",{});var ut=n(k);ot=u(ut,`The complete demo can be found on:
`),E=i(ut,"A",{href:!0,rel:!0});var zt=n(E);lt=u(zt,"https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode2"),zt.forEach(t),ut.forEach(t),Se=d(e),K=i(e,"P",{});var Qt=n(K);rt=u(Qt,"Any problems, discussion is welcome."),Qt.forEach(t),Ne=d(e),W=i(e,"P",{});var Ht=n(W);q=i(Ht,"STRONG",{});var Oe=n(q);at=u(Oe,`In the next episode, we will add the
`),C=i(Oe,"A",{href:!0,rel:!0});var Kt=n(C);it=u(Kt,"protobuf.js"),Kt.forEach(t),nt=u(Oe,` which is most popular
in game development to define our messages between client and server.`),Oe.forEach(t),Ht.forEach(t),Te=d(e),G=i(e,"P",{});var Wt=n(G);st=u(Wt,"Thanks for your reading."),Wt.forEach(t),this.h()},h(){p(m,"class","heading-link"),p(m,"title","Permalink"),p(m,"aria-hidden","true"),p(m,"href","#make-a-multiplayer-card-game---episode-2--play-cards-in-terminal-with-bots"),p(c,"id","make-a-multiplayer-card-game---episode-2--play-cards-in-terminal-with-bots"),ao(D.src,dt="https://cdn.hashnode.com/res/hashnode/image/upload/v1645975508993/Svw37SWa5.png")||p(D,"src",dt),p(D,"alt","Screen Shot 2022-02-27 at 23.24.54.png"),p(_,"class","language-undefined"),p(w,"class","language-undefined"),p(b,"class","language-undefined"),p(v,"class","language-undefined"),p(y,"href","https://lizhiyu.me/prior-knowledge-for-episode-2"),p(y,"rel","nofollow"),p(E,"href","https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode2"),p(E,"rel","nofollow"),p(C,"href","https://github.com/protocolbuffers/protobuf"),p(C,"rel","nofollow")},m(e,o){l(e,c,o),r(c,m),r(m,J),r(J,De),r(c,Me),l(e,le,o),l(e,I,o),r(I,V),r(V,Be),l(e,re,o),l(e,g,o),r(g,X),r(X,Le),l(e,ae,o),l(e,P,o),r(P,Y),r(Y,xe),l(e,ie,o),l(e,S,o),r(S,Z),r(Z,je),l(e,ne,o),l(e,N,o),r(N,$),r($,Ue),l(e,se,o),l(e,T,o),r(T,Fe),l(e,ue,o),l(e,A,o),r(A,Re),l(e,fe,o),l(e,O,o),r(O,D),l(e,de,o),l(e,M,o),r(M,ze),l(e,pe,o),l(e,B,o),r(B,Qe),l(e,ce,o),l(e,L,o),r(L,He),l(e,me,o),l(e,x,o),r(x,Ke),l(e,he,o),l(e,j,o),r(j,ee),r(ee,We),l(e,_e,o),l(e,U,o),r(U,Ge),l(e,we,o),l(e,_,o),_.innerHTML=Jt,l(e,be,o),l(e,F,o),r(F,Je),l(e,ve,o),l(e,R,o),r(R,Ve),l(e,ye,o),l(e,w,o),w.innerHTML=Vt,l(e,ke,o),l(e,z,o),r(z,Xe),l(e,Ee,o),l(e,b,o),b.innerHTML=Xt,l(e,qe,o),l(e,Q,o),r(Q,te),r(te,Ye),l(e,Ce,o),l(e,v,o),v.innerHTML=Yt,l(e,Ie,o),l(e,H,o),r(H,oe),r(oe,Ze),l(e,ge,o),l(e,h,o),r(h,$e),r(h,y),r(y,et),r(h,tt),l(e,Pe,o),l(e,k,o),r(k,ot),r(k,E),r(E,lt),l(e,Se,o),l(e,K,o),r(K,rt),l(e,Ne,o),l(e,W,o),r(W,q),r(q,at),r(q,C),r(C,it),r(q,nt),l(e,Te,o),l(e,G,o),r(G,st)},p:ft,i:ft,o:ft,d(e){e&&t(c),e&&t(le),e&&t(I),e&&t(re),e&&t(g),e&&t(ae),e&&t(P),e&&t(ie),e&&t(S),e&&t(ne),e&&t(N),e&&t(se),e&&t(T),e&&t(ue),e&&t(A),e&&t(fe),e&&t(O),e&&t(de),e&&t(M),e&&t(pe),e&&t(B),e&&t(ce),e&&t(L),e&&t(me),e&&t(x),e&&t(he),e&&t(j),e&&t(_e),e&&t(U),e&&t(we),e&&t(_),e&&t(be),e&&t(F),e&&t(ve),e&&t(R),e&&t(ye),e&&t(w),e&&t(ke),e&&t(z),e&&t(Ee),e&&t(b),e&&t(qe),e&&t(Q),e&&t(Ce),e&&t(v),e&&t(Ie),e&&t(H),e&&t(ge),e&&t(h),e&&t(Pe),e&&t(k),e&&t(Se),e&&t(K),e&&t(Ne),e&&t(W),e&&t(Te),e&&t(G)}}}class so extends oo{constructor(c){super(),lo(this,c,null,io,ro,{})}}export{so as component};
