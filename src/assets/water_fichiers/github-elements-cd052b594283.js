"use strict";(()=>{var se=Object.defineProperty;var a=(O,A)=>se(O,"name",{value:A,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["github-elements"],{47486:(O,A,m)=>{var b=m(71544),x=m(38257),y=m(14840),g=m(57260),E=m(13002),P=m(73921),B=m(27034),_=m(51941),d=m(88309),o=m(40987),h=m(57852),f=m(88823);window.IncludeFragmentElement.prototype.fetch=n=>(n.headers.append("X-Requested-With","XMLHttpRequest"),window.fetch(n));var u=m(99254),l=m(35803),w=Object.defineProperty,C=Object.getOwnPropertyDescriptor,T=a((n,t,e,s)=>{for(var i=s>1?void 0:s?C(t,e):t,r=n.length-1,c;r>=0;r--)(c=n[r])&&(i=(s?c(t,e,i):c(i))||i);return s&&i&&w(t,e,i),i},"__decorateClass");let D=a(class extends HTMLElement{updateURL(n){const t=n.currentTarget,e=t.getAttribute("data-url")||"";if(this.helpField.value=e,t.matches(".js-git-protocol-clone-url"))for(const s of this.helpTexts)s.textContent=e;for(const s of this.cloneURLButtons)s.classList.remove("selected");t.classList.add("selected")}},"GitCloneHelpElement");T([l.fA],D.prototype,"helpField",2),T([l.GO],D.prototype,"helpTexts",2),T([l.GO],D.prototype,"cloneURLButtons",2),D=T([l.Ih],D);var z=a((n,t,e)=>{if(!t.has(n))throw TypeError("Cannot "+e)},"__accessCheck"),V=a((n,t,e)=>(z(n,t,"read from private field"),e?e.call(n):t.get(n)),"__privateGet"),$=a((n,t,e)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,e)},"__privateAdd"),k=a((n,t,e,s)=>(z(n,t,"write to private field"),s?s.call(n,e):t.set(n,e),e),"__privateSet"),M,I,H,G;function dt(n,t){const e=[];let s=0;for(let i=0;i<n.length;i++){const r=n[i],c=t.indexOf(r,s);if(c===-1)return e;s=c+1,e.push(c)}return e}a(dt,"defaultPositions");class J extends HTMLElement{constructor(){super(...arguments);$(this,M,""),$(this,I,""),$(this,H,void 0),$(this,G,void 0)}get query(){return this.ownerInput?this.ownerInput.value:this.getAttribute("query")||""}set query(t){this.setAttribute("query",t)}get ownerInput(){const t=this.ownerDocument.getElementById(this.getAttribute("data-owner-input")||"");return t instanceof HTMLInputElement?t:null}connectedCallback(){this.handleEvent(),this.ownerInput?.addEventListener("input",this),k(this,H,new MutationObserver(()=>this.handleEvent()))}handleEvent(){V(this,G)&&cancelAnimationFrame(V(this,G)),k(this,G,requestAnimationFrame(()=>this.mark()))}disconnectedCallback(){this.ownerInput?.removeEventListener("input",this),V(this,H).disconnect()}mark(){const t=this.textContent||"",e=this.query;if(t===V(this,M)&&e===V(this,I))return;k(this,M,t),k(this,I,e),V(this,H).disconnect();let s=0;const i=document.createDocumentFragment();for(const r of(this.positions||dt)(e,t)){if(Number(r)!==r||r<s||r>t.length)continue;t.slice(s,r)!==""&&i.appendChild(document.createTextNode(t.slice(s,r))),s=r+1;const p=document.createElement("mark");p.textContent=t[r],i.appendChild(p)}i.appendChild(document.createTextNode(t.slice(s))),this.replaceChildren(i),V(this,H).observe(this,{attributes:!0,childList:!0,subtree:!0})}}a(J,"MarkedTextElement"),M=new WeakMap,I=new WeakMap,H=new WeakMap,G=new WeakMap,J.observedAttributes=["query","data-owner-input"];const q=null;window.customElements.get("marked-text")||(window.MarkedTextElement=J,window.customElements.define("marked-text",J));var Y=m(52641);class W extends HTMLElement{connectedCallback(){this.addEventListener("input",bt)}disconnectedCallback(){this.removeEventListener("input",bt)}}a(W,"PasswordStrengthElement"),window.customElements.get("password-strength")||(window.PasswordStrengthElement=W,window.customElements.define("password-strength",W));function bt(n){const t=n.currentTarget;if(!(t instanceof W))return;const e=n.target;if(!(e instanceof HTMLInputElement))return;const s=e.form;if(!(s instanceof HTMLFormElement))return;const i=ht(e.value,{minimumCharacterCount:Number(t.getAttribute("minimum-character-count")),passphraseLength:Number(t.getAttribute("passphrase-length"))});if(i.valid){e.setCustomValidity("");const r=t.querySelector("dl.form-group");r&&(r.classList.remove("errored"),r.classList.add("successed"))}else e.setCustomValidity(t.getAttribute("invalid-message")||"Invalid");Wt(t,i),(0,Y.G)(s)}a(bt,"onInput");function ht(n,t){const e={valid:!1,hasMinimumCharacterCount:n.length>=t.minimumCharacterCount,hasMinimumPassphraseLength:t.passphraseLength!==0&&n.length>=t.passphraseLength,hasLowerCase:/[a-z]/.test(n),hasNumber:/\d/.test(n)};return e.valid=e.hasMinimumPassphraseLength||e.hasMinimumCharacterCount&&e.hasLowerCase&&e.hasNumber,e}a(ht,"validatePassword");function Wt(n,t){const e=n.querySelector("[data-more-than-n-chars]"),s=n.querySelector("[data-min-chars]"),i=n.querySelector("[data-number-requirement]"),r=n.querySelector("[data-letter-requirement]"),c=n.getAttribute("error-class")?.split(" ").filter(L=>L.length>0)||[],p=n.getAttribute("pass-class")?.split(" ").filter(L=>L.length>0)||[];for(const L of[e,s,i,r])L?.classList.remove(...c,...p);if(t.hasMinimumPassphraseLength&&e)e.classList.add(...p);else if(t.valid)s.classList.add(...p),i.classList.add(...p),r.classList.add(...p);else{const L=t.hasMinimumCharacterCount?p:c,S=t.hasNumber?p:c,U=t.hasLowerCase?p:c;e?.classList.add(...c),s.classList.add(...L),i.classList.add(...S),r.classList.add(...U)}}a(Wt,"highlightPasswordStrengthExplainer");var ie=m(37211);class xt extends B.Z{async fetch(t,e=1e3){const s=await super.fetch(t);return s.status===202?(await new Promise(i=>setTimeout(i,e)),this.fetch(t,e*1.5)):s}}a(xt,"PollIncludeFragmentElement"),window.customElements.get("poll-include-fragment")||(window.PollIncludeFragmentElement=xt,window.customElements.define("poll-include-fragment",xt));var Nt=m(75329);class Lt extends Nt.nJ{connectedCallback(){mt.push(this),yt||(It(),yt=window.setInterval(It,1e3))}disconnectedCallback(){const t=mt.indexOf(this);t!==-1&&mt.splice(t,1),mt.length||(window.clearInterval(yt),yt=void 0)}getFormattedDate(){const t=this.date;if(!t)return;const e=new Date().getTime()-t.getTime(),s=Math.floor(e/1e3),i=Math.floor(s/60),r=Math.floor(i/60),c=Math.floor(r/24),p=s-i*60,L=i-r*60,S=r-c*24;return i<1?this.applyPrecision([`${s}s`]):r<1?this.applyPrecision([`${i}m`,`${p}s`]):c<1?this.applyPrecision([`${r}h`,`${L}m`,`${p}s`]):this.applyPrecision([`${c}d`,`${S}h`,`${L}m`,`${p}s`])}applyPrecision(t){const e=Number(this.getAttribute("data-precision")||t.length);return t.slice(0,e).join(" ")}}a(Lt,"PreciseTimeAgoElement");const mt=[];let yt;function It(){for(const n of mt)n.textContent=n.getFormattedDate()||""}a(It,"updateNowElements"),window.customElements.get("precise-time-ago")||(window.PreciseTimeAgoElement=Lt,window.customElements.define("precise-time-ago",Lt));var Ft=m(12981),Rt=m(56238),Vt=Object.defineProperty,zt=Object.getOwnPropertyDescriptor,ft=a((n,t,e,s)=>{for(var i=s>1?void 0:s?zt(t,e):t,r=n.length-1,c;r>=0;r--)(c=n[r])&&(i=(s?c(t,e,i):c(i))||i);return s&&i&&Vt(t,e,i),i},"remote_pagination_element_decorateClass");let it=a(class extends HTMLElement{constructor(){super(...arguments);this.loaderWasFocused=!1}connectedCallback(){this.setPaginationUrl(this.list)}get hasNextPage(){return!this.form.hidden}loadNextPage(){!this.hasNextPage||(0,Rt.Bt)(this.form)}get disabled(){return this.submitButton.hasAttribute("aria-disabled")}set disabled(n){n?this.submitButton.setAttribute("aria-disabled","true"):this.submitButton.removeAttribute("aria-disabled"),this.submitButton.classList.toggle("disabled",n)}loadstart(n){n.target.addEventListener("focus",()=>{this.loaderWasFocused=!0},{once:!0}),n.target.addEventListener("include-fragment-replaced",()=>{this.setPaginationUrl(this.list),this.loaderWasFocused&&this.focusMarkers.pop()?.focus(),this.loaderWasFocused=!1},{once:!0})}async submit(n){if(n.preventDefault(),this.disabled)return;this.disabled=!0;let t;try{const s=await fetch(this.form.action);if(!s.ok)return;t=await s.text()}catch{return}const e=(0,Ft.r)(document,t);this.setPaginationUrl(e),this.list.append(e),this.focusMarkers.pop()?.focus(),this.disabled=!1,this.dispatchEvent(new CustomEvent("remote-pagination-load"))}setPaginationUrl(n){const t=n.querySelector("[data-pagination-src]");if(!t)return;const e=t.getAttribute("data-pagination-src");e?(this.form.action=e,this.form.hidden=!1):this.form.hidden=!0}},"RemotePaginationElement");ft([l.fA],it.prototype,"form",2),ft([l.fA],it.prototype,"list",2),ft([l.GO],it.prototype,"focusMarkers",2),ft([l.fA],it.prototype,"submitButton",2),it=ft([l.Ih],it);var St=m(10160);const qt=/\s|\(|\[/;function jt(n,t,e){const s=n.lastIndexOf(t,e-1);if(s===-1||n.lastIndexOf(" ",e-1)>s)return;const r=n[s-1];return r&&!qt.test(r)?void 0:{word:n.substring(s+t.length,e),position:s+t.length,beginningOfLine:$t(r)}}a(jt,"keyword");const $t=a(n=>n===void 0||/\n/.test(n),"isBeginningOfLine"),Ut=["position:absolute;","overflow:auto;","word-wrap:break-word;","top:0px;","left:-9999px;"],kt=["box-sizing","font-family","font-size","font-style","font-variant","font-weight","height","letter-spacing","line-height","max-height","min-height","padding-bottom","padding-left","padding-right","padding-top","border-bottom","border-left","border-right","border-top","text-decoration","text-indent","text-transform","width","word-spacing"],Ht=new WeakMap;function Gt(n,t){const e=n.nodeName.toLowerCase();if(e!=="textarea"&&e!=="input")throw new Error("expected textField to a textarea or input");let s=Ht.get(n);if(s&&s.parentElement===n.parentElement)s.innerHTML="";else{s=document.createElement("div"),Ht.set(n,s);const p=window.getComputedStyle(n),L=Ut.slice(0);e==="textarea"?L.push("white-space:pre-wrap;"):L.push("white-space:nowrap;");for(let S=0,U=kt.length;S<U;S++){const ct=kt[S];L.push(`${ct}:${p.getPropertyValue(ct)};`)}s.style.cssText=L.join(" ")}const i=document.createElement("span");i.style.cssText="position: absolute;",i.innerHTML="&nbsp;";let r,c;if(typeof t=="number"){let p=n.value.substring(0,t);p&&(r=document.createTextNode(p)),p=n.value.substring(t),p&&(c=document.createTextNode(p))}else{const p=n.value;p&&(r=document.createTextNode(p))}if(r&&s.appendChild(r),s.appendChild(i),c&&s.appendChild(c),!s.parentElement){if(!n.parentElement)throw new Error("textField must have a parentElement to mirror");n.parentElement.insertBefore(s,n)}return s.scrollTop=n.scrollTop,s.scrollLeft=n.scrollLeft,{mirror:s,marker:i}}a(Gt,"textFieldMirror");function Kt(n,t=n.selectionEnd){const{mirror:e,marker:s}=Gt(n,t),i=e.getBoundingClientRect(),r=s.getBoundingClientRect();return setTimeout(()=>{e.remove()},5e3),{top:r.top-i.top,left:r.left-i.left}}a(Kt,"textFieldSelectionPosition");const rt=new WeakMap;class Ot{constructor(t,e){this.expander=t,this.input=e,this.combobox=null,this.menu=null,this.match=null,this.justPasted=!1,this.oninput=this.onInput.bind(this),this.onpaste=this.onPaste.bind(this),this.onkeydown=this.onKeydown.bind(this),this.oncommit=this.onCommit.bind(this),this.onmousedown=this.onMousedown.bind(this),this.onblur=this.onBlur.bind(this),this.interactingWithMenu=!1,e.addEventListener("paste",this.onpaste),e.addEventListener("input",this.oninput),e.addEventListener("keydown",this.onkeydown),e.addEventListener("blur",this.onblur)}destroy(){this.input.removeEventListener("paste",this.onpaste),this.input.removeEventListener("input",this.oninput),this.input.removeEventListener("keydown",this.onkeydown),this.input.removeEventListener("blur",this.onblur)}activate(t,e){this.input===document.activeElement&&this.setMenu(t,e)}deactivate(){const t=this.menu,e=this.combobox;return!t||!e?!1:(this.menu=null,this.combobox=null,t.removeEventListener("combobox-commit",this.oncommit),t.removeEventListener("mousedown",this.onmousedown),e.destroy(),t.remove(),!0)}setMenu(t,e){this.deactivate(),this.menu=e,e.id||(e.id=`text-expander-${Math.floor(Math.random()*1e5).toString()}`),this.expander.append(e);const s=e.querySelector(".js-slash-command-menu-items");s?this.combobox=new St.Z(this.input,s):this.combobox=new St.Z(this.input,e);const{top:i,left:r}=Kt(this.input,t.position),c=parseInt(window.getComputedStyle(this.input).fontSize);e.style.top=`${i+c}px`,e.style.left=`${r}px`,this.combobox.start(),e.addEventListener("combobox-commit",this.oncommit),e.addEventListener("mousedown",this.onmousedown),this.combobox.navigate(1)}setValue(t){if(t==null)return;const e=this.match;if(!e)return;const s=this.input.value.substring(0,e.position-e.key.length),i=this.input.value.substring(e.position+e.text.length);let{cursor:r,value:c}=this.replaceCursorMark(t);c=c?.length===0?c:`${c} `,this.input.value=s+c+i,this.deactivate(),this.input.focus(),r=s.length+(r||c.length),this.input.selectionStart=r,this.input.selectionEnd=r}replaceCursorMark(t){const e=/%cursor%/gm,s=e.exec(t);return s?{cursor:s.index,value:t.replace(e,"")}:{cursor:null,value:t}}async onCommit({target:t}){const e=t;if(!(e instanceof HTMLElement)||!this.combobox)return;const s=this.match;if(!s)return;const i={item:e,key:s.key,value:null},r=new CustomEvent("text-expander-value",{cancelable:!0,detail:i}),c=!this.expander.dispatchEvent(r),{onValue:p}=await m.e("app_assets_modules_github_slash-command-expander-element_slash-command-suggester_ts").then(m.bind(m,49914));await p(this.expander,s.key,e),!c&&i.value&&this.setValue(i.value)}onBlur(){if(this.interactingWithMenu){this.interactingWithMenu=!1;return}this.deactivate()}onPaste(){this.justPasted=!0}async delay(t){return new Promise(e=>setTimeout(e,t))}async onInput(){if(this.justPasted){this.justPasted=!1;return}const t=this.findMatch();if(t){if(this.match=t,await this.delay(this.appropriateDelay(this.match)),this.match!==t)return;const e=await this.notifyProviders(t);if(!this.match)return;e?this.activate(t,e):this.deactivate()}else this.match=null,this.deactivate()}appropriateDelay(t){return t.beginningOfLine||t.text!==""?0:250}findMatch(){const t=this.input.selectionEnd,e=this.input.value;for(const s of this.expander.keys){const i=jt(e,s,t);if(i)return{text:i.word,key:s,position:i.position,beginningOfLine:i.beginningOfLine}}}async notifyProviders(t){const e=[],s=a(S=>e.push(S),"provide"),i=new CustomEvent("text-expander-change",{cancelable:!0,detail:{provide:s,text:t.text,key:t.key}});if(!this.expander.dispatchEvent(i))return;const{onChange:c}=await m.e("app_assets_modules_github_slash-command-expander-element_slash-command-suggester_ts").then(m.bind(m,49914));return c(this.expander,t.key,s,t.text),(await Promise.all(e)).filter(S=>S.matched).map(S=>S.fragment)[0]}onMousedown(){this.interactingWithMenu=!0}onKeydown(t){t.key==="Escape"&&this.deactivate()&&(t.stopImmediatePropagation(),t.preventDefault())}}a(Ot,"SlashCommandExpander");class Mt extends HTMLElement{get keys(){const t=this.getAttribute("keys");return t?t.split(" "):[]}connectedCallback(){const t=this.querySelector('input[type="text"], textarea');if(!(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement))return;const e=new Ot(this,t);rt.set(this,e)}disconnectedCallback(){const t=rt.get(this);!t||(t.destroy(),rt.delete(this))}setValue(t){const e=rt.get(this);!e||e.setValue(t)}setMenu(t,e=!1){const s=rt.get(this);!s||!s.match||(e&&(s.interactingWithMenu=!0),s.setMenu(s.match,t))}closeMenu(){const t=rt.get(this);!t||t.setValue("")}isLoading(){const t=this.getElementsByClassName("js-slash-command-expander-loading")[0];if(t){const e=t.cloneNode(!0);e.classList.remove("d-none"),this.setMenu(e)}}showError(){const t=this.getElementsByClassName("js-slash-command-expander-error")[0];if(t){const e=t.cloneNode(!0);e.classList.remove("d-none"),this.setMenu(e)}}}a(Mt,"SlashCommandExpanderElement"),window.customElements.get("slash-command-expander")||(window.SlashCommandExpanderElement=Mt,window.customElements.define("slash-command-expander",Mt));var Xt=Object.defineProperty,Zt=Object.getOwnPropertyDescriptor,_t=a((n,t,e,s)=>{for(var i=s>1?void 0:s?Zt(t,e):t,r=n.length-1,c;r>=0;r--)(c=n[r])&&(i=(s?c(t,e,i):c(i))||i);return s&&i&&Xt(t,e,i),i},"text_suggester_element_decorateClass");let pt=a(class extends HTMLElement{acceptSuggestion(){this.suggestion?.textContent&&(this.input.value=this.suggestion.textContent,this.input.dispatchEvent(new Event("input")),this.suggestionContainer&&(this.suggestionContainer.hidden=!0),this.input.focus())}},"TextSuggesterElement");_t([l.fA],pt.prototype,"input",2),_t([l.fA],pt.prototype,"suggestionContainer",2),_t([l.fA],pt.prototype,"suggestion",2),pt=_t([l.Ih],pt);var Bt=a((n,t,e)=>{if(!t.has(n))throw TypeError("Cannot "+e)},"virtual_filter_input_element_accessCheck"),F=a((n,t,e)=>(Bt(n,t,"read from private field"),e?e.call(n):t.get(n)),"virtual_filter_input_element_privateGet"),at=a((n,t,e)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,e)},"virtual_filter_input_element_privateAdd"),R=a((n,t,e,s)=>(Bt(n,t,"write to private field"),s?s.call(n,e):t.set(n,e),e),"virtual_filter_input_element_privateSet"),gt,ot,lt,tt,vt,K;function Qt(n){return Boolean(n instanceof Set||n&&typeof n=="object"&&"size"in n&&"add"in n&&"delete"in n&&"clear"in n)}a(Qt,"isSetAlike");class Tt extends HTMLElement{constructor(){super(...arguments);at(this,gt,void 0),at(this,ot,0),at(this,lt,null),at(this,tt,void 0),at(this,vt,new Set),at(this,K,null),this.filter=(t,e)=>String(t).includes(e)}static get observedAttributes(){return["src","loading","data-property","aria-owns"]}get filtered(){if(F(this,K))return F(this,K);if(this.hasAttribute("aria-owns")){const t=this.ownerDocument.getElementById(this.getAttribute("aria-owns")||"");t&&Qt(t)&&R(this,K,t)}return F(this,K)||R(this,K,new Set)}set filtered(t){R(this,K,t)}get input(){return this.querySelector("input, textarea")}get src(){return this.getAttribute("src")||""}set src(t){this.setAttribute("src",t)}get loading(){return this.getAttribute("loading")==="lazy"?"lazy":"eager"}set loading(t){this.setAttribute("loading",t)}get accept(){return this.getAttribute("accept")||""}set accept(t){this.setAttribute("accept",t)}get property(){return this.getAttribute("data-property")||""}set property(t){this.setAttribute("data-property",t)}reset(){this.filtered.clear(),R(this,vt,new Set)}clear(){!this.input||(this.input.value="",this.input.dispatchEvent(new Event("input")))}attributeChangedCallback(t,e,s){const i=this.isConnected&&this.src,r=this.loading==="eager",c=t==="src"||t==="loading"||t==="accept"||t==="data-property",p=t==="src"||t==="data-property",L=e!==s;p&&L&&(R(this,lt,null),F(this,tt)&&clearTimeout(F(this,tt))),i&&r&&c&&L?(cancelAnimationFrame(F(this,ot)),R(this,ot,requestAnimationFrame(()=>this.load()))):t==="aria-owns"&&R(this,K,null)}connectedCallback(){this.src&&this.loading==="eager"&&(cancelAnimationFrame(F(this,ot)),R(this,ot,requestAnimationFrame(()=>this.load())));const t=this.input;if(!t)return;const e=this.getAttribute("aria-owns");e!==null&&this.attributeChangedCallback("aria-owns","",e),t.setAttribute("autocomplete","off"),t.setAttribute("spellcheck","false"),this.src&&this.loading==="lazy"&&(document.activeElement===t?this.load():t.addEventListener("focus",()=>{this.load()},{once:!0})),t.addEventListener("input",this)}disconnectedCallback(){this.input?.removeEventListener("input",this)}handleEvent(t){t.type==="input"&&(F(this,tt)&&clearTimeout(F(this,tt)),R(this,tt,window.setTimeout(()=>this.filterItems(),this.input?.value?.length||0<3?300:0)))}async load(){F(this,gt)?.abort(),R(this,gt,new AbortController);const{signal:t}=F(this,gt);if(!this.src)throw new Error("missing src");if(await new Promise(e=>setTimeout(e,0)),!t.aborted){this.dispatchEvent(new Event("loadstart"));try{const e=await this.fetch(this.request(),{signal:t,headers:{"X-Requested-With":"XMLHttpRequest"}});if(location.origin+this.src!==e.url)return;if(!e.ok)throw new Error(`Failed to load resource: the server responded with a status of ${e.status}`);R(this,vt,new Set((await e.json())[this.property])),R(this,lt,null),this.dispatchEvent(new Event("loadend"))}catch(e){if(t.aborted){this.dispatchEvent(new Event("loadend"));return}throw(async()=>(this.dispatchEvent(new Event("error")),this.dispatchEvent(new Event("loadend"))))(),e}this.filtered.clear(),this.filterItems()}}request(){return new Request(this.src,{method:"GET",credentials:"same-origin",headers:{Accept:this.accept||"application/json"}})}fetch(t,e){return fetch(t,e)}filterItems(){const t=this.input?.value.trim()??"",e=F(this,lt);if(R(this,lt,t),t===e)return;this.dispatchEvent(new CustomEvent("virtual-filter-input-filter"));let s;e&&t.includes(e)?s=this.filtered:(s=F(this,vt),this.filtered.clear());for(const i of s)this.filter(i,t)?this.filtered.add(i):this.filtered.delete(i);this.dispatchEvent(new CustomEvent("virtual-filter-input-filtered"))}}a(Tt,"VirtualFilterInputElement"),gt=new WeakMap,ot=new WeakMap,lt=new WeakMap,tt=new WeakMap,vt=new WeakMap,K=new WeakMap;const re=null;window.customElements.get("virtual-filter-input")||(window.VirtualFilterInputElement=Tt,window.customElements.define("virtual-filter-input",Tt));var Dt=a((n,t,e)=>{if(!t.has(n))throw TypeError("Cannot "+e)},"virtual_list_element_accessCheck"),v=a((n,t,e)=>(Dt(n,t,"read from private field"),e?e.call(n):t.get(n)),"virtual_list_element_privateGet"),et=a((n,t,e)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,e)},"virtual_list_element_privateAdd"),X=a((n,t,e,s)=>(Dt(n,t,"write to private field"),s?s.call(n,e):t.set(n,e),e),"virtual_list_element_privateSet"),nt,N,Q,j,Et,At,ut;class Pt extends HTMLElement{constructor(){super(...arguments);et(this,nt,!1),et(this,N,new Set),et(this,Q,new Map),et(this,j,1/0),et(this,Et,new Map),et(this,At,new Map),et(this,ut,0)}static get observedAttributes(){return["data-updating"]}get updating(){return this.getAttribute("data-updating")==="lazy"?"lazy":"eager"}set updating(t){this.setAttribute("data-updating",t)}get size(){return v(this,N).size}get range(){const t=this.getBoundingClientRect().height,{scrollTop:e}=this,s=`${e}-${t}`;if(v(this,Et).has(s))return v(this,Et).get(s);let i=0,r=0,c=0,p=0;const L=v(this,Q);for(const S of v(this,N)){const U=L.get(S)||v(this,j);if(c+U<e)c+=U,i+=1,r+=1;else if(p-U<t)p+=U,r+=1;else if(p>=t)break}return[i,r]}attributeChangedCallback(t,e,s){if(e===s||!this.isConnected)return;const i=t==="data-updating"&&s==="eager",r=t==="data-sorted"&&this.hasAttribute("data-sorted");(i||r)&&this.update()}connectedCallback(){this.addEventListener("scroll",()=>this.update()),this.updateSync=this.updateSync.bind(this)}update(){v(this,ut)&&cancelAnimationFrame(v(this,ut)),!v(this,nt)&&this.hasAttribute("data-sorted")?X(this,ut,requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("virtual-list-sort",{cancelable:!0}))&&this.sort()})):X(this,ut,requestAnimationFrame(this.updateSync))}renderItem(t){const e={item:t,fragment:document.createDocumentFragment()};return this.dispatchEvent(new CustomEvent("virtual-list-render-item",{detail:e})),e.fragment.children[0]}recalculateHeights(t){const e=this.querySelector("ul, ol, tbody");e&&(e.append(this.renderItem(t)),X(this,j,e.children[0].getBoundingClientRect().height),v(this,Q).set(t,v(this,j)),e.replaceChildren())}updateSync(){const t=this.querySelector("ul, ol");if(!t)return;const[e,s]=this.range;if(s<e||!this.dispatchEvent(new CustomEvent("virtual-list-update",{cancelable:!0})))return;const r=new Map,c=v(this,At);let p=-1,L=!0,S=0;for(const Z of v(this,N)){if(p===-1&&(!Number.isFinite(v(this,j))||v(this,j)===0)&&this.recalculateHeights(Z),p+=1,p<e){S+=v(this,Q).get(Z)||v(this,j);continue}if(p>s){L=!1;break}let st=null;if(c.has(Z))st=c.get(Z);else{if(st=this.renderItem(Z),!st)continue;c.set(Z,st)}r.set(Z,st)}t.replaceChildren(...r.values()),t.style.paddingTop=`${S}px`;const U=this.size*v(this,j);t.style.height=`${U||0}px`;let ct=!1;const te=this.getBoundingClientRect().bottom;for(const[Z,st]of r){const{height:ee,bottom:ne}=st.getBoundingClientRect();ct=ct||ne>=te,v(this,Q).set(Z,ee)}if(!L&&this.size>r.size&&!ct)return v(this,Et).delete(`${this.scrollTop}-${this.getBoundingClientRect().height}`),this.update();this.dispatchEvent(new CustomEvent("virtual-list-updated"))}has(t){return v(this,N).has(t)}add(t){return v(this,N).add(t),X(this,nt,!1),Number.isFinite(v(this,j))||this.recalculateHeights(t),this.updating==="eager"&&this.update(),this}delete(t){const e=v(this,N).delete(t);return X(this,nt,!1),v(this,Q).delete(t),this.updating==="eager"&&this.update(),e}clear(){v(this,N).clear(),v(this,Q).clear(),X(this,j,1/0),X(this,nt,!0),this.updating==="eager"&&this.update()}forEach(t,e){for(const s of this)t.call(e,s,s,this)}entries(){return v(this,N).entries()}values(){return v(this,N).values()}keys(){return v(this,N).keys()}[Symbol.iterator](){return v(this,N)[Symbol.iterator]()}sort(t){return X(this,N,new Set(Array.from(this).sort(t))),X(this,nt,!0),this.updating==="eager"&&this.update(),this}}a(Pt,"VirtualListElement"),nt=new WeakMap,N=new WeakMap,Q=new WeakMap,j=new WeakMap,Et=new WeakMap,At=new WeakMap,ut=new WeakMap;const ae=null;window.customElements.get("virtual-list")||(window.VirtualListElement=Pt,window.customElements.define("virtual-list",Pt));var Jt=Object.defineProperty,Yt=Object.getOwnPropertyDescriptor,Ct=a((n,t,e,s)=>{for(var i=s>1?void 0:s?Yt(t,e):t,r=n.length-1,c;r>=0;r--)(c=n[r])&&(i=(s?c(t,e,i):c(i))||i);return s&&i&&Jt(t,e,i),i},"visible_password_element_decorateClass");let wt=a(class extends HTMLElement{show(){this.input.type="text",this.input.focus(),this.showButton.hidden=!0,this.hideButton.hidden=!1}hide(){this.input.type="password",this.input.focus(),this.hideButton.hidden=!0,this.showButton.hidden=!1}},"VisiblePasswordElement");Ct([l.fA],wt.prototype,"input",2),Ct([l.fA],wt.prototype,"showButton",2),Ct([l.fA],wt.prototype,"hideButton",2),wt=Ct([l.Ih],wt)},7679:(O,A,m)=>{m.d(A,{H:()=>y,v:()=>x});var b=m(59753);function x(){const g=document.getElementById("ajax-error-message");g&&(g.hidden=!1)}a(x,"showGlobalError");function y(){const g=document.getElementById("ajax-error-message");g&&(g.hidden=!0)}a(y,"hideGlobalError"),(0,b.on)("deprecatedAjaxError","[data-remote]",function(g){const E=g.detail,{error:P,text:B}=E;g.currentTarget===g.target&&(P==="abort"||P==="canceled"||(/<html/.test(B)?(x(),g.stopImmediatePropagation()):setTimeout(function(){g.defaultPrevented||x()},0)))}),(0,b.on)("deprecatedAjaxSend","[data-remote]",function(){y()}),(0,b.on)("click",".js-ajax-error-dismiss",function(){y()})},52641:(O,A,m)=>{m.d(A,{G:()=>_});var b=m(45075),x=m(64463),y=m(59753);const g=["input[pattern]","input[required]","textarea[required]","input[data-required-change]","textarea[data-required-change]","input[data-required-value]","textarea[data-required-value]"].join(",");function E(d){const o=d.getAttribute("data-required-value"),h=d.getAttribute("data-required-value-prefix");if(d.value===o)d.setCustomValidity("");else{let f=o;h&&(f=h+f),d.setCustomValidity(f)}}a(E,"checkValidityForRequiredValueField"),(0,b.q6)("[data-required-value]",function(d){const o=d.currentTarget;E(o)}),(0,y.on)("change","[data-required-value]",function(d){const o=d.currentTarget;E(o),_(o.form)}),(0,b.q6)("[data-required-trimmed]",function(d){const o=d.currentTarget;o.value.trim()===""?o.setCustomValidity(o.getAttribute("data-required-trimmed")):o.setCustomValidity("")}),(0,y.on)("change","[data-required-trimmed]",function(d){const o=d.currentTarget;o.value.trim()===""?o.setCustomValidity(o.getAttribute("data-required-trimmed")):o.setCustomValidity(""),_(o.form)}),(0,b.ZG)(g,d=>{let o=d.checkValidity();function h(){const f=d.checkValidity();f!==o&&d.form&&_(d.form),o=f}a(h,"inputHandler"),d.addEventListener("input",h),d.addEventListener("blur",a(function f(){d.removeEventListener("input",h),d.removeEventListener("blur",f)},"blurHandler"))});const P=new WeakMap;function B(d){P.get(d)||(d.addEventListener("change",()=>_(d)),P.set(d,!0))}a(B,"installHandlers");function _(d){const o=d.checkValidity();for(const h of d.querySelectorAll("button[data-disable-invalid]"))h.disabled=!o}a(_,"validate"),(0,x.N7)("button[data-disable-invalid]",{constructor:HTMLButtonElement,initialize(d){const o=d.form;o&&(B(o),d.disabled=!o.checkValidity())}}),(0,x.N7)("input[data-required-change], textarea[data-required-change]",function(d){const o=d,h=o.type==="radio"&&o.form?o.form.elements.namedItem(o.name).value:null;function f(u){const l=o.form;if(u&&o.type==="radio"&&l&&h)for(const w of l.elements.namedItem(o.name))w instanceof HTMLInputElement&&w.setCustomValidity(o.value===h?"unchanged":"");else o.setCustomValidity(o.value===(h||o.defaultValue)?"unchanged":"")}a(f,"customValidity"),o.addEventListener("input",f),o.addEventListener("change",f),f(),o.form&&_(o.form)}),document.addEventListener("reset",function(d){if(d.target instanceof HTMLFormElement){const o=d.target;setTimeout(()=>_(o))}})},56238:(O,A,m)=>{m.d(A,{Bt:()=>E,DN:()=>_,KL:()=>h,Se:()=>B,qC:()=>f,sw:()=>d});var b=m(59753),x=m(2061),y=m(7679);(0,b.on)("click",".js-remote-submit-button",async function(u){const w=u.currentTarget.form;u.preventDefault();let C;try{C=await fetch(w.action,{method:w.method,body:new FormData(w),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})}catch{}C&&!C.ok&&(0,y.v)()});function g(u,l,w){return u.dispatchEvent(new CustomEvent(l,{bubbles:!0,cancelable:w}))}a(g,"fire");function E(u,l){l&&(P(u,l),(0,x.j)(l)),g(u,"submit",!0)&&u.submit()}a(E,"requestSubmit");function P(u,l){if(!(u instanceof HTMLFormElement))throw new TypeError("The specified element is not of type HTMLFormElement.");if(!(l instanceof HTMLElement))throw new TypeError("The specified element is not of type HTMLElement.");if(l.type!=="submit")throw new TypeError("The specified element is not a submit button.");if(!u||u!==l.form)throw new Error("The specified element is not owned by the form element.")}a(P,"checkButtonValidity");function B(u,l){if(typeof l=="boolean")if(u instanceof HTMLInputElement)u.checked=l;else throw new TypeError("only checkboxes can be set to boolean value");else{if(u.type==="checkbox")throw new TypeError("checkbox can't be set to string value");u.value=l}g(u,"change",!1)}a(B,"changeValue");function _(u,l){for(const w in l){const C=l[w],T=u.elements.namedItem(w);(T instanceof HTMLInputElement||T instanceof HTMLTextAreaElement)&&(T.value=C)}}a(_,"fillFormValues");function d(u){if(!(u instanceof HTMLElement))return!1;const l=u.nodeName.toLowerCase(),w=(u.getAttribute("type")||"").toLowerCase();return l==="select"||l==="textarea"||l==="input"&&w!=="submit"&&w!=="reset"||u.isContentEditable}a(d,"isFormField");function o(u){return new URLSearchParams(u)}a(o,"searchParamsFromFormData");function h(u,l){const w=new URLSearchParams(u.search),C=o(l);for(const[T,D]of C)w.append(T,D);return w.toString()}a(h,"combineGetFormSearchParams");function f(u){return o(new FormData(u)).toString()}a(f,"serialize")},99254:(O,A,m)=>{m.d(A,{Z:()=>d});var b=m(47142);const x=a((o,h,f)=>{if(!(0,b.CD)(o,h))return-1/0;const u=(0,b.Gs)(o,h);return u<f?-1/0:u},"getScore"),y=a((o,h,f)=>{o.innerHTML="";let u=0;for(const l of(0,b.m7)(h,f)){f.slice(u,l)!==""&&o.appendChild(document.createTextNode(f.slice(u,l))),u=l+1;const C=document.createElement("mark");C.textContent=f[l],o.appendChild(C)}o.appendChild(document.createTextNode(f.slice(u)))},"highlightElement"),g=new WeakMap,E=new WeakMap,P=new WeakMap,B=a(o=>{if(!P.has(o)&&o instanceof HTMLElement){const h=(o.getAttribute("data-value")||o.textContent||"").trim();return P.set(o,h),h}return P.get(o)||""},"getTextCache");class _ extends HTMLElement{connectedCallback(){const h=this.querySelector("ul");if(!h)return;const f=new Set(h.querySelectorAll("li")),u=this.querySelector("input");u instanceof HTMLInputElement&&u.addEventListener("input",()=>{this.value=u.value});const l=new MutationObserver(C=>{let T=!1;for(const D of C)if(D.type==="childList"&&D.addedNodes.length){for(const z of D.addedNodes)if(z instanceof HTMLLIElement&&!f.has(z)){const V=B(z);T=T||(0,b.CD)(this.value,V),f.add(z)}}T&&this.sort()});l.observe(h,{childList:!0});const w={handler:l,items:f,lazyItems:new Map,timer:null};E.set(this,w)}disconnectedCallback(){const h=E.get(this);h&&(h.handler.disconnect(),E.delete(this))}addLazyItems(h,f){const u=E.get(this);if(!u)return;const{lazyItems:l}=u,{value:w}=this;let C=!1;for(const T of h)l.set(T,f),C=C||Boolean(w)&&(0,b.CD)(w,T);C&&this.sort()}sort(){const h=g.get(this);h&&(h.aborted=!0);const f={aborted:!1};g.set(this,f);const{minScore:u,markSelector:l,maxMatches:w,value:C}=this,T=E.get(this);if(!T||!this.dispatchEvent(new CustomEvent("fuzzy-list-will-sort",{cancelable:!0,detail:C})))return;const{items:D,lazyItems:z}=T,V=this.hasAttribute("mark-selector"),$=this.querySelector("ul");if(!$)return;const k=[];if(C){for(const M of D){const I=B(M),H=x(C,I,u);H!==-1/0&&k.push({item:M,score:H})}for(const[M,I]of z){const H=x(C,M,u);H!==-1/0&&k.push({text:M,render:I,score:H})}k.sort((M,I)=>I.score-M.score).splice(w)}else{let M=k.length;for(const I of D){if(M>=w)break;k.push({item:I,score:1}),M+=1}for(const[I,H]of z){if(M>=w)break;k.push({text:I,render:H,score:1}),M+=1}}requestAnimationFrame(()=>{if(f.aborted)return;const M=$.querySelector('input[type="radio"]:checked');$.innerHTML="";let I=0;const H=a(()=>{if(f.aborted)return;const G=Math.min(k.length,I+100),dt=document.createDocumentFragment();for(let q=I;q<G;q+=1){const Y=k[q];let W=null;if("render"in Y&&"text"in Y){const{render:bt,text:ht}=Y;W=bt(ht),D.add(W),P.set(W,ht),z.delete(ht)}else"item"in Y&&(W=Y.item);W instanceof HTMLElement&&(V&&y(l&&W.querySelector(l)||W,V?C:"",B(W)),dt.appendChild(W))}I=G;let J=!1;if(M instanceof HTMLInputElement)for(const q of dt.querySelectorAll('input[type="radio"]:checked'))q instanceof HTMLInputElement&&q.value!==M.value&&(q.checked=!1,J=!0);if($.appendChild(dt),M&&J&&M.dispatchEvent(new Event("change",{bubbles:!0})),G<k.length)requestAnimationFrame(H);else{$.hidden=k.length===0;const q=this.querySelector("[data-fuzzy-list-show-on-empty]");q&&(q.hidden=k.length>0),this.dispatchEvent(new CustomEvent("fuzzy-list-sorted",{detail:k.length}))}},"nextBatch");H()})}get value(){return this.getAttribute("value")||""}set value(h){this.setAttribute("value",h)}get markSelector(){return this.getAttribute("mark-selector")||""}set markSelector(h){h?this.setAttribute("mark-selector",h):this.removeAttribute("mark-selector")}get minScore(){return Number(this.getAttribute("min-score")||0)}set minScore(h){Number.isNaN(h)||this.setAttribute("min-score",String(h))}get maxMatches(){return Number(this.getAttribute("max-matches")||1/0)}set maxMatches(h){Number.isNaN(h)||this.setAttribute("max-matches",String(h))}static get observedAttributes(){return["value","mark-selector","min-score","max-matches"]}attributeChangedCallback(h,f,u){if(f===u)return;const l=E.get(this);!l||(l.timer&&window.clearTimeout(l.timer),l.timer=window.setTimeout(()=>this.sort(),100))}}a(_,"FuzzyListElement");const d=_;window.customElements.get("fuzzy-list")||(window.FuzzyListElement=_,window.customElements.define("fuzzy-list",_))},45075:(O,A,m)=>{m.d(A,{ZG:()=>E,q6:()=>B,w4:()=>P});var b=m(8439);let x=!1;const y=new b.Z;function g(_){const d=_.target;if(d instanceof HTMLElement&&d.nodeType!==Node.DOCUMENT_NODE)for(const o of y.matches(d))o.data.call(null,d)}a(g,"handleFocus");function E(_,d){x||(x=!0,document.addEventListener("focus",g,!0)),y.add(_,d),document.activeElement instanceof HTMLElement&&document.activeElement.matches(_)&&d(document.activeElement)}a(E,"onFocus");function P(_,d,o){function h(f){const u=f.currentTarget;!u||(u.removeEventListener(_,o),u.removeEventListener("blur",h))}a(h,"blurHandler"),E(d,function(f){f.addEventListener(_,o),f.addEventListener("blur",h)})}a(P,"onKey");function B(_,d){function o(h){const{currentTarget:f}=h;!f||(f.removeEventListener("input",d),f.removeEventListener("blur",o))}a(o,"blurHandler"),E(_,function(h){h.addEventListener("input",d),h.addEventListener("blur",o)})}a(B,"onInput")},12981:(O,A,m)=>{m.d(A,{r:()=>b});function b(x,y){const g=x.createElement("template");return g.innerHTML=y,x.importNode(g.content,!0)}a(b,"parseHTML")},37211:(O,A,m)=>{m.d(A,{X:()=>x});var b=m(64463);function x(){return/Windows/.test(navigator.userAgent)?"windows":/Macintosh/.test(navigator.userAgent)?"mac":null}a(x,"getPlatform");function y(g){const E=(g.getAttribute("data-platforms")||"").split(","),P=x();return Boolean(P&&E.includes(P))}a(y,"runningOnPlatform"),(0,b.N7)(".js-remove-unless-platform",function(g){y(g)||g.remove()})},2061:(O,A,m)=>{m.d(A,{j:()=>b,u:()=>x});function b(y){const g=y.closest("form");if(!(g instanceof HTMLFormElement))return;let E=x(g);if(y.name){const P=y.matches("input[type=submit]")?"Submit":"",B=y.value||P;E||(E=document.createElement("input"),E.type="hidden",E.classList.add("js-submit-button-value"),g.prepend(E)),E.name=y.name,E.value=B}else E&&E.remove()}a(b,"persistSubmitButtonValue");function x(y){const g=y.querySelector("input.js-submit-button-value");return g instanceof HTMLInputElement?g:null}a(x,"findPersistedSubmitButtonValue")}},O=>{var A=a(b=>O(O.s=b),"__webpack_exec__");O.O(0,["vendors-node_modules_selector-observer_dist_index_esm_js","vendors-node_modules_delegated-events_dist_index_js-node_modules_github_details-dialog-elemen-63debe","vendors-node_modules_fzy_js_index_js-node_modules_github_catalyst_lib_index_js","vendors-node_modules_github_filter-input-element_dist_index_js-node_modules_github_remote-inp-73b750","vendors-node_modules_github_time-elements_dist_index_js","vendors-node_modules_github_file-attachment-element_dist_index_js-node_modules_primer_view-co-54af05"],()=>A(47486));var m=O.O()}]);})();

//# sourceMappingURL=github-elements-9844bd8f66e9.js.map