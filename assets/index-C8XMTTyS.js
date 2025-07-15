var Jy=Object.defineProperty,Zy=Object.defineProperties;var eC=Object.getOwnPropertyDescriptors;var si=Object.getOwnPropertySymbols,AC=Object.getPrototypeOf,Hh=Object.prototype.hasOwnProperty,kh=Object.prototype.propertyIsEnumerable,tC=Reflect.get;var Lh=(A,e,t)=>e in A?Jy(A,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):A[e]=t,be=(A,e)=>{for(var t in e||(e={}))Hh.call(e,t)&&Lh(A,t,e[t]);if(si)for(var t of si(e))kh.call(e,t)&&Lh(A,t,e[t]);return A},je=(A,e)=>Zy(A,eC(e));var Nh=(A,e)=>{var t={};for(var r in A)Hh.call(A,r)&&e.indexOf(r)<0&&(t[r]=A[r]);if(A!=null&&si)for(var r of si(A))e.indexOf(r)<0&&kh.call(A,r)&&(t[r]=A[r]);return t};var rC=(A,e)=>()=>(e||A((e={exports:{}}).exports,e),e.exports);var ir=(A,e,t)=>tC(AC(A),t,e);var w=(A,e,t)=>new Promise((r,n)=>{var s=c=>{try{a(t.next(c))}catch(l){n(l)}},i=c=>{try{a(t.throw(c))}catch(l){n(l)}},a=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,i);a((t=t.apply(A,e)).next())});import{r as nC,a as sC,g as iC}from"./vendor-DomL0yj5.js";import{r as L,u as wA,L as jt,O as oC,R as Ee,a as fp,b as gp,N as Oh,c as Mh,B as aC,d as cC}from"./router-CGA_yEbX.js";import{d as E,m as ml,l as gs,G as lC,f as uC,o as hC}from"./ui-B8dEqJNG.js";import{a as Rn}from"./utils-Cfc3znND.js";var vH=rC(Z=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();var La={exports:{}},Dn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function dC(){if(Vh)return Dn;Vh=1;var A=nC(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,n=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(a,c,l){var h,d={},p=null,y=null;l!==void 0&&(p=""+l),c.key!==void 0&&(p=""+c.key),c.ref!==void 0&&(y=c.ref);for(h in c)r.call(c,h)&&!s.hasOwnProperty(h)&&(d[h]=c[h]);if(a&&a.defaultProps)for(h in c=a.defaultProps,c)d[h]===void 0&&(d[h]=c[h]);return{$$typeof:e,type:a,key:p,ref:y,props:d,_owner:n.current}}return Dn.Fragment=t,Dn.jsx=i,Dn.jsxs=i,Dn}var Kh;function fC(){return Kh||(Kh=1,La.exports=dC()),La.exports}var f=fC(),ii={},jh;function gC(){if(jh)return ii;jh=1;var A=sC();return ii.createRoot=A.createRoot,ii.hydrateRoot=A.hydrateRoot,ii}var pC=gC();const mC=iC(pC),BC={colors:{background:{primary:"rgba(22, 25, 27, 0.95)",secondary:"#1a1a1a",accent:"rgba(101, 15, 151, 0.16)"},surface:{primary:"#282828",secondary:"rgba(50, 47, 53, 0.8)",tertiary:"#e9ecef"},text:{primary:"#fff",secondary:"rgba(255,255,255,0.7)",disabled:"#6c757d"},primary:{main:"#007bff",dark:"#0056b3"},border:{primary:"#ddd",secondary:"#ccc"},accent:"#007bff",secondary:"rgba(71, 103, 125, 0.31)",star:{filled:"#ffc107",hover:"#e0a800"}},spacing:{small:"8px",medium:"16px",large:"24px",xlarge:"80px"},borderRadius:{small:"8px",medium:"12px",large:"16px"},shadows:{small:"0 2px 8px rgba(0, 0, 0, 0.2)",medium:"0 4px 12px rgba(0, 0, 0, 0.3)"},transitions:{fast:"150ms ease",normal:"250ms ease",slow:"350ms ease"},buttons:{primary:{background:"rgba(83, 142, 181, 0.31)",text:"#fff",hoverBackground:"rgba(40, 168, 61, 0.31)"},secondary:{background:"rgba(0, 0, 0, 0.8)",text:"#fff",hoverBackground:"rgba(0, 0, 0, 0.9)"}}},wC=()=>{};var Gh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=function(A){const e=[];let t=0;for(let r=0;r<A.length;r++){let n=A.charCodeAt(r);n<128?e[t++]=n:n<2048?(e[t++]=n>>6|192,e[t++]=n&63|128):(n&64512)===55296&&r+1<A.length&&(A.charCodeAt(r+1)&64512)===56320?(n=65536+((n&1023)<<10)+(A.charCodeAt(++r)&1023),e[t++]=n>>18|240,e[t++]=n>>12&63|128,e[t++]=n>>6&63|128,e[t++]=n&63|128):(e[t++]=n>>12|224,e[t++]=n>>6&63|128,e[t++]=n&63|128)}return e},yC=function(A){const e=[];let t=0,r=0;for(;t<A.length;){const n=A[t++];if(n<128)e[r++]=String.fromCharCode(n);else if(n>191&&n<224){const s=A[t++];e[r++]=String.fromCharCode((n&31)<<6|s&63)}else if(n>239&&n<365){const s=A[t++],i=A[t++],a=A[t++],c=((n&7)<<18|(s&63)<<12|(i&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=A[t++],i=A[t++];e[r++]=String.fromCharCode((n&15)<<12|(s&63)<<6|i&63)}}return e.join("")},mp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(A,e){if(!Array.isArray(A))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let n=0;n<A.length;n+=3){const s=A[n],i=n+1<A.length,a=i?A[n+1]:0,c=n+2<A.length,l=c?A[n+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let p=(a&15)<<2|l>>6,y=l&63;c||(y=64,i||(p=64)),r.push(t[h],t[d],t[p],t[y])}return r.join("")},encodeString(A,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(A):this.encodeByteArray(pp(A),e)},decodeString(A,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(A):yC(this.decodeStringToByteArray(A,e))},decodeStringToByteArray(A,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let n=0;n<A.length;){const s=t[A.charAt(n++)],a=n<A.length?t[A.charAt(n)]:0;++n;const l=n<A.length?t[A.charAt(n)]:64;++n;const d=n<A.length?t[A.charAt(n)]:64;if(++n,s==null||a==null||l==null||d==null)throw new CC;const p=s<<2|a>>4;if(r.push(p),l!==64){const y=a<<4&240|l>>2;if(r.push(y),d!==64){const _=l<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let A=0;A<this.ENCODED_VALS.length;A++)this.byteToCharMap_[A]=this.ENCODED_VALS.charAt(A),this.charToByteMap_[this.byteToCharMap_[A]]=A,this.byteToCharMapWebSafe_[A]=this.ENCODED_VALS_WEBSAFE.charAt(A),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[A]]=A,A>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(A)]=A,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(A)]=A)}}};class CC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vC=function(A){const e=pp(A);return mp.encodeByteArray(e,!0)},no=function(A){return vC(A).replace(/\./g,"")},Bp=function(A){try{return mp.decodeString(A,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IC=()=>EC().__FIREBASE_DEFAULTS__,_C=()=>{if(typeof process=="undefined"||typeof Gh=="undefined")return;const A=Gh.__FIREBASE_DEFAULTS__;if(A)return JSON.parse(A)},UC=()=>{if(typeof document=="undefined")return;let A;try{A=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=A&&Bp(A[1]);return e&&JSON.parse(e)},Ho=()=>{try{return wC()||IC()||_C()||UC()}catch(A){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${A}`);return}},wp=A=>{var e,t;return(t=(e=Ho())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[A]},yp=A=>{const e=wp(A);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Cp=()=>{var A;return(A=Ho())===null||A===void 0?void 0:A.config},vp=A=>{var e;return(e=Ho())===null||e===void 0?void 0:e[`_${A}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(A){return A.endsWith(".cloudworkstations.dev")}function Bl(A){return w(this,null,function*(){return(yield fetch(A,{credentials:"include"})).ok})}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ep(A,e){if(A.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",n=A.iat||0,s=A.sub||A.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},A);return[no(JSON.stringify(t)),no(JSON.stringify(i)),""].join(".")}const As={};function bC(){const A={prod:[],emulator:[]};for(const e of Object.keys(As))As[e]?A.emulator.push(e):A.prod.push(e);return A}function FC(A){let e=document.getElementById(A),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",A),t=!0),{created:t,element:e}}let $h=!1;function wl(A,e){if(typeof window=="undefined"||typeof document=="undefined"||!er(window.location.host)||As[A]===e||As[A]||$h)return;As[A]=e;function t(p){return`__firebase__banner__${p}`}const r="__firebase__banner",s=bC().prod.length>0;function i(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,y){p.setAttribute("width","24"),p.setAttribute("id",y),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function l(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{$h=!0,i()},p}function h(p,y){p.setAttribute("id",y),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function d(){const p=FC(r),y=t("text"),_=document.getElementById(y)||document.createElement("span"),v=t("learnmore"),b=document.getElementById(v)||document.createElement("a"),x=t("preprendIcon"),S=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const D=p.element;a(D),h(b,v);const k=l();c(S,x),D.append(S,_,b,k),document.body.appendChild(D)}s?(_.innerText="Preview backend disconnected.",S.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(S.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function TC(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(aA())}function xC(){var A;const e=(A=Ho())===null||A===void 0?void 0:A.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(t){return!1}}function SC(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function RC(){const A=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof A=="object"&&A.id!==void 0}function DC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PC(){const A=aA();return A.indexOf("MSIE ")>=0||A.indexOf("Trident/")>=0}function LC(){return!xC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function HC(){try{return typeof indexedDB=="object"}catch(A){return!1}}function kC(){return new Promise((A,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(r);n.onsuccess=()=>{n.result.close(),t||self.indexedDB.deleteDatabase(r),A(!0)},n.onupgradeneeded=()=>{t=!1},n.onerror=()=>{var s;e(((s=n.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC="FirebaseError";class YA extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=NC,Object.setPrototypeOf(this,YA.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xs.prototype.create)}}class xs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},n=`${this.service}/${e}`,s=this.errors[e],i=s?OC(s,r):"Error",a=`${this.serviceName}: ${i} (${n}).`;return new YA(n,a,r)}}function OC(A,e){return A.replace(MC,(t,r)=>{const n=e[r];return n!=null?String(n):`<${r}?>`})}const MC=/\{\$([^}]+)}/g;function VC(A){for(const e in A)if(Object.prototype.hasOwnProperty.call(A,e))return!1;return!0}function mr(A,e){if(A===e)return!0;const t=Object.keys(A),r=Object.keys(e);for(const n of t){if(!r.includes(n))return!1;const s=A[n],i=e[n];if(Wh(s)&&Wh(i)){if(!mr(s,i))return!1}else if(s!==i)return!1}for(const n of r)if(!t.includes(n))return!1;return!0}function Wh(A){return A!==null&&typeof A=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(A){const e=[];for(const[t,r]of Object.entries(A))Array.isArray(r)?r.forEach(n=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Mn(A){const e={};return A.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[n,s]=r.split("=");e[decodeURIComponent(n)]=decodeURIComponent(s)}}),e}function Vn(A){const e=A.indexOf("?");if(!e)return"";const t=A.indexOf("#",e);return A.substring(e,t>0?t:void 0)}function KC(A,e){const t=new jC(A,e);return t.subscribe.bind(t)}class jC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");GC(e,["next","error","complete"])?n=e:n={next:e,error:t,complete:r},n.next===void 0&&(n.next=Ha),n.error===void 0&&(n.error=Ha),n.complete===void 0&&(n.complete=Ha);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(i){}}),this.observers.push(n),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GC(A,e){if(typeof A!="object"||A===null)return!1;for(const t of e)if(t in A&&typeof A[t]=="function")return!0;return!1}function Ha(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(A){return A&&A._delegate?A._delegate:A}class Gt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $C{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new QC;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(XC(e))try{this.getOrInitializeService({instanceIdentifier:cr})}catch(t){}for(const[t,r]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:n});r.resolve(s)}catch(s){}}}}clearInstance(e=cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return w(this,null,function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])})}isComponentSet(){return this.component!=null}isInitialized(e=cr){return this.instances.has(e)}getOptions(e=cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&i.resolve(n)}return n}onInit(e,t){var r;const n=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(n))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch(s){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WC(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(n){}return r||null}normalizeInstanceIdentifier(e=cr){return this.component?this.component.multipleInstances?e:cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WC(A){return A===cr?void 0:A}function XC(A){return A.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new $C(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(A){A[A.DEBUG=0]="DEBUG",A[A.VERBOSE=1]="VERBOSE",A[A.INFO=2]="INFO",A[A.WARN=3]="WARN",A[A.ERROR=4]="ERROR",A[A.SILENT=5]="SILENT"})(ie||(ie={}));const qC={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},YC=ie.INFO,JC={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},ZC=(A,e,...t)=>{if(e<A.logLevel)return;const r=new Date().toISOString(),n=JC[e];if(n)console[n](`[${r}]  ${A.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let yl=class{constructor(e){this.name=e,this._logLevel=YC,this._logHandler=ZC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}};const e0=(A,e)=>e.some(t=>A instanceof t);let Xh,zh;function A0(){return Xh||(Xh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function t0(){return zh||(zh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ip=new WeakMap,Cc=new WeakMap,_p=new WeakMap,ka=new WeakMap,Cl=new WeakMap;function r0(A){const e=new Promise((t,r)=>{const n=()=>{A.removeEventListener("success",s),A.removeEventListener("error",i)},s=()=>{t(Ht(A.result)),n()},i=()=>{r(A.error),n()};A.addEventListener("success",s),A.addEventListener("error",i)});return e.then(t=>{t instanceof IDBCursor&&Ip.set(t,A)}).catch(()=>{}),Cl.set(e,A),e}function n0(A){if(Cc.has(A))return;const e=new Promise((t,r)=>{const n=()=>{A.removeEventListener("complete",s),A.removeEventListener("error",i),A.removeEventListener("abort",i)},s=()=>{t(),n()},i=()=>{r(A.error||new DOMException("AbortError","AbortError")),n()};A.addEventListener("complete",s),A.addEventListener("error",i),A.addEventListener("abort",i)});Cc.set(A,e)}let vc={get(A,e,t){if(A instanceof IDBTransaction){if(e==="done")return Cc.get(A);if(e==="objectStoreNames")return A.objectStoreNames||_p.get(A);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ht(A[e])},set(A,e,t){return A[e]=t,!0},has(A,e){return A instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in A}};function s0(A){vc=A(vc)}function i0(A){return A===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=A.call(Na(this),e,...t);return _p.set(r,e.sort?e.sort():[e]),Ht(r)}:t0().includes(A)?function(...e){return A.apply(Na(this),e),Ht(Ip.get(this))}:function(...e){return Ht(A.apply(Na(this),e))}}function o0(A){return typeof A=="function"?i0(A):(A instanceof IDBTransaction&&n0(A),e0(A,A0())?new Proxy(A,vc):A)}function Ht(A){if(A instanceof IDBRequest)return r0(A);if(ka.has(A))return ka.get(A);const e=o0(A);return e!==A&&(ka.set(A,e),Cl.set(e,A)),e}const Na=A=>Cl.get(A);function a0(A,e,{blocked:t,upgrade:r,blocking:n,terminated:s}={}){const i=indexedDB.open(A,e),a=Ht(i);return r&&i.addEventListener("upgradeneeded",c=>{r(Ht(i.result),c.oldVersion,c.newVersion,Ht(i.transaction),c)}),t&&i.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),n&&c.addEventListener("versionchange",l=>n(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const c0=["get","getKey","getAll","getAllKeys","count"],l0=["put","add","delete","clear"],Oa=new Map;function qh(A,e){if(!(A instanceof IDBDatabase&&!(e in A)&&typeof e=="string"))return;if(Oa.get(e))return Oa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,n=l0.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(n||c0.includes(t)))return;const s=function(i,...a){return w(this,null,function*(){const c=this.transaction(i,n?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(yield Promise.all([l[t](...a),n&&c.done]))[0]})};return Oa.set(e,s),s}s0(A=>je(be({},A),{get:(e,t,r)=>qh(e,t)||A.get(e,t,r),has:(e,t)=>!!qh(e,t)||A.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(h0(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function h0(A){const e=A.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ec="@firebase/app",Yh="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new yl("@firebase/app"),d0="@firebase/app-compat",f0="@firebase/analytics-compat",g0="@firebase/analytics",p0="@firebase/app-check-compat",m0="@firebase/app-check",B0="@firebase/auth",w0="@firebase/auth-compat",y0="@firebase/database",C0="@firebase/data-connect",v0="@firebase/database-compat",E0="@firebase/functions",I0="@firebase/functions-compat",_0="@firebase/installations",U0="@firebase/installations-compat",Q0="@firebase/messaging",b0="@firebase/messaging-compat",F0="@firebase/performance",T0="@firebase/performance-compat",x0="@firebase/remote-config",S0="@firebase/remote-config-compat",R0="@firebase/storage",D0="@firebase/storage-compat",P0="@firebase/firestore",L0="@firebase/ai",H0="@firebase/firestore-compat",k0="firebase",N0="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="[DEFAULT]",O0={[Ec]:"fire-core",[d0]:"fire-core-compat",[g0]:"fire-analytics",[f0]:"fire-analytics-compat",[m0]:"fire-app-check",[p0]:"fire-app-check-compat",[B0]:"fire-auth",[w0]:"fire-auth-compat",[y0]:"fire-rtdb",[C0]:"fire-data-connect",[v0]:"fire-rtdb-compat",[E0]:"fire-fn",[I0]:"fire-fn-compat",[_0]:"fire-iid",[U0]:"fire-iid-compat",[Q0]:"fire-fcm",[b0]:"fire-fcm-compat",[F0]:"fire-perf",[T0]:"fire-perf-compat",[x0]:"fire-rc",[S0]:"fire-rc-compat",[R0]:"fire-gcs",[D0]:"fire-gcs-compat",[P0]:"fire-fst",[H0]:"fire-fst-compat",[L0]:"fire-vertex","fire-js":"fire-js",[k0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=new Map,M0=new Map,_c=new Map;function Jh(A,e){try{A.container.addComponent(e)}catch(t){dt.debug(`Component ${e.name} failed to register with FirebaseApp ${A.name}`,t)}}function Br(A){const e=A.name;if(_c.has(e))return dt.debug(`There were multiple attempts to register component ${e}.`),!1;_c.set(e,A);for(const t of so.values())Jh(t,A);for(const t of M0.values())Jh(t,A);return!0}function ko(A,e){const t=A.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),A.container.getProvider(e)}function mA(A){return A==null?!1:A.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kt=new xs("app","Firebase",V0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=N0;function Up(A,e={}){let t=A;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ic,automaticDataCollectionEnabled:!0},e),n=r.name;if(typeof n!="string"||!n)throw kt.create("bad-app-name",{appName:String(n)});if(t||(t=Cp()),!t)throw kt.create("no-options");const s=so.get(n);if(s){if(mr(t,s.options)&&mr(r,s.config))return s;throw kt.create("duplicate-app",{appName:n})}const i=new zC(n);for(const c of _c.values())i.addComponent(c);const a=new K0(t,r,i);return so.set(n,a),a}function vl(A=Ic){const e=so.get(A);if(!e&&A===Ic&&Cp())return Up();if(!e)throw kt.create("no-app",{appName:A});return e}function GA(A,e,t){var r;let n=(r=O0[A])!==null&&r!==void 0?r:A;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${n}" with version "${e}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dt.warn(a.join(" "));return}Br(new Gt(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0="firebase-heartbeat-database",G0=1,ps="firebase-heartbeat-store";let Ma=null;function Qp(){return Ma||(Ma=a0(j0,G0,{upgrade:(A,e)=>{switch(e){case 0:try{A.createObjectStore(ps)}catch(t){console.warn(t)}}}}).catch(A=>{throw kt.create("idb-open",{originalErrorMessage:A.message})})),Ma}function $0(A){return w(this,null,function*(){try{const t=(yield Qp()).transaction(ps),r=yield t.objectStore(ps).get(bp(A));return yield t.done,r}catch(e){if(e instanceof YA)dt.warn(e.message);else{const t=kt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dt.warn(t.message)}}})}function Zh(A,e){return w(this,null,function*(){try{const r=(yield Qp()).transaction(ps,"readwrite");yield r.objectStore(ps).put(e,bp(A)),yield r.done}catch(t){if(t instanceof YA)dt.warn(t.message);else{const r=kt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});dt.warn(r.message)}}})}function bp(A){return`${A.name}!${A.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=1024,X0=30;class z0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Y0(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){return w(this,null,function*(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ed();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>X0){const i=J0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){dt.warn(r)}})}getHeartbeatsHeader(){return w(this,null,function*(){var e;try{if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ed(),{heartbeatsToSend:r,unsentEntries:n}=q0(this._heartbeatsCache.heartbeats),s=no(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return dt.warn(t),""}})}}function ed(){return new Date().toISOString().substring(0,10)}function q0(A,e=W0){const t=[];let r=A.slice();for(const n of A){const s=t.find(i=>i.agent===n.agent);if(s){if(s.dates.push(n.date),Ad(t)>e){s.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),Ad(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Y0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return w(this,null,function*(){return HC()?kC().then(()=>!0).catch(()=>!1):!1})}read(){return w(this,null,function*(){if(yield this._canUseIndexedDBPromise){const t=yield $0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}})}overwrite(e){return w(this,null,function*(){var t;if(yield this._canUseIndexedDBPromise){const n=yield this.read();return Zh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return})}add(e){return w(this,null,function*(){var t;if(yield this._canUseIndexedDBPromise){const n=yield this.read();return Zh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return})}}function Ad(A){return no(JSON.stringify({version:2,heartbeats:A})).length}function J0(A){if(A.length===0)return-1;let e=0,t=A[0].date;for(let r=1;r<A.length;r++)A[r].date<t&&(t=A[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z0(A){Br(new Gt("platform-logger",e=>new u0(e),"PRIVATE")),Br(new Gt("heartbeat",e=>new z0(e),"PRIVATE")),GA(Ec,Yh,A),GA(Ec,Yh,"esm2017"),GA("fire-js","")}Z0("");function El(A,e){var t={};for(var r in A)Object.prototype.hasOwnProperty.call(A,r)&&e.indexOf(r)<0&&(t[r]=A[r]);if(A!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(A);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(A,r[n])&&(t[r[n]]=A[r[n]]);return t}function Fp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ev=Fp,Tp=new xs("auth","Firebase",Fp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const io=new yl("@firebase/auth");function Av(A,...e){io.logLevel<=ie.WARN&&io.warn(`Auth (${Ir}): ${A}`,...e)}function ji(A,...e){io.logLevel<=ie.ERROR&&io.error(`Auth (${Ir}): ${A}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(A,...e){throw _l(A,...e)}function HA(A,...e){return _l(A,...e)}function Il(A,e,t){const r=Object.assign(Object.assign({},ev()),{[e]:t});return new xs("auth","Firebase",r).create(e,{appName:A.name})}function ct(A){return Il(A,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tv(A,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&TA(A,"argument-error"),Il(A,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _l(A,...e){if(typeof A!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=A.name),A._errorFactory.create(t,...r)}return Tp.create(A,...e)}function z(A,e,...t){if(!A)throw _l(e,...t)}function ot(A){const e="INTERNAL ASSERTION FAILED: "+A;throw ji(e),new Error(e)}function ft(A,e){A||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(){var A;return typeof self!="undefined"&&((A=self.location)===null||A===void 0?void 0:A.href)||""}function rv(){return td()==="http:"||td()==="https:"}function td(){var A;return typeof self!="undefined"&&((A=self.location)===null||A===void 0?void 0:A.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nv(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rv()||RC()||"connection"in navigator)?navigator.onLine:!0}function sv(){if(typeof navigator=="undefined")return null;const A=navigator;return A.languages&&A.languages[0]||A.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){this.shortDelay=e,this.longDelay=t,ft(t>e,"Short delay should be less than long delay!"),this.isMobile=TC()||DC()}get(){return nv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(A,e){ft(A.emulator,"Emulator should always be set here");const{url:t}=A.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],av=new Rs(3e4,6e4);function wt(A,e){return A.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:A.tenantId}):e}function JA(s,i,a,c){return w(this,arguments,function*(A,e,t,r,n={}){return Sp(A,n,()=>w(null,null,function*(){let l={},h={};r&&(e==="GET"?h=r:l={body:JSON.stringify(r)});const d=Ss(Object.assign({key:A.config.apiKey},h)).slice(1),p=yield A._getAdditionalHeaders();p["Content-Type"]="application/json",A.languageCode&&(p["X-Firebase-Locale"]=A.languageCode);const y=Object.assign({method:e,headers:p},l);return SC()||(y.referrerPolicy="no-referrer"),A.emulatorConfig&&er(A.emulatorConfig.host)&&(y.credentials="include"),xp.fetch()(yield Rp(A,A.config.apiHost,t,d),y)}))})}function Sp(A,e,t){return w(this,null,function*(){A._canInitEmulator=!1;const r=Object.assign(Object.assign({},iv),e);try{const n=new lv(A),s=yield Promise.race([t(),n.promise]);n.clearNetworkTimeout();const i=yield s.json();if("needConfirmation"in i)throw oi(A,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const a=s.ok?i.errorMessage:i.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw oi(A,"credential-already-in-use",i);if(c==="EMAIL_EXISTS")throw oi(A,"email-already-in-use",i);if(c==="USER_DISABLED")throw oi(A,"user-disabled",i);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Il(A,h,l);TA(A,h)}}catch(n){if(n instanceof YA)throw n;TA(A,"network-request-failed",{message:String(n)})}})}function Ds(s,i,a,c){return w(this,arguments,function*(A,e,t,r,n={}){const l=yield JA(A,e,t,r,n);return"mfaPendingCredential"in l&&TA(A,"multi-factor-auth-required",{_serverResponse:l}),l})}function Rp(A,e,t,r){return w(this,null,function*(){const n=`${e}${t}?${r}`,s=A,i=s.config.emulator?Ul(A.config,n):`${A.config.apiScheme}://${n}`;return ov.includes(t)&&(yield s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(i).toString():i})}function cv(A){switch(A){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(HA(this.auth,"network-request-failed")),av.get())})}}function oi(A,e,t){const r={appName:A.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const n=HA(A,e,r);return n.customData._tokenResponse=t,n}function rd(A){return A!==void 0&&A.enterprise!==void 0}class uv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return cv(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}function hv(A,e){return w(this,null,function*(){return JA(A,"GET","/v2/recaptchaConfig",wt(A,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dv(A,e){return w(this,null,function*(){return JA(A,"POST","/v1/accounts:delete",e)})}function oo(A,e){return w(this,null,function*(){return JA(A,"POST","/v1/accounts:lookup",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(A){if(A)try{const e=new Date(Number(A));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}function fv(A,e=!1){return w(this,null,function*(){const t=Me(A),r=yield t.getIdToken(e),n=Ql(r);z(n&&n.exp&&n.auth_time&&n.iat,t.auth,"internal-error");const s=typeof n.firebase=="object"?n.firebase:void 0,i=s==null?void 0:s.sign_in_provider;return{claims:n,token:r,authTime:ts(Va(n.auth_time)),issuedAtTime:ts(Va(n.iat)),expirationTime:ts(Va(n.exp)),signInProvider:i||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}})}function Va(A){return Number(A)*1e3}function Ql(A){const[e,t,r]=A.split(".");if(e===void 0||t===void 0||r===void 0)return ji("JWT malformed, contained fewer than 3 sections"),null;try{const n=Bp(t);return n?JSON.parse(n):(ji("Failed to decode base64 JWT payload"),null)}catch(n){return ji("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function nd(A){const e=Ql(A);return z(e,"internal-error"),z(typeof e.exp!="undefined","internal-error"),z(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(A,e,t=!1){return w(this,null,function*(){if(t)return e;try{return yield e}catch(r){throw r instanceof YA&&gv(r)&&A.auth.currentUser===A&&(yield A.auth.signOut()),r}})}function gv({code:A}){return A==="auth/user-disabled"||A==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const n=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(()=>w(this,null,function*(){yield this.iteration()}),t)}iteration(){return w(this,null,function*(){try{yield this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ts(this.lastLoginAt),this.creationTime=ts(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(A){return w(this,null,function*(){var e;const t=A.auth,r=yield A.getIdToken(),n=yield en(A,oo(t,{idToken:r}));z(n==null?void 0:n.users.length,t,"internal-error");const s=n.users[0];A._notifyReloadListener(s);const i=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Dp(s.providerUserInfo):[],a=Bv(A.providerData,i),c=A.isAnonymous,l=!(A.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Qc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(A,d)})}function mv(A){return w(this,null,function*(){const e=Me(A);yield ao(e),yield e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)})}function Bv(A,e){return[...A.filter(r=>!e.some(n=>n.providerId===r.providerId)),...e]}function Dp(A){return A.map(e=>{var{providerId:t}=e,r=El(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(A,e){return w(this,null,function*(){const t=yield Sp(A,{},()=>w(null,null,function*(){const r=Ss({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:s}=A.config,i=yield Rp(A,n,"/v1/token",`key=${s}`),a=yield A._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return A.emulatorConfig&&er(A.emulatorConfig.host)&&(c.credentials="include"),xp.fetch()(i,c)}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}})}function yv(A,e){return w(this,null,function*(){return JA(A,"POST","/v2/accounts:revokeToken",wt(A,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken!="undefined","internal-error"),z(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):nd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){z(e.length!==0,"internal-error");const t=nd(e);this.updateTokensAndExpiration(e,null,t)}getToken(e,t=!1){return w(this,null,function*(){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(yield this.refresh(e,this.refreshToken),this.accessToken):null)})}clearRefreshToken(){this.refreshToken=null}refresh(e,t){return w(this,null,function*(){const{accessToken:r,refreshToken:n,expiresIn:s}=yield wv(e,t);this.updateTokensAndExpiration(r,n,Number(s))})}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:n,expirationTime:s}=t,i=new Xr;return r&&(z(typeof r=="string","internal-error",{appName:e}),i.refreshToken=r),n&&(z(typeof n=="string","internal-error",{appName:e}),i.accessToken=n),s&&(z(typeof s=="number","internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Xr,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(A,e){z(typeof A=="string"||typeof A=="undefined","internal-error",{appName:e})}class PA{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,s=El(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qc(s.createdAt||void 0,s.lastLoginAt||void 0)}getIdToken(e){return w(this,null,function*(){const t=yield en(this,this.stsTokenManager.getToken(this.auth,e));return z(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,yield this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t})}getIdTokenResult(e){return fv(this,e)}reload(){return mv(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new PA(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}_updateTokensIfNecessary(e,t=!1){return w(this,null,function*(){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&(yield ao(this)),yield this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)})}delete(){return w(this,null,function*(){if(mA(this.auth.app))return Promise.reject(ct(this.auth));const e=yield this.getIdToken();return yield en(this,dv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()})}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,s,i,a,c,l,h;const d=(r=t.displayName)!==null&&r!==void 0?r:void 0,p=(n=t.email)!==null&&n!==void 0?n:void 0,y=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,_=(i=t.photoURL)!==null&&i!==void 0?i:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,b=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,x=(l=t.createdAt)!==null&&l!==void 0?l:void 0,S=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:D,emailVerified:k,isAnonymous:N,providerData:H,stsTokenManager:U}=t;z(D&&U,e,"internal-error");const m=Xr.fromJSON(this.name,U);z(typeof D=="string",e,"internal-error"),It(d,e.name),It(p,e.name),z(typeof k=="boolean",e,"internal-error"),z(typeof N=="boolean",e,"internal-error"),It(y,e.name),It(_,e.name),It(v,e.name),It(b,e.name),It(x,e.name),It(S,e.name);const C=new PA({uid:D,auth:e,email:p,emailVerified:k,displayName:d,isAnonymous:N,photoURL:_,phoneNumber:y,tenantId:v,stsTokenManager:m,createdAt:x,lastLoginAt:S});return H&&Array.isArray(H)&&(C.providerData=H.map(Q=>Object.assign({},Q))),b&&(C._redirectEventId=b),C}static _fromIdTokenResponse(e,t,r=!1){return w(this,null,function*(){const n=new Xr;n.updateFromServerResponse(t);const s=new PA({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return yield ao(s),s})}static _fromGetAccountInfoResponse(e,t,r){return w(this,null,function*(){const n=t.users[0];z(n.localId!==void 0,"internal-error");const s=n.providerUserInfo!==void 0?Dp(n.providerUserInfo):[],i=!(n.email&&n.passwordHash)&&!(s!=null&&s.length),a=new Xr;a.updateFromIdToken(r);const c=new PA({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:i}),l={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:s,metadata:new Qc(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd=new Map;function at(A){ft(A instanceof Function,"Expected a class definition");let e=sd.get(A);return e?(ft(e instanceof A,"Instance stored in cache mismatched with class"),e):(e=new A,sd.set(A,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(){this.type="NONE",this.storage={}}_isAvailable(){return w(this,null,function*(){return!0})}_set(e,t){return w(this,null,function*(){this.storage[e]=t})}_get(e){return w(this,null,function*(){const t=this.storage[e];return t===void 0?null:t})}_remove(e){return w(this,null,function*(){delete this.storage[e]})}_addListener(e,t){}_removeListener(e,t){}}Pp.type="NONE";const id=Pp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(A,e,t){return`firebase:${A}:${e}:${t}`}class zr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:n,name:s}=this.auth;this.fullUserKey=Gi(this.userKey,n.apiKey,s),this.fullPersistenceKey=Gi("persistence",n.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}getCurrentUser(){return w(this,null,function*(){const e=yield this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=yield oo(this.auth,{idToken:e}).catch(()=>{});return t?PA._fromGetAccountInfoResponse(this.auth,t,e):null}return PA._fromJSON(this.auth,e)})}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}setPersistence(e){return w(this,null,function*(){if(this.persistence===e)return;const t=yield this.getCurrentUser();if(yield this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)})}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static create(e,t,r="authUser"){return w(this,null,function*(){if(!t.length)return new zr(at(id),e,r);const n=(yield Promise.all(t.map(l=>w(null,null,function*(){if(yield l._isAvailable())return l})))).filter(l=>l);let s=n[0]||at(id);const i=Gi(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const h=yield l._get(i);if(h){let d;if(typeof h=="string"){const p=yield oo(e,{idToken:h}).catch(()=>{});if(!p)break;d=yield PA._fromGetAccountInfoResponse(e,p,h)}else d=PA._fromJSON(e,h);l!==s&&(a=d),s=l;break}}catch(h){}const c=n.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new zr(s,e,r):(s=c[0],a&&(yield s._set(i,a.toJSON())),yield Promise.all(t.map(l=>w(null,null,function*(){if(l!==s)try{yield l._remove(i)}catch(h){}}))),new zr(s,e,r))})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(A){const e=A.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Np(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mp(e))return"Blackberry";if(Vp(e))return"Webos";if(Hp(e))return"Safari";if((e.includes("chrome/")||kp(e))&&!e.includes("edge/"))return"Chrome";if(Op(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=A.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Lp(A=aA()){return/firefox\//i.test(A)}function Hp(A=aA()){const e=A.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function kp(A=aA()){return/crios\//i.test(A)}function Np(A=aA()){return/iemobile/i.test(A)}function Op(A=aA()){return/android/i.test(A)}function Mp(A=aA()){return/blackberry/i.test(A)}function Vp(A=aA()){return/webos/i.test(A)}function bl(A=aA()){return/iphone|ipad|ipod/i.test(A)||/macintosh/i.test(A)&&/mobile/i.test(A)}function Cv(A=aA()){var e;return bl(A)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vv(){return PC()&&document.documentMode===10}function Kp(A=aA()){return bl(A)||Op(A)||Vp(A)||Mp(A)||/windows phone/i.test(A)||Np(A)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jp(A,e=[]){let t;switch(A){case"Browser":t=od(aA());break;case"Worker":t=`${od(aA())}-${A}`;break;default:t=A}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ir}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((i,a)=>{try{const c=e(s);i(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}runMiddleware(e){return w(this,null,function*(){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)yield r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const n of t)try{n()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}})}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iv(t){return w(this,arguments,function*(A,e={}){return JA(A,"GET","/v2/passwordPolicy",wt(A,e))})}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=6;class Uv{constructor(e){var t,r,n,s;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=i.minPasswordLength)!==null&&t!==void 0?t:_v,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(n=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&n!==void 0?n:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,n,s,i,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(n=c.containsLowercaseLetter)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsNumericCharacter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ad(this),this.idTokenSubscription=new ad(this),this.beforeStateQueue=new Ev(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=at(t)),this._initializationPromise=this.queue(()=>w(this,null,function*(){var r,n,s;if(!this._deleted&&(this.persistenceManager=yield zr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{yield this._popupRedirectResolver._initialize(this)}catch(i){}yield this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}})),this._initializationPromise}_onStorageEvent(){return w(this,null,function*(){if(this._deleted)return;const e=yield this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),yield this.currentUser.getIdToken();return}yield this._updateCurrentUser(e,!0)}})}initializeCurrentUserFromIdToken(e){return w(this,null,function*(){try{const t=yield oo(this,{idToken:e}),r=yield PA._fromGetAccountInfoResponse(this,t,e);yield this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),yield this.directlySetCurrentUser(null)}})}initializeCurrentUser(e){return w(this,null,function*(){var t;if(mA(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const r=yield this.assertedPersistence.getCurrentUser();let n=r,s=!1;if(e&&this.config.authDomain){yield this.getOrInitRedirectPersistenceManager();const i=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=n==null?void 0:n._redirectEventId,c=yield this.tryRedirectSignIn(e);(!i||i===a)&&(c!=null&&c.user)&&(n=c.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{yield this.beforeStateQueue.runMiddleware(n)}catch(i){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),yield this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)})}tryRedirectSignIn(e){return w(this,null,function*(){let t=null;try{t=yield this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){yield this._setRedirectUser(null)}return t})}reloadAndSetCurrentUserOrClear(e){return w(this,null,function*(){try{yield ao(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)})}useDeviceLanguage(){this.languageCode=sv()}_delete(){return w(this,null,function*(){this._deleted=!0})}updateCurrentUser(e){return w(this,null,function*(){if(mA(this.app))return Promise.reject(ct(this));const t=e?Me(e):null;return t&&z(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))})}_updateCurrentUser(e,t=!1){return w(this,null,function*(){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||(yield this.beforeStateQueue.runMiddleware(e)),this.queue(()=>w(this,null,function*(){yield this.directlySetCurrentUser(e),this.notifyAuthListeners()}))})}signOut(){return w(this,null,function*(){return mA(this.app)?Promise.reject(ct(this)):(yield this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&(yield this._setRedirectUser(null)),this._updateCurrentUser(null,!0))})}setPersistence(e){return mA(this.app)?Promise.reject(ct(this)):this.queue(()=>w(this,null,function*(){yield this.assertedPersistence.setPersistence(at(e))}))}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}validatePassword(e){return w(this,null,function*(){this._getPasswordPolicyInternal()||(yield this._updatePasswordPolicy());const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)})}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}_updatePasswordPolicy(){return w(this,null,function*(){const e=yield Iv(this),t=new Uv(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t})}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new xs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}revokeAccessToken(e){return w(this,null,function*(){if(this.currentUser){const t=yield this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),yield yv(this,r)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}_setRedirectUser(e,t){return w(this,null,function*(){const r=yield this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)})}getOrInitRedirectPersistenceManager(e){return w(this,null,function*(){if(!this.redirectPersistenceManager){const t=e&&at(e)||this._popupRedirectResolver;z(t,this,"argument-error"),this.redirectPersistenceManager=yield zr.create(this,[at(t._redirectPersistence)],"redirectUser"),this.redirectUser=yield this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager})}_redirectUserForId(e){return w(this,null,function*(){var t,r;return this._isInitialized&&(yield this.queue(()=>w(this,null,function*(){}))),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null})}_persistUserIfCurrent(e){return w(this,null,function*(){if(e===this.currentUser)return this.queue(()=>w(this,null,function*(){return this.directlySetCurrentUser(e)}))})}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let i=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{i||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,n);return()=>{i=!0,c()}}else{const c=e.addObserver(t);return()=>{i=!0,c()}}}directlySetCurrentUser(e){return w(this,null,function*(){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?yield this.assertedPersistence.setCurrentUser(e):yield this.assertedPersistence.removeCurrentUser()})}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getAdditionalHeaders(){return w(this,null,function*(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=yield(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader();r&&(t["X-Firebase-Client"]=r);const n=yield this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t})}_getAppCheckToken(){return w(this,null,function*(){var e;if(mA(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=yield(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken();return t!=null&&t.error&&Av(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token})}}function yt(A){return Me(A)}class ad{constructor(e){this.auth=e,this.observer=null,this.addObserver=KC(t=>this.observer=t)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No={loadJS(){return w(this,null,function*(){throw new Error("Unable to load external scripts")})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function bv(A){No=A}function Gp(A){return No.loadJS(A)}function Fv(){return No.recaptchaEnterpriseScript}function Tv(){return No.gapiScript}function xv(A){return`__${A}${Math.floor(Math.random()*1e6)}`}class Sv{constructor(){this.enterprise=new Rv}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Rv{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Dv="recaptcha-enterprise",$p="NO_RECAPTCHA";class Pv{constructor(e){this.type=Dv,this.auth=yt(e)}verify(e="verify",t=!1){return w(this,null,function*(){function r(s){return w(this,null,function*(){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise((i,a)=>w(null,null,function*(){hv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new uv(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,i(l.siteKey)}}).catch(c=>{a(c)})}))})}function n(s,i,a){const c=window.grecaptcha;rd(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{i(l)}).catch(()=>{i($p)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Sv().execute("siteKey",{action:"verify"}):new Promise((s,i)=>{r(this.auth).then(a=>{if(!t&&rd(window.grecaptcha))n(a,s,i);else{if(typeof window=="undefined"){i(new Error("RecaptchaVerifier is only supported in browser"));return}let c=Fv();c.length!==0&&(c+=a),Gp(c).then(()=>{n(a,s,i)}).catch(l=>{i(l)})}}).catch(a=>{i(a)})})})}}function cd(A,e,t,r=!1,n=!1){return w(this,null,function*(){const s=new Pv(A);let i;if(n)i=$p;else try{i=yield s.verify(t)}catch(c){i=yield s.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:i,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:i,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a})}function co(A,e,t,r,n){return w(this,null,function*(){var s;if(!((s=A._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=yield cd(A,e,t,t==="getOobCode");return r(A,i)}else return r(A,e).catch(i=>w(null,null,function*(){if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=yield cd(A,e,t,t==="getOobCode");return r(A,a)}else return Promise.reject(i)}))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(A,e){const t=ko(A,"auth");if(t.isInitialized()){const n=t.getImmediate(),s=t.getOptions();if(mr(s,e!=null?e:{}))return n;TA(n,"already-initialized")}return t.initialize({options:e})}function Hv(A,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(at);e!=null&&e.errorMap&&A._updateErrorMap(e.errorMap),A._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function kv(A,e,t){const r=yt(A);z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const n=!1,s=Wp(e),{host:i,port:a}=Nv(e),c=a===null?"":`:${a}`,l={url:`${s}//${i}${c}/`},h=Object.freeze({host:i,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:n})});if(!r._canInitEmulator){z(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),z(mr(l,r.config.emulator)&&mr(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,er(i)?(Bl(`${s}//${i}${c}`),wl("Auth",!0)):Ov()}function Wp(A){const e=A.indexOf(":");return e<0?"":A.substr(0,e+1)}function Nv(A){const e=Wp(A),t=/(\/\/)?([^?#/]+)/.exec(A.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(r);if(n){const s=n[1];return{host:s,port:ld(r.substr(s.length+1))}}else{const[s,i]=r.split(":");return{host:s,port:ld(i)}}}function ld(A){if(!A)return null;const e=Number(A);return isNaN(e)?null:e}function Ov(){function A(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,t){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}function Mv(A,e){return w(this,null,function*(){return JA(A,"POST","/v1/accounts:signUp",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(A,e){return w(this,null,function*(){return Ds(A,"POST","/v1/accounts:signInWithPassword",wt(A,e))})}function Kv(A,e){return w(this,null,function*(){return JA(A,"POST","/v1/accounts:sendOobCode",wt(A,e))})}function jv(A,e){return w(this,null,function*(){return Kv(A,e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(A,e){return w(this,null,function*(){return Ds(A,"POST","/v1/accounts:signInWithEmailLink",wt(A,e))})}function $v(A,e){return w(this,null,function*(){return Ds(A,"POST","/v1/accounts:signInWithEmailLink",wt(A,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms extends Fl{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new ms(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ms(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}_getIdTokenResponse(e){return w(this,null,function*(){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return co(e,t,"signInWithPassword",Vv);case"emailLink":return Gv(e,{email:this._email,oobCode:this._password});default:TA(e,"internal-error")}})}_linkToIdToken(e,t){return w(this,null,function*(){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return co(e,r,"signUpPassword",Mv);case"emailLink":return $v(e,{idToken:t,email:this._email,oobCode:this._password});default:TA(e,"internal-error")}})}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(A,e){return w(this,null,function*(){return Ds(A,"POST","/v1/accounts:signInWithIdp",wt(A,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="http://localhost";class wr extends Fl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):TA("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,s=El(t,["providerId","signInMethod"]);if(!r||!n)return null;const i=new wr(r,n);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){const t=this.buildRequest();return qr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,qr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,qr(e,t)}buildRequest(){const e={requestUri:Wv,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ss(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(A){switch(A){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zv(A){const e=Mn(Vn(A)).link,t=e?Mn(Vn(e)).deep_link_id:null,r=Mn(Vn(A)).deep_link_id;return(r?Mn(Vn(r)).link:null)||r||t||e||A}class Tl{constructor(e){var t,r,n,s,i,a;const c=Mn(Vn(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,d=Xv((n=c.mode)!==null&&n!==void 0?n:null);z(l&&h&&d,"argument-error"),this.apiKey=l,this.operation=d,this.code=h,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(i=c.lang)!==null&&i!==void 0?i:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=zv(e);try{return new Tl(t)}catch(r){return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(){this.providerId=un.PROVIDER_ID}static credential(e,t){return ms._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Tl.parseLink(t);return z(r,"argument-error"),ms._fromEmailAndCode(e,r.code,r.tenantId)}}un.PROVIDER_ID="password";un.EMAIL_PASSWORD_SIGN_IN_METHOD="password";un.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends xl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt extends Ps{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:bt.PROVIDER_ID,signInMethod:bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bt.credentialFromTaggedObject(e)}static credentialFromError(e){return bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bt.credential(e.oauthAccessToken)}catch(t){return null}}}bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Ps{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return wr._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return it.credential(t,r)}catch(n){return null}}}it.GOOGLE_SIGN_IN_METHOD="google.com";it.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Ps{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch(t){return null}}}Ft.GITHUB_SIGN_IN_METHOD="github.com";Ft.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends Ps{constructor(){super("twitter.com")}static credential(e,t){return wr._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Tt.credential(t,r)}catch(n){return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qv(A,e){return w(this,null,function*(){return Ds(A,"POST","/v1/accounts:signUp",wt(A,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static _fromIdTokenResponse(e,t,r,n=!1){return w(this,null,function*(){const s=yield PA._fromIdTokenResponse(e,r,n),i=ud(r);return new yr({user:s,providerId:i,_tokenResponse:r,operationType:t})})}static _forOperation(e,t,r){return w(this,null,function*(){yield e._updateTokensIfNecessary(r,!0);const n=ud(r);return new yr({user:e,providerId:n,_tokenResponse:r,operationType:t})})}}function ud(A){return A.providerId?A.providerId:"phoneNumber"in A?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends YA{constructor(e,t,r,n){var s;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,lo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new lo(e,t,r,n)}}function Xp(A,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(A):t._getIdTokenResponse(A)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?lo._fromErrorAndOperation(A,s,e,r):s})}function Yv(A,e,t=!1){return w(this,null,function*(){const r=yield en(A,e._linkToIdToken(A.auth,yield A.getIdToken()),t);return yr._forOperation(A,"link",r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(A,e,t=!1){return w(this,null,function*(){const{auth:r}=A;if(mA(r.app))return Promise.reject(ct(r));const n="reauthenticate";try{const s=yield en(A,Xp(r,n,e,A),t);z(s.idToken,r,"internal-error");const i=Ql(s.idToken);z(i,r,"internal-error");const{sub:a}=i;return z(A.uid===a,r,"user-mismatch"),yr._forOperation(A,n,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&TA(r,"user-mismatch"),s}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(A,e,t=!1){return w(this,null,function*(){if(mA(A.app))return Promise.reject(ct(A));const r="signIn",n=yield Xp(A,r,e),s=yield yr._fromIdTokenResponse(A,r,n);return t||(yield A._updateCurrentUser(s.user)),s})}function Zv(A,e){return w(this,null,function*(){return zp(yt(A),e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(A){return w(this,null,function*(){const e=yt(A);e._getPasswordPolicyInternal()&&(yield e._updatePasswordPolicy())})}function eE(A,e,t){return w(this,null,function*(){const r=yt(A);yield co(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",jv)})}function AE(A,e,t){return w(this,null,function*(){if(mA(A.app))return Promise.reject(ct(A));const r=yt(A),i=yield co(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qv).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&qp(A),c}),a=yield yr._fromIdTokenResponse(r,"signIn",i);return yield r._updateCurrentUser(a.user),a})}function tE(A,e,t){return mA(A.app)?Promise.reject(ct(A)):Zv(Me(A),un.credential(e,t)).catch(r=>w(null,null,function*(){throw r.code==="auth/password-does-not-meet-requirements"&&qp(A),r}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rE(A,e){return w(this,null,function*(){return JA(A,"POST","/v1/accounts:update",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(r,n){return w(this,arguments,function*(A,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=Me(A),a={idToken:yield s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=yield en(s,rE(s.auth,a));s.displayName=c.displayName||null,s.photoURL=c.photoUrl||null;const l=s.providerData.find(({providerId:h})=>h==="password");l&&(l.displayName=s.displayName,l.photoURL=s.photoURL),yield s._updateTokensIfNecessary(c)})}function nE(A,e,t,r){return Me(A).onIdTokenChanged(e,t,r)}function sE(A,e,t){return Me(A).beforeAuthStateChanged(e,t)}function iE(A,e,t,r){return Me(A).onAuthStateChanged(e,t,r)}function oE(A){return Me(A).signOut()}const uo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(uo,"1"),this.storage.removeItem(uo),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aE=1e3,cE=10;class Yr extends Yp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((i,a,c)=>{this.notifyListeners(i,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const n=()=>{const i=this.storage.getItem(r);!t&&this.localCache[r]===i||this.notifyListeners(r,i)},s=this.storage.getItem(r);vv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,cE):n()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const n of Array.from(r))n(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},aE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}_set(e,t){return w(this,null,function*(){yield ir(Yr.prototype,this,"_set").call(this,e,t),this.localCache[e]=JSON.stringify(t)})}_get(e){return w(this,null,function*(){const t=yield ir(Yr.prototype,this,"_get").call(this,e);return this.localCache[e]=JSON.stringify(t),t})}_remove(e){return w(this,null,function*(){yield ir(Yr.prototype,this,"_remove").call(this,e),delete this.localCache[e]})}}Yr.type="LOCAL";const lE=Yr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp extends Yp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jp.type="SESSION";const Zp=Jp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uE(A){return Promise.all(A.map(e=>w(null,null,function*(){try{return{fulfilled:!0,value:yield e}}catch(t){return{fulfilled:!1,reason:t}}})))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(n=>n.isListeningto(e));if(t)return t;const r=new Oo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}handleEvent(e){return w(this,null,function*(){const t=e,{eventId:r,eventType:n,data:s}=t.data,i=this.handlersMap[n];if(!(i!=null&&i.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:n});const a=Array.from(i).map(l=>w(this,null,function*(){return l(t.origin,s)})),c=yield uE(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:n,response:c})})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(A="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return A+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}_send(e,t,r=50){return w(this,null,function*(){const n=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let s,i;return new Promise((a,c)=>{const l=Sl("",20);n.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);i={messageChannel:n,onMessage(d){const p=d;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(i),n.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(){return window}function dE(A){$A().location.href=A}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(){return typeof $A().WorkerGlobalScope!="undefined"&&typeof $A().importScripts=="function"}function fE(){return w(this,null,function*(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(yield navigator.serviceWorker.ready).active}catch(A){return null}})}function gE(){var A;return((A=navigator==null?void 0:navigator.serviceWorker)===null||A===void 0?void 0:A.controller)||null}function pE(){return em()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="firebaseLocalStorageDb",mE=1,ho="firebaseLocalStorage",tm="fbase_key";class Ls{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mo(A,e){return A.transaction([ho],e?"readwrite":"readonly").objectStore(ho)}function BE(){const A=indexedDB.deleteDatabase(Am);return new Ls(A).toPromise()}function bc(){const A=indexedDB.open(Am,mE);return new Promise((e,t)=>{A.addEventListener("error",()=>{t(A.error)}),A.addEventListener("upgradeneeded",()=>{const r=A.result;try{r.createObjectStore(ho,{keyPath:tm})}catch(n){t(n)}}),A.addEventListener("success",()=>w(null,null,function*(){const r=A.result;r.objectStoreNames.contains(ho)?e(r):(r.close(),yield BE(),e(yield bc()))}))})}function hd(A,e,t){return w(this,null,function*(){const r=Mo(A,!0).put({[tm]:e,value:t});return new Ls(r).toPromise()})}function wE(A,e){return w(this,null,function*(){const t=Mo(A,!1).get(e),r=yield new Ls(t).toPromise();return r===void 0?null:r.value})}function dd(A,e){const t=Mo(A,!0).delete(e);return new Ls(t).toPromise()}const yE=800,CE=3;class rm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}_openDb(){return w(this,null,function*(){return this.db?this.db:(this.db=yield bc(),this.db)})}_withRetries(e){return w(this,null,function*(){let t=0;for(;;)try{const r=yield this._openDb();return yield e(r)}catch(r){if(t++>CE)throw r;this.db&&(this.db.close(),this.db=void 0)}})}initializeServiceWorkerMessaging(){return w(this,null,function*(){return em()?this.initializeReceiver():this.initializeSender()})}initializeReceiver(){return w(this,null,function*(){this.receiver=Oo._getInstance(pE()),this.receiver._subscribe("keyChanged",(e,t)=>w(this,null,function*(){return{keyProcessed:(yield this._poll()).includes(t.key)}})),this.receiver._subscribe("ping",(e,t)=>w(this,null,function*(){return["keyChanged"]}))})}initializeSender(){return w(this,null,function*(){var e,t;if(this.activeServiceWorker=yield fE(),!this.activeServiceWorker)return;this.sender=new hE(this.activeServiceWorker);const r=yield this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)})}notifyServiceWorker(e){return w(this,null,function*(){if(!(!this.sender||!this.activeServiceWorker||gE()!==this.activeServiceWorker))try{yield this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}})}_isAvailable(){return w(this,null,function*(){try{if(!indexedDB)return!1;const e=yield bc();return yield hd(e,uo,"1"),yield dd(e,uo),!0}catch(e){}return!1})}_withPendingWrite(e){return w(this,null,function*(){this.pendingWrites++;try{yield e()}finally{this.pendingWrites--}})}_set(e,t){return w(this,null,function*(){return this._withPendingWrite(()=>w(this,null,function*(){return yield this._withRetries(r=>hd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)}))})}_get(e){return w(this,null,function*(){const t=yield this._withRetries(r=>wE(r,e));return this.localCache[e]=t,t})}_remove(e){return w(this,null,function*(){return this._withPendingWrite(()=>w(this,null,function*(){return yield this._withRetries(t=>dd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)}))})}_poll(){return w(this,null,function*(){const e=yield this._withRetries(n=>{const s=Mo(n,!1).getAll();return new Ls(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:n,value:s}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(s)&&(this.notifyListeners(n,s),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!r.has(n)&&(this.notifyListeners(n,null),t.push(n));return t})}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const n of Array.from(r))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>w(this,null,function*(){return this._poll()}),yE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rm.type="LOCAL";const vE=rm;new Rs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(A,e){return e?at(e):(z(A._popupRedirectResolver,A,"argument-error"),A._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl extends Fl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return qr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return qr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return qr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function EE(A){return zp(A.auth,new Rl(A),A.bypassAuthState)}function IE(A){const{auth:e,user:t}=A;return z(t,e,"internal-error"),Jv(t,new Rl(A),A.bypassAuthState)}function _E(A){return w(this,null,function*(){const{auth:e,user:t}=A;return z(t,e,"internal-error"),Yv(t,new Rl(A),A.bypassAuthState)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,t,r,n,s=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((e,t)=>w(this,null,function*(){this.pendingPromise={resolve:e,reject:t};try{this.eventManager=yield this.resolver._initialize(this.auth),yield this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}}))}onAuthEvent(e){return w(this,null,function*(){const{urlResponse:t,sessionId:r,postBody:n,tenantId:s,error:i,type:a}=e;if(i){this.reject(i);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(yield this.getIdpTask(a)(c))}catch(l){this.reject(l)}})}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return EE;case"linkViaPopup":case"linkViaRedirect":return _E;case"reauthViaPopup":case"reauthViaRedirect":return IE;default:TA(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE=new Rs(2e3,1e4);function QE(A,e,t){return w(this,null,function*(){if(mA(A.app))return Promise.reject(HA(A,"operation-not-supported-in-this-environment"));const r=yt(A);tv(A,e,xl);const n=nm(r,t);return new ur(r,"signInViaPopup",e,n).executeNotNull()})}class ur extends sm{constructor(e,t,r,n,s){super(e,t,n,s),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}executeNotNull(){return w(this,null,function*(){const e=yield this.execute();return z(e,this.auth,"internal-error"),e})}onExecution(){return w(this,null,function*(){ft(this.filter.length===1,"Popup operations only handle one event");const e=Sl();this.authWindow=yield this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(HA(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()})}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(HA(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(HA(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,UE.get())};e()}}ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bE="pendingRedirect",$i=new Map;class rs extends sm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}execute(){return w(this,null,function*(){let e=$i.get(this.auth._key());if(!e){try{const r=(yield FE(this.resolver,this.auth))?yield ir(rs.prototype,this,"execute").call(this):null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}$i.set(this.auth._key(),e)}return this.bypassAuthState||$i.set(this.auth._key(),()=>Promise.resolve(null)),e()})}onAuthEvent(e){return w(this,null,function*(){if(e.type==="signInViaRedirect")return ir(rs.prototype,this,"onAuthEvent").call(this,e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=yield this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,ir(rs.prototype,this,"onAuthEvent").call(this,e);this.resolve(null)}})}onExecution(){return w(this,null,function*(){})}cleanUp(){}}function FE(A,e){return w(this,null,function*(){const t=SE(e),r=xE(A);if(!(yield r._isAvailable()))return!1;const n=(yield r._get(t))==="true";return yield r._remove(t),n})}function TE(A,e){$i.set(A._key(),e)}function xE(A){return at(A._redirectPersistence)}function SE(A){return Gi(bE,A.config.apiKey,A.name)}function RE(A,e,t=!1){return w(this,null,function*(){if(mA(A.app))return Promise.reject(ct(A));const r=yt(A),n=nm(r,e),i=yield new rs(r,n,t).execute();return i&&!t&&(delete i.user._redirectEventId,yield r._persistUserIfCurrent(i.user),yield r._setRedirectUser(null,e)),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE=10*60*1e3;class PE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!im(e)){const n=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(HA(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DE&&this.cachedEventUids.clear(),this.cachedEventUids.has(fd(e))}saveEventToCache(e){this.cachedEventUids.add(fd(e)),this.lastProcessedEventTime=Date.now()}}function fd(A){return[A.type,A.eventId,A.sessionId,A.tenantId].filter(e=>e).join("-")}function im({type:A,error:e}){return A==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LE(A){switch(A.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return im(A);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t){return w(this,arguments,function*(A,e={}){return JA(A,"GET","/v1/projects",e)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NE=/^https?/;function OE(A){return w(this,null,function*(){if(A.config.emulator)return;const{authorizedDomains:e}=yield HE(A);for(const t of e)try{if(ME(t))return}catch(r){}TA(A,"unauthorized-domain")})}function ME(A){const e=Uc(),{protocol:t,hostname:r}=new URL(e);if(A.startsWith("chrome-extension://")){const i=new URL(A);return i.hostname===""&&r===""?t==="chrome-extension:"&&A.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&i.hostname===r}if(!NE.test(t))return!1;if(kE.test(A))return r===A;const n=A.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=new Rs(3e4,6e4);function gd(){const A=$A().___jsl;if(A!=null&&A.H){for(const e of Object.keys(A.H))if(A.H[e].r=A.H[e].r||[],A.H[e].L=A.H[e].L||[],A.H[e].r=[...A.H[e].L],A.CP)for(let t=0;t<A.CP.length;t++)A.CP[t]=null}}function KE(A){return new Promise((e,t)=>{var r,n,s;function i(){gd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gd(),t(HA(A,"network-request-failed"))},timeout:VE.get()})}if(!((n=(r=$A().gapi)===null||r===void 0?void 0:r.iframes)===null||n===void 0)&&n.Iframe)e(gapi.iframes.getContext());else if(!((s=$A().gapi)===null||s===void 0)&&s.load)i();else{const a=xv("iframefcb");return $A()[a]=()=>{gapi.load?i():t(HA(A,"network-request-failed"))},Gp(`${Tv()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Wi=null,e})}let Wi=null;function jE(A){return Wi=Wi||KE(A),Wi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE=new Rs(5e3,15e3),$E="__/auth/iframe",WE="emulator/auth/iframe",XE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qE(A){const e=A.config;z(e.authDomain,A,"auth-domain-config-required");const t=e.emulator?Ul(e,WE):`https://${A.config.authDomain}/${$E}`,r={apiKey:e.apiKey,appName:A.name,v:Ir},n=zE.get(A.config.apiHost);n&&(r.eid=n);const s=A._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Ss(r).slice(1)}`}function YE(A){return w(this,null,function*(){const e=yield jE(A),t=$A().gapi;return z(t,A,"internal-error"),e.open({where:document.body,url:qE(A),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XE,dontclear:!0},r=>new Promise((n,s)=>w(null,null,function*(){yield r.restyle({setHideOnLeave:!1});const i=HA(A,"network-request-failed"),a=$A().setTimeout(()=>{s(i)},GE.get());function c(){$A().clearTimeout(a),n(r)}r.ping(c).then(c,()=>{s(i)})})))})}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZE=500,eI=600,AI="_blank",tI="http://localhost";class pd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function rI(A,e,t,r=ZE,n=eI){const s=Math.max((window.screen.availHeight-n)/2,0).toString(),i=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},JE),{width:r.toString(),height:n.toString(),top:s,left:i}),l=aA().toLowerCase();t&&(a=kp(l)?AI:t),Lp(l)&&(e=e||tI,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[y,_])=>`${p}${y}=${_},`,"");if(Cv(l)&&a!=="_self")return nI(e||"",a),new pd(null);const d=window.open(e||"",a,h);z(d,A,"popup-blocked");try{d.focus()}catch(p){}return new pd(d)}function nI(A,e){const t=document.createElement("a");t.href=A,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI="__/auth/handler",iI="emulator/auth/handler",oI=encodeURIComponent("fac");function md(A,e,t,r,n,s){return w(this,null,function*(){z(A.config.authDomain,A,"auth-domain-config-required"),z(A.config.apiKey,A,"invalid-api-key");const i={apiKey:A.config.apiKey,appName:A.name,authType:t,redirectUrl:r,v:Ir,eventId:n};if(e instanceof xl){e.setDefaultLanguage(A.languageCode),i.providerId=e.providerId||"",VC(e.getCustomParameters())||(i.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,d]of Object.entries({}))i[h]=d}if(e instanceof Ps){const h=e.getScopes().filter(d=>d!=="");h.length>0&&(i.scopes=h.join(","))}A.tenantId&&(i.tid=A.tenantId);const a=i;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=yield A._getAppCheckToken(),l=c?`#${oI}=${encodeURIComponent(c)}`:"";return`${aI(A)}?${Ss(a).slice(1)}${l}`})}function aI({config:A}){return A.emulator?Ul(A,iI):`https://${A.authDomain}/${sI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ja="webStorageSupport";class cI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zp,this._completeRedirectFn=RE,this._overrideRedirectResult=TE}_openPopup(e,t,r,n){return w(this,null,function*(){var s;ft((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const i=yield md(e,t,r,Uc(),n);return rI(e,i,Sl())})}_openRedirect(e,t,r,n){return w(this,null,function*(){yield this._originValidation(e);const s=yield md(e,t,r,Uc(),n);return dE(s),new Promise(()=>{})})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:n,promise:s}=this.eventManagers[t];return n?Promise.resolve(n):(ft(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}initAndGetManager(e){return w(this,null,function*(){const t=yield YE(e),r=new PE(e);return t.register("authEvent",n=>(z(n==null?void 0:n.authEvent,e,"invalid-auth-event"),{status:r.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r})}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(ja,{type:ja},n=>{var s;const i=(s=n==null?void 0:n[0])===null||s===void 0?void 0:s[ja];i!==void 0&&t(!!i),TA(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=OE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Kp()||Hp()||bl()}}const lI=cI;var Bd="@firebase/auth",wd="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}getToken(e){return w(this,null,function*(){return this.assertAuthConfigured(),yield this.auth._initializationPromise,this.auth.currentUser?{accessToken:yield this.auth.currentUser.getIdToken(e)}:null})}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(A){switch(A){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dI(A){Br(new Gt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:i,authDomain:a}=r.options;z(i&&!i.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:i,authDomain:a,clientPlatform:A,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jp(A)},l=new Qv(r,n,s,c);return Hv(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Br(new Gt("auth-internal",e=>{const t=yt(e.getProvider("auth").getImmediate());return(r=>new uI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),GA(Bd,wd,hI(A)),GA(Bd,wd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fI=5*60,gI=vp("authIdTokenMaxAge")||fI;let yd=null;const pI=A=>e=>w(null,null,function*(){const t=e&&(yield e.getIdTokenResult()),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>gI)return;const n=t==null?void 0:t.token;yd!==n&&(yd=n,yield fetch(A,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))});function mI(A=vl()){const e=ko(A,"auth");if(e.isInitialized())return e.getImmediate();const t=Lv(A,{popupRedirectResolver:lI,persistence:[vE,lE,Zp]}),r=vp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const i=pI(s.toString());sE(t,i,()=>i(t.currentUser)),nE(t,a=>i(a))}}const n=wp("auth");return n&&kv(t,`http://${n}`),t}function BI(){var A,e;return(e=(A=document.getElementsByTagName("head"))===null||A===void 0?void 0:A[0])!==null&&e!==void 0?e:document}bv({loadJS(A){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",A),r.onload=e,r.onerror=n=>{const s=HA("internal-error");s.customData=n,t(s)},r.type="text/javascript",r.charset="UTF-8",BI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dI("Browser");var wI="firebase",yI="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */GA(wI,yI,"app");var Cd=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Nt,om;(function(){var A;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(U,m){function C(){}C.prototype=m.prototype,U.D=m.prototype,U.prototype=new C,U.prototype.constructor=U,U.C=function(Q,T,F){for(var I=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)I[Ae-2]=arguments[Ae];return m.prototype[T].apply(Q,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function n(U,m,C){C||(C=0);var Q=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)Q[T]=m.charCodeAt(C++)|m.charCodeAt(C++)<<8|m.charCodeAt(C++)<<16|m.charCodeAt(C++)<<24;else for(T=0;16>T;++T)Q[T]=m[C++]|m[C++]<<8|m[C++]<<16|m[C++]<<24;m=U.g[0],C=U.g[1],T=U.g[2];var F=U.g[3],I=m+(F^C&(T^F))+Q[0]+3614090360&4294967295;m=C+(I<<7&4294967295|I>>>25),I=F+(T^m&(C^T))+Q[1]+3905402710&4294967295,F=m+(I<<12&4294967295|I>>>20),I=T+(C^F&(m^C))+Q[2]+606105819&4294967295,T=F+(I<<17&4294967295|I>>>15),I=C+(m^T&(F^m))+Q[3]+3250441966&4294967295,C=T+(I<<22&4294967295|I>>>10),I=m+(F^C&(T^F))+Q[4]+4118548399&4294967295,m=C+(I<<7&4294967295|I>>>25),I=F+(T^m&(C^T))+Q[5]+1200080426&4294967295,F=m+(I<<12&4294967295|I>>>20),I=T+(C^F&(m^C))+Q[6]+2821735955&4294967295,T=F+(I<<17&4294967295|I>>>15),I=C+(m^T&(F^m))+Q[7]+4249261313&4294967295,C=T+(I<<22&4294967295|I>>>10),I=m+(F^C&(T^F))+Q[8]+1770035416&4294967295,m=C+(I<<7&4294967295|I>>>25),I=F+(T^m&(C^T))+Q[9]+2336552879&4294967295,F=m+(I<<12&4294967295|I>>>20),I=T+(C^F&(m^C))+Q[10]+4294925233&4294967295,T=F+(I<<17&4294967295|I>>>15),I=C+(m^T&(F^m))+Q[11]+2304563134&4294967295,C=T+(I<<22&4294967295|I>>>10),I=m+(F^C&(T^F))+Q[12]+1804603682&4294967295,m=C+(I<<7&4294967295|I>>>25),I=F+(T^m&(C^T))+Q[13]+4254626195&4294967295,F=m+(I<<12&4294967295|I>>>20),I=T+(C^F&(m^C))+Q[14]+2792965006&4294967295,T=F+(I<<17&4294967295|I>>>15),I=C+(m^T&(F^m))+Q[15]+1236535329&4294967295,C=T+(I<<22&4294967295|I>>>10),I=m+(T^F&(C^T))+Q[1]+4129170786&4294967295,m=C+(I<<5&4294967295|I>>>27),I=F+(C^T&(m^C))+Q[6]+3225465664&4294967295,F=m+(I<<9&4294967295|I>>>23),I=T+(m^C&(F^m))+Q[11]+643717713&4294967295,T=F+(I<<14&4294967295|I>>>18),I=C+(F^m&(T^F))+Q[0]+3921069994&4294967295,C=T+(I<<20&4294967295|I>>>12),I=m+(T^F&(C^T))+Q[5]+3593408605&4294967295,m=C+(I<<5&4294967295|I>>>27),I=F+(C^T&(m^C))+Q[10]+38016083&4294967295,F=m+(I<<9&4294967295|I>>>23),I=T+(m^C&(F^m))+Q[15]+3634488961&4294967295,T=F+(I<<14&4294967295|I>>>18),I=C+(F^m&(T^F))+Q[4]+3889429448&4294967295,C=T+(I<<20&4294967295|I>>>12),I=m+(T^F&(C^T))+Q[9]+568446438&4294967295,m=C+(I<<5&4294967295|I>>>27),I=F+(C^T&(m^C))+Q[14]+3275163606&4294967295,F=m+(I<<9&4294967295|I>>>23),I=T+(m^C&(F^m))+Q[3]+4107603335&4294967295,T=F+(I<<14&4294967295|I>>>18),I=C+(F^m&(T^F))+Q[8]+1163531501&4294967295,C=T+(I<<20&4294967295|I>>>12),I=m+(T^F&(C^T))+Q[13]+2850285829&4294967295,m=C+(I<<5&4294967295|I>>>27),I=F+(C^T&(m^C))+Q[2]+4243563512&4294967295,F=m+(I<<9&4294967295|I>>>23),I=T+(m^C&(F^m))+Q[7]+1735328473&4294967295,T=F+(I<<14&4294967295|I>>>18),I=C+(F^m&(T^F))+Q[12]+2368359562&4294967295,C=T+(I<<20&4294967295|I>>>12),I=m+(C^T^F)+Q[5]+4294588738&4294967295,m=C+(I<<4&4294967295|I>>>28),I=F+(m^C^T)+Q[8]+2272392833&4294967295,F=m+(I<<11&4294967295|I>>>21),I=T+(F^m^C)+Q[11]+1839030562&4294967295,T=F+(I<<16&4294967295|I>>>16),I=C+(T^F^m)+Q[14]+4259657740&4294967295,C=T+(I<<23&4294967295|I>>>9),I=m+(C^T^F)+Q[1]+2763975236&4294967295,m=C+(I<<4&4294967295|I>>>28),I=F+(m^C^T)+Q[4]+1272893353&4294967295,F=m+(I<<11&4294967295|I>>>21),I=T+(F^m^C)+Q[7]+4139469664&4294967295,T=F+(I<<16&4294967295|I>>>16),I=C+(T^F^m)+Q[10]+3200236656&4294967295,C=T+(I<<23&4294967295|I>>>9),I=m+(C^T^F)+Q[13]+681279174&4294967295,m=C+(I<<4&4294967295|I>>>28),I=F+(m^C^T)+Q[0]+3936430074&4294967295,F=m+(I<<11&4294967295|I>>>21),I=T+(F^m^C)+Q[3]+3572445317&4294967295,T=F+(I<<16&4294967295|I>>>16),I=C+(T^F^m)+Q[6]+76029189&4294967295,C=T+(I<<23&4294967295|I>>>9),I=m+(C^T^F)+Q[9]+3654602809&4294967295,m=C+(I<<4&4294967295|I>>>28),I=F+(m^C^T)+Q[12]+3873151461&4294967295,F=m+(I<<11&4294967295|I>>>21),I=T+(F^m^C)+Q[15]+530742520&4294967295,T=F+(I<<16&4294967295|I>>>16),I=C+(T^F^m)+Q[2]+3299628645&4294967295,C=T+(I<<23&4294967295|I>>>9),I=m+(T^(C|~F))+Q[0]+4096336452&4294967295,m=C+(I<<6&4294967295|I>>>26),I=F+(C^(m|~T))+Q[7]+1126891415&4294967295,F=m+(I<<10&4294967295|I>>>22),I=T+(m^(F|~C))+Q[14]+2878612391&4294967295,T=F+(I<<15&4294967295|I>>>17),I=C+(F^(T|~m))+Q[5]+4237533241&4294967295,C=T+(I<<21&4294967295|I>>>11),I=m+(T^(C|~F))+Q[12]+1700485571&4294967295,m=C+(I<<6&4294967295|I>>>26),I=F+(C^(m|~T))+Q[3]+2399980690&4294967295,F=m+(I<<10&4294967295|I>>>22),I=T+(m^(F|~C))+Q[10]+4293915773&4294967295,T=F+(I<<15&4294967295|I>>>17),I=C+(F^(T|~m))+Q[1]+2240044497&4294967295,C=T+(I<<21&4294967295|I>>>11),I=m+(T^(C|~F))+Q[8]+1873313359&4294967295,m=C+(I<<6&4294967295|I>>>26),I=F+(C^(m|~T))+Q[15]+4264355552&4294967295,F=m+(I<<10&4294967295|I>>>22),I=T+(m^(F|~C))+Q[6]+2734768916&4294967295,T=F+(I<<15&4294967295|I>>>17),I=C+(F^(T|~m))+Q[13]+1309151649&4294967295,C=T+(I<<21&4294967295|I>>>11),I=m+(T^(C|~F))+Q[4]+4149444226&4294967295,m=C+(I<<6&4294967295|I>>>26),I=F+(C^(m|~T))+Q[11]+3174756917&4294967295,F=m+(I<<10&4294967295|I>>>22),I=T+(m^(F|~C))+Q[2]+718787259&4294967295,T=F+(I<<15&4294967295|I>>>17),I=C+(F^(T|~m))+Q[9]+3951481745&4294967295,U.g[0]=U.g[0]+m&4294967295,U.g[1]=U.g[1]+(T+(I<<21&4294967295|I>>>11))&4294967295,U.g[2]=U.g[2]+T&4294967295,U.g[3]=U.g[3]+F&4294967295}r.prototype.u=function(U,m){m===void 0&&(m=U.length);for(var C=m-this.blockSize,Q=this.B,T=this.h,F=0;F<m;){if(T==0)for(;F<=C;)n(this,U,F),F+=this.blockSize;if(typeof U=="string"){for(;F<m;)if(Q[T++]=U.charCodeAt(F++),T==this.blockSize){n(this,Q),T=0;break}}else for(;F<m;)if(Q[T++]=U[F++],T==this.blockSize){n(this,Q),T=0;break}}this.h=T,this.o+=m},r.prototype.v=function(){var U=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);U[0]=128;for(var m=1;m<U.length-8;++m)U[m]=0;var C=8*this.o;for(m=U.length-8;m<U.length;++m)U[m]=C&255,C/=256;for(this.u(U),U=Array(16),m=C=0;4>m;++m)for(var Q=0;32>Q;Q+=8)U[C++]=this.g[m]>>>Q&255;return U};function s(U,m){var C=a;return Object.prototype.hasOwnProperty.call(C,U)?C[U]:C[U]=m(U)}function i(U,m){this.h=m;for(var C=[],Q=!0,T=U.length-1;0<=T;T--){var F=U[T]|0;Q&&F==m||(C[T]=F,Q=!1)}this.g=C}var a={};function c(U){return-128<=U&&128>U?s(U,function(m){return new i([m|0],0>m?-1:0)}):new i([U|0],0>U?-1:0)}function l(U){if(isNaN(U)||!isFinite(U))return d;if(0>U)return b(l(-U));for(var m=[],C=1,Q=0;U>=C;Q++)m[Q]=U/C|0,C*=4294967296;return new i(m,0)}function h(U,m){if(U.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(U.charAt(0)=="-")return b(h(U.substring(1),m));if(0<=U.indexOf("-"))throw Error('number format error: interior "-" character');for(var C=l(Math.pow(m,8)),Q=d,T=0;T<U.length;T+=8){var F=Math.min(8,U.length-T),I=parseInt(U.substring(T,T+F),m);8>F?(F=l(Math.pow(m,F)),Q=Q.j(F).add(l(I))):(Q=Q.j(C),Q=Q.add(l(I)))}return Q}var d=c(0),p=c(1),y=c(16777216);A=i.prototype,A.m=function(){if(v(this))return-b(this).m();for(var U=0,m=1,C=0;C<this.g.length;C++){var Q=this.i(C);U+=(0<=Q?Q:4294967296+Q)*m,m*=4294967296}return U},A.toString=function(U){if(U=U||10,2>U||36<U)throw Error("radix out of range: "+U);if(_(this))return"0";if(v(this))return"-"+b(this).toString(U);for(var m=l(Math.pow(U,6)),C=this,Q="";;){var T=k(C,m).g;C=x(C,T.j(m));var F=((0<C.g.length?C.g[0]:C.h)>>>0).toString(U);if(C=T,_(C))return F+Q;for(;6>F.length;)F="0"+F;Q=F+Q}},A.i=function(U){return 0>U?0:U<this.g.length?this.g[U]:this.h};function _(U){if(U.h!=0)return!1;for(var m=0;m<U.g.length;m++)if(U.g[m]!=0)return!1;return!0}function v(U){return U.h==-1}A.l=function(U){return U=x(this,U),v(U)?-1:_(U)?0:1};function b(U){for(var m=U.g.length,C=[],Q=0;Q<m;Q++)C[Q]=~U.g[Q];return new i(C,~U.h).add(p)}A.abs=function(){return v(this)?b(this):this},A.add=function(U){for(var m=Math.max(this.g.length,U.g.length),C=[],Q=0,T=0;T<=m;T++){var F=Q+(this.i(T)&65535)+(U.i(T)&65535),I=(F>>>16)+(this.i(T)>>>16)+(U.i(T)>>>16);Q=I>>>16,F&=65535,I&=65535,C[T]=I<<16|F}return new i(C,C[C.length-1]&-2147483648?-1:0)};function x(U,m){return U.add(b(m))}A.j=function(U){if(_(this)||_(U))return d;if(v(this))return v(U)?b(this).j(b(U)):b(b(this).j(U));if(v(U))return b(this.j(b(U)));if(0>this.l(y)&&0>U.l(y))return l(this.m()*U.m());for(var m=this.g.length+U.g.length,C=[],Q=0;Q<2*m;Q++)C[Q]=0;for(Q=0;Q<this.g.length;Q++)for(var T=0;T<U.g.length;T++){var F=this.i(Q)>>>16,I=this.i(Q)&65535,Ae=U.i(T)>>>16,Ie=U.i(T)&65535;C[2*Q+2*T]+=I*Ie,S(C,2*Q+2*T),C[2*Q+2*T+1]+=F*Ie,S(C,2*Q+2*T+1),C[2*Q+2*T+1]+=I*Ae,S(C,2*Q+2*T+1),C[2*Q+2*T+2]+=F*Ae,S(C,2*Q+2*T+2)}for(Q=0;Q<m;Q++)C[Q]=C[2*Q+1]<<16|C[2*Q];for(Q=m;Q<2*m;Q++)C[Q]=0;return new i(C,0)};function S(U,m){for(;(U[m]&65535)!=U[m];)U[m+1]+=U[m]>>>16,U[m]&=65535,m++}function D(U,m){this.g=U,this.h=m}function k(U,m){if(_(m))throw Error("division by zero");if(_(U))return new D(d,d);if(v(U))return m=k(b(U),m),new D(b(m.g),b(m.h));if(v(m))return m=k(U,b(m)),new D(b(m.g),m.h);if(30<U.g.length){if(v(U)||v(m))throw Error("slowDivide_ only works with positive integers.");for(var C=p,Q=m;0>=Q.l(U);)C=N(C),Q=N(Q);var T=H(C,1),F=H(Q,1);for(Q=H(Q,2),C=H(C,2);!_(Q);){var I=F.add(Q);0>=I.l(U)&&(T=T.add(C),F=I),Q=H(Q,1),C=H(C,1)}return m=x(U,T.j(m)),new D(T,m)}for(T=d;0<=U.l(m);){for(C=Math.max(1,Math.floor(U.m()/m.m())),Q=Math.ceil(Math.log(C)/Math.LN2),Q=48>=Q?1:Math.pow(2,Q-48),F=l(C),I=F.j(m);v(I)||0<I.l(U);)C-=Q,F=l(C),I=F.j(m);_(F)&&(F=p),T=T.add(F),U=x(U,I)}return new D(T,U)}A.A=function(U){return k(this,U).h},A.and=function(U){for(var m=Math.max(this.g.length,U.g.length),C=[],Q=0;Q<m;Q++)C[Q]=this.i(Q)&U.i(Q);return new i(C,this.h&U.h)},A.or=function(U){for(var m=Math.max(this.g.length,U.g.length),C=[],Q=0;Q<m;Q++)C[Q]=this.i(Q)|U.i(Q);return new i(C,this.h|U.h)},A.xor=function(U){for(var m=Math.max(this.g.length,U.g.length),C=[],Q=0;Q<m;Q++)C[Q]=this.i(Q)^U.i(Q);return new i(C,this.h^U.h)};function N(U){for(var m=U.g.length+1,C=[],Q=0;Q<m;Q++)C[Q]=U.i(Q)<<1|U.i(Q-1)>>>31;return new i(C,U.h)}function H(U,m){var C=m>>5;m%=32;for(var Q=U.g.length-C,T=[],F=0;F<Q;F++)T[F]=0<m?U.i(F+C)>>>m|U.i(F+C+1)<<32-m:U.i(F+C);return new i(T,U.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,om=r,i.prototype.add=i.prototype.add,i.prototype.multiply=i.prototype.j,i.prototype.modulo=i.prototype.A,i.prototype.compare=i.prototype.l,i.prototype.toNumber=i.prototype.m,i.prototype.toString=i.prototype.toString,i.prototype.getBits=i.prototype.i,i.fromNumber=l,i.fromString=h,Nt=i}).apply(typeof Cd!="undefined"?Cd:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var ai=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var am,Kn,cm,Xi,Fc,lm,um,hm;(function(){var A,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,g){return o==Array.prototype||o==Object.prototype||(o[u]=g.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof ai=="object"&&ai];for(var u=0;u<o.length;++u){var g=o[u];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=t(this);function n(o,u){if(u)e:{var g=r;o=o.split(".");for(var B=0;B<o.length-1;B++){var R=o[B];if(!(R in g))break e;g=g[R]}o=o[o.length-1],B=g[o],u=u(B),u!=B&&u!=null&&e(g,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var g=0,B=!1,R={next:function(){if(!B&&g<o.length){var P=g++;return{value:u(P,o[P]),done:!1}}return B=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}n("Array.prototype.values",function(o){return o||function(){return s(this,function(u,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function h(o,u,g){return o.call.apply(o.bind,arguments)}function d(o,u,g){if(!o)throw Error();if(2<arguments.length){var B=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,B),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function p(o,u,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:d,p.apply(null,arguments)}function y(o,u){var g=Array.prototype.slice.call(arguments,1);return function(){var B=g.slice();return B.push.apply(B,arguments),o.apply(this,B)}}function _(o,u){function g(){}g.prototype=u.prototype,o.aa=u.prototype,o.prototype=new g,o.prototype.constructor=o,o.Qb=function(B,R,P){for(var V=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)V[ge-2]=arguments[ge];return u.prototype[R].apply(B,V)}}function v(o){const u=o.length;if(0<u){const g=Array(u);for(let B=0;B<u;B++)g[B]=o[B];return g}return[]}function b(o,u){for(let g=1;g<arguments.length;g++){const B=arguments[g];if(c(B)){const R=o.length||0,P=B.length||0;o.length=R+P;for(let V=0;V<P;V++)o[R+V]=B[V]}else o.push(B)}}class x{constructor(u,g){this.i=u,this.j=g,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function S(o){return/^[\s\xa0]*$/.test(o)}function D(){var o=a.navigator;return o&&(o=o.userAgent)?o:""}function k(o){return k[" "](o),o}k[" "]=function(){};var N=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function H(o,u,g){for(const B in o)u.call(g,o[B],B,o)}function U(o,u){for(const g in o)u.call(void 0,o[g],g,o)}function m(o){const u={};for(const g in o)u[g]=o[g];return u}const C="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Q(o,u){let g,B;for(let R=1;R<arguments.length;R++){B=arguments[R];for(g in B)o[g]=B[g];for(let P=0;P<C.length;P++)g=C[P],Object.prototype.hasOwnProperty.call(B,g)&&(o[g]=B[g])}}function T(o){var u=1;o=o.split(":");const g=[];for(;0<u&&o.length;)g.push(o.shift()),u--;return o.length&&g.push(o.join(":")),g}function F(o){a.setTimeout(()=>{throw o},0)}function I(){var o=re;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Ae{constructor(){this.h=this.g=null}add(u,g){const B=Ie.get();B.set(u,g),this.h?this.h.next=B:this.g=B,this.h=B}}var Ie=new x(()=>new _e,o=>o.reset());class _e{constructor(){this.next=this.g=this.h=null}set(u,g){this.h=u,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Ce,Y=!1,re=new Ae,Be=()=>{const o=a.Promise.resolve(void 0);Ce=()=>{o.then(Ze)}};var Ze=()=>{for(var o;o=I();){try{o.h.call(o.g)}catch(g){F(g)}var u=Ie;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Y=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var fe=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const g=()=>{};a.addEventListener("test",g,u),a.removeEventListener("test",g,u)}catch(g){}return o}();function Le(o,u){if(le.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var g=this.type=o.type,B=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(N){e:{try{k(u.nodeName);var R=!0;break e}catch(P){}R=!1}R||(u=null)}}else g=="mouseover"?u=o.fromElement:g=="mouseout"&&(u=o.toElement);this.relatedTarget=u,B?(this.clientX=B.clientX!==void 0?B.clientX:B.pageX,this.clientY=B.clientY!==void 0?B.clientY:B.pageY,this.screenX=B.screenX||0,this.screenY=B.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:xA[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Le.aa.h.call(this)}}_(Le,le);var xA={2:"touch",3:"pen",4:"mouse"};Le.prototype.h=function(){Le.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var lA="closure_listenable_"+(1e6*Math.random()|0),At=0;function xe(o,u,g,B,R){this.listener=o,this.proxy=null,this.src=u,this.type=g,this.capture=!!B,this.ha=R,this.key=++At,this.da=this.fa=!1}function pe(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function MA(o){this.src=o,this.g={},this.h=0}MA.prototype.add=function(o,u,g,B,R){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var V=fa(o,u,B,R);return-1<V?(u=o[V],g||(u.fa=!1)):(u=new xe(u,this.src,P,!!B,R),u.fa=g,o.push(u)),u};function wn(o,u){var g=u.type;if(g in o.g){var B=o.g[g],R=Array.prototype.indexOf.call(B,u,void 0),P;(P=0<=R)&&Array.prototype.splice.call(B,R,1),P&&(pe(u),o.g[g].length==0&&(delete o.g[g],o.h--))}}function fa(o,u,g,B){for(var R=0;R<o.length;++R){var P=o[R];if(!P.da&&P.listener==u&&P.capture==!!g&&P.ha==B)return R}return-1}var ga="closure_lm_"+(1e6*Math.random()|0),pa={};function Hu(o,u,g,B,R){if(Array.isArray(u)){for(var P=0;P<u.length;P++)Hu(o,u[P],g,B,R);return null}return g=Ou(g),o&&o[lA]?o.K(u,g,l(B)?!!B.capture:!1,R):Ey(o,u,g,!1,B,R)}function Ey(o,u,g,B,R,P){if(!u)throw Error("Invalid event type");var V=l(R)?!!R.capture:!!R,ge=Ba(o);if(ge||(o[ga]=ge=new MA(o)),g=ge.add(u,g,B,V,P),g.proxy)return g;if(B=Iy(),g.proxy=B,B.src=o,B.listener=g,o.addEventListener)fe||(R=V),R===void 0&&(R=!1),o.addEventListener(u.toString(),B,R);else if(o.attachEvent)o.attachEvent(Nu(u.toString()),B);else if(o.addListener&&o.removeListener)o.addListener(B);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Iy(){function o(g){return u.call(o.src,o.listener,g)}const u=_y;return o}function ku(o,u,g,B,R){if(Array.isArray(u))for(var P=0;P<u.length;P++)ku(o,u[P],g,B,R);else B=l(B)?!!B.capture:!!B,g=Ou(g),o&&o[lA]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],g=fa(P,g,B,R),-1<g&&(pe(P[g]),Array.prototype.splice.call(P,g,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=Ba(o))&&(u=o.g[u.toString()],o=-1,u&&(o=fa(u,g,B,R)),(g=-1<o?u[o]:null)&&ma(g))}function ma(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[lA])wn(u.i,o);else{var g=o.type,B=o.proxy;u.removeEventListener?u.removeEventListener(g,B,o.capture):u.detachEvent?u.detachEvent(Nu(g),B):u.addListener&&u.removeListener&&u.removeListener(B),(g=Ba(u))?(wn(g,o),g.h==0&&(g.src=null,u[ga]=null)):pe(o)}}}function Nu(o){return o in pa?pa[o]:pa[o]="on"+o}function _y(o,u){if(o.da)o=!0;else{u=new Le(u,this);var g=o.listener,B=o.ha||o.src;o.fa&&ma(o),o=g.call(B,u)}return o}function Ba(o){return o=o[ga],o instanceof MA?o:null}var wa="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ou(o){return typeof o=="function"?o:(o[wa]||(o[wa]=function(u){return o.handleEvent(u)}),o[wa])}function eA(){W.call(this),this.i=new MA(this),this.M=this,this.F=null}_(eA,W),eA.prototype[lA]=!0,eA.prototype.removeEventListener=function(o,u,g,B){ku(this,o,u,g,B)};function uA(o,u){var g,B=o.F;if(B)for(g=[];B;B=B.F)g.push(B);if(o=o.M,B=u.type||u,typeof u=="string")u=new le(u,o);else if(u instanceof le)u.target=u.target||o;else{var R=u;u=new le(B,o),Q(u,R)}if(R=!0,g)for(var P=g.length-1;0<=P;P--){var V=u.g=g[P];R=Ks(V,B,!0,u)&&R}if(V=u.g=o,R=Ks(V,B,!0,u)&&R,R=Ks(V,B,!1,u)&&R,g)for(P=0;P<g.length;P++)V=u.g=g[P],R=Ks(V,B,!1,u)&&R}eA.prototype.N=function(){if(eA.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var g=o.g[u],B=0;B<g.length;B++)pe(g[B]);delete o.g[u],o.h--}}this.F=null},eA.prototype.K=function(o,u,g,B){return this.i.add(String(o),u,!1,g,B)},eA.prototype.L=function(o,u,g,B){return this.i.add(String(o),u,!0,g,B)};function Ks(o,u,g,B){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,P=0;P<u.length;++P){var V=u[P];if(V&&!V.da&&V.capture==g){var ge=V.listener,We=V.ha||V.src;V.fa&&wn(o.i,V),R=ge.call(We,B)!==!1&&R}}return R&&!B.defaultPrevented}function Mu(o,u,g){if(typeof o=="function")g&&(o=p(o,g));else if(o&&typeof o.handleEvent=="function")o=p(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:a.setTimeout(o,u||0)}function Vu(o){o.g=Mu(()=>{o.g=null,o.i&&(o.i=!1,Vu(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Uy extends W{constructor(u,g){super(),this.m=u,this.l=g,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Vu(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yn(o){W.call(this),this.h=o,this.g={}}_(yn,W);var Ku=[];function ju(o){H(o.g,function(u,g){this.g.hasOwnProperty(g)&&ma(u)},o),o.g={}}yn.prototype.N=function(){yn.aa.N.call(this),ju(this)},yn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ya=a.JSON.stringify,Qy=a.JSON.parse,by=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function Ca(){}Ca.prototype.h=null;function Gu(o){return o.h||(o.h=o.i())}function $u(){}var Cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function va(){le.call(this,"d")}_(va,le);function Ea(){le.call(this,"c")}_(Ea,le);var tr={},Wu=null;function js(){return Wu=Wu||new eA}tr.La="serverreachability";function Xu(o){le.call(this,tr.La,o)}_(Xu,le);function vn(o){const u=js();uA(u,new Xu(u))}tr.STAT_EVENT="statevent";function zu(o,u){le.call(this,tr.STAT_EVENT,o),this.stat=u}_(zu,le);function hA(o){const u=js();uA(u,new zu(u,o))}tr.Ma="timingevent";function qu(o,u){le.call(this,tr.Ma,o),this.size=u}_(qu,le);function En(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function In(){this.g=!0}In.prototype.xa=function(){this.g=!1};function Fy(o,u,g,B,R,P){o.info(function(){if(o.g)if(P)for(var V="",ge=P.split("&"),We=0;We<ge.length;We++){var ce=ge[We].split("=");if(1<ce.length){var AA=ce[0];ce=ce[1];var tA=AA.split("_");V=2<=tA.length&&tA[1]=="type"?V+(AA+"="+ce+"&"):V+(AA+"=redacted&")}}else V=null;else V=P;return"XMLHTTP REQ ("+B+") [attempt "+R+"]: "+u+`
`+g+`
`+V})}function Ty(o,u,g,B,R,P,V){o.info(function(){return"XMLHTTP RESP ("+B+") [ attempt "+R+"]: "+u+`
`+g+`
`+P+" "+V})}function Fr(o,u,g,B){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Sy(o,g)+(B?" "+B:"")})}function xy(o,u){o.info(function(){return"TIMEOUT: "+u})}In.prototype.info=function(){};function Sy(o,u){if(!o.g)return u;if(!u)return null;try{var g=JSON.parse(u);if(g){for(o=0;o<g.length;o++)if(Array.isArray(g[o])){var B=g[o];if(!(2>B.length)){var R=B[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var V=1;V<R.length;V++)R[V]=""}}}}return ya(g)}catch(ge){return u}}var Gs={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Yu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ia;function $s(){}_($s,Ca),$s.prototype.g=function(){return new XMLHttpRequest},$s.prototype.i=function(){return{}},Ia=new $s;function Ct(o,u,g,B){this.j=o,this.i=u,this.l=g,this.R=B||1,this.U=new yn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ju}function Ju(){this.i=null,this.g="",this.h=!1}var Zu={},_a={};function Ua(o,u,g){o.L=1,o.v=qs(tt(u)),o.m=g,o.P=!0,eh(o,null)}function eh(o,u){o.F=Date.now(),Ws(o),o.A=tt(o.v);var g=o.A,B=o.R;Array.isArray(B)||(B=[String(B)]),fh(g.i,"t",B),o.C=0,g=o.j.J,o.h=new Ju,o.g=Sh(o.j,g?u:null,!o.m),0<o.O&&(o.M=new Uy(p(o.Y,o,o.g),o.O)),u=o.U,g=o.g,B=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Ku[0]=R.toString()),R=Ku);for(var P=0;P<R.length;P++){var V=Hu(g,R[P],B||u.handleEvent,!1,u.h||u);if(!V)break;u.g[V.key]=V}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),vn(),Fy(o.i,o.u,o.A,o.l,o.R,o.m)}Ct.prototype.ca=function(o){o=o.target;const u=this.M;u&&rt(o)==3?u.j():this.Y(o)},Ct.prototype.Y=function(o){try{if(o==this.g)e:{const tA=rt(this.g);var u=this.g.Ba();const Sr=this.g.Z();if(!(3>tA)&&(tA!=3||this.g&&(this.h.h||this.g.oa()||Ch(this.g)))){this.J||tA!=4||u==7||(u==8||0>=Sr?vn(3):vn(2)),Qa(this);var g=this.g.Z();this.X=g;A:if(Ah(this)){var B=Ch(this.g);o="";var R=B.length,P=rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){rr(this),_n(this);var V="";break A}this.h.i=new a.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(B[u],{stream:!(P&&u==R-1)});B.length=0,this.h.g+=o,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=g==200,Ty(this.i,this.u,this.A,this.l,this.R,tA,g),this.o){if(this.T&&!this.K){A:{if(this.g){var ge,We=this.g;if((ge=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(ge)){var ce=ge;break A}}ce=null}if(g=ce)Fr(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ba(this,g);else{this.o=!1,this.s=3,hA(12),rr(this),_n(this);break e}}if(this.P){g=!0;let SA;for(;!this.J&&this.C<V.length;)if(SA=Ry(this,V),SA==_a){tA==4&&(this.s=4,hA(14),g=!1),Fr(this.i,this.l,null,"[Incomplete Response]");break}else if(SA==Zu){this.s=4,hA(15),Fr(this.i,this.l,V,"[Invalid Chunk]"),g=!1;break}else Fr(this.i,this.l,SA,null),ba(this,SA);if(Ah(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),tA!=4||V.length!=0||this.h.h||(this.s=1,hA(16),g=!1),this.o=this.o&&g,!g)Fr(this.i,this.l,V,"[Invalid Chunked Response]"),rr(this),_n(this);else if(0<V.length&&!this.W){this.W=!0;var AA=this.j;AA.g==this&&AA.ba&&!AA.M&&(AA.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Da(AA),AA.M=!0,hA(11))}}else Fr(this.i,this.l,V,null),ba(this,V);tA==4&&rr(this),this.o&&!this.J&&(tA==4?bh(this.j,this):(this.o=!1,Ws(this)))}else qy(this.g),g==400&&0<V.indexOf("Unknown SID")?(this.s=3,hA(12)):(this.s=0,hA(13)),rr(this),_n(this)}}}catch(tA){}finally{}};function Ah(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Ry(o,u){var g=o.C,B=u.indexOf(`
`,g);return B==-1?_a:(g=Number(u.substring(g,B)),isNaN(g)?Zu:(B+=1,B+g>u.length?_a:(u=u.slice(B,B+g),o.C=B+g,u)))}Ct.prototype.cancel=function(){this.J=!0,rr(this)};function Ws(o){o.S=Date.now()+o.I,th(o,o.I)}function th(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=En(p(o.ba,o),u)}function Qa(o){o.B&&(a.clearTimeout(o.B),o.B=null)}Ct.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(xy(this.i,this.A),this.L!=2&&(vn(),hA(17)),rr(this),this.s=2,_n(this)):th(this,this.S-o)};function _n(o){o.j.G==0||o.J||bh(o.j,o)}function rr(o){Qa(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ju(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function ba(o,u){try{var g=o.j;if(g.G!=0&&(g.g==o||Fa(g.h,o))){if(!o.K&&Fa(g.h,o)&&g.G==3){try{var B=g.Da.g.parse(u)}catch(ce){B=null}if(Array.isArray(B)&&B.length==3){var R=B;if(R[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<o.F)ti(g),ei(g);else break e;Ra(g),hA(18)}}else g.za=R[1],0<g.za-g.T&&37500>R[2]&&g.F&&g.v==0&&!g.C&&(g.C=En(p(g.Za,g),6e3));if(1>=sh(g.h)&&g.ca){try{g.ca()}catch(ce){}g.ca=void 0}}else sr(g,11)}else if((o.K||g.g==o)&&ti(g),!S(u))for(R=g.Da.g.parse(u),u=0;u<R.length;u++){let ce=R[u];if(g.T=ce[0],ce=ce[1],g.G==2)if(ce[0]=="c"){g.K=ce[1],g.ia=ce[2];const AA=ce[3];AA!=null&&(g.la=AA,g.j.info("VER="+g.la));const tA=ce[4];tA!=null&&(g.Aa=tA,g.j.info("SVER="+g.Aa));const Sr=ce[5];Sr!=null&&typeof Sr=="number"&&0<Sr&&(B=1.5*Sr,g.L=B,g.j.info("backChannelRequestTimeoutMs_="+B)),B=g;const SA=o.g;if(SA){const ni=SA.g?SA.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ni){var P=B.h;P.g||ni.indexOf("spdy")==-1&&ni.indexOf("quic")==-1&&ni.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Ta(P,P.h),P.h=null))}if(B.D){const Pa=SA.g?SA.g.getResponseHeader("X-HTTP-Session-Id"):null;Pa&&(B.ya=Pa,we(B.I,B.D,Pa))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-o.F,g.j.info("Handshake RTT: "+g.R+"ms")),B=g;var V=o;if(B.qa=xh(B,B.J?B.ia:null,B.W),V.K){ih(B.h,V);var ge=V,We=B.L;We&&(ge.I=We),ge.B&&(Qa(ge),Ws(ge)),B.g=V}else Uh(B);0<g.i.length&&Ai(g)}else ce[0]!="stop"&&ce[0]!="close"||sr(g,7);else g.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?sr(g,7):Sa(g):ce[0]!="noop"&&g.l&&g.l.ta(ce),g.v=0)}}vn(4)}catch(ce){}}var Dy=class{constructor(o,u){this.g=o,this.map=u}};function rh(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nh(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function sh(o){return o.h?1:o.g?o.g.size:0}function Fa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ta(o,u){o.g?o.g.add(u):o.h=u}function ih(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}rh.prototype.cancel=function(){if(this.i=oh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function oh(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const g of o.g.values())u=u.concat(g.D);return u}return v(o.i)}function Py(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map!="undefined"&&o instanceof Map||typeof Set!="undefined"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],g=o.length,B=0;B<g;B++)u.push(o[B]);return u}u=[],g=0;for(B in o)u[g++]=o[B];return u}function Ly(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map!="undefined"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set!="undefined"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var g=0;g<o;g++)u.push(g);return u}u=[],g=0;for(const B in o)u[g++]=B;return u}}}function ah(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var g=Ly(o),B=Py(o),R=B.length,P=0;P<R;P++)u.call(void 0,B[P],g&&g[P],o)}var ch=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Hy(o,u){if(o){o=o.split("&");for(var g=0;g<o.length;g++){var B=o[g].indexOf("="),R=null;if(0<=B){var P=o[g].substring(0,B);R=o[g].substring(B+1)}else P=o[g];u(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function nr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof nr){this.h=o.h,Xs(this,o.j),this.o=o.o,this.g=o.g,zs(this,o.s),this.l=o.l;var u=o.i,g=new bn;g.i=u.i,u.g&&(g.g=new Map(u.g),g.h=u.h),lh(this,g),this.m=o.m}else o&&(u=String(o).match(ch))?(this.h=!1,Xs(this,u[1]||"",!0),this.o=Un(u[2]||""),this.g=Un(u[3]||"",!0),zs(this,u[4]),this.l=Un(u[5]||"",!0),lh(this,u[6]||"",!0),this.m=Un(u[7]||"")):(this.h=!1,this.i=new bn(null,this.h))}nr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Qn(u,uh,!0),":");var g=this.g;return(g||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Qn(u,uh,!0),"@"),o.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&o.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&o.push("/"),o.push(Qn(g,g.charAt(0)=="/"?Oy:Ny,!0))),(g=this.i.toString())&&o.push("?",g),(g=this.m)&&o.push("#",Qn(g,Vy)),o.join("")};function tt(o){return new nr(o)}function Xs(o,u,g){o.j=g?Un(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function zs(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function lh(o,u,g){u instanceof bn?(o.i=u,Ky(o.i,o.h)):(g||(u=Qn(u,My)),o.i=new bn(u,o.h))}function we(o,u,g){o.i.set(u,g)}function qs(o){return we(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Un(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Qn(o,u,g){return typeof o=="string"?(o=encodeURI(o).replace(u,ky),g&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ky(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var uh=/[#\/\?@]/g,Ny=/[#\?:]/g,Oy=/[#\?]/g,My=/[#\?@]/g,Vy=/#/g;function bn(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function vt(o){o.g||(o.g=new Map,o.h=0,o.i&&Hy(o.i,function(u,g){o.add(decodeURIComponent(u.replace(/\+/g," ")),g)}))}A=bn.prototype,A.add=function(o,u){vt(this),this.i=null,o=Tr(this,o);var g=this.g.get(o);return g||this.g.set(o,g=[]),g.push(u),this.h+=1,this};function hh(o,u){vt(o),u=Tr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function dh(o,u){return vt(o),u=Tr(o,u),o.g.has(u)}A.forEach=function(o,u){vt(this),this.g.forEach(function(g,B){g.forEach(function(R){o.call(u,R,B,this)},this)},this)},A.na=function(){vt(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),g=[];for(let B=0;B<u.length;B++){const R=o[B];for(let P=0;P<R.length;P++)g.push(u[B])}return g},A.V=function(o){vt(this);let u=[];if(typeof o=="string")dh(this,o)&&(u=u.concat(this.g.get(Tr(this,o))));else{o=Array.from(this.g.values());for(let g=0;g<o.length;g++)u=u.concat(o[g])}return u},A.set=function(o,u){return vt(this),this.i=null,o=Tr(this,o),dh(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},A.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function fh(o,u,g){hh(o,u),0<g.length&&(o.i=null,o.g.set(Tr(o,u),v(g)),o.h+=g.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var g=0;g<u.length;g++){var B=u[g];const P=encodeURIComponent(String(B)),V=this.V(B);for(B=0;B<V.length;B++){var R=P;V[B]!==""&&(R+="="+encodeURIComponent(String(V[B]))),o.push(R)}}return this.i=o.join("&")};function Tr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Ky(o,u){u&&!o.j&&(vt(o),o.i=null,o.g.forEach(function(g,B){var R=B.toLowerCase();B!=R&&(hh(this,B),fh(this,R,g))},o)),o.j=u}function jy(o,u){const g=new In;if(a.Image){const B=new Image;B.onload=y(Et,g,"TestLoadImage: loaded",!0,u,B),B.onerror=y(Et,g,"TestLoadImage: error",!1,u,B),B.onabort=y(Et,g,"TestLoadImage: abort",!1,u,B),B.ontimeout=y(Et,g,"TestLoadImage: timeout",!1,u,B),a.setTimeout(function(){B.ontimeout&&B.ontimeout()},1e4),B.src=o}else u(!1)}function Gy(o,u){const g=new In,B=new AbortController,R=setTimeout(()=>{B.abort(),Et(g,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:B.signal}).then(P=>{clearTimeout(R),P.ok?Et(g,"TestPingServer: ok",!0,u):Et(g,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Et(g,"TestPingServer: error",!1,u)})}function Et(o,u,g,B,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),B(g)}catch(P){}}function $y(){this.g=new by}function Wy(o,u,g){const B=g||"";try{ah(o,function(R,P){let V=R;l(R)&&(V=ya(R)),u.push(B+P+"="+encodeURIComponent(V))})}catch(R){throw u.push(B+"type="+encodeURIComponent("_badmap")),R}}function Ys(o){this.l=o.Ub||null,this.j=o.eb||!1}_(Ys,Ca),Ys.prototype.g=function(){return new Js(this.l,this.j)},Ys.prototype.i=function(o){return function(){return o}}({});function Js(o,u){eA.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(Js,eA),A=Js.prototype,A.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Tn(this)},A.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||a).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},A.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fn(this)),this.readyState=0},A.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Tn(this)),this.g&&(this.readyState=3,Tn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream!="undefined"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gh(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function gh(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}A.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Fn(this):Tn(this),this.readyState==3&&gh(this)}},A.Ra=function(o){this.g&&(this.response=this.responseText=o,Fn(this))},A.Qa=function(o){this.g&&(this.response=o,Fn(this))},A.ga=function(){this.g&&Fn(this)};function Fn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Tn(o)}A.setRequestHeader=function(o,u){this.u.append(o,u)},A.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},A.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var g=u.next();!g.done;)g=g.value,o.push(g[0]+": "+g[1]),g=u.next();return o.join(`\r
`)};function Tn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Js.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ph(o){let u="";return H(o,function(g,B){u+=B,u+=":",u+=g,u+=`\r
`}),u}function xa(o,u,g){e:{for(B in g){var B=!1;break e}B=!0}B||(g=ph(g),typeof o=="string"?g!=null&&encodeURIComponent(String(g)):we(o,u,g))}function Qe(o){eA.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(Qe,eA);var Xy=/^https?$/i,zy=["POST","PUT"];A=Qe.prototype,A.Ha=function(o){this.J=o},A.ea=function(o,u,g,B){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ia.g(),this.v=this.o?Gu(this.o):Gu(Ia),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){mh(this,P);return}if(o=g||"",g=new Map(this.headers),B)if(Object.getPrototypeOf(B)===Object.prototype)for(var R in B)g.set(R,B[R]);else if(typeof B.keys=="function"&&typeof B.get=="function")for(const P of B.keys())g.set(P,B.get(P));else throw Error("Unknown input type for opt_headers: "+String(B));B=Array.from(g.keys()).find(P=>P.toLowerCase()=="content-type"),R=a.FormData&&o instanceof a.FormData,!(0<=Array.prototype.indexOf.call(zy,u,void 0))||B||R||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,V]of g)this.g.setRequestHeader(P,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yh(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){mh(this,P)}};function mh(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Bh(o),Zs(o)}function Bh(o){o.A||(o.A=!0,uA(o,"complete"),uA(o,"error"))}A.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,uA(this,"complete"),uA(this,"abort"),Zs(this))},A.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Zs(this,!0)),Qe.aa.N.call(this)},A.Ea=function(){this.s||(this.B||this.u||this.j?wh(this):this.bb())},A.bb=function(){wh(this)};function wh(o){if(o.h&&typeof i!="undefined"&&(!o.v[1]||rt(o)!=4||o.Z()!=2)){if(o.u&&rt(o)==4)Mu(o.Ea,0,o);else if(uA(o,"readystatechange"),rt(o)==4){o.h=!1;try{const V=o.Z();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var g;if(!(g=u)){var B;if(B=V===0){var R=String(o.D).match(ch)[1]||null;!R&&a.self&&a.self.location&&(R=a.self.location.protocol.slice(0,-1)),B=!Xy.test(R?R.toLowerCase():"")}g=B}if(g)uA(o,"complete"),uA(o,"success");else{o.m=6;try{var P=2<rt(o)?o.g.statusText:""}catch(ge){P=""}o.l=P+" ["+o.Z()+"]",Bh(o)}}finally{Zs(o)}}}}function Zs(o,u){if(o.g){yh(o);const g=o.g,B=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||uA(o,"ready");try{g.onreadystatechange=B}catch(R){}}}function yh(o){o.I&&(a.clearTimeout(o.I),o.I=null)}A.isActive=function(){return!!this.g};function rt(o){return o.g?o.g.readyState:0}A.Z=function(){try{return 2<rt(this)?this.g.status:-1}catch(o){return-1}},A.oa=function(){try{return this.g?this.g.responseText:""}catch(o){return""}},A.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Qy(u)}};function Ch(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch(u){return null}}function qy(o){const u={};o=(o.g&&2<=rt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let B=0;B<o.length;B++){if(S(o[B]))continue;var g=T(o[B]);const R=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const P=u[R]||[];u[R]=P,P.push(g)}U(u,function(B){return B.join(", ")})}A.Ba=function(){return this.m},A.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xn(o,u,g){return g&&g.internalChannelParams&&g.internalChannelParams[o]||u}function vh(o){this.Aa=0,this.i=[],this.j=new In,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xn("baseRetryDelayMs",5e3,o),this.cb=xn("retryDelaySeedMs",1e4,o),this.Wa=xn("forwardChannelMaxRetries",2,o),this.wa=xn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new rh(o&&o.concurrentRequestLimit),this.Da=new $y,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}A=vh.prototype,A.la=8,A.G=1,A.connect=function(o,u,g,B){hA(0),this.W=o,this.H=u||{},g&&B!==void 0&&(this.H.OSID=g,this.H.OAID=B),this.F=this.X,this.I=xh(this,null,this.W),Ai(this)};function Sa(o){if(Eh(o),o.G==3){var u=o.U++,g=tt(o.I);if(we(g,"SID",o.K),we(g,"RID",u),we(g,"TYPE","terminate"),Sn(o,g),u=new Ct(o,o.j,u),u.L=2,u.v=qs(tt(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(u.v.toString(),"")}catch(B){}!g&&a.Image&&(new Image().src=u.v,g=!0),g||(u.g=Sh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ws(u)}Th(o)}function ei(o){o.g&&(Da(o),o.g.cancel(),o.g=null)}function Eh(o){ei(o),o.u&&(a.clearTimeout(o.u),o.u=null),ti(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&a.clearTimeout(o.s),o.s=null)}function Ai(o){if(!nh(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ce||Be(),Y||(Ce(),Y=!0),re.add(u,o),o.B=0}}function Yy(o,u){return sh(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=En(p(o.Ga,o,u),Fh(o,o.B)),o.B++,!0)}A.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Ct(this,this.j,o);let P=this.o;if(this.S&&(P?(P=m(P),Q(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var u=0,g=0;g<this.i.length;g++){A:{var B=this.i[g];if("__data__"in B.map&&(B=B.map.__data__,typeof B=="string")){B=B.length;break A}B=void 0}if(B===void 0)break;if(u+=B,4096<u){u=g;break e}if(u===4096||g===this.i.length-1){u=g+1;break e}}u=1e3}else u=1e3;u=_h(this,R,u),g=tt(this.I),we(g,"RID",o),we(g,"CVER",22),this.D&&we(g,"X-HTTP-Session-Id",this.D),Sn(this,g),P&&(this.O?u="headers="+encodeURIComponent(String(ph(P)))+"&"+u:this.m&&xa(g,this.m,P)),Ta(this.h,R),this.Ua&&we(g,"TYPE","init"),this.P?(we(g,"$req",u),we(g,"SID","null"),R.T=!0,Ua(R,g,null)):Ua(R,g,u),this.G=2}}else this.G==3&&(o?Ih(this,o):this.i.length==0||nh(this.h)||Ih(this))};function Ih(o,u){var g;u?g=u.l:g=o.U++;const B=tt(o.I);we(B,"SID",o.K),we(B,"RID",g),we(B,"AID",o.T),Sn(o,B),o.m&&o.o&&xa(B,o.m,o.o),g=new Ct(o,o.j,g,o.B+1),o.m===null&&(g.H=o.o),u&&(o.i=u.D.concat(o.i)),u=_h(o,g,1e3),g.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ta(o.h,g),Ua(g,B,u)}function Sn(o,u){o.H&&H(o.H,function(g,B){we(u,B,g)}),o.l&&ah({},function(g,B){we(u,B,g)})}function _h(o,u,g){g=Math.min(o.i.length,g);var B=o.l?p(o.l.Na,o.l,o):null;e:{var R=o.i;let P=-1;for(;;){const V=["count="+g];P==-1?0<g?(P=R[0].g,V.push("ofs="+P)):P=0:V.push("ofs="+P);let ge=!0;for(let We=0;We<g;We++){let ce=R[We].g;const AA=R[We].map;if(ce-=P,0>ce)P=Math.max(0,R[We].g-100),ge=!1;else try{Wy(AA,V,"req"+ce+"_")}catch(tA){B&&B(AA)}}if(ge){B=V.join("&");break e}}}return o=o.i.splice(0,g),u.D=o,B}function Uh(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ce||Be(),Y||(Ce(),Y=!0),re.add(u,o),o.v=0}}function Ra(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=En(p(o.Fa,o),Fh(o,o.v)),o.v++,!0)}A.Fa=function(){if(this.u=null,Qh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=En(p(this.ab,this),o)}},A.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,hA(10),ei(this),Qh(this))};function Da(o){o.A!=null&&(a.clearTimeout(o.A),o.A=null)}function Qh(o){o.g=new Ct(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=tt(o.qa);we(u,"RID","rpc"),we(u,"SID",o.K),we(u,"AID",o.T),we(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&we(u,"TO",o.ja),we(u,"TYPE","xmlhttp"),Sn(o,u),o.m&&o.o&&xa(u,o.m,o.o),o.L&&(o.g.I=o.L);var g=o.g;o=o.ia,g.L=1,g.v=qs(tt(u)),g.m=null,g.P=!0,eh(g,o)}A.Za=function(){this.C!=null&&(this.C=null,ei(this),Ra(this),hA(19))};function ti(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function bh(o,u){var g=null;if(o.g==u){ti(o),Da(o),o.g=null;var B=2}else if(Fa(o.h,u))g=u.D,ih(o.h,u),B=1;else return;if(o.G!=0){if(u.o)if(B==1){g=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;B=js(),uA(B,new qu(B,g)),Ai(o)}else Uh(o);else if(R=u.s,R==3||R==0&&0<u.X||!(B==1&&Yy(o,u)||B==2&&Ra(o)))switch(g&&0<g.length&&(u=o.h,u.i=u.i.concat(g)),R){case 1:sr(o,5);break;case 4:sr(o,10);break;case 3:sr(o,6);break;default:sr(o,2)}}}function Fh(o,u){let g=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(g*=2),g*u}function sr(o,u){if(o.j.info("Error code "+u),u==2){var g=p(o.fb,o),B=o.Xa;const R=!B;B=new nr(B||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Xs(B,"https"),qs(B),R?jy(B.toString(),g):Gy(B.toString(),g)}else hA(2);o.G=0,o.l&&o.l.sa(u),Th(o),Eh(o)}A.fb=function(o){o?(this.j.info("Successfully pinged google.com"),hA(2)):(this.j.info("Failed to ping google.com"),hA(1))};function Th(o){if(o.G=0,o.ka=[],o.l){const u=oh(o.h);(u.length!=0||o.i.length!=0)&&(b(o.ka,u),b(o.ka,o.i),o.h.i.length=0,v(o.i),o.i.length=0),o.l.ra()}}function xh(o,u,g){var B=g instanceof nr?tt(g):new nr(g);if(B.g!="")u&&(B.g=u+"."+B.g),zs(B,B.s);else{var R=a.location;B=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var P=new nr(null);B&&Xs(P,B),u&&(P.g=u),R&&zs(P,R),g&&(P.l=g),B=P}return g=o.D,u=o.ya,g&&u&&we(B,g,u),we(B,"VER",o.la),Sn(o,B),B}function Sh(o,u,g){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Qe(new Ys({eb:g})):new Qe(o.pa),u.Ha(o.J),u}A.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rh(){}A=Rh.prototype,A.ua=function(){},A.ta=function(){},A.sa=function(){},A.ra=function(){},A.isActive=function(){return!0},A.Na=function(){};function ri(){}ri.prototype.g=function(o,u){return new yA(o,u)};function yA(o,u){eA.call(this),this.g=new vh(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!S(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!S(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new xr(this)}_(yA,eA),yA.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},yA.prototype.close=function(){Sa(this.g)},yA.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var g={};g.__data__=o,o=g}else this.u&&(g={},g.__data__=ya(o),o=g);u.i.push(new Dy(u.Ya++,o)),u.G==3&&Ai(u)},yA.prototype.N=function(){this.g.l=null,delete this.j,Sa(this.g),delete this.g,yA.aa.N.call(this)};function Dh(o){va.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const g in u){o=g;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}_(Dh,va);function Ph(){Ea.call(this),this.status=1}_(Ph,Ea);function xr(o){this.g=o}_(xr,Rh),xr.prototype.ua=function(){uA(this.g,"a")},xr.prototype.ta=function(o){uA(this.g,new Dh(o))},xr.prototype.sa=function(o){uA(this.g,new Ph)},xr.prototype.ra=function(){uA(this.g,"b")},ri.prototype.createWebChannel=ri.prototype.g,yA.prototype.send=yA.prototype.o,yA.prototype.open=yA.prototype.m,yA.prototype.close=yA.prototype.close,hm=function(){return new ri},um=function(){return js()},lm=tr,Fc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gs.NO_ERROR=0,Gs.TIMEOUT=8,Gs.HTTP_ERROR=6,Xi=Gs,Yu.COMPLETE="complete",cm=Yu,$u.EventType=Cn,Cn.OPEN="a",Cn.CLOSE="b",Cn.ERROR="c",Cn.MESSAGE="d",eA.prototype.listen=eA.prototype.K,Kn=$u,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,am=Qe}).apply(typeof ai!="undefined"?ai:typeof self!="undefined"?self:typeof window!="undefined"?window:{});const vd="@firebase/firestore",Ed="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}sA.UNAUTHENTICATED=new sA(null),sA.GOOGLE_CREDENTIALS=new sA("google-credentials-uid"),sA.FIRST_PARTY=new sA("first-party-uid"),sA.MOCK_USER=new sA("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=new yl("@firebase/firestore");function Nr(){return Cr.logLevel}function G(A,...e){if(Cr.logLevel<=ie.DEBUG){const t=e.map(Dl);Cr.debug(`Firestore (${hn}): ${A}`,...t)}}function gt(A,...e){if(Cr.logLevel<=ie.ERROR){const t=e.map(Dl);Cr.error(`Firestore (${hn}): ${A}`,...t)}}function An(A,...e){if(Cr.logLevel<=ie.WARN){const t=e.map(Dl);Cr.warn(`Firestore (${hn}): ${A}`,...t)}}function Dl(A){if(typeof A=="string")return A;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(A)}catch(e){return A}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(A,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,dm(A,r,t)}function dm(A,e,t){let r=`FIRESTORE (${hn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${A.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch(n){r+=" CONTEXT: "+t}throw gt(r),new Error(r)}function he(A,e,t,r){let n="Unexpected state";typeof t=="string"?n=t:r=t,A||dm(e,n,r)}function ee(A,e){return A}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends YA{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class CI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(sA.UNAUTHENTICATED))}shutdown(){}}class vI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class EI{constructor(e){this.t=e,this.currentUser=sA.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){he(this.o===void 0,42304);let r=this.i;const n=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new lt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new lt,e.enqueueRetryable(()=>n(this.currentUser))};const i=()=>{const c=s;e.enqueueRetryable(()=>w(this,null,function*(){yield c.promise,yield n(this.currentUser)}))},a=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new lt)}},0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string",31837,{l:r}),new fm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string",2055,{h:e}),new sA(e)}}class II{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=sA.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _I{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new II(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(sA.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Id{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class UI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,mA(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){he(this.o===void 0,3512);const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const i=s.token!==this.m;return this.m=s.token,G("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const n=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>n(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?n(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Id(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(he(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Id(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(A){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(A);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<A;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const n=QI(40);for(let s=0;s<n.length;++s)r.length<20&&n[s]<t&&(r+=e.charAt(n[s]%62))}return r}}function ne(A,e){return A<e?-1:A>e?1:0}function Tc(A,e){let t=0;for(;t<A.length&&t<e.length;){const r=A.codePointAt(t),n=e.codePointAt(t);if(r!==n){if(r<128&&n<128)return ne(r,n);{const s=gm(),i=bI(s.encode(_d(A,t)),s.encode(_d(e,t)));return i!==0?i:ne(r,n)}}t+=r>65535?2:1}return ne(A.length,e.length)}function _d(A,e){return A.codePointAt(e)>65535?A.substring(e,e+2):A.substring(e,e+1)}function bI(A,e){for(let t=0;t<A.length&&t<e.length;++t)if(A[t]!==e[t])return ne(A[t],e[t]);return ne(A.length,e.length)}function tn(A,e,t){return A.length===e.length&&A.every((r,n)=>t(r,e[n]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud=-62135596800,Qd=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Qd);return new Oe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ud)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qd}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Ud;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new Oe(0,0))}static max(){return new J(new Oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="__name__";class KA{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&q(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return KA.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof KA?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let n=0;n<r;n++){const s=KA.compareSegments(e.get(n),t.get(n));if(s!==0)return s}return ne(e.length,t.length)}static compareSegments(e,t){const r=KA.isNumericId(e),n=KA.isNumericId(t);return r&&!n?-1:!r&&n?1:r&&n?KA.extractNumericId(e).compare(KA.extractNumericId(t)):Tc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Nt.fromString(e.substring(4,e.length-2))}}class ye extends KA{construct(e,t,r){return new ye(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(n=>n.length>0))}return new ye(t)}static emptyPath(){return new ye([])}}const FI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qe extends KA{construct(e,t,r){return new qe(e,t,r)}static isValidIdentifier(e){return FI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bd}static keyField(){return new qe([bd])}static fromServerFormat(e){const t=[];let r="",n=0;const s=()=>{if(r.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let i=!1;for(;n<e.length;){const a=e[n];if(a==="\\"){if(n+1===e.length)throw new $(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[n+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,n+=2}else a==="`"?(i=!i,n++):a!=="."||i?(r+=a,n++):(s(),n++)}if(s(),i)throw new $(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new qe(t)}static emptyPath(){return new qe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(ye.fromString(e))}static fromName(e){return new X(ye.fromString(e).popFirst(5))}static empty(){return new X(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ye.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new ye(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=-1;function TI(A,e){const t=A.toTimestamp().seconds,r=A.toTimestamp().nanoseconds+1,n=J.fromTimestamp(r===1e9?new Oe(t+1,0):new Oe(t,r));return new $t(n,X.empty(),e)}function xI(A){return new $t(A.readTime,A.key,Bs)}class $t{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new $t(J.min(),X.empty(),Bs)}static max(){return new $t(J.max(),X.empty(),Bs)}}function SI(A,e){let t=A.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(A.documentKey,e.documentKey),t!==0?t:ne(A.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class DI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(A){return w(this,null,function*(){if(A.code!==O.FAILED_PRECONDITION||A.message!==RI)throw A;G("LocalStore","Unexpectedly lost primary lease")})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M((r,n)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,n)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):M.reject(t)}static resolve(e){return new M((t,r)=>{t(e)})}static reject(e){return new M((t,r)=>{r(e)})}static waitFor(e){return new M((t,r)=>{let n=0,s=0,i=!1;e.forEach(a=>{++n,a.next(()=>{++s,i&&s===n&&t()},c=>r(c))}),i=!0,s===n&&t()})}static or(e){let t=M.resolve(!1);for(const r of e)t=t.next(n=>n?M.resolve(n):r());return t}static forEach(e,t){const r=[];return e.forEach((n,s)=>{r.push(t.call(this,n,s))}),this.waitFor(r)}static mapArray(e,t){return new M((r,n)=>{const s=e.length,i=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;t(e[l]).next(h=>{i[l]=h,++a,a===s&&r(i)},h=>n(h))}})}static doWhile(e,t){return new M((r,n)=>{const s=()=>{e()===!0?t().next(()=>{s()},n):r()};s()})}}function PI(A){const e=A.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function fn(A){return A.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Vo.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=-1;function Ko(A){return A==null}function fo(A){return A===0&&1/A==-1/0}function LI(A){return typeof A=="number"&&Number.isInteger(A)&&!fo(A)&&A<=Number.MAX_SAFE_INTEGER&&A>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm="";function HI(A){let e="";for(let t=0;t<A.length;t++)e.length>0&&(e=Fd(e)),e=kI(A.get(t),e);return Fd(e)}function kI(A,e){let t=e;const r=A.length;for(let n=0;n<r;n++){const s=A.charAt(n);switch(s){case"\0":t+="";break;case mm:t+="";break;default:t+=s}}return t}function Fd(A){return A+mm+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Td(A){let e=0;for(const t in A)Object.prototype.hasOwnProperty.call(A,t)&&e++;return e}function _r(A,e){for(const t in A)Object.prototype.hasOwnProperty.call(A,t)&&e(t,A[t])}function Bm(A){for(const e in A)if(Object.prototype.hasOwnProperty.call(A,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t){this.comparator=e,this.root=t||ze.EMPTY}insert(e,t){return new Ue(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ze.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const n=this.comparator(e,r.key);if(n===0)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ci(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ci(this.root,e,this.comparator,!1)}getReverseIterator(){return new ci(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ci(this.root,e,this.comparator,!0)}}class ci{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&n&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ze{constructor(e,t,r,n,s){this.key=e,this.value=t,this.color=r!=null?r:ze.RED,this.left=n!=null?n:ze.EMPTY,this.right=s!=null?s:ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,s){return new ze(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,n!=null?n:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this;const s=r(e,n.key);return n=s<0?n.copy(null,null,null,n.left.insert(e,t,r),null):s===0?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r)),n.fixUp()}removeMin(){if(this.left.isEmpty())return ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,n=this;if(t(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),t(e,n.key)===0){if(n.right.isEmpty())return ze.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}ze.EMPTY=null,ze.RED=!0,ze.BLACK=!1;ze.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,r,n,s){return this}insert(e,t,r){return new ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xd(this.data.getIterator())}getIteratorFrom(e){return new xd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const n=t.getNext().key,s=r.getNext().key;if(this.comparator(n,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ke(this.comparator);return t.data=e,t}}class xd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e){this.fields=e,e.sort(qe.comparator)}static empty(){return new LA([])}unionWith(e){let t=new Ke(qe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new LA(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return tn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(n){try{return atob(n)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new wm("Invalid base64 string: "+s):s}}(e);return new Je(t)}static fromUint8Array(e){const t=function(n){let s="";for(let i=0;i<n.length;++i)s+=String.fromCharCode(n[i]);return s}(e);return new Je(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const NI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wt(A){if(he(!!A,39018),typeof A=="string"){let e=0;const t=NI.exec(A);if(he(!!t,46558,{timestamp:A}),t[1]){let n=t[1];n=(n+"000000000").substr(0,9),e=Number(n)}const r=new Date(A);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(A.seconds),nanos:De(A.nanos)}}function De(A){return typeof A=="number"?A:typeof A=="string"?Number(A):0}function Xt(A){return typeof A=="string"?Je.fromBase64String(A):Je.fromUint8Array(A)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="server_timestamp",Cm="__type__",vm="__previous_value__",Em="__local_write_time__";function Ll(A){var e,t;return((t=(((e=A==null?void 0:A.mapValue)===null||e===void 0?void 0:e.fields)||{})[Cm])===null||t===void 0?void 0:t.stringValue)===ym}function jo(A){const e=A.mapValue.fields[vm];return Ll(e)?jo(e):e}function ws(A){const e=Wt(A.mapValue.fields[Em].timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e,t,r,n,s,i,a,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l,this.isUsingEmulator=h}}const xc="(default)";class ys{constructor(e,t){this.projectId=e,this.database=t||xc}static empty(){return new ys("","")}get isDefaultDatabase(){return this.database===xc}isEqual(e){return e instanceof ys&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Im="__type__",MI="__max__",li={mapValue:{}},_m="__vector__",go="value";function zt(A){return"nullValue"in A?0:"booleanValue"in A?1:"integerValue"in A||"doubleValue"in A?2:"timestampValue"in A?3:"stringValue"in A?5:"bytesValue"in A?6:"referenceValue"in A?7:"geoPointValue"in A?8:"arrayValue"in A?9:"mapValue"in A?Ll(A)?4:KI(A)?9007199254740991:VI(A)?10:11:q(28295,{value:A})}function zA(A,e){if(A===e)return!0;const t=zt(A);if(t!==zt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return A.booleanValue===e.booleanValue;case 4:return ws(A).isEqual(ws(e));case 3:return function(n,s){if(typeof n.timestampValue=="string"&&typeof s.timestampValue=="string"&&n.timestampValue.length===s.timestampValue.length)return n.timestampValue===s.timestampValue;const i=Wt(n.timestampValue),a=Wt(s.timestampValue);return i.seconds===a.seconds&&i.nanos===a.nanos}(A,e);case 5:return A.stringValue===e.stringValue;case 6:return function(n,s){return Xt(n.bytesValue).isEqual(Xt(s.bytesValue))}(A,e);case 7:return A.referenceValue===e.referenceValue;case 8:return function(n,s){return De(n.geoPointValue.latitude)===De(s.geoPointValue.latitude)&&De(n.geoPointValue.longitude)===De(s.geoPointValue.longitude)}(A,e);case 2:return function(n,s){if("integerValue"in n&&"integerValue"in s)return De(n.integerValue)===De(s.integerValue);if("doubleValue"in n&&"doubleValue"in s){const i=De(n.doubleValue),a=De(s.doubleValue);return i===a?fo(i)===fo(a):isNaN(i)&&isNaN(a)}return!1}(A,e);case 9:return tn(A.arrayValue.values||[],e.arrayValue.values||[],zA);case 10:case 11:return function(n,s){const i=n.mapValue.fields||{},a=s.mapValue.fields||{};if(Td(i)!==Td(a))return!1;for(const c in i)if(i.hasOwnProperty(c)&&(a[c]===void 0||!zA(i[c],a[c])))return!1;return!0}(A,e);default:return q(52216,{left:A})}}function Cs(A,e){return(A.values||[]).find(t=>zA(t,e))!==void 0}function rn(A,e){if(A===e)return 0;const t=zt(A),r=zt(e);if(t!==r)return ne(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(A.booleanValue,e.booleanValue);case 2:return function(s,i){const a=De(s.integerValue||s.doubleValue),c=De(i.integerValue||i.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(A,e);case 3:return Sd(A.timestampValue,e.timestampValue);case 4:return Sd(ws(A),ws(e));case 5:return Tc(A.stringValue,e.stringValue);case 6:return function(s,i){const a=Xt(s),c=Xt(i);return a.compareTo(c)}(A.bytesValue,e.bytesValue);case 7:return function(s,i){const a=s.split("/"),c=i.split("/");for(let l=0;l<a.length&&l<c.length;l++){const h=ne(a[l],c[l]);if(h!==0)return h}return ne(a.length,c.length)}(A.referenceValue,e.referenceValue);case 8:return function(s,i){const a=ne(De(s.latitude),De(i.latitude));return a!==0?a:ne(De(s.longitude),De(i.longitude))}(A.geoPointValue,e.geoPointValue);case 9:return Rd(A.arrayValue,e.arrayValue);case 10:return function(s,i){var a,c,l,h;const d=s.fields||{},p=i.fields||{},y=(a=d[go])===null||a===void 0?void 0:a.arrayValue,_=(c=p[go])===null||c===void 0?void 0:c.arrayValue,v=ne(((l=y==null?void 0:y.values)===null||l===void 0?void 0:l.length)||0,((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0);return v!==0?v:Rd(y,_)}(A.mapValue,e.mapValue);case 11:return function(s,i){if(s===li.mapValue&&i===li.mapValue)return 0;if(s===li.mapValue)return 1;if(i===li.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=i.fields||{},h=Object.keys(l);c.sort(),h.sort();for(let d=0;d<c.length&&d<h.length;++d){const p=Tc(c[d],h[d]);if(p!==0)return p;const y=rn(a[c[d]],l[h[d]]);if(y!==0)return y}return ne(c.length,h.length)}(A.mapValue,e.mapValue);default:throw q(23264,{Pe:t})}}function Sd(A,e){if(typeof A=="string"&&typeof e=="string"&&A.length===e.length)return ne(A,e);const t=Wt(A),r=Wt(e),n=ne(t.seconds,r.seconds);return n!==0?n:ne(t.nanos,r.nanos)}function Rd(A,e){const t=A.values||[],r=e.values||[];for(let n=0;n<t.length&&n<r.length;++n){const s=rn(t[n],r[n]);if(s)return s}return ne(t.length,r.length)}function nn(A){return Sc(A)}function Sc(A){return"nullValue"in A?"null":"booleanValue"in A?""+A.booleanValue:"integerValue"in A?""+A.integerValue:"doubleValue"in A?""+A.doubleValue:"timestampValue"in A?function(t){const r=Wt(t);return`time(${r.seconds},${r.nanos})`}(A.timestampValue):"stringValue"in A?A.stringValue:"bytesValue"in A?function(t){return Xt(t).toBase64()}(A.bytesValue):"referenceValue"in A?function(t){return X.fromName(t).toString()}(A.referenceValue):"geoPointValue"in A?function(t){return`geo(${t.latitude},${t.longitude})`}(A.geoPointValue):"arrayValue"in A?function(t){let r="[",n=!0;for(const s of t.values||[])n?n=!1:r+=",",r+=Sc(s);return r+"]"}(A.arrayValue):"mapValue"in A?function(t){const r=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of r)s?s=!1:n+=",",n+=`${i}:${Sc(t.fields[i])}`;return n+"}"}(A.mapValue):q(61005,{value:A})}function zi(A){switch(zt(A)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=jo(A);return e?16+zi(e):16;case 5:return 2*A.stringValue.length;case 6:return Xt(A.bytesValue).approximateByteSize();case 7:return A.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((n,s)=>n+zi(s),0)}(A.arrayValue);case 10:case 11:return function(r){let n=0;return _r(r.fields,(s,i)=>{n+=s.length+zi(i)}),n}(A.mapValue);default:throw q(13486,{value:A})}}function Dd(A,e){return{referenceValue:`projects/${A.projectId}/databases/${A.database}/documents/${e.path.canonicalString()}`}}function Rc(A){return!!A&&"integerValue"in A}function Hl(A){return!!A&&"arrayValue"in A}function Pd(A){return!!A&&"nullValue"in A}function Ld(A){return!!A&&"doubleValue"in A&&isNaN(Number(A.doubleValue))}function qi(A){return!!A&&"mapValue"in A}function VI(A){var e,t;return((t=(((e=A==null?void 0:A.mapValue)===null||e===void 0?void 0:e.fields)||{})[Im])===null||t===void 0?void 0:t.stringValue)===_m}function ns(A){if(A.geoPointValue)return{geoPointValue:Object.assign({},A.geoPointValue)};if(A.timestampValue&&typeof A.timestampValue=="object")return{timestampValue:Object.assign({},A.timestampValue)};if(A.mapValue){const e={mapValue:{fields:{}}};return _r(A.mapValue.fields,(t,r)=>e.mapValue.fields[t]=ns(r)),e}if(A.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(A.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=ns(A.arrayValue.values[t]);return e}return Object.assign({},A)}function KI(A){return(((A.mapValue||{}).fields||{}).__type__||{}).stringValue===MI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e){this.value=e}static empty(){return new QA({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!qi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ns(t)}setAll(e){let t=qe.emptyPath(),r={},n=[];e.forEach((i,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,n),r={},n=[],t=a.popLast()}i?r[a.lastSegment()]=ns(i):n.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,n)}delete(e){const t=this.field(e.popLast());qi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return zA(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];qi(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){_r(t,(n,s)=>e[n]=s);for(const n of r)delete e[n]}clone(){return new QA(ns(this.value))}}function Um(A){const e=[];return _r(A.fields,(t,r)=>{const n=new qe([t]);if(qi(r)){const s=Um(r.mapValue).fields;if(s.length===0)e.push(n);else for(const i of s)e.push(n.child(i))}else e.push(n)}),new LA(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,t,r,n,s,i,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=s,this.data=i,this.documentState=a}static newInvalidDocument(e){return new oA(e,0,J.min(),J.min(),J.min(),QA.empty(),0)}static newFoundDocument(e,t,r,n){return new oA(e,1,t,J.min(),r,n,0)}static newNoDocument(e,t){return new oA(e,2,t,J.min(),J.min(),QA.empty(),0)}static newUnknownDocument(e,t){return new oA(e,3,t,J.min(),J.min(),QA.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=QA.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=QA.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof oA&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new oA(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t){this.position=e,this.inclusive=t}}function Hd(A,e,t){let r=0;for(let n=0;n<A.position.length;n++){const s=e[n],i=A.position[n];if(s.field.isKeyField()?r=X.comparator(X.fromName(i.referenceValue),t.key):r=rn(i,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function kd(A,e){if(A===null)return e===null;if(e===null||A.inclusive!==e.inclusive||A.position.length!==e.position.length)return!1;for(let t=0;t<A.position.length;t++)if(!zA(A.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t="asc"){this.field=e,this.dir=t}}function jI(A,e){return A.dir===e.dir&&A.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{}class Ne extends Qm{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new $I(e,t,r):t==="array-contains"?new zI(e,r):t==="in"?new qI(e,r):t==="not-in"?new YI(e,r):t==="array-contains-any"?new JI(e,r):new Ne(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new WI(e,r):new XI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(rn(t,this.value)):t!==null&&zt(this.value)===zt(t)&&this.matchesComparison(rn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class NA extends Qm{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new NA(e,t)}matches(e){return bm(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function bm(A){return A.op==="and"}function Fm(A){return GI(A)&&bm(A)}function GI(A){for(const e of A.filters)if(e instanceof NA)return!1;return!0}function Dc(A){if(A instanceof Ne)return A.field.canonicalString()+A.op.toString()+nn(A.value);if(Fm(A))return A.filters.map(e=>Dc(e)).join(",");{const e=A.filters.map(t=>Dc(t)).join(",");return`${A.op}(${e})`}}function Tm(A,e){return A instanceof Ne?function(r,n){return n instanceof Ne&&r.op===n.op&&r.field.isEqual(n.field)&&zA(r.value,n.value)}(A,e):A instanceof NA?function(r,n){return n instanceof NA&&r.op===n.op&&r.filters.length===n.filters.length?r.filters.reduce((s,i,a)=>s&&Tm(i,n.filters[a]),!0):!1}(A,e):void q(19439)}function xm(A){return A instanceof Ne?function(t){return`${t.field.canonicalString()} ${t.op} ${nn(t.value)}`}(A):A instanceof NA?function(t){return t.op.toString()+" {"+t.getFilters().map(xm).join(" ,")+"}"}(A):"Filter"}class $I extends Ne{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class WI extends Ne{constructor(e,t){super(e,"in",t),this.keys=Sm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class XI extends Ne{constructor(e,t){super(e,"not-in",t),this.keys=Sm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Sm(A,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>X.fromName(r.referenceValue))}class zI extends Ne{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Hl(t)&&Cs(t.arrayValue,this.value)}}class qI extends Ne{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Cs(this.value.arrayValue,t)}}class YI extends Ne{constructor(e,t){super(e,"not-in",t)}matches(e){if(Cs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Cs(this.value.arrayValue,t)}}class JI extends Ne{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Hl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Cs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,t=null,r=[],n=[],s=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=s,this.startAt=i,this.endAt=a,this.Ie=null}}function Nd(A,e=null,t=[],r=[],n=null,s=null,i=null){return new ZI(A,e,t,r,n,s,i)}function kl(A){const e=ee(A);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Dc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ko(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>nn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>nn(r)).join(",")),e.Ie=t}return e.Ie}function Nl(A,e){if(A.limit!==e.limit||A.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<A.orderBy.length;t++)if(!jI(A.orderBy[t],e.orderBy[t]))return!1;if(A.filters.length!==e.filters.length)return!1;for(let t=0;t<A.filters.length;t++)if(!Tm(A.filters[t],e.filters[t]))return!1;return A.collectionGroup===e.collectionGroup&&!!A.path.isEqual(e.path)&&!!kd(A.startAt,e.startAt)&&kd(A.endAt,e.endAt)}function Pc(A){return X.isDocumentKey(A.path)&&A.collectionGroup===null&&A.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,t=null,r=[],n=[],s=null,i="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=s,this.limitType=i,this.startAt=a,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function e_(A,e,t,r,n,s,i,a){return new gn(A,e,t,r,n,s,i,a)}function Ol(A){return new gn(A)}function Od(A){return A.filters.length===0&&A.limit===null&&A.startAt==null&&A.endAt==null&&(A.explicitOrderBy.length===0||A.explicitOrderBy.length===1&&A.explicitOrderBy[0].field.isKeyField())}function Rm(A){return A.collectionGroup!==null}function ss(A){const e=ee(A);if(e.Ee===null){e.Ee=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(i){let a=new Ke(qe.comparator);return i.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new vs(s,r))}),t.has(qe.keyField().canonicalString())||e.Ee.push(new vs(qe.keyField(),r))}return e.Ee}function WA(A){const e=ee(A);return e.de||(e.de=A_(e,ss(A))),e.de}function A_(A,e){if(A.limitType==="F")return Nd(A.path,A.collectionGroup,e,A.filters,A.limit,A.startAt,A.endAt);{e=e.map(n=>{const s=n.dir==="desc"?"asc":"desc";return new vs(n.field,s)});const t=A.endAt?new po(A.endAt.position,A.endAt.inclusive):null,r=A.startAt?new po(A.startAt.position,A.startAt.inclusive):null;return Nd(A.path,A.collectionGroup,e,A.filters,A.limit,t,r)}}function Lc(A,e){const t=A.filters.concat([e]);return new gn(A.path,A.collectionGroup,A.explicitOrderBy.slice(),t,A.limit,A.limitType,A.startAt,A.endAt)}function mo(A,e,t){return new gn(A.path,A.collectionGroup,A.explicitOrderBy.slice(),A.filters.slice(),e,t,A.startAt,A.endAt)}function Go(A,e){return Nl(WA(A),WA(e))&&A.limitType===e.limitType}function Dm(A){return`${kl(WA(A))}|lt:${A.limitType}`}function Or(A){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(n=>xm(n)).join(", ")}]`),Ko(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(n=>nn(n)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(n=>nn(n)).join(",")),`Target(${r})`}(WA(A))}; limitType=${A.limitType})`}function $o(A,e){return e.isFoundDocument()&&function(r,n){const s=n.key.path;return r.collectionGroup!==null?n.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):X.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(A,e)&&function(r,n){for(const s of ss(r))if(!s.field.isKeyField()&&n.data.field(s.field)===null)return!1;return!0}(A,e)&&function(r,n){for(const s of r.filters)if(!s.matches(n))return!1;return!0}(A,e)&&function(r,n){return!(r.startAt&&!function(i,a,c){const l=Hd(i,a,c);return i.inclusive?l<=0:l<0}(r.startAt,ss(r),n)||r.endAt&&!function(i,a,c){const l=Hd(i,a,c);return i.inclusive?l>=0:l>0}(r.endAt,ss(r),n))}(A,e)}function t_(A){return A.collectionGroup||(A.path.length%2==1?A.path.lastSegment():A.path.get(A.path.length-2))}function Pm(A){return(e,t)=>{let r=!1;for(const n of ss(A)){const s=r_(n,e,t);if(s!==0)return s;r=r||n.field.isKeyField()}return 0}}function r_(A,e,t){const r=A.field.isKeyField()?X.comparator(e.key,t.key):function(s,i,a){const c=i.data.field(s),l=a.data.field(s);return c!==null&&l!==null?rn(c,l):q(42886)}(A.field,e,t);switch(A.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:A.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[n,s]of r)if(this.equalsFn(n,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),n=this.inner[r];if(n===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return void(n[s]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return r.length===1?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){_r(this.inner,(t,r)=>{for(const[n,s]of r)e(n,s)})}isEmpty(){return Bm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=new Ue(X.comparator);function pt(){return n_}const Lm=new Ue(X.comparator);function jn(...A){let e=Lm;for(const t of A)e=e.insert(t.key,t);return e}function Hm(A){let e=Lm;return A.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function hr(){return is()}function km(){return is()}function is(){return new Ur(A=>A.toString(),(A,e)=>A.isEqual(e))}const s_=new Ue(X.comparator),i_=new Ke(X.comparator);function oe(...A){let e=i_;for(const t of A)e=e.add(t);return e}const o_=new Ke(ne);function a_(){return o_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(A,e){if(A.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fo(e)?"-0":e}}function Nm(A){return{integerValue:""+A}}function c_(A,e){return LI(e)?Nm(e):Ml(A,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(){this._=void 0}}function l_(A,e,t){return A instanceof Es?function(n,s){const i={fields:{[Cm]:{stringValue:ym},[Em]:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return s&&Ll(s)&&(s=jo(s)),s&&(i.fields[vm]=s),{mapValue:i}}(t,e):A instanceof Is?Mm(A,e):A instanceof _s?Vm(A,e):function(n,s){const i=Om(n,s),a=Md(i)+Md(n.Re);return Rc(i)&&Rc(n.Re)?Nm(a):Ml(n.serializer,a)}(A,e)}function u_(A,e,t){return A instanceof Is?Mm(A,e):A instanceof _s?Vm(A,e):t}function Om(A,e){return A instanceof Bo?function(r){return Rc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Es extends Wo{}class Is extends Wo{constructor(e){super(),this.elements=e}}function Mm(A,e){const t=Km(e);for(const r of A.elements)t.some(n=>zA(n,r))||t.push(r);return{arrayValue:{values:t}}}class _s extends Wo{constructor(e){super(),this.elements=e}}function Vm(A,e){let t=Km(e);for(const r of A.elements)t=t.filter(n=>!zA(n,r));return{arrayValue:{values:t}}}class Bo extends Wo{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Md(A){return De(A.integerValue||A.doubleValue)}function Km(A){return Hl(A)&&A.arrayValue.values?A.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(e,t){this.field=e,this.transform=t}}function d_(A,e){return A.field.isEqual(e.field)&&function(r,n){return r instanceof Is&&n instanceof Is||r instanceof _s&&n instanceof _s?tn(r.elements,n.elements,zA):r instanceof Bo&&n instanceof Bo?zA(r.Re,n.Re):r instanceof Es&&n instanceof Es}(A.transform,e.transform)}class f_{constructor(e,t){this.version=e,this.transformResults=t}}class kA{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kA}static exists(e){return new kA(void 0,e)}static updateTime(e){return new kA(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yi(A,e){return A.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(A.updateTime):A.exists===void 0||A.exists===e.isFoundDocument()}class Xo{}function jm(A,e){if(!A.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return A.isNoDocument()?new Vl(A.key,kA.none()):new Hs(A.key,A.data,kA.none());{const t=A.data,r=QA.empty();let n=new Ke(qe.comparator);for(let s of e.fields)if(!n.has(s)){let i=t.field(s);i===null&&s.length>1&&(s=s.popLast(),i=t.field(s)),i===null?r.delete(s):r.set(s,i),n=n.add(s)}return new Qr(A.key,r,new LA(n.toArray()),kA.none())}}function g_(A,e,t){A instanceof Hs?function(n,s,i){const a=n.value.clone(),c=Kd(n.fieldTransforms,s,i.transformResults);a.setAll(c),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(A,e,t):A instanceof Qr?function(n,s,i){if(!Yi(n.precondition,s))return void s.convertToUnknownDocument(i.version);const a=Kd(n.fieldTransforms,s,i.transformResults),c=s.data;c.setAll(Gm(n)),c.setAll(a),s.convertToFoundDocument(i.version,c).setHasCommittedMutations()}(A,e,t):function(n,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function os(A,e,t,r){return A instanceof Hs?function(s,i,a,c){if(!Yi(s.precondition,i))return a;const l=s.value.clone(),h=jd(s.fieldTransforms,c,i);return l.setAll(h),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(A,e,t,r):A instanceof Qr?function(s,i,a,c){if(!Yi(s.precondition,i))return a;const l=jd(s.fieldTransforms,c,i),h=i.data;return h.setAll(Gm(s)),h.setAll(l),i.convertToFoundDocument(i.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(A,e,t,r):function(s,i,a){return Yi(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):a}(A,e,t)}function p_(A,e){let t=null;for(const r of A.fieldTransforms){const n=e.data.field(r.field),s=Om(r.transform,n||null);s!=null&&(t===null&&(t=QA.empty()),t.set(r.field,s))}return t||null}function Vd(A,e){return A.type===e.type&&!!A.key.isEqual(e.key)&&!!A.precondition.isEqual(e.precondition)&&!!function(r,n){return r===void 0&&n===void 0||!(!r||!n)&&tn(r,n,(s,i)=>d_(s,i))}(A.fieldTransforms,e.fieldTransforms)&&(A.type===0?A.value.isEqual(e.value):A.type!==1||A.data.isEqual(e.data)&&A.fieldMask.isEqual(e.fieldMask))}class Hs extends Xo{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class Qr extends Xo{constructor(e,t,r,n,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Gm(A){const e=new Map;return A.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=A.data.field(t);e.set(t,r)}}),e}function Kd(A,e,t){const r=new Map;he(A.length===t.length,32656,{Ve:t.length,me:A.length});for(let n=0;n<t.length;n++){const s=A[n],i=s.transform,a=e.data.field(s.field);r.set(s.field,u_(i,a,t[n]))}return r}function jd(A,e,t){const r=new Map;for(const n of A){const s=n.transform,i=t.data.field(n.field);r.set(n.field,l_(s,i,e))}return r}class Vl extends Xo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class m_ extends Xo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let n=0;n<this.mutations.length;n++){const s=this.mutations[n];s.key.isEqual(e.key)&&g_(s,e,r[n])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=os(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=os(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=km();return this.mutations.forEach(n=>{const s=e.get(n.key),i=s.overlayedDocument;let a=this.applyToLocalView(i,s.mutatedFields);a=t.has(n.key)?null:a;const c=jm(i,a);c!==null&&r.set(n.key,c),i.isValidDocument()||i.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),oe())}isEqual(e){return this.batchId===e.batchId&&tn(this.mutations,e.mutations,(t,r)=>Vd(t,r))&&tn(this.baseMutations,e.baseMutations,(t,r)=>Vd(t,r))}}class Kl{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){he(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let n=function(){return s_}();const s=e.mutations;for(let i=0;i<s.length;i++)n=n.insert(s[i].key,r[i].version);return new Kl(e,t,r,n)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He,ae;function C_(A){switch(A){case O.OK:return q(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return q(15467,{code:A})}}function $m(A){if(A===void 0)return gt("GRPC error has no .code"),O.UNKNOWN;switch(A){case He.OK:return O.OK;case He.CANCELLED:return O.CANCELLED;case He.UNKNOWN:return O.UNKNOWN;case He.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case He.INTERNAL:return O.INTERNAL;case He.UNAVAILABLE:return O.UNAVAILABLE;case He.UNAUTHENTICATED:return O.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case He.NOT_FOUND:return O.NOT_FOUND;case He.ALREADY_EXISTS:return O.ALREADY_EXISTS;case He.PERMISSION_DENIED:return O.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case He.ABORTED:return O.ABORTED;case He.OUT_OF_RANGE:return O.OUT_OF_RANGE;case He.UNIMPLEMENTED:return O.UNIMPLEMENTED;case He.DATA_LOSS:return O.DATA_LOSS;default:return q(39323,{code:A})}}(ae=He||(He={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_=new Nt([4294967295,4294967295],0);function Gd(A){const e=gm().encode(A),t=new om;return t.update(e),new Uint8Array(t.digest())}function $d(A){const e=new DataView(A.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),n=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Nt([t,r],0),new Nt([n,s],0)]}class jl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Gn(`Invalid padding: ${t}`);if(r<0)throw new Gn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Gn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Gn(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Nt.fromNumber(this.pe)}we(e,t,r){let n=e.add(t.multiply(Nt.fromNumber(r)));return n.compare(v_)===1&&(n=new Nt([n.getBits(0),n.getBits(1)],0)),n.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Gd(e),[r,n]=$d(t);for(let s=0;s<this.hashCount;s++){const i=this.we(r,n,s);if(!this.be(i))return!1}return!0}static create(e,t,r){const n=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),i=new jl(s,n,t);return r.forEach(a=>i.insert(a)),i}insert(e){if(this.pe===0)return;const t=Gd(e),[r,n]=$d(t);for(let s=0;s<this.hashCount;s++){const i=this.we(r,n,s);this.Se(i)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Gn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(e,t,r,n,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const n=new Map;return n.set(e,ks.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new zo(J.min(),n,new Ue(ne),pt(),oe())}}class ks{constructor(e,t,r,n,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new ks(r,t,oe(),oe(),oe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e,t,r,n){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=n}}class Wm{constructor(e,t){this.targetId=e,this.Ce=t}}class Xm{constructor(e,t,r=Je.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class Wd{constructor(){this.Fe=0,this.Me=Xd(),this.xe=Je.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=oe(),t=oe(),r=oe();return this.Me.forEach((n,s)=>{switch(s){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:q(38017,{changeType:s})}}),new ks(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=Xd()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,he(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class E_{constructor(e){this.ze=e,this.je=new Map,this.He=pt(),this.Je=ui(),this.Ye=ui(),this.Ze=new Ue(ne)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:q(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,n)=>{this.it(n)&&t(n)})}ot(e){const t=e.targetId,r=e.Ce.count,n=this._t(t);if(n){const s=n.target;if(Pc(s))if(r===0){const i=new X(s.path);this.tt(t,i,oA.newNoDocument(i,J.min()))}else he(r===1,20013,{expectedCount:r});else{const i=this.ut(t);if(i!==r){const a=this.ct(e),c=a?this.lt(a,e,i):1;if(c!==0){this.st(t);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,l)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:n=0},hashCount:s=0}=t;let i,a;try{i=Xt(r).toUint8Array()}catch(c){if(c instanceof wm)return An("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new jl(i,n,s)}catch(c){return An(c instanceof Gn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.pe===0?null:a}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let n=0;return r.forEach(s=>{const i=this.ze.Pt(),a=`projects/${i.projectId}/databases/${i.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.tt(t,s,null),n++)}),n}It(e){const t=new Map;this.je.forEach((s,i)=>{const a=this._t(i);if(a){if(s.current&&Pc(a.target)){const c=new X(a.target.path);this.Et(c).has(i)||this.dt(i,c)||this.tt(i,c,oA.newNoDocument(c,e))}s.Le&&(t.set(i,s.qe()),s.Qe())}});let r=oe();this.Ye.forEach((s,i)=>{let a=!0;i.forEachWhile(c=>{const l=this._t(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.He.forEach((s,i)=>i.setReadTime(e));const n=new zo(e,t,this.Ze,this.He,r);return this.He=pt(),this.Je=ui(),this.Ye=ui(),this.Ze=new Ue(ne),n}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const n=this.rt(e);this.dt(e,t)?n.$e(t,1):n.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Wd,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Ke(ne),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Ke(ne),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||G("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Wd),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function ui(){return new Ue(X.comparator)}function Xd(){return new Ue(X.comparator)}const I_={asc:"ASCENDING",desc:"DESCENDING"},__={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},U_={and:"AND",or:"OR"};class Q_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hc(A,e){return A.useProto3Json||Ko(e)?e:{value:e}}function wo(A,e){return A.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zm(A,e){return A.useProto3Json?e.toBase64():e.toUint8Array()}function b_(A,e){return wo(A,e.toTimestamp())}function XA(A){return he(!!A,49232),J.fromTimestamp(function(t){const r=Wt(t);return new Oe(r.seconds,r.nanos)}(A))}function Gl(A,e){return kc(A,e).canonicalString()}function kc(A,e){const t=function(n){return new ye(["projects",n.projectId,"databases",n.database])}(A).child("documents");return e===void 0?t:t.child(e)}function qm(A){const e=ye.fromString(A);return he(AB(e),10190,{key:e.toString()}),e}function Nc(A,e){return Gl(A.databaseId,e.path)}function Ga(A,e){const t=qm(e);if(t.get(1)!==A.databaseId.projectId)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+A.databaseId.projectId);if(t.get(3)!==A.databaseId.database)throw new $(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+A.databaseId.database);return new X(Jm(t))}function Ym(A,e){return Gl(A.databaseId,e)}function F_(A){const e=qm(A);return e.length===4?ye.emptyPath():Jm(e)}function Oc(A){return new ye(["projects",A.databaseId.projectId,"databases",A.databaseId.database]).canonicalString()}function Jm(A){return he(A.length>4&&A.get(4)==="documents",29091,{key:A.toString()}),A.popFirst(5)}function zd(A,e,t){return{name:Nc(A,e),fields:t.value.mapValue.fields}}function T_(A,e){let t;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:q(39313,{state:l})}(e.targetChange.targetChangeType||"NO_CHANGE"),n=e.targetChange.targetIds||[],s=function(l,h){return l.useProto3Json?(he(h===void 0||typeof h=="string",58123),Je.fromBase64String(h||"")):(he(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Je.fromUint8Array(h||new Uint8Array))}(A,e.targetChange.resumeToken),i=e.targetChange.cause,a=i&&function(l){const h=l.code===void 0?O.UNKNOWN:$m(l.code);return new $(h,l.message||"")}(i);t=new Xm(r,n,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const n=Ga(A,r.document.name),s=XA(r.document.updateTime),i=r.document.createTime?XA(r.document.createTime):J.min(),a=new QA({mapValue:{fields:r.document.fields}}),c=oA.newFoundDocument(n,s,i,a),l=r.targetIds||[],h=r.removedTargetIds||[];t=new Ji(l,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const n=Ga(A,r.document),s=r.readTime?XA(r.readTime):J.min(),i=oA.newNoDocument(n,s),a=r.removedTargetIds||[];t=new Ji([],a,i.key,i)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const n=Ga(A,r.document),s=r.removedTargetIds||[];t=new Ji([],s,n,null)}else{if(!("filter"in e))return q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:n=0,unchangedNames:s}=r,i=new y_(n,s),a=r.targetId;t=new Wm(a,i)}}return t}function x_(A,e){let t;if(e instanceof Hs)t={update:zd(A,e.key,e.value)};else if(e instanceof Vl)t={delete:Nc(A,e.key)};else if(e instanceof Qr)t={update:zd(A,e.key,e.data),updateMask:O_(e.fieldMask)};else{if(!(e instanceof m_))return q(16599,{ft:e.type});t={verify:Nc(A,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const a=i.transform;if(a instanceof Es)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Is)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof _s)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Bo)return{fieldPath:i.field.canonicalString(),increment:a.Re};throw q(20930,{transform:i.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(n,s){return s.updateTime!==void 0?{updateTime:b_(n,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q(27497)}(A,e.precondition)),t}function S_(A,e){return A&&A.length>0?(he(e!==void 0,14353),A.map(t=>function(n,s){let i=n.updateTime?XA(n.updateTime):XA(s);return i.isEqual(J.min())&&(i=XA(s)),new f_(i,n.transformResults||[])}(t,e))):[]}function R_(A,e){return{documents:[Ym(A,e.path)]}}function D_(A,e){const t={structuredQuery:{}},r=e.path;let n;e.collectionGroup!==null?(n=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Ym(A,n);const s=function(l){if(l.length!==0)return eB(NA.create(l,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(h=>function(p){return{field:Mr(p.field),direction:H_(p.dir)}}(h))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const a=Hc(A,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{gt:t,parent:n}}function P_(A){let e=F_(A.parent);const t=A.structuredQuery,r=t.from?t.from.length:0;let n=null;if(r>0){he(r===1,65062);const h=t.from[0];h.allDescendants?n=h.collectionId:e=e.child(h.collectionId)}let s=[];t.where&&(s=function(d){const p=Zm(d);return p instanceof NA&&Fm(p)?p.getFilters():[p]}(t.where));let i=[];t.orderBy&&(i=function(d){return d.map(p=>function(_){return new vs(Vr(_.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(p))}(t.orderBy));let a=null;t.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Ko(p)?null:p}(t.limit));let c=null;t.startAt&&(c=function(d){const p=!!d.before,y=d.values||[];return new po(y,p)}(t.startAt));let l=null;return t.endAt&&(l=function(d){const p=!d.before,y=d.values||[];return new po(y,p)}(t.endAt)),e_(e,n,i,s,a,"F",c,l)}function L_(A,e){const t=function(n){switch(n){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:n})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Zm(A){return A.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Vr(t.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const n=Vr(t.unaryFilter.field);return Ne.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Vr(t.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Vr(t.unaryFilter.field);return Ne.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(A):A.fieldFilter!==void 0?function(t){return Ne.create(Vr(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(A):A.compositeFilter!==void 0?function(t){return NA.create(t.compositeFilter.filters.map(r=>Zm(r)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(t.compositeFilter.op))}(A):q(30097,{filter:A})}function H_(A){return I_[A]}function k_(A){return __[A]}function N_(A){return U_[A]}function Mr(A){return{fieldPath:A.canonicalString()}}function Vr(A){return qe.fromServerFormat(A.fieldPath)}function eB(A){return A instanceof Ne?function(t){if(t.op==="=="){if(Ld(t.value))return{unaryFilter:{field:Mr(t.field),op:"IS_NAN"}};if(Pd(t.value))return{unaryFilter:{field:Mr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ld(t.value))return{unaryFilter:{field:Mr(t.field),op:"IS_NOT_NAN"}};if(Pd(t.value))return{unaryFilter:{field:Mr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mr(t.field),op:k_(t.op),value:t.value}}}(A):A instanceof NA?function(t){const r=t.getFilters().map(n=>eB(n));return r.length===1?r[0]:{compositeFilter:{op:N_(t.op),filters:r}}}(A):q(54877,{filter:A})}function O_(A){const e=[];return A.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function AB(A){return A.length>=4&&A.get(0)==="projects"&&A.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t,r,n,s=J.min(),i=J.min(),a=Je.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new St(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new St(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e){this.wt=e}}function V_(A){const e=P_({parent:A.parent,structuredQuery:A.structuredQuery});return A.limitType==="LAST"?mo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.Cn=new j_}addToCollectionParentIndex(e,t){return this.Cn.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve($t.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve($t.min())}updateCollectionGroup(e,t,r){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class j_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new Ke(ye.comparator),s=!n.has(r);return this.index[t]=n.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new Ke(ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},tB=41943040;class gA{static withCacheSize(e){return new gA(e,gA.DEFAULT_COLLECTION_PERCENTILE,gA.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */gA.DEFAULT_COLLECTION_PERCENTILE=10,gA.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gA.DEFAULT=new gA(tB,gA.DEFAULT_COLLECTION_PERCENTILE,gA.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gA.DISABLED=new gA(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new sn(0)}static lr(){return new sn(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="LruGarbageCollector",G_=1048576;function Jd([A,e],[t,r]){const n=ne(A,t);return n===0?ne(e,r):n}class $_{constructor(e){this.Er=e,this.buffer=new Ke(Jd),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Jd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class W_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){G(Yd,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,()=>w(this,null,function*(){this.Vr=null;try{yield this.localStore.collectGarbage(this.garbageCollector)}catch(t){fn(t)?G(Yd,"Ignoring IndexedDB error during garbage collection: ",t):yield dn(t)}yield this.mr(3e5)}))}}class X_{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return M.resolve(Vo.le);const r=new $_(t);return this.gr.forEachTarget(e,n=>r.Rr(n.sequenceNumber)).next(()=>this.gr.yr(e,n=>r.Rr(n))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(qd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qd):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,n,s,i,a,c,l;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(d=>(d>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),n=this.params.maximumSequenceNumbersToCollect):n=d,i=Date.now(),this.nthSequenceNumber(e,n))).next(d=>(r=d,a=Date.now(),this.removeTargets(e,r,t))).next(d=>(s=d,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(d=>(l=Date.now(),Nr()<=ie.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${i-h}ms
	Determined least recently used ${n} in `+(a-i)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${d} documents in `+(l-c)+`ms
Total Duration: ${l-h}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:s,documentsRemoved:d})))}}function z_(A,e){return new X_(A,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(){this.changes=new Ur(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,oA.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?M.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(n=>(r!==null&&os(r.mutation,n,LA.empty(),Oe.now()),n))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,oe()).next(()=>r))}getLocalViewOfDocuments(e,t,r=oe()){const n=hr();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(s=>{let i=jn();return s.forEach((a,c)=>{i=i.insert(a,c.overlayedDocument)}),i}))}getOverlayedDocuments(e,t){const r=hr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,oe()))}populateOverlays(e,t,r){const n=[];return r.forEach(s=>{t.has(s)||n.push(s)}),this.documentOverlayCache.getOverlays(e,n).next(s=>{s.forEach((i,a)=>{t.set(i,a)})})}computeViews(e,t,r,n){let s=pt();const i=is(),a=function(){return is()}();return t.forEach((c,l)=>{const h=r.get(l.key);n.has(l.key)&&(h===void 0||h.mutation instanceof Qr)?s=s.insert(l.key,l):h!==void 0?(i.set(l.key,h.mutation.getFieldMask()),os(h.mutation,l,h.mutation.getFieldMask(),Oe.now())):i.set(l.key,LA.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,h)=>i.set(l,h)),t.forEach((l,h)=>{var d;return a.set(l,new Y_(h,(d=i.get(l))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,t){const r=is();let n=new Ue((i,a)=>i-a),s=oe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(i=>{for(const a of i)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let h=r.get(c)||LA.empty();h=a.applyToLocalView(l,h),r.set(c,h);const d=(n.get(a.batchId)||oe()).add(c);n=n.insert(a.batchId,d)})}).next(()=>{const i=[],a=n.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,h=c.value,d=km();h.forEach(p=>{if(!s.has(p)){const y=jm(t.get(p),r.get(p));y!==null&&d.set(p,y),s=s.add(p)}}),i.push(this.documentOverlayCache.saveOverlays(e,l,d))}return M.waitFor(i)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,n){return function(i){return X.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Rm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(s=>{const i=n-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-s.size):M.resolve(hr());let a=Bs,c=s;return i.next(l=>M.forEach(l,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?M.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,oe())).next(h=>({batchId:a,changes:Hm(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next(r=>{let n=jn();return r.isFoundDocument()&&(n=n.insert(r.key,r)),n})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){const s=t.collectionGroup;let i=jn();return this.indexManager.getCollectionParents(e,s).next(a=>M.forEach(a,c=>{const l=function(d,p){return new gn(p,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r,n).next(h=>{h.forEach((d,p)=>{i=i.insert(d,p)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,r,n){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,n))).next(i=>{s.forEach((c,l)=>{const h=l.getKey();i.get(h)===null&&(i=i.insert(h,oA.newInvalidDocument(h)))});let a=jn();return i.forEach((c,l)=>{const h=s.get(c);h!==void 0&&os(h.mutation,l,LA.empty(),Oe.now()),$o(t,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return M.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(n){return{id:n.id,version:n.version,createTime:XA(n.createTime)}}(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(n){return{name:n.name,query:V_(n.bundledQuery),readTime:XA(n.readTime)}}(t)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{constructor(){this.overlays=new Ue(X.comparator),this.Qr=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const r=hr();return M.forEach(t,n=>this.getOverlay(e,n).next(s=>{s!==null&&r.set(n,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((n,s)=>{this.St(e,t,s)}),M.resolve()}removeOverlaysForBatchId(e,t,r){const n=this.Qr.get(r);return n!==void 0&&(n.forEach(s=>this.overlays=this.overlays.remove(s)),this.Qr.delete(r)),M.resolve()}getOverlaysForCollection(e,t,r){const n=hr(),s=t.length+1,i=new X(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&n.set(c.getKey(),c)}return M.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let s=new Ue((l,h)=>l-h);const i=this.overlays.getIterator();for(;i.hasNext();){const l=i.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let h=s.get(l.largestBatchId);h===null&&(h=hr(),s=s.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}const a=hr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,h)=>a.set(l,h)),!(a.size()>=n)););return M.resolve(a)}St(e,t,r){const n=this.overlays.get(r.key);if(n!==null){const i=this.Qr.get(n.largestBatchId).delete(r.key);this.Qr.set(n.largestBatchId,i)}this.overlays=this.overlays.insert(r.key,new w_(t,r));let s=this.Qr.get(t);s===void 0&&(s=oe(),this.Qr.set(t,s)),this.Qr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AU{constructor(){this.sessionToken=Je.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(){this.$r=new Ke($e.Ur),this.Kr=new Ke($e.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new $e(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new $e(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new X(new ye([])),r=new $e(t,e),n=new $e(t,e+1),s=[];return this.Kr.forEachInRange([r,n],i=>{this.zr(i),s.push(i.key)}),s}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new X(new ye([])),r=new $e(t,e),n=new $e(t,e+1);let s=oe();return this.Kr.forEachInRange([r,n],i=>{s=s.add(i.key)}),s}containsKey(e){const t=new $e(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return X.comparator(e.key,t.key)||ne(e.Zr,t.Zr)}static Wr(e,t){return ne(e.Zr,t.Zr)||X.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tU{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Ke($e.Ur)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,n){const s=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new B_(s,t,r,n);this.mutationQueue.push(i);for(const a of n)this.Xr=this.Xr.add(new $e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return M.resolve(i)}lookupMutationBatch(e,t){return M.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,n=this.ti(r),s=n<0?0:n;return M.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Pl:this.nr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new $e(t,0),n=new $e(t,Number.POSITIVE_INFINITY),s=[];return this.Xr.forEachInRange([r,n],i=>{const a=this.ei(i.Zr);s.push(a)}),M.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ke(ne);return t.forEach(n=>{const s=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([s,i],a=>{r=r.add(a.Zr)})}),M.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,n=r.length+1;let s=r;X.isDocumentKey(s)||(s=s.child(""));const i=new $e(new X(s),0);let a=new Ke(ne);return this.Xr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===n&&(a=a.add(c.Zr)),!0)},i),M.resolve(this.ni(a))}ni(e){const t=[];return e.forEach(r=>{const n=this.ei(r);n!==null&&t.push(n)}),t}removeMutationBatch(e,t){he(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return M.forEach(t.mutations,n=>{const s=new $e(n.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new $e(t,0),n=this.Xr.firstAfterOrEqual(r);return M.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(e){this.ii=e,this.docs=function(){return new Ue(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,n=this.docs.get(r),s=n?n.size:0,i=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return M.resolve(r?r.document.mutableCopy():oA.newInvalidDocument(t))}getEntries(e,t){let r=pt();return t.forEach(n=>{const s=this.docs.get(n);r=r.insert(n,s?s.document.mutableCopy():oA.newInvalidDocument(n))}),M.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let s=pt();const i=t.path,a=new X(i.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:h}}=c.getNext();if(!i.isPrefixOf(l.path))break;l.path.length>i.length+1||SI(xI(h),r)<=0||(n.has(h.key)||$o(t,h))&&(s=s.insert(h.key,h.mutableCopy()))}return M.resolve(s)}getAllFromCollectionGroup(e,t,r,n){q(9500)}si(e,t){return M.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new nU(this)}getSize(e){return M.resolve(this.size)}}class nU extends q_{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.Br.addEntry(e,n)):this.Br.removeEntry(r)}),M.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sU{constructor(e){this.persistence=e,this.oi=new Ur(t=>kl(t),Nl),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this._i=0,this.ai=new $l,this.targetCount=0,this.ui=sn.cr()}forEachTarget(e,t){return this.oi.forEach((r,n)=>t(n)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),M.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new sn(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.Tr(t),M.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,r){let n=0;const s=[];return this.oi.forEach((i,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.oi.delete(i),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),M.waitFor(s).next(()=>n)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return M.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),M.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const n=this.persistence.referenceDelegate,s=[];return n&&t.forEach(i=>{s.push(n.markPotentiallyOrphaned(e,i))}),M.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),M.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return M.resolve(r)}containsKey(e,t){return M.resolve(this.ai.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rB{constructor(e,t){this.ci={},this.overlays={},this.li=new Vo(0),this.hi=!1,this.hi=!0,this.Pi=new AU,this.referenceDelegate=e(this),this.Ti=new sU(this),this.indexManager=new K_,this.remoteDocumentCache=function(n){return new rU(n)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new M_(t),this.Ei=new Z_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new eU,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new tU(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);const n=new iU(this.li.next());return this.referenceDelegate.di(),r(n).next(s=>this.referenceDelegate.Ai(n).next(()=>s)).toPromise().then(s=>(n.raiseOnCommittedEvent(),s))}Ri(e,t){return M.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class iU extends DI{constructor(e){super(),this.currentSequenceNumber=e}}class Wl{constructor(e){this.persistence=e,this.Vi=new $l,this.mi=null}static fi(e){return new Wl(e)}get gi(){if(this.mi)return this.mi;throw q(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),M.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),M.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(n=>this.gi.add(n.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(n=>{n.forEach(s=>this.gi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.gi,r=>{const n=X.fromPath(r);return this.pi(e,n).next(s=>{s||t.removeEntry(n,J.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return M.or([()=>M.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class yo{constructor(e,t){this.persistence=e,this.yi=new Ur(r=>HI(r.path),(r,n)=>r.isEqual(n)),this.garbageCollector=z_(this,t)}static fi(e,t){return new yo(e,t)}di(){}Ai(e){return M.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(n=>r+n))}br(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return M.forEach(this.yi,(r,n)=>this.Dr(e,r,n).next(s=>s?M.resolve():t(n)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const n=this.persistence.getRemoteDocumentCache(),s=n.newChangeBuffer();return n.si(e,i=>this.Dr(e,i,t).next(a=>{a||(r++,s.removeEntry(i,J.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),M.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),M.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=zi(e.data.value)),t}Dr(e,t,r){return M.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const n=this.yi.get(t);return M.resolve(n!==void 0&&n>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.ds=r,this.As=n}static Rs(e,t){let r=oe(),n=oe();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:n=n.add(s.doc.key)}return new Xl(e,t.fromCache,r,n)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oU{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aU{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return LC()?8:PI(aA())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,n){const s={result:null};return this.ws(e,t).next(i=>{s.result=i}).next(()=>{if(!s.result)return this.bs(e,t,n,r).next(i=>{s.result=i})}).next(()=>{if(s.result)return;const i=new oU;return this.Ss(e,t,i).next(a=>{if(s.result=a,this.fs)return this.Ds(e,t,i,a.size)})}).next(()=>s.result)}Ds(e,t,r,n){return r.documentReadCount<this.gs?(Nr()<=ie.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Or(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),M.resolve()):(Nr()<=ie.DEBUG&&G("QueryEngine","Query:",Or(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.ps*n?(Nr()<=ie.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Or(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,WA(t))):M.resolve())}ws(e,t){if(Od(t))return M.resolve(null);let r=WA(t);return this.indexManager.getIndexType(e,r).next(n=>n===0?null:(t.limit!==null&&n===1&&(t=mo(t,null,"F"),r=WA(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const i=oe(...s);return this.ys.getDocuments(e,i).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.vs(t,a);return this.Cs(t,l,i,c.readTime)?this.ws(e,mo(t,null,"F")):this.Fs(e,l,t,c)}))})))}bs(e,t,r,n){return Od(t)||n.isEqual(J.min())?M.resolve(null):this.ys.getDocuments(e,r).next(s=>{const i=this.vs(t,s);return this.Cs(t,i,r,n)?M.resolve(null):(Nr()<=ie.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Or(t)),this.Fs(e,i,t,TI(n,Bs)).next(a=>a))})}vs(e,t){let r=new Ke(Pm(e));return t.forEach((n,s)=>{$o(e,s)&&(r=r.add(s))}),r}Cs(e,t,r,n){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(n)>0)}Ss(e,t,r){return Nr()<=ie.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Or(t)),this.ys.getDocumentsMatchingQuery(e,t,$t.min(),r)}Fs(e,t,r,n){return this.ys.getDocumentsMatchingQuery(e,r,n).next(s=>(t.forEach(i=>{s=s.insert(i.key,i)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="LocalStore",cU=3e8;class lU{constructor(e,t,r,n){this.persistence=e,this.Ms=t,this.serializer=n,this.xs=new Ue(ne),this.Os=new Ur(s=>kl(s),Nl),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new J_(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function uU(A,e,t,r){return new lU(A,e,t,r)}function nB(A,e){return w(this,null,function*(){const t=ee(A);return yield t.persistence.runTransaction("Handle user change","readonly",r=>{let n;return t.mutationQueue.getAllMutationBatches(r).next(s=>(n=s,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const i=[],a=[];let c=oe();for(const l of n){i.push(l.batchId);for(const h of l.mutations)c=c.add(h.key)}for(const l of s){a.push(l.batchId);for(const h of l.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(r,c).next(l=>({ks:l,removedBatchIds:i,addedBatchIds:a}))})})})}function hU(A,e){const t=ee(A);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const n=e.batch.keys(),s=t.Bs.newChangeBuffer({trackRemovals:!0});return function(a,c,l,h){const d=l.batch,p=d.keys();let y=M.resolve();return p.forEach(_=>{y=y.next(()=>h.getEntry(c,_)).next(v=>{const b=l.docVersions.get(_);he(b!==null,48541),v.version.compareTo(b)<0&&(d.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),h.addEntry(v)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(c,d))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,n,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=oe();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,n))})}function sB(A){const e=ee(A);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function dU(A,e){const t=ee(A),r=e.snapshotVersion;let n=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const i=t.Bs.newChangeBuffer({trackRemovals:!0});n=t.xs;const a=[];e.targetChanges.forEach((h,d)=>{const p=n.get(d);if(!p)return;a.push(t.Ti.removeMatchingKeys(s,h.removedDocuments,d).next(()=>t.Ti.addMatchingKeys(s,h.addedDocuments,d)));let y=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?y=y.withResumeToken(Je.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),n=n.insert(d,y),function(v,b,x){return v.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=cU?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,y,h)&&a.push(t.Ti.updateTargetData(s,y))});let c=pt(),l=oe();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(fU(s,i,e.documentUpdates).next(h=>{c=h.qs,l=h.Qs})),!r.isEqual(J.min())){const h=t.Ti.getLastRemoteSnapshotVersion(s).next(d=>t.Ti.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return M.waitFor(a).next(()=>i.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(t.xs=n,s))}function fU(A,e,t){let r=oe(),n=oe();return t.forEach(s=>r=r.add(s)),e.getEntries(A,r).next(s=>{let i=pt();return t.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(n=n.add(a)),c.isNoDocument()&&c.version.isEqual(J.min())?(e.removeEntry(a,c.readTime),i=i.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),i=i.insert(a,c)):G(zl,"Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{qs:i,Qs:n}})}function gU(A,e){const t=ee(A);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Pl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function pU(A,e){const t=ee(A);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let n;return t.Ti.getTargetData(r,e).next(s=>s?(n=s,M.resolve(n)):t.Ti.allocateTargetId(r).next(i=>(n=new St(e,i,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,n).next(()=>n))))}).then(r=>{const n=t.xs.get(r.targetId);return(n===null||r.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}function Mc(A,e,t){return w(this,null,function*(){const r=ee(A),n=r.xs.get(e),s=t?"readwrite":"readwrite-primary";try{t||(yield r.persistence.runTransaction("Release target",s,i=>r.persistence.referenceDelegate.removeTarget(i,n)))}catch(i){if(!fn(i))throw i;G(zl,`Failed to update sequence numbers for target ${e}: ${i}`)}r.xs=r.xs.remove(e),r.Os.delete(n.target)})}function Zd(A,e,t){const r=ee(A);let n=J.min(),s=oe();return r.persistence.runTransaction("Execute query","readwrite",i=>function(c,l,h){const d=ee(c),p=d.Os.get(h);return p!==void 0?M.resolve(d.xs.get(p)):d.Ti.getTargetData(l,h)}(r,i,WA(e)).next(a=>{if(a)return n=a.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(i,a.targetId).next(c=>{s=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(i,e,t?n:J.min(),t?s:oe())).next(a=>(mU(r,t_(e),a),{documents:a,$s:s})))}function mU(A,e,t){let r=A.Ns.get(e)||J.min();t.forEach((n,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),A.Ns.set(e,r)}class ef{constructor(){this.activeTargetIds=a_()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class BU{constructor(){this.xo=new ef,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new ef,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wU{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="ConnectivityMonitor";class tf{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){G(Af,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){G(Af,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hi=null;function Vc(){return hi===null?hi=function(){return 268435456+Math.round(2147483648*Math.random())}():hi++,"0x"+hi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a="RestConnection",yU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class CU{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${n}`,this.Go=this.databaseId.database===xc?`project_id=${r}`:`project_id=${r}&database_id=${n}`}zo(e,t,r,n,s){const i=Vc(),a=this.jo(e,t.toUriEncodedString());G($a,`Sending RPC '${e}' ${i}:`,a,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,n,s);const{host:l}=new URL(a),h=er(l);return this.Jo(e,a,c,r,h).then(d=>(G($a,`Received RPC '${e}' ${i}: `,d),d),d=>{throw An($a,`RPC '${e}' ${i} failed with error: `,d,"url: ",a,"request:",r),d})}Yo(e,t,r,n,s,i){return this.zo(e,t,r,n,s)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((n,s)=>e[s]=n),r&&r.headers.forEach((n,s)=>e[s]=n)}jo(e,t){const r=yU[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vU{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA="WebChannelConnection";class EU extends CU{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,n,s){const i=Vc();return new Promise((a,c)=>{const l=new am;l.setWithCredentials(!0),l.listenOnce(cm.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Xi.NO_ERROR:const d=l.getResponseJson();G(rA,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),a(d);break;case Xi.TIMEOUT:G(rA,`RPC '${e}' ${i} timed out`),c(new $(O.DEADLINE_EXCEEDED,"Request time out"));break;case Xi.HTTP_ERROR:const p=l.getStatus();if(G(rA,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let y=l.getResponseJson();Array.isArray(y)&&(y=y[0]);const _=y==null?void 0:y.error;if(_&&_.status&&_.message){const v=function(x){const S=x.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(S)>=0?S:O.UNKNOWN}(_.status);c(new $(v,_.message))}else c(new $(O.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new $(O.UNAVAILABLE,"Connection failed."));break;default:q(9055,{h_:e,streamId:i,P_:l.getLastErrorCode(),T_:l.getLastError()})}}finally{G(rA,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(n);G(rA,`RPC '${e}' ${i} sending request:`,n),l.send(t,"POST",h,r,15)})}I_(e,t,r){const n=Vc(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=hm(),a=um(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=s.join("");G(rA,`Creating RPC '${e}' stream ${n}: ${h}`,c);const d=i.createWebChannel(h,c);this.E_(d);let p=!1,y=!1;const _=new vU({Zo:b=>{y?G(rA,`Not sending because RPC '${e}' stream ${n} is closed:`,b):(p||(G(rA,`Opening RPC '${e}' stream ${n} transport.`),d.open(),p=!0),G(rA,`RPC '${e}' stream ${n} sending:`,b),d.send(b))},Xo:()=>d.close()}),v=(b,x,S)=>{b.listen(x,D=>{try{S(D)}catch(k){setTimeout(()=>{throw k},0)}})};return v(d,Kn.EventType.OPEN,()=>{y||(G(rA,`RPC '${e}' stream ${n} transport opened.`),_.__())}),v(d,Kn.EventType.CLOSE,()=>{y||(y=!0,G(rA,`RPC '${e}' stream ${n} transport closed`),_.u_(),this.d_(d))}),v(d,Kn.EventType.ERROR,b=>{y||(y=!0,An(rA,`RPC '${e}' stream ${n} transport errored. Name:`,b.name,"Message:",b.message),_.u_(new $(O.UNAVAILABLE,"The operation could not be completed")))}),v(d,Kn.EventType.MESSAGE,b=>{var x;if(!y){const S=b.data[0];he(!!S,16349);const D=S,k=(D==null?void 0:D.error)||((x=D[0])===null||x===void 0?void 0:x.error);if(k){G(rA,`RPC '${e}' stream ${n} received error:`,k);const N=k.status;let H=function(C){const Q=He[C];if(Q!==void 0)return $m(Q)}(N),U=k.message;H===void 0&&(H=O.INTERNAL,U="Unknown error status: "+N+" with message "+k.message),y=!0,_.u_(new $(H,U)),d.close()}else G(rA,`RPC '${e}' stream ${n} received:`,S),_.c_(S)}}),v(a,lm.STAT_EVENT,b=>{b.stat===Fc.PROXY?G(rA,`RPC '${e}' stream ${n} detected buffering proxy`):b.stat===Fc.NOPROXY&&G(rA,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{_.a_()},0),_}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function Wa(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(A){return new Q_(A,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iB{constructor(e,t,r=1e3,n=1.5,s=6e4){this.xi=e,this.timerId=t,this.A_=r,this.R_=n,this.V_=s,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),n=Math.max(0,t-r);n>0&&G("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,n,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rf="PersistentStream";class oB{constructor(e,t,r,n,s,i,a,c){this.xi=e,this.S_=r,this.D_=n,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new iB(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}stop(){return w(this,null,function*(){this.O_()&&(yield this.close(0))})}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}q_(){return w(this,null,function*(){if(this.N_())return this.close(0)})}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}close(e,t){return w(this,null,function*(){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(gt(t.toString()),gt("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,yield this.listener.i_(t)})}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,n])=>{this.v_===t&&this.z_(r,n)},r=>{e(()=>{const n=new $(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(n)})})}z_(e,t){const r=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(n=>{r(()=>this.j_(n))}),this.stream.onMessage(n=>{r(()=>++this.M_==1?this.J_(n):this.onNext(n))})}B_(){this.state=5,this.x_.y_(()=>w(this,null,function*(){this.state=0,this.start()}))}j_(e){return G(rf,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(G(rf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IU extends oB{constructor(e,t,r,n,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,i),this.serializer=s}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=T_(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?J.min():i.readTime?XA(i.readTime):J.min()}(e);return this.listener.Y_(t,r)}Z_(e){const t={};t.database=Oc(this.serializer),t.addTarget=function(s,i){let a;const c=i.target;if(a=Pc(c)?{documents:R_(s,c)}:{query:D_(s,c).gt},a.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){a.resumeToken=zm(s,i.resumeToken);const l=Hc(s,i.expectedCount);l!==null&&(a.expectedCount=l)}else if(i.snapshotVersion.compareTo(J.min())>0){a.readTime=wo(s,i.snapshotVersion.toTimestamp());const l=Hc(s,i.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=L_(this.serializer,e);r&&(t.labels=r),this.Q_(t)}X_(e){const t={};t.database=Oc(this.serializer),t.removeTarget=e,this.Q_(t)}}class _U extends oB{constructor(e,t,r,n,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,i),this.serializer=s}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return he(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){he(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=S_(e.writeResults,e.commitTime),r=XA(e.commitTime);return this.listener.ra(r,t)}ia(){const e={};e.database=Oc(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>x_(this.serializer,r))};this.Q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UU{}class QU extends UU{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.sa=!1}oa(){if(this.sa)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,n){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.zo(e,kc(t,r),n,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(O.UNKNOWN,s.toString())})}Yo(e,t,r,n,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Yo(e,kc(t,r),n,i,a,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(O.UNKNOWN,i.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class bU{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(gt(t),this.ua=!1):G("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr="RemoteStore";class FU{constructor(e,t,r,n,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=s,this.Ra.No(i=>{r.enqueueAndForget(()=>w(this,null,function*(){br(this)&&(G(vr,"Restarting streams for network reachability change."),yield function(c){return w(this,null,function*(){const l=ee(c);l.da.add(4),yield Ns(l),l.Va.set("Unknown"),l.da.delete(4),yield Yo(l)})}(this))}))}),this.Va=new bU(r,n)}}function Yo(A){return w(this,null,function*(){if(br(A))for(const e of A.Aa)yield e(!0)})}function Ns(A){return w(this,null,function*(){for(const e of A.Aa)yield e(!1)})}function aB(A,e){const t=ee(A);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Zl(t)?Jl(t):pn(t).N_()&&Yl(t,e))}function ql(A,e){const t=ee(A),r=pn(t);t.Ea.delete(e),r.N_()&&cB(t,e),t.Ea.size===0&&(r.N_()?r.k_():br(t)&&t.Va.set("Unknown"))}function Yl(A,e){if(A.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const t=A.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}pn(A).Z_(e)}function cB(A,e){A.ma.Ke(e),pn(A).X_(e)}function Jl(A){A.ma=new E_({getRemoteKeysForTarget:e=>A.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>A.Ea.get(e)||null,Pt:()=>A.datastore.serializer.databaseId}),pn(A).start(),A.Va.ca()}function Zl(A){return br(A)&&!pn(A).O_()&&A.Ea.size>0}function br(A){return ee(A).da.size===0}function lB(A){A.ma=void 0}function TU(A){return w(this,null,function*(){A.Va.set("Online")})}function xU(A){return w(this,null,function*(){A.Ea.forEach((e,t)=>{Yl(A,e)})})}function SU(A,e){return w(this,null,function*(){lB(A),Zl(A)?(A.Va.Pa(e),Jl(A)):A.Va.set("Unknown")})}function RU(A,e,t){return w(this,null,function*(){if(A.Va.set("Online"),e instanceof Xm&&e.state===2&&e.cause)try{yield function(n,s){return w(this,null,function*(){const i=s.cause;for(const a of s.targetIds)n.Ea.has(a)&&(yield n.remoteSyncer.rejectListen(a,i),n.Ea.delete(a),n.ma.removeTarget(a))})}(A,e)}catch(r){G(vr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),yield Co(A,r)}else if(e instanceof Ji?A.ma.Xe(e):e instanceof Wm?A.ma.ot(e):A.ma.nt(e),!t.isEqual(J.min()))try{const r=yield sB(A.localStore);t.compareTo(r)>=0&&(yield function(s,i){const a=s.ma.It(i);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const h=s.Ea.get(l);h&&s.Ea.set(l,h.withResumeToken(c.resumeToken,i))}}),a.targetMismatches.forEach((c,l)=>{const h=s.Ea.get(c);if(!h)return;s.Ea.set(c,h.withResumeToken(Je.EMPTY_BYTE_STRING,h.snapshotVersion)),cB(s,c);const d=new St(h.target,c,l,h.sequenceNumber);Yl(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(A,t))}catch(r){G(vr,"Failed to raise snapshot:",r),yield Co(A,r)}})}function Co(A,e,t){return w(this,null,function*(){if(!fn(e))throw e;A.da.add(1),yield Ns(A),A.Va.set("Offline"),t||(t=()=>sB(A.localStore)),A.asyncQueue.enqueueRetryable(()=>w(null,null,function*(){G(vr,"Retrying IndexedDB access"),yield t(),A.da.delete(1),yield Yo(A)}))})}function uB(A,e){return e().catch(t=>Co(A,t,e))}function Jo(A){return w(this,null,function*(){const e=ee(A),t=qt(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Pl;for(;DU(e);)try{const n=yield gU(e.localStore,r);if(n===null){e.Ia.length===0&&t.k_();break}r=n.batchId,PU(e,n)}catch(n){yield Co(e,n)}hB(e)&&dB(e)})}function DU(A){return br(A)&&A.Ia.length<10}function PU(A,e){A.Ia.push(e);const t=qt(A);t.N_()&&t.ea&&t.ta(e.mutations)}function hB(A){return br(A)&&!qt(A).O_()&&A.Ia.length>0}function dB(A){qt(A).start()}function LU(A){return w(this,null,function*(){qt(A).ia()})}function HU(A){return w(this,null,function*(){const e=qt(A);for(const t of A.Ia)e.ta(t.mutations)})}function kU(A,e,t){return w(this,null,function*(){const r=A.Ia.shift(),n=Kl.from(r,e,t);yield uB(A,()=>A.remoteSyncer.applySuccessfulWrite(n)),yield Jo(A)})}function NU(A,e){return w(this,null,function*(){e&&qt(A).ea&&(yield function(r,n){return w(this,null,function*(){if(function(i){return C_(i)&&i!==O.ABORTED}(n.code)){const s=r.Ia.shift();qt(r).L_(),yield uB(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,n)),yield Jo(r)}})}(A,e)),hB(A)&&dB(A)})}function nf(A,e){return w(this,null,function*(){const t=ee(A);t.asyncQueue.verifyOperationInProgress(),G(vr,"RemoteStore received new credentials");const r=br(t);t.da.add(3),yield Ns(t),r&&t.Va.set("Unknown"),yield t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),yield Yo(t)})}function OU(A,e){return w(this,null,function*(){const t=ee(A);e?(t.da.delete(2),yield Yo(t)):e||(t.da.add(2),yield Ns(t),t.Va.set("Unknown"))})}function pn(A){return A.fa||(A.fa=function(t,r,n){const s=ee(t);return s.oa(),new IU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(A.datastore,A.asyncQueue,{e_:TU.bind(null,A),n_:xU.bind(null,A),i_:SU.bind(null,A),Y_:RU.bind(null,A)}),A.Aa.push(e=>w(null,null,function*(){e?(A.fa.L_(),Zl(A)?Jl(A):A.Va.set("Unknown")):(yield A.fa.stop(),lB(A))}))),A.fa}function qt(A){return A.ga||(A.ga=function(t,r,n){const s=ee(t);return s.oa(),new _U(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(A.datastore,A.asyncQueue,{e_:()=>Promise.resolve(),n_:LU.bind(null,A),i_:NU.bind(null,A),na:HU.bind(null,A),ra:kU.bind(null,A)}),A.Aa.push(e=>w(null,null,function*(){e?(A.ga.L_(),yield Jo(A)):(yield A.ga.stop(),A.Ia.length>0&&(G(vr,`Stopping write stream with ${A.Ia.length} pending writes`),A.Ia=[]))}))),A.ga}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,t,r,n,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=s,this.deferred=new lt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(i=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,s){const i=Date.now()+r,a=new eu(e,t,i,n,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Au(A,e){if(gt("AsyncQueue",`${e}: ${A}`),fn(A))return new $(O.UNAVAILABLE,`${e}: ${A}`);throw A}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{static emptySet(e){return new Jr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=jn(),this.sortedSet=new Ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Jr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const n=t.getNext().key,s=r.getNext().key;if(!n.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Jr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(){this.pa=new Ue(X.comparator)}track(e){const t=e.doc.key,r=this.pa.get(t);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(t,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(t):e.type===1&&r.type===2?this.pa=this.pa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):q(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,r)=>{e.push(r)}),e}}class on{constructor(e,t,r,n,s,i,a,c,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,s){const i=[];return t.forEach(a=>{i.push({type:0,doc:a})}),new on(e,t,Jr.emptySet(t),i,r,n,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Go(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let n=0;n<t.length;n++)if(t[n].type!==r[n].type||!t[n].doc.isEqual(r[n].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MU{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class VU{constructor(){this.queries=of(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const n=ee(t),s=n.queries;n.queries=of(),s.forEach((i,a)=>{for(const c of a.Sa)c.onError(r)})})(this,new $(O.ABORTED,"Firestore shutting down"))}}function of(){return new Ur(A=>Dm(A),Go)}function fB(A,e){return w(this,null,function*(){const t=ee(A);let r=3;const n=e.query;let s=t.queries.get(n);s?!s.Da()&&e.va()&&(r=2):(s=new MU,r=e.va()?0:1);try{switch(r){case 0:s.ba=yield t.onListen(n,!0);break;case 1:s.ba=yield t.onListen(n,!1);break;case 2:yield t.onFirstRemoteStoreListen(n)}}catch(i){const a=Au(i,`Initialization of query '${Or(e.query)}' failed`);return void e.onError(a)}t.queries.set(n,s),s.Sa.push(e),e.Fa(t.onlineState),s.ba&&e.Ma(s.ba)&&tu(t)})}function gB(A,e){return w(this,null,function*(){const t=ee(A),r=e.query;let n=3;const s=t.queries.get(r);if(s){const i=s.Sa.indexOf(e);i>=0&&(s.Sa.splice(i,1),s.Sa.length===0?n=e.va()?0:1:!s.Da()&&e.va()&&(n=2))}switch(n){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}})}function KU(A,e){const t=ee(A);let r=!1;for(const n of e){const s=n.query,i=t.queries.get(s);if(i){for(const a of i.Sa)a.Ma(n)&&(r=!0);i.ba=n}}r&&tu(t)}function jU(A,e,t){const r=ee(A),n=r.queries.get(e);if(n)for(const s of n.Sa)s.onError(t);r.queries.delete(e)}function tu(A){A.Ca.forEach(e=>{e.next()})}var Kc,af;(af=Kc||(Kc={})).xa="default",af.Cache="cache";class pB{constructor(e,t,r){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const n of e.docChanges)n.type!==3&&r.push(n);e=new on(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const r=t!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=on.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==Kc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mB{constructor(e){this.key=e}}class BB{constructor(e){this.key=e}}class GU{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=oe(),this.mutatedKeys=oe(),this.Za=Pm(e),this.Xa=new Jr(this.Za)}get eu(){return this.Ha}tu(e,t){const r=t?t.nu:new sf,n=t?t.Xa:this.Xa;let s=t?t.mutatedKeys:this.mutatedKeys,i=n,a=!1;const c=this.query.limitType==="F"&&n.size===this.query.limit?n.last():null,l=this.query.limitType==="L"&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((h,d)=>{const p=n.get(h),y=$o(this.query,d)?d:null,_=!!p&&this.mutatedKeys.has(p.key),v=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let b=!1;p&&y?p.data.isEqual(y.data)?_!==v&&(r.track({type:3,doc:y}),b=!0):this.ru(p,y)||(r.track({type:2,doc:y}),b=!0,(c&&this.Za(y,c)>0||l&&this.Za(y,l)<0)&&(a=!0)):!p&&y?(r.track({type:0,doc:y}),b=!0):p&&!y&&(r.track({type:1,doc:p}),b=!0,(c||l)&&(a=!0)),b&&(y?(i=i.add(y),s=v?s.add(h):s.delete(h)):(i=i.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;i.size>this.query.limit;){const h=this.query.limitType==="F"?i.last():i.first();i=i.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Xa:i,nu:r,Cs:a,mutatedKeys:s}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){const s=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const i=e.nu.wa();i.sort((h,d)=>function(y,_){const v=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Vt:b})}};return v(y)-v(_)}(h.type,d.type)||this.Za(h.doc,d.doc)),this.iu(r),n=n!=null&&n;const a=t&&!n?this.su():[],c=this.Ya.size===0&&this.current&&!n?1:0,l=c!==this.Ja;return this.Ja=c,i.length!==0||l?{snapshot:new on(this.query,e.Xa,s,i,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:a}:{ou:a}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new sf,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=oe(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new BB(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new mB(r))}),t}au(e){this.Ha=e.$s,this.Ya=oe();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return on.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const ru="SyncEngine";class $U{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class WU{constructor(e){this.key=e,this.cu=!1}}class XU{constructor(e,t,r,n,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.lu={},this.hu=new Ur(a=>Dm(a),Go),this.Pu=new Map,this.Tu=new Set,this.Iu=new Ue(X.comparator),this.Eu=new Map,this.du=new $l,this.Au={},this.Ru=new Map,this.Vu=sn.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}function zU(A,e,t=!0){return w(this,null,function*(){const r=IB(A);let n;const s=r.hu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),n=s.view.uu()):n=yield wB(r,e,t,!0),n})}function qU(A,e){return w(this,null,function*(){const t=IB(A);yield wB(t,e,!0,!1)})}function wB(A,e,t,r){return w(this,null,function*(){const n=yield pU(A.localStore,WA(e)),s=n.targetId,i=A.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=yield YU(A,e,s,i==="current",n.resumeToken)),A.isPrimaryClient&&t&&aB(A.remoteStore,n),a})}function YU(A,e,t,r,n){return w(this,null,function*(){A.fu=(d,p,y)=>function(v,b,x,S){return w(this,null,function*(){let D=b.view.tu(x);D.Cs&&(D=yield Zd(v.localStore,b.query,!1).then(({documents:U})=>b.view.tu(U,D)));const k=S&&S.targetChanges.get(b.targetId),N=S&&S.targetMismatches.get(b.targetId)!=null,H=b.view.applyChanges(D,v.isPrimaryClient,k,N);return lf(v,b.targetId,H.ou),H.snapshot})}(A,d,p,y);const s=yield Zd(A.localStore,e,!0),i=new GU(e,s.$s),a=i.tu(s.documents),c=ks.createSynthesizedTargetChangeForCurrentChange(t,r&&A.onlineState!=="Offline",n),l=i.applyChanges(a,A.isPrimaryClient,c);lf(A,t,l.ou);const h=new $U(e,t,i);return A.hu.set(e,h),A.Pu.has(t)?A.Pu.get(t).push(e):A.Pu.set(t,[e]),l.snapshot})}function JU(A,e,t){return w(this,null,function*(){const r=ee(A),n=r.hu.get(e),s=r.Pu.get(n.targetId);if(s.length>1)return r.Pu.set(n.targetId,s.filter(i=>!Go(i,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(n.targetId),r.sharedClientState.isActiveQueryTarget(n.targetId)||(yield Mc(r.localStore,n.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(n.targetId),t&&ql(r.remoteStore,n.targetId),jc(r,n.targetId)}).catch(dn))):(jc(r,n.targetId),yield Mc(r.localStore,n.targetId,!0))})}function ZU(A,e){return w(this,null,function*(){const t=ee(A),r=t.hu.get(e),n=t.Pu.get(r.targetId);t.isPrimaryClient&&n.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ql(t.remoteStore,r.targetId))})}function eQ(A,e,t){return w(this,null,function*(){const r=oQ(A);try{const n=yield function(i,a){const c=ee(i),l=Oe.now(),h=a.reduce((y,_)=>y.add(_.key),oe());let d,p;return c.persistence.runTransaction("Locally write mutations","readwrite",y=>{let _=pt(),v=oe();return c.Bs.getEntries(y,h).next(b=>{_=b,_.forEach((x,S)=>{S.isValidDocument()||(v=v.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(y,_)).next(b=>{d=b;const x=[];for(const S of a){const D=p_(S,d.get(S.key).overlayedDocument);D!=null&&x.push(new Qr(S.key,D,Um(D.value.mapValue),kA.exists(!0)))}return c.mutationQueue.addMutationBatch(y,l,x,a)}).next(b=>{p=b;const x=b.applyToLocalDocumentSet(d,v);return c.documentOverlayCache.saveOverlays(y,b.batchId,x)})}).then(()=>({batchId:p.batchId,changes:Hm(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(n.batchId),function(i,a,c){let l=i.Au[i.currentUser.toKey()];l||(l=new Ue(ne)),l=l.insert(a,c),i.Au[i.currentUser.toKey()]=l}(r,n.batchId,t),yield Os(r,n.changes),yield Jo(r.remoteStore)}catch(n){const s=Au(n,"Failed to persist write");t.reject(s)}})}function yB(A,e){return w(this,null,function*(){const t=ee(A);try{const r=yield dU(t.localStore,e);e.targetChanges.forEach((n,s)=>{const i=t.Eu.get(s);i&&(he(n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size<=1,22616),n.addedDocuments.size>0?i.cu=!0:n.modifiedDocuments.size>0?he(i.cu,14607):n.removedDocuments.size>0&&(he(i.cu,42227),i.cu=!1))}),yield Os(t,r,e)}catch(r){yield dn(r)}})}function cf(A,e,t){const r=ee(A);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const n=[];r.hu.forEach((s,i)=>{const a=i.view.Fa(e);a.snapshot&&n.push(a.snapshot)}),function(i,a){const c=ee(i);c.onlineState=a;let l=!1;c.queries.forEach((h,d)=>{for(const p of d.Sa)p.Fa(a)&&(l=!0)}),l&&tu(c)}(r.eventManager,e),n.length&&r.lu.Y_(n),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}function AQ(A,e,t){return w(this,null,function*(){const r=ee(A);r.sharedClientState.updateQueryState(e,"rejected",t);const n=r.Eu.get(e),s=n&&n.key;if(s){let i=new Ue(X.comparator);i=i.insert(s,oA.newNoDocument(s,J.min()));const a=oe().add(s),c=new zo(J.min(),new Map,new Ue(ne),i,a);yield yB(r,c),r.Iu=r.Iu.remove(s),r.Eu.delete(e),nu(r)}else yield Mc(r.localStore,e,!1).then(()=>jc(r,e,t)).catch(dn)})}function tQ(A,e){return w(this,null,function*(){const t=ee(A),r=e.batch.batchId;try{const n=yield hU(t.localStore,e);vB(t,r,null),CB(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),yield Os(t,n)}catch(n){yield dn(n)}})}function rQ(A,e,t){return w(this,null,function*(){const r=ee(A);try{const n=yield function(i,a){const c=ee(i);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let h;return c.mutationQueue.lookupMutationBatch(l,a).next(d=>(he(d!==null,37113),h=d.keys(),c.mutationQueue.removeMutationBatch(l,d))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,h)).next(()=>c.localDocuments.getDocuments(l,h))})}(r.localStore,e);vB(r,e,t),CB(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),yield Os(r,n)}catch(n){yield dn(n)}})}function CB(A,e){(A.Ru.get(e)||[]).forEach(t=>{t.resolve()}),A.Ru.delete(e)}function vB(A,e,t){const r=ee(A);let n=r.Au[r.currentUser.toKey()];if(n){const s=n.get(e);s&&(t?s.reject(t):s.resolve(),n=n.remove(e)),r.Au[r.currentUser.toKey()]=n}}function jc(A,e,t=null){A.sharedClientState.removeLocalQueryTarget(e);for(const r of A.Pu.get(e))A.hu.delete(r),t&&A.lu.gu(r,t);A.Pu.delete(e),A.isPrimaryClient&&A.du.Hr(e).forEach(r=>{A.du.containsKey(r)||EB(A,r)})}function EB(A,e){A.Tu.delete(e.path.canonicalString());const t=A.Iu.get(e);t!==null&&(ql(A.remoteStore,t),A.Iu=A.Iu.remove(e),A.Eu.delete(t),nu(A))}function lf(A,e,t){for(const r of t)r instanceof mB?(A.du.addReference(r.key,e),nQ(A,r)):r instanceof BB?(G(ru,"Document no longer in limbo: "+r.key),A.du.removeReference(r.key,e),A.du.containsKey(r.key)||EB(A,r.key)):q(19791,{pu:r})}function nQ(A,e){const t=e.key,r=t.path.canonicalString();A.Iu.get(t)||A.Tu.has(r)||(G(ru,"New document in limbo: "+t),A.Tu.add(r),nu(A))}function nu(A){for(;A.Tu.size>0&&A.Iu.size<A.maxConcurrentLimboResolutions;){const e=A.Tu.values().next().value;A.Tu.delete(e);const t=new X(ye.fromString(e)),r=A.Vu.next();A.Eu.set(r,new WU(t)),A.Iu=A.Iu.insert(t,r),aB(A.remoteStore,new St(WA(Ol(t.path)),r,"TargetPurposeLimboResolution",Vo.le))}}function Os(A,e,t){return w(this,null,function*(){const r=ee(A),n=[],s=[],i=[];r.hu.isEmpty()||(r.hu.forEach((a,c)=>{i.push(r.fu(c,e,t).then(l=>{var h;if((l||t)&&r.isPrimaryClient){const d=l?!l.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,d?"current":"not-current")}if(l){n.push(l);const d=Xl.Rs(c.targetId,l);s.push(d)}}))}),yield Promise.all(i),r.lu.Y_(n),yield function(c,l){return w(this,null,function*(){const h=ee(c);try{yield h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>M.forEach(l,p=>M.forEach(p.ds,y=>h.persistence.referenceDelegate.addReference(d,p.targetId,y)).next(()=>M.forEach(p.As,y=>h.persistence.referenceDelegate.removeReference(d,p.targetId,y)))))}catch(d){if(!fn(d))throw d;G(zl,"Failed to update sequence numbers: "+d)}for(const d of l){const p=d.targetId;if(!d.fromCache){const y=h.xs.get(p),_=y.snapshotVersion,v=y.withLastLimboFreeSnapshotVersion(_);h.xs=h.xs.insert(p,v)}}})}(r.localStore,s))})}function sQ(A,e){return w(this,null,function*(){const t=ee(A);if(!t.currentUser.isEqual(e)){G(ru,"User change. New user:",e.toKey());const r=yield nB(t.localStore,e);t.currentUser=e,function(s,i){s.Ru.forEach(a=>{a.forEach(c=>{c.reject(new $(O.CANCELLED,i))})}),s.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),yield Os(t,r.ks)}})}function iQ(A,e){const t=ee(A),r=t.Eu.get(e);if(r&&r.cu)return oe().add(r.key);{let n=oe();const s=t.Pu.get(e);if(!s)return n;for(const i of s){const a=t.hu.get(i);n=n.unionWith(a.view.eu)}return n}}function IB(A){const e=ee(A);return e.remoteStore.remoteSyncer.applyRemoteEvent=yB.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=iQ.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=AQ.bind(null,e),e.lu.Y_=KU.bind(null,e.eventManager),e.lu.gu=jU.bind(null,e.eventManager),e}function oQ(A){const e=ee(A);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tQ.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rQ.bind(null,e),e}class vo{constructor(){this.kind="memory",this.synchronizeTabs=!1}initialize(e){return w(this,null,function*(){this.serializer=qo(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),yield this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)})}vu(e,t){return null}Cu(e,t){return null}Du(e){return uU(this.persistence,new aU,e.initialUser,this.serializer)}Su(e){return new rB(Wl.fi,this.serializer)}bu(e){return new BU}terminate(){return w(this,null,function*(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),yield this.persistence.shutdown()})}}vo.provider={build:()=>new vo};class aQ extends vo{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){he(this.persistence.referenceDelegate instanceof yo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new W_(r,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?gA.withCacheSize(this.cacheSizeBytes):gA.DEFAULT;return new rB(r=>yo.fi(r,t),this.serializer)}}class Gc{initialize(e,t){return w(this,null,function*(){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=sQ.bind(null,this.syncEngine),yield OU(this.remoteStore,this.syncEngine.isPrimaryClient))})}createEventManager(e){return function(){return new VU}()}createDatastore(e){const t=qo(e.databaseInfo.databaseId),r=function(s){return new EU(s)}(e.databaseInfo);return function(s,i,a,c){return new QU(s,i,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,n,s,i,a){return new FU(r,n,s,i,a)}(this.localStore,this.datastore,e.asyncQueue,t=>cf(this.syncEngine,t,0),function(){return tf.C()?new tf:new wU}())}createSyncEngine(e,t){return function(n,s,i,a,c,l,h){const d=new XU(n,s,i,a,c,l);return h&&(d.mu=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return w(this,null,function*(){var e,t;yield function(n){return w(this,null,function*(){const s=ee(n);G(vr,"RemoteStore shutting down."),s.da.add(5),yield Ns(s),s.Ra.shutdown(),s.Va.set("Unknown")})}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()})}}Gc.provider={build:()=>new Gc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _B{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):gt("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="FirestoreClient";class cQ{constructor(e,t,r,n,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=sA.UNAUTHENTICATED,this.clientId=pm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,i=>w(this,null,function*(){G(Yt,"Received user=",i.uid),yield this.authCredentialListener(i),this.user=i})),this.appCheckCredentials.start(r,i=>(G(Yt,"Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(()=>w(this,null,function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Au(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}function Xa(A,e){return w(this,null,function*(){A.asyncQueue.verifyOperationInProgress(),G(Yt,"Initializing OfflineComponentProvider");const t=A.configuration;yield e.initialize(t);let r=t.initialUser;A.setCredentialChangeListener(n=>w(null,null,function*(){r.isEqual(n)||(yield nB(e.localStore,n),r=n)})),e.persistence.setDatabaseDeletedListener(()=>A.terminate()),A._offlineComponents=e})}function uf(A,e){return w(this,null,function*(){A.asyncQueue.verifyOperationInProgress();const t=yield lQ(A);G(Yt,"Initializing OnlineComponentProvider"),yield e.initialize(t,A.configuration),A.setCredentialChangeListener(r=>nf(e.remoteStore,r)),A.setAppCheckTokenChangeListener((r,n)=>nf(e.remoteStore,n)),A._onlineComponents=e})}function lQ(A){return w(this,null,function*(){if(!A._offlineComponents)if(A._uninitializedComponentsProvider){G(Yt,"Using user provided OfflineComponentProvider");try{yield Xa(A,A._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(n){return n.name==="FirebaseError"?n.code===O.FAILED_PRECONDITION||n.code===O.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}(t))throw t;An("Error using user provided cache. Falling back to memory cache: "+t),yield Xa(A,new vo)}}else G(Yt,"Using default OfflineComponentProvider"),yield Xa(A,new aQ(void 0));return A._offlineComponents})}function UB(A){return w(this,null,function*(){return A._onlineComponents||(A._uninitializedComponentsProvider?(G(Yt,"Using user provided OnlineComponentProvider"),yield uf(A,A._uninitializedComponentsProvider._online)):(G(Yt,"Using default OnlineComponentProvider"),yield uf(A,new Gc))),A._onlineComponents})}function uQ(A){return UB(A).then(e=>e.syncEngine)}function QB(A){return w(this,null,function*(){const e=yield UB(A),t=e.eventManager;return t.onListen=zU.bind(null,e.syncEngine),t.onUnlisten=JU.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=qU.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=ZU.bind(null,e.syncEngine),t})}function hQ(A,e,t={}){const r=new lt;return A.asyncQueue.enqueueAndForget(()=>w(null,null,function*(){return function(s,i,a,c,l){const h=new _B({next:p=>{h.xu(),i.enqueueAndForget(()=>gB(s,d));const y=p.docs.has(a);!y&&p.fromCache?l.reject(new $(O.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&p.fromCache&&c&&c.source==="server"?l.reject(new $(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(p)},error:p=>l.reject(p)}),d=new pB(Ol(a.path),h,{includeMetadataChanges:!0,Qa:!0});return fB(s,d)}(yield QB(A),A.asyncQueue,e,t,r)})),r.promise}function dQ(A,e,t={}){const r=new lt;return A.asyncQueue.enqueueAndForget(()=>w(null,null,function*(){return function(s,i,a,c,l){const h=new _B({next:p=>{h.xu(),i.enqueueAndForget(()=>gB(s,d)),p.fromCache&&c.source==="server"?l.reject(new $(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(p)},error:p=>l.reject(p)}),d=new pB(a,h,{includeMetadataChanges:!0,Qa:!0});return fB(s,d)}(yield QB(A),A.asyncQueue,e,t,r)})),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bB(A){const e={};return A.timeoutSeconds!==void 0&&(e.timeoutSeconds=A.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FB(A,e,t){if(!t)throw new $(O.INVALID_ARGUMENT,`Function ${A}() cannot be called with an empty ${e}.`)}function fQ(A,e,t,r){if(e===!0&&r===!0)throw new $(O.INVALID_ARGUMENT,`${A} and ${t} cannot be used together.`)}function df(A){if(!X.isDocumentKey(A))throw new $(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${A} has ${A.length}.`)}function ff(A){if(X.isDocumentKey(A))throw new $(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${A} has ${A.length}.`)}function Zo(A){if(A===void 0)return"undefined";if(A===null)return"null";if(typeof A=="string")return A.length>20&&(A=`${A.substring(0,20)}...`),JSON.stringify(A);if(typeof A=="number"||typeof A=="boolean")return""+A;if(typeof A=="object"){if(A instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(A);return e?`a custom ${e} object`:"an object"}}return typeof A=="function"?"a function":q(12329,{type:typeof A})}function mt(A,e){if("_delegate"in A&&(A=A._delegate),!(A instanceof e)){if(e.name===A.constructor.name)throw new $(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Zo(A);throw new $(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return A}function gQ(A,e){if(e<=0)throw new $(O.INVALID_ARGUMENT,`Function ${A}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TB="firestore.googleapis.com",gf=!0;class pf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=TB,this.ssl=gf}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:gf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=tB;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<G_)throw new $(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}fQ("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bB((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,n){return r.timeoutSeconds===n.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ea{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new CI;switch(r.type){case"firstParty":return new _I(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}_restart(){return w(this,null,function*(){this._terminateTask==="notTerminated"?yield this._terminate():this._terminateTask="notTerminated"})}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=hf.get(t);r&&(G("ComponentProvider","Removing Datastore"),hf.delete(t),r.terminate())}(this),Promise.resolve()}}function pQ(A,e,t,r={}){var n;A=mt(A,ea);const s=er(e),i=A._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:A._getEmulatorOptions()}),c=`${e}:${t}`;s&&(Bl(`https://${c}`),wl("Firestore",!0)),i.host!==TB&&i.host!==c&&An("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:c,ssl:s,emulatorOptions:r});if(!mr(l,a)&&(A._setSettings(l),r.mockUserToken)){let h,d;if(typeof r.mockUserToken=="string")h=r.mockUserToken,d=sA.MOCK_USER;else{h=Ep(r.mockUserToken,(n=A._app)===null||n===void 0?void 0:n.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new $(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new sA(p)}A._authCredentials=new vI(new fm(h,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ar(this.firestore,e,this._query)}}class BA{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ot(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new BA(this.firestore,e,this._key)}}class Ot extends Ar{constructor(e,t,r){super(e,t,Ol(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new BA(this.firestore,null,new X(e))}withConverter(e){return new Ot(this.firestore,e,this._path)}}function Jt(A,e,...t){if(A=Me(A),FB("collection","path",e),A instanceof ea){const r=ye.fromString(e,...t);return ff(r),new Ot(A,null,r)}{if(!(A instanceof BA||A instanceof Ot))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=A._path.child(ye.fromString(e,...t));return ff(r),new Ot(A.firestore,null,r)}}function cA(A,e,...t){if(A=Me(A),arguments.length===1&&(e=pm.newId()),FB("doc","path",e),A instanceof ea){const r=ye.fromString(e,...t);return df(r),new BA(A,null,new X(r))}{if(!(A instanceof BA||A instanceof Ot))throw new $(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=A._path.child(ye.fromString(e,...t));return df(r),new BA(A.firestore,A instanceof Ot?A.converter:null,new X(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mf="AsyncQueue";class Bf{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new iB(this,"async_queue_retry"),this.rc=()=>{const r=Wa();r&&G(mf,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const t=Wa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=Wa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new lt;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}ac(){return w(this,null,function*(){if(this.Ju.length!==0){try{yield this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!fn(e))throw e;G(mf,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}})}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,gt("INTERNAL UNHANDLED ERROR: ",wf(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=t,t}enqueueAfterDelay(e,t,r){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const n=eu.createAndSchedule(this,e,t,r,s=>this.uc(s));return this.Zu.push(n),n}oc(){this.Xu&&q(47125,{cc:wf(this.Xu)})}verifyOperationInProgress(){}lc(){return w(this,null,function*(){let e;do e=this.sc,yield e;while(e!==this.sc)})}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function wf(A){let e=A.message||"";return A.stack&&(e=A.stack.includes(A.message)?A.stack:A.message+`
`+A.stack),e}class mn extends ea{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new Bf,this._persistenceKey=(n==null?void 0:n.name)||"[DEFAULT]"}_terminate(){return w(this,null,function*(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bf(e),this._firestoreClient=void 0,yield e}})}}function mQ(A,e){const t=typeof A=="object"?A:vl(),r=typeof A=="string"?A:e,n=ko(t,"firestore").getImmediate({identifier:r});if(!n._initialized){const s=yp("firestore");s&&pQ(n,...s)}return n}function su(A){if(A._terminated)throw new $(O.FAILED_PRECONDITION,"The client has already been terminated.");return A._firestoreClient||BQ(A),A._firestoreClient}function BQ(A){var e,t,r;const n=A._freezeSettings(),s=function(a,c,l,h){return new OI(a,c,l,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,bB(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(A._databaseId,((e=A._app)===null||e===void 0?void 0:e.options.appId)||"",A._persistenceKey,n);A._componentsProvider||!((t=n.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=n.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(A._componentsProvider={_offline:n.localCache._offlineComponentProvider,_online:n.localCache._onlineComponentProvider}),A._firestoreClient=new cQ(A._authCredentials,A._appCheckCredentials,A._queue,s,A._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(A._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this._byteString=e}static fromBase64String(e){try{return new an(Je.fromBase64String(e))}catch(t){throw new $(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new an(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,n){if(r.length!==n.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==n[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wQ=/^__.*__$/;class yQ{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Qr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Hs(e,this.data,t,this.fieldTransforms)}}function xB(A){switch(A){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{Ic:A})}}class lu{constructor(e,t,r,n,s,i){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,s===void 0&&this.Ec(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new lu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),n=this.dc({path:r,Rc:!1});return n.Vc(e),n}mc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),n=this.dc({path:r,Rc:!1});return n.Ec(),n}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return Eo(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(xB(this.Ic)&&wQ.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class CQ{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||qo(e)}bc(e,t,r,n=!1){return new lu({Ic:e,methodName:t,wc:r,path:qe.emptyPath(),Rc:!1,yc:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uu(A){const e=A._freezeSettings(),t=qo(A._databaseId);return new CQ(A._databaseId,!!e.ignoreUndefinedProperties,t)}function SB(A,e,t,r,n,s={}){const i=A.bc(s.merge||s.mergeFields?2:0,e,t,n);PB("Data must be an object, but it was:",i,r);const a=RB(r,i);let c,l;if(s.merge)c=new LA(i.fieldMask),l=i.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const p=EQ(e,d,t);if(!i.contains(p))throw new $(O.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);_Q(h,p)||h.push(p)}c=new LA(h),l=i.fieldTransforms.filter(d=>c.covers(d.field))}else c=null,l=i.fieldTransforms;return new yQ(new QA(a),c,l)}class hu extends ou{_toFieldTransform(e){return new h_(e.path,new Es)}isEqual(e){return e instanceof hu}}function vQ(A,e,t,r=!1){return du(t,A.bc(r?4:3,e))}function du(A,e){if(DB(A=Me(A)))return PB("Unsupported field value:",e,A),RB(A,e);if(A instanceof ou)return function(r,n){if(!xB(n.Ic))throw n.gc(`${r._methodName}() can only be used with update() and set()`);if(!n.path)throw n.gc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(n);s&&n.fieldTransforms.push(s)}(A,e),null;if(A===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),A instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,n){const s=[];let i=0;for(const a of r){let c=du(a,n.fc(i));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),i++}return{arrayValue:{values:s}}}(A,e)}return function(r,n){if((r=Me(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return c_(n.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Oe.fromDate(r);return{timestampValue:wo(n.serializer,s)}}if(r instanceof Oe){const s=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:wo(n.serializer,s)}}if(r instanceof au)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof an)return{bytesValue:zm(n.serializer,r._byteString)};if(r instanceof BA){const s=n.databaseId,i=r.firestore._databaseId;if(!i.isEqual(s))throw n.gc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Gl(r.firestore._databaseId||n.databaseId,r._key.path)}}if(r instanceof cu)return function(i,a){return{mapValue:{fields:{[Im]:{stringValue:_m},[go]:{arrayValue:{values:i.toArray().map(l=>{if(typeof l!="number")throw a.gc("VectorValues must only contain numeric values.");return Ml(a.serializer,l)})}}}}}}(r,n);throw n.gc(`Unsupported field value: ${Zo(r)}`)}(A,e)}function RB(A,e){const t={};return Bm(A)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):_r(A,(r,n)=>{const s=du(n,e.Ac(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function DB(A){return!(typeof A!="object"||A===null||A instanceof Array||A instanceof Date||A instanceof Oe||A instanceof au||A instanceof an||A instanceof BA||A instanceof ou||A instanceof cu)}function PB(A,e,t){if(!DB(t)||!function(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}(t)){const r=Zo(t);throw r==="an object"?e.gc(A+" a custom object"):e.gc(A+" "+r)}}function EQ(A,e,t){if((e=Me(e))instanceof iu)return e._internalPath;if(typeof e=="string")return LB(A,e);throw Eo("Field path arguments must be of type string or ",A,!1,void 0,t)}const IQ=new RegExp("[~\\*/\\[\\]]");function LB(A,e,t){if(e.search(IQ)>=0)throw Eo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,A,!1,void 0,t);try{return new iu(...e.split("."))._internalPath}catch(r){throw Eo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,A,!1,void 0,t)}}function Eo(A,e,t,r,n){const s=r&&!r.isEmpty(),i=n!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||i)&&(c+=" (found",s&&(c+=` in field ${r}`),i&&(c+=` in document ${n}`),c+=")"),new $(O.INVALID_ARGUMENT,a+A+c)}function _Q(A,e){return A.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HB{constructor(e,t,r,n,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new BA(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UQ(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Aa("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class UQ extends HB{data(){return super.data()}}function Aa(A,e){return typeof e=="string"?LB(A,e):e instanceof iu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QQ(A){if(A.limitType==="L"&&A.explicitOrderBy.length===0)throw new $(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fu{}class gu extends fu{}function cn(A,e,...t){let r=[];e instanceof fu&&r.push(e),r=r.concat(t),function(s){const i=s.filter(c=>c instanceof pu).length,a=s.filter(c=>c instanceof ta).length;if(i>1||i>0&&a>0)throw new $(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const n of r)A=n._apply(A);return A}class ta extends gu{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ta(e,t,r)}_apply(e){const t=this._parse(e);return kB(e._query,t),new Ar(e.firestore,e.converter,Lc(e._query,t))}_parse(e){const t=uu(e.firestore);return function(s,i,a,c,l,h,d){let p;if(l.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){vf(d,h);const _=[];for(const v of d)_.push(Cf(c,s,v));p={arrayValue:{values:_}}}else p=Cf(c,s,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||vf(d,h),p=vQ(a,i,d,h==="in"||h==="not-in");return Ne.create(l,h,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Mt(A,e,t){const r=e,n=Aa("where",A);return ta._create(n,r,t)}class pu extends fu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new pu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:NA.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(n,s){let i=n;const a=s.getFlattenedFilters();for(const c of a)kB(i,c),i=Lc(i,c)}(e._query,t),new Ar(e.firestore,e.converter,Lc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class mu extends gu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new mu(e,t)}_apply(e){const t=function(n,s,i){if(n.startAt!==null)throw new $(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(n.endAt!==null)throw new $(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new vs(s,i)}(e._query,this._field,this._direction);return new Ar(e.firestore,e.converter,function(n,s){const i=n.explicitOrderBy.concat([s]);return new gn(n.path,n.collectionGroup,i,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}(e._query,t))}}function yf(A,e="asc"){const t=e,r=Aa("orderBy",A);return mu._create(r,t)}class Bu extends gu{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Bu(e,t,r)}_apply(e){return new Ar(e.firestore,e.converter,mo(e._query,this._limit,this._limitType))}}function Us(A){return gQ("limit",A),Bu._create("limit",A,"F")}function Cf(A,e,t){if(typeof(t=Me(t))=="string"){if(t==="")throw new $(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Rm(e)&&t.indexOf("/")!==-1)throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(ye.fromString(t));if(!X.isDocumentKey(r))throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Dd(A,new X(r))}if(t instanceof BA)return Dd(A,t._key);throw new $(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zo(t)}.`)}function vf(A,e){if(!Array.isArray(A)||A.length===0)throw new $(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function kB(A,e){const t=function(n,s){for(const i of n)for(const a of i.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(A.filters,function(n){switch(n){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class bQ{convertValue(e,t="none"){switch(zt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Xt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return _r(e,(n,s)=>{r[n]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,n;const s=(n=(r=(t=e.fields)===null||t===void 0?void 0:t[go].arrayValue)===null||r===void 0?void 0:r.values)===null||n===void 0?void 0:n.map(i=>De(i.doubleValue));return new cu(s)}convertGeoPoint(e){return new au(De(e.latitude),De(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=jo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ws(e));default:return null}}convertTimestamp(e){const t=Wt(e);return new Oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ye.fromString(e);he(AB(r),9688,{name:e});const n=new ys(r.get(1),r.get(3)),s=new X(r.popFirst(5));return n.isEqual(t)||gt(`Document ${s} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NB(A,e,t){let r;return r=A?t&&(t.merge||t.mergeFields)?A.toFirestore(e,t):A.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class OB extends HB{constructor(e,t,r,n,s,i){super(e,t,r,n,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Aa("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Zi extends OB{data(e={}){return super.data(e)}}class FQ{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new $n(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Zi(this._firestore,this._userDataWriter,r.key,r,new $n(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(n,s){if(n._snapshot.oldDocs.isEmpty()){let i=0;return n._snapshot.docChanges.map(a=>{const c=new Zi(n._firestore,n._userDataWriter,a.doc.key,a.doc,new $n(n._snapshot.mutatedKeys.has(a.doc.key),n._snapshot.fromCache),n.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:i++}})}{let i=n._snapshot.oldDocs;return n._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new Zi(n._firestore,n._userDataWriter,a.doc.key,a.doc,new $n(n._snapshot.mutatedKeys.has(a.doc.key),n._snapshot.fromCache),n.query.converter);let l=-1,h=-1;return a.type!==0&&(l=i.indexOf(a.doc.key),i=i.delete(a.doc.key)),a.type!==1&&(i=i.add(a.doc),h=i.indexOf(a.doc.key)),{type:TQ(a.type),doc:c,oldIndex:l,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function TQ(A){switch(A){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:A})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(A){A=mt(A,BA);const e=mt(A.firestore,mn);return hQ(su(e),A._key).then(t=>SQ(e,A,t))}class MB extends bQ{constructor(e){super(),this.firestore=e}convertBytes(e){return new an(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new BA(this.firestore,null,t)}}function Qs(A){A=mt(A,Ar);const e=mt(A.firestore,mn),t=su(e),r=new MB(e);return QQ(A._query),dQ(t,A._query).then(n=>new FQ(e,r,A,n))}function ut(A,e,t){A=mt(A,BA);const r=mt(A.firestore,mn),n=NB(A.converter,e,t);return yu(r,[SB(uu(r),"setDoc",A._key,n,A.converter!==null,t).toMutation(A._key,kA.none())])}function xQ(A){return yu(mt(A.firestore,mn),[new Vl(A._key,kA.none())])}function wu(A,e){const t=mt(A.firestore,mn),r=cA(A),n=NB(A.converter,e);return yu(t,[SB(uu(A.firestore),"addDoc",r._key,n,A.converter!==null,{}).toMutation(r._key,kA.exists(!1))]).then(()=>r)}function yu(A,e){return function(r,n){const s=new lt;return r.asyncQueue.enqueueAndForget(()=>w(null,null,function*(){return eQ(yield uQ(r),n,s)})),s.promise}(su(A),e)}function SQ(A,e,t){const r=t.docs.get(e._key),n=new MB(A);return new OB(A,n,e._key,r,new $n(t.hasPendingWrites,t.fromCache),e.converter)}function qA(){return new hu("serverTimestamp")}(function(e,t=!0){(function(n){hn=n})(Ir),Br(new Gt("firestore",(r,{instanceIdentifier:n,options:s})=>{const i=r.getProvider("app").getImmediate(),a=new mn(new EI(r.getProvider("auth-internal")),new UI(i,r.getProvider("app-check-internal")),function(l,h){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new $(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ys(l.options.projectId,h)}(i,n),i);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),GA(vd,Ed,e),GA(vd,Ed,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VB="firebasestorage.googleapis.com",KB="storageBucket",RQ=2*60*1e3,DQ=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends YA{constructor(e,t,r=0){super(za(e),`Firebase Storage: ${t} (${za(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Te.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return za(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Fe;(function(A){A.UNKNOWN="unknown",A.OBJECT_NOT_FOUND="object-not-found",A.BUCKET_NOT_FOUND="bucket-not-found",A.PROJECT_NOT_FOUND="project-not-found",A.QUOTA_EXCEEDED="quota-exceeded",A.UNAUTHENTICATED="unauthenticated",A.UNAUTHORIZED="unauthorized",A.UNAUTHORIZED_APP="unauthorized-app",A.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",A.INVALID_CHECKSUM="invalid-checksum",A.CANCELED="canceled",A.INVALID_EVENT_NAME="invalid-event-name",A.INVALID_URL="invalid-url",A.INVALID_DEFAULT_BUCKET="invalid-default-bucket",A.NO_DEFAULT_BUCKET="no-default-bucket",A.CANNOT_SLICE_BLOB="cannot-slice-blob",A.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",A.NO_DOWNLOAD_URL="no-download-url",A.INVALID_ARGUMENT="invalid-argument",A.INVALID_ARGUMENT_COUNT="invalid-argument-count",A.APP_DELETED="app-deleted",A.INVALID_ROOT_OPERATION="invalid-root-operation",A.INVALID_FORMAT="invalid-format",A.INTERNAL_ERROR="internal-error",A.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Fe||(Fe={}));function za(A){return"storage/"+A}function Cu(){const A="An unknown error occurred, please check the error payload for server response.";return new Te(Fe.UNKNOWN,A)}function PQ(A){return new Te(Fe.OBJECT_NOT_FOUND,"Object '"+A+"' does not exist.")}function LQ(A){return new Te(Fe.QUOTA_EXCEEDED,"Quota for bucket '"+A+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function HQ(){const A="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Te(Fe.UNAUTHENTICATED,A)}function kQ(){return new Te(Fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function NQ(A){return new Te(Fe.UNAUTHORIZED,"User does not have permission to access '"+A+"'.")}function OQ(){return new Te(Fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function MQ(){return new Te(Fe.CANCELED,"User canceled the upload/download.")}function VQ(A){return new Te(Fe.INVALID_URL,"Invalid URL '"+A+"'.")}function KQ(A){return new Te(Fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+A+"'.")}function jQ(){return new Te(Fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+KB+"' property when initializing the app?")}function GQ(){return new Te(Fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function $Q(){return new Te(Fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function WQ(A){return new Te(Fe.UNSUPPORTED_ENVIRONMENT,`${A} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function $c(A){return new Te(Fe.INVALID_ARGUMENT,A)}function jB(){return new Te(Fe.APP_DELETED,"The Firebase app was deleted.")}function XQ(A){return new Te(Fe.INVALID_ROOT_OPERATION,"The operation '"+A+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function as(A,e){return new Te(Fe.INVALID_FORMAT,"String does not match format '"+A+"': "+e)}function Pn(A){throw new Te(Fe.INTERNAL_ERROR,"Internal error: "+A)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vA{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=vA.makeFromUrl(e,t)}catch(n){return new vA(e,"")}if(r.path==="")return r;throw KQ(e)}static makeFromUrl(e,t){let r=null;const n="([A-Za-z0-9.\\-_]+)";function s(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+n+i,"i"),c={bucket:1,path:3};function l(k){k.path_=decodeURIComponent(k.path)}const h="v[A-Za-z0-9_]+",d=t.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",y=new RegExp(`^https?://${d}/${h}/b/${n}/o${p}`,"i"),_={bucket:1,path:3},v=t===VB?"(?:storage.googleapis.com|storage.cloud.google.com)":t,b="([^?#]*)",x=new RegExp(`^https?://${v}/${n}/${b}`,"i"),D=[{regex:a,indices:c,postModify:s},{regex:y,indices:_,postModify:l},{regex:x,indices:{bucket:1,path:2},postModify:l}];for(let k=0;k<D.length;k++){const N=D[k],H=N.regex.exec(e);if(H){const U=H[N.indices.bucket];let m=H[N.indices.path];m||(m=""),r=new vA(U,m),N.postModify(r);break}}if(r==null)throw VQ(e);return r}}class zQ{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qQ(A,e,t){let r=1,n=null,s=null,i=!1,a=0;function c(){return a===2}let l=!1;function h(...b){l||(l=!0,e.apply(null,b))}function d(b){n=setTimeout(()=>{n=null,A(y,c())},b)}function p(){s&&clearTimeout(s)}function y(b,...x){if(l){p();return}if(b){p(),h.call(null,b,...x);return}if(c()||i){p(),h.call(null,b,...x);return}r<64&&(r*=2);let D;a===1?(a=2,D=0):D=(r+Math.random())*1e3,d(D)}let _=!1;function v(b){_||(_=!0,p(),!l&&(n!==null?(b||(a=2),clearTimeout(n),d(0)):b||(a=1)))}return d(0),s=setTimeout(()=>{i=!0,v(!0)},t),v}function YQ(A){A(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JQ(A){return A!==void 0}function ZQ(A){return typeof A=="object"&&!Array.isArray(A)}function vu(A){return typeof A=="string"||A instanceof String}function Ef(A){return Eu()&&A instanceof Blob}function Eu(){return typeof Blob!="undefined"}function If(A,e,t,r){if(r<e)throw $c(`Invalid value for '${A}'. Expected ${e} or greater.`);if(r>t)throw $c(`Invalid value for '${A}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(A,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${A}`}function GB(A){const e=encodeURIComponent;let t="?";for(const r in A)if(A.hasOwnProperty(r)){const n=e(r)+"="+e(A[r]);t=t+n+"&"}return t=t.slice(0,-1),t}var fr;(function(A){A[A.NO_ERROR=0]="NO_ERROR",A[A.NETWORK_ERROR=1]="NETWORK_ERROR",A[A.ABORT=2]="ABORT"})(fr||(fr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eb(A,e){const t=A>=500&&A<600,n=[408,429].indexOf(A)!==-1,s=e.indexOf(A)!==-1;return t||n||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,t,r,n,s,i,a,c,l,h,d,p=!0,y=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=s,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=d,this.retry=p,this.isUsingEmulator=y,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,v)=>{this.resolve_=_,this.reject_=v,this.start_()})}start_(){const e=(r,n)=>{if(n){r(!1,new di(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const i=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(i),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(i),this.pendingConnection_=null;const a=s.getErrorCode()===fr.NO_ERROR,c=s.getStatus();if(!a||eb(c,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===fr.ABORT;r(!1,new di(!1,null,h));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new di(l,s))})},t=(r,n)=>{const s=this.resolve_,i=this.reject_,a=n.connection;if(n.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());JQ(c)?s(c):s()}catch(c){i(c)}else if(a!==null){const c=Cu();c.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,c)):i(c)}else if(n.canceled){const c=this.appDelete_?jB():MQ();i(c)}else{const c=OQ();i(c)}};this.canceled_?t(!1,new di(!1,null,!0)):this.backoffId_=qQ(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&YQ(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class di{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function tb(A,e){e!==null&&e.length>0&&(A.Authorization="Firebase "+e)}function rb(A,e){A["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function nb(A,e){e&&(A["X-Firebase-GMPID"]=e)}function sb(A,e){e!==null&&(A["X-Firebase-AppCheck"]=e)}function ib(A,e,t,r,n,s,i=!0,a=!1){const c=GB(A.urlParams),l=A.url+c,h=Object.assign({},A.headers);return nb(h,e),tb(h,t),rb(h,s),sb(h,r),new Ab(l,A.method,h,A.body,A.successCodes,A.additionalRetryCodes,A.handler,A.errorHandler,A.timeout,A.progressCallback,n,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function ab(...A){const e=ob();if(e!==void 0){const t=new e;for(let r=0;r<A.length;r++)t.append(A[r]);return t.getBlob()}else{if(Eu())return new Blob(A);throw new Te(Fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function cb(A,e,t){return A.webkitSlice?A.webkitSlice(e,t):A.mozSlice?A.mozSlice(e,t):A.slice?A.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(A){if(typeof atob=="undefined")throw WQ("base-64");return atob(A)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qa{constructor(e,t){this.data=e,this.contentType=t||null}}function ub(A,e){switch(A){case jA.RAW:return new qa($B(e));case jA.BASE64:case jA.BASE64URL:return new qa(WB(A,e));case jA.DATA_URL:return new qa(db(e),fb(e))}throw Cu()}function $B(A){const e=[];for(let t=0;t<A.length;t++){let r=A.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<A.length-1&&(A.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,i=A.charCodeAt(++t);r=65536|(s&1023)<<10|i&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function hb(A){let e;try{e=decodeURIComponent(A)}catch(t){throw as(jA.DATA_URL,"Malformed data URL.")}return $B(e)}function WB(A,e){switch(A){case jA.BASE64:{const n=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(n||s)throw as(A,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case jA.BASE64URL:{const n=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(n||s)throw as(A,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=lb(e)}catch(n){throw n.message.includes("polyfill")?n:as(A,"Invalid character found")}const r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}class XB{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw as(jA.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=gb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function db(A){const e=new XB(A);return e.base64?WB(jA.BASE64,e.rest):hb(e.rest)}function fb(A){return new XB(A).contentType}function gb(A,e){return A.length>=e.length?A.substring(A.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t){let r=0,n="";Ef(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ef(this.data_)){const r=this.data_,n=cb(r,e,t);return n===null?null:new xt(n)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new xt(r,!0)}}static getBlob(...e){if(Eu()){const t=e.map(r=>r instanceof xt?r.data_:r);return new xt(ab.apply(null,t))}else{const t=e.map(i=>vu(i)?ub(jA.RAW,i).data:i.data_);let r=0;t.forEach(i=>{r+=i.byteLength});const n=new Uint8Array(r);let s=0;return t.forEach(i=>{for(let a=0;a<i.length;a++)n[s++]=i[a]}),new xt(n,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zB(A){let e;try{e=JSON.parse(A)}catch(t){return null}return ZQ(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pb(A){if(A.length===0)return null;const e=A.lastIndexOf("/");return e===-1?"":A.slice(0,e)}function mb(A,e){const t=e.split("/").filter(r=>r.length>0).join("/");return A.length===0?t:A+"/"+t}function qB(A){const e=A.lastIndexOf("/",A.length-2);return e===-1?A:A.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bb(A,e){return e}class dA{constructor(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||Bb}}let fi=null;function wb(A){return!vu(A)||A.length<2?A:qB(A)}function YB(){if(fi)return fi;const A=[];A.push(new dA("bucket")),A.push(new dA("generation")),A.push(new dA("metageneration")),A.push(new dA("name","fullPath",!0));function e(s,i){return wb(i)}const t=new dA("name");t.xform=e,A.push(t);function r(s,i){return i!==void 0?Number(i):i}const n=new dA("size");return n.xform=r,A.push(n),A.push(new dA("timeCreated")),A.push(new dA("updated")),A.push(new dA("md5Hash",null,!0)),A.push(new dA("cacheControl",null,!0)),A.push(new dA("contentDisposition",null,!0)),A.push(new dA("contentEncoding",null,!0)),A.push(new dA("contentLanguage",null,!0)),A.push(new dA("contentType",null,!0)),A.push(new dA("metadata","customMetadata",!0)),fi=A,fi}function yb(A,e){function t(){const r=A.bucket,n=A.fullPath,s=new vA(r,n);return e._makeStorageReference(s)}Object.defineProperty(A,"ref",{get:t})}function Cb(A,e,t){const r={};r.type="file";const n=t.length;for(let s=0;s<n;s++){const i=t[s];r[i.local]=i.xform(r,e[i.server])}return yb(r,A),r}function JB(A,e,t){const r=zB(e);return r===null?null:Cb(A,r,t)}function vb(A,e,t,r){const n=zB(e);if(n===null||!vu(n.downloadTokens))return null;const s=n.downloadTokens;if(s.length===0)return null;const i=encodeURIComponent;return s.split(",").map(l=>{const h=A.bucket,d=A.fullPath,p="/b/"+i(h)+"/o/"+i(d),y=Iu(p,t,r),_=GB({alt:"media",token:l});return y+_})[0]}function Eb(A,e){const t={},r=e.length;for(let n=0;n<r;n++){const s=e[n];s.writable&&(t[s.server]=A[s.local])}return JSON.stringify(t)}class ZB{constructor(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(A){if(!A)throw Cu()}function Ib(A,e){function t(r,n){const s=JB(A,n,e);return ew(s!==null),s}return t}function _b(A,e){function t(r,n){const s=JB(A,n,e);return ew(s!==null),vb(s,n,A.host,A._protocol)}return t}function Aw(A){function e(t,r){let n;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?n=kQ():n=HQ():t.getStatus()===402?n=LQ(A.bucket):t.getStatus()===403?n=NQ(A.path):n=r,n.status=t.getStatus(),n.serverResponse=r.serverResponse,n}return e}function Ub(A){const e=Aw(A);function t(r,n){let s=e(r,n);return r.getStatus()===404&&(s=PQ(A.path)),s.serverResponse=n.serverResponse,s}return t}function Qb(A,e,t){const r=e.fullServerUrl(),n=Iu(r,A.host,A._protocol),s="GET",i=A.maxOperationRetryTime,a=new ZB(n,s,_b(A,t),i);return a.errorHandler=Ub(e),a}function bb(A,e){return A&&A.contentType||e&&e.type()||"application/octet-stream"}function Fb(A,e,t){const r=Object.assign({},t);return r.fullPath=A.path,r.size=e.size(),r.contentType||(r.contentType=bb(null,e)),r}function Tb(A,e,t,r,n){const s=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let D="";for(let k=0;k<2;k++)D=D+Math.random().toString().slice(2);return D}const c=a();i["Content-Type"]="multipart/related; boundary="+c;const l=Fb(e,r,n),h=Eb(l,t),d="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,p=`\r
--`+c+"--",y=xt.getBlob(d,r,p);if(y===null)throw GQ();const _={name:l.fullPath},v=Iu(s,A.host,A._protocol),b="POST",x=A.maxUploadRetryTime,S=new ZB(v,b,Ib(A,t),x);return S.urlParams=_,S.headers=i,S.body=y.uploadData(),S.errorHandler=Aw(e),S}class xb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=fr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=fr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=fr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,n,s){if(this.sent_)throw Pn("cannot .send() more than once");if(er(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Pn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Pn("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw Pn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Pn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Sb extends xb{initXhr(){this.xhr_.responseType="text"}}function tw(){return new Sb}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(e,t){this._service=e,t instanceof vA?this._location=t:this._location=vA.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Er(e,t)}get root(){const e=new vA(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return qB(this._location.path)}get storage(){return this._service}get parent(){const e=pb(this._location.path);if(e===null)return null;const t=new vA(this._location.bucket,e);return new Er(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw XQ(e)}}function Rb(A,e,t){A._throwIfRoot("uploadBytes");const r=Tb(A.storage,A._location,YB(),new xt(e,!0),t);return A.storage.makeRequestWithTokens(r,tw).then(n=>({metadata:n,ref:A}))}function Db(A){A._throwIfRoot("getDownloadURL");const e=Qb(A.storage,A._location,YB());return A.storage.makeRequestWithTokens(e,tw).then(t=>{if(t===null)throw $Q();return t})}function Pb(A,e){const t=mb(A._location.path,e),r=new vA(A._location.bucket,t);return new Er(A.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lb(A){return/^[A-Za-z]+:\/\//.test(A)}function Hb(A,e){return new Er(A,e)}function rw(A,e){if(A instanceof _u){const t=A;if(t._bucket==null)throw jQ();const r=new Er(t,t._bucket);return e!=null?rw(r,e):r}else return e!==void 0?Pb(A,e):A}function kb(A,e){if(e&&Lb(e)){if(A instanceof _u)return Hb(A,e);throw $c("To use ref(service, url), the first argument must be a Storage instance.")}else return rw(A,e)}function _f(A,e){const t=e==null?void 0:e[KB];return t==null?null:vA.makeFromBucketSpec(t,A)}function Nb(A,e,t,r={}){A.host=`${e}:${t}`;const n=er(e);n&&(Bl(`https://${A.host}/b`),wl("Storage",!0)),A._isUsingEmulator=!0,A._protocol=n?"https":"http";const{mockUserToken:s}=r;s&&(A._overrideAuthToken=typeof s=="string"?s:Ep(s,A.app.options.projectId))}class _u{constructor(e,t,r,n,s,i=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=s,this._isUsingEmulator=i,this._bucket=null,this._host=VB,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=RQ,this._maxUploadRetryTime=DQ,this._requests=new Set,n!=null?this._bucket=vA.makeFromBucketSpec(n,this._host):this._bucket=_f(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vA.makeFromBucketSpec(this._url,e):this._bucket=_f(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){If("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){If("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}_getAuthToken(){return w(this,null,function*(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=yield e.getToken();if(t!==null)return t.accessToken}return null})}_getAppCheckToken(){return w(this,null,function*(){if(mA(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(yield e.getToken()).token:null})}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Er(this,e)}_makeRequest(e,t,r,n,s=!0){if(this._deleted)return new zQ(jB());{const i=ib(e,this._appId,r,n,t,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}makeRequestWithTokens(e,t){return w(this,null,function*(){const[r,n]=yield Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()})}}const Uf="@firebase/storage",Qf="0.13.13";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw="storage";function Ob(A,e,t){return A=Me(A),Rb(A,e,t)}function Mb(A){return A=Me(A),Db(A)}function Vb(A,e){return A=Me(A),kb(A,e)}function Kb(A=vl(),e){A=Me(A);const r=ko(A,nw).getImmediate({identifier:e}),n=yp("storage");return n&&jb(r,...n),r}function jb(A,e,t,r={}){Nb(A,e,t,r)}function Gb(A,{instanceIdentifier:e}){const t=A.getProvider("app").getImmediate(),r=A.getProvider("auth-internal"),n=A.getProvider("app-check-internal");return new _u(t,r,n,e,Ir)}function $b(){Br(new Gt(nw,Gb,"PUBLIC").setMultipleInstances(!0)),GA(Uf,Qf,""),GA(Uf,Qf,"esm2017")}$b();const Uu={apiKey:"AIzaSyBV22Jhml3A9EXEWUg8ZxlTkBng2bkxQPQ",authDomain:"beatmeter-baf5a.firebaseapp.com",projectId:"beatmeter-baf5a",storageBucket:"beatmeter-baf5a.firebasestorage.app",messagingSenderId:"111775710994",appId:"1:111775710994:web:4984cb3f26116535fdfdcb",measurementId:"G-2RDYS7W6Z0"},ra=Up(Uu),DA=mI(ra),te=mQ(ra,"(default)"),sw=Kb(ra);console.log("🌐 Using production Firebase services");console.log("� Firebase initialized");console.log("Project ID:",Uu.projectId);console.log("Auth domain:",Uu.authDomain);const iw=Object.freeze(Object.defineProperty({__proto__:null,app:ra,auth:DA,firestore:te,storage:sw},Symbol.toStringTag,{value:"Module"})),Wb="modulepreload",Xb=function(A){return"/"+A},bf={},ow=function(e,t,r){let n=Promise.resolve();if(t&&t.length>0){let i=function(l){return Promise.all(l.map(h=>Promise.resolve(h).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));n=i(t.map(l=>{if(l=Xb(l),l in bf)return;bf[l]=!0;const h=l.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":Wb,h||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),h)return new Promise((y,_)=>{p.addEventListener("load",y),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return n.then(i=>{for(const a of i||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function Ya(A={},e=!1){const t=be(je(be({bio:A.bio||"",musicCollection:A.musicCollection||[],rateLater:A.rateLater||[],followers:A.followers||[],following:A.following||[]},e?{profileSetupComplete:A.profileSetupComplete||!1}:A.profileSetupComplete!==void 0?{profileSetupComplete:A.profileSetupComplete}:{}),{createdAt:A.createdAt instanceof Object&&A.createdAt.constructor.name==="FieldValue"?A.createdAt:qA(),joinDate:A.joinDate instanceof Object&&A.joinDate.constructor.name==="FieldValue"?A.joinDate:qA()}),A);return A.profilePicture&&A.profilePicture!==""&&(t.profilePicture=A.profilePicture),t}function Io(A){if(Array.isArray(A))return A.map(Io).filter(e=>e!=null);if(A&&typeof A=="object"){if(A.constructor&&A.constructor.name==="FieldValue")return A;if(typeof window!="undefined"&&(A instanceof File||A instanceof Blob))return;const e={};for(const[t,r]of Object.entries(A))if(!(r===void 0||typeof r=="number"&&(isNaN(r)||!isFinite(r))||typeof r=="function"||typeof window!="undefined"&&(r instanceof File||r instanceof Blob))){if(r&&typeof r=="object"&&r.constructor&&r.constructor.name==="FieldValue"){e[t]=r;continue}if(r instanceof Date){e[t]=Oe.fromDate(r);continue}if(typeof r=="object"){const n=Io(r);n!=null&&(typeof n!="object"||Object.keys(n).length>0)&&(e[t]=n);continue}e[t]=r}return e}return A}function zb(A){return!(!A||typeof A!="string"||A.length===0||A.length>1500||A.includes("/")||A==="."||A===".."||/^__.*__$/.test(A))}function Rt(n){return w(this,arguments,function*(A,e={},t=!0,r=null){var a,c,l,h;if(!A)throw new Error("No user UID provided");if(console.log("[DEBUG] Validating UID:",A,"Type:",typeof A),typeof A!="string"||A.trim().length===0)throw new Error("Invalid UID: must be a non-empty string");if(!zb(A))throw new Error(`Invalid UID format for Firestore document ID: ${A}`);if(r){if(console.log("[DEBUG] Current Auth user:",r.uid),console.log("[DEBUG] Auth user authenticated:",!!r),r.uid!==A)throw new Error("UID mismatch: authenticated user UID does not match provided UID")}else console.warn("[DEBUG] No current user provided, skipping auth validation");const s=cA(te,"userprofiles",A);try{const d=yield IA(s);let p;if(!d.exists())p=Ya(je(be({},e),{createdAt:qA(),joinDate:qA()}),!0);else{const v=d.data(),i=e,{createdAt:b,joinDate:x}=i,S=Nh(i,["createdAt","joinDate"]);console.log("Existing user update - restOverrides:",S),console.log("Existing user update - profilePicture in restOverrides:",S.profilePicture),v.profileSetupComplete===void 0&&!S.profileSetupComplete&&(v.displayName||r&&r.displayName)&&(S.profileSetupComplete=!0),p=Ya(S,!1)}console.log("Pre-sanitization profileData:",p),console.log("Pre-sanitization profilePicture:",p.profilePicture);const y=Io(p);if(console.log("Post-sanitization profileData:",y),console.log("Post-sanitization profilePicture:",y.profilePicture),!y||typeof y!="object")throw new Error("Invalid profile data after sanitization");if(typeof window!="undefined"){console.log("=== FIRESTORE WRITE DEBUG ==="),console.log("Firestore UID:",A),console.log("Firestore instance:",te),te&&te._databaseId&&(console.log("Firestore projectId:",te._databaseId.projectId),console.log("Firestore database:",te._databaseId.database)),console.log("Firestore settings:",te._settings),console.log("Firestore app:",te.app.name),console.log("Firestore _delegate:",te._delegate);const v=((c=(a=te._settings)==null?void 0:a.host)==null?void 0:c.includes("localhost"))||((h=(l=te._settings)==null?void 0:l.host)==null?void 0:h.includes("127.0.0.1"))||te._emulatorOptions;console.log("Running in emulator:",v),v&&console.log("Emulator settings:",te._emulatorOptions||te._settings),console.log("UserDocRef path:",s.path),console.log("UserDocRef id:",s.id),console.log("UserDocRef parent path:",s.parent.path),console.log("Raw profile data:",JSON.stringify(p,null,2)),console.log("Sanitized profile data:",JSON.stringify(y,null,2)),console.log("Data size (bytes):",JSON.stringify(y).length);const b=Object.keys(y).filter(x=>x.startsWith("_")||x.includes(".")||x.includes("/")||/^\d/.test(x));b.length>0&&console.warn("Potentially problematic field names:",b),Object.entries(y).forEach(([x,S])=>{const D=Object.prototype.toString.call(S);console.log(`[FieldType] ${x}:`,S,"Type:",D),(D==="[object Function]"||D==="[object Symbol]"||typeof window!="undefined"&&(S instanceof File||S instanceof Blob))&&console.error(`[ERROR] Unsupported field type for ${x}:`,D)}),console.log("Skipping minimal document write test")}console.log("[setDoc] Attempting to write document with merge:",t),console.log("[setDoc] Document path:",s.path),console.log("[setDoc] Document data keys:",Object.keys(y)),yield ut(s,y,{merge:t}).then(()=>{console.log("[setDoc] Success: Document written to",s.path)}).catch(v=>{throw console.error("[setDoc] Direct catch:",v),console.error("[setDoc] Error code:",v.code),console.error("[setDoc] Error message:",v.message),console.error("[setDoc] Error details:",{name:v.name,code:v.code,message:v.message,stack:v.stack}),v}),console.log("[getDoc] Reading back document...");const _=yield IA(s);return _.exists()?console.log("[getDoc] Document data after write:",_.data()):console.warn("[getDoc] Document does not exist after write!"),console.log("User profile successfully created/updated:",A),p}catch(d){console.error("=== FIRESTORE ERROR DETAILS ==="),console.error("Error object:",d),console.error("Error name:",d.name),console.error("Error code:",d.code),console.error("Error message:",d.message),console.error("Error stack:",d.stack);let p,y;try{p=Ya(e),y=Io(p)}catch(v){console.error("Could not build profile data for error logging:",v)}y&&(console.error("Failed data payload:",JSON.stringify(y,null,2)),console.error("Data payload size:",JSON.stringify(y).length,"bytes")),(d.code==="invalid-argument"||d.message.includes("400"))&&(console.error("=== 400 BAD REQUEST DEBUG ==="),console.error("This is likely a data validation error. Common causes:"),console.error("1. Invalid field names (cannot start with numbers, contain dots)"),console.error("2. Unsupported data types (File, Blob, undefined, NaN)"),console.error("3. Invalid document ID format"),console.error("4. Firestore rules rejection"),y&&Object.entries(y).forEach(([v,b])=>{/^\d/.test(v)&&console.error(`❌ Field name starts with number: "${v}"`),(v.includes(".")||v.includes("/"))&&console.error(`❌ Field name contains invalid characters: "${v}"`),b==null&&console.error(`❌ Field has null/undefined value: "${v}"`),typeof b=="number"&&(isNaN(b)||!isFinite(b))&&console.error(`❌ Field has invalid number: "${v}" = ${b}`)}));const _=new Error(`Firestore write failed: ${d.message}`);throw _.originalError=d,_.uid=A,_.documentPath=s.path,y&&(_.dataPayload=y),_}})}function Ff(A){return w(this,null,function*(){if(!A||!A.uid)return null;const e=cA(te,"userprofiles",A.uid),t=yield IA(e),r=t.exists()?t.data():{};return be({uid:A.uid,email:A.email,displayName:A.displayName||"",photoURL:A.photoURL||""},r)})}function qb(){return w(this,null,function*(){var A,e,t,r;console.log("=== FIRESTORE DEBUG FUNCTION ===");try{console.log("Test 1: Firebase Configuration"),console.log("Firestore instance:",te),console.log("Project ID:",(A=te._databaseId)==null?void 0:A.projectId),console.log("Database:",(e=te._databaseId)==null?void 0:e.database),console.log(`
Test 2: Authentication Status`);const{auth:n}=yield ow(()=>w(null,null,function*(){const{auth:d}=yield Promise.resolve().then(()=>iw);return{auth:d}}),void 0);if(console.log("Auth instance:",n),console.log("Current user:",n.currentUser),console.log("User authenticated:",!!n.currentUser),console.log("User UID:",(t=n.currentUser)==null?void 0:t.uid),console.log("User email:",(r=n.currentUser)==null?void 0:r.email),!n.currentUser)return console.error("❌ No authenticated user found!"),{success:!1,error:"No authenticated user"};console.log(`
Test 3: Minimal Write Test`);const s=`debug-${Date.now()}`,i=cA(te,"userprofiles",s),a={test:!0,timestamp:qA(),message:"Debug test"};console.log("Writing minimal data:",a),yield ut(i,a),console.log("✅ Minimal write successful"),console.log(`
Test 4: Read Back Test`);const c=yield IA(i);c.exists()?console.log("✅ Read back successful:",c.data()):console.error("❌ Document not found after write"),console.log(`
Test 5: User UID Write Test`);const l=cA(te,"userprofiles",n.currentUser.uid),h={debugTest:!0,timestamp:qA(),uid:n.currentUser.uid};return console.log("Writing to user document:",h),yield ut(l,h,{merge:!0}),console.log("✅ User document write successful"),yield ut(i,{},{merge:!1}),{success:!0,message:"All tests passed"}}catch(n){return console.error("❌ Debug test failed:",n),console.error("Error code:",n.code),console.error("Error message:",n.message),console.error("Full error:",n),{success:!1,error:n.message,code:n.code,fullError:n}}})}function aw(){return w(this,null,function*(){console.log("=== QUICK CONNECTIVITY TEST ===");try{console.log("1. Testing basic Firestore reference...");const A=te._delegate||te;console.log("Firestore delegate:",A),console.log("2. Checking network status..."),typeof navigator!="undefined"&&console.log("Navigator online:",navigator.onLine),console.log("3. Testing document reference creation...");const e=cA(te,"userprofiles","connectivity-test");console.log("Document reference created:",e.path),console.log("4. Testing simple write with 5-second timeout...");const r=ut(e,{connectivityTest:!0}),n=new Promise((c,l)=>setTimeout(()=>l(new Error("TIMEOUT: Write took longer than 5 seconds")),5e3));yield Promise.race([r,n]),console.log("✅ Simple write successful"),console.log("5. Testing read back...");const s=IA(e),i=new Promise((c,l)=>setTimeout(()=>l(new Error("TIMEOUT: Read took longer than 5 seconds")),5e3)),a=yield Promise.race([s,i]);return a.exists()?console.log("✅ Read back successful:",a.data()):console.log("⚠️ Document not found after write"),yield ut(e,{},{merge:!1}),{success:!0,message:"All connectivity tests passed"}}catch(A){return console.error("❌ Connectivity test failed at step:",A.message),console.error("Full error:",A),A.message.includes("TIMEOUT")?(console.error("🔍 DIAGNOSIS: Firestore operations are timing out"),console.error("Possible causes:"),console.error("- Network connectivity issues"),console.error("- Firestore service is down"),console.error("- Incorrect project configuration"),console.error("- Firestore rules blocking access")):A.code==="permission-denied"?(console.error("🔍 DIAGNOSIS: Permission denied"),console.error("Check your Firestore security rules")):A.code==="unavailable"&&(console.error("🔍 DIAGNOSIS: Firestore service unavailable"),console.error("Check network connection and Firebase status")),{success:!1,error:A.message,code:A.code}}})}function Yb(A="Test bio from debug function"){return w(this,null,function*(){console.log("=== TESTING BIO UPDATE ===");try{const{auth:e}=yield ow(()=>w(null,null,function*(){const{auth:s}=yield Promise.resolve().then(()=>iw);return{auth:s}}),void 0);if(!e.currentUser)return console.error("❌ No authenticated user found"),{success:!1,error:"No authenticated user"};console.log("✅ Current user:",e.currentUser.uid),console.log(`🔧 Testing bio update with value: "${A}"`);const t={bio:A,profileSetupComplete:!0};console.log("📤 Calling createOrUpdateUserProfile with:",t),yield Rt(e.currentUser.uid,t,!0,e.currentUser),console.log("✅ Bio update completed successfully"),console.log("📖 Reading back document to verify...");const r=cA(te,"userprofiles",e.currentUser.uid),n=yield IA(r);if(n.exists()){const s=n.data();return console.log("📋 Current document data:",s),console.log("📝 Bio field value:",s.bio),console.log("📝 Bio field type:",typeof s.bio),s.bio===A?(console.log("✅ Bio update verification PASSED"),{success:!0,bio:s.bio}):(console.error("❌ Bio update verification FAILED"),console.error(`Expected: "${A}"`),console.error(`Found: "${s.bio}"`),{success:!1,expected:A,found:s.bio})}else return console.error("❌ User document not found after update"),{success:!1,error:"Document not found"}}catch(e){return console.error("❌ Bio update test failed:",e),{success:!1,error:e.message,fullError:e}}})}typeof window!="undefined"&&(window.debugFirestore=qb,window.quickConnectivityTest=aw,window.testBioUpdate=Yb);const cw=L.createContext();function Pe(){return L.useContext(cw)}function Jb({children:A}){const[e,t]=L.useState(null),[r,n]=L.useState(!0);function s(v,b,x){return w(this,null,function*(){const S=yield AE(DA,v,b);return yield Ka(S.user,{displayName:x}),S.user})}function i(v,b){return tE(DA,v,b)}function a(){return oE(DA)}function c(v){return eE(DA,v)}function l(){const v=new it;return QE(DA,v).then(b=>w(null,null,function*(){return b.user}))}function h(v){return w(this,null,function*(){if(!v)return null;try{return yield Rt(v.uid,{},!0,v),console.log("[ensureUserProfile] Successfully called createOrUpdateUserProfile for UID:",v.uid),v}catch(b){return console.error("[ensureUserProfile] Error ensuring user profile:",b),b&&b.stack&&console.error("[ensureUserProfile] Error stack:",b.stack),console.trace("[ensureUserProfile] Call stack trace"),v}})}L.useEffect(()=>{const v=setTimeout(()=>{n(!1)},15e3),b=iE(DA,x=>w(null,null,function*(){clearTimeout(v);try{if(x){yield h(x);const S=yield Ff(x);t(S)}else t(null)}catch(S){console.error("Error during auth state change:",S),t(null)}finally{n(!1)}}),()=>{n(!1)});return()=>{clearTimeout(v),b()}},[]);function d(v){return w(this,null,function*(){try{if(!e||!e.uid)throw new Error("No user is logged in");if(console.log("updateUserProfile called with:",v),v.displayName||v.profilePicture instanceof File){let x=e.photoURL;if(v.profilePicture&&v.profilePicture instanceof File){console.log("Uploading profile picture file to Firebase Storage...");const S=Vb(sw,`profilePictures/${e.uid}`),D=yield Ob(S,v.profilePicture);console.log("Upload successful:",D),x=yield Mb(S),console.log("Got download URL:",x),yield Ka(DA.currentUser,{photoURL:x}),console.log("Updated Auth profile with new photoURL"),v.profilePicture=x,console.log("Set userData.profilePicture to:",x)}v.displayName&&(yield Ka(DA.currentUser,{displayName:v.displayName}),console.log("Updated Auth profile with displayName:",v.displayName))}console.log("Calling createOrUpdateUserProfile with userData:",v),console.log("userData.profilePicture specifically:",v.profilePicture),yield Rt(e.uid,v,!0,e),console.log("createOrUpdateUserProfile completed successfully");const b=yield Ff(DA.currentUser);return console.log("Got merged profile:",b),t(b),!0}catch(b){throw console.error("Error updating profile:",b),b}})}function p(){return w(this,null,function*(){if(!e){console.log("No current user");return}console.log("Current user:",e.uid,e.email);try{return yield Rt(e.uid,{profileSetup:!1},!0,e),yield new Promise(v=>setTimeout(v,1e3)),console.log("User profile created/reset successfully!"),"Success!"}catch(v){return console.error("Error creating user profile:",v),"Error: "+v.message}})}function y(){return w(this,null,function*(){if(console.log("=== DEBUGGING PROFILE CREATION ==="),!e)return console.error("❌ No authenticated user found"),{success:!1,error:"No authenticated user"};console.log("✅ Current user:",{uid:e.uid,email:e.email,displayName:e.displayName,emailVerified:e.emailVerified});try{console.log(`
--- Test 1: Basic Connectivity ---`);const v=yield aw();if(console.log("Connectivity test result:",v),!v.success)return{success:!1,error:`Connectivity failed: ${v.error}`};console.log(`
--- Test 2: Minimal Profile Creation ---`);const b={bio:"Test bio",profileSetup:!0};return yield Rt(e.uid,b,!0,e),console.log("✅ Profile creation successful"),{success:!0,message:"Profile creation successful"}}catch(v){return console.error("❌ Profile creation failed:",v),v.message.includes("Authentication check failed")?{success:!1,error:"Authentication issue",details:v.message}:v.message.includes("400")||v.code==="invalid-argument"?{success:!1,error:"Data validation error",details:v.message}:v.message.includes("permission-denied")?{success:!1,error:"Permission denied - check Firestore rules",details:v.message}:v.message.includes("timeout")?{success:!1,error:"Timeout - connectivity issue",details:v.message}:{success:!1,error:"Unknown error",details:v.message}}})}typeof window!="undefined"&&(window.resetUserProfile=p,window.debugProfileCreation=y);const _={currentUser:e,signup:s,login:i,logout:a,resetPassword:c,googleSignIn:l,updateUserProfile:d};return f.jsx(cw.Provider,{value:_,children:!r&&A})}const EA=(t,...r)=>w(null,[t,...r],function*(A,e={}){const{timeoutMs:n=1e4,retry:s=!0,retryDelay:i=1e3,operationName:a="Firestore operation"}=e,c=new Promise((l,h)=>setTimeout(()=>h(new Error(`${a} timed out after ${n}ms`)),n));try{return console.log(`Starting ${a}`),yield Promise.race([A(),c])}catch(l){if(console.warn(`${a} failed or timed out:`,l.message),s){console.log(`Retrying ${a} after ${i}ms delay...`),yield new Promise(h=>setTimeout(h,i));try{return yield A()}catch(h){throw console.error(`${a} retry failed:`,h.message),h}}else throw l}}),Zb=(A,e="Firebase operation")=>{console.group(`Firebase Error in ${e}`),console.error(`Error name: ${A.name}`),console.error(`Error message: ${A.message}`),A.code&&console.error(`Firebase error code: ${A.code}`),A.customData&&console.error("Custom data:",A.customData),A.response&&console.error("Server response:",{status:A.response.status,statusText:A.response.statusText,data:A.response.data}),console.error("Stack trace:",A.stack),console.groupEnd()},eF="userprofiles",lw=(A,e=20)=>w(null,null,function*(){return EA(()=>w(null,null,function*(){const t=Jt(te,eF),r=A.toLowerCase(),n=cn(t,Mt("displayName",">=",A),Mt("displayName","<=",A+""),Us(e)),i=(yield Qs(n)).docs.map(d=>je(be({id:d.id},d.data()),{matchType:"displayName"}));if(i.length>=e)return i.slice(0,e);const a=cn(t,Us(e*3)),l=(yield Qs(a)).docs.map(d=>be({id:d.id},d.data())).filter(d=>{var _,v;const p=((_=d.displayName)==null?void 0:_.toLowerCase())||"",y=((v=d.bio)==null?void 0:v.toLowerCase())||"";return i.some(b=>b.id===d.id)?!1:p.includes(r)||y.includes(r)}).map(d=>je(be({},d),{matchType:"bio"})).slice(0,e-i.length);return[...i,...l].slice(0,e)}),{operationName:"Search Users"})}),AF="https://us-central1-beatmeter-baf5a.cloudfunctions.net/api";function _o(A){const e=A.startsWith("/")?A.slice(1):A;return`${AF}/${e}`.replace(/([^:]\/)\/+/,"$1")}const tF=()=>{const[A,e]=L.useState({users:[],music:[],loading:!1,error:null}),t=L.useCallback((i,...a)=>w(null,[i,...a],function*(n,s={}){const{includeUsers:c=!0,includeMusic:l=!0,userLimit:h=10,musicLimit:d=10}=s;if(!n||n.trim().length===0){e({users:[],music:[],loading:!1,error:null});return}e(p=>je(be({},p),{loading:!0,error:null}));try{const p=[];if(c?p.push(lw(n.trim(),h)):p.push(Promise.resolve([])),l){const v=fetch(_o(`/music/search?q=${encodeURIComponent(n)}&type=album&limit=${d}`)).then(b=>{if(!b.ok)throw new Error("Music search failed");return b.json()}).then(b=>b.albums||[]);p.push(v)}else p.push(Promise.resolve([]));const[y,_]=yield Promise.all(p);return e({users:y,music:_,loading:!1,error:null}),{users:y,music:_}}catch(p){throw console.error("Search error:",p),e(y=>je(be({},y),{loading:!1,error:"Search failed. Please try again."})),p}}),[]),r=L.useCallback(()=>{e({users:[],music:[],loading:!1,error:null})},[]);return je(be({},A),{search:t,clearResults:r})},rF=E.div`
  position: relative;
  flex: 1;
  max-width: 400px;
`,nF=E.input`
  width: 100%;
  padding: 8px 16px;
  border-radius: ${A=>A.theme.borderRadius.medium||"12px"};
  border: 1px solid ${A=>A.theme.colors.background.accent||"rgba(255,255,255,0.1)"};
  background: rgba(255,255,255,0.05);
  color: ${A=>A.theme.colors.text.primary||"#fff"};
  font-size: 0.9rem;
  transition: all 0.2s;
  outline: none;

  &:focus {
    border-color: rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.08);
  }

  &::placeholder {
    color: ${A=>A.theme.colors.text.secondary||"rgba(255,255,255,0.7)"};
  }
`,sF=E.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #232323;
  border-radius: ${A=>A.theme.borderRadius.medium||"12px"};
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
  z-index: 1000;
  margin-top: 4px;
  max-height: 400px;
  overflow-y: auto;
`,Tf=E.div`
  padding: 12px 0;
  
  &:not(:last-child) {
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
`,xf=E.div`
  padding: 8px 16px;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(255,255,255,0.6);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`,gi=E.div`
  padding: 12px 16px;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &:hover {
    background: rgba(255,255,255,0.05);
  }
`,Sf=E.img`
  width: 40px;
  height: 40px;
  border-radius: ${A=>A.$round?"50%":"4px"};
  object-fit: cover;
`,pi=E.div`
  flex: 1;
  min-width: 0;
`,mi=E.div`
  font-weight: 500;
  color: rgba(255,255,255,0.9);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ja=E.div`
  font-size: 0.8rem;
  color: rgba(255,255,255,0.6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,iF=E.button`
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
  color: ${A=>A.theme.colors.accent||"#1db954"};
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.2s;
  
  &:hover {
    background: rgba(255,255,255,0.05);
  }
`,oF=({value:A,onChange:e,onSubmit:t})=>{const[r,n]=L.useState(!1),[s,i]=L.useState(""),a=L.useRef(null),c=wA(),{currentUser:l}=Pe(),{users:h,music:d,loading:p,search:y}=tF();L.useEffect(()=>{const N=setTimeout(()=>{i(A)},300);return()=>clearTimeout(N)},[A]),L.useEffect(()=>{s.trim().length>=2?(y(s,{userLimit:3,musicLimit:3}),n(!0)):n(!1)},[s,y]),L.useEffect(()=>{const N=H=>{a.current&&!a.current.contains(H.target)&&n(!1)};return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[]);const _=N=>{e(N.target.value)},v=()=>{s.trim().length>=2&&n(!0)},b=N=>{c(`/profile/${N.displayName}`),n(!1),e("")},x=N=>{c(`/album/${N.id}`),n(!1),e("")},S=()=>{c(`/search?q=${encodeURIComponent(A)}`),n(!1),e("")},D=N=>{N.preventDefault(),A.trim()&&(c(`/search?q=${encodeURIComponent(A.trim())}`),n(!1),e(""))},k=h.length>0||d.length>0;return f.jsxs(rF,{ref:a,children:[f.jsx("form",{onSubmit:D,children:f.jsx(nF,{type:"search",placeholder:"Search...",value:A,onChange:_,onFocus:v})}),r&&s.trim().length>=2&&f.jsx(sF,{children:p?f.jsx(gi,{children:f.jsx(pi,{children:f.jsx(mi,{children:"Searching..."})})}):k?f.jsxs(f.Fragment,{children:[h.length>0&&f.jsxs(Tf,{children:[f.jsx(xf,{children:"Users"}),h.map(N=>f.jsxs(gi,{onClick:()=>b(N),children:[f.jsx(Sf,{src:N.profilePicture||"https://via.placeholder.com/40",alt:N.displayName,$round:!0}),f.jsxs(pi,{children:[f.jsx(mi,{children:N.displayName}),N.bio&&f.jsx(Ja,{children:N.bio})]})]},N.id))]}),d.length>0&&f.jsxs(Tf,{children:[f.jsx(xf,{children:"Music"}),d.slice(0,3).map(N=>{var H,U,m,C;return f.jsxs(gi,{onClick:()=>x(N),children:[f.jsx(Sf,{src:((U=(H=N.images)==null?void 0:H[2])==null?void 0:U.url)||N.imageUrl||"https://via.placeholder.com/40",alt:N.name}),f.jsxs(pi,{children:[f.jsx(mi,{children:N.name}),f.jsx(Ja,{children:((C=(m=N.artists)==null?void 0:m[0])==null?void 0:C.name)||N.artistName})]})]},N.id)})]}),f.jsxs(iF,{onClick:S,children:['Show all results for "',s,'"']})]}):f.jsx(gi,{children:f.jsxs(pi,{children:[f.jsx(mi,{children:"No results found"}),f.jsx(Ja,{children:"Try a different search term"})]})})})]})},uw=ml`
  from { opacity: 0; }
  to { opacity: 1; }
`,aF=E.nav`
  width: 100vw;
  left: 0;
  background: ${A=>A.theme.colors.background.secondary||"#222"};
  border-bottom: 1px solid ${A=>A.theme.colors.background.accent||"rgba(255,255,255,0.1)"};
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`,cF=E.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px ${A=>A.theme.spacing.xlarge||"32px"};
  position: relative;

  @media (max-width: 767px) {
    padding: 12px 12px;
  }
`,lF=E.div`
  display: flex;
  align-items: center;
  gap: ${A=>A.theme.spacing.large||"24px"};
  flex: 1;
`,uF=E(jt)`
  text-decoration: none;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;E.form`
  flex: 1;
  max-width: 400px;

  @media (max-width: 767px) {
    max-width: 180px;
  }
`;E.input`
  width: 100%;
  padding: 8px 16px;
  border-radius: ${A=>A.theme.borderRadius.medium||"12px"};
  border: 1px solid ${A=>A.theme.colors.background.accent||"rgba(255,255,255,0.1)"};
  background: rgba(255,255,255,0.05);
  color: ${A=>A.theme.colors.text.primary||"#fff"};
  font-size: 0.9rem;
  transition: all 0.2s;
  outline: none;

  &:focus {
    border-color: rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.08);
  }

  &::placeholder {
    color: ${A=>A.theme.colors.text.secondary||"rgba(255,255,255,0.7)"};
  }
`;const hF=E.div`
  display: flex;
  gap: ${A=>A.theme.spacing.large||"24px"};
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`,Kr=E(jt)`
  color: ${A=>A.theme.colors.text.secondary||"rgba(255,255,255,0.7)"};
  text-decoration: none;
  font-size: 0.95rem;
  transition: all 0.2s;
  padding: 4px 8px;
  border-radius: ${A=>A.theme.borderRadius.small||"8px"};

  &:hover {
    color: ${A=>A.theme.colors.text.primary||"#fff"};
    background: rgba(255,255,255,0.05);
  }
`,dF=E(Kr)`
  background: ${A=>A.theme.colors.background.accent||"rgba(255,255,255,0.1)"};
  padding: 8px 16px;
  border-radius: ${A=>A.theme.borderRadius.medium||"12px"};
  color: ${A=>A.theme.colors.text.primary||"#fff"};
  font-weight: 500;

  &:hover {
    background: rgba(255,255,255,0.15);
  }
`,fF=E.div`
  width: 1px;
  height: 20px;
  background: ${A=>A.theme.colors.background.accent||"rgba(255,255,255,0.1)"};
`,gF=E.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
  margin-left: 16px;

  span {
    display: block;
    width: 28px;
    height: 4px;
    background: #fff;
    border-radius: 2px;
    margin-bottom: 5px;
    transition: all 0.3s;

    &:last-child {
      width: 20px;
      margin-bottom: 0;
    }
  }

  ${A=>A.$isOpen&&gs`
    span:nth-child(1) {
      transform: translateY(9px) rotate(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform: translateY(-9px) rotate(-45deg);
      width: 28px;
    }
  `}

  @media (max-width: 767px) {
    display: flex;
  }
`,pF=E.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  z-index: 1050;
  animation: ${uw} 0.2s;
`,mF=E.div`
  position: fixed;
  top: 0;
  right: ${A=>A.open?"0":"-320px"};
  width: 280px;
  height: 100vh;
  background: ${A=>A.theme.colors.background.secondary||"#222"};
  box-shadow: ${A=>A.theme.shadows.medium||"0 4px 24px rgba(0,0,0,0.3)"};
  display: none;
  flex-direction: column;
  gap: 16px;
  padding: 48px 0 16px 0;
  z-index: 1200;
  border-top-left-radius: ${A=>A.theme.borderRadius.large||"16px"};
  border-bottom-left-radius: ${A=>A.theme.borderRadius.large||"16px"};
  transition: right 0.3s cubic-bezier(.4,0,.2,1);

  @media (max-width: 767px) {
    display: flex;
  }
`,jr=E(jt)`
  color: ${A=>A.theme.colors.text.primary||"#fff"};
  text-decoration: none;
  font-size: 1.1rem;
  padding: 14px 32px;
  border-radius: ${A=>A.theme.borderRadius.small||"8px"};
  transition: background 0.2s;
  text-align: left;
  margin: 0;
  display: block;

  &:hover {
    background: rgba(255,255,255,0.08);
  }
`,BF=E(jr)`
  background: ${A=>A.theme.colors.background.accent||"rgba(255,255,255,0.1)"};
  color: ${A=>A.theme.colors.text.primary||"#fff"};
  font-weight: 500;
  text-align: center;
  margin: 0 24px;
  border-radius: ${A=>A.theme.borderRadius.medium||"12px"};
  padding: 14px 0;
`,wF=E.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`,yF=E.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: 12px;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: box-shadow 0.2s;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${A=>A.theme.colors.background.accent||"rgba(255,255,255,0.1)"};
  }
`,CF=E.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${A=>A.theme.colors.background.accent||"rgba(255,255,255,0.1)"};
`,vF=E.span`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${A=>A.theme.colors.background.accent||"rgba(255,255,255,0.1)"};
  color: ${A=>A.theme.colors.text.primary||"#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.1rem;
  border: 2px solid ${A=>A.theme.colors.background.accent||"rgba(255,255,255,0.1)"};
`,EF=E.div`
  position: absolute;
  top: 48px;
  right: 0;
  min-width: 170px;
  background: #232323;
  border-radius: ${A=>A.theme.borderRadius.medium||"12px"};
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  z-index: 1300;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  animation: ${uw} 0.18s;

  @media (max-width: 767px) {
    top: 56px;
    right: 0;
    left: auto;
    min-width: 170px;
  }
`,Rf=E(jt)`
  color: ${A=>A.theme.colors.text.secondary||"rgba(255,255,255,0.7)"};
  text-decoration: none;
  padding: 12px 20px;
  font-size: 1rem;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
  border-radius: ${A=>A.theme.borderRadius.small||"8px"};
  outline: none;

  &:hover {
    background: rgba(255,255,255,0.07);
    color: ${A=>A.theme.colors.text.primary||"#fff"};
  }
`,IF=E.button`
  color: ${A=>A.isLogout?"#ff6b6b":A.theme.colors.text.secondary||"rgba(255,255,255,0.7)"};
  text-decoration: none;
  padding: 12px 20px;
  font-size: 1rem;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
  border-radius: ${A=>A.theme.borderRadius.small||"8px"};
  outline: none;
  font-weight: ${A=>A.isLogout?"500":"normal"};

  &:hover {
    background: rgba(255,255,255,0.07);
    color: ${A=>A.isLogout?"#ff6b6b":A.theme.colors.text.primary||"#fff"};
  }
`,_F=E.div`
  position: absolute;
  top: 16px;
  right: 24px;
  z-index: 1301;
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;function UF(){const{currentUser:A,logout:e}=Pe(),t=!!A,r=A||{},[n,s]=L.useState(""),[i,a]=L.useState(!1),[c,l]=L.useState(!1),h=L.useRef(null),d=wA(),p=r.avatarUrl||null,y=r.name?r.name.split(" ").map(x=>x[0]).join("").toUpperCase().slice(0,2):"U",_=x=>w(null,null,function*(){x.preventDefault(),l(!1);try{yield e(),d("/")}catch(S){console.error("Failed to sign out",S)}});L.useEffect(()=>{if(!c)return;function x(S){h.current&&!h.current.contains(S.target)&&l(!1)}return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[c]);const v=f.jsx(yF,{onClick:()=>l(x=>!x),"aria-label":"Open user menu",type:"button",children:p?f.jsx(CF,{src:p,alt:"User avatar"}):f.jsx(vF,{children:y})}),b=f.jsxs(EF,{ref:h,children:[f.jsx(Rf,{to:"/settings",onClick:()=>l(!1),children:"Settings"}),f.jsx(Rf,{to:"/edit-profile",onClick:()=>l(!1),children:"Edit Profile"}),f.jsx(IF,{isLogout:!0,onClick:_,children:"Log Out"})]});return f.jsx(aF,{children:f.jsxs(cF,{children:[f.jsxs(lF,{children:[f.jsx(uF,{to:"/",children:"beatmeter"}),f.jsx(oF,{value:n,onChange:s})]}),"        ",f.jsxs(gF,{onClick:()=>a(x=>!x),$isOpen:i,"aria-label":"Open navigation menu",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{})]}),"        ",f.jsxs(hF,{children:[f.jsx(Kr,{to:"/music",children:"Music"}),f.jsx(Kr,{to:"/lists",children:"Lists"}),t&&f.jsx(Kr,{to:"/collection",children:"My Collection"}),f.jsx(Kr,{to:"/profile",children:"Profile"}),f.jsx(fF,{}),t?f.jsxs(wF,{children:[v,c&&b]}):f.jsxs(f.Fragment,{children:[f.jsx(Kr,{to:"/login",children:"Sign In"}),f.jsx(dF,{to:"/create-account",children:"Create Account"})]})]}),i&&f.jsx(pF,{onClick:()=>a(!1)}),f.jsxs(mF,{open:i,children:[t&&f.jsxs(_F,{children:[v,c&&b]}),"          ",f.jsx(jr,{to:"/music",onClick:()=>a(!1),children:"Music"}),f.jsx(jr,{to:"/lists",onClick:()=>a(!1),children:"Lists"}),t&&f.jsx(jr,{to:"/collection",onClick:()=>a(!1),children:"My Collection"}),f.jsx(jr,{to:"/profile",onClick:()=>a(!1),children:"Profile"}),!t&&f.jsxs(f.Fragment,{children:[f.jsx(jr,{to:"/login",onClick:()=>a(!1),children:"Sign In"}),f.jsx(BF,{to:"/create-account",onClick:()=>a(!1),children:"Create Account"})]})]})]})})}const QF=E.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,bF=E.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;function FF(){return f.jsxs(QF,{children:[f.jsx(UF,{}),f.jsx(bF,{children:f.jsx(oC,{})})]})}const TF=E.div`
  position: relative;
  width: 100%;
  padding: ${A=>A.theme.spacing.medium} 0;
  overflow: hidden;
`,Df=E.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100px;
  pointer-events: none;
  z-index: 1;
  
  ${A=>A.left&&gs`
    left: 0;
    background: linear-gradient(to right, ${A.theme.colors.background.primary}cc, transparent);
  `}
  
  ${A=>A.right&&gs`
    right: 0;
    background: linear-gradient(to left, ${A.theme.colors.background.primary}cc, transparent);
  `}
`,xF=E.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  gap: ${A=>A.theme.spacing.large};
  padding: 0 ${A=>A.theme.spacing.xlarge};
  user-select: none;
  justify-content: flex-start;
  cursor: ${A=>A.isDragging?"grabbing":"grab"};
  
  &::-webkit-scrollbar {
    display: none;
  }
`,SF=E.div`
  display: flex;
  gap: ${A=>A.theme.spacing.large};
`,Pf=E.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  background: ${A=>A.theme.colors.surface.secondary}cc;
  color: ${A=>A.theme.colors.text.primary};
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  min-width: 48px;
  min-height: 48px;
  padding: 0;
  cursor: pointer;
  opacity: ${A=>A.show?.9:0};
  transition: all ${A=>A.theme.transitions.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${A=>A.theme.spacing.large};
  line-height: 1;
  box-shadow: ${A=>A.theme.shadows.small};
  aspect-ratio: 1;
  pointer-events: ${A=>A.show?"auto":"none"};
  visibility: ${A=>A.show?"visible":"hidden"};
  
  ${A=>A.left&&gs`
    left: ${A.theme.spacing.medium};
  `}
  
  ${A=>A.right&&gs`
    right: ${A.theme.spacing.medium};
  `}
  
  &:hover {
    opacity: ${A=>A.show?1:0};
    transform: translateY(-50%) scale(1.1);
    background: ${A=>A.theme.colors.surface.secondary}e6;
    box-shadow: ${A=>A.theme.shadows.medium};
  }
`;function Lf({items:A=[],renderItem:e}){const t=Ee.useMemo(()=>A?Array.isArray(A)?A:(console.warn("Carousel: items prop is not an array:",typeof A,A),[]):[],[A]);if(!e||typeof e!="function")return console.warn("Carousel: renderItem prop must be a function"),f.jsx("div",{children:"Carousel: Missing renderItem function"});const r=L.useRef(null),n=L.useRef(null),[s,i]=L.useState(!1),[a,c]=L.useState(0),[l,h]=L.useState(0),[d,p]=L.useState(!1),[y,_]=L.useState(!1),[v,b]=L.useState(!1),x=8,S=100,D=L.useCallback(F=>{const I=r.current.offsetWidth*.8;r.current.scrollBy({left:F==="right"?I:-I,behavior:"smooth"})},[]),k=F=>{i(!0),c(F.pageX-r.current.offsetLeft),h(r.current.scrollLeft),p(!1)},N=()=>{i(!1)},H=F=>{if(!s){const Ie=n.current.getBoundingClientRect(),_e=F.clientX-Ie.left;_(_e<S),b(_e>Ie.width-S);return}F.preventDefault();const I=F.pageX-r.current.offsetLeft,Ae=(I-a)*2;Math.abs(I-a)>x&&p(!0),r.current.scrollLeft=l-Ae},U=()=>{i(!1),_(!1),b(!1)},m=F=>{i(!0),c(F.touches[0].pageX-r.current.offsetLeft),h(r.current.scrollLeft),p(!1)},C=F=>{if(!s)return;const I=F.touches[0].pageX-r.current.offsetLeft,Ae=(I-a)*2;Math.abs(I-a)>x&&p(!0),r.current.scrollLeft=l-Ae},Q=()=>{i(!1)},T=F=>{try{return e(F,{dragged:d})}catch(I){return console.error("Carousel: Error rendering item:",I,F),f.jsx("div",{children:"Error rendering item"})}};return Array.isArray(t)?f.jsxs(TF,{ref:n,onMouseMove:H,onMouseLeave:U,children:[f.jsx(Df,{left:!0}),f.jsx(Df,{right:!0}),f.jsx(xF,{ref:r,isDragging:s,onMouseDown:k,onMouseUp:N,onMouseLeave:N,onTouchStart:m,onTouchMove:C,onTouchEnd:Q,children:f.jsx(SF,{children:t&&t.length>0?t.map((F,I)=>{if(!F&&F!==0)return console.warn("Carousel: Skipping null/undefined item at index:",I),null;const Ae=F.id||F.key||`carousel-item-${I}`;return f.jsx("div",{children:T(F)},Ae)}).filter(Boolean):f.jsx("div",{children:"Loading..."})})}),f.jsx(Pf,{left:!0,show:y,onClick:()=>D("left"),children:"←"}),f.jsx(Pf,{right:!0,show:v,onClick:()=>D("right"),children:"→"})]}):(console.error("Carousel: safeItems is not an array at render time:",t),f.jsx("div",{children:"Carousel: Data loading error"}))}const RF=E.div`
  display: flex;
  flex-direction: column;
  align-items: ${A=>A.variant==="grid"?"stretch":"center"};
  background: ${A=>A.variant==="grid"?"transparent":"none"};
  box-shadow: ${A=>A.variant==="grid"?"0 4px 12px rgba(0, 0, 0, 0.1)":"none"};
  border: none;
  border-radius: ${A=>A.variant==="grid"?"12px":A.theme.borderRadius.large||"16px"};
  margin: ${A=>A.variant==="grid"?"0":"0 12px"};
  padding: ${A=>(A.variant==="grid","0")};
  cursor: pointer;
  overflow: ${A=>A.variant==="grid"?"hidden":"visible"};
  transition: ${A=>A.variant==="grid"?"transform 0.3s, box-shadow 0.3s":"none"};
    
  ${A=>A.variant==="grid"&&`
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    }
  `}
`,DF=E.img`
  width: ${A=>A.variant==="grid"?"100%":"160px"};
  height: ${A=>A.variant==="grid"?"250px":"160px"};
  border-radius: ${A=>A.variant==="grid"?"0":A.theme.borderRadius.large||"16px"};
  box-shadow: ${A=>A.variant==="grid"?"none":A.hovered?"0 0 24px 4px #48BB78":"0 4px 16px 0 rgba(128, 90, 213, 0.15)"};
  transition: box-shadow 0.3s, transform 0.3s;
  object-fit: cover;
`,PF=E.div`
  margin-top: ${A=>A.variant==="grid"?"0":"12px"};
  padding: ${A=>A.variant==="grid"?"15px":"0"};
  text-align: ${A=>A.variant==="grid"?"left":"center"};
  width: 100%;
`,LF=E.h3`
  font-weight: ${A=>A.variant==="grid"?"600":"700"};
  color: ${A=>(A.variant==="grid",A.theme.colors.text.primary||"#fff")};
  font-size: ${A=>A.variant==="grid"?"1.1rem":"18px"};
  font-family: 'Inter', system-ui, sans-serif;
  text-shadow: ${A=>A.variant==="grid"?"none":A.hovered?"0 2px 8px #805AD5, 0 4px 16px #48BB78":"none"};
  letter-spacing: ${A=>A.variant==="grid"?"normal":"-0.5px"};
  transition: text-shadow 0.3s;
  margin: ${A=>A.variant==="grid"?"0 0 8px 0":"0"};
  overflow: ${A=>A.variant==="grid"?"hidden":"visible"};
  text-overflow: ${A=>A.variant==="grid"?"ellipsis":"unset"};
  white-space: ${A=>A.variant==="grid"?"nowrap":"normal"};
`,HF=E.p`
  color: ${A=>A.variant==="grid"?A.theme.colors.text.secondary||"rgba(255,255,255,0.7)":A.theme.colors.text.primary||"#fff"};
  font-size: ${A=>A.variant==="grid"?"0.9rem":"15px"};
  font-family: 'Inter', system-ui, sans-serif;
  text-shadow: ${A=>A.variant==="grid"?"none":A.hovered?"0 2px 8px #48BB78, 0 4px 16px #805AD5":"none"};
  opacity: 0.95;
  transition: text-shadow 0.3s;
  margin: ${A=>(A.variant==="grid","0")};
  overflow: ${A=>A.variant==="grid"?"hidden":"visible"};
  text-overflow: ${A=>A.variant==="grid"?"ellipsis":"unset"};
  white-space: ${A=>A.variant==="grid"?"nowrap":"normal"};
`;function Qu({album:A,onClick:e,variant:t="carousel"}){var d;const[r,n]=L.useState(!1),s=wA(),i=A.imageUrl||A.img||A.images&&((d=A.images[0])==null?void 0:d.url)||"https://via.placeholder.com/300",a=A.title||A.name,c=A.artistName||A.artist||(A.artists?A.artists.map(p=>p.name).join(", "):""),l=A.id,h=()=>{l?s(`/album/${l}`):console.warn("Album ID is missing, cannot navigate to details page."),e&&e()};return f.jsxs(RF,{variant:t,onClick:h,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[f.jsx(DF,{variant:t,src:i,alt:a,draggable:!1,hovered:r}),f.jsxs(PF,{variant:t,children:[f.jsx(LF,{variant:t,hovered:r,children:a}),f.jsx(HF,{variant:t,hovered:r,children:c})]})]})}const kF=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  box-shadow: none;
  border: none;
  margin: 0 12px;
  cursor: pointer;
`,NF=E.img`
  width: 160px;
  height: 160px;
  border-radius: ${A=>A.theme.borderRadius.large||"16px"};
  box-shadow: ${A=>A.hovered?"0 0 24px 4px #48BB78":"0 4px 16px 0 rgba(128, 90, 213, 0.15)"};
  transition: box-shadow 0.3s, transform 0.3s;
  object-fit: cover;
`,OF=E.div`
  margin-top: 12px;
  text-align: center;
`,MF=E.div`
  font-weight: 700;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
  font-size: 18px;
  font-family: 'Inter', system-ui, sans-serif;
  text-shadow: ${A=>A.hovered?"0 2px 8px #805AD5, 0 4px 16px #48BB78":"none"};
  letter-spacing: -0.5px;
  transition: text-shadow 0.3s;
`,VF=E.div`
  color: ${A=>A.theme.colors.text.primary||"#fff"};
  font-size: 15px;
  font-family: 'Inter', system-ui, sans-serif;
  text-shadow: ${A=>A.hovered?"0 2px 8px #48BB78, 0 4px 16px #805AD5":"none"};
  opacity: 0.95;
  transition: text-shadow 0.3s;
`;function KF({song:A,onClick:e}){const[t,r]=L.useState(!1);return f.jsxs(kF,{onClick:e,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[f.jsx(NF,{src:A.img,alt:A.title,draggable:!1,hovered:t}),f.jsxs(OF,{children:[f.jsx(MF,{hovered:t,children:A.title}),f.jsx(VF,{hovered:t,children:A.artist})]})]})}const Hf={getNewReleases:(A=20,e=0)=>w(null,null,function*(){return(yield Rn.get(`/api/music/new-releases?limit=${A}&offset=${e}`)).data}),searchMusic:(A,e="album",t=20,r=0)=>w(null,null,function*(){return(yield Rn.get(`/api/music/search?q=${encodeURIComponent(A)}&type=${e}&limit=${t}&offset=${r}`)).data}),getTopAlbums:()=>w(null,null,function*(){try{const e=(yield Rn.get("/api/music/top-albums")).data;return Array.isArray(e)?e:[]}catch(A){return console.error("Error fetching top albums:",A),[]}}),getTopSongs:()=>w(null,null,function*(){try{const e=(yield Rn.get("/api/music/top-songs")).data;return(Array.isArray(e)?e:[]).map(r=>je(be({},r),{albumId:r.albumId||r.id}))}catch(A){return console.error("Error fetching top songs:",A),[]}}),getAlbumById:A=>w(null,null,function*(){return(yield Rn.get(`/api/music/albums/${A}`)).data})},jF=ml`
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`,GF=ml`
  0% {
    background-position: 0 0, 0 50px, 50px -50px, -50px 0px;
  }
  100% {
    background-position: 100px 100px, 100px 150px, 150px 50px, 50px 100px;
  }
`,$F=E.div`
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6B46C1 0%, #805AD5 50%, #9F7AEA 100%);
  color: white;
  overflow: hidden;
  padding: 2rem;
`,WF=E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: linear-gradient(135deg, rgba(155, 89, 182, 0.7) 0%, rgba(142, 68, 173, 0.7) 100%);
  opacity: 1;
  pointer-events: none;
  animation: ${GF} 20s linear infinite;
`,XF=E.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  animation: ${jF} 1s ease-out;
`,zF=E.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #fff, #E9D8FD);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
`,qF=E.p`
  font-size: 1.25rem;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  opacity: 0.9;
`,YF=E.button`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  color: #6B46C1;
  background: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(107, 70, 193, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(107, 70, 193, 0.3);
    background: #F7FAFC;
  }
`,hw=E.h2`
  font-size: 2rem;
  font-weight: 600;
  margin: 2rem 0 1rem;
  padding-left: 1rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,kf=E.div`
  padding: 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  background: rgba(15, 10, 26, 0.13);
  border-radius: ${A=>A.theme.borderRadius.large||"24px"};
  box-shadow: 0 4px 24px rgba(72, 187, 120, 0.15), 0 4px 24px rgba(128, 90, 213, 0.15);
  border: none;
`,JF=E(hw)`
  margin-top: 3rem;
`,ZF=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.2rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,eT=E.div`
  color: #ff6b6b;
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
`,AT=E.div`
  min-height: 100vh;
  background: ${A=>A.theme.colors.background.primary||"rgba(22, 25, 27, 0.95)"};
`;function tT(){const[A,e]=L.useState([]),[t,r]=L.useState([]),[n,s]=L.useState(!0),[i,a]=L.useState(null);return L.useEffect(()=>{w(null,null,function*(){try{s(!0);const[l,h]=yield Promise.all([Hf.getTopAlbums(),Hf.getTopSongs()]),d=Array.isArray(l)?l:[],p=Array.isArray(h)?h:[];console.log("Albums data:",d),console.log("Songs data:",p),e(d),r(p),a(null)}catch(l){console.error("Error fetching data:",l),a("Failed to load music data. Please try again."),e([]),r([])}finally{s(!1)}})},[]),n?f.jsx(ZF,{children:"Loading..."}):i?f.jsx(eT,{children:i}):f.jsxs(AT,{children:[f.jsxs($F,{children:[f.jsx(WF,{}),f.jsxs(XF,{children:[f.jsx(zF,{children:"Discover. Rate. Share."}),f.jsxs(qF,{children:["Your personal music journey starts here.",f.jsx("br",{}),"Track your favorite tracks, rate your top albums,",f.jsx("br",{}),"and showcase your unique taste in music."]}),f.jsx(YF,{onClick:()=>{var c;return window.scrollTo({top:((c=document.querySelector(".carousel-container"))==null?void 0:c.offsetTop)||0,behavior:"smooth"})},children:"Explore Top Music"})]})]}),"      ",f.jsx(hw,{children:"Top Albums"}),"      ",f.jsx(kf,{children:f.jsx(Lf,{items:A,renderItem:(c,{dragged:l})=>f.jsx(Qu,{album:c,onClick:h=>{if(l){h.preventDefault(),h.stopPropagation();return}}},c.id)})}),f.jsx(JF,{children:"Top Songs"}),"      ",f.jsx(kf,{children:f.jsx(Lf,{items:t,renderItem:(c,{dragged:l})=>f.jsx(KF,{song:c,onClick:h=>{if(l){h.preventDefault(),h.stopPropagation();return}c.albumId?window.location.href=`/album/${c.albumId}`:console.log(`Song clicked: ${c.title}, but no album ID available`)}})})})]})}function rT({redirectOnIncomplete:A=!1,redirectPath:e="/profile-setup"}={}){const{currentUser:t}=Pe(),r=wA(),[n,s]=L.useState(!0),[i,a]=L.useState(!1);return L.useEffect(()=>{function c(){return w(this,null,function*(){if(!t){s(!1);return}try{const l=cA(te,"userprofiles",t.uid),h=yield IA(l);if(h.exists()){const d=h.data();let p;if(d.profileSetupComplete!==void 0)p=d.profileSetupComplete===!0;else if((d.displayName||(t==null?void 0:t.displayName))&&(d.bio!==void 0||d.profilePicture)){p=!0;try{const v=cA(te,"userprofiles",t.uid);yield ut(v,{profileSetupComplete:!0},{merge:!0})}catch(v){console.warn("Could not auto-migrate user profile status:",v)}}else p=!1;a(p),A&&!p&&r(e)}else a(!1),A&&r(e)}catch(l){console.error("Error checking profile status:",l),a(!1)}finally{s(!1)}})}c()},[t,r,A,e]),{loading:n,isProfileComplete:i}}const dw="follows",nT=(A,e)=>w(null,null,function*(){return EA(()=>w(null,null,function*(){if(A===e)throw new Error("Users cannot follow themselves");if(yield fw(A,e))throw new Error("Already following this user");const r={followerId:A,followingId:e,timestamp:qA()};return(yield wu(Jt(te,dw),r)).id}),{operationName:"Follow User"})}),fw=(A,e)=>w(null,null,function*(){return EA(()=>w(null,null,function*(){const t=Jt(te,dw),r=cn(t,Mt("followerId","==",A),Mt("followingId","==",e),Us(1));return!(yield Qs(r)).empty}),{operationName:"Check Is Following"})}),sT="activities",iT={FOLLOWED_USER:"followed_user"},gw=A=>w(null,null,function*(){return EA(()=>w(null,null,function*(){const e={userId:A.userId,actionType:A.actionType,targetId:A.targetId,userDisplayName:A.userDisplayName,additionalData:A.additionalData||{},timestamp:qA()};return(yield wu(Jt(te,sT),e)).id}),{operationName:"Create Activity"})}),oT=(A,e,t,r)=>w(null,null,function*(){return gw({userId:A,actionType:iT.FOLLOWED_USER,targetId:e,userDisplayName:t,additionalData:{followedUserDisplayName:r}})}),aT=(A,e,t,r)=>w(null,null,function*(){return EA(()=>w(null,null,function*(){const n=yield nT(A,e);return yield pw(e,A),yield oT(A,e,t,r),n}),{operationName:"Follow User"})}),cT=(A,e)=>w(null,null,function*(){return EA(()=>w(null,null,function*(){yield unfollowUserInDB(A,e),yield pw(e,A)}),{operationName:"Unfollow User"})}),pw=(A,e)=>w(null,null,function*(){return EA(()=>w(null,null,function*(){const[t,r]=yield Promise.all([getFollowerCount(A),getFollowingCount(e)]);yield Promise.all([Rt(A,{followerCount:t},!0,null),Rt(e,{followingCount:r},!0,null)])}),{operationName:"Update User Follower Counts"})}),lT=()=>{const{user:A}=Pe(),[e,t]=L.useState(!1),[r,n]=L.useState(null),s=L.useCallback((a,c)=>w(null,null,function*(){if(!A)throw new Error("User must be logged in to follow others");if(A.uid===a)throw new Error("Users cannot follow themselves");t(!0),n(null);try{return yield aT(A.uid,a,A.displayName||"Anonymous",c)}catch(l){throw n(l.message),l}finally{t(!1)}}),[A]),i=L.useCallback(a=>w(null,null,function*(){if(!A)throw new Error("User must be logged in to unfollow others");t(!0),n(null);try{yield cT(A.uid,a)}catch(c){throw n(c.message),c}finally{t(!1)}}),[A]);return{followUser:s,unfollowUser:i,loading:e,error:r}},Uo="posts",cs={REVIEW:"Reviews",NOTE:"Notes"},mw=A=>w(null,null,function*(){return EA(()=>w(null,null,function*(){const e={userId:A.userId,userDisplayName:A.userDisplayName,type:A.type,title:A.title,content:A.content,albumId:A.albumId||null,albumData:A.albumData||null,rating:A.rating||null,likesCount:0,commentsCount:0,timestamp:qA(),updatedAt:qA()},t=yield wu(Jt(te,Uo),e);return yield gw({userId:A.userId,actionType:A.type===cs.REVIEW?"new_review":"new_note",targetId:t.id,userDisplayName:A.userDisplayName,additionalData:{postTitle:A.title,postType:A.type,albumData:A.albumData}}),t.id}),{operationName:"Create Post"})}),uT=A=>w(null,null,function*(){return EA(()=>w(null,null,function*(){const e=cA(te,Uo,A);yield xQ(e)}),{operationName:"Delete Post"})}),hT=(A,e=20,t=null)=>w(null,null,function*(){return EA(()=>w(null,null,function*(){let r=cn(Jt(te,Uo),Mt("userId","==",A),yf("timestamp","desc"),Us(e));return t&&t!=="All"&&(r=cn(Jt(te,Uo),Mt("userId","==",A),Mt("type","==",t),yf("timestamp","desc"),Us(e))),(yield Qs(r)).docs.map(s=>be({id:s.id},s.data()))}),{operationName:"Get User Posts"})}),dT=(A,e="All")=>{const[t,r]=L.useState([]),[n,s]=L.useState(!1),[i,a]=L.useState(null),{currentUser:c}=Pe(),l=()=>w(null,null,function*(){if(!A){r([]),s(!1),a(null);return}s(!0),a(null);try{const y=yield hT(A,20,e==="All"?null:e);r(y||[]),a(null)}catch(p){console.error("Error fetching posts:",p),p.message&&p.message.includes("requires an index")?(console.warn("Firebase index missing for posts query. Posts will not load until index is created."),a(null),r([])):p.message&&!p.message.includes("No posts found")?(a("Failed to load posts"),r([])):(a(null),r([]))}finally{s(!1)}}),h=()=>{l()},d=p=>w(null,null,function*(){if(!c||!p)return console.error("Cannot delete post: missing user or post ID"),!1;try{return yield uT(p),r(y=>y.filter(_=>_.id!==p)),!0}catch(y){return console.error("Error deleting post:",y),a("Failed to delete post"),!1}});return L.useEffect(()=>{l()},[A,e]),{posts:t,loading:n,error:i,refreshPosts:h,deletePost:d}},fT=E.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,gT=E.div`
  background-color: ${A=>A.theme.colors.surface.primary||"#fff"};
  padding: 2rem;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`,pT=E.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${A=>A.theme.colors.text.secondary||"#888"};
`,mT=E.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: ${A=>A.theme.colors.text.primary||"#111"};
`,Nf=E.div`
  margin-bottom: 1.5rem;
`,Of=E.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${A=>A.theme.colors.text.primary||"#111"};
`,BT=E.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${A=>A.theme.colors.border||"#ddd"};
  border-radius: 4px;
  background-color: ${A=>A.theme.colors.surface.secondary||"#f9f9f9"};
  color: ${A=>A.theme.colors.text.primary||"#111"};
  
  &:focus {
    outline: none;
    border-color: ${A=>A.theme.colors.accent||"#007bff"};
  }
`,wT=E.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${A=>A.theme.colors.border||"#ddd"};
  border-radius: 4px;
  background-color: ${A=>A.theme.colors.surface.secondary||"#f9f9f9"};
  color: ${A=>A.theme.colors.text.primary||"#111"};
  resize: vertical;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: ${A=>A.theme.colors.accent||"#007bff"};
  }
`,yT=E.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: ${A=>A.theme.colors.accent||"#007bff"};
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover:not(:disabled) {
    background-color: #0069d9;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`,CT=E.div`
  color: #dc3545;
  margin-bottom: 1rem;
  text-align: center;
`,vT=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`,ET=E.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid ${A=>A.theme.colors.accent||"#007bff"};
`,IT=E.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid ${A=>A.theme.colors.accent||"#007bff"};
  color: ${A=>A.theme.colors.accent||"#007bff"};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${A=>A.theme.colors.accent||"#007bff"}20;
  }
`;function _T({isOpen:A,onClose:e,userData:t}){const{currentUser:r,updateUserProfile:n}=Pe(),[s,i]=L.useState(!1),[a,c]=L.useState(""),[l,h]=L.useState(""),[d,p]=L.useState(""),[y,_]=L.useState(null),[v,b]=L.useState(""),[x,S]=L.useState(!1),D=L.useRef(null);if(L.useEffect(()=>{A&&t&&(h(t.name||""),p(t.bio||""),b(t.profilePicture||"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZjVmNWY1Ii8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjI1IiBmaWxsPSIjY2NjY2NjIi8+CjxwYXRoIGQ9Ik00NSAxMjBjMC0xNi41NjkgMTMuNDMxLTMwIDMwLTMwczMwIDEzLjQzMSAzMCAzMHYxMEg0NXYtMTB6IiBmaWxsPSIjY2NjY2NjIi8+Cjwvc3ZnPgo="),S(t.isNewProfile||!1))},[A,t]),!A)return null;const k=U=>{const m=U.target.files[0];if(m){_(m);const C=new FileReader;C.onload=Q=>{b(Q.target.result)},C.readAsDataURL(m)}},N=()=>{D.current.click()},H=U=>w(null,null,function*(){if(U.preventDefault(),l.trim()===""){c("Display name cannot be empty");return}try{i(!0),c(""),yield n({displayName:l,bio:d,profilePicture:y,profileSetupComplete:!0}),e(!0)}catch(m){console.error("Error updating profile:",m),c("Failed to update profile. Please try again.")}finally{i(!1)}});return f.jsxs(fT,{onClick:U=>U.target===U.currentTarget&&e(),children:["      ",f.jsxs(gT,{children:[f.jsx(pT,{onClick:()=>e(),children:"×"}),f.jsx(mT,{children:x?"Complete Your Profile":"Edit Profile"}),x&&f.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"12px",borderRadius:"4px",marginBottom:"16px",border:"1px solid #e9ecef"},children:[f.jsx("p",{style:{margin:"0 0 8px 0",color:"#495057"},children:"Welcome to BeatMeter! Complete your profile to get started."}),f.jsxs("ul",{style:{margin:"0",paddingLeft:"20px",color:"#6c757d"},children:[f.jsx("li",{children:"Upload a profile picture"}),f.jsx("li",{children:"Add a bio to tell others about yourself"}),f.jsx("li",{children:"Customize your display name"})]})]}),f.jsxs("form",{onSubmit:H,children:[a&&f.jsx(CT,{children:a}),f.jsxs(vT,{children:[f.jsx(ET,{src:v,alt:"Profile Preview"}),f.jsx("input",{type:"file",accept:"image/*",onChange:k,ref:D,style:{display:"none"}}),f.jsx(IT,{type:"button",onClick:N,children:"Change Profile Picture"})]}),f.jsxs(Nf,{children:[f.jsx(Of,{htmlFor:"displayName",children:"Display Name"}),f.jsx(BT,{id:"displayName",type:"text",value:l,onChange:U=>h(U.target.value),placeholder:"Enter your display name",required:!0})]}),f.jsxs(Nf,{children:[f.jsx(Of,{htmlFor:"bio",children:"Bio"}),f.jsx(wT,{id:"bio",value:d,onChange:U=>p(U.target.value),placeholder:"Tell us a bit about yourself..."})]}),f.jsx(yT,{type:"submit",disabled:s,children:s?"Saving Changes...":"Save Changes"})]})]})]})}const UT=E.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,QT=E.div`
  background-color: ${A=>A.theme.colors.surface.primary||"#fff"};
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`,bT=E.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${A=>A.theme.colors.text.secondary||"#888"};
`,FT=E.h2`
  text-align: center;
  margin-bottom: 2rem;
  color: ${A=>A.theme.colors.text.primary||"#111"};
`,Mf=E.div`
  margin-bottom: 1.5rem;
`,Vf=E.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: ${A=>A.theme.colors.text.primary||"#111"};
`,TT=E.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${A=>A.theme.colors.border.primary||"#ddd"};
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: ${A=>A.theme.colors.primary.main||"#007bff"};
  }
`,xT=E.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${A=>A.theme.colors.border.primary||"#ddd"};
  border-radius: 5px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: ${A=>A.theme.colors.primary.main||"#007bff"};
  }
`;E.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${A=>A.theme.colors.border.primary||"#ddd"};
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: ${A=>A.theme.colors.primary.main||"#007bff"};
  }
`;const ST=E.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
`,Bw=E.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
`,RT=E(Bw)`
  background-color: ${A=>A.theme.colors.surface.secondary||"#f8f9fa"};
  color: ${A=>A.theme.colors.text.primary||"#111"};
  &:hover {
    background-color: ${A=>A.theme.colors.surface.tertiary||"#e9ecef"};
  }
`,DT=E(Bw)`
  background-color: ${A=>A.theme.colors.primary.main||"#007bff"};
  color: white;
  &:hover {
    background-color: ${A=>A.theme.colors.primary.dark||"#0056b3"};
  }
  &:disabled {
    background-color: ${A=>A.theme.colors.text.disabled||"#6c757d"};
    cursor: not-allowed;
  }
`,PT=E.div`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`,Kf=E.div`
  font-size: 0.875rem;
  color: ${A=>A.theme.colors.text.secondary||"#6c757d"};
  text-align: right;
  margin-top: 0.25rem;
`,LT=({isOpen:A,onClose:e,onPostCreated:t})=>{const{currentUser:r}=Pe(),[n,s]=L.useState({type:cs.NOTE,title:"",content:""}),[i,a]=L.useState(!1),[c,l]=L.useState(""),h=_=>{const{name:v,value:b}=_.target;s(x=>je(be({},x),{[v]:b})),l("")},d=()=>n.title.trim()?n.content.trim()?n.title.length>100?(l("Title must be 100 characters or less"),!1):n.content.length>2e3?(l("Content must be 2000 characters or less"),!1):!0:(l("Content is required"),!1):(l("Title is required"),!1),p=_=>w(null,null,function*(){if(_.preventDefault(),!!d()){a(!0),l("");try{const v={userId:r.uid,userDisplayName:r.displayName||"Anonymous",type:n.type,title:n.title.trim(),content:n.content.trim()},b=yield mw(v);console.log("Post created successfully with ID:",b),s({type:cs.NOTE,title:"",content:""}),t&&t(),e()}catch(v){console.error("Error creating post:",v),l("Failed to create post. Please try again.")}finally{a(!1)}}}),y=()=>{i||(s({type:cs.NOTE,title:"",content:""}),l(""),e())};return A?f.jsx(UT,{onClick:_=>_.target===_.currentTarget&&y(),children:f.jsxs(QT,{children:[f.jsx(bT,{onClick:y,disabled:i,children:"×"}),f.jsx(FT,{children:"Create New Note"}),f.jsxs("form",{onSubmit:p,children:[f.jsxs(Mf,{children:[f.jsx(Vf,{htmlFor:"title",children:"Title"}),f.jsx(TT,{id:"title",name:"title",type:"text",value:n.title,onChange:h,placeholder:"Enter a catchy title...",disabled:i,maxLength:100}),f.jsxs(Kf,{children:[n.title.length,"/100"]})]}),f.jsxs(Mf,{children:[f.jsx(Vf,{htmlFor:"content",children:"Content"}),f.jsx(xT,{id:"content",name:"content",value:n.content,onChange:h,placeholder:"What's on your mind?",disabled:i,maxLength:2e3}),f.jsxs(Kf,{children:[n.content.length,"/2000"]})]}),c&&f.jsx(PT,{children:c}),f.jsxs(ST,{children:[f.jsx(RT,{type:"button",onClick:y,disabled:i,children:"Cancel"}),f.jsx(DT,{type:"submit",disabled:i||!n.title.trim()||!n.content.trim(),children:i?"Creating...":"Create Note"})]})]})]})}):null},HT=E.div`
  background-color: ${A=>A.theme.colors.surface.primary||"#fff"};
  border: 1px solid ${A=>A.theme.colors.border.primary||"#e1e8ed"};
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`,kT=E.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`,NT=E.div`
  flex: 1;
`,OT=E.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${A=>A.$type==="Reviews"?"#e3f2fd":"#f3e5f5"};
  color: ${A=>A.$type==="Reviews"?"#1976d2":"#7b1fa2"};
  margin-bottom: 0.5rem;
`,MT=E.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${A=>A.theme.colors.text.primary||"#111"};
  line-height: 1.4;
`,VT=E.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: ${A=>A.theme.colors.text.secondary||"#6c757d"};
  margin-bottom: 1rem;
`,KT=E.span`
  font-weight: 500;
  color: ${A=>A.theme.colors.primary.main||"#007bff"};
`,jT=E.span``,GT=E.div`
  display: flex;
  gap: 0.5rem;
`,$T=E.button`
  background: none;
  border: none;
  color: ${A=>A.theme.colors.text.secondary||"#6c757d"};
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  font-size: 0.875rem;
  
  &:hover {
    background-color: ${A=>A.theme.colors.surface.secondary||"#f8f9fa"};
    color: ${A=>A.theme.colors.text.primary||"#111"};
  }

  &.delete {
    color: #dc3545;
    &:hover {
      background-color: #f8d7da;
    }
  }
`,WT=E.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${A=>A.theme.colors.text.primary||"#111"};
  white-space: pre-wrap;
  word-wrap: break-word;
`,XT=E.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${A=>A.theme.colors.border.secondary||"#f1f3f4"};
  font-size: 0.875rem;
  color: ${A=>A.theme.colors.text.secondary||"#6c757d"};
`,jf=E.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,zT=E.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,qT=E.div`
  background-color: ${A=>A.theme.colors.surface.primary||"#fff"};
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
`,YT=E.h3`
  margin: 0 0 1rem 0;
  color: ${A=>A.theme.colors.text.primary||"#111"};
`,JT=E.p`
  margin: 0 0 1.5rem 0;
  color: ${A=>A.theme.colors.text.secondary||"#6c757d"};
`,ZT=E.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`,Gf=E.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  
  &.cancel {
    background-color: ${A=>A.theme.colors.surface.secondary||"#f8f9fa"};
    color: ${A=>A.theme.colors.text.primary||"#111"};
  }
  
  &.delete {
    background-color: #dc3545;
    color: white;
  }
`,ex=({post:A,onDelete:e,showActions:t=!0})=>{const{currentUser:r}=Pe(),[n,s]=L.useState(!1),[i,a]=L.useState(!1),c=y=>{if(!y)return"Just now";const _=y.toDate?y.toDate():new Date(y),b=Math.abs(new Date-_),x=Math.ceil(b/(1e3*60*60*24));return x===1?"Yesterday":x<7?`${x} days ago`:_.toLocaleDateString()},l=r&&r.uid===A.userId,h=()=>{s(!0)},d=()=>w(null,null,function*(){a(!0);try{e&&(yield e(A.id))}catch(y){console.error("Error deleting post:",y)}finally{a(!1),s(!1)}}),p=()=>{s(!1)};return f.jsxs(f.Fragment,{children:[f.jsxs(HT,{children:[f.jsxs(kT,{children:[f.jsxs(NT,{children:[f.jsx(OT,{$type:A.type,children:A.type}),f.jsx(MT,{children:A.title}),f.jsxs(VT,{children:[f.jsx(KT,{children:A.userDisplayName||"Anonymous"}),f.jsx(jT,{children:c(A.timestamp)})]})]}),t&&l&&f.jsx(GT,{children:f.jsx($T,{className:"delete",onClick:h,title:"Delete post",children:"🗑️"})})]}),f.jsx(WT,{children:A.content}),f.jsxs(XT,{children:[f.jsxs(jf,{children:["❤️ ",A.likesCount||0]}),f.jsxs(jf,{children:["💬 ",A.commentsCount||0]})]})]}),n&&f.jsx(zT,{onClick:y=>y.target===y.currentTarget&&p(),children:f.jsxs(qT,{children:[f.jsx(YT,{children:"Delete Post"}),f.jsxs(JT,{children:['Are you sure you want to delete "',A.title,'"? This action cannot be undone.']}),f.jsxs(ZT,{children:[f.jsx(Gf,{className:"cancel",onClick:p,disabled:i,children:"Cancel"}),f.jsx(Gf,{className:"delete",onClick:d,disabled:i,children:i?"Deleting...":"Delete"})]})]})})]})},Ax=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${A=>A.theme.spacing.large||"20px"};
  background-color: ${A=>A.theme.colors.background.secondary||"#f4f4f4"};
`,tx=E.div`
  display: flex;
  align-items: center;
  margin-bottom: ${A=>A.theme.spacing.large||"20px"};
  width: 100%;
  max-width: 800px;
`,rx=E.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: ${A=>A.theme.spacing.medium||"20px"};
  object-fit: cover;
  border: 3px solid ${A=>A.theme.colors.accent||"#007bff"};
`,nx=E.div`
  display: flex;
  flex-direction: column;
`,sx=E.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: ${A=>A.theme.colors.text.primary||"#111"};
`,$f=E.p`
  font-size: 1rem;
  color: ${A=>A.theme.colors.text.secondary||"#555"};
  margin-top: ${A=>A.theme.spacing.small||"8px"};
`,Wf=E.button`
  padding: ${A=>A.theme.spacing.small} ${A=>A.theme.spacing.medium};
  background-color: ${A=>A.theme.colors.accent||"#007bff"};
  color: ${A=>A.theme.colors.text.primary||"white"};
  border: none;
  border-radius: ${A=>A.theme.borderRadius.small||"4px"};
  cursor: pointer;
  margin-top: ${A=>A.theme.spacing.medium||"10px"};
  font-weight: 600;
  
  &:hover {
    background-color: #0056b3;
  }
`,ix=E.button`
  padding: ${A=>A.theme.spacing.small} ${A=>A.theme.spacing.medium};
  color: ${A=>A.theme.colors.text.primary||"white"};
  border: none;
  border-radius: ${A=>A.theme.borderRadius.small||"4px"};
  cursor: pointer;
  margin-top: ${A=>A.theme.spacing.medium||"10px"};
  font-weight: 600;
  background-color: ${A=>A.$isFollowing?"#ccc":A.theme.colors.accent||"#28a745"};
  
  &:hover {
    background-color: ${A=>A.$isFollowing?"#bbb":"#1e7e34"};
  }
`,ox=E.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 400px;
  margin-bottom: ${A=>A.theme.spacing.large||"20px"};
  gap: ${A=>A.theme.spacing.medium||"16px"};
`,Xf=E.div`
  font-size: 1rem;
  color: ${A=>A.theme.colors.text.secondary||"#333"};
  text-align: center;
`,zf=E.div`
  width: 100%;
  max-width: 800px;
  margin-top: ${A=>A.theme.spacing.large||"20px"};
`,qf=E.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: ${A=>A.theme.spacing.medium||"15px"};
  color: ${A=>A.theme.colors.text.primary||"#222"};
`,Yf=E.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${A=>A.theme.spacing.medium||"20px"};
  gap: ${A=>A.theme.spacing.small||"8px"};
`,Ln=E.button`
  padding: ${A=>A.theme.spacing.small} ${A=>A.theme.spacing.medium};
  background-color: ${A=>A.$isActive?A.theme.colors.accent||"#007bff":A.theme.colors.background.primary||"#f0f0f0"};
  border: 1px solid ${A=>A.$isActive?A.theme.colors.accent||"#007bff":A.theme.colors.background.accent||"#ccc"};
  border-radius: ${A=>A.theme.borderRadius.small||"4px"};
  cursor: pointer;
  color: ${A=>A.$isActive?A.theme.colors.text.primary||"white":A.theme.colors.text.secondary||"#333"};
  
  &:hover {
    background-color: ${A=>A.$isActive?"#0056b3":"#e0e0e0"};
  }
`,ax=E.div`
  display: flex;
  flex-direction: column;
  gap: ${A=>A.theme.spacing.medium||"15px"};
`;E.div`
  padding: ${A=>A.theme.spacing.medium||"15px"};
  border: 1px solid ${A=>A.theme.colors.background.accent||"#ddd"};
  border-radius: ${A=>A.theme.borderRadius.medium||"8px"};
  background-color: ${A=>A.theme.colors.background.primary||"#fff"};
  box-shadow: ${A=>A.theme.shadows.small};
`;E.h3`
  margin: 0 0 ${A=>A.theme.spacing.small||"10px"} 0;
  font-size: 1.25rem;
  font-weight: 600;
  color: ${A=>A.theme.colors.text.primary||"#333"};
`;E.p`
  font-size: 1rem;
  color: ${A=>A.theme.colors.text.secondary||"#444"};
  line-height: 1.6;
`;E.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: ${A=>A.theme.spacing.medium||"15px"};
`;E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: ${A=>A.theme.spacing.small};
  background-color: ${A=>A.theme.colors.background.primary||"#fff"};
  border-radius: ${A=>A.theme.borderRadius.medium||"8px"};
  box-shadow: ${A=>A.theme.shadows.small};
`;E.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: ${A=>A.theme.borderRadius.small||"4px"};
  margin-bottom: ${A=>A.theme.spacing.small||"5px"};
`;E.h4`
  font-size: 0.9rem;
  color: ${A=>A.theme.colors.text.primary||"#333"};
  font-weight: 500;
`;const Jf=E.div`
  display: flex;
  flex-direction: column;
  gap: ${A=>A.theme.spacing.medium||"15px"};
`,Zf=E.div`
  display: flex;
  align-items: center;
  padding: ${A=>A.theme.spacing.medium||"15px"};
  border: 1px solid ${A=>A.theme.colors.background.accent||"#ddd"};
  border-radius: ${A=>A.theme.borderRadius.medium||"8px"};
  background-color: ${A=>A.theme.colors.background.primary||"#fff"};
  box-shadow: ${A=>A.theme.shadows.small};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: ${A=>A.theme.shadows.medium||"0 4px 8px rgba(0,0,0,0.1)"};
    transform: translateY(-2px);
  }
`,eg=E.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: ${A=>A.theme.borderRadius.small||"4px"};
  margin-right: ${A=>A.theme.spacing.medium||"15px"};
  flex-shrink: 0;
`,Ag=E.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,tg=E.h4`
  font-size: 1.1rem;
  color: ${A=>A.theme.colors.text.primary||"#333"};
  font-weight: 600;
  margin: 0 0 ${A=>A.theme.spacing.small||"5px"} 0;
`,rg=E.p`
  font-size: 0.95rem;
  color: ${A=>A.theme.colors.text.secondary||"#666"};
  margin: 0;
  font-weight: 400;
`;function ng(){const{username:A}=fp(),e=wA(),[t,r]=L.useState(null),[n,s]=L.useState("All"),[i,a]=L.useState("Grid"),{currentUser:c}=Pe(),[l,h]=L.useState(!1),[d,p]=L.useState(!1),[y,_]=L.useState(!1),{followUser:v,unfollowUser:b,loading:x,error:S}=lT(),[D,k]=L.useState(null),[N,H]=L.useState(0),U=()=>{H(W=>W+1)},m=L.useMemo(()=>A===(c==null?void 0:c.displayName),[A,c==null?void 0:c.displayName]);rT({redirectOnIncomplete:m,redirectPath:"/profile-setup"});const C=!!c,Q=(c==null?void 0:c.displayName)||"Guest",{posts:T,loading:F,error:I,refreshPosts:Ae,deletePost:Ie}=dT(D,n),_e=()=>w(null,null,function*(){if(!c||!D||!t){console.error("Missing required data for follow action:",{currentUser:!!c,targetUserId:D,userData:!!t});return}console.log("Starting follow action:",{action:t.isFollowing?"unfollow":"follow",currentUserId:c.uid,targetUserId:D,targetUsername:A});try{t.isFollowing?(console.log("Unfollowing user..."),yield b(D),console.log("Successfully unfollowed user"),r(W=>je(be({},W),{isFollowing:!1,followersCount:Math.max(0,W.followersCount-1)}))):(console.log("Following user..."),yield v(D,A),console.log("Successfully followed user"),r(W=>je(be({},W),{isFollowing:!0,followersCount:W.followersCount+1})))}catch(W){console.error("Error toggling follow status:",W)}});L.useEffect(()=>{if(!A&&C)e(`/profile/${c.displayName}`);else if(!A&&!C){r(null),e("/login");return}},[A,C,c,e]),L.useEffect(()=>{let W=!1;if(A){function le(){return w(this,null,function*(){try{if(W)return;console.log("Fetching profile data for:",A);const fe=Jt(te,"userprofiles"),Le=cn(fe,Mt("displayName","==",A)),xA=yield EA(()=>Qs(Le),{timeoutMs:15e3,operationName:`Fetch profile for ${A}`}),lA=c&&c.displayName===A;if(xA.empty)if(lA){const At=cA(te,"userprofiles",c.uid),xe=yield EA(()=>IA(At),{timeoutMs:1e4,operationName:`Fetch profile by UID for ${c.uid}`});if(xe.exists()){const pe=xe.data();!pe.displayName&&c.displayName&&(yield EA(()=>ut(At,{displayName:c.displayName},{merge:!0}),{timeoutMs:8e3,operationName:"Update displayName in profile"}),pe.displayName=c.displayName),console.log("User profile data from UID lookup:",pe),console.log("Profile picture from UID lookup:",pe.profilePicture),console.log("Current user photoURL (fallback):",c==null?void 0:c.photoURL);let MA=pe.profilePicture||(c==null?void 0:c.photoURL);console.log("Final profile picture URL (UID lookup):",MA),r({name:pe.displayName||c.displayName||"User",profilePicture:MA||"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZjVmNWY1Ii8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjI1IiBmaWxsPSIjY2NjY2NjIi8+CjxwYXRoIGQ9Ik00NSAxMjBjMC0xNi41NjkgMTMuNDMxLTMwIDMwLTMwczMwIDEzLjQzMSAzMCAzMHYxMEg0NXYtMTB6IiBmaWxsPSIjY2NjY2NjIi8+Cjwvc3ZnPgo=",bio:pe.bio||'Click "Edit Profile" to add your bio',actualBio:pe.bio||"",followersCount:pe.followerCount||0,followingCount:pe.followingCount||0,isFollowing:!1,loggedAlbums:pe.musicCollection||[],profileSetup:!!(pe.bio&&(pe.profilePicture||c!=null&&c.photoURL))}),pe.displayName&&pe.displayName!==A&&e(`/profile/${pe.displayName}`)}else console.log("No user profile found, showing empty profile view"),r({name:c.displayName||"User",profilePicture:c.photoURL||"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZjVmNWY1Ii8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjI1IiBmaWxsPSIjY2NjY2NjIi8+CjxwYXRoIGQ9Ik00NSAxMjBjMC0xNi41NjkgMTMuNDMxLTMwIDMwLTMwczMwIDEzLjQzMSAzMCAzMHYxMEg0NXYtMTB6IiBmaWxsPSIjY2NjY2NjIi8+Cjwvc3ZnPgo=",bio:'Click "Edit Profile" to add your bio',actualBio:"",followersCount:0,followingCount:0,isFollowing:!1,loggedAlbums:[],profileSetup:!1})}else console.error("User not found"),e("/");else{const At=xA.docs[0],xe=At.data();k(At.id);let pe=!1;if(c&&!lA)try{console.log("Checking follow status between:",c.uid,"and",At.id),pe=yield fw(c.uid,At.id),console.log("Follow status result:",pe)}catch(wn){console.error("Error checking follow status:",wn)}if(W)return;console.log("Setting user data:",{name:xe.displayName,bio:xe.bio,actualBio:xe.bio,followersCount:xe.followerCount||0,followingCount:xe.followingCount||0,isFollowing:pe}),console.log("Raw Firestore userData:",xe),console.log("Profile picture from Firestore:",xe.profilePicture),console.log("Current user photoURL:",c==null?void 0:c.photoURL);let MA=xe.profilePicture||(c==null?void 0:c.photoURL);console.log("Final profile picture URL:",MA),r({name:xe.displayName||"User",profilePicture:MA||"Artpop_cover.png",bio:xe.bio||(lA?'Click "Edit Profile" to add your bio':"No bio available"),actualBio:xe.bio||"",followersCount:xe.followerCount||0,followingCount:xe.followingCount||0,isFollowing:pe,loggedAlbums:xe.musicCollection||[],profileSetup:!!(xe.bio&&(xe.profilePicture||lA&&(c!=null&&c.photoURL)))})}}catch(fe){if(W)return;Zb(fe,"Fetching profile data"),r({name:"Error",profilePicture:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZjVmNWY1Ii8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjI1IiBmaWxsPSIjY2NjY2NjIi8+CjxwYXRoIGQ9Ik00NSAxMjBjMC0xNi41NjkgMTMuNDMxLTMwIDMwLTMwczMwIDEzLjQzMSAzMCAzMHYxMEg0NXYtMTB6IiBmaWxsPSIjY2NjY2NjIi8+Cjwvc3ZnPgo=",bio:"There was a problem loading this profile. Please try refreshing the page.",actualBio:"",followersCount:0,followingCount:0,isFollowing:!1,loggedAlbums:[],profileSetup:!1})}finally{_(!1)}})}le()}return()=>{W=!0}},[A,c==null?void 0:c.uid,c==null?void 0:c.displayName,N]);const Ce=()=>{Ae()},Y=W=>w(null,null,function*(){return yield Ie(W)});if(!t)return f.jsx("div",{children:"Loading..."});const re=C&&A===Q,Be=W=>{console.error("Profile picture failed to load:",W.target.src),console.log("Attempting to load fallback image..."),W.target.src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUwIiBoZWlnaHQ9IjE1MCIgdmlld0JveD0iMCAwIDE1MCAxNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTAiIGhlaWdodD0iMTUwIiBmaWxsPSIjZjVmNWY1Ii8+CjxjaXJjbGUgY3g9Ijc1IiBjeT0iNjAiIHI9IjI1IiBmaWxsPSIjY2NjY2NjIi8+CjxwYXRoIGQ9Ik00NSAxMjBjMC0xNi41NjkgMTMuNDMxLTMwIDMwLTMwczMwIDEzLjQzMSAzMCAzMHYxMEg0NXYtMTB6IiBmaWxsPSIjY2NjY2NjIi8+Cjwvc3ZnPgo="},Ze=()=>{console.log("Profile picture loaded successfully:",t==null?void 0:t.profilePicture)};return f.jsxs(Ax,{children:[f.jsxs(tx,{children:[f.jsx(rx,{src:t.profilePicture,alt:`${t.name}'s profile`,onError:Be,onLoad:Ze}),f.jsxs(nx,{children:["          ",f.jsx(sx,{children:t.name}),f.jsx($f,{children:t.bio}),re&&!t.profileSetup&&f.jsx($f,{style:{color:"#e67e22",fontStyle:"italic",marginTop:"5px"},children:'Your profile is not fully set up yet. Click "Edit Profile" to complete your profile.'}),re?f.jsx(Wf,{onClick:()=>h(!0),children:t.profileSetup?"Edit Profile":"Complete Profile Setup"}):f.jsxs(f.Fragment,{children:[f.jsx(ix,{$isFollowing:t.isFollowing,onClick:_e,disabled:x,children:x?"Loading...":t.isFollowing?"Following":"Follow"}),S&&f.jsxs("div",{style:{color:"#e74c3c",fontSize:"14px",marginTop:"5px"},children:["Error: ",S]})]})]})]}),f.jsxs(ox,{children:[f.jsxs(Xf,{children:["Followers: ",t.followersCount]}),f.jsxs(Xf,{children:["Following: ",t.followingCount]})]}),f.jsxs(zf,{children:[f.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[f.jsx(qf,{children:"Posts"}),re&&f.jsx(Wf,{onClick:()=>p(!0),children:"Create Note"})]}),f.jsxs(Yf,{children:[f.jsx(Ln,{$isActive:n==="All",onClick:()=>s("All"),children:"All"}),f.jsx(Ln,{$isActive:n==="Reviews",onClick:()=>s("Reviews"),children:"Reviews"}),f.jsx(Ln,{$isActive:n==="Notes",onClick:()=>s("Notes"),children:"Notes"})]}),f.jsx(ax,{children:F?f.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#777"},children:"Loading posts..."}):I?f.jsxs("div",{style:{textAlign:"center",padding:"20px",color:"#e74c3c"},children:["Error loading posts: ",I]}):T.length>0?T.map(W=>f.jsx(ex,{post:W,onDelete:Y,showActions:re},W.id)):f.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#777"},children:re?"You haven't created any posts yet. Click 'Create Note' to get started!":"This user hasn't created any posts yet."})})]}),"      ",f.jsxs(zf,{children:[f.jsx(qf,{children:"Music"}),"        ",f.jsxs(Yf,{children:["          ",f.jsx(Ln,{$isActive:i==="Grid",onClick:()=>a("Grid"),children:"Music"}),f.jsx(Ln,{$isActive:i==="List",onClick:()=>a("List"),children:"Want to Listen"})]}),t.loggedAlbums&&t.loggedAlbums.length>0?i==="Grid"?f.jsx(Jf,{children:t.loggedAlbums.map(W=>f.jsxs(Zf,{children:[f.jsx(eg,{src:W.cover,alt:W.title}),f.jsxs(Ag,{children:[f.jsx(tg,{children:W.title}),f.jsx(rg,{children:W.artist})]})]},W.id))}):f.jsx(Jf,{children:t.loggedAlbums.map(W=>f.jsxs(Zf,{children:[f.jsx(eg,{src:W.cover,alt:W.title}),f.jsxs(Ag,{children:[f.jsx(tg,{children:W.title}),f.jsx(rg,{children:W.artist})]})]},W.id))}):f.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#777"},children:re?"You haven't logged any music yet. Start adding albums to your collection!":"This user hasn't logged any music yet."})]}),l&&f.jsx(_T,{isOpen:l,onClose:W=>{h(!1),W&&(console.log("Refreshing profile data after modal close"),U())},userData:{name:t.name,bio:t.actualBio||"",profilePicture:t.profilePicture,isNewProfile:!t.profileSetup}}),d&&f.jsx(LT,{isOpen:d,onClose:()=>p(!1),onPostCreated:Ce})]})}/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Wc=function(A,e){return Wc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},Wc(A,e)};function OA(A,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Wc(A,e);function t(){this.constructor=A}A.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Xc=function(){return Xc=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Xc.apply(this,arguments)};function fA(A,e,t,r){function n(s){return s instanceof t?s:new t(function(i){i(s)})}return new(t||(t=Promise))(function(s,i){function a(h){try{l(r.next(h))}catch(d){i(d)}}function c(h){try{l(r.throw(h))}catch(d){i(d)}}function l(h){h.done?s(h.value):n(h.value).then(a,c)}l((r=r.apply(A,[])).next())})}function nA(A,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,n,s,i;return i={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function a(l){return function(h){return c([l,h])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,n&&(s=l[0]&2?n.return:l[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,l[1])).done)return s;switch(n=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,n=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){t.label=l[1];break}if(l[0]===6&&t.label<s[1]){t.label=s[1],s=l;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(l);break}s[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(A,t)}catch(h){l=[6,h],n=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Bi(A,e,t){if(arguments.length===2)for(var r=0,n=e.length,s;r<n;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return A.concat(s||e)}var Bt=function(){function A(e,t,r,n){this.left=e,this.top=t,this.width=r,this.height=n}return A.prototype.add=function(e,t,r,n){return new A(this.left+e,this.top+t,this.width+r,this.height+n)},A.fromClientRect=function(e,t){return new A(t.left+e.windowBounds.left,t.top+e.windowBounds.top,t.width,t.height)},A.fromDOMRectList=function(e,t){var r=Array.from(t).find(function(n){return n.width!==0});return r?new A(r.left+e.windowBounds.left,r.top+e.windowBounds.top,r.width,r.height):A.EMPTY},A.EMPTY=new A(0,0,0,0),A}(),na=function(A,e){return Bt.fromClientRect(A,e.getBoundingClientRect())},cx=function(A){var e=A.body,t=A.documentElement;if(!e||!t)throw new Error("Unable to get document size");var r=Math.max(Math.max(e.scrollWidth,t.scrollWidth),Math.max(e.offsetWidth,t.offsetWidth),Math.max(e.clientWidth,t.clientWidth)),n=Math.max(Math.max(e.scrollHeight,t.scrollHeight),Math.max(e.offsetHeight,t.offsetHeight),Math.max(e.clientHeight,t.clientHeight));return new Bt(0,0,r,n)},sa=function(A){for(var e=[],t=0,r=A.length;t<r;){var n=A.charCodeAt(t++);if(n>=55296&&n<=56319&&t<r){var s=A.charCodeAt(t++);(s&64512)===56320?e.push(((n&1023)<<10)+(s&1023)+65536):(e.push(n),t--)}else e.push(n)}return e},Re=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],n=-1,s="";++n<t;){var i=A[n];i<=65535?r.push(i):(i-=65536,r.push((i>>10)+55296,i%1024+56320)),(n+1===t||r.length>16384)&&(s+=String.fromCharCode.apply(String,r),r.length=0)}return s},sg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",lx=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(var wi=0;wi<sg.length;wi++)lx[sg.charCodeAt(wi)]=wi;var ig="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Wn=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(var yi=0;yi<ig.length;yi++)Wn[ig.charCodeAt(yi)]=yi;var ux=function(A){var e=A.length*.75,t=A.length,r,n=0,s,i,a,c;A[A.length-1]==="="&&(e--,A[A.length-2]==="="&&e--);var l=typeof ArrayBuffer!="undefined"&&typeof Uint8Array!="undefined"&&typeof Uint8Array.prototype.slice!="undefined"?new ArrayBuffer(e):new Array(e),h=Array.isArray(l)?l:new Uint8Array(l);for(r=0;r<t;r+=4)s=Wn[A.charCodeAt(r)],i=Wn[A.charCodeAt(r+1)],a=Wn[A.charCodeAt(r+2)],c=Wn[A.charCodeAt(r+3)],h[n++]=s<<2|i>>4,h[n++]=(i&15)<<4|a>>2,h[n++]=(a&3)<<6|c&63;return l},hx=function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t},dx=function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t},gr=5,bu=11,Za=2,fx=bu-gr,ww=65536>>gr,gx=1<<gr,ec=gx-1,px=1024>>gr,mx=ww+px,Bx=mx,wx=32,yx=Bx+wx,Cx=65536>>bu,vx=1<<fx,Ex=vx-1,og=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},Ix=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},_x=function(A,e){var t=ux(A),r=Array.isArray(t)?dx(t):new Uint32Array(t),n=Array.isArray(t)?hx(t):new Uint16Array(t),s=24,i=og(n,s/2,r[4]/2),a=r[5]===2?og(n,(s+r[4])/2):Ix(r,Math.ceil((s+r[4])/4));return new Ux(r[0],r[1],r[2],r[3],i,a)},Ux=function(){function A(e,t,r,n,s,i){this.initialValue=e,this.errorValue=t,this.highStart=r,this.highValueIndex=n,this.index=s,this.data=i}return A.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>gr],t=(t<<Za)+(e&ec),this.data[t];if(e<=65535)return t=this.index[ww+(e-55296>>gr)],t=(t<<Za)+(e&ec),this.data[t];if(e<this.highStart)return t=yx-Cx+(e>>bu),t=this.index[t],t+=e>>gr&Ex,t=this.index[t],t=(t<<Za)+(e&ec),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),ag="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Qx=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(var Ci=0;Ci<ag.length;Ci++)Qx[ag.charCodeAt(Ci)]=Ci;var bx="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",cg=50,Fx=1,yw=2,Cw=3,Tx=4,xx=5,lg=7,vw=8,ug=9,Dt=10,zc=11,hg=12,qc=13,Sx=14,Xn=15,Yc=16,vi=17,Hn=18,Rx=19,dg=20,Jc=21,kn=22,Ac=23,Rr=24,CA=25,zn=26,qn=27,Dr=28,Dx=29,lr=30,Px=31,Ei=32,Ii=33,Zc=34,el=35,Al=36,bs=37,tl=38,eo=39,Ao=40,tc=41,Ew=42,Lx=43,Hx=[9001,65288],Iw="!",se="×",_i="÷",rl=_x(bx),nt=[lr,Al],nl=[Fx,yw,Cw,xx],_w=[Dt,vw],fg=[qn,zn],kx=nl.concat(_w),gg=[tl,eo,Ao,Zc,el],Nx=[Xn,qc],Ox=function(A,e){e===void 0&&(e="strict");var t=[],r=[],n=[];return A.forEach(function(s,i){var a=rl.get(s);if(a>cg?(n.push(!0),a-=cg):n.push(!1),["normal","auto","loose"].indexOf(e)!==-1&&[8208,8211,12316,12448].indexOf(s)!==-1)return r.push(i),t.push(Yc);if(a===Tx||a===zc){if(i===0)return r.push(i),t.push(lr);var c=t[i-1];return kx.indexOf(c)===-1?(r.push(r[i-1]),t.push(c)):(r.push(i),t.push(lr))}if(r.push(i),a===Px)return t.push(e==="strict"?Jc:bs);if(a===Ew||a===Dx)return t.push(lr);if(a===Lx)return s>=131072&&s<=196605||s>=196608&&s<=262141?t.push(bs):t.push(lr);t.push(a)}),[r,t,n]},rc=function(A,e,t,r){var n=r[t];if(Array.isArray(A)?A.indexOf(n)!==-1:A===n)for(var s=t;s<=r.length;){s++;var i=r[s];if(i===e)return!0;if(i!==Dt)break}if(n===Dt)for(var s=t;s>0;){s--;var a=r[s];if(Array.isArray(A)?A.indexOf(a)!==-1:A===a)for(var c=t;c<=r.length;){c++;var i=r[c];if(i===e)return!0;if(i!==Dt)break}if(a!==Dt)break}return!1},pg=function(A,e){for(var t=A;t>=0;){var r=e[t];if(r===Dt)t--;else return r}return 0},Mx=function(A,e,t,r,n){if(t[r]===0)return se;var s=r-1;if(Array.isArray(n)&&n[s]===!0)return se;var i=s-1,a=s+1,c=e[s],l=i>=0?e[i]:0,h=e[a];if(c===yw&&h===Cw)return se;if(nl.indexOf(c)!==-1)return Iw;if(nl.indexOf(h)!==-1||_w.indexOf(h)!==-1)return se;if(pg(s,e)===vw)return _i;if(rl.get(A[s])===zc||(c===Ei||c===Ii)&&rl.get(A[a])===zc||c===lg||h===lg||c===ug||[Dt,qc,Xn].indexOf(c)===-1&&h===ug||[vi,Hn,Rx,Rr,Dr].indexOf(h)!==-1||pg(s,e)===kn||rc(Ac,kn,s,e)||rc([vi,Hn],Jc,s,e)||rc(hg,hg,s,e))return se;if(c===Dt)return _i;if(c===Ac||h===Ac)return se;if(h===Yc||c===Yc)return _i;if([qc,Xn,Jc].indexOf(h)!==-1||c===Sx||l===Al&&Nx.indexOf(c)!==-1||c===Dr&&h===Al||h===dg||nt.indexOf(h)!==-1&&c===CA||nt.indexOf(c)!==-1&&h===CA||c===qn&&[bs,Ei,Ii].indexOf(h)!==-1||[bs,Ei,Ii].indexOf(c)!==-1&&h===zn||nt.indexOf(c)!==-1&&fg.indexOf(h)!==-1||fg.indexOf(c)!==-1&&nt.indexOf(h)!==-1||[qn,zn].indexOf(c)!==-1&&(h===CA||[kn,Xn].indexOf(h)!==-1&&e[a+1]===CA)||[kn,Xn].indexOf(c)!==-1&&h===CA||c===CA&&[CA,Dr,Rr].indexOf(h)!==-1)return se;if([CA,Dr,Rr,vi,Hn].indexOf(h)!==-1)for(var d=s;d>=0;){var p=e[d];if(p===CA)return se;if([Dr,Rr].indexOf(p)!==-1)d--;else break}if([qn,zn].indexOf(h)!==-1)for(var d=[vi,Hn].indexOf(c)!==-1?i:s;d>=0;){var p=e[d];if(p===CA)return se;if([Dr,Rr].indexOf(p)!==-1)d--;else break}if(tl===c&&[tl,eo,Zc,el].indexOf(h)!==-1||[eo,Zc].indexOf(c)!==-1&&[eo,Ao].indexOf(h)!==-1||[Ao,el].indexOf(c)!==-1&&h===Ao||gg.indexOf(c)!==-1&&[dg,zn].indexOf(h)!==-1||gg.indexOf(h)!==-1&&c===qn||nt.indexOf(c)!==-1&&nt.indexOf(h)!==-1||c===Rr&&nt.indexOf(h)!==-1||nt.concat(CA).indexOf(c)!==-1&&h===kn&&Hx.indexOf(A[a])===-1||nt.concat(CA).indexOf(h)!==-1&&c===Hn)return se;if(c===tc&&h===tc){for(var y=t[s],_=1;y>0&&(y--,e[y]===tc);)_++;if(_%2!==0)return se}return c===Ei&&h===Ii?se:_i},Vx=function(A,e){e||(e={lineBreak:"normal",wordBreak:"normal"});var t=Ox(A,e.lineBreak),r=t[0],n=t[1],s=t[2];(e.wordBreak==="break-all"||e.wordBreak==="break-word")&&(n=n.map(function(a){return[CA,lr,Ew].indexOf(a)!==-1?bs:a}));var i=e.wordBreak==="keep-all"?s.map(function(a,c){return a&&A[c]>=19968&&A[c]<=40959}):void 0;return[r,n,i]},Kx=function(){function A(e,t,r,n){this.codePoints=e,this.required=t===Iw,this.start=r,this.end=n}return A.prototype.slice=function(){return Re.apply(void 0,this.codePoints.slice(this.start,this.end))},A}(),jx=function(A,e){var t=sa(A),r=Vx(t,e),n=r[0],s=r[1],i=r[2],a=t.length,c=0,l=0;return{next:function(){if(l>=a)return{done:!0,value:null};for(var h=se;l<a&&(h=Mx(t,s,n,++l,i))===se;);if(h!==se||l===a){var d=new Kx(t,h,c,l);return c=l,{value:d,done:!1}}return{done:!0,value:null}}}},Gx=1,$x=2,Ms=4,mg=8,Qo=10,Bg=47,ls=92,Wx=9,Xx=32,Ui=34,Nn=61,zx=35,qx=36,Yx=37,Qi=39,bi=40,On=41,Jx=95,pA=45,Zx=33,e1=60,A1=62,t1=64,r1=91,n1=93,s1=61,i1=123,Fi=63,o1=125,wg=124,a1=126,c1=128,yg=65533,nc=42,dr=43,l1=44,u1=58,h1=59,Fs=46,d1=0,f1=8,g1=11,p1=14,m1=31,B1=127,VA=-1,Uw=48,Qw=97,bw=101,w1=102,y1=117,C1=122,Fw=65,Tw=69,xw=70,v1=85,E1=90,iA=function(A){return A>=Uw&&A<=57},I1=function(A){return A>=55296&&A<=57343},Pr=function(A){return iA(A)||A>=Fw&&A<=xw||A>=Qw&&A<=w1},_1=function(A){return A>=Qw&&A<=C1},U1=function(A){return A>=Fw&&A<=E1},Q1=function(A){return _1(A)||U1(A)},b1=function(A){return A>=c1},Ti=function(A){return A===Qo||A===Wx||A===Xx},bo=function(A){return Q1(A)||b1(A)||A===Jx},Cg=function(A){return bo(A)||iA(A)||A===pA},F1=function(A){return A>=d1&&A<=f1||A===g1||A>=p1&&A<=m1||A===B1},Qt=function(A,e){return A!==ls?!1:e!==Qo},xi=function(A,e,t){return A===pA?bo(e)||Qt(e,t):bo(A)?!0:!!(A===ls&&Qt(A,e))},sc=function(A,e,t){return A===dr||A===pA?iA(e)?!0:e===Fs&&iA(t):iA(A===Fs?e:A)},T1=function(A){var e=0,t=1;(A[e]===dr||A[e]===pA)&&(A[e]===pA&&(t=-1),e++);for(var r=[];iA(A[e]);)r.push(A[e++]);var n=r.length?parseInt(Re.apply(void 0,r),10):0;A[e]===Fs&&e++;for(var s=[];iA(A[e]);)s.push(A[e++]);var i=s.length,a=i?parseInt(Re.apply(void 0,s),10):0;(A[e]===Tw||A[e]===bw)&&e++;var c=1;(A[e]===dr||A[e]===pA)&&(A[e]===pA&&(c=-1),e++);for(var l=[];iA(A[e]);)l.push(A[e++]);var h=l.length?parseInt(Re.apply(void 0,l),10):0;return t*(n+a*Math.pow(10,-i))*Math.pow(10,c*h)},x1={type:2},S1={type:3},R1={type:4},D1={type:13},P1={type:8},L1={type:21},H1={type:9},k1={type:10},N1={type:11},O1={type:12},M1={type:14},Si={type:23},V1={type:1},K1={type:25},j1={type:24},G1={type:26},$1={type:27},W1={type:28},X1={type:29},z1={type:31},sl={type:32},Sw=function(){function A(){this._value=[]}return A.prototype.write=function(e){this._value=this._value.concat(sa(e))},A.prototype.read=function(){for(var e=[],t=this.consumeToken();t!==sl;)e.push(t),t=this.consumeToken();return e},A.prototype.consumeToken=function(){var e=this.consumeCodePoint();switch(e){case Ui:return this.consumeStringToken(Ui);case zx:var t=this.peekCodePoint(0),r=this.peekCodePoint(1),n=this.peekCodePoint(2);if(Cg(t)||Qt(r,n)){var s=xi(t,r,n)?$x:Gx,i=this.consumeName();return{type:5,value:i,flags:s}}break;case qx:if(this.peekCodePoint(0)===Nn)return this.consumeCodePoint(),D1;break;case Qi:return this.consumeStringToken(Qi);case bi:return x1;case On:return S1;case nc:if(this.peekCodePoint(0)===Nn)return this.consumeCodePoint(),M1;break;case dr:if(sc(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case l1:return R1;case pA:var a=e,c=this.peekCodePoint(0),l=this.peekCodePoint(1);if(sc(a,c,l))return this.reconsumeCodePoint(e),this.consumeNumericToken();if(xi(a,c,l))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();if(c===pA&&l===A1)return this.consumeCodePoint(),this.consumeCodePoint(),j1;break;case Fs:if(sc(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case Bg:if(this.peekCodePoint(0)===nc)for(this.consumeCodePoint();;){var h=this.consumeCodePoint();if(h===nc&&(h=this.consumeCodePoint(),h===Bg))return this.consumeToken();if(h===VA)return this.consumeToken()}break;case u1:return G1;case h1:return $1;case e1:if(this.peekCodePoint(0)===Zx&&this.peekCodePoint(1)===pA&&this.peekCodePoint(2)===pA)return this.consumeCodePoint(),this.consumeCodePoint(),K1;break;case t1:var d=this.peekCodePoint(0),p=this.peekCodePoint(1),y=this.peekCodePoint(2);if(xi(d,p,y)){var i=this.consumeName();return{type:7,value:i}}break;case r1:return W1;case ls:if(Qt(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();break;case n1:return X1;case s1:if(this.peekCodePoint(0)===Nn)return this.consumeCodePoint(),P1;break;case i1:return N1;case o1:return O1;case y1:case v1:var _=this.peekCodePoint(0),v=this.peekCodePoint(1);return _===dr&&(Pr(v)||v===Fi)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(e),this.consumeIdentLikeToken();case wg:if(this.peekCodePoint(0)===Nn)return this.consumeCodePoint(),H1;if(this.peekCodePoint(0)===wg)return this.consumeCodePoint(),L1;break;case a1:if(this.peekCodePoint(0)===Nn)return this.consumeCodePoint(),k1;break;case VA:return sl}return Ti(e)?(this.consumeWhiteSpace(),z1):iA(e)?(this.reconsumeCodePoint(e),this.consumeNumericToken()):bo(e)?(this.reconsumeCodePoint(e),this.consumeIdentLikeToken()):{type:6,value:Re(e)}},A.prototype.consumeCodePoint=function(){var e=this._value.shift();return typeof e=="undefined"?-1:e},A.prototype.reconsumeCodePoint=function(e){this._value.unshift(e)},A.prototype.peekCodePoint=function(e){return e>=this._value.length?-1:this._value[e]},A.prototype.consumeUnicodeRangeToken=function(){for(var e=[],t=this.consumeCodePoint();Pr(t)&&e.length<6;)e.push(t),t=this.consumeCodePoint();for(var r=!1;t===Fi&&e.length<6;)e.push(t),t=this.consumeCodePoint(),r=!0;if(r){var n=parseInt(Re.apply(void 0,e.map(function(c){return c===Fi?Uw:c})),16),s=parseInt(Re.apply(void 0,e.map(function(c){return c===Fi?xw:c})),16);return{type:30,start:n,end:s}}var i=parseInt(Re.apply(void 0,e),16);if(this.peekCodePoint(0)===pA&&Pr(this.peekCodePoint(1))){this.consumeCodePoint(),t=this.consumeCodePoint();for(var a=[];Pr(t)&&a.length<6;)a.push(t),t=this.consumeCodePoint();var s=parseInt(Re.apply(void 0,a),16);return{type:30,start:i,end:s}}else return{type:30,start:i,end:i}},A.prototype.consumeIdentLikeToken=function(){var e=this.consumeName();return e.toLowerCase()==="url"&&this.peekCodePoint(0)===bi?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===bi?(this.consumeCodePoint(),{type:19,value:e}):{type:20,value:e}},A.prototype.consumeUrlToken=function(){var e=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===VA)return{type:22,value:""};var t=this.peekCodePoint(0);if(t===Qi||t===Ui){var r=this.consumeStringToken(this.consumeCodePoint());return r.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===VA||this.peekCodePoint(0)===On)?(this.consumeCodePoint(),{type:22,value:r.value}):(this.consumeBadUrlRemnants(),Si)}for(;;){var n=this.consumeCodePoint();if(n===VA||n===On)return{type:22,value:Re.apply(void 0,e)};if(Ti(n))return this.consumeWhiteSpace(),this.peekCodePoint(0)===VA||this.peekCodePoint(0)===On?(this.consumeCodePoint(),{type:22,value:Re.apply(void 0,e)}):(this.consumeBadUrlRemnants(),Si);if(n===Ui||n===Qi||n===bi||F1(n))return this.consumeBadUrlRemnants(),Si;if(n===ls)if(Qt(n,this.peekCodePoint(0)))e.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),Si;else e.push(n)}},A.prototype.consumeWhiteSpace=function(){for(;Ti(this.peekCodePoint(0));)this.consumeCodePoint()},A.prototype.consumeBadUrlRemnants=function(){for(;;){var e=this.consumeCodePoint();if(e===On||e===VA)return;Qt(e,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},A.prototype.consumeStringSlice=function(e){for(var t=5e4,r="";e>0;){var n=Math.min(t,e);r+=Re.apply(void 0,this._value.splice(0,n)),e-=n}return this._value.shift(),r},A.prototype.consumeStringToken=function(e){var t="",r=0;do{var n=this._value[r];if(n===VA||n===void 0||n===e)return t+=this.consumeStringSlice(r),{type:0,value:t};if(n===Qo)return this._value.splice(0,r),V1;if(n===ls){var s=this._value[r+1];s!==VA&&s!==void 0&&(s===Qo?(t+=this.consumeStringSlice(r),r=-1,this._value.shift()):Qt(n,s)&&(t+=this.consumeStringSlice(r),t+=Re(this.consumeEscapedCodePoint()),r=-1))}r++}while(!0)},A.prototype.consumeNumber=function(){var e=[],t=Ms,r=this.peekCodePoint(0);for((r===dr||r===pA)&&e.push(this.consumeCodePoint());iA(this.peekCodePoint(0));)e.push(this.consumeCodePoint());r=this.peekCodePoint(0);var n=this.peekCodePoint(1);if(r===Fs&&iA(n))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=mg;iA(this.peekCodePoint(0));)e.push(this.consumeCodePoint());r=this.peekCodePoint(0),n=this.peekCodePoint(1);var s=this.peekCodePoint(2);if((r===Tw||r===bw)&&((n===dr||n===pA)&&iA(s)||iA(n)))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=mg;iA(this.peekCodePoint(0));)e.push(this.consumeCodePoint());return[T1(e),t]},A.prototype.consumeNumericToken=function(){var e=this.consumeNumber(),t=e[0],r=e[1],n=this.peekCodePoint(0),s=this.peekCodePoint(1),i=this.peekCodePoint(2);if(xi(n,s,i)){var a=this.consumeName();return{type:15,number:t,flags:r,unit:a}}return n===Yx?(this.consumeCodePoint(),{type:16,number:t,flags:r}):{type:17,number:t,flags:r}},A.prototype.consumeEscapedCodePoint=function(){var e=this.consumeCodePoint();if(Pr(e)){for(var t=Re(e);Pr(this.peekCodePoint(0))&&t.length<6;)t+=Re(this.consumeCodePoint());Ti(this.peekCodePoint(0))&&this.consumeCodePoint();var r=parseInt(t,16);return r===0||I1(r)||r>1114111?yg:r}return e===VA?yg:e},A.prototype.consumeName=function(){for(var e="";;){var t=this.consumeCodePoint();if(Cg(t))e+=Re(t);else if(Qt(t,this.peekCodePoint(0)))e+=Re(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(t),e}},A}(),Rw=function(){function A(e){this._tokens=e}return A.create=function(e){var t=new Sw;return t.write(e),new A(t.read())},A.parseValue=function(e){return A.create(e).parseComponentValue()},A.parseValues=function(e){return A.create(e).parseComponentValues()},A.prototype.parseComponentValue=function(){for(var e=this.consumeToken();e.type===31;)e=this.consumeToken();if(e.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(e);var t=this.consumeComponentValue();do e=this.consumeToken();while(e.type===31);if(e.type===32)return t;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},A.prototype.parseComponentValues=function(){for(var e=[];;){var t=this.consumeComponentValue();if(t.type===32)return e;e.push(t),e.push()}},A.prototype.consumeComponentValue=function(){var e=this.consumeToken();switch(e.type){case 11:case 28:case 2:return this.consumeSimpleBlock(e.type);case 19:return this.consumeFunction(e)}return e},A.prototype.consumeSimpleBlock=function(e){for(var t={type:e,values:[]},r=this.consumeToken();;){if(r.type===32||Y1(r,e))return t;this.reconsumeToken(r),t.values.push(this.consumeComponentValue()),r=this.consumeToken()}},A.prototype.consumeFunction=function(e){for(var t={name:e.value,values:[],type:18};;){var r=this.consumeToken();if(r.type===32||r.type===3)return t;this.reconsumeToken(r),t.values.push(this.consumeComponentValue())}},A.prototype.consumeToken=function(){var e=this._tokens.shift();return typeof e=="undefined"?sl:e},A.prototype.reconsumeToken=function(e){this._tokens.unshift(e)},A}(),Vs=function(A){return A.type===15},Bn=function(A){return A.type===17},de=function(A){return A.type===20},q1=function(A){return A.type===0},il=function(A,e){return de(A)&&A.value===e},Dw=function(A){return A.type!==31},ln=function(A){return A.type!==31&&A.type!==4},ZA=function(A){var e=[],t=[];return A.forEach(function(r){if(r.type===4){if(t.length===0)throw new Error("Error parsing function args, zero tokens for arg");e.push(t),t=[];return}r.type!==31&&t.push(r)}),t.length&&e.push(t),e},Y1=function(A,e){return e===11&&A.type===12||e===28&&A.type===29?!0:e===2&&A.type===3},Zt=function(A){return A.type===17||A.type===15},ke=function(A){return A.type===16||Zt(A)},Pw=function(A){return A.length>1?[A[0],A[1]]:[A[0]]},Ye={type:17,number:0,flags:Ms},Fu={type:16,number:50,flags:Ms},Pt={type:16,number:100,flags:Ms},Yn=function(A,e,t){var r=A[0],n=A[1];return[me(r,e),me(typeof n!="undefined"?n:r,t)]},me=function(A,e){if(A.type===16)return A.number/100*e;if(Vs(A))switch(A.unit){case"rem":case"em":return 16*A.number;case"px":default:return A.number}return A.number},Lw="deg",Hw="grad",kw="rad",Nw="turn",ia={name:"angle",parse:function(A,e){if(e.type===15)switch(e.unit){case Lw:return Math.PI*e.number/180;case Hw:return Math.PI/200*e.number;case kw:return e.number;case Nw:return Math.PI*2*e.number}throw new Error("Unsupported angle type")}},Ow=function(A){return A.type===15&&(A.unit===Lw||A.unit===Hw||A.unit===kw||A.unit===Nw)},Mw=function(A){var e=A.filter(de).map(function(t){return t.value}).join(" ");switch(e){case"to bottom right":case"to right bottom":case"left top":case"top left":return[Ye,Ye];case"to top":case"bottom":return bA(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[Ye,Pt];case"to right":case"left":return bA(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[Pt,Pt];case"to bottom":case"top":return bA(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[Pt,Ye];case"to left":case"right":return bA(270)}return 0},bA=function(A){return Math.PI*A/180},Vt={name:"color",parse:function(A,e){if(e.type===18){var t=J1[e.name];if(typeof t=="undefined")throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return t(A,e.values)}if(e.type===5){if(e.value.length===3){var r=e.value.substring(0,1),n=e.value.substring(1,2),s=e.value.substring(2,3);return Lt(parseInt(r+r,16),parseInt(n+n,16),parseInt(s+s,16),1)}if(e.value.length===4){var r=e.value.substring(0,1),n=e.value.substring(1,2),s=e.value.substring(2,3),i=e.value.substring(3,4);return Lt(parseInt(r+r,16),parseInt(n+n,16),parseInt(s+s,16),parseInt(i+i,16)/255)}if(e.value.length===6){var r=e.value.substring(0,2),n=e.value.substring(2,4),s=e.value.substring(4,6);return Lt(parseInt(r,16),parseInt(n,16),parseInt(s,16),1)}if(e.value.length===8){var r=e.value.substring(0,2),n=e.value.substring(2,4),s=e.value.substring(4,6),i=e.value.substring(6,8);return Lt(parseInt(r,16),parseInt(n,16),parseInt(s,16),parseInt(i,16)/255)}}if(e.type===20){var a=ht[e.value.toUpperCase()];if(typeof a!="undefined")return a}return ht.TRANSPARENT}},Kt=function(A){return(255&A)===0},Ge=function(A){var e=255&A,t=255&A>>8,r=255&A>>16,n=255&A>>24;return e<255?"rgba("+n+","+r+","+t+","+e/255+")":"rgb("+n+","+r+","+t+")"},Lt=function(A,e,t,r){return(A<<24|e<<16|t<<8|Math.round(r*255)<<0)>>>0},vg=function(A,e){if(A.type===17)return A.number;if(A.type===16){var t=e===3?1:255;return e===3?A.number/100*t:Math.round(A.number/100*t)}return 0},Eg=function(A,e){var t=e.filter(ln);if(t.length===3){var r=t.map(vg),n=r[0],s=r[1],i=r[2];return Lt(n,s,i,1)}if(t.length===4){var a=t.map(vg),n=a[0],s=a[1],i=a[2],c=a[3];return Lt(n,s,i,c)}return 0};function ic(A,e,t){return t<0&&(t+=1),t>=1&&(t-=1),t<1/6?(e-A)*t*6+A:t<1/2?e:t<2/3?(e-A)*6*(2/3-t)+A:A}var Ig=function(A,e){var t=e.filter(ln),r=t[0],n=t[1],s=t[2],i=t[3],a=(r.type===17?bA(r.number):ia.parse(A,r))/(Math.PI*2),c=ke(n)?n.number/100:0,l=ke(s)?s.number/100:0,h=typeof i!="undefined"&&ke(i)?me(i,1):1;if(c===0)return Lt(l*255,l*255,l*255,1);var d=l<=.5?l*(c+1):l+c-l*c,p=l*2-d,y=ic(p,d,a+1/3),_=ic(p,d,a),v=ic(p,d,a-1/3);return Lt(y*255,_*255,v*255,h)},J1={hsl:Ig,hsla:Ig,rgb:Eg,rgba:Eg},us=function(A,e){return Vt.parse(A,Rw.create(e).parseComponentValue())},ht={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},Z1={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(t){if(de(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},eS={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},oa=function(A,e){var t=Vt.parse(A,e[0]),r=e[1];return r&&ke(r)?{color:t,stop:r}:{color:t,stop:null}},_g=function(A,e){var t=A[0],r=A[A.length-1];t.stop===null&&(t.stop=Ye),r.stop===null&&(r.stop=Pt);for(var n=[],s=0,i=0;i<A.length;i++){var a=A[i].stop;if(a!==null){var c=me(a,e);c>s?n.push(c):n.push(s),s=c}else n.push(null)}for(var l=null,i=0;i<n.length;i++){var h=n[i];if(h===null)l===null&&(l=i);else if(l!==null){for(var d=i-l,p=n[l-1],y=(h-p)/(d+1),_=1;_<=d;_++)n[l+_-1]=y*_;l=null}}return A.map(function(v,b){var x=v.color;return{color:x,stop:Math.max(Math.min(1,n[b]/e),0)}})},AS=function(A,e,t){var r=e/2,n=t/2,s=me(A[0],e)-r,i=n-me(A[1],t);return(Math.atan2(i,s)+Math.PI*2)%(Math.PI*2)},tS=function(A,e,t){var r=typeof A=="number"?A:AS(A,e,t),n=Math.abs(e*Math.sin(r))+Math.abs(t*Math.cos(r)),s=e/2,i=t/2,a=n/2,c=Math.sin(r-Math.PI/2)*a,l=Math.cos(r-Math.PI/2)*a;return[n,s-l,s+l,i-c,i+c]},RA=function(A,e){return Math.sqrt(A*A+e*e)},Ug=function(A,e,t,r,n){var s=[[0,0],[0,e],[A,0],[A,e]];return s.reduce(function(i,a){var c=a[0],l=a[1],h=RA(t-c,r-l);return(n?h<i.optimumDistance:h>i.optimumDistance)?{optimumCorner:a,optimumDistance:h}:i},{optimumDistance:n?1/0:-1/0,optimumCorner:null}).optimumCorner},rS=function(A,e,t,r,n){var s=0,i=0;switch(A.size){case 0:A.shape===0?s=i=Math.min(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===1&&(s=Math.min(Math.abs(e),Math.abs(e-r)),i=Math.min(Math.abs(t),Math.abs(t-n)));break;case 2:if(A.shape===0)s=i=Math.min(RA(e,t),RA(e,t-n),RA(e-r,t),RA(e-r,t-n));else if(A.shape===1){var a=Math.min(Math.abs(t),Math.abs(t-n))/Math.min(Math.abs(e),Math.abs(e-r)),c=Ug(r,n,e,t,!0),l=c[0],h=c[1];s=RA(l-e,(h-t)/a),i=a*s}break;case 1:A.shape===0?s=i=Math.max(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===1&&(s=Math.max(Math.abs(e),Math.abs(e-r)),i=Math.max(Math.abs(t),Math.abs(t-n)));break;case 3:if(A.shape===0)s=i=Math.max(RA(e,t),RA(e,t-n),RA(e-r,t),RA(e-r,t-n));else if(A.shape===1){var a=Math.max(Math.abs(t),Math.abs(t-n))/Math.max(Math.abs(e),Math.abs(e-r)),d=Ug(r,n,e,t,!1),l=d[0],h=d[1];s=RA(l-e,(h-t)/a),i=a*s}break}return Array.isArray(A.size)&&(s=me(A.size[0],r),i=A.size.length===2?me(A.size[1],n):s),[s,i]},nS=function(A,e){var t=bA(180),r=[];return ZA(e).forEach(function(n,s){if(s===0){var i=n[0];if(i.type===20&&i.value==="to"){t=Mw(n);return}else if(Ow(i)){t=ia.parse(A,i);return}}var a=oa(A,n);r.push(a)}),{angle:t,stops:r,type:1}},Ri=function(A,e){var t=bA(180),r=[];return ZA(e).forEach(function(n,s){if(s===0){var i=n[0];if(i.type===20&&["top","left","right","bottom"].indexOf(i.value)!==-1){t=Mw(n);return}else if(Ow(i)){t=(ia.parse(A,i)+bA(270))%bA(360);return}}var a=oa(A,n);r.push(a)}),{angle:t,stops:r,type:1}},sS=function(A,e){var t=bA(180),r=[],n=1,s=0,i=3,a=[];return ZA(e).forEach(function(c,l){var h=c[0];if(l===0){if(de(h)&&h.value==="linear"){n=1;return}else if(de(h)&&h.value==="radial"){n=2;return}}if(h.type===18){if(h.name==="from"){var d=Vt.parse(A,h.values[0]);r.push({stop:Ye,color:d})}else if(h.name==="to"){var d=Vt.parse(A,h.values[0]);r.push({stop:Pt,color:d})}else if(h.name==="color-stop"){var p=h.values.filter(ln);if(p.length===2){var d=Vt.parse(A,p[1]),y=p[0];Bn(y)&&r.push({stop:{type:16,number:y.number*100,flags:y.flags},color:d})}}}}),n===1?{angle:(t+bA(180))%bA(360),stops:r,type:n}:{size:i,shape:s,stops:r,position:a,type:n}},Vw="closest-side",Kw="farthest-side",jw="closest-corner",Gw="farthest-corner",$w="circle",Ww="ellipse",Xw="cover",zw="contain",iS=function(A,e){var t=0,r=3,n=[],s=[];return ZA(e).forEach(function(i,a){var c=!0;if(a===0){var l=!1;c=i.reduce(function(d,p){if(l)if(de(p))switch(p.value){case"center":return s.push(Fu),d;case"top":case"left":return s.push(Ye),d;case"right":case"bottom":return s.push(Pt),d}else(ke(p)||Zt(p))&&s.push(p);else if(de(p))switch(p.value){case $w:return t=0,!1;case Ww:return t=1,!1;case"at":return l=!0,!1;case Vw:return r=0,!1;case Xw:case Kw:return r=1,!1;case zw:case jw:return r=2,!1;case Gw:return r=3,!1}else if(Zt(p)||ke(p))return Array.isArray(r)||(r=[]),r.push(p),!1;return d},c)}if(c){var h=oa(A,i);n.push(h)}}),{size:r,shape:t,stops:n,position:s,type:2}},Di=function(A,e){var t=0,r=3,n=[],s=[];return ZA(e).forEach(function(i,a){var c=!0;if(a===0?c=i.reduce(function(h,d){if(de(d))switch(d.value){case"center":return s.push(Fu),!1;case"top":case"left":return s.push(Ye),!1;case"right":case"bottom":return s.push(Pt),!1}else if(ke(d)||Zt(d))return s.push(d),!1;return h},c):a===1&&(c=i.reduce(function(h,d){if(de(d))switch(d.value){case $w:return t=0,!1;case Ww:return t=1,!1;case zw:case Vw:return r=0,!1;case Kw:return r=1,!1;case jw:return r=2,!1;case Xw:case Gw:return r=3,!1}else if(Zt(d)||ke(d))return Array.isArray(r)||(r=[]),r.push(d),!1;return h},c)),c){var l=oa(A,i);n.push(l)}}),{size:r,shape:t,stops:n,position:s,type:2}},oS=function(A){return A.type===1},aS=function(A){return A.type===2},Tu={name:"image",parse:function(A,e){if(e.type===22){var t={url:e.value,type:0};return A.cache.addImage(e.value),t}if(e.type===18){var r=qw[e.name];if(typeof r=="undefined")throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return r(A,e.values)}throw new Error("Unsupported image type "+e.type)}};function cS(A){return!(A.type===20&&A.value==="none")&&(A.type!==18||!!qw[A.name])}var qw={"linear-gradient":nS,"-moz-linear-gradient":Ri,"-ms-linear-gradient":Ri,"-o-linear-gradient":Ri,"-webkit-linear-gradient":Ri,"radial-gradient":iS,"-moz-radial-gradient":Di,"-ms-radial-gradient":Di,"-o-radial-gradient":Di,"-webkit-radial-gradient":Di,"-webkit-gradient":sS},lS={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e.filter(function(r){return ln(r)&&cS(r)}).map(function(r){return Tu.parse(A,r)})}},uS={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(t){if(de(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},hS={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(A,e){return ZA(e).map(function(t){return t.filter(ke)}).map(Pw)}},dS={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(A,e){return ZA(e).map(function(t){return t.filter(de).map(function(r){return r.value}).join(" ")}).map(fS)}},fS=function(A){switch(A){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},Zr;(function(A){A.AUTO="auto",A.CONTAIN="contain",A.COVER="cover"})(Zr||(Zr={}));var gS={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(A,e){return ZA(e).map(function(t){return t.filter(pS)})}},pS=function(A){return de(A)||ke(A)},aa=function(A){return{name:"border-"+A+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},mS=aa("top"),BS=aa("right"),wS=aa("bottom"),yS=aa("left"),ca=function(A){return{name:"border-radius-"+A,initialValue:"0 0",prefix:!1,type:1,parse:function(e,t){return Pw(t.filter(ke))}}},CS=ca("top-left"),vS=ca("top-right"),ES=ca("bottom-right"),IS=ca("bottom-left"),la=function(A){return{name:"border-"+A+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(e,t){switch(t){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},_S=la("top"),US=la("right"),QS=la("bottom"),bS=la("left"),ua=function(A){return{name:"border-"+A+"-width",initialValue:"0",type:0,prefix:!1,parse:function(e,t){return Vs(t)?t.number:0}}},FS=ua("top"),TS=ua("right"),xS=ua("bottom"),SS=ua("left"),RS={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},DS={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(A,e){switch(e){case"rtl":return 1;case"ltr":default:return 0}}},PS={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(A,e){return e.filter(de).reduce(function(t,r){return t|LS(r.value)},0)}},LS=function(A){switch(A){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},HS={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},kS={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(A,e){return e.type===20&&e.value==="normal"?0:e.type===17||e.type===15?e.number:0}},Fo;(function(A){A.NORMAL="normal",A.STRICT="strict"})(Fo||(Fo={}));var NS={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"strict":return Fo.STRICT;case"normal":default:return Fo.NORMAL}}},OS={name:"line-height",initialValue:"normal",prefix:!1,type:4},Qg=function(A,e){return de(A)&&A.value==="normal"?1.2*e:A.type===17?e*A.number:ke(A)?me(A,e):e},MS={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(A,e){return e.type===20&&e.value==="none"?null:Tu.parse(A,e)}},VS={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(A,e){switch(e){case"inside":return 0;case"outside":default:return 1}}},ol={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},ha=function(A){return{name:"margin-"+A,initialValue:"0",prefix:!1,type:4}},KS=ha("top"),jS=ha("right"),GS=ha("bottom"),$S=ha("left"),WS={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(A,e){return e.filter(de).map(function(t){switch(t.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},XS={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-word":return"break-word";case"normal":default:return"normal"}}},da=function(A){return{name:"padding-"+A,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},zS=da("top"),qS=da("right"),YS=da("bottom"),JS=da("left"),ZS={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(A,e){switch(e){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},eR={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(A,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},AR={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.length===1&&il(e[0],"none")?[]:ZA(e).map(function(t){for(var r={color:ht.TRANSPARENT,offsetX:Ye,offsetY:Ye,blur:Ye},n=0,s=0;s<t.length;s++){var i=t[s];Zt(i)?(n===0?r.offsetX=i:n===1?r.offsetY=i:r.blur=i,n++):r.color=Vt.parse(A,i)}return r})}},tR={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},rR={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(A,e){if(e.type===20&&e.value==="none")return null;if(e.type===18){var t=iR[e.name];if(typeof t=="undefined")throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return t(e.values)}return null}},nR=function(A){var e=A.filter(function(t){return t.type===17}).map(function(t){return t.number});return e.length===6?e:null},sR=function(A){var e=A.filter(function(c){return c.type===17}).map(function(c){return c.number}),t=e[0],r=e[1];e[2],e[3];var n=e[4],s=e[5];e[6],e[7],e[8],e[9],e[10],e[11];var i=e[12],a=e[13];return e[14],e[15],e.length===16?[t,r,n,s,i,a]:null},iR={matrix:nR,matrix3d:sR},bg={type:16,number:50,flags:Ms},oR=[bg,bg],aR={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(A,e){var t=e.filter(ke);return t.length!==2?oR:[t[0],t[1]]}},cR={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},hs;(function(A){A.NORMAL="normal",A.BREAK_ALL="break-all",A.KEEP_ALL="keep-all"})(hs||(hs={}));var lR={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-all":return hs.BREAK_ALL;case"keep-all":return hs.KEEP_ALL;case"normal":default:return hs.NORMAL}}},uR={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(A,e){if(e.type===20)return{auto:!0,order:0};if(Bn(e))return{auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},Yw={name:"time",parse:function(A,e){if(e.type===15)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")}},hR={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(A,e){return Bn(e)?e.number:1}},dR={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},fR={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(A,e){return e.filter(de).map(function(t){switch(t.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(t){return t!==0})}},gR={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(A,e){var t=[],r=[];return e.forEach(function(n){switch(n.type){case 20:case 0:t.push(n.value);break;case 17:t.push(n.number.toString());break;case 4:r.push(t.join(" ")),t.length=0;break}}),t.length&&r.push(t.join(" ")),r.map(function(n){return n.indexOf(" ")===-1?n:"'"+n+"'"})}},pR={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},mR={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(A,e){if(Bn(e))return e.number;if(de(e))switch(e.value){case"bold":return 700;case"normal":default:return 400}return 400}},BR={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.filter(de).map(function(t){return t.value})}},wR={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},Ve=function(A,e){return(A&e)!==0},yR={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e}},CR={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;for(var r=[],n=e.filter(Dw),s=0;s<n.length;s++){var i=n[s],a=n[s+1];if(i.type===20){var c=a&&Bn(a)?a.number:1;r.push({counter:i.value,increment:c})}}return r}},vR={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return[];for(var t=[],r=e.filter(Dw),n=0;n<r.length;n++){var s=r[n],i=r[n+1];if(de(s)&&s.value!=="none"){var a=i&&Bn(i)?i.number:0;t.push({counter:s.value,reset:a})}}return t}},ER={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(A,e){return e.filter(Vs).map(function(t){return Yw.parse(A,t)})}},IR={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;var r=[],n=e.filter(q1);if(n.length%2!==0)return null;for(var s=0;s<n.length;s+=2){var i=n[s].value,a=n[s+1].value;r.push({open:i,close:a})}return r}},Fg=function(A,e,t){if(!A)return"";var r=A[Math.min(e,A.length-1)];return r?t?r.open:r.close:""},_R={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.length===1&&il(e[0],"none")?[]:ZA(e).map(function(t){for(var r={color:255,offsetX:Ye,offsetY:Ye,blur:Ye,spread:Ye,inset:!1},n=0,s=0;s<t.length;s++){var i=t[s];il(i,"inset")?r.inset=!0:Zt(i)?(n===0?r.offsetX=i:n===1?r.offsetY=i:n===2?r.blur=i:r.spread=i,n++):r.color=Vt.parse(A,i)}return r})}},UR={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(A,e){var t=[0,1,2],r=[];return e.filter(de).forEach(function(n){switch(n.value){case"stroke":r.push(1);break;case"fill":r.push(0);break;case"markers":r.push(2);break}}),t.forEach(function(n){r.indexOf(n)===-1&&r.push(n)}),r}},QR={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},bR={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return Vs(e)?e.number:0}},FR=function(){function A(e,t){var r,n;this.animationDuration=j(e,ER,t.animationDuration),this.backgroundClip=j(e,Z1,t.backgroundClip),this.backgroundColor=j(e,eS,t.backgroundColor),this.backgroundImage=j(e,lS,t.backgroundImage),this.backgroundOrigin=j(e,uS,t.backgroundOrigin),this.backgroundPosition=j(e,hS,t.backgroundPosition),this.backgroundRepeat=j(e,dS,t.backgroundRepeat),this.backgroundSize=j(e,gS,t.backgroundSize),this.borderTopColor=j(e,mS,t.borderTopColor),this.borderRightColor=j(e,BS,t.borderRightColor),this.borderBottomColor=j(e,wS,t.borderBottomColor),this.borderLeftColor=j(e,yS,t.borderLeftColor),this.borderTopLeftRadius=j(e,CS,t.borderTopLeftRadius),this.borderTopRightRadius=j(e,vS,t.borderTopRightRadius),this.borderBottomRightRadius=j(e,ES,t.borderBottomRightRadius),this.borderBottomLeftRadius=j(e,IS,t.borderBottomLeftRadius),this.borderTopStyle=j(e,_S,t.borderTopStyle),this.borderRightStyle=j(e,US,t.borderRightStyle),this.borderBottomStyle=j(e,QS,t.borderBottomStyle),this.borderLeftStyle=j(e,bS,t.borderLeftStyle),this.borderTopWidth=j(e,FS,t.borderTopWidth),this.borderRightWidth=j(e,TS,t.borderRightWidth),this.borderBottomWidth=j(e,xS,t.borderBottomWidth),this.borderLeftWidth=j(e,SS,t.borderLeftWidth),this.boxShadow=j(e,_R,t.boxShadow),this.color=j(e,RS,t.color),this.direction=j(e,DS,t.direction),this.display=j(e,PS,t.display),this.float=j(e,HS,t.cssFloat),this.fontFamily=j(e,gR,t.fontFamily),this.fontSize=j(e,pR,t.fontSize),this.fontStyle=j(e,wR,t.fontStyle),this.fontVariant=j(e,BR,t.fontVariant),this.fontWeight=j(e,mR,t.fontWeight),this.letterSpacing=j(e,kS,t.letterSpacing),this.lineBreak=j(e,NS,t.lineBreak),this.lineHeight=j(e,OS,t.lineHeight),this.listStyleImage=j(e,MS,t.listStyleImage),this.listStylePosition=j(e,VS,t.listStylePosition),this.listStyleType=j(e,ol,t.listStyleType),this.marginTop=j(e,KS,t.marginTop),this.marginRight=j(e,jS,t.marginRight),this.marginBottom=j(e,GS,t.marginBottom),this.marginLeft=j(e,$S,t.marginLeft),this.opacity=j(e,hR,t.opacity);var s=j(e,WS,t.overflow);this.overflowX=s[0],this.overflowY=s[s.length>1?1:0],this.overflowWrap=j(e,XS,t.overflowWrap),this.paddingTop=j(e,zS,t.paddingTop),this.paddingRight=j(e,qS,t.paddingRight),this.paddingBottom=j(e,YS,t.paddingBottom),this.paddingLeft=j(e,JS,t.paddingLeft),this.paintOrder=j(e,UR,t.paintOrder),this.position=j(e,eR,t.position),this.textAlign=j(e,ZS,t.textAlign),this.textDecorationColor=j(e,dR,(r=t.textDecorationColor)!==null&&r!==void 0?r:t.color),this.textDecorationLine=j(e,fR,(n=t.textDecorationLine)!==null&&n!==void 0?n:t.textDecoration),this.textShadow=j(e,AR,t.textShadow),this.textTransform=j(e,tR,t.textTransform),this.transform=j(e,rR,t.transform),this.transformOrigin=j(e,aR,t.transformOrigin),this.visibility=j(e,cR,t.visibility),this.webkitTextStrokeColor=j(e,QR,t.webkitTextStrokeColor),this.webkitTextStrokeWidth=j(e,bR,t.webkitTextStrokeWidth),this.wordBreak=j(e,lR,t.wordBreak),this.zIndex=j(e,uR,t.zIndex)}return A.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},A.prototype.isTransparent=function(){return Kt(this.backgroundColor)},A.prototype.isTransformed=function(){return this.transform!==null},A.prototype.isPositioned=function(){return this.position!==0},A.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},A.prototype.isFloating=function(){return this.float!==0},A.prototype.isInlineLevel=function(){return Ve(this.display,4)||Ve(this.display,33554432)||Ve(this.display,268435456)||Ve(this.display,536870912)||Ve(this.display,67108864)||Ve(this.display,134217728)},A}(),TR=function(){function A(e,t){this.content=j(e,yR,t.content),this.quotes=j(e,IR,t.quotes)}return A}(),Tg=function(){function A(e,t){this.counterIncrement=j(e,CR,t.counterIncrement),this.counterReset=j(e,vR,t.counterReset)}return A}(),j=function(A,e,t){var r=new Sw,n=t!==null&&typeof t!="undefined"?t.toString():e.initialValue;r.write(n);var s=new Rw(r.read());switch(e.type){case 2:var i=s.parseComponentValue();return e.parse(A,de(i)?i.value:e.initialValue);case 0:return e.parse(A,s.parseComponentValue());case 1:return e.parse(A,s.parseComponentValues());case 4:return s.parseComponentValue();case 3:switch(e.format){case"angle":return ia.parse(A,s.parseComponentValue());case"color":return Vt.parse(A,s.parseComponentValue());case"image":return Tu.parse(A,s.parseComponentValue());case"length":var a=s.parseComponentValue();return Zt(a)?a:Ye;case"length-percentage":var c=s.parseComponentValue();return ke(c)?c:Ye;case"time":return Yw.parse(A,s.parseComponentValue())}break}},xR="data-html2canvas-debug",SR=function(A){var e=A.getAttribute(xR);switch(e){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},al=function(A,e){var t=SR(A);return t===1||e===t},et=function(){function A(e,t){if(this.context=e,this.textNodes=[],this.elements=[],this.flags=0,al(t,3))debugger;this.styles=new FR(e,window.getComputedStyle(t,null)),ul(t)&&(this.styles.animationDuration.some(function(r){return r>0})&&(t.style.animationDuration="0s"),this.styles.transform!==null&&(t.style.transform="none")),this.bounds=na(this.context,t),al(t,4)&&(this.flags|=16)}return A}(),RR="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",xg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Jn=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(var Pi=0;Pi<xg.length;Pi++)Jn[xg.charCodeAt(Pi)]=Pi;var DR=function(A){var e=A.length*.75,t=A.length,r,n=0,s,i,a,c;A[A.length-1]==="="&&(e--,A[A.length-2]==="="&&e--);var l=typeof ArrayBuffer!="undefined"&&typeof Uint8Array!="undefined"&&typeof Uint8Array.prototype.slice!="undefined"?new ArrayBuffer(e):new Array(e),h=Array.isArray(l)?l:new Uint8Array(l);for(r=0;r<t;r+=4)s=Jn[A.charCodeAt(r)],i=Jn[A.charCodeAt(r+1)],a=Jn[A.charCodeAt(r+2)],c=Jn[A.charCodeAt(r+3)],h[n++]=s<<2|i>>4,h[n++]=(i&15)<<4|a>>2,h[n++]=(a&3)<<6|c&63;return l},PR=function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t},LR=function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t},pr=5,xu=11,oc=2,HR=xu-pr,Jw=65536>>pr,kR=1<<pr,ac=kR-1,NR=1024>>pr,OR=Jw+NR,MR=OR,VR=32,KR=MR+VR,jR=65536>>xu,GR=1<<HR,$R=GR-1,Sg=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},WR=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},XR=function(A,e){var t=DR(A),r=Array.isArray(t)?LR(t):new Uint32Array(t),n=Array.isArray(t)?PR(t):new Uint16Array(t),s=24,i=Sg(n,s/2,r[4]/2),a=r[5]===2?Sg(n,(s+r[4])/2):WR(r,Math.ceil((s+r[4])/4));return new zR(r[0],r[1],r[2],r[3],i,a)},zR=function(){function A(e,t,r,n,s,i){this.initialValue=e,this.errorValue=t,this.highStart=r,this.highValueIndex=n,this.index=s,this.data=i}return A.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>pr],t=(t<<oc)+(e&ac),this.data[t];if(e<=65535)return t=this.index[Jw+(e-55296>>pr)],t=(t<<oc)+(e&ac),this.data[t];if(e<this.highStart)return t=KR-jR+(e>>xu),t=this.index[t],t+=e>>pr&$R,t=this.index[t],t=(t<<oc)+(e&ac),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),Rg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",qR=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(var Li=0;Li<Rg.length;Li++)qR[Rg.charCodeAt(Li)]=Li;var YR=1,cc=2,lc=3,Dg=4,Pg=5,JR=7,Lg=8,uc=9,hc=10,Hg=11,kg=12,Ng=13,Og=14,dc=15,ZR=function(A){for(var e=[],t=0,r=A.length;t<r;){var n=A.charCodeAt(t++);if(n>=55296&&n<=56319&&t<r){var s=A.charCodeAt(t++);(s&64512)===56320?e.push(((n&1023)<<10)+(s&1023)+65536):(e.push(n),t--)}else e.push(n)}return e},eD=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],n=-1,s="";++n<t;){var i=A[n];i<=65535?r.push(i):(i-=65536,r.push((i>>10)+55296,i%1024+56320)),(n+1===t||r.length>16384)&&(s+=String.fromCharCode.apply(String,r),r.length=0)}return s},AD=XR(RR),_A="×",fc="÷",tD=function(A){return AD.get(A)},rD=function(A,e,t){var r=t-2,n=e[r],s=e[t-1],i=e[t];if(s===cc&&i===lc)return _A;if(s===cc||s===lc||s===Dg||i===cc||i===lc||i===Dg)return fc;if(s===Lg&&[Lg,uc,Hg,kg].indexOf(i)!==-1||(s===Hg||s===uc)&&(i===uc||i===hc)||(s===kg||s===hc)&&i===hc||i===Ng||i===Pg||i===JR||s===YR)return _A;if(s===Ng&&i===Og){for(;n===Pg;)n=e[--r];if(n===Og)return _A}if(s===dc&&i===dc){for(var a=0;n===dc;)a++,n=e[--r];if(a%2===0)return _A}return fc},nD=function(A){var e=ZR(A),t=e.length,r=0,n=0,s=e.map(tD);return{next:function(){if(r>=t)return{done:!0,value:null};for(var i=_A;r<t&&(i=rD(e,s,++r))===_A;);if(i!==_A||r===t){var a=eD.apply(null,e.slice(n,r));return n=r,{value:a,done:!1}}return{done:!0,value:null}}}},sD=function(A){for(var e=nD(A),t=[],r;!(r=e.next()).done;)r.value&&t.push(r.value.slice());return t},iD=function(A){var e=123;if(A.createRange){var t=A.createRange();if(t.getBoundingClientRect){var r=A.createElement("boundtest");r.style.height=e+"px",r.style.display="block",A.body.appendChild(r),t.selectNode(r);var n=t.getBoundingClientRect(),s=Math.round(n.height);if(A.body.removeChild(r),s===e)return!0}}return!1},oD=function(A){var e=A.createElement("boundtest");e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",A.body.appendChild(e);var t=A.createRange();e.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var r=e.firstChild,n=sa(r.data).map(function(c){return Re(c)}),s=0,i={},a=n.every(function(c,l){t.setStart(r,s),t.setEnd(r,s+c.length);var h=t.getBoundingClientRect();s+=c.length;var d=h.x>i.x||h.y>i.y;return i=h,l===0?!0:d});return A.body.removeChild(e),a},aD=function(){return typeof new Image().crossOrigin!="undefined"},cD=function(){return typeof new XMLHttpRequest().responseType=="string"},lD=function(A){var e=new Image,t=A.createElement("canvas"),r=t.getContext("2d");if(!r)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{r.drawImage(e,0,0),t.toDataURL()}catch(n){return!1}return!0},Mg=function(A){return A[0]===0&&A[1]===255&&A[2]===0&&A[3]===255},uD=function(A){var e=A.createElement("canvas"),t=100;e.width=t,e.height=t;var r=e.getContext("2d");if(!r)return Promise.reject(!1);r.fillStyle="rgb(0, 255, 0)",r.fillRect(0,0,t,t);var n=new Image,s=e.toDataURL();n.src=s;var i=cl(t,t,0,0,n);return r.fillStyle="red",r.fillRect(0,0,t,t),Vg(i).then(function(a){r.drawImage(a,0,0);var c=r.getImageData(0,0,t,t).data;r.fillStyle="red",r.fillRect(0,0,t,t);var l=A.createElement("div");return l.style.backgroundImage="url("+s+")",l.style.height=t+"px",Mg(c)?Vg(cl(t,t,0,0,l)):Promise.reject(!1)}).then(function(a){return r.drawImage(a,0,0),Mg(r.getImageData(0,0,t,t).data)}).catch(function(){return!1})},cl=function(A,e,t,r,n){var s="http://www.w3.org/2000/svg",i=document.createElementNS(s,"svg"),a=document.createElementNS(s,"foreignObject");return i.setAttributeNS(null,"width",A.toString()),i.setAttributeNS(null,"height",e.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",t.toString()),a.setAttributeNS(null,"y",r.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),i.appendChild(a),a.appendChild(n),i},Vg=function(A){return new Promise(function(e,t){var r=new Image;r.onload=function(){return e(r)},r.onerror=t,r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},Xe={get SUPPORT_RANGE_BOUNDS(){var A=iD(document);return Object.defineProperty(Xe,"SUPPORT_RANGE_BOUNDS",{value:A}),A},get SUPPORT_WORD_BREAKING(){var A=Xe.SUPPORT_RANGE_BOUNDS&&oD(document);return Object.defineProperty(Xe,"SUPPORT_WORD_BREAKING",{value:A}),A},get SUPPORT_SVG_DRAWING(){var A=lD(document);return Object.defineProperty(Xe,"SUPPORT_SVG_DRAWING",{value:A}),A},get SUPPORT_FOREIGNOBJECT_DRAWING(){var A=typeof Array.from=="function"&&typeof window.fetch=="function"?uD(document):Promise.resolve(!1);return Object.defineProperty(Xe,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:A}),A},get SUPPORT_CORS_IMAGES(){var A=aD();return Object.defineProperty(Xe,"SUPPORT_CORS_IMAGES",{value:A}),A},get SUPPORT_RESPONSE_TYPE(){var A=cD();return Object.defineProperty(Xe,"SUPPORT_RESPONSE_TYPE",{value:A}),A},get SUPPORT_CORS_XHR(){var A="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Xe,"SUPPORT_CORS_XHR",{value:A}),A},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var A=!!(typeof Intl!="undefined"&&Intl.Segmenter);return Object.defineProperty(Xe,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:A}),A}},ds=function(){function A(e,t){this.text=e,this.bounds=t}return A}(),hD=function(A,e,t,r){var n=gD(e,t),s=[],i=0;return n.forEach(function(a){if(t.textDecorationLine.length||a.trim().length>0)if(Xe.SUPPORT_RANGE_BOUNDS){var c=Kg(r,i,a.length).getClientRects();if(c.length>1){var l=Su(a),h=0;l.forEach(function(p){s.push(new ds(p,Bt.fromDOMRectList(A,Kg(r,h+i,p.length).getClientRects()))),h+=p.length})}else s.push(new ds(a,Bt.fromDOMRectList(A,c)))}else{var d=r.splitText(a.length);s.push(new ds(a,dD(A,r))),r=d}else Xe.SUPPORT_RANGE_BOUNDS||(r=r.splitText(a.length));i+=a.length}),s},dD=function(A,e){var t=e.ownerDocument;if(t){var r=t.createElement("html2canvaswrapper");r.appendChild(e.cloneNode(!0));var n=e.parentNode;if(n){n.replaceChild(r,e);var s=na(A,r);return r.firstChild&&n.replaceChild(r.firstChild,r),s}}return Bt.EMPTY},Kg=function(A,e,t){var r=A.ownerDocument;if(!r)throw new Error("Node has no owner document");var n=r.createRange();return n.setStart(A,e),n.setEnd(A,e+t),n},Su=function(A){if(Xe.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(e.segment(A)).map(function(t){return t.segment})}return sD(A)},fD=function(A,e){if(Xe.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(t.segment(A)).map(function(r){return r.segment})}return mD(A,e)},gD=function(A,e){return e.letterSpacing!==0?Su(A):fD(A,e)},pD=[32,160,4961,65792,65793,4153,4241],mD=function(A,e){for(var t=jx(A,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap==="break-word"?"break-word":e.wordBreak}),r=[],n,s=function(){if(n.value){var i=n.value.slice(),a=sa(i),c="";a.forEach(function(l){pD.indexOf(l)===-1?c+=Re(l):(c.length&&r.push(c),r.push(Re(l)),c="")}),c.length&&r.push(c)}};!(n=t.next()).done;)s();return r},BD=function(){function A(e,t,r){this.text=wD(t.data,r.textTransform),this.textBounds=hD(e,this.text,r,t)}return A}(),wD=function(A,e){switch(e){case 1:return A.toLowerCase();case 3:return A.replace(yD,CD);case 2:return A.toUpperCase();default:return A}},yD=/(^|\s|:|-|\(|\))([a-z])/g,CD=function(A,e,t){return A.length>0?e+t.toUpperCase():A},Zw=function(A){OA(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.src=r.currentSrc||r.src,n.intrinsicWidth=r.naturalWidth,n.intrinsicHeight=r.naturalHeight,n.context.cache.addImage(n.src),n}return e}(et),ey=function(A){OA(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.canvas=r,n.intrinsicWidth=r.width,n.intrinsicHeight=r.height,n}return e}(et),Ay=function(A){OA(e,A);function e(t,r){var n=A.call(this,t,r)||this,s=new XMLSerializer,i=na(t,r);return r.setAttribute("width",i.width+"px"),r.setAttribute("height",i.height+"px"),n.svg="data:image/svg+xml,"+encodeURIComponent(s.serializeToString(r)),n.intrinsicWidth=r.width.baseVal.value,n.intrinsicHeight=r.height.baseVal.value,n.context.cache.addImage(n.svg),n}return e}(et),ty=function(A){OA(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.value=r.value,n}return e}(et),ll=function(A){OA(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.start=r.start,n.reversed=typeof r.reversed=="boolean"&&r.reversed===!0,n}return e}(et),vD=[{type:15,flags:0,unit:"px",number:3}],ED=[{type:16,flags:0,number:50}],ID=function(A){return A.width>A.height?new Bt(A.left+(A.width-A.height)/2,A.top,A.height,A.height):A.width<A.height?new Bt(A.left,A.top+(A.height-A.width)/2,A.width,A.width):A},_D=function(A){var e=A.type===UD?new Array(A.value.length+1).join("•"):A.value;return e.length===0?A.placeholder||"":e},To="checkbox",xo="radio",UD="password",jg=707406591,Ru=function(A){OA(e,A);function e(t,r){var n=A.call(this,t,r)||this;switch(n.type=r.type.toLowerCase(),n.checked=r.checked,n.value=_D(r),(n.type===To||n.type===xo)&&(n.styles.backgroundColor=3739148031,n.styles.borderTopColor=n.styles.borderRightColor=n.styles.borderBottomColor=n.styles.borderLeftColor=2779096575,n.styles.borderTopWidth=n.styles.borderRightWidth=n.styles.borderBottomWidth=n.styles.borderLeftWidth=1,n.styles.borderTopStyle=n.styles.borderRightStyle=n.styles.borderBottomStyle=n.styles.borderLeftStyle=1,n.styles.backgroundClip=[0],n.styles.backgroundOrigin=[0],n.bounds=ID(n.bounds)),n.type){case To:n.styles.borderTopRightRadius=n.styles.borderTopLeftRadius=n.styles.borderBottomRightRadius=n.styles.borderBottomLeftRadius=vD;break;case xo:n.styles.borderTopRightRadius=n.styles.borderTopLeftRadius=n.styles.borderBottomRightRadius=n.styles.borderBottomLeftRadius=ED;break}return n}return e}(et),ry=function(A){OA(e,A);function e(t,r){var n=A.call(this,t,r)||this,s=r.options[r.selectedIndex||0];return n.value=s&&s.text||"",n}return e}(et),ny=function(A){OA(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.value=r.value,n}return e}(et),sy=function(A){OA(e,A);function e(t,r){var n=A.call(this,t,r)||this;n.src=r.src,n.width=parseInt(r.width,10)||0,n.height=parseInt(r.height,10)||0,n.backgroundColor=n.styles.backgroundColor;try{if(r.contentWindow&&r.contentWindow.document&&r.contentWindow.document.documentElement){n.tree=oy(t,r.contentWindow.document.documentElement);var s=r.contentWindow.document.documentElement?us(t,getComputedStyle(r.contentWindow.document.documentElement).backgroundColor):ht.TRANSPARENT,i=r.contentWindow.document.body?us(t,getComputedStyle(r.contentWindow.document.body).backgroundColor):ht.TRANSPARENT;n.backgroundColor=Kt(s)?Kt(i)?n.styles.backgroundColor:i:s}}catch(a){}return n}return e}(et),QD=["OL","UL","MENU"],to=function(A,e,t,r){for(var n=e.firstChild,s=void 0;n;n=s)if(s=n.nextSibling,ay(n)&&n.data.trim().length>0)t.textNodes.push(new BD(A,n,t.styles));else if(Wr(n))if(hy(n)&&n.assignedNodes)n.assignedNodes().forEach(function(a){return to(A,a,t,r)});else{var i=iy(A,n);i.styles.isVisible()&&(bD(n,i,r)?i.flags|=4:FD(i.styles)&&(i.flags|=2),QD.indexOf(n.tagName)!==-1&&(i.flags|=8),t.elements.push(i),n.slot,n.shadowRoot?to(A,n.shadowRoot,i,r):!So(n)&&!cy(n)&&!Ro(n)&&to(A,n,i,r))}},iy=function(A,e){return hl(e)?new Zw(A,e):ly(e)?new ey(A,e):cy(e)?new Ay(A,e):TD(e)?new ty(A,e):xD(e)?new ll(A,e):SD(e)?new Ru(A,e):Ro(e)?new ry(A,e):So(e)?new ny(A,e):uy(e)?new sy(A,e):new et(A,e)},oy=function(A,e){var t=iy(A,e);return t.flags|=4,to(A,e,t,t),t},bD=function(A,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||Du(A)&&t.styles.isTransparent()},FD=function(A){return A.isPositioned()||A.isFloating()},ay=function(A){return A.nodeType===Node.TEXT_NODE},Wr=function(A){return A.nodeType===Node.ELEMENT_NODE},ul=function(A){return Wr(A)&&typeof A.style!="undefined"&&!ro(A)},ro=function(A){return typeof A.className=="object"},TD=function(A){return A.tagName==="LI"},xD=function(A){return A.tagName==="OL"},SD=function(A){return A.tagName==="INPUT"},RD=function(A){return A.tagName==="HTML"},cy=function(A){return A.tagName==="svg"},Du=function(A){return A.tagName==="BODY"},ly=function(A){return A.tagName==="CANVAS"},Gg=function(A){return A.tagName==="VIDEO"},hl=function(A){return A.tagName==="IMG"},uy=function(A){return A.tagName==="IFRAME"},$g=function(A){return A.tagName==="STYLE"},DD=function(A){return A.tagName==="SCRIPT"},So=function(A){return A.tagName==="TEXTAREA"},Ro=function(A){return A.tagName==="SELECT"},hy=function(A){return A.tagName==="SLOT"},Wg=function(A){return A.tagName.indexOf("-")>0},PD=function(){function A(){this.counters={}}return A.prototype.getCounterValue=function(e){var t=this.counters[e];return t&&t.length?t[t.length-1]:1},A.prototype.getCounterValues=function(e){var t=this.counters[e];return t||[]},A.prototype.pop=function(e){var t=this;e.forEach(function(r){return t.counters[r].pop()})},A.prototype.parse=function(e){var t=this,r=e.counterIncrement,n=e.counterReset,s=!0;r!==null&&r.forEach(function(a){var c=t.counters[a.counter];c&&a.increment!==0&&(s=!1,c.length||c.push(1),c[Math.max(0,c.length-1)]+=a.increment)});var i=[];return s&&n.forEach(function(a){var c=t.counters[a.counter];i.push(a.counter),c||(c=t.counters[a.counter]=[]),c.push(a.reset)}),i},A}(),Xg={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},zg={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},LD={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},HD={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},Lr=function(A,e,t,r,n,s){return A<e||A>t?Ts(A,n,s.length>0):r.integers.reduce(function(i,a,c){for(;A>=a;)A-=a,i+=r.values[c];return i},"")+s},dy=function(A,e,t,r){var n="";do t||A--,n=r(A)+n,A/=e;while(A*e>=e);return n},Se=function(A,e,t,r,n){var s=t-e+1;return(A<0?"-":"")+(dy(Math.abs(A),s,r,function(i){return Re(Math.floor(i%s)+e)})+n)},or=function(A,e,t){t===void 0&&(t=". ");var r=e.length;return dy(Math.abs(A),r,!1,function(n){return e[Math.floor(n%r)]})+t},Gr=1,_t=2,Ut=4,Zn=8,st=function(A,e,t,r,n,s){if(A<-9999||A>9999)return Ts(A,4,n.length>0);var i=Math.abs(A),a=n;if(i===0)return e[0]+a;for(var c=0;i>0&&c<=4;c++){var l=i%10;l===0&&Ve(s,Gr)&&a!==""?a=e[l]+a:l>1||l===1&&c===0||l===1&&c===1&&Ve(s,_t)||l===1&&c===1&&Ve(s,Ut)&&A>100||l===1&&c>1&&Ve(s,Zn)?a=e[l]+(c>0?t[c-1]:"")+a:l===1&&c>0&&(a=t[c-1]+a),i=Math.floor(i/10)}return(A<0?r:"")+a},qg="十百千萬",Yg="拾佰仟萬",Jg="マイナス",gc="마이너스",Ts=function(A,e,t){var r=t?". ":"",n=t?"、":"",s=t?", ":"",i=t?" ":"";switch(e){case 0:return"•"+i;case 1:return"◦"+i;case 2:return"◾"+i;case 5:var a=Se(A,48,57,!0,r);return a.length<4?"0"+a:a;case 4:return or(A,"〇一二三四五六七八九",n);case 6:return Lr(A,1,3999,Xg,3,r).toLowerCase();case 7:return Lr(A,1,3999,Xg,3,r);case 8:return Se(A,945,969,!1,r);case 9:return Se(A,97,122,!1,r);case 10:return Se(A,65,90,!1,r);case 11:return Se(A,1632,1641,!0,r);case 12:case 49:return Lr(A,1,9999,zg,3,r);case 35:return Lr(A,1,9999,zg,3,r).toLowerCase();case 13:return Se(A,2534,2543,!0,r);case 14:case 30:return Se(A,6112,6121,!0,r);case 15:return or(A,"子丑寅卯辰巳午未申酉戌亥",n);case 16:return or(A,"甲乙丙丁戊己庚辛壬癸",n);case 17:case 48:return st(A,"零一二三四五六七八九",qg,"負",n,_t|Ut|Zn);case 47:return st(A,"零壹貳參肆伍陸柒捌玖",Yg,"負",n,Gr|_t|Ut|Zn);case 42:return st(A,"零一二三四五六七八九",qg,"负",n,_t|Ut|Zn);case 41:return st(A,"零壹贰叁肆伍陆柒捌玖",Yg,"负",n,Gr|_t|Ut|Zn);case 26:return st(A,"〇一二三四五六七八九","十百千万",Jg,n,0);case 25:return st(A,"零壱弐参四伍六七八九","拾百千万",Jg,n,Gr|_t|Ut);case 31:return st(A,"영일이삼사오육칠팔구","십백천만",gc,s,Gr|_t|Ut);case 33:return st(A,"零一二三四五六七八九","十百千萬",gc,s,0);case 32:return st(A,"零壹貳參四五六七八九","拾百千",gc,s,Gr|_t|Ut);case 18:return Se(A,2406,2415,!0,r);case 20:return Lr(A,1,19999,HD,3,r);case 21:return Se(A,2790,2799,!0,r);case 22:return Se(A,2662,2671,!0,r);case 22:return Lr(A,1,10999,LD,3,r);case 23:return or(A,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return or(A,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return Se(A,3302,3311,!0,r);case 28:return or(A,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",n);case 29:return or(A,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",n);case 34:return Se(A,3792,3801,!0,r);case 37:return Se(A,6160,6169,!0,r);case 38:return Se(A,4160,4169,!0,r);case 39:return Se(A,2918,2927,!0,r);case 40:return Se(A,1776,1785,!0,r);case 43:return Se(A,3046,3055,!0,r);case 44:return Se(A,3174,3183,!0,r);case 45:return Se(A,3664,3673,!0,r);case 46:return Se(A,3872,3881,!0,r);case 3:default:return Se(A,48,57,!0,r)}},fy="data-html2canvas-ignore",Zg=function(){function A(e,t,r){if(this.context=e,this.options=r,this.scrolledElements=[],this.referenceElement=t,this.counters=new PD,this.quoteDepth=0,!t.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(t.ownerDocument.documentElement,!1)}return A.prototype.toIFrame=function(e,t){var r=this,n=kD(e,t);if(!n.contentWindow)return Promise.reject("Unable to find iframe window");var s=e.defaultView.pageXOffset,i=e.defaultView.pageYOffset,a=n.contentWindow,c=a.document,l=MD(n).then(function(){return fA(r,void 0,void 0,function(){var h,d;return nA(this,function(p){switch(p.label){case 0:return this.scrolledElements.forEach(GD),a&&(a.scrollTo(t.left,t.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==t.top||a.scrollX!==t.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-t.left,a.scrollY-t.top,0,0))),h=this.options.onclone,d=this.clonedReferenceElement,typeof d=="undefined"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:c.fonts&&c.fonts.ready?[4,c.fonts.ready]:[3,2];case 1:p.sent(),p.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,OD(c)]:[3,4];case 3:p.sent(),p.label=4;case 4:return typeof h=="function"?[2,Promise.resolve().then(function(){return h(c,d)}).then(function(){return n})]:[2,n]}})})});return c.open(),c.write(KD(document.doctype)+"<html></html>"),jD(this.referenceElement.ownerDocument,s,i),c.replaceChild(c.adoptNode(this.documentElement),c.documentElement),c.close(),l},A.prototype.createElementClone=function(e){if(al(e,2))debugger;if(ly(e))return this.createCanvasClone(e);if(Gg(e))return this.createVideoClone(e);if($g(e))return this.createStyleClone(e);var t=e.cloneNode(!1);return hl(t)&&(hl(e)&&e.currentSrc&&e.currentSrc!==e.src&&(t.src=e.currentSrc,t.srcset=""),t.loading==="lazy"&&(t.loading="eager")),Wg(t)?this.createCustomElementClone(t):t},A.prototype.createCustomElementClone=function(e){var t=document.createElement("html2canvascustomelement");return pc(e.style,t),t},A.prototype.createStyleClone=function(e){try{var t=e.sheet;if(t&&t.cssRules){var r=[].slice.call(t.cssRules,0).reduce(function(s,i){return i&&typeof i.cssText=="string"?s+i.cssText:s},""),n=e.cloneNode(!1);return n.textContent=r,n}}catch(s){if(this.context.logger.error("Unable to access cssRules property",s),s.name!=="SecurityError")throw s}return e.cloneNode(!1)},A.prototype.createCanvasClone=function(e){var t;if(this.options.inlineImages&&e.ownerDocument){var r=e.ownerDocument.createElement("img");try{return r.src=e.toDataURL(),r}catch(l){this.context.logger.info("Unable to inline canvas contents, canvas is tainted",e)}}var n=e.cloneNode(!1);try{n.width=e.width,n.height=e.height;var s=e.getContext("2d"),i=n.getContext("2d");if(i)if(!this.options.allowTaint&&s)i.putImageData(s.getImageData(0,0,e.width,e.height),0,0);else{var a=(t=e.getContext("webgl2"))!==null&&t!==void 0?t:e.getContext("webgl");if(a){var c=a.getContextAttributes();(c==null?void 0:c.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",e)}i.drawImage(e,0,0)}return n}catch(l){this.context.logger.info("Unable to clone canvas as it is tainted",e)}return n},A.prototype.createVideoClone=function(e){var t=e.ownerDocument.createElement("canvas");t.width=e.offsetWidth,t.height=e.offsetHeight;var r=t.getContext("2d");try{return r&&(r.drawImage(e,0,0,t.width,t.height),this.options.allowTaint||r.getImageData(0,0,t.width,t.height)),t}catch(s){this.context.logger.info("Unable to clone video as it is tainted",e)}var n=e.ownerDocument.createElement("canvas");return n.width=e.offsetWidth,n.height=e.offsetHeight,n},A.prototype.appendChildNode=function(e,t,r){(!Wr(t)||!DD(t)&&!t.hasAttribute(fy)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(t)))&&(!this.options.copyStyles||!Wr(t)||!$g(t))&&e.appendChild(this.cloneNode(t,r))},A.prototype.cloneChildNodes=function(e,t,r){for(var n=this,s=e.shadowRoot?e.shadowRoot.firstChild:e.firstChild;s;s=s.nextSibling)if(Wr(s)&&hy(s)&&typeof s.assignedNodes=="function"){var i=s.assignedNodes();i.length&&i.forEach(function(a){return n.appendChildNode(t,a,r)})}else this.appendChildNode(t,s,r)},A.prototype.cloneNode=function(e,t){if(ay(e))return document.createTextNode(e.data);if(!e.ownerDocument)return e.cloneNode(!1);var r=e.ownerDocument.defaultView;if(r&&Wr(e)&&(ul(e)||ro(e))){var n=this.createElementClone(e);n.style.transitionProperty="none";var s=r.getComputedStyle(e),i=r.getComputedStyle(e,":before"),a=r.getComputedStyle(e,":after");this.referenceElement===e&&ul(n)&&(this.clonedReferenceElement=n),Du(n)&&XD(n);var c=this.counters.parse(new Tg(this.context,s)),l=this.resolvePseudoContent(e,n,i,fs.BEFORE);Wg(e)&&(t=!0),Gg(e)||this.cloneChildNodes(e,n,t),l&&n.insertBefore(l,n.firstChild);var h=this.resolvePseudoContent(e,n,a,fs.AFTER);return h&&n.appendChild(h),this.counters.pop(c),(s&&(this.options.copyStyles||ro(e))&&!uy(e)||t)&&pc(s,n),(e.scrollTop!==0||e.scrollLeft!==0)&&this.scrolledElements.push([n,e.scrollLeft,e.scrollTop]),(So(e)||Ro(e))&&(So(n)||Ro(n))&&(n.value=e.value),n}return e.cloneNode(!1)},A.prototype.resolvePseudoContent=function(e,t,r,n){var s=this;if(r){var i=r.content,a=t.ownerDocument;if(!(!a||!i||i==="none"||i==="-moz-alt-content"||r.display==="none")){this.counters.parse(new Tg(this.context,r));var c=new TR(this.context,r),l=a.createElement("html2canvaspseudoelement");pc(r,l),c.content.forEach(function(d){if(d.type===0)l.appendChild(a.createTextNode(d.value));else if(d.type===22){var p=a.createElement("img");p.src=d.value,p.style.opacity="1",l.appendChild(p)}else if(d.type===18){if(d.name==="attr"){var y=d.values.filter(de);y.length&&l.appendChild(a.createTextNode(e.getAttribute(y[0].value)||""))}else if(d.name==="counter"){var _=d.values.filter(ln),v=_[0],b=_[1];if(v&&de(v)){var x=s.counters.getCounterValue(v.value),S=b&&de(b)?ol.parse(s.context,b.value):3;l.appendChild(a.createTextNode(Ts(x,S,!1)))}}else if(d.name==="counters"){var D=d.values.filter(ln),v=D[0],k=D[1],b=D[2];if(v&&de(v)){var N=s.counters.getCounterValues(v.value),H=b&&de(b)?ol.parse(s.context,b.value):3,U=k&&k.type===0?k.value:"",m=N.map(function(T){return Ts(T,H,!1)}).join(U);l.appendChild(a.createTextNode(m))}}}else if(d.type===20)switch(d.value){case"open-quote":l.appendChild(a.createTextNode(Fg(c.quotes,s.quoteDepth++,!0)));break;case"close-quote":l.appendChild(a.createTextNode(Fg(c.quotes,--s.quoteDepth,!1)));break;default:l.appendChild(a.createTextNode(d.value))}}),l.className=dl+" "+fl;var h=n===fs.BEFORE?" "+dl:" "+fl;return ro(t)?t.className.baseValue+=h:t.className+=h,l}}},A.destroy=function(e){return e.parentNode?(e.parentNode.removeChild(e),!0):!1},A}(),fs;(function(A){A[A.BEFORE=0]="BEFORE",A[A.AFTER=1]="AFTER"})(fs||(fs={}));var kD=function(A,e){var t=A.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute(fy,"true"),A.body.appendChild(t),t},ND=function(A){return new Promise(function(e){if(A.complete){e();return}if(!A.src){e();return}A.onload=e,A.onerror=e})},OD=function(A){return Promise.all([].slice.call(A.images,0).map(ND))},MD=function(A){return new Promise(function(e,t){var r=A.contentWindow;if(!r)return t("No window assigned for iframe");var n=r.document;r.onload=A.onload=function(){r.onload=A.onload=null;var s=setInterval(function(){n.body.childNodes.length>0&&n.readyState==="complete"&&(clearInterval(s),e(A))},50)}})},VD=["all","d","content"],pc=function(A,e){for(var t=A.length-1;t>=0;t--){var r=A.item(t);VD.indexOf(r)===-1&&e.style.setProperty(r,A.getPropertyValue(r))}return e},KD=function(A){var e="";return A&&(e+="<!DOCTYPE ",A.name&&(e+=A.name),A.internalSubset&&(e+=A.internalSubset),A.publicId&&(e+='"'+A.publicId+'"'),A.systemId&&(e+='"'+A.systemId+'"'),e+=">"),e},jD=function(A,e,t){A&&A.defaultView&&(e!==A.defaultView.pageXOffset||t!==A.defaultView.pageYOffset)&&A.defaultView.scrollTo(e,t)},GD=function(A){var e=A[0],t=A[1],r=A[2];e.scrollLeft=t,e.scrollTop=r},$D=":before",WD=":after",dl="___html2canvas___pseudoelement_before",fl="___html2canvas___pseudoelement_after",ep=`{
    content: "" !important;
    display: none !important;
}`,XD=function(A){zD(A,"."+dl+$D+ep+`
         .`+fl+WD+ep)},zD=function(A,e){var t=A.ownerDocument;if(t){var r=t.createElement("style");r.textContent=e,A.appendChild(r)}},gy=function(){function A(){}return A.getOrigin=function(e){var t=A._link;return t?(t.href=e,t.href=t.href,t.protocol+t.hostname+t.port):"about:blank"},A.isSameOrigin=function(e){return A.getOrigin(e)===A._origin},A.setContext=function(e){A._link=e.document.createElement("a"),A._origin=A.getOrigin(e.location.href)},A._origin="about:blank",A}(),qD=function(){function A(e,t){this.context=e,this._options=t,this._cache={}}return A.prototype.addImage=function(e){var t=Promise.resolve();return this.has(e)||(Bc(e)||eP(e))&&(this._cache[e]=this.loadImage(e)).catch(function(){}),t},A.prototype.match=function(e){return this._cache[e]},A.prototype.loadImage=function(e){return fA(this,void 0,void 0,function(){var t,r,n,s,i=this;return nA(this,function(a){switch(a.label){case 0:return t=gy.isSameOrigin(e),r=!mc(e)&&this._options.useCORS===!0&&Xe.SUPPORT_CORS_IMAGES&&!t,n=!mc(e)&&!t&&!Bc(e)&&typeof this._options.proxy=="string"&&Xe.SUPPORT_CORS_XHR&&!r,!t&&this._options.allowTaint===!1&&!mc(e)&&!Bc(e)&&!n&&!r?[2]:(s=e,n?[4,this.proxy(s)]:[3,2]);case 1:s=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+e.substring(0,256)),[4,new Promise(function(c,l){var h=new Image;h.onload=function(){return c(h)},h.onerror=l,(AP(s)||r)&&(h.crossOrigin="anonymous"),h.src=s,h.complete===!0&&setTimeout(function(){return c(h)},500),i._options.imageTimeout>0&&setTimeout(function(){return l("Timed out ("+i._options.imageTimeout+"ms) loading image")},i._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},A.prototype.has=function(e){return typeof this._cache[e]!="undefined"},A.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},A.prototype.proxy=function(e){var t=this,r=this._options.proxy;if(!r)throw new Error("No proxy defined");var n=e.substring(0,256);return new Promise(function(s,i){var a=Xe.SUPPORT_RESPONSE_TYPE?"blob":"text",c=new XMLHttpRequest;c.onload=function(){if(c.status===200)if(a==="text")s(c.response);else{var d=new FileReader;d.addEventListener("load",function(){return s(d.result)},!1),d.addEventListener("error",function(p){return i(p)},!1),d.readAsDataURL(c.response)}else i("Failed to proxy resource "+n+" with status code "+c.status)},c.onerror=i;var l=r.indexOf("?")>-1?"&":"?";if(c.open("GET",""+r+l+"url="+encodeURIComponent(e)+"&responseType="+a),a!=="text"&&c instanceof XMLHttpRequest&&(c.responseType=a),t._options.imageTimeout){var h=t._options.imageTimeout;c.timeout=h,c.ontimeout=function(){return i("Timed out ("+h+"ms) proxying "+n)}}c.send()})},A}(),YD=/^data:image\/svg\+xml/i,JD=/^data:image\/.*;base64,/i,ZD=/^data:image\/.*/i,eP=function(A){return Xe.SUPPORT_SVG_DRAWING||!tP(A)},mc=function(A){return ZD.test(A)},AP=function(A){return JD.test(A)},Bc=function(A){return A.substr(0,4)==="blob"},tP=function(A){return A.substr(-3).toLowerCase()==="svg"||YD.test(A)},K=function(){function A(e,t){this.type=0,this.x=e,this.y=t}return A.prototype.add=function(e,t){return new A(this.x+e,this.y+t)},A}(),Hr=function(A,e,t){return new K(A.x+(e.x-A.x)*t,A.y+(e.y-A.y)*t)},Hi=function(){function A(e,t,r,n){this.type=1,this.start=e,this.startControl=t,this.endControl=r,this.end=n}return A.prototype.subdivide=function(e,t){var r=Hr(this.start,this.startControl,e),n=Hr(this.startControl,this.endControl,e),s=Hr(this.endControl,this.end,e),i=Hr(r,n,e),a=Hr(n,s,e),c=Hr(i,a,e);return t?new A(this.start,r,i,c):new A(c,a,s,this.end)},A.prototype.add=function(e,t){return new A(this.start.add(e,t),this.startControl.add(e,t),this.endControl.add(e,t),this.end.add(e,t))},A.prototype.reverse=function(){return new A(this.end,this.endControl,this.startControl,this.start)},A}(),UA=function(A){return A.type===1},rP=function(){function A(e){var t=e.styles,r=e.bounds,n=Yn(t.borderTopLeftRadius,r.width,r.height),s=n[0],i=n[1],a=Yn(t.borderTopRightRadius,r.width,r.height),c=a[0],l=a[1],h=Yn(t.borderBottomRightRadius,r.width,r.height),d=h[0],p=h[1],y=Yn(t.borderBottomLeftRadius,r.width,r.height),_=y[0],v=y[1],b=[];b.push((s+c)/r.width),b.push((_+d)/r.width),b.push((i+v)/r.height),b.push((l+p)/r.height);var x=Math.max.apply(Math,b);x>1&&(s/=x,i/=x,c/=x,l/=x,d/=x,p/=x,_/=x,v/=x);var S=r.width-c,D=r.height-p,k=r.width-d,N=r.height-v,H=t.borderTopWidth,U=t.borderRightWidth,m=t.borderBottomWidth,C=t.borderLeftWidth,Q=me(t.paddingTop,e.bounds.width),T=me(t.paddingRight,e.bounds.width),F=me(t.paddingBottom,e.bounds.width),I=me(t.paddingLeft,e.bounds.width);this.topLeftBorderDoubleOuterBox=s>0||i>0?ve(r.left+C/3,r.top+H/3,s-C/3,i-H/3,ue.TOP_LEFT):new K(r.left+C/3,r.top+H/3),this.topRightBorderDoubleOuterBox=s>0||i>0?ve(r.left+S,r.top+H/3,c-U/3,l-H/3,ue.TOP_RIGHT):new K(r.left+r.width-U/3,r.top+H/3),this.bottomRightBorderDoubleOuterBox=d>0||p>0?ve(r.left+k,r.top+D,d-U/3,p-m/3,ue.BOTTOM_RIGHT):new K(r.left+r.width-U/3,r.top+r.height-m/3),this.bottomLeftBorderDoubleOuterBox=_>0||v>0?ve(r.left+C/3,r.top+N,_-C/3,v-m/3,ue.BOTTOM_LEFT):new K(r.left+C/3,r.top+r.height-m/3),this.topLeftBorderDoubleInnerBox=s>0||i>0?ve(r.left+C*2/3,r.top+H*2/3,s-C*2/3,i-H*2/3,ue.TOP_LEFT):new K(r.left+C*2/3,r.top+H*2/3),this.topRightBorderDoubleInnerBox=s>0||i>0?ve(r.left+S,r.top+H*2/3,c-U*2/3,l-H*2/3,ue.TOP_RIGHT):new K(r.left+r.width-U*2/3,r.top+H*2/3),this.bottomRightBorderDoubleInnerBox=d>0||p>0?ve(r.left+k,r.top+D,d-U*2/3,p-m*2/3,ue.BOTTOM_RIGHT):new K(r.left+r.width-U*2/3,r.top+r.height-m*2/3),this.bottomLeftBorderDoubleInnerBox=_>0||v>0?ve(r.left+C*2/3,r.top+N,_-C*2/3,v-m*2/3,ue.BOTTOM_LEFT):new K(r.left+C*2/3,r.top+r.height-m*2/3),this.topLeftBorderStroke=s>0||i>0?ve(r.left+C/2,r.top+H/2,s-C/2,i-H/2,ue.TOP_LEFT):new K(r.left+C/2,r.top+H/2),this.topRightBorderStroke=s>0||i>0?ve(r.left+S,r.top+H/2,c-U/2,l-H/2,ue.TOP_RIGHT):new K(r.left+r.width-U/2,r.top+H/2),this.bottomRightBorderStroke=d>0||p>0?ve(r.left+k,r.top+D,d-U/2,p-m/2,ue.BOTTOM_RIGHT):new K(r.left+r.width-U/2,r.top+r.height-m/2),this.bottomLeftBorderStroke=_>0||v>0?ve(r.left+C/2,r.top+N,_-C/2,v-m/2,ue.BOTTOM_LEFT):new K(r.left+C/2,r.top+r.height-m/2),this.topLeftBorderBox=s>0||i>0?ve(r.left,r.top,s,i,ue.TOP_LEFT):new K(r.left,r.top),this.topRightBorderBox=c>0||l>0?ve(r.left+S,r.top,c,l,ue.TOP_RIGHT):new K(r.left+r.width,r.top),this.bottomRightBorderBox=d>0||p>0?ve(r.left+k,r.top+D,d,p,ue.BOTTOM_RIGHT):new K(r.left+r.width,r.top+r.height),this.bottomLeftBorderBox=_>0||v>0?ve(r.left,r.top+N,_,v,ue.BOTTOM_LEFT):new K(r.left,r.top+r.height),this.topLeftPaddingBox=s>0||i>0?ve(r.left+C,r.top+H,Math.max(0,s-C),Math.max(0,i-H),ue.TOP_LEFT):new K(r.left+C,r.top+H),this.topRightPaddingBox=c>0||l>0?ve(r.left+Math.min(S,r.width-U),r.top+H,S>r.width+U?0:Math.max(0,c-U),Math.max(0,l-H),ue.TOP_RIGHT):new K(r.left+r.width-U,r.top+H),this.bottomRightPaddingBox=d>0||p>0?ve(r.left+Math.min(k,r.width-C),r.top+Math.min(D,r.height-m),Math.max(0,d-U),Math.max(0,p-m),ue.BOTTOM_RIGHT):new K(r.left+r.width-U,r.top+r.height-m),this.bottomLeftPaddingBox=_>0||v>0?ve(r.left+C,r.top+Math.min(N,r.height-m),Math.max(0,_-C),Math.max(0,v-m),ue.BOTTOM_LEFT):new K(r.left+C,r.top+r.height-m),this.topLeftContentBox=s>0||i>0?ve(r.left+C+I,r.top+H+Q,Math.max(0,s-(C+I)),Math.max(0,i-(H+Q)),ue.TOP_LEFT):new K(r.left+C+I,r.top+H+Q),this.topRightContentBox=c>0||l>0?ve(r.left+Math.min(S,r.width+C+I),r.top+H+Q,S>r.width+C+I?0:c-C+I,l-(H+Q),ue.TOP_RIGHT):new K(r.left+r.width-(U+T),r.top+H+Q),this.bottomRightContentBox=d>0||p>0?ve(r.left+Math.min(k,r.width-(C+I)),r.top+Math.min(D,r.height+H+Q),Math.max(0,d-(U+T)),p-(m+F),ue.BOTTOM_RIGHT):new K(r.left+r.width-(U+T),r.top+r.height-(m+F)),this.bottomLeftContentBox=_>0||v>0?ve(r.left+C+I,r.top+N,Math.max(0,_-(C+I)),v-(m+F),ue.BOTTOM_LEFT):new K(r.left+C+I,r.top+r.height-(m+F))}return A}(),ue;(function(A){A[A.TOP_LEFT=0]="TOP_LEFT",A[A.TOP_RIGHT=1]="TOP_RIGHT",A[A.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",A[A.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(ue||(ue={}));var ve=function(A,e,t,r,n){var s=4*((Math.sqrt(2)-1)/3),i=t*s,a=r*s,c=A+t,l=e+r;switch(n){case ue.TOP_LEFT:return new Hi(new K(A,l),new K(A,l-a),new K(c-i,e),new K(c,e));case ue.TOP_RIGHT:return new Hi(new K(A,e),new K(A+i,e),new K(c,l-a),new K(c,l));case ue.BOTTOM_RIGHT:return new Hi(new K(c,e),new K(c,e+a),new K(A+i,l),new K(A,l));case ue.BOTTOM_LEFT:default:return new Hi(new K(c,l),new K(c-i,l),new K(A,e+a),new K(A,e))}},Do=function(A){return[A.topLeftBorderBox,A.topRightBorderBox,A.bottomRightBorderBox,A.bottomLeftBorderBox]},nP=function(A){return[A.topLeftContentBox,A.topRightContentBox,A.bottomRightContentBox,A.bottomLeftContentBox]},Po=function(A){return[A.topLeftPaddingBox,A.topRightPaddingBox,A.bottomRightPaddingBox,A.bottomLeftPaddingBox]},sP=function(){function A(e,t,r){this.offsetX=e,this.offsetY=t,this.matrix=r,this.type=0,this.target=6}return A}(),ki=function(){function A(e,t){this.path=e,this.target=t,this.type=1}return A}(),iP=function(){function A(e){this.opacity=e,this.type=2,this.target=6}return A}(),oP=function(A){return A.type===0},py=function(A){return A.type===1},aP=function(A){return A.type===2},Ap=function(A,e){return A.length===e.length?A.some(function(t,r){return t===e[r]}):!1},cP=function(A,e,t,r,n){return A.map(function(s,i){switch(i){case 0:return s.add(e,t);case 1:return s.add(e+r,t);case 2:return s.add(e+r,t+n);case 3:return s.add(e,t+n)}return s})},my=function(){function A(e){this.element=e,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return A}(),By=function(){function A(e,t){if(this.container=e,this.parent=t,this.effects=[],this.curves=new rP(this.container),this.container.styles.opacity<1&&this.effects.push(new iP(this.container.styles.opacity)),this.container.styles.transform!==null){var r=this.container.bounds.left+this.container.styles.transformOrigin[0].number,n=this.container.bounds.top+this.container.styles.transformOrigin[1].number,s=this.container.styles.transform;this.effects.push(new sP(r,n,s))}if(this.container.styles.overflowX!==0){var i=Do(this.curves),a=Po(this.curves);Ap(i,a)?this.effects.push(new ki(i,6)):(this.effects.push(new ki(i,2)),this.effects.push(new ki(a,4)))}}return A.prototype.getEffects=function(e){for(var t=[2,3].indexOf(this.container.styles.position)===-1,r=this.parent,n=this.effects.slice(0);r;){var s=r.effects.filter(function(c){return!py(c)});if(t||r.container.styles.position!==0||!r.parent){if(n.unshift.apply(n,s),t=[2,3].indexOf(r.container.styles.position)===-1,r.container.styles.overflowX!==0){var i=Do(r.curves),a=Po(r.curves);Ap(i,a)||n.unshift(new ki(a,6))}}else n.unshift.apply(n,s);r=r.parent}return n.filter(function(c){return Ve(c.target,e)})},A}(),gl=function(A,e,t,r){A.container.elements.forEach(function(n){var s=Ve(n.flags,4),i=Ve(n.flags,2),a=new By(n,A);Ve(n.styles.display,2048)&&r.push(a);var c=Ve(n.flags,8)?[]:r;if(s||i){var l=s||n.styles.isPositioned()?t:e,h=new my(a);if(n.styles.isPositioned()||n.styles.opacity<1||n.styles.isTransformed()){var d=n.styles.zIndex.order;if(d<0){var p=0;l.negativeZIndex.some(function(_,v){return d>_.element.container.styles.zIndex.order?(p=v,!1):p>0}),l.negativeZIndex.splice(p,0,h)}else if(d>0){var y=0;l.positiveZIndex.some(function(_,v){return d>=_.element.container.styles.zIndex.order?(y=v+1,!1):y>0}),l.positiveZIndex.splice(y,0,h)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(h)}else n.styles.isFloating()?l.nonPositionedFloats.push(h):l.nonPositionedInlineLevel.push(h);gl(a,h,s?h:t,c)}else n.styles.isInlineLevel()?e.inlineLevel.push(a):e.nonInlineLevel.push(a),gl(a,e,t,c);Ve(n.flags,8)&&wy(n,c)})},wy=function(A,e){for(var t=A instanceof ll?A.start:1,r=A instanceof ll?A.reversed:!1,n=0;n<e.length;n++){var s=e[n];s.container instanceof ty&&typeof s.container.value=="number"&&s.container.value!==0&&(t=s.container.value),s.listValue=Ts(t,s.container.styles.listStyleType,!0),t+=r?-1:1}},lP=function(A){var e=new By(A,null),t=new my(e),r=[];return gl(e,t,t,r),wy(e.container,r),t},tp=function(A,e){switch(e){case 0:return FA(A.topLeftBorderBox,A.topLeftPaddingBox,A.topRightBorderBox,A.topRightPaddingBox);case 1:return FA(A.topRightBorderBox,A.topRightPaddingBox,A.bottomRightBorderBox,A.bottomRightPaddingBox);case 2:return FA(A.bottomRightBorderBox,A.bottomRightPaddingBox,A.bottomLeftBorderBox,A.bottomLeftPaddingBox);case 3:default:return FA(A.bottomLeftBorderBox,A.bottomLeftPaddingBox,A.topLeftBorderBox,A.topLeftPaddingBox)}},uP=function(A,e){switch(e){case 0:return FA(A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox,A.topRightBorderBox,A.topRightBorderDoubleOuterBox);case 1:return FA(A.topRightBorderBox,A.topRightBorderDoubleOuterBox,A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox);case 2:return FA(A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox,A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox);case 3:default:return FA(A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox,A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox)}},hP=function(A,e){switch(e){case 0:return FA(A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox,A.topRightBorderDoubleInnerBox,A.topRightPaddingBox);case 1:return FA(A.topRightBorderDoubleInnerBox,A.topRightPaddingBox,A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox);case 2:return FA(A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox,A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox);case 3:default:return FA(A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox,A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox)}},dP=function(A,e){switch(e){case 0:return Ni(A.topLeftBorderStroke,A.topRightBorderStroke);case 1:return Ni(A.topRightBorderStroke,A.bottomRightBorderStroke);case 2:return Ni(A.bottomRightBorderStroke,A.bottomLeftBorderStroke);case 3:default:return Ni(A.bottomLeftBorderStroke,A.topLeftBorderStroke)}},Ni=function(A,e){var t=[];return UA(A)?t.push(A.subdivide(.5,!1)):t.push(A),UA(e)?t.push(e.subdivide(.5,!0)):t.push(e),t},FA=function(A,e,t,r){var n=[];return UA(A)?n.push(A.subdivide(.5,!1)):n.push(A),UA(t)?n.push(t.subdivide(.5,!0)):n.push(t),UA(r)?n.push(r.subdivide(.5,!0).reverse()):n.push(r),UA(e)?n.push(e.subdivide(.5,!1).reverse()):n.push(e),n},yy=function(A){var e=A.bounds,t=A.styles;return e.add(t.borderLeftWidth,t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth),-(t.borderTopWidth+t.borderBottomWidth))},Lo=function(A){var e=A.styles,t=A.bounds,r=me(e.paddingLeft,t.width),n=me(e.paddingRight,t.width),s=me(e.paddingTop,t.width),i=me(e.paddingBottom,t.width);return t.add(r+e.borderLeftWidth,s+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+r+n),-(e.borderTopWidth+e.borderBottomWidth+s+i))},fP=function(A,e){return A===0?e.bounds:A===2?Lo(e):yy(e)},gP=function(A,e){return A===0?e.bounds:A===2?Lo(e):yy(e)},wc=function(A,e,t){var r=fP($r(A.styles.backgroundOrigin,e),A),n=gP($r(A.styles.backgroundClip,e),A),s=pP($r(A.styles.backgroundSize,e),t,r),i=s[0],a=s[1],c=Yn($r(A.styles.backgroundPosition,e),r.width-i,r.height-a),l=mP($r(A.styles.backgroundRepeat,e),c,s,r,n),h=Math.round(r.left+c[0]),d=Math.round(r.top+c[1]);return[l,h,d,i,a]},kr=function(A){return de(A)&&A.value===Zr.AUTO},Oi=function(A){return typeof A=="number"},pP=function(A,e,t){var r=e[0],n=e[1],s=e[2],i=A[0],a=A[1];if(!i)return[0,0];if(ke(i)&&a&&ke(a))return[me(i,t.width),me(a,t.height)];var c=Oi(s);if(de(i)&&(i.value===Zr.CONTAIN||i.value===Zr.COVER)){if(Oi(s)){var l=t.width/t.height;return l<s!=(i.value===Zr.COVER)?[t.width,t.width/s]:[t.height*s,t.height]}return[t.width,t.height]}var h=Oi(r),d=Oi(n),p=h||d;if(kr(i)&&(!a||kr(a))){if(h&&d)return[r,n];if(!c&&!p)return[t.width,t.height];if(p&&c){var y=h?r:n*s,_=d?n:r/s;return[y,_]}var v=h?r:t.width,b=d?n:t.height;return[v,b]}if(c){var x=0,S=0;return ke(i)?x=me(i,t.width):ke(a)&&(S=me(a,t.height)),kr(i)?x=S*s:(!a||kr(a))&&(S=x/s),[x,S]}var D=null,k=null;if(ke(i)?D=me(i,t.width):a&&ke(a)&&(k=me(a,t.height)),D!==null&&(!a||kr(a))&&(k=h&&d?D/r*n:t.height),k!==null&&kr(i)&&(D=h&&d?k/n*r:t.width),D!==null&&k!==null)return[D,k];throw new Error("Unable to calculate background-size for element")},$r=function(A,e){var t=A[e];return typeof t=="undefined"?A[0]:t},mP=function(A,e,t,r,n){var s=e[0],i=e[1],a=t[0],c=t[1];switch(A){case 2:return[new K(Math.round(r.left),Math.round(r.top+i)),new K(Math.round(r.left+r.width),Math.round(r.top+i)),new K(Math.round(r.left+r.width),Math.round(c+r.top+i)),new K(Math.round(r.left),Math.round(c+r.top+i))];case 3:return[new K(Math.round(r.left+s),Math.round(r.top)),new K(Math.round(r.left+s+a),Math.round(r.top)),new K(Math.round(r.left+s+a),Math.round(r.height+r.top)),new K(Math.round(r.left+s),Math.round(r.height+r.top))];case 1:return[new K(Math.round(r.left+s),Math.round(r.top+i)),new K(Math.round(r.left+s+a),Math.round(r.top+i)),new K(Math.round(r.left+s+a),Math.round(r.top+i+c)),new K(Math.round(r.left+s),Math.round(r.top+i+c))];default:return[new K(Math.round(n.left),Math.round(n.top)),new K(Math.round(n.left+n.width),Math.round(n.top)),new K(Math.round(n.left+n.width),Math.round(n.height+n.top)),new K(Math.round(n.left),Math.round(n.height+n.top))]}},BP="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",rp="Hidden Text",wP=function(){function A(e){this._data={},this._document=e}return A.prototype.parseMetrics=function(e,t){var r=this._document.createElement("div"),n=this._document.createElement("img"),s=this._document.createElement("span"),i=this._document.body;r.style.visibility="hidden",r.style.fontFamily=e,r.style.fontSize=t,r.style.margin="0",r.style.padding="0",r.style.whiteSpace="nowrap",i.appendChild(r),n.src=BP,n.width=1,n.height=1,n.style.margin="0",n.style.padding="0",n.style.verticalAlign="baseline",s.style.fontFamily=e,s.style.fontSize=t,s.style.margin="0",s.style.padding="0",s.appendChild(this._document.createTextNode(rp)),r.appendChild(s),r.appendChild(n);var a=n.offsetTop-s.offsetTop+2;r.removeChild(s),r.appendChild(this._document.createTextNode(rp)),r.style.lineHeight="normal",n.style.verticalAlign="super";var c=n.offsetTop-r.offsetTop+2;return i.removeChild(r),{baseline:a,middle:c}},A.prototype.getMetrics=function(e,t){var r=e+" "+t;return typeof this._data[r]=="undefined"&&(this._data[r]=this.parseMetrics(e,t)),this._data[r]},A}(),Cy=function(){function A(e,t){this.context=e,this.options=t}return A}(),yP=1e4,CP=function(A){OA(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n._activeEffects=[],n.canvas=r.canvas?r.canvas:document.createElement("canvas"),n.ctx=n.canvas.getContext("2d"),r.canvas||(n.canvas.width=Math.floor(r.width*r.scale),n.canvas.height=Math.floor(r.height*r.scale),n.canvas.style.width=r.width+"px",n.canvas.style.height=r.height+"px"),n.fontMetrics=new wP(document),n.ctx.scale(n.options.scale,n.options.scale),n.ctx.translate(-r.x,-r.y),n.ctx.textBaseline="bottom",n._activeEffects=[],n.context.logger.debug("Canvas renderer initialized ("+r.width+"x"+r.height+") with scale "+r.scale),n}return e.prototype.applyEffects=function(t){for(var r=this;this._activeEffects.length;)this.popEffect();t.forEach(function(n){return r.applyEffect(n)})},e.prototype.applyEffect=function(t){this.ctx.save(),aP(t)&&(this.ctx.globalAlpha=t.opacity),oP(t)&&(this.ctx.translate(t.offsetX,t.offsetY),this.ctx.transform(t.matrix[0],t.matrix[1],t.matrix[2],t.matrix[3],t.matrix[4],t.matrix[5]),this.ctx.translate(-t.offsetX,-t.offsetY)),py(t)&&(this.path(t.path),this.ctx.clip()),this._activeEffects.push(t)},e.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},e.prototype.renderStack=function(t){return fA(this,void 0,void 0,function(){var r;return nA(this,function(n){switch(n.label){case 0:return r=t.element.container.styles,r.isVisible()?[4,this.renderStackContent(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})},e.prototype.renderNode=function(t){return fA(this,void 0,void 0,function(){return nA(this,function(r){switch(r.label){case 0:if(Ve(t.container.flags,16))debugger;return t.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(t)]:[3,3];case 1:return r.sent(),[4,this.renderNodeContent(t)];case 2:r.sent(),r.label=3;case 3:return[2]}})})},e.prototype.renderTextWithLetterSpacing=function(t,r,n){var s=this;if(r===0)this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+n);else{var i=Su(t.text);i.reduce(function(a,c){return s.ctx.fillText(c,a,t.bounds.top+n),a+s.ctx.measureText(c).width},t.bounds.left)}},e.prototype.createFontStyle=function(t){var r=t.fontVariant.filter(function(i){return i==="normal"||i==="small-caps"}).join(""),n=UP(t.fontFamily).join(", "),s=Vs(t.fontSize)?""+t.fontSize.number+t.fontSize.unit:t.fontSize.number+"px";return[[t.fontStyle,r,t.fontWeight,s,n].join(" "),n,s]},e.prototype.renderTextNode=function(t,r){return fA(this,void 0,void 0,function(){var n,s,i,a,c,l,h,d,p=this;return nA(this,function(y){return n=this.createFontStyle(r),s=n[0],i=n[1],a=n[2],this.ctx.font=s,this.ctx.direction=r.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",c=this.fontMetrics.getMetrics(i,a),l=c.baseline,h=c.middle,d=r.paintOrder,t.textBounds.forEach(function(_){d.forEach(function(v){switch(v){case 0:p.ctx.fillStyle=Ge(r.color),p.renderTextWithLetterSpacing(_,r.letterSpacing,l);var b=r.textShadow;b.length&&_.text.trim().length&&(b.slice(0).reverse().forEach(function(x){p.ctx.shadowColor=Ge(x.color),p.ctx.shadowOffsetX=x.offsetX.number*p.options.scale,p.ctx.shadowOffsetY=x.offsetY.number*p.options.scale,p.ctx.shadowBlur=x.blur.number,p.renderTextWithLetterSpacing(_,r.letterSpacing,l)}),p.ctx.shadowColor="",p.ctx.shadowOffsetX=0,p.ctx.shadowOffsetY=0,p.ctx.shadowBlur=0),r.textDecorationLine.length&&(p.ctx.fillStyle=Ge(r.textDecorationColor||r.color),r.textDecorationLine.forEach(function(x){switch(x){case 1:p.ctx.fillRect(_.bounds.left,Math.round(_.bounds.top+l),_.bounds.width,1);break;case 2:p.ctx.fillRect(_.bounds.left,Math.round(_.bounds.top),_.bounds.width,1);break;case 3:p.ctx.fillRect(_.bounds.left,Math.ceil(_.bounds.top+h),_.bounds.width,1);break}}));break;case 1:r.webkitTextStrokeWidth&&_.text.trim().length&&(p.ctx.strokeStyle=Ge(r.webkitTextStrokeColor),p.ctx.lineWidth=r.webkitTextStrokeWidth,p.ctx.lineJoin=window.chrome?"miter":"round",p.ctx.strokeText(_.text,_.bounds.left,_.bounds.top+l)),p.ctx.strokeStyle="",p.ctx.lineWidth=0,p.ctx.lineJoin="miter";break}})}),[2]})})},e.prototype.renderReplacedElement=function(t,r,n){if(n&&t.intrinsicWidth>0&&t.intrinsicHeight>0){var s=Lo(t),i=Po(r);this.path(i),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(n,0,0,t.intrinsicWidth,t.intrinsicHeight,s.left,s.top,s.width,s.height),this.ctx.restore()}},e.prototype.renderNodeContent=function(t){return fA(this,void 0,void 0,function(){var r,n,s,i,a,c,S,S,l,h,d,p,k,y,_,N,v,b,x,S,D,k,N;return nA(this,function(H){switch(H.label){case 0:this.applyEffects(t.getEffects(4)),r=t.container,n=t.curves,s=r.styles,i=0,a=r.textNodes,H.label=1;case 1:return i<a.length?(c=a[i],[4,this.renderTextNode(c,s)]):[3,4];case 2:H.sent(),H.label=3;case 3:return i++,[3,1];case 4:if(!(r instanceof Zw))return[3,8];H.label=5;case 5:return H.trys.push([5,7,,8]),[4,this.context.cache.match(r.src)];case 6:return S=H.sent(),this.renderReplacedElement(r,n,S),[3,8];case 7:return H.sent(),this.context.logger.error("Error loading image "+r.src),[3,8];case 8:if(r instanceof ey&&this.renderReplacedElement(r,n,r.canvas),!(r instanceof Ay))return[3,12];H.label=9;case 9:return H.trys.push([9,11,,12]),[4,this.context.cache.match(r.svg)];case 10:return S=H.sent(),this.renderReplacedElement(r,n,S),[3,12];case 11:return H.sent(),this.context.logger.error("Error loading svg "+r.svg.substring(0,255)),[3,12];case 12:return r instanceof sy&&r.tree?(l=new e(this.context,{scale:this.options.scale,backgroundColor:r.backgroundColor,x:0,y:0,width:r.width,height:r.height}),[4,l.render(r.tree)]):[3,14];case 13:h=H.sent(),r.width&&r.height&&this.ctx.drawImage(h,0,0,r.width,r.height,r.bounds.left,r.bounds.top,r.bounds.width,r.bounds.height),H.label=14;case 14:if(r instanceof Ru&&(d=Math.min(r.bounds.width,r.bounds.height),r.type===To?r.checked&&(this.ctx.save(),this.path([new K(r.bounds.left+d*.39363,r.bounds.top+d*.79),new K(r.bounds.left+d*.16,r.bounds.top+d*.5549),new K(r.bounds.left+d*.27347,r.bounds.top+d*.44071),new K(r.bounds.left+d*.39694,r.bounds.top+d*.5649),new K(r.bounds.left+d*.72983,r.bounds.top+d*.23),new K(r.bounds.left+d*.84,r.bounds.top+d*.34085),new K(r.bounds.left+d*.39363,r.bounds.top+d*.79)]),this.ctx.fillStyle=Ge(jg),this.ctx.fill(),this.ctx.restore()):r.type===xo&&r.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(r.bounds.left+d/2,r.bounds.top+d/2,d/4,0,Math.PI*2,!0),this.ctx.fillStyle=Ge(jg),this.ctx.fill(),this.ctx.restore())),vP(r)&&r.value.length){switch(p=this.createFontStyle(s),k=p[0],y=p[1],_=this.fontMetrics.getMetrics(k,y).baseline,this.ctx.font=k,this.ctx.fillStyle=Ge(s.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=IP(r.styles.textAlign),N=Lo(r),v=0,r.styles.textAlign){case 1:v+=N.width/2;break;case 2:v+=N.width;break}b=N.add(v,0,0,-N.height/2+1),this.ctx.save(),this.path([new K(N.left,N.top),new K(N.left+N.width,N.top),new K(N.left+N.width,N.top+N.height),new K(N.left,N.top+N.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new ds(r.value,b),s.letterSpacing,_),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!Ve(r.styles.display,2048))return[3,20];if(r.styles.listStyleImage===null)return[3,19];if(x=r.styles.listStyleImage,x.type!==0)return[3,18];S=void 0,D=x.url,H.label=15;case 15:return H.trys.push([15,17,,18]),[4,this.context.cache.match(D)];case 16:return S=H.sent(),this.ctx.drawImage(S,r.bounds.left-(S.width+10),r.bounds.top),[3,18];case 17:return H.sent(),this.context.logger.error("Error loading list-style-image "+D),[3,18];case 18:return[3,20];case 19:t.listValue&&r.styles.listStyleType!==-1&&(k=this.createFontStyle(s)[0],this.ctx.font=k,this.ctx.fillStyle=Ge(s.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",N=new Bt(r.bounds.left,r.bounds.top+me(r.styles.paddingTop,r.bounds.width),r.bounds.width,Qg(s.lineHeight,s.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new ds(t.listValue,N),s.letterSpacing,Qg(s.lineHeight,s.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),H.label=20;case 20:return[2]}})})},e.prototype.renderStackContent=function(t){return fA(this,void 0,void 0,function(){var r,n,x,s,i,x,a,c,x,l,h,x,d,p,x,y,_,x,v,b,x;return nA(this,function(S){switch(S.label){case 0:if(Ve(t.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(t.element)];case 1:S.sent(),r=0,n=t.negativeZIndex,S.label=2;case 2:return r<n.length?(x=n[r],[4,this.renderStack(x)]):[3,5];case 3:S.sent(),S.label=4;case 4:return r++,[3,2];case 5:return[4,this.renderNodeContent(t.element)];case 6:S.sent(),s=0,i=t.nonInlineLevel,S.label=7;case 7:return s<i.length?(x=i[s],[4,this.renderNode(x)]):[3,10];case 8:S.sent(),S.label=9;case 9:return s++,[3,7];case 10:a=0,c=t.nonPositionedFloats,S.label=11;case 11:return a<c.length?(x=c[a],[4,this.renderStack(x)]):[3,14];case 12:S.sent(),S.label=13;case 13:return a++,[3,11];case 14:l=0,h=t.nonPositionedInlineLevel,S.label=15;case 15:return l<h.length?(x=h[l],[4,this.renderStack(x)]):[3,18];case 16:S.sent(),S.label=17;case 17:return l++,[3,15];case 18:d=0,p=t.inlineLevel,S.label=19;case 19:return d<p.length?(x=p[d],[4,this.renderNode(x)]):[3,22];case 20:S.sent(),S.label=21;case 21:return d++,[3,19];case 22:y=0,_=t.zeroOrAutoZIndexOrTransformedOrOpacity,S.label=23;case 23:return y<_.length?(x=_[y],[4,this.renderStack(x)]):[3,26];case 24:S.sent(),S.label=25;case 25:return y++,[3,23];case 26:v=0,b=t.positiveZIndex,S.label=27;case 27:return v<b.length?(x=b[v],[4,this.renderStack(x)]):[3,30];case 28:S.sent(),S.label=29;case 29:return v++,[3,27];case 30:return[2]}})})},e.prototype.mask=function(t){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(t.slice(0).reverse()),this.ctx.closePath()},e.prototype.path=function(t){this.ctx.beginPath(),this.formatPath(t),this.ctx.closePath()},e.prototype.formatPath=function(t){var r=this;t.forEach(function(n,s){var i=UA(n)?n.start:n;s===0?r.ctx.moveTo(i.x,i.y):r.ctx.lineTo(i.x,i.y),UA(n)&&r.ctx.bezierCurveTo(n.startControl.x,n.startControl.y,n.endControl.x,n.endControl.y,n.end.x,n.end.y)})},e.prototype.renderRepeat=function(t,r,n,s){this.path(t),this.ctx.fillStyle=r,this.ctx.translate(n,s),this.ctx.fill(),this.ctx.translate(-n,-s)},e.prototype.resizeImage=function(t,r,n){var s;if(t.width===r&&t.height===n)return t;var i=(s=this.canvas.ownerDocument)!==null&&s!==void 0?s:document,a=i.createElement("canvas");a.width=Math.max(1,r),a.height=Math.max(1,n);var c=a.getContext("2d");return c.drawImage(t,0,0,t.width,t.height,0,0,r,n),a},e.prototype.renderBackgroundImage=function(t){return fA(this,void 0,void 0,function(){var r,n,s,i,a,c;return nA(this,function(l){switch(l.label){case 0:r=t.styles.backgroundImage.length-1,n=function(h){var d,p,y,Q,_e,Ce,I,Ae,m,_,Q,_e,Ce,I,Ae,v,b,x,S,D,k,N,H,U,m,C,Q,T,F,I,Ae,Ie,_e,Ce,Y,re,Be,Ze,W,le,fe,Le;return nA(this,function(xA){switch(xA.label){case 0:if(h.type!==0)return[3,5];d=void 0,p=h.url,xA.label=1;case 1:return xA.trys.push([1,3,,4]),[4,s.context.cache.match(p)];case 2:return d=xA.sent(),[3,4];case 3:return xA.sent(),s.context.logger.error("Error loading background-image "+p),[3,4];case 4:return d&&(y=wc(t,r,[d.width,d.height,d.width/d.height]),Q=y[0],_e=y[1],Ce=y[2],I=y[3],Ae=y[4],m=s.ctx.createPattern(s.resizeImage(d,I,Ae),"repeat"),s.renderRepeat(Q,m,_e,Ce)),[3,6];case 5:oS(h)?(_=wc(t,r,[null,null,null]),Q=_[0],_e=_[1],Ce=_[2],I=_[3],Ae=_[4],v=tS(h.angle,I,Ae),b=v[0],x=v[1],S=v[2],D=v[3],k=v[4],N=document.createElement("canvas"),N.width=I,N.height=Ae,H=N.getContext("2d"),U=H.createLinearGradient(x,D,S,k),_g(h.stops,b).forEach(function(lA){return U.addColorStop(lA.stop,Ge(lA.color))}),H.fillStyle=U,H.fillRect(0,0,I,Ae),I>0&&Ae>0&&(m=s.ctx.createPattern(N,"repeat"),s.renderRepeat(Q,m,_e,Ce))):aS(h)&&(C=wc(t,r,[null,null,null]),Q=C[0],T=C[1],F=C[2],I=C[3],Ae=C[4],Ie=h.position.length===0?[Fu]:h.position,_e=me(Ie[0],I),Ce=me(Ie[Ie.length-1],Ae),Y=rS(h,_e,Ce,I,Ae),re=Y[0],Be=Y[1],re>0&&Be>0&&(Ze=s.ctx.createRadialGradient(T+_e,F+Ce,0,T+_e,F+Ce,re),_g(h.stops,re*2).forEach(function(lA){return Ze.addColorStop(lA.stop,Ge(lA.color))}),s.path(Q),s.ctx.fillStyle=Ze,re!==Be?(W=t.bounds.left+.5*t.bounds.width,le=t.bounds.top+.5*t.bounds.height,fe=Be/re,Le=1/fe,s.ctx.save(),s.ctx.translate(W,le),s.ctx.transform(1,0,0,fe,0,0),s.ctx.translate(-W,-le),s.ctx.fillRect(T,Le*(F-le)+le,I,Ae*Le),s.ctx.restore()):s.ctx.fill())),xA.label=6;case 6:return r--,[2]}})},s=this,i=0,a=t.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return i<a.length?(c=a[i],[5,n(c)]):[3,4];case 2:l.sent(),l.label=3;case 3:return i++,[3,1];case 4:return[2]}})})},e.prototype.renderSolidBorder=function(t,r,n){return fA(this,void 0,void 0,function(){return nA(this,function(s){return this.path(tp(n,r)),this.ctx.fillStyle=Ge(t),this.ctx.fill(),[2]})})},e.prototype.renderDoubleBorder=function(t,r,n,s){return fA(this,void 0,void 0,function(){var i,a;return nA(this,function(c){switch(c.label){case 0:return r<3?[4,this.renderSolidBorder(t,n,s)]:[3,2];case 1:return c.sent(),[2];case 2:return i=uP(s,n),this.path(i),this.ctx.fillStyle=Ge(t),this.ctx.fill(),a=hP(s,n),this.path(a),this.ctx.fill(),[2]}})})},e.prototype.renderNodeBackgroundAndBorders=function(t){return fA(this,void 0,void 0,function(){var r,n,s,i,a,c,l,h,d=this;return nA(this,function(p){switch(p.label){case 0:return this.applyEffects(t.getEffects(2)),r=t.container.styles,n=!Kt(r.backgroundColor)||r.backgroundImage.length,s=[{style:r.borderTopStyle,color:r.borderTopColor,width:r.borderTopWidth},{style:r.borderRightStyle,color:r.borderRightColor,width:r.borderRightWidth},{style:r.borderBottomStyle,color:r.borderBottomColor,width:r.borderBottomWidth},{style:r.borderLeftStyle,color:r.borderLeftColor,width:r.borderLeftWidth}],i=EP($r(r.backgroundClip,0),t.curves),n||r.boxShadow.length?(this.ctx.save(),this.path(i),this.ctx.clip(),Kt(r.backgroundColor)||(this.ctx.fillStyle=Ge(r.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(t.container)]):[3,2];case 1:p.sent(),this.ctx.restore(),r.boxShadow.slice(0).reverse().forEach(function(y){d.ctx.save();var _=Do(t.curves),v=y.inset?0:yP,b=cP(_,-v+(y.inset?1:-1)*y.spread.number,(y.inset?1:-1)*y.spread.number,y.spread.number*(y.inset?-2:2),y.spread.number*(y.inset?-2:2));y.inset?(d.path(_),d.ctx.clip(),d.mask(b)):(d.mask(_),d.ctx.clip(),d.path(b)),d.ctx.shadowOffsetX=y.offsetX.number+v,d.ctx.shadowOffsetY=y.offsetY.number,d.ctx.shadowColor=Ge(y.color),d.ctx.shadowBlur=y.blur.number,d.ctx.fillStyle=y.inset?Ge(y.color):"rgba(0,0,0,1)",d.ctx.fill(),d.ctx.restore()}),p.label=2;case 2:a=0,c=0,l=s,p.label=3;case 3:return c<l.length?(h=l[c],h.style!==0&&!Kt(h.color)&&h.width>0?h.style!==2?[3,5]:[4,this.renderDashedDottedBorder(h.color,h.width,a,t.curves,2)]:[3,11]):[3,13];case 4:return p.sent(),[3,11];case 5:return h.style!==3?[3,7]:[4,this.renderDashedDottedBorder(h.color,h.width,a,t.curves,3)];case 6:return p.sent(),[3,11];case 7:return h.style!==4?[3,9]:[4,this.renderDoubleBorder(h.color,h.width,a,t.curves)];case 8:return p.sent(),[3,11];case 9:return[4,this.renderSolidBorder(h.color,a,t.curves)];case 10:p.sent(),p.label=11;case 11:a++,p.label=12;case 12:return c++,[3,3];case 13:return[2]}})})},e.prototype.renderDashedDottedBorder=function(t,r,n,s,i){return fA(this,void 0,void 0,function(){var a,c,l,h,d,p,y,_,v,b,x,S,D,k,N,H,N,H;return nA(this,function(U){return this.ctx.save(),a=dP(s,n),c=tp(s,n),i===2&&(this.path(c),this.ctx.clip()),UA(c[0])?(l=c[0].start.x,h=c[0].start.y):(l=c[0].x,h=c[0].y),UA(c[1])?(d=c[1].end.x,p=c[1].end.y):(d=c[1].x,p=c[1].y),n===0||n===2?y=Math.abs(l-d):y=Math.abs(h-p),this.ctx.beginPath(),i===3?this.formatPath(a):this.formatPath(c.slice(0,2)),_=r<3?r*3:r*2,v=r<3?r*2:r,i===3&&(_=r,v=r),b=!0,y<=_*2?b=!1:y<=_*2+v?(x=y/(2*_+v),_*=x,v*=x):(S=Math.floor((y+v)/(_+v)),D=(y-S*_)/(S-1),k=(y-(S+1)*_)/S,v=k<=0||Math.abs(v-D)<Math.abs(v-k)?D:k),b&&(i===3?this.ctx.setLineDash([0,_+v]):this.ctx.setLineDash([_,v])),i===3?(this.ctx.lineCap="round",this.ctx.lineWidth=r):this.ctx.lineWidth=r*2+1.1,this.ctx.strokeStyle=Ge(t),this.ctx.stroke(),this.ctx.setLineDash([]),i===2&&(UA(c[0])&&(N=c[3],H=c[0],this.ctx.beginPath(),this.formatPath([new K(N.end.x,N.end.y),new K(H.start.x,H.start.y)]),this.ctx.stroke()),UA(c[1])&&(N=c[1],H=c[2],this.ctx.beginPath(),this.formatPath([new K(N.end.x,N.end.y),new K(H.start.x,H.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},e.prototype.render=function(t){return fA(this,void 0,void 0,function(){var r;return nA(this,function(n){switch(n.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=Ge(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),r=lP(t),[4,this.renderStack(r)];case 1:return n.sent(),this.applyEffects([]),[2,this.canvas]}})})},e}(Cy),vP=function(A){return A instanceof ny||A instanceof ry?!0:A instanceof Ru&&A.type!==xo&&A.type!==To},EP=function(A,e){switch(A){case 0:return Do(e);case 2:return nP(e);case 1:default:return Po(e)}},IP=function(A){switch(A){case 1:return"center";case 2:return"right";case 0:default:return"left"}},_P=["-apple-system","system-ui"],UP=function(A){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?A.filter(function(e){return _P.indexOf(e)===-1}):A},QP=function(A){OA(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.canvas=r.canvas?r.canvas:document.createElement("canvas"),n.ctx=n.canvas.getContext("2d"),n.options=r,n.canvas.width=Math.floor(r.width*r.scale),n.canvas.height=Math.floor(r.height*r.scale),n.canvas.style.width=r.width+"px",n.canvas.style.height=r.height+"px",n.ctx.scale(n.options.scale,n.options.scale),n.ctx.translate(-r.x,-r.y),n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+r.width+"x"+r.height+" at "+r.x+","+r.y+") with scale "+r.scale),n}return e.prototype.render=function(t){return fA(this,void 0,void 0,function(){var r,n;return nA(this,function(s){switch(s.label){case 0:return r=cl(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,t),[4,bP(r)];case 1:return n=s.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=Ge(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(n,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},e}(Cy),bP=function(A){return new Promise(function(e,t){var r=new Image;r.onload=function(){e(r)},r.onerror=t,r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},FP=function(){function A(e){var t=e.id,r=e.enabled;this.id=t,this.enabled=r,this.start=Date.now()}return A.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window!="undefined"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,Bi([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.prototype.getTime=function(){return Date.now()-this.start},A.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&typeof window!="undefined"&&window.console&&typeof console.info=="function"&&console.info.apply(console,Bi([this.id,this.getTime()+"ms"],e))},A.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window!="undefined"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,Bi([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window!="undefined"&&window.console&&typeof console.error=="function"?console.error.apply(console,Bi([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.instances={},A}(),TP=function(){function A(e,t){var r;this.windowBounds=t,this.instanceName="#"+A.instanceCount++,this.logger=new FP({id:this.instanceName,enabled:e.logging}),this.cache=(r=e.cache)!==null&&r!==void 0?r:new qD(this,e)}return A.instanceCount=1,A}(),xP=function(A,e){return e===void 0&&(e={}),SP(A,e)};typeof window!="undefined"&&gy.setContext(window);var SP=function(A,e){return fA(void 0,void 0,void 0,function(){var t,r,n,s,i,a,c,l,h,d,p,y,_,v,b,x,S,D,k,N,U,H,U,m,C,Q,T,F,I,Ae,Ie,_e,Ce,Y,re,Be,Ze,W,le,fe;return nA(this,function(Le){switch(Le.label){case 0:if(!A||typeof A!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(t=A.ownerDocument,!t)throw new Error("Element is not attached to a Document");if(r=t.defaultView,!r)throw new Error("Document is not attached to a Window");return n={allowTaint:(m=e.allowTaint)!==null&&m!==void 0?m:!1,imageTimeout:(C=e.imageTimeout)!==null&&C!==void 0?C:15e3,proxy:e.proxy,useCORS:(Q=e.useCORS)!==null&&Q!==void 0?Q:!1},s=Xc({logging:(T=e.logging)!==null&&T!==void 0?T:!0,cache:e.cache},n),i={windowWidth:(F=e.windowWidth)!==null&&F!==void 0?F:r.innerWidth,windowHeight:(I=e.windowHeight)!==null&&I!==void 0?I:r.innerHeight,scrollX:(Ae=e.scrollX)!==null&&Ae!==void 0?Ae:r.pageXOffset,scrollY:(Ie=e.scrollY)!==null&&Ie!==void 0?Ie:r.pageYOffset},a=new Bt(i.scrollX,i.scrollY,i.windowWidth,i.windowHeight),c=new TP(s,a),l=(_e=e.foreignObjectRendering)!==null&&_e!==void 0?_e:!1,h={allowTaint:(Ce=e.allowTaint)!==null&&Ce!==void 0?Ce:!1,onclone:e.onclone,ignoreElements:e.ignoreElements,inlineImages:l,copyStyles:l},c.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),d=new Zg(c,A,h),p=d.clonedReferenceElement,p?[4,d.toIFrame(t,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return y=Le.sent(),_=Du(p)||RD(p)?cx(p.ownerDocument):na(c,p),v=_.width,b=_.height,x=_.left,S=_.top,D=RP(c,p,e.backgroundColor),k={canvas:e.canvas,backgroundColor:D,scale:(re=(Y=e.scale)!==null&&Y!==void 0?Y:r.devicePixelRatio)!==null&&re!==void 0?re:1,x:((Be=e.x)!==null&&Be!==void 0?Be:0)+x,y:((Ze=e.y)!==null&&Ze!==void 0?Ze:0)+S,width:(W=e.width)!==null&&W!==void 0?W:Math.ceil(v),height:(le=e.height)!==null&&le!==void 0?le:Math.ceil(b)},l?(c.logger.debug("Document cloned, using foreign object rendering"),U=new QP(c,k),[4,U.render(p)]):[3,3];case 2:return N=Le.sent(),[3,5];case 3:return c.logger.debug("Document cloned, element located at "+x+","+S+" with size "+v+"x"+b+" using computed rendering"),c.logger.debug("Starting DOM parsing"),H=oy(c,p),D===H.styles.backgroundColor&&(H.styles.backgroundColor=ht.TRANSPARENT),c.logger.debug("Starting renderer for element at "+k.x+","+k.y+" with size "+k.width+"x"+k.height),U=new CP(c,k),[4,U.render(H)];case 4:N=Le.sent(),Le.label=5;case 5:return(!((fe=e.removeContainer)!==null&&fe!==void 0)||fe)&&(Zg.destroy(y)||c.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),c.logger.debug("Finished rendering"),[2,N]}})})},RP=function(A,e,t){var r=e.ownerDocument,n=r.documentElement?us(A,getComputedStyle(r.documentElement).backgroundColor):ht.TRANSPARENT,s=r.body?us(A,getComputedStyle(r.body).backgroundColor):ht.TRANSPARENT,i=typeof t=="string"?us(A,t):t===null?ht.TRANSPARENT:4294967295;return e===r.documentElement?Kt(n)?Kt(s)?i:s:n:i};const DP=E.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${A=>A.theme.spacing.medium};
  font-family: 'Roboto', sans-serif;
`,PP=E.h1`
  font-size: 2rem;
  margin-bottom: ${A=>A.theme.spacing.medium};
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: ${A=>A.theme.colors.text.primary};
`,LP=E.div`
  display: flex;
  flex-direction: column;
  min-height: 120px;
  gap: 10px;
  align-items: center;
`,ar=E.button`
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  background-color: ${A=>A.theme.colors.surface.secondary};
  min-height: 48px;
  color: ${A=>A.theme.colors.text.primary};
  border: none;
  border-radius: ${A=>A.theme.borderRadius.small};
  transition: background-color ${A=>A.theme.transitions.normal};
  font-family: 'Roboto', sans-serif;
  
  &:hover {
    background-color: ${A=>A.theme.buttons.secondary.hoverBackground};
  }
`,HP=E.div`
  width: 100%;
  max-width: 500px;
  background: linear-gradient(to right, rgb(125, 163, 216), rgb(246, 220, 182));
  color: #fff;
  border-radius: ${A=>A.theme.borderRadius.medium};
  padding: ${A=>A.theme.spacing.medium};
  margin-bottom: ${A=>A.theme.spacing.medium};
  position: relative;
  box-shadow: 0 8px 24px 0 rgba(0,0,0,0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${A=>A.theme.spacing.medium};
  min-height: 220px;
`,kP=E.div`
  flex: 1;
`,NP=E.h3`
  margin-top: 0;
  margin-bottom: 8px;
  font-weight: bold;
  color: ${A=>A.theme.colors.text.primary};
`,OP=E.div`
  margin-bottom: 12px;
`,MP=E.div`
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 2px;
  color: ${A=>A.theme.colors.text.primary};
  text-shadow: 2px 2px 6px rgba(0,0,0,.75);
`,VP=E.div`
  font-size: 1rem;
  margin-bottom: 12px;
  text-shadow: 2px 2px 6px rgba(0,0,0,.75);
  color: ${A=>A.theme.colors.text.secondary};
`,KP=E.img`
  width: 120px;
  height: 120px;
  border-radius: ${A=>A.theme.borderRadius.medium};
  object-fit: cover;
  margin-left: 12px;
  box-shadow: ${A=>A.theme.shadows.small};
`,np=E.div`
  width: 100%;
  max-width: 500px;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.01);
`,jP=E.div`
  min-height: 48px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`,GP=({songs:A,album:e})=>{const[t,r]=L.useState([]),[n,s]=L.useState([...A]),[i,a]=L.useState(null),[c,l]=L.useState(!1),[h,d]=L.useState(!1),p=()=>w(null,null,function*(){d(!0);const D=document.getElementById("final-ranking");if(!D)return;const k=document.getElementById("share-buttons");k&&(k.style.display="none");const H=(yield xP(D)).toDataURL("image/png"),U=document.createElement("a");U.href=H,U.download="ranking.png",U.click(),k&&(k.style.display=""),d(!1)}),y=()=>{const D=encodeURIComponent("I just ranked my favorite songs! Try it here: http://beatmeter.top");window.open(`https://twitter.com/intent/tweet?text=${D}`)};L.useEffect(()=>{if(n.length===0&&!i){l(!0);return}if(!i&&n.length>0){const D=n[0];s(n.slice(1)),t.length===0?r([D]):a({song:D,index:0})}},[n,i,t]);const _=D=>{const{song:k,index:N}=i;if(D)N+1<t.length?a({song:k,index:N+1}):(r([...t,k]),a(null));else{const H=[...t];H.splice(N,0,k),r(H),a(null)}},v=e==null?void 0:e.name,b=e!=null&&e.artists?e.artists.map(D=>D.name).join(", "):"",x=e!=null&&e.images&&e.images.length>0?e.images[0].url:null,S=c?f.jsxs(HP,{id:"final-ranking",children:[f.jsxs(kP,{children:[f.jsxs(NP,{children:["MY ",v||"Song"," Ranking"]}),v&&f.jsx(OP,{children:f.jsx(MP,{children:v})}),b&&f.jsx(VP,{children:b}),f.jsx("ol",{children:t.map((D,k)=>f.jsx("li",{children:D},k))})]}),x&&f.jsx(KP,{src:x,alt:"Album cover"})]}):i?f.jsxs(np,{children:[f.jsx(PP,{children:"Choose your favorite"}),f.jsxs(LP,{children:[f.jsx(ar,{onClick:()=>_(!1),children:i.song}),f.jsx(ar,{onClick:()=>_(!0),children:t[i.index]}),"      "]})]}):f.jsx(np,{children:f.jsx(ar,{onClick:()=>a(null),children:"Start Sorting"})});return f.jsxs(DP,{children:[S,f.jsx(jP,{children:c?f.jsxs(f.Fragment,{children:[f.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:8},children:[f.jsx(ar,{onClick:p,disabled:h,children:h?"Capturing...":"Download Image"}),f.jsx(ar,{onClick:y,children:"Share on Twitter"})]}),f.jsx(ar,{onClick:()=>window.location.reload(),children:"Sort Again"})]}):f.jsx(ar,{style:{visibility:"hidden"},children:"Sort Again"})})]})},$P=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
`,WP=E.form`
  width: 100%;
  max-width: 400px;
  background-color: ${A=>A.theme.colors.surface.primary||"rgba(30, 30, 30, 0.6)"};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`,XP=E.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,sp=E.div`
  margin-bottom: 1.5rem;
`,ip=E.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,op=E.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${A=>A.theme.colors.border||"#444"};
  border-radius: 4px;
  background-color: ${A=>A.theme.colors.surface.secondary||"rgba(20, 20, 20, 0.6)"};
  color: ${A=>A.theme.colors.text.primary||"#fff"};
  
  &:focus {
    outline: none;
    border-color: ${A=>A.theme.colors.accent||"#1db954"};
  }
`,zP=E.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: ${A=>A.theme.colors.accent||"#1db954"};
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${A=>A.disabled?"#cccccc":"#18a448"};
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`,qP=E.div`
  text-align: right;
  margin-bottom: 1.5rem;
  
  a {
    color: ${A=>A.theme.colors.accent||"#1db954"};
    text-decoration: none;
    font-size: 0.9rem;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,YP=E.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  
  &::before, &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${A=>A.theme.colors.border||"#444"};
  }
  
  span {
    padding: 0 10px;
    color: ${A=>A.theme.colors.text.secondary||"rgba(255, 255, 255, 0.7)"};
  }
`,JP=E.button`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${A=>A.theme.colors.border||"#444"};
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  
  img {
    height: 1.5rem;
    margin-right: 0.5rem;
  }
  
  &:hover {
    background-color: #f1f1f1;
  }
`,ZP=E.div`
  color: #ff4d4f;
  margin-bottom: 1rem;
  text-align: center;
`,eL=E.p`
  margin-top: 1.5rem;
  text-align: center;
  color: ${A=>A.theme.colors.text.secondary||"rgba(255, 255, 255, 0.7)"};
  
  a {
    color: ${A=>A.theme.colors.accent||"#1db954"};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;function AL(){const[A,e]=L.useState(""),[t,r]=L.useState(""),[n,s]=L.useState(""),[i,a]=L.useState(!1),c=wA(),{login:l,googleSignIn:h}=Pe();function d(y){return w(this,null,function*(){y.preventDefault();try{s(""),a(!0);const _=yield l(A,t),v=cA(te,"userprofiles",_.user.uid),b=yield IA(v);b.exists()&&b.data().bio?c("/"):c("/profile-setup")}catch(_){console.error("Error during login:",_),_.code==="auth/user-not-found"||_.code==="auth/wrong-password"?s("Invalid email or password"):_.code==="auth/invalid-email"?s("Invalid email address"):_.code==="auth/too-many-requests"?s("Too many failed login attempts. Please try again later."):s("Failed to log in. Please try again.")}a(!1)})}function p(){return w(this,null,function*(){try{s(""),a(!0);const y=yield h(),_=cA(te,"userprofiles",y.uid),v=yield IA(_);v.exists()&&v.data().bio?c("/"):c("/profile-setup")}catch(y){console.error("Error during Google sign-in:",y),s("Failed to sign in with Google. Please try again.")}a(!1)})}return f.jsx($P,{children:f.jsxs(WP,{onSubmit:d,children:[f.jsx(XP,{children:"Log In"}),n&&f.jsx(ZP,{children:n}),f.jsxs(sp,{children:[f.jsx(ip,{htmlFor:"email",children:"Email"}),f.jsx(op,{type:"email",id:"email",value:A,onChange:y=>e(y.target.value),required:!0})]}),f.jsxs(sp,{children:[f.jsx(ip,{htmlFor:"password",children:"Password"}),f.jsx(op,{type:"password",id:"password",value:t,onChange:y=>r(y.target.value),required:!0})]}),f.jsx(qP,{children:f.jsx(jt,{to:"/forgot-password",children:"Forgot Password?"})}),f.jsx(zP,{type:"submit",disabled:i,children:i?"Logging in...":"Log In"}),f.jsx(YP,{children:f.jsx("span",{children:"OR"})}),f.jsxs(JP,{type:"button",onClick:p,disabled:i,children:[f.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google logo"}),"Log in with Google"]}),f.jsxs(eL,{children:["Need an account? ",f.jsx(jt,{to:"/create-account",children:"Create Account"})]})]})})}function tL(){const{currentUser:A}=Pe(),e=wA();return L.useEffect(()=>{A&&e("/")},[A,e]),f.jsx(AL,{})}const rL=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
`,nL=E.form`
  width: 100%;
  max-width: 400px;
  background-color: ${A=>A.theme.colors.surface.primary||"rgba(30, 30, 30, 0.6)"};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`,sL=E.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,Mi=E.div`
  margin-bottom: 1.5rem;
`,Vi=E.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,Ki=E.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${A=>A.theme.colors.border||"#444"};
  border-radius: 4px;
  background-color: ${A=>A.theme.colors.surface.secondary||"rgba(20, 20, 20, 0.6)"};
  color: ${A=>A.theme.colors.text.primary||"#fff"};
  
  &:focus {
    outline: none;
    border-color: ${A=>A.theme.colors.accent||"#1db954"};
  }
`,iL=E.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: ${A=>A.theme.colors.accent||"#1db954"};
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${A=>A.disabled?"#cccccc":"#18a448"};
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`,oL=E.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  
  &::before, &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid ${A=>A.theme.colors.border||"#444"};
  }
  
  span {
    padding: 0 10px;
    color: ${A=>A.theme.colors.text.secondary||"rgba(255, 255, 255, 0.7)"};
  }
`,aL=E.button`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${A=>A.theme.colors.border||"#444"};
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  
  img {
    height: 1.5rem;
    margin-right: 0.5rem;
  }
  
  &:hover {
    background-color: #f1f1f1;
  }
`,cL=E.div`
  color: #ff4d4f;
  margin-bottom: 1rem;
  text-align: center;
`,lL=E.p`
  margin-top: 1.5rem;
  text-align: center;
  color: ${A=>A.theme.colors.text.secondary||"rgba(255, 255, 255, 0.7)"};
  
  a {
    color: ${A=>A.theme.colors.accent||"#1db954"};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;function uL(){const[A,e]=L.useState(""),[t,r]=L.useState(""),[n,s]=L.useState(""),[i,a]=L.useState(""),[c,l]=L.useState(""),[h,d]=L.useState(!1),p=wA(),{signup:y,googleSignIn:_}=Pe();function v(x){return w(this,null,function*(){if(x.preventDefault(),t!==n)return l("Passwords do not match");if(t.length<6)return l("Password must be at least 6 characters");if(!i.trim())return l("Please enter a display name");try{l(""),d(!0),yield y(A,t,i),p("/profile-setup")}catch(S){console.error("Error during signup:",S),S.code==="auth/email-already-in-use"?l("Email is already in use. Please use a different email or log in"):S.code==="auth/invalid-email"?l("Invalid email address"):l("Failed to create an account. Please try again.")}d(!1)})}function b(){return w(this,null,function*(){try{l(""),d(!0),yield _(),p("/profile-setup")}catch(x){console.error("Error during Google sign-in:",x),l("Failed to sign in with Google. Please try again.")}d(!1)})}return f.jsx(rL,{children:f.jsxs(nL,{onSubmit:v,children:[f.jsx(sL,{children:"Create Account"}),c&&f.jsx(cL,{children:c}),f.jsxs(Mi,{children:[f.jsx(Vi,{htmlFor:"displayName",children:"Username"}),f.jsx(Ki,{type:"text",id:"displayName",value:i,onChange:x=>a(x.target.value),required:!0})]}),f.jsxs(Mi,{children:[f.jsx(Vi,{htmlFor:"email",children:"Email"}),f.jsx(Ki,{type:"email",id:"email",value:A,onChange:x=>e(x.target.value),required:!0})]}),f.jsxs(Mi,{children:[f.jsx(Vi,{htmlFor:"password",children:"Password"}),f.jsx(Ki,{type:"password",id:"password",value:t,onChange:x=>r(x.target.value),required:!0})]}),f.jsxs(Mi,{children:[f.jsx(Vi,{htmlFor:"confirmPassword",children:"Confirm Password"}),f.jsx(Ki,{type:"password",id:"confirmPassword",value:n,onChange:x=>s(x.target.value),required:!0})]}),f.jsx(iL,{type:"submit",disabled:h,children:h?"Creating account...":"Create Account"}),f.jsx(oL,{children:f.jsx("span",{children:"OR"})}),f.jsxs(aL,{type:"button",onClick:b,disabled:h,children:[f.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google logo"}),"Sign up with Google"]}),f.jsxs(lL,{children:["Already have an account? ",f.jsx(jt,{to:"/login",children:"Log In"})]})]})})}function hL(){const{currentUser:A}=Pe(),e=wA();return L.useEffect(()=>{A&&e("/")},[A,e]),f.jsx(uL,{})}const dL=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
`,fL=E.form`
  width: 100%;
  max-width: 400px;
  background-color: ${A=>A.theme.colors.surface.primary||"rgba(30, 30, 30, 0.6)"};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`,gL=E.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,pL=E.p`
  text-align: center;
  margin-bottom: 2rem;
  color: ${A=>A.theme.colors.text.secondary||"rgba(255, 255, 255, 0.7)"};
`,mL=E.div`
  margin-bottom: 1.5rem;
`,BL=E.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,wL=E.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${A=>A.theme.colors.border||"#444"};
  border-radius: 4px;
  background-color: ${A=>A.theme.colors.surface.secondary||"rgba(20, 20, 20, 0.6)"};
  color: ${A=>A.theme.colors.text.primary||"#fff"};
  
  &:focus {
    outline: none;
    border-color: ${A=>A.theme.colors.accent||"#1db954"};
  }
`,yL=E.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: ${A=>A.theme.colors.accent||"#1db954"};
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${A=>A.disabled?"#cccccc":"#18a448"};
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`,CL=E.div`
  color: #52c41a;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0.75rem;
  background-color: rgba(82, 196, 26, 0.1);
  border-radius: 4px;
`,vL=E.div`
  color: #ff4d4f;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0.75rem;
  background-color: rgba(255, 77, 79, 0.1);
  border-radius: 4px;
`,EL=E.p`
  margin-top: 1.5rem;
  text-align: center;
  color: ${A=>A.theme.colors.text.secondary||"rgba(255, 255, 255, 0.7)"};
  
  a {
    color: ${A=>A.theme.colors.accent||"#1db954"};
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;function IL(){const[A,e]=L.useState(""),[t,r]=L.useState(""),[n,s]=L.useState(""),[i,a]=L.useState(!1),{resetPassword:c}=Pe();function l(h){return w(this,null,function*(){h.preventDefault();try{s(""),r(""),a(!0),yield c(A),s("Check your inbox for further instructions")}catch(d){console.error("Error resetting password:",d),d.code==="auth/user-not-found"?r("No account found with that email"):d.code==="auth/invalid-email"?r("Invalid email address"):r("Failed to reset password. Please try again.")}a(!1)})}return f.jsx(dL,{children:f.jsxs(fL,{onSubmit:l,children:[f.jsx(gL,{children:"Password Reset"}),f.jsx(pL,{children:"Enter your email address and we'll send you instructions on how to reset your password."}),t&&f.jsx(vL,{children:t}),n&&f.jsx(CL,{children:n}),f.jsxs(mL,{children:[f.jsx(BL,{htmlFor:"email",children:"Email"}),f.jsx(wL,{type:"email",id:"email",value:A,onChange:h=>e(h.target.value),required:!0})]}),f.jsx(yL,{type:"submit",disabled:i,children:i?"Sending...":"Reset Password"}),f.jsx(EL,{children:f.jsx(jt,{to:"/login",children:"Back to Log In"})})]})})}function _L(){const{currentUser:A}=Pe(),e=wA();return L.useEffect(()=>{A&&e("/")},[A,e]),f.jsx(IL,{})}const UL=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${A=>A.theme.spacing.large||"20px"};
  background-color: ${A=>A.theme.colors.background.secondary||"#f4f4f4"};
`,QL=E.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${A=>A.theme.colors.text.primary||"#111"};
  margin-bottom: ${A=>A.theme.spacing.medium||"20px"};
`,bL=E.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${A=>A.theme.spacing.large||"20px"};
  width: 100%;
  max-width: 1200px;
`,FL=E.div`
  background-color: ${A=>A.theme.colors.surface.primary||"#fff"};
  border-radius: ${A=>A.theme.borderRadius.medium||"8px"};
  box-shadow: ${A=>A.theme.shadows.medium||"0 2px 4px rgba(0, 0, 0, 0.1)"};
  width: 300px;
  overflow: hidden;
  transition: transform ${A=>A.theme.transitions.normal||"0.3s"};
  
  &:hover {
    transform: translateY(-5px);
  }
`,TL=E.p`
  font-size: 1rem;
  color: ${A=>A.theme.colors.text.secondary||"#666"};
  margin: ${A=>A.theme.spacing.small||"10px"} 0;
`,xL=E.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,SL=E.div`
  padding: ${A=>A.theme.spacing.medium||"15px"};
`,RL=E.h3`
  font-size: 1.5rem;
  color: ${A=>A.theme.colors.text.primary||"#111"};
  margin: ${A=>A.theme.spacing.small||"10px"} 0;
`;E.button`
  background-color: ${A=>A.theme.colors.primary||"#6200ea"};
  color: #fff;
  border: none;
  border-radius: ${A=>A.theme.borderRadius.small||"4px"};
  padding: ${A=>A.theme.spacing.small||"10px"} ${A=>A.theme.spacing.medium||"15px"};
  cursor: pointer;
  font-size: 1rem;
  transition: background-color ${A=>A.theme.transitions.normal||"0.3s"};
  
  &:hover {
    background-color: ${A=>A.theme.colors.primaryHover||"#3700b3"};
  }
`;const DL=()=>f.jsx(f.Fragment,{children:f.jsxs(UL,{children:[f.jsx(QL,{children:"Your Lists"}),f.jsx(bL,{children:f.jsxs(FL,{children:[f.jsx(xL,{src:"https://via.placeholder.com/150",alt:"Playlist Cover"}),f.jsxs(SL,{children:[f.jsx(RL,{children:"Chill Vibes"}),f.jsx(TL,{children:"A collection of relaxing tunes."})]})]})})]})}),PL=E.div`
  padding: 20px;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  
  @media (min-width: 1200px) {
    max-width: 1200px;
    padding: 20px 40px;
  }
  
  @media (min-width: 1600px) {
    max-width: 1400px;
  }
`,LL=E.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 2px 2px 4px rgba(131, 131, 131, 0.5);
`,HL=E.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  
  form {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`,kL=E.input`
  padding: 12px 16px;
  font-size: 1rem;
  border: 2px solid #ddd;
  border-radius: 25px;
  width: 400px;
  outline: none;
  transition: border-color 0.3s;
  
  &:focus {
    border-color: #1db954;
  }
`,ap=E.button`
  padding: 12px 24px;
  font-size: 1rem;
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover:not(:disabled) {
    background-color: #1ed760;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,NL=E.div`
  min-height: 400px;
`,OL=E.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
  padding: 0 10px;
  
  @media (max-width: 1400px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 18px;
  }
  
  @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 16px;
    padding: 0 5px;
  }
  
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 12px;
    padding: 0;
  }
`,ML=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`,cp=E.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover:not(:disabled) {
    background-color: #1ed760;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`,VL=E.span`
  font-size: 1rem;
  color: #666;
  font-weight: 500;
`,KL=E.div`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  padding: 60px 0;
`,jL=E.div`
  background-color: #fee;
  color: #c33;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 20px;
  text-align: center;
`,GL=()=>{const[A]=gp(),[e,t]=L.useState([]),[r,n]=L.useState(!1),[s,i]=L.useState(null),[a,c]=L.useState(1),[l,h]=L.useState(""),[d,p]=L.useState([]),[y,_]=L.useState(!1),v=20,b=5,x=(m=1)=>w(null,null,function*(){var C;n(!0),i(null);try{const Q=(m-1)*v,T=_o(`/music/new-releases?limit=${v}&offset=${Q}`);console.log("Fetching albums from:",T),console.log("API Base URL:","https://us-central1-beatmeter-baf5a.cloudfunctions.net/api");const F=yield fetch(T);if(console.log("Response status:",F.status),console.log("Response ok:",F.ok),!F.ok){const Ie=yield F.text();throw console.error("API Error Response:",Ie),new Error(`Failed to fetch albums: ${F.status} ${F.statusText}`)}const I=yield F.json();console.log("API Response data:",I);const Ae=((C=I.albums)==null?void 0:C.items)||I.albums||I||[];console.log("Processed albums data:",Ae),t(Array.isArray(Ae)?Ae:[])}catch(Q){console.error("Full error object:",Q),i(`Failed to load albums: ${Q.message}`)}finally{n(!1)}}),S=m=>w(null,null,function*(){var C;if(m.trim()){_(!0),i(null);try{const Q=_o(`/music/search?q=${encodeURIComponent(m)}&type=album&limit=${v}`);console.log("Searching music at:",Q);const T=yield fetch(Q);if(console.log("Search response status:",T.status),!T.ok){const Ae=yield T.text();throw console.error("Search API Error Response:",Ae),new Error(`Failed to search: ${T.status} ${T.statusText}`)}const F=yield T.json();console.log("Search response data:",F);const I=((C=F.albums)==null?void 0:C.items)||F.albums||F||[];console.log("Processed search data:",I),p(Array.isArray(I)?I:[])}catch(Q){console.error("Search error:",Q),i(`Failed to search: ${Q.message}`)}finally{_(!1)}}});L.useEffect(()=>{x(a)},[a]),L.useEffect(()=>{const m=A.get("search")||A.get("q");m&&(h(m),S(m))},[A]);const D=m=>{m.preventDefault(),l.trim()&&S(l)},k=()=>{h(""),p([]),_(!1)},N=d.length>0?d:e||[],H=d.length===0,U=m=>{m>=1&&m<=b&&c(m)};return f.jsxs(PL,{children:[f.jsx(LL,{children:"Discover Music"}),f.jsx(HL,{children:f.jsxs("form",{onSubmit:D,children:[f.jsx(kL,{type:"text",placeholder:"Search for albums, artists, or songs...",value:l,onChange:m=>h(m.target.value)}),f.jsx(ap,{type:"submit",disabled:y,children:y?"Searching...":"Search"}),d.length>0&&f.jsx(ap,{type:"button",onClick:k,children:"Clear"})]})}),f.jsxs(NL,{children:[s&&f.jsx(jL,{children:s}),r||y?f.jsx(KL,{children:"Loading..."}):f.jsxs(f.Fragment,{children:["            ",f.jsx(OL,{children:N.map(m=>f.jsx(Qu,{album:m,variant:"grid"},m.id))}),H&&f.jsxs(ML,{children:[f.jsx(cp,{onClick:()=>U(a-1),disabled:a===1,children:"← Previous"}),f.jsxs(VL,{children:["Page ",a," of ",b]}),f.jsx(cp,{onClick:()=>U(a+1),disabled:a===b,children:"Next →"})]})]})]})]})},$L=E.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`,WL=E.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);
`,XL=E.span`
  color: ${A=>A.theme.colors.accent||"#1db954"};
`,zL=E.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`,yc=E.button`
  background: none;
  border: none;
  color: ${A=>A.$active?A.theme.colors.accent||"#1db954":"rgba(255, 255, 255, 0.7)"};
  font-size: 1rem;
  font-weight: ${A=>A.$active?"600":"400"};
  padding: 10px 0;
  border-bottom: 2px solid ${A=>A.$active?A.theme.colors.accent||"#1db954":"transparent"};
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    color: ${A=>A.theme.colors.text.primary||"#fff"};
  }
`,qL=E.div`
  min-height: 400px;
`,lp=E.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);
`,YL=E.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`,JL=E.div`
  background: rgba(30, 30, 30, 0.6);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s;
  cursor: pointer;
  
  &:hover {
    background: rgba(40, 40, 40, 0.8);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`,ZL=E.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
`,e4=E.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.1);
`,A4=E.div`
  flex: 1;
`,t4=E.h4`
  margin: 0;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
`,r4=E.p`
  margin: 10px 0 0 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,n4=E.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`,s4=E.div`
  text-align: center;
  padding: 40px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
`,i4=E.div`
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  color: #ff6b6b;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
`,o4=E.div`
  text-align: center;
  padding: 40px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;
`,a4=()=>{const[A]=gp(),e=wA(),{currentUser:t}=Pe(),r=A.get("q")||"",n=A.get("tab")||"all",[s,i]=L.useState([]),[a,c]=L.useState([]),[l,h]=L.useState(!1),[d,p]=L.useState(null),y=()=>w(null,null,function*(){if(r.trim()){h(!0),p(null);try{const D=[];if(n==="all"||n==="users"?D.push(lw(r,20)):D.push(Promise.resolve([])),n==="all"||n==="music"){const H=fetch(_o(`/music/search?q=${encodeURIComponent(r)}&type=album&limit=20`)).then(U=>{if(!U.ok)throw new Error("Music search failed");return U.json()}).then(U=>U.albums||[]);D.push(H)}else D.push(Promise.resolve([]));const[k,N]=yield Promise.all(D);i(k),c(N)}catch(D){console.error("Search error:",D),p("Failed to search. Please try again.")}finally{h(!1)}}});L.useEffect(()=>{r&&y()},[r,n]);const _=D=>{const k=new URLSearchParams(A);k.set("tab",D),e(`/search?${k.toString()}`)},v=D=>{e(`/profile/${D.displayName}`)},b=s.length>0||a.length>0,x=(n==="all"||n==="users")&&s.length>0,S=(n==="all"||n==="music")&&a.length>0;return f.jsxs($L,{children:[f.jsxs(WL,{children:['Search Results for "',f.jsx(XL,{children:r}),'"']}),f.jsxs(zL,{children:[f.jsx(yc,{$active:n==="all",onClick:()=>_("all"),children:"All"}),f.jsxs(yc,{$active:n==="users",onClick:()=>_("users"),children:["Users (",s.length,")"]}),f.jsxs(yc,{$active:n==="music",onClick:()=>_("music"),children:["Music (",a.length,")"]})]}),f.jsxs(qL,{children:[d&&f.jsx(i4,{children:d}),l?f.jsx(s4,{children:"Searching..."}):!b&&r?f.jsxs(o4,{children:['No results found for "',r,'". Try searching with different keywords.']}):f.jsxs(f.Fragment,{children:[x&&f.jsxs(f.Fragment,{children:[f.jsx(lp,{children:"Users"}),f.jsx(YL,{children:s.map(D=>f.jsxs(JL,{onClick:()=>v(D),children:[f.jsxs(ZL,{children:[f.jsx(e4,{src:D.profilePicture||"https://via.placeholder.com/50",alt:`${D.displayName}'s avatar`}),f.jsx(A4,{children:f.jsx(t4,{children:D.displayName})})]}),D.bio&&f.jsx(r4,{children:D.bio})]},D.id))})]}),S&&f.jsxs(f.Fragment,{children:[f.jsx(lp,{children:"Music"}),f.jsx(n4,{children:a.map(D=>f.jsx(Qu,{album:D,variant:"grid"},D.id))})]})]})]})]})};function c4(A){return lC({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(A)}const l4=E.div`
  display: flex;
  align-items: center;
`,vy=E(c4)`
  cursor: ${A=>A.readOnly?"default":"pointer"};
  color: ${A=>{var e;return A.filled?((e=A.theme.colors.star)==null?void 0:e.filled)||"#ffc107":A.theme.colors.text.disabled||"#e4e5e9"}};
  margin-right: 4px;
  transition: color 0.2s;

  &:hover {
    color: ${A=>{var e;return A.readOnly?"":((e=A.theme.colors.star)==null?void 0:e.hover)||"#e0a800"}};
  }
`;vy.shouldForwardProp=A=>A!=="filled"&&A!=="readOnly";const Pu=({count:A=5,initialRating:e=null,onRate:t,size:r=24,readOnly:n=!1,color:s,hoverColor:i,showClearOption:a=!0})=>{const[c,l]=L.useState(e),[h,d]=L.useState(null),p=Ee.useId();Ee.useEffect(()=>{l(e)},[e]);const y=b=>{n||(a&&b===c?(l(null),t&&t(null)):(l(b),t&&t(b)))},_=b=>{n||d(b)},v=()=>{n||d(null)};return f.jsx(l4,{children:[...Array(A)].map((b,x)=>{const S=x+1,D=c!==null&&S<=(h||c);let k=n?m=>{var C;return((C=m.theme.colors.star)==null?void 0:C.filled)||"#ffc107"}:s||(m=>{var C;return((C=m.theme.colors.star)==null?void 0:C.filled)||"#ffc107"}),N=i||(m=>{var C;return((C=m.theme.colors.star)==null?void 0:C.hover)||"#e0a800"}),H=m=>m.theme.colors.text.disabled||"#e4e5e9",U;return D?U=h&&!n?N:k:U=H,f.jsxs("label",{style:{display:"inline-block"},children:[f.jsx("input",{type:"radio",name:`rating-${p}`,value:S,onClick:()=>y(S),style:{display:"none"},"aria-label":`${S} Star`,checked:S===c,onChange:()=>{},readOnly:n}),f.jsx(vy,{size:r,filled:D,readOnly:n,onMouseEnter:()=>_(S),onMouseLeave:v,style:{color:U},role:"button",tabIndex:n?-1:0,onKeyDown:m=>{!n&&(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),y(S))}})]},x)})})},u4=E.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid ${A=>A.theme.colors.surface.secondary||"rgba(92, 226, 62, 0.97)"};
  transition: background-color 0.2s ease;
  width: 100%; /* Ensure full width */

  &:hover {
    background-color: ${A=>A.theme.colors.surface.secondary||"rgba(36, 195, 116, 0.95)"};
  }

  &:last-child {
    border-bottom: none;
  }
`,h4=E.p`
  margin: 0;
  font-size: 1rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
  font-weight: 500;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,d4=E.span`
  font-size: 0.9rem;
  color: ${A=>A.theme.colors.text.secondary||"rgba(255,255,255,0.7)"};
  margin-left: 15px;
  min-width: 45px; /* Ensure space for the duration */
  text-align: right;
`,f4=E.span`
  font-size: 0.9rem;
  color: ${A=>A.theme.colors.text.secondary||"rgba(255,255,255,0.7)"};
  margin-right: 16px;
  min-width: 20px;
  text-align: right;
`,g4=E.div`
  display: flex;
  align-items: center;
  flex: 1; /* Take up available space */
  min-width: 0; /* Allow text to truncate if needed */
  margin-right: 20px; /* Add space between song info and rating */
`,p4=({track:A,currentRating:e,onRateSong:t,index:r})=>A?f.jsxs(u4,{children:["      ",f.jsxs(g4,{children:[typeof r=="number"&&f.jsx(f4,{children:r+1}),f.jsx(h4,{children:A.name||A.title||"Unknown Title"}),(A.duration_formatted||A.duration)&&f.jsx(d4,{children:A.duration_formatted||A.duration})]}),f.jsx("div",{style:{minWidth:"120px",display:"flex",justifyContent:"flex-end"},children:f.jsx(Pu,{initialRating:e,onRate:n=>t(A.id,n),size:20,showClearOption:!0})})]}):null;function m4(){return w(this,null,function*(){const A=DA.currentUser;if(!A)throw new Error("User not authenticated");return yield A.getIdToken()})}const B4=()=>w(null,null,function*(){try{const A=new AbortController,e=setTimeout(()=>A.abort(),1e4),t=yield Lu("/api/users/me/collection",{signal:A.signal});if(clearTimeout(e),!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return yield t.json()}catch(A){throw console.error("Error fetching collection:",A),A}}),w4=(A,e)=>w(null,null,function*(){try{const t=new AbortController,r=setTimeout(()=>t.abort(),1e4),n=yield Lu(`/api/users/me/collection/${A}/rating`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({rating:e}),signal:t.signal});if(clearTimeout(r),!n.ok)throw new Error(`HTTP error! status: ${n.status}`);return yield n.json()}catch(t){throw console.error("Error updating item rating:",t),t}}),y4=A=>w(null,null,function*(){try{const e=new AbortController,t=setTimeout(()=>e.abort(),1e4),r=yield Lu(`/api/users/me/collection/${A}`,{method:"DELETE",signal:e.signal});if(clearTimeout(t),!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return yield r.json()}catch(e){throw console.error("Error removing from collection:",e),e}});function Lu(t){return w(this,arguments,function*(A,e={}){const r=yield m4(),n=je(be({},e.headers||{}),{Authorization:`Bearer ${r}`});return fetch(A,je(be({},e),{headers:n}))})}const es=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  min-width: 600px; /* Ensure minimum width for smaller screens */
  margin: 0 auto;
  padding: 40px 20px;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,C4=E.div`
  margin-bottom: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  height: 300px;
`,v4=E.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,E4=E.h1`
  font-size: 2.5rem;
  margin-bottom: 8px;
  text-align: center;
`,I4=E.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: ${A=>A.theme.colors.text.secondary||"rgba(255,255,255,0.7)"};
  text-align: center;
`,_4=E.div`
  margin-top: 16px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h3 {
    margin-bottom: 10px;
    font-size: 1.2rem;
    font-weight: 600;
  }
`,U4=E.div`
  width: 100%;
  max-width: 800px; /* Increased from 700px */
  min-width: 550px; /* Ensure minimum width */
  margin-top: 24px;
`,Q4=E.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 16px;
  border-bottom: 1px solid ${A=>A.theme.colors.surface.secondary||"rgba(255,255,255,0.1)"};
  padding-bottom: 8px;
  width: 100%;
`,b4=E.ul`
  list-style: none;
  padding: 0;
  margin-top: 0;
  width: 100%;
  background-color: ${A=>A.theme.colors.surface.primary||"rgba(0,0,0,0.2)"};
  border-radius: 8px;
  min-width: 500px; /* Ensure minimum width */
`,pl=E.button`
  background-color: ${A=>A.theme.colors.accent||"#1db954"};
  color: white;
  border: none;
  border-radius: ${A=>A.theme.borderRadius.medium||"25px"};
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;
  
  &:hover:not(:disabled) {
    background-color: #1ed760;
    transform: translateY(-2px);
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    opacity: 0.7;
  }
`,F4=E.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`,T4=E(pl)`
  background-color: ${A=>A.theme.colors.secondary||"#7b68ee"};
  
  &:hover:not(:disabled) {
    background-color: #8a77ff;
  }
`,x4=A=>w(null,null,function*(){console.log(`Fetching details for album ID: ${A}`);try{const e=new AbortController,t=setTimeout(()=>e.abort(),15e3),r=yield fetch(`/api/music/albums/${A}`,{signal:e.signal});if(clearTimeout(t),!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return yield r.json()}catch(e){throw console.error("Could not fetch album details:",e),e.name==="AbortError"?new Error("Request timed out. The server might be experiencing high load."):e}});function S4(){const{albumId:A}=fp();wA();const[e,t]=Ee.useState(null),[r,n]=Ee.useState(!0),[s,i]=Ee.useState(null),[a,c]=Ee.useState(0),[l,h]=Ee.useState({}),[d,p]=Ee.useState(null),{currentUser:y}=Pe(),_=!!y,[v,b]=Ee.useState(!1),[x,S]=Ee.useState(!1),[D,k]=Ee.useState(null),[N,H]=Ee.useState(!1),[U,m]=Ee.useState(""),[C,Q]=Ee.useState(!1);Ee.useEffect(()=>{A&&w(null,null,function*(){var re,Be,Ze,W,le;try{n(!0),i(null);const fe=yield x4(A);if(fe){const Le=je(be({},fe),{tracks:Array.isArray(fe.tracks)?fe.tracks:((re=fe.tracks)==null?void 0:re.items)||[],imageUrl:fe.imageUrl||((Ze=(Be=fe.images)==null?void 0:Be[0])==null?void 0:Ze.url)||null,artistName:fe.artistName||((le=(W=fe.artists)==null?void 0:W[0])==null?void 0:le.name)||"Unknown Artist"});console.log("Album details loaded:",Le),t(Le),p(fe.initialAlbumRating||null),h(fe.initialSongRatings||{})}else i("Album not found")}catch(fe){console.error("Error fetching album details:",fe),i("Failed to load album details. API may be temporarily unavailable.")}finally{n(!1)}})},[A,a]),Ee.useEffect(()=>{if(e&&e.tracks&&e.tracks.length>0){const Y=Object.values(l).filter(re=>re!==null&&re>0);if(Y.length>0){const Be=Y.reduce((Ze,W)=>Ze+W,0)/Y.length;p(Math.round(Be*2)/2)}else p(null)}},[l,e]);const T=(Y,re)=>{h(Be=>je(be({},Be),{[Y]:re}));try{console.log(`Rated song ${Y} with ${re} stars`)}catch(Be){console.error("Error saving song rating:",Be)}},F=()=>w(null,null,function*(){try{if(k(null),console.log(`Adding album ${e.name} to user's collection with rating: ${d}`),d&&d>0){H(!0);return}yield I()}catch(Y){console.error("Error adding album to collection:",Y),Y.name==="AbortError"?k("Request timed out. Please try again later."):k("Failed to add album to collection. Please try again."),setTimeout(()=>{k(null)},5e3)}}),I=(Y="")=>w(null,null,function*(){try{if(d&&d>0&&Y.trim()&&y)try{yield mw({userId:y.uid,userDisplayName:y.displayName||"Anonymous",type:cs.REVIEW,title:`${e.name} - ${e.artistName}`,content:Y.trim(),albumId:e.id,albumData:{title:e.name,artist:e.artistName,cover:e.imageUrl},rating:d}),console.log("Review post created successfully")}catch(re){console.error("Error creating review post:",re)}b(!0),setTimeout(()=>{b(!1),alert("Album added to your collection successfully!")},3e3)}catch(re){throw re}}),Ae=()=>w(null,null,function*(){Q(!0);try{yield I(U),H(!1),m("")}catch(Y){console.error("Error submitting review:",Y),k("Failed to add album and create review. Please try again.")}finally{Q(!1)}}),Ie=()=>w(null,null,function*(){H(!1),m("");try{yield I("")}catch(Y){console.error("Error adding to collection:",Y),k("Failed to add album to collection. Please try again.")}}),_e=()=>w(null,null,function*(){try{k(null),console.log(`Adding album ${e.name} to user's Rate Later list`),S(!0),setTimeout(()=>{S(!1)},3e3)}catch(Y){console.error("Error adding album to Rate Later list:",Y),Y.name==="AbortError"?k("Request timed out. Please try again later."):k("Failed to add album to Rate Later list. Please try again."),setTimeout(()=>{k(null)},5e3)}}),Ce=()=>{c(Y=>Y+1)};return r?f.jsx(es,{children:"Loading album details..."}):s?f.jsx(es,{children:f.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[f.jsx("h2",{children:"Error"}),f.jsx("p",{children:s}),f.jsx(pl,{onClick:Ce,children:"Retry Loading"})]})}):e?f.jsxs(es,{children:[f.jsxs(C4,{children:[e.imageUrl?f.jsx(v4,{src:e.imageUrl,alt:e.name,onError:Y=>{var re,Be;console.log("Image failed to load:",e.imageUrl),Y.target.style.display="none",(Be=(re=Y.target.nextSibling)==null?void 0:re.style)==null||Be.setProperty("display","flex")}}):null,f.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"#333",display:e.imageUrl?"none":"flex",alignItems:"center",justifyContent:"center",color:"#666",borderRadius:"8px",fontSize:"14px"},children:e.imageUrl?"Image failed to load":"No Image Available"})]}),f.jsx(E4,{children:e.name}),f.jsx(I4,{children:e.artistName}),f.jsxs(_4,{children:[f.jsx("h3",{children:"Album Rating"}),f.jsx(Pu,{initialRating:d,readOnly:!0,size:30}),f.jsxs(F4,{children:[f.jsx(pl,{onClick:F,disabled:!d||!_,children:v?"Added to Collection":"Add to Collection"}),f.jsx(T4,{onClick:_e,disabled:!_,children:x?"Added to Rate Later":"Rate Later"})]}),D&&f.jsx("p",{style:{color:"#ff6b6b",margin:"10px 0",fontSize:"0.9rem"},children:D}),f.jsx("p",{style:{fontSize:"0.9rem",marginTop:"5px",color:"rgba(255,255,255,0.7)"},children:"(Average of song ratings)"})]}),f.jsxs(U4,{children:[f.jsx(Q4,{children:"Tracks"}),f.jsx(b4,{children:e.tracks&&Array.isArray(e.tracks)?e.tracks.map((Y,re)=>f.jsx(p4,{track:Y,index:re,currentRating:l[Y.id]!==void 0?l[Y.id]:null,onRateSong:T},Y.id)):f.jsx("div",{children:"No tracks available"})})]}),N&&f.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0, 0, 0, 0.5)",display:"flex",justifyContent:"center",alignItems:"center",zIndex:1e3},children:f.jsxs("div",{style:{backgroundColor:"white",padding:"2rem",borderRadius:"10px",maxWidth:"500px",width:"90%",maxHeight:"90vh",overflow:"auto"},children:[f.jsxs("h3",{style:{marginBottom:"1rem",color:"#333"},children:['Write a Review for "',e.name,'"']}),f.jsxs("p",{style:{marginBottom:"1rem",color:"#666",fontSize:"0.9rem"},children:["You rated this album ",d," stars. Share your thoughts about it!"]}),f.jsx("textarea",{value:U,onChange:Y=>m(Y.target.value),placeholder:"What did you think about this album? Share your thoughts...",style:{width:"100%",minHeight:"120px",padding:"0.75rem",border:"1px solid #ddd",borderRadius:"5px",fontSize:"1rem",resize:"vertical",marginBottom:"1rem"},maxLength:2e3}),f.jsxs("div",{style:{fontSize:"0.875rem",color:"#666",marginBottom:"1rem"},children:[U.length,"/2000 characters"]}),f.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"flex-end"},children:[f.jsx("button",{onClick:Ie,disabled:C,style:{padding:"0.75rem 1.5rem",border:"none",borderRadius:"5px",backgroundColor:"#f8f9fa",color:"#333",cursor:"pointer"},children:"Skip Review"}),f.jsx("button",{onClick:Ae,disabled:C||!U.trim(),style:{padding:"0.75rem 1.5rem",border:"none",borderRadius:"5px",backgroundColor:"#007bff",color:"white",cursor:"pointer",opacity:C||!U.trim()?.6:1},children:C?"Creating Review...":"Create Review & Add to Collection"})]})]})})]}):f.jsx(es,{children:"Album not found."})}const R4=E.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,D4=E.div`
  display: flex;
  align-items: center;
  background-color: rgba(30, 30, 30, 0.6);
  border-radius: 8px;
  padding: 12px;
  gap: 15px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(40, 40, 40, 0.8);
  }
`,P4=E.img`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  object-fit: cover;
`,L4=E.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,H4=E.h4`
  margin: 0;
  font-weight: 600;
`,k4=E.p`
  margin: 3px 0 0 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`,N4=E.div`
  min-width: 120px;
  text-align: right;
`,up=E.button`
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1ed760;
  }

  &:disabled {
    background-color: #565656;
    cursor: not-allowed;
  }
`,O4=E.p`
  color: #ff6b6b;
  margin: 5px 0;
  font-size: 0.9rem;
`,M4=E.div`
  text-align: center;
  padding: 20px;
  color: rgba(255, 255, 255, 0.7);
`,V4=({items:A,isLoading:e,error:t,onRetry:r,onRateItem:n,onRemoveItem:s,allowRating:i=!0})=>e?f.jsx(M4,{children:"Loading your collection..."}):t?f.jsxs("div",{children:[f.jsx(O4,{children:t}),r&&f.jsx(up,{onClick:r,children:"Retry Loading"})]}):!A||A.length===0?f.jsx("div",{children:"Your collection is empty."}):f.jsx(R4,{children:A.map(a=>f.jsxs(D4,{children:[f.jsx(P4,{src:a.imageUrl,alt:a.name}),f.jsxs(L4,{children:[f.jsx(H4,{children:a.name}),f.jsx(k4,{children:a.artistName})]}),f.jsx(N4,{children:i&&f.jsx(Pu,{initialRating:a.rating,readOnly:!n,size:16,onRating:c=>n&&n(a.id,c)})}),s&&f.jsx(up,{onClick:()=>s(a.id),style:{backgroundColor:"#e74c3c"},children:"Remove"})]},a.id))}),K4=E(es)`
  max-width: 800px;
`,j4=E.h1`
  margin-bottom: 20px;
  font-size: 2rem;
`,G4=E.p`
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.7);
`,$4=E.div`
  text-align: center;
  padding: 40px 20px;
  background-color: rgba(30, 30, 30, 0.6);
  border-radius: 8px;
`,W4=E.p`
  margin-bottom: 20px;
  font-size: 1.1rem;
`,X4=E.button`
  background-color: #1db954;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1ed760;
  }
`;function z4(){const A=wA(),[e,t]=Ee.useState([]),[r,n]=Ee.useState(!0),[s,i]=Ee.useState(null),[a,c]=Ee.useState(0);Ee.useEffect(()=>{w(null,null,function*(){try{n(!0),i(null);const _=yield B4();t(_)}catch(_){console.error("Error loading collection:",_);let v="Failed to load your collection. Please try again later.";_.name==="AbortError"&&(v="Request timed out. The server might be experiencing high load."),i(v)}finally{n(!1)}})},[a]);const l=()=>{c(y=>y+1)},h=(y,_)=>w(null,null,function*(){try{t(v=>v.map(b=>b.id===y?je(be({},b),{rating:_}):b)),yield w4(y,_)}catch(v){console.error("Error updating rating:",v),i("Failed to update rating. Please try again."),setTimeout(()=>i(null),5e3)}}),d=y=>w(null,null,function*(){try{const _=[...e];t(v=>v.filter(b=>b.id!==y)),yield y4(y)}catch(_){console.error("Error removing item:",_),t(previousCollection),i("Failed to remove album from collection. Please try again."),setTimeout(()=>i(null),5e3)}}),p=()=>f.jsxs($4,{children:[f.jsx(W4,{children:"Your collection is empty. Start rating albums to add them to your collection!"}),f.jsx(X4,{onClick:()=>A("/music"),children:"Browse Music"})]});return f.jsxs(K4,{children:[f.jsx(j4,{children:"Your Collection"}),f.jsx(G4,{children:"Albums you've rated and added to your collection appear here."}),!r&&!s&&e.length===0?f.jsx(p,{}):f.jsx(V4,{items:e,isLoading:r,error:s,onRetry:l,onRateItem:h,onRemoveItem:d})]})}const q4=({children:A,requireCompleteProfile:e=!1})=>{const{currentUser:t}=Pe(),[r,n]=L.useState(!0),[s,i]=L.useState(!0);return L.useEffect(()=>{function a(){return w(this,null,function*(){if(!t){n(!1);return}if(e)try{const c=yield IA(cA(te,"userprofiles",t.uid));if(c.exists()){const l=c.data(),h=!!(l.bio&&(l.profilePicture||t.photoURL)&&l.profileSetup!==!1);i(h)}else i(!1)}catch(c){console.error("Error checking profile status:",c)}n(!1)})}a()},[t,e]),r?f.jsx("div",{children:"Loading..."}):t?e&&!s?f.jsx(Oh,{to:"/profile-setup",replace:!0}):A:f.jsx(Oh,{to:"/login",replace:!0})};function Y4(A,e=null){return w(this,null,function*(){if(!A)throw new Error("No user UID provided");try{const t=cA(te,"userprofiles",A),r=yield IA(t);if(!r.exists())return console.log("No profile document found for user:",A),!1;const n=r.data();if(n.profileSetupComplete!==void 0)return console.log("User already migrated:",A),!0;const s=n.displayName||(e==null?void 0:e.displayName),a=n.bio||n.profilePicture||s;return yield ut(t,{profileSetupComplete:a},{merge:!0}),console.log(`Successfully migrated user ${A} with profileSetupComplete: ${a}`),!0}catch(t){return console.error("Error migrating user profile:",A,t),!1}})}const J4=E.button`
  padding: 0.75rem 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  margin: 1rem 0;
  
  &:hover {
    background-color: #218838;
  }
  
  &:disabled {
    background-color: #6c757d;
    cursor: not-allowed;
  }
`,Z4=E.div`
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 4px;
  
  &.success {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  
  &.error {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
`;function eH(){const{currentUser:A}=Pe(),[e,t]=L.useState(!1),[r,n]=L.useState(""),[s,i]=L.useState(""),a=()=>w(null,null,function*(){if(!A){n("No user logged in"),i("error");return}t(!0),n("");try{(yield Y4(A.uid,A))?(n("Profile successfully migrated! You can now use the app normally."),i("success"),setTimeout(()=>{window.location.reload()},2e3)):(n("Migration completed, but no changes were needed."),i("success"))}catch(c){console.error("Migration error:",c),n("Failed to migrate profile. Please try again."),i("error")}finally{t(!1)}});return f.jsxs("div",{style:{padding:"1rem",textAlign:"center"},children:[f.jsx("h3",{children:"Profile Migration"}),f.jsx("p",{children:"If you're stuck in the profile setup loop, click the button below to fix your account:"}),f.jsx(J4,{onClick:a,disabled:e,children:e?"Migrating...":"Fix My Profile"}),r&&f.jsx(Z4,{className:s,children:r})]})}const AH=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
`,tH=E.form`
  width: 100%;
  max-width: 500px;
  background-color: ${A=>A.theme.colors.surface.primary||"rgba(30, 30, 30, 0.6)"};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`,rH=E.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,hp=E.div`
  margin-bottom: 1.5rem;
`,dp=E.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,nH=E.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${A=>A.theme.colors.border||"#444"};
  border-radius: 4px;
  background-color: ${A=>A.theme.colors.surface.secondary||"rgba(20, 20, 20, 0.6)"};
  color: ${A=>A.theme.colors.text.primary||"#fff"};
  
  &:focus {
    outline: none;
    border-color: ${A=>A.theme.colors.accent||"#1db954"};
  }
`,sH=E.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${A=>A.theme.colors.border||"#444"};
  border-radius: 4px;
  background-color: ${A=>A.theme.colors.surface.secondary||"rgba(20, 20, 20, 0.6)"};
  color: ${A=>A.theme.colors.text.primary||"#fff"};
  resize: vertical;
  min-height: 100px;
  
  &:focus {
    outline: none;
    border-color: ${A=>A.theme.colors.accent||"#1db954"};
  }
`,iH=E.button`
  width: 100%;
  padding: 0.75rem;
  border: none;
  border-radius: 4px;
  background-color: ${A=>A.theme.colors.accent||"#1db954"};
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${A=>A.disabled?"#cccccc":"#18a448"};
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`,oH=E.div`
  color: #ff6b6b;
  margin-bottom: 1rem;
  text-align: center;
`,aH=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`,cH=E.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid ${A=>A.theme.colors.accent||"#1db954"};
`,lH=E.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid ${A=>A.theme.colors.accent||"#1db954"};
  color: ${A=>A.theme.colors.accent||"#1db954"};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${A=>A.theme.colors.accent||"#1db954"}20;
  }
`;function uH(){const{currentUser:A,updateUserProfile:e}=Pe(),t=wA(),[r,n]=L.useState(!1),[s,i]=L.useState(""),[a,c]=L.useState((A==null?void 0:A.displayName)||""),[l,h]=L.useState(""),[d,p]=L.useState(null),[y,_]=L.useState((A==null?void 0:A.photoURL)||"https://via.placeholder.com/150"),v=L.useRef(null),b=D=>{const k=D.target.files[0];if(k){p(k);const N=new FileReader;N.onload=H=>{_(H.target.result)},N.readAsDataURL(k)}},x=()=>{v.current.click()},S=D=>w(null,null,function*(){if(D.preventDefault(),a.trim()===""){i("Display name cannot be empty");return}try{n(!0),i(""),yield e({displayName:a,bio:l,profilePicture:d,profileSetupComplete:!0}),t(`/profile/${a}`)}catch(k){console.error("Error setting up profile:",k),i("Failed to set up profile. Please try again.")}finally{n(!1)}});return f.jsxs(AH,{children:[f.jsxs(tH,{onSubmit:S,children:[f.jsx(rH,{children:"Set Up Your Profile"}),s&&f.jsx(oH,{children:s}),f.jsxs(aH,{children:[f.jsx(cH,{src:y,alt:"Profile Preview"}),f.jsx("input",{type:"file",accept:"image/*",onChange:b,ref:v,style:{display:"none"}}),f.jsx(lH,{type:"button",onClick:x,children:"Choose Profile Picture"})]}),f.jsxs(hp,{children:[f.jsx(dp,{htmlFor:"displayName",children:"Display Name"}),f.jsx(nH,{id:"displayName",type:"text",value:a,onChange:D=>c(D.target.value),placeholder:"Choose a display name",required:!0})]}),f.jsxs(hp,{children:[f.jsx(dp,{htmlFor:"bio",children:"Bio"}),f.jsx(sH,{id:"bio",value:l,onChange:D=>h(D.target.value),placeholder:"Tell us a bit about yourself..."})]}),f.jsx(iH,{type:"submit",disabled:r,children:r?"Setting Up Profile...":"Complete Setup"})]}),f.jsx(eH,{})]})}const hH=[{path:"/",element:tT,title:"Home | BeatMeter",isPublic:!0,description:"Track and rate your favorite music"},{path:"/sorter",element:GP,title:"Song Sorter | BeatMeter",isPublic:!0,description:"Sort and rank your favorite songs"},{path:"/profile/:username",element:ng,title:"Profile | BeatMeter",isPublic:!0,description:"View user profile and rankings"},{path:"/profile",element:ng,title:"My Profile | BeatMeter",isPublic:!1,description:"View your profile"},{path:"/profile-setup",element:uH,title:"Setup Your Profile | BeatMeter",isPublic:!1,description:"Complete your profile setup"},{path:"/login",element:tL,title:"Login | BeatMeter",isPublic:!0,description:"Sign in to BeatMeter"},{path:"/create-account",element:hL,title:"Create Account | BeatMeter",isPublic:!0,description:"Create a new BeatMeter account"},{path:"/forgot-password",element:_L,title:"Forgot Password | BeatMeter",isPublic:!0,description:"Reset your BeatMeter password"},{path:"/lists",element:DL,title:"Playlists",isPublic:!0,description:"Explore user-generated playlists and recommendations"},{path:"/Music",element:GL,title:"Music | BeatMeter",isPublic:!0,description:"Discover and manage your music collections"},{path:"/search",element:a4,title:"Search Results | BeatMeter",isPublic:!0,description:"Search for music and users"},{path:"/album/:albumId",element:S4,title:"Album Details | BeatMeter",isPublic:!0,description:"View album details and ratings"},{path:"/collection",element:z4,title:"Your Collection | BeatMeter",isPublic:!1,description:"View and manage your music collection"}],dH=()=>f.jsx(Mh,{element:f.jsx(FF,{}),children:hH.map(({path:A,element:e,title:t,isPublic:r})=>{const n=e;return f.jsx(Mh,{path:A,element:f.jsxs(f.Fragment,{children:[f.jsx("title",{children:t}),r?f.jsx(n,{}):f.jsx(q4,{children:f.jsx(n,{})})]})},A)})}),fH=uC`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${A=>A.theme.colors.background.primary};
    color: ${A=>A.theme.colors.text.primary};
    line-height: 1.6;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    color: ${A=>A.theme.colors.accent};
    text-decoration: none;
    
    &:hover {
      opacity: 0.8;
    }
  }

  button {
    font-family: inherit;
  }

  /* Hide scrollbars but keep functionality */
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;function gH(){const{currentUser:A}=Pe();return L.useEffect(()=>{function e(){return w(this,null,function*(){if(A)try{const t=cA(te,"userprofiles",A.uid),r=yield IA(t);if(!r.exists())return;const n=r.data(),s={};if(n.bio||n.profileSetup===!0){console.log("[useProfileCreation] Profile appears complete, skipping field additions");return}"profilePicture"in n||(s.profilePicture=A.photoURL||"https://via.placeholder.com/150"),"bio"in n||(s.bio=""),"profileSetup"in n||(s.profileSetup=!!(n.bio&&n.profilePicture)),"joinDate"in n||(s.joinDate=n.createdAt),"musicCollection"in n||(s.musicCollection=[]),"followers"in n||(s.followers=[]),"following"in n||(s.following=[]),"rateLater"in n||(s.rateLater=[]),Object.keys(s).length>0&&(yield Rt(A.uid,s,!0,A))}catch(t){console.error("Error ensuring user profile:",t)}})}e()},[A]),null}const pH=({children:A})=>(gH(),f.jsx(f.Fragment,{children:A}));class mH extends Ee.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Error caught by boundary:",e,t),this.setState({errorInfo:t})}render(){return this.state.hasError?f.jsxs("div",{style:{padding:"20px",maxWidth:"600px",margin:"40px auto",backgroundColor:"#282828",borderRadius:"10px",color:"white"},children:[f.jsx("h2",{children:"Something went wrong"}),f.jsx("p",{children:"We encountered an error while loading this page. Please try:"}),f.jsxs("ul",{style:{marginBottom:"20px"},children:[f.jsx("li",{children:"Refreshing the page"}),f.jsx("li",{children:"Checking your internet connection"}),f.jsx("li",{children:"Logging out and back in"})]}),f.jsx("button",{onClick:()=>window.location.reload(),style:{backgroundColor:"#1db954",border:"none",color:"white",padding:"10px 20px",borderRadius:"20px",cursor:"pointer"},children:"Reload Page"}),!1]}):this.props.children}}const BH=E.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px 16px;
  background-color: ${A=>A.isOnline?"#2ecc71":"#e74c3c"};
  color: white;
  text-align: center;
  font-size: 14px;
  z-index: 1000;
  display: ${A=>A.show?"block":"none"};
  transition: transform 0.3s ease;
  transform: ${A=>A.show?"translateY(0)":"translateY(100%)"};
`,wH=E.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 0 8px;
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;function yH(){const[A,e]=L.useState(navigator.onLine),[t,r]=L.useState(!1),[n,s]=L.useState(!1),i=()=>{const a=navigator.onLine;e(a),(!a||a&&n)&&(r(!0),a||s(!0),a&&setTimeout(()=>r(!1),5e3))};return L.useEffect(()=>(window.addEventListener("online",i),window.addEventListener("offline",i),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",i)}),[n]),t?f.jsxs(BH,{isOnline:A,show:t,children:[A?"You are back online! Content will now update automatically.":"You are currently offline. Some features may not be available.",f.jsx(wH,{onClick:()=>r(!1),children:"×"})]}):null}function CH(){return f.jsx(mH,{children:f.jsxs(hC,{theme:BC,children:[" ",f.jsx(fH,{})," ",f.jsxs(Jb,{children:[" ",f.jsxs(pH,{children:[" ",f.jsxs(aC,{children:[f.jsx(cC,{children:dH()}),f.jsx(yH,{})]})]})]})]})})}mC.createRoot(document.getElementById("root")).render(f.jsx(Ee.StrictMode,{children:f.jsx(CH,{})}))});export default vH();
