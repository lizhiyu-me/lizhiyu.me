import{S as pt,i as ct,s as ut,k as s,q as c,a as r,l as o,m as i,r as u,h as t,c as p,n as f,b as n,G as l,M as Be}from"../chunks/index.039744db.js";function ft(Ze){let d,h,N,ce,ue,G,g,R,fe,Y,P,de,F,k,m,C,he,me,W,D,ke,z,v,$e=`<code class="language-undefined">const net = require(&#39;net&#39;);
const server = net.createServer();
server.on(&quot;connection&quot;,()=&gt;&#123;&#125;);</code>`,K,T,ye,Q,w,et=`<code class="language-undefined">var playerIDArr = [];
function generatePlayerIDAndSeatNumber() &#123;
    let _seat = playerIDArr.length;
    let _id = Math.floor(Math.random() * 10000);
    let _isExist = playerIDArr.indexOf(_id) != -1;
    if (_isExist) &#123;
        generatePlayerIDAndSeatNumber();
    &#125; else &#123;
        playerIDArr.push(_id);
    &#125;
    return &#123; id: _id, seat: _seat &#125;;
&#125;</code>`,U,A,ve,J,_,tt=`<code class="language-javascript">server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"connection"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">socket</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">let</span> _id_seat <span class="token operator">=</span> <span class="token function">generatePlayerIDAndSeatNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> _playerID <span class="token operator">=</span> _id_seat<span class="token punctuation">.</span>id<span class="token punctuation">;</span>
  <span class="token keyword">let</span> _seatNumber <span class="token operator">=</span> _id_seat<span class="token punctuation">.</span>seat<span class="token punctuation">;</span>
  socket<span class="token punctuation">.</span>id <span class="token operator">=</span> _playerID<span class="token punctuation">;</span>
  socket<span class="token punctuation">.</span>seat <span class="token operator">=</span> _seatNumber<span class="token punctuation">;</span>
  socketDic<span class="token punctuation">[</span>_playerID<span class="token punctuation">]</span> <span class="token operator">=</span> socket<span class="token punctuation">;</span>

  <span class="token function">addSocketListener</span><span class="token punctuation">(</span>socket<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`,V,x,we,X,b,at=`<code class="language-undefined">function addSocketListener(socket) &#123;
    socket.on(&#39;data&#39;, (data) =&gt; &#123;
        let _playerID = socket.id;
        decodeData(data, _playerID);
    &#125;);
    socket.on(&#39;error&#39;, (error) =&gt; &#123;
        //player disconnect
        console.log(error);
    &#125;);
&#125;</code>`,Z,j,_e,$,E,nt=`<code class="language-undefined">//send to a specific player
function send(playerID, cmd, data) &#123;
    if (!mIsGaming) return;
    const _dataBuffer = encodeData(cmd, data);
    if (_dataBuffer) socketDic[playerID].write(_dataBuffer);
&#125;
//send to all players
function broadcast(cmd, data) &#123;
    if (!mIsGaming) return;
    const _dataBuffer = encodeData(cmd, data);
    if (_dataBuffer) &#123;
        let _keyArr = Object.keys(socketDic);
        for (let i = 0; i &lt; _keyArr.length; i++) &#123;
            let _socket = socketDic[_keyArr[i]];
            _socket.write(_dataBuffer);
        &#125;
    &#125;
&#125;</code>`,ee,y,be,I,Ee,Ie,te,ae,ne,B,ge,se,M,Pe,oe,S,De,ie,q,Te,le,L,O,Ae,re,H,xe;return{c(){d=s("h2"),h=s("a"),N=s("span"),ce=c("#"),ue=c("Make a multiplayer card game - Episode 4 | Play cards with other players"),G=r(),g=s("blockquote"),R=s("p"),fe=c(`This section is a milestone in this series of tutorials, and after this
article, there will present a complete multiplayer local online card game.`),Y=r(),P=s("p"),de=c("The key point of this section is how to link multiplayer to play."),F=r(),k=s("h4"),m=s("a"),C=s("span"),he=c("#"),me=c("Almost all changes is on the server side:"),W=r(),D=s("p"),ke=c("We make a server and listen on “connection” event."),z=r(),v=s("pre"),K=r(),T=s("p"),ye=c("Then we generate a player ID and seat number for the player connecting."),Q=r(),w=s("pre"),U=r(),A=s("p"),ve=c(`Back to the “connection” event, we assign some attributes on socket to make a
identification.`),J=r(),_=s("pre"),V=r(),x=s("p"),we=c(`Add event listener to each socket, listen players’ interaction information
through data which cotain the command ID to route different game logic:`),X=r(),b=s("pre"),Z=r(),j=s("p"),_e=c(`the server forwards each player’s messages, which are divided into separate
sending and broadcasting.`),$=r(),E=s("pre"),ee=r(),y=s("p"),be=c(`That’s all the key points in this section, as above present, players can be
connect to a server and play with each other. You can check
`),I=s("a"),Ee=c("episode4 tag"),Ie=c(`
to see the complete code.`),te=r(),ae=s("hr"),ne=r(),B=s("p"),ge=c(`The progress of the project up to this point have make a milestone, will not add
new content to the relevant repo main branch, excluding the subsequent
refactoring to prepare for the involvement of the game engine and framework.`),se=r(),M=s("p"),Pe=c(`The addition of new content will open another branch for development. Like each
episode, a tag will still be added after the chapter ends. You can find the
content of the corresponding chapter through the corresponding tag at any time.`),oe=r(),S=s("p"),De=c(`In order to reflect the simplicity of native nodejs, I chose javascript. But I
have been developing with typescript in the past few years, is not very familiar
with javascript, which I must spend a little bit more time on debugging.`),ie=r(),q=s("p"),Te=c(`The content of the following chapters will expand rapidly. For either the
robustness of development or my proficiency. I will use typescript for new
content development and refactoring in later articles.`),le=r(),L=s("p"),O=s("strong"),Ae=c(`The next episode, as the content list in the first episode, I will add game
engine Cocos Creator, before which I will make a refactory, besides move
javascript to typescript, but something about modularity.`),re=r(),H=s("p"),xe=c(`Thanks for your reading, and discussion is always welcome, I am very glad to
talk with you in below comment section😊.`),this.h()},l(e){d=o(e,"H2",{id:!0});var a=i(d);h=o(a,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Me=i(h);N=o(Me,"SPAN",{});var Se=i(N);ce=u(Se,"#"),Se.forEach(t),Me.forEach(t),ue=u(a,"Make a multiplayer card game - Episode 4 | Play cards with other players"),a.forEach(t),G=p(e),g=o(e,"BLOCKQUOTE",{});var qe=i(g);R=o(qe,"P",{});var Le=i(R);fe=u(Le,`This section is a milestone in this series of tutorials, and after this
article, there will present a complete multiplayer local online card game.`),Le.forEach(t),qe.forEach(t),Y=p(e),P=o(e,"P",{});var He=i(P);de=u(He,"The key point of this section is how to link multiplayer to play."),He.forEach(t),F=p(e),k=o(e,"H4",{id:!0});var je=i(k);m=o(je,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Ne=i(m);C=o(Ne,"SPAN",{});var Re=i(C);he=u(Re,"#"),Re.forEach(t),Ne.forEach(t),me=u(je,"Almost all changes is on the server side:"),je.forEach(t),W=p(e),D=o(e,"P",{});var Ce=i(D);ke=u(Ce,"We make a server and listen on “connection” event."),Ce.forEach(t),z=p(e),v=o(e,"PRE",{class:!0});var st=i(v);st.forEach(t),K=p(e),T=o(e,"P",{});var Oe=i(T);ye=u(Oe,"Then we generate a player ID and seat number for the player connecting."),Oe.forEach(t),Q=p(e),w=o(e,"PRE",{class:!0});var ot=i(w);ot.forEach(t),U=p(e),A=o(e,"P",{});var Ge=i(A);ve=u(Ge,`Back to the “connection” event, we assign some attributes on socket to make a
identification.`),Ge.forEach(t),J=p(e),_=o(e,"PRE",{class:!0});var it=i(_);it.forEach(t),V=p(e),x=o(e,"P",{});var Ye=i(x);we=u(Ye,`Add event listener to each socket, listen players’ interaction information
through data which cotain the command ID to route different game logic:`),Ye.forEach(t),X=p(e),b=o(e,"PRE",{class:!0});var lt=i(b);lt.forEach(t),Z=p(e),j=o(e,"P",{});var Fe=i(j);_e=u(Fe,`the server forwards each player’s messages, which are divided into separate
sending and broadcasting.`),Fe.forEach(t),$=p(e),E=o(e,"PRE",{class:!0});var rt=i(E);rt.forEach(t),ee=p(e),y=o(e,"P",{});var pe=i(y);be=u(pe,`That’s all the key points in this section, as above present, players can be
connect to a server and play with each other. You can check
`),I=o(pe,"A",{href:!0,rel:!0});var We=i(I);Ee=u(We,"episode4 tag"),We.forEach(t),Ie=u(pe,`
to see the complete code.`),pe.forEach(t),te=p(e),ae=o(e,"HR",{}),ne=p(e),B=o(e,"P",{});var ze=i(B);ge=u(ze,`The progress of the project up to this point have make a milestone, will not add
new content to the relevant repo main branch, excluding the subsequent
refactoring to prepare for the involvement of the game engine and framework.`),ze.forEach(t),se=p(e),M=o(e,"P",{});var Ke=i(M);Pe=u(Ke,`The addition of new content will open another branch for development. Like each
episode, a tag will still be added after the chapter ends. You can find the
content of the corresponding chapter through the corresponding tag at any time.`),Ke.forEach(t),oe=p(e),S=o(e,"P",{});var Qe=i(S);De=u(Qe,`In order to reflect the simplicity of native nodejs, I chose javascript. But I
have been developing with typescript in the past few years, is not very familiar
with javascript, which I must spend a little bit more time on debugging.`),Qe.forEach(t),ie=p(e),q=o(e,"P",{});var Ue=i(q);Te=u(Ue,`The content of the following chapters will expand rapidly. For either the
robustness of development or my proficiency. I will use typescript for new
content development and refactoring in later articles.`),Ue.forEach(t),le=p(e),L=o(e,"P",{});var Je=i(L);O=o(Je,"STRONG",{});var Ve=i(O);Ae=u(Ve,`The next episode, as the content list in the first episode, I will add game
engine Cocos Creator, before which I will make a refactory, besides move
javascript to typescript, but something about modularity.`),Ve.forEach(t),Je.forEach(t),re=p(e),H=o(e,"P",{});var Xe=i(H);xe=u(Xe,`Thanks for your reading, and discussion is always welcome, I am very glad to
talk with you in below comment section😊.`),Xe.forEach(t),this.h()},h(){f(h,"class","heading-link"),f(h,"title","Permalink"),f(h,"aria-hidden","true"),f(h,"href","#make-a-multiplayer-card-game---episode-4--play-cards-with-other-players"),f(d,"id","make-a-multiplayer-card-game---episode-4--play-cards-with-other-players"),f(m,"class","heading-link"),f(m,"title","Permalink"),f(m,"aria-hidden","true"),f(m,"href","#almost-all-changes-is-on-the-server-side"),f(k,"id","almost-all-changes-is-on-the-server-side"),f(v,"class","language-undefined"),f(w,"class","language-undefined"),f(_,"class","language-javascript"),f(b,"class","language-undefined"),f(E,"class","language-undefined"),f(I,"href","https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode4"),f(I,"rel","nofollow")},m(e,a){n(e,d,a),l(d,h),l(h,N),l(N,ce),l(d,ue),n(e,G,a),n(e,g,a),l(g,R),l(R,fe),n(e,Y,a),n(e,P,a),l(P,de),n(e,F,a),n(e,k,a),l(k,m),l(m,C),l(C,he),l(k,me),n(e,W,a),n(e,D,a),l(D,ke),n(e,z,a),n(e,v,a),v.innerHTML=$e,n(e,K,a),n(e,T,a),l(T,ye),n(e,Q,a),n(e,w,a),w.innerHTML=et,n(e,U,a),n(e,A,a),l(A,ve),n(e,J,a),n(e,_,a),_.innerHTML=tt,n(e,V,a),n(e,x,a),l(x,we),n(e,X,a),n(e,b,a),b.innerHTML=at,n(e,Z,a),n(e,j,a),l(j,_e),n(e,$,a),n(e,E,a),E.innerHTML=nt,n(e,ee,a),n(e,y,a),l(y,be),l(y,I),l(I,Ee),l(y,Ie),n(e,te,a),n(e,ae,a),n(e,ne,a),n(e,B,a),l(B,ge),n(e,se,a),n(e,M,a),l(M,Pe),n(e,oe,a),n(e,S,a),l(S,De),n(e,ie,a),n(e,q,a),l(q,Te),n(e,le,a),n(e,L,a),l(L,O),l(O,Ae),n(e,re,a),n(e,H,a),l(H,xe)},p:Be,i:Be,o:Be,d(e){e&&t(d),e&&t(G),e&&t(g),e&&t(Y),e&&t(P),e&&t(F),e&&t(k),e&&t(W),e&&t(D),e&&t(z),e&&t(v),e&&t(K),e&&t(T),e&&t(Q),e&&t(w),e&&t(U),e&&t(A),e&&t(J),e&&t(_),e&&t(V),e&&t(x),e&&t(X),e&&t(b),e&&t(Z),e&&t(j),e&&t($),e&&t(E),e&&t(ee),e&&t(y),e&&t(te),e&&t(ae),e&&t(ne),e&&t(B),e&&t(se),e&&t(M),e&&t(oe),e&&t(S),e&&t(ie),e&&t(q),e&&t(le),e&&t(L),e&&t(re),e&&t(H)}}}class ht extends pt{constructor(d){super(),ct(this,d,null,ft,ut,{})}}export{ht as component};
