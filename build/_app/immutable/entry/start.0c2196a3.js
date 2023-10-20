import{o as ye,t as ve}from"../chunks/index.72d13981.js";import{w as Re}from"../chunks/index.b57f6985.js";function rt(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function ot(e){return e.split("%25").map(decodeURI).join("%25")}function it(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}const st=["href","pathname","search","searchParams","toString","toJSON"];function ct(e,n){const i=new URL(e);for(const o of st)Object.defineProperty(i,o,{get(){return n(),e[o]},enumerable:!0,configurable:!0});return lt(i),i}function lt(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const ft="/__data.json";function ut(e){return e.replace(/\/$/,"")+ft}function dt(...e){let n=5381;for(const i of e)if(typeof i=="string"){let o=i.length;for(;o;)n=n*33^i.charCodeAt(--o)}else if(ArrayBuffer.isView(i)){const o=new Uint8Array(i.buffer,i.byteOffset,i.byteLength);let d=o.length;for(;d;)n=n*33^o[--d]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}const Ye=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&re.delete(Ae(e)),Ye(e,n));const re=new Map;function pt(e,n){const i=Ae(e,n),o=document.querySelector(i);if(o!=null&&o.textContent){const{body:d,...f}=JSON.parse(o.textContent),_=o.getAttribute("data-ttl");return _&&re.set(i,{body:d,init:f,ttl:1e3*Number(_)}),Promise.resolve(new Response(d,f))}return window.fetch(e,n)}function ht(e,n,i){if(re.size>0){const o=Ae(e,i),d=re.get(o);if(d){if(performance.now()<d.ttl&&["default","force-cache","only-if-cached",void 0].includes(i==null?void 0:i.cache))return new Response(d.body,d.init);re.delete(o)}}return window.fetch(n,i)}function Ae(e,n){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const d=[];n.headers&&d.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&d.push(n.body),o+=`[data-hash="${dt(...d)}"]`}return o}const gt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function mt(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${wt(e).map(o=>{const d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(o);if(d)return n.push({name:d[1],matcher:d[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const f=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(o);if(f)return n.push({name:f[1],matcher:f[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!o)return;const _=o.split(/\[(.+?)\](?!\])/);return"/"+_.map((p,h)=>{if(h%2){if(p.startsWith("x+"))return be(String.fromCharCode(parseInt(p.slice(2),16)));if(p.startsWith("u+"))return be(String.fromCharCode(...p.slice(2).split("-").map(P=>parseInt(P,16))));const m=gt.exec(p);if(!m)throw new Error(`Invalid param: ${p}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,x,N,S,T]=m;return n.push({name:S,matcher:T,optional:!!x,rest:!!N,chained:N?h===1&&_[0]==="":!1}),N?"(.*?)":x?"([^/]*)?":"([^/]+?)"}return be(p)}).join("")}).join("")}/?$`),params:n}}function _t(e){return!/^\([^)]+\)$/.test(e)}function wt(e){return e.slice(1).split("/").filter(_t)}function yt(e,n,i){const o={},d=e.slice(1),f=d.filter(c=>c!==void 0);let _=0;for(let c=0;c<n.length;c+=1){const p=n[c];let h=d[c-_];if(p.chained&&p.rest&&_&&(h=d.slice(c-_,c+1).filter(m=>m).join("/"),_=0),h===void 0){p.rest&&(o[p.name]="");continue}if(!p.matcher||i[p.matcher](h)){o[p.name]=h;const m=n[c+1],x=d[c+1];m&&!m.rest&&m.optional&&x&&p.chained&&(_=0),!m&&!x&&Object.keys(o).length===f.length&&(_=0);continue}if(p.optional&&p.chained){_++;continue}return}if(!_)return o}function be(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function vt({nodes:e,server_loads:n,dictionary:i,matchers:o}){const d=new Set(n);return Object.entries(i).map(([c,[p,h,m]])=>{const{pattern:x,params:N}=mt(c),S={id:c,exec:T=>{const P=x.exec(T);if(P)return yt(P,N,o)},errors:[1,...m||[]].map(T=>e[T]),layouts:[0,...h||[]].map(_),leaf:f(p)};return S.errors.length=S.layouts.length=Math.max(S.errors.length,S.layouts.length),S});function f(c){const p=c<0;return p&&(c=~c),[p,e[c]]}function _(c){return c===void 0?c:[d.has(c),e[c]]}}function Xe(e){try{return JSON.parse(sessionStorage[e])}catch{}}function Me(e,n){const i=JSON.stringify(n);try{sessionStorage[e]=i}catch{}}var Ke;const G=((Ke=globalThis.__sveltekit_p19mr4)==null?void 0:Ke.base)??"/lizhiyu.me";var We;const bt=((We=globalThis.__sveltekit_p19mr4)==null?void 0:We.assets)??G,Et="1697823356757",Ze="sveltekit:snapshot",Qe="sveltekit:scroll",V="sveltekit:index",de={tap:1,hover:2,viewport:3,eager:4,off:-1};function qe(e){let n=e.baseURI;if(!n){const i=e.getElementsByTagName("base");n=i.length?i[0].href:e.URL}return n}function ne(){return{x:pageXOffset,y:pageYOffset}}function Y(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Fe={...de,"":de.hover};function et(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Ge(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=et(e)}}function Ee(e,n){let i;try{i=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,d=!i||!!o||ue(i,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),f=(i==null?void 0:i.origin)===location.origin&&e.hasAttribute("download");return{url:i,external:d,target:o,download:f}}function fe(e){let n=null,i=null,o=null,d=null,f=null,_=null,c=e;for(;c&&c!==document.documentElement;)o===null&&(o=Y(c,"preload-code")),d===null&&(d=Y(c,"preload-data")),n===null&&(n=Y(c,"keepfocus")),i===null&&(i=Y(c,"noscroll")),f===null&&(f=Y(c,"reload")),_===null&&(_=Y(c,"replacestate")),c=et(c);function p(h){switch(h){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:Fe[o??"off"],preload_data:Fe[d??"off"],keep_focus:p(n),noscroll:p(i),reload:p(f),replace_state:p(_)}}function Be(e){const n=Re(e);let i=!0;function o(){i=!0,n.update(_=>_)}function d(_){i=!1,n.set(_)}function f(_){let c;return n.subscribe(p=>{(c===void 0||i&&p!==c)&&_(c=p)})}return{notify:o,set:d,subscribe:f}}function kt(){const{set:e,subscribe:n}=Re(!1);let i;async function o(){clearTimeout(i);try{const d=await fetch(`${bt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!d.ok)return!1;const _=(await d.json()).version!==Et;return _&&(e(!0),clearTimeout(i)),_}catch{return!1}}return{subscribe:n,check:o}}function ue(e,n){return e.origin!==location.origin||!e.pathname.startsWith(n)}const St=-1,Rt=-2,At=-3,It=-4,Lt=-5,Ot=-6;function Ut(e,n){if(typeof e=="number")return d(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const i=e,o=Array(i.length);function d(f,_=!1){if(f===St)return;if(f===At)return NaN;if(f===It)return 1/0;if(f===Lt)return-1/0;if(f===Ot)return-0;if(_)throw new Error("Invalid input");if(f in o)return o[f];const c=i[f];if(!c||typeof c!="object")o[f]=c;else if(Array.isArray(c))if(typeof c[0]=="string"){const p=c[0],h=n==null?void 0:n[p];if(h)return o[f]=h(d(c[1]));switch(p){case"Date":o[f]=new Date(c[1]);break;case"Set":const m=new Set;o[f]=m;for(let S=1;S<c.length;S+=1)m.add(d(c[S]));break;case"Map":const x=new Map;o[f]=x;for(let S=1;S<c.length;S+=2)x.set(d(c[S]),d(c[S+1]));break;case"RegExp":o[f]=new RegExp(c[1],c[2]);break;case"Object":o[f]=Object(c[1]);break;case"BigInt":o[f]=BigInt(c[1]);break;case"null":const N=Object.create(null);o[f]=N;for(let S=1;S<c.length;S+=2)N[c[S]]=d(c[S+1]);break;default:throw new Error(`Unknown type ${p}`)}}else{const p=new Array(c.length);o[f]=p;for(let h=0;h<c.length;h+=1){const m=c[h];m!==Rt&&(p[h]=d(m))}}else{const p={};o[f]=p;for(const h in c){const m=c[h];p[h]=d(m)}}return o[f]}return d(0)}function Pt(e){return e.filter(n=>n!=null)}const tt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...tt];const xt=new Set([...tt]);[...xt];async function Nt(e){var n;for(const i in e)if(typeof((n=e[i])==null?void 0:n.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(e).map(async([o,d])=>[o,await d])));return e}class ae{constructor(n,i){this.status=n,typeof i=="string"?this.body={message:i}:i?this.body=i:this.body={message:`Error: ${n}`}}toString(){return JSON.stringify(this.body)}}class He{constructor(n,i){this.status=n,this.location=i}}const Tt="x-sveltekit-invalidated",jt="x-sveltekit-trailing-slash";function $t(e){e.client}const F={url:Be({}),page:Be({}),navigating:Re(null),updated:kt()},J=Xe(Qe)??{},te=Xe(Ze)??{};function ke(e){J[e]=ne()}function Ct(e,n){var Ce;const i=vt(e),o=e.nodes[0],d=e.nodes[1];o(),d();const f=document.documentElement,_=[],c=[];let p=null;const h={before_navigate:[],on_navigate:[],after_navigate:[]};let m={branch:[],error:null,url:null},x=!1,N=!1,S=!0,T=!1,P=!1,B=!1,H=!1,M,C=(Ce=history.state)==null?void 0:Ce[V];C||(C=Date.now(),history.replaceState({...history.state,[V]:C},"",location.href));const pe=J[C];pe&&(history.scrollRestoration="manual",scrollTo(pe.x,pe.y));let q,K,X;async function Ie(){if(X=X||Promise.resolve(),await X,!X)return;X=null;const t=new URL(location.href),l=Q(t,!0);p=null;const a=K={},s=l&&await me(l);if(a===K&&s){if(s.type==="redirect")return oe(new URL(s.location,t).href,{},1,a);s.props.page!==void 0&&(q=s.props.page),M.$set(s.props)}}function Le(t){c.some(l=>l==null?void 0:l.snapshot)&&(te[t]=c.map(l=>{var a;return(a=l==null?void 0:l.snapshot)==null?void 0:a.capture()}))}function Oe(t){var l;(l=te[t])==null||l.forEach((a,s)=>{var r,u;(u=(r=c[s])==null?void 0:r.snapshot)==null||u.restore(a)})}function Ue(){ke(C),Me(Qe,J),Le(C),Me(Ze,te)}async function oe(t,{noScroll:l=!1,replaceState:a=!1,keepFocus:s=!1,state:r={},invalidateAll:u=!1},g,b){return typeof t=="string"&&(t=new URL(t,qe(document))),le({url:t,scroll:l?ne():null,keepfocus:s,redirect_count:g,details:{state:r,replaceState:a},nav_token:b,accepted:()=>{u&&(H=!0)},blocked:()=>{},type:"goto"})}async function Pe(t){return p={id:t.id,promise:me(t).then(l=>(l.type==="loaded"&&l.state.error&&(p=null),l))},p.promise}async function ie(...t){const a=i.filter(s=>t.some(r=>s.exec(r))).map(s=>Promise.all([...s.layouts,s.leaf].map(r=>r==null?void 0:r[1]())));await Promise.all(a)}function xe(t){var s;m=t.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),q=t.props.page,M=new e.root({target:n,props:{...t.props,stores:F,components:c},hydrate:!0}),Oe(C);const a={from:null,to:{params:m.params,route:{id:((s=m.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};h.after_navigate.forEach(r=>r(a)),N=!0}async function Z({url:t,params:l,branch:a,status:s,error:r,route:u,form:g}){let b="never";for(const y of a)(y==null?void 0:y.slash)!==void 0&&(b=y.slash);t.pathname=rt(t.pathname,b),t.search=t.search;const E={type:"loaded",state:{url:t,params:l,branch:a,error:r,route:u},props:{constructors:Pt(a).map(y=>y.node.component)}};g!==void 0&&(E.props.form=g);let v={},L=!q,A=0;for(let y=0;y<Math.max(a.length,m.branch.length);y+=1){const w=a[y],U=m.branch[y];(w==null?void 0:w.data)!==(U==null?void 0:U.data)&&(L=!0),w&&(v={...v,...w.data},L&&(E.props[`data_${A}`]=v),A+=1)}return(!m.url||t.href!==m.url.href||m.error!==r||g!==void 0&&g!==q.form||L)&&(E.props.page={error:r,params:l,route:{id:(u==null?void 0:u.id)??null},status:s,url:new URL(t),form:g??null,data:L?v:q.data}),E}async function he({loader:t,parent:l,url:a,params:s,route:r,server_data_node:u}){var v,L,A;let g=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await t();if((v=E.universal)!=null&&v.load){let O=function(...w){for(const U of w){const{href:j}=new URL(U,a);b.dependencies.add(j)}};const y={route:new Proxy(r,{get:(w,U)=>(b.route=!0,w[U])}),params:new Proxy(s,{get:(w,U)=>(b.params.add(U),w[U])}),data:(u==null?void 0:u.data)??null,url:ct(a,()=>{b.url=!0}),async fetch(w,U){let j;w instanceof Request?(j=w.url,U={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...U}):j=w;const D=new URL(j,a);return O(D.href),D.origin===a.origin&&(j=D.href.slice(a.origin.length)),N?ht(j,D.href,U):pt(j,U)},setHeaders:()=>{},depends:O,parent(){return b.parent=!0,l()}};g=await E.universal.load.call(null,y)??null,g=g?await Nt(g):null}return{node:E,loader:t,server:u,universal:(L=E.universal)!=null&&L.load?{type:"data",data:g,uses:b}:null,data:g??(u==null?void 0:u.data)??null,slash:((A=E.universal)==null?void 0:A.trailingSlash)??(u==null?void 0:u.slash)}}function Ne(t,l,a,s,r){if(H)return!0;if(!s)return!1;if(s.parent&&t||s.route&&l||s.url&&a)return!0;for(const u of s.params)if(r[u]!==m.params[u])return!0;for(const u of s.dependencies)if(_.some(g=>g(new URL(u))))return!0;return!1}function ge(t,l){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?l??null:null}async function me({id:t,invalidating:l,url:a,params:s,route:r}){if((p==null?void 0:p.id)===t)return p.promise;const{errors:u,layouts:g,leaf:b}=r,E=[...g,b];u.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let v=null;const L=m.url?t!==m.url.pathname+m.url.search:!1,A=m.route?r.id!==m.route.id:!1;let O=!1;const y=E.map((k,I)=>{var z;const R=m.branch[I],$=!!(k!=null&&k[0])&&((R==null?void 0:R.loader)!==k[1]||Ne(O,A,L,(z=R.server)==null?void 0:z.uses,s));return $&&(O=!0),$});if(y.some(Boolean)){try{v=await ze(a,y)}catch(k){return se({status:k instanceof ae?k.status:500,error:await ee(k,{url:a,params:s,route:{id:r.id}}),url:a,route:r})}if(v.type==="redirect")return v}const w=v==null?void 0:v.nodes;let U=!1;const j=E.map(async(k,I)=>{var _e;if(!k)return;const R=m.branch[I],$=w==null?void 0:w[I];if((!$||$.type==="skip")&&k[1]===(R==null?void 0:R.loader)&&!Ne(U,A,L,(_e=R.universal)==null?void 0:_e.uses,s))return R;if(U=!0,($==null?void 0:$.type)==="error")throw $;return he({loader:k[1],url:a,params:s,route:r,parent:async()=>{var Ve;const De={};for(let we=0;we<I;we+=1)Object.assign(De,(Ve=await j[we])==null?void 0:Ve.data);return De},server_data_node:ge($===void 0&&k[0]?{type:"skip"}:$??null,k[0]?R==null?void 0:R.server:void 0)})});for(const k of j)k.catch(()=>{});const D=[];for(let k=0;k<E.length;k+=1)if(E[k])try{D.push(await j[k])}catch(I){if(I instanceof He)return{type:"redirect",location:I.location};let R=500,$;if(w!=null&&w.includes(I))R=I.status??R,$=I.error;else if(I instanceof ae)R=I.status,$=I.body;else{if(await F.updated.check())return await W(a);$=await ee(I,{params:s,url:a,route:{id:r.id}})}const z=await Te(k,D,u);return z?await Z({url:a,params:s,branch:D.slice(0,z.idx).concat(z.node),status:R,error:$,route:r}):await $e(a,{id:r.id},$,R)}else D.push(void 0);return await Z({url:a,params:s,branch:D,status:200,error:null,route:r,form:l?void 0:null})}async function Te(t,l,a){for(;t--;)if(a[t]){let s=t;for(;!l[s];)s-=1;try{return{idx:s+1,node:{node:await a[t](),loader:a[t],data:{},server:null,universal:null}}}catch{continue}}}async function se({status:t,error:l,url:a,route:s}){const r={};let u=null;if(e.server_loads[0]===0)try{const v=await ze(a,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;u=v.nodes[0]??null}catch{(a.origin!==location.origin||a.pathname!==location.pathname||x)&&await W(a)}const b=await he({loader:o,url:a,params:r,route:s,parent:()=>Promise.resolve({}),server_data_node:ge(u)}),E={node:await d(),loader:d,universal:null,server:null,data:null};return await Z({url:a,params:r,branch:[b,E],status:t,error:l,route:null})}function Q(t,l){if(ue(t,G))return;const a=ce(t);for(const s of i){const r=s.exec(a);if(r)return{id:t.pathname+t.search,invalidating:l,route:s,params:it(r),url:t}}}function ce(t){return ot(t.pathname.slice(G.length)||"/")}function je({url:t,type:l,intent:a,delta:s}){let r=!1;const u=Je(m,a,t,l);s!==void 0&&(u.navigation.delta=s);const g={...u.navigation,cancel:()=>{r=!0,u.reject(new Error("navigation was cancelled"))}};return P||h.before_navigate.forEach(b=>b(g)),r?null:u}async function le({url:t,scroll:l,keepfocus:a,redirect_count:s,details:r,type:u,delta:g,nav_token:b={},accepted:E,blocked:v}){var j,D,k;const L=Q(t,!1),A=je({url:t,type:u,delta:g,intent:L});if(!A){v();return}const O=C;E(),P=!0,N&&F.navigating.set(A.navigation),K=b;let y=L&&await me(L);if(!y){if(ue(t,G))return await W(t);y=await $e(t,{id:null},await ee(new Error(`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(L==null?void 0:L.url)||t,K!==b)return A.reject(new Error("navigation was aborted")),!1;if(y.type==="redirect")if(s>=20)y=await se({status:500,error:await ee(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return oe(new URL(y.location,t).href,{},s+1,b),!1;else((j=y.props.page)==null?void 0:j.status)>=400&&await F.updated.check()&&await W(t);if(_.length=0,H=!1,T=!0,ke(O),Le(O),(D=y.props.page)!=null&&D.url&&y.props.page.url.pathname!==t.pathname&&(t.pathname=(k=y.props.page)==null?void 0:k.url.pathname),r){const I=r.replaceState?0:1;if(r.state[V]=C+=I,history[r.replaceState?"replaceState":"pushState"](r.state,"",t),!r.replaceState){let R=C+1;for(;te[R]||J[R];)delete te[R],delete J[R],R+=1}}if(p=null,N){m=y.state,y.props.page&&(y.props.page.url=t);const I=(await Promise.all(h.on_navigate.map(R=>R(A.navigation)))).filter(R=>typeof R=="function");if(I.length>0){let R=function(){h.after_navigate=h.after_navigate.filter($=>!I.includes($))};I.push(R),h.after_navigate.push(...I)}M.$set(y.props)}else xe(y);const{activeElement:w}=document;if(await ve(),S){const I=t.hash&&document.getElementById(decodeURIComponent(t.hash.slice(1)));l?scrollTo(l.x,l.y):I?I.scrollIntoView():scrollTo(0,0)}const U=document.activeElement!==w&&document.activeElement!==document.body;!a&&!U&&Se(),S=!0,y.props.page&&(q=y.props.page),P=!1,u==="popstate"&&Oe(C),A.fulfil(void 0),h.after_navigate.forEach(I=>I(A.navigation)),F.navigating.set(null),T=!1}async function $e(t,l,a,s){return t.origin===location.origin&&t.pathname===location.pathname&&!x?await se({status:s,error:a,url:t,route:l}):await W(t)}function W(t){return location.href=t.href,new Promise(()=>{})}function at(){let t;f.addEventListener("mousemove",u=>{const g=u.target;clearTimeout(t),t=setTimeout(()=>{s(g,2)},20)});function l(u){s(u.composedPath()[0],1)}f.addEventListener("mousedown",l),f.addEventListener("touchstart",l,{passive:!0});const a=new IntersectionObserver(u=>{for(const g of u)g.isIntersecting&&(ie(ce(new URL(g.target.href))),a.unobserve(g.target))},{threshold:0});function s(u,g){const b=Ge(u,f);if(!b)return;const{url:E,external:v,download:L}=Ee(b,G);if(v||L)return;const A=fe(b);if(!A.reload)if(g<=A.preload_data){const O=Q(E,!1);O&&Pe(O)}else g<=A.preload_code&&ie(ce(E))}function r(){a.disconnect();for(const u of f.querySelectorAll("a")){const{url:g,external:b,download:E}=Ee(u,G);if(b||E)continue;const v=fe(u);v.reload||(v.preload_code===de.viewport&&a.observe(u),v.preload_code===de.eager&&ie(ce(g)))}}h.after_navigate.push(r),r()}function ee(t,l){return t instanceof ae?t.body:e.hooks.handleError({error:t,event:l})??{message:l.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:t=>{ye(()=>(h.after_navigate.push(t),()=>{const l=h.after_navigate.indexOf(t);h.after_navigate.splice(l,1)}))},before_navigate:t=>{ye(()=>(h.before_navigate.push(t),()=>{const l=h.before_navigate.indexOf(t);h.before_navigate.splice(l,1)}))},on_navigate:t=>{ye(()=>(h.on_navigate.push(t),()=>{const l=h.on_navigate.indexOf(t);h.on_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(T||!N)&&(S=!1)},goto:(t,l={})=>oe(t,l,0),invalidate:t=>{if(typeof t=="function")_.push(t);else{const{href:l}=new URL(t,location.href);_.push(a=>a.href===l)}return Ie()},invalidate_all:()=>(H=!0,Ie()),preload_data:async t=>{const l=new URL(t,qe(document)),a=Q(l,!1);if(!a)throw new Error(`Attempted to preload a URL that does not belong to this app: ${l}`);await Pe(a)},preload_code:ie,apply_action:async t=>{if(t.type==="error"){const l=new URL(location.href),{branch:a,route:s}=m;if(!s)return;const r=await Te(m.branch.length,a,s.errors);if(r){const u=await Z({url:l,params:m.params,branch:a.slice(0,r.idx).concat(r.node),status:t.status??500,error:t.error,route:s});m=u.state,M.$set(u.props),ve().then(Se)}}else t.type==="redirect"?oe(t.location,{invalidateAll:!0},0):(M.$set({form:null,page:{...q,form:t.data,status:t.status}}),await ve(),M.$set({form:t.data}),t.type==="success"&&Se())},_start_router:()=>{var l;history.scrollRestoration="manual",addEventListener("beforeunload",a=>{let s=!1;if(Ue(),!P){const r=Je(m,void 0,null,"leave"),u={...r.navigation,cancel:()=>{s=!0,r.reject(new Error("navigation was cancelled"))}};h.before_navigate.forEach(g=>g(u))}s?(a.preventDefault(),a.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ue()}),(l=navigator.connection)!=null&&l.saveData||at(),f.addEventListener("click",a=>{var O;if(a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const s=Ge(a.composedPath()[0],f);if(!s)return;const{url:r,external:u,target:g,download:b}=Ee(s,G);if(!r)return;if(g==="_parent"||g==="_top"){if(window.parent!==window)return}else if(g&&g!=="_self")return;const E=fe(s);if(!(s instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||b)return;if(u||E.reload){je({url:r,type:"link"})?P=!0:a.preventDefault();return}const[L,A]=r.href.split("#");if(A!==void 0&&L===location.href.split("#")[0]){if(m.url.hash===r.hash){a.preventDefault(),(O=s.ownerDocument.getElementById(A))==null||O.scrollIntoView();return}if(B=!0,ke(C),t(r),!E.replace_state)return;B=!1,a.preventDefault()}le({url:r,scroll:E.noscroll?ne():null,keepfocus:E.keep_focus??!1,redirect_count:0,details:{state:{},replaceState:E.replace_state??r.href===location.href},accepted:()=>a.preventDefault(),blocked:()=>a.preventDefault(),type:"link"})}),f.addEventListener("submit",a=>{if(a.defaultPrevented)return;const s=HTMLFormElement.prototype.cloneNode.call(a.target),r=a.submitter;if(((r==null?void 0:r.formMethod)||s.method)!=="get")return;const g=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||s.action);if(ue(g,G))return;const b=a.target,{keep_focus:E,noscroll:v,reload:L,replace_state:A}=fe(b);if(L)return;a.preventDefault(),a.stopPropagation();const O=new FormData(b),y=r==null?void 0:r.getAttribute("name");y&&O.append(y,(r==null?void 0:r.getAttribute("value"))??""),g.search=new URLSearchParams(O).toString(),le({url:g,scroll:v?ne():null,keepfocus:E??!1,redirect_count:0,details:{state:{},replaceState:A??g.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async a=>{var s;if(K={},(s=a.state)!=null&&s[V]){if(a.state[V]===C)return;const r=J[a.state[V]],u=new URL(location.href);if(m.url.href.split("#")[0]===location.href.split("#")[0]){t(u),J[C]=ne(),C=a.state[V],scrollTo(r.x,r.y);return}const g=a.state[V]-C;await le({url:u,scroll:r,keepfocus:!1,redirect_count:0,details:null,accepted:()=>{C=a.state[V]},blocked:()=>{history.go(-g)},type:"popstate",delta:g,nav_token:K})}else if(!B){const r=new URL(location.href);t(r)}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[V]:++C},"",location.href))});for(const a of document.querySelectorAll("link"))a.rel==="icon"&&(a.href=a.href);addEventListener("pageshow",a=>{a.persisted&&F.navigating.set(null)});function t(a){m.url=a,F.page.set({...q,url:a}),F.page.notify()}},_hydrate:async({status:t=200,error:l,node_ids:a,params:s,route:r,data:u,form:g})=>{x=!0;const b=new URL(location.href);({params:s={},route:r={id:null}}=Q(b,!1)||{});let E;try{const v=a.map(async(O,y)=>{const w=u[y];return w!=null&&w.uses&&(w.uses=nt(w.uses)),he({loader:e.nodes[O],url:b,params:s,route:r,parent:async()=>{const U={};for(let j=0;j<y;j+=1)Object.assign(U,(await v[j]).data);return U},server_data_node:ge(w)})}),L=await Promise.all(v),A=i.find(({id:O})=>O===r.id);if(A){const O=A.layouts;for(let y=0;y<O.length;y++)O[y]||L.splice(y,0,void 0)}E=await Z({url:b,params:s,branch:L,status:t,error:l,form:g,route:A??null})}catch(v){if(v instanceof He){await W(new URL(v.location,location.href));return}E=await se({status:v instanceof ae?v.status:500,error:await ee(v,{url:b,params:s,route:r}),url:b,route:r})}xe(E)}}}async function ze(e,n){const i=new URL(e);i.pathname=ut(e.pathname),e.pathname.endsWith("/")&&i.searchParams.append(jt,"1"),i.searchParams.append(Tt,n.map(d=>d?"1":"0").join(""));const o=await Ye(i.href);if(!o.ok)throw new ae(o.status,await o.json());return new Promise(async d=>{var m;const f=new Map,_=o.body.getReader(),c=new TextDecoder;function p(x){return Ut(x,{Promise:N=>new Promise((S,T)=>{f.set(N,{fulfil:S,reject:T})})})}let h="";for(;;){const{done:x,value:N}=await _.read();if(x&&!h)break;for(h+=!N&&h?`
`:c.decode(N);;){const S=h.indexOf(`
`);if(S===-1)break;const T=JSON.parse(h.slice(0,S));if(h=h.slice(S+1),T.type==="redirect")return d(T);if(T.type==="data")(m=T.nodes)==null||m.forEach(P=>{(P==null?void 0:P.type)==="data"&&(P.uses=nt(P.uses),P.data=p(P.data))}),d(T);else if(T.type==="chunk"){const{id:P,data:B,error:H}=T,M=f.get(P);f.delete(P),H?M.reject(p(H)):M.fulfil(p(B))}}}})}function nt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url)}}function Se(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,i=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),i!==null?n.setAttribute("tabindex",i):n.removeAttribute("tabindex");const o=getSelection();if(o&&o.type!=="None"){const d=[];for(let f=0;f<o.rangeCount;f+=1)d.push(o.getRangeAt(f));setTimeout(()=>{if(o.rangeCount===d.length){for(let f=0;f<o.rangeCount;f+=1){const _=d[f],c=o.getRangeAt(f);if(_.commonAncestorContainer!==c.commonAncestorContainer||_.startContainer!==c.startContainer||_.endContainer!==c.endContainer||_.startOffset!==c.startOffset||_.endOffset!==c.endOffset)return}o.removeAllRanges()}})}}}function Je(e,n,i,o){var p,h;let d,f;const _=new Promise((m,x)=>{d=m,f=x});return _.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((p=e.route)==null?void 0:p.id)??null},url:e.url},to:i&&{params:(n==null?void 0:n.params)??null,route:{id:((h=n==null?void 0:n.route)==null?void 0:h.id)??null},url:i},willUnload:!n,type:o,complete:_},fulfil:d,reject:f}}async function Mt(e,n,i){const o=Ct(e,n);$t({client:o}),i?await o._hydrate(i):o.goto(location.href,{replaceState:!0}),o._start_router()}export{Mt as start};
