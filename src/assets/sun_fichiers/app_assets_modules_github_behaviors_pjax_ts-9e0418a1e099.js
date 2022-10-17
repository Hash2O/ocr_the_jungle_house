"use strict";(()=>{var le=Object.defineProperty;var e=(M,v)=>le(M,"name",{value:v,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_behaviors_pjax_ts"],{47930:(M,v,a)=>{a.d(v,{S:()=>s});function t(E){const u=document.querySelectorAll(E);if(u.length>0)return u[u.length-1]}e(t,"queryLast");function l(){const E=t("meta[name=analytics-location]");return E?E.content:window.location.pathname}e(l,"pagePathname");function c(){const E=t("meta[name=analytics-location-query-strip]");let u="";E||(u=window.location.search);const _=t("meta[name=analytics-location-params]");_&&(u+=(u?"&":"?")+_.content);for(const o of document.querySelectorAll("meta[name=analytics-param-rename]")){const i=o.content.split(":",2);u=u.replace(new RegExp(`(^|[?&])${i[0]}($|=)`,"g"),`$1${i[1]}$2`)}return u}e(c,"pageQuery");function s(){return`${window.location.protocol}//${window.location.host}${l()+c()}`}e(s,"requestUri")},41307:(M,v,a)=>{a.d(v,{ZP:()=>r,y0:()=>se});var t=a(6170),l=a(54293),c=a(61161),s=a(12981),E=a(45922),u=a(53412);const _=20;let o,i=null;function m(p,n,h){return p.dispatchEvent(new CustomEvent(n,{bubbles:!0,cancelable:!0,detail:h}))}e(m,"dispatch");async function r(p){const n={push:!0,replace:!1,type:"GET",dataType:"html",scrollTo:0,...p};n.requestUrl=n.url;const f=U(n.url).hash,g=n.container,N=A(g);o||(o={id:L(),url:window.location.href,title:document.title,container:N,fragment:n.fragment},(0,t.lO)(o,o.title,o.url)),i?.abort();const{signal:B}=i=new AbortController;n.push===!0&&n.replace!==!0&&(ne(o.id,x(g)),(0,t.qA)(null,"",n.requestUrl)),m(g,"pjax:start",{url:n.url}),m(g,"pjax:send");let b;const F=ae();try{b=await fetch(n.url,{signal:B,method:n.type,body:n.data,headers:{Accept:"text/html","X-PJAX":"true","X-PJAX-Container":N,"X-Requested-With":"XMLHttpRequest","X-PJAX-VERSION":F.pjax??"","X-PJAX-CSP-VERSION":F.csp??"","X-PJAX-CSS-VERSION":F.css??"","X-PJAX-JS-VERSION":F.js??""}})}catch{b=void 0}if(!b||!b.ok){const W=m(g,"pjax:error");if(n.type==="GET"&&W){const ee=b&&b.headers.get("X-PJAX-URL"),ce=ee?U(ee).href:n.requestUrl;(0,E.b)({pjaxFailureReason:"response_error",requestUrl:n.requestUrl}),d(ce)}m(g,"pjax:complete"),m(g,"pjax:end");return}const q=o,T=re(),k=b.headers.get("X-PJAX-Version"),I=await b.text(),C=X(I,b,n),{contents:Z}=C,te=U(C.url);if(f&&(te.hash=f,C.url=te.href),T&&k&&T!==k){m(g,"pjax:hardLoad",{reason:"version_mismatch"}),(0,E.b)({pjaxFailureReason:"version_mismatch",requestUrl:n.requestUrl}),d(C.url);return}if(!Z){m(g,"pjax:hardLoad",{reason:"missing_response_body"}),(0,E.b)({pjaxFailureReason:"missing_response_body",requestUrl:n.requestUrl}),d(C.url);return}o={id:n.id!=null?n.id:L(),url:C.url,title:C.title,container:N,fragment:n.fragment},(n.push===!0||n.replace===!0)&&(0,t.lO)(o,C.title,C.url);const z=document.activeElement,ie=n.container!=null&&n.container.contains(z);if(z instanceof HTMLElement&&ie)try{z.blur()}catch{}C.title&&(document.title=C.title),m(g,"pjax:beforeReplace",{contents:Z,state:o,previousState:q}),O(g,Z),(0,l.b)(),(0,l.o)();const G=g.querySelector("input[autofocus], textarea[autofocus]");G&&document.activeElement!==G&&G.focus(),C.scripts&&D(C.scripts),C.stylesheets&&V(C.stylesheets);let Y=n.scrollTo;if(f){const W=(0,c.Kt)(document,f);W&&(Y=W.getBoundingClientRect().top+window.pageYOffset)}typeof Y=="number"&&window.scrollTo(window.pageXOffset,Y),m(g,"pjax:success"),m(g,"pjax:complete"),m(g,"pjax:end")}e(r,"pjaxRequest");function d(p){o&&(0,t.lO)(null,"",o.url),window.location.replace(p)}e(d,"locationReplace");let S=!0;const y=window.location.href,w=window.history.state;w&&w.container&&(o=w),"state"in window.history&&(S=!1);function P(p){if((0,u.xc)())return;S||i?.abort();const n=o,h=p.state;let f=null;if(h&&h.container){if(S&&y===h.url)return;if(n){if(n.id===h.id)return;f=n.id<h.id?"forward":"back"}const[g,N,B]=H[h.id]||[],b=document.querySelector(g||h.container);if(b instanceof HTMLElement){n&&oe(f,n.id,x(b)),m(b,"pjax:popstate",{state:h,direction:f,cachedAt:B});const F={id:h.id,url:h.url,container:b,push:!1,fragment:h.fragment||"",scrollTo:!1};N?(m(b,"pjax:start"),o=h,h.title&&(document.title=h.title),m(b,"pjax:beforeReplace",{contents:N,state:h,previousState:n}),O(b,N),(0,l.b)(),(0,l.o)(),m(b,"pjax:end")):r(F),b.offsetHeight}else(0,E.b)({pjaxFailureReason:"no_container",requestUrl:n?.url}),d(location.href)}S=!1}e(P,"onPjaxPopstate");function L(){return new Date().getTime()}e(L,"uniqueId");function x(p){const n=p.cloneNode(!0);return[A(p),Array.from(n.childNodes),Date.now()]}e(x,"cloneContents");function U(p){const n=document.createElement("a");return n.href=p,n}e(U,"parseURL");function A(p){if(p.id)return`#${p.id}`;throw new Error("pjax container has no id")}e(A,"getContainerSelector");function R(p,n,h){let f=[];for(const g of p)g instanceof Element&&(g instanceof h&&g.matches(n)&&f.push(g),f=f.concat(Array.from(g.querySelectorAll(n))));return f}e(R,"findAll");function O(p,n){p.innerHTML="";for(const h of n)h!=null&&p.appendChild(h)}e(O,"replaceWithNodes");function j(p,n){const h=p.headers.get("X-PJAX-URL");return h?U(h).href:n}e(j,"resolveUrl");function X(p,n,h){const f={url:j(n,h.requestUrl),title:""},g=/<html/i.test(p);if((n.headers.get("Content-Type")||"").split(";",1)[0].trim()!=="text/html")return f;let B,b;if(g){const T=p.match(/<head[^>]*>([\s\S.]*)<\/head>/i),k=p.match(/<body[^>]*>([\s\S.]*)<\/body>/i);B=T?Array.from((0,s.r)(document,T[0]).childNodes):[],b=k?Array.from((0,s.r)(document,k[0]).childNodes):[]}else B=b=Array.from((0,s.r)(document,p).childNodes);if(b.length===0)return f;const F=R(B,"title",HTMLTitleElement);f.title=F.length>0&&F[F.length-1].textContent||"";let q;if(h.fragment){if(h.fragment==="body")q=b;else{const T=R(b,h.fragment,Element);q=T.length>0?[T[0]]:[]}if(q.length&&(h.fragment==="body"?f.contents=q:f.contents=q.flatMap(T=>Array.from(T.childNodes)),!f.title)){const T=q[0];T instanceof Element&&(f.title=T.getAttribute("title")||T.getAttribute("data-title")||"")}}else g||(f.contents=b);if(f.contents){f.contents=f.contents.filter(function(I){return I instanceof Element?!I.matches("title"):!0});for(const I of f.contents)if(I instanceof Element)for(const C of I.querySelectorAll("title"))C.remove();const T=R(f.contents,"script[src]",HTMLScriptElement);for(const I of T)I.remove();f.scripts=T,f.contents=f.contents.filter(I=>T.indexOf(I)===-1);const k=R(f.contents,"link[rel=stylesheet]",HTMLLinkElement);for(const I of k)I.remove();f.stylesheets=k,f.contents=f.contents.filter(I=>!k.includes(I))}return f.title&&(f.title=f.title.trim()),f}e(X,"extractContainer");function D(p){const n=document.querySelectorAll("script[src]");for(const h of p){const{src:f}=h;if(Array.from(n).some(b=>b.src===f))continue;const g=document.createElement("script"),N=h.getAttribute("type");N&&(g.type=N);const B=h.getAttribute("integrity");B&&(g.integrity=B,g.crossOrigin="anonymous"),g.src=f,document.head&&document.head.appendChild(g)}}e(D,"executeScriptTags");function V(p){const n=document.querySelectorAll("link[rel=stylesheet]");for(const h of p)Array.from(n).some(f=>f.href===h.href)||document.head&&document.head.appendChild(h)}e(V,"injectStyleTags");const H={},K=[],J=[];function ne(p,n){H[p]=n,J.push(p),Q(K,0),Q(J,_)}e(ne,"cachePush");function oe(p,n,h){let f,g;H[n]=h,p==="forward"?(f=J,g=K):(f=K,g=J),f.push(n);const N=g.pop();N&&delete H[N],Q(f,_)}e(oe,"cachePop");function Q(p,n){for(;p.length>n;){const h=p.shift();if(h==null)return;delete H[h]}}e(Q,"trimCacheStack");function re(){for(const p of document.getElementsByTagName("meta")){const n=p.getAttribute("http-equiv");if(n&&n.toUpperCase()==="X-PJAX-VERSION")return p.content}return null}e(re,"findVersion");function $(p){return document.querySelector(`meta[http-equiv="${p}"]`)?.content??null}e($,"pjaxMeta");function ae(){return{pjax:$("X-PJAX-VERSION"),csp:$("X-PJAX-CSP-VERSION"),css:$("X-PJAX-CSS-VERSION"),js:$("X-PJAX-JS-VERSION")}}e(ae,"findAllVersions");function se(){return o}e(se,"getState"),window.addEventListener("popstate",P)},30161:(M,v,a)=>{a.d(v,{A:()=>l});var t=a(59753);function l(c,s){const E=c.split("/",3).join("/"),u=s.split("/",3).join("/");return E===u}e(l,"isSameRepo"),(0,t.on)("pjax:click","#js-repo-pjax-container a[href]",function(c){const s=c.currentTarget.pathname;l(s,location.pathname)||c.preventDefault()}),(0,t.on)("pjax:click",".js-comment-body",function(c){const s=c.target;s instanceof HTMLAnchorElement&&s.pathname.split("/")[3]==="files"&&c.preventDefault()})},54293:(M,v,a)=>{a.d(v,{b:()=>s,o:()=>E});var t=a(7739);const l={},c={};(async()=>(await t.x,l[document.location.pathname]=Array.from(document.querySelectorAll("head [data-pjax-transient]")),c[document.location.pathname]=Array.from(document.querySelectorAll("[data-pjax-replace]"))))(),document.addEventListener("pjax:beforeReplace",function(u){const _=u.detail.contents||[],o=u.target;for(let i=0;i<_.length;i++){const m=_[i];m instanceof Element&&(m.id==="pjax-head"?(l[document.location.pathname]=Array.from(m.children),_[i]=null):m.hasAttribute("data-pjax-replace")&&(c[document.location.pathname]||(c[document.location.pathname]=[]),c[document.location.pathname].push(m),o.querySelector(`#${m.id}`)||(_[i]=null)))}});function s(){const u=c[document.location.pathname];if(!!u)for(const _ of u){const o=document.querySelector(`#${_.id}`);o&&o.replaceWith(_)}}e(s,"replaceCachedElements");function E(){const u=l[document.location.pathname];if(!u)return;const _=document.head;for(const o of document.querySelectorAll("head [data-pjax-transient]"))o.remove();for(const o of u)o.matches("title, script, link[rel=stylesheet]")?o.matches("link[rel=stylesheet]")&&_.append(o):(o.setAttribute("data-pjax-transient",""),_.append(o))}e(E,"replaceTransientTags")},53412:(M,v,a)=>{a.d(v,{HN:()=>u,q3:()=>_,xc:()=>E});var t=a(29946),l=a(49815),c=a(30161),s=a(11190);const E=e(()=>!(0,l.c)("PJAX_ENABLED"),"isTurboEnabled"),u=e(i=>i?.tagName==="TURBO-FRAME","isTurboFrame");if(E()){(async()=>{const{PageRenderer:r,session:d,navigator:S}=await a.e("vendors-node_modules_manuelpuyol_turbo_dist_turbo_es2017-esm_js").then(a.bind(a,74395)),y=d.adapter;d.isVisitable=()=>!0;function w(){y.progressBar.setValue(0),y.progressBar.show()}e(w,"beginProgressBar");function P(){y.progressBar.setValue(1),y.progressBar.hide()}e(P,"completeProgressBar"),document.addEventListener("turbo:before-fetch-request",A=>{const R=A.target;if(u(R)&&w(),R?.tagName==="HTML"){const j=A;j.detail.fetchOptions.headers["Turbo-Visit"]="true"}const O=(0,s.I)(A.detail.url.pathname);if(O){const j=new URLSearchParams(A.detail.url.search);for(const[X,D]of Object.entries(O))D&&j.set(X,D);A.detail.url.search=j.toString()}}),document.addEventListener("turbo:before-fetch-response",A=>{const R=A.detail.fetchResponse;R.statusCode===404&&(window.location=R.location,A.preventDefault())}),document.addEventListener("turbo:frame-render",A=>{u(A.target)&&P()}),document.addEventListener(t.QE.START,w),document.addEventListener(t.QE.END,P);const L=Object.getOwnPropertyDescriptor(r.prototype,"reloadReason").get;Object.defineProperty(r.prototype,"reloadReason",{get(){const A=L.call(this);if(A.reason!=="tracked_element_mismatch")return A;const R=Object.fromEntries(x(this.currentHeadSnapshot)),O=[];for(const[j,X]of x(this.newHeadSnapshot))R[j]!==X&&O.push(j.replace(/^x-/,"").replaceAll("-","_"));return{reason:`tracked_element_mismatch-${O.join("-")}`}}});function*x(A){for(const R of Object.values(A.detailsByOuterHTML))if(R.tracked)for(const O of R.elements)O instanceof HTMLMetaElement&&O.getAttribute("http-equiv")&&(yield[O.getAttribute("http-equiv")||"",O.getAttribute("content")||""])}e(x,"getSnapshotSignatures");function U(A){const R=history[A];history[A]=function(O,j,X){function D(V,H,K){R.call(this,{...O,...V},H,K)}e(D,"oldHistoryWithMergedState"),S.history.update(D,new URL(X||location.href,location.href),O?.turbo?.restorationIdentifier)}}e(U,"patchHistoryApi"),U("replaceState"),U("pushState")})();const i=e((r,d)=>{const S=new URL(r,window.location.origin),y=new URL(d,window.location.origin);return Boolean(y.hash)&&S.hash!==y.hash&&S.host===y.host&&S.pathname===y.pathname&&S.search===y.search},"isHashNavigation");document.addEventListener("turbo:click",async function(r){if(!(r.target instanceof HTMLElement))return;const d=r.target.closest("[data-turbo-frame]");if(d instanceof HTMLElement&&r.target.setAttribute("data-turbo-frame",d.getAttribute("data-turbo-frame")||""),!(r instanceof CustomEvent))return;i(location.href,r.detail.url)&&r.preventDefault();const S=r.target.closest("#js-repo-pjax-container"),y=new URL(r.detail.url,window.location.origin);S&&d&&!(0,c.A)(y.pathname,location.pathname)&&(r.target.removeAttribute("data-turbo-frame"),r.preventDefault())}),document.addEventListener("turbo:before-render",async r=>{if(!(r instanceof CustomEvent))return;r.preventDefault(),await _(),r.detail.resume();const d=r.detail.newBody.ownerDocument.documentElement,S=document.documentElement;for(const y of S.attributes)!d.hasAttribute(y.nodeName)&&y.nodeName!=="aria-busy"&&S.removeAttribute(y.nodeName);for(const y of d.attributes)S.getAttribute(y.nodeName)!==y.nodeValue&&S.setAttribute(y.nodeName,y.nodeValue)}),document.addEventListener("turbo:visit",t.LD),document.addEventListener("turbo:render",t.FP),document.addEventListener("beforeunload",t.FP);let m=!1;document.addEventListener("turbo:frame-load",()=>{m=!0}),document.addEventListener("turbo:load",r=>{Object.keys(r.detail.timing).length===0?(0,t.OE)()||(0,t.Po)()?(0,t.Ys)():(0,t.F6)():(0,t.Xk)({isFrameLoad:m}),m=!1}),document.addEventListener("turbo:before-visit",function(r){const d=window.onbeforeunload?.(r);d&&(confirm(d)?window.onbeforeunload=null:r.preventDefault())}),document.addEventListener("turbo:reload",function(r){r instanceof CustomEvent&&(0,t.hW)(r.detail.reason)}),document.addEventListener(t.QE.SUCCESS,()=>{if(location.hash==="")return;const r=document.createElement("a");r.href=`#${location.hash.slice(1)}`,r.click()})}async function _(){const i=document.head.querySelectorAll("link[rel=stylesheet]"),m=new Set([...document.styleSheets].map(d=>d.href)),r=[];for(const d of i)d.href===""||m.has(d.href)||r.push(o(d));await Promise.all(r)}e(_,"waitForStylesheets");function o(i,m=2e3){return new Promise(r=>{const d=e(()=>{i.removeEventListener("error",d),i.removeEventListener("load",d),r()},"onComplete");i.addEventListener("load",d,{once:!0}),i.addEventListener("error",d,{once:!0}),setTimeout(d,m)})}e(o,"waitForLoad")},7739:(M,v,a)=>{a.d(v,{C:()=>l,x:()=>t});const t=function(){return document.readyState==="interactive"||document.readyState==="complete"?Promise.resolve():new Promise(c=>{document.addEventListener("DOMContentLoaded",()=>{c()})})}(),l=function(){return document.readyState==="complete"?Promise.resolve():new Promise(c=>{window.addEventListener("load",c)})}()},49815:(M,v,a)=>{a.d(v,{$:()=>u,c:()=>s});var t=a(15205);const l=(0,t.Z)(c);function c(){return(document.head?.querySelector('meta[name="enabled-features"]')?.content||"").split(",")}e(c,"enabledFeatures");const s=(0,t.Z)(E);function E(_){return l().indexOf(_)!==-1}e(E,"isEnabled");const u={isFeatureEnabled:s}},61161:(M,v,a)=>{a.d(v,{$z:()=>c,Kt:()=>t,Q:()=>l});function t(s,E=location.hash){return l(s,c(E))}e(t,"findFragmentTarget");function l(s,E){return E===""?null:s.getElementById(E)||s.getElementsByName(E)[0]}e(l,"findElementByFragmentName");function c(s){try{return decodeURIComponent(s.slice(1))}catch{return""}}e(c,"decodeFragmentValue")},6170:(M,v,a)=>{a.d(v,{Mw:()=>S,_C:()=>d,lO:()=>r,qA:()=>m,y0:()=>s});const t=[];let l=0,c;function s(){return c}e(s,"getState");function E(){try{return Math.min(Math.max(0,history.length)||0,9007199254740991)}catch{return 0}}e(E,"safeGetHistory");function u(){const w={_id:new Date().getTime(),...history.state};return o(w),w}e(u,"initializeState");function _(){return E()-1+l}e(_,"position");function o(w){c=w;const P=location.href;t[_()]={url:P,state:c},t.length=E(),window.dispatchEvent(new CustomEvent("statechange",{bubbles:!1,cancelable:!1}))}e(o,"setState");function i(){return new Date().getTime()}e(i,"uniqueId");function m(w,P,L){l=0;const x={_id:i(),...w};history.pushState(x,P,L),o(x)}e(m,"pushState");function r(w,P,L){const x={...s(),...w};history.replaceState(x,P,L),o(x)}e(r,"replaceState");function d(){const w=t[_()-1];if(w)return w.url}e(d,"getBackURL");function S(){const w=t[_()+1];if(w)return w.url}e(S,"getForwardURL"),c=u(),window.addEventListener("popstate",e(function(P){const L=P.state;if(!(!L||!L._id&&!L.turbo?.restorationIdentifier)){if(L.turbo?.restorationIdentifier){const x=L.turbo.restorationIdentifier;t[_()-1]?.state?.turbo?.restorationIdentifier===x?l--:l++}else L._id<(s()._id||NaN)?l--:l++;o(L)}},"onPopstate"),!0);let y;window.addEventListener("turbo:visit",w=>{w instanceof CustomEvent&&(y=w.detail.action)}),window.addEventListener("turbo:load",()=>{y!=="restore"&&(l=0,r(history.state,"",""))}),window.addEventListener("hashchange",e(function(){if(E()>t.length){const P={_id:i()};history.replaceState(P,"",location.href),o(P)}},"onHashchange"),!0)},11190:(M,v,a)=>{a.d(v,{I:()=>E,n:()=>s});var t=a(24216);const l=["notification_referrer_id","notifications_before","notifications_after","notifications_query"],c="notification_shelf";function s(i,m=null){return i.has("notification_referrer_id")?(u(i,m),_(i)):null}e(s,"storeAndStripShelfParams");function E(i=null){const m=o(i);if(!m)return(0,t.cl)(c),null;try{const r=(0,t.rV)(c);if(!r)return null;const d=JSON.parse(r);if(!d||!d.pathname)throw new Error("Must have a pathname");if(d.pathname!==m)throw new Error("Stored pathname does not match current pathname.");const S={};for(const y of l)S[y]=d[y];return S}catch{return(0,t.cl)(c),null}}e(E,"getStoredShelfParamsForCurrentPage");function u(i,m){const r=o(m);if(!r)return;const d={pathname:r};for(const S of l){const y=i.get(S);y&&(d[S]=y)}(0,t.LS)(c,JSON.stringify(d))}e(u,"storeShelfParams");function _(i){for(const m of l)i.delete(m);return i}e(_,"deleteShelfParams");function o(i){i=i||window.location.pathname;const m=/^(\/[^/]+\/[^/]+\/pull\/[^/]+)/,r=i.match(m);return r?r[0]:null}e(o,"getCurrentPullRequestPathname")},12981:(M,v,a)=>{a.d(v,{r:()=>t});function t(l,c){const s=l.createElement("template");return s.innerHTML=c,l.importNode(s.content,!0)}e(t,"parseHTML")},84818:(M,v,a)=>{a.d(v,{Z:()=>l});class t{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}}e(t,"NoOpStorage");function l(c,s={throwQuotaErrorsOnSet:!1},E=window){let u;try{u=E[c]}catch{u=new t}const{throwQuotaErrorsOnSet:_}=s;function o(r){try{return u.getItem(r)}catch{return null}}e(o,"getItem");function i(r,d){try{u.setItem(r,d)}catch(S){if(_&&S.message.toLowerCase().includes("quota"))throw S}}e(i,"setItem");function m(r){try{u.removeItem(r)}catch{}}return e(m,"removeItem"),{getItem:o,setItem:i,removeItem:m}}e(l,"safeStorage")},24216:(M,v,a)=>{a.d(v,{LS:()=>c,cl:()=>s,rV:()=>l});var t=a(84818);const{getItem:l,setItem:c,removeItem:s}=(0,t.Z)("sessionStorage")},29946:(M,v,a)=>{a.d(v,{F2:()=>X,F6:()=>A,FP:()=>S,LD:()=>d,OE:()=>r,Po:()=>m,QE:()=>s,Rl:()=>O,Xk:()=>x,Ys:()=>U,aN:()=>j,hW:()=>w,wP:()=>R});var t=a(24216),l=a(47930),c=a(45922);const s=Object.freeze({INITIAL:"soft-nav:initial",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",START:"soft-nav:start",END:"soft-nav:end"}),E="soft-navigation-fail",u="soft-navigation-fail-referrer",_="soft-navigation-referrer",o="soft-navigation-marker",i="reload";function m(){return(0,t.rV)(o)==="1"}e(m,"inSoftNavigation");function r(){return Boolean(P())}e(r,"hasSoftNavFailure");function d(){performance.mark(o),(0,t.LS)(o,"1"),(0,t.LS)(_,(0,l.S)()||window.location.href)}e(d,"startSoftNav");function S(){(0,t.LS)(o,"0")}e(S,"endSoftNav");function y(){(0,t.LS)(o,"0"),(0,t.cl)(_),(0,t.cl)(E),(0,t.cl)(u)}e(y,"clearSoftNav");function w(D){(0,t.LS)(E,D||i),(0,t.LS)(u,window.location.href)}e(w,"setSoftNavFail");function P(){return(0,t.rV)(E)}e(P,"getSoftNavFailReason");let L=0;function x({isFrameLoad:D=!1}){L+=1,document.dispatchEvent(new CustomEvent(s.SUCCESS,{detail:{visitCount:L,isFrameLoad:D}}))}e(x,"softNavSucceeded");function U(){const D=P()||i;document.dispatchEvent(new CustomEvent(s.ERROR,{detail:D})),L=0;const V=(0,t.rV)(u)||"";y(),(0,c.b)({turboFailureReason:D,turboStartUrl:V,turboEndUrl:window.location.href})}e(U,"softNavFailed");function A(){document.dispatchEvent(new CustomEvent(s.INITIAL)),L=0,y()}e(A,"softNavInitial");function R(){return(0,t.rV)(_)||document.referrer}e(R,"getSoftNavReferrer");function O(){if(performance.getEntriesByName(o).length===0)return null;performance.measure(o,o);const V=performance.getEntriesByName(o).pop();return V?V.duration:null}e(O,"getDurationSinceLastSoftNav");function j(){document.dispatchEvent(new Event(s.START))}e(j,"beginProgressBar");function X(){document.dispatchEvent(new Event(s.END))}e(X,"completeProgressBar")},45922:(M,v,a)=>{a.d(v,{b:()=>c});var t=a(7739);let l=[];function c(o,i=!1){o.timestamp===void 0&&(o.timestamp=new Date().getTime()),o.loggedIn=_(),l.push(o),i?u():E()}e(c,"sendStats");let s=null;async function E(){await t.C,s==null&&(s=window.requestIdleCallback(u))}e(E,"scheduleSendStats");function u(){if(s=null,!l.length)return;const o=document.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!o)return;const i=JSON.stringify({stats:l});try{navigator.sendBeacon&&navigator.sendBeacon(o,i)}catch{}l=[]}e(u,"flushStats");function _(){return!!document.head?.querySelector('meta[name="user-login"]')?.content}e(_,"isLoggedIn"),document.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u)}}]);})();

//# sourceMappingURL=app_assets_modules_github_behaviors_pjax_ts-83c5ff5942f8.js.map