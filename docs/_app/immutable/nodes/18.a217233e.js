import{S as De,i as be,s as Ae,k as r,q as u,a as f,l as a,m as i,r as c,h as t,c as p,n,b as l,G as o,M as ce}from"../chunks/index.039744db.js";function Be(he){let _,E,R,$,z,b,T,I,F,A,h,O,V,B,P,X,S,k,Pe=`<code class="language-undefined">//package.json

&quot;jest&quot;: &#123;
    &quot;moduleFileExtensions&quot;: [
      &quot;ts&quot;,&quot;js&quot;
    ],
    &quot;transform&quot;: &#123;
      &quot;\\.(ts|tsx)$&quot;: &quot;&lt;rootDir&gt;/node_modules/ts-jest/preprocessor.js&quot;
    &#125;,
    &quot;testRegex&quot;: &quot;/__tests__/.*\\.(ts)$&quot;
  &#125;</code>`,C,d,Z,D,ee,te,g,m,Le=`<code class="language-undefined">src
···
├── __tests__
│   └── ruler_spec.ts
···</code>`,J,L,se,G,v,Ue=`<code class="language-undefined">import &#123; E_TYPE &#125; from &quot;../Config&quot;;
import &#123;Ruler&#125; from &quot;../Ruler&quot;;

var ruler = new Ruler();

describe(&#39;type-check&#39;, () =&gt; &#123;
    it(&#39;DOUBLE_JOKER&#39;, () =&gt; &#123;
        expect(ruler.checkCardType([0x4e, 0x4f])).toBe(E_TYPE.DOUBLE_JOKER);
    &#125;)
    it(&#39;QUADRUPLE&#39;, () =&gt; &#123;
        expect(ruler.checkCardType([0x02, 0x02, 0x02, 0x02])).toBe(E_TYPE.QUADRUPLE);
    &#125;)
    it(&#39;SINGLE&#39;, () =&gt; &#123;
        expect(ruler.checkCardType([0x02])).toBe(E_TYPE.SINGLE);
    &#125;)
    it(&#39;QUADRUPLE_TAKE_TWO_DOUBLE&#39;, () =&gt; &#123;
        expect(
            ruler.checkCardType([0x03, 0x03, 0x03, 0x03, 0x04, 0x04, 0x05, 0x05])
        ).toBe(E_TYPE.QUADRUPLE_TAKE_TWO_DOUBLE);
    &#125;);
    it(&#39;QUADRUPLE_TAKE_TWO_SINGLE&#39;, () =&gt; &#123;
        expect(
            ruler.checkCardType([0x03, 0x03, 0x03, 0x03, 0x04, 0x05])
        ).toBe(E_TYPE.QUADRUPLE_TAKE_TWO_SINGLE);
    &#125;);
&#125;)

describe(&#39;can-defeat&#39;, () =&gt; &#123;
    it(&#39;DOUBLE_JOKER vs SINGLE&#39;, () =&gt; &#123;
        expect(ruler.canDefeat([0x4e, 0x4f], [0x01], E_TYPE.SINGLE).can).toBe(true);
    &#125;)
&#125;)
</code>`,K,U,le,N,y,je=`<code class="language-undefined">describe(&quot;desc-title&quot;,()=&gt;&#123;
      it(&quot;unit-desc-name&quot;,()=&gt;&#123;
          expect(function-you-want).toBe(res-you-want)
    &#125;)
&#125;)</code>`,H,x,oe,q,re,ae,M,j,ie,Q,w,ue;return{c(){_=r("h2"),E=r("a"),R=r("span"),$=u("#"),z=u("Unit Test Using Jest"),b=f(),T=r("blockquote"),I=r("p"),F=u("Recently, I make a package about poker ruler logic from the project in the series articles which is writing. I need to check the correction of each poker rule when I change the code involved. So I add Jest to have a auto unit test."),A=f(),h=r("ol"),O=r("li"),V=u("Install packages, for js, only jest is nessary below."),B=f(),P=r("code"),X=u("npm i -D jest ts-jest @types/jest"),S=u(`
2. Jest config in package.json
`),k=r("pre"),C=f(),d=r("p"),Z=u("3.Make a directory named ”"),D=r("strong"),ee=u("test"),te=u("”, and make a file suffix with “_spec”."),g=f(),m=r("pre"),J=f(),L=r("p"),se=u("4.Write test code in ruler_spec.ts"),G=f(),v=r("pre"),K=f(),U=r("p"),le=u("Code structure like below is nessary:"),N=f(),y=r("pre"),H=f(),x=r("p"),oe=u("If you get stuck, you can check "),q=r("a"),re=u("the repo"),ae=u(" anytime."),M=f(),j=r("p"),ie=u("Thanks for your reading."),Q=f(),w=r("p"),ue=u("Have a good day."),this.h()},l(e){_=a(e,"H2",{id:!0});var s=i(_);E=a(s,"A",{class:!0,title:!0,"aria-hidden":!0,href:!0});var fe=i(E);R=a(fe,"SPAN",{});var pe=i(R);$=c(pe,"#"),pe.forEach(t),fe.forEach(t),z=c(s,"Unit Test Using Jest"),s.forEach(t),b=p(e),T=a(e,"BLOCKQUOTE",{});var ne=i(T);I=a(ne,"P",{});var _e=i(I);F=c(_e,"Recently, I make a package about poker ruler logic from the project in the series articles which is writing. I need to check the correction of each poker rule when I change the code involved. So I add Jest to have a auto unit test."),_e.forEach(t),ne.forEach(t),A=p(e),h=a(e,"OL",{});var Ee=i(h);O=a(Ee,"LI",{});var de=i(O);V=c(de,"Install packages, for js, only jest is nessary below."),de.forEach(t),Ee.forEach(t),B=p(e),P=a(e,"CODE",{});var xe=i(P);X=c(xe,"npm i -D jest ts-jest @types/jest"),xe.forEach(t),S=c(e,`
2. Jest config in package.json
`),k=a(e,"PRE",{class:!0});var we=i(k);we.forEach(t),C=p(e),d=a(e,"P",{});var Y=i(d);Z=c(Y,"3.Make a directory named ”"),D=a(Y,"STRONG",{});var ke=i(D);ee=c(ke,"test"),ke.forEach(t),te=c(Y,"”, and make a file suffix with “_spec”."),Y.forEach(t),g=p(e),m=a(e,"PRE",{class:!0});var Re=i(m);Re.forEach(t),J=p(e),L=a(e,"P",{});var me=i(L);se=c(me,"4.Write test code in ruler_spec.ts"),me.forEach(t),G=p(e),v=a(e,"PRE",{class:!0});var Ie=i(v);Ie.forEach(t),K=p(e),U=a(e,"P",{});var ve=i(U);le=c(ve,"Code structure like below is nessary:"),ve.forEach(t),N=p(e),y=a(e,"PRE",{class:!0});var Oe=i(y);Oe.forEach(t),H=p(e),x=a(e,"P",{});var W=i(x);oe=c(W,"If you get stuck, you can check "),q=a(W,"A",{href:!0,rel:!0});var ye=i(q);re=c(ye,"the repo"),ye.forEach(t),ae=c(W," anytime."),W.forEach(t),M=p(e),j=a(e,"P",{});var qe=i(j);ie=c(qe,"Thanks for your reading."),qe.forEach(t),Q=p(e),w=a(e,"P",{});var Te=i(w);ue=c(Te,"Have a good day."),Te.forEach(t),this.h()},h(){n(E,"class","heading-link"),n(E,"title","Permalink"),n(E,"aria-hidden","true"),n(E,"href","#unit-test-using-jest"),n(_,"id","unit-test-using-jest"),n(k,"class","language-undefined"),n(m,"class","language-undefined"),n(v,"class","language-undefined"),n(y,"class","language-undefined"),n(q,"href","https://github.com/lizhiyu-me/chinese-poker"),n(q,"rel","nofollow")},m(e,s){l(e,_,s),o(_,E),o(E,R),o(R,$),o(_,z),l(e,b,s),l(e,T,s),o(T,I),o(I,F),l(e,A,s),l(e,h,s),o(h,O),o(O,V),l(e,B,s),l(e,P,s),o(P,X),l(e,S,s),l(e,k,s),k.innerHTML=Pe,l(e,C,s),l(e,d,s),o(d,Z),o(d,D),o(D,ee),o(d,te),l(e,g,s),l(e,m,s),m.innerHTML=Le,l(e,J,s),l(e,L,s),o(L,se),l(e,G,s),l(e,v,s),v.innerHTML=Ue,l(e,K,s),l(e,U,s),o(U,le),l(e,N,s),l(e,y,s),y.innerHTML=je,l(e,H,s),l(e,x,s),o(x,oe),o(x,q),o(q,re),o(x,ae),l(e,M,s),l(e,j,s),o(j,ie),l(e,Q,s),l(e,w,s),o(w,ue)},p:ce,i:ce,o:ce,d(e){e&&t(_),e&&t(b),e&&t(T),e&&t(A),e&&t(h),e&&t(B),e&&t(P),e&&t(S),e&&t(k),e&&t(C),e&&t(d),e&&t(g),e&&t(m),e&&t(J),e&&t(L),e&&t(G),e&&t(v),e&&t(K),e&&t(U),e&&t(N),e&&t(y),e&&t(H),e&&t(x),e&&t(M),e&&t(j),e&&t(Q),e&&t(w)}}}class Ce extends De{constructor(_){super(),be(this,_,null,Be,Ae,{})}}export{Ce as component};
