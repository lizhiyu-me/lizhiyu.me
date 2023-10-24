import{S as Fa,i as Ja,s as Ka,k as s,q as a,a as n,l as i,m as d,r as l,h as t,c as u,n as p,b as f,G as o,M as Wo}from"../chunks/index.039744db.js";function Qa(Ma){let _,b,ne,St,yt,Ne,U,A,Lt,O,Dt,Pt,Me,W,jt,Re,F,g,kt,N,At,Ot,Te,v,gt,M,Nt,Mt,Ie,w,E,Rt,ue,Tt,It,pe,Bt,qt,zt,S,Gt,_e,xt,Yt,R,Ht,Be,c,Ut,ce,Wt,Ft,me,Jt,Kt,qe,J,Qt,ze,y,Vt,be,Xt,Zt,Ge,L,$t,Ee,eo,to,xe,K,oo,Ye,D,ao,Ce,lo,ro,He,T,Ra='<code class="language-undefined">syntax = &quot;proto3&quot;;</code>',Ue,Q,so,We,V,io,Fe,I,Ta=`<code class="language-undefined">enum Cmd&#123;
    NONE = 0;
    READY_C2S = 1;
    DEALCARDS_S2C = 2;
    COMPETEFORLANDLORDROLE_C2S = 3;
    PLAYTURN_S2C = 4;
    PLAYCARDS_C2S = 5;
    PLAYCARDS_S2C = 6;
    ILLEGALCARDS_S2C = 7;
    GAMEEND_S2C = 8;
&#125;</code>`,Je,X,fo,Ke,Z,no,Qe,B,Ia=`<code class="language-undefined">message MainMessage&#123;
    uint32 cmd_id = 1;
    bytes data =2;
&#125;</code>`,Ve,$,uo,Xe,ee,po,Ze,q,Ba=`<code class="language-undefined">message DealCards_S2C&#123;
    repeated uint32 cards = 1;
    uint32 seat_number = 2;
&#125;</code>`,$e,P,_o,he,co,mo,et,te,bo,tt,j,z,ve,Eo,Co,we,ho,vo,G,Se,wo,So,ye,yo,ot,m,Lo,Le,Do,Po,De,jo,ko,at,oe,Ao,lt,ae,Oo,rt,x,qa=`<code class="language-undefined">function encodeData(cmd, data) &#123;
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
&#125;</code>`,st,le,go,it,Y,za=`<code class="language-undefined">function decodeData(buffer) &#123;
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
&#125;</code>`,dt,k,Pe,No,Mo,H,C,Ro,je,To,Io,ke,Bo,qo,zo,h,Go,Ae,xo,Yo,Oe,Ho,Uo;return{c(){_=s("h2"),b=s("a"),ne=s("span"),St=a("#"),yt=a("Make a multiplayer card game - Episode 3 | Change JSON to Protocol Buffers"),Ne=n(),U=s("blockquote"),A=s("p"),Lt=a(`Protocol buffers are a language-neutral, platform-neutral extensible mechanism
for serializing structured data. It has many advantages such as “Lesser in
Size and Better in Performance”, like this article
`),O=s("a"),Dt=a("Why Google moved from JSON to Protocol Buffers?"),Pt=a(`
introduce.`),Me=n(),W=s("p"),jt=a(`I used it on all the projects I’ve worked on over the years. Besides the better
performance, what make me impressed is that the clean communication between
client and server with protocol buffers.`),Re=n(),F=s("blockquote"),g=s("p"),kt=a(`You can clone
`),N=s("a"),At=a("demo for episode3"),Ot=a(`
which including all the bellow content.`),Te=n(),v=s("p"),gt=a(`According to the
`),M=s("a"),Nt=a("official tutorial"),Mt=a(`, two steps
should be done:`),Ie=n(),w=s("ol"),E=s("li"),Rt=a("Install the runtime library "),ue=s("code"),Tt=a("google-protobuf"),It=a(":"),pe=s("code"),Bt=a(`npm install
google-protobuf`),qt=a("."),zt=n(),S=s("li"),Gt=a("Get the Protocol Compiler "),_e=s("code"),xt=a("protoc"),Yt=a(`: download from
`),R=s("a"),Ht=a("https://github.com/protocolbuffers/protobuf/releases"),Be=n(),c=s("p"),Ut=a("Then run a command like "),ce=s("code"),Wt=a(`protoc —js_out=import_style=commonjs,binary:.
messages.proto base.proto`),Ft=a(", you can get the "),me=s("code"),Jt=a(".js"),Kt=a(" file from"),qe=n(),J=s("code"),Qt=a(".proto"),ze=a(`.
`),y=s("p"),Vt=a("When the "),be=s("code"),Xt=a(".js"),Zt=a(` file generated, the protocol buffers environment is
ready.`),Ge=n(),L=s("p"),$t=a("Back to our game, we should create a "),Ee=s("code"),eo=a(".proto"),to=a(" file, named"),xe=n(),K=s("code"),oo=a("card-game.proto"),Ye=a(`.
`),D=s("p"),ao=a("The first line in "),Ce=s("code"),lo=a(".proto"),ro=a(" file should be:"),He=n(),T=s("pre"),Ue=n(),Q=s("p"),so=a("which means which version of Protobuf we are using."),We=n(),V=s("p"),io=a("Define the enum of Cmd:"),Fe=n(),I=s("pre"),Je=n(),X=s("p"),fo=a("enum Cmd is for routing, will be introduced later."),Ke=n(),Z=s("p"),no=a("Define MainMessage message:"),Qe=n(),B=s("pre"),Ve=n(),$=s("p"),uo=a(`In order to encapsulate the header and data body, we should assign serialized
message to the data attribute.`),Xe=n(),ee=s("p"),po=a("Define data message like:"),Ze=n(),q=s("pre"),$e=n(),P=s("p"),_o=a("Then, generate our own "),he=s("code"),co=a(".js"),mo=a(" file."),et=n(),te=s("p"),bo=a("As the episode3 demo show, run command bellow in directory proto."),tt=n(),j=s("ul"),z=s("li"),ve=s("p"),Eo=a("Windows"),Co=n(),we=s("code"),ho=a(`.\\protoc.exe --js_out=import_style=commonjs,binary:out
card-game.proto`),vo=n(),G=s("li"),Se=s("p"),wo=a("MacOS"),So=n(),ye=s("code"),yo=a(`./protoc --js_out=import_style=commonjs,binary:out
card-game.proto`),ot=n(),m=s("p"),Lo=a("Now, we have our own "),Le=s("code"),Do=a(".js"),Po=a(" file from the "),De=s("code"),jo=a(".proto"),ko=a(` in which
we define message.`),at=n(),oe=s("p"),Ao=a("Let’s encoding and decoding message with protocol buffers."),lt=n(),ae=s("p"),Oo=a("Encoding: >enum Cmd is used to map message type here"),rt=n(),x=s("pre"),st=n(),le=s("p"),go=a("Decoding: >enum Cmd is used to map message type here"),it=n(),Y=s("pre"),dt=n(),k=s("blockquote"),Pe=s("p"),No=a("Caution:"),Mo=n(),H=s("ol"),C=s("li"),Ro=a("Attributes defined as "),je=s("strong"),To=a("seat_number"),Io=a(" in "),ke=s("code"),Bo=a(".proto"),qo=a(` file should be
call like getSeatNumber and setSeatNumebr.`),zo=n(),h=s("li"),Go=a("Attributes defined as "),Ae=s("strong"),xo=a("repeated"),Yo=a(" type in "),Oe=s("code"),Ho=a(".proto"),Uo=a(` should call
getAttributeNameList and setAttributeList instead of the attribute self
name.`),this.h()},l(e){_=i(e,"H2",{id:!0});var r=d(_);b=i(r,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Fo=d(b);ne=i(Fo,"SPAN",{});var Jo=d(ne);St=l(Jo,"#"),Jo.forEach(t),Fo.forEach(t),yt=l(r,"Make a multiplayer card game - Episode 3 | Change JSON to Protocol Buffers"),r.forEach(t),Ne=u(e),U=i(e,"BLOCKQUOTE",{});var Ko=d(U);A=i(Ko,"P",{});var ft=d(A);Lt=l(ft,`Protocol buffers are a language-neutral, platform-neutral extensible mechanism
for serializing structured data. It has many advantages such as “Lesser in
Size and Better in Performance”, like this article
`),O=i(ft,"A",{href:!0,rel:!0});var Qo=d(O);Dt=l(Qo,"Why Google moved from JSON to Protocol Buffers?"),Qo.forEach(t),Pt=l(ft,`
introduce.`),ft.forEach(t),Ko.forEach(t),Me=u(e),W=i(e,"P",{});var Vo=d(W);jt=l(Vo,`I used it on all the projects I’ve worked on over the years. Besides the better
performance, what make me impressed is that the clean communication between
client and server with protocol buffers.`),Vo.forEach(t),Re=u(e),F=i(e,"BLOCKQUOTE",{});var Xo=d(F);g=i(Xo,"P",{});var nt=d(g);kt=l(nt,`You can clone
`),N=i(nt,"A",{href:!0,rel:!0});var Zo=d(N);At=l(Zo,"demo for episode3"),Zo.forEach(t),Ot=l(nt,`
which including all the bellow content.`),nt.forEach(t),Xo.forEach(t),Te=u(e),v=i(e,"P",{});var ut=d(v);gt=l(ut,`According to the
`),M=i(ut,"A",{href:!0,rel:!0});var $o=d(M);Nt=l($o,"official tutorial"),$o.forEach(t),Mt=l(ut,`, two steps
should be done:`),ut.forEach(t),Ie=u(e),w=i(e,"OL",{});var pt=d(w);E=i(pt,"LI",{});var re=d(E);Rt=l(re,"Install the runtime library "),ue=i(re,"CODE",{});var ea=d(ue);Tt=l(ea,"google-protobuf"),ea.forEach(t),It=l(re,":"),pe=i(re,"CODE",{});var ta=d(pe);Bt=l(ta,`npm install
google-protobuf`),ta.forEach(t),qt=l(re,"."),re.forEach(t),zt=u(pt),S=i(pt,"LI",{});var ge=d(S);Gt=l(ge,"Get the Protocol Compiler "),_e=i(ge,"CODE",{});var oa=d(_e);xt=l(oa,"protoc"),oa.forEach(t),Yt=l(ge,`: download from
`),R=i(ge,"A",{href:!0,rel:!0});var aa=d(R);Ht=l(aa,"https://github.com/protocolbuffers/protobuf/releases"),aa.forEach(t),ge.forEach(t),pt.forEach(t),Be=u(e),c=i(e,"P",{});var se=d(c);Ut=l(se,"Then run a command like "),ce=i(se,"CODE",{});var la=d(ce);Wt=l(la,`protoc —js_out=import_style=commonjs,binary:.
messages.proto base.proto`),la.forEach(t),Ft=l(se,", you can get the "),me=i(se,"CODE",{});var ra=d(me);Jt=l(ra,".js"),ra.forEach(t),Kt=l(se," file from"),se.forEach(t),qe=u(e),J=i(e,"CODE",{});var sa=d(J);Qt=l(sa,".proto"),sa.forEach(t),ze=l(e,`.
`),y=i(e,"P",{});var _t=d(y);Vt=l(_t,"When the "),be=i(_t,"CODE",{});var ia=d(be);Xt=l(ia,".js"),ia.forEach(t),Zt=l(_t,` file generated, the protocol buffers environment is
ready.`),_t.forEach(t),Ge=u(e),L=i(e,"P",{});var ct=d(L);$t=l(ct,"Back to our game, we should create a "),Ee=i(ct,"CODE",{});var da=d(Ee);eo=l(da,".proto"),da.forEach(t),to=l(ct," file, named"),ct.forEach(t),xe=u(e),K=i(e,"CODE",{});var fa=d(K);oo=l(fa,"card-game.proto"),fa.forEach(t),Ye=l(e,`.
`),D=i(e,"P",{});var mt=d(D);ao=l(mt,"The first line in "),Ce=i(mt,"CODE",{});var na=d(Ce);lo=l(na,".proto"),na.forEach(t),ro=l(mt," file should be:"),mt.forEach(t),He=u(e),T=i(e,"PRE",{class:!0});var Ga=d(T);Ga.forEach(t),Ue=u(e),Q=i(e,"P",{});var ua=d(Q);so=l(ua,"which means which version of Protobuf we are using."),ua.forEach(t),We=u(e),V=i(e,"P",{});var pa=d(V);io=l(pa,"Define the enum of Cmd:"),pa.forEach(t),Fe=u(e),I=i(e,"PRE",{class:!0});var xa=d(I);xa.forEach(t),Je=u(e),X=i(e,"P",{});var _a=d(X);fo=l(_a,"enum Cmd is for routing, will be introduced later."),_a.forEach(t),Ke=u(e),Z=i(e,"P",{});var ca=d(Z);no=l(ca,"Define MainMessage message:"),ca.forEach(t),Qe=u(e),B=i(e,"PRE",{class:!0});var Ya=d(B);Ya.forEach(t),Ve=u(e),$=i(e,"P",{});var ma=d($);uo=l(ma,`In order to encapsulate the header and data body, we should assign serialized
message to the data attribute.`),ma.forEach(t),Xe=u(e),ee=i(e,"P",{});var ba=d(ee);po=l(ba,"Define data message like:"),ba.forEach(t),Ze=u(e),q=i(e,"PRE",{class:!0});var Ha=d(q);Ha.forEach(t),$e=u(e),P=i(e,"P",{});var bt=d(P);_o=l(bt,"Then, generate our own "),he=i(bt,"CODE",{});var Ea=d(he);co=l(Ea,".js"),Ea.forEach(t),mo=l(bt," file."),bt.forEach(t),et=u(e),te=i(e,"P",{});var Ca=d(te);bo=l(Ca,"As the episode3 demo show, run command bellow in directory proto."),Ca.forEach(t),tt=u(e),j=i(e,"UL",{});var Et=d(j);z=i(Et,"LI",{});var Ct=d(z);ve=i(Ct,"P",{});var ha=d(ve);Eo=l(ha,"Windows"),ha.forEach(t),Co=u(Ct),we=i(Ct,"CODE",{});var va=d(we);ho=l(va,`.\\protoc.exe --js_out=import_style=commonjs,binary:out
card-game.proto`),va.forEach(t),Ct.forEach(t),vo=u(Et),G=i(Et,"LI",{});var ht=d(G);Se=i(ht,"P",{});var wa=d(Se);wo=l(wa,"MacOS"),wa.forEach(t),So=u(ht),ye=i(ht,"CODE",{});var Sa=d(ye);yo=l(Sa,`./protoc --js_out=import_style=commonjs,binary:out
card-game.proto`),Sa.forEach(t),ht.forEach(t),Et.forEach(t),ot=u(e),m=i(e,"P",{});var ie=d(m);Lo=l(ie,"Now, we have our own "),Le=i(ie,"CODE",{});var ya=d(Le);Do=l(ya,".js"),ya.forEach(t),Po=l(ie," file from the "),De=i(ie,"CODE",{});var La=d(De);jo=l(La,".proto"),La.forEach(t),ko=l(ie,` in which
we define message.`),ie.forEach(t),at=u(e),oe=i(e,"P",{});var Da=d(oe);Ao=l(Da,"Let’s encoding and decoding message with protocol buffers."),Da.forEach(t),lt=u(e),ae=i(e,"P",{});var Pa=d(ae);Oo=l(Pa,"Encoding: >enum Cmd is used to map message type here"),Pa.forEach(t),rt=u(e),x=i(e,"PRE",{class:!0});var Ua=d(x);Ua.forEach(t),st=u(e),le=i(e,"P",{});var ja=d(le);go=l(ja,"Decoding: >enum Cmd is used to map message type here"),ja.forEach(t),it=u(e),Y=i(e,"PRE",{class:!0});var Wa=d(Y);Wa.forEach(t),dt=u(e),k=i(e,"BLOCKQUOTE",{});var vt=d(k);Pe=i(vt,"P",{});var ka=d(Pe);No=l(ka,"Caution:"),ka.forEach(t),Mo=u(vt),H=i(vt,"OL",{});var wt=d(H);C=i(wt,"LI",{});var de=d(C);Ro=l(de,"Attributes defined as "),je=i(de,"STRONG",{});var Aa=d(je);To=l(Aa,"seat_number"),Aa.forEach(t),Io=l(de," in "),ke=i(de,"CODE",{});var Oa=d(ke);Bo=l(Oa,".proto"),Oa.forEach(t),qo=l(de,` file should be
call like getSeatNumber and setSeatNumebr.`),de.forEach(t),zo=u(wt),h=i(wt,"LI",{});var fe=d(h);Go=l(fe,"Attributes defined as "),Ae=i(fe,"STRONG",{});var ga=d(Ae);xo=l(ga,"repeated"),ga.forEach(t),Yo=l(fe," type in "),Oe=i(fe,"CODE",{});var Na=d(Oe);Ho=l(Na,".proto"),Na.forEach(t),Uo=l(fe,` should call
getAttributeNameList and setAttributeList instead of the attribute self
name.`),fe.forEach(t),wt.forEach(t),vt.forEach(t),this.h()},h(){p(b,"class","heading-link"),p(b,"title","Permalink"),p(b,"aria-hidden","true"),p(b,"href","#make-a-multiplayer-card-game---episode-3--change-json-to-protocol-buffers"),p(_,"id","make-a-multiplayer-card-game---episode-3--change-json-to-protocol-buffers"),p(O,"href","https://anuragthakur.hashnode.dev/protobuf-why-google-moved-from-json-to-protocol-buffers-ckdxb8sgi03kdjas17ril3fbi"),p(O,"rel","nofollow"),p(N,"href","https://github.com/lizhiyu-me/Make-a-multiplayer-card-game/tree/episode3"),p(N,"rel","nofollow"),p(M,"href","https://github.com/protocolbuffers/protobuf"),p(M,"rel","nofollow"),p(R,"href","https://github.com/protocolbuffers/protobuf/releases"),p(R,"rel","nofollow"),p(T,"class","language-undefined"),p(I,"class","language-undefined"),p(B,"class","language-undefined"),p(q,"class","language-undefined"),p(x,"class","language-undefined"),p(Y,"class","language-undefined")},m(e,r){f(e,_,r),o(_,b),o(b,ne),o(ne,St),o(_,yt),f(e,Ne,r),f(e,U,r),o(U,A),o(A,Lt),o(A,O),o(O,Dt),o(A,Pt),f(e,Me,r),f(e,W,r),o(W,jt),f(e,Re,r),f(e,F,r),o(F,g),o(g,kt),o(g,N),o(N,At),o(g,Ot),f(e,Te,r),f(e,v,r),o(v,gt),o(v,M),o(M,Nt),o(v,Mt),f(e,Ie,r),f(e,w,r),o(w,E),o(E,Rt),o(E,ue),o(ue,Tt),o(E,It),o(E,pe),o(pe,Bt),o(E,qt),o(w,zt),o(w,S),o(S,Gt),o(S,_e),o(_e,xt),o(S,Yt),o(S,R),o(R,Ht),f(e,Be,r),f(e,c,r),o(c,Ut),o(c,ce),o(ce,Wt),o(c,Ft),o(c,me),o(me,Jt),o(c,Kt),f(e,qe,r),f(e,J,r),o(J,Qt),f(e,ze,r),f(e,y,r),o(y,Vt),o(y,be),o(be,Xt),o(y,Zt),f(e,Ge,r),f(e,L,r),o(L,$t),o(L,Ee),o(Ee,eo),o(L,to),f(e,xe,r),f(e,K,r),o(K,oo),f(e,Ye,r),f(e,D,r),o(D,ao),o(D,Ce),o(Ce,lo),o(D,ro),f(e,He,r),f(e,T,r),T.innerHTML=Ra,f(e,Ue,r),f(e,Q,r),o(Q,so),f(e,We,r),f(e,V,r),o(V,io),f(e,Fe,r),f(e,I,r),I.innerHTML=Ta,f(e,Je,r),f(e,X,r),o(X,fo),f(e,Ke,r),f(e,Z,r),o(Z,no),f(e,Qe,r),f(e,B,r),B.innerHTML=Ia,f(e,Ve,r),f(e,$,r),o($,uo),f(e,Xe,r),f(e,ee,r),o(ee,po),f(e,Ze,r),f(e,q,r),q.innerHTML=Ba,f(e,$e,r),f(e,P,r),o(P,_o),o(P,he),o(he,co),o(P,mo),f(e,et,r),f(e,te,r),o(te,bo),f(e,tt,r),f(e,j,r),o(j,z),o(z,ve),o(ve,Eo),o(z,Co),o(z,we),o(we,ho),o(j,vo),o(j,G),o(G,Se),o(Se,wo),o(G,So),o(G,ye),o(ye,yo),f(e,ot,r),f(e,m,r),o(m,Lo),o(m,Le),o(Le,Do),o(m,Po),o(m,De),o(De,jo),o(m,ko),f(e,at,r),f(e,oe,r),o(oe,Ao),f(e,lt,r),f(e,ae,r),o(ae,Oo),f(e,rt,r),f(e,x,r),x.innerHTML=qa,f(e,st,r),f(e,le,r),o(le,go),f(e,it,r),f(e,Y,r),Y.innerHTML=za,f(e,dt,r),f(e,k,r),o(k,Pe),o(Pe,No),o(k,Mo),o(k,H),o(H,C),o(C,Ro),o(C,je),o(je,To),o(C,Io),o(C,ke),o(ke,Bo),o(C,qo),o(H,zo),o(H,h),o(h,Go),o(h,Ae),o(Ae,xo),o(h,Yo),o(h,Oe),o(Oe,Ho),o(h,Uo)},p:Wo,i:Wo,o:Wo,d(e){e&&t(_),e&&t(Ne),e&&t(U),e&&t(Me),e&&t(W),e&&t(Re),e&&t(F),e&&t(Te),e&&t(v),e&&t(Ie),e&&t(w),e&&t(Be),e&&t(c),e&&t(qe),e&&t(J),e&&t(ze),e&&t(y),e&&t(Ge),e&&t(L),e&&t(xe),e&&t(K),e&&t(Ye),e&&t(D),e&&t(He),e&&t(T),e&&t(Ue),e&&t(Q),e&&t(We),e&&t(V),e&&t(Fe),e&&t(I),e&&t(Je),e&&t(X),e&&t(Ke),e&&t(Z),e&&t(Qe),e&&t(B),e&&t(Ve),e&&t($),e&&t(Xe),e&&t(ee),e&&t(Ze),e&&t(q),e&&t($e),e&&t(P),e&&t(et),e&&t(te),e&&t(tt),e&&t(j),e&&t(ot),e&&t(m),e&&t(at),e&&t(oe),e&&t(lt),e&&t(ae),e&&t(rt),e&&t(x),e&&t(st),e&&t(le),e&&t(it),e&&t(Y),e&&t(dt),e&&t(k)}}}class Xa extends Fa{constructor(_){super(),Ja(this,_,null,Qa,Ka,{})}}export{Xa as component};
