import{S as Ya,i as ja,s as qa,k as s,q as a,a as c,l,m as r,r as i,h as o,c as f,n,b as d,G as t,M as Wo}from"../chunks/index.72d13981.js";function za(Ga){let m,ft,se,ut,pt,xe,F,_,le,mt,vt,Le,$,yt,Ne,I,p,Et,re,_t,bt,ne,kt,wt,he,Tt,Pt,At,b,St,de,Ct,Ht,ce,gt,Ft,Re,D,k,fe,It,Dt,Me,O,Ot,ue,xt,Lt,Ue,x,Nt,pe,Rt,Mt,Be,L,w,me,Ut,Bt,Ge,v,Gt,ve,Yt,jt,ye,qt,zt,Ye,N,T,Ee,Jt,Kt,je,R,Qt,_e,Vt,Wt,qe,M,P,be,Xt,Zt,ze,U,$t,ke,eo,to,Je,B,A,we,oo,ao,Ke,G,io,Te,so,lo,Qe,Y,S,Pe,ro,no,Ve,y,ho,Ae,co,fo,Se,uo,po,We,ee,mo,Xe,j,C,Ce,vo,yo,Ze,q,Eo,He,_o,bo,$e,E,ko,W,wo,To,ge,Po,Ao,et,z,H,Fe,So,Co,tt,u,Ho,Ie,go,Fo,X,Io,Do,Z,Oo,xo,ot,J,g,De,Lo,No,at,K,Ro,Oe,Mo,Uo;return{c(){m=s("p"),ft=a("In general, content can be modified by editing the "),se=s("strong"),ut=a("organisms"),pt=a(" and the pages themselves. Below is a list of the most common changes that you may want to make."),xe=c(),F=s("h2"),_=s("a"),le=s("span"),mt=a("#"),vt=a("Domain/site URL"),Le=c(),$=s("p"),yt=a("The first thing you might want to do is replace the domain of of the site with your own. There are two places where you need to do that:"),Ne=c(),I=s("ul"),p=s("li"),Et=a("In the "),re=s("code"),_t=a("package.json"),bt=a(" file, check the "),ne=s("code"),kt=a("postbuild"),wt=a(" script. Change the domain there to your own, so it ends up like this: "),he=s("code"),Tt=a("svelte-sitemap --domain https://your-domain.com"),Pt=a(". This is used to generate the sitemap of your website, which is used by search engines to index your site."),At=c(),b=s("li"),St=a("In the "),de=s("code"),Ct=a("src/lib/data/meta.ts"),Ht=a(" file, change the "),ce=s("code"),gt=a("siteBaseUrl"),Ft=a(" property to your own domain. This is used in multiple parts of the app wherever the site needs to link to itself."),Re=c(),D=s("h2"),k=s("a"),fe=s("span"),It=a("#"),Dt=a("Header/site logo"),Me=c(),O=s("p"),Ot=a("To replace the logo that appears in the header, modify or replace the contents of the "),ue=s("code"),xt=a("Logo.svelte"),Lt=a(" atom."),Ue=c(),x=s("p"),Nt=a("The links that appear on the header can be modified directly in the "),pe=s("code"),Rt=a("Header.svelte"),Mt=a(" organism."),Be=c(),L=s("h2"),w=s("a"),me=s("span"),Ut=a("#"),Bt=a("Hero section"),Ge=c(),v=s("p"),Gt=a("The hero section is the first section of the site’s home page. It is composed of a Heading, the "),ve=s("em"),Yt=a("intro"),jt=a(" text, and a list of buttons/CTAs. The contents of this section can be modified directly in the "),ye=s("code"),qt=a("Hero.svelte"),zt=a(" organism."),Ye=c(),N=s("h2"),T=s("a"),Ee=s("span"),Jt=a("#"),Kt=a("About section"),je=c(),R=s("p"),Qt=a("The about section contains another headline, a paragraph of text, some social media links, and optionally an image. The contents of this section can be modified directly in the "),_e=s("code"),Vt=a("About.svelte"),Wt=a(" organism."),qe=c(),M=s("h2"),P=s("a"),be=s("span"),Xt=a("#"),Zt=a("Social Links"),ze=c(),U=s("p"),$t=a("The social links are contained in the "),ke=s("code"),eo=a("Socials.svelte"),to=a(" molecule and can be used in any page. This template shows them on the About section and in the Footer."),Je=c(),B=s("h2"),A=s("a"),we=s("span"),oo=a("#"),ao=a("Footer"),Ke=c(),G=s("p"),io=a("The footer contains some credits, a list of social links, and the RSS/Theme toggle. The contents of this section can be modified directly in the "),Te=s("code"),so=a("Footer.svelte"),lo=a(" organism."),Qe=c(),Y=s("h2"),S=s("a"),Pe=s("span"),ro=a("#"),no=a("Colors"),Ve=c(),y=s("p"),ho=a("You can change the color palette of the website just by tweaking the "),Ae=s("code"),co=a("_themes.scss"),fo=a(" file. The file uses the "),Se=s("code"),uo=a("define-color"),po=a(" scss function to automatically set the color variables in Hex, RGB and HSL formats, so you can choose whichever format you need."),We=c(),ee=s("p"),mo=a("The main theme colors (primary and secondary) have two variants: shade and tint. The shade is a lighter version of the color (darker in dark mode), and the tint should almost match the page’s background, so that in light mode, it’s really bright, and in dark mode, it’s really dark."),Xe=c(),j=s("h2"),C=s("a"),Ce=s("span"),vo=a("#"),yo=a("Fonts"),Ze=c(),q=s("p"),Eo=a("This template uses the Inter, Merriweather and Ubuntu Mono font families. You can change the font family by editing the "),He=s("code"),_o=a("_variables.scss"),bo=a(" file, and the code is already set up to accept a default font, a heading font, and a monospace font."),$e=c(),E=s("p"),ko=a("I recommend using "),W=s("a"),wo=a("Fontsource"),To=a(" to import the fonts you need, or self-hosting them. In case you’re using Fontsource, you can import the fonts in "),ge=s("code"),Po=a("global.scss"),Ao=a(" file to make sure they’re available in the entire site."),et=c(),z=s("h2"),H=s("a"),Fe=s("span"),So=a("#"),Co=a("Favicon"),tt=c(),u=s("p"),Ho=a("Favicons are located in the "),Ie=s("code"),go=a("static/favicons"),Fo=a(" folder. I like to use "),X=s("a"),Io=a("Real Favicon Generator"),Do=a(" to generate mine, but you can use any other tool you like. I wrote "),Z=s("a"),Oo=a("a blog post about Favicons"),xo=a(" in case you want to learn more about them."),ot=c(),J=s("h2"),g=s("a"),De=s("span"),Lo=a("#"),No=a("Social Media Link Preview"),at=c(),K=s("p"),Ro=a("You probably want to customize how links to your website look when posted on social media/messaging apps. To do that, you can edit the info in "),Oe=s("code"),Mo=a("src/lib/data/meta.ts"),Uo=a(". There, you can edit the site’s title, description, tags (used by search engines) and the image that appears when sharing a link."),this.h()},l(e){m=l(e,"P",{});var h=r(m);ft=i(h,"In general, content can be modified by editing the "),se=l(h,"STRONG",{});var Xo=r(se);ut=i(Xo,"organisms"),Xo.forEach(o),pt=i(h," and the pages themselves. Below is a list of the most common changes that you may want to make."),h.forEach(o),xe=f(e),F=l(e,"H2",{id:!0});var Bo=r(F);_=l(Bo,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Zo=r(_);le=l(Zo,"SPAN",{});var $o=r(le);mt=i($o,"#"),$o.forEach(o),Zo.forEach(o),vt=i(Bo,"Domain/site URL"),Bo.forEach(o),Le=f(e),$=l(e,"P",{});var ea=r($);yt=i(ea,"The first thing you might want to do is replace the domain of of the site with your own. There are two places where you need to do that:"),ea.forEach(o),Ne=f(e),I=l(e,"UL",{});var it=r(I);p=l(it,"LI",{});var Q=r(p);Et=i(Q,"In the "),re=l(Q,"CODE",{});var ta=r(re);_t=i(ta,"package.json"),ta.forEach(o),bt=i(Q," file, check the "),ne=l(Q,"CODE",{});var oa=r(ne);kt=i(oa,"postbuild"),oa.forEach(o),wt=i(Q," script. Change the domain there to your own, so it ends up like this: "),he=l(Q,"CODE",{});var aa=r(he);Tt=i(aa,"svelte-sitemap --domain https://your-domain.com"),aa.forEach(o),Pt=i(Q,". This is used to generate the sitemap of your website, which is used by search engines to index your site."),Q.forEach(o),At=f(it),b=l(it,"LI",{});var te=r(b);St=i(te,"In the "),de=l(te,"CODE",{});var ia=r(de);Ct=i(ia,"src/lib/data/meta.ts"),ia.forEach(o),Ht=i(te," file, change the "),ce=l(te,"CODE",{});var sa=r(ce);gt=i(sa,"siteBaseUrl"),sa.forEach(o),Ft=i(te," property to your own domain. This is used in multiple parts of the app wherever the site needs to link to itself."),te.forEach(o),it.forEach(o),Re=f(e),D=l(e,"H2",{id:!0});var Go=r(D);k=l(Go,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var la=r(k);fe=l(la,"SPAN",{});var ra=r(fe);It=i(ra,"#"),ra.forEach(o),la.forEach(o),Dt=i(Go,"Header/site logo"),Go.forEach(o),Me=f(e),O=l(e,"P",{});var st=r(O);Ot=i(st,"To replace the logo that appears in the header, modify or replace the contents of the "),ue=l(st,"CODE",{});var na=r(ue);xt=i(na,"Logo.svelte"),na.forEach(o),Lt=i(st," atom."),st.forEach(o),Ue=f(e),x=l(e,"P",{});var lt=r(x);Nt=i(lt,"The links that appear on the header can be modified directly in the "),pe=l(lt,"CODE",{});var ha=r(pe);Rt=i(ha,"Header.svelte"),ha.forEach(o),Mt=i(lt," organism."),lt.forEach(o),Be=f(e),L=l(e,"H2",{id:!0});var Yo=r(L);w=l(Yo,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var da=r(w);me=l(da,"SPAN",{});var ca=r(me);Ut=i(ca,"#"),ca.forEach(o),da.forEach(o),Bt=i(Yo,"Hero section"),Yo.forEach(o),Ge=f(e),v=l(e,"P",{});var oe=r(v);Gt=i(oe,"The hero section is the first section of the site’s home page. It is composed of a Heading, the "),ve=l(oe,"EM",{});var fa=r(ve);Yt=i(fa,"intro"),fa.forEach(o),jt=i(oe," text, and a list of buttons/CTAs. The contents of this section can be modified directly in the "),ye=l(oe,"CODE",{});var ua=r(ye);qt=i(ua,"Hero.svelte"),ua.forEach(o),zt=i(oe," organism."),oe.forEach(o),Ye=f(e),N=l(e,"H2",{id:!0});var jo=r(N);T=l(jo,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var pa=r(T);Ee=l(pa,"SPAN",{});var ma=r(Ee);Jt=i(ma,"#"),ma.forEach(o),pa.forEach(o),Kt=i(jo,"About section"),jo.forEach(o),je=f(e),R=l(e,"P",{});var rt=r(R);Qt=i(rt,"The about section contains another headline, a paragraph of text, some social media links, and optionally an image. The contents of this section can be modified directly in the "),_e=l(rt,"CODE",{});var va=r(_e);Vt=i(va,"About.svelte"),va.forEach(o),Wt=i(rt," organism."),rt.forEach(o),qe=f(e),M=l(e,"H2",{id:!0});var qo=r(M);P=l(qo,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var ya=r(P);be=l(ya,"SPAN",{});var Ea=r(be);Xt=i(Ea,"#"),Ea.forEach(o),ya.forEach(o),Zt=i(qo,"Social Links"),qo.forEach(o),ze=f(e),U=l(e,"P",{});var nt=r(U);$t=i(nt,"The social links are contained in the "),ke=l(nt,"CODE",{});var _a=r(ke);eo=i(_a,"Socials.svelte"),_a.forEach(o),to=i(nt," molecule and can be used in any page. This template shows them on the About section and in the Footer."),nt.forEach(o),Je=f(e),B=l(e,"H2",{id:!0});var zo=r(B);A=l(zo,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var ba=r(A);we=l(ba,"SPAN",{});var ka=r(we);oo=i(ka,"#"),ka.forEach(o),ba.forEach(o),ao=i(zo,"Footer"),zo.forEach(o),Ke=f(e),G=l(e,"P",{});var ht=r(G);io=i(ht,"The footer contains some credits, a list of social links, and the RSS/Theme toggle. The contents of this section can be modified directly in the "),Te=l(ht,"CODE",{});var wa=r(Te);so=i(wa,"Footer.svelte"),wa.forEach(o),lo=i(ht," organism."),ht.forEach(o),Qe=f(e),Y=l(e,"H2",{id:!0});var Jo=r(Y);S=l(Jo,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Ta=r(S);Pe=l(Ta,"SPAN",{});var Pa=r(Pe);ro=i(Pa,"#"),Pa.forEach(o),Ta.forEach(o),no=i(Jo,"Colors"),Jo.forEach(o),Ve=f(e),y=l(e,"P",{});var ae=r(y);ho=i(ae,"You can change the color palette of the website just by tweaking the "),Ae=l(ae,"CODE",{});var Aa=r(Ae);co=i(Aa,"_themes.scss"),Aa.forEach(o),fo=i(ae," file. The file uses the "),Se=l(ae,"CODE",{});var Sa=r(Se);uo=i(Sa,"define-color"),Sa.forEach(o),po=i(ae," scss function to automatically set the color variables in Hex, RGB and HSL formats, so you can choose whichever format you need."),ae.forEach(o),We=f(e),ee=l(e,"P",{});var Ca=r(ee);mo=i(Ca,"The main theme colors (primary and secondary) have two variants: shade and tint. The shade is a lighter version of the color (darker in dark mode), and the tint should almost match the page’s background, so that in light mode, it’s really bright, and in dark mode, it’s really dark."),Ca.forEach(o),Xe=f(e),j=l(e,"H2",{id:!0});var Ko=r(j);C=l(Ko,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Ha=r(C);Ce=l(Ha,"SPAN",{});var ga=r(Ce);vo=i(ga,"#"),ga.forEach(o),Ha.forEach(o),yo=i(Ko,"Fonts"),Ko.forEach(o),Ze=f(e),q=l(e,"P",{});var dt=r(q);Eo=i(dt,"This template uses the Inter, Merriweather and Ubuntu Mono font families. You can change the font family by editing the "),He=l(dt,"CODE",{});var Fa=r(He);_o=i(Fa,"_variables.scss"),Fa.forEach(o),bo=i(dt," file, and the code is already set up to accept a default font, a heading font, and a monospace font."),dt.forEach(o),$e=f(e),E=l(e,"P",{});var ie=r(E);ko=i(ie,"I recommend using "),W=l(ie,"A",{href:!0,rel:!0});var Ia=r(W);wo=i(Ia,"Fontsource"),Ia.forEach(o),To=i(ie," to import the fonts you need, or self-hosting them. In case you’re using Fontsource, you can import the fonts in "),ge=l(ie,"CODE",{});var Da=r(ge);Po=i(Da,"global.scss"),Da.forEach(o),Ao=i(ie," file to make sure they’re available in the entire site."),ie.forEach(o),et=f(e),z=l(e,"H2",{id:!0});var Qo=r(z);H=l(Qo,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Oa=r(H);Fe=l(Oa,"SPAN",{});var xa=r(Fe);So=i(xa,"#"),xa.forEach(o),Oa.forEach(o),Co=i(Qo,"Favicon"),Qo.forEach(o),tt=f(e),u=l(e,"P",{});var V=r(u);Ho=i(V,"Favicons are located in the "),Ie=l(V,"CODE",{});var La=r(Ie);go=i(La,"static/favicons"),La.forEach(o),Fo=i(V," folder. I like to use "),X=l(V,"A",{href:!0,rel:!0});var Na=r(X);Io=i(Na,"Real Favicon Generator"),Na.forEach(o),Do=i(V," to generate mine, but you can use any other tool you like. I wrote "),Z=l(V,"A",{href:!0,rel:!0});var Ra=r(Z);Oo=i(Ra,"a blog post about Favicons"),Ra.forEach(o),xo=i(V," in case you want to learn more about them."),V.forEach(o),ot=f(e),J=l(e,"H2",{id:!0});var Vo=r(J);g=l(Vo,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var Ma=r(g);De=l(Ma,"SPAN",{});var Ua=r(De);Lo=i(Ua,"#"),Ua.forEach(o),Ma.forEach(o),No=i(Vo,"Social Media Link Preview"),Vo.forEach(o),at=f(e),K=l(e,"P",{});var ct=r(K);Ro=i(ct,"You probably want to customize how links to your website look when posted on social media/messaging apps. To do that, you can edit the info in "),Oe=l(ct,"CODE",{});var Ba=r(Oe);Mo=i(Ba,"src/lib/data/meta.ts"),Ba.forEach(o),Uo=i(ct,". There, you can edit the site’s title, description, tags (used by search engines) and the image that appears when sharing a link."),ct.forEach(o),this.h()},h(){n(_,"class","heading-link"),n(_,"title","Permalink"),n(_,"aria-hidden","true"),n(_,"href","#domainsite-url"),n(F,"id","domainsite-url"),n(k,"class","heading-link"),n(k,"title","Permalink"),n(k,"aria-hidden","true"),n(k,"href","#headersite-logo"),n(D,"id","headersite-logo"),n(w,"class","heading-link"),n(w,"title","Permalink"),n(w,"aria-hidden","true"),n(w,"href","#hero-section"),n(L,"id","hero-section"),n(T,"class","heading-link"),n(T,"title","Permalink"),n(T,"aria-hidden","true"),n(T,"href","#about-section"),n(N,"id","about-section"),n(P,"class","heading-link"),n(P,"title","Permalink"),n(P,"aria-hidden","true"),n(P,"href","#social-links"),n(M,"id","social-links"),n(A,"class","heading-link"),n(A,"title","Permalink"),n(A,"aria-hidden","true"),n(A,"href","#footer"),n(B,"id","footer"),n(S,"class","heading-link"),n(S,"title","Permalink"),n(S,"aria-hidden","true"),n(S,"href","#colors"),n(Y,"id","colors"),n(C,"class","heading-link"),n(C,"title","Permalink"),n(C,"aria-hidden","true"),n(C,"href","#fonts"),n(j,"id","fonts"),n(W,"href","https://fontsource.org/"),n(W,"rel","nofollow"),n(H,"class","heading-link"),n(H,"title","Permalink"),n(H,"aria-hidden","true"),n(H,"href","#favicon"),n(z,"id","favicon"),n(X,"href","https://realfavicongenerator.net"),n(X,"rel","nofollow"),n(Z,"href","https://fantinel.dev/fixing-favicons"),n(Z,"rel","nofollow"),n(g,"class","heading-link"),n(g,"title","Permalink"),n(g,"aria-hidden","true"),n(g,"href","#social-media-link-preview"),n(J,"id","social-media-link-preview")},m(e,h){d(e,m,h),t(m,ft),t(m,se),t(se,ut),t(m,pt),d(e,xe,h),d(e,F,h),t(F,_),t(_,le),t(le,mt),t(F,vt),d(e,Le,h),d(e,$,h),t($,yt),d(e,Ne,h),d(e,I,h),t(I,p),t(p,Et),t(p,re),t(re,_t),t(p,bt),t(p,ne),t(ne,kt),t(p,wt),t(p,he),t(he,Tt),t(p,Pt),t(I,At),t(I,b),t(b,St),t(b,de),t(de,Ct),t(b,Ht),t(b,ce),t(ce,gt),t(b,Ft),d(e,Re,h),d(e,D,h),t(D,k),t(k,fe),t(fe,It),t(D,Dt),d(e,Me,h),d(e,O,h),t(O,Ot),t(O,ue),t(ue,xt),t(O,Lt),d(e,Ue,h),d(e,x,h),t(x,Nt),t(x,pe),t(pe,Rt),t(x,Mt),d(e,Be,h),d(e,L,h),t(L,w),t(w,me),t(me,Ut),t(L,Bt),d(e,Ge,h),d(e,v,h),t(v,Gt),t(v,ve),t(ve,Yt),t(v,jt),t(v,ye),t(ye,qt),t(v,zt),d(e,Ye,h),d(e,N,h),t(N,T),t(T,Ee),t(Ee,Jt),t(N,Kt),d(e,je,h),d(e,R,h),t(R,Qt),t(R,_e),t(_e,Vt),t(R,Wt),d(e,qe,h),d(e,M,h),t(M,P),t(P,be),t(be,Xt),t(M,Zt),d(e,ze,h),d(e,U,h),t(U,$t),t(U,ke),t(ke,eo),t(U,to),d(e,Je,h),d(e,B,h),t(B,A),t(A,we),t(we,oo),t(B,ao),d(e,Ke,h),d(e,G,h),t(G,io),t(G,Te),t(Te,so),t(G,lo),d(e,Qe,h),d(e,Y,h),t(Y,S),t(S,Pe),t(Pe,ro),t(Y,no),d(e,Ve,h),d(e,y,h),t(y,ho),t(y,Ae),t(Ae,co),t(y,fo),t(y,Se),t(Se,uo),t(y,po),d(e,We,h),d(e,ee,h),t(ee,mo),d(e,Xe,h),d(e,j,h),t(j,C),t(C,Ce),t(Ce,vo),t(j,yo),d(e,Ze,h),d(e,q,h),t(q,Eo),t(q,He),t(He,_o),t(q,bo),d(e,$e,h),d(e,E,h),t(E,ko),t(E,W),t(W,wo),t(E,To),t(E,ge),t(ge,Po),t(E,Ao),d(e,et,h),d(e,z,h),t(z,H),t(H,Fe),t(Fe,So),t(z,Co),d(e,tt,h),d(e,u,h),t(u,Ho),t(u,Ie),t(Ie,go),t(u,Fo),t(u,X),t(X,Io),t(u,Do),t(u,Z),t(Z,Oo),t(u,xo),d(e,ot,h),d(e,J,h),t(J,g),t(g,De),t(De,Lo),t(J,No),d(e,at,h),d(e,K,h),t(K,Ro),t(K,Oe),t(Oe,Mo),t(K,Uo)},p:Wo,i:Wo,o:Wo,d(e){e&&o(m),e&&o(xe),e&&o(F),e&&o(Le),e&&o($),e&&o(Ne),e&&o(I),e&&o(Re),e&&o(D),e&&o(Me),e&&o(O),e&&o(Ue),e&&o(x),e&&o(Be),e&&o(L),e&&o(Ge),e&&o(v),e&&o(Ye),e&&o(N),e&&o(je),e&&o(R),e&&o(qe),e&&o(M),e&&o(ze),e&&o(U),e&&o(Je),e&&o(B),e&&o(Ke),e&&o(G),e&&o(Qe),e&&o(Y),e&&o(Ve),e&&o(y),e&&o(We),e&&o(ee),e&&o(Xe),e&&o(j),e&&o(Ze),e&&o(q),e&&o($e),e&&o(E),e&&o(et),e&&o(z),e&&o(tt),e&&o(u),e&&o(ot),e&&o(J),e&&o(at),e&&o(K)}}}class Ka extends Ya{constructor(m){super(),ja(this,m,null,za,qa,{})}}export{Ka as component};
