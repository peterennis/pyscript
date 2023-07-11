Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const e=(e,t=document)=>t.querySelector(e),t=(e,t=document)=>[...t.querySelectorAll(e)],r=(e,t=document)=>{const r=(new XPathEvaluator).createExpression(e).evaluate(t,XPathResult.ORDERED_NODE_SNAPSHOT_TYPE),n=[];for(let e=0,{snapshotLength:t}=r;e<t;e++)n.push(r.snapshotItem(e));return n},n="object"==typeof self?self:globalThis,s=e=>((e,t)=>{const r=(t,r)=>(e.set(r,t),t),s=o=>{if(e.has(o))return e.get(o);const[a,i]=t[o];switch(a){case 0:case-1:return r(i,o);case 1:{const e=r([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=r({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return r(new Date(i),o);case 4:{const{source:e,flags:t}=i;return r(new RegExp(e,t),o)}case 5:{const e=r(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=r(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:e,message:t}=i;return r(new n[e](t),o)}case 8:return r(BigInt(i),o);case"BigInt":return r(Object(BigInt(i)),o)}return r(new n[a](i),o)};return s})(new Map,e)(0),o="",{toString:a}={},{keys:i}=Object,c=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const r=a.call(e).slice(8,-1);switch(r){case"Array":return[1,o];case"Object":return[2,o];case"Date":return[3,o];case"RegExp":return[4,o];case"Map":return[5,o];case"Set":return[6,o]}return r.includes("Array")?[1,r]:r.includes("Error")?[7,r]:[2,r]},l=([e,t])=>0===e&&("function"===t||"symbol"===t),u=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const s=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},o=n=>{if(r.has(n))return r.get(n);let[a,u]=c(n);switch(a){case 0:{let t=n;switch(u){case"bigint":a=8,t=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);t=null;break;case"undefined":return s([-1],n)}return s([a,t],n)}case 1:{if(u)return s([u,[...n]],n);const e=[],t=s([a,e],n);for(const t of n)e.push(o(t));return t}case 2:{if(u)switch(u){case"BigInt":return s([u,n.toString()],n);case"Boolean":case"Number":case"String":return s([u,n.valueOf()],n)}if(t&&"toJSON"in n)return o(n.toJSON());const r=[],f=s([a,r],n);for(const t of i(n))!e&&l(c(n[t]))||r.push([o(t),o(n[t])]);return f}case 3:return s([a,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return s([a,{source:e,flags:t}],n)}case 5:{const t=[],r=s([a,t],n);for(const[r,s]of n)(e||!l(c(r))&&!l(c(s)))&&t.push([o(r),o(s)]);return r}case 6:{const t=[],r=s([a,t],n);for(const r of n)!e&&l(c(r))||t.push(o(r));return r}}const{message:f}=n;return s([a,{name:u,message:f}],n)};return o})(!(t||r),!!t,new Map,n)(e),n},{parse:f,stringify:p}=JSON,d={json:!0,lossy:!0};var h=Object.freeze({__proto__:null,parse:e=>s(f(e)),stringify:e=>p(u(e,d))}),w="2f6fe6d4-8ba8-424a-83c5-8fadca1ea103",y=e=>({value:new Promise((t=>{let r=new Worker("data:application/javascript,"+encodeURIComponent("onmessage=({data:b})=>(Atomics.wait(b,0),postMessage(0))"));r.onmessage=t,r.postMessage(e)}))})
/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:g,Map:m,SharedArrayBuffer:b,Uint16Array:v}=globalThis,{BYTES_PER_ELEMENT:E}=g,{BYTES_PER_ELEMENT:A}=v,{isArray:P}=Array,{notify:k,wait:S,waitAsync:$}=Atomics,{fromCharCode:x}=String,R=(e,t)=>e?($||y)(t,0):(S(t,0),{value:{then:e=>e()}}),M=new WeakSet,W=new WeakMap;let j=0;const _=(e,{parse:t,stringify:r}=JSON)=>{if(!W.has(e)){const n=(t,...r)=>e.postMessage({[w]:r},{transfer:t});W.set(e,new Proxy(new m,{has:(e,t)=>"string"==typeof t&&!t.startsWith("_"),get:(r,s)=>"then"===s?null:(...r)=>{const o=j++;let a=new g(new b(E)),i=[];M.has(r.at(-1)||i)&&M.delete(i=r.pop()),n(i,o,a,s,r);const c=e instanceof Worker;return R(c,a).value.then((()=>{const e=a[0];if(!e)return;const r=A*e;return a=new g(new b(r+r%E)),n([],o,a),R(c,a).value.then((()=>t(x(...new v(a.buffer).slice(0,e)))))}))},set(t,n,s){if(!t.size){const n=new m;e.addEventListener("message",(async e=>{const s=e.data?.[w];if(P(s)){e.stopImmediatePropagation();const[o,a,...i]=s;if(i.length){const[e,s]=i;if(!t.has(e))throw new Error(`Unsupported action: ${e}`);{const i=r(await t.get(e)(...s));i&&(n.set(o,i),a[0]=i.length)}}else{const e=n.get(o);n.delete(o);for(let t=new v(a.buffer),r=0;r<e.length;r++)t[r]=e.charCodeAt(r)}k(a,0)}}))}return!!t.set(n,s)}}))}return W.get(e)};_.transfer=(...e)=>(M.add(e),e);const O="object",T="function",B="number",I="string",F="undefined",L="symbol",{defineProperty:C,getOwnPropertyDescriptor:J,getPrototypeOf:U,isExtensible:N,ownKeys:z,preventExtensions:D,set:q,setPrototypeOf:G}=Reflect,Y=U(Int8Array),X=(e,t)=>{const{get:r,set:n,value:s}=e;return r&&(e.get=t(r)),n&&(e.set=t(n)),s&&(e.value=t(s)),e},H=(e,t)=>[e,t],Q=e=>t=>{const r=typeof t;switch(r){case O:if(null==t)return H("null",t);case T:return e(r,t);case"boolean":case B:case I:case F:case"bigint":return H(r,t);case L:if(K.has(t))return H(r,K.get(t))}throw new Error(`Unable to handle this ${r} type`)},K=new Map(z(Symbol).filter((e=>typeof Symbol[e]===L)).map((e=>[Symbol[e],e]))),V=e=>{for(const[t,r]of K)if(r===e)return t},Z="apply",ee="construct",te="defineProperty",re="deleteProperty",ne="get",se="getOwnPropertyDescriptor",oe="getPrototypeOf",ae="has",ie="isExtensible",ce="ownKeys",le="preventExtensions",ue="set",fe="setPrototypeOf",pe="delete";let de=0;const he=new Map,we=new Map,ye=new WeakMap;if(globalThis.window===globalThis){const{addEventListener:e}=EventTarget.prototype;C(EventTarget.prototype,"addEventListener",{value(t,r,...n){return n.at(0)?.invoke&&(ye.has(this)||ye.set(this,new Map),ye.get(this).set(t,[].concat(n[0].invoke)),delete n[0].invoke),e.call(this,t,r,...n)}})}const ge=Q(((e,t)=>{if(!he.has(t)){let e;for(;we.has(e=de++););he.set(t,e),we.set(e,t)}return H(e,he.get(t))}));var me=(e,t,r)=>{const{[r]:n}=e,s=new FinalizationRegistry((e=>{n(pe,H(I,e))})),o=([e,t])=>{switch(e){case O:if(null==t)return globalThis;if(typeof t===B)return we.get(t);if(!(t instanceof Y))for(const e in t)t[e]=o(t[e]);return t;case T:if(typeof t===I){if(!we.has(t)){const e=function(...e){return e.at(0)instanceof Event&&(e=>{const{currentTarget:t,target:r,type:n}=e;for(const s of ye.get(t||r)?.get(n)||[])e[s]()})(...e),n(Z,H(T,t),ge(this),e.map(ge))},r=new WeakRef(e);we.set(t,r),s.register(e,t,r)}return we.get(t).deref()}return we.get(t);case L:return V(t)}return t},a={[Z]:(e,t,r)=>ge(e.apply(t,r)),[ee]:(e,t)=>ge(new e(...t)),[te]:(e,t,r)=>ge(C(e,t,r)),[re]:(e,t)=>ge(delete e[t]),[oe]:e=>ge(U(e)),[ne]:(e,t)=>ge(e[t]),[se]:(e,t)=>{const r=J(e,t);return r?H(O,X(r,ge)):H(F,r)},[ae]:(e,t)=>ge(t in e),[ie]:e=>ge(N(e)),[ce]:e=>H(O,z(e).map(ge)),[le]:e=>ge(D(e)),[ue]:(e,t,r)=>ge(q(e,t,r)),[fe]:(e,t)=>ge(G(e,t)),[pe](e){he.delete(we.get(e)),we.delete(e)}};return e[t]=(e,t,...r)=>{switch(e){case Z:r[0]=o(r[0]),r[1]=r[1].map(o);break;case ee:r[0]=r[0].map(o);break;case te:{const[e,t]=r;r[0]=o(e);const{get:n,set:s,value:a}=t;n&&(t.get=o(n)),s&&(t.set=o(s)),a&&(t.value=o(a));break}default:r=r.map(o)}return a[e](o(t),...r)},{proxy:e,window:globalThis,isWindowProxy:()=>!1}};let be=0;const ve=new Map,Ee=new Map,Ae=Symbol(),Pe=e=>typeof e===T?e():e,ke=e=>typeof e===O&&!!e&&Ae in e,Se="isArray",$e=Array[Se],xe=Q(((e,t)=>{if(Ae in t)return Pe(t[Ae]);if(e===T){if(!Ee.has(t)){let e;for(;Ee.has(e=String(be++)););ve.set(t,e),Ee.set(e,t)}return H(e,ve.get(t))}if(!(t instanceof Y))for(const e in t)t[e]=xe(t[e]);return H(e,t)}));var Re=(e,t,r)=>{const{[t]:n}=e,s=new Map,o=new FinalizationRegistry((e=>{s.delete(e),n(pe,xe(e))})),a=e=>{const[t,r]=e;if(!s.has(r)){const n=t===T?Me.bind(e):e,a=new Proxy(n,l),i=new WeakRef(a);s.set(r,i),o.register(a,r,i)}return s.get(r).deref()},i=e=>{const[t,r]=e;switch(t){case O:return typeof r===B?a(e):r;case T:return typeof r===I?Ee.get(r):a(e);case L:return V(r)}return r},c=(e,t,...r)=>i(n(e,Pe(t),...r)),l={[Z]:(e,t,r)=>c(Z,e,xe(t),r.map(xe)),[ee]:(e,t)=>c(ee,e,t.map(xe)),[te]:(e,t,r)=>{const{get:n,set:s,value:o}=r;return typeof n===T&&(r.get=xe(n)),typeof s===T&&(r.set=xe(s)),typeof o===T&&(r.value=xe(o)),c(te,e,xe(t),r)},[re]:(e,t)=>c(re,e,xe(t)),[oe]:e=>c(oe,e),[ne]:(e,t)=>t===Ae?e:c(ne,e,xe(t)),[se]:(e,t)=>{const r=c(se,e,xe(t));return r&&X(r,i)},[ae]:(e,t)=>t===Ae||c(ae,e,xe(t)),[ie]:e=>c(ie,e),[ce]:e=>c(ce,e).map(i),[le]:e=>c(le,e),[ue]:(e,t,r)=>c(ue,e,xe(t),xe(r)),[fe]:(e,t)=>c(fe,e,xe(t))};e[r]=(e,t,r,n)=>{switch(e){case Z:return i(t).apply(i(r),n.map(i));case pe:{const e=i(t);ve.delete(Ee.get(e)),Ee.delete(e)}}};const u=new Proxy([O,null],l),f=u.Array[Se];return C(Array,Se,{value:e=>ke(e)?f(e):$e(e)}),{window:u,isWindowProxy:ke,proxy:e,get global(){return console.warn("Deprecated: please access `window` field instead"),this.window},get isGlobal(){return function(e){return console.warn("Deprecated: please access `isWindowProxy` field instead"),this.isWindowProxy(e)}.bind(this)}}};function Me(){return this}const We=w+"M",je=w+"T",_e=new WeakMap,Oe=(e,...t)=>{const r=_(e,...t);if(!_e.has(r)){const t=e instanceof Worker?me:Re;_e.set(r,t(r,We,je))}return _e.get(r)};Oe.transfer=_.transfer;const{isArray:Te}=Array,{assign:Be,create:Ie,defineProperties:Fe,defineProperty:Le,entries:Ce}=Object,{all:Je,resolve:Ue}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),Ne=(e,t=location.href)=>new URL(e,t).href,ze=e=>e.arrayBuffer(),De=e=>e.json(),qe=e=>e.text(),Ge=[["beforeRun","codeBeforeRunWorker"],["beforeRunAsync","codeBeforeRunWorkerAsync"],["afterRun","codeAfterRunWorker"],["afterRunAsync","codeAfterRunWorkerAsync"]];class Ye{constructor(e,t){this.interpreter=e,this.onWorkerReady=t.onWorkerReady;for(const[e,r]of Ge)this[e]=t[r]?.()}get stringHooks(){const e={};for(const[t]of Ge)this[t]&&(e[t]=this[t]);return e}}var Xe=(...e)=>function(t,r){const n=new Worker(URL.createObjectURL(new Blob(['const e="object"==typeof self?self:globalThis,t=t=>((t,r)=>{const n=(e,r)=>(t.set(r,e),e),s=o=>{if(t.has(o))return t.get(o);const[a,i]=r[o];switch(a){case 0:case-1:return n(i,o);case 1:{const e=n([],o);for(const t of i)e.push(s(t));return e}case 2:{const e=n({},o);for(const[t,r]of i)e[s(t)]=s(r);return e}case 3:return n(new Date(i),o);case 4:{const{source:e,flags:t}=i;return n(new RegExp(e,t),o)}case 5:{const e=n(new Map,o);for(const[t,r]of i)e.set(s(t),s(r));return e}case 6:{const e=n(new Set,o);for(const t of i)e.add(s(t));return e}case 7:{const{name:t,message:r}=i;return n(new e[t](r),o)}case 8:return n(BigInt(i),o);case"BigInt":return n(Object(BigInt(i)),o)}return n(new e[a](i),o)};return s})(new Map,t)(0),r="",{toString:n}={},{keys:s}=Object,o=e=>{const t=typeof e;if("object"!==t||!e)return[0,t];const s=n.call(e).slice(8,-1);switch(s){case"Array":return[1,r];case"Object":return[2,r];case"Date":return[3,r];case"RegExp":return[4,r];case"Map":return[5,r];case"Set":return[6,r]}return s.includes("Array")?[1,s]:s.includes("Error")?[7,s]:[2,s]},a=([e,t])=>0===e&&("function"===t||"symbol"===t),i=(e,{json:t,lossy:r}={})=>{const n=[];return((e,t,r,n)=>{const i=(e,t)=>{const s=n.push(e)-1;return r.set(t,s),s},c=n=>{if(r.has(n))return r.get(n);let[l,u]=o(n);switch(l){case 0:{let t=n;switch(u){case"bigint":l=8,t=n.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+u);t=null;break;case"undefined":return i([-1],n)}return i([l,t],n)}case 1:{if(u)return i([u,[...n]],n);const e=[],t=i([l,e],n);for(const t of n)e.push(c(t));return t}case 2:{if(u)switch(u){case"BigInt":return i([u,n.toString()],n);case"Boolean":case"Number":case"String":return i([u,n.valueOf()],n)}if(t&&"toJSON"in n)return c(n.toJSON());const r=[],f=i([l,r],n);for(const t of s(n))!e&&a(o(n[t]))||r.push([c(t),c(n[t])]);return f}case 3:return i([l,n.toISOString()],n);case 4:{const{source:e,flags:t}=n;return i([l,{source:e,flags:t}],n)}case 5:{const t=[],r=i([l,t],n);for(const[r,s]of n)(e||!a(o(r))&&!a(o(s)))&&t.push([c(r),c(s)]);return r}case 6:{const t=[],r=i([l,t],n);for(const r of n)!e&&a(o(r))||t.push(c(r));return r}}const{message:f}=n;return i([l,{name:u,message:f}],n)};return c})(!(t||r),!!t,new Map,n)(e),n},{parse:c,stringify:l}=JSON,u={json:!0,lossy:!0};var f=Object.freeze({__proto__:null,parse:e=>t(c(e)),stringify:e=>l(i(e,u))}),p="2f6fe6d4-8ba8-424a-83c5-8fadca1ea103",d=e=>({value:new Promise((t=>{let r=new Worker("data:application/javascript,"+encodeURIComponent("onmessage=({data:b})=>(Atomics.wait(b,0),postMessage(0))"));r.onmessage=t,r.postMessage(e)}))})\n/*! (c) Andrea Giammarchi - ISC */;const{Int32Array:w,Map:g,SharedArrayBuffer:y,Uint16Array:h}=globalThis,{BYTES_PER_ELEMENT:m}=w,{BYTES_PER_ELEMENT:b}=h,{isArray:v}=Array,{notify:S,wait:E,waitAsync:M}=Atomics,{fromCharCode:P}=String,j=(e,t)=>e?(M||d)(t,0):(E(t,0),{value:{then:e=>e()}}),k=new WeakSet,x=new WeakMap;let A=0;const $=(e,{parse:t,stringify:r}=JSON)=>{if(!x.has(e)){const n=(t,...r)=>e.postMessage({[p]:r},{transfer:t});x.set(e,new Proxy(new g,{has:(e,t)=>"string"==typeof t&&!t.startsWith("_"),get:(r,s)=>"then"===s?null:(...r)=>{const o=A++;let a=new w(new y(m)),i=[];k.has(r.at(-1)||i)&&k.delete(i=r.pop()),n(i,o,a,s,r);const c=e instanceof Worker;return j(c,a).value.then((()=>{const e=a[0];if(!e)return;const r=b*e;return a=new w(new y(r+r%m)),n([],o,a),j(c,a).value.then((()=>t(P(...new h(a.buffer).slice(0,e)))))}))},set(t,n,s){if(!t.size){const n=new g;e.addEventListener("message",(async e=>{const s=e.data?.[p];if(v(s)){e.stopImmediatePropagation();const[o,a,...i]=s;if(i.length){const[e,s]=i;if(!t.has(e))throw new Error(`Unsupported action: ${e}`);{const i=r(await t.get(e)(...s));i&&(n.set(o,i),a[0]=i.length)}}else{const e=n.get(o);n.delete(o);for(let t=new h(a.buffer),r=0;r<e.length;r++)t[r]=e.charCodeAt(r)}S(a,0)}}))}return!!t.set(n,s)}}))}return x.get(e)};$.transfer=(...e)=>(k.add(e),e);const _="object",W="function",O="number",R="string",T="undefined",F="symbol",{defineProperty:B,getOwnPropertyDescriptor:J,getPrototypeOf:I,isExtensible:L,ownKeys:U,preventExtensions:N,set:D,setPrototypeOf:z}=Reflect,C=I(Int8Array),q=(e,t)=>{const{get:r,set:n,value:s}=e;return r&&(e.get=t(r)),n&&(e.set=t(n)),s&&(e.value=t(s)),e},G=(e,t)=>[e,t],K=e=>t=>{const r=typeof t;switch(r){case _:if(null==t)return G("null",t);case W:return e(r,t);case"boolean":case O:case R:case T:case"bigint":return G(r,t);case F:if(Y.has(t))return G(r,Y.get(t))}throw new Error(`Unable to handle this ${r} type`)},Y=new Map(U(Symbol).filter((e=>typeof Symbol[e]===F)).map((e=>[Symbol[e],e]))),V=e=>{for(const[t,r]of Y)if(r===e)return t},H="apply",Q="construct",X="defineProperty",Z="deleteProperty",ee="get",te="getOwnPropertyDescriptor",re="getPrototypeOf",ne="has",se="isExtensible",oe="ownKeys",ae="preventExtensions",ie="set",ce="setPrototypeOf",le="delete";let ue=0;const fe=new Map,pe=new Map,de=new WeakMap;if(globalThis.window===globalThis){const{addEventListener:e}=EventTarget.prototype;B(EventTarget.prototype,"addEventListener",{value(t,r,...n){return n.at(0)?.invoke&&(de.has(this)||de.set(this,new Map),de.get(this).set(t,[].concat(n[0].invoke)),delete n[0].invoke),e.call(this,t,r,...n)}})}const we=K(((e,t)=>{if(!fe.has(t)){let e;for(;pe.has(e=ue++););fe.set(t,e),pe.set(e,t)}return G(e,fe.get(t))}));var ge=(e,t,r)=>{const{[r]:n}=e,s=new FinalizationRegistry((e=>{n(le,G(R,e))})),o=([e,t])=>{switch(e){case _:if(null==t)return globalThis;if(typeof t===O)return pe.get(t);if(!(t instanceof C))for(const e in t)t[e]=o(t[e]);return t;case W:if(typeof t===R){if(!pe.has(t)){const e=function(...e){return e.at(0)instanceof Event&&(e=>{const{currentTarget:t,target:r,type:n}=e;for(const s of de.get(t||r)?.get(n)||[])e[s]()})(...e),n(H,G(W,t),we(this),e.map(we))},r=new WeakRef(e);pe.set(t,r),s.register(e,t,r)}return pe.get(t).deref()}return pe.get(t);case F:return V(t)}return t},a={[H]:(e,t,r)=>we(e.apply(t,r)),[Q]:(e,t)=>we(new e(...t)),[X]:(e,t,r)=>we(B(e,t,r)),[Z]:(e,t)=>we(delete e[t]),[re]:e=>we(I(e)),[ee]:(e,t)=>we(e[t]),[te]:(e,t)=>{const r=J(e,t);return r?G(_,q(r,we)):G(T,r)},[ne]:(e,t)=>we(t in e),[se]:e=>we(L(e)),[oe]:e=>G(_,U(e).map(we)),[ae]:e=>we(N(e)),[ie]:(e,t,r)=>we(D(e,t,r)),[ce]:(e,t)=>we(z(e,t)),[le](e){fe.delete(pe.get(e)),pe.delete(e)}};return e[t]=(e,t,...r)=>{switch(e){case H:r[0]=o(r[0]),r[1]=r[1].map(o);break;case Q:r[0]=r[0].map(o);break;case X:{const[e,t]=r;r[0]=o(e);const{get:n,set:s,value:a}=t;n&&(t.get=o(n)),s&&(t.set=o(s)),a&&(t.value=o(a));break}default:r=r.map(o)}return a[e](o(t),...r)},{proxy:e,window:globalThis,isWindowProxy:()=>!1}};let ye=0;const he=new Map,me=new Map,be=Symbol(),ve=e=>typeof e===W?e():e,Se=e=>typeof e===_&&!!e&&be in e,Ee="isArray",Me=Array[Ee],Pe=K(((e,t)=>{if(be in t)return ve(t[be]);if(e===W){if(!me.has(t)){let e;for(;me.has(e=String(ye++)););he.set(t,e),me.set(e,t)}return G(e,he.get(t))}if(!(t instanceof C))for(const e in t)t[e]=Pe(t[e]);return G(e,t)}));var je=(e,t,r)=>{const{[t]:n}=e,s=new Map,o=new FinalizationRegistry((e=>{s.delete(e),n(le,Pe(e))})),a=e=>{const[t,r]=e;if(!s.has(r)){const n=t===W?ke.bind(e):e,a=new Proxy(n,l),i=new WeakRef(a);s.set(r,i),o.register(a,r,i)}return s.get(r).deref()},i=e=>{const[t,r]=e;switch(t){case _:return typeof r===O?a(e):r;case W:return typeof r===R?me.get(r):a(e);case F:return V(r)}return r},c=(e,t,...r)=>i(n(e,ve(t),...r)),l={[H]:(e,t,r)=>c(H,e,Pe(t),r.map(Pe)),[Q]:(e,t)=>c(Q,e,t.map(Pe)),[X]:(e,t,r)=>{const{get:n,set:s,value:o}=r;return typeof n===W&&(r.get=Pe(n)),typeof s===W&&(r.set=Pe(s)),typeof o===W&&(r.value=Pe(o)),c(X,e,Pe(t),r)},[Z]:(e,t)=>c(Z,e,Pe(t)),[re]:e=>c(re,e),[ee]:(e,t)=>t===be?e:c(ee,e,Pe(t)),[te]:(e,t)=>{const r=c(te,e,Pe(t));return r&&q(r,i)},[ne]:(e,t)=>t===be||c(ne,e,Pe(t)),[se]:e=>c(se,e),[oe]:e=>c(oe,e).map(i),[ae]:e=>c(ae,e),[ie]:(e,t,r)=>c(ie,e,Pe(t),Pe(r)),[ce]:(e,t)=>c(ce,e,Pe(t))};e[r]=(e,t,r,n)=>{switch(e){case H:return i(t).apply(i(r),n.map(i));case le:{const e=i(t);he.delete(me.get(e)),me.delete(e)}}};const u=new Proxy([_,null],l),f=u.Array[Ee];return B(Array,Ee,{value:e=>Se(e)?f(e):Me(e)}),{window:u,isWindowProxy:Se,proxy:e,get global(){return console.warn("Deprecated: please access `window` field instead"),this.window},get isGlobal(){return function(e){return console.warn("Deprecated: please access `isWindowProxy` field instead"),this.isWindowProxy(e)}.bind(this)}}};function ke(){return this}const xe=p+"M",Ae=p+"T",$e=new WeakMap,_e=(e,...t)=>{const r=$(e,...t);if(!$e.has(r)){const t=e instanceof Worker?ge:je;$e.set(r,t(r,xe,Ae))}return $e.get(r)};_e.transfer=$.transfer;const{isArray:We}=Array,{assign:Oe,create:Re,defineProperties:Te,defineProperty:Fe,entries:Be}=Object,{all:Je,resolve:Ie}=new Proxy(Promise,{get:(e,t)=>e[t].bind(e)}),Le=(e,t=location.href)=>new URL(e,t).href;Promise.withResolvers||(Promise.withResolvers=function(){var e,t,r=new this((function(r,n){e=r,t=n}));return{resolve:e,reject:t,promise:r}});const Ue=e=>e.arrayBuffer(),Ne=e=>e.json(),De=e=>e.text(),ze=e=>e.replace(/^[^\\r\\n]+$/,(e=>e.trim())),Ce=new WeakMap,qe=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return Ce.set(t,r),t}}},Ge=e=>{const t=e.split("/");return t.pop(),t.join("/")},Ke=(e,t)=>{const r=[];for(const n of t.split("/"))r.push(n),n&&e.mkdir(r.join("/"))},Ye=(e,t)=>{const r=[];for(const e of t.split("/"))switch(e){case"":case".":break;case"..":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join("/").replace(/^\\/+/,"/")},Ve=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,""))).filter((e=>""!==e&&"."!==e)).join("/");return e[0].startsWith("/")?`/${t}`:t},He=new WeakMap,Qe=(e,t,r)=>Je((e=>{for(const{files:t,to_file:r,from:n=""}of e){if(void 0!==t&&void 0!==r)throw new Error("Cannot use \'to_file\' and \'files\' parameters together!");if(void 0===t&&void 0===r&&n.endsWith("/"))throw new Error(`Couldn\'t determine the filename from the path ${n}, please supply \'to_file\' parameter.`)}return e.flatMap((({from:e="",to_folder:t=".",to_file:r,files:n})=>{if(We(n))return n.map((r=>({url:Ve([e,r]),path:Ve([t,r])})));const s=r||e.slice(1+e.lastIndexOf("/"));return[{url:e,path:Ve([t,s])}]}))})(r).map((({url:n,path:s})=>((e,t)=>fetch(Le(t,He.get(e))))(r,n).then(Ue).then((r=>e.writeFile(t,s,r)))))),Xe=(e,t,r)=>{e.registerJsModule(t,r)},Ze=(e,t)=>e.runPython(ze(t)),et=(e,t)=>e.runPythonAsync(ze(t)),tt=async(e,t,r)=>{const[n,...s]=t.split(".");let o,a=e.globals.get(n);for(const e of s)[o,a]=[a,a[e]];await a.call(o,r)},rt=({FS:e},t,r)=>((e,t,r)=>{const{parentPath:n,name:s}=e.analyzePath(t,!0);return e.mkdirTree(n),e.writeFile([n,s].join("/"),new Uint8Array(r),{canOwn:!0})})(e,t,r);var nt={type:"micropython",module:(e="1.20.0-268")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,r){const{stderr:n,stdout:s,get:o}=qe();r=r.replace(/\\.m?js$/,".wasm");const a=await o(e({stderr:n,stdout:s,url:r}));return t.fetch&&await Qe(this,a,t.fetch),a},registerJSModule:Xe,run:Ze,runAsync:et,runEvent:tt,writeFile:rt};var st={type:"pyodide",module:(e="0.23.2")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t,r){const{stderr:n,stdout:s,get:o}=qe(),a=r.slice(0,r.lastIndexOf("/")),i=await o(e({stderr:n,stdout:s,indexURL:a}));if(t.fetch&&await Qe(this,i,t.fetch),t.packages){await i.loadPackage("micropip");const e=await i.pyimport("micropip");await e.install(t.packages),e.destroy()}return i},registerJSModule:Xe,run:Ze,runAsync:et,runEvent:tt,writeFile:rt};const ot="ruby-wasm-wasi",at=ot.replace(/\\W+/g,"_");var it={type:ot,experimental:!0,module:(e="2.0.0")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf("/"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.fetch&&await Qe(this,o,t.fetch),o},registerJSModule(e,t,r){const n=[\'require "js"\'];for(const[e,t]of Be(r)){const r=`__module_${at}_${e}`;globalThis[r]=t,n.push(`$${e}=JS.global[:${r}]`)}this.run(e,n.join(";"))},run:(e,t)=>e.eval(ze(t)),runAsync:(e,t)=>e.evalAsync(ze(t)),async runEvent(e,t,r){if(/^xworker\\.(on\\w+)$/.test(t)){const{$1:t}=RegExp,n=`__module_${at}_event`;globalThis[n]=r,this.run(e,`require "js";$xworker.call("${t}",JS.global[:${n}])`),delete globalThis[n]}else{const n=this.run(e,`method(:${t})`);await n.call(t,e.wrap(r))}},writeFile:()=>{throw new Error(`writeFile is not supported in ${ot}`)}};var ct={type:"wasmoon",module:(e="1.15.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=qe(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,"print",s),a.global.setField(e,"printErr",n)})),r.fetch&&await Qe(this,a,r.fetch),a},registerJSModule:(e,t,r)=>{for(const[t,n]of Be(r))e.global.set(t,n)},run:(e,t)=>e.doStringSync(ze(t)),runAsync:(e,t)=>e.doString(ze(t)),runEvent:async(e,t,r)=>{const[n,...s]=t.split(".");let o,a=e.global.get(n);for(const e of s)[o,a]=[a,a[e]];await a.call(o,r)},writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(t=Ye(e,t),Ke(e,Ge(t)),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const lt=new Map,ut=new Map,ft=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split("@"),s=lt.get(r),o=/^https?:\\/\\//i.test(n)?n.join("@"):s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{ut.set(t,e);const a=e?.fetch;return a&&He.set(a,o),s(n,e,r)}))}}),pt=e=>{for(const t of[].concat(e.type))lt.set(t,e)};for(const e of[nt,st,it,ct])pt(e);const dt=async e=>(await import("https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js")).parse(e);try{new SharedArrayBuffer(4)}catch(e){throw new Error(["Unable to use SharedArrayBuffer due insecure environment.","Please read requirements in MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer#security_requirements"].join("\\n"))}let wt,gt;const yt=(e,t)=>{addEventListener(e,t||(async t=>{await wt,gt(`xworker.on${e}`,t)}),!!t&&{once:!0})},{proxy:ht,window:mt,isWindowProxy:bt}=_e(self,f),vt={sync:ht,window:mt,isWindowProxy:bt,onerror(){},onmessage(){},onmessageerror(){},postMessage:postMessage.bind(self)};yt("message",(({data:{options:e,code:t,hooks:r}})=>{wt=(async()=>{const{type:n,version:s,config:o,async:a}=e,i=await((e,t)=>{let r={};if(t)if(t.endsWith(".json"))r=fetch(t).then(Ne);else if(t.endsWith(".toml"))r=fetch(t).then(De).then(dt);else{try{r=JSON.parse(t)}catch(e){r=dt(t)}t=Le("./config.txt")}return Ie(r).then((r=>ft[e](r,t)))})(((e,t="")=>`${e}@${t}`.replace(/@$/,""))(n,s),o),c=Re(lt.get(n)),l="run"+(a?"Async":"");if(r){const{beforeRun:e,beforeRunAsync:t,afterRun:n,afterRunAsync:s}=r,o=n||s,a=e||t;if(o){const e=c[l].bind(c);c[l]=(t,r)=>e(t,`${r}\\n${o}`)}if(a){const e=c[l].bind(c);c[l]=(t,r)=>e(t,`${a}\\n${r}`)}}return c.registerJSModule(i,"xworker",{xworker:vt}),gt=c.runEvent.bind(c,i),await c[l](i,t),i})(),yt("error"),yt("message"),yt("messageerror")}));\n'],{type:"application/javascript"})),{type:"module"}),{postMessage:s}=n,o=this instanceof Ye;if(e.length){const[t,n]=e;(r=Be({},r||{type:t,version:n})).type||(r.type=t)}r?.config&&(r.config=Ne(r.config));const a=fetch(t).then(qe).then((e=>{const t=o?this.stringHooks:void 0;s.call(n,{options:r,code:e,hooks:t})}));return Fe(n,{postMessage:{value:(e,...t)=>a.then((()=>s.call(n,e,...t)))},sync:{value:Oe(n,h).proxy}}),o&&this.onWorkerReady?.(this.interpreter,n),n};const He=e=>e.replace(/^[^\r\n]+$/,(e=>e.trim())),Qe=new WeakMap,Ke=e=>{const t=e||console,r={stderr:(t.stderr||console.error).bind(t),stdout:(t.stdout||console.log).bind(t)};return{stderr:(...e)=>r.stderr(...e),stdout:(...e)=>r.stdout(...e),async get(e){const t=await e;return Qe.set(t,r),t}}},Ve=e=>{const t=e.split("/");return t.pop(),t.join("/")},Ze=(e,t)=>{const r=[];for(const n of t.split("/"))r.push(n),n&&e.mkdir(r.join("/"))},et=(e,t)=>{const r=[];for(const e of t.split("/"))switch(e){case"":case".":break;case"..":r.pop();break;default:r.push(e)}return[e.cwd()].concat(r).join("/").replace(/^\/+/,"/")},tt=e=>{const t=e.map((e=>e.trim().replace(/(^[/]*|[/]*$)/g,""))).filter((e=>""!==e&&"."!==e)).join("/");return e[0].startsWith("/")?`/${t}`:t},rt=new WeakMap,nt=(e,t,r)=>Je((e=>{for(const{files:t,to_file:r,from:n=""}of e){if(void 0!==t&&void 0!==r)throw new Error("Cannot use 'to_file' and 'files' parameters together!");if(void 0===t&&void 0===r&&n.endsWith("/"))throw new Error(`Couldn't determine the filename from the path ${n}, please supply 'to_file' parameter.`)}return e.flatMap((({from:e="",to_folder:t=".",to_file:r,files:n})=>{if(Te(n))return n.map((r=>({url:tt([e,r]),path:tt([t,r])})));const s=r||e.slice(1+e.lastIndexOf("/"));return[{url:e,path:tt([t,s])}]}))})(r).map((({url:n,path:s})=>((e,t)=>fetch(Ne(t,rt.get(e))))(r,n).then(ze).then((r=>e.writeFile(t,s,r)))))),st=(e,t,r)=>{e.registerJsModule(t,r)},ot=(e,t)=>e.runPython(He(t)),at=(e,t)=>e.runPythonAsync(He(t)),it=async(e,t,r)=>{const[n,...s]=t.split(".");let o,a=e.globals.get(n);for(const e of s)[o,a]=[a,a[e]];await a.call(o,r)},ct=({FS:e},t,r)=>((e,t,r)=>{const{parentPath:n,name:s}=e.analyzePath(t,!0);return e.mkdirTree(n),e.writeFile([n,s].join("/"),new Uint8Array(r),{canOwn:!0})})(e,t,r);var lt={type:"micropython",module:(e="1.20.0-268")=>`https://cdn.jsdelivr.net/npm/@micropython/micropython-webassembly-pyscript@${e}/micropython.mjs`,async engine({loadMicroPython:e},t,r){const{stderr:n,stdout:s,get:o}=Ke();r=r.replace(/\.m?js$/,".wasm");const a=await o(e({stderr:n,stdout:s,url:r}));return t.fetch&&await nt(this,a,t.fetch),a},registerJSModule:st,run:ot,runAsync:at,runEvent:it,writeFile:ct};var ut={type:"pyodide",module:(e="0.23.2")=>`https://cdn.jsdelivr.net/pyodide/v${e}/full/pyodide.mjs`,async engine({loadPyodide:e},t,r){const{stderr:n,stdout:s,get:o}=Ke(),a=r.slice(0,r.lastIndexOf("/")),i=await o(e({stderr:n,stdout:s,indexURL:a}));if(t.fetch&&await nt(this,i,t.fetch),t.packages){await i.loadPackage("micropip");const e=await i.pyimport("micropip");await e.install(t.packages),e.destroy()}return i},registerJSModule:st,run:ot,runAsync:at,runEvent:it,writeFile:ct};const ft="ruby-wasm-wasi",pt=ft.replace(/\W+/g,"_");var dt={type:ft,experimental:!0,module:(e="2.0.0")=>`https://cdn.jsdelivr.net/npm/ruby-3_2-wasm-wasi@${e}/dist/browser.esm.js`,async engine({DefaultRubyVM:e},t,r){const n=await fetch(`${r.slice(0,r.lastIndexOf("/"))}/ruby.wasm`),s=await WebAssembly.compile(await n.arrayBuffer()),{vm:o}=await e(s);return t.fetch&&await nt(this,o,t.fetch),o},registerJSModule(e,t,r){const n=['require "js"'];for(const[e,t]of Ce(r)){const r=`__module_${pt}_${e}`;globalThis[r]=t,n.push(`$${e}=JS.global[:${r}]`)}this.run(e,n.join(";"))},run:(e,t)=>e.eval(He(t)),runAsync:(e,t)=>e.evalAsync(He(t)),async runEvent(e,t,r){if(/^xworker\.(on\w+)$/.test(t)){const{$1:t}=RegExp,n=`__module_${pt}_event`;globalThis[n]=r,this.run(e,`require "js";$xworker.call("${t}",JS.global[:${n}])`),delete globalThis[n]}else{const n=this.run(e,`method(:${t})`);await n.call(t,e.wrap(r))}},writeFile:()=>{throw new Error(`writeFile is not supported in ${ft}`)}};var ht={type:"wasmoon",module:(e="1.15.0")=>`https://cdn.jsdelivr.net/npm/wasmoon@${e}/+esm`,async engine({LuaFactory:e,LuaLibraries:t},r){const{stderr:n,stdout:s,get:o}=Ke(),a=await o((new e).createEngine());return a.global.getTable(t.Base,(e=>{a.global.setField(e,"print",s),a.global.setField(e,"printErr",n)})),r.fetch&&await nt(this,a,r.fetch),a},registerJSModule:(e,t,r)=>{for(const[t,n]of Ce(r))e.global.set(t,n)},run:(e,t)=>e.doStringSync(He(t)),runAsync:(e,t)=>e.doString(He(t)),runEvent:async(e,t,r)=>{const[n,...s]=t.split(".");let o,a=e.global.get(n);for(const e of s)[o,a]=[a,a[e]];await a.call(o,r)},writeFile:({cmodule:{module:{FS:e}}},t,r)=>((e,t,r)=>(t=et(e,t),Ze(e,Ve(t)),e.writeFile(t,new Uint8Array(r),{canOwn:!0})))(e,t,r)};const wt=new Map,yt=new Map,gt=[],mt=[],bt=new Proxy(new Map,{get(e,t){if(!e.has(t)){const[r,...n]=t.split("@"),s=wt.get(r),o=/^https?:\/\//i.test(n)?n.join("@"):s.module(...n);e.set(t,{url:o,module:import(o),engine:s.engine.bind(s)})}const{url:r,module:n,engine:s}=e.get(t);return(e,o)=>n.then((n=>{yt.set(t,e);const a=e?.fetch;return a&&rt.set(a,o),s(n,e,r)}))}}),vt=e=>{for(const t of[].concat(e.type))wt.set(t,e),gt.push(`script[type="${t}"]`),mt.push(`${t}-`)};for(const e of[lt,ut,dt,ht])vt(e);const Et=async e=>(await import("https://cdn.jsdelivr.net/npm/basic-toml@0.3.1/es.js")).parse(e),At=(e,t)=>{let r={};if(t)if(t.endsWith(".json"))r=fetch(t).then(De);else if(t.endsWith(".toml"))r=fetch(t).then(qe).then(Et);else{try{r=JSON.parse(t)}catch(e){r=Et(t)}t=Ne("./config.txt")}return Ue(r).then((r=>bt[e](r,t)))},Pt=(e,t="")=>`${e}@${t}`.replace(/@$/,""),kt=(t,r)=>{const n=(e=>{let t=e;for(;t.parentNode;)t=t.parentNode;return t})(t);return n.getElementById(r)||e(r,n)},St=new WeakMap,$t={get(){let e=St.get(this);return e||(e=document.createElement(`${this.type}-script`),St.set(this,e),jt(this)),e},set(e){"string"==typeof e?St.set(this,kt(this,e)):(St.set(this,e),jt(this))}},xt=new WeakMap,Rt=new Map,Mt=(e,t)=>{const r=e?.value;return r?t+r:""},Wt=(e,t,r,n,s)=>{if(!Rt.has(t)){const o={interpreter:At(r,s),queue:Ue(),XWorker:Xe(e,n)};Rt.set(t,o),Rt.has(e)||Rt.set(e,o)}return Rt.get(t)},jt=async e=>{if(xt.has(e)){const{target:t}=e;t&&(e.closest("head")?document.body.append(t):e.after(t))}else{const{attributes:{async:t,config:r,env:n,target:s,version:o},src:a,type:i}=e,c=o?.value,l=Pt(i,c),u=Mt(s,"");let f=Mt(r,"|");const p=Mt(n,"")||`${l}${f}`;f=f.slice(1),f&&(f=Ne(f));const d=Wt(i,p,l,c,f);xt.set(Le(e,"target",$t),d),u&&St.set(e,kt(e,u));const h=a?fetch(a).then(qe):e.textContent;d.queue=d.queue.then((()=>(async(e,t,r,n)=>{const s=wt.get(e.type);s.experimental&&console.warn(`The ${e.type} interpreter is experimental`);const[o,a]=await Je([xt.get(e).interpreter,t]);try{return Le(document,"currentScript",{configurable:!0,get:()=>e}),s.registerJSModule(o,"xworker",{XWorker:r}),s[n?"runAsync":"run"](o,a)}finally{delete document.currentScript}})(e,h,d.XWorker,!!t)))}};Le(globalThis,"pyscript",{value:{env:new Proxy(Ie(null),{get:(e,t)=>_t(t)})}});const _t=async e=>{if(Rt.has(e)){const{interpreter:t,queue:r}=Rt.get(e);return(await Je([t,r]))[0]}const t=Rt.size?`Available interpreters are: ${[...Rt.keys()].map((e=>`"${e}"`)).join(", ")}.`:"There are no interpreters in this page.";throw new Error(`The interpreter "${e}" was not found. ${t}`)},Ot=async e=>{const{type:t,currentTarget:n}=e;for(let{name:s,value:o,ownerElement:a}of r(`./@*[${mt.map((e=>`name()="${e}${t}"`)).join(" or ")}]`,n)){s=s.slice(0,-(t.length+1));const r=await _t(a.getAttribute(`${s}-env`)||s);wt.get(s).runEvent(r,o,e)}},Tt=e=>{for(let{name:t,ownerElement:n}of r(`.//@*[${mt.map((e=>`starts-with(name(),"${e}")`)).join(" or ")}]`,e))t=t.slice(t.lastIndexOf("-")+1),"env"!==t&&n.addEventListener(t,Ot)},Bt=[],It=new Map,Ft=new Map,Lt=e=>{for(const t of Bt)if(e.matches(t)){const r=It.get(t),{resolve:n}=Ft.get(r),{options:s,known:o}=Ct.get(r);if(!o.has(e)){o.add(e);const{interpreter:t,version:a,config:i,env:c,onInterpreterReady:l}=s,u=Pt(t,a),f=c||`${u}${i?`|${i}`:""}`,{interpreter:p,XWorker:d}=Wt(t,f,u,a,i);p.then((o=>{const a=Ie(wt.get(t)),{onBeforeRun:i,onBeforeRunAsync:c,onAfterRun:f,onAfterRunAsync:p}=s,h=new Ye(o,s),w=function(...e){return d.apply(h,e)};for(const[t,[r,n]]of[["run",[i,f]]]){const s=a[t];a[t]=function(t,o){r&&r.call(this,y,e);const a=s.call(this,t,o);return n&&n.call(this,y,e),a}}for(const[t,[r,n]]of[["runAsync",[c,p]]]){const s=a[t];a[t]=async function(t,o){r&&await r.call(this,y,e);const a=await s.call(this,t,o);return n&&await n.call(this,y,e),a}}a.registerJSModule(o,"xworker",{XWorker:w});const y={type:r,interpreter:o,XWorker:w,io:Qe.get(o),config:structuredClone(yt.get(u)),run:a.run.bind(a,o),runAsync:a.runAsync.bind(a,o),runEvent:a.runEvent.bind(a,o)};n(y),l?.(y,e)}))}}},Ct=new Map,Jt=e=>(Ft.has(e)||Ft.set(e,Promise.withResolvers()),Ft.get(e).promise),Ut=gt.join(","),Nt=new MutationObserver((e=>{for(const{type:r,target:n,attributeName:s,addedNodes:o}of e)if("attributes"!==r){for(const e of o)if(1===e.nodeType)if(Tt(e),e.matches(Ut))jt(e);else{if(t(Ut,e).forEach(jt),!Bt.length)continue;Lt(e),t(Bt.join(","),e).forEach(Lt)}}else{const e=s.lastIndexOf("-")+1;if(e){const t=s.slice(0,e);for(const r of mt)if(t===r){const t=s.slice(e);if("env"!==t){const e=n.hasAttribute(s)?"add":"remove";n[`${e}EventListener`](t,Ot)}break}}}})),zt=e=>(Nt.observe(e,{childList:!0,subtree:!0,attributes:!0}),e),{attachShadow:Dt}=Element.prototype;Be(Element.prototype,{attachShadow(e){return zt(Dt.call(this,e))}}),Tt(zt(document)),t(Ut,document).forEach(jt);const qt="PY0001",Gt="PY0401",Yt="PY0403",Xt="PY0404",Ht="PY0500",Qt="PY0503";class Kt extends Error{constructor(e,t="",r="text"){super(`(${e}): ${t}`),this.errorCode=e,this.messageType=r,this.name="UserError"}}class Vt extends Kt{constructor(e,t){super(e,t),this.name="FetchError"}}async function Zt(e,t){let r;try{r=await fetch(e,t)}catch(t){const r=t;let n;throw n=e.startsWith("http")?`Fetching from URL ${e} failed with error '${r.message}'. Are your filename and path correct?`:'PyScript: Access to local files\n        (using [[fetch]] configurations in &lt;py-config&gt;)\n        is not available when directly opening a HTML file;\n        you must use a webserver to serve the additional files.\n        See <a style="text-decoration: underline;" href="https://github.com/pyscript/pyscript/issues/257#issuecomment-1119595062">this reference</a>\n        on starting a simple webserver with Python.\n            ',new Vt(qt,n)}if(!r.ok){const t=`Fetching from URL ${e} failed with error ${r.status} (${r.statusText}). Are your filename and path correct?`;switch(r.status){case 404:throw new Vt(Xt,t);case 401:throw new Vt(Gt,t);case 403:throw new Vt(Yt,t);case 500:throw new Vt(Ht,t);case 503:throw new Vt(Qt,t);default:throw new Vt(qt,t)}}return r}document.head.appendChild(document.createElement("style")).textContent="\n  py-script, py-config {\n    display: none;\n  }\n",(async()=>{let r=0;const n=(e="py")=>`${e}-${r++}`;let s,o=e("py-config");o?s=o.getAttribute("src")||o.textContent:(o=e('script[type="py"]'),s=o?.getAttribute("config")),/^https?:\/\//.test(s)&&(s=await Zt(s).then(qe));const a=e=>"SCRIPT"===e.tagName,i=e=>{Le(document,"currentScript",{configurable:!0,get:()=>e})},c=()=>{delete document.currentScript},l=async e=>{if(e.hasAttribute("src"))try{return(await Zt(e.getAttribute("src"))).then(qe)}catch(e){throw alert(e.message),e}return e.textContent},u=(e,t,r,n)=>{a(t)&&r(t);for(const r of er[n])r(e,t)},f=e=>`\n            # this code is just for demo purpose but the basics work\n            def _display(what, target="${a(e)?e.target.id:e.id}", append=True):\n                from js import document\n                element = document.getElementById(target)\n                element.textContent = what\n            display = _display\n        `;((e,r)=>{if(wt.has(e)||Ct.has(e))throw new Error(`<script type="${e}"> already registered`);if(!wt.has(r?.interpreter))throw new Error("Unspecified interpreter");wt.set(e,wt.get(r?.interpreter)),Jt(e);const n=[`script[type="${e}"]`,`${e}-script`];for(const t of n)It.set(t,e);Bt.push(...n),mt.push(`${e}-`),Ct.set(e,{options:Be({env:e},r),known:new WeakSet}),Tt(document),t(n.join(",")).forEach(Lt)})("py",{config:s,env:"py-script",interpreter:"pyodide",codeBeforeRunWorker:()=>[...er.codeBeforeRunWorker].join("\n"),codeAfterRunWorker:()=>[...er.codeAfterRunWorker].join("\n"),onBeforeRun(e,t){u(e,t,i,"onBeforeRun"),e.interpreter.runPython(f(t))},onBeforeRunAync(e,t){e.interpreter.runPython(f(t)),u(e,t,i,"onBeforeRunAync")},onAfterRun(e,t){u(e,t,c,"onAfterRun")},onAfterRunAsync(e,t){u(e,t,c,"onAfterRunAsync")},async onInterpreterReady(e,t){for(const r of er.onInterpreterReady)r(e,t);if(a(t)){const{attributes:{async:r,target:s}}=t,o=!!s?.value,a=o?kt(s.value):document.createElement("script-py");o||t.after(a),a.id||(a.id=n()),Le(t,"target",{value:a}),e["run"+(r?"Async":"")](await l(t))}else t._pyodide.resolve(e)}});class p extends HTMLElement{constructor(){super().id||(this.id=n()),this._pyodide=Promise.withResolvers(),this.srcCode="",this.executed=!1}async connectedCallback(){if(!this.executed){this.executed=!0;const{run:e}=await this._pyodide.promise;this.srcCode=await l(this),this.textContent="";const t=e(this.srcCode);!this.textContent&&t&&(this.textContent=t),this.style.display="block"}}}customElements.define("py-script",p)})();const er={onBeforeRun:new Set,onBeforeRunAync:new Set,onAfterRun:new Set,onAfterRunAsync:new Set,onInterpreterReady:new Set,codeBeforeRunWorker:new Set,codeBeforeRunWorkerAsync:new Set,codeAfterRunWorker:new Set,codeAfterRunWorkerAsync:new Set};export{er as hooks};