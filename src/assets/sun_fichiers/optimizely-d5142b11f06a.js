"use strict";(()=>{var C=Object.defineProperty;var t=(b,g)=>C(b,"name",{value:g,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["optimizely","optimizely-utils","uuid"],{47930:(b,g,r)=>{r.d(g,{S:()=>d});function n(p){const a=document.querySelectorAll(p);if(a.length>0)return a[a.length-1]}t(n,"queryLast");function h(){const p=n("meta[name=analytics-location]");return p?p.content:window.location.pathname}t(h,"pagePathname");function c(){const p=n("meta[name=analytics-location-query-strip]");let a="";p||(a=window.location.search);const _=n("meta[name=analytics-location-params]");_&&(a+=(a?"&":"?")+_.content);for(const u of document.querySelectorAll("meta[name=analytics-param-rename]")){const s=u.content.split(":",2);a=a.replace(new RegExp(`(^|[?&])${s[0]}($|=)`,"g"),`$1${s[1]}$2`)}return a}t(c,"pageQuery");function d(){return`${window.location.protocol}//${window.location.host}${h()+c()}`}t(d,"requestUri")},30161:(b,g,r)=>{r.d(g,{A:()=>h});var n=r(59753);function h(c,d){const p=c.split("/",3).join("/"),a=d.split("/",3).join("/");return p===a}t(h,"isSameRepo"),(0,n.on)("pjax:click","#js-repo-pjax-container a[href]",function(c){const d=c.currentTarget.pathname;h(d,location.pathname)||c.preventDefault()}),(0,n.on)("pjax:click",".js-comment-body",function(c){const d=c.target;d instanceof HTMLAnchorElement&&d.pathname.split("/")[3]==="files"&&c.preventDefault()})},53412:(b,g,r)=>{r.d(g,{HN:()=>a,q3:()=>_,xc:()=>p});var n=r(29946),h=r(49815),c=r(30161),d=r(11190);const p=t(()=>!(0,h.c)("PJAX_ENABLED"),"isTurboEnabled"),a=t(s=>s?.tagName==="TURBO-FRAME","isTurboFrame");if(p()){(async()=>{const{PageRenderer:e,session:i,navigator:v}=await r.e("vendors-node_modules_manuelpuyol_turbo_dist_turbo_es2017-esm_js").then(r.bind(r,74395)),f=i.adapter;i.isVisitable=()=>!0;function y(){f.progressBar.setValue(0),f.progressBar.show()}t(y,"beginProgressBar");function R(){f.progressBar.setValue(1),f.progressBar.hide()}t(R,"completeProgressBar"),document.addEventListener("turbo:before-fetch-request",l=>{const o=l.target;if(a(o)&&y(),o?.tagName==="HTML"){const w=l;w.detail.fetchOptions.headers["Turbo-Visit"]="true"}const E=(0,d.I)(l.detail.url.pathname);if(E){const w=new URLSearchParams(l.detail.url.search);for(const[L,S]of Object.entries(E))S&&w.set(L,S);l.detail.url.search=w.toString()}}),document.addEventListener("turbo:before-fetch-response",l=>{const o=l.detail.fetchResponse;o.statusCode===404&&(window.location=o.location,l.preventDefault())}),document.addEventListener("turbo:frame-render",l=>{a(l.target)&&R()}),document.addEventListener(n.QE.START,y),document.addEventListener(n.QE.END,R);const P=Object.getOwnPropertyDescriptor(e.prototype,"reloadReason").get;Object.defineProperty(e.prototype,"reloadReason",{get(){const l=P.call(this);if(l.reason!=="tracked_element_mismatch")return l;const o=Object.fromEntries(O(this.currentHeadSnapshot)),E=[];for(const[w,L]of O(this.newHeadSnapshot))o[w]!==L&&E.push(w.replace(/^x-/,"").replaceAll("-","_"));return{reason:`tracked_element_mismatch-${E.join("-")}`}}});function*O(l){for(const o of Object.values(l.detailsByOuterHTML))if(o.tracked)for(const E of o.elements)E instanceof HTMLMetaElement&&E.getAttribute("http-equiv")&&(yield[E.getAttribute("http-equiv")||"",E.getAttribute("content")||""])}t(O,"getSnapshotSignatures");function D(l){const o=history[l];history[l]=function(E,w,L){function S(A,I,T){o.call(this,{...E,...A},I,T)}t(S,"oldHistoryWithMergedState"),v.history.update(S,new URL(L||location.href,location.href),E?.turbo?.restorationIdentifier)}}t(D,"patchHistoryApi"),D("replaceState"),D("pushState")})();const s=t((e,i)=>{const v=new URL(e,window.location.origin),f=new URL(i,window.location.origin);return Boolean(f.hash)&&v.hash!==f.hash&&v.host===f.host&&v.pathname===f.pathname&&v.search===f.search},"isHashNavigation");document.addEventListener("turbo:click",async function(e){if(!(e.target instanceof HTMLElement))return;const i=e.target.closest("[data-turbo-frame]");if(i instanceof HTMLElement&&e.target.setAttribute("data-turbo-frame",i.getAttribute("data-turbo-frame")||""),!(e instanceof CustomEvent))return;s(location.href,e.detail.url)&&e.preventDefault();const v=e.target.closest("#js-repo-pjax-container"),f=new URL(e.detail.url,window.location.origin);v&&i&&!(0,c.A)(f.pathname,location.pathname)&&(e.target.removeAttribute("data-turbo-frame"),e.preventDefault())}),document.addEventListener("turbo:before-render",async e=>{if(!(e instanceof CustomEvent))return;e.preventDefault(),await _(),e.detail.resume();const i=e.detail.newBody.ownerDocument.documentElement,v=document.documentElement;for(const f of v.attributes)!i.hasAttribute(f.nodeName)&&f.nodeName!=="aria-busy"&&v.removeAttribute(f.nodeName);for(const f of i.attributes)v.getAttribute(f.nodeName)!==f.nodeValue&&v.setAttribute(f.nodeName,f.nodeValue)}),document.addEventListener("turbo:visit",n.LD),document.addEventListener("turbo:render",n.FP),document.addEventListener("beforeunload",n.FP);let m=!1;document.addEventListener("turbo:frame-load",()=>{m=!0}),document.addEventListener("turbo:load",e=>{Object.keys(e.detail.timing).length===0?(0,n.OE)()||(0,n.Po)()?(0,n.Ys)():(0,n.F6)():(0,n.Xk)({isFrameLoad:m}),m=!1}),document.addEventListener("turbo:before-visit",function(e){const i=window.onbeforeunload?.(e);i&&(confirm(i)?window.onbeforeunload=null:e.preventDefault())}),document.addEventListener("turbo:reload",function(e){e instanceof CustomEvent&&(0,n.hW)(e.detail.reason)}),document.addEventListener(n.QE.SUCCESS,()=>{if(location.hash==="")return;const e=document.createElement("a");e.href=`#${location.hash.slice(1)}`,e.click()})}async function _(){const s=document.head.querySelectorAll("link[rel=stylesheet]"),m=new Set([...document.styleSheets].map(i=>i.href)),e=[];for(const i of s)i.href===""||m.has(i.href)||e.push(u(i));await Promise.all(e)}t(_,"waitForStylesheets");function u(s,m=2e3){return new Promise(e=>{const i=t(()=>{s.removeEventListener("error",i),s.removeEventListener("load",i),e()},"onComplete");s.addEventListener("load",i,{once:!0}),s.addEventListener("error",i,{once:!0}),setTimeout(i,m)})}t(u,"waitForLoad")},64926:(b,g,r)=>{r.d(g,{$1:()=>h,d8:()=>d,ej:()=>n,kT:()=>p});function n(a){return h(a)[0]}t(n,"getCookie");function h(a){const _=[];for(const u of c()){const[s,m]=u.trim().split("=");a===s&&typeof m<"u"&&_.push({key:s,value:m})}return _}t(h,"getCookies");function c(){try{return document.cookie.split(";")}catch{return[]}}t(c,"readCookies");function d(a,_,u=null,s=!1,m="lax"){let e=document.domain;if(e==null)throw new Error("Unable to get document domain");e.endsWith(".github.com")&&(e="github.com");const i=location.protocol==="https:"?"; secure":"",v=u?`; expires=${u}`:"";s===!1&&(e=`.${e}`);try{document.cookie=`${a}=${_}; path=/; domain=${e}${v}${i}; samesite=${m}`}catch{}}t(d,"setCookie");function p(a,_=!1){let u=document.domain;if(u==null)throw new Error("Unable to get document domain");u.endsWith(".github.com")&&(u="github.com");const s=new Date().getTime(),m=new Date(s-1).toUTCString(),e=location.protocol==="https:"?"; secure":"",i=`; expires=${m}`;_===!1&&(u=`.${u}`);try{document.cookie=`${a}=''; path=/; domain=${u}${i}${e}`}catch{}}t(p,"deleteCookie")},7739:(b,g,r)=>{r.d(g,{C:()=>h,x:()=>n});const n=function(){return document.readyState==="interactive"||document.readyState==="complete"?Promise.resolve():new Promise(c=>{document.addEventListener("DOMContentLoaded",()=>{c()})})}(),h=function(){return document.readyState==="complete"?Promise.resolve():new Promise(c=>{window.addEventListener("load",c)})}()},92003:(b,g,r)=>{r.d(g,{aJ:()=>P,cI:()=>f,eK:()=>m});var n=r(29946),h=r(82918),c=r(45341),d=r(28382),p=r(47930),a=r(53412);let _=!1,u=0;const s=Date.now();function m(l,o={}){l&&l.name!=="AbortError"&&e(v(i(l),o))}t(m,"reportError");async function e(l){if(!D())return;const o=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(!!o){if(R(l.error.stacktrace)){_=!0;return}u++;try{await fetch(o,{method:"post",body:JSON.stringify(l)})}catch{}}}t(e,"report");function i(l){return{type:l.name,value:l.message,stacktrace:f(l)}}t(i,"formatError");function v(l,o={}){return Object.assign({error:l,sanitizedUrl:(0,p.S)()||window.location.href,readyState:document.readyState,referrer:(0,n.wP)(),timeSinceLoad:Math.round(Date.now()-s),user:P()||void 0,turbo:(0,a.xc)()},o)}t(v,"errorContext");function f(l){return(0,d.Q)(l.stack||"").map(o=>({filename:o.file||"",function:String(o.methodName),lineno:(o.lineNumber||0).toString(),colno:(o.column||0).toString()}))}t(f,"stacktrace");const y=/(chrome|moz|safari)-extension:\/\//;function R(l){return l.some(o=>y.test(o.filename)||y.test(o.function))}t(R,"isExtensionError");function P(){const l=document.head?.querySelector('meta[name="user-login"]')?.content;return l||`anonymous-${(0,h.b)()}`}t(P,"pageUser");let O=!1;window.addEventListener("pageshow",()=>O=!1),window.addEventListener("pagehide",()=>O=!0);function D(){return!O&&!_&&u<10&&(0,c.Gb)()}t(D,"reportable"),typeof BroadcastChannel=="function"&&new BroadcastChannel("shared-worker-error").addEventListener("message",o=>{m(o.data.error)})},49815:(b,g,r)=>{r.d(g,{$:()=>a,c:()=>d});var n=r(15205);const h=(0,n.Z)(c);function c(){return(document.head?.querySelector('meta[name="enabled-features"]')?.content||"").split(",")}t(c,"enabledFeatures");const d=(0,n.Z)(p);function p(_){return h().indexOf(_)!==-1}t(p,"isEnabled");const a={isFeatureEnabled:d}},11190:(b,g,r)=>{r.d(g,{I:()=>p,n:()=>d});var n=r(24216);const h=["notification_referrer_id","notifications_before","notifications_after","notifications_query"],c="notification_shelf";function d(s,m=null){return s.has("notification_referrer_id")?(a(s,m),_(s)):null}t(d,"storeAndStripShelfParams");function p(s=null){const m=u(s);if(!m)return(0,n.cl)(c),null;try{const e=(0,n.rV)(c);if(!e)return null;const i=JSON.parse(e);if(!i||!i.pathname)throw new Error("Must have a pathname");if(i.pathname!==m)throw new Error("Stored pathname does not match current pathname.");const v={};for(const f of h)v[f]=i[f];return v}catch{return(0,n.cl)(c),null}}t(p,"getStoredShelfParamsForCurrentPage");function a(s,m){const e=u(m);if(!e)return;const i={pathname:e};for(const v of h){const f=s.get(v);f&&(i[v]=f)}(0,n.LS)(c,JSON.stringify(i))}t(a,"storeShelfParams");function _(s){for(const m of h)s.delete(m);return s}t(_,"deleteShelfParams");function u(s){s=s||window.location.pathname;const m=/^(\/[^/]+\/[^/]+\/pull\/[^/]+)/,e=s.match(m);return e?e[0]:null}t(u,"getCurrentPullRequestPathname")},84818:(b,g,r)=>{r.d(g,{Z:()=>h});class n{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}}t(n,"NoOpStorage");function h(c,d={throwQuotaErrorsOnSet:!1},p=window){let a;try{a=p[c]}catch{a=new n}const{throwQuotaErrorsOnSet:_}=d;function u(e){try{return a.getItem(e)}catch{return null}}t(u,"getItem");function s(e,i){try{a.setItem(e,i)}catch(v){if(_&&v.message.toLowerCase().includes("quota"))throw v}}t(s,"setItem");function m(e){try{a.removeItem(e)}catch{}}return t(m,"removeItem"),{getItem:u,setItem:s,removeItem:m}}t(h,"safeStorage")},24216:(b,g,r)=>{r.d(g,{LS:()=>c,cl:()=>d,rV:()=>h});var n=r(84818);const{getItem:h,setItem:c,removeItem:d}=(0,n.Z)("sessionStorage")},29946:(b,g,r)=>{r.d(g,{F2:()=>L,F6:()=>l,FP:()=>v,LD:()=>i,OE:()=>e,Po:()=>m,QE:()=>d,Rl:()=>E,Xk:()=>O,Ys:()=>D,aN:()=>w,hW:()=>y,wP:()=>o});var n=r(24216),h=r(47930),c=r(45922);const d=Object.freeze({INITIAL:"soft-nav:initial",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",START:"soft-nav:start",END:"soft-nav:end"}),p="soft-navigation-fail",a="soft-navigation-fail-referrer",_="soft-navigation-referrer",u="soft-navigation-marker",s="reload";function m(){return(0,n.rV)(u)==="1"}t(m,"inSoftNavigation");function e(){return Boolean(R())}t(e,"hasSoftNavFailure");function i(){performance.mark(u),(0,n.LS)(u,"1"),(0,n.LS)(_,(0,h.S)()||window.location.href)}t(i,"startSoftNav");function v(){(0,n.LS)(u,"0")}t(v,"endSoftNav");function f(){(0,n.LS)(u,"0"),(0,n.cl)(_),(0,n.cl)(p),(0,n.cl)(a)}t(f,"clearSoftNav");function y(S){(0,n.LS)(p,S||s),(0,n.LS)(a,window.location.href)}t(y,"setSoftNavFail");function R(){return(0,n.rV)(p)}t(R,"getSoftNavFailReason");let P=0;function O({isFrameLoad:S=!1}){P+=1,document.dispatchEvent(new CustomEvent(d.SUCCESS,{detail:{visitCount:P,isFrameLoad:S}}))}t(O,"softNavSucceeded");function D(){const S=R()||s;document.dispatchEvent(new CustomEvent(d.ERROR,{detail:S})),P=0;const A=(0,n.rV)(a)||"";f(),(0,c.b)({turboFailureReason:S,turboStartUrl:A,turboEndUrl:window.location.href})}t(D,"softNavFailed");function l(){document.dispatchEvent(new CustomEvent(d.INITIAL)),P=0,f()}t(l,"softNavInitial");function o(){return(0,n.rV)(_)||document.referrer}t(o,"getSoftNavReferrer");function E(){if(performance.getEntriesByName(u).length===0)return null;performance.measure(u,u);const A=performance.getEntriesByName(u).pop();return A?A.duration:null}t(E,"getDurationSinceLastSoftNav");function w(){document.dispatchEvent(new Event(d.START))}t(w,"beginProgressBar");function L(){document.dispatchEvent(new Event(d.END))}t(L,"completeProgressBar")},45922:(b,g,r)=>{r.d(g,{b:()=>c});var n=r(7739);let h=[];function c(u,s=!1){u.timestamp===void 0&&(u.timestamp=new Date().getTime()),u.loggedIn=_(),h.push(u),s?a():p()}t(c,"sendStats");let d=null;async function p(){await n.C,d==null&&(d=window.requestIdleCallback(a))}t(p,"scheduleSendStats");function a(){if(d=null,!h.length)return;const u=document.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!u)return;const s=JSON.stringify({stats:h});try{navigator.sendBeacon&&navigator.sendBeacon(u,s)}catch{}h=[]}t(a,"flushStats");function _(){return!!document.head?.querySelector('meta[name="user-login"]')?.content}t(_,"isLoggedIn"),document.addEventListener("pagehide",a),document.addEventListener("visibilitychange",a)},94318:(b,g,r)=>{r.d(g,{t:()=>h});function n(c){return c.toLowerCase().replace(/-(.)/g,function(d,p){return p.toUpperCase()})}t(n,"camelCase");function h(c){const d={};for(const{name:p,value:a}of c.attributes)if(p.startsWith("data-optimizely-meta-")){const _=p.replace("data-optimizely-meta-","");a&&a.trim().length&&(d[n(_)]=a)}return d}t(h,"getUserAttributes")},28084:(b,g,r)=>{var n=r(92003),h=r(47930),c=r(48266),d=r(45341);const p={handleError(o){s(o)}};function a(){_();const o=document.head.querySelector("meta[name=optimizely-datafile]")?.content;return c.ZP.createInstance({datafile:o,errorHandler:p})}t(a,"createInstance");function _(){const o=u("optimizely.logLevel");o?c.ZP.setLogLevel(o):c.ZP.setLogger(null)}t(_,"configureLogger");function u(o){try{return window.localStorage?.getItem(o)}catch{return null}}t(u,"localStorage");async function s(o){if(!d.Gb||o.message.startsWith("Optimizely::InvalidExperimentError:"))return;const E=document.head?.querySelector('meta[name="browser-optimizely-client-errors-url"]')?.content;if(!E)return;const w={message:o.message,stack:o.stack,stacktrace:(0,n.cI)(o),sanitizedUrl:(0,h.S)()||window.location.href,user:(0,n.aJ)()||void 0};try{await fetch(E,{method:"post",body:JSON.stringify(w)})}catch{}}t(s,"reportError");var m=r(64926),e=r(82918),i=r(64463),v=r(59753),f=r(94318);let y;(async function(){y=a(),await y.onReady()})(),(0,v.on)("click","[data-optimizely-event]",function(o){if(!y)return;const E=o.currentTarget,w=E.getAttribute("data-optimizely-event")||"",[L,S]=w.trim().split(/\s*,\s*/),A=(0,f.t)(E);L&&S?y.track(L,S,A):L&&y.track(L,(0,e.b)(),A)}),(0,i.N7)("[data-optimizely-experiment]",o=>{if(!y)return;const E=o.getAttribute("data-optimizely-experiment");if(!E||o.hidden)return;const w=(0,f.t)(o),L=y.activate(E,(0,e.b)(),w);if(!L)return;const S=o.querySelectorAll("[data-optimizely-variation]");for(const A of S){const I=A.getAttribute("data-optimizely-variation");A.hidden=I!==L}});const R=document.querySelector('meta[name="enabled-homepage-translation-languages"]')?.getAttribute("content")?.split(",")||[],P=(0,m.$1)("_locale_experiment").length>0&&(0,m.$1)("_locale_experiment")[0].value==="ko"&&R.includes("ko");P&&window.location.pathname==="/"&&O(),P&&window.location.pathname==="/join"&&D();async function O(){const o="ko_homepage_translation",E=(0,e.b)(),w=(0,m.$1)("_locale")[0]?.value?.slice(0,2);y.setForcedVariation(o,E,w),y.activate(o,E);const L=document.querySelectorAll("[data-optimizely-variation]");for(const S of L)S.hidden=w!==S.getAttribute("data-optimizely-variation");for(const S of document.querySelectorAll('form[action^="/join"]'))S.addEventListener("submit",()=>{y.track("submit.homepage_signup",E)});for(const S of document.querySelectorAll('a[href^="/join"]'))S.addEventListener("click",()=>{y.track("click.homepage_signup",E)})}t(O,"runKoreanHomepageExperiment");async function D(){document.getElementById("signup-form")?.addEventListener("submit",()=>{const o="ko_homepage_translation",E=(0,e.b)();y.activate(o,E),y.track("submit.create_account",E)})}t(D,"trackSignupsFromKoreanHomepage"),window.location.pathname==="/settings/profile"&&l();async function l(){if(!y)return;const o=(0,e.b)();y.activate("test_experiment",o),y.track("test_event",o)}t(l,"runTestExperiment")},969:(b,g,r)=>{r.r(g),r.d(g,{v4:()=>n});function n(){return crypto.randomUUID()}t(n,"v4")}},b=>{var g=t(n=>b(b.s=n),"__webpack_exec__");b.O(0,["vendors-node_modules_selector-observer_dist_index_esm_js","vendors-node_modules_delegated-events_dist_index_js-node_modules_stacktrace-parser_dist_stack-74aed8","vendors-node_modules_optimizely_optimizely-sdk_dist_optimizely_browser_es_min_js"],()=>g(28084));var r=b.O()}]);})();

//# sourceMappingURL=optimizely-534fd37f40a2.js.map