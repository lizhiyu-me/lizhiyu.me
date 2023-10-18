import{S as Fa,i as Ja,s as Ka,k as s,q as a,a as u,l as i,m as d,r as l,h as t,c as n,n as p,b as f,G as o,M as Wo}from"../chunks/index.8378de51.js";function Qa(Ma){let c,b,ue,St,yt,Ne,U,k,Lt,O,Pt,Dt,Me,W,gt,Re,F,A,jt,N,kt,Ot,Te,v,At,M,Nt,Mt,Ie,w,E,Rt,ne,Tt,It,pe,Bt,qt,zt,S,xt,ce,Gt,Yt,R,Ht,Be,_,Ut,_e,Wt,Ft,me,Jt,Kt,qe,J,Qt,ze,y,Zt,be,Vt,Xt,xe,L,$t,Ee,eo,to,Ge,K,oo,Ye,P,ao,he,lo,ro,He,T,Ra='<code class="language-undefined">syntax = &quot;proto3&quot;;</code>',Ue,Q,so,We,Z,io,Fe,I,Ta=`<code class="language-undefined">enum Cmd&#123;
    NONE = 0;
    READY_C2S = 1;
    DEALCARDS_S2C = 2;
    COMPETEFORLANDLORDROLE_C2S = 3;
    PLAYTURN_S2C = 4;
    PLAYCARDS_C2S = 5;
    PLAYCARDS_S2C = 6;
    ILLEGALCARDS_S2C = 7;
    GAMEEND_S2C = 8;
&#125;</code>`,Je,V,fo,Ke,X,uo,Qe,B,Ia=`<code class="language-undefined">message MainMessage&#123;
    uint32 cmd_id = 1;
    bytes data =2;
&#125;</code>`,Ze,$,no,Ve,ee,po,Xe,q,Ba=`<code class="language-undefined">message DealCards_S2C&#123;
    repeated uint32 cards = 1;
    uint32 seat_number = 2;
&#125;</code>`,$e,D,co,Ce,_o,mo,et,te,bo,tt,g,z,ve,Eo,ho,we,Co,vo,x,Se,wo,So,ye,yo,ot,m,Lo,Le,Po,Do,Pe,go,jo,at,oe,ko,lt,ae,Oo,rt,G,qa=`<code class="language-undefined">function encodeData(cmd, data) &#123;
    let _proto_struct_obj;
    switch (cmd) &#123;
        case card_game_pb.Cmd.DEALCARDS_S2C:
            _proto_struct_obj = new card_game_pb.DealCards_S2C();
            _proto_struct_obj.setCardsList(data.cards);
            _proto_struct_obj.setSeatNumber(data.seatNumber);
            break;
        case card_game_pb.Cmd.PLAYCARDS_S2C:
            _proto_struct_obj = new card_game_pb.PlayCards_S2C();
            _proto_struct_obj.setCardsList(data.cards);
            _proto_struct_obj.setSeatNumber(data.seatNumber);
            break;
        case card_game_pb.Cmd.ILLEGALCARDS_S2C:
            _proto_struct_obj = new card_game_pb.IllegalCards_S2C();
            _proto_struct_obj.setSeatNumber(data.seatNumber);
            break;
        case card_game_pb.Cmd.GAMEEND_S2C:
            _proto_struct_obj = new card_game_pb.GameEnd_S2C();
            _proto_struct_obj.setSeatNumber(data.seatNumber);
            break;
        case card_game_pb.Cmd.PLAYTURN_S2C:
            _proto_struct_obj = new card_game_pb.PlayTurn_S2C();
            _proto_struct_obj.setHandCardsList(data.handCards);
            _proto_struct_obj.setSeatNumber(data.seatNumber);
            break;
        default:
            console.log(&quot;no message matched.&quot;)
    &#125;
    if (_proto_struct_obj) &#123;
        let _mainMsg = new card_game_pb.MainMessage();
        _mainMsg.setCmdId(cmd);
        let _data = _proto_struct_obj.serializeBinary();
        _mainMsg.setData(_data);
        let _completeData = _mainMsg.serializeBinary();
        return _completeData;
    &#125;
    return null;
&#125;</code>`,st,le,Ao,it,Y,za=`<code class="language-undefined">function decodeData(buffer) &#123;
    let _mainMsg = card_game_pb.MainMessage.deserializeBinary(buffer);
    let _cmd = _mainMsg.getCmdId();
    let _bytesData = _mainMsg.getData();
    let _data;
    switch (_cmd) &#123;
        case card_game_pb.Cmd.READY_C2S:
            _data = card_game_pb.Ready_C2S.deserializeBinary(_bytesData);
            _data = &#123;
                seatNumber: _data.getSeatNumber()
            &#125;
            if (_this.ready_C2S) _this.ready_C2S(_data);
            break;
        case card_game_pb.Cmd.PLAYCARDS_C2S:
            _data = card_game_pb.PlayCards_C2S.deserializeBinary(_bytesData);
            _data = &#123;
                cards: _data.getCardsList(),
                seatNumber: _data.getSeatNumber()
            &#125;
            if (_this.playCards_C2S) _this.playCards_C2S(_data);
            break;
        case card_game_pb.Cmd.COMPETEFORLANDLORDROLE_C2S:
            _data = card_game_pb.CompeteForLandLordRole_C2S.deserializeBinary(_bytesData);
            _data = &#123;
                score: _data.getScore(),
                seatNumber: _data.getSeatNumber()
            &#125;
            if (_this.competeForLandLordRole_C2S) _this.competeForLandLordRole_C2S(_data);
            break;
        default:
            console.log(&quot;no message matched.&quot;)
    &#125;
&#125;</code>`,dt,j,De,No,Mo,H,h,Ro,ge,To,Io,je,Bo,qo,zo,C,xo,ke,Go,Yo,Oe,Ho,Uo;return{c(){c=s("h2"),b=s("a"),ue=s("span"),St=a("#"),yt=a("Make a multiplayer card game - Episode 3 | Change JSON to Protocol Buffers"),Ne=u(),U=s("blockquote"),k=s("p"),Lt=a(`Protocol buffers are a language-neutral, platform-neutral extensible mechanism
for serializing structured data. It has many advantages such as “Lesser in
Size and Better in Performance”, like this article
`),O=s("a"),Pt=a("Why Google moved from JSON to Protocol Buffers?"),Dt=a(`
introduce.`),Me=u(),W=s("p"),gt=a(`I used it on all the projects I’ve worked on over the years. Besides the better
performance, what make me impressed is that the clean communication between
client and server with protocol buffers.`),Re=u(),F=s("blockquote"),A=s("p"),jt=a(`You can clone
`),N=s("a"),kt=a("demo for episode3"),Ot=a(`
which including all the bellow content.`),Te=u(),v=s("p"),At=a(`According to the
`),M=s("a"),Nt=a("official tutorial"),Mt=a(`, two steps
should be done:`),Ie=u(),w=s("ol"),E=s("li"),Rt=a("Install the runtime library "),ne=s("code"),Tt=a("google-protobuf"),It=a(":"),pe=s("code"),Bt=a(`npm install
google-protobuf`),qt=a("."),zt=u(),S=s("li"),xt=a("Get the Protocol Compiler "),ce=s("code"),Gt=a("protoc"),Yt=a(`: download from
`),R=s("a"),Ht=a("https://github.com/protocolbuffers/protobuf/releases"),Be=u(),_=s("p"),Ut=a("Then run a command like "),_e=s("code"),Wt=a(`protoc —js_out=import_style=commonjs,binary:.
messages.proto base.proto`),Ft=a(", you can get the "),me=s("code"),Jt=a(".js"),Kt=a(" file from"),qe=u(),J=s("code"),Qt=a(".proto"),ze=a(`.
`),y=s("p"),Zt=a("When the "),be=s("code"),Vt=a(".js"),Xt=a(` file generated, the protocol buffers environment is
ready.`),xe=u(),L=s("p"),$t=a("Back to our game, we should create a "),Ee=s("code"),eo=a(".proto"),to=a(" file, named"),Ge=u(),K=s("code"),oo=a("card-game.proto"),Ye=a(`.
`),P=s("p"),ao=a("The first line in "),he=s("code"),lo=a(".proto"),ro=a(" file should be:"),He=u(),T=s("pre"),Ue=u(),Q=s("p"),so=a("which means which version of Protobuf we are using."),We=u(),Z=s("p"),io=a("Define the enum of Cmd:"),Fe=u(),I=s("pre"),Je=u(),V=s("p"),fo=a("enum Cmd is for routing, will be introduced later."),Ke=u(),X=s("p"),uo=a("Define MainMessage message:"),Qe=u(),B=s("pre"),Ze=u(),$=s("p"),no=a(`In order to encapsulate the header and data body, we should assign serialized
message to the data attribute.`),Ve=u(),ee=s("p"),po=a("Define data message like:"),Xe=u(),q=s("pre"),$e=u(),D=s("p"),co=a("Then, generate our own "),Ce=s("code"),_o=a(".js"),mo=a(" file."),et=u(),te=s("p"),bo=a("As the episode3 demo show, run command bellow in directory proto."),tt=u(),g=s("ul"),z=s("li"),ve=s("p"),Eo=a("Windows"),ho=u(),we=s("code"),Co=a(`.\\protoc.exe --js_out=import_style=commonjs,binary:out
card-game.proto`),vo=u(),x=s("li"),Se=s("p"),wo=a("MacOS"),So=u(),ye=s("code"),yo=a(`./protoc --js_out=import_style=commonjs,binary:out
card-game.proto`),ot=u(),m=s("p"),Lo=a("Now, we have our own "),Le=s("code"),Po=a(".js"),Do=a(" file from the "),Pe=s("code"),go=a(".proto"),jo=a(` in which
we define message.`),at=u(),oe=s("p"),ko=a("Let’s encoding and decoding message with protocol buffers."),lt=u(),ae=s("p"),Oo=a("Encoding: >enum Cmd is used to map message type here"),rt=u(),G=s("pre"),st=u(),le=s("p"),Ao=a("Decoding: >enum Cmd is used to map message type here"),it=u(),Y=s("pre"),dt=u(),j=s("blockquote"),De=s("p"),No=a("Caution:"),Mo=u(),H=s("ol"),h=s("li"),Ro=a("Attributes defined as "),ge=s("strong"),To=a("seat_number"),Io=a(" in "),je=s("code"),Bo=a(".proto"),qo=a(` file should be
call like getSeatNumber and setSeatNumebr.`),zo=u(),C=s("li"),xo=a("Attributes defined as "),ke=s("strong"),Go=a("repeated"),Yo=a(" type in "),Oe=s("code"),Ho=a(".proto"),Uo=a(` should call
getAttributeNameList and setAttributeList instead of the attribute self
name.`),this.h()},l(e){c=i(e,"H2",{id:!0});var r=d(c);b=i(r,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Fo=d(b);ue=i(Fo,"SPAN",{});var Jo=d(ue);St=l(Jo,"#"),Jo.forEach(t),Fo.forEach(t),yt=l(r,"Make a multiplayer card game - Episode 3 | Change JSON to Protocol Buffers"),r.forEach(t),Ne=n(e),U=i(e,"BLOCKQUOTE",{});var Ko=d(U);k=i(Ko,"P",{});var ft=d(k);Lt=l(ft,`Protocol buffers are a language-neutral, platform-neutral extensible mechanism
for serializing structured data. It has many advantages such as “Lesser in
Size and Better in Performance”, like this article
`),O=i(ft,"A",{href:!0,rel:!0});var Qo=d(O);Pt=l(Qo,"Why Google moved from JSON to Protocol Buffers?"),Qo.forEach(t),Dt=l(ft,`
introduce.`),ft.forEach(t),Ko.forEach(t),Me=n(e),W=i(e,"P",{});var Zo=d(W);gt=l(Zo,`I used it on all the projects I’ve worked on over the years. Besides the better
performance, what make me impressed is that the clean communication between
client and server with protocol buffers.`),Zo.forEach(t),Re=n(e),F=i(e,"BLOCKQUOTE",{});var Vo=d(F);A=i(Vo,"P",{});var ut=d(A);jt=l(ut,`You can clone
`),N=i(ut,"A",{href:!0,rel:!0});var Xo=d(N);kt=l(Xo,"demo for episode3"),Xo.forEach(t),Ot=l(ut,`
which including all the bellow content.`),ut.forEach(t),Vo.forEach(t),Te=n(e),v=i(e,"P",{});var nt=d(v);At=l(nt,`According to the
`),M=i(nt,"A",{href:!0,rel:!0});var $o=d(M);Nt=l($o,"official tutorial"),$o.forEach(t),Mt=l(nt,`, two steps
should be done:`),nt.forEach(t),Ie=n(e),w=i(e,"OL",{});var pt=d(w);E=i(pt,"LI",{});var re=d(E);Rt=l(re,"Install the runtime library "),ne=i(re,"CODE",{});var ea=d(ne);Tt=l(ea,"google-protobuf"),ea.forEach(t),It=l(re,":"),pe=i(re,"CODE",{});var ta=d(pe);Bt=l(ta,`npm install
google-protobuf`),ta.forEach(t),qt=l(re,"."),re.forEach(t),zt=n(pt),S=i(pt,"LI",{});var Ae=d(S);xt=l(Ae,"Get the Protocol Compiler "),ce=i(Ae,"CODE",{});var oa=d(ce);Gt=l(oa,"protoc"),oa.forEach(t),Yt=l(Ae,`: download from
`),R=i(Ae,"A",{href:!0,rel:!0});var aa=d(R);Ht=l(aa,"https://github.com/protocolbuffers/protobuf/releases"),aa.forEach(t),Ae.forEach(t),pt.forEach(t),Be=n(e),_=i(e,"P",{});var se=d(_);Ut=l(se,"Then run a command like "),_e=i(se,"CODE",{});var la=d(_e);Wt=l(la,`protoc —js_out=import_style=commonjs,binary:.
messages.proto base.proto`),la.forEach(t),Ft=l(se,", you can get the "),me=i(se,"CODE",{});var ra=d(me);Jt=l(ra,".js"),ra.forEach(t),Kt=l(se," file from"),se.forEach(t),qe=n(e),J=i(e,"CODE",{});var sa=d(J);Qt=l(sa,".proto"),sa.forEach(t),ze=l(e,`.
`),y=i(e,"P",{});var ct=d(y);Zt=l(ct,"When the "),be=i(ct,"CODE",{});var ia=d(be);Vt=l(ia,".js"),ia.forEach(t),Xt=l(ct,` file generated, the protocol buffers environment is
ready.`),ct.forEach(t),xe=n(e),L=i(e,"P",{});var _t=d(L);$t=l(_t,"Back to our game, we should create a "),Ee=i(_t,"CODE",{});var da=d(Ee);eo=l(da,".proto"),da.forEach(t),to=l(_t," file, named"),_t.forEach(t),Ge=n(e),K=i(e,"CODE",{});var fa=d(K);oo=l(fa,"card-game.proto"),fa.forEach(t),Ye=l(e,`.
`),P=i(e,"P",{});var mt=d(P);ao=l(mt,"The first line in "),he=i(mt,"CODE",{});var ua=d(he);lo=l(ua,".proto"),ua.forEach(t),ro=l(mt," file should be:"),mt.forEach(t),He=n(e),T=i(e,"PRE",{class:!0});var xa=d(T);xa.forEach(t),Ue=n(e),Q=i(e,"P",{});var na=d(Q);so=l(na,"which means which version of Protobuf we are using."),na.forEach(t),We=n(e),Z=i(e,"P",{});var pa=d(Z);io=l(pa,"Define the enum of Cmd:"),pa.forEach(t),Fe=n(e),I=i(e,"PRE",{class:!0});var Ga=d(I);Ga.forEach(t),Je=n(e),V=i(e,"P",{});var ca=d(V);fo=l(ca,"enum Cmd is for routing, will be introduced later."),ca.forEach(t),Ke=n(e),X=i(e,"P",{});var _a=d(X);uo=l(_a,"Define MainMessage message:"),_a.forEach(t),Qe=n(e),B=i(e,"PRE",{class:!0});var Ya=d(B);Ya.forEach(t),Ze=n(e),$=i(e,"P",{});var ma=d($);no=l(ma,`In order to encapsulate the header and data body, we should assign serialized
message to the data attribute.`),ma.forEach(t),Ve=n(e),ee=i(e,"P",{});var ba=d(ee);po=l(ba,"Define data message like:"),ba.forEach(t),Xe=n(e),q=i(e,"PRE",{class:!0});var Ha=d(q);Ha.forEach(t),$e=n(e),D=i(e,"P",{});var bt=d(D);co=l(bt,"Then, generate our own "),Ce=i(bt,"CODE",{});var Ea=d(Ce);_o=l(Ea,".js"),Ea.forEach(t),mo=l(bt," file."),bt.forEach(t),et=n(e),te=i(e,"P",{});var ha=d(te);bo=l(ha,"As the episode3 demo show, run command bellow in directory proto."),ha.forEach(t),tt=n(e),g=i(e,"UL",{});var Et=d(g);z=i(Et,"LI",{});var ht=d(z);ve=i(ht,"P",{});var Ca=d(ve);Eo=l(Ca,"Windows"),Ca.forEach(t),ho=n(ht),we=i(ht,"CODE",{});var va=d(we);Co=l(va,`.\\protoc.exe --js_out=import_style=commonjs,binary:out
card-game.proto`),va.forEach(t),ht.forEach(t),vo=n(Et),x=i(Et,"LI",{});var Ct=d(x);Se=i(Ct,"P",{});var wa=d(Se);wo=l(wa,"MacOS"),wa.forEach(t),So=n(Ct),ye=i(Ct,"CODE",{});var Sa=d(ye);yo=l(Sa,`./protoc --js_out=import_style=commonjs,binary:out
card-game.proto`),Sa.forEach(t),Ct.forEach(t),Et.forEach(t),ot=n(e),m=i(e,"P",{});var ie=d(m);Lo=l(ie,"Now, we have our own "),Le=i(ie,"CODE",{});var ya=d(Le);Po=l(ya,".js"),ya.forEach(t),Do=l(ie," file from the "),Pe=i(ie,"CODE",{});var La=d(Pe);go=l(La,".proto"),La.forEach(t),jo=l(ie,` in which
we define message.`),ie.forEach(t),at=n(e),oe=i(e,"P",{});var Pa=d(oe);ko=l(Pa,"Let’s encoding and decoding message with protocol buffers."),Pa.forEach(t),lt=n(e),ae=i(e,"P",{});var Da=d(ae);Oo=l(Da,"Encoding: >enum Cmd is used to map message type here"),Da.forEach(t),rt=n(e),G=i(e,"PRE",{class:!0});var Ua=d(G);Ua.forEach(t),st=n(e),le=i(e,"P",{});var ga=d(le);Ao=l(ga,"Decoding: >enum Cmd is used to map message type here"),ga.forEach(t),it=n(e),Y=i(e,"PRE",{class:!0});var Wa=d(Y);Wa.forEach(t),dt=n(e),j=i(e,"BLOCKQUOTE",{});var vt=d(j);De=i(vt,"P",{});var ja=d(De);No=l(ja,"Caution:"),ja.forEach(t),Mo=n(vt),H=i(vt,"OL",{});var wt=d(H);h=i(wt,"LI",{});var de=d(h);Ro=l(de,"Attributes defined as "),ge=i(de,"STRONG",{});var ka=d(ge);To=l(ka,"seat_number"),ka.forEach(t),Io=l(de," in "),je=i(de,"CODE",{});var Oa=d(je);Bo=l(Oa,".proto"),Oa.forEach(t),qo=l(de,` file should be
call like getSeatNumber and setSeatNumebr.`),de.forEach(t),zo=n(wt),C=i(wt,"LI",{});var fe=d(C);xo=l(fe,"Attributes defined as "),ke=i(fe,"STRONG",{});var Aa=d(ke);Go=l(Aa,"repeated"),Aa.forEach(t),Yo=l(fe," type in "),Oe=i(fe,"CODE",{});var Na=d(Oe);Ho=l(Na,".proto"),Na.forEach(t),Uo=l(fe,` should call
getAttributeNameList and setAttributeList instead of the attribute self
name.`),fe.forEach(t),wt.forEach(t),vt.forEach(t),this.h()},h(){p(b,"class","heading-link"),p(b,"title","Permalink"),p(b,"aria-hidden","true"),p(b,"href","#make-a-multiplayer-card-game---episode-3--change-json-to-protocol-buffers"),p(c,"id","make-a-multiplayer-card-game---episode-3--change-json-to-protocol-buffers"),p(O,"href","https://anuragthakur.hashnode.dev/protobuf-why-google-moved-from-json-to-protocol-buffers-ckdxb8sgi03kdjas17ril3fbi"),p(O,"rel","nofollow"),p(N,"href","https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode3"),p(N,"rel","nofollow"),p(M,"href","https://github.com/protocolbuffers/protobuf"),p(M,"rel","nofollow"),p(R,"href","https://github.com/protocolbuffers/protobuf/releases"),p(R,"rel","nofollow"),p(T,"class","language-undefined"),p(I,"class","language-undefined"),p(B,"class","language-undefined"),p(q,"class","language-undefined"),p(G,"class","language-undefined"),p(Y,"class","language-undefined")},m(e,r){f(e,c,r),o(c,b),o(b,ue),o(ue,St),o(c,yt),f(e,Ne,r),f(e,U,r),o(U,k),o(k,Lt),o(k,O),o(O,Pt),o(k,Dt),f(e,Me,r),f(e,W,r),o(W,gt),f(e,Re,r),f(e,F,r),o(F,A),o(A,jt),o(A,N),o(N,kt),o(A,Ot),f(e,Te,r),f(e,v,r),o(v,At),o(v,M),o(M,Nt),o(v,Mt),f(e,Ie,r),f(e,w,r),o(w,E),o(E,Rt),o(E,ne),o(ne,Tt),o(E,It),o(E,pe),o(pe,Bt),o(E,qt),o(w,zt),o(w,S),o(S,xt),o(S,ce),o(ce,Gt),o(S,Yt),o(S,R),o(R,Ht),f(e,Be,r),f(e,_,r),o(_,Ut),o(_,_e),o(_e,Wt),o(_,Ft),o(_,me),o(me,Jt),o(_,Kt),f(e,qe,r),f(e,J,r),o(J,Qt),f(e,ze,r),f(e,y,r),o(y,Zt),o(y,be),o(be,Vt),o(y,Xt),f(e,xe,r),f(e,L,r),o(L,$t),o(L,Ee),o(Ee,eo),o(L,to),f(e,Ge,r),f(e,K,r),o(K,oo),f(e,Ye,r),f(e,P,r),o(P,ao),o(P,he),o(he,lo),o(P,ro),f(e,He,r),f(e,T,r),T.innerHTML=Ra,f(e,Ue,r),f(e,Q,r),o(Q,so),f(e,We,r),f(e,Z,r),o(Z,io),f(e,Fe,r),f(e,I,r),I.innerHTML=Ta,f(e,Je,r),f(e,V,r),o(V,fo),f(e,Ke,r),f(e,X,r),o(X,uo),f(e,Qe,r),f(e,B,r),B.innerHTML=Ia,f(e,Ze,r),f(e,$,r),o($,no),f(e,Ve,r),f(e,ee,r),o(ee,po),f(e,Xe,r),f(e,q,r),q.innerHTML=Ba,f(e,$e,r),f(e,D,r),o(D,co),o(D,Ce),o(Ce,_o),o(D,mo),f(e,et,r),f(e,te,r),o(te,bo),f(e,tt,r),f(e,g,r),o(g,z),o(z,ve),o(ve,Eo),o(z,ho),o(z,we),o(we,Co),o(g,vo),o(g,x),o(x,Se),o(Se,wo),o(x,So),o(x,ye),o(ye,yo),f(e,ot,r),f(e,m,r),o(m,Lo),o(m,Le),o(Le,Po),o(m,Do),o(m,Pe),o(Pe,go),o(m,jo),f(e,at,r),f(e,oe,r),o(oe,ko),f(e,lt,r),f(e,ae,r),o(ae,Oo),f(e,rt,r),f(e,G,r),G.innerHTML=qa,f(e,st,r),f(e,le,r),o(le,Ao),f(e,it,r),f(e,Y,r),Y.innerHTML=za,f(e,dt,r),f(e,j,r),o(j,De),o(De,No),o(j,Mo),o(j,H),o(H,h),o(h,Ro),o(h,ge),o(ge,To),o(h,Io),o(h,je),o(je,Bo),o(h,qo),o(H,zo),o(H,C),o(C,xo),o(C,ke),o(ke,Go),o(C,Yo),o(C,Oe),o(Oe,Ho),o(C,Uo)},p:Wo,i:Wo,o:Wo,d(e){e&&t(c),e&&t(Ne),e&&t(U),e&&t(Me),e&&t(W),e&&t(Re),e&&t(F),e&&t(Te),e&&t(v),e&&t(Ie),e&&t(w),e&&t(Be),e&&t(_),e&&t(qe),e&&t(J),e&&t(ze),e&&t(y),e&&t(xe),e&&t(L),e&&t(Ge),e&&t(K),e&&t(Ye),e&&t(P),e&&t(He),e&&t(T),e&&t(Ue),e&&t(Q),e&&t(We),e&&t(Z),e&&t(Fe),e&&t(I),e&&t(Je),e&&t(V),e&&t(Ke),e&&t(X),e&&t(Qe),e&&t(B),e&&t(Ze),e&&t($),e&&t(Ve),e&&t(ee),e&&t(Xe),e&&t(q),e&&t($e),e&&t(D),e&&t(et),e&&t(te),e&&t(tt),e&&t(g),e&&t(ot),e&&t(m),e&&t(at),e&&t(oe),e&&t(lt),e&&t(ae),e&&t(rt),e&&t(G),e&&t(st),e&&t(le),e&&t(it),e&&t(Y),e&&t(dt),e&&t(j)}}}const Va={title:"Make a multiplayer card game - Episode 3",slug:"change-json-to-protocol-buffers-e3",coverImage:"/images/posts/blog-posts.jpg",date:"2021-02-22T21:55:15.361Z",excerpt:"Change JSON to Protocol Buffers",tags:["Tutorial:Make a multiplayer card game"]};class Xa extends Fa{constructor(c){super(),Ja(this,c,null,Qa,Ka,{})}}export{Xa as default,Va as metadata};
