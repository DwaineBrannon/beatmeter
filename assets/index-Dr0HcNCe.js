var Jy=Object.defineProperty,Yy=Object.defineProperties;var Zy=Object.getOwnPropertyDescriptors;var ti=Object.getOwnPropertySymbols,eC=Object.getPrototypeOf,Hh=Object.prototype.hasOwnProperty,kh=Object.prototype.propertyIsEnumerable,AC=Reflect.get;var Lh=(A,e,t)=>e in A?Jy(A,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):A[e]=t,Ie=(A,e)=>{for(var t in e||(e={}))Hh.call(e,t)&&Lh(A,t,e[t]);if(ti)for(var t of ti(e))kh.call(e,t)&&Lh(A,t,e[t]);return A},Ve=(A,e)=>Yy(A,Zy(e));var Oh=(A,e)=>{var t={};for(var r in A)Hh.call(A,r)&&e.indexOf(r)<0&&(t[r]=A[r]);if(A!=null&&ti)for(var r of ti(A))e.indexOf(r)<0&&kh.call(A,r)&&(t[r]=A[r]);return t};var tC=(A,e)=>()=>(e||A((e={exports:{}}).exports,e),e.exports);var rr=(A,e,t)=>AC(eC(A),t,e);var y=(A,e,t)=>new Promise((r,n)=>{var s=c=>{try{a(t.next(c))}catch(l){n(l)}},i=c=>{try{a(t.throw(c))}catch(l){n(l)}},a=c=>c.done?r(c.value):Promise.resolve(c.value).then(s,i);a((t=t.apply(A,e)).next())});import{r as rC,a as nC,g as sC}from"./vendor-DomL0yj5.js";import{r as L,u as fA,L as Vt,O as iC,R as Te,a as hp,b as dp,N as Nh,c as Vh,B as oC,d as aC}from"./router-CGA_yEbX.js";import{d as E,m as ml,l as ls,G as cC,f as lC,o as uC}from"./ui-B8dEqJNG.js";import{a as Fn}from"./utils-Cfc3znND.js";var EH=tC(Y=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();var Da={exports:{}},Tn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mh;function hC(){if(Mh)return Tn;Mh=1;var A=rC(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,n=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function i(a,c,l){var h,f={},p=null,C=null;l!==void 0&&(p=""+l),c.key!==void 0&&(p=""+c.key),c.ref!==void 0&&(C=c.ref);for(h in c)r.call(c,h)&&!s.hasOwnProperty(h)&&(f[h]=c[h]);if(a&&a.defaultProps)for(h in c=a.defaultProps,c)f[h]===void 0&&(f[h]=c[h]);return{$$typeof:e,type:a,key:p,ref:C,props:f,_owner:n.current}}return Tn.Fragment=t,Tn.jsx=i,Tn.jsxs=i,Tn}var Kh;function dC(){return Kh||(Kh=1,Da.exports=hC()),Da.exports}var d=dC(),ri={},jh;function fC(){if(jh)return ri;jh=1;var A=nC();return ri.createRoot=A.createRoot,ri.hydrateRoot=A.hydrateRoot,ri}var gC=fC();const pC=sC(gC),mC={colors:{background:{primary:"rgba(22, 25, 27, 0.95)",secondary:"#1a1a1a",accent:"rgba(101, 15, 151, 0.16)"},surface:{primary:"#282828",secondary:"rgba(50, 47, 53, 0.8)"},text:{primary:"#fff",secondary:"rgba(255,255,255,0.7)",disabled:"#e4e5e9"},accent:"#007bff",secondary:"rgba(71, 103, 125, 0.31)",star:{filled:"#ffc107",hover:"#e0a800"}},spacing:{small:"8px",medium:"16px",large:"24px",xlarge:"80px"},borderRadius:{small:"8px",medium:"12px",large:"16px"},shadows:{small:"0 2px 8px rgba(0, 0, 0, 0.2)",medium:"0 4px 12px rgba(0, 0, 0, 0.3)"},transitions:{fast:"150ms ease",normal:"250ms ease",slow:"350ms ease"},buttons:{primary:{background:"rgba(83, 142, 181, 0.31)",text:"#fff",hoverBackground:"rgba(40, 168, 61, 0.31)"},secondary:{background:"rgba(0, 0, 0, 0.8)",text:"#fff",hoverBackground:"rgba(0, 0, 0, 0.9)"}}},BC=()=>{};var Gh={};/**
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
 */const fp=function(A){const e=[];let t=0;for(let r=0;r<A.length;r++){let n=A.charCodeAt(r);n<128?e[t++]=n:n<2048?(e[t++]=n>>6|192,e[t++]=n&63|128):(n&64512)===55296&&r+1<A.length&&(A.charCodeAt(r+1)&64512)===56320?(n=65536+((n&1023)<<10)+(A.charCodeAt(++r)&1023),e[t++]=n>>18|240,e[t++]=n>>12&63|128,e[t++]=n>>6&63|128,e[t++]=n&63|128):(e[t++]=n>>12|224,e[t++]=n>>6&63|128,e[t++]=n&63|128)}return e},wC=function(A){const e=[];let t=0,r=0;for(;t<A.length;){const n=A[t++];if(n<128)e[r++]=String.fromCharCode(n);else if(n>191&&n<224){const s=A[t++];e[r++]=String.fromCharCode((n&31)<<6|s&63)}else if(n>239&&n<365){const s=A[t++],i=A[t++],a=A[t++],c=((n&7)<<18|(s&63)<<12|(i&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=A[t++],i=A[t++];e[r++]=String.fromCharCode((n&15)<<12|(s&63)<<6|i&63)}}return e.join("")},gp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(A,e){if(!Array.isArray(A))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let n=0;n<A.length;n+=3){const s=A[n],i=n+1<A.length,a=i?A[n+1]:0,c=n+2<A.length,l=c?A[n+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let p=(a&15)<<2|l>>6,C=l&63;c||(C=64,i||(p=64)),r.push(t[h],t[f],t[p],t[C])}return r.join("")},encodeString(A,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(A):this.encodeByteArray(fp(A),e)},decodeString(A,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(A):wC(this.decodeStringToByteArray(A,e))},decodeStringToByteArray(A,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let n=0;n<A.length;){const s=t[A.charAt(n++)],a=n<A.length?t[A.charAt(n)]:0;++n;const l=n<A.length?t[A.charAt(n)]:64;++n;const f=n<A.length?t[A.charAt(n)]:64;if(++n,s==null||a==null||l==null||f==null)throw new yC;const p=s<<2|a>>4;if(r.push(p),l!==64){const C=a<<4&240|l>>2;if(r.push(C),f!==64){const _=l<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let A=0;A<this.ENCODED_VALS.length;A++)this.byteToCharMap_[A]=this.ENCODED_VALS.charAt(A),this.charToByteMap_[this.byteToCharMap_[A]]=A,this.byteToCharMapWebSafe_[A]=this.ENCODED_VALS_WEBSAFE.charAt(A),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[A]]=A,A>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(A)]=A,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(A)]=A)}}};class yC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const CC=function(A){const e=fp(A);return gp.encodeByteArray(e,!0)},Ao=function(A){return CC(A).replace(/\./g,"")},pp=function(A){try{return gp.decodeString(A,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vC(){if(typeof self!="undefined")return self;if(typeof window!="undefined")return window;if(typeof global!="undefined")return global;throw new Error("Unable to locate global object.")}/**
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
 */const EC=()=>vC().__FIREBASE_DEFAULTS__,IC=()=>{if(typeof process=="undefined"||typeof Gh=="undefined")return;const A=Gh.__FIREBASE_DEFAULTS__;if(A)return JSON.parse(A)},_C=()=>{if(typeof document=="undefined")return;let A;try{A=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}const e=A&&pp(A[1]);return e&&JSON.parse(e)},Do=()=>{try{return BC()||EC()||IC()||_C()}catch(A){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${A}`);return}},mp=A=>{var e,t;return(t=(e=Do())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[A]},Bp=A=>{const e=mp(A);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},wp=()=>{var A;return(A=Do())===null||A===void 0?void 0:A.config},yp=A=>{var e;return(e=Do())===null||e===void 0?void 0:e[`_${A}`]};/**
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
 */class UC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Jt(A){return A.endsWith(".cloudworkstations.dev")}function Bl(A){return y(this,null,function*(){return(yield fetch(A,{credentials:"include"})).ok})}/**
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
 */function Cp(A,e){if(A.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",n=A.iat||0,s=A.sub||A.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const i=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:n,exp:n+3600,auth_time:n,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},A);return[Ao(JSON.stringify(t)),Ao(JSON.stringify(i)),""].join(".")}const Jn={};function QC(){const A={prod:[],emulator:[]};for(const e of Object.keys(Jn))Jn[e]?A.emulator.push(e):A.prod.push(e);return A}function bC(A){let e=document.getElementById(A),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",A),t=!0),{created:t,element:e}}let $h=!1;function wl(A,e){if(typeof window=="undefined"||typeof document=="undefined"||!Jt(window.location.host)||Jn[A]===e||Jn[A]||$h)return;Jn[A]=e;function t(p){return`__firebase__banner__${p}`}const r="__firebase__banner",s=QC().prod.length>0;function i(){const p=document.getElementById(r);p&&p.remove()}function a(p){p.style.display="flex",p.style.background="#7faaf0",p.style.position="fixed",p.style.bottom="5px",p.style.left="5px",p.style.padding=".5em",p.style.borderRadius="5px",p.style.alignItems="center"}function c(p,C){p.setAttribute("width","24"),p.setAttribute("id",C),p.setAttribute("height","24"),p.setAttribute("viewBox","0 0 24 24"),p.setAttribute("fill","none"),p.style.marginLeft="-6px"}function l(){const p=document.createElement("span");return p.style.cursor="pointer",p.style.marginLeft="16px",p.style.fontSize="24px",p.innerHTML=" &times;",p.onclick=()=>{$h=!0,i()},p}function h(p,C){p.setAttribute("id",C),p.innerText="Learn more",p.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",p.setAttribute("target","__blank"),p.style.paddingLeft="5px",p.style.textDecoration="underline"}function f(){const p=bC(r),C=t("text"),_=document.getElementById(C)||document.createElement("span"),v=t("learnmore"),b=document.getElementById(v)||document.createElement("a"),x=t("preprendIcon"),S=document.getElementById(x)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(p.created){const D=p.element;a(D),h(b,v);const k=l();c(S,x),D.append(S,_,b,k),document.body.appendChild(D)}s?(_.innerText="Preview backend disconnected.",S.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,_.innerText="Preview backend running in this workspace."),_.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",f):f()}/**
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
 */function nA(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function FC(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nA())}function TC(){var A;const e=(A=Do())===null||A===void 0?void 0:A.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch(t){return!1}}function xC(){return typeof navigator!="undefined"&&navigator.userAgent==="Cloudflare-Workers"}function SC(){const A=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof A=="object"&&A.id!==void 0}function RC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DC(){const A=nA();return A.indexOf("MSIE ")>=0||A.indexOf("Trident/")>=0}function PC(){return!TC()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function LC(){try{return typeof indexedDB=="object"}catch(A){return!1}}function HC(){return new Promise((A,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(r);n.onsuccess=()=>{n.result.close(),t||self.indexedDB.deleteDatabase(r),A(!0)},n.onupgradeneeded=()=>{t=!1},n.onerror=()=>{var s;e(((s=n.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const kC="FirebaseError";class qA extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=kC,Object.setPrototypeOf(this,qA.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Us.prototype.create)}}class Us{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},n=`${this.service}/${e}`,s=this.errors[e],i=s?OC(s,r):"Error",a=`${this.serviceName}: ${i} (${n}).`;return new qA(n,a,r)}}function OC(A,e){return A.replace(NC,(t,r)=>{const n=e[r];return n!=null?String(n):`<${r}?>`})}const NC=/\{\$([^}]+)}/g;function VC(A){for(const e in A)if(Object.prototype.hasOwnProperty.call(A,e))return!1;return!0}function fr(A,e){if(A===e)return!0;const t=Object.keys(A),r=Object.keys(e);for(const n of t){if(!r.includes(n))return!1;const s=A[n],i=e[n];if(Wh(s)&&Wh(i)){if(!fr(s,i))return!1}else if(s!==i)return!1}for(const n of r)if(!t.includes(n))return!1;return!0}function Wh(A){return A!==null&&typeof A=="object"}/**
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
 */function Qs(A){const e=[];for(const[t,r]of Object.entries(A))Array.isArray(r)?r.forEach(n=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hn(A){const e={};return A.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[n,s]=r.split("=");e[decodeURIComponent(n)]=decodeURIComponent(s)}}),e}function kn(A){const e=A.indexOf("?");if(!e)return"";const t=A.indexOf("#",e);return A.substring(e,t>0?t:void 0)}function MC(A,e){const t=new KC(A,e);return t.subscribe.bind(t)}class KC{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let n;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");jC(e,["next","error","complete"])?n=e:n={next:e,error:t,complete:r},n.next===void 0&&(n.next=Pa),n.error===void 0&&(n.error=Pa),n.complete===void 0&&(n.complete=Pa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch(i){}}),this.observers.push(n),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jC(A,e){if(typeof A!="object"||A===null)return!1;for(const t of e)if(t in A&&typeof A[t]=="function")return!0;return!1}function Pa(){}/**
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
 */function He(A){return A&&A._delegate?A._delegate:A}class Mt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ir="[DEFAULT]";/**
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
 */class GC{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new UC;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(n)return null;throw s}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WC(e))try{this.getOrInitializeService({instanceIdentifier:ir})}catch(t){}for(const[t,r]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:n});r.resolve(s)}catch(s){}}}}clearInstance(e=ir){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}delete(){return y(this,null,function*(){const e=Array.from(this.instances.values());yield Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])})}isComponentSet(){return this.component!=null}isInitialized(e=ir){return this.instances.has(e)}getOptions(e=ir){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&i.resolve(n)}return n}onInit(e,t){var r;const n=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(n))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(n,s);const i=this.instances.get(n);return i&&e(i,n),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const n of r)try{n(e,t)}catch(s){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$C(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch(n){}return r||null}normalizeInstanceIdentifier(e=ir){return this.component?this.component.multipleInstances?e:ir:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $C(A){return A===ir?void 0:A}function WC(A){return A.instantiationMode==="EAGER"}/**
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
 */class XC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new GC(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ne;(function(A){A[A.DEBUG=0]="DEBUG",A[A.VERBOSE=1]="VERBOSE",A[A.INFO=2]="INFO",A[A.WARN=3]="WARN",A[A.ERROR=4]="ERROR",A[A.SILENT=5]="SILENT"})(ne||(ne={}));const qC={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},zC=ne.INFO,JC={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},YC=(A,e,...t)=>{if(e<A.logLevel)return;const r=new Date().toISOString(),n=JC[e];if(n)console[n](`[${r}]  ${A.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let yl=class{constructor(e){this.name=e,this._logLevel=zC,this._logHandler=YC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?qC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}};const ZC=(A,e)=>e.some(t=>A instanceof t);let Xh,qh;function e0(){return Xh||(Xh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function A0(){return qh||(qh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vp=new WeakMap,Cc=new WeakMap,Ep=new WeakMap,La=new WeakMap,Cl=new WeakMap;function t0(A){const e=new Promise((t,r)=>{const n=()=>{A.removeEventListener("success",s),A.removeEventListener("error",i)},s=()=>{t(Dt(A.result)),n()},i=()=>{r(A.error),n()};A.addEventListener("success",s),A.addEventListener("error",i)});return e.then(t=>{t instanceof IDBCursor&&vp.set(t,A)}).catch(()=>{}),Cl.set(e,A),e}function r0(A){if(Cc.has(A))return;const e=new Promise((t,r)=>{const n=()=>{A.removeEventListener("complete",s),A.removeEventListener("error",i),A.removeEventListener("abort",i)},s=()=>{t(),n()},i=()=>{r(A.error||new DOMException("AbortError","AbortError")),n()};A.addEventListener("complete",s),A.addEventListener("error",i),A.addEventListener("abort",i)});Cc.set(A,e)}let vc={get(A,e,t){if(A instanceof IDBTransaction){if(e==="done")return Cc.get(A);if(e==="objectStoreNames")return A.objectStoreNames||Ep.get(A);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Dt(A[e])},set(A,e,t){return A[e]=t,!0},has(A,e){return A instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in A}};function n0(A){vc=A(vc)}function s0(A){return A===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=A.call(Ha(this),e,...t);return Ep.set(r,e.sort?e.sort():[e]),Dt(r)}:A0().includes(A)?function(...e){return A.apply(Ha(this),e),Dt(vp.get(this))}:function(...e){return Dt(A.apply(Ha(this),e))}}function i0(A){return typeof A=="function"?s0(A):(A instanceof IDBTransaction&&r0(A),ZC(A,e0())?new Proxy(A,vc):A)}function Dt(A){if(A instanceof IDBRequest)return t0(A);if(La.has(A))return La.get(A);const e=i0(A);return e!==A&&(La.set(A,e),Cl.set(e,A)),e}const Ha=A=>Cl.get(A);function o0(A,e,{blocked:t,upgrade:r,blocking:n,terminated:s}={}){const i=indexedDB.open(A,e),a=Dt(i);return r&&i.addEventListener("upgradeneeded",c=>{r(Dt(i.result),c.oldVersion,c.newVersion,Dt(i.transaction),c)}),t&&i.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{s&&c.addEventListener("close",()=>s()),n&&c.addEventListener("versionchange",l=>n(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const a0=["get","getKey","getAll","getAllKeys","count"],c0=["put","add","delete","clear"],ka=new Map;function zh(A,e){if(!(A instanceof IDBDatabase&&!(e in A)&&typeof e=="string"))return;if(ka.get(e))return ka.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,n=c0.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(n||a0.includes(t)))return;const s=function(i,...a){return y(this,null,function*(){const c=this.transaction(i,n?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(yield Promise.all([l[t](...a),n&&c.done]))[0]})};return ka.set(e,s),s}n0(A=>Ve(Ie({},A),{get:(e,t,r)=>zh(e,t)||A.get(e,t,r),has:(e,t)=>!!zh(e,t)||A.has(e,t)}));/**
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
 */class l0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(u0(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function u0(A){const e=A.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ec="@firebase/app",Jh="0.13.1";/**
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
 */const lt=new yl("@firebase/app"),h0="@firebase/app-compat",d0="@firebase/analytics-compat",f0="@firebase/analytics",g0="@firebase/app-check-compat",p0="@firebase/app-check",m0="@firebase/auth",B0="@firebase/auth-compat",w0="@firebase/database",y0="@firebase/data-connect",C0="@firebase/database-compat",v0="@firebase/functions",E0="@firebase/functions-compat",I0="@firebase/installations",_0="@firebase/installations-compat",U0="@firebase/messaging",Q0="@firebase/messaging-compat",b0="@firebase/performance",F0="@firebase/performance-compat",T0="@firebase/remote-config",x0="@firebase/remote-config-compat",S0="@firebase/storage",R0="@firebase/storage-compat",D0="@firebase/firestore",P0="@firebase/ai",L0="@firebase/firestore-compat",H0="firebase",k0="11.9.0";/**
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
 */const Ic="[DEFAULT]",O0={[Ec]:"fire-core",[h0]:"fire-core-compat",[f0]:"fire-analytics",[d0]:"fire-analytics-compat",[p0]:"fire-app-check",[g0]:"fire-app-check-compat",[m0]:"fire-auth",[B0]:"fire-auth-compat",[w0]:"fire-rtdb",[y0]:"fire-data-connect",[C0]:"fire-rtdb-compat",[v0]:"fire-fn",[E0]:"fire-fn-compat",[I0]:"fire-iid",[_0]:"fire-iid-compat",[U0]:"fire-fcm",[Q0]:"fire-fcm-compat",[b0]:"fire-perf",[F0]:"fire-perf-compat",[T0]:"fire-rc",[x0]:"fire-rc-compat",[S0]:"fire-gcs",[R0]:"fire-gcs-compat",[D0]:"fire-fst",[L0]:"fire-fst-compat",[P0]:"fire-vertex","fire-js":"fire-js",[H0]:"fire-js-all"};/**
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
 */const to=new Map,N0=new Map,_c=new Map;function Yh(A,e){try{A.container.addComponent(e)}catch(t){lt.debug(`Component ${e.name} failed to register with FirebaseApp ${A.name}`,t)}}function gr(A){const e=A.name;if(_c.has(e))return lt.debug(`There were multiple attempts to register component ${e}.`),!1;_c.set(e,A);for(const t of to.values())Yh(t,A);for(const t of N0.values())Yh(t,A);return!0}function Po(A,e){const t=A.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),A.container.getProvider(e)}function hA(A){return A==null?!1:A.settings!==void 0}/**
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
 */const V0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pt=new Us("app","Firebase",V0);/**
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
 */class M0{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}/**
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
 */const Cr=k0;function Ip(A,e={}){let t=A;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ic,automaticDataCollectionEnabled:!0},e),n=r.name;if(typeof n!="string"||!n)throw Pt.create("bad-app-name",{appName:String(n)});if(t||(t=wp()),!t)throw Pt.create("no-options");const s=to.get(n);if(s){if(fr(t,s.options)&&fr(r,s.config))return s;throw Pt.create("duplicate-app",{appName:n})}const i=new XC(n);for(const c of _c.values())i.addComponent(c);const a=new M0(t,r,i);return to.set(n,a),a}function vl(A=Ic){const e=to.get(A);if(!e&&A===Ic&&wp())return Ip();if(!e)throw Pt.create("no-app",{appName:A});return e}function KA(A,e,t){var r;let n=(r=O0[A])!==null&&r!==void 0?r:A;t&&(n+=`-${t}`);const s=n.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${n}" with version "${e}":`];s&&a.push(`library name "${n}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lt.warn(a.join(" "));return}gr(new Mt(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
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
 */const K0="firebase-heartbeat-database",j0=1,us="firebase-heartbeat-store";let Oa=null;function _p(){return Oa||(Oa=o0(K0,j0,{upgrade:(A,e)=>{switch(e){case 0:try{A.createObjectStore(us)}catch(t){console.warn(t)}}}}).catch(A=>{throw Pt.create("idb-open",{originalErrorMessage:A.message})})),Oa}function G0(A){return y(this,null,function*(){try{const t=(yield _p()).transaction(us),r=yield t.objectStore(us).get(Up(A));return yield t.done,r}catch(e){if(e instanceof qA)lt.warn(e.message);else{const t=Pt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});lt.warn(t.message)}}})}function Zh(A,e){return y(this,null,function*(){try{const r=(yield _p()).transaction(us,"readwrite");yield r.objectStore(us).put(e,Up(A)),yield r.done}catch(t){if(t instanceof qA)lt.warn(t.message);else{const r=Pt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});lt.warn(r.message)}}})}function Up(A){return`${A.name}!${A.options.appId}`}/**
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
 */const $0=1024,W0=30;class X0{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new z0(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}triggerHeartbeat(){return y(this,null,function*(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ed();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=yield this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>W0){const i=J0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){lt.warn(r)}})}getHeartbeatsHeader(){return y(this,null,function*(){var e;try{if(this._heartbeatsCache===null&&(yield this._heartbeatsCachePromise),((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ed(),{heartbeatsToSend:r,unsentEntries:n}=q0(this._heartbeatsCache.heartbeats),s=Ao(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,yield this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return lt.warn(t),""}})}}function ed(){return new Date().toISOString().substring(0,10)}function q0(A,e=$0){const t=[];let r=A.slice();for(const n of A){const s=t.find(i=>i.agent===n.agent);if(s){if(s.dates.push(n.date),Ad(t)>e){s.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),Ad(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class z0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}runIndexedDBEnvironmentCheck(){return y(this,null,function*(){return LC()?HC().then(()=>!0).catch(()=>!1):!1})}read(){return y(this,null,function*(){if(yield this._canUseIndexedDBPromise){const t=yield G0(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}})}overwrite(e){return y(this,null,function*(){var t;if(yield this._canUseIndexedDBPromise){const n=yield this.read();return Zh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return})}add(e){return y(this,null,function*(){var t;if(yield this._canUseIndexedDBPromise){const n=yield this.read();return Zh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return})}}function Ad(A){return Ao(JSON.stringify({version:2,heartbeats:A})).length}function J0(A){if(A.length===0)return-1;let e=0,t=A[0].date;for(let r=1;r<A.length;r++)A[r].date<t&&(t=A[r].date,e=r);return e}/**
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
 */function Y0(A){gr(new Mt("platform-logger",e=>new l0(e),"PRIVATE")),gr(new Mt("heartbeat",e=>new X0(e),"PRIVATE")),KA(Ec,Jh,A),KA(Ec,Jh,"esm2017"),KA("fire-js","")}Y0("");function El(A,e){var t={};for(var r in A)Object.prototype.hasOwnProperty.call(A,r)&&e.indexOf(r)<0&&(t[r]=A[r]);if(A!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,r=Object.getOwnPropertySymbols(A);n<r.length;n++)e.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(A,r[n])&&(t[r[n]]=A[r[n]]);return t}function Qp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Z0=Qp,bp=new Us("auth","Firebase",Qp());/**
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
 */const ro=new yl("@firebase/auth");function ev(A,...e){ro.logLevel<=ne.WARN&&ro.warn(`Auth (${Cr}): ${A}`,...e)}function Vi(A,...e){ro.logLevel<=ne.ERROR&&ro.error(`Auth (${Cr}): ${A}`,...e)}/**
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
 */function QA(A,...e){throw _l(A,...e)}function RA(A,...e){return _l(A,...e)}function Il(A,e,t){const r=Object.assign(Object.assign({},Z0()),{[e]:t});return new Us("auth","Firebase",r).create(e,{appName:A.name})}function it(A){return Il(A,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Av(A,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&QA(A,"argument-error"),Il(A,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _l(A,...e){if(typeof A!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=A.name),A._errorFactory.create(t,...r)}return bp.create(A,...e)}function X(A,e,...t){if(!A)throw _l(e,...t)}function nt(A){const e="INTERNAL ASSERTION FAILED: "+A;throw Vi(e),new Error(e)}function ut(A,e){A||nt(e)}/**
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
 */function Uc(){var A;return typeof self!="undefined"&&((A=self.location)===null||A===void 0?void 0:A.href)||""}function tv(){return td()==="http:"||td()==="https:"}function td(){var A;return typeof self!="undefined"&&((A=self.location)===null||A===void 0?void 0:A.protocol)||null}/**
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
 */function rv(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(tv()||SC()||"connection"in navigator)?navigator.onLine:!0}function nv(){if(typeof navigator=="undefined")return null;const A=navigator;return A.languages&&A.languages[0]||A.language||null}/**
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
 */class bs{constructor(e,t){this.shortDelay=e,this.longDelay=t,ut(t>e,"Short delay should be less than long delay!"),this.isMobile=FC()||RC()}get(){return rv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ul(A,e){ut(A.emulator,"Emulator should always be set here");const{url:t}=A.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Fp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;if(typeof globalThis!="undefined"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch!="undefined")return fetch;nt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;if(typeof globalThis!="undefined"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers!="undefined")return Headers;nt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;if(typeof globalThis!="undefined"&&globalThis.Response)return globalThis.Response;if(typeof Response!="undefined")return Response;nt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const iv=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ov=new bs(3e4,6e4);function pt(A,e){return A.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:A.tenantId}):e}function zA(s,i,a,c){return y(this,arguments,function*(A,e,t,r,n={}){return Tp(A,n,()=>y(null,null,function*(){let l={},h={};r&&(e==="GET"?h=r:l={body:JSON.stringify(r)});const f=Qs(Object.assign({key:A.config.apiKey},h)).slice(1),p=yield A._getAdditionalHeaders();p["Content-Type"]="application/json",A.languageCode&&(p["X-Firebase-Locale"]=A.languageCode);const C=Object.assign({method:e,headers:p},l);return xC()||(C.referrerPolicy="no-referrer"),A.emulatorConfig&&Jt(A.emulatorConfig.host)&&(C.credentials="include"),Fp.fetch()(yield xp(A,A.config.apiHost,t,f),C)}))})}function Tp(A,e,t){return y(this,null,function*(){A._canInitEmulator=!1;const r=Object.assign(Object.assign({},sv),e);try{const n=new cv(A),s=yield Promise.race([t(),n.promise]);n.clearNetworkTimeout();const i=yield s.json();if("needConfirmation"in i)throw ni(A,"account-exists-with-different-credential",i);if(s.ok&&!("errorMessage"in i))return i;{const a=s.ok?i.errorMessage:i.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ni(A,"credential-already-in-use",i);if(c==="EMAIL_EXISTS")throw ni(A,"email-already-in-use",i);if(c==="USER_DISABLED")throw ni(A,"user-disabled",i);const h=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Il(A,h,l);QA(A,h)}}catch(n){if(n instanceof qA)throw n;QA(A,"network-request-failed",{message:String(n)})}})}function Fs(s,i,a,c){return y(this,arguments,function*(A,e,t,r,n={}){const l=yield zA(A,e,t,r,n);return"mfaPendingCredential"in l&&QA(A,"multi-factor-auth-required",{_serverResponse:l}),l})}function xp(A,e,t,r){return y(this,null,function*(){const n=`${e}${t}?${r}`,s=A,i=s.config.emulator?Ul(A.config,n):`${A.config.apiScheme}://${n}`;return iv.includes(t)&&(yield s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(i).toString():i})}function av(A){switch(A){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class cv{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(RA(this.auth,"network-request-failed")),ov.get())})}}function ni(A,e,t){const r={appName:A.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const n=RA(A,e,r);return n.customData._tokenResponse=t,n}function rd(A){return A!==void 0&&A.enterprise!==void 0}class lv{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return av(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}function uv(A,e){return y(this,null,function*(){return zA(A,"GET","/v2/recaptchaConfig",pt(A,e))})}/**
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
 */function hv(A,e){return y(this,null,function*(){return zA(A,"POST","/v1/accounts:delete",e)})}function no(A,e){return y(this,null,function*(){return zA(A,"POST","/v1/accounts:lookup",e)})}/**
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
 */function Yn(A){if(A)try{const e=new Date(Number(A));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}function dv(A,e=!1){return y(this,null,function*(){const t=He(A),r=yield t.getIdToken(e),n=Ql(r);X(n&&n.exp&&n.auth_time&&n.iat,t.auth,"internal-error");const s=typeof n.firebase=="object"?n.firebase:void 0,i=s==null?void 0:s.sign_in_provider;return{claims:n,token:r,authTime:Yn(Na(n.auth_time)),issuedAtTime:Yn(Na(n.iat)),expirationTime:Yn(Na(n.exp)),signInProvider:i||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}})}function Na(A){return Number(A)*1e3}function Ql(A){const[e,t,r]=A.split(".");if(e===void 0||t===void 0||r===void 0)return Vi("JWT malformed, contained fewer than 3 sections"),null;try{const n=pp(t);return n?JSON.parse(n):(Vi("Failed to decode base64 JWT payload"),null)}catch(n){return Vi("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function nd(A){const e=Ql(A);return X(e,"internal-error"),X(typeof e.exp!="undefined","internal-error"),X(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */function Jr(A,e,t=!1){return y(this,null,function*(){if(t)return e;try{return yield e}catch(r){throw r instanceof qA&&fv(r)&&A.auth.currentUser===A&&(yield A.auth.signOut()),r}})}function fv({code:A}){return A==="auth/user-disabled"||A==="auth/user-token-expired"}/**
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
 */class gv{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const n=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(()=>y(this,null,function*(){yield this.iteration()}),t)}iteration(){return y(this,null,function*(){try{yield this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()})}}/**
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
 */class Qc{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yn(this.lastLoginAt),this.creationTime=Yn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */function so(A){return y(this,null,function*(){var e;const t=A.auth,r=yield A.getIdToken(),n=yield Jr(A,no(t,{idToken:r}));X(n==null?void 0:n.users.length,t,"internal-error");const s=n.users[0];A._notifyReloadListener(s);const i=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Sp(s.providerUserInfo):[],a=mv(A.providerData,i),c=A.isAnonymous,l=!(A.email&&s.passwordHash)&&!(a!=null&&a.length),h=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Qc(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(A,f)})}function pv(A){return y(this,null,function*(){const e=He(A);yield so(e),yield e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)})}function mv(A,e){return[...A.filter(r=>!e.some(n=>n.providerId===r.providerId)),...e]}function Sp(A){return A.map(e=>{var{providerId:t}=e,r=El(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */function Bv(A,e){return y(this,null,function*(){const t=yield Tp(A,{},()=>y(null,null,function*(){const r=Qs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:s}=A.config,i=yield xp(A,n,"/v1/token",`key=${s}`),a=yield A._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return A.emulatorConfig&&Jt(A.emulatorConfig.host)&&(c.credentials="include"),Fp.fetch()(i,c)}));return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}})}function wv(A,e){return y(this,null,function*(){return zA(A,"POST","/v2/accounts:revokeToken",pt(A,e))})}/**
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
 */class Gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken!="undefined","internal-error"),X(typeof e.refreshToken!="undefined","internal-error");const t="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):nd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){X(e.length!==0,"internal-error");const t=nd(e);this.updateTokensAndExpiration(e,null,t)}getToken(e,t=!1){return y(this,null,function*(){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(yield this.refresh(e,this.refreshToken),this.accessToken):null)})}clearRefreshToken(){this.refreshToken=null}refresh(e,t){return y(this,null,function*(){const{accessToken:r,refreshToken:n,expiresIn:s}=yield Bv(e,t);this.updateTokensAndExpiration(r,n,Number(s))})}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:n,expirationTime:s}=t,i=new Gr;return r&&(X(typeof r=="string","internal-error",{appName:e}),i.refreshToken=r),n&&(X(typeof n=="string","internal-error",{appName:e}),i.accessToken=n),s&&(X(typeof s=="number","internal-error",{appName:e}),i.expirationTime=s),i}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gr,this.toJSON())}_performRefresh(){return nt("not implemented")}}/**
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
 */function Ct(A,e){X(typeof A=="string"||typeof A=="undefined","internal-error",{appName:e})}class xA{constructor(e){var{uid:t,auth:r,stsTokenManager:n}=e,s=El(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qc(s.createdAt||void 0,s.lastLoginAt||void 0)}getIdToken(e){return y(this,null,function*(){const t=yield Jr(this,this.stsTokenManager.getToken(this.auth,e));return X(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,yield this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t})}getIdTokenResult(e){return dv(this,e)}reload(){return pv(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new xA(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}_updateTokensIfNecessary(e,t=!1){return y(this,null,function*(){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&(yield so(this)),yield this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)})}delete(){return y(this,null,function*(){if(hA(this.auth.app))return Promise.reject(it(this.auth));const e=yield this.getIdToken();return yield Jr(this,hv(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()})}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,n,s,i,a,c,l,h;const f=(r=t.displayName)!==null&&r!==void 0?r:void 0,p=(n=t.email)!==null&&n!==void 0?n:void 0,C=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,_=(i=t.photoURL)!==null&&i!==void 0?i:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,b=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,x=(l=t.createdAt)!==null&&l!==void 0?l:void 0,S=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:D,emailVerified:k,isAnonymous:O,providerData:H,stsTokenManager:U}=t;X(D&&U,e,"internal-error");const m=Gr.fromJSON(this.name,U);X(typeof D=="string",e,"internal-error"),Ct(f,e.name),Ct(p,e.name),X(typeof k=="boolean",e,"internal-error"),X(typeof O=="boolean",e,"internal-error"),Ct(C,e.name),Ct(_,e.name),Ct(v,e.name),Ct(b,e.name),Ct(x,e.name),Ct(S,e.name);const w=new xA({uid:D,auth:e,email:p,emailVerified:k,displayName:f,isAnonymous:O,photoURL:_,phoneNumber:C,tenantId:v,stsTokenManager:m,createdAt:x,lastLoginAt:S});return H&&Array.isArray(H)&&(w.providerData=H.map(Q=>Object.assign({},Q))),b&&(w._redirectEventId=b),w}static _fromIdTokenResponse(e,t,r=!1){return y(this,null,function*(){const n=new Gr;n.updateFromServerResponse(t);const s=new xA({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:r});return yield so(s),s})}static _fromGetAccountInfoResponse(e,t,r){return y(this,null,function*(){const n=t.users[0];X(n.localId!==void 0,"internal-error");const s=n.providerUserInfo!==void 0?Sp(n.providerUserInfo):[],i=!(n.email&&n.passwordHash)&&!(s!=null&&s.length),a=new Gr;a.updateFromIdToken(r);const c=new xA({uid:n.localId,auth:e,stsTokenManager:a,isAnonymous:i}),l={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:s,metadata:new Qc(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c})}}/**
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
 */const sd=new Map;function st(A){ut(A instanceof Function,"Expected a class definition");let e=sd.get(A);return e?(ut(e instanceof A,"Instance stored in cache mismatched with class"),e):(e=new A,sd.set(A,e),e)}/**
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
 */class Rp{constructor(){this.type="NONE",this.storage={}}_isAvailable(){return y(this,null,function*(){return!0})}_set(e,t){return y(this,null,function*(){this.storage[e]=t})}_get(e){return y(this,null,function*(){const t=this.storage[e];return t===void 0?null:t})}_remove(e){return y(this,null,function*(){delete this.storage[e]})}_addListener(e,t){}_removeListener(e,t){}}Rp.type="NONE";const id=Rp;/**
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
 */function Mi(A,e,t){return`firebase:${A}:${e}:${t}`}class $r{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:n,name:s}=this.auth;this.fullUserKey=Mi(this.userKey,n.apiKey,s),this.fullPersistenceKey=Mi("persistence",n.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}getCurrentUser(){return y(this,null,function*(){const e=yield this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=yield no(this.auth,{idToken:e}).catch(()=>{});return t?xA._fromGetAccountInfoResponse(this.auth,t,e):null}return xA._fromJSON(this.auth,e)})}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}setPersistence(e){return y(this,null,function*(){if(this.persistence===e)return;const t=yield this.getCurrentUser();if(yield this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)})}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static create(e,t,r="authUser"){return y(this,null,function*(){if(!t.length)return new $r(st(id),e,r);const n=(yield Promise.all(t.map(l=>y(null,null,function*(){if(yield l._isAvailable())return l})))).filter(l=>l);let s=n[0]||st(id);const i=Mi(r,e.config.apiKey,e.name);let a=null;for(const l of t)try{const h=yield l._get(i);if(h){let f;if(typeof h=="string"){const p=yield no(e,{idToken:h}).catch(()=>{});if(!p)break;f=yield xA._fromGetAccountInfoResponse(e,p,h)}else f=xA._fromJSON(e,h);l!==s&&(a=f),s=l;break}}catch(h){}const c=n.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new $r(s,e,r):(s=c[0],a&&(yield s._set(i,a.toJSON())),yield Promise.all(t.map(l=>y(null,null,function*(){if(l!==s)try{yield l._remove(i)}catch(h){}}))),new $r(s,e,r))})}}/**
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
 */function od(A){const e=A.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Dp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Op(e))return"Blackberry";if(Np(e))return"Webos";if(Pp(e))return"Safari";if((e.includes("chrome/")||Lp(e))&&!e.includes("edge/"))return"Chrome";if(kp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=A.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Dp(A=nA()){return/firefox\//i.test(A)}function Pp(A=nA()){const e=A.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lp(A=nA()){return/crios\//i.test(A)}function Hp(A=nA()){return/iemobile/i.test(A)}function kp(A=nA()){return/android/i.test(A)}function Op(A=nA()){return/blackberry/i.test(A)}function Np(A=nA()){return/webos/i.test(A)}function bl(A=nA()){return/iphone|ipad|ipod/i.test(A)||/macintosh/i.test(A)&&/mobile/i.test(A)}function yv(A=nA()){var e;return bl(A)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Cv(){return DC()&&document.documentMode===10}function Vp(A=nA()){return bl(A)||kp(A)||Np(A)||Op(A)||/windows phone/i.test(A)||Hp(A)}/**
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
 */function Mp(A,e=[]){let t;switch(A){case"Browser":t=od(nA());break;case"Worker":t=`${od(nA())}-${A}`;break;default:t=A}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Cr}/${r}`}/**
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
 */class vv{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((i,a)=>{try{const c=e(s);i(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}runMiddleware(e){return y(this,null,function*(){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)yield r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const n of t)try{n()}catch(s){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}})}}/**
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
 */function Ev(t){return y(this,arguments,function*(A,e={}){return zA(A,"GET","/v2/passwordPolicy",pt(A,e))})}/**
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
 */const Iv=6;class _v{constructor(e){var t,r,n,s;const i=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=i.minPasswordLength)!==null&&t!==void 0?t:Iv,i.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=i.maxPasswordLength),i.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=i.containsLowercaseCharacter),i.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=i.containsUppercaseCharacter),i.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=i.containsNumericCharacter),i.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=i.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(n=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&n!==void 0?n:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,n,s,i,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(n=c.containsLowercaseLetter)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsNumericCharacter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let n=0;n<e.length;n++)r=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,n,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Uv{constructor(e,t,r,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ad(this),this.idTokenSubscription=new ad(this),this.beforeStateQueue=new vv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=st(t)),this._initializationPromise=this.queue(()=>y(this,null,function*(){var r,n,s;if(!this._deleted&&(this.persistenceManager=yield $r.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{yield this._popupRedirectResolver._initialize(this)}catch(i){}yield this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}})),this._initializationPromise}_onStorageEvent(){return y(this,null,function*(){if(this._deleted)return;const e=yield this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),yield this.currentUser.getIdToken();return}yield this._updateCurrentUser(e,!0)}})}initializeCurrentUserFromIdToken(e){return y(this,null,function*(){try{const t=yield no(this,{idToken:e}),r=yield xA._fromGetAccountInfoResponse(this,t,e);yield this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),yield this.directlySetCurrentUser(null)}})}initializeCurrentUser(e){return y(this,null,function*(){var t;if(hA(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(a,a))}):this.directlySetCurrentUser(null)}const r=yield this.assertedPersistence.getCurrentUser();let n=r,s=!1;if(e&&this.config.authDomain){yield this.getOrInitRedirectPersistenceManager();const i=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=n==null?void 0:n._redirectEventId,c=yield this.tryRedirectSignIn(e);(!i||i===a)&&(c!=null&&c.user)&&(n=c.user,s=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(s)try{yield this.beforeStateQueue.runMiddleware(n)}catch(i){n=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),yield this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)})}tryRedirectSignIn(e){return y(this,null,function*(){let t=null;try{t=yield this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(r){yield this._setRedirectUser(null)}return t})}reloadAndSetCurrentUserOrClear(e){return y(this,null,function*(){try{yield so(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)})}useDeviceLanguage(){this.languageCode=nv()}_delete(){return y(this,null,function*(){this._deleted=!0})}updateCurrentUser(e){return y(this,null,function*(){if(hA(this.app))return Promise.reject(it(this));const t=e?He(e):null;return t&&X(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))})}_updateCurrentUser(e,t=!1){return y(this,null,function*(){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||(yield this.beforeStateQueue.runMiddleware(e)),this.queue(()=>y(this,null,function*(){yield this.directlySetCurrentUser(e),this.notifyAuthListeners()}))})}signOut(){return y(this,null,function*(){return hA(this.app)?Promise.reject(it(this)):(yield this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&(yield this._setRedirectUser(null)),this._updateCurrentUser(null,!0))})}setPersistence(e){return hA(this.app)?Promise.reject(it(this)):this.queue(()=>y(this,null,function*(){yield this.assertedPersistence.setPersistence(st(e))}))}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}validatePassword(e){return y(this,null,function*(){this._getPasswordPolicyInternal()||(yield this._updatePasswordPolicy());const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)})}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}_updatePasswordPolicy(){return y(this,null,function*(){const e=yield Ev(this),t=new _v(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t})}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Us("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}revokeAccessToken(e){return y(this,null,function*(){if(this.currentUser){const t=yield this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),yield wv(this,r)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}_setRedirectUser(e,t){return y(this,null,function*(){const r=yield this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)})}getOrInitRedirectPersistenceManager(e){return y(this,null,function*(){if(!this.redirectPersistenceManager){const t=e&&st(e)||this._popupRedirectResolver;X(t,this,"argument-error"),this.redirectPersistenceManager=yield $r.create(this,[st(t._redirectPersistence)],"redirectUser"),this.redirectUser=yield this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager})}_redirectUserForId(e){return y(this,null,function*(){var t,r;return this._isInitialized&&(yield this.queue(()=>y(this,null,function*(){}))),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null})}_persistUserIfCurrent(e){return y(this,null,function*(){if(e===this.currentUser)return this.queue(()=>y(this,null,function*(){return this.directlySetCurrentUser(e)}))})}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,n){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let i=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(a,this,"internal-error"),a.then(()=>{i||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,n);return()=>{i=!0,c()}}else{const c=e.addObserver(t);return()=>{i=!0,c()}}}directlySetCurrentUser(e){return y(this,null,function*(){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?yield this.assertedPersistence.setCurrentUser(e):yield this.assertedPersistence.removeCurrentUser()})}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getAdditionalHeaders(){return y(this,null,function*(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=yield(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader();r&&(t["X-Firebase-Client"]=r);const n=yield this._getAppCheckToken();return n&&(t["X-Firebase-AppCheck"]=n),t})}_getAppCheckToken(){return y(this,null,function*(){var e;if(hA(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=yield(e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken();return t!=null&&t.error&&ev(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token})}}function mt(A){return He(A)}class ad{constructor(e){this.auth=e,this.observer=null,this.addObserver=MC(t=>this.observer=t)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Lo={loadJS(){return y(this,null,function*(){throw new Error("Unable to load external scripts")})},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Qv(A){Lo=A}function Kp(A){return Lo.loadJS(A)}function bv(){return Lo.recaptchaEnterpriseScript}function Fv(){return Lo.gapiScript}function Tv(A){return`__${A}${Math.floor(Math.random()*1e6)}`}class xv{constructor(){this.enterprise=new Sv}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Sv{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Rv="recaptcha-enterprise",jp="NO_RECAPTCHA";class Dv{constructor(e){this.type=Rv,this.auth=mt(e)}verify(e="verify",t=!1){return y(this,null,function*(){function r(s){return y(this,null,function*(){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise((i,a)=>y(null,null,function*(){uv(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new lv(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,i(l.siteKey)}}).catch(c=>{a(c)})}))})}function n(s,i,a){const c=window.grecaptcha;rd(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{i(l)}).catch(()=>{i(jp)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new xv().execute("siteKey",{action:"verify"}):new Promise((s,i)=>{r(this.auth).then(a=>{if(!t&&rd(window.grecaptcha))n(a,s,i);else{if(typeof window=="undefined"){i(new Error("RecaptchaVerifier is only supported in browser"));return}let c=bv();c.length!==0&&(c+=a),Kp(c).then(()=>{n(a,s,i)}).catch(l=>{i(l)})}}).catch(a=>{i(a)})})})}}function cd(A,e,t,r=!1,n=!1){return y(this,null,function*(){const s=new Dv(A);let i;if(n)i=jp;else try{i=yield s.verify(t)}catch(c){i=yield s.verify(t,!0)}const a=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,l=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:i,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:i,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return r?Object.assign(a,{captchaResp:i}):Object.assign(a,{captchaResponse:i}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a})}function io(A,e,t,r,n){return y(this,null,function*(){var s;if(!((s=A._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=yield cd(A,e,t,t==="getOobCode");return r(A,i)}else return r(A,e).catch(i=>y(null,null,function*(){if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=yield cd(A,e,t,t==="getOobCode");return r(A,a)}else return Promise.reject(i)}))})}/**
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
 */function Pv(A,e){const t=Po(A,"auth");if(t.isInitialized()){const n=t.getImmediate(),s=t.getOptions();if(fr(s,e!=null?e:{}))return n;QA(n,"already-initialized")}return t.initialize({options:e})}function Lv(A,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(st);e!=null&&e.errorMap&&A._updateErrorMap(e.errorMap),A._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Hv(A,e,t){const r=mt(A);X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const n=!1,s=Gp(e),{host:i,port:a}=kv(e),c=a===null?"":`:${a}`,l={url:`${s}//${i}${c}/`},h=Object.freeze({host:i,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:n})});if(!r._canInitEmulator){X(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),X(fr(l,r.config.emulator)&&fr(h,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=l,r.emulatorConfig=h,r.settings.appVerificationDisabledForTesting=!0,Jt(i)?(Bl(`${s}//${i}${c}`),wl("Auth",!0)):Ov()}function Gp(A){const e=A.indexOf(":");return e<0?"":A.substr(0,e+1)}function kv(A){const e=Gp(A),t=/(\/\/)?([^?#/]+)/.exec(A.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(r);if(n){const s=n[1];return{host:s,port:ld(r.substr(s.length+1))}}else{const[s,i]=r.split(":");return{host:s,port:ld(i)}}}function ld(A){if(!A)return null;const e=Number(A);return isNaN(e)?null:e}function Ov(){function A(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",A):A())}/**
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
 */class Fl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return nt("not implemented")}_getIdTokenResponse(e){return nt("not implemented")}_linkToIdToken(e,t){return nt("not implemented")}_getReauthenticationResolver(e){return nt("not implemented")}}function Nv(A,e){return y(this,null,function*(){return zA(A,"POST","/v1/accounts:signUp",e)})}/**
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
 */function Vv(A,e){return y(this,null,function*(){return Fs(A,"POST","/v1/accounts:signInWithPassword",pt(A,e))})}function Mv(A,e){return y(this,null,function*(){return zA(A,"POST","/v1/accounts:sendOobCode",pt(A,e))})}function Kv(A,e){return y(this,null,function*(){return Mv(A,e)})}/**
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
 */function jv(A,e){return y(this,null,function*(){return Fs(A,"POST","/v1/accounts:signInWithEmailLink",pt(A,e))})}function Gv(A,e){return y(this,null,function*(){return Fs(A,"POST","/v1/accounts:signInWithEmailLink",pt(A,e))})}/**
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
 */class hs extends Fl{constructor(e,t,r,n=null){super("password",r),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new hs(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new hs(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}_getIdTokenResponse(e){return y(this,null,function*(){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return io(e,t,"signInWithPassword",Vv);case"emailLink":return jv(e,{email:this._email,oobCode:this._password});default:QA(e,"internal-error")}})}_linkToIdToken(e,t){return y(this,null,function*(){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return io(e,r,"signUpPassword",Nv);case"emailLink":return Gv(e,{idToken:t,email:this._email,oobCode:this._password});default:QA(e,"internal-error")}})}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */function Wr(A,e){return y(this,null,function*(){return Fs(A,"POST","/v1/accounts:signInWithIdp",pt(A,e))})}/**
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
 */const $v="http://localhost";class pr extends Fl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):QA("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:n}=t,s=El(t,["providerId","signInMethod"]);if(!r||!n)return null;const i=new pr(r,n);return i.idToken=s.idToken||void 0,i.accessToken=s.accessToken||void 0,i.secret=s.secret,i.nonce=s.nonce,i.pendingToken=s.pendingToken||null,i}_getIdTokenResponse(e){const t=this.buildRequest();return Wr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Wr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wr(e,t)}buildRequest(){const e={requestUri:$v,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Qs(t)}return e}}/**
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
 */function Wv(A){switch(A){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Xv(A){const e=Hn(kn(A)).link,t=e?Hn(kn(e)).deep_link_id:null,r=Hn(kn(A)).deep_link_id;return(r?Hn(kn(r)).link:null)||r||t||e||A}class Tl{constructor(e){var t,r,n,s,i,a;const c=Hn(kn(e)),l=(t=c.apiKey)!==null&&t!==void 0?t:null,h=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Wv((n=c.mode)!==null&&n!==void 0?n:null);X(l&&h&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=h,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(i=c.lang)!==null&&i!==void 0?i:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Xv(e);try{return new Tl(t)}catch(r){return null}}}/**
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
 */class an{constructor(){this.providerId=an.PROVIDER_ID}static credential(e,t){return hs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Tl.parseLink(t);return X(r,"argument-error"),hs._fromEmailAndCode(e,r.code,r.tenantId)}}an.PROVIDER_ID="password";an.EMAIL_PASSWORD_SIGN_IN_METHOD="password";an.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Ts extends xl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class _t extends Ts{constructor(){super("facebook.com")}static credential(e){return pr._fromParams({providerId:_t.PROVIDER_ID,signInMethod:_t.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _t.credentialFromTaggedObject(e)}static credentialFromError(e){return _t.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _t.credential(e.oauthAccessToken)}catch(t){return null}}}_t.FACEBOOK_SIGN_IN_METHOD="facebook.com";_t.PROVIDER_ID="facebook.com";/**
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
 */class rt extends Ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pr._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return rt.credential(t,r)}catch(n){return null}}}rt.GOOGLE_SIGN_IN_METHOD="google.com";rt.PROVIDER_ID="google.com";/**
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
 */class Ut extends Ts{constructor(){super("github.com")}static credential(e){return pr._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ut.credential(e.oauthAccessToken)}catch(t){return null}}}Ut.GITHUB_SIGN_IN_METHOD="github.com";Ut.PROVIDER_ID="github.com";/**
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
 */class Qt extends Ts{constructor(){super("twitter.com")}static credential(e,t){return pr._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Qt.credential(t,r)}catch(n){return null}}}Qt.TWITTER_SIGN_IN_METHOD="twitter.com";Qt.PROVIDER_ID="twitter.com";/**
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
 */function qv(A,e){return y(this,null,function*(){return Fs(A,"POST","/v1/accounts:signUp",pt(A,e))})}/**
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
 */class mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static _fromIdTokenResponse(e,t,r,n=!1){return y(this,null,function*(){const s=yield xA._fromIdTokenResponse(e,r,n),i=ud(r);return new mr({user:s,providerId:i,_tokenResponse:r,operationType:t})})}static _forOperation(e,t,r){return y(this,null,function*(){yield e._updateTokensIfNecessary(r,!0);const n=ud(r);return new mr({user:e,providerId:n,_tokenResponse:r,operationType:t})})}}function ud(A){return A.providerId?A.providerId:"phoneNumber"in A?"phone":null}/**
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
 */class oo extends qA{constructor(e,t,r,n){var s;super(t.code,t.message),this.operationType=r,this.user=n,Object.setPrototypeOf(this,oo.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,n){return new oo(e,t,r,n)}}function $p(A,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(A):t._getIdTokenResponse(A)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?oo._fromErrorAndOperation(A,s,e,r):s})}function zv(A,e,t=!1){return y(this,null,function*(){const r=yield Jr(A,e._linkToIdToken(A.auth,yield A.getIdToken()),t);return mr._forOperation(A,"link",r)})}/**
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
 */function Jv(A,e,t=!1){return y(this,null,function*(){const{auth:r}=A;if(hA(r.app))return Promise.reject(it(r));const n="reauthenticate";try{const s=yield Jr(A,$p(r,n,e,A),t);X(s.idToken,r,"internal-error");const i=Ql(s.idToken);X(i,r,"internal-error");const{sub:a}=i;return X(A.uid===a,r,"user-mismatch"),mr._forOperation(A,n,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&QA(r,"user-mismatch"),s}})}/**
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
 */function Wp(A,e,t=!1){return y(this,null,function*(){if(hA(A.app))return Promise.reject(it(A));const r="signIn",n=yield $p(A,r,e),s=yield mr._fromIdTokenResponse(A,r,n);return t||(yield A._updateCurrentUser(s.user)),s})}function Yv(A,e){return y(this,null,function*(){return Wp(mt(A),e)})}/**
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
 */function Xp(A){return y(this,null,function*(){const e=mt(A);e._getPasswordPolicyInternal()&&(yield e._updatePasswordPolicy())})}function Zv(A,e,t){return y(this,null,function*(){const r=mt(A);yield io(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Kv)})}function eE(A,e,t){return y(this,null,function*(){if(hA(A.app))return Promise.reject(it(A));const r=mt(A),i=yield io(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qv).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Xp(A),c}),a=yield mr._fromIdTokenResponse(r,"signIn",i);return yield r._updateCurrentUser(a.user),a})}function AE(A,e,t){return hA(A.app)?Promise.reject(it(A)):Yv(He(A),an.credential(e,t)).catch(r=>y(null,null,function*(){throw r.code==="auth/password-does-not-meet-requirements"&&Xp(A),r}))}/**
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
 */function tE(A,e){return y(this,null,function*(){return zA(A,"POST","/v1/accounts:update",e)})}/**
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
 */function Va(r,n){return y(this,arguments,function*(A,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=He(A),a={idToken:yield s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=yield Jr(s,tE(s.auth,a));s.displayName=c.displayName||null,s.photoURL=c.photoUrl||null;const l=s.providerData.find(({providerId:h})=>h==="password");l&&(l.displayName=s.displayName,l.photoURL=s.photoURL),yield s._updateTokensIfNecessary(c)})}function rE(A,e,t,r){return He(A).onIdTokenChanged(e,t,r)}function nE(A,e,t){return He(A).beforeAuthStateChanged(e,t)}function sE(A,e,t,r){return He(A).onAuthStateChanged(e,t,r)}function iE(A){return He(A).signOut()}const ao="__sak";/**
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
 */class qp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ao,"1"),this.storage.removeItem(ao),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const oE=1e3,aE=10;class Xr extends qp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),n=this.localCache[t];r!==n&&e(t,n,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((i,a,c)=>{this.notifyListeners(i,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const n=()=>{const i=this.storage.getItem(r);!t&&this.localCache[r]===i||this.notifyListeners(r,i)},s=this.storage.getItem(r);Cv()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,aE):n()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const n of Array.from(r))n(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},oE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}_set(e,t){return y(this,null,function*(){yield rr(Xr.prototype,this,"_set").call(this,e,t),this.localCache[e]=JSON.stringify(t)})}_get(e){return y(this,null,function*(){const t=yield rr(Xr.prototype,this,"_get").call(this,e);return this.localCache[e]=JSON.stringify(t),t})}_remove(e){return y(this,null,function*(){yield rr(Xr.prototype,this,"_remove").call(this,e),delete this.localCache[e]})}}Xr.type="LOCAL";const cE=Xr;/**
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
 */class zp extends qp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zp.type="SESSION";const Jp=zp;/**
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
 */function lE(A){return Promise.all(A.map(e=>y(null,null,function*(){try{return{fulfilled:!0,value:yield e}}catch(t){return{fulfilled:!1,reason:t}}})))}/**
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
 */class Ho{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(n=>n.isListeningto(e));if(t)return t;const r=new Ho(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}handleEvent(e){return y(this,null,function*(){const t=e,{eventId:r,eventType:n,data:s}=t.data,i=this.handlersMap[n];if(!(i!=null&&i.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:n});const a=Array.from(i).map(l=>y(this,null,function*(){return l(t.origin,s)})),c=yield lE(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:n,response:c})})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ho.receivers=[];/**
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
 */class uE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}_send(e,t,r=50){return y(this,null,function*(){const n=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let s,i;return new Promise((a,c)=>{const l=Sl("",20);n.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},r);i={messageChannel:n,onMessage(f){const p=f;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(h),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(i),n.port1.addEventListener("message",i.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])}).finally(()=>{i&&this.removeMessageHandler(i)})})}}/**
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
 */function jA(){return window}function hE(A){jA().location.href=A}/**
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
 */function Yp(){return typeof jA().WorkerGlobalScope!="undefined"&&typeof jA().importScripts=="function"}function dE(){return y(this,null,function*(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(yield navigator.serviceWorker.ready).active}catch(A){return null}})}function fE(){var A;return((A=navigator==null?void 0:navigator.serviceWorker)===null||A===void 0?void 0:A.controller)||null}function gE(){return Yp()?self:null}/**
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
 */const Zp="firebaseLocalStorageDb",pE=1,co="firebaseLocalStorage",em="fbase_key";class xs{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ko(A,e){return A.transaction([co],e?"readwrite":"readonly").objectStore(co)}function mE(){const A=indexedDB.deleteDatabase(Zp);return new xs(A).toPromise()}function bc(){const A=indexedDB.open(Zp,pE);return new Promise((e,t)=>{A.addEventListener("error",()=>{t(A.error)}),A.addEventListener("upgradeneeded",()=>{const r=A.result;try{r.createObjectStore(co,{keyPath:em})}catch(n){t(n)}}),A.addEventListener("success",()=>y(null,null,function*(){const r=A.result;r.objectStoreNames.contains(co)?e(r):(r.close(),yield mE(),e(yield bc()))}))})}function hd(A,e,t){return y(this,null,function*(){const r=ko(A,!0).put({[em]:e,value:t});return new xs(r).toPromise()})}function BE(A,e){return y(this,null,function*(){const t=ko(A,!1).get(e),r=yield new xs(t).toPromise();return r===void 0?null:r.value})}function dd(A,e){const t=ko(A,!0).delete(e);return new xs(t).toPromise()}const wE=800,yE=3;class Am{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}_openDb(){return y(this,null,function*(){return this.db?this.db:(this.db=yield bc(),this.db)})}_withRetries(e){return y(this,null,function*(){let t=0;for(;;)try{const r=yield this._openDb();return yield e(r)}catch(r){if(t++>yE)throw r;this.db&&(this.db.close(),this.db=void 0)}})}initializeServiceWorkerMessaging(){return y(this,null,function*(){return Yp()?this.initializeReceiver():this.initializeSender()})}initializeReceiver(){return y(this,null,function*(){this.receiver=Ho._getInstance(gE()),this.receiver._subscribe("keyChanged",(e,t)=>y(this,null,function*(){return{keyProcessed:(yield this._poll()).includes(t.key)}})),this.receiver._subscribe("ping",(e,t)=>y(this,null,function*(){return["keyChanged"]}))})}initializeSender(){return y(this,null,function*(){var e,t;if(this.activeServiceWorker=yield dE(),!this.activeServiceWorker)return;this.sender=new uE(this.activeServiceWorker);const r=yield this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)})}notifyServiceWorker(e){return y(this,null,function*(){if(!(!this.sender||!this.activeServiceWorker||fE()!==this.activeServiceWorker))try{yield this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}})}_isAvailable(){return y(this,null,function*(){try{if(!indexedDB)return!1;const e=yield bc();return yield hd(e,ao,"1"),yield dd(e,ao),!0}catch(e){}return!1})}_withPendingWrite(e){return y(this,null,function*(){this.pendingWrites++;try{yield e()}finally{this.pendingWrites--}})}_set(e,t){return y(this,null,function*(){return this._withPendingWrite(()=>y(this,null,function*(){return yield this._withRetries(r=>hd(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)}))})}_get(e){return y(this,null,function*(){const t=yield this._withRetries(r=>BE(r,e));return this.localCache[e]=t,t})}_remove(e){return y(this,null,function*(){return this._withPendingWrite(()=>y(this,null,function*(){return yield this._withRetries(t=>dd(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)}))})}_poll(){return y(this,null,function*(){const e=yield this._withRetries(n=>{const s=ko(n,!1).getAll();return new xs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:n,value:s}of e)r.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(s)&&(this.notifyListeners(n,s),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!r.has(n)&&(this.notifyListeners(n,null),t.push(n));return t})}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const n of Array.from(r))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>y(this,null,function*(){return this._poll()}),wE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Am.type="LOCAL";const CE=Am;new bs(3e4,6e4);/**
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
 */function tm(A,e){return e?st(e):(X(A._popupRedirectResolver,A,"argument-error"),A._popupRedirectResolver)}/**
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
 */class Rl extends Fl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function vE(A){return Wp(A.auth,new Rl(A),A.bypassAuthState)}function EE(A){const{auth:e,user:t}=A;return X(t,e,"internal-error"),Jv(t,new Rl(A),A.bypassAuthState)}function IE(A){return y(this,null,function*(){const{auth:e,user:t}=A;return X(t,e,"internal-error"),zv(t,new Rl(A),A.bypassAuthState)})}/**
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
 */class rm{constructor(e,t,r,n,s=!1){this.auth=e,this.resolver=r,this.user=n,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((e,t)=>y(this,null,function*(){this.pendingPromise={resolve:e,reject:t};try{this.eventManager=yield this.resolver._initialize(this.auth),yield this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}}))}onAuthEvent(e){return y(this,null,function*(){const{urlResponse:t,sessionId:r,postBody:n,tenantId:s,error:i,type:a}=e;if(i){this.reject(i);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(yield this.getIdpTask(a)(c))}catch(l){this.reject(l)}})}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vE;case"linkViaPopup":case"linkViaRedirect":return IE;case"reauthViaPopup":case"reauthViaRedirect":return EE;default:QA(this.auth,"internal-error")}}resolve(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ut(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _E=new bs(2e3,1e4);function UE(A,e,t){return y(this,null,function*(){if(hA(A.app))return Promise.reject(RA(A,"operation-not-supported-in-this-environment"));const r=mt(A);Av(A,e,xl);const n=tm(r,t);return new ar(r,"signInViaPopup",e,n).executeNotNull()})}class ar extends rm{constructor(e,t,r,n,s){super(e,t,n,s),this.provider=r,this.authWindow=null,this.pollId=null,ar.currentPopupAction&&ar.currentPopupAction.cancel(),ar.currentPopupAction=this}executeNotNull(){return y(this,null,function*(){const e=yield this.execute();return X(e,this.auth,"internal-error"),e})}onExecution(){return y(this,null,function*(){ut(this.filter.length===1,"Popup operations only handle one event");const e=Sl();this.authWindow=yield this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(RA(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()})}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(RA(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(RA(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_E.get())};e()}}ar.currentPopupAction=null;/**
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
 */const QE="pendingRedirect",Ki=new Map;class Zn extends rm{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}execute(){return y(this,null,function*(){let e=Ki.get(this.auth._key());if(!e){try{const r=(yield bE(this.resolver,this.auth))?yield rr(Zn.prototype,this,"execute").call(this):null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Ki.set(this.auth._key(),e)}return this.bypassAuthState||Ki.set(this.auth._key(),()=>Promise.resolve(null)),e()})}onAuthEvent(e){return y(this,null,function*(){if(e.type==="signInViaRedirect")return rr(Zn.prototype,this,"onAuthEvent").call(this,e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=yield this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,rr(Zn.prototype,this,"onAuthEvent").call(this,e);this.resolve(null)}})}onExecution(){return y(this,null,function*(){})}cleanUp(){}}function bE(A,e){return y(this,null,function*(){const t=xE(e),r=TE(A);if(!(yield r._isAvailable()))return!1;const n=(yield r._get(t))==="true";return yield r._remove(t),n})}function FE(A,e){Ki.set(A._key(),e)}function TE(A){return st(A._redirectPersistence)}function xE(A){return Mi(QE,A.config.apiKey,A.name)}function SE(A,e,t=!1){return y(this,null,function*(){if(hA(A.app))return Promise.reject(it(A));const r=mt(A),n=tm(r,e),i=yield new Zn(r,n,t).execute();return i&&!t&&(delete i.user._redirectEventId,yield r._persistUserIfCurrent(i.user),yield r._setRedirectUser(null,e)),i})}/**
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
 */const RE=10*60*1e3;class DE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!nm(e)){const n=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(RA(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=RE&&this.cachedEventUids.clear(),this.cachedEventUids.has(fd(e))}saveEventToCache(e){this.cachedEventUids.add(fd(e)),this.lastProcessedEventTime=Date.now()}}function fd(A){return[A.type,A.eventId,A.sessionId,A.tenantId].filter(e=>e).join("-")}function nm({type:A,error:e}){return A==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PE(A){switch(A.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nm(A);default:return!1}}/**
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
 */function LE(t){return y(this,arguments,function*(A,e={}){return zA(A,"GET","/v1/projects",e)})}/**
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
 */const HE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kE=/^https?/;function OE(A){return y(this,null,function*(){if(A.config.emulator)return;const{authorizedDomains:e}=yield LE(A);for(const t of e)try{if(NE(t))return}catch(r){}QA(A,"unauthorized-domain")})}function NE(A){const e=Uc(),{protocol:t,hostname:r}=new URL(e);if(A.startsWith("chrome-extension://")){const i=new URL(A);return i.hostname===""&&r===""?t==="chrome-extension:"&&A.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&i.hostname===r}if(!kE.test(t))return!1;if(HE.test(A))return r===A;const n=A.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(r)}/**
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
 */const VE=new bs(3e4,6e4);function gd(){const A=jA().___jsl;if(A!=null&&A.H){for(const e of Object.keys(A.H))if(A.H[e].r=A.H[e].r||[],A.H[e].L=A.H[e].L||[],A.H[e].r=[...A.H[e].L],A.CP)for(let t=0;t<A.CP.length;t++)A.CP[t]=null}}function ME(A){return new Promise((e,t)=>{var r,n,s;function i(){gd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gd(),t(RA(A,"network-request-failed"))},timeout:VE.get()})}if(!((n=(r=jA().gapi)===null||r===void 0?void 0:r.iframes)===null||n===void 0)&&n.Iframe)e(gapi.iframes.getContext());else if(!((s=jA().gapi)===null||s===void 0)&&s.load)i();else{const a=Tv("iframefcb");return jA()[a]=()=>{gapi.load?i():t(RA(A,"network-request-failed"))},Kp(`${Fv()}?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw ji=null,e})}let ji=null;function KE(A){return ji=ji||ME(A),ji}/**
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
 */const jE=new bs(5e3,15e3),GE="__/auth/iframe",$E="emulator/auth/iframe",WE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qE(A){const e=A.config;X(e.authDomain,A,"auth-domain-config-required");const t=e.emulator?Ul(e,$E):`https://${A.config.authDomain}/${GE}`,r={apiKey:e.apiKey,appName:A.name,v:Cr},n=XE.get(A.config.apiHost);n&&(r.eid=n);const s=A._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Qs(r).slice(1)}`}function zE(A){return y(this,null,function*(){const e=yield KE(A),t=jA().gapi;return X(t,A,"internal-error"),e.open({where:document.body,url:qE(A),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WE,dontclear:!0},r=>new Promise((n,s)=>y(null,null,function*(){yield r.restyle({setHideOnLeave:!1});const i=RA(A,"network-request-failed"),a=jA().setTimeout(()=>{s(i)},jE.get());function c(){jA().clearTimeout(a),n(r)}r.ping(c).then(c,()=>{s(i)})})))})}/**
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
 */const JE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YE=500,ZE=600,eI="_blank",AI="http://localhost";class pd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function tI(A,e,t,r=YE,n=ZE){const s=Math.max((window.screen.availHeight-n)/2,0).toString(),i=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},JE),{width:r.toString(),height:n.toString(),top:s,left:i}),l=nA().toLowerCase();t&&(a=Lp(l)?eI:t),Dp(l)&&(e=e||AI,c.scrollbars="yes");const h=Object.entries(c).reduce((p,[C,_])=>`${p}${C}=${_},`,"");if(yv(l)&&a!=="_self")return rI(e||"",a),new pd(null);const f=window.open(e||"",a,h);X(f,A,"popup-blocked");try{f.focus()}catch(p){}return new pd(f)}function rI(A,e){const t=document.createElement("a");t.href=A,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const nI="__/auth/handler",sI="emulator/auth/handler",iI=encodeURIComponent("fac");function md(A,e,t,r,n,s){return y(this,null,function*(){X(A.config.authDomain,A,"auth-domain-config-required"),X(A.config.apiKey,A,"invalid-api-key");const i={apiKey:A.config.apiKey,appName:A.name,authType:t,redirectUrl:r,v:Cr,eventId:n};if(e instanceof xl){e.setDefaultLanguage(A.languageCode),i.providerId=e.providerId||"",VC(e.getCustomParameters())||(i.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))i[h]=f}if(e instanceof Ts){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(i.scopes=h.join(","))}A.tenantId&&(i.tid=A.tenantId);const a=i;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=yield A._getAppCheckToken(),l=c?`#${iI}=${encodeURIComponent(c)}`:"";return`${oI(A)}?${Qs(a).slice(1)}${l}`})}function oI({config:A}){return A.emulator?Ul(A,sI):`https://${A.authDomain}/${nI}`}/**
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
 */const Ma="webStorageSupport";class aI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jp,this._completeRedirectFn=SE,this._overrideRedirectResult=FE}_openPopup(e,t,r,n){return y(this,null,function*(){var s;ut((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const i=yield md(e,t,r,Uc(),n);return tI(e,i,Sl())})}_openRedirect(e,t,r,n){return y(this,null,function*(){yield this._originValidation(e);const s=yield md(e,t,r,Uc(),n);return hE(s),new Promise(()=>{})})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:n,promise:s}=this.eventManagers[t];return n?Promise.resolve(n):(ut(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}initAndGetManager(e){return y(this,null,function*(){const t=yield zE(e),r=new DE(e);return t.register("authEvent",n=>(X(n==null?void 0:n.authEvent,e,"invalid-auth-event"),{status:r.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r})}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ma,{type:Ma},n=>{var s;const i=(s=n==null?void 0:n[0])===null||s===void 0?void 0:s[Ma];i!==void 0&&t(!!i),QA(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=OE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Vp()||Pp()||bl()}}const cI=aI;var Bd="@firebase/auth",wd="1.10.7";/**
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
 */class lI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}getToken(e){return y(this,null,function*(){return this.assertAuthConfigured(),yield this.auth._initializationPromise,this.auth.currentUser?{accessToken:yield this.auth.currentUser.getIdToken(e)}:null})}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uI(A){switch(A){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hI(A){gr(new Mt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:i,authDomain:a}=r.options;X(i&&!i.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:i,authDomain:a,clientPlatform:A,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mp(A)},l=new Uv(r,n,s,c);return Lv(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),gr(new Mt("auth-internal",e=>{const t=mt(e.getProvider("auth").getImmediate());return(r=>new lI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),KA(Bd,wd,uI(A)),KA(Bd,wd,"esm2017")}/**
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
 */const dI=5*60,fI=yp("authIdTokenMaxAge")||dI;let yd=null;const gI=A=>e=>y(null,null,function*(){const t=e&&(yield e.getIdTokenResult()),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>fI)return;const n=t==null?void 0:t.token;yd!==n&&(yd=n,yield fetch(A,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))});function pI(A=vl()){const e=Po(A,"auth");if(e.isInitialized())return e.getImmediate();const t=Pv(A,{popupRedirectResolver:cI,persistence:[CE,cE,Jp]}),r=yp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const i=gI(s.toString());nE(t,i,()=>i(t.currentUser)),rE(t,a=>i(a))}}const n=mp("auth");return n&&Hv(t,`http://${n}`),t}function mI(){var A,e;return(e=(A=document.getElementsByTagName("head"))===null||A===void 0?void 0:A[0])!==null&&e!==void 0?e:document}Qv({loadJS(A){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",A),r.onload=e,r.onerror=n=>{const s=RA("internal-error");s.customData=n,t(s)},r.type="text/javascript",r.charset="UTF-8",mI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hI("Browser");var BI="firebase",wI="11.9.1";/**
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
 */KA(BI,wI,"app");var Cd=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Lt,sm;(function(){var A;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(U,m){function w(){}w.prototype=m.prototype,U.D=m.prototype,U.prototype=new w,U.prototype.constructor=U,U.C=function(Q,F,T){for(var I=Array(arguments.length-2),te=2;te<arguments.length;te++)I[te-2]=arguments[te];return m.prototype[F].apply(Q,I)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function n(U,m,w){w||(w=0);var Q=Array(16);if(typeof m=="string")for(var F=0;16>F;++F)Q[F]=m.charCodeAt(w++)|m.charCodeAt(w++)<<8|m.charCodeAt(w++)<<16|m.charCodeAt(w++)<<24;else for(F=0;16>F;++F)Q[F]=m[w++]|m[w++]<<8|m[w++]<<16|m[w++]<<24;m=U.g[0],w=U.g[1],F=U.g[2];var T=U.g[3],I=m+(T^w&(F^T))+Q[0]+3614090360&4294967295;m=w+(I<<7&4294967295|I>>>25),I=T+(F^m&(w^F))+Q[1]+3905402710&4294967295,T=m+(I<<12&4294967295|I>>>20),I=F+(w^T&(m^w))+Q[2]+606105819&4294967295,F=T+(I<<17&4294967295|I>>>15),I=w+(m^F&(T^m))+Q[3]+3250441966&4294967295,w=F+(I<<22&4294967295|I>>>10),I=m+(T^w&(F^T))+Q[4]+4118548399&4294967295,m=w+(I<<7&4294967295|I>>>25),I=T+(F^m&(w^F))+Q[5]+1200080426&4294967295,T=m+(I<<12&4294967295|I>>>20),I=F+(w^T&(m^w))+Q[6]+2821735955&4294967295,F=T+(I<<17&4294967295|I>>>15),I=w+(m^F&(T^m))+Q[7]+4249261313&4294967295,w=F+(I<<22&4294967295|I>>>10),I=m+(T^w&(F^T))+Q[8]+1770035416&4294967295,m=w+(I<<7&4294967295|I>>>25),I=T+(F^m&(w^F))+Q[9]+2336552879&4294967295,T=m+(I<<12&4294967295|I>>>20),I=F+(w^T&(m^w))+Q[10]+4294925233&4294967295,F=T+(I<<17&4294967295|I>>>15),I=w+(m^F&(T^m))+Q[11]+2304563134&4294967295,w=F+(I<<22&4294967295|I>>>10),I=m+(T^w&(F^T))+Q[12]+1804603682&4294967295,m=w+(I<<7&4294967295|I>>>25),I=T+(F^m&(w^F))+Q[13]+4254626195&4294967295,T=m+(I<<12&4294967295|I>>>20),I=F+(w^T&(m^w))+Q[14]+2792965006&4294967295,F=T+(I<<17&4294967295|I>>>15),I=w+(m^F&(T^m))+Q[15]+1236535329&4294967295,w=F+(I<<22&4294967295|I>>>10),I=m+(F^T&(w^F))+Q[1]+4129170786&4294967295,m=w+(I<<5&4294967295|I>>>27),I=T+(w^F&(m^w))+Q[6]+3225465664&4294967295,T=m+(I<<9&4294967295|I>>>23),I=F+(m^w&(T^m))+Q[11]+643717713&4294967295,F=T+(I<<14&4294967295|I>>>18),I=w+(T^m&(F^T))+Q[0]+3921069994&4294967295,w=F+(I<<20&4294967295|I>>>12),I=m+(F^T&(w^F))+Q[5]+3593408605&4294967295,m=w+(I<<5&4294967295|I>>>27),I=T+(w^F&(m^w))+Q[10]+38016083&4294967295,T=m+(I<<9&4294967295|I>>>23),I=F+(m^w&(T^m))+Q[15]+3634488961&4294967295,F=T+(I<<14&4294967295|I>>>18),I=w+(T^m&(F^T))+Q[4]+3889429448&4294967295,w=F+(I<<20&4294967295|I>>>12),I=m+(F^T&(w^F))+Q[9]+568446438&4294967295,m=w+(I<<5&4294967295|I>>>27),I=T+(w^F&(m^w))+Q[14]+3275163606&4294967295,T=m+(I<<9&4294967295|I>>>23),I=F+(m^w&(T^m))+Q[3]+4107603335&4294967295,F=T+(I<<14&4294967295|I>>>18),I=w+(T^m&(F^T))+Q[8]+1163531501&4294967295,w=F+(I<<20&4294967295|I>>>12),I=m+(F^T&(w^F))+Q[13]+2850285829&4294967295,m=w+(I<<5&4294967295|I>>>27),I=T+(w^F&(m^w))+Q[2]+4243563512&4294967295,T=m+(I<<9&4294967295|I>>>23),I=F+(m^w&(T^m))+Q[7]+1735328473&4294967295,F=T+(I<<14&4294967295|I>>>18),I=w+(T^m&(F^T))+Q[12]+2368359562&4294967295,w=F+(I<<20&4294967295|I>>>12),I=m+(w^F^T)+Q[5]+4294588738&4294967295,m=w+(I<<4&4294967295|I>>>28),I=T+(m^w^F)+Q[8]+2272392833&4294967295,T=m+(I<<11&4294967295|I>>>21),I=F+(T^m^w)+Q[11]+1839030562&4294967295,F=T+(I<<16&4294967295|I>>>16),I=w+(F^T^m)+Q[14]+4259657740&4294967295,w=F+(I<<23&4294967295|I>>>9),I=m+(w^F^T)+Q[1]+2763975236&4294967295,m=w+(I<<4&4294967295|I>>>28),I=T+(m^w^F)+Q[4]+1272893353&4294967295,T=m+(I<<11&4294967295|I>>>21),I=F+(T^m^w)+Q[7]+4139469664&4294967295,F=T+(I<<16&4294967295|I>>>16),I=w+(F^T^m)+Q[10]+3200236656&4294967295,w=F+(I<<23&4294967295|I>>>9),I=m+(w^F^T)+Q[13]+681279174&4294967295,m=w+(I<<4&4294967295|I>>>28),I=T+(m^w^F)+Q[0]+3936430074&4294967295,T=m+(I<<11&4294967295|I>>>21),I=F+(T^m^w)+Q[3]+3572445317&4294967295,F=T+(I<<16&4294967295|I>>>16),I=w+(F^T^m)+Q[6]+76029189&4294967295,w=F+(I<<23&4294967295|I>>>9),I=m+(w^F^T)+Q[9]+3654602809&4294967295,m=w+(I<<4&4294967295|I>>>28),I=T+(m^w^F)+Q[12]+3873151461&4294967295,T=m+(I<<11&4294967295|I>>>21),I=F+(T^m^w)+Q[15]+530742520&4294967295,F=T+(I<<16&4294967295|I>>>16),I=w+(F^T^m)+Q[2]+3299628645&4294967295,w=F+(I<<23&4294967295|I>>>9),I=m+(F^(w|~T))+Q[0]+4096336452&4294967295,m=w+(I<<6&4294967295|I>>>26),I=T+(w^(m|~F))+Q[7]+1126891415&4294967295,T=m+(I<<10&4294967295|I>>>22),I=F+(m^(T|~w))+Q[14]+2878612391&4294967295,F=T+(I<<15&4294967295|I>>>17),I=w+(T^(F|~m))+Q[5]+4237533241&4294967295,w=F+(I<<21&4294967295|I>>>11),I=m+(F^(w|~T))+Q[12]+1700485571&4294967295,m=w+(I<<6&4294967295|I>>>26),I=T+(w^(m|~F))+Q[3]+2399980690&4294967295,T=m+(I<<10&4294967295|I>>>22),I=F+(m^(T|~w))+Q[10]+4293915773&4294967295,F=T+(I<<15&4294967295|I>>>17),I=w+(T^(F|~m))+Q[1]+2240044497&4294967295,w=F+(I<<21&4294967295|I>>>11),I=m+(F^(w|~T))+Q[8]+1873313359&4294967295,m=w+(I<<6&4294967295|I>>>26),I=T+(w^(m|~F))+Q[15]+4264355552&4294967295,T=m+(I<<10&4294967295|I>>>22),I=F+(m^(T|~w))+Q[6]+2734768916&4294967295,F=T+(I<<15&4294967295|I>>>17),I=w+(T^(F|~m))+Q[13]+1309151649&4294967295,w=F+(I<<21&4294967295|I>>>11),I=m+(F^(w|~T))+Q[4]+4149444226&4294967295,m=w+(I<<6&4294967295|I>>>26),I=T+(w^(m|~F))+Q[11]+3174756917&4294967295,T=m+(I<<10&4294967295|I>>>22),I=F+(m^(T|~w))+Q[2]+718787259&4294967295,F=T+(I<<15&4294967295|I>>>17),I=w+(T^(F|~m))+Q[9]+3951481745&4294967295,U.g[0]=U.g[0]+m&4294967295,U.g[1]=U.g[1]+(F+(I<<21&4294967295|I>>>11))&4294967295,U.g[2]=U.g[2]+F&4294967295,U.g[3]=U.g[3]+T&4294967295}r.prototype.u=function(U,m){m===void 0&&(m=U.length);for(var w=m-this.blockSize,Q=this.B,F=this.h,T=0;T<m;){if(F==0)for(;T<=w;)n(this,U,T),T+=this.blockSize;if(typeof U=="string"){for(;T<m;)if(Q[F++]=U.charCodeAt(T++),F==this.blockSize){n(this,Q),F=0;break}}else for(;T<m;)if(Q[F++]=U[T++],F==this.blockSize){n(this,Q),F=0;break}}this.h=F,this.o+=m},r.prototype.v=function(){var U=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);U[0]=128;for(var m=1;m<U.length-8;++m)U[m]=0;var w=8*this.o;for(m=U.length-8;m<U.length;++m)U[m]=w&255,w/=256;for(this.u(U),U=Array(16),m=w=0;4>m;++m)for(var Q=0;32>Q;Q+=8)U[w++]=this.g[m]>>>Q&255;return U};function s(U,m){var w=a;return Object.prototype.hasOwnProperty.call(w,U)?w[U]:w[U]=m(U)}function i(U,m){this.h=m;for(var w=[],Q=!0,F=U.length-1;0<=F;F--){var T=U[F]|0;Q&&T==m||(w[F]=T,Q=!1)}this.g=w}var a={};function c(U){return-128<=U&&128>U?s(U,function(m){return new i([m|0],0>m?-1:0)}):new i([U|0],0>U?-1:0)}function l(U){if(isNaN(U)||!isFinite(U))return f;if(0>U)return b(l(-U));for(var m=[],w=1,Q=0;U>=w;Q++)m[Q]=U/w|0,w*=4294967296;return new i(m,0)}function h(U,m){if(U.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(U.charAt(0)=="-")return b(h(U.substring(1),m));if(0<=U.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=l(Math.pow(m,8)),Q=f,F=0;F<U.length;F+=8){var T=Math.min(8,U.length-F),I=parseInt(U.substring(F,F+T),m);8>T?(T=l(Math.pow(m,T)),Q=Q.j(T).add(l(I))):(Q=Q.j(w),Q=Q.add(l(I)))}return Q}var f=c(0),p=c(1),C=c(16777216);A=i.prototype,A.m=function(){if(v(this))return-b(this).m();for(var U=0,m=1,w=0;w<this.g.length;w++){var Q=this.i(w);U+=(0<=Q?Q:4294967296+Q)*m,m*=4294967296}return U},A.toString=function(U){if(U=U||10,2>U||36<U)throw Error("radix out of range: "+U);if(_(this))return"0";if(v(this))return"-"+b(this).toString(U);for(var m=l(Math.pow(U,6)),w=this,Q="";;){var F=k(w,m).g;w=x(w,F.j(m));var T=((0<w.g.length?w.g[0]:w.h)>>>0).toString(U);if(w=F,_(w))return T+Q;for(;6>T.length;)T="0"+T;Q=T+Q}},A.i=function(U){return 0>U?0:U<this.g.length?this.g[U]:this.h};function _(U){if(U.h!=0)return!1;for(var m=0;m<U.g.length;m++)if(U.g[m]!=0)return!1;return!0}function v(U){return U.h==-1}A.l=function(U){return U=x(this,U),v(U)?-1:_(U)?0:1};function b(U){for(var m=U.g.length,w=[],Q=0;Q<m;Q++)w[Q]=~U.g[Q];return new i(w,~U.h).add(p)}A.abs=function(){return v(this)?b(this):this},A.add=function(U){for(var m=Math.max(this.g.length,U.g.length),w=[],Q=0,F=0;F<=m;F++){var T=Q+(this.i(F)&65535)+(U.i(F)&65535),I=(T>>>16)+(this.i(F)>>>16)+(U.i(F)>>>16);Q=I>>>16,T&=65535,I&=65535,w[F]=I<<16|T}return new i(w,w[w.length-1]&-2147483648?-1:0)};function x(U,m){return U.add(b(m))}A.j=function(U){if(_(this)||_(U))return f;if(v(this))return v(U)?b(this).j(b(U)):b(b(this).j(U));if(v(U))return b(this.j(b(U)));if(0>this.l(C)&&0>U.l(C))return l(this.m()*U.m());for(var m=this.g.length+U.g.length,w=[],Q=0;Q<2*m;Q++)w[Q]=0;for(Q=0;Q<this.g.length;Q++)for(var F=0;F<U.g.length;F++){var T=this.i(Q)>>>16,I=this.i(Q)&65535,te=U.i(F)>>>16,ce=U.i(F)&65535;w[2*Q+2*F]+=I*ce,S(w,2*Q+2*F),w[2*Q+2*F+1]+=T*ce,S(w,2*Q+2*F+1),w[2*Q+2*F+1]+=I*te,S(w,2*Q+2*F+1),w[2*Q+2*F+2]+=T*te,S(w,2*Q+2*F+2)}for(Q=0;Q<m;Q++)w[Q]=w[2*Q+1]<<16|w[2*Q];for(Q=m;Q<2*m;Q++)w[Q]=0;return new i(w,0)};function S(U,m){for(;(U[m]&65535)!=U[m];)U[m+1]+=U[m]>>>16,U[m]&=65535,m++}function D(U,m){this.g=U,this.h=m}function k(U,m){if(_(m))throw Error("division by zero");if(_(U))return new D(f,f);if(v(U))return m=k(b(U),m),new D(b(m.g),b(m.h));if(v(m))return m=k(U,b(m)),new D(b(m.g),m.h);if(30<U.g.length){if(v(U)||v(m))throw Error("slowDivide_ only works with positive integers.");for(var w=p,Q=m;0>=Q.l(U);)w=O(w),Q=O(Q);var F=H(w,1),T=H(Q,1);for(Q=H(Q,2),w=H(w,2);!_(Q);){var I=T.add(Q);0>=I.l(U)&&(F=F.add(w),T=I),Q=H(Q,1),w=H(w,1)}return m=x(U,F.j(m)),new D(F,m)}for(F=f;0<=U.l(m);){for(w=Math.max(1,Math.floor(U.m()/m.m())),Q=Math.ceil(Math.log(w)/Math.LN2),Q=48>=Q?1:Math.pow(2,Q-48),T=l(w),I=T.j(m);v(I)||0<I.l(U);)w-=Q,T=l(w),I=T.j(m);_(T)&&(T=p),F=F.add(T),U=x(U,I)}return new D(F,U)}A.A=function(U){return k(this,U).h},A.and=function(U){for(var m=Math.max(this.g.length,U.g.length),w=[],Q=0;Q<m;Q++)w[Q]=this.i(Q)&U.i(Q);return new i(w,this.h&U.h)},A.or=function(U){for(var m=Math.max(this.g.length,U.g.length),w=[],Q=0;Q<m;Q++)w[Q]=this.i(Q)|U.i(Q);return new i(w,this.h|U.h)},A.xor=function(U){for(var m=Math.max(this.g.length,U.g.length),w=[],Q=0;Q<m;Q++)w[Q]=this.i(Q)^U.i(Q);return new i(w,this.h^U.h)};function O(U){for(var m=U.g.length+1,w=[],Q=0;Q<m;Q++)w[Q]=U.i(Q)<<1|U.i(Q-1)>>>31;return new i(w,U.h)}function H(U,m){var w=m>>5;m%=32;for(var Q=U.g.length-w,F=[],T=0;T<Q;T++)F[T]=0<m?U.i(T+w)>>>m|U.i(T+w+1)<<32-m:U.i(T+w);return new i(F,U.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,sm=r,i.prototype.add=i.prototype.add,i.prototype.multiply=i.prototype.j,i.prototype.modulo=i.prototype.A,i.prototype.compare=i.prototype.l,i.prototype.toNumber=i.prototype.m,i.prototype.toString=i.prototype.toString,i.prototype.getBits=i.prototype.i,i.fromNumber=l,i.fromString=h,Lt=i}).apply(typeof Cd!="undefined"?Cd:typeof self!="undefined"?self:typeof window!="undefined"?window:{});var si=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var im,On,om,Gi,Fc,am,cm,lm;(function(){var A,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,g){return o==Array.prototype||o==Object.prototype||(o[u]=g.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof si=="object"&&si];for(var u=0;u<o.length;++u){var g=o[u];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=t(this);function n(o,u){if(u)e:{var g=r;o=o.split(".");for(var B=0;B<o.length-1;B++){var R=o[B];if(!(R in g))break e;g=g[R]}o=o[o.length-1],B=g[o],u=u(B),u!=B&&u!=null&&e(g,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var g=0,B=!1,R={next:function(){if(!B&&g<o.length){var P=g++;return{value:u(P,o[P]),done:!1}}return B=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}n("Array.prototype.values",function(o){return o||function(){return s(this,function(u,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function l(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function h(o,u,g){return o.call.apply(o.bind,arguments)}function f(o,u,g){if(!o)throw Error();if(2<arguments.length){var B=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,B),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function p(o,u,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function C(o,u){var g=Array.prototype.slice.call(arguments,1);return function(){var B=g.slice();return B.push.apply(B,arguments),o.apply(this,B)}}function _(o,u){function g(){}g.prototype=u.prototype,o.aa=u.prototype,o.prototype=new g,o.prototype.constructor=o,o.Qb=function(B,R,P){for(var M=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)M[pe-2]=arguments[pe];return u.prototype[R].apply(B,M)}}function v(o){const u=o.length;if(0<u){const g=Array(u);for(let B=0;B<u;B++)g[B]=o[B];return g}return[]}function b(o,u){for(let g=1;g<arguments.length;g++){const B=arguments[g];if(c(B)){const R=o.length||0,P=B.length||0;o.length=R+P;for(let M=0;M<P;M++)o[R+M]=B[M]}else o.push(B)}}class x{constructor(u,g){this.i=u,this.j=g,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function S(o){return/^[\s\xa0]*$/.test(o)}function D(){var o=a.navigator;return o&&(o=o.userAgent)?o:""}function k(o){return k[" "](o),o}k[" "]=function(){};var O=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function H(o,u,g){for(const B in o)u.call(g,o[B],B,o)}function U(o,u){for(const g in o)u.call(void 0,o[g],g,o)}function m(o){const u={};for(const g in o)u[g]=o[g];return u}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Q(o,u){let g,B;for(let R=1;R<arguments.length;R++){B=arguments[R];for(g in B)o[g]=B[g];for(let P=0;P<w.length;P++)g=w[P],Object.prototype.hasOwnProperty.call(B,g)&&(o[g]=B[g])}}function F(o){var u=1;o=o.split(":");const g=[];for(;0<u&&o.length;)g.push(o.shift()),u--;return o.length&&g.push(o.join(":")),g}function T(o){a.setTimeout(()=>{throw o},0)}function I(){var o=Ne;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class te{constructor(){this.h=this.g=null}add(u,g){const B=ce.get();B.set(u,g),this.h?this.h.next=B:this.g=B,this.h=B}}var ce=new x(()=>new ye,o=>o.reset());class ye{constructor(){this.next=this.g=this.h=null}set(u,g){this.h=u,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,J=!1,Ne=new te,gA=()=>{const o=a.Promise.resolve(void 0);ge=()=>{o.then(CA)}};var CA=()=>{for(var o;o=I();){try{o.h.call(o.g)}catch(g){T(g)}var u=ce;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}J=!1};function Qe(){this.s=this.s,this.C=this.C}Qe.prototype.s=!1,Qe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Qe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var de=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const g=()=>{};a.addEventListener("test",g,u),a.removeEventListener("test",g,u)}catch(g){}return o}();function ie(o,u){if(oe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var g=this.type=o.type,B=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(O){e:{try{k(u.nodeName);var R=!0;break e}catch(P){}R=!1}R||(u=null)}}else g=="mouseover"?u=o.fromElement:g=="mouseout"&&(u=o.toElement);this.relatedTarget=u,B?(this.clientX=B.clientX!==void 0?B.clientX:B.pageX,this.clientY=B.clientY!==void 0?B.clientY:B.pageY,this.screenX=B.screenX||0,this.screenY=B.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:HA[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ie.aa.h.call(this)}}_(ie,oe);var HA={2:"touch",3:"pen",4:"mouse"};ie.prototype.h=function(){ie.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var kA="closure_listenable_"+(1e6*Math.random()|0),yy=0;function Cy(o,u,g,B,R){this.listener=o,this.proxy=null,this.src=u,this.type=g,this.capture=!!B,this.ha=R,this.key=++yy,this.da=this.fa=!1}function ks(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Os(o){this.src=o,this.g={},this.h=0}Os.prototype.add=function(o,u,g,B,R){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var M=ha(o,u,B,R);return-1<M?(u=o[M],g||(u.fa=!1)):(u=new Cy(u,this.src,P,!!B,R),u.fa=g,o.push(u)),u};function ua(o,u){var g=u.type;if(g in o.g){var B=o.g[g],R=Array.prototype.indexOf.call(B,u,void 0),P;(P=0<=R)&&Array.prototype.splice.call(B,R,1),P&&(ks(u),o.g[g].length==0&&(delete o.g[g],o.h--))}}function ha(o,u,g,B){for(var R=0;R<o.length;++R){var P=o[R];if(!P.da&&P.listener==u&&P.capture==!!g&&P.ha==B)return R}return-1}var da="closure_lm_"+(1e6*Math.random()|0),fa={};function Hu(o,u,g,B,R){if(Array.isArray(u)){for(var P=0;P<u.length;P++)Hu(o,u[P],g,B,R);return null}return g=Nu(g),o&&o[kA]?o.K(u,g,l(B)?!!B.capture:!1,R):vy(o,u,g,!1,B,R)}function vy(o,u,g,B,R,P){if(!u)throw Error("Invalid event type");var M=l(R)?!!R.capture:!!R,pe=pa(o);if(pe||(o[da]=pe=new Os(o)),g=pe.add(u,g,B,M,P),g.proxy)return g;if(B=Ey(),g.proxy=B,B.src=o,B.listener=g,o.addEventListener)de||(R=M),R===void 0&&(R=!1),o.addEventListener(u.toString(),B,R);else if(o.attachEvent)o.attachEvent(Ou(u.toString()),B);else if(o.addListener&&o.removeListener)o.addListener(B);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Ey(){function o(g){return u.call(o.src,o.listener,g)}const u=Iy;return o}function ku(o,u,g,B,R){if(Array.isArray(u))for(var P=0;P<u.length;P++)ku(o,u[P],g,B,R);else B=l(B)?!!B.capture:!!B,g=Nu(g),o&&o[kA]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],g=ha(P,g,B,R),-1<g&&(ks(P[g]),Array.prototype.splice.call(P,g,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=pa(o))&&(u=o.g[u.toString()],o=-1,u&&(o=ha(u,g,B,R)),(g=-1<o?u[o]:null)&&ga(g))}function ga(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[kA])ua(u.i,o);else{var g=o.type,B=o.proxy;u.removeEventListener?u.removeEventListener(g,B,o.capture):u.detachEvent?u.detachEvent(Ou(g),B):u.addListener&&u.removeListener&&u.removeListener(B),(g=pa(u))?(ua(g,o),g.h==0&&(g.src=null,u[da]=null)):ks(o)}}}function Ou(o){return o in fa?fa[o]:fa[o]="on"+o}function Iy(o,u){if(o.da)o=!0;else{u=new ie(u,this);var g=o.listener,B=o.ha||o.src;o.fa&&ga(o),o=g.call(B,u)}return o}function pa(o){return o=o[da],o instanceof Os?o:null}var ma="__closure_events_fn_"+(1e9*Math.random()>>>0);function Nu(o){return typeof o=="function"?o:(o[ma]||(o[ma]=function(u){return o.handleEvent(u)}),o[ma])}function ze(){Qe.call(this),this.i=new Os(this),this.M=this,this.F=null}_(ze,Qe),ze.prototype[kA]=!0,ze.prototype.removeEventListener=function(o,u,g,B){ku(this,o,u,g,B)};function iA(o,u){var g,B=o.F;if(B)for(g=[];B;B=B.F)g.push(B);if(o=o.M,B=u.type||u,typeof u=="string")u=new oe(u,o);else if(u instanceof oe)u.target=u.target||o;else{var R=u;u=new oe(B,o),Q(u,R)}if(R=!0,g)for(var P=g.length-1;0<=P;P--){var M=u.g=g[P];R=Ns(M,B,!0,u)&&R}if(M=u.g=o,R=Ns(M,B,!0,u)&&R,R=Ns(M,B,!1,u)&&R,g)for(P=0;P<g.length;P++)M=u.g=g[P],R=Ns(M,B,!1,u)&&R}ze.prototype.N=function(){if(ze.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var g=o.g[u],B=0;B<g.length;B++)ks(g[B]);delete o.g[u],o.h--}}this.F=null},ze.prototype.K=function(o,u,g,B){return this.i.add(String(o),u,!1,g,B)},ze.prototype.L=function(o,u,g,B){return this.i.add(String(o),u,!0,g,B)};function Ns(o,u,g,B){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,P=0;P<u.length;++P){var M=u[P];if(M&&!M.da&&M.capture==g){var pe=M.listener,je=M.ha||M.src;M.fa&&ua(o.i,M),R=pe.call(je,B)!==!1&&R}}return R&&!B.defaultPrevented}function Vu(o,u,g){if(typeof o=="function")g&&(o=p(o,g));else if(o&&typeof o.handleEvent=="function")o=p(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:a.setTimeout(o,u||0)}function Mu(o){o.g=Vu(()=>{o.g=null,o.i&&(o.i=!1,Mu(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class _y extends Qe{constructor(u,g){super(),this.m=u,this.l=g,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Mu(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pn(o){Qe.call(this),this.h=o,this.g={}}_(pn,Qe);var Ku=[];function ju(o){H(o.g,function(u,g){this.g.hasOwnProperty(g)&&ga(u)},o),o.g={}}pn.prototype.N=function(){pn.aa.N.call(this),ju(this)},pn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ba=a.JSON.stringify,Uy=a.JSON.parse,Qy=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function wa(){}wa.prototype.h=null;function Gu(o){return o.h||(o.h=o.i())}function $u(){}var mn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ya(){oe.call(this,"d")}_(ya,oe);function Ca(){oe.call(this,"c")}_(Ca,oe);var Zt={},Wu=null;function Vs(){return Wu=Wu||new ze}Zt.La="serverreachability";function Xu(o){oe.call(this,Zt.La,o)}_(Xu,oe);function Bn(o){const u=Vs();iA(u,new Xu(u))}Zt.STAT_EVENT="statevent";function qu(o,u){oe.call(this,Zt.STAT_EVENT,o),this.stat=u}_(qu,oe);function oA(o){const u=Vs();iA(u,new qu(u,o))}Zt.Ma="timingevent";function zu(o,u){oe.call(this,Zt.Ma,o),this.size=u}_(zu,oe);function wn(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},u)}function yn(){this.g=!0}yn.prototype.xa=function(){this.g=!1};function by(o,u,g,B,R,P){o.info(function(){if(o.g)if(P)for(var M="",pe=P.split("&"),je=0;je<pe.length;je++){var le=pe[je].split("=");if(1<le.length){var Je=le[0];le=le[1];var Ye=Je.split("_");M=2<=Ye.length&&Ye[1]=="type"?M+(Je+"="+le+"&"):M+(Je+"=redacted&")}}else M=null;else M=P;return"XMLHTTP REQ ("+B+") [attempt "+R+"]: "+u+`
`+g+`
`+M})}function Fy(o,u,g,B,R,P,M){o.info(function(){return"XMLHTTP RESP ("+B+") [ attempt "+R+"]: "+u+`
`+g+`
`+P+" "+M})}function Ur(o,u,g,B){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+xy(o,g)+(B?" "+B:"")})}function Ty(o,u){o.info(function(){return"TIMEOUT: "+u})}yn.prototype.info=function(){};function xy(o,u){if(!o.g)return u;if(!u)return null;try{var g=JSON.parse(u);if(g){for(o=0;o<g.length;o++)if(Array.isArray(g[o])){var B=g[o];if(!(2>B.length)){var R=B[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var M=1;M<R.length;M++)R[M]=""}}}}return Ba(g)}catch(pe){return u}}var Ms={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ju={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},va;function Ks(){}_(Ks,wa),Ks.prototype.g=function(){return new XMLHttpRequest},Ks.prototype.i=function(){return{}},va=new Ks;function Bt(o,u,g,B){this.j=o,this.i=u,this.l=g,this.R=B||1,this.U=new pn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Yu}function Yu(){this.i=null,this.g="",this.h=!1}var Zu={},Ea={};function Ia(o,u,g){o.L=1,o.v=Ws(ZA(u)),o.m=g,o.P=!0,eh(o,null)}function eh(o,u){o.F=Date.now(),js(o),o.A=ZA(o.v);var g=o.A,B=o.R;Array.isArray(B)||(B=[String(B)]),fh(g.i,"t",B),o.C=0,g=o.j.J,o.h=new Yu,o.g=Sh(o.j,g?u:null,!o.m),0<o.O&&(o.M=new _y(p(o.Y,o,o.g),o.O)),u=o.U,g=o.g,B=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Ku[0]=R.toString()),R=Ku);for(var P=0;P<R.length;P++){var M=Hu(g,R[P],B||u.handleEvent,!1,u.h||u);if(!M)break;u.g[M.key]=M}u=o.H?m(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Bn(),by(o.i,o.u,o.A,o.l,o.R,o.m)}Bt.prototype.ca=function(o){o=o.target;const u=this.M;u&&et(o)==3?u.j():this.Y(o)},Bt.prototype.Y=function(o){try{if(o==this.g)e:{const Ye=et(this.g);var u=this.g.Ba();const Fr=this.g.Z();if(!(3>Ye)&&(Ye!=3||this.g&&(this.h.h||this.g.oa()||Ch(this.g)))){this.J||Ye!=4||u==7||(u==8||0>=Fr?Bn(3):Bn(2)),_a(this);var g=this.g.Z();this.X=g;A:if(Ah(this)){var B=Ch(this.g);o="";var R=B.length,P=et(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){er(this),Cn(this);var M="";break A}this.h.i=new a.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(B[u],{stream:!(P&&u==R-1)});B.length=0,this.h.g+=o,this.C=0,M=this.h.g}else M=this.g.oa();if(this.o=g==200,Fy(this.i,this.u,this.A,this.l,this.R,Ye,g),this.o){if(this.T&&!this.K){A:{if(this.g){var pe,je=this.g;if((pe=je.g?je.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(pe)){var le=pe;break A}}le=null}if(g=le)Ur(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ua(this,g);else{this.o=!1,this.s=3,oA(12),er(this),Cn(this);break e}}if(this.P){g=!0;let bA;for(;!this.J&&this.C<M.length;)if(bA=Sy(this,M),bA==Ea){Ye==4&&(this.s=4,oA(14),g=!1),Ur(this.i,this.l,null,"[Incomplete Response]");break}else if(bA==Zu){this.s=4,oA(15),Ur(this.i,this.l,M,"[Invalid Chunk]"),g=!1;break}else Ur(this.i,this.l,bA,null),Ua(this,bA);if(Ah(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ye!=4||M.length!=0||this.h.h||(this.s=1,oA(16),g=!1),this.o=this.o&&g,!g)Ur(this.i,this.l,M,"[Invalid Chunked Response]"),er(this),Cn(this);else if(0<M.length&&!this.W){this.W=!0;var Je=this.j;Je.g==this&&Je.ba&&!Je.M&&(Je.j.info("Great, no buffering proxy detected. Bytes received: "+M.length),Sa(Je),Je.M=!0,oA(11))}}else Ur(this.i,this.l,M,null),Ua(this,M);Ye==4&&er(this),this.o&&!this.J&&(Ye==4?bh(this.j,this):(this.o=!1,js(this)))}else qy(this.g),g==400&&0<M.indexOf("Unknown SID")?(this.s=3,oA(12)):(this.s=0,oA(13)),er(this),Cn(this)}}}catch(Ye){}finally{}};function Ah(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Sy(o,u){var g=o.C,B=u.indexOf(`
`,g);return B==-1?Ea:(g=Number(u.substring(g,B)),isNaN(g)?Zu:(B+=1,B+g>u.length?Ea:(u=u.slice(B,B+g),o.C=B+g,u)))}Bt.prototype.cancel=function(){this.J=!0,er(this)};function js(o){o.S=Date.now()+o.I,th(o,o.I)}function th(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=wn(p(o.ba,o),u)}function _a(o){o.B&&(a.clearTimeout(o.B),o.B=null)}Bt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Ty(this.i,this.A),this.L!=2&&(Bn(),oA(17)),er(this),this.s=2,Cn(this)):th(this,this.S-o)};function Cn(o){o.j.G==0||o.J||bh(o.j,o)}function er(o){_a(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ju(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ua(o,u){try{var g=o.j;if(g.G!=0&&(g.g==o||Qa(g.h,o))){if(!o.K&&Qa(g.h,o)&&g.G==3){try{var B=g.Da.g.parse(u)}catch(le){B=null}if(Array.isArray(B)&&B.length==3){var R=B;if(R[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<o.F)Zs(g),Js(g);else break e;xa(g),oA(18)}}else g.za=R[1],0<g.za-g.T&&37500>R[2]&&g.F&&g.v==0&&!g.C&&(g.C=wn(p(g.Za,g),6e3));if(1>=sh(g.h)&&g.ca){try{g.ca()}catch(le){}g.ca=void 0}}else tr(g,11)}else if((o.K||g.g==o)&&Zs(g),!S(u))for(R=g.Da.g.parse(u),u=0;u<R.length;u++){let le=R[u];if(g.T=le[0],le=le[1],g.G==2)if(le[0]=="c"){g.K=le[1],g.ia=le[2];const Je=le[3];Je!=null&&(g.la=Je,g.j.info("VER="+g.la));const Ye=le[4];Ye!=null&&(g.Aa=Ye,g.j.info("SVER="+g.Aa));const Fr=le[5];Fr!=null&&typeof Fr=="number"&&0<Fr&&(B=1.5*Fr,g.L=B,g.j.info("backChannelRequestTimeoutMs_="+B)),B=g;const bA=o.g;if(bA){const Ai=bA.g?bA.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ai){var P=B.h;P.g||Ai.indexOf("spdy")==-1&&Ai.indexOf("quic")==-1&&Ai.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(ba(P,P.h),P.h=null))}if(B.D){const Ra=bA.g?bA.g.getResponseHeader("X-HTTP-Session-Id"):null;Ra&&(B.ya=Ra,Be(B.I,B.D,Ra))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-o.F,g.j.info("Handshake RTT: "+g.R+"ms")),B=g;var M=o;if(B.qa=xh(B,B.J?B.ia:null,B.W),M.K){ih(B.h,M);var pe=M,je=B.L;je&&(pe.I=je),pe.B&&(_a(pe),js(pe)),B.g=M}else Uh(B);0<g.i.length&&Ys(g)}else le[0]!="stop"&&le[0]!="close"||tr(g,7);else g.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?tr(g,7):Ta(g):le[0]!="noop"&&g.l&&g.l.ta(le),g.v=0)}}Bn(4)}catch(le){}}var Ry=class{constructor(o,u){this.g=o,this.map=u}};function rh(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function nh(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function sh(o){return o.h?1:o.g?o.g.size:0}function Qa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ba(o,u){o.g?o.g.add(u):o.h=u}function ih(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}rh.prototype.cancel=function(){if(this.i=oh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function oh(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const g of o.g.values())u=u.concat(g.D);return u}return v(o.i)}function Dy(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map!="undefined"&&o instanceof Map||typeof Set!="undefined"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],g=o.length,B=0;B<g;B++)u.push(o[B]);return u}u=[],g=0;for(B in o)u[g++]=o[B];return u}function Py(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map!="undefined"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set!="undefined"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var g=0;g<o;g++)u.push(g);return u}u=[],g=0;for(const B in o)u[g++]=B;return u}}}function ah(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var g=Py(o),B=Dy(o),R=B.length,P=0;P<R;P++)u.call(void 0,B[P],g&&g[P],o)}var ch=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ly(o,u){if(o){o=o.split("&");for(var g=0;g<o.length;g++){var B=o[g].indexOf("="),R=null;if(0<=B){var P=o[g].substring(0,B);R=o[g].substring(B+1)}else P=o[g];u(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function Ar(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ar){this.h=o.h,Gs(this,o.j),this.o=o.o,this.g=o.g,$s(this,o.s),this.l=o.l;var u=o.i,g=new In;g.i=u.i,u.g&&(g.g=new Map(u.g),g.h=u.h),lh(this,g),this.m=o.m}else o&&(u=String(o).match(ch))?(this.h=!1,Gs(this,u[1]||"",!0),this.o=vn(u[2]||""),this.g=vn(u[3]||"",!0),$s(this,u[4]),this.l=vn(u[5]||"",!0),lh(this,u[6]||"",!0),this.m=vn(u[7]||"")):(this.h=!1,this.i=new In(null,this.h))}Ar.prototype.toString=function(){var o=[],u=this.j;u&&o.push(En(u,uh,!0),":");var g=this.g;return(g||u=="file")&&(o.push("//"),(u=this.o)&&o.push(En(u,uh,!0),"@"),o.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&o.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&o.push("/"),o.push(En(g,g.charAt(0)=="/"?Oy:ky,!0))),(g=this.i.toString())&&o.push("?",g),(g=this.m)&&o.push("#",En(g,Vy)),o.join("")};function ZA(o){return new Ar(o)}function Gs(o,u,g){o.j=g?vn(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function $s(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function lh(o,u,g){u instanceof In?(o.i=u,My(o.i,o.h)):(g||(u=En(u,Ny)),o.i=new In(u,o.h))}function Be(o,u,g){o.i.set(u,g)}function Ws(o){return Be(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function vn(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function En(o,u,g){return typeof o=="string"?(o=encodeURI(o).replace(u,Hy),g&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Hy(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var uh=/[#\/\?@]/g,ky=/[#\?:]/g,Oy=/[#\?]/g,Ny=/[#\?@]/g,Vy=/#/g;function In(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function wt(o){o.g||(o.g=new Map,o.h=0,o.i&&Ly(o.i,function(u,g){o.add(decodeURIComponent(u.replace(/\+/g," ")),g)}))}A=In.prototype,A.add=function(o,u){wt(this),this.i=null,o=Qr(this,o);var g=this.g.get(o);return g||this.g.set(o,g=[]),g.push(u),this.h+=1,this};function hh(o,u){wt(o),u=Qr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function dh(o,u){return wt(o),u=Qr(o,u),o.g.has(u)}A.forEach=function(o,u){wt(this),this.g.forEach(function(g,B){g.forEach(function(R){o.call(u,R,B,this)},this)},this)},A.na=function(){wt(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),g=[];for(let B=0;B<u.length;B++){const R=o[B];for(let P=0;P<R.length;P++)g.push(u[B])}return g},A.V=function(o){wt(this);let u=[];if(typeof o=="string")dh(this,o)&&(u=u.concat(this.g.get(Qr(this,o))));else{o=Array.from(this.g.values());for(let g=0;g<o.length;g++)u=u.concat(o[g])}return u},A.set=function(o,u){return wt(this),this.i=null,o=Qr(this,o),dh(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},A.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function fh(o,u,g){hh(o,u),0<g.length&&(o.i=null,o.g.set(Qr(o,u),v(g)),o.h+=g.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var g=0;g<u.length;g++){var B=u[g];const P=encodeURIComponent(String(B)),M=this.V(B);for(B=0;B<M.length;B++){var R=P;M[B]!==""&&(R+="="+encodeURIComponent(String(M[B]))),o.push(R)}}return this.i=o.join("&")};function Qr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function My(o,u){u&&!o.j&&(wt(o),o.i=null,o.g.forEach(function(g,B){var R=B.toLowerCase();B!=R&&(hh(this,B),fh(this,R,g))},o)),o.j=u}function Ky(o,u){const g=new yn;if(a.Image){const B=new Image;B.onload=C(yt,g,"TestLoadImage: loaded",!0,u,B),B.onerror=C(yt,g,"TestLoadImage: error",!1,u,B),B.onabort=C(yt,g,"TestLoadImage: abort",!1,u,B),B.ontimeout=C(yt,g,"TestLoadImage: timeout",!1,u,B),a.setTimeout(function(){B.ontimeout&&B.ontimeout()},1e4),B.src=o}else u(!1)}function jy(o,u){const g=new yn,B=new AbortController,R=setTimeout(()=>{B.abort(),yt(g,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:B.signal}).then(P=>{clearTimeout(R),P.ok?yt(g,"TestPingServer: ok",!0,u):yt(g,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),yt(g,"TestPingServer: error",!1,u)})}function yt(o,u,g,B,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),B(g)}catch(P){}}function Gy(){this.g=new Qy}function $y(o,u,g){const B=g||"";try{ah(o,function(R,P){let M=R;l(R)&&(M=Ba(R)),u.push(B+P+"="+encodeURIComponent(M))})}catch(R){throw u.push(B+"type="+encodeURIComponent("_badmap")),R}}function Xs(o){this.l=o.Ub||null,this.j=o.eb||!1}_(Xs,wa),Xs.prototype.g=function(){return new qs(this.l,this.j)},Xs.prototype.i=function(o){return function(){return o}}({});function qs(o,u){ze.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(qs,ze),A=qs.prototype,A.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Un(this)},A.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||a).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},A.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_n(this)),this.readyState=0},A.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream!="undefined"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;gh(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function gh(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}A.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?_n(this):Un(this),this.readyState==3&&gh(this)}},A.Ra=function(o){this.g&&(this.response=this.responseText=o,_n(this))},A.Qa=function(o){this.g&&(this.response=o,_n(this))},A.ga=function(){this.g&&_n(this)};function _n(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Un(o)}A.setRequestHeader=function(o,u){this.u.append(o,u)},A.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},A.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var g=u.next();!g.done;)g=g.value,o.push(g[0]+": "+g[1]),g=u.next();return o.join(`\r
`)};function Un(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(qs.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function ph(o){let u="";return H(o,function(g,B){u+=B,u+=":",u+=g,u+=`\r
`}),u}function Fa(o,u,g){e:{for(B in g){var B=!1;break e}B=!0}B||(g=ph(g),typeof o=="string"?g!=null&&encodeURIComponent(String(g)):Be(o,u,g))}function Ee(o){ze.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(Ee,ze);var Wy=/^https?$/i,Xy=["POST","PUT"];A=Ee.prototype,A.Ha=function(o){this.J=o},A.ea=function(o,u,g,B){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():va.g(),this.v=this.o?Gu(this.o):Gu(va),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){mh(this,P);return}if(o=g||"",g=new Map(this.headers),B)if(Object.getPrototypeOf(B)===Object.prototype)for(var R in B)g.set(R,B[R]);else if(typeof B.keys=="function"&&typeof B.get=="function")for(const P of B.keys())g.set(P,B.get(P));else throw Error("Unknown input type for opt_headers: "+String(B));B=Array.from(g.keys()).find(P=>P.toLowerCase()=="content-type"),R=a.FormData&&o instanceof a.FormData,!(0<=Array.prototype.indexOf.call(Xy,u,void 0))||B||R||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,M]of g)this.g.setRequestHeader(P,M);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{yh(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){mh(this,P)}};function mh(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Bh(o),zs(o)}function Bh(o){o.A||(o.A=!0,iA(o,"complete"),iA(o,"error"))}A.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,iA(this,"complete"),iA(this,"abort"),zs(this))},A.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zs(this,!0)),Ee.aa.N.call(this)},A.Ea=function(){this.s||(this.B||this.u||this.j?wh(this):this.bb())},A.bb=function(){wh(this)};function wh(o){if(o.h&&typeof i!="undefined"&&(!o.v[1]||et(o)!=4||o.Z()!=2)){if(o.u&&et(o)==4)Vu(o.Ea,0,o);else if(iA(o,"readystatechange"),et(o)==4){o.h=!1;try{const M=o.Z();e:switch(M){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var g;if(!(g=u)){var B;if(B=M===0){var R=String(o.D).match(ch)[1]||null;!R&&a.self&&a.self.location&&(R=a.self.location.protocol.slice(0,-1)),B=!Wy.test(R?R.toLowerCase():"")}g=B}if(g)iA(o,"complete"),iA(o,"success");else{o.m=6;try{var P=2<et(o)?o.g.statusText:""}catch(pe){P=""}o.l=P+" ["+o.Z()+"]",Bh(o)}}finally{zs(o)}}}}function zs(o,u){if(o.g){yh(o);const g=o.g,B=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||iA(o,"ready");try{g.onreadystatechange=B}catch(R){}}}function yh(o){o.I&&(a.clearTimeout(o.I),o.I=null)}A.isActive=function(){return!!this.g};function et(o){return o.g?o.g.readyState:0}A.Z=function(){try{return 2<et(this)?this.g.status:-1}catch(o){return-1}},A.oa=function(){try{return this.g?this.g.responseText:""}catch(o){return""}},A.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Uy(u)}};function Ch(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch(u){return null}}function qy(o){const u={};o=(o.g&&2<=et(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let B=0;B<o.length;B++){if(S(o[B]))continue;var g=F(o[B]);const R=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const P=u[R]||[];u[R]=P,P.push(g)}U(u,function(B){return B.join(", ")})}A.Ba=function(){return this.m},A.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qn(o,u,g){return g&&g.internalChannelParams&&g.internalChannelParams[o]||u}function vh(o){this.Aa=0,this.i=[],this.j=new yn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Qn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Qn("baseRetryDelayMs",5e3,o),this.cb=Qn("retryDelaySeedMs",1e4,o),this.Wa=Qn("forwardChannelMaxRetries",2,o),this.wa=Qn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new rh(o&&o.concurrentRequestLimit),this.Da=new Gy,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}A=vh.prototype,A.la=8,A.G=1,A.connect=function(o,u,g,B){oA(0),this.W=o,this.H=u||{},g&&B!==void 0&&(this.H.OSID=g,this.H.OAID=B),this.F=this.X,this.I=xh(this,null,this.W),Ys(this)};function Ta(o){if(Eh(o),o.G==3){var u=o.U++,g=ZA(o.I);if(Be(g,"SID",o.K),Be(g,"RID",u),Be(g,"TYPE","terminate"),bn(o,g),u=new Bt(o,o.j,u),u.L=2,u.v=Ws(ZA(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(u.v.toString(),"")}catch(B){}!g&&a.Image&&(new Image().src=u.v,g=!0),g||(u.g=Sh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),js(u)}Th(o)}function Js(o){o.g&&(Sa(o),o.g.cancel(),o.g=null)}function Eh(o){Js(o),o.u&&(a.clearTimeout(o.u),o.u=null),Zs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&a.clearTimeout(o.s),o.s=null)}function Ys(o){if(!nh(o.h)&&!o.s){o.s=!0;var u=o.Ga;ge||gA(),J||(ge(),J=!0),Ne.add(u,o),o.B=0}}function zy(o,u){return sh(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=wn(p(o.Ga,o,u),Fh(o,o.B)),o.B++,!0)}A.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Bt(this,this.j,o);let P=this.o;if(this.S&&(P?(P=m(P),Q(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var u=0,g=0;g<this.i.length;g++){A:{var B=this.i[g];if("__data__"in B.map&&(B=B.map.__data__,typeof B=="string")){B=B.length;break A}B=void 0}if(B===void 0)break;if(u+=B,4096<u){u=g;break e}if(u===4096||g===this.i.length-1){u=g+1;break e}}u=1e3}else u=1e3;u=_h(this,R,u),g=ZA(this.I),Be(g,"RID",o),Be(g,"CVER",22),this.D&&Be(g,"X-HTTP-Session-Id",this.D),bn(this,g),P&&(this.O?u="headers="+encodeURIComponent(String(ph(P)))+"&"+u:this.m&&Fa(g,this.m,P)),ba(this.h,R),this.Ua&&Be(g,"TYPE","init"),this.P?(Be(g,"$req",u),Be(g,"SID","null"),R.T=!0,Ia(R,g,null)):Ia(R,g,u),this.G=2}}else this.G==3&&(o?Ih(this,o):this.i.length==0||nh(this.h)||Ih(this))};function Ih(o,u){var g;u?g=u.l:g=o.U++;const B=ZA(o.I);Be(B,"SID",o.K),Be(B,"RID",g),Be(B,"AID",o.T),bn(o,B),o.m&&o.o&&Fa(B,o.m,o.o),g=new Bt(o,o.j,g,o.B+1),o.m===null&&(g.H=o.o),u&&(o.i=u.D.concat(o.i)),u=_h(o,g,1e3),g.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ba(o.h,g),Ia(g,B,u)}function bn(o,u){o.H&&H(o.H,function(g,B){Be(u,B,g)}),o.l&&ah({},function(g,B){Be(u,B,g)})}function _h(o,u,g){g=Math.min(o.i.length,g);var B=o.l?p(o.l.Na,o.l,o):null;e:{var R=o.i;let P=-1;for(;;){const M=["count="+g];P==-1?0<g?(P=R[0].g,M.push("ofs="+P)):P=0:M.push("ofs="+P);let pe=!0;for(let je=0;je<g;je++){let le=R[je].g;const Je=R[je].map;if(le-=P,0>le)P=Math.max(0,R[je].g-100),pe=!1;else try{$y(Je,M,"req"+le+"_")}catch(Ye){B&&B(Je)}}if(pe){B=M.join("&");break e}}}return o=o.i.splice(0,g),u.D=o,B}function Uh(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ge||gA(),J||(ge(),J=!0),Ne.add(u,o),o.v=0}}function xa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=wn(p(o.Fa,o),Fh(o,o.v)),o.v++,!0)}A.Fa=function(){if(this.u=null,Qh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=wn(p(this.ab,this),o)}},A.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,oA(10),Js(this),Qh(this))};function Sa(o){o.A!=null&&(a.clearTimeout(o.A),o.A=null)}function Qh(o){o.g=new Bt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=ZA(o.qa);Be(u,"RID","rpc"),Be(u,"SID",o.K),Be(u,"AID",o.T),Be(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Be(u,"TO",o.ja),Be(u,"TYPE","xmlhttp"),bn(o,u),o.m&&o.o&&Fa(u,o.m,o.o),o.L&&(o.g.I=o.L);var g=o.g;o=o.ia,g.L=1,g.v=Ws(ZA(u)),g.m=null,g.P=!0,eh(g,o)}A.Za=function(){this.C!=null&&(this.C=null,Js(this),xa(this),oA(19))};function Zs(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function bh(o,u){var g=null;if(o.g==u){Zs(o),Sa(o),o.g=null;var B=2}else if(Qa(o.h,u))g=u.D,ih(o.h,u),B=1;else return;if(o.G!=0){if(u.o)if(B==1){g=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;B=Vs(),iA(B,new zu(B,g)),Ys(o)}else Uh(o);else if(R=u.s,R==3||R==0&&0<u.X||!(B==1&&zy(o,u)||B==2&&xa(o)))switch(g&&0<g.length&&(u=o.h,u.i=u.i.concat(g)),R){case 1:tr(o,5);break;case 4:tr(o,10);break;case 3:tr(o,6);break;default:tr(o,2)}}}function Fh(o,u){let g=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(g*=2),g*u}function tr(o,u){if(o.j.info("Error code "+u),u==2){var g=p(o.fb,o),B=o.Xa;const R=!B;B=new Ar(B||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Gs(B,"https"),Ws(B),R?Ky(B.toString(),g):jy(B.toString(),g)}else oA(2);o.G=0,o.l&&o.l.sa(u),Th(o),Eh(o)}A.fb=function(o){o?(this.j.info("Successfully pinged google.com"),oA(2)):(this.j.info("Failed to ping google.com"),oA(1))};function Th(o){if(o.G=0,o.ka=[],o.l){const u=oh(o.h);(u.length!=0||o.i.length!=0)&&(b(o.ka,u),b(o.ka,o.i),o.h.i.length=0,v(o.i),o.i.length=0),o.l.ra()}}function xh(o,u,g){var B=g instanceof Ar?ZA(g):new Ar(g);if(B.g!="")u&&(B.g=u+"."+B.g),$s(B,B.s);else{var R=a.location;B=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var P=new Ar(null);B&&Gs(P,B),u&&(P.g=u),R&&$s(P,R),g&&(P.l=g),B=P}return g=o.D,u=o.ya,g&&u&&Be(B,g,u),Be(B,"VER",o.la),bn(o,B),B}function Sh(o,u,g){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ee(new Xs({eb:g})):new Ee(o.pa),u.Ha(o.J),u}A.isActive=function(){return!!this.l&&this.l.isActive(this)};function Rh(){}A=Rh.prototype,A.ua=function(){},A.ta=function(){},A.sa=function(){},A.ra=function(){},A.isActive=function(){return!0},A.Na=function(){};function ei(){}ei.prototype.g=function(o,u){return new pA(o,u)};function pA(o,u){ze.call(this),this.g=new vh(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!S(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!S(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new br(this)}_(pA,ze),pA.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pA.prototype.close=function(){Ta(this.g)},pA.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var g={};g.__data__=o,o=g}else this.u&&(g={},g.__data__=Ba(o),o=g);u.i.push(new Ry(u.Ya++,o)),u.G==3&&Ys(u)},pA.prototype.N=function(){this.g.l=null,delete this.j,Ta(this.g),delete this.g,pA.aa.N.call(this)};function Dh(o){ya.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const g in u){o=g;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}_(Dh,ya);function Ph(){Ca.call(this),this.status=1}_(Ph,Ca);function br(o){this.g=o}_(br,Rh),br.prototype.ua=function(){iA(this.g,"a")},br.prototype.ta=function(o){iA(this.g,new Dh(o))},br.prototype.sa=function(o){iA(this.g,new Ph)},br.prototype.ra=function(){iA(this.g,"b")},ei.prototype.createWebChannel=ei.prototype.g,pA.prototype.send=pA.prototype.o,pA.prototype.open=pA.prototype.m,pA.prototype.close=pA.prototype.close,lm=function(){return new ei},cm=function(){return Vs()},am=Zt,Fc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ms.NO_ERROR=0,Ms.TIMEOUT=8,Ms.HTTP_ERROR=6,Gi=Ms,Ju.COMPLETE="complete",om=Ju,$u.EventType=mn,mn.OPEN="a",mn.CLOSE="b",mn.ERROR="c",mn.MESSAGE="d",ze.prototype.listen=ze.prototype.K,On=$u,Ee.prototype.listenOnce=Ee.prototype.L,Ee.prototype.getLastError=Ee.prototype.Ka,Ee.prototype.getLastErrorCode=Ee.prototype.Ba,Ee.prototype.getStatus=Ee.prototype.Z,Ee.prototype.getResponseJson=Ee.prototype.Oa,Ee.prototype.getResponseText=Ee.prototype.oa,Ee.prototype.send=Ee.prototype.ea,Ee.prototype.setWithCredentials=Ee.prototype.Ha,im=Ee}).apply(typeof si!="undefined"?si:typeof self!="undefined"?self:typeof window!="undefined"?window:{});const vd="@firebase/firestore",Ed="4.7.17";/**
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
 */class AA{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}AA.UNAUTHENTICATED=new AA(null),AA.GOOGLE_CREDENTIALS=new AA("google-credentials-uid"),AA.FIRST_PARTY=new AA("first-party-uid"),AA.MOCK_USER=new AA("mock-user");/**
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
 */let cn="11.9.0";/**
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
 */const Br=new yl("@firebase/firestore");function Lr(){return Br.logLevel}function G(A,...e){if(Br.logLevel<=ne.DEBUG){const t=e.map(Dl);Br.debug(`Firestore (${cn}): ${A}`,...t)}}function ht(A,...e){if(Br.logLevel<=ne.ERROR){const t=e.map(Dl);Br.error(`Firestore (${cn}): ${A}`,...t)}}function Yr(A,...e){if(Br.logLevel<=ne.WARN){const t=e.map(Dl);Br.warn(`Firestore (${cn}): ${A}`,...t)}}function Dl(A){if(typeof A=="string")return A;try{/**
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
 */function q(A,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,um(A,r,t)}function um(A,e,t){let r=`FIRESTORE (${cn}) INTERNAL ASSERTION FAILED: ${e} (ID: ${A.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch(n){r+=" CONTEXT: "+t}throw ht(r),new Error(r)}function he(A,e,t,r){let n="Unexpected state";typeof t=="string"?n=t:r=t,A||um(e,n,r)}function Z(A,e){return A}/**
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
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class $ extends qA{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ot{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class hm{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(AA.UNAUTHENTICATED))}shutdown(){}}class CI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class vI{constructor(e){this.t=e,this.currentUser=AA.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){he(this.o===void 0,42304);let r=this.i;const n=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new ot;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ot,e.enqueueRetryable(()=>n(this.currentUser))};const i=()=>{const c=s;e.enqueueRetryable(()=>y(this,null,function*(){yield c.promise,yield n(this.currentUser)}))},a=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ot)}},0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string",31837,{l:r}),new hm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string",2055,{h:e}),new AA(e)}}class EI{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=AA.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class II{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new EI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(AA.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Id{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class _I{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,hA(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){he(this.o===void 0,3512);const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const i=s.token!==this.m;return this.m=s.token,G("FirebaseAppCheckTokenProvider",`Received ${i?"new":"existing"} token.`),i?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const n=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>n(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?n(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Id(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(he(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Id(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function UI(A){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),t=new Uint8Array(A);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<A;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function dm(){return new TextEncoder}/**
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
 */class fm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const n=UI(40);for(let s=0;s<n.length;++s)r.length<20&&n[s]<t&&(r+=e.charAt(n[s]%62))}return r}}function Ae(A,e){return A<e?-1:A>e?1:0}function Tc(A,e){let t=0;for(;t<A.length&&t<e.length;){const r=A.codePointAt(t),n=e.codePointAt(t);if(r!==n){if(r<128&&n<128)return Ae(r,n);{const s=dm(),i=QI(s.encode(_d(A,t)),s.encode(_d(e,t)));return i!==0?i:Ae(r,n)}}t+=r>65535?2:1}return Ae(A.length,e.length)}function _d(A,e){return A.codePointAt(e)>65535?A.substring(e,e+2):A.substring(e,e+1)}function QI(A,e){for(let t=0;t<A.length&&t<e.length;++t)if(A[t]!==e[t])return Ae(A[t],e[t]);return Ae(A.length,e.length)}function Zr(A,e,t){return A.length===e.length&&A.every((r,n)=>t(r,e[n]))}/**
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
 */const Ud=-62135596800,Qd=1e6;class Le{static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Qd);return new Le(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new $(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new $(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Ud)throw new $(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new $(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Qd}_compareTo(e){return this.seconds===e.seconds?Ae(this.nanoseconds,e.nanoseconds):Ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Ud;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{static fromTimestamp(e){return new z(e)}static min(){return new z(new Le(0,0))}static max(){return new z(new Le(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const bd="__name__";class VA{constructor(e,t,r){t===void 0?t=0:t>e.length&&q(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&q(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return VA.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof VA?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let n=0;n<r;n++){const s=VA.compareSegments(e.get(n),t.get(n));if(s!==0)return s}return Ae(e.length,t.length)}static compareSegments(e,t){const r=VA.isNumericId(e),n=VA.isNumericId(t);return r&&!n?-1:!r&&n?1:r&&n?VA.extractNumericId(e).compare(VA.extractNumericId(t)):Tc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Lt.fromString(e.substring(4,e.length-2))}}class we extends VA{construct(e,t,r){return new we(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new $(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(n=>n.length>0))}return new we(t)}static emptyPath(){return new we([])}}const bI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends VA{construct(e,t,r){return new We(e,t,r)}static isValidIdentifier(e){return bI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bd}static keyField(){return new We([bd])}static fromServerFormat(e){const t=[];let r="",n=0;const s=()=>{if(r.length===0)throw new $(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let i=!1;for(;n<e.length;){const a=e[n];if(a==="\\"){if(n+1===e.length)throw new $(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[n+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new $(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,n+=2}else a==="`"?(i=!i,n++):a!=="."||i?(r+=a,n++):(s(),n++)}if(s(),i)throw new $(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(t)}static emptyPath(){return new We([])}}/**
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(we.fromString(e))}static fromName(e){return new W(we.fromString(e).popFirst(5))}static empty(){return new W(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return we.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new we(e.slice()))}}/**
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
 */const ds=-1;function FI(A,e){const t=A.toTimestamp().seconds,r=A.toTimestamp().nanoseconds+1,n=z.fromTimestamp(r===1e9?new Le(t+1,0):new Le(t,r));return new Kt(n,W.empty(),e)}function TI(A){return new Kt(A.readTime,A.key,ds)}class Kt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Kt(z.min(),W.empty(),ds)}static max(){return new Kt(z.max(),W.empty(),ds)}}function xI(A,e){let t=A.readTime.compareTo(e.readTime);return t!==0?t:(t=W.comparator(A.documentKey,e.documentKey),t!==0?t:Ae(A.largestBatchId,e.largestBatchId))}/**
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
 */const SI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class RI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */function ln(A){return y(this,null,function*(){if(A.code!==N.FAILED_PRECONDITION||A.message!==SI)throw A;G("LocalStore","Unexpectedly lost primary lease")})}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,n)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,n)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,n)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let n=0,s=0,i=!1;e.forEach(a=>{++n,a.next(()=>{++s,i&&s===n&&t()},c=>r(c))}),i=!0,s===n&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(n=>n?V.resolve(n):r());return t}static forEach(e,t){const r=[];return e.forEach((n,s)=>{r.push(t.call(this,n,s))}),this.waitFor(r)}static mapArray(e,t){return new V((r,n)=>{const s=e.length,i=new Array(s);let a=0;for(let c=0;c<s;c++){const l=c;t(e[l]).next(h=>{i[l]=h,++a,a===s&&r(i)},h=>n(h))}})}static doWhile(e,t){return new V((r,n)=>{const s=()=>{e()===!0?t().next(()=>{s()},n):r()};s()})}}function DI(A){const e=A.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function un(A){return A.name==="IndexedDbTransactionError"}/**
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
 */class Oo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>t.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Oo.le=-1;/**
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
 */const Pl=-1;function No(A){return A==null}function lo(A){return A===0&&1/A==-1/0}function PI(A){return typeof A=="number"&&Number.isInteger(A)&&!lo(A)&&A<=Number.MAX_SAFE_INTEGER&&A>=Number.MIN_SAFE_INTEGER}/**
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
 */const gm="";function LI(A){let e="";for(let t=0;t<A.length;t++)e.length>0&&(e=Fd(e)),e=HI(A.get(t),e);return Fd(e)}function HI(A,e){let t=e;const r=A.length;for(let n=0;n<r;n++){const s=A.charAt(n);switch(s){case"\0":t+="";break;case gm:t+="";break;default:t+=s}}return t}function Fd(A){return A+gm+""}/**
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
 */function Td(A){let e=0;for(const t in A)Object.prototype.hasOwnProperty.call(A,t)&&e++;return e}function vr(A,e){for(const t in A)Object.prototype.hasOwnProperty.call(A,t)&&e(t,A[t])}function pm(A){for(const e in A)if(Object.prototype.hasOwnProperty.call(A,e))return!1;return!0}/**
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
 */class ve{constructor(e,t){this.comparator=e,this.root=t||$e.EMPTY}insert(e,t){return new ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const n=this.comparator(e,r.key);if(n===0)return t+r.left.size;n<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ii(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ii(this.root,e,this.comparator,!1)}getReverseIterator(){return new ii(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ii(this.root,e,this.comparator,!0)}}class ii{constructor(e,t,r,n){this.isReverse=n,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&n&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,t,r,n,s){this.key=e,this.value=t,this.color=r!=null?r:$e.RED,this.left=n!=null?n:$e.EMPTY,this.right=s!=null?s:$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,n,s){return new $e(e!=null?e:this.key,t!=null?t:this.value,r!=null?r:this.color,n!=null?n:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let n=this;const s=r(e,n.key);return n=s<0?n.copy(null,null,null,n.left.insert(e,t,r),null):s===0?n.copy(null,t,null,null,null):n.copy(null,null,null,null,n.right.insert(e,t,r)),n.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,n=this;if(t(e,n.key)<0)n.left.isEmpty()||n.left.isRed()||n.left.left.isRed()||(n=n.moveRedLeft()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed()&&(n=n.rotateRight()),n.right.isEmpty()||n.right.isRed()||n.right.left.isRed()||(n=n.moveRedRight()),t(e,n.key)===0){if(n.right.isEmpty())return $e.EMPTY;r=n.right.min(),n=n.copy(r.key,r.value,null,null,n.right.removeMin())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw q(27949);return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw q(57766)}get value(){throw q(16141)}get color(){throw q(16727)}get left(){throw q(29726)}get right(){throw q(36894)}copy(e,t,r,n,s){return this}insert(e,t,r){return new $e(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Oe{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const n=r.getNext();if(this.comparator(n.key,e[1])>=0)return;t(n.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new xd(this.data.getIterator())}getIteratorFrom(e){return new xd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Oe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const n=t.getNext().key,s=r.getNext().key;if(this.comparator(n,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Oe(this.comparator);return t.data=e,t}}class xd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class SA{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new SA([])}unionWith(e){let t=new Oe(We.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new SA(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class mm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(n){try{return atob(n)}catch(s){throw typeof DOMException!="undefined"&&s instanceof DOMException?new mm("Invalid base64 string: "+s):s}}(e);return new qe(t)}static fromUint8Array(e){const t=function(n){let s="";for(let i=0;i<n.length;++i)s+=String.fromCharCode(n[i]);return s}(e);return new qe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const kI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function jt(A){if(he(!!A,39018),typeof A=="string"){let e=0;const t=kI.exec(A);if(he(!!t,46558,{timestamp:A}),t[1]){let n=t[1];n=(n+"000000000").substr(0,9),e=Number(n)}const r=new Date(A);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(A.seconds),nanos:xe(A.nanos)}}function xe(A){return typeof A=="number"?A:typeof A=="string"?Number(A):0}function Gt(A){return typeof A=="string"?qe.fromBase64String(A):qe.fromUint8Array(A)}/**
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
 */const Bm="server_timestamp",wm="__type__",ym="__previous_value__",Cm="__local_write_time__";function Ll(A){var e,t;return((t=(((e=A==null?void 0:A.mapValue)===null||e===void 0?void 0:e.fields)||{})[wm])===null||t===void 0?void 0:t.stringValue)===Bm}function Vo(A){const e=A.mapValue.fields[ym];return Ll(e)?Vo(e):e}function fs(A){const e=jt(A.mapValue.fields[Cm].timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */class OI{constructor(e,t,r,n,s,i,a,c,l,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=n,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l,this.isUsingEmulator=h}}const xc="(default)";class gs{constructor(e,t){this.projectId=e,this.database=t||xc}static empty(){return new gs("","")}get isDefaultDatabase(){return this.database===xc}isEqual(e){return e instanceof gs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const vm="__type__",NI="__max__",oi={mapValue:{}},Em="__vector__",uo="value";function $t(A){return"nullValue"in A?0:"booleanValue"in A?1:"integerValue"in A||"doubleValue"in A?2:"timestampValue"in A?3:"stringValue"in A?5:"bytesValue"in A?6:"referenceValue"in A?7:"geoPointValue"in A?8:"arrayValue"in A?9:"mapValue"in A?Ll(A)?4:MI(A)?9007199254740991:VI(A)?10:11:q(28295,{value:A})}function WA(A,e){if(A===e)return!0;const t=$t(A);if(t!==$t(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return A.booleanValue===e.booleanValue;case 4:return fs(A).isEqual(fs(e));case 3:return function(n,s){if(typeof n.timestampValue=="string"&&typeof s.timestampValue=="string"&&n.timestampValue.length===s.timestampValue.length)return n.timestampValue===s.timestampValue;const i=jt(n.timestampValue),a=jt(s.timestampValue);return i.seconds===a.seconds&&i.nanos===a.nanos}(A,e);case 5:return A.stringValue===e.stringValue;case 6:return function(n,s){return Gt(n.bytesValue).isEqual(Gt(s.bytesValue))}(A,e);case 7:return A.referenceValue===e.referenceValue;case 8:return function(n,s){return xe(n.geoPointValue.latitude)===xe(s.geoPointValue.latitude)&&xe(n.geoPointValue.longitude)===xe(s.geoPointValue.longitude)}(A,e);case 2:return function(n,s){if("integerValue"in n&&"integerValue"in s)return xe(n.integerValue)===xe(s.integerValue);if("doubleValue"in n&&"doubleValue"in s){const i=xe(n.doubleValue),a=xe(s.doubleValue);return i===a?lo(i)===lo(a):isNaN(i)&&isNaN(a)}return!1}(A,e);case 9:return Zr(A.arrayValue.values||[],e.arrayValue.values||[],WA);case 10:case 11:return function(n,s){const i=n.mapValue.fields||{},a=s.mapValue.fields||{};if(Td(i)!==Td(a))return!1;for(const c in i)if(i.hasOwnProperty(c)&&(a[c]===void 0||!WA(i[c],a[c])))return!1;return!0}(A,e);default:return q(52216,{left:A})}}function ps(A,e){return(A.values||[]).find(t=>WA(t,e))!==void 0}function en(A,e){if(A===e)return 0;const t=$t(A),r=$t(e);if(t!==r)return Ae(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ae(A.booleanValue,e.booleanValue);case 2:return function(s,i){const a=xe(s.integerValue||s.doubleValue),c=xe(i.integerValue||i.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(A,e);case 3:return Sd(A.timestampValue,e.timestampValue);case 4:return Sd(fs(A),fs(e));case 5:return Tc(A.stringValue,e.stringValue);case 6:return function(s,i){const a=Gt(s),c=Gt(i);return a.compareTo(c)}(A.bytesValue,e.bytesValue);case 7:return function(s,i){const a=s.split("/"),c=i.split("/");for(let l=0;l<a.length&&l<c.length;l++){const h=Ae(a[l],c[l]);if(h!==0)return h}return Ae(a.length,c.length)}(A.referenceValue,e.referenceValue);case 8:return function(s,i){const a=Ae(xe(s.latitude),xe(i.latitude));return a!==0?a:Ae(xe(s.longitude),xe(i.longitude))}(A.geoPointValue,e.geoPointValue);case 9:return Rd(A.arrayValue,e.arrayValue);case 10:return function(s,i){var a,c,l,h;const f=s.fields||{},p=i.fields||{},C=(a=f[uo])===null||a===void 0?void 0:a.arrayValue,_=(c=p[uo])===null||c===void 0?void 0:c.arrayValue,v=Ae(((l=C==null?void 0:C.values)===null||l===void 0?void 0:l.length)||0,((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0);return v!==0?v:Rd(C,_)}(A.mapValue,e.mapValue);case 11:return function(s,i){if(s===oi.mapValue&&i===oi.mapValue)return 0;if(s===oi.mapValue)return 1;if(i===oi.mapValue)return-1;const a=s.fields||{},c=Object.keys(a),l=i.fields||{},h=Object.keys(l);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const p=Tc(c[f],h[f]);if(p!==0)return p;const C=en(a[c[f]],l[h[f]]);if(C!==0)return C}return Ae(c.length,h.length)}(A.mapValue,e.mapValue);default:throw q(23264,{Pe:t})}}function Sd(A,e){if(typeof A=="string"&&typeof e=="string"&&A.length===e.length)return Ae(A,e);const t=jt(A),r=jt(e),n=Ae(t.seconds,r.seconds);return n!==0?n:Ae(t.nanos,r.nanos)}function Rd(A,e){const t=A.values||[],r=e.values||[];for(let n=0;n<t.length&&n<r.length;++n){const s=en(t[n],r[n]);if(s)return s}return Ae(t.length,r.length)}function An(A){return Sc(A)}function Sc(A){return"nullValue"in A?"null":"booleanValue"in A?""+A.booleanValue:"integerValue"in A?""+A.integerValue:"doubleValue"in A?""+A.doubleValue:"timestampValue"in A?function(t){const r=jt(t);return`time(${r.seconds},${r.nanos})`}(A.timestampValue):"stringValue"in A?A.stringValue:"bytesValue"in A?function(t){return Gt(t).toBase64()}(A.bytesValue):"referenceValue"in A?function(t){return W.fromName(t).toString()}(A.referenceValue):"geoPointValue"in A?function(t){return`geo(${t.latitude},${t.longitude})`}(A.geoPointValue):"arrayValue"in A?function(t){let r="[",n=!0;for(const s of t.values||[])n?n=!1:r+=",",r+=Sc(s);return r+"]"}(A.arrayValue):"mapValue"in A?function(t){const r=Object.keys(t.fields||{}).sort();let n="{",s=!0;for(const i of r)s?s=!1:n+=",",n+=`${i}:${Sc(t.fields[i])}`;return n+"}"}(A.mapValue):q(61005,{value:A})}function $i(A){switch($t(A)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vo(A);return e?16+$i(e):16;case 5:return 2*A.stringValue.length;case 6:return Gt(A.bytesValue).approximateByteSize();case 7:return A.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((n,s)=>n+$i(s),0)}(A.arrayValue);case 10:case 11:return function(r){let n=0;return vr(r.fields,(s,i)=>{n+=s.length+$i(i)}),n}(A.mapValue);default:throw q(13486,{value:A})}}function Dd(A,e){return{referenceValue:`projects/${A.projectId}/databases/${A.database}/documents/${e.path.canonicalString()}`}}function Rc(A){return!!A&&"integerValue"in A}function Hl(A){return!!A&&"arrayValue"in A}function Pd(A){return!!A&&"nullValue"in A}function Ld(A){return!!A&&"doubleValue"in A&&isNaN(Number(A.doubleValue))}function Wi(A){return!!A&&"mapValue"in A}function VI(A){var e,t;return((t=(((e=A==null?void 0:A.mapValue)===null||e===void 0?void 0:e.fields)||{})[vm])===null||t===void 0?void 0:t.stringValue)===Em}function es(A){if(A.geoPointValue)return{geoPointValue:Object.assign({},A.geoPointValue)};if(A.timestampValue&&typeof A.timestampValue=="object")return{timestampValue:Object.assign({},A.timestampValue)};if(A.mapValue){const e={mapValue:{fields:{}}};return vr(A.mapValue.fields,(t,r)=>e.mapValue.fields[t]=es(r)),e}if(A.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(A.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=es(A.arrayValue.values[t]);return e}return Object.assign({},A)}function MI(A){return(((A.mapValue||{}).fields||{}).__type__||{}).stringValue===NI}/**
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
 */class IA{constructor(e){this.value=e}static empty(){return new IA({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Wi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=es(t)}setAll(e){let t=We.emptyPath(),r={},n=[];e.forEach((i,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,n),r={},n=[],t=a.popLast()}i?r[a.lastSegment()]=es(i):n.push(a.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,n)}delete(e){const t=this.field(e.popLast());Wi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return WA(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let n=t.mapValue.fields[e.get(r)];Wi(n)&&n.mapValue.fields||(n={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=n),t=n}return t.mapValue.fields}applyChanges(e,t,r){vr(t,(n,s)=>e[n]=s);for(const n of r)delete e[n]}clone(){return new IA(es(this.value))}}function Im(A){const e=[];return vr(A.fields,(t,r)=>{const n=new We([t]);if(Wi(r)){const s=Im(r.mapValue).fields;if(s.length===0)e.push(n);else for(const i of s)e.push(n.child(i))}else e.push(n)}),new SA(e)}/**
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
 */class rA{constructor(e,t,r,n,s,i,a){this.key=e,this.documentType=t,this.version=r,this.readTime=n,this.createTime=s,this.data=i,this.documentState=a}static newInvalidDocument(e){return new rA(e,0,z.min(),z.min(),z.min(),IA.empty(),0)}static newFoundDocument(e,t,r,n){return new rA(e,1,t,z.min(),r,n,0)}static newNoDocument(e,t){return new rA(e,2,t,z.min(),z.min(),IA.empty(),0)}static newUnknownDocument(e,t){return new rA(e,3,t,z.min(),z.min(),IA.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=IA.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=IA.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rA&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rA(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ho{constructor(e,t){this.position=e,this.inclusive=t}}function Hd(A,e,t){let r=0;for(let n=0;n<A.position.length;n++){const s=e[n],i=A.position[n];if(s.field.isKeyField()?r=W.comparator(W.fromName(i.referenceValue),t.key):r=en(i,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function kd(A,e){if(A===null)return e===null;if(e===null||A.inclusive!==e.inclusive||A.position.length!==e.position.length)return!1;for(let t=0;t<A.position.length;t++)if(!WA(A.position[t],e.position[t]))return!1;return!0}/**
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
 */class ms{constructor(e,t="asc"){this.field=e,this.dir=t}}function KI(A,e){return A.dir===e.dir&&A.field.isEqual(e.field)}/**
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
 */class _m{}class Pe extends _m{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new GI(e,t,r):t==="array-contains"?new XI(e,r):t==="in"?new qI(e,r):t==="not-in"?new zI(e,r):t==="array-contains-any"?new JI(e,r):new Pe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new $I(e,r):new WI(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(en(t,this.value)):t!==null&&$t(this.value)===$t(t)&&this.matchesComparison(en(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class PA extends _m{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new PA(e,t)}matches(e){return Um(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Um(A){return A.op==="and"}function Qm(A){return jI(A)&&Um(A)}function jI(A){for(const e of A.filters)if(e instanceof PA)return!1;return!0}function Dc(A){if(A instanceof Pe)return A.field.canonicalString()+A.op.toString()+An(A.value);if(Qm(A))return A.filters.map(e=>Dc(e)).join(",");{const e=A.filters.map(t=>Dc(t)).join(",");return`${A.op}(${e})`}}function bm(A,e){return A instanceof Pe?function(r,n){return n instanceof Pe&&r.op===n.op&&r.field.isEqual(n.field)&&WA(r.value,n.value)}(A,e):A instanceof PA?function(r,n){return n instanceof PA&&r.op===n.op&&r.filters.length===n.filters.length?r.filters.reduce((s,i,a)=>s&&bm(i,n.filters[a]),!0):!1}(A,e):void q(19439)}function Fm(A){return A instanceof Pe?function(t){return`${t.field.canonicalString()} ${t.op} ${An(t.value)}`}(A):A instanceof PA?function(t){return t.op.toString()+" {"+t.getFilters().map(Fm).join(" ,")+"}"}(A):"Filter"}class GI extends Pe{constructor(e,t,r){super(e,t,r),this.key=W.fromName(r.referenceValue)}matches(e){const t=W.comparator(e.key,this.key);return this.matchesComparison(t)}}class $I extends Pe{constructor(e,t){super(e,"in",t),this.keys=Tm("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class WI extends Pe{constructor(e,t){super(e,"not-in",t),this.keys=Tm("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Tm(A,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>W.fromName(r.referenceValue))}class XI extends Pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Hl(t)&&ps(t.arrayValue,this.value)}}class qI extends Pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ps(this.value.arrayValue,t)}}class zI extends Pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ps(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ps(this.value.arrayValue,t)}}class JI extends Pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Hl(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ps(this.value.arrayValue,r))}}/**
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
 */class YI{constructor(e,t=null,r=[],n=[],s=null,i=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=n,this.limit=s,this.startAt=i,this.endAt=a,this.Ie=null}}function Od(A,e=null,t=[],r=[],n=null,s=null,i=null){return new YI(A,e,t,r,n,s,i)}function kl(A){const e=Z(A);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Dc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),No(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>An(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>An(r)).join(",")),e.Ie=t}return e.Ie}function Ol(A,e){if(A.limit!==e.limit||A.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<A.orderBy.length;t++)if(!KI(A.orderBy[t],e.orderBy[t]))return!1;if(A.filters.length!==e.filters.length)return!1;for(let t=0;t<A.filters.length;t++)if(!bm(A.filters[t],e.filters[t]))return!1;return A.collectionGroup===e.collectionGroup&&!!A.path.isEqual(e.path)&&!!kd(A.startAt,e.startAt)&&kd(A.endAt,e.endAt)}function Pc(A){return W.isDocumentKey(A.path)&&A.collectionGroup===null&&A.filters.length===0}/**
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
 */class hn{constructor(e,t=null,r=[],n=[],s=null,i="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=n,this.limit=s,this.limitType=i,this.startAt=a,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function ZI(A,e,t,r,n,s,i,a){return new hn(A,e,t,r,n,s,i,a)}function Nl(A){return new hn(A)}function Nd(A){return A.filters.length===0&&A.limit===null&&A.startAt==null&&A.endAt==null&&(A.explicitOrderBy.length===0||A.explicitOrderBy.length===1&&A.explicitOrderBy[0].field.isKeyField())}function xm(A){return A.collectionGroup!==null}function As(A){const e=Z(A);if(e.Ee===null){e.Ee=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(i){let a=new Oe(We.comparator);return i.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new ms(s,r))}),t.has(We.keyField().canonicalString())||e.Ee.push(new ms(We.keyField(),r))}return e.Ee}function GA(A){const e=Z(A);return e.de||(e.de=e_(e,As(A))),e.de}function e_(A,e){if(A.limitType==="F")return Od(A.path,A.collectionGroup,e,A.filters,A.limit,A.startAt,A.endAt);{e=e.map(n=>{const s=n.dir==="desc"?"asc":"desc";return new ms(n.field,s)});const t=A.endAt?new ho(A.endAt.position,A.endAt.inclusive):null,r=A.startAt?new ho(A.startAt.position,A.startAt.inclusive):null;return Od(A.path,A.collectionGroup,e,A.filters,A.limit,t,r)}}function Lc(A,e){const t=A.filters.concat([e]);return new hn(A.path,A.collectionGroup,A.explicitOrderBy.slice(),t,A.limit,A.limitType,A.startAt,A.endAt)}function fo(A,e,t){return new hn(A.path,A.collectionGroup,A.explicitOrderBy.slice(),A.filters.slice(),e,t,A.startAt,A.endAt)}function Mo(A,e){return Ol(GA(A),GA(e))&&A.limitType===e.limitType}function Sm(A){return`${kl(GA(A))}|lt:${A.limitType}`}function Hr(A){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(n=>Fm(n)).join(", ")}]`),No(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(n=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(n)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(n=>An(n)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(n=>An(n)).join(",")),`Target(${r})`}(GA(A))}; limitType=${A.limitType})`}function Ko(A,e){return e.isFoundDocument()&&function(r,n){const s=n.key.path;return r.collectionGroup!==null?n.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(A,e)&&function(r,n){for(const s of As(r))if(!s.field.isKeyField()&&n.data.field(s.field)===null)return!1;return!0}(A,e)&&function(r,n){for(const s of r.filters)if(!s.matches(n))return!1;return!0}(A,e)&&function(r,n){return!(r.startAt&&!function(i,a,c){const l=Hd(i,a,c);return i.inclusive?l<=0:l<0}(r.startAt,As(r),n)||r.endAt&&!function(i,a,c){const l=Hd(i,a,c);return i.inclusive?l>=0:l>0}(r.endAt,As(r),n))}(A,e)}function A_(A){return A.collectionGroup||(A.path.length%2==1?A.path.lastSegment():A.path.get(A.path.length-2))}function Rm(A){return(e,t)=>{let r=!1;for(const n of As(A)){const s=t_(n,e,t);if(s!==0)return s;r=r||n.field.isKeyField()}return 0}}function t_(A,e,t){const r=A.field.isKeyField()?W.comparator(e.key,t.key):function(s,i,a){const c=i.data.field(s),l=a.data.field(s);return c!==null&&l!==null?en(c,l):q(42886)}(A.field,e,t);switch(A.dir){case"asc":return r;case"desc":return-1*r;default:return q(19790,{direction:A.dir})}}/**
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
 */class Er{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[n,s]of r)if(this.equalsFn(n,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),n=this.inner[r];if(n===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],e))return void(n[s]=[e,t]);n.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return r.length===1?delete this.inner[t]:r.splice(n,1),this.innerSize--,!0;return!1}forEach(e){vr(this.inner,(t,r)=>{for(const[n,s]of r)e(n,s)})}isEmpty(){return pm(this.inner)}size(){return this.innerSize}}/**
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
 */const r_=new ve(W.comparator);function dt(){return r_}const Dm=new ve(W.comparator);function Nn(...A){let e=Dm;for(const t of A)e=e.insert(t.key,t);return e}function Pm(A){let e=Dm;return A.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function cr(){return ts()}function Lm(){return ts()}function ts(){return new Er(A=>A.toString(),(A,e)=>A.isEqual(e))}const n_=new ve(W.comparator),s_=new Oe(W.comparator);function se(...A){let e=s_;for(const t of A)e=e.add(t);return e}const i_=new Oe(Ae);function o_(){return i_}/**
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
 */function Vl(A,e){if(A.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lo(e)?"-0":e}}function Hm(A){return{integerValue:""+A}}function a_(A,e){return PI(e)?Hm(e):Vl(A,e)}/**
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
 */class jo{constructor(){this._=void 0}}function c_(A,e,t){return A instanceof Bs?function(n,s){const i={fields:{[wm]:{stringValue:Bm},[Cm]:{timestampValue:{seconds:n.seconds,nanos:n.nanoseconds}}}};return s&&Ll(s)&&(s=Vo(s)),s&&(i.fields[ym]=s),{mapValue:i}}(t,e):A instanceof ws?Om(A,e):A instanceof ys?Nm(A,e):function(n,s){const i=km(n,s),a=Vd(i)+Vd(n.Re);return Rc(i)&&Rc(n.Re)?Hm(a):Vl(n.serializer,a)}(A,e)}function l_(A,e,t){return A instanceof ws?Om(A,e):A instanceof ys?Nm(A,e):t}function km(A,e){return A instanceof go?function(r){return Rc(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Bs extends jo{}class ws extends jo{constructor(e){super(),this.elements=e}}function Om(A,e){const t=Vm(e);for(const r of A.elements)t.some(n=>WA(n,r))||t.push(r);return{arrayValue:{values:t}}}class ys extends jo{constructor(e){super(),this.elements=e}}function Nm(A,e){let t=Vm(e);for(const r of A.elements)t=t.filter(n=>!WA(n,r));return{arrayValue:{values:t}}}class go extends jo{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Vd(A){return xe(A.integerValue||A.doubleValue)}function Vm(A){return Hl(A)&&A.arrayValue.values?A.arrayValue.values.slice():[]}/**
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
 */class u_{constructor(e,t){this.field=e,this.transform=t}}function h_(A,e){return A.field.isEqual(e.field)&&function(r,n){return r instanceof ws&&n instanceof ws||r instanceof ys&&n instanceof ys?Zr(r.elements,n.elements,WA):r instanceof go&&n instanceof go?WA(r.Re,n.Re):r instanceof Bs&&n instanceof Bs}(A.transform,e.transform)}class d_{constructor(e,t){this.version=e,this.transformResults=t}}class DA{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new DA}static exists(e){return new DA(void 0,e)}static updateTime(e){return new DA(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Xi(A,e){return A.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(A.updateTime):A.exists===void 0||A.exists===e.isFoundDocument()}class Go{}function Mm(A,e){if(!A.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return A.isNoDocument()?new Ml(A.key,DA.none()):new Ss(A.key,A.data,DA.none());{const t=A.data,r=IA.empty();let n=new Oe(We.comparator);for(let s of e.fields)if(!n.has(s)){let i=t.field(s);i===null&&s.length>1&&(s=s.popLast(),i=t.field(s)),i===null?r.delete(s):r.set(s,i),n=n.add(s)}return new Ir(A.key,r,new SA(n.toArray()),DA.none())}}function f_(A,e,t){A instanceof Ss?function(n,s,i){const a=n.value.clone(),c=Kd(n.fieldTransforms,s,i.transformResults);a.setAll(c),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(A,e,t):A instanceof Ir?function(n,s,i){if(!Xi(n.precondition,s))return void s.convertToUnknownDocument(i.version);const a=Kd(n.fieldTransforms,s,i.transformResults),c=s.data;c.setAll(Km(n)),c.setAll(a),s.convertToFoundDocument(i.version,c).setHasCommittedMutations()}(A,e,t):function(n,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function rs(A,e,t,r){return A instanceof Ss?function(s,i,a,c){if(!Xi(s.precondition,i))return a;const l=s.value.clone(),h=jd(s.fieldTransforms,c,i);return l.setAll(h),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(A,e,t,r):A instanceof Ir?function(s,i,a,c){if(!Xi(s.precondition,i))return a;const l=jd(s.fieldTransforms,c,i),h=i.data;return h.setAll(Km(s)),h.setAll(l),i.convertToFoundDocument(i.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(A,e,t,r):function(s,i,a){return Xi(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):a}(A,e,t)}function g_(A,e){let t=null;for(const r of A.fieldTransforms){const n=e.data.field(r.field),s=km(r.transform,n||null);s!=null&&(t===null&&(t=IA.empty()),t.set(r.field,s))}return t||null}function Md(A,e){return A.type===e.type&&!!A.key.isEqual(e.key)&&!!A.precondition.isEqual(e.precondition)&&!!function(r,n){return r===void 0&&n===void 0||!(!r||!n)&&Zr(r,n,(s,i)=>h_(s,i))}(A.fieldTransforms,e.fieldTransforms)&&(A.type===0?A.value.isEqual(e.value):A.type!==1||A.data.isEqual(e.data)&&A.fieldMask.isEqual(e.fieldMask))}class Ss extends Go{constructor(e,t,r,n=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=n,this.type=0}getFieldMask(){return null}}class Ir extends Go{constructor(e,t,r,n,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=n,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Km(A){const e=new Map;return A.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=A.data.field(t);e.set(t,r)}}),e}function Kd(A,e,t){const r=new Map;he(A.length===t.length,32656,{Ve:t.length,me:A.length});for(let n=0;n<t.length;n++){const s=A[n],i=s.transform,a=e.data.field(s.field);r.set(s.field,l_(i,a,t[n]))}return r}function jd(A,e,t){const r=new Map;for(const n of A){const s=n.transform,i=t.data.field(n.field);r.set(n.field,c_(s,i,e))}return r}class Ml extends Go{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class p_ extends Go{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class m_{constructor(e,t,r,n){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=n}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let n=0;n<this.mutations.length;n++){const s=this.mutations[n];s.key.isEqual(e.key)&&f_(s,e,r[n])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=rs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=rs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Lm();return this.mutations.forEach(n=>{const s=e.get(n.key),i=s.overlayedDocument;let a=this.applyToLocalView(i,s.mutatedFields);a=t.has(n.key)?null:a;const c=Mm(i,a);c!==null&&r.set(n.key,c),i.isValidDocument()||i.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,(t,r)=>Md(t,r))&&Zr(this.baseMutations,e.baseMutations,(t,r)=>Md(t,r))}}class Kl{constructor(e,t,r,n){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=n}static from(e,t,r){he(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let n=function(){return n_}();const s=e.mutations;for(let i=0;i<s.length;i++)n=n.insert(s[i].key,r[i].version);return new Kl(e,t,r,n)}}/**
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
 */class B_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class w_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Re,ae;function y_(A){switch(A){case N.OK:return q(64938);case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0;default:return q(15467,{code:A})}}function jm(A){if(A===void 0)return ht("GRPC error has no .code"),N.UNKNOWN;switch(A){case Re.OK:return N.OK;case Re.CANCELLED:return N.CANCELLED;case Re.UNKNOWN:return N.UNKNOWN;case Re.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case Re.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case Re.INTERNAL:return N.INTERNAL;case Re.UNAVAILABLE:return N.UNAVAILABLE;case Re.UNAUTHENTICATED:return N.UNAUTHENTICATED;case Re.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case Re.NOT_FOUND:return N.NOT_FOUND;case Re.ALREADY_EXISTS:return N.ALREADY_EXISTS;case Re.PERMISSION_DENIED:return N.PERMISSION_DENIED;case Re.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case Re.ABORTED:return N.ABORTED;case Re.OUT_OF_RANGE:return N.OUT_OF_RANGE;case Re.UNIMPLEMENTED:return N.UNIMPLEMENTED;case Re.DATA_LOSS:return N.DATA_LOSS;default:return q(39323,{code:A})}}(ae=Re||(Re={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const C_=new Lt([4294967295,4294967295],0);function Gd(A){const e=dm().encode(A),t=new sm;return t.update(e),new Uint8Array(t.digest())}function $d(A){const e=new DataView(A.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),n=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Lt([t,r],0),new Lt([n,s],0)]}class jl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Vn(`Invalid padding: ${t}`);if(r<0)throw new Vn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Vn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Vn(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Lt.fromNumber(this.pe)}we(e,t,r){let n=e.add(t.multiply(Lt.fromNumber(r)));return n.compare(C_)===1&&(n=new Lt([n.getBits(0),n.getBits(1)],0)),n.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Gd(e),[r,n]=$d(t);for(let s=0;s<this.hashCount;s++){const i=this.we(r,n,s);if(!this.be(i))return!1}return!0}static create(e,t,r){const n=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),i=new jl(s,n,t);return r.forEach(a=>i.insert(a)),i}insert(e){if(this.pe===0)return;const t=Gd(e),[r,n]=$d(t);for(let s=0;s<this.hashCount;s++){const i=this.we(r,n,s);this.Se(i)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Vn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class $o{constructor(e,t,r,n,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=n,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const n=new Map;return n.set(e,Rs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new $o(z.min(),n,new ve(Ae),dt(),se())}}class Rs{constructor(e,t,r,n,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=n,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Rs(r,t,se(),se(),se())}}/**
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
 */class qi{constructor(e,t,r,n){this.De=e,this.removedTargetIds=t,this.key=r,this.ve=n}}class Gm{constructor(e,t){this.targetId=e,this.Ce=t}}class $m{constructor(e,t,r=qe.EMPTY_BYTE_STRING,n=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=n}}class Wd{constructor(){this.Fe=0,this.Me=Xd(),this.xe=qe.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=se(),t=se(),r=se();return this.Me.forEach((n,s)=>{switch(s){case 0:e=e.add(n);break;case 2:t=t.add(n);break;case 1:r=r.add(n);break;default:q(38017,{changeType:s})}}),new Rs(this.xe,this.Oe,e,t,r)}Qe(){this.Ne=!1,this.Me=Xd()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,he(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class v_{constructor(e){this.ze=e,this.je=new Map,this.He=dt(),this.Je=ai(),this.Ye=ai(),this.Ze=new ve(Ae)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const r=this.rt(t);switch(e.state){case 0:this.it(t)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(t);break;case 3:this.it(t)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),r.ke(e.resumeToken));break;default:q(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((r,n)=>{this.it(n)&&t(n)})}ot(e){const t=e.targetId,r=e.Ce.count,n=this._t(t);if(n){const s=n.target;if(Pc(s))if(r===0){const i=new W(s.path);this.tt(t,i,rA.newNoDocument(i,z.min()))}else he(r===1,20013,{expectedCount:r});else{const i=this.ut(t);if(i!==r){const a=this.ct(e),c=a?this.lt(a,e,i):1;if(c!==0){this.st(t);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,l)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:n=0},hashCount:s=0}=t;let i,a;try{i=Gt(r).toUint8Array()}catch(c){if(c instanceof mm)return Yr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new jl(i,n,s)}catch(c){return Yr(c instanceof Vn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.pe===0?null:a}lt(e,t,r){return t.Ce.count===r-this.Tt(e,t.targetId)?0:2}Tt(e,t){const r=this.ze.getRemoteKeysForTarget(t);let n=0;return r.forEach(s=>{const i=this.ze.Pt(),a=`projects/${i.projectId}/databases/${i.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.tt(t,s,null),n++)}),n}It(e){const t=new Map;this.je.forEach((s,i)=>{const a=this._t(i);if(a){if(s.current&&Pc(a.target)){const c=new W(a.target.path);this.Et(c).has(i)||this.dt(i,c)||this.tt(i,c,rA.newNoDocument(c,e))}s.Le&&(t.set(i,s.qe()),s.Qe())}});let r=se();this.Ye.forEach((s,i)=>{let a=!0;i.forEachWhile(c=>{const l=this._t(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.He.forEach((s,i)=>i.setReadTime(e));const n=new $o(e,t,this.Ze,this.He,r);return this.He=dt(),this.Je=ai(),this.Ye=ai(),this.Ze=new ve(Ae),n}et(e,t){if(!this.it(e))return;const r=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,r),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,r){if(!this.it(e))return;const n=this.rt(e);this.dt(e,t)?n.$e(t,1):n.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),r&&(this.He=this.He.insert(t,r))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Wd,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Oe(Ae),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Oe(Ae),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||G("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Wd),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function ai(){return new ve(W.comparator)}function Xd(){return new ve(W.comparator)}const E_={asc:"ASCENDING",desc:"DESCENDING"},I_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},__={and:"AND",or:"OR"};class U_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Hc(A,e){return A.useProto3Json||No(e)?e:{value:e}}function po(A,e){return A.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Wm(A,e){return A.useProto3Json?e.toBase64():e.toUint8Array()}function Q_(A,e){return po(A,e.toTimestamp())}function $A(A){return he(!!A,49232),z.fromTimestamp(function(t){const r=jt(t);return new Le(r.seconds,r.nanos)}(A))}function Gl(A,e){return kc(A,e).canonicalString()}function kc(A,e){const t=function(n){return new we(["projects",n.projectId,"databases",n.database])}(A).child("documents");return e===void 0?t:t.child(e)}function Xm(A){const e=we.fromString(A);return he(Zm(e),10190,{key:e.toString()}),e}function Oc(A,e){return Gl(A.databaseId,e.path)}function Ka(A,e){const t=Xm(e);if(t.get(1)!==A.databaseId.projectId)throw new $(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+A.databaseId.projectId);if(t.get(3)!==A.databaseId.database)throw new $(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+A.databaseId.database);return new W(zm(t))}function qm(A,e){return Gl(A.databaseId,e)}function b_(A){const e=Xm(A);return e.length===4?we.emptyPath():zm(e)}function Nc(A){return new we(["projects",A.databaseId.projectId,"databases",A.databaseId.database]).canonicalString()}function zm(A){return he(A.length>4&&A.get(4)==="documents",29091,{key:A.toString()}),A.popFirst(5)}function qd(A,e,t){return{name:Oc(A,e),fields:t.value.mapValue.fields}}function F_(A,e){let t;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:q(39313,{state:l})}(e.targetChange.targetChangeType||"NO_CHANGE"),n=e.targetChange.targetIds||[],s=function(l,h){return l.useProto3Json?(he(h===void 0||typeof h=="string",58123),qe.fromBase64String(h||"")):(he(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),qe.fromUint8Array(h||new Uint8Array))}(A,e.targetChange.resumeToken),i=e.targetChange.cause,a=i&&function(l){const h=l.code===void 0?N.UNKNOWN:jm(l.code);return new $(h,l.message||"")}(i);t=new $m(r,n,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const n=Ka(A,r.document.name),s=$A(r.document.updateTime),i=r.document.createTime?$A(r.document.createTime):z.min(),a=new IA({mapValue:{fields:r.document.fields}}),c=rA.newFoundDocument(n,s,i,a),l=r.targetIds||[],h=r.removedTargetIds||[];t=new qi(l,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const n=Ka(A,r.document),s=r.readTime?$A(r.readTime):z.min(),i=rA.newNoDocument(n,s),a=r.removedTargetIds||[];t=new qi([],a,i.key,i)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const n=Ka(A,r.document),s=r.removedTargetIds||[];t=new qi([],s,n,null)}else{if(!("filter"in e))return q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:n=0,unchangedNames:s}=r,i=new w_(n,s),a=r.targetId;t=new Gm(a,i)}}return t}function T_(A,e){let t;if(e instanceof Ss)t={update:qd(A,e.key,e.value)};else if(e instanceof Ml)t={delete:Oc(A,e.key)};else if(e instanceof Ir)t={update:qd(A,e.key,e.data),updateMask:O_(e.fieldMask)};else{if(!(e instanceof p_))return q(16599,{ft:e.type});t={verify:Oc(A,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const a=i.transform;if(a instanceof Bs)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ws)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ys)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof go)return{fieldPath:i.field.canonicalString(),increment:a.Re};throw q(20930,{transform:i.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(n,s){return s.updateTime!==void 0?{updateTime:Q_(n,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:q(27497)}(A,e.precondition)),t}function x_(A,e){return A&&A.length>0?(he(e!==void 0,14353),A.map(t=>function(n,s){let i=n.updateTime?$A(n.updateTime):$A(s);return i.isEqual(z.min())&&(i=$A(s)),new d_(i,n.transformResults||[])}(t,e))):[]}function S_(A,e){return{documents:[qm(A,e.path)]}}function R_(A,e){const t={structuredQuery:{}},r=e.path;let n;e.collectionGroup!==null?(n=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=qm(A,n);const s=function(l){if(l.length!==0)return Ym(PA.create(l,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const i=function(l){if(l.length!==0)return l.map(h=>function(p){return{field:kr(p.field),direction:L_(p.dir)}}(h))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const a=Hc(A,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{gt:t,parent:n}}function D_(A){let e=b_(A.parent);const t=A.structuredQuery,r=t.from?t.from.length:0;let n=null;if(r>0){he(r===1,65062);const h=t.from[0];h.allDescendants?n=h.collectionId:e=e.child(h.collectionId)}let s=[];t.where&&(s=function(f){const p=Jm(f);return p instanceof PA&&Qm(p)?p.getFilters():[p]}(t.where));let i=[];t.orderBy&&(i=function(f){return f.map(p=>function(_){return new ms(Or(_.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(p))}(t.orderBy));let a=null;t.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,No(p)?null:p}(t.limit));let c=null;t.startAt&&(c=function(f){const p=!!f.before,C=f.values||[];return new ho(C,p)}(t.startAt));let l=null;return t.endAt&&(l=function(f){const p=!f.before,C=f.values||[];return new ho(C,p)}(t.endAt)),ZI(e,n,i,s,a,"F",c,l)}function P_(A,e){const t=function(n){switch(n){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return q(28987,{purpose:n})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Jm(A){return A.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Or(t.unaryFilter.field);return Pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const n=Or(t.unaryFilter.field);return Pe.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Or(t.unaryFilter.field);return Pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Or(t.unaryFilter.field);return Pe.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return q(61313);default:return q(60726)}}(A):A.fieldFilter!==void 0?function(t){return Pe.create(Or(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return q(58110);default:return q(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(A):A.compositeFilter!==void 0?function(t){return PA.create(t.compositeFilter.filters.map(r=>Jm(r)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return q(1026)}}(t.compositeFilter.op))}(A):q(30097,{filter:A})}function L_(A){return E_[A]}function H_(A){return I_[A]}function k_(A){return __[A]}function kr(A){return{fieldPath:A.canonicalString()}}function Or(A){return We.fromServerFormat(A.fieldPath)}function Ym(A){return A instanceof Pe?function(t){if(t.op==="=="){if(Ld(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NAN"}};if(Pd(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Ld(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NOT_NAN"}};if(Pd(t.value))return{unaryFilter:{field:kr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:kr(t.field),op:H_(t.op),value:t.value}}}(A):A instanceof PA?function(t){const r=t.getFilters().map(n=>Ym(n));return r.length===1?r[0]:{compositeFilter:{op:k_(t.op),filters:r}}}(A):q(54877,{filter:A})}function O_(A){const e=[];return A.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Zm(A){return A.length>=4&&A.get(0)==="projects"&&A.get(2)==="databases"}/**
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
 */class Ft{constructor(e,t,r,n,s=z.min(),i=z.min(),a=qe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=n,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class N_{constructor(e){this.wt=e}}function V_(A){const e=D_({parent:A.parent,structuredQuery:A.structuredQuery});return A.limitType==="LAST"?fo(e,e.limit,"L"):e}/**
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
 */class M_{constructor(){this.Cn=new K_}addToCollectionParentIndex(e,t){return this.Cn.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Kt.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Kt.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class K_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),n=this.index[t]||new Oe(we.comparator),s=!n.has(r);return this.index[t]=n.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),n=this.index[t];return n&&n.has(r)}getEntries(e){return(this.index[e]||new Oe(we.comparator)).toArray()}}/**
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
 */const zd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},eB=41943040;class lA{static withCacheSize(e){return new lA(e,lA.DEFAULT_COLLECTION_PERCENTILE,lA.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */lA.DEFAULT_COLLECTION_PERCENTILE=10,lA.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,lA.DEFAULT=new lA(eB,lA.DEFAULT_COLLECTION_PERCENTILE,lA.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),lA.DISABLED=new lA(-1,0,0);/**
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
 */class tn{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new tn(0)}static lr(){return new tn(-1)}}/**
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
 */const Jd="LruGarbageCollector",j_=1048576;function Yd([A,e],[t,r]){const n=Ae(A,t);return n===0?Ae(e,r):n}class G_{constructor(e){this.Er=e,this.buffer=new Oe(Yd),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Yd(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class $_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){G(Jd,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,()=>y(this,null,function*(){this.Vr=null;try{yield this.localStore.collectGarbage(this.garbageCollector)}catch(t){un(t)?G(Jd,"Ignoring IndexedDB error during garbage collection: ",t):yield ln(t)}yield this.mr(3e5)}))}}class W_{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(Oo.le);const r=new G_(t);return this.gr.forEachTarget(e,n=>r.Rr(n.sequenceNumber)).next(()=>this.gr.yr(e,n=>r.Rr(n))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.gr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(G("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(zd)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(G("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zd):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let r,n,s,i,a,c,l;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(G("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),n=this.params.maximumSequenceNumbersToCollect):n=f,i=Date.now(),this.nthSequenceNumber(e,n))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,t))).next(f=>(s=f,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(l=Date.now(),Lr()<=ne.DEBUG&&G("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${i-h}ms
	Determined least recently used ${n} in `+(a-i)+`ms
	Removed ${s} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(l-c)+`ms
Total Duration: ${l-h}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:n,targetsRemoved:s,documentsRemoved:f})))}}function X_(A,e){return new W_(A,e)}/**
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
 */class q_{constructor(){this.changes=new Er(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,rA.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class z_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class J_{constructor(e,t,r,n){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=n}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(n=>(r=n,this.remoteDocumentCache.getEntry(e,t))).next(n=>(r!==null&&rs(r.mutation,n,SA.empty(),Le.now()),n))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,t,r=se()){const n=cr();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,r).next(s=>{let i=Nn();return s.forEach((a,c)=>{i=i.insert(a,c.overlayedDocument)}),i}))}getOverlayedDocuments(e,t){const r=cr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,se()))}populateOverlays(e,t,r){const n=[];return r.forEach(s=>{t.has(s)||n.push(s)}),this.documentOverlayCache.getOverlays(e,n).next(s=>{s.forEach((i,a)=>{t.set(i,a)})})}computeViews(e,t,r,n){let s=dt();const i=ts(),a=function(){return ts()}();return t.forEach((c,l)=>{const h=r.get(l.key);n.has(l.key)&&(h===void 0||h.mutation instanceof Ir)?s=s.insert(l.key,l):h!==void 0?(i.set(l.key,h.mutation.getFieldMask()),rs(h.mutation,l,h.mutation.getFieldMask(),Le.now())):i.set(l.key,SA.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((l,h)=>i.set(l,h)),t.forEach((l,h)=>{var f;return a.set(l,new z_(h,(f=i.get(l))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,t){const r=ts();let n=new ve((i,a)=>i-a),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(i=>{for(const a of i)a.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let h=r.get(c)||SA.empty();h=a.applyToLocalView(l,h),r.set(c,h);const f=(n.get(a.batchId)||se()).add(c);n=n.insert(a.batchId,f)})}).next(()=>{const i=[],a=n.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,h=c.value,f=Lm();h.forEach(p=>{if(!s.has(p)){const C=Mm(t.get(p),r.get(p));C!==null&&f.set(p,C),s=s.add(p)}}),i.push(this.documentOverlayCache.saveOverlays(e,l,f))}return V.waitFor(i)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,n){return function(i){return W.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):xm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,n):this.getDocumentsMatchingCollectionQuery(e,t,r,n)}getNextDocuments(e,t,r,n){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,n).next(s=>{const i=n-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,n-s.size):V.resolve(cr());let a=ds,c=s;return i.next(l=>V.forEach(l,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?V.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{c=c.insert(h,p)}))).next(()=>this.populateOverlays(e,l,s)).next(()=>this.computeViews(e,c,l,se())).next(h=>({batchId:a,changes:Pm(h)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next(r=>{let n=Nn();return r.isFoundDocument()&&(n=n.insert(r.key,r)),n})}getDocumentsMatchingCollectionGroupQuery(e,t,r,n){const s=t.collectionGroup;let i=Nn();return this.indexManager.getCollectionParents(e,s).next(a=>V.forEach(a,c=>{const l=function(f,p){return new hn(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,l,r,n).next(h=>{h.forEach((f,p)=>{i=i.insert(f,p)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,r,n){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,n))).next(i=>{s.forEach((c,l)=>{const h=l.getKey();i.get(h)===null&&(i=i.insert(h,rA.newInvalidDocument(h)))});let a=Nn();return i.forEach((c,l)=>{const h=s.get(c);h!==void 0&&rs(h.mutation,l,SA.empty(),Le.now()),Ko(t,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class Y_{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return V.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(n){return{id:n.id,version:n.version,createTime:$A(n.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(n){return{name:n.name,query:V_(n.bundledQuery),readTime:$A(n.readTime)}}(t)),V.resolve()}}/**
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
 */class Z_{constructor(){this.overlays=new ve(W.comparator),this.Qr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=cr();return V.forEach(t,n=>this.getOverlay(e,n).next(s=>{s!==null&&r.set(n,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((n,s)=>{this.St(e,t,s)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const n=this.Qr.get(r);return n!==void 0&&(n.forEach(s=>this.overlays=this.overlays.remove(s)),this.Qr.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const n=cr(),s=t.length+1,i=new W(t.child("")),a=this.overlays.getIteratorFrom(i);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===s&&c.largestBatchId>r&&n.set(c.getKey(),c)}return V.resolve(n)}getOverlaysForCollectionGroup(e,t,r,n){let s=new ve((l,h)=>l-h);const i=this.overlays.getIterator();for(;i.hasNext();){const l=i.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>r){let h=s.get(l.largestBatchId);h===null&&(h=cr(),s=s.insert(l.largestBatchId,h)),h.set(l.getKey(),l)}}const a=cr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,h)=>a.set(l,h)),!(a.size()>=n)););return V.resolve(a)}St(e,t,r){const n=this.overlays.get(r.key);if(n!==null){const i=this.Qr.get(n.largestBatchId).delete(r.key);this.Qr.set(n.largestBatchId,i)}this.overlays=this.overlays.insert(r.key,new B_(t,r));let s=this.Qr.get(t);s===void 0&&(s=se(),this.Qr.set(t,s)),this.Qr.set(t,s.add(r.key))}}/**
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
 */class eU{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
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
 */class $l{constructor(){this.$r=new Oe(Ke.Ur),this.Kr=new Oe(Ke.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const r=new Ke(e,t);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.zr(new Ke(e,t))}jr(e,t){e.forEach(r=>this.removeReference(r,t))}Hr(e){const t=new W(new we([])),r=new Ke(t,e),n=new Ke(t,e+1),s=[];return this.Kr.forEachInRange([r,n],i=>{this.zr(i),s.push(i.key)}),s}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new W(new we([])),r=new Ke(t,e),n=new Ke(t,e+1);let s=se();return this.Kr.forEachInRange([r,n],i=>{s=s.add(i.key)}),s}containsKey(e){const t=new Ke(e,0),r=this.$r.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return W.comparator(e.key,t.key)||Ae(e.Zr,t.Zr)}static Wr(e,t){return Ae(e.Zr,t.Zr)||W.comparator(e.key,t.key)}}/**
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
 */class AU{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Oe(Ke.Ur)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,n){const s=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new m_(s,t,r,n);this.mutationQueue.push(i);for(const a of n)this.Xr=this.Xr.add(new Ke(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return V.resolve(i)}lookupMutationBatch(e,t){return V.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,n=this.ti(r),s=n<0?0:n;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Pl:this.nr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ke(t,0),n=new Ke(t,Number.POSITIVE_INFINITY),s=[];return this.Xr.forEachInRange([r,n],i=>{const a=this.ei(i.Zr);s.push(a)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Oe(Ae);return t.forEach(n=>{const s=new Ke(n,0),i=new Ke(n,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([s,i],a=>{r=r.add(a.Zr)})}),V.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,n=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const i=new Ke(new W(s),0);let a=new Oe(Ae);return this.Xr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===n&&(a=a.add(c.Zr)),!0)},i),V.resolve(this.ni(a))}ni(e){const t=[];return e.forEach(r=>{const n=this.ei(r);n!==null&&t.push(n)}),t}removeMutationBatch(e,t){he(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return V.forEach(t.mutations,n=>{const s=new Ke(n.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,n.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,t){const r=new Ke(t,0),n=this.Xr.firstAfterOrEqual(r);return V.resolve(t.isEqual(n&&n.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class tU{constructor(e){this.ii=e,this.docs=function(){return new ve(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,n=this.docs.get(r),s=n?n.size:0,i=this.ii(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():rA.newInvalidDocument(t))}getEntries(e,t){let r=dt();return t.forEach(n=>{const s=this.docs.get(n);r=r.insert(n,s?s.document.mutableCopy():rA.newInvalidDocument(n))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,n){let s=dt();const i=t.path,a=new W(i.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:h}}=c.getNext();if(!i.isPrefixOf(l.path))break;l.path.length>i.length+1||xI(TI(h),r)<=0||(n.has(h.key)||Ko(t,h))&&(s=s.insert(h.key,h.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,t,r,n){q(9500)}si(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new rU(this)}getSize(e){return V.resolve(this.size)}}class rU extends q_{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((r,n)=>{n.isValidDocument()?t.push(this.Br.addEntry(e,n)):this.Br.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class nU{constructor(e){this.persistence=e,this.oi=new Er(t=>kl(t),Ol),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this._i=0,this.ai=new $l,this.targetCount=0,this.ui=tn.cr()}forEachTarget(e,t){return this.oi.forEach((r,n)=>t(n)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this._i&&(this._i=t),V.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new tn(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Tr(t),V.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let n=0;const s=[];return this.oi.forEach((i,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.oi.delete(i),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),n++)}),V.waitFor(s).next(()=>n)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.oi.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.ai.Gr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.ai.jr(t,r);const n=this.persistence.referenceDelegate,s=[];return n&&t.forEach(i=>{s.push(n.markPotentiallyOrphaned(e,i))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.ai.Yr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.ai.containsKey(t))}}/**
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
 */class AB{constructor(e,t){this.ci={},this.overlays={},this.li=new Oo(0),this.hi=!1,this.hi=!0,this.Pi=new eU,this.referenceDelegate=e(this),this.Ti=new nU(this),this.indexManager=new M_,this.remoteDocumentCache=function(n){return new tU(n)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new N_(t),this.Ei=new Y_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Z_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ci[e.toKey()];return r||(r=new AU(t,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);const n=new sU(this.li.next());return this.referenceDelegate.di(),r(n).next(s=>this.referenceDelegate.Ai(n).next(()=>s)).toPromise().then(s=>(n.raiseOnCommittedEvent(),s))}Ri(e,t){return V.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,t)))}}class sU extends RI{constructor(e){super(),this.currentSequenceNumber=e}}class Wl{constructor(e){this.persistence=e,this.Vi=new $l,this.mi=null}static fi(e){return new Wl(e)}get gi(){if(this.mi)return this.mi;throw q(60996)}addReference(e,t,r){return this.Vi.addReference(r,t),this.gi.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Vi.removeReference(r,t),this.gi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),V.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(n=>this.gi.add(n.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(n=>{n.forEach(s=>this.gi.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.gi,r=>{const n=W.fromPath(r);return this.pi(e,n).next(s=>{s||t.removeEntry(n,z.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(r=>{r?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return V.or([()=>V.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class mo{constructor(e,t){this.persistence=e,this.yi=new Er(r=>LI(r.path),(r,n)=>r.isEqual(n)),this.garbageCollector=X_(this,t)}static fi(e,t){return new mo(e,t)}di(){}Ai(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(n=>r+n))}br(e){let t=0;return this.yr(e,r=>{t++}).next(()=>t)}yr(e,t){return V.forEach(this.yi,(r,n)=>this.Dr(e,r,n).next(s=>s?V.resolve():t(n)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const n=this.persistence.getRemoteDocumentCache(),s=n.newChangeBuffer();return n.si(e,i=>this.Dr(e,i,t).next(a=>{a||(r++,s.removeEntry(i,z.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.yi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),V.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=$i(e.data.value)),t}Dr(e,t,r){return V.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const n=this.yi.get(t);return V.resolve(n!==void 0&&n>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Xl{constructor(e,t,r,n){this.targetId=e,this.fromCache=t,this.ds=r,this.As=n}static Rs(e,t){let r=se(),n=se();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:n=n.add(s.doc.key)}return new Xl(e,t.fromCache,r,n)}}/**
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
 */class iU{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class oU{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return PC()?8:DI(nA())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,r,n){const s={result:null};return this.ws(e,t).next(i=>{s.result=i}).next(()=>{if(!s.result)return this.bs(e,t,n,r).next(i=>{s.result=i})}).next(()=>{if(s.result)return;const i=new iU;return this.Ss(e,t,i).next(a=>{if(s.result=a,this.fs)return this.Ds(e,t,i,a.size)})}).next(()=>s.result)}Ds(e,t,r,n){return r.documentReadCount<this.gs?(Lr()<=ne.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Hr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),V.resolve()):(Lr()<=ne.DEBUG&&G("QueryEngine","Query:",Hr(t),"scans",r.documentReadCount,"local documents and returns",n,"documents as results."),r.documentReadCount>this.ps*n?(Lr()<=ne.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Hr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,GA(t))):V.resolve())}ws(e,t){if(Nd(t))return V.resolve(null);let r=GA(t);return this.indexManager.getIndexType(e,r).next(n=>n===0?null:(t.limit!==null&&n===1&&(t=fo(t,null,"F"),r=GA(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const i=se(...s);return this.ys.getDocuments(e,i).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.vs(t,a);return this.Cs(t,l,i,c.readTime)?this.ws(e,fo(t,null,"F")):this.Fs(e,l,t,c)}))})))}bs(e,t,r,n){return Nd(t)||n.isEqual(z.min())?V.resolve(null):this.ys.getDocuments(e,r).next(s=>{const i=this.vs(t,s);return this.Cs(t,i,r,n)?V.resolve(null):(Lr()<=ne.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Hr(t)),this.Fs(e,i,t,FI(n,ds)).next(a=>a))})}vs(e,t){let r=new Oe(Rm(e));return t.forEach((n,s)=>{Ko(e,s)&&(r=r.add(s))}),r}Cs(e,t,r,n){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(n)>0)}Ss(e,t,r){return Lr()<=ne.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Hr(t)),this.ys.getDocumentsMatchingQuery(e,t,Kt.min(),r)}Fs(e,t,r,n){return this.ys.getDocumentsMatchingQuery(e,r,n).next(s=>(t.forEach(i=>{s=s.insert(i.key,i)}),s))}}/**
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
 */const ql="LocalStore",aU=3e8;class cU{constructor(e,t,r,n){this.persistence=e,this.Ms=t,this.serializer=n,this.xs=new ve(Ae),this.Os=new Er(s=>kl(s),Ol),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new J_(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function lU(A,e,t,r){return new cU(A,e,t,r)}function tB(A,e){return y(this,null,function*(){const t=Z(A);return yield t.persistence.runTransaction("Handle user change","readonly",r=>{let n;return t.mutationQueue.getAllMutationBatches(r).next(s=>(n=s,t.Ls(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const i=[],a=[];let c=se();for(const l of n){i.push(l.batchId);for(const h of l.mutations)c=c.add(h.key)}for(const l of s){a.push(l.batchId);for(const h of l.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(r,c).next(l=>({ks:l,removedBatchIds:i,addedBatchIds:a}))})})})}function uU(A,e){const t=Z(A);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const n=e.batch.keys(),s=t.Bs.newChangeBuffer({trackRemovals:!0});return function(a,c,l,h){const f=l.batch,p=f.keys();let C=V.resolve();return p.forEach(_=>{C=C.next(()=>h.getEntry(c,_)).next(v=>{const b=l.docVersions.get(_);he(b!==null,48541),v.version.compareTo(b)<0&&(f.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),h.addEntry(v)))})}),C.next(()=>a.mutationQueue.removeMutationBatch(c,f))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,n,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=se();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,n))})}function rB(A){const e=Z(A);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function hU(A,e){const t=Z(A),r=e.snapshotVersion;let n=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const i=t.Bs.newChangeBuffer({trackRemovals:!0});n=t.xs;const a=[];e.targetChanges.forEach((h,f)=>{const p=n.get(f);if(!p)return;a.push(t.Ti.removeMatchingKeys(s,h.removedDocuments,f).next(()=>t.Ti.addMatchingKeys(s,h.addedDocuments,f)));let C=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?C=C.withResumeToken(qe.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):h.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(h.resumeToken,r)),n=n.insert(f,C),function(v,b,x){return v.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=aU?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(p,C,h)&&a.push(t.Ti.updateTargetData(s,C))});let c=dt(),l=se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(dU(s,i,e.documentUpdates).next(h=>{c=h.qs,l=h.Qs})),!r.isEqual(z.min())){const h=t.Ti.getLastRemoteSnapshotVersion(s).next(f=>t.Ti.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return V.waitFor(a).next(()=>i.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,l)).next(()=>c)}).then(s=>(t.xs=n,s))}function dU(A,e,t){let r=se(),n=se();return t.forEach(s=>r=r.add(s)),e.getEntries(A,r).next(s=>{let i=dt();return t.forEach((a,c)=>{const l=s.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(n=n.add(a)),c.isNoDocument()&&c.version.isEqual(z.min())?(e.removeEntry(a,c.readTime),i=i.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),i=i.insert(a,c)):G(ql,"Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{qs:i,Qs:n}})}function fU(A,e){const t=Z(A);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Pl),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function gU(A,e){const t=Z(A);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let n;return t.Ti.getTargetData(r,e).next(s=>s?(n=s,V.resolve(n)):t.Ti.allocateTargetId(r).next(i=>(n=new Ft(e,i,"TargetPurposeListen",r.currentSequenceNumber),t.Ti.addTargetData(r,n).next(()=>n))))}).then(r=>{const n=t.xs.get(r.targetId);return(n===null||r.snapshotVersion.compareTo(n.snapshotVersion)>0)&&(t.xs=t.xs.insert(r.targetId,r),t.Os.set(e,r.targetId)),r})}function Vc(A,e,t){return y(this,null,function*(){const r=Z(A),n=r.xs.get(e),s=t?"readwrite":"readwrite-primary";try{t||(yield r.persistence.runTransaction("Release target",s,i=>r.persistence.referenceDelegate.removeTarget(i,n)))}catch(i){if(!un(i))throw i;G(ql,`Failed to update sequence numbers for target ${e}: ${i}`)}r.xs=r.xs.remove(e),r.Os.delete(n.target)})}function Zd(A,e,t){const r=Z(A);let n=z.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",i=>function(c,l,h){const f=Z(c),p=f.Os.get(h);return p!==void 0?V.resolve(f.xs.get(p)):f.Ti.getTargetData(l,h)}(r,i,GA(e)).next(a=>{if(a)return n=a.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(i,a.targetId).next(c=>{s=c})}).next(()=>r.Ms.getDocumentsMatchingQuery(i,e,t?n:z.min(),t?s:se())).next(a=>(pU(r,A_(e),a),{documents:a,$s:s})))}function pU(A,e,t){let r=A.Ns.get(e)||z.min();t.forEach((n,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),A.Ns.set(e,r)}class ef{constructor(){this.activeTargetIds=o_()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class mU{constructor(){this.xo=new ef,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,r){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new ef,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class BU{No(e){}shutdown(){}}/**
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
 */let ci=null;function Mc(){return ci===null?ci=function(){return 268435456+Math.round(2147483648*Math.random())}():ci++,"0x"+ci.toString(16)}/**
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
 */const ja="RestConnection",wU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class yU{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),n=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${r}/databases/${n}`,this.Go=this.databaseId.database===xc?`project_id=${r}`:`project_id=${r}&database_id=${n}`}zo(e,t,r,n,s){const i=Mc(),a=this.jo(e,t.toUriEncodedString());G(ja,`Sending RPC '${e}' ${i}:`,a,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,n,s);const{host:l}=new URL(a),h=Jt(l);return this.Jo(e,a,c,r,h).then(f=>(G(ja,`Received RPC '${e}' ${i}: `,f),f),f=>{throw Yr(ja,`RPC '${e}' ${i} failed with error: `,f,"url: ",a,"request:",r),f})}Yo(e,t,r,n,s,i){return this.zo(e,t,r,n,s)}Ho(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((n,s)=>e[s]=n),r&&r.headers.forEach((n,s)=>e[s]=n)}jo(e,t){const r=wU[e];return`${this.Ko}/v1/${t}:${r}`}terminate(){}}/**
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
 */class CU{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const Ze="WebChannelConnection";class vU extends yU{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,n,s){const i=Mc();return new Promise((a,c)=>{const l=new im;l.setWithCredentials(!0),l.listenOnce(om.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Gi.NO_ERROR:const f=l.getResponseJson();G(Ze,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),a(f);break;case Gi.TIMEOUT:G(Ze,`RPC '${e}' ${i} timed out`),c(new $(N.DEADLINE_EXCEEDED,"Request time out"));break;case Gi.HTTP_ERROR:const p=l.getStatus();if(G(Ze,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let C=l.getResponseJson();Array.isArray(C)&&(C=C[0]);const _=C==null?void 0:C.error;if(_&&_.status&&_.message){const v=function(x){const S=x.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(S)>=0?S:N.UNKNOWN}(_.status);c(new $(v,_.message))}else c(new $(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new $(N.UNAVAILABLE,"Connection failed."));break;default:q(9055,{h_:e,streamId:i,P_:l.getLastErrorCode(),T_:l.getLastError()})}}finally{G(Ze,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(n);G(Ze,`RPC '${e}' ${i} sending request:`,n),l.send(t,"POST",h,r,15)})}I_(e,t,r){const n=Mc(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=lm(),a=cm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const h=s.join("");G(Ze,`Creating RPC '${e}' stream ${n}: ${h}`,c);const f=i.createWebChannel(h,c);this.E_(f);let p=!1,C=!1;const _=new CU({Zo:b=>{C?G(Ze,`Not sending because RPC '${e}' stream ${n} is closed:`,b):(p||(G(Ze,`Opening RPC '${e}' stream ${n} transport.`),f.open(),p=!0),G(Ze,`RPC '${e}' stream ${n} sending:`,b),f.send(b))},Xo:()=>f.close()}),v=(b,x,S)=>{b.listen(x,D=>{try{S(D)}catch(k){setTimeout(()=>{throw k},0)}})};return v(f,On.EventType.OPEN,()=>{C||(G(Ze,`RPC '${e}' stream ${n} transport opened.`),_.__())}),v(f,On.EventType.CLOSE,()=>{C||(C=!0,G(Ze,`RPC '${e}' stream ${n} transport closed`),_.u_(),this.d_(f))}),v(f,On.EventType.ERROR,b=>{C||(C=!0,Yr(Ze,`RPC '${e}' stream ${n} transport errored. Name:`,b.name,"Message:",b.message),_.u_(new $(N.UNAVAILABLE,"The operation could not be completed")))}),v(f,On.EventType.MESSAGE,b=>{var x;if(!C){const S=b.data[0];he(!!S,16349);const D=S,k=(D==null?void 0:D.error)||((x=D[0])===null||x===void 0?void 0:x.error);if(k){G(Ze,`RPC '${e}' stream ${n} received error:`,k);const O=k.status;let H=function(w){const Q=Re[w];if(Q!==void 0)return jm(Q)}(O),U=k.message;H===void 0&&(H=N.INTERNAL,U="Unknown error status: "+O+" with message "+k.message),C=!0,_.u_(new $(H,U)),f.close()}else G(Ze,`RPC '${e}' stream ${n} received:`,S),_.c_(S)}}),v(a,am.STAT_EVENT,b=>{b.stat===Fc.PROXY?G(Ze,`RPC '${e}' stream ${n} detected buffering proxy`):b.stat===Fc.NOPROXY&&G(Ze,`RPC '${e}' stream ${n} detected no buffering proxy`)}),setTimeout(()=>{_.a_()},0),_}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}function Ga(){return typeof document!="undefined"?document:null}/**
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
 */function Wo(A){return new U_(A,!0)}/**
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
 */class nB{constructor(e,t,r=1e3,n=1.5,s=6e4){this.xi=e,this.timerId=t,this.A_=r,this.R_=n,this.V_=s,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),n=Math.max(0,t-r);n>0&&G("ExponentialBackoff",`Backing off for ${n} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,n,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const rf="PersistentStream";class sB{constructor(e,t,r,n,s,i,a,c){this.xi=e,this.S_=r,this.D_=n,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new nB(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}stop(){return y(this,null,function*(){this.O_()&&(yield this.close(0))})}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}q_(){return y(this,null,function*(){if(this.N_())return this.close(0)})}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}close(e,t){return y(this,null,function*(){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===N.RESOURCE_EXHAUSTED?(ht(t.toString()),ht("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,yield this.listener.i_(t)})}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,n])=>{this.v_===t&&this.z_(r,n)},r=>{e(()=>{const n=new $(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(n)})})}z_(e,t){const r=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(n=>{r(()=>this.j_(n))}),this.stream.onMessage(n=>{r(()=>++this.M_==1?this.J_(n):this.onNext(n))})}B_(){this.state=5,this.x_.y_(()=>y(this,null,function*(){this.state=0,this.start()}))}j_(e){return G(rf,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(G(rf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EU extends sB{constructor(e,t,r,n,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,n,i),this.serializer=s}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=F_(this.serializer,e),r=function(s){if(!("targetChange"in s))return z.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?z.min():i.readTime?$A(i.readTime):z.min()}(e);return this.listener.Y_(t,r)}Z_(e){const t={};t.database=Nc(this.serializer),t.addTarget=function(s,i){let a;const c=i.target;if(a=Pc(c)?{documents:S_(s,c)}:{query:R_(s,c).gt},a.targetId=i.targetId,i.resumeToken.approximateByteSize()>0){a.resumeToken=Wm(s,i.resumeToken);const l=Hc(s,i.expectedCount);l!==null&&(a.expectedCount=l)}else if(i.snapshotVersion.compareTo(z.min())>0){a.readTime=po(s,i.snapshotVersion.toTimestamp());const l=Hc(s,i.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=P_(this.serializer,e);r&&(t.labels=r),this.Q_(t)}X_(e){const t={};t.database=Nc(this.serializer),t.removeTarget=e,this.Q_(t)}}class IU extends sB{constructor(e,t,r,n,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,n,i),this.serializer=s}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return he(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){he(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=x_(e.writeResults,e.commitTime),r=$A(e.commitTime);return this.listener.ra(r,t)}ia(){const e={};e.database=Nc(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>T_(this.serializer,r))};this.Q_(t)}}/**
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
 */class _U{}class UU extends _U{constructor(e,t,r,n){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=n,this.sa=!1}oa(){if(this.sa)throw new $(N.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,r,n){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.zo(e,kc(t,r),n,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new $(N.UNKNOWN,s.toString())})}Yo(e,t,r,n,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Yo(e,kc(t,r),n,i,a,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new $(N.UNKNOWN,i.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class QU{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(ht(t),this.ua=!1):G("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const wr="RemoteStore";class bU{constructor(e,t,r,n,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=s,this.Ra.No(i=>{r.enqueueAndForget(()=>y(this,null,function*(){_r(this)&&(G(wr,"Restarting streams for network reachability change."),yield function(c){return y(this,null,function*(){const l=Z(c);l.da.add(4),yield Ds(l),l.Va.set("Unknown"),l.da.delete(4),yield Xo(l)})}(this))}))}),this.Va=new QU(r,n)}}function Xo(A){return y(this,null,function*(){if(_r(A))for(const e of A.Aa)yield e(!0)})}function Ds(A){return y(this,null,function*(){for(const e of A.Aa)yield e(!1)})}function iB(A,e){const t=Z(A);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),Zl(t)?Yl(t):dn(t).N_()&&Jl(t,e))}function zl(A,e){const t=Z(A),r=dn(t);t.Ea.delete(e),r.N_()&&oB(t,e),t.Ea.size===0&&(r.N_()?r.k_():_r(t)&&t.Va.set("Unknown"))}function Jl(A,e){if(A.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(z.min())>0){const t=A.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}dn(A).Z_(e)}function oB(A,e){A.ma.Ke(e),dn(A).X_(e)}function Yl(A){A.ma=new v_({getRemoteKeysForTarget:e=>A.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>A.Ea.get(e)||null,Pt:()=>A.datastore.serializer.databaseId}),dn(A).start(),A.Va.ca()}function Zl(A){return _r(A)&&!dn(A).O_()&&A.Ea.size>0}function _r(A){return Z(A).da.size===0}function aB(A){A.ma=void 0}function FU(A){return y(this,null,function*(){A.Va.set("Online")})}function TU(A){return y(this,null,function*(){A.Ea.forEach((e,t)=>{Jl(A,e)})})}function xU(A,e){return y(this,null,function*(){aB(A),Zl(A)?(A.Va.Pa(e),Yl(A)):A.Va.set("Unknown")})}function SU(A,e,t){return y(this,null,function*(){if(A.Va.set("Online"),e instanceof $m&&e.state===2&&e.cause)try{yield function(n,s){return y(this,null,function*(){const i=s.cause;for(const a of s.targetIds)n.Ea.has(a)&&(yield n.remoteSyncer.rejectListen(a,i),n.Ea.delete(a),n.ma.removeTarget(a))})}(A,e)}catch(r){G(wr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),yield Bo(A,r)}else if(e instanceof qi?A.ma.Xe(e):e instanceof Gm?A.ma.ot(e):A.ma.nt(e),!t.isEqual(z.min()))try{const r=yield rB(A.localStore);t.compareTo(r)>=0&&(yield function(s,i){const a=s.ma.It(i);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const h=s.Ea.get(l);h&&s.Ea.set(l,h.withResumeToken(c.resumeToken,i))}}),a.targetMismatches.forEach((c,l)=>{const h=s.Ea.get(c);if(!h)return;s.Ea.set(c,h.withResumeToken(qe.EMPTY_BYTE_STRING,h.snapshotVersion)),oB(s,c);const f=new Ft(h.target,c,l,h.sequenceNumber);Jl(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(A,t))}catch(r){G(wr,"Failed to raise snapshot:",r),yield Bo(A,r)}})}function Bo(A,e,t){return y(this,null,function*(){if(!un(e))throw e;A.da.add(1),yield Ds(A),A.Va.set("Offline"),t||(t=()=>rB(A.localStore)),A.asyncQueue.enqueueRetryable(()=>y(null,null,function*(){G(wr,"Retrying IndexedDB access"),yield t(),A.da.delete(1),yield Xo(A)}))})}function cB(A,e){return e().catch(t=>Bo(A,t,e))}function qo(A){return y(this,null,function*(){const e=Z(A),t=Wt(e);let r=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Pl;for(;RU(e);)try{const n=yield fU(e.localStore,r);if(n===null){e.Ia.length===0&&t.k_();break}r=n.batchId,DU(e,n)}catch(n){yield Bo(e,n)}lB(e)&&uB(e)})}function RU(A){return _r(A)&&A.Ia.length<10}function DU(A,e){A.Ia.push(e);const t=Wt(A);t.N_()&&t.ea&&t.ta(e.mutations)}function lB(A){return _r(A)&&!Wt(A).O_()&&A.Ia.length>0}function uB(A){Wt(A).start()}function PU(A){return y(this,null,function*(){Wt(A).ia()})}function LU(A){return y(this,null,function*(){const e=Wt(A);for(const t of A.Ia)e.ta(t.mutations)})}function HU(A,e,t){return y(this,null,function*(){const r=A.Ia.shift(),n=Kl.from(r,e,t);yield cB(A,()=>A.remoteSyncer.applySuccessfulWrite(n)),yield qo(A)})}function kU(A,e){return y(this,null,function*(){e&&Wt(A).ea&&(yield function(r,n){return y(this,null,function*(){if(function(i){return y_(i)&&i!==N.ABORTED}(n.code)){const s=r.Ia.shift();Wt(r).L_(),yield cB(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,n)),yield qo(r)}})}(A,e)),lB(A)&&uB(A)})}function nf(A,e){return y(this,null,function*(){const t=Z(A);t.asyncQueue.verifyOperationInProgress(),G(wr,"RemoteStore received new credentials");const r=_r(t);t.da.add(3),yield Ds(t),r&&t.Va.set("Unknown"),yield t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),yield Xo(t)})}function OU(A,e){return y(this,null,function*(){const t=Z(A);e?(t.da.delete(2),yield Xo(t)):e||(t.da.add(2),yield Ds(t),t.Va.set("Unknown"))})}function dn(A){return A.fa||(A.fa=function(t,r,n){const s=Z(t);return s.oa(),new EU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(A.datastore,A.asyncQueue,{e_:FU.bind(null,A),n_:TU.bind(null,A),i_:xU.bind(null,A),Y_:SU.bind(null,A)}),A.Aa.push(e=>y(null,null,function*(){e?(A.fa.L_(),Zl(A)?Yl(A):A.Va.set("Unknown")):(yield A.fa.stop(),aB(A))}))),A.fa}function Wt(A){return A.ga||(A.ga=function(t,r,n){const s=Z(t);return s.oa(),new IU(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,n)}(A.datastore,A.asyncQueue,{e_:()=>Promise.resolve(),n_:PU.bind(null,A),i_:kU.bind(null,A),na:LU.bind(null,A),ra:HU.bind(null,A)}),A.Aa.push(e=>y(null,null,function*(){e?(A.ga.L_(),yield qo(A)):(yield A.ga.stop(),A.Ia.length>0&&(G(wr,`Stopping write stream with ${A.Ia.length} pending writes`),A.Ia=[]))}))),A.ga}/**
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
 */class eu{constructor(e,t,r,n,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=n,this.removalCallback=s,this.deferred=new ot,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(i=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,n,s){const i=Date.now()+r,a=new eu(e,t,i,n,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new $(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Au(A,e){if(ht("AsyncQueue",`${e}: ${A}`),un(A))return new $(N.UNAVAILABLE,`${e}: ${A}`);throw A}/**
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
 */class qr{static emptySet(e){return new qr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||W.comparator(t.key,r.key):(t,r)=>W.comparator(t.key,r.key),this.keyedMap=Nn(),this.sortedSet=new ve(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const n=t.getNext().key,s=r.getNext().key;if(!n.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class sf{constructor(){this.pa=new ve(W.comparator)}track(e){const t=e.doc.key,r=this.pa.get(t);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(t,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(t):e.type===1&&r.type===2?this.pa=this.pa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):q(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,r)=>{e.push(r)}),e}}class rn{constructor(e,t,r,n,s,i,a,c,l){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=n,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,r,n,s){const i=[];return t.forEach(a=>{i.push({type:0,doc:a})}),new rn(e,t,qr.emptySet(t),i,r,n,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Mo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let n=0;n<t.length;n++)if(t[n].type!==r[n].type||!t[n].doc.isEqual(r[n].doc))return!1;return!0}}/**
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
 */class NU{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class VU{constructor(){this.queries=of(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const n=Z(t),s=n.queries;n.queries=of(),s.forEach((i,a)=>{for(const c of a.Sa)c.onError(r)})})(this,new $(N.ABORTED,"Firestore shutting down"))}}function of(){return new Er(A=>Sm(A),Mo)}function hB(A,e){return y(this,null,function*(){const t=Z(A);let r=3;const n=e.query;let s=t.queries.get(n);s?!s.Da()&&e.va()&&(r=2):(s=new NU,r=e.va()?0:1);try{switch(r){case 0:s.ba=yield t.onListen(n,!0);break;case 1:s.ba=yield t.onListen(n,!1);break;case 2:yield t.onFirstRemoteStoreListen(n)}}catch(i){const a=Au(i,`Initialization of query '${Hr(e.query)}' failed`);return void e.onError(a)}t.queries.set(n,s),s.Sa.push(e),e.Fa(t.onlineState),s.ba&&e.Ma(s.ba)&&tu(t)})}function dB(A,e){return y(this,null,function*(){const t=Z(A),r=e.query;let n=3;const s=t.queries.get(r);if(s){const i=s.Sa.indexOf(e);i>=0&&(s.Sa.splice(i,1),s.Sa.length===0?n=e.va()?0:1:!s.Da()&&e.va()&&(n=2))}switch(n){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}})}function MU(A,e){const t=Z(A);let r=!1;for(const n of e){const s=n.query,i=t.queries.get(s);if(i){for(const a of i.Sa)a.Ma(n)&&(r=!0);i.ba=n}}r&&tu(t)}function KU(A,e,t){const r=Z(A),n=r.queries.get(e);if(n)for(const s of n.Sa)s.onError(t);r.queries.delete(e)}function tu(A){A.Ca.forEach(e=>{e.next()})}var Kc,af;(af=Kc||(Kc={})).xa="default",af.Cache="cache";class fB{constructor(e,t,r){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const n of e.docChanges)n.type!==3&&r.push(n);e=new rn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const r=t!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=rn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==Kc.Cache}}/**
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
 */class gB{constructor(e){this.key=e}}class pB{constructor(e){this.key=e}}class jU{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=se(),this.mutatedKeys=se(),this.Za=Rm(e),this.Xa=new qr(this.Za)}get eu(){return this.Ha}tu(e,t){const r=t?t.nu:new sf,n=t?t.Xa:this.Xa;let s=t?t.mutatedKeys:this.mutatedKeys,i=n,a=!1;const c=this.query.limitType==="F"&&n.size===this.query.limit?n.last():null,l=this.query.limitType==="L"&&n.size===this.query.limit?n.first():null;if(e.inorderTraversal((h,f)=>{const p=n.get(h),C=Ko(this.query,f)?f:null,_=!!p&&this.mutatedKeys.has(p.key),v=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let b=!1;p&&C?p.data.isEqual(C.data)?_!==v&&(r.track({type:3,doc:C}),b=!0):this.ru(p,C)||(r.track({type:2,doc:C}),b=!0,(c&&this.Za(C,c)>0||l&&this.Za(C,l)<0)&&(a=!0)):!p&&C?(r.track({type:0,doc:C}),b=!0):p&&!C&&(r.track({type:1,doc:p}),b=!0,(c||l)&&(a=!0)),b&&(C?(i=i.add(C),s=v?s.add(h):s.delete(h)):(i=i.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;i.size>this.query.limit;){const h=this.query.limitType==="F"?i.last():i.first();i=i.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Xa:i,nu:r,Cs:a,mutatedKeys:s}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,n){const s=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const i=e.nu.wa();i.sort((h,f)=>function(C,_){const v=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return q(20277,{Vt:b})}};return v(C)-v(_)}(h.type,f.type)||this.Za(h.doc,f.doc)),this.iu(r),n=n!=null&&n;const a=t&&!n?this.su():[],c=this.Ya.size===0&&this.current&&!n?1:0,l=c!==this.Ja;return this.Ja=c,i.length!==0||l?{snapshot:new rn(this.query,e.Xa,s,i,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:a}:{ou:a}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new sf,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=se(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const t=[];return e.forEach(r=>{this.Ya.has(r)||t.push(new pB(r))}),this.Ya.forEach(r=>{e.has(r)||t.push(new gB(r))}),t}au(e){this.Ha=e.$s,this.Ya=se();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return rn.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const ru="SyncEngine";class GU{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class $U{constructor(e){this.key=e,this.cu=!1}}class WU{constructor(e,t,r,n,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=n,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.lu={},this.hu=new Er(a=>Sm(a),Mo),this.Pu=new Map,this.Tu=new Set,this.Iu=new ve(W.comparator),this.Eu=new Map,this.du=new $l,this.Au={},this.Ru=new Map,this.Vu=tn.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}function XU(A,e,t=!0){return y(this,null,function*(){const r=vB(A);let n;const s=r.hu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),n=s.view.uu()):n=yield mB(r,e,t,!0),n})}function qU(A,e){return y(this,null,function*(){const t=vB(A);yield mB(t,e,!0,!1)})}function mB(A,e,t,r){return y(this,null,function*(){const n=yield gU(A.localStore,GA(e)),s=n.targetId,i=A.sharedClientState.addLocalQueryTarget(s,t);let a;return r&&(a=yield zU(A,e,s,i==="current",n.resumeToken)),A.isPrimaryClient&&t&&iB(A.remoteStore,n),a})}function zU(A,e,t,r,n){return y(this,null,function*(){A.fu=(f,p,C)=>function(v,b,x,S){return y(this,null,function*(){let D=b.view.tu(x);D.Cs&&(D=yield Zd(v.localStore,b.query,!1).then(({documents:U})=>b.view.tu(U,D)));const k=S&&S.targetChanges.get(b.targetId),O=S&&S.targetMismatches.get(b.targetId)!=null,H=b.view.applyChanges(D,v.isPrimaryClient,k,O);return lf(v,b.targetId,H.ou),H.snapshot})}(A,f,p,C);const s=yield Zd(A.localStore,e,!0),i=new jU(e,s.$s),a=i.tu(s.documents),c=Rs.createSynthesizedTargetChangeForCurrentChange(t,r&&A.onlineState!=="Offline",n),l=i.applyChanges(a,A.isPrimaryClient,c);lf(A,t,l.ou);const h=new GU(e,t,i);return A.hu.set(e,h),A.Pu.has(t)?A.Pu.get(t).push(e):A.Pu.set(t,[e]),l.snapshot})}function JU(A,e,t){return y(this,null,function*(){const r=Z(A),n=r.hu.get(e),s=r.Pu.get(n.targetId);if(s.length>1)return r.Pu.set(n.targetId,s.filter(i=>!Mo(i,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(n.targetId),r.sharedClientState.isActiveQueryTarget(n.targetId)||(yield Vc(r.localStore,n.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(n.targetId),t&&zl(r.remoteStore,n.targetId),jc(r,n.targetId)}).catch(ln))):(jc(r,n.targetId),yield Vc(r.localStore,n.targetId,!0))})}function YU(A,e){return y(this,null,function*(){const t=Z(A),r=t.hu.get(e),n=t.Pu.get(r.targetId);t.isPrimaryClient&&n.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),zl(t.remoteStore,r.targetId))})}function ZU(A,e,t){return y(this,null,function*(){const r=iQ(A);try{const n=yield function(i,a){const c=Z(i),l=Le.now(),h=a.reduce((C,_)=>C.add(_.key),se());let f,p;return c.persistence.runTransaction("Locally write mutations","readwrite",C=>{let _=dt(),v=se();return c.Bs.getEntries(C,h).next(b=>{_=b,_.forEach((x,S)=>{S.isValidDocument()||(v=v.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(C,_)).next(b=>{f=b;const x=[];for(const S of a){const D=g_(S,f.get(S.key).overlayedDocument);D!=null&&x.push(new Ir(S.key,D,Im(D.value.mapValue),DA.exists(!0)))}return c.mutationQueue.addMutationBatch(C,l,x,a)}).next(b=>{p=b;const x=b.applyToLocalDocumentSet(f,v);return c.documentOverlayCache.saveOverlays(C,b.batchId,x)})}).then(()=>({batchId:p.batchId,changes:Pm(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(n.batchId),function(i,a,c){let l=i.Au[i.currentUser.toKey()];l||(l=new ve(Ae)),l=l.insert(a,c),i.Au[i.currentUser.toKey()]=l}(r,n.batchId,t),yield Ps(r,n.changes),yield qo(r.remoteStore)}catch(n){const s=Au(n,"Failed to persist write");t.reject(s)}})}function BB(A,e){return y(this,null,function*(){const t=Z(A);try{const r=yield hU(t.localStore,e);e.targetChanges.forEach((n,s)=>{const i=t.Eu.get(s);i&&(he(n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size<=1,22616),n.addedDocuments.size>0?i.cu=!0:n.modifiedDocuments.size>0?he(i.cu,14607):n.removedDocuments.size>0&&(he(i.cu,42227),i.cu=!1))}),yield Ps(t,r,e)}catch(r){yield ln(r)}})}function cf(A,e,t){const r=Z(A);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const n=[];r.hu.forEach((s,i)=>{const a=i.view.Fa(e);a.snapshot&&n.push(a.snapshot)}),function(i,a){const c=Z(i);c.onlineState=a;let l=!1;c.queries.forEach((h,f)=>{for(const p of f.Sa)p.Fa(a)&&(l=!0)}),l&&tu(c)}(r.eventManager,e),n.length&&r.lu.Y_(n),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}function eQ(A,e,t){return y(this,null,function*(){const r=Z(A);r.sharedClientState.updateQueryState(e,"rejected",t);const n=r.Eu.get(e),s=n&&n.key;if(s){let i=new ve(W.comparator);i=i.insert(s,rA.newNoDocument(s,z.min()));const a=se().add(s),c=new $o(z.min(),new Map,new ve(Ae),i,a);yield BB(r,c),r.Iu=r.Iu.remove(s),r.Eu.delete(e),nu(r)}else yield Vc(r.localStore,e,!1).then(()=>jc(r,e,t)).catch(ln)})}function AQ(A,e){return y(this,null,function*(){const t=Z(A),r=e.batch.batchId;try{const n=yield uU(t.localStore,e);yB(t,r,null),wB(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),yield Ps(t,n)}catch(n){yield ln(n)}})}function tQ(A,e,t){return y(this,null,function*(){const r=Z(A);try{const n=yield function(i,a){const c=Z(i);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let h;return c.mutationQueue.lookupMutationBatch(l,a).next(f=>(he(f!==null,37113),h=f.keys(),c.mutationQueue.removeMutationBatch(l,f))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,h,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,h)).next(()=>c.localDocuments.getDocuments(l,h))})}(r.localStore,e);yB(r,e,t),wB(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),yield Ps(r,n)}catch(n){yield ln(n)}})}function wB(A,e){(A.Ru.get(e)||[]).forEach(t=>{t.resolve()}),A.Ru.delete(e)}function yB(A,e,t){const r=Z(A);let n=r.Au[r.currentUser.toKey()];if(n){const s=n.get(e);s&&(t?s.reject(t):s.resolve(),n=n.remove(e)),r.Au[r.currentUser.toKey()]=n}}function jc(A,e,t=null){A.sharedClientState.removeLocalQueryTarget(e);for(const r of A.Pu.get(e))A.hu.delete(r),t&&A.lu.gu(r,t);A.Pu.delete(e),A.isPrimaryClient&&A.du.Hr(e).forEach(r=>{A.du.containsKey(r)||CB(A,r)})}function CB(A,e){A.Tu.delete(e.path.canonicalString());const t=A.Iu.get(e);t!==null&&(zl(A.remoteStore,t),A.Iu=A.Iu.remove(e),A.Eu.delete(t),nu(A))}function lf(A,e,t){for(const r of t)r instanceof gB?(A.du.addReference(r.key,e),rQ(A,r)):r instanceof pB?(G(ru,"Document no longer in limbo: "+r.key),A.du.removeReference(r.key,e),A.du.containsKey(r.key)||CB(A,r.key)):q(19791,{pu:r})}function rQ(A,e){const t=e.key,r=t.path.canonicalString();A.Iu.get(t)||A.Tu.has(r)||(G(ru,"New document in limbo: "+t),A.Tu.add(r),nu(A))}function nu(A){for(;A.Tu.size>0&&A.Iu.size<A.maxConcurrentLimboResolutions;){const e=A.Tu.values().next().value;A.Tu.delete(e);const t=new W(we.fromString(e)),r=A.Vu.next();A.Eu.set(r,new $U(t)),A.Iu=A.Iu.insert(t,r),iB(A.remoteStore,new Ft(GA(Nl(t.path)),r,"TargetPurposeLimboResolution",Oo.le))}}function Ps(A,e,t){return y(this,null,function*(){const r=Z(A),n=[],s=[],i=[];r.hu.isEmpty()||(r.hu.forEach((a,c)=>{i.push(r.fu(c,e,t).then(l=>{var h;if((l||t)&&r.isPrimaryClient){const f=l?!l.fromCache:(h=t==null?void 0:t.targetChanges.get(c.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(l){n.push(l);const f=Xl.Rs(c.targetId,l);s.push(f)}}))}),yield Promise.all(i),r.lu.Y_(n),yield function(c,l){return y(this,null,function*(){const h=Z(c);try{yield h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>V.forEach(l,p=>V.forEach(p.ds,C=>h.persistence.referenceDelegate.addReference(f,p.targetId,C)).next(()=>V.forEach(p.As,C=>h.persistence.referenceDelegate.removeReference(f,p.targetId,C)))))}catch(f){if(!un(f))throw f;G(ql,"Failed to update sequence numbers: "+f)}for(const f of l){const p=f.targetId;if(!f.fromCache){const C=h.xs.get(p),_=C.snapshotVersion,v=C.withLastLimboFreeSnapshotVersion(_);h.xs=h.xs.insert(p,v)}}})}(r.localStore,s))})}function nQ(A,e){return y(this,null,function*(){const t=Z(A);if(!t.currentUser.isEqual(e)){G(ru,"User change. New user:",e.toKey());const r=yield tB(t.localStore,e);t.currentUser=e,function(s,i){s.Ru.forEach(a=>{a.forEach(c=>{c.reject(new $(N.CANCELLED,i))})}),s.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),yield Ps(t,r.ks)}})}function sQ(A,e){const t=Z(A),r=t.Eu.get(e);if(r&&r.cu)return se().add(r.key);{let n=se();const s=t.Pu.get(e);if(!s)return n;for(const i of s){const a=t.hu.get(i);n=n.unionWith(a.view.eu)}return n}}function vB(A){const e=Z(A);return e.remoteStore.remoteSyncer.applyRemoteEvent=BB.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sQ.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eQ.bind(null,e),e.lu.Y_=MU.bind(null,e.eventManager),e.lu.gu=KU.bind(null,e.eventManager),e}function iQ(A){const e=Z(A);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AQ.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=tQ.bind(null,e),e}class wo{constructor(){this.kind="memory",this.synchronizeTabs=!1}initialize(e){return y(this,null,function*(){this.serializer=Wo(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),yield this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)})}vu(e,t){return null}Cu(e,t){return null}Du(e){return lU(this.persistence,new oU,e.initialUser,this.serializer)}Su(e){return new AB(Wl.fi,this.serializer)}bu(e){return new mU}terminate(){return y(this,null,function*(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),yield this.persistence.shutdown()})}}wo.provider={build:()=>new wo};class oQ extends wo{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){he(this.persistence.referenceDelegate instanceof mo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $_(r,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?lA.withCacheSize(this.cacheSizeBytes):lA.DEFAULT;return new AB(r=>mo.fi(r,t),this.serializer)}}class Gc{initialize(e,t){return y(this,null,function*(){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nQ.bind(null,this.syncEngine),yield OU(this.remoteStore,this.syncEngine.isPrimaryClient))})}createEventManager(e){return function(){return new VU}()}createDatastore(e){const t=Wo(e.databaseInfo.databaseId),r=function(s){return new vU(s)}(e.databaseInfo);return function(s,i,a,c){return new UU(s,i,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,n,s,i,a){return new bU(r,n,s,i,a)}(this.localStore,this.datastore,e.asyncQueue,t=>cf(this.syncEngine,t,0),function(){return tf.C()?new tf:new BU}())}createSyncEngine(e,t){return function(n,s,i,a,c,l,h){const f=new WU(n,s,i,a,c,l);return h&&(f.mu=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return y(this,null,function*(){var e,t;yield function(n){return y(this,null,function*(){const s=Z(n);G(wr,"RemoteStore shutting down."),s.da.add(5),yield Ds(s),s.Ra.shutdown(),s.Va.set("Unknown")})}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()})}}Gc.provider={build:()=>new Gc};/**
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
 */class EB{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):ht("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Xt="FirestoreClient";class aQ{constructor(e,t,r,n,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=n,this.user=AA.UNAUTHENTICATED,this.clientId=fm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,i=>y(this,null,function*(){G(Xt,"Received user=",i.uid),yield this.authCredentialListener(i),this.user=i})),this.appCheckCredentials.start(r,i=>(G(Xt,"Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ot;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(()=>y(this,null,function*(){try{this._onlineComponents&&(yield this._onlineComponents.terminate()),this._offlineComponents&&(yield this._offlineComponents.terminate()),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Au(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}function $a(A,e){return y(this,null,function*(){A.asyncQueue.verifyOperationInProgress(),G(Xt,"Initializing OfflineComponentProvider");const t=A.configuration;yield e.initialize(t);let r=t.initialUser;A.setCredentialChangeListener(n=>y(null,null,function*(){r.isEqual(n)||(yield tB(e.localStore,n),r=n)})),e.persistence.setDatabaseDeletedListener(()=>A.terminate()),A._offlineComponents=e})}function uf(A,e){return y(this,null,function*(){A.asyncQueue.verifyOperationInProgress();const t=yield cQ(A);G(Xt,"Initializing OnlineComponentProvider"),yield e.initialize(t,A.configuration),A.setCredentialChangeListener(r=>nf(e.remoteStore,r)),A.setAppCheckTokenChangeListener((r,n)=>nf(e.remoteStore,n)),A._onlineComponents=e})}function cQ(A){return y(this,null,function*(){if(!A._offlineComponents)if(A._uninitializedComponentsProvider){G(Xt,"Using user provided OfflineComponentProvider");try{yield $a(A,A._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(n){return n.name==="FirebaseError"?n.code===N.FAILED_PRECONDITION||n.code===N.UNIMPLEMENTED:!(typeof DOMException!="undefined"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}(t))throw t;Yr("Error using user provided cache. Falling back to memory cache: "+t),yield $a(A,new wo)}}else G(Xt,"Using default OfflineComponentProvider"),yield $a(A,new oQ(void 0));return A._offlineComponents})}function IB(A){return y(this,null,function*(){return A._onlineComponents||(A._uninitializedComponentsProvider?(G(Xt,"Using user provided OnlineComponentProvider"),yield uf(A,A._uninitializedComponentsProvider._online)):(G(Xt,"Using default OnlineComponentProvider"),yield uf(A,new Gc))),A._onlineComponents})}function lQ(A){return IB(A).then(e=>e.syncEngine)}function _B(A){return y(this,null,function*(){const e=yield IB(A),t=e.eventManager;return t.onListen=XU.bind(null,e.syncEngine),t.onUnlisten=JU.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=qU.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=YU.bind(null,e.syncEngine),t})}function uQ(A,e,t={}){const r=new ot;return A.asyncQueue.enqueueAndForget(()=>y(null,null,function*(){return function(s,i,a,c,l){const h=new EB({next:p=>{h.xu(),i.enqueueAndForget(()=>dB(s,f));const C=p.docs.has(a);!C&&p.fromCache?l.reject(new $(N.UNAVAILABLE,"Failed to get document because the client is offline.")):C&&p.fromCache&&c&&c.source==="server"?l.reject(new $(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(p)},error:p=>l.reject(p)}),f=new fB(Nl(a.path),h,{includeMetadataChanges:!0,Qa:!0});return hB(s,f)}(yield _B(A),A.asyncQueue,e,t,r)})),r.promise}function hQ(A,e,t={}){const r=new ot;return A.asyncQueue.enqueueAndForget(()=>y(null,null,function*(){return function(s,i,a,c,l){const h=new EB({next:p=>{h.xu(),i.enqueueAndForget(()=>dB(s,f)),p.fromCache&&c.source==="server"?l.reject(new $(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(p)},error:p=>l.reject(p)}),f=new fB(a,h,{includeMetadataChanges:!0,Qa:!0});return hB(s,f)}(yield _B(A),A.asyncQueue,e,t,r)})),r.promise}/**
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
 */function UB(A){const e={};return A.timeoutSeconds!==void 0&&(e.timeoutSeconds=A.timeoutSeconds),e}/**
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
 */function QB(A,e,t){if(!t)throw new $(N.INVALID_ARGUMENT,`Function ${A}() cannot be called with an empty ${e}.`)}function dQ(A,e,t,r){if(e===!0&&r===!0)throw new $(N.INVALID_ARGUMENT,`${A} and ${t} cannot be used together.`)}function df(A){if(!W.isDocumentKey(A))throw new $(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${A} has ${A.length}.`)}function ff(A){if(W.isDocumentKey(A))throw new $(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${A} has ${A.length}.`)}function zo(A){if(A===void 0)return"undefined";if(A===null)return"null";if(typeof A=="string")return A.length>20&&(A=`${A.substring(0,20)}...`),JSON.stringify(A);if(typeof A=="number"||typeof A=="boolean")return""+A;if(typeof A=="object"){if(A instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(A);return e?`a custom ${e} object`:"an object"}}return typeof A=="function"?"a function":q(12329,{type:typeof A})}function ft(A,e){if("_delegate"in A&&(A=A._delegate),!(A instanceof e)){if(e.name===A.constructor.name)throw new $(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=zo(A);throw new $(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return A}function fQ(A,e){if(e<=0)throw new $(N.INVALID_ARGUMENT,`Function ${A}() requires a positive number, but it was: ${e}.`)}/**
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
 */const bB="firestore.googleapis.com",gf=!0;class pf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new $(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=bB,this.ssl=gf}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:gf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=eB;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<j_)throw new $(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}dQ("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=UB((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new $(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,n){return r.timeoutSeconds===n.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jo{constructor(e,t,r,n){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new $(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new $(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yI;switch(r.type){case"firstParty":return new II(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new $(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}_restart(){return y(this,null,function*(){this._terminateTask==="notTerminated"?yield this._terminate():this._terminateTask="notTerminated"})}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=hf.get(t);r&&(G("ComponentProvider","Removing Datastore"),hf.delete(t),r.terminate())}(this),Promise.resolve()}}function gQ(A,e,t,r={}){var n;A=ft(A,Jo);const s=Jt(e),i=A._getSettings(),a=Object.assign(Object.assign({},i),{emulatorOptions:A._getEmulatorOptions()}),c=`${e}:${t}`;s&&(Bl(`https://${c}`),wl("Firestore",!0)),i.host!==bB&&i.host!==c&&Yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:c,ssl:s,emulatorOptions:r});if(!fr(l,a)&&(A._setSettings(l),r.mockUserToken)){let h,f;if(typeof r.mockUserToken=="string")h=r.mockUserToken,f=AA.MOCK_USER;else{h=Cp(r.mockUserToken,(n=A._app)===null||n===void 0?void 0:n.options.projectId);const p=r.mockUserToken.sub||r.mockUserToken.user_id;if(!p)throw new $(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new AA(p)}A._authCredentials=new CI(new hm(h,f))}}/**
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
 */class Yt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Yt(this.firestore,e,this._query)}}class dA{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ht(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dA(this.firestore,e,this._key)}}class Ht extends Yt{constructor(e,t,r){super(e,t,Nl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dA(this.firestore,null,new W(e))}withConverter(e){return new Ht(this.firestore,e,this._path)}}function qt(A,e,...t){if(A=He(A),QB("collection","path",e),A instanceof Jo){const r=we.fromString(e,...t);return ff(r),new Ht(A,null,r)}{if(!(A instanceof dA||A instanceof Ht))throw new $(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=A._path.child(we.fromString(e,...t));return ff(r),new Ht(A.firestore,null,r)}}function sA(A,e,...t){if(A=He(A),arguments.length===1&&(e=fm.newId()),QB("doc","path",e),A instanceof Jo){const r=we.fromString(e,...t);return df(r),new dA(A,null,new W(r))}{if(!(A instanceof dA||A instanceof Ht))throw new $(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=A._path.child(we.fromString(e,...t));return df(r),new dA(A.firestore,A instanceof Ht?A.converter:null,new W(r))}}/**
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
 */const mf="AsyncQueue";class Bf{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new nB(this,"async_queue_retry"),this.rc=()=>{const r=Ga();r&&G(mf,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const t=Ga();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=Ga();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new ot;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}ac(){return y(this,null,function*(){if(this.Ju.length!==0){try{yield this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!un(e))throw e;G(mf,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}})}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,ht("INTERNAL UNHANDLED ERROR: ",wf(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=t,t}enqueueAfterDelay(e,t,r){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const n=eu.createAndSchedule(this,e,t,r,s=>this.uc(s));return this.Zu.push(n),n}oc(){this.Xu&&q(47125,{cc:wf(this.Xu)})}verifyOperationInProgress(){}lc(){return y(this,null,function*(){let e;do e=this.sc,yield e;while(e!==this.sc)})}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function wf(A){let e=A.message||"";return A.stack&&(e=A.stack.includes(A.message)?A.stack:A.message+`
`+A.stack),e}class fn extends Jo{constructor(e,t,r,n){super(e,t,r,n),this.type="firestore",this._queue=new Bf,this._persistenceKey=(n==null?void 0:n.name)||"[DEFAULT]"}_terminate(){return y(this,null,function*(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Bf(e),this._firestoreClient=void 0,yield e}})}}function pQ(A,e){const t=typeof A=="object"?A:vl(),r=typeof A=="string"?A:e,n=Po(t,"firestore").getImmediate({identifier:r});if(!n._initialized){const s=Bp("firestore");s&&gQ(n,...s)}return n}function su(A){if(A._terminated)throw new $(N.FAILED_PRECONDITION,"The client has already been terminated.");return A._firestoreClient||mQ(A),A._firestoreClient}function mQ(A){var e,t,r;const n=A._freezeSettings(),s=function(a,c,l,h){return new OI(a,c,l,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,UB(h.experimentalLongPollingOptions),h.useFetchStreams,h.isUsingEmulator)}(A._databaseId,((e=A._app)===null||e===void 0?void 0:e.options.appId)||"",A._persistenceKey,n);A._componentsProvider||!((t=n.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=n.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(A._componentsProvider={_offline:n.localCache._offlineComponentProvider,_online:n.localCache._onlineComponentProvider}),A._firestoreClient=new aQ(A._authCredentials,A._appCheckCredentials,A._queue,s,A._componentsProvider&&function(a){const c=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(c),_online:c}}(A._componentsProvider))}/**
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
 */class nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new nn(qe.fromBase64String(e))}catch(t){throw new $(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new nn(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class iu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new $(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class au{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new $(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new $(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ae(this._lat,e._lat)||Ae(this._long,e._long)}}/**
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
 */const BQ=/^__.*__$/;class wQ{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ir(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ss(e,this.data,t,this.fieldTransforms)}}function FB(A){switch(A){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw q(40011,{Ic:A})}}class lu{constructor(e,t,r,n,s,i){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=n,s===void 0&&this.Ec(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new lu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),n=this.dc({path:r,Rc:!1});return n.Vc(e),n}mc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),n=this.dc({path:r,Rc:!1});return n.Ec(),n}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return yo(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(FB(this.Ic)&&BQ.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class yQ{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Wo(e)}bc(e,t,r,n=!1){return new lu({Ic:e,methodName:t,wc:r,path:We.emptyPath(),Rc:!1,yc:n},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uu(A){const e=A._freezeSettings(),t=Wo(A._databaseId);return new yQ(A._databaseId,!!e.ignoreUndefinedProperties,t)}function TB(A,e,t,r,n,s={}){const i=A.bc(s.merge||s.mergeFields?2:0,e,t,n);RB("Data must be an object, but it was:",i,r);const a=xB(r,i);let c,l;if(s.merge)c=new SA(i.fieldMask),l=i.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const p=vQ(e,f,t);if(!i.contains(p))throw new $(N.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);IQ(h,p)||h.push(p)}c=new SA(h),l=i.fieldTransforms.filter(f=>c.covers(f.field))}else c=null,l=i.fieldTransforms;return new wQ(new IA(a),c,l)}class hu extends ou{_toFieldTransform(e){return new u_(e.path,new Bs)}isEqual(e){return e instanceof hu}}function CQ(A,e,t,r=!1){return du(t,A.bc(r?4:3,e))}function du(A,e){if(SB(A=He(A)))return RB("Unsupported field value:",e,A),xB(A,e);if(A instanceof ou)return function(r,n){if(!FB(n.Ic))throw n.gc(`${r._methodName}() can only be used with update() and set()`);if(!n.path)throw n.gc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(n);s&&n.fieldTransforms.push(s)}(A,e),null;if(A===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),A instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(r,n){const s=[];let i=0;for(const a of r){let c=du(a,n.fc(i));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),i++}return{arrayValue:{values:s}}}(A,e)}return function(r,n){if((r=He(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return a_(n.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Le.fromDate(r);return{timestampValue:po(n.serializer,s)}}if(r instanceof Le){const s=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:po(n.serializer,s)}}if(r instanceof au)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof nn)return{bytesValue:Wm(n.serializer,r._byteString)};if(r instanceof dA){const s=n.databaseId,i=r.firestore._databaseId;if(!i.isEqual(s))throw n.gc(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Gl(r.firestore._databaseId||n.databaseId,r._key.path)}}if(r instanceof cu)return function(i,a){return{mapValue:{fields:{[vm]:{stringValue:Em},[uo]:{arrayValue:{values:i.toArray().map(l=>{if(typeof l!="number")throw a.gc("VectorValues must only contain numeric values.");return Vl(a.serializer,l)})}}}}}}(r,n);throw n.gc(`Unsupported field value: ${zo(r)}`)}(A,e)}function xB(A,e){const t={};return pm(A)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vr(A,(r,n)=>{const s=du(n,e.Ac(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function SB(A){return!(typeof A!="object"||A===null||A instanceof Array||A instanceof Date||A instanceof Le||A instanceof au||A instanceof nn||A instanceof dA||A instanceof ou||A instanceof cu)}function RB(A,e,t){if(!SB(t)||!function(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}(t)){const r=zo(t);throw r==="an object"?e.gc(A+" a custom object"):e.gc(A+" "+r)}}function vQ(A,e,t){if((e=He(e))instanceof iu)return e._internalPath;if(typeof e=="string")return DB(A,e);throw yo("Field path arguments must be of type string or ",A,!1,void 0,t)}const EQ=new RegExp("[~\\*/\\[\\]]");function DB(A,e,t){if(e.search(EQ)>=0)throw yo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,A,!1,void 0,t);try{return new iu(...e.split("."))._internalPath}catch(r){throw yo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,A,!1,void 0,t)}}function yo(A,e,t,r,n){const s=r&&!r.isEmpty(),i=n!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||i)&&(c+=" (found",s&&(c+=` in field ${r}`),i&&(c+=` in document ${n}`),c+=")"),new $(N.INVALID_ARGUMENT,a+A+c)}function IQ(A,e){return A.some(t=>t.isEqual(e))}/**
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
 */class PB{constructor(e,t,r,n,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=n,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new dA(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _Q(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yo("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class _Q extends PB{data(){return super.data()}}function Yo(A,e){return typeof e=="string"?DB(A,e):e instanceof iu?e._internalPath:e._delegate._internalPath}/**
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
 */function UQ(A){if(A.limitType==="L"&&A.explicitOrderBy.length===0)throw new $(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fu{}class gu extends fu{}function sn(A,e,...t){let r=[];e instanceof fu&&r.push(e),r=r.concat(t),function(s){const i=s.filter(c=>c instanceof pu).length,a=s.filter(c=>c instanceof Zo).length;if(i>1||i>0&&a>0)throw new $(N.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const n of r)A=n._apply(A);return A}class Zo extends gu{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Zo(e,t,r)}_apply(e){const t=this._parse(e);return LB(e._query,t),new Yt(e.firestore,e.converter,Lc(e._query,t))}_parse(e){const t=uu(e.firestore);return function(s,i,a,c,l,h,f){let p;if(l.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new $(N.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){vf(f,h);const _=[];for(const v of f)_.push(Cf(c,s,v));p={arrayValue:{values:_}}}else p=Cf(c,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||vf(f,h),p=CQ(a,i,f,h==="in"||h==="not-in");return Pe.create(l,h,p)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function kt(A,e,t){const r=e,n=Yo("where",A);return Zo._create(n,r,t)}class pu extends fu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new pu(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:PA.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(n,s){let i=n;const a=s.getFlattenedFilters();for(const c of a)LB(i,c),i=Lc(i,c)}(e._query,t),new Yt(e.firestore,e.converter,Lc(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class mu extends gu{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new mu(e,t)}_apply(e){const t=function(n,s,i){if(n.startAt!==null)throw new $(N.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(n.endAt!==null)throw new $(N.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ms(s,i)}(e._query,this._field,this._direction);return new Yt(e.firestore,e.converter,function(n,s){const i=n.explicitOrderBy.concat([s]);return new hn(n.path,n.collectionGroup,i,n.filters.slice(),n.limit,n.limitType,n.startAt,n.endAt)}(e._query,t))}}function yf(A,e="asc"){const t=e,r=Yo("orderBy",A);return mu._create(r,t)}class Bu extends gu{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Bu(e,t,r)}_apply(e){return new Yt(e.firestore,e.converter,fo(e._query,this._limit,this._limitType))}}function Cs(A){return fQ("limit",A),Bu._create("limit",A,"F")}function Cf(A,e,t){if(typeof(t=He(t))=="string"){if(t==="")throw new $(N.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xm(e)&&t.indexOf("/")!==-1)throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(we.fromString(t));if(!W.isDocumentKey(r))throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Dd(A,new W(r))}if(t instanceof dA)return Dd(A,t._key);throw new $(N.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zo(t)}.`)}function vf(A,e){if(!Array.isArray(A)||A.length===0)throw new $(N.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function LB(A,e){const t=function(n,s){for(const i of n)for(const a of i.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(A.filters,function(n){switch(n){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new $(N.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new $(N.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class QQ{convertValue(e,t="none"){switch($t(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Gt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw q(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return vr(e,(n,s)=>{r[n]=this.convertValue(s,t)}),r}convertVectorValue(e){var t,r,n;const s=(n=(r=(t=e.fields)===null||t===void 0?void 0:t[uo].arrayValue)===null||r===void 0?void 0:r.values)===null||n===void 0?void 0:n.map(i=>xe(i.doubleValue));return new cu(s)}convertGeoPoint(e){return new au(xe(e.latitude),xe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Vo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(fs(e));default:return null}}convertTimestamp(e){const t=jt(e);return new Le(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=we.fromString(e);he(Zm(r),9688,{name:e});const n=new gs(r.get(1),r.get(3)),s=new W(r.popFirst(5));return n.isEqual(t)||ht(`Document ${s} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
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
 */function HB(A,e,t){let r;return r=A?t&&(t.merge||t.mergeFields)?A.toFirestore(e,t):A.toFirestore(e):e,r}/**
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
 */class Mn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class kB extends PB{constructor(e,t,r,n,s,i){super(e,t,r,n,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Yo("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class zi extends kB{data(e={}){return super.data(e)}}class bQ{constructor(e,t,r,n){this._firestore=e,this._userDataWriter=t,this._snapshot=n,this.metadata=new Mn(n.hasPendingWrites,n.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new zi(this._firestore,this._userDataWriter,r.key,r,new Mn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new $(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(n,s){if(n._snapshot.oldDocs.isEmpty()){let i=0;return n._snapshot.docChanges.map(a=>{const c=new zi(n._firestore,n._userDataWriter,a.doc.key,a.doc,new Mn(n._snapshot.mutatedKeys.has(a.doc.key),n._snapshot.fromCache),n.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:i++}})}{let i=n._snapshot.oldDocs;return n._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const c=new zi(n._firestore,n._userDataWriter,a.doc.key,a.doc,new Mn(n._snapshot.mutatedKeys.has(a.doc.key),n._snapshot.fromCache),n.query.converter);let l=-1,h=-1;return a.type!==0&&(l=i.indexOf(a.doc.key),i=i.delete(a.doc.key)),a.type!==1&&(i=i.add(a.doc),h=i.indexOf(a.doc.key)),{type:FQ(a.type),doc:c,oldIndex:l,newIndex:h}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function FQ(A){switch(A){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return q(61501,{type:A})}}/**
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
 */function yA(A){A=ft(A,dA);const e=ft(A.firestore,fn);return uQ(su(e),A._key).then(t=>xQ(e,A,t))}class OB extends QQ{constructor(e){super(),this.firestore=e}convertBytes(e){return new nn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new dA(this.firestore,null,t)}}function vs(A){A=ft(A,Yt);const e=ft(A.firestore,fn),t=su(e),r=new OB(e);return UQ(A._query),hQ(t,A._query).then(n=>new bQ(e,r,A,n))}function at(A,e,t){A=ft(A,dA);const r=ft(A.firestore,fn),n=HB(A.converter,e,t);return yu(r,[TB(uu(r),"setDoc",A._key,n,A.converter!==null,t).toMutation(A._key,DA.none())])}function TQ(A){return yu(ft(A.firestore,fn),[new Ml(A._key,DA.none())])}function wu(A,e){const t=ft(A.firestore,fn),r=sA(A),n=HB(A.converter,e);return yu(t,[TB(uu(A.firestore),"addDoc",r._key,n,A.converter!==null,{}).toMutation(r._key,DA.exists(!1))]).then(()=>r)}function yu(A,e){return function(r,n){const s=new ot;return r.asyncQueue.enqueueAndForget(()=>y(null,null,function*(){return ZU(yield lQ(r),n,s)})),s.promise}(su(A),e)}function xQ(A,e,t){const r=t.docs.get(e._key),n=new OB(A);return new kB(A,n,e._key,r,new Mn(t.hasPendingWrites,t.fromCache),e.converter)}function XA(){return new hu("serverTimestamp")}(function(e,t=!0){(function(n){cn=n})(Cr),gr(new Mt("firestore",(r,{instanceIdentifier:n,options:s})=>{const i=r.getProvider("app").getImmediate(),a=new fn(new vI(r.getProvider("auth-internal")),new _I(i,r.getProvider("app-check-internal")),function(l,h){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new $(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new gs(l.options.projectId,h)}(i,n),i);return s=Object.assign({useFetchStreams:t},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),KA(vd,Ed,e),KA(vd,Ed,"esm2017")})();/**
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
 */const NB="firebasestorage.googleapis.com",VB="storageBucket",SQ=2*60*1e3,RQ=10*60*1e3;/**
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
 */class Ue extends qA{constructor(e,t,r=0){super(Wa(e),`Firebase Storage: ${t} (${Wa(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Ue.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Wa(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _e;(function(A){A.UNKNOWN="unknown",A.OBJECT_NOT_FOUND="object-not-found",A.BUCKET_NOT_FOUND="bucket-not-found",A.PROJECT_NOT_FOUND="project-not-found",A.QUOTA_EXCEEDED="quota-exceeded",A.UNAUTHENTICATED="unauthenticated",A.UNAUTHORIZED="unauthorized",A.UNAUTHORIZED_APP="unauthorized-app",A.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",A.INVALID_CHECKSUM="invalid-checksum",A.CANCELED="canceled",A.INVALID_EVENT_NAME="invalid-event-name",A.INVALID_URL="invalid-url",A.INVALID_DEFAULT_BUCKET="invalid-default-bucket",A.NO_DEFAULT_BUCKET="no-default-bucket",A.CANNOT_SLICE_BLOB="cannot-slice-blob",A.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",A.NO_DOWNLOAD_URL="no-download-url",A.INVALID_ARGUMENT="invalid-argument",A.INVALID_ARGUMENT_COUNT="invalid-argument-count",A.APP_DELETED="app-deleted",A.INVALID_ROOT_OPERATION="invalid-root-operation",A.INVALID_FORMAT="invalid-format",A.INTERNAL_ERROR="internal-error",A.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_e||(_e={}));function Wa(A){return"storage/"+A}function Cu(){const A="An unknown error occurred, please check the error payload for server response.";return new Ue(_e.UNKNOWN,A)}function DQ(A){return new Ue(_e.OBJECT_NOT_FOUND,"Object '"+A+"' does not exist.")}function PQ(A){return new Ue(_e.QUOTA_EXCEEDED,"Quota for bucket '"+A+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function LQ(){const A="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Ue(_e.UNAUTHENTICATED,A)}function HQ(){return new Ue(_e.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function kQ(A){return new Ue(_e.UNAUTHORIZED,"User does not have permission to access '"+A+"'.")}function OQ(){return new Ue(_e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function NQ(){return new Ue(_e.CANCELED,"User canceled the upload/download.")}function VQ(A){return new Ue(_e.INVALID_URL,"Invalid URL '"+A+"'.")}function MQ(A){return new Ue(_e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+A+"'.")}function KQ(){return new Ue(_e.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+VB+"' property when initializing the app?")}function jQ(){return new Ue(_e.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function GQ(){return new Ue(_e.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function $Q(A){return new Ue(_e.UNSUPPORTED_ENVIRONMENT,`${A} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function $c(A){return new Ue(_e.INVALID_ARGUMENT,A)}function MB(){return new Ue(_e.APP_DELETED,"The Firebase app was deleted.")}function WQ(A){return new Ue(_e.INVALID_ROOT_OPERATION,"The operation '"+A+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ns(A,e){return new Ue(_e.INVALID_FORMAT,"String does not match format '"+A+"': "+e)}function xn(A){throw new Ue(_e.INTERNAL_ERROR,"Internal error: "+A)}/**
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
 */class BA{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=BA.makeFromUrl(e,t)}catch(n){return new BA(e,"")}if(r.path==="")return r;throw MQ(e)}static makeFromUrl(e,t){let r=null;const n="([A-Za-z0-9.\\-_]+)";function s(k){k.path.charAt(k.path.length-1)==="/"&&(k.path_=k.path_.slice(0,-1))}const i="(/(.*))?$",a=new RegExp("^gs://"+n+i,"i"),c={bucket:1,path:3};function l(k){k.path_=decodeURIComponent(k.path)}const h="v[A-Za-z0-9_]+",f=t.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",C=new RegExp(`^https?://${f}/${h}/b/${n}/o${p}`,"i"),_={bucket:1,path:3},v=t===NB?"(?:storage.googleapis.com|storage.cloud.google.com)":t,b="([^?#]*)",x=new RegExp(`^https?://${v}/${n}/${b}`,"i"),D=[{regex:a,indices:c,postModify:s},{regex:C,indices:_,postModify:l},{regex:x,indices:{bucket:1,path:2},postModify:l}];for(let k=0;k<D.length;k++){const O=D[k],H=O.regex.exec(e);if(H){const U=H[O.indices.bucket];let m=H[O.indices.path];m||(m=""),r=new BA(U,m),O.postModify(r);break}}if(r==null)throw VQ(e);return r}}class XQ{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function qQ(A,e,t){let r=1,n=null,s=null,i=!1,a=0;function c(){return a===2}let l=!1;function h(...b){l||(l=!0,e.apply(null,b))}function f(b){n=setTimeout(()=>{n=null,A(C,c())},b)}function p(){s&&clearTimeout(s)}function C(b,...x){if(l){p();return}if(b){p(),h.call(null,b,...x);return}if(c()||i){p(),h.call(null,b,...x);return}r<64&&(r*=2);let D;a===1?(a=2,D=0):D=(r+Math.random())*1e3,f(D)}let _=!1;function v(b){_||(_=!0,p(),!l&&(n!==null?(b||(a=2),clearTimeout(n),f(0)):b||(a=1)))}return f(0),s=setTimeout(()=>{i=!0,v(!0)},t),v}function zQ(A){A(!1)}/**
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
 */function JQ(A){return A!==void 0}function YQ(A){return typeof A=="object"&&!Array.isArray(A)}function vu(A){return typeof A=="string"||A instanceof String}function Ef(A){return Eu()&&A instanceof Blob}function Eu(){return typeof Blob!="undefined"}function If(A,e,t,r){if(r<e)throw $c(`Invalid value for '${A}'. Expected ${e} or greater.`);if(r>t)throw $c(`Invalid value for '${A}'. Expected ${t} or less.`)}/**
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
 */function Iu(A,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${A}`}function KB(A){const e=encodeURIComponent;let t="?";for(const r in A)if(A.hasOwnProperty(r)){const n=e(r)+"="+e(A[r]);t=t+n+"&"}return t=t.slice(0,-1),t}var ur;(function(A){A[A.NO_ERROR=0]="NO_ERROR",A[A.NETWORK_ERROR=1]="NETWORK_ERROR",A[A.ABORT=2]="ABORT"})(ur||(ur={}));/**
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
 */function ZQ(A,e){const t=A>=500&&A<600,n=[408,429].indexOf(A)!==-1,s=e.indexOf(A)!==-1;return t||n||s}/**
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
 */class eb{constructor(e,t,r,n,s,i,a,c,l,h,f,p=!0,C=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=n,this.successCodes_=s,this.additionalRetryCodes_=i,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.isUsingEmulator=C,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((_,v)=>{this.resolve_=_,this.reject_=v,this.start_()})}start_(){const e=(r,n)=>{if(n){r(!1,new li(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const i=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&s.addUploadProgressListener(i),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(i),this.pendingConnection_=null;const a=s.getErrorCode()===ur.NO_ERROR,c=s.getStatus();if(!a||ZQ(c,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===ur.ABORT;r(!1,new li(!1,null,h));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new li(l,s))})},t=(r,n)=>{const s=this.resolve_,i=this.reject_,a=n.connection;if(n.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());JQ(c)?s(c):s()}catch(c){i(c)}else if(a!==null){const c=Cu();c.serverResponse=a.getErrorText(),this.errorCallback_?i(this.errorCallback_(a,c)):i(c)}else if(n.canceled){const c=this.appDelete_?MB():NQ();i(c)}else{const c=OQ();i(c)}};this.canceled_?t(!1,new li(!1,null,!0)):this.backoffId_=qQ(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&zQ(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class li{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Ab(A,e){e!==null&&e.length>0&&(A.Authorization="Firebase "+e)}function tb(A,e){A["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function rb(A,e){e&&(A["X-Firebase-GMPID"]=e)}function nb(A,e){e!==null&&(A["X-Firebase-AppCheck"]=e)}function sb(A,e,t,r,n,s,i=!0,a=!1){const c=KB(A.urlParams),l=A.url+c,h=Object.assign({},A.headers);return rb(h,e),Ab(h,t),tb(h,s),nb(h,r),new eb(l,A.method,h,A.body,A.successCodes,A.additionalRetryCodes,A.handler,A.errorHandler,A.timeout,A.progressCallback,n,i,a)}/**
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
 */function ib(){return typeof BlobBuilder!="undefined"?BlobBuilder:typeof WebKitBlobBuilder!="undefined"?WebKitBlobBuilder:void 0}function ob(...A){const e=ib();if(e!==void 0){const t=new e;for(let r=0;r<A.length;r++)t.append(A[r]);return t.getBlob()}else{if(Eu())return new Blob(A);throw new Ue(_e.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ab(A,e,t){return A.webkitSlice?A.webkitSlice(e,t):A.mozSlice?A.mozSlice(e,t):A.slice?A.slice(e,t):null}/**
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
 */function cb(A){if(typeof atob=="undefined")throw $Q("base-64");return atob(A)}/**
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
 */const MA={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xa{constructor(e,t){this.data=e,this.contentType=t||null}}function lb(A,e){switch(A){case MA.RAW:return new Xa(jB(e));case MA.BASE64:case MA.BASE64URL:return new Xa(GB(A,e));case MA.DATA_URL:return new Xa(hb(e),db(e))}throw Cu()}function jB(A){const e=[];for(let t=0;t<A.length;t++){let r=A.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<A.length-1&&(A.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,i=A.charCodeAt(++t);r=65536|(s&1023)<<10|i&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function ub(A){let e;try{e=decodeURIComponent(A)}catch(t){throw ns(MA.DATA_URL,"Malformed data URL.")}return jB(e)}function GB(A,e){switch(A){case MA.BASE64:{const n=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(n||s)throw ns(A,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case MA.BASE64URL:{const n=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(n||s)throw ns(A,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=cb(e)}catch(n){throw n.message.includes("polyfill")?n:ns(A,"Invalid character found")}const r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r}class $B{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw ns(MA.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=fb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function hb(A){const e=new $B(A);return e.base64?GB(MA.BASE64,e.rest):ub(e.rest)}function db(A){return new $B(A).contentType}function fb(A,e){return A.length>=e.length?A.substring(A.length-e.length)===e:!1}/**
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
 */class bt{constructor(e,t){let r=0,n="";Ef(e)?(this.data_=e,r=e.size,n=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=n}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ef(this.data_)){const r=this.data_,n=ab(r,e,t);return n===null?null:new bt(n)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new bt(r,!0)}}static getBlob(...e){if(Eu()){const t=e.map(r=>r instanceof bt?r.data_:r);return new bt(ob.apply(null,t))}else{const t=e.map(i=>vu(i)?lb(MA.RAW,i).data:i.data_);let r=0;t.forEach(i=>{r+=i.byteLength});const n=new Uint8Array(r);let s=0;return t.forEach(i=>{for(let a=0;a<i.length;a++)n[s++]=i[a]}),new bt(n,!0)}}uploadData(){return this.data_}}/**
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
 */function WB(A){let e;try{e=JSON.parse(A)}catch(t){return null}return YQ(e)?e:null}/**
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
 */function gb(A){if(A.length===0)return null;const e=A.lastIndexOf("/");return e===-1?"":A.slice(0,e)}function pb(A,e){const t=e.split("/").filter(r=>r.length>0).join("/");return A.length===0?t:A+"/"+t}function XB(A){const e=A.lastIndexOf("/",A.length-2);return e===-1?A:A.slice(e+1)}/**
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
 */function mb(A,e){return e}class aA{constructor(e,t,r,n){this.server=e,this.local=t||e,this.writable=!!r,this.xform=n||mb}}let ui=null;function Bb(A){return!vu(A)||A.length<2?A:XB(A)}function qB(){if(ui)return ui;const A=[];A.push(new aA("bucket")),A.push(new aA("generation")),A.push(new aA("metageneration")),A.push(new aA("name","fullPath",!0));function e(s,i){return Bb(i)}const t=new aA("name");t.xform=e,A.push(t);function r(s,i){return i!==void 0?Number(i):i}const n=new aA("size");return n.xform=r,A.push(n),A.push(new aA("timeCreated")),A.push(new aA("updated")),A.push(new aA("md5Hash",null,!0)),A.push(new aA("cacheControl",null,!0)),A.push(new aA("contentDisposition",null,!0)),A.push(new aA("contentEncoding",null,!0)),A.push(new aA("contentLanguage",null,!0)),A.push(new aA("contentType",null,!0)),A.push(new aA("metadata","customMetadata",!0)),ui=A,ui}function wb(A,e){function t(){const r=A.bucket,n=A.fullPath,s=new BA(r,n);return e._makeStorageReference(s)}Object.defineProperty(A,"ref",{get:t})}function yb(A,e,t){const r={};r.type="file";const n=t.length;for(let s=0;s<n;s++){const i=t[s];r[i.local]=i.xform(r,e[i.server])}return wb(r,A),r}function zB(A,e,t){const r=WB(e);return r===null?null:yb(A,r,t)}function Cb(A,e,t,r){const n=WB(e);if(n===null||!vu(n.downloadTokens))return null;const s=n.downloadTokens;if(s.length===0)return null;const i=encodeURIComponent;return s.split(",").map(l=>{const h=A.bucket,f=A.fullPath,p="/b/"+i(h)+"/o/"+i(f),C=Iu(p,t,r),_=KB({alt:"media",token:l});return C+_})[0]}function vb(A,e){const t={},r=e.length;for(let n=0;n<r;n++){const s=e[n];s.writable&&(t[s.server]=A[s.local])}return JSON.stringify(t)}class JB{constructor(e,t,r,n){this.url=e,this.method=t,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function YB(A){if(!A)throw Cu()}function Eb(A,e){function t(r,n){const s=zB(A,n,e);return YB(s!==null),s}return t}function Ib(A,e){function t(r,n){const s=zB(A,n,e);return YB(s!==null),Cb(s,n,A.host,A._protocol)}return t}function ZB(A){function e(t,r){let n;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?n=HQ():n=LQ():t.getStatus()===402?n=PQ(A.bucket):t.getStatus()===403?n=kQ(A.path):n=r,n.status=t.getStatus(),n.serverResponse=r.serverResponse,n}return e}function _b(A){const e=ZB(A);function t(r,n){let s=e(r,n);return r.getStatus()===404&&(s=DQ(A.path)),s.serverResponse=n.serverResponse,s}return t}function Ub(A,e,t){const r=e.fullServerUrl(),n=Iu(r,A.host,A._protocol),s="GET",i=A.maxOperationRetryTime,a=new JB(n,s,Ib(A,t),i);return a.errorHandler=_b(e),a}function Qb(A,e){return A&&A.contentType||e&&e.type()||"application/octet-stream"}function bb(A,e,t){const r=Object.assign({},t);return r.fullPath=A.path,r.size=e.size(),r.contentType||(r.contentType=Qb(null,e)),r}function Fb(A,e,t,r,n){const s=e.bucketOnlyServerUrl(),i={"X-Goog-Upload-Protocol":"multipart"};function a(){let D="";for(let k=0;k<2;k++)D=D+Math.random().toString().slice(2);return D}const c=a();i["Content-Type"]="multipart/related; boundary="+c;const l=bb(e,r,n),h=vb(l,t),f="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,p=`\r
--`+c+"--",C=bt.getBlob(f,r,p);if(C===null)throw jQ();const _={name:l.fullPath},v=Iu(s,A.host,A._protocol),b="POST",x=A.maxUploadRetryTime,S=new JB(v,b,Eb(A,t),x);return S.urlParams=_,S.headers=i,S.body=C.uploadData(),S.errorHandler=ZB(e),S}class Tb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ur.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ur.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ur.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,n,s){if(this.sent_)throw xn("cannot .send() more than once");if(Jt(e)&&r&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return n!==void 0?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw xn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw xn("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw xn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw xn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class xb extends Tb{initXhr(){this.xhr_.responseType="text"}}function ew(){return new xb}/**
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
 */class yr{constructor(e,t){this._service=e,t instanceof BA?this._location=t:this._location=BA.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new yr(e,t)}get root(){const e=new BA(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return XB(this._location.path)}get storage(){return this._service}get parent(){const e=gb(this._location.path);if(e===null)return null;const t=new BA(this._location.bucket,e);return new yr(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw WQ(e)}}function Sb(A,e,t){A._throwIfRoot("uploadBytes");const r=Fb(A.storage,A._location,qB(),new bt(e,!0),t);return A.storage.makeRequestWithTokens(r,ew).then(n=>({metadata:n,ref:A}))}function Rb(A){A._throwIfRoot("getDownloadURL");const e=Ub(A.storage,A._location,qB());return A.storage.makeRequestWithTokens(e,ew).then(t=>{if(t===null)throw GQ();return t})}function Db(A,e){const t=pb(A._location.path,e),r=new BA(A._location.bucket,t);return new yr(A.storage,r)}/**
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
 */function Pb(A){return/^[A-Za-z]+:\/\//.test(A)}function Lb(A,e){return new yr(A,e)}function Aw(A,e){if(A instanceof _u){const t=A;if(t._bucket==null)throw KQ();const r=new yr(t,t._bucket);return e!=null?Aw(r,e):r}else return e!==void 0?Db(A,e):A}function Hb(A,e){if(e&&Pb(e)){if(A instanceof _u)return Lb(A,e);throw $c("To use ref(service, url), the first argument must be a Storage instance.")}else return Aw(A,e)}function _f(A,e){const t=e==null?void 0:e[VB];return t==null?null:BA.makeFromBucketSpec(t,A)}function kb(A,e,t,r={}){A.host=`${e}:${t}`;const n=Jt(e);n&&(Bl(`https://${A.host}/b`),wl("Storage",!0)),A._isUsingEmulator=!0,A._protocol=n?"https":"http";const{mockUserToken:s}=r;s&&(A._overrideAuthToken=typeof s=="string"?s:Cp(s,A.app.options.projectId))}class _u{constructor(e,t,r,n,s,i=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=n,this._firebaseVersion=s,this._isUsingEmulator=i,this._bucket=null,this._host=NB,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=SQ,this._maxUploadRetryTime=RQ,this._requests=new Set,n!=null?this._bucket=BA.makeFromBucketSpec(n,this._host):this._bucket=_f(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=BA.makeFromBucketSpec(this._url,e):this._bucket=_f(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){If("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){If("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}_getAuthToken(){return y(this,null,function*(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=yield e.getToken();if(t!==null)return t.accessToken}return null})}_getAppCheckToken(){return y(this,null,function*(){if(hA(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(yield e.getToken()).token:null})}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new yr(this,e)}_makeRequest(e,t,r,n,s=!0){if(this._deleted)return new XQ(MB());{const i=sb(e,this._appId,r,n,t,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(i),i.getPromise().then(()=>this._requests.delete(i),()=>this._requests.delete(i)),i}}makeRequestWithTokens(e,t){return y(this,null,function*(){const[r,n]=yield Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,n).getPromise()})}}const Uf="@firebase/storage",Qf="0.13.13";/**
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
 */const tw="storage";function Ob(A,e,t){return A=He(A),Sb(A,e,t)}function Nb(A){return A=He(A),Rb(A)}function Vb(A,e){return A=He(A),Hb(A,e)}function Mb(A=vl(),e){A=He(A);const r=Po(A,tw).getImmediate({identifier:e}),n=Bp("storage");return n&&Kb(r,...n),r}function Kb(A,e,t,r={}){kb(A,e,t,r)}function jb(A,{instanceIdentifier:e}){const t=A.getProvider("app").getImmediate(),r=A.getProvider("auth-internal"),n=A.getProvider("app-check-internal");return new _u(t,r,n,e,Cr)}function Gb(){gr(new Mt(tw,jb,"PUBLIC").setMultipleInstances(!0)),KA(Uf,Qf,""),KA(Uf,Qf,"esm2017")}Gb();const Uu={apiKey:"AIzaSyBV22Jhml3A9EXEWUg8ZxlTkBng2bkxQPQ",authDomain:"beatmeter-baf5a.firebaseapp.com",projectId:"beatmeter-baf5a",storageBucket:"beatmeter-baf5a.firebasestorage.app",messagingSenderId:"111775710994",appId:"1:111775710994:web:4984cb3f26116535fdfdcb",measurementId:"G-2RDYS7W6Z0"},ea=Ip(Uu),TA=pI(ea),ee=pQ(ea,"(default)"),rw=Mb(ea);console.log("🌐 Using production Firebase services");console.log("� Firebase initialized");console.log("Project ID:",Uu.projectId);console.log("Auth domain:",Uu.authDomain);const nw=Object.freeze(Object.defineProperty({__proto__:null,app:ea,auth:TA,firestore:ee,storage:rw},Symbol.toStringTag,{value:"Module"})),$b="modulepreload",Wb=function(A){return"/"+A},bf={},sw=function(e,t,r){let n=Promise.resolve();if(t&&t.length>0){let i=function(l){return Promise.all(l.map(h=>Promise.resolve(h).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));n=i(t.map(l=>{if(l=Wb(l),l in bf)return;bf[l]=!0;const h=l.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":$b,h||(p.as="script"),p.crossOrigin="",p.href=l,c&&p.setAttribute("nonce",c),document.head.appendChild(p),h)return new Promise((C,_)=>{p.addEventListener("load",C),p.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return n.then(i=>{for(const a of i||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};function qa(A={},e=!1){return Ie(Ve(Ie({bio:A.bio||"",profilePicture:A.profilePicture||"",musicCollection:A.musicCollection||[],rateLater:A.rateLater||[],followers:A.followers||[],following:A.following||[]},e?{profileSetupComplete:A.profileSetupComplete||!1}:A.profileSetupComplete!==void 0?{profileSetupComplete:A.profileSetupComplete}:{}),{createdAt:A.createdAt instanceof Object&&A.createdAt.constructor.name==="FieldValue"?A.createdAt:XA(),joinDate:A.joinDate instanceof Object&&A.joinDate.constructor.name==="FieldValue"?A.joinDate:XA()}),A)}function Co(A){if(Array.isArray(A))return A.map(Co).filter(e=>e!=null);if(A&&typeof A=="object"){if(A.constructor&&A.constructor.name==="FieldValue")return A;if(typeof window!="undefined"&&(A instanceof File||A instanceof Blob))return;const e={};for(const[t,r]of Object.entries(A))if(!(r===void 0||typeof r=="number"&&(isNaN(r)||!isFinite(r))||typeof r=="function"||typeof window!="undefined"&&(r instanceof File||r instanceof Blob))){if(r&&typeof r=="object"&&r.constructor&&r.constructor.name==="FieldValue"){e[t]=r;continue}if(r instanceof Date){e[t]=Le.fromDate(r);continue}if(typeof r=="object"){const n=Co(r);n!=null&&(typeof n!="object"||Object.keys(n).length>0)&&(e[t]=n);continue}e[t]=r}return e}return A}function Xb(A){return!(!A||typeof A!="string"||A.length===0||A.length>1500||A.includes("/")||A==="."||A===".."||/^__.*__$/.test(A))}function Tt(n){return y(this,arguments,function*(A,e={},t=!0,r=null){var a,c,l,h;if(!A)throw new Error("No user UID provided");if(console.log("[DEBUG] Validating UID:",A,"Type:",typeof A),typeof A!="string"||A.trim().length===0)throw new Error("Invalid UID: must be a non-empty string");if(!Xb(A))throw new Error(`Invalid UID format for Firestore document ID: ${A}`);if(r){if(console.log("[DEBUG] Current Auth user:",r.uid),console.log("[DEBUG] Auth user authenticated:",!!r),r.uid!==A)throw new Error("UID mismatch: authenticated user UID does not match provided UID")}else console.warn("[DEBUG] No current user provided, skipping auth validation");const s=sA(ee,"userprofiles",A);try{const f=yield yA(s);let p;if(!f.exists())p=qa(Ve(Ie({},e),{createdAt:XA(),joinDate:XA()}),!0);else{const v=f.data(),i=e,{createdAt:b,joinDate:x}=i,S=Oh(i,["createdAt","joinDate"]);v.profileSetupComplete===void 0&&!S.profileSetupComplete&&(v.displayName||r&&r.displayName)&&(S.profileSetupComplete=!0),p=qa(S,!1)}const C=Co(p);if(!C||typeof C!="object")throw new Error("Invalid profile data after sanitization");if(typeof window!="undefined"){console.log("=== FIRESTORE WRITE DEBUG ==="),console.log("Firestore UID:",A),console.log("Firestore instance:",ee),ee&&ee._databaseId&&(console.log("Firestore projectId:",ee._databaseId.projectId),console.log("Firestore database:",ee._databaseId.database)),console.log("Firestore settings:",ee._settings),console.log("Firestore app:",ee.app.name),console.log("Firestore _delegate:",ee._delegate);const v=((c=(a=ee._settings)==null?void 0:a.host)==null?void 0:c.includes("localhost"))||((h=(l=ee._settings)==null?void 0:l.host)==null?void 0:h.includes("127.0.0.1"))||ee._emulatorOptions;console.log("Running in emulator:",v),v&&console.log("Emulator settings:",ee._emulatorOptions||ee._settings),console.log("UserDocRef path:",s.path),console.log("UserDocRef id:",s.id),console.log("UserDocRef parent path:",s.parent.path),console.log("Raw profile data:",JSON.stringify(p,null,2)),console.log("Sanitized profile data:",JSON.stringify(C,null,2)),console.log("Data size (bytes):",JSON.stringify(C).length);const b=Object.keys(C).filter(x=>x.startsWith("_")||x.includes(".")||x.includes("/")||/^\d/.test(x));b.length>0&&console.warn("Potentially problematic field names:",b),Object.entries(C).forEach(([x,S])=>{const D=Object.prototype.toString.call(S);console.log(`[FieldType] ${x}:`,S,"Type:",D),(D==="[object Function]"||D==="[object Symbol]"||typeof window!="undefined"&&(S instanceof File||S instanceof Blob))&&console.error(`[ERROR] Unsupported field type for ${x}:`,D)}),console.log("Skipping minimal document write test")}console.log("[setDoc] Attempting to write document with merge:",t),console.log("[setDoc] Document path:",s.path),console.log("[setDoc] Document data keys:",Object.keys(C)),yield at(s,C,{merge:t}).then(()=>{console.log("[setDoc] Success: Document written to",s.path)}).catch(v=>{throw console.error("[setDoc] Direct catch:",v),console.error("[setDoc] Error code:",v.code),console.error("[setDoc] Error message:",v.message),console.error("[setDoc] Error details:",{name:v.name,code:v.code,message:v.message,stack:v.stack}),v}),console.log("[getDoc] Reading back document...");const _=yield yA(s);return _.exists()?console.log("[getDoc] Document data after write:",_.data()):console.warn("[getDoc] Document does not exist after write!"),console.log("User profile successfully created/updated:",A),p}catch(f){console.error("=== FIRESTORE ERROR DETAILS ==="),console.error("Error object:",f),console.error("Error name:",f.name),console.error("Error code:",f.code),console.error("Error message:",f.message),console.error("Error stack:",f.stack);let p,C;try{p=qa(e),C=Co(p)}catch(v){console.error("Could not build profile data for error logging:",v)}C&&(console.error("Failed data payload:",JSON.stringify(C,null,2)),console.error("Data payload size:",JSON.stringify(C).length,"bytes")),(f.code==="invalid-argument"||f.message.includes("400"))&&(console.error("=== 400 BAD REQUEST DEBUG ==="),console.error("This is likely a data validation error. Common causes:"),console.error("1. Invalid field names (cannot start with numbers, contain dots)"),console.error("2. Unsupported data types (File, Blob, undefined, NaN)"),console.error("3. Invalid document ID format"),console.error("4. Firestore rules rejection"),C&&Object.entries(C).forEach(([v,b])=>{/^\d/.test(v)&&console.error(`❌ Field name starts with number: "${v}"`),(v.includes(".")||v.includes("/"))&&console.error(`❌ Field name contains invalid characters: "${v}"`),b==null&&console.error(`❌ Field has null/undefined value: "${v}"`),typeof b=="number"&&(isNaN(b)||!isFinite(b))&&console.error(`❌ Field has invalid number: "${v}" = ${b}`)}));const _=new Error(`Firestore write failed: ${f.message}`);throw _.originalError=f,_.uid=A,_.documentPath=s.path,C&&(_.dataPayload=C),_}})}function Ff(A){return y(this,null,function*(){if(!A||!A.uid)return null;const e=sA(ee,"userprofiles",A.uid),t=yield yA(e),r=t.exists()?t.data():{};return Ie({uid:A.uid,email:A.email,displayName:A.displayName||"",photoURL:A.photoURL||""},r)})}function qb(){return y(this,null,function*(){var A,e,t,r;console.log("=== FIRESTORE DEBUG FUNCTION ===");try{console.log("Test 1: Firebase Configuration"),console.log("Firestore instance:",ee),console.log("Project ID:",(A=ee._databaseId)==null?void 0:A.projectId),console.log("Database:",(e=ee._databaseId)==null?void 0:e.database),console.log(`
Test 2: Authentication Status`);const{auth:n}=yield sw(()=>y(null,null,function*(){const{auth:f}=yield Promise.resolve().then(()=>nw);return{auth:f}}),void 0);if(console.log("Auth instance:",n),console.log("Current user:",n.currentUser),console.log("User authenticated:",!!n.currentUser),console.log("User UID:",(t=n.currentUser)==null?void 0:t.uid),console.log("User email:",(r=n.currentUser)==null?void 0:r.email),!n.currentUser)return console.error("❌ No authenticated user found!"),{success:!1,error:"No authenticated user"};console.log(`
Test 3: Minimal Write Test`);const s=`debug-${Date.now()}`,i=sA(ee,"userprofiles",s),a={test:!0,timestamp:XA(),message:"Debug test"};console.log("Writing minimal data:",a),yield at(i,a),console.log("✅ Minimal write successful"),console.log(`
Test 4: Read Back Test`);const c=yield yA(i);c.exists()?console.log("✅ Read back successful:",c.data()):console.error("❌ Document not found after write"),console.log(`
Test 5: User UID Write Test`);const l=sA(ee,"userprofiles",n.currentUser.uid),h={debugTest:!0,timestamp:XA(),uid:n.currentUser.uid};return console.log("Writing to user document:",h),yield at(l,h,{merge:!0}),console.log("✅ User document write successful"),yield at(i,{},{merge:!1}),{success:!0,message:"All tests passed"}}catch(n){return console.error("❌ Debug test failed:",n),console.error("Error code:",n.code),console.error("Error message:",n.message),console.error("Full error:",n),{success:!1,error:n.message,code:n.code,fullError:n}}})}function iw(){return y(this,null,function*(){console.log("=== QUICK CONNECTIVITY TEST ===");try{console.log("1. Testing basic Firestore reference...");const A=ee._delegate||ee;console.log("Firestore delegate:",A),console.log("2. Checking network status..."),typeof navigator!="undefined"&&console.log("Navigator online:",navigator.onLine),console.log("3. Testing document reference creation...");const e=sA(ee,"userprofiles","connectivity-test");console.log("Document reference created:",e.path),console.log("4. Testing simple write with 5-second timeout...");const r=at(e,{connectivityTest:!0}),n=new Promise((c,l)=>setTimeout(()=>l(new Error("TIMEOUT: Write took longer than 5 seconds")),5e3));yield Promise.race([r,n]),console.log("✅ Simple write successful"),console.log("5. Testing read back...");const s=yA(e),i=new Promise((c,l)=>setTimeout(()=>l(new Error("TIMEOUT: Read took longer than 5 seconds")),5e3)),a=yield Promise.race([s,i]);return a.exists()?console.log("✅ Read back successful:",a.data()):console.log("⚠️ Document not found after write"),yield at(e,{},{merge:!1}),{success:!0,message:"All connectivity tests passed"}}catch(A){return console.error("❌ Connectivity test failed at step:",A.message),console.error("Full error:",A),A.message.includes("TIMEOUT")?(console.error("🔍 DIAGNOSIS: Firestore operations are timing out"),console.error("Possible causes:"),console.error("- Network connectivity issues"),console.error("- Firestore service is down"),console.error("- Incorrect project configuration"),console.error("- Firestore rules blocking access")):A.code==="permission-denied"?(console.error("🔍 DIAGNOSIS: Permission denied"),console.error("Check your Firestore security rules")):A.code==="unavailable"&&(console.error("🔍 DIAGNOSIS: Firestore service unavailable"),console.error("Check network connection and Firebase status")),{success:!1,error:A.message,code:A.code}}})}function zb(A="Test bio from debug function"){return y(this,null,function*(){console.log("=== TESTING BIO UPDATE ===");try{const{auth:e}=yield sw(()=>y(null,null,function*(){const{auth:s}=yield Promise.resolve().then(()=>nw);return{auth:s}}),void 0);if(!e.currentUser)return console.error("❌ No authenticated user found"),{success:!1,error:"No authenticated user"};console.log("✅ Current user:",e.currentUser.uid),console.log(`🔧 Testing bio update with value: "${A}"`);const t={bio:A,profileSetupComplete:!0};console.log("📤 Calling createOrUpdateUserProfile with:",t),yield Tt(e.currentUser.uid,t,!0,e.currentUser),console.log("✅ Bio update completed successfully"),console.log("📖 Reading back document to verify...");const r=sA(ee,"userprofiles",e.currentUser.uid),n=yield yA(r);if(n.exists()){const s=n.data();return console.log("📋 Current document data:",s),console.log("📝 Bio field value:",s.bio),console.log("📝 Bio field type:",typeof s.bio),s.bio===A?(console.log("✅ Bio update verification PASSED"),{success:!0,bio:s.bio}):(console.error("❌ Bio update verification FAILED"),console.error(`Expected: "${A}"`),console.error(`Found: "${s.bio}"`),{success:!1,expected:A,found:s.bio})}else return console.error("❌ User document not found after update"),{success:!1,error:"Document not found"}}catch(e){return console.error("❌ Bio update test failed:",e),{success:!1,error:e.message,fullError:e}}})}typeof window!="undefined"&&(window.debugFirestore=qb,window.quickConnectivityTest=iw,window.testBioUpdate=zb);const ow=L.createContext();function Se(){return L.useContext(ow)}function Jb({children:A}){const[e,t]=L.useState(null),[r,n]=L.useState(!0);function s(v,b,x){return y(this,null,function*(){const S=yield eE(TA,v,b);return yield Va(S.user,{displayName:x}),S.user})}function i(v,b){return AE(TA,v,b)}function a(){return iE(TA)}function c(v){return Zv(TA,v)}function l(){const v=new rt;return UE(TA,v).then(b=>y(null,null,function*(){return b.user}))}function h(v){return y(this,null,function*(){if(!v)return null;try{return yield Tt(v.uid,{},!0,v),console.log("[ensureUserProfile] Successfully called createOrUpdateUserProfile for UID:",v.uid),v}catch(b){return console.error("[ensureUserProfile] Error ensuring user profile:",b),b&&b.stack&&console.error("[ensureUserProfile] Error stack:",b.stack),console.trace("[ensureUserProfile] Call stack trace"),v}})}L.useEffect(()=>{const v=setTimeout(()=>{n(!1)},15e3),b=sE(TA,x=>y(null,null,function*(){clearTimeout(v);try{if(x){yield h(x);const S=yield Ff(x);t(S)}else t(null)}catch(S){console.error("Error during auth state change:",S),t(null)}finally{n(!1)}}),()=>{n(!1)});return()=>{clearTimeout(v),b()}},[]);function f(v){return y(this,null,function*(){try{if(!e||!e.uid)throw new Error("No user is logged in");if(v.displayName||v.profilePicture instanceof File){let x=e.photoURL;if(v.profilePicture&&v.profilePicture instanceof File){const S=Vb(rw,`profilePictures/${e.uid}`);yield Ob(S,v.profilePicture),x=yield Nb(S),yield Va(TA.currentUser,{photoURL:x}),v.profilePicture=x}v.displayName&&(yield Va(TA.currentUser,{displayName:v.displayName}))}yield Tt(e.uid,v,!0,e);const b=yield Ff(TA.currentUser);return t(b),!0}catch(b){throw console.error("Error updating profile:",b),b}})}function p(){return y(this,null,function*(){if(!e){console.log("No current user");return}console.log("Current user:",e.uid,e.email);try{return yield Tt(e.uid,{profileSetup:!1},!0,e),yield new Promise(v=>setTimeout(v,1e3)),console.log("User profile created/reset successfully!"),"Success!"}catch(v){return console.error("Error creating user profile:",v),"Error: "+v.message}})}function C(){return y(this,null,function*(){if(console.log("=== DEBUGGING PROFILE CREATION ==="),!e)return console.error("❌ No authenticated user found"),{success:!1,error:"No authenticated user"};console.log("✅ Current user:",{uid:e.uid,email:e.email,displayName:e.displayName,emailVerified:e.emailVerified});try{console.log(`
--- Test 1: Basic Connectivity ---`);const v=yield iw();if(console.log("Connectivity test result:",v),!v.success)return{success:!1,error:`Connectivity failed: ${v.error}`};console.log(`
--- Test 2: Minimal Profile Creation ---`);const b={bio:"Test bio",profileSetup:!0};return yield Tt(e.uid,b,!0,e),console.log("✅ Profile creation successful"),{success:!0,message:"Profile creation successful"}}catch(v){return console.error("❌ Profile creation failed:",v),v.message.includes("Authentication check failed")?{success:!1,error:"Authentication issue",details:v.message}:v.message.includes("400")||v.code==="invalid-argument"?{success:!1,error:"Data validation error",details:v.message}:v.message.includes("permission-denied")?{success:!1,error:"Permission denied - check Firestore rules",details:v.message}:v.message.includes("timeout")?{success:!1,error:"Timeout - connectivity issue",details:v.message}:{success:!1,error:"Unknown error",details:v.message}}})}typeof window!="undefined"&&(window.resetUserProfile=p,window.debugProfileCreation=C);const _={currentUser:e,signup:s,login:i,logout:a,resetPassword:c,googleSignIn:l,updateUserProfile:f};return d.jsx(ow.Provider,{value:_,children:!r&&A})}const wA=(t,...r)=>y(null,[t,...r],function*(A,e={}){const{timeoutMs:n=1e4,retry:s=!0,retryDelay:i=1e3,operationName:a="Firestore operation"}=e,c=new Promise((l,h)=>setTimeout(()=>h(new Error(`${a} timed out after ${n}ms`)),n));try{return console.log(`Starting ${a}`),yield Promise.race([A(),c])}catch(l){if(console.warn(`${a} failed or timed out:`,l.message),s){console.log(`Retrying ${a} after ${i}ms delay...`),yield new Promise(h=>setTimeout(h,i));try{return yield A()}catch(h){throw console.error(`${a} retry failed:`,h.message),h}}else throw l}}),Yb=(A,e="Firebase operation")=>{console.group(`Firebase Error in ${e}`),console.error(`Error name: ${A.name}`),console.error(`Error message: ${A.message}`),A.code&&console.error(`Firebase error code: ${A.code}`),A.customData&&console.error("Custom data:",A.customData),A.response&&console.error("Server response:",{status:A.response.status,statusText:A.response.statusText,data:A.response.data}),console.error("Stack trace:",A.stack),console.groupEnd()},Zb="userprofiles",aw=(A,e=20)=>y(null,null,function*(){return wA(()=>y(null,null,function*(){const t=qt(ee,Zb),r=A.toLowerCase(),n=sn(t,kt("displayName",">=",A),kt("displayName","<=",A+""),Cs(e)),i=(yield vs(n)).docs.map(f=>Ve(Ie({id:f.id},f.data()),{matchType:"displayName"}));if(i.length>=e)return i.slice(0,e);const a=sn(t,Cs(e*3)),l=(yield vs(a)).docs.map(f=>Ie({id:f.id},f.data())).filter(f=>{var _,v;const p=((_=f.displayName)==null?void 0:_.toLowerCase())||"",C=((v=f.bio)==null?void 0:v.toLowerCase())||"";return i.some(b=>b.id===f.id)?!1:p.includes(r)||C.includes(r)}).map(f=>Ve(Ie({},f),{matchType:"bio"})).slice(0,e-i.length);return[...i,...l].slice(0,e)}),{operationName:"Search Users"})}),eF="https://us-central1-beatmeter-baf5a.cloudfunctions.net/api";function vo(A){const e=A.startsWith("/")?A.slice(1):A;return`${eF}/${e}`.replace(/([^:]\/)\/+/,"$1")}const AF=()=>{const[A,e]=L.useState({users:[],music:[],loading:!1,error:null}),t=L.useCallback((i,...a)=>y(null,[i,...a],function*(n,s={}){const{includeUsers:c=!0,includeMusic:l=!0,userLimit:h=10,musicLimit:f=10}=s;if(!n||n.trim().length===0){e({users:[],music:[],loading:!1,error:null});return}e(p=>Ve(Ie({},p),{loading:!0,error:null}));try{const p=[];if(c?p.push(aw(n.trim(),h)):p.push(Promise.resolve([])),l){const v=fetch(vo(`/music/search?q=${encodeURIComponent(n)}&type=album&limit=${f}`)).then(b=>{if(!b.ok)throw new Error("Music search failed");return b.json()}).then(b=>b.albums||[]);p.push(v)}else p.push(Promise.resolve([]));const[C,_]=yield Promise.all(p);return e({users:C,music:_,loading:!1,error:null}),{users:C,music:_}}catch(p){throw console.error("Search error:",p),e(C=>Ve(Ie({},C),{loading:!1,error:"Search failed. Please try again."})),p}}),[]),r=L.useCallback(()=>{e({users:[],music:[],loading:!1,error:null})},[]);return Ve(Ie({},A),{search:t,clearResults:r})},tF=E.div`
  position: relative;
  flex: 1;
  max-width: 400px;
`,rF=E.input`
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
`,nF=E.div`
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
`,hi=E.div`
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
`,di=E.div`
  flex: 1;
  min-width: 0;
`,fi=E.div`
  font-weight: 500;
  color: rgba(255,255,255,0.9);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,za=E.div`
  font-size: 0.8rem;
  color: rgba(255,255,255,0.6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,sF=E.button`
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
`,iF=({value:A,onChange:e,onSubmit:t})=>{const[r,n]=L.useState(!1),[s,i]=L.useState(""),a=L.useRef(null),c=fA(),{currentUser:l}=Se(),{users:h,music:f,loading:p,search:C}=AF();L.useEffect(()=>{const O=setTimeout(()=>{i(A)},300);return()=>clearTimeout(O)},[A]),L.useEffect(()=>{s.trim().length>=2?(C(s,{userLimit:3,musicLimit:3}),n(!0)):n(!1)},[s,C]),L.useEffect(()=>{const O=H=>{a.current&&!a.current.contains(H.target)&&n(!1)};return document.addEventListener("mousedown",O),()=>document.removeEventListener("mousedown",O)},[]);const _=O=>{e(O.target.value)},v=()=>{s.trim().length>=2&&n(!0)},b=O=>{c(`/profile/${O.displayName}`),n(!1),e("")},x=O=>{c(`/album/${O.id}`),n(!1),e("")},S=()=>{c(`/search?q=${encodeURIComponent(A)}`),n(!1),e("")},D=O=>{O.preventDefault(),A.trim()&&(c(`/search?q=${encodeURIComponent(A.trim())}`),n(!1),e(""))},k=h.length>0||f.length>0;return d.jsxs(tF,{ref:a,children:[d.jsx("form",{onSubmit:D,children:d.jsx(rF,{type:"search",placeholder:"Search...",value:A,onChange:_,onFocus:v})}),r&&s.trim().length>=2&&d.jsx(nF,{children:p?d.jsx(hi,{children:d.jsx(di,{children:d.jsx(fi,{children:"Searching..."})})}):k?d.jsxs(d.Fragment,{children:[h.length>0&&d.jsxs(Tf,{children:[d.jsx(xf,{children:"Users"}),h.map(O=>d.jsxs(hi,{onClick:()=>b(O),children:[d.jsx(Sf,{src:O.profilePicture||"https://via.placeholder.com/40",alt:O.displayName,$round:!0}),d.jsxs(di,{children:[d.jsx(fi,{children:O.displayName}),O.bio&&d.jsx(za,{children:O.bio})]})]},O.id))]}),f.length>0&&d.jsxs(Tf,{children:[d.jsx(xf,{children:"Music"}),f.slice(0,3).map(O=>{var H,U,m,w;return d.jsxs(hi,{onClick:()=>x(O),children:[d.jsx(Sf,{src:((U=(H=O.images)==null?void 0:H[2])==null?void 0:U.url)||O.imageUrl||"https://via.placeholder.com/40",alt:O.name}),d.jsxs(di,{children:[d.jsx(fi,{children:O.name}),d.jsx(za,{children:((w=(m=O.artists)==null?void 0:m[0])==null?void 0:w.name)||O.artistName})]})]},O.id)})]}),d.jsxs(sF,{onClick:S,children:['Show all results for "',s,'"']})]}):d.jsx(hi,{children:d.jsxs(di,{children:[d.jsx(fi,{children:"No results found"}),d.jsx(za,{children:"Try a different search term"})]})})})]})},cw=ml`
  from { opacity: 0; }
  to { opacity: 1; }
`,oF=E.nav`
  width: 100vw;
  left: 0;
  background: ${A=>A.theme.colors.background.secondary||"#222"};
  border-bottom: 1px solid ${A=>A.theme.colors.background.accent||"rgba(255,255,255,0.1)"};
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`,aF=E.div`
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
`,cF=E.div`
  display: flex;
  align-items: center;
  gap: ${A=>A.theme.spacing.large||"24px"};
  flex: 1;
`,lF=E(Vt)`
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
`;const uF=E.div`
  display: flex;
  gap: ${A=>A.theme.spacing.large||"24px"};
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`,Nr=E(Vt)`
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
`,hF=E(Nr)`
  background: ${A=>A.theme.colors.background.accent||"rgba(255,255,255,0.1)"};
  padding: 8px 16px;
  border-radius: ${A=>A.theme.borderRadius.medium||"12px"};
  color: ${A=>A.theme.colors.text.primary||"#fff"};
  font-weight: 500;

  &:hover {
    background: rgba(255,255,255,0.15);
  }
`,dF=E.div`
  width: 1px;
  height: 20px;
  background: ${A=>A.theme.colors.background.accent||"rgba(255,255,255,0.1)"};
`,fF=E.button`
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

  ${A=>A.$isOpen&&ls`
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
`,gF=E.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  z-index: 1050;
  animation: ${cw} 0.2s;
`,pF=E.div`
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
`,Vr=E(Vt)`
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
`,mF=E(Vr)`
  background: ${A=>A.theme.colors.background.accent||"rgba(255,255,255,0.1)"};
  color: ${A=>A.theme.colors.text.primary||"#fff"};
  font-weight: 500;
  text-align: center;
  margin: 0 24px;
  border-radius: ${A=>A.theme.borderRadius.medium||"12px"};
  padding: 14px 0;
`,BF=E.div`
  position: relative;
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`,wF=E.button`
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
`,yF=E.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid ${A=>A.theme.colors.background.accent||"rgba(255,255,255,0.1)"};
`,CF=E.span`
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
`,vF=E.div`
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
  animation: ${cw} 0.18s;

  @media (max-width: 767px) {
    top: 56px;
    right: 0;
    left: auto;
    min-width: 170px;
  }
`,Rf=E(Vt)`
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
`,EF=E.button`
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
`,IF=E.div`
  position: absolute;
  top: 16px;
  right: 24px;
  z-index: 1301;
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`;function _F(){const{currentUser:A,logout:e}=Se(),t=!!A,r=A||{},[n,s]=L.useState(""),[i,a]=L.useState(!1),[c,l]=L.useState(!1),h=L.useRef(null),f=fA(),p=r.avatarUrl||null,C=r.name?r.name.split(" ").map(x=>x[0]).join("").toUpperCase().slice(0,2):"U",_=x=>y(null,null,function*(){x.preventDefault(),l(!1);try{yield e(),f("/")}catch(S){console.error("Failed to sign out",S)}});L.useEffect(()=>{if(!c)return;function x(S){h.current&&!h.current.contains(S.target)&&l(!1)}return document.addEventListener("mousedown",x),()=>document.removeEventListener("mousedown",x)},[c]);const v=d.jsx(wF,{onClick:()=>l(x=>!x),"aria-label":"Open user menu",type:"button",children:p?d.jsx(yF,{src:p,alt:"User avatar"}):d.jsx(CF,{children:C})}),b=d.jsxs(vF,{ref:h,children:[d.jsx(Rf,{to:"/settings",onClick:()=>l(!1),children:"Settings"}),d.jsx(Rf,{to:"/edit-profile",onClick:()=>l(!1),children:"Edit Profile"}),d.jsx(EF,{isLogout:!0,onClick:_,children:"Log Out"})]});return d.jsx(oF,{children:d.jsxs(aF,{children:[d.jsxs(cF,{children:[d.jsx(lF,{to:"/",children:"beatmeter"}),d.jsx(iF,{value:n,onChange:s})]}),"        ",d.jsxs(fF,{onClick:()=>a(x=>!x),$isOpen:i,"aria-label":"Open navigation menu",children:[d.jsx("span",{}),d.jsx("span",{}),d.jsx("span",{})]}),"        ",d.jsxs(uF,{children:[d.jsx(Nr,{to:"/music",children:"Music"}),d.jsx(Nr,{to:"/lists",children:"Lists"}),t&&d.jsx(Nr,{to:"/collection",children:"My Collection"}),d.jsx(Nr,{to:"/profile",children:"Profile"}),d.jsx(dF,{}),t?d.jsxs(BF,{children:[v,c&&b]}):d.jsxs(d.Fragment,{children:[d.jsx(Nr,{to:"/login",children:"Sign In"}),d.jsx(hF,{to:"/create-account",children:"Create Account"})]})]}),i&&d.jsx(gF,{onClick:()=>a(!1)}),d.jsxs(pF,{open:i,children:[t&&d.jsxs(IF,{children:[v,c&&b]}),"          ",d.jsx(Vr,{to:"/music",onClick:()=>a(!1),children:"Music"}),d.jsx(Vr,{to:"/lists",onClick:()=>a(!1),children:"Lists"}),t&&d.jsx(Vr,{to:"/collection",onClick:()=>a(!1),children:"My Collection"}),d.jsx(Vr,{to:"/profile",onClick:()=>a(!1),children:"Profile"}),!t&&d.jsxs(d.Fragment,{children:[d.jsx(Vr,{to:"/login",onClick:()=>a(!1),children:"Sign In"}),d.jsx(mF,{to:"/create-account",onClick:()=>a(!1),children:"Create Account"})]})]})]})})}const UF=E.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,QF=E.main`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
`;function bF(){return d.jsxs(UF,{children:[d.jsx(_F,{}),d.jsx(QF,{children:d.jsx(iC,{})})]})}const FF=E.div`
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
  
  ${A=>A.left&&ls`
    left: 0;
    background: linear-gradient(to right, ${A.theme.colors.background.primary}cc, transparent);
  `}
  
  ${A=>A.right&&ls`
    right: 0;
    background: linear-gradient(to left, ${A.theme.colors.background.primary}cc, transparent);
  `}
`,TF=E.div`
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
`,xF=E.div`
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
  
  ${A=>A.left&&ls`
    left: ${A.theme.spacing.medium};
  `}
  
  ${A=>A.right&&ls`
    right: ${A.theme.spacing.medium};
  `}
  
  &:hover {
    opacity: ${A=>A.show?1:0};
    transform: translateY(-50%) scale(1.1);
    background: ${A=>A.theme.colors.surface.secondary}e6;
    box-shadow: ${A=>A.theme.shadows.medium};
  }
`;function Lf({items:A=[],renderItem:e}){const t=Te.useMemo(()=>A?Array.isArray(A)?A:(console.warn("Carousel: items prop is not an array:",typeof A,A),[]):[],[A]);if(!e||typeof e!="function")return console.warn("Carousel: renderItem prop must be a function"),d.jsx("div",{children:"Carousel: Missing renderItem function"});const r=L.useRef(null),n=L.useRef(null),[s,i]=L.useState(!1),[a,c]=L.useState(0),[l,h]=L.useState(0),[f,p]=L.useState(!1),[C,_]=L.useState(!1),[v,b]=L.useState(!1),x=8,S=100,D=L.useCallback(T=>{const I=r.current.offsetWidth*.8;r.current.scrollBy({left:T==="right"?I:-I,behavior:"smooth"})},[]),k=T=>{i(!0),c(T.pageX-r.current.offsetLeft),h(r.current.scrollLeft),p(!1)},O=()=>{i(!1)},H=T=>{if(!s){const ce=n.current.getBoundingClientRect(),ye=T.clientX-ce.left;_(ye<S),b(ye>ce.width-S);return}T.preventDefault();const I=T.pageX-r.current.offsetLeft,te=(I-a)*2;Math.abs(I-a)>x&&p(!0),r.current.scrollLeft=l-te},U=()=>{i(!1),_(!1),b(!1)},m=T=>{i(!0),c(T.touches[0].pageX-r.current.offsetLeft),h(r.current.scrollLeft),p(!1)},w=T=>{if(!s)return;const I=T.touches[0].pageX-r.current.offsetLeft,te=(I-a)*2;Math.abs(I-a)>x&&p(!0),r.current.scrollLeft=l-te},Q=()=>{i(!1)},F=T=>{try{return e(T,{dragged:f})}catch(I){return console.error("Carousel: Error rendering item:",I,T),d.jsx("div",{children:"Error rendering item"})}};return Array.isArray(t)?d.jsxs(FF,{ref:n,onMouseMove:H,onMouseLeave:U,children:[d.jsx(Df,{left:!0}),d.jsx(Df,{right:!0}),d.jsx(TF,{ref:r,isDragging:s,onMouseDown:k,onMouseUp:O,onMouseLeave:O,onTouchStart:m,onTouchMove:w,onTouchEnd:Q,children:d.jsx(xF,{children:t&&t.length>0?t.map((T,I)=>{if(!T&&T!==0)return console.warn("Carousel: Skipping null/undefined item at index:",I),null;const te=T.id||T.key||`carousel-item-${I}`;return d.jsx("div",{children:F(T)},te)}).filter(Boolean):d.jsx("div",{children:"Loading..."})})}),d.jsx(Pf,{left:!0,show:C,onClick:()=>D("left"),children:"←"}),d.jsx(Pf,{right:!0,show:v,onClick:()=>D("right"),children:"→"})]}):(console.error("Carousel: safeItems is not an array at render time:",t),d.jsx("div",{children:"Carousel: Data loading error"}))}const SF=E.div`
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
`,RF=E.img`
  width: ${A=>A.variant==="grid"?"100%":"160px"};
  height: ${A=>A.variant==="grid"?"250px":"160px"};
  border-radius: ${A=>A.variant==="grid"?"0":A.theme.borderRadius.large||"16px"};
  box-shadow: ${A=>A.variant==="grid"?"none":A.hovered?"0 0 24px 4px #48BB78":"0 4px 16px 0 rgba(128, 90, 213, 0.15)"};
  transition: box-shadow 0.3s, transform 0.3s;
  object-fit: cover;
`,DF=E.div`
  margin-top: ${A=>A.variant==="grid"?"0":"12px"};
  padding: ${A=>A.variant==="grid"?"15px":"0"};
  text-align: ${A=>A.variant==="grid"?"left":"center"};
  width: 100%;
`,PF=E.h3`
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
`,LF=E.p`
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
`;function Qu({album:A,onClick:e,variant:t="carousel"}){var f;const[r,n]=L.useState(!1),s=fA(),i=A.imageUrl||A.img||A.images&&((f=A.images[0])==null?void 0:f.url)||"https://via.placeholder.com/300",a=A.title||A.name,c=A.artistName||A.artist||(A.artists?A.artists.map(p=>p.name).join(", "):""),l=A.id,h=()=>{l?s(`/album/${l}`):console.warn("Album ID is missing, cannot navigate to details page."),e&&e()};return d.jsxs(SF,{variant:t,onClick:h,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[d.jsx(RF,{variant:t,src:i,alt:a,draggable:!1,hovered:r}),d.jsxs(DF,{variant:t,children:[d.jsx(PF,{variant:t,hovered:r,children:a}),d.jsx(LF,{variant:t,hovered:r,children:c})]})]})}const HF=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  box-shadow: none;
  border: none;
  margin: 0 12px;
  cursor: pointer;
`,kF=E.img`
  width: 160px;
  height: 160px;
  border-radius: ${A=>A.theme.borderRadius.large||"16px"};
  box-shadow: ${A=>A.hovered?"0 0 24px 4px #48BB78":"0 4px 16px 0 rgba(128, 90, 213, 0.15)"};
  transition: box-shadow 0.3s, transform 0.3s;
  object-fit: cover;
`,OF=E.div`
  margin-top: 12px;
  text-align: center;
`,NF=E.div`
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
`;function MF({song:A,onClick:e}){const[t,r]=L.useState(!1);return d.jsxs(HF,{onClick:e,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[d.jsx(kF,{src:A.img,alt:A.title,draggable:!1,hovered:t}),d.jsxs(OF,{children:[d.jsx(NF,{hovered:t,children:A.title}),d.jsx(VF,{hovered:t,children:A.artist})]})]})}const Hf={getNewReleases:(A=20,e=0)=>y(null,null,function*(){return(yield Fn.get(`/api/music/new-releases?limit=${A}&offset=${e}`)).data}),searchMusic:(A,e="album",t=20,r=0)=>y(null,null,function*(){return(yield Fn.get(`/api/music/search?q=${encodeURIComponent(A)}&type=${e}&limit=${t}&offset=${r}`)).data}),getTopAlbums:()=>y(null,null,function*(){try{const e=(yield Fn.get("/api/music/top-albums")).data;return Array.isArray(e)?e:[]}catch(A){return console.error("Error fetching top albums:",A),[]}}),getTopSongs:()=>y(null,null,function*(){try{const e=(yield Fn.get("/api/music/top-songs")).data;return(Array.isArray(e)?e:[]).map(r=>Ve(Ie({},r),{albumId:r.albumId||r.id}))}catch(A){return console.error("Error fetching top songs:",A),[]}}),getAlbumById:A=>y(null,null,function*(){return(yield Fn.get(`/api/music/albums/${A}`)).data})},KF=ml`
  from { 
    opacity: 0; 
    transform: translateY(20px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
`,jF=ml`
  0% {
    background-position: 0 0, 0 50px, 50px -50px, -50px 0px;
  }
  100% {
    background-position: 100px 100px, 100px 150px, 150px 50px, 50px 100px;
  }
`,GF=E.div`
  position: relative;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6B46C1 0%, #805AD5 50%, #9F7AEA 100%);
  color: white;
  overflow: hidden;
  padding: 2rem;
`,$F=E.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background: linear-gradient(135deg, rgba(155, 89, 182, 0.7) 0%, rgba(142, 68, 173, 0.7) 100%);
  opacity: 1;
  pointer-events: none;
  animation: ${jF} 20s linear infinite;
`,WF=E.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  animation: ${KF} 1s ease-out;
`,XF=E.h1`
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
`,zF=E.button`
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
`,lw=E.h2`
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
`,JF=E(lw)`
  margin-top: 3rem;
`,YF=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-size: 1.2rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,ZF=E.div`
  color: #ff6b6b;
  text-align: center;
  padding: 2rem;
  font-size: 1.2rem;
`,eT=E.div`
  min-height: 100vh;
  background: ${A=>A.theme.colors.background.primary||"rgba(22, 25, 27, 0.95)"};
`;function AT(){const[A,e]=L.useState([]),[t,r]=L.useState([]),[n,s]=L.useState(!0),[i,a]=L.useState(null);return L.useEffect(()=>{y(null,null,function*(){try{s(!0);const[l,h]=yield Promise.all([Hf.getTopAlbums(),Hf.getTopSongs()]),f=Array.isArray(l)?l:[],p=Array.isArray(h)?h:[];console.log("Albums data:",f),console.log("Songs data:",p),e(f),r(p),a(null)}catch(l){console.error("Error fetching data:",l),a("Failed to load music data. Please try again."),e([]),r([])}finally{s(!1)}})},[]),n?d.jsx(YF,{children:"Loading..."}):i?d.jsx(ZF,{children:i}):d.jsxs(eT,{children:[d.jsxs(GF,{children:[d.jsx($F,{}),d.jsxs(WF,{children:[d.jsx(XF,{children:"Discover. Rate. Share."}),d.jsxs(qF,{children:["Your personal music journey starts here.",d.jsx("br",{}),"Track your favorite tracks, rate your top albums,",d.jsx("br",{}),"and showcase your unique taste in music."]}),d.jsx(zF,{onClick:()=>{var c;return window.scrollTo({top:((c=document.querySelector(".carousel-container"))==null?void 0:c.offsetTop)||0,behavior:"smooth"})},children:"Explore Top Music"})]})]}),"      ",d.jsx(lw,{children:"Top Albums"}),"      ",d.jsx(kf,{children:d.jsx(Lf,{items:A,renderItem:(c,{dragged:l})=>d.jsx(Qu,{album:c,onClick:h=>{if(l){h.preventDefault(),h.stopPropagation();return}}},c.id)})}),d.jsx(JF,{children:"Top Songs"}),"      ",d.jsx(kf,{children:d.jsx(Lf,{items:t,renderItem:(c,{dragged:l})=>d.jsx(MF,{song:c,onClick:h=>{if(l){h.preventDefault(),h.stopPropagation();return}c.albumId?window.location.href=`/album/${c.albumId}`:console.log(`Song clicked: ${c.title}, but no album ID available`)}})})})]})}function tT({redirectOnIncomplete:A=!1,redirectPath:e="/profile-setup"}={}){const{currentUser:t}=Se(),r=fA(),[n,s]=L.useState(!0),[i,a]=L.useState(!1);return L.useEffect(()=>{function c(){return y(this,null,function*(){if(!t){s(!1);return}try{const l=sA(ee,"userprofiles",t.uid),h=yield yA(l);if(h.exists()){const f=h.data();let p;if(f.profileSetupComplete!==void 0)p=f.profileSetupComplete===!0;else if((f.displayName||(t==null?void 0:t.displayName))&&(f.bio!==void 0||f.profilePicture)){p=!0;try{const v=sA(ee,"userprofiles",t.uid);yield at(v,{profileSetupComplete:!0},{merge:!0})}catch(v){console.warn("Could not auto-migrate user profile status:",v)}}else p=!1;a(p),A&&!p&&r(e)}else a(!1),A&&r(e)}catch(l){console.error("Error checking profile status:",l),a(!1)}finally{s(!1)}})}c()},[t,r,A,e]),{loading:n,isProfileComplete:i}}const uw="follows",rT=(A,e)=>y(null,null,function*(){return wA(()=>y(null,null,function*(){if(A===e)throw new Error("Users cannot follow themselves");if(yield hw(A,e))throw new Error("Already following this user");const r={followerId:A,followingId:e,timestamp:XA()};return(yield wu(qt(ee,uw),r)).id}),{operationName:"Follow User"})}),hw=(A,e)=>y(null,null,function*(){return wA(()=>y(null,null,function*(){const t=qt(ee,uw),r=sn(t,kt("followerId","==",A),kt("followingId","==",e),Cs(1));return!(yield vs(r)).empty}),{operationName:"Check Is Following"})}),nT="activities",sT={FOLLOWED_USER:"followed_user"},dw=A=>y(null,null,function*(){return wA(()=>y(null,null,function*(){const e={userId:A.userId,actionType:A.actionType,targetId:A.targetId,userDisplayName:A.userDisplayName,additionalData:A.additionalData||{},timestamp:XA()};return(yield wu(qt(ee,nT),e)).id}),{operationName:"Create Activity"})}),iT=(A,e,t,r)=>y(null,null,function*(){return dw({userId:A,actionType:sT.FOLLOWED_USER,targetId:e,userDisplayName:t,additionalData:{followedUserDisplayName:r}})}),oT=(A,e,t,r)=>y(null,null,function*(){return wA(()=>y(null,null,function*(){const n=yield rT(A,e);return yield fw(e,A),yield iT(A,e,t,r),n}),{operationName:"Follow User"})}),aT=(A,e)=>y(null,null,function*(){return wA(()=>y(null,null,function*(){yield unfollowUserInDB(A,e),yield fw(e,A)}),{operationName:"Unfollow User"})}),fw=(A,e)=>y(null,null,function*(){return wA(()=>y(null,null,function*(){const[t,r]=yield Promise.all([getFollowerCount(A),getFollowingCount(e)]);yield Promise.all([Tt(A,{followerCount:t},!0,null),Tt(e,{followingCount:r},!0,null)])}),{operationName:"Update User Follower Counts"})}),cT=()=>{const{user:A}=Se(),[e,t]=L.useState(!1),[r,n]=L.useState(null),s=L.useCallback((a,c)=>y(null,null,function*(){if(!A)throw new Error("User must be logged in to follow others");if(A.uid===a)throw new Error("Users cannot follow themselves");t(!0),n(null);try{return yield oT(A.uid,a,A.displayName||"Anonymous",c)}catch(l){throw n(l.message),l}finally{t(!1)}}),[A]),i=L.useCallback(a=>y(null,null,function*(){if(!A)throw new Error("User must be logged in to unfollow others");t(!0),n(null);try{yield aT(A.uid,a)}catch(c){throw n(c.message),c}finally{t(!1)}}),[A]);return{followUser:s,unfollowUser:i,loading:e,error:r}},Eo="posts",NA={REVIEW:"Reviews",NOTE:"Notes"},lT=A=>y(null,null,function*(){return wA(()=>y(null,null,function*(){const e={userId:A.userId,userDisplayName:A.userDisplayName,type:A.type,title:A.title,content:A.content,albumId:A.albumId||null,albumData:A.albumData||null,rating:A.rating||null,likesCount:0,commentsCount:0,timestamp:XA(),updatedAt:XA()},t=yield wu(qt(ee,Eo),e);return yield dw({userId:A.userId,actionType:A.type===NA.REVIEW?"new_review":"new_note",targetId:t.id,userDisplayName:A.userDisplayName,additionalData:{postTitle:A.title,postType:A.type,albumData:A.albumData}}),t.id}),{operationName:"Create Post"})}),uT=A=>y(null,null,function*(){return wA(()=>y(null,null,function*(){const e=sA(ee,Eo,A);yield TQ(e)}),{operationName:"Delete Post"})}),hT=(A,e=20,t=null)=>y(null,null,function*(){return wA(()=>y(null,null,function*(){let r=sn(qt(ee,Eo),kt("userId","==",A),yf("timestamp","desc"),Cs(e));return t&&t!=="All"&&(r=sn(qt(ee,Eo),kt("userId","==",A),kt("type","==",t),yf("timestamp","desc"),Cs(e))),(yield vs(r)).docs.map(s=>Ie({id:s.id},s.data()))}),{operationName:"Get User Posts"})}),dT=(A,e="All")=>{const[t,r]=L.useState([]),[n,s]=L.useState(!1),[i,a]=L.useState(null),{currentUser:c}=Se(),l=()=>y(null,null,function*(){if(!A){r([]);return}s(!0),a(null);try{const C=yield hT(A,20,e==="All"?null:e);r(C)}catch(p){console.error("Error fetching posts:",p),a("Failed to load posts"),r([])}finally{s(!1)}}),h=()=>{l()},f=p=>y(null,null,function*(){if(!c||!p)return console.error("Cannot delete post: missing user or post ID"),!1;try{return yield uT(p),r(C=>C.filter(_=>_.id!==p)),!0}catch(C){return console.error("Error deleting post:",C),a("Failed to delete post"),!1}});return L.useEffect(()=>{l()},[A,e]),{posts:t,loading:n,error:i,refreshPosts:h,deletePost:f}},fT=E.div`
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
`,Of=E.div`
  margin-bottom: 1.5rem;
`,Nf=E.label`
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
`;function _T({isOpen:A,onClose:e,userData:t}){const{currentUser:r,updateUserProfile:n}=Se(),[s,i]=L.useState(!1),[a,c]=L.useState(""),[l,h]=L.useState(""),[f,p]=L.useState(""),[C,_]=L.useState(null),[v,b]=L.useState(""),[x,S]=L.useState(!1),D=L.useRef(null);if(L.useEffect(()=>{A&&t&&(h(t.name||""),p(t.bio||""),b(t.profilePicture||"https://via.placeholder.com/150"),S(t.isNewProfile||!1))},[A,t]),!A)return null;const k=U=>{const m=U.target.files[0];if(m){_(m);const w=new FileReader;w.onload=Q=>{b(Q.target.result)},w.readAsDataURL(m)}},O=()=>{D.current.click()},H=U=>y(null,null,function*(){if(U.preventDefault(),l.trim()===""){c("Display name cannot be empty");return}try{i(!0),c(""),yield n({displayName:l,bio:f,profilePicture:C,profileSetupComplete:!0}),e(!0)}catch(m){console.error("Error updating profile:",m),c("Failed to update profile. Please try again.")}finally{i(!1)}});return d.jsxs(fT,{onClick:U=>U.target===U.currentTarget&&e(),children:["      ",d.jsxs(gT,{children:[d.jsx(pT,{onClick:()=>e(),children:"×"}),d.jsx(mT,{children:x?"Complete Your Profile":"Edit Profile"}),x&&d.jsxs("div",{style:{backgroundColor:"#f8f9fa",padding:"12px",borderRadius:"4px",marginBottom:"16px",border:"1px solid #e9ecef"},children:[d.jsx("p",{style:{margin:"0 0 8px 0",color:"#495057"},children:"Welcome to BeatMeter! Complete your profile to get started."}),d.jsxs("ul",{style:{margin:"0",paddingLeft:"20px",color:"#6c757d"},children:[d.jsx("li",{children:"Upload a profile picture"}),d.jsx("li",{children:"Add a bio to tell others about yourself"}),d.jsx("li",{children:"Customize your display name"})]})]}),d.jsxs("form",{onSubmit:H,children:[a&&d.jsx(CT,{children:a}),d.jsxs(vT,{children:[d.jsx(ET,{src:v,alt:"Profile Preview"}),d.jsx("input",{type:"file",accept:"image/*",onChange:k,ref:D,style:{display:"none"}}),d.jsx(IT,{type:"button",onClick:O,children:"Change Profile Picture"})]}),d.jsxs(Of,{children:[d.jsx(Nf,{htmlFor:"displayName",children:"Display Name"}),d.jsx(BT,{id:"displayName",type:"text",value:l,onChange:U=>h(U.target.value),placeholder:"Enter your display name",required:!0})]}),d.jsxs(Of,{children:[d.jsx(Nf,{htmlFor:"bio",children:"Bio"}),d.jsx(wT,{id:"bio",value:f,onChange:U=>p(U.target.value),placeholder:"Tell us a bit about yourself..."})]}),d.jsx(yT,{type:"submit",disabled:s,children:s?"Saving Changes...":"Save Changes"})]})]})]})}const UT=E.div`
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
`,Ja=E.div`
  margin-bottom: 1.5rem;
`,Ya=E.label`
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
`,ST=E.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${A=>A.theme.colors.border.primary||"#ddd"};
  border-radius: 5px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: ${A=>A.theme.colors.primary.main||"#007bff"};
  }
`,RT=E.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
`,gw=E.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;
`,DT=E(gw)`
  background-color: ${A=>A.theme.colors.surface.secondary||"#f8f9fa"};
  color: ${A=>A.theme.colors.text.primary||"#111"};
  &:hover {
    background-color: ${A=>A.theme.colors.surface.tertiary||"#e9ecef"};
  }
`,PT=E(gw)`
  background-color: ${A=>A.theme.colors.primary.main||"#007bff"};
  color: white;
  &:hover {
    background-color: ${A=>A.theme.colors.primary.dark||"#0056b3"};
  }
  &:disabled {
    background-color: ${A=>A.theme.colors.text.disabled||"#6c757d"};
    cursor: not-allowed;
  }
`,LT=E.div`
  color: #dc3545;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`,Vf=E.div`
  font-size: 0.875rem;
  color: ${A=>A.theme.colors.text.secondary||"#6c757d"};
  text-align: right;
  margin-top: 0.25rem;
`,HT=({isOpen:A,onClose:e,onPostCreated:t})=>{const{currentUser:r}=Se(),[n,s]=L.useState({type:NA.NOTE,title:"",content:""}),[i,a]=L.useState(!1),[c,l]=L.useState(""),h=_=>{const{name:v,value:b}=_.target;s(x=>Ve(Ie({},x),{[v]:b})),l("")},f=()=>n.title.trim()?n.content.trim()?n.title.length>100?(l("Title must be 100 characters or less"),!1):n.content.length>2e3?(l("Content must be 2000 characters or less"),!1):!0:(l("Content is required"),!1):(l("Title is required"),!1),p=_=>y(null,null,function*(){if(_.preventDefault(),!!f()){a(!0),l("");try{const v={userId:r.uid,userDisplayName:r.displayName||"Anonymous",type:n.type,title:n.title.trim(),content:n.content.trim()},b=yield lT(v);console.log("Post created successfully with ID:",b),s({type:NA.NOTE,title:"",content:""}),t&&t(),e()}catch(v){console.error("Error creating post:",v),l("Failed to create post. Please try again.")}finally{a(!1)}}}),C=()=>{i||(s({type:NA.NOTE,title:"",content:""}),l(""),e())};return A?d.jsx(UT,{onClick:_=>_.target===_.currentTarget&&C(),children:d.jsxs(QT,{children:[d.jsx(bT,{onClick:C,disabled:i,children:"×"}),d.jsx(FT,{children:"Create New Post"}),d.jsxs("form",{onSubmit:p,children:[d.jsxs(Ja,{children:[d.jsx(Ya,{htmlFor:"type",children:"Post Type"}),d.jsxs(ST,{id:"type",name:"type",value:n.type,onChange:h,disabled:i,children:[d.jsx("option",{value:NA.NOTE,children:"Note"}),d.jsx("option",{value:NA.REVIEW,children:"Review"})]})]}),d.jsxs(Ja,{children:[d.jsxs(Ya,{htmlFor:"title",children:["Title ",n.type===NA.REVIEW?"(Album/Song Name)":""]}),d.jsx(TT,{id:"title",name:"title",type:"text",value:n.title,onChange:h,placeholder:n.type===NA.REVIEW?"Enter album or song name...":"Enter a catchy title...",disabled:i,maxLength:100}),d.jsxs(Vf,{children:[n.title.length,"/100"]})]}),d.jsxs(Ja,{children:[d.jsx(Ya,{htmlFor:"content",children:n.type===NA.REVIEW?"Review":"Content"}),d.jsx(xT,{id:"content",name:"content",value:n.content,onChange:h,placeholder:n.type===NA.REVIEW?"Share your thoughts about this music...":"What's on your mind?",disabled:i,maxLength:2e3}),d.jsxs(Vf,{children:[n.content.length,"/2000"]})]}),c&&d.jsx(LT,{children:c}),d.jsxs(RT,{children:[d.jsx(DT,{type:"button",onClick:C,disabled:i,children:"Cancel"}),d.jsx(PT,{type:"submit",disabled:i||!n.title.trim()||!n.content.trim(),children:i?"Creating...":"Create Post"})]})]})]})}):null},kT=E.div`
  background-color: ${A=>A.theme.colors.surface.primary||"#fff"};
  border: 1px solid ${A=>A.theme.colors.border.primary||"#e1e8ed"};
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
`,OT=E.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`,NT=E.div`
  flex: 1;
`,VT=E.span`
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
`,KT=E.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.875rem;
  color: ${A=>A.theme.colors.text.secondary||"#6c757d"};
  margin-bottom: 1rem;
`,jT=E.span`
  font-weight: 500;
  color: ${A=>A.theme.colors.primary.main||"#007bff"};
`,GT=E.span``,$T=E.div`
  display: flex;
  gap: 0.5rem;
`,WT=E.button`
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
`,XT=E.div`
  font-size: 1rem;
  line-height: 1.6;
  color: ${A=>A.theme.colors.text.primary||"#111"};
  white-space: pre-wrap;
  word-wrap: break-word;
`,qT=E.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${A=>A.theme.colors.border.secondary||"#f1f3f4"};
  font-size: 0.875rem;
  color: ${A=>A.theme.colors.text.secondary||"#6c757d"};
`,Mf=E.span`
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
`,JT=E.div`
  background-color: ${A=>A.theme.colors.surface.primary||"#fff"};
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 90%;
`,YT=E.h3`
  margin: 0 0 1rem 0;
  color: ${A=>A.theme.colors.text.primary||"#111"};
`,ZT=E.p`
  margin: 0 0 1.5rem 0;
  color: ${A=>A.theme.colors.text.secondary||"#6c757d"};
`,ex=E.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`,Kf=E.button`
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
`,Ax=({post:A,onDelete:e,showActions:t=!0})=>{const{currentUser:r}=Se(),[n,s]=L.useState(!1),[i,a]=L.useState(!1),c=C=>{if(!C)return"Just now";const _=C.toDate?C.toDate():new Date(C),b=Math.abs(new Date-_),x=Math.ceil(b/(1e3*60*60*24));return x===1?"Yesterday":x<7?`${x} days ago`:_.toLocaleDateString()},l=r&&r.uid===A.userId,h=()=>{s(!0)},f=()=>y(null,null,function*(){a(!0);try{e&&(yield e(A.id))}catch(C){console.error("Error deleting post:",C)}finally{a(!1),s(!1)}}),p=()=>{s(!1)};return d.jsxs(d.Fragment,{children:[d.jsxs(kT,{children:[d.jsxs(OT,{children:[d.jsxs(NT,{children:[d.jsx(VT,{$type:A.type,children:A.type}),d.jsx(MT,{children:A.title}),d.jsxs(KT,{children:[d.jsx(jT,{children:A.userDisplayName||"Anonymous"}),d.jsx(GT,{children:c(A.timestamp)})]})]}),t&&l&&d.jsx($T,{children:d.jsx(WT,{className:"delete",onClick:h,title:"Delete post",children:"🗑️"})})]}),d.jsx(XT,{children:A.content}),d.jsxs(qT,{children:[d.jsxs(Mf,{children:["❤️ ",A.likesCount||0]}),d.jsxs(Mf,{children:["💬 ",A.commentsCount||0]})]})]}),n&&d.jsx(zT,{onClick:C=>C.target===C.currentTarget&&p(),children:d.jsxs(JT,{children:[d.jsx(YT,{children:"Delete Post"}),d.jsxs(ZT,{children:['Are you sure you want to delete "',A.title,'"? This action cannot be undone.']}),d.jsxs(ex,{children:[d.jsx(Kf,{className:"cancel",onClick:p,disabled:i,children:"Cancel"}),d.jsx(Kf,{className:"delete",onClick:f,disabled:i,children:i?"Deleting...":"Delete"})]})]})})]})},tx=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${A=>A.theme.spacing.large||"20px"};
  background-color: ${A=>A.theme.colors.background.secondary||"#f4f4f4"};
`,rx=E.div`
  display: flex;
  align-items: center;
  margin-bottom: ${A=>A.theme.spacing.large||"20px"};
  width: 100%;
  max-width: 800px;
`,nx=E.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: ${A=>A.theme.spacing.medium||"20px"};
  object-fit: cover;
  border: 3px solid ${A=>A.theme.colors.accent||"#007bff"};
`,sx=E.div`
  display: flex;
  flex-direction: column;
`,ix=E.h1`
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  color: ${A=>A.theme.colors.text.primary||"#111"};
`,jf=E.p`
  font-size: 1rem;
  color: ${A=>A.theme.colors.text.secondary||"#555"};
  margin-top: ${A=>A.theme.spacing.small||"8px"};
`,Gf=E.button`
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
`,ox=E.button`
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
`,ax=E.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 400px;
  margin-bottom: ${A=>A.theme.spacing.large||"20px"};
  gap: ${A=>A.theme.spacing.medium||"16px"};
`,$f=E.div`
  font-size: 1rem;
  color: ${A=>A.theme.colors.text.secondary||"#333"};
  text-align: center;
`,Wf=E.div`
  width: 100%;
  max-width: 800px;
  margin-top: ${A=>A.theme.spacing.large||"20px"};
`,Xf=E.h2`
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: ${A=>A.theme.spacing.medium||"15px"};
  color: ${A=>A.theme.colors.text.primary||"#222"};
`,qf=E.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${A=>A.theme.spacing.medium||"20px"};
  gap: ${A=>A.theme.spacing.small||"8px"};
`,Sn=E.button`
  padding: ${A=>A.theme.spacing.small} ${A=>A.theme.spacing.medium};
  background-color: ${A=>A.$isActive?A.theme.colors.accent||"#007bff":A.theme.colors.background.primary||"#f0f0f0"};
  border: 1px solid ${A=>A.$isActive?A.theme.colors.accent||"#007bff":A.theme.colors.background.accent||"#ccc"};
  border-radius: ${A=>A.theme.borderRadius.small||"4px"};
  cursor: pointer;
  color: ${A=>A.$isActive?A.theme.colors.text.primary||"white":A.theme.colors.text.secondary||"#333"};
  
  &:hover {
    background-color: ${A=>A.$isActive?"#0056b3":"#e0e0e0"};
  }
`,cx=E.div`
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
`;const zf=E.div`
  display: flex;
  flex-direction: column;
  gap: ${A=>A.theme.spacing.medium||"15px"};
`,Jf=E.div`
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
`,Yf=E.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: ${A=>A.theme.borderRadius.small||"4px"};
  margin-right: ${A=>A.theme.spacing.medium||"15px"};
  flex-shrink: 0;
`,Zf=E.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,eg=E.h4`
  font-size: 1.1rem;
  color: ${A=>A.theme.colors.text.primary||"#333"};
  font-weight: 600;
  margin: 0 0 ${A=>A.theme.spacing.small||"5px"} 0;
`,Ag=E.p`
  font-size: 0.95rem;
  color: ${A=>A.theme.colors.text.secondary||"#666"};
  margin: 0;
  font-weight: 400;
`;function tg(){const{username:A}=hp(),e=fA(),[t,r]=L.useState(null),[n,s]=L.useState("All"),[i,a]=L.useState("Grid"),{currentUser:c}=Se(),[l,h]=L.useState(!1),[f,p]=L.useState(!1),{followUser:C,unfollowUser:_,loading:v,error:b}=cT(),[x,S]=L.useState(null),[D,k]=L.useState(0),O=()=>{k(J=>J+1)},H=A===(c==null?void 0:c.displayName);tT({redirectOnIncomplete:H,redirectPath:"/profile-setup"});const U=!!c,m=(c==null?void 0:c.displayName)||"Guest",{posts:w,loading:Q,error:F,refreshPosts:T,deletePost:I}=dT(x,n),te=()=>y(null,null,function*(){if(!c||!x||!t){console.error("Missing required data for follow action:",{currentUser:!!c,targetUserId:x,userData:!!t});return}console.log("Starting follow action:",{action:t.isFollowing?"unfollow":"follow",currentUserId:c.uid,targetUserId:x,targetUsername:A});try{t.isFollowing?(console.log("Unfollowing user..."),yield _(x),console.log("Successfully unfollowed user"),r(J=>Ve(Ie({},J),{isFollowing:!1,followersCount:Math.max(0,J.followersCount-1)}))):(console.log("Following user..."),yield C(x,A),console.log("Successfully followed user"),r(J=>Ve(Ie({},J),{isFollowing:!0,followersCount:J.followersCount+1})))}catch(J){console.error("Error toggling follow status:",J)}});L.useEffect(()=>{if(!A&&U)e(`/profile/${c.displayName}`);else if(!A&&!U){r(null),e("/login");return}},[A,U,c,e]),L.useEffect(()=>{if(A){function J(){return y(this,null,function*(){try{console.log("Fetching profile data for:",A);const Ne=qt(ee,"userprofiles"),gA=sn(Ne,kt("displayName","==",A)),CA=yield wA(()=>vs(gA),{timeoutMs:15e3,operationName:`Fetch profile for ${A}`}),Qe=c&&c.displayName===A;if(CA.empty)if(Qe){const oe=sA(ee,"userprofiles",c.uid),de=yield wA(()=>yA(oe),{timeoutMs:1e4,operationName:`Fetch profile by UID for ${c.uid}`});if(de.exists()){const ie=de.data();!ie.displayName&&c.displayName&&(yield wA(()=>at(oe,{displayName:c.displayName},{merge:!0}),{timeoutMs:8e3,operationName:"Update displayName in profile"}),ie.displayName=c.displayName),r({name:ie.displayName||c.displayName||"User",profilePicture:ie.profilePicture||c.photoURL||"https://via.placeholder.com/150",bio:ie.bio||'Click "Edit Profile" to add your bio',actualBio:ie.bio||"",followersCount:ie.followerCount||0,followingCount:ie.followingCount||0,isFollowing:!1,loggedAlbums:ie.musicCollection||[],profileSetup:!!(ie.bio&&(ie.profilePicture||c!=null&&c.photoURL))}),ie.displayName&&ie.displayName!==A&&e(`/profile/${ie.displayName}`)}else console.log("No user profile found, showing empty profile view"),r({name:c.displayName||"User",profilePicture:c.photoURL||"https://via.placeholder.com/150",bio:'Click "Edit Profile" to add your bio',actualBio:"",followersCount:0,followingCount:0,isFollowing:!1,loggedAlbums:[],profileSetup:!1})}else console.error("User not found"),e("/");else{const oe=CA.docs[0],de=oe.data();S(oe.id);let ie=!1;if(c&&!Qe)try{console.log("Checking follow status between:",c.uid,"and",oe.id),ie=yield hw(c.uid,oe.id),console.log("Follow status result:",ie)}catch(HA){console.error("Error checking follow status:",HA)}console.log("Setting user data:",{name:de.displayName,bio:de.bio,actualBio:de.bio,followersCount:de.followerCount||0,followingCount:de.followingCount||0,isFollowing:ie}),console.log("Raw Firestore userData:",de),r({name:de.displayName||"User",profilePicture:de.profilePicture||"https://via.placeholder.com/150",bio:de.bio||(Qe?'Click "Edit Profile" to add your bio':"No bio available"),actualBio:de.bio||"",followersCount:de.followerCount||0,followingCount:de.followingCount||0,isFollowing:ie,loggedAlbums:de.musicCollection||[],profileSetup:!!(de.bio&&(de.profilePicture||Qe&&(c!=null&&c.photoURL)))})}}catch(Ne){Yb(Ne,"Fetching profile data"),r({name:"Error",profilePicture:"https://via.placeholder.com/150",bio:"There was a problem loading this profile. Please try refreshing the page.",actualBio:"",followersCount:0,followingCount:0,isFollowing:!1,loggedAlbums:[],profileSetup:!1})}})}J()}},[A,c,e,H,D]);const ce=()=>{T()},ye=J=>y(null,null,function*(){return yield I(J)});if(!t)return d.jsx("div",{children:"Loading..."});const ge=U&&A===m;return d.jsxs(tx,{children:[d.jsxs(rx,{children:[d.jsx(nx,{src:t.profilePicture,alt:`${t.name}'s profile`}),d.jsxs(sx,{children:["          ",d.jsx(ix,{children:t.name}),d.jsx(jf,{children:t.bio}),ge&&!t.profileSetup&&d.jsx(jf,{style:{color:"#e67e22",fontStyle:"italic",marginTop:"5px"},children:'Your profile is not fully set up yet. Click "Edit Profile" to complete your profile.'}),ge?d.jsx(Gf,{onClick:()=>h(!0),children:t.profileSetup?"Edit Profile":"Complete Profile Setup"}):d.jsxs(d.Fragment,{children:[d.jsx(ox,{$isFollowing:t.isFollowing,onClick:te,disabled:v,children:v?"Loading...":t.isFollowing?"Following":"Follow"}),b&&d.jsxs("div",{style:{color:"#e74c3c",fontSize:"14px",marginTop:"5px"},children:["Error: ",b]})]})]})]}),d.jsxs(ax,{children:[d.jsxs($f,{children:["Followers: ",t.followersCount]}),d.jsxs($f,{children:["Following: ",t.followingCount]})]}),d.jsxs(Wf,{children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[d.jsx(Xf,{children:"Posts"}),ge&&d.jsx(Gf,{onClick:()=>p(!0),children:"Create Post"})]}),d.jsxs(qf,{children:[d.jsx(Sn,{$isActive:n==="All",onClick:()=>s("All"),children:"All"}),d.jsx(Sn,{$isActive:n==="Reviews",onClick:()=>s("Reviews"),children:"Reviews"}),d.jsx(Sn,{$isActive:n==="Notes",onClick:()=>s("Notes"),children:"Notes"})]}),d.jsx(cx,{children:Q?d.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#777"},children:"Loading posts..."}):F?d.jsxs("div",{style:{textAlign:"center",padding:"20px",color:"#e74c3c"},children:["Error loading posts: ",F]}):w.length>0?w.map(J=>d.jsx(Ax,{post:J,onDelete:ye,showActions:ge},J.id)):d.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#777"},children:ge?"You haven't created any posts yet. Click 'Create Post' to get started!":"This user hasn't created any posts yet."})})]}),"      ",d.jsxs(Wf,{children:[d.jsx(Xf,{children:"Music"}),"        ",d.jsxs(qf,{children:["          ",d.jsx(Sn,{$isActive:i==="Grid",onClick:()=>a("Grid"),children:"Music"}),d.jsx(Sn,{$isActive:i==="List",onClick:()=>a("List"),children:"Want to Listen"})]}),t.loggedAlbums&&t.loggedAlbums.length>0?i==="Grid"?d.jsx(zf,{children:t.loggedAlbums.map(J=>d.jsxs(Jf,{children:[d.jsx(Yf,{src:J.cover,alt:J.title}),d.jsxs(Zf,{children:[d.jsx(eg,{children:J.title}),d.jsx(Ag,{children:J.artist})]})]},J.id))}):d.jsx(zf,{children:t.loggedAlbums.map(J=>d.jsxs(Jf,{children:[d.jsx(Yf,{src:J.cover,alt:J.title}),d.jsxs(Zf,{children:[d.jsx(eg,{children:J.title}),d.jsx(Ag,{children:J.artist})]})]},J.id))}):d.jsx("div",{style:{textAlign:"center",padding:"20px",color:"#777"},children:ge?"You haven't logged any music yet. Start adding albums to your collection!":"This user hasn't logged any music yet."})]}),l&&d.jsx(_T,{isOpen:l,onClose:J=>{h(!1),J&&(console.log("Refreshing profile data after modal close"),O())},userData:{name:t.name,bio:t.actualBio||"",profilePicture:t.profilePicture,isNewProfile:!t.profileSetup}}),f&&d.jsx(HT,{isOpen:f,onClose:()=>p(!1),onPostCreated:ce})]})}/*!
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
***************************************************************************** */var Wc=function(A,e){return Wc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])},Wc(A,e)};function LA(A,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Wc(A,e);function t(){this.constructor=A}A.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Xc=function(){return Xc=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Xc.apply(this,arguments)};function cA(A,e,t,r){function n(s){return s instanceof t?s:new t(function(i){i(s)})}return new(t||(t=Promise))(function(s,i){function a(h){try{l(r.next(h))}catch(f){i(f)}}function c(h){try{l(r.throw(h))}catch(f){i(f)}}function l(h){h.done?s(h.value):n(h.value).then(a,c)}l((r=r.apply(A,[])).next())})}function eA(A,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,n,s,i;return i={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function a(l){return function(h){return c([l,h])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;t;)try{if(r=1,n&&(s=l[0]&2?n.return:l[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,l[1])).done)return s;switch(n=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,n=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){t.label=l[1];break}if(l[0]===6&&t.label<s[1]){t.label=s[1],s=l;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(l);break}s[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(A,t)}catch(h){l=[6,h],n=0}finally{r=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function gi(A,e,t){if(arguments.length===2)for(var r=0,n=e.length,s;r<n;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return A.concat(s||e)}var gt=function(){function A(e,t,r,n){this.left=e,this.top=t,this.width=r,this.height=n}return A.prototype.add=function(e,t,r,n){return new A(this.left+e,this.top+t,this.width+r,this.height+n)},A.fromClientRect=function(e,t){return new A(t.left+e.windowBounds.left,t.top+e.windowBounds.top,t.width,t.height)},A.fromDOMRectList=function(e,t){var r=Array.from(t).find(function(n){return n.width!==0});return r?new A(r.left+e.windowBounds.left,r.top+e.windowBounds.top,r.width,r.height):A.EMPTY},A.EMPTY=new A(0,0,0,0),A}(),Aa=function(A,e){return gt.fromClientRect(A,e.getBoundingClientRect())},lx=function(A){var e=A.body,t=A.documentElement;if(!e||!t)throw new Error("Unable to get document size");var r=Math.max(Math.max(e.scrollWidth,t.scrollWidth),Math.max(e.offsetWidth,t.offsetWidth),Math.max(e.clientWidth,t.clientWidth)),n=Math.max(Math.max(e.scrollHeight,t.scrollHeight),Math.max(e.offsetHeight,t.offsetHeight),Math.max(e.clientHeight,t.clientHeight));return new gt(0,0,r,n)},ta=function(A){for(var e=[],t=0,r=A.length;t<r;){var n=A.charCodeAt(t++);if(n>=55296&&n<=56319&&t<r){var s=A.charCodeAt(t++);(s&64512)===56320?e.push(((n&1023)<<10)+(s&1023)+65536):(e.push(n),t--)}else e.push(n)}return e},Fe=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],n=-1,s="";++n<t;){var i=A[n];i<=65535?r.push(i):(i-=65536,r.push((i>>10)+55296,i%1024+56320)),(n+1===t||r.length>16384)&&(s+=String.fromCharCode.apply(String,r),r.length=0)}return s},rg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",ux=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(var pi=0;pi<rg.length;pi++)ux[rg.charCodeAt(pi)]=pi;var ng="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Kn=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(var mi=0;mi<ng.length;mi++)Kn[ng.charCodeAt(mi)]=mi;var hx=function(A){var e=A.length*.75,t=A.length,r,n=0,s,i,a,c;A[A.length-1]==="="&&(e--,A[A.length-2]==="="&&e--);var l=typeof ArrayBuffer!="undefined"&&typeof Uint8Array!="undefined"&&typeof Uint8Array.prototype.slice!="undefined"?new ArrayBuffer(e):new Array(e),h=Array.isArray(l)?l:new Uint8Array(l);for(r=0;r<t;r+=4)s=Kn[A.charCodeAt(r)],i=Kn[A.charCodeAt(r+1)],a=Kn[A.charCodeAt(r+2)],c=Kn[A.charCodeAt(r+3)],h[n++]=s<<2|i>>4,h[n++]=(i&15)<<4|a>>2,h[n++]=(a&3)<<6|c&63;return l},dx=function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t},fx=function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t},hr=5,bu=11,Za=2,gx=bu-hr,pw=65536>>hr,px=1<<hr,ec=px-1,mx=1024>>hr,Bx=pw+mx,wx=Bx,yx=32,Cx=wx+yx,vx=65536>>bu,Ex=1<<gx,Ix=Ex-1,sg=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},_x=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},Ux=function(A,e){var t=hx(A),r=Array.isArray(t)?fx(t):new Uint32Array(t),n=Array.isArray(t)?dx(t):new Uint16Array(t),s=24,i=sg(n,s/2,r[4]/2),a=r[5]===2?sg(n,(s+r[4])/2):_x(r,Math.ceil((s+r[4])/4));return new Qx(r[0],r[1],r[2],r[3],i,a)},Qx=function(){function A(e,t,r,n,s,i){this.initialValue=e,this.errorValue=t,this.highStart=r,this.highValueIndex=n,this.index=s,this.data=i}return A.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>hr],t=(t<<Za)+(e&ec),this.data[t];if(e<=65535)return t=this.index[pw+(e-55296>>hr)],t=(t<<Za)+(e&ec),this.data[t];if(e<this.highStart)return t=Cx-vx+(e>>bu),t=this.index[t],t+=e>>hr&Ix,t=this.index[t],t=(t<<Za)+(e&ec),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),ig="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bx=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(var Bi=0;Bi<ig.length;Bi++)bx[ig.charCodeAt(Bi)]=Bi;var Fx="KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==",og=50,Tx=1,mw=2,Bw=3,xx=4,Sx=5,ag=7,ww=8,cg=9,xt=10,qc=11,lg=12,zc=13,Rx=14,jn=15,Jc=16,wi=17,Rn=18,Dx=19,ug=20,Yc=21,Dn=22,Ac=23,Tr=24,mA=25,Gn=26,$n=27,xr=28,Px=29,or=30,Lx=31,yi=32,Ci=33,Zc=34,el=35,Al=36,Es=37,tl=38,Ji=39,Yi=40,tc=41,yw=42,Hx=43,kx=[9001,65288],Cw="!",re="×",vi="÷",rl=Ux(Fx),At=[or,Al],nl=[Tx,mw,Bw,Sx],vw=[xt,ww],hg=[$n,Gn],Ox=nl.concat(vw),dg=[tl,Ji,Yi,Zc,el],Nx=[jn,zc],Vx=function(A,e){e===void 0&&(e="strict");var t=[],r=[],n=[];return A.forEach(function(s,i){var a=rl.get(s);if(a>og?(n.push(!0),a-=og):n.push(!1),["normal","auto","loose"].indexOf(e)!==-1&&[8208,8211,12316,12448].indexOf(s)!==-1)return r.push(i),t.push(Jc);if(a===xx||a===qc){if(i===0)return r.push(i),t.push(or);var c=t[i-1];return Ox.indexOf(c)===-1?(r.push(r[i-1]),t.push(c)):(r.push(i),t.push(or))}if(r.push(i),a===Lx)return t.push(e==="strict"?Yc:Es);if(a===yw||a===Px)return t.push(or);if(a===Hx)return s>=131072&&s<=196605||s>=196608&&s<=262141?t.push(Es):t.push(or);t.push(a)}),[r,t,n]},rc=function(A,e,t,r){var n=r[t];if(Array.isArray(A)?A.indexOf(n)!==-1:A===n)for(var s=t;s<=r.length;){s++;var i=r[s];if(i===e)return!0;if(i!==xt)break}if(n===xt)for(var s=t;s>0;){s--;var a=r[s];if(Array.isArray(A)?A.indexOf(a)!==-1:A===a)for(var c=t;c<=r.length;){c++;var i=r[c];if(i===e)return!0;if(i!==xt)break}if(a!==xt)break}return!1},fg=function(A,e){for(var t=A;t>=0;){var r=e[t];if(r===xt)t--;else return r}return 0},Mx=function(A,e,t,r,n){if(t[r]===0)return re;var s=r-1;if(Array.isArray(n)&&n[s]===!0)return re;var i=s-1,a=s+1,c=e[s],l=i>=0?e[i]:0,h=e[a];if(c===mw&&h===Bw)return re;if(nl.indexOf(c)!==-1)return Cw;if(nl.indexOf(h)!==-1||vw.indexOf(h)!==-1)return re;if(fg(s,e)===ww)return vi;if(rl.get(A[s])===qc||(c===yi||c===Ci)&&rl.get(A[a])===qc||c===ag||h===ag||c===cg||[xt,zc,jn].indexOf(c)===-1&&h===cg||[wi,Rn,Dx,Tr,xr].indexOf(h)!==-1||fg(s,e)===Dn||rc(Ac,Dn,s,e)||rc([wi,Rn],Yc,s,e)||rc(lg,lg,s,e))return re;if(c===xt)return vi;if(c===Ac||h===Ac)return re;if(h===Jc||c===Jc)return vi;if([zc,jn,Yc].indexOf(h)!==-1||c===Rx||l===Al&&Nx.indexOf(c)!==-1||c===xr&&h===Al||h===ug||At.indexOf(h)!==-1&&c===mA||At.indexOf(c)!==-1&&h===mA||c===$n&&[Es,yi,Ci].indexOf(h)!==-1||[Es,yi,Ci].indexOf(c)!==-1&&h===Gn||At.indexOf(c)!==-1&&hg.indexOf(h)!==-1||hg.indexOf(c)!==-1&&At.indexOf(h)!==-1||[$n,Gn].indexOf(c)!==-1&&(h===mA||[Dn,jn].indexOf(h)!==-1&&e[a+1]===mA)||[Dn,jn].indexOf(c)!==-1&&h===mA||c===mA&&[mA,xr,Tr].indexOf(h)!==-1)return re;if([mA,xr,Tr,wi,Rn].indexOf(h)!==-1)for(var f=s;f>=0;){var p=e[f];if(p===mA)return re;if([xr,Tr].indexOf(p)!==-1)f--;else break}if([$n,Gn].indexOf(h)!==-1)for(var f=[wi,Rn].indexOf(c)!==-1?i:s;f>=0;){var p=e[f];if(p===mA)return re;if([xr,Tr].indexOf(p)!==-1)f--;else break}if(tl===c&&[tl,Ji,Zc,el].indexOf(h)!==-1||[Ji,Zc].indexOf(c)!==-1&&[Ji,Yi].indexOf(h)!==-1||[Yi,el].indexOf(c)!==-1&&h===Yi||dg.indexOf(c)!==-1&&[ug,Gn].indexOf(h)!==-1||dg.indexOf(h)!==-1&&c===$n||At.indexOf(c)!==-1&&At.indexOf(h)!==-1||c===Tr&&At.indexOf(h)!==-1||At.concat(mA).indexOf(c)!==-1&&h===Dn&&kx.indexOf(A[a])===-1||At.concat(mA).indexOf(h)!==-1&&c===Rn)return re;if(c===tc&&h===tc){for(var C=t[s],_=1;C>0&&(C--,e[C]===tc);)_++;if(_%2!==0)return re}return c===yi&&h===Ci?re:vi},Kx=function(A,e){e||(e={lineBreak:"normal",wordBreak:"normal"});var t=Vx(A,e.lineBreak),r=t[0],n=t[1],s=t[2];(e.wordBreak==="break-all"||e.wordBreak==="break-word")&&(n=n.map(function(a){return[mA,or,yw].indexOf(a)!==-1?Es:a}));var i=e.wordBreak==="keep-all"?s.map(function(a,c){return a&&A[c]>=19968&&A[c]<=40959}):void 0;return[r,n,i]},jx=function(){function A(e,t,r,n){this.codePoints=e,this.required=t===Cw,this.start=r,this.end=n}return A.prototype.slice=function(){return Fe.apply(void 0,this.codePoints.slice(this.start,this.end))},A}(),Gx=function(A,e){var t=ta(A),r=Kx(t,e),n=r[0],s=r[1],i=r[2],a=t.length,c=0,l=0;return{next:function(){if(l>=a)return{done:!0,value:null};for(var h=re;l<a&&(h=Mx(t,s,n,++l,i))===re;);if(h!==re||l===a){var f=new jx(t,h,c,l);return c=l,{value:f,done:!1}}return{done:!0,value:null}}}},$x=1,Wx=2,Ls=4,gg=8,Io=10,pg=47,ss=92,Xx=9,qx=32,Ei=34,Pn=61,zx=35,Jx=36,Yx=37,Ii=39,_i=40,Ln=41,Zx=95,uA=45,e1=33,A1=60,t1=62,r1=64,n1=91,s1=93,i1=61,o1=123,Ui=63,a1=125,mg=124,c1=126,l1=128,Bg=65533,nc=42,lr=43,u1=44,h1=58,d1=59,Is=46,f1=0,g1=8,p1=11,m1=14,B1=31,w1=127,OA=-1,Ew=48,Iw=97,_w=101,y1=102,C1=117,v1=122,Uw=65,Qw=69,bw=70,E1=85,I1=90,tA=function(A){return A>=Ew&&A<=57},_1=function(A){return A>=55296&&A<=57343},Sr=function(A){return tA(A)||A>=Uw&&A<=bw||A>=Iw&&A<=y1},U1=function(A){return A>=Iw&&A<=v1},Q1=function(A){return A>=Uw&&A<=I1},b1=function(A){return U1(A)||Q1(A)},F1=function(A){return A>=l1},Qi=function(A){return A===Io||A===Xx||A===qx},_o=function(A){return b1(A)||F1(A)||A===Zx},wg=function(A){return _o(A)||tA(A)||A===uA},T1=function(A){return A>=f1&&A<=g1||A===p1||A>=m1&&A<=B1||A===w1},It=function(A,e){return A!==ss?!1:e!==Io},bi=function(A,e,t){return A===uA?_o(e)||It(e,t):_o(A)?!0:!!(A===ss&&It(A,e))},sc=function(A,e,t){return A===lr||A===uA?tA(e)?!0:e===Is&&tA(t):tA(A===Is?e:A)},x1=function(A){var e=0,t=1;(A[e]===lr||A[e]===uA)&&(A[e]===uA&&(t=-1),e++);for(var r=[];tA(A[e]);)r.push(A[e++]);var n=r.length?parseInt(Fe.apply(void 0,r),10):0;A[e]===Is&&e++;for(var s=[];tA(A[e]);)s.push(A[e++]);var i=s.length,a=i?parseInt(Fe.apply(void 0,s),10):0;(A[e]===Qw||A[e]===_w)&&e++;var c=1;(A[e]===lr||A[e]===uA)&&(A[e]===uA&&(c=-1),e++);for(var l=[];tA(A[e]);)l.push(A[e++]);var h=l.length?parseInt(Fe.apply(void 0,l),10):0;return t*(n+a*Math.pow(10,-i))*Math.pow(10,c*h)},S1={type:2},R1={type:3},D1={type:4},P1={type:13},L1={type:8},H1={type:21},k1={type:9},O1={type:10},N1={type:11},V1={type:12},M1={type:14},Fi={type:23},K1={type:1},j1={type:25},G1={type:24},$1={type:26},W1={type:27},X1={type:28},q1={type:29},z1={type:31},sl={type:32},Fw=function(){function A(){this._value=[]}return A.prototype.write=function(e){this._value=this._value.concat(ta(e))},A.prototype.read=function(){for(var e=[],t=this.consumeToken();t!==sl;)e.push(t),t=this.consumeToken();return e},A.prototype.consumeToken=function(){var e=this.consumeCodePoint();switch(e){case Ei:return this.consumeStringToken(Ei);case zx:var t=this.peekCodePoint(0),r=this.peekCodePoint(1),n=this.peekCodePoint(2);if(wg(t)||It(r,n)){var s=bi(t,r,n)?Wx:$x,i=this.consumeName();return{type:5,value:i,flags:s}}break;case Jx:if(this.peekCodePoint(0)===Pn)return this.consumeCodePoint(),P1;break;case Ii:return this.consumeStringToken(Ii);case _i:return S1;case Ln:return R1;case nc:if(this.peekCodePoint(0)===Pn)return this.consumeCodePoint(),M1;break;case lr:if(sc(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case u1:return D1;case uA:var a=e,c=this.peekCodePoint(0),l=this.peekCodePoint(1);if(sc(a,c,l))return this.reconsumeCodePoint(e),this.consumeNumericToken();if(bi(a,c,l))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();if(c===uA&&l===t1)return this.consumeCodePoint(),this.consumeCodePoint(),G1;break;case Is:if(sc(e,this.peekCodePoint(0),this.peekCodePoint(1)))return this.reconsumeCodePoint(e),this.consumeNumericToken();break;case pg:if(this.peekCodePoint(0)===nc)for(this.consumeCodePoint();;){var h=this.consumeCodePoint();if(h===nc&&(h=this.consumeCodePoint(),h===pg))return this.consumeToken();if(h===OA)return this.consumeToken()}break;case h1:return $1;case d1:return W1;case A1:if(this.peekCodePoint(0)===e1&&this.peekCodePoint(1)===uA&&this.peekCodePoint(2)===uA)return this.consumeCodePoint(),this.consumeCodePoint(),j1;break;case r1:var f=this.peekCodePoint(0),p=this.peekCodePoint(1),C=this.peekCodePoint(2);if(bi(f,p,C)){var i=this.consumeName();return{type:7,value:i}}break;case n1:return X1;case ss:if(It(e,this.peekCodePoint(0)))return this.reconsumeCodePoint(e),this.consumeIdentLikeToken();break;case s1:return q1;case i1:if(this.peekCodePoint(0)===Pn)return this.consumeCodePoint(),L1;break;case o1:return N1;case a1:return V1;case C1:case E1:var _=this.peekCodePoint(0),v=this.peekCodePoint(1);return _===lr&&(Sr(v)||v===Ui)&&(this.consumeCodePoint(),this.consumeUnicodeRangeToken()),this.reconsumeCodePoint(e),this.consumeIdentLikeToken();case mg:if(this.peekCodePoint(0)===Pn)return this.consumeCodePoint(),k1;if(this.peekCodePoint(0)===mg)return this.consumeCodePoint(),H1;break;case c1:if(this.peekCodePoint(0)===Pn)return this.consumeCodePoint(),O1;break;case OA:return sl}return Qi(e)?(this.consumeWhiteSpace(),z1):tA(e)?(this.reconsumeCodePoint(e),this.consumeNumericToken()):_o(e)?(this.reconsumeCodePoint(e),this.consumeIdentLikeToken()):{type:6,value:Fe(e)}},A.prototype.consumeCodePoint=function(){var e=this._value.shift();return typeof e=="undefined"?-1:e},A.prototype.reconsumeCodePoint=function(e){this._value.unshift(e)},A.prototype.peekCodePoint=function(e){return e>=this._value.length?-1:this._value[e]},A.prototype.consumeUnicodeRangeToken=function(){for(var e=[],t=this.consumeCodePoint();Sr(t)&&e.length<6;)e.push(t),t=this.consumeCodePoint();for(var r=!1;t===Ui&&e.length<6;)e.push(t),t=this.consumeCodePoint(),r=!0;if(r){var n=parseInt(Fe.apply(void 0,e.map(function(c){return c===Ui?Ew:c})),16),s=parseInt(Fe.apply(void 0,e.map(function(c){return c===Ui?bw:c})),16);return{type:30,start:n,end:s}}var i=parseInt(Fe.apply(void 0,e),16);if(this.peekCodePoint(0)===uA&&Sr(this.peekCodePoint(1))){this.consumeCodePoint(),t=this.consumeCodePoint();for(var a=[];Sr(t)&&a.length<6;)a.push(t),t=this.consumeCodePoint();var s=parseInt(Fe.apply(void 0,a),16);return{type:30,start:i,end:s}}else return{type:30,start:i,end:i}},A.prototype.consumeIdentLikeToken=function(){var e=this.consumeName();return e.toLowerCase()==="url"&&this.peekCodePoint(0)===_i?(this.consumeCodePoint(),this.consumeUrlToken()):this.peekCodePoint(0)===_i?(this.consumeCodePoint(),{type:19,value:e}):{type:20,value:e}},A.prototype.consumeUrlToken=function(){var e=[];if(this.consumeWhiteSpace(),this.peekCodePoint(0)===OA)return{type:22,value:""};var t=this.peekCodePoint(0);if(t===Ii||t===Ei){var r=this.consumeStringToken(this.consumeCodePoint());return r.type===0&&(this.consumeWhiteSpace(),this.peekCodePoint(0)===OA||this.peekCodePoint(0)===Ln)?(this.consumeCodePoint(),{type:22,value:r.value}):(this.consumeBadUrlRemnants(),Fi)}for(;;){var n=this.consumeCodePoint();if(n===OA||n===Ln)return{type:22,value:Fe.apply(void 0,e)};if(Qi(n))return this.consumeWhiteSpace(),this.peekCodePoint(0)===OA||this.peekCodePoint(0)===Ln?(this.consumeCodePoint(),{type:22,value:Fe.apply(void 0,e)}):(this.consumeBadUrlRemnants(),Fi);if(n===Ei||n===Ii||n===_i||T1(n))return this.consumeBadUrlRemnants(),Fi;if(n===ss)if(It(n,this.peekCodePoint(0)))e.push(this.consumeEscapedCodePoint());else return this.consumeBadUrlRemnants(),Fi;else e.push(n)}},A.prototype.consumeWhiteSpace=function(){for(;Qi(this.peekCodePoint(0));)this.consumeCodePoint()},A.prototype.consumeBadUrlRemnants=function(){for(;;){var e=this.consumeCodePoint();if(e===Ln||e===OA)return;It(e,this.peekCodePoint(0))&&this.consumeEscapedCodePoint()}},A.prototype.consumeStringSlice=function(e){for(var t=5e4,r="";e>0;){var n=Math.min(t,e);r+=Fe.apply(void 0,this._value.splice(0,n)),e-=n}return this._value.shift(),r},A.prototype.consumeStringToken=function(e){var t="",r=0;do{var n=this._value[r];if(n===OA||n===void 0||n===e)return t+=this.consumeStringSlice(r),{type:0,value:t};if(n===Io)return this._value.splice(0,r),K1;if(n===ss){var s=this._value[r+1];s!==OA&&s!==void 0&&(s===Io?(t+=this.consumeStringSlice(r),r=-1,this._value.shift()):It(n,s)&&(t+=this.consumeStringSlice(r),t+=Fe(this.consumeEscapedCodePoint()),r=-1))}r++}while(!0)},A.prototype.consumeNumber=function(){var e=[],t=Ls,r=this.peekCodePoint(0);for((r===lr||r===uA)&&e.push(this.consumeCodePoint());tA(this.peekCodePoint(0));)e.push(this.consumeCodePoint());r=this.peekCodePoint(0);var n=this.peekCodePoint(1);if(r===Is&&tA(n))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=gg;tA(this.peekCodePoint(0));)e.push(this.consumeCodePoint());r=this.peekCodePoint(0),n=this.peekCodePoint(1);var s=this.peekCodePoint(2);if((r===Qw||r===_w)&&((n===lr||n===uA)&&tA(s)||tA(n)))for(e.push(this.consumeCodePoint(),this.consumeCodePoint()),t=gg;tA(this.peekCodePoint(0));)e.push(this.consumeCodePoint());return[x1(e),t]},A.prototype.consumeNumericToken=function(){var e=this.consumeNumber(),t=e[0],r=e[1],n=this.peekCodePoint(0),s=this.peekCodePoint(1),i=this.peekCodePoint(2);if(bi(n,s,i)){var a=this.consumeName();return{type:15,number:t,flags:r,unit:a}}return n===Yx?(this.consumeCodePoint(),{type:16,number:t,flags:r}):{type:17,number:t,flags:r}},A.prototype.consumeEscapedCodePoint=function(){var e=this.consumeCodePoint();if(Sr(e)){for(var t=Fe(e);Sr(this.peekCodePoint(0))&&t.length<6;)t+=Fe(this.consumeCodePoint());Qi(this.peekCodePoint(0))&&this.consumeCodePoint();var r=parseInt(t,16);return r===0||_1(r)||r>1114111?Bg:r}return e===OA?Bg:e},A.prototype.consumeName=function(){for(var e="";;){var t=this.consumeCodePoint();if(wg(t))e+=Fe(t);else if(It(t,this.peekCodePoint(0)))e+=Fe(this.consumeEscapedCodePoint());else return this.reconsumeCodePoint(t),e}},A}(),Tw=function(){function A(e){this._tokens=e}return A.create=function(e){var t=new Fw;return t.write(e),new A(t.read())},A.parseValue=function(e){return A.create(e).parseComponentValue()},A.parseValues=function(e){return A.create(e).parseComponentValues()},A.prototype.parseComponentValue=function(){for(var e=this.consumeToken();e.type===31;)e=this.consumeToken();if(e.type===32)throw new SyntaxError("Error parsing CSS component value, unexpected EOF");this.reconsumeToken(e);var t=this.consumeComponentValue();do e=this.consumeToken();while(e.type===31);if(e.type===32)return t;throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one")},A.prototype.parseComponentValues=function(){for(var e=[];;){var t=this.consumeComponentValue();if(t.type===32)return e;e.push(t),e.push()}},A.prototype.consumeComponentValue=function(){var e=this.consumeToken();switch(e.type){case 11:case 28:case 2:return this.consumeSimpleBlock(e.type);case 19:return this.consumeFunction(e)}return e},A.prototype.consumeSimpleBlock=function(e){for(var t={type:e,values:[]},r=this.consumeToken();;){if(r.type===32||Y1(r,e))return t;this.reconsumeToken(r),t.values.push(this.consumeComponentValue()),r=this.consumeToken()}},A.prototype.consumeFunction=function(e){for(var t={name:e.value,values:[],type:18};;){var r=this.consumeToken();if(r.type===32||r.type===3)return t;this.reconsumeToken(r),t.values.push(this.consumeComponentValue())}},A.prototype.consumeToken=function(){var e=this._tokens.shift();return typeof e=="undefined"?sl:e},A.prototype.reconsumeToken=function(e){this._tokens.unshift(e)},A}(),Hs=function(A){return A.type===15},gn=function(A){return A.type===17},fe=function(A){return A.type===20},J1=function(A){return A.type===0},il=function(A,e){return fe(A)&&A.value===e},xw=function(A){return A.type!==31},on=function(A){return A.type!==31&&A.type!==4},JA=function(A){var e=[],t=[];return A.forEach(function(r){if(r.type===4){if(t.length===0)throw new Error("Error parsing function args, zero tokens for arg");e.push(t),t=[];return}r.type!==31&&t.push(r)}),t.length&&e.push(t),e},Y1=function(A,e){return e===11&&A.type===12||e===28&&A.type===29?!0:e===2&&A.type===3},zt=function(A){return A.type===17||A.type===15},De=function(A){return A.type===16||zt(A)},Sw=function(A){return A.length>1?[A[0],A[1]]:[A[0]]},Xe={type:17,number:0,flags:Ls},Fu={type:16,number:50,flags:Ls},St={type:16,number:100,flags:Ls},Wn=function(A,e,t){var r=A[0],n=A[1];return[me(r,e),me(typeof n!="undefined"?n:r,t)]},me=function(A,e){if(A.type===16)return A.number/100*e;if(Hs(A))switch(A.unit){case"rem":case"em":return 16*A.number;case"px":default:return A.number}return A.number},Rw="deg",Dw="grad",Pw="rad",Lw="turn",ra={name:"angle",parse:function(A,e){if(e.type===15)switch(e.unit){case Rw:return Math.PI*e.number/180;case Dw:return Math.PI/200*e.number;case Pw:return e.number;case Lw:return Math.PI*2*e.number}throw new Error("Unsupported angle type")}},Hw=function(A){return A.type===15&&(A.unit===Rw||A.unit===Dw||A.unit===Pw||A.unit===Lw)},kw=function(A){var e=A.filter(fe).map(function(t){return t.value}).join(" ");switch(e){case"to bottom right":case"to right bottom":case"left top":case"top left":return[Xe,Xe];case"to top":case"bottom":return _A(0);case"to bottom left":case"to left bottom":case"right top":case"top right":return[Xe,St];case"to right":case"left":return _A(90);case"to top left":case"to left top":case"right bottom":case"bottom right":return[St,St];case"to bottom":case"top":return _A(180);case"to top right":case"to right top":case"left bottom":case"bottom left":return[St,Xe];case"to left":case"right":return _A(270)}return 0},_A=function(A){return Math.PI*A/180},Ot={name:"color",parse:function(A,e){if(e.type===18){var t=Z1[e.name];if(typeof t=="undefined")throw new Error('Attempting to parse an unsupported color function "'+e.name+'"');return t(A,e.values)}if(e.type===5){if(e.value.length===3){var r=e.value.substring(0,1),n=e.value.substring(1,2),s=e.value.substring(2,3);return Rt(parseInt(r+r,16),parseInt(n+n,16),parseInt(s+s,16),1)}if(e.value.length===4){var r=e.value.substring(0,1),n=e.value.substring(1,2),s=e.value.substring(2,3),i=e.value.substring(3,4);return Rt(parseInt(r+r,16),parseInt(n+n,16),parseInt(s+s,16),parseInt(i+i,16)/255)}if(e.value.length===6){var r=e.value.substring(0,2),n=e.value.substring(2,4),s=e.value.substring(4,6);return Rt(parseInt(r,16),parseInt(n,16),parseInt(s,16),1)}if(e.value.length===8){var r=e.value.substring(0,2),n=e.value.substring(2,4),s=e.value.substring(4,6),i=e.value.substring(6,8);return Rt(parseInt(r,16),parseInt(n,16),parseInt(s,16),parseInt(i,16)/255)}}if(e.type===20){var a=ct[e.value.toUpperCase()];if(typeof a!="undefined")return a}return ct.TRANSPARENT}},Nt=function(A){return(255&A)===0},Me=function(A){var e=255&A,t=255&A>>8,r=255&A>>16,n=255&A>>24;return e<255?"rgba("+n+","+r+","+t+","+e/255+")":"rgb("+n+","+r+","+t+")"},Rt=function(A,e,t,r){return(A<<24|e<<16|t<<8|Math.round(r*255)<<0)>>>0},yg=function(A,e){if(A.type===17)return A.number;if(A.type===16){var t=e===3?1:255;return e===3?A.number/100*t:Math.round(A.number/100*t)}return 0},Cg=function(A,e){var t=e.filter(on);if(t.length===3){var r=t.map(yg),n=r[0],s=r[1],i=r[2];return Rt(n,s,i,1)}if(t.length===4){var a=t.map(yg),n=a[0],s=a[1],i=a[2],c=a[3];return Rt(n,s,i,c)}return 0};function ic(A,e,t){return t<0&&(t+=1),t>=1&&(t-=1),t<1/6?(e-A)*t*6+A:t<1/2?e:t<2/3?(e-A)*6*(2/3-t)+A:A}var vg=function(A,e){var t=e.filter(on),r=t[0],n=t[1],s=t[2],i=t[3],a=(r.type===17?_A(r.number):ra.parse(A,r))/(Math.PI*2),c=De(n)?n.number/100:0,l=De(s)?s.number/100:0,h=typeof i!="undefined"&&De(i)?me(i,1):1;if(c===0)return Rt(l*255,l*255,l*255,1);var f=l<=.5?l*(c+1):l+c-l*c,p=l*2-f,C=ic(p,f,a+1/3),_=ic(p,f,a),v=ic(p,f,a-1/3);return Rt(C*255,_*255,v*255,h)},Z1={hsl:vg,hsla:vg,rgb:Cg,rgba:Cg},is=function(A,e){return Ot.parse(A,Tw.create(e).parseComponentValue())},ct={ALICEBLUE:4042850303,ANTIQUEWHITE:4209760255,AQUA:16777215,AQUAMARINE:2147472639,AZURE:4043309055,BEIGE:4126530815,BISQUE:4293182719,BLACK:255,BLANCHEDALMOND:4293643775,BLUE:65535,BLUEVIOLET:2318131967,BROWN:2771004159,BURLYWOOD:3736635391,CADETBLUE:1604231423,CHARTREUSE:2147418367,CHOCOLATE:3530104575,CORAL:4286533887,CORNFLOWERBLUE:1687547391,CORNSILK:4294499583,CRIMSON:3692313855,CYAN:16777215,DARKBLUE:35839,DARKCYAN:9145343,DARKGOLDENROD:3095837695,DARKGRAY:2846468607,DARKGREEN:6553855,DARKGREY:2846468607,DARKKHAKI:3182914559,DARKMAGENTA:2332068863,DARKOLIVEGREEN:1433087999,DARKORANGE:4287365375,DARKORCHID:2570243327,DARKRED:2332033279,DARKSALMON:3918953215,DARKSEAGREEN:2411499519,DARKSLATEBLUE:1211993087,DARKSLATEGRAY:793726975,DARKSLATEGREY:793726975,DARKTURQUOISE:13554175,DARKVIOLET:2483082239,DEEPPINK:4279538687,DEEPSKYBLUE:12582911,DIMGRAY:1768516095,DIMGREY:1768516095,DODGERBLUE:512819199,FIREBRICK:2988581631,FLORALWHITE:4294635775,FORESTGREEN:579543807,FUCHSIA:4278255615,GAINSBORO:3705462015,GHOSTWHITE:4177068031,GOLD:4292280575,GOLDENROD:3668254975,GRAY:2155905279,GREEN:8388863,GREENYELLOW:2919182335,GREY:2155905279,HONEYDEW:4043305215,HOTPINK:4285117695,INDIANRED:3445382399,INDIGO:1258324735,IVORY:4294963455,KHAKI:4041641215,LAVENDER:3873897215,LAVENDERBLUSH:4293981695,LAWNGREEN:2096890111,LEMONCHIFFON:4294626815,LIGHTBLUE:2916673279,LIGHTCORAL:4034953471,LIGHTCYAN:3774873599,LIGHTGOLDENRODYELLOW:4210742015,LIGHTGRAY:3553874943,LIGHTGREEN:2431553791,LIGHTGREY:3553874943,LIGHTPINK:4290167295,LIGHTSALMON:4288707327,LIGHTSEAGREEN:548580095,LIGHTSKYBLUE:2278488831,LIGHTSLATEGRAY:2005441023,LIGHTSLATEGREY:2005441023,LIGHTSTEELBLUE:2965692159,LIGHTYELLOW:4294959359,LIME:16711935,LIMEGREEN:852308735,LINEN:4210091775,MAGENTA:4278255615,MAROON:2147483903,MEDIUMAQUAMARINE:1724754687,MEDIUMBLUE:52735,MEDIUMORCHID:3126187007,MEDIUMPURPLE:2473647103,MEDIUMSEAGREEN:1018393087,MEDIUMSLATEBLUE:2070474495,MEDIUMSPRINGGREEN:16423679,MEDIUMTURQUOISE:1221709055,MEDIUMVIOLETRED:3340076543,MIDNIGHTBLUE:421097727,MINTCREAM:4127193855,MISTYROSE:4293190143,MOCCASIN:4293178879,NAVAJOWHITE:4292783615,NAVY:33023,OLDLACE:4260751103,OLIVE:2155872511,OLIVEDRAB:1804477439,ORANGE:4289003775,ORANGERED:4282712319,ORCHID:3664828159,PALEGOLDENROD:4008225535,PALEGREEN:2566625535,PALETURQUOISE:2951671551,PALEVIOLETRED:3681588223,PAPAYAWHIP:4293907967,PEACHPUFF:4292524543,PERU:3448061951,PINK:4290825215,PLUM:3718307327,POWDERBLUE:2967529215,PURPLE:2147516671,REBECCAPURPLE:1714657791,RED:4278190335,ROSYBROWN:3163525119,ROYALBLUE:1097458175,SADDLEBROWN:2336560127,SALMON:4202722047,SANDYBROWN:4104413439,SEAGREEN:780883967,SEASHELL:4294307583,SIENNA:2689740287,SILVER:3233857791,SKYBLUE:2278484991,SLATEBLUE:1784335871,SLATEGRAY:1887473919,SLATEGREY:1887473919,SNOW:4294638335,SPRINGGREEN:16744447,STEELBLUE:1182971135,TAN:3535047935,TEAL:8421631,THISTLE:3636451583,TOMATO:4284696575,TRANSPARENT:0,TURQUOISE:1088475391,VIOLET:4001558271,WHEAT:4125012991,WHITE:4294967295,WHITESMOKE:4126537215,YELLOW:4294902015,YELLOWGREEN:2597139199},eS={name:"background-clip",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(t){if(fe(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},AS={name:"background-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},na=function(A,e){var t=Ot.parse(A,e[0]),r=e[1];return r&&De(r)?{color:t,stop:r}:{color:t,stop:null}},Eg=function(A,e){var t=A[0],r=A[A.length-1];t.stop===null&&(t.stop=Xe),r.stop===null&&(r.stop=St);for(var n=[],s=0,i=0;i<A.length;i++){var a=A[i].stop;if(a!==null){var c=me(a,e);c>s?n.push(c):n.push(s),s=c}else n.push(null)}for(var l=null,i=0;i<n.length;i++){var h=n[i];if(h===null)l===null&&(l=i);else if(l!==null){for(var f=i-l,p=n[l-1],C=(h-p)/(f+1),_=1;_<=f;_++)n[l+_-1]=C*_;l=null}}return A.map(function(v,b){var x=v.color;return{color:x,stop:Math.max(Math.min(1,n[b]/e),0)}})},tS=function(A,e,t){var r=e/2,n=t/2,s=me(A[0],e)-r,i=n-me(A[1],t);return(Math.atan2(i,s)+Math.PI*2)%(Math.PI*2)},rS=function(A,e,t){var r=typeof A=="number"?A:tS(A,e,t),n=Math.abs(e*Math.sin(r))+Math.abs(t*Math.cos(r)),s=e/2,i=t/2,a=n/2,c=Math.sin(r-Math.PI/2)*a,l=Math.cos(r-Math.PI/2)*a;return[n,s-l,s+l,i-c,i+c]},FA=function(A,e){return Math.sqrt(A*A+e*e)},Ig=function(A,e,t,r,n){var s=[[0,0],[0,e],[A,0],[A,e]];return s.reduce(function(i,a){var c=a[0],l=a[1],h=FA(t-c,r-l);return(n?h<i.optimumDistance:h>i.optimumDistance)?{optimumCorner:a,optimumDistance:h}:i},{optimumDistance:n?1/0:-1/0,optimumCorner:null}).optimumCorner},nS=function(A,e,t,r,n){var s=0,i=0;switch(A.size){case 0:A.shape===0?s=i=Math.min(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===1&&(s=Math.min(Math.abs(e),Math.abs(e-r)),i=Math.min(Math.abs(t),Math.abs(t-n)));break;case 2:if(A.shape===0)s=i=Math.min(FA(e,t),FA(e,t-n),FA(e-r,t),FA(e-r,t-n));else if(A.shape===1){var a=Math.min(Math.abs(t),Math.abs(t-n))/Math.min(Math.abs(e),Math.abs(e-r)),c=Ig(r,n,e,t,!0),l=c[0],h=c[1];s=FA(l-e,(h-t)/a),i=a*s}break;case 1:A.shape===0?s=i=Math.max(Math.abs(e),Math.abs(e-r),Math.abs(t),Math.abs(t-n)):A.shape===1&&(s=Math.max(Math.abs(e),Math.abs(e-r)),i=Math.max(Math.abs(t),Math.abs(t-n)));break;case 3:if(A.shape===0)s=i=Math.max(FA(e,t),FA(e,t-n),FA(e-r,t),FA(e-r,t-n));else if(A.shape===1){var a=Math.max(Math.abs(t),Math.abs(t-n))/Math.max(Math.abs(e),Math.abs(e-r)),f=Ig(r,n,e,t,!1),l=f[0],h=f[1];s=FA(l-e,(h-t)/a),i=a*s}break}return Array.isArray(A.size)&&(s=me(A.size[0],r),i=A.size.length===2?me(A.size[1],n):s),[s,i]},sS=function(A,e){var t=_A(180),r=[];return JA(e).forEach(function(n,s){if(s===0){var i=n[0];if(i.type===20&&i.value==="to"){t=kw(n);return}else if(Hw(i)){t=ra.parse(A,i);return}}var a=na(A,n);r.push(a)}),{angle:t,stops:r,type:1}},Ti=function(A,e){var t=_A(180),r=[];return JA(e).forEach(function(n,s){if(s===0){var i=n[0];if(i.type===20&&["top","left","right","bottom"].indexOf(i.value)!==-1){t=kw(n);return}else if(Hw(i)){t=(ra.parse(A,i)+_A(270))%_A(360);return}}var a=na(A,n);r.push(a)}),{angle:t,stops:r,type:1}},iS=function(A,e){var t=_A(180),r=[],n=1,s=0,i=3,a=[];return JA(e).forEach(function(c,l){var h=c[0];if(l===0){if(fe(h)&&h.value==="linear"){n=1;return}else if(fe(h)&&h.value==="radial"){n=2;return}}if(h.type===18){if(h.name==="from"){var f=Ot.parse(A,h.values[0]);r.push({stop:Xe,color:f})}else if(h.name==="to"){var f=Ot.parse(A,h.values[0]);r.push({stop:St,color:f})}else if(h.name==="color-stop"){var p=h.values.filter(on);if(p.length===2){var f=Ot.parse(A,p[1]),C=p[0];gn(C)&&r.push({stop:{type:16,number:C.number*100,flags:C.flags},color:f})}}}}),n===1?{angle:(t+_A(180))%_A(360),stops:r,type:n}:{size:i,shape:s,stops:r,position:a,type:n}},Ow="closest-side",Nw="farthest-side",Vw="closest-corner",Mw="farthest-corner",Kw="circle",jw="ellipse",Gw="cover",$w="contain",oS=function(A,e){var t=0,r=3,n=[],s=[];return JA(e).forEach(function(i,a){var c=!0;if(a===0){var l=!1;c=i.reduce(function(f,p){if(l)if(fe(p))switch(p.value){case"center":return s.push(Fu),f;case"top":case"left":return s.push(Xe),f;case"right":case"bottom":return s.push(St),f}else(De(p)||zt(p))&&s.push(p);else if(fe(p))switch(p.value){case Kw:return t=0,!1;case jw:return t=1,!1;case"at":return l=!0,!1;case Ow:return r=0,!1;case Gw:case Nw:return r=1,!1;case $w:case Vw:return r=2,!1;case Mw:return r=3,!1}else if(zt(p)||De(p))return Array.isArray(r)||(r=[]),r.push(p),!1;return f},c)}if(c){var h=na(A,i);n.push(h)}}),{size:r,shape:t,stops:n,position:s,type:2}},xi=function(A,e){var t=0,r=3,n=[],s=[];return JA(e).forEach(function(i,a){var c=!0;if(a===0?c=i.reduce(function(h,f){if(fe(f))switch(f.value){case"center":return s.push(Fu),!1;case"top":case"left":return s.push(Xe),!1;case"right":case"bottom":return s.push(St),!1}else if(De(f)||zt(f))return s.push(f),!1;return h},c):a===1&&(c=i.reduce(function(h,f){if(fe(f))switch(f.value){case Kw:return t=0,!1;case jw:return t=1,!1;case $w:case Ow:return r=0,!1;case Nw:return r=1,!1;case Vw:return r=2,!1;case Gw:case Mw:return r=3,!1}else if(zt(f)||De(f))return Array.isArray(r)||(r=[]),r.push(f),!1;return h},c)),c){var l=na(A,i);n.push(l)}}),{size:r,shape:t,stops:n,position:s,type:2}},aS=function(A){return A.type===1},cS=function(A){return A.type===2},Tu={name:"image",parse:function(A,e){if(e.type===22){var t={url:e.value,type:0};return A.cache.addImage(e.value),t}if(e.type===18){var r=Ww[e.name];if(typeof r=="undefined")throw new Error('Attempting to parse an unsupported image function "'+e.name+'"');return r(A,e.values)}throw new Error("Unsupported image type "+e.type)}};function lS(A){return!(A.type===20&&A.value==="none")&&(A.type!==18||!!Ww[A.name])}var Ww={"linear-gradient":sS,"-moz-linear-gradient":Ti,"-ms-linear-gradient":Ti,"-o-linear-gradient":Ti,"-webkit-linear-gradient":Ti,"radial-gradient":oS,"-moz-radial-gradient":xi,"-ms-radial-gradient":xi,"-o-radial-gradient":xi,"-webkit-radial-gradient":xi,"-webkit-gradient":iS},uS={name:"background-image",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e.filter(function(r){return on(r)&&lS(r)}).map(function(r){return Tu.parse(A,r)})}},hS={name:"background-origin",initialValue:"border-box",prefix:!1,type:1,parse:function(A,e){return e.map(function(t){if(fe(t))switch(t.value){case"padding-box":return 1;case"content-box":return 2}return 0})}},dS={name:"background-position",initialValue:"0% 0%",type:1,prefix:!1,parse:function(A,e){return JA(e).map(function(t){return t.filter(De)}).map(Sw)}},fS={name:"background-repeat",initialValue:"repeat",prefix:!1,type:1,parse:function(A,e){return JA(e).map(function(t){return t.filter(fe).map(function(r){return r.value}).join(" ")}).map(gS)}},gS=function(A){switch(A){case"no-repeat":return 1;case"repeat-x":case"repeat no-repeat":return 2;case"repeat-y":case"no-repeat repeat":return 3;case"repeat":default:return 0}},zr;(function(A){A.AUTO="auto",A.CONTAIN="contain",A.COVER="cover"})(zr||(zr={}));var pS={name:"background-size",initialValue:"0",prefix:!1,type:1,parse:function(A,e){return JA(e).map(function(t){return t.filter(mS)})}},mS=function(A){return fe(A)||De(A)},sa=function(A){return{name:"border-"+A+"-color",initialValue:"transparent",prefix:!1,type:3,format:"color"}},BS=sa("top"),wS=sa("right"),yS=sa("bottom"),CS=sa("left"),ia=function(A){return{name:"border-radius-"+A,initialValue:"0 0",prefix:!1,type:1,parse:function(e,t){return Sw(t.filter(De))}}},vS=ia("top-left"),ES=ia("top-right"),IS=ia("bottom-right"),_S=ia("bottom-left"),oa=function(A){return{name:"border-"+A+"-style",initialValue:"solid",prefix:!1,type:2,parse:function(e,t){switch(t){case"none":return 0;case"dashed":return 2;case"dotted":return 3;case"double":return 4}return 1}}},US=oa("top"),QS=oa("right"),bS=oa("bottom"),FS=oa("left"),aa=function(A){return{name:"border-"+A+"-width",initialValue:"0",type:0,prefix:!1,parse:function(e,t){return Hs(t)?t.number:0}}},TS=aa("top"),xS=aa("right"),SS=aa("bottom"),RS=aa("left"),DS={name:"color",initialValue:"transparent",prefix:!1,type:3,format:"color"},PS={name:"direction",initialValue:"ltr",prefix:!1,type:2,parse:function(A,e){switch(e){case"rtl":return 1;case"ltr":default:return 0}}},LS={name:"display",initialValue:"inline-block",prefix:!1,type:1,parse:function(A,e){return e.filter(fe).reduce(function(t,r){return t|HS(r.value)},0)}},HS=function(A){switch(A){case"block":case"-webkit-box":return 2;case"inline":return 4;case"run-in":return 8;case"flow":return 16;case"flow-root":return 32;case"table":return 64;case"flex":case"-webkit-flex":return 128;case"grid":case"-ms-grid":return 256;case"ruby":return 512;case"subgrid":return 1024;case"list-item":return 2048;case"table-row-group":return 4096;case"table-header-group":return 8192;case"table-footer-group":return 16384;case"table-row":return 32768;case"table-cell":return 65536;case"table-column-group":return 131072;case"table-column":return 262144;case"table-caption":return 524288;case"ruby-base":return 1048576;case"ruby-text":return 2097152;case"ruby-base-container":return 4194304;case"ruby-text-container":return 8388608;case"contents":return 16777216;case"inline-block":return 33554432;case"inline-list-item":return 67108864;case"inline-table":return 134217728;case"inline-flex":return 268435456;case"inline-grid":return 536870912}return 0},kS={name:"float",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"left":return 1;case"right":return 2;case"inline-start":return 3;case"inline-end":return 4}return 0}},OS={name:"letter-spacing",initialValue:"0",prefix:!1,type:0,parse:function(A,e){return e.type===20&&e.value==="normal"?0:e.type===17||e.type===15?e.number:0}},Uo;(function(A){A.NORMAL="normal",A.STRICT="strict"})(Uo||(Uo={}));var NS={name:"line-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"strict":return Uo.STRICT;case"normal":default:return Uo.NORMAL}}},VS={name:"line-height",initialValue:"normal",prefix:!1,type:4},_g=function(A,e){return fe(A)&&A.value==="normal"?1.2*e:A.type===17?e*A.number:De(A)?me(A,e):e},MS={name:"list-style-image",initialValue:"none",type:0,prefix:!1,parse:function(A,e){return e.type===20&&e.value==="none"?null:Tu.parse(A,e)}},KS={name:"list-style-position",initialValue:"outside",prefix:!1,type:2,parse:function(A,e){switch(e){case"inside":return 0;case"outside":default:return 1}}},ol={name:"list-style-type",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"disc":return 0;case"circle":return 1;case"square":return 2;case"decimal":return 3;case"cjk-decimal":return 4;case"decimal-leading-zero":return 5;case"lower-roman":return 6;case"upper-roman":return 7;case"lower-greek":return 8;case"lower-alpha":return 9;case"upper-alpha":return 10;case"arabic-indic":return 11;case"armenian":return 12;case"bengali":return 13;case"cambodian":return 14;case"cjk-earthly-branch":return 15;case"cjk-heavenly-stem":return 16;case"cjk-ideographic":return 17;case"devanagari":return 18;case"ethiopic-numeric":return 19;case"georgian":return 20;case"gujarati":return 21;case"gurmukhi":return 22;case"hebrew":return 22;case"hiragana":return 23;case"hiragana-iroha":return 24;case"japanese-formal":return 25;case"japanese-informal":return 26;case"kannada":return 27;case"katakana":return 28;case"katakana-iroha":return 29;case"khmer":return 30;case"korean-hangul-formal":return 31;case"korean-hanja-formal":return 32;case"korean-hanja-informal":return 33;case"lao":return 34;case"lower-armenian":return 35;case"malayalam":return 36;case"mongolian":return 37;case"myanmar":return 38;case"oriya":return 39;case"persian":return 40;case"simp-chinese-formal":return 41;case"simp-chinese-informal":return 42;case"tamil":return 43;case"telugu":return 44;case"thai":return 45;case"tibetan":return 46;case"trad-chinese-formal":return 47;case"trad-chinese-informal":return 48;case"upper-armenian":return 49;case"disclosure-open":return 50;case"disclosure-closed":return 51;case"none":default:return-1}}},ca=function(A){return{name:"margin-"+A,initialValue:"0",prefix:!1,type:4}},jS=ca("top"),GS=ca("right"),$S=ca("bottom"),WS=ca("left"),XS={name:"overflow",initialValue:"visible",prefix:!1,type:1,parse:function(A,e){return e.filter(fe).map(function(t){switch(t.value){case"hidden":return 1;case"scroll":return 2;case"clip":return 3;case"auto":return 4;case"visible":default:return 0}})}},qS={name:"overflow-wrap",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-word":return"break-word";case"normal":default:return"normal"}}},la=function(A){return{name:"padding-"+A,initialValue:"0",prefix:!1,type:3,format:"length-percentage"}},zS=la("top"),JS=la("right"),YS=la("bottom"),ZS=la("left"),eR={name:"text-align",initialValue:"left",prefix:!1,type:2,parse:function(A,e){switch(e){case"right":return 2;case"center":case"justify":return 1;case"left":default:return 0}}},AR={name:"position",initialValue:"static",prefix:!1,type:2,parse:function(A,e){switch(e){case"relative":return 1;case"absolute":return 2;case"fixed":return 3;case"sticky":return 4}return 0}},tR={name:"text-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.length===1&&il(e[0],"none")?[]:JA(e).map(function(t){for(var r={color:ct.TRANSPARENT,offsetX:Xe,offsetY:Xe,blur:Xe},n=0,s=0;s<t.length;s++){var i=t[s];zt(i)?(n===0?r.offsetX=i:n===1?r.offsetY=i:r.blur=i,n++):r.color=Ot.parse(A,i)}return r})}},rR={name:"text-transform",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"uppercase":return 2;case"lowercase":return 1;case"capitalize":return 3}return 0}},nR={name:"transform",initialValue:"none",prefix:!0,type:0,parse:function(A,e){if(e.type===20&&e.value==="none")return null;if(e.type===18){var t=oR[e.name];if(typeof t=="undefined")throw new Error('Attempting to parse an unsupported transform function "'+e.name+'"');return t(e.values)}return null}},sR=function(A){var e=A.filter(function(t){return t.type===17}).map(function(t){return t.number});return e.length===6?e:null},iR=function(A){var e=A.filter(function(c){return c.type===17}).map(function(c){return c.number}),t=e[0],r=e[1];e[2],e[3];var n=e[4],s=e[5];e[6],e[7],e[8],e[9],e[10],e[11];var i=e[12],a=e[13];return e[14],e[15],e.length===16?[t,r,n,s,i,a]:null},oR={matrix:sR,matrix3d:iR},Ug={type:16,number:50,flags:Ls},aR=[Ug,Ug],cR={name:"transform-origin",initialValue:"50% 50%",prefix:!0,type:1,parse:function(A,e){var t=e.filter(De);return t.length!==2?aR:[t[0],t[1]]}},lR={name:"visible",initialValue:"none",prefix:!1,type:2,parse:function(A,e){switch(e){case"hidden":return 1;case"collapse":return 2;case"visible":default:return 0}}},os;(function(A){A.NORMAL="normal",A.BREAK_ALL="break-all",A.KEEP_ALL="keep-all"})(os||(os={}));var uR={name:"word-break",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"break-all":return os.BREAK_ALL;case"keep-all":return os.KEEP_ALL;case"normal":default:return os.NORMAL}}},hR={name:"z-index",initialValue:"auto",prefix:!1,type:0,parse:function(A,e){if(e.type===20)return{auto:!0,order:0};if(gn(e))return{auto:!1,order:e.number};throw new Error("Invalid z-index number parsed")}},Xw={name:"time",parse:function(A,e){if(e.type===15)switch(e.unit.toLowerCase()){case"s":return 1e3*e.number;case"ms":return e.number}throw new Error("Unsupported time type")}},dR={name:"opacity",initialValue:"1",type:0,prefix:!1,parse:function(A,e){return gn(e)?e.number:1}},fR={name:"text-decoration-color",initialValue:"transparent",prefix:!1,type:3,format:"color"},gR={name:"text-decoration-line",initialValue:"none",prefix:!1,type:1,parse:function(A,e){return e.filter(fe).map(function(t){switch(t.value){case"underline":return 1;case"overline":return 2;case"line-through":return 3;case"none":return 4}return 0}).filter(function(t){return t!==0})}},pR={name:"font-family",initialValue:"",prefix:!1,type:1,parse:function(A,e){var t=[],r=[];return e.forEach(function(n){switch(n.type){case 20:case 0:t.push(n.value);break;case 17:t.push(n.number.toString());break;case 4:r.push(t.join(" ")),t.length=0;break}}),t.length&&r.push(t.join(" ")),r.map(function(n){return n.indexOf(" ")===-1?n:"'"+n+"'"})}},mR={name:"font-size",initialValue:"0",prefix:!1,type:3,format:"length"},BR={name:"font-weight",initialValue:"normal",type:0,prefix:!1,parse:function(A,e){if(gn(e))return e.number;if(fe(e))switch(e.value){case"bold":return 700;case"normal":default:return 400}return 400}},wR={name:"font-variant",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.filter(fe).map(function(t){return t.value})}},yR={name:"font-style",initialValue:"normal",prefix:!1,type:2,parse:function(A,e){switch(e){case"oblique":return"oblique";case"italic":return"italic";case"normal":default:return"normal"}}},ke=function(A,e){return(A&e)!==0},CR={name:"content",initialValue:"none",type:1,prefix:!1,parse:function(A,e){if(e.length===0)return[];var t=e[0];return t.type===20&&t.value==="none"?[]:e}},vR={name:"counter-increment",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;for(var r=[],n=e.filter(xw),s=0;s<n.length;s++){var i=n[s],a=n[s+1];if(i.type===20){var c=a&&gn(a)?a.number:1;r.push({counter:i.value,increment:c})}}return r}},ER={name:"counter-reset",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return[];for(var t=[],r=e.filter(xw),n=0;n<r.length;n++){var s=r[n],i=r[n+1];if(fe(s)&&s.value!=="none"){var a=i&&gn(i)?i.number:0;t.push({counter:s.value,reset:a})}}return t}},IR={name:"duration",initialValue:"0s",prefix:!1,type:1,parse:function(A,e){return e.filter(Hs).map(function(t){return Xw.parse(A,t)})}},_R={name:"quotes",initialValue:"none",prefix:!0,type:1,parse:function(A,e){if(e.length===0)return null;var t=e[0];if(t.type===20&&t.value==="none")return null;var r=[],n=e.filter(J1);if(n.length%2!==0)return null;for(var s=0;s<n.length;s+=2){var i=n[s].value,a=n[s+1].value;r.push({open:i,close:a})}return r}},Qg=function(A,e,t){if(!A)return"";var r=A[Math.min(e,A.length-1)];return r?t?r.open:r.close:""},UR={name:"box-shadow",initialValue:"none",type:1,prefix:!1,parse:function(A,e){return e.length===1&&il(e[0],"none")?[]:JA(e).map(function(t){for(var r={color:255,offsetX:Xe,offsetY:Xe,blur:Xe,spread:Xe,inset:!1},n=0,s=0;s<t.length;s++){var i=t[s];il(i,"inset")?r.inset=!0:zt(i)?(n===0?r.offsetX=i:n===1?r.offsetY=i:n===2?r.blur=i:r.spread=i,n++):r.color=Ot.parse(A,i)}return r})}},QR={name:"paint-order",initialValue:"normal",prefix:!1,type:1,parse:function(A,e){var t=[0,1,2],r=[];return e.filter(fe).forEach(function(n){switch(n.value){case"stroke":r.push(1);break;case"fill":r.push(0);break;case"markers":r.push(2);break}}),t.forEach(function(n){r.indexOf(n)===-1&&r.push(n)}),r}},bR={name:"-webkit-text-stroke-color",initialValue:"currentcolor",prefix:!1,type:3,format:"color"},FR={name:"-webkit-text-stroke-width",initialValue:"0",type:0,prefix:!1,parse:function(A,e){return Hs(e)?e.number:0}},TR=function(){function A(e,t){var r,n;this.animationDuration=j(e,IR,t.animationDuration),this.backgroundClip=j(e,eS,t.backgroundClip),this.backgroundColor=j(e,AS,t.backgroundColor),this.backgroundImage=j(e,uS,t.backgroundImage),this.backgroundOrigin=j(e,hS,t.backgroundOrigin),this.backgroundPosition=j(e,dS,t.backgroundPosition),this.backgroundRepeat=j(e,fS,t.backgroundRepeat),this.backgroundSize=j(e,pS,t.backgroundSize),this.borderTopColor=j(e,BS,t.borderTopColor),this.borderRightColor=j(e,wS,t.borderRightColor),this.borderBottomColor=j(e,yS,t.borderBottomColor),this.borderLeftColor=j(e,CS,t.borderLeftColor),this.borderTopLeftRadius=j(e,vS,t.borderTopLeftRadius),this.borderTopRightRadius=j(e,ES,t.borderTopRightRadius),this.borderBottomRightRadius=j(e,IS,t.borderBottomRightRadius),this.borderBottomLeftRadius=j(e,_S,t.borderBottomLeftRadius),this.borderTopStyle=j(e,US,t.borderTopStyle),this.borderRightStyle=j(e,QS,t.borderRightStyle),this.borderBottomStyle=j(e,bS,t.borderBottomStyle),this.borderLeftStyle=j(e,FS,t.borderLeftStyle),this.borderTopWidth=j(e,TS,t.borderTopWidth),this.borderRightWidth=j(e,xS,t.borderRightWidth),this.borderBottomWidth=j(e,SS,t.borderBottomWidth),this.borderLeftWidth=j(e,RS,t.borderLeftWidth),this.boxShadow=j(e,UR,t.boxShadow),this.color=j(e,DS,t.color),this.direction=j(e,PS,t.direction),this.display=j(e,LS,t.display),this.float=j(e,kS,t.cssFloat),this.fontFamily=j(e,pR,t.fontFamily),this.fontSize=j(e,mR,t.fontSize),this.fontStyle=j(e,yR,t.fontStyle),this.fontVariant=j(e,wR,t.fontVariant),this.fontWeight=j(e,BR,t.fontWeight),this.letterSpacing=j(e,OS,t.letterSpacing),this.lineBreak=j(e,NS,t.lineBreak),this.lineHeight=j(e,VS,t.lineHeight),this.listStyleImage=j(e,MS,t.listStyleImage),this.listStylePosition=j(e,KS,t.listStylePosition),this.listStyleType=j(e,ol,t.listStyleType),this.marginTop=j(e,jS,t.marginTop),this.marginRight=j(e,GS,t.marginRight),this.marginBottom=j(e,$S,t.marginBottom),this.marginLeft=j(e,WS,t.marginLeft),this.opacity=j(e,dR,t.opacity);var s=j(e,XS,t.overflow);this.overflowX=s[0],this.overflowY=s[s.length>1?1:0],this.overflowWrap=j(e,qS,t.overflowWrap),this.paddingTop=j(e,zS,t.paddingTop),this.paddingRight=j(e,JS,t.paddingRight),this.paddingBottom=j(e,YS,t.paddingBottom),this.paddingLeft=j(e,ZS,t.paddingLeft),this.paintOrder=j(e,QR,t.paintOrder),this.position=j(e,AR,t.position),this.textAlign=j(e,eR,t.textAlign),this.textDecorationColor=j(e,fR,(r=t.textDecorationColor)!==null&&r!==void 0?r:t.color),this.textDecorationLine=j(e,gR,(n=t.textDecorationLine)!==null&&n!==void 0?n:t.textDecoration),this.textShadow=j(e,tR,t.textShadow),this.textTransform=j(e,rR,t.textTransform),this.transform=j(e,nR,t.transform),this.transformOrigin=j(e,cR,t.transformOrigin),this.visibility=j(e,lR,t.visibility),this.webkitTextStrokeColor=j(e,bR,t.webkitTextStrokeColor),this.webkitTextStrokeWidth=j(e,FR,t.webkitTextStrokeWidth),this.wordBreak=j(e,uR,t.wordBreak),this.zIndex=j(e,hR,t.zIndex)}return A.prototype.isVisible=function(){return this.display>0&&this.opacity>0&&this.visibility===0},A.prototype.isTransparent=function(){return Nt(this.backgroundColor)},A.prototype.isTransformed=function(){return this.transform!==null},A.prototype.isPositioned=function(){return this.position!==0},A.prototype.isPositionedWithZIndex=function(){return this.isPositioned()&&!this.zIndex.auto},A.prototype.isFloating=function(){return this.float!==0},A.prototype.isInlineLevel=function(){return ke(this.display,4)||ke(this.display,33554432)||ke(this.display,268435456)||ke(this.display,536870912)||ke(this.display,67108864)||ke(this.display,134217728)},A}(),xR=function(){function A(e,t){this.content=j(e,CR,t.content),this.quotes=j(e,_R,t.quotes)}return A}(),bg=function(){function A(e,t){this.counterIncrement=j(e,vR,t.counterIncrement),this.counterReset=j(e,ER,t.counterReset)}return A}(),j=function(A,e,t){var r=new Fw,n=t!==null&&typeof t!="undefined"?t.toString():e.initialValue;r.write(n);var s=new Tw(r.read());switch(e.type){case 2:var i=s.parseComponentValue();return e.parse(A,fe(i)?i.value:e.initialValue);case 0:return e.parse(A,s.parseComponentValue());case 1:return e.parse(A,s.parseComponentValues());case 4:return s.parseComponentValue();case 3:switch(e.format){case"angle":return ra.parse(A,s.parseComponentValue());case"color":return Ot.parse(A,s.parseComponentValue());case"image":return Tu.parse(A,s.parseComponentValue());case"length":var a=s.parseComponentValue();return zt(a)?a:Xe;case"length-percentage":var c=s.parseComponentValue();return De(c)?c:Xe;case"time":return Xw.parse(A,s.parseComponentValue())}break}},SR="data-html2canvas-debug",RR=function(A){var e=A.getAttribute(SR);switch(e){case"all":return 1;case"clone":return 2;case"parse":return 3;case"render":return 4;default:return 0}},al=function(A,e){var t=RR(A);return t===1||e===t},YA=function(){function A(e,t){if(this.context=e,this.textNodes=[],this.elements=[],this.flags=0,al(t,3))debugger;this.styles=new TR(e,window.getComputedStyle(t,null)),ul(t)&&(this.styles.animationDuration.some(function(r){return r>0})&&(t.style.animationDuration="0s"),this.styles.transform!==null&&(t.style.transform="none")),this.bounds=Aa(this.context,t),al(t,4)&&(this.flags|=16)}return A}(),DR="AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=",Fg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Xn=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(var Si=0;Si<Fg.length;Si++)Xn[Fg.charCodeAt(Si)]=Si;var PR=function(A){var e=A.length*.75,t=A.length,r,n=0,s,i,a,c;A[A.length-1]==="="&&(e--,A[A.length-2]==="="&&e--);var l=typeof ArrayBuffer!="undefined"&&typeof Uint8Array!="undefined"&&typeof Uint8Array.prototype.slice!="undefined"?new ArrayBuffer(e):new Array(e),h=Array.isArray(l)?l:new Uint8Array(l);for(r=0;r<t;r+=4)s=Xn[A.charCodeAt(r)],i=Xn[A.charCodeAt(r+1)],a=Xn[A.charCodeAt(r+2)],c=Xn[A.charCodeAt(r+3)],h[n++]=s<<2|i>>4,h[n++]=(i&15)<<4|a>>2,h[n++]=(a&3)<<6|c&63;return l},LR=function(A){for(var e=A.length,t=[],r=0;r<e;r+=2)t.push(A[r+1]<<8|A[r]);return t},HR=function(A){for(var e=A.length,t=[],r=0;r<e;r+=4)t.push(A[r+3]<<24|A[r+2]<<16|A[r+1]<<8|A[r]);return t},dr=5,xu=11,oc=2,kR=xu-dr,qw=65536>>dr,OR=1<<dr,ac=OR-1,NR=1024>>dr,VR=qw+NR,MR=VR,KR=32,jR=MR+KR,GR=65536>>xu,$R=1<<kR,WR=$R-1,Tg=function(A,e,t){return A.slice?A.slice(e,t):new Uint16Array(Array.prototype.slice.call(A,e,t))},XR=function(A,e,t){return A.slice?A.slice(e,t):new Uint32Array(Array.prototype.slice.call(A,e,t))},qR=function(A,e){var t=PR(A),r=Array.isArray(t)?HR(t):new Uint32Array(t),n=Array.isArray(t)?LR(t):new Uint16Array(t),s=24,i=Tg(n,s/2,r[4]/2),a=r[5]===2?Tg(n,(s+r[4])/2):XR(r,Math.ceil((s+r[4])/4));return new zR(r[0],r[1],r[2],r[3],i,a)},zR=function(){function A(e,t,r,n,s,i){this.initialValue=e,this.errorValue=t,this.highStart=r,this.highValueIndex=n,this.index=s,this.data=i}return A.prototype.get=function(e){var t;if(e>=0){if(e<55296||e>56319&&e<=65535)return t=this.index[e>>dr],t=(t<<oc)+(e&ac),this.data[t];if(e<=65535)return t=this.index[qw+(e-55296>>dr)],t=(t<<oc)+(e&ac),this.data[t];if(e<this.highStart)return t=jR-GR+(e>>xu),t=this.index[t],t+=e>>dr&WR,t=this.index[t],t=(t<<oc)+(e&ac),this.data[t];if(e<=1114111)return this.data[this.highValueIndex]}return this.errorValue},A}(),xg="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",JR=typeof Uint8Array=="undefined"?[]:new Uint8Array(256);for(var Ri=0;Ri<xg.length;Ri++)JR[xg.charCodeAt(Ri)]=Ri;var YR=1,cc=2,lc=3,Sg=4,Rg=5,ZR=7,Dg=8,uc=9,hc=10,Pg=11,Lg=12,Hg=13,kg=14,dc=15,eD=function(A){for(var e=[],t=0,r=A.length;t<r;){var n=A.charCodeAt(t++);if(n>=55296&&n<=56319&&t<r){var s=A.charCodeAt(t++);(s&64512)===56320?e.push(((n&1023)<<10)+(s&1023)+65536):(e.push(n),t--)}else e.push(n)}return e},AD=function(){for(var A=[],e=0;e<arguments.length;e++)A[e]=arguments[e];if(String.fromCodePoint)return String.fromCodePoint.apply(String,A);var t=A.length;if(!t)return"";for(var r=[],n=-1,s="";++n<t;){var i=A[n];i<=65535?r.push(i):(i-=65536,r.push((i>>10)+55296,i%1024+56320)),(n+1===t||r.length>16384)&&(s+=String.fromCharCode.apply(String,r),r.length=0)}return s},tD=qR(DR),vA="×",fc="÷",rD=function(A){return tD.get(A)},nD=function(A,e,t){var r=t-2,n=e[r],s=e[t-1],i=e[t];if(s===cc&&i===lc)return vA;if(s===cc||s===lc||s===Sg||i===cc||i===lc||i===Sg)return fc;if(s===Dg&&[Dg,uc,Pg,Lg].indexOf(i)!==-1||(s===Pg||s===uc)&&(i===uc||i===hc)||(s===Lg||s===hc)&&i===hc||i===Hg||i===Rg||i===ZR||s===YR)return vA;if(s===Hg&&i===kg){for(;n===Rg;)n=e[--r];if(n===kg)return vA}if(s===dc&&i===dc){for(var a=0;n===dc;)a++,n=e[--r];if(a%2===0)return vA}return fc},sD=function(A){var e=eD(A),t=e.length,r=0,n=0,s=e.map(rD);return{next:function(){if(r>=t)return{done:!0,value:null};for(var i=vA;r<t&&(i=nD(e,s,++r))===vA;);if(i!==vA||r===t){var a=AD.apply(null,e.slice(n,r));return n=r,{value:a,done:!1}}return{done:!0,value:null}}}},iD=function(A){for(var e=sD(A),t=[],r;!(r=e.next()).done;)r.value&&t.push(r.value.slice());return t},oD=function(A){var e=123;if(A.createRange){var t=A.createRange();if(t.getBoundingClientRect){var r=A.createElement("boundtest");r.style.height=e+"px",r.style.display="block",A.body.appendChild(r),t.selectNode(r);var n=t.getBoundingClientRect(),s=Math.round(n.height);if(A.body.removeChild(r),s===e)return!0}}return!1},aD=function(A){var e=A.createElement("boundtest");e.style.width="50px",e.style.display="block",e.style.fontSize="12px",e.style.letterSpacing="0px",e.style.wordSpacing="0px",A.body.appendChild(e);var t=A.createRange();e.innerHTML=typeof"".repeat=="function"?"&#128104;".repeat(10):"";var r=e.firstChild,n=ta(r.data).map(function(c){return Fe(c)}),s=0,i={},a=n.every(function(c,l){t.setStart(r,s),t.setEnd(r,s+c.length);var h=t.getBoundingClientRect();s+=c.length;var f=h.x>i.x||h.y>i.y;return i=h,l===0?!0:f});return A.body.removeChild(e),a},cD=function(){return typeof new Image().crossOrigin!="undefined"},lD=function(){return typeof new XMLHttpRequest().responseType=="string"},uD=function(A){var e=new Image,t=A.createElement("canvas"),r=t.getContext("2d");if(!r)return!1;e.src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";try{r.drawImage(e,0,0),t.toDataURL()}catch(n){return!1}return!0},Og=function(A){return A[0]===0&&A[1]===255&&A[2]===0&&A[3]===255},hD=function(A){var e=A.createElement("canvas"),t=100;e.width=t,e.height=t;var r=e.getContext("2d");if(!r)return Promise.reject(!1);r.fillStyle="rgb(0, 255, 0)",r.fillRect(0,0,t,t);var n=new Image,s=e.toDataURL();n.src=s;var i=cl(t,t,0,0,n);return r.fillStyle="red",r.fillRect(0,0,t,t),Ng(i).then(function(a){r.drawImage(a,0,0);var c=r.getImageData(0,0,t,t).data;r.fillStyle="red",r.fillRect(0,0,t,t);var l=A.createElement("div");return l.style.backgroundImage="url("+s+")",l.style.height=t+"px",Og(c)?Ng(cl(t,t,0,0,l)):Promise.reject(!1)}).then(function(a){return r.drawImage(a,0,0),Og(r.getImageData(0,0,t,t).data)}).catch(function(){return!1})},cl=function(A,e,t,r,n){var s="http://www.w3.org/2000/svg",i=document.createElementNS(s,"svg"),a=document.createElementNS(s,"foreignObject");return i.setAttributeNS(null,"width",A.toString()),i.setAttributeNS(null,"height",e.toString()),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.setAttributeNS(null,"x",t.toString()),a.setAttributeNS(null,"y",r.toString()),a.setAttributeNS(null,"externalResourcesRequired","true"),i.appendChild(a),a.appendChild(n),i},Ng=function(A){return new Promise(function(e,t){var r=new Image;r.onload=function(){return e(r)},r.onerror=t,r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},Ge={get SUPPORT_RANGE_BOUNDS(){var A=oD(document);return Object.defineProperty(Ge,"SUPPORT_RANGE_BOUNDS",{value:A}),A},get SUPPORT_WORD_BREAKING(){var A=Ge.SUPPORT_RANGE_BOUNDS&&aD(document);return Object.defineProperty(Ge,"SUPPORT_WORD_BREAKING",{value:A}),A},get SUPPORT_SVG_DRAWING(){var A=uD(document);return Object.defineProperty(Ge,"SUPPORT_SVG_DRAWING",{value:A}),A},get SUPPORT_FOREIGNOBJECT_DRAWING(){var A=typeof Array.from=="function"&&typeof window.fetch=="function"?hD(document):Promise.resolve(!1);return Object.defineProperty(Ge,"SUPPORT_FOREIGNOBJECT_DRAWING",{value:A}),A},get SUPPORT_CORS_IMAGES(){var A=cD();return Object.defineProperty(Ge,"SUPPORT_CORS_IMAGES",{value:A}),A},get SUPPORT_RESPONSE_TYPE(){var A=lD();return Object.defineProperty(Ge,"SUPPORT_RESPONSE_TYPE",{value:A}),A},get SUPPORT_CORS_XHR(){var A="withCredentials"in new XMLHttpRequest;return Object.defineProperty(Ge,"SUPPORT_CORS_XHR",{value:A}),A},get SUPPORT_NATIVE_TEXT_SEGMENTATION(){var A=!!(typeof Intl!="undefined"&&Intl.Segmenter);return Object.defineProperty(Ge,"SUPPORT_NATIVE_TEXT_SEGMENTATION",{value:A}),A}},as=function(){function A(e,t){this.text=e,this.bounds=t}return A}(),dD=function(A,e,t,r){var n=pD(e,t),s=[],i=0;return n.forEach(function(a){if(t.textDecorationLine.length||a.trim().length>0)if(Ge.SUPPORT_RANGE_BOUNDS){var c=Vg(r,i,a.length).getClientRects();if(c.length>1){var l=Su(a),h=0;l.forEach(function(p){s.push(new as(p,gt.fromDOMRectList(A,Vg(r,h+i,p.length).getClientRects()))),h+=p.length})}else s.push(new as(a,gt.fromDOMRectList(A,c)))}else{var f=r.splitText(a.length);s.push(new as(a,fD(A,r))),r=f}else Ge.SUPPORT_RANGE_BOUNDS||(r=r.splitText(a.length));i+=a.length}),s},fD=function(A,e){var t=e.ownerDocument;if(t){var r=t.createElement("html2canvaswrapper");r.appendChild(e.cloneNode(!0));var n=e.parentNode;if(n){n.replaceChild(r,e);var s=Aa(A,r);return r.firstChild&&n.replaceChild(r.firstChild,r),s}}return gt.EMPTY},Vg=function(A,e,t){var r=A.ownerDocument;if(!r)throw new Error("Node has no owner document");var n=r.createRange();return n.setStart(A,e),n.setEnd(A,e+t),n},Su=function(A){if(Ge.SUPPORT_NATIVE_TEXT_SEGMENTATION){var e=new Intl.Segmenter(void 0,{granularity:"grapheme"});return Array.from(e.segment(A)).map(function(t){return t.segment})}return iD(A)},gD=function(A,e){if(Ge.SUPPORT_NATIVE_TEXT_SEGMENTATION){var t=new Intl.Segmenter(void 0,{granularity:"word"});return Array.from(t.segment(A)).map(function(r){return r.segment})}return BD(A,e)},pD=function(A,e){return e.letterSpacing!==0?Su(A):gD(A,e)},mD=[32,160,4961,65792,65793,4153,4241],BD=function(A,e){for(var t=Gx(A,{lineBreak:e.lineBreak,wordBreak:e.overflowWrap==="break-word"?"break-word":e.wordBreak}),r=[],n,s=function(){if(n.value){var i=n.value.slice(),a=ta(i),c="";a.forEach(function(l){mD.indexOf(l)===-1?c+=Fe(l):(c.length&&r.push(c),r.push(Fe(l)),c="")}),c.length&&r.push(c)}};!(n=t.next()).done;)s();return r},wD=function(){function A(e,t,r){this.text=yD(t.data,r.textTransform),this.textBounds=dD(e,this.text,r,t)}return A}(),yD=function(A,e){switch(e){case 1:return A.toLowerCase();case 3:return A.replace(CD,vD);case 2:return A.toUpperCase();default:return A}},CD=/(^|\s|:|-|\(|\))([a-z])/g,vD=function(A,e,t){return A.length>0?e+t.toUpperCase():A},zw=function(A){LA(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.src=r.currentSrc||r.src,n.intrinsicWidth=r.naturalWidth,n.intrinsicHeight=r.naturalHeight,n.context.cache.addImage(n.src),n}return e}(YA),Jw=function(A){LA(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.canvas=r,n.intrinsicWidth=r.width,n.intrinsicHeight=r.height,n}return e}(YA),Yw=function(A){LA(e,A);function e(t,r){var n=A.call(this,t,r)||this,s=new XMLSerializer,i=Aa(t,r);return r.setAttribute("width",i.width+"px"),r.setAttribute("height",i.height+"px"),n.svg="data:image/svg+xml,"+encodeURIComponent(s.serializeToString(r)),n.intrinsicWidth=r.width.baseVal.value,n.intrinsicHeight=r.height.baseVal.value,n.context.cache.addImage(n.svg),n}return e}(YA),Zw=function(A){LA(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.value=r.value,n}return e}(YA),ll=function(A){LA(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.start=r.start,n.reversed=typeof r.reversed=="boolean"&&r.reversed===!0,n}return e}(YA),ED=[{type:15,flags:0,unit:"px",number:3}],ID=[{type:16,flags:0,number:50}],_D=function(A){return A.width>A.height?new gt(A.left+(A.width-A.height)/2,A.top,A.height,A.height):A.width<A.height?new gt(A.left,A.top+(A.height-A.width)/2,A.width,A.width):A},UD=function(A){var e=A.type===QD?new Array(A.value.length+1).join("•"):A.value;return e.length===0?A.placeholder||"":e},Qo="checkbox",bo="radio",QD="password",Mg=707406591,Ru=function(A){LA(e,A);function e(t,r){var n=A.call(this,t,r)||this;switch(n.type=r.type.toLowerCase(),n.checked=r.checked,n.value=UD(r),(n.type===Qo||n.type===bo)&&(n.styles.backgroundColor=3739148031,n.styles.borderTopColor=n.styles.borderRightColor=n.styles.borderBottomColor=n.styles.borderLeftColor=2779096575,n.styles.borderTopWidth=n.styles.borderRightWidth=n.styles.borderBottomWidth=n.styles.borderLeftWidth=1,n.styles.borderTopStyle=n.styles.borderRightStyle=n.styles.borderBottomStyle=n.styles.borderLeftStyle=1,n.styles.backgroundClip=[0],n.styles.backgroundOrigin=[0],n.bounds=_D(n.bounds)),n.type){case Qo:n.styles.borderTopRightRadius=n.styles.borderTopLeftRadius=n.styles.borderBottomRightRadius=n.styles.borderBottomLeftRadius=ED;break;case bo:n.styles.borderTopRightRadius=n.styles.borderTopLeftRadius=n.styles.borderBottomRightRadius=n.styles.borderBottomLeftRadius=ID;break}return n}return e}(YA),ey=function(A){LA(e,A);function e(t,r){var n=A.call(this,t,r)||this,s=r.options[r.selectedIndex||0];return n.value=s&&s.text||"",n}return e}(YA),Ay=function(A){LA(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.value=r.value,n}return e}(YA),ty=function(A){LA(e,A);function e(t,r){var n=A.call(this,t,r)||this;n.src=r.src,n.width=parseInt(r.width,10)||0,n.height=parseInt(r.height,10)||0,n.backgroundColor=n.styles.backgroundColor;try{if(r.contentWindow&&r.contentWindow.document&&r.contentWindow.document.documentElement){n.tree=ny(t,r.contentWindow.document.documentElement);var s=r.contentWindow.document.documentElement?is(t,getComputedStyle(r.contentWindow.document.documentElement).backgroundColor):ct.TRANSPARENT,i=r.contentWindow.document.body?is(t,getComputedStyle(r.contentWindow.document.body).backgroundColor):ct.TRANSPARENT;n.backgroundColor=Nt(s)?Nt(i)?n.styles.backgroundColor:i:s}}catch(a){}return n}return e}(YA),bD=["OL","UL","MENU"],Zi=function(A,e,t,r){for(var n=e.firstChild,s=void 0;n;n=s)if(s=n.nextSibling,sy(n)&&n.data.trim().length>0)t.textNodes.push(new wD(A,n,t.styles));else if(jr(n))if(cy(n)&&n.assignedNodes)n.assignedNodes().forEach(function(a){return Zi(A,a,t,r)});else{var i=ry(A,n);i.styles.isVisible()&&(FD(n,i,r)?i.flags|=4:TD(i.styles)&&(i.flags|=2),bD.indexOf(n.tagName)!==-1&&(i.flags|=8),t.elements.push(i),n.slot,n.shadowRoot?Zi(A,n.shadowRoot,i,r):!Fo(n)&&!iy(n)&&!To(n)&&Zi(A,n,i,r))}},ry=function(A,e){return hl(e)?new zw(A,e):oy(e)?new Jw(A,e):iy(e)?new Yw(A,e):xD(e)?new Zw(A,e):SD(e)?new ll(A,e):RD(e)?new Ru(A,e):To(e)?new ey(A,e):Fo(e)?new Ay(A,e):ay(e)?new ty(A,e):new YA(A,e)},ny=function(A,e){var t=ry(A,e);return t.flags|=4,Zi(A,e,t,t),t},FD=function(A,e,t){return e.styles.isPositionedWithZIndex()||e.styles.opacity<1||e.styles.isTransformed()||Du(A)&&t.styles.isTransparent()},TD=function(A){return A.isPositioned()||A.isFloating()},sy=function(A){return A.nodeType===Node.TEXT_NODE},jr=function(A){return A.nodeType===Node.ELEMENT_NODE},ul=function(A){return jr(A)&&typeof A.style!="undefined"&&!eo(A)},eo=function(A){return typeof A.className=="object"},xD=function(A){return A.tagName==="LI"},SD=function(A){return A.tagName==="OL"},RD=function(A){return A.tagName==="INPUT"},DD=function(A){return A.tagName==="HTML"},iy=function(A){return A.tagName==="svg"},Du=function(A){return A.tagName==="BODY"},oy=function(A){return A.tagName==="CANVAS"},Kg=function(A){return A.tagName==="VIDEO"},hl=function(A){return A.tagName==="IMG"},ay=function(A){return A.tagName==="IFRAME"},jg=function(A){return A.tagName==="STYLE"},PD=function(A){return A.tagName==="SCRIPT"},Fo=function(A){return A.tagName==="TEXTAREA"},To=function(A){return A.tagName==="SELECT"},cy=function(A){return A.tagName==="SLOT"},Gg=function(A){return A.tagName.indexOf("-")>0},LD=function(){function A(){this.counters={}}return A.prototype.getCounterValue=function(e){var t=this.counters[e];return t&&t.length?t[t.length-1]:1},A.prototype.getCounterValues=function(e){var t=this.counters[e];return t||[]},A.prototype.pop=function(e){var t=this;e.forEach(function(r){return t.counters[r].pop()})},A.prototype.parse=function(e){var t=this,r=e.counterIncrement,n=e.counterReset,s=!0;r!==null&&r.forEach(function(a){var c=t.counters[a.counter];c&&a.increment!==0&&(s=!1,c.length||c.push(1),c[Math.max(0,c.length-1)]+=a.increment)});var i=[];return s&&n.forEach(function(a){var c=t.counters[a.counter];i.push(a.counter),c||(c=t.counters[a.counter]=[]),c.push(a.reset)}),i},A}(),$g={integers:[1e3,900,500,400,100,90,50,40,10,9,5,4,1],values:["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]},Wg={integers:[9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["Ք","Փ","Ւ","Ց","Ր","Տ","Վ","Ս","Ռ","Ջ","Պ","Չ","Ո","Շ","Ն","Յ","Մ","Ճ","Ղ","Ձ","Հ","Կ","Ծ","Խ","Լ","Ի","Ժ","Թ","Ը","Է","Զ","Ե","Դ","Գ","Բ","Ա"]},HD={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,400,300,200,100,90,80,70,60,50,40,30,20,19,18,17,16,15,10,9,8,7,6,5,4,3,2,1],values:["י׳","ט׳","ח׳","ז׳","ו׳","ה׳","ד׳","ג׳","ב׳","א׳","ת","ש","ר","ק","צ","פ","ע","ס","נ","מ","ל","כ","יט","יח","יז","טז","טו","י","ט","ח","ז","ו","ה","ד","ג","ב","א"]},kD={integers:[1e4,9e3,8e3,7e3,6e3,5e3,4e3,3e3,2e3,1e3,900,800,700,600,500,400,300,200,100,90,80,70,60,50,40,30,20,10,9,8,7,6,5,4,3,2,1],values:["ჵ","ჰ","ჯ","ჴ","ხ","ჭ","წ","ძ","ც","ჩ","შ","ყ","ღ","ქ","ფ","ჳ","ტ","ს","რ","ჟ","პ","ო","ჲ","ნ","მ","ლ","კ","ი","თ","ჱ","ზ","ვ","ე","დ","გ","ბ","ა"]},Rr=function(A,e,t,r,n,s){return A<e||A>t?_s(A,n,s.length>0):r.integers.reduce(function(i,a,c){for(;A>=a;)A-=a,i+=r.values[c];return i},"")+s},ly=function(A,e,t,r){var n="";do t||A--,n=r(A)+n,A/=e;while(A*e>=e);return n},be=function(A,e,t,r,n){var s=t-e+1;return(A<0?"-":"")+(ly(Math.abs(A),s,r,function(i){return Fe(Math.floor(i%s)+e)})+n)},nr=function(A,e,t){t===void 0&&(t=". ");var r=e.length;return ly(Math.abs(A),r,!1,function(n){return e[Math.floor(n%r)]})+t},Mr=1,vt=2,Et=4,qn=8,tt=function(A,e,t,r,n,s){if(A<-9999||A>9999)return _s(A,4,n.length>0);var i=Math.abs(A),a=n;if(i===0)return e[0]+a;for(var c=0;i>0&&c<=4;c++){var l=i%10;l===0&&ke(s,Mr)&&a!==""?a=e[l]+a:l>1||l===1&&c===0||l===1&&c===1&&ke(s,vt)||l===1&&c===1&&ke(s,Et)&&A>100||l===1&&c>1&&ke(s,qn)?a=e[l]+(c>0?t[c-1]:"")+a:l===1&&c>0&&(a=t[c-1]+a),i=Math.floor(i/10)}return(A<0?r:"")+a},Xg="十百千萬",qg="拾佰仟萬",zg="マイナス",gc="마이너스",_s=function(A,e,t){var r=t?". ":"",n=t?"、":"",s=t?", ":"",i=t?" ":"";switch(e){case 0:return"•"+i;case 1:return"◦"+i;case 2:return"◾"+i;case 5:var a=be(A,48,57,!0,r);return a.length<4?"0"+a:a;case 4:return nr(A,"〇一二三四五六七八九",n);case 6:return Rr(A,1,3999,$g,3,r).toLowerCase();case 7:return Rr(A,1,3999,$g,3,r);case 8:return be(A,945,969,!1,r);case 9:return be(A,97,122,!1,r);case 10:return be(A,65,90,!1,r);case 11:return be(A,1632,1641,!0,r);case 12:case 49:return Rr(A,1,9999,Wg,3,r);case 35:return Rr(A,1,9999,Wg,3,r).toLowerCase();case 13:return be(A,2534,2543,!0,r);case 14:case 30:return be(A,6112,6121,!0,r);case 15:return nr(A,"子丑寅卯辰巳午未申酉戌亥",n);case 16:return nr(A,"甲乙丙丁戊己庚辛壬癸",n);case 17:case 48:return tt(A,"零一二三四五六七八九",Xg,"負",n,vt|Et|qn);case 47:return tt(A,"零壹貳參肆伍陸柒捌玖",qg,"負",n,Mr|vt|Et|qn);case 42:return tt(A,"零一二三四五六七八九",Xg,"负",n,vt|Et|qn);case 41:return tt(A,"零壹贰叁肆伍陆柒捌玖",qg,"负",n,Mr|vt|Et|qn);case 26:return tt(A,"〇一二三四五六七八九","十百千万",zg,n,0);case 25:return tt(A,"零壱弐参四伍六七八九","拾百千万",zg,n,Mr|vt|Et);case 31:return tt(A,"영일이삼사오육칠팔구","십백천만",gc,s,Mr|vt|Et);case 33:return tt(A,"零一二三四五六七八九","十百千萬",gc,s,0);case 32:return tt(A,"零壹貳參四五六七八九","拾百千",gc,s,Mr|vt|Et);case 18:return be(A,2406,2415,!0,r);case 20:return Rr(A,1,19999,kD,3,r);case 21:return be(A,2790,2799,!0,r);case 22:return be(A,2662,2671,!0,r);case 22:return Rr(A,1,10999,HD,3,r);case 23:return nr(A,"あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");case 24:return nr(A,"いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");case 27:return be(A,3302,3311,!0,r);case 28:return nr(A,"アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン",n);case 29:return nr(A,"イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス",n);case 34:return be(A,3792,3801,!0,r);case 37:return be(A,6160,6169,!0,r);case 38:return be(A,4160,4169,!0,r);case 39:return be(A,2918,2927,!0,r);case 40:return be(A,1776,1785,!0,r);case 43:return be(A,3046,3055,!0,r);case 44:return be(A,3174,3183,!0,r);case 45:return be(A,3664,3673,!0,r);case 46:return be(A,3872,3881,!0,r);case 3:default:return be(A,48,57,!0,r)}},uy="data-html2canvas-ignore",Jg=function(){function A(e,t,r){if(this.context=e,this.options=r,this.scrolledElements=[],this.referenceElement=t,this.counters=new LD,this.quoteDepth=0,!t.ownerDocument)throw new Error("Cloned element does not have an owner document");this.documentElement=this.cloneNode(t.ownerDocument.documentElement,!1)}return A.prototype.toIFrame=function(e,t){var r=this,n=OD(e,t);if(!n.contentWindow)return Promise.reject("Unable to find iframe window");var s=e.defaultView.pageXOffset,i=e.defaultView.pageYOffset,a=n.contentWindow,c=a.document,l=MD(n).then(function(){return cA(r,void 0,void 0,function(){var h,f;return eA(this,function(p){switch(p.label){case 0:return this.scrolledElements.forEach($D),a&&(a.scrollTo(t.left,t.top),/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&(a.scrollY!==t.top||a.scrollX!==t.left)&&(this.context.logger.warn("Unable to restore scroll position for cloned document"),this.context.windowBounds=this.context.windowBounds.add(a.scrollX-t.left,a.scrollY-t.top,0,0))),h=this.options.onclone,f=this.clonedReferenceElement,typeof f=="undefined"?[2,Promise.reject("Error finding the "+this.referenceElement.nodeName+" in the cloned document")]:c.fonts&&c.fonts.ready?[4,c.fonts.ready]:[3,2];case 1:p.sent(),p.label=2;case 2:return/(AppleWebKit)/g.test(navigator.userAgent)?[4,VD(c)]:[3,4];case 3:p.sent(),p.label=4;case 4:return typeof h=="function"?[2,Promise.resolve().then(function(){return h(c,f)}).then(function(){return n})]:[2,n]}})})});return c.open(),c.write(jD(document.doctype)+"<html></html>"),GD(this.referenceElement.ownerDocument,s,i),c.replaceChild(c.adoptNode(this.documentElement),c.documentElement),c.close(),l},A.prototype.createElementClone=function(e){if(al(e,2))debugger;if(oy(e))return this.createCanvasClone(e);if(Kg(e))return this.createVideoClone(e);if(jg(e))return this.createStyleClone(e);var t=e.cloneNode(!1);return hl(t)&&(hl(e)&&e.currentSrc&&e.currentSrc!==e.src&&(t.src=e.currentSrc,t.srcset=""),t.loading==="lazy"&&(t.loading="eager")),Gg(t)?this.createCustomElementClone(t):t},A.prototype.createCustomElementClone=function(e){var t=document.createElement("html2canvascustomelement");return pc(e.style,t),t},A.prototype.createStyleClone=function(e){try{var t=e.sheet;if(t&&t.cssRules){var r=[].slice.call(t.cssRules,0).reduce(function(s,i){return i&&typeof i.cssText=="string"?s+i.cssText:s},""),n=e.cloneNode(!1);return n.textContent=r,n}}catch(s){if(this.context.logger.error("Unable to access cssRules property",s),s.name!=="SecurityError")throw s}return e.cloneNode(!1)},A.prototype.createCanvasClone=function(e){var t;if(this.options.inlineImages&&e.ownerDocument){var r=e.ownerDocument.createElement("img");try{return r.src=e.toDataURL(),r}catch(l){this.context.logger.info("Unable to inline canvas contents, canvas is tainted",e)}}var n=e.cloneNode(!1);try{n.width=e.width,n.height=e.height;var s=e.getContext("2d"),i=n.getContext("2d");if(i)if(!this.options.allowTaint&&s)i.putImageData(s.getImageData(0,0,e.width,e.height),0,0);else{var a=(t=e.getContext("webgl2"))!==null&&t!==void 0?t:e.getContext("webgl");if(a){var c=a.getContextAttributes();(c==null?void 0:c.preserveDrawingBuffer)===!1&&this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false",e)}i.drawImage(e,0,0)}return n}catch(l){this.context.logger.info("Unable to clone canvas as it is tainted",e)}return n},A.prototype.createVideoClone=function(e){var t=e.ownerDocument.createElement("canvas");t.width=e.offsetWidth,t.height=e.offsetHeight;var r=t.getContext("2d");try{return r&&(r.drawImage(e,0,0,t.width,t.height),this.options.allowTaint||r.getImageData(0,0,t.width,t.height)),t}catch(s){this.context.logger.info("Unable to clone video as it is tainted",e)}var n=e.ownerDocument.createElement("canvas");return n.width=e.offsetWidth,n.height=e.offsetHeight,n},A.prototype.appendChildNode=function(e,t,r){(!jr(t)||!PD(t)&&!t.hasAttribute(uy)&&(typeof this.options.ignoreElements!="function"||!this.options.ignoreElements(t)))&&(!this.options.copyStyles||!jr(t)||!jg(t))&&e.appendChild(this.cloneNode(t,r))},A.prototype.cloneChildNodes=function(e,t,r){for(var n=this,s=e.shadowRoot?e.shadowRoot.firstChild:e.firstChild;s;s=s.nextSibling)if(jr(s)&&cy(s)&&typeof s.assignedNodes=="function"){var i=s.assignedNodes();i.length&&i.forEach(function(a){return n.appendChildNode(t,a,r)})}else this.appendChildNode(t,s,r)},A.prototype.cloneNode=function(e,t){if(sy(e))return document.createTextNode(e.data);if(!e.ownerDocument)return e.cloneNode(!1);var r=e.ownerDocument.defaultView;if(r&&jr(e)&&(ul(e)||eo(e))){var n=this.createElementClone(e);n.style.transitionProperty="none";var s=r.getComputedStyle(e),i=r.getComputedStyle(e,":before"),a=r.getComputedStyle(e,":after");this.referenceElement===e&&ul(n)&&(this.clonedReferenceElement=n),Du(n)&&qD(n);var c=this.counters.parse(new bg(this.context,s)),l=this.resolvePseudoContent(e,n,i,cs.BEFORE);Gg(e)&&(t=!0),Kg(e)||this.cloneChildNodes(e,n,t),l&&n.insertBefore(l,n.firstChild);var h=this.resolvePseudoContent(e,n,a,cs.AFTER);return h&&n.appendChild(h),this.counters.pop(c),(s&&(this.options.copyStyles||eo(e))&&!ay(e)||t)&&pc(s,n),(e.scrollTop!==0||e.scrollLeft!==0)&&this.scrolledElements.push([n,e.scrollLeft,e.scrollTop]),(Fo(e)||To(e))&&(Fo(n)||To(n))&&(n.value=e.value),n}return e.cloneNode(!1)},A.prototype.resolvePseudoContent=function(e,t,r,n){var s=this;if(r){var i=r.content,a=t.ownerDocument;if(!(!a||!i||i==="none"||i==="-moz-alt-content"||r.display==="none")){this.counters.parse(new bg(this.context,r));var c=new xR(this.context,r),l=a.createElement("html2canvaspseudoelement");pc(r,l),c.content.forEach(function(f){if(f.type===0)l.appendChild(a.createTextNode(f.value));else if(f.type===22){var p=a.createElement("img");p.src=f.value,p.style.opacity="1",l.appendChild(p)}else if(f.type===18){if(f.name==="attr"){var C=f.values.filter(fe);C.length&&l.appendChild(a.createTextNode(e.getAttribute(C[0].value)||""))}else if(f.name==="counter"){var _=f.values.filter(on),v=_[0],b=_[1];if(v&&fe(v)){var x=s.counters.getCounterValue(v.value),S=b&&fe(b)?ol.parse(s.context,b.value):3;l.appendChild(a.createTextNode(_s(x,S,!1)))}}else if(f.name==="counters"){var D=f.values.filter(on),v=D[0],k=D[1],b=D[2];if(v&&fe(v)){var O=s.counters.getCounterValues(v.value),H=b&&fe(b)?ol.parse(s.context,b.value):3,U=k&&k.type===0?k.value:"",m=O.map(function(F){return _s(F,H,!1)}).join(U);l.appendChild(a.createTextNode(m))}}}else if(f.type===20)switch(f.value){case"open-quote":l.appendChild(a.createTextNode(Qg(c.quotes,s.quoteDepth++,!0)));break;case"close-quote":l.appendChild(a.createTextNode(Qg(c.quotes,--s.quoteDepth,!1)));break;default:l.appendChild(a.createTextNode(f.value))}}),l.className=dl+" "+fl;var h=n===cs.BEFORE?" "+dl:" "+fl;return eo(t)?t.className.baseValue+=h:t.className+=h,l}}},A.destroy=function(e){return e.parentNode?(e.parentNode.removeChild(e),!0):!1},A}(),cs;(function(A){A[A.BEFORE=0]="BEFORE",A[A.AFTER=1]="AFTER"})(cs||(cs={}));var OD=function(A,e){var t=A.createElement("iframe");return t.className="html2canvas-container",t.style.visibility="hidden",t.style.position="fixed",t.style.left="-10000px",t.style.top="0px",t.style.border="0",t.width=e.width.toString(),t.height=e.height.toString(),t.scrolling="no",t.setAttribute(uy,"true"),A.body.appendChild(t),t},ND=function(A){return new Promise(function(e){if(A.complete){e();return}if(!A.src){e();return}A.onload=e,A.onerror=e})},VD=function(A){return Promise.all([].slice.call(A.images,0).map(ND))},MD=function(A){return new Promise(function(e,t){var r=A.contentWindow;if(!r)return t("No window assigned for iframe");var n=r.document;r.onload=A.onload=function(){r.onload=A.onload=null;var s=setInterval(function(){n.body.childNodes.length>0&&n.readyState==="complete"&&(clearInterval(s),e(A))},50)}})},KD=["all","d","content"],pc=function(A,e){for(var t=A.length-1;t>=0;t--){var r=A.item(t);KD.indexOf(r)===-1&&e.style.setProperty(r,A.getPropertyValue(r))}return e},jD=function(A){var e="";return A&&(e+="<!DOCTYPE ",A.name&&(e+=A.name),A.internalSubset&&(e+=A.internalSubset),A.publicId&&(e+='"'+A.publicId+'"'),A.systemId&&(e+='"'+A.systemId+'"'),e+=">"),e},GD=function(A,e,t){A&&A.defaultView&&(e!==A.defaultView.pageXOffset||t!==A.defaultView.pageYOffset)&&A.defaultView.scrollTo(e,t)},$D=function(A){var e=A[0],t=A[1],r=A[2];e.scrollLeft=t,e.scrollTop=r},WD=":before",XD=":after",dl="___html2canvas___pseudoelement_before",fl="___html2canvas___pseudoelement_after",Yg=`{
    content: "" !important;
    display: none !important;
}`,qD=function(A){zD(A,"."+dl+WD+Yg+`
         .`+fl+XD+Yg)},zD=function(A,e){var t=A.ownerDocument;if(t){var r=t.createElement("style");r.textContent=e,A.appendChild(r)}},hy=function(){function A(){}return A.getOrigin=function(e){var t=A._link;return t?(t.href=e,t.href=t.href,t.protocol+t.hostname+t.port):"about:blank"},A.isSameOrigin=function(e){return A.getOrigin(e)===A._origin},A.setContext=function(e){A._link=e.document.createElement("a"),A._origin=A.getOrigin(e.location.href)},A._origin="about:blank",A}(),JD=function(){function A(e,t){this.context=e,this._options=t,this._cache={}}return A.prototype.addImage=function(e){var t=Promise.resolve();return this.has(e)||(Bc(e)||AP(e))&&(this._cache[e]=this.loadImage(e)).catch(function(){}),t},A.prototype.match=function(e){return this._cache[e]},A.prototype.loadImage=function(e){return cA(this,void 0,void 0,function(){var t,r,n,s,i=this;return eA(this,function(a){switch(a.label){case 0:return t=hy.isSameOrigin(e),r=!mc(e)&&this._options.useCORS===!0&&Ge.SUPPORT_CORS_IMAGES&&!t,n=!mc(e)&&!t&&!Bc(e)&&typeof this._options.proxy=="string"&&Ge.SUPPORT_CORS_XHR&&!r,!t&&this._options.allowTaint===!1&&!mc(e)&&!Bc(e)&&!n&&!r?[2]:(s=e,n?[4,this.proxy(s)]:[3,2]);case 1:s=a.sent(),a.label=2;case 2:return this.context.logger.debug("Added image "+e.substring(0,256)),[4,new Promise(function(c,l){var h=new Image;h.onload=function(){return c(h)},h.onerror=l,(tP(s)||r)&&(h.crossOrigin="anonymous"),h.src=s,h.complete===!0&&setTimeout(function(){return c(h)},500),i._options.imageTimeout>0&&setTimeout(function(){return l("Timed out ("+i._options.imageTimeout+"ms) loading image")},i._options.imageTimeout)})];case 3:return[2,a.sent()]}})})},A.prototype.has=function(e){return typeof this._cache[e]!="undefined"},A.prototype.keys=function(){return Promise.resolve(Object.keys(this._cache))},A.prototype.proxy=function(e){var t=this,r=this._options.proxy;if(!r)throw new Error("No proxy defined");var n=e.substring(0,256);return new Promise(function(s,i){var a=Ge.SUPPORT_RESPONSE_TYPE?"blob":"text",c=new XMLHttpRequest;c.onload=function(){if(c.status===200)if(a==="text")s(c.response);else{var f=new FileReader;f.addEventListener("load",function(){return s(f.result)},!1),f.addEventListener("error",function(p){return i(p)},!1),f.readAsDataURL(c.response)}else i("Failed to proxy resource "+n+" with status code "+c.status)},c.onerror=i;var l=r.indexOf("?")>-1?"&":"?";if(c.open("GET",""+r+l+"url="+encodeURIComponent(e)+"&responseType="+a),a!=="text"&&c instanceof XMLHttpRequest&&(c.responseType=a),t._options.imageTimeout){var h=t._options.imageTimeout;c.timeout=h,c.ontimeout=function(){return i("Timed out ("+h+"ms) proxying "+n)}}c.send()})},A}(),YD=/^data:image\/svg\+xml/i,ZD=/^data:image\/.*;base64,/i,eP=/^data:image\/.*/i,AP=function(A){return Ge.SUPPORT_SVG_DRAWING||!rP(A)},mc=function(A){return eP.test(A)},tP=function(A){return ZD.test(A)},Bc=function(A){return A.substr(0,4)==="blob"},rP=function(A){return A.substr(-3).toLowerCase()==="svg"||YD.test(A)},K=function(){function A(e,t){this.type=0,this.x=e,this.y=t}return A.prototype.add=function(e,t){return new A(this.x+e,this.y+t)},A}(),Dr=function(A,e,t){return new K(A.x+(e.x-A.x)*t,A.y+(e.y-A.y)*t)},Di=function(){function A(e,t,r,n){this.type=1,this.start=e,this.startControl=t,this.endControl=r,this.end=n}return A.prototype.subdivide=function(e,t){var r=Dr(this.start,this.startControl,e),n=Dr(this.startControl,this.endControl,e),s=Dr(this.endControl,this.end,e),i=Dr(r,n,e),a=Dr(n,s,e),c=Dr(i,a,e);return t?new A(this.start,r,i,c):new A(c,a,s,this.end)},A.prototype.add=function(e,t){return new A(this.start.add(e,t),this.startControl.add(e,t),this.endControl.add(e,t),this.end.add(e,t))},A.prototype.reverse=function(){return new A(this.end,this.endControl,this.startControl,this.start)},A}(),EA=function(A){return A.type===1},nP=function(){function A(e){var t=e.styles,r=e.bounds,n=Wn(t.borderTopLeftRadius,r.width,r.height),s=n[0],i=n[1],a=Wn(t.borderTopRightRadius,r.width,r.height),c=a[0],l=a[1],h=Wn(t.borderBottomRightRadius,r.width,r.height),f=h[0],p=h[1],C=Wn(t.borderBottomLeftRadius,r.width,r.height),_=C[0],v=C[1],b=[];b.push((s+c)/r.width),b.push((_+f)/r.width),b.push((i+v)/r.height),b.push((l+p)/r.height);var x=Math.max.apply(Math,b);x>1&&(s/=x,i/=x,c/=x,l/=x,f/=x,p/=x,_/=x,v/=x);var S=r.width-c,D=r.height-p,k=r.width-f,O=r.height-v,H=t.borderTopWidth,U=t.borderRightWidth,m=t.borderBottomWidth,w=t.borderLeftWidth,Q=me(t.paddingTop,e.bounds.width),F=me(t.paddingRight,e.bounds.width),T=me(t.paddingBottom,e.bounds.width),I=me(t.paddingLeft,e.bounds.width);this.topLeftBorderDoubleOuterBox=s>0||i>0?Ce(r.left+w/3,r.top+H/3,s-w/3,i-H/3,ue.TOP_LEFT):new K(r.left+w/3,r.top+H/3),this.topRightBorderDoubleOuterBox=s>0||i>0?Ce(r.left+S,r.top+H/3,c-U/3,l-H/3,ue.TOP_RIGHT):new K(r.left+r.width-U/3,r.top+H/3),this.bottomRightBorderDoubleOuterBox=f>0||p>0?Ce(r.left+k,r.top+D,f-U/3,p-m/3,ue.BOTTOM_RIGHT):new K(r.left+r.width-U/3,r.top+r.height-m/3),this.bottomLeftBorderDoubleOuterBox=_>0||v>0?Ce(r.left+w/3,r.top+O,_-w/3,v-m/3,ue.BOTTOM_LEFT):new K(r.left+w/3,r.top+r.height-m/3),this.topLeftBorderDoubleInnerBox=s>0||i>0?Ce(r.left+w*2/3,r.top+H*2/3,s-w*2/3,i-H*2/3,ue.TOP_LEFT):new K(r.left+w*2/3,r.top+H*2/3),this.topRightBorderDoubleInnerBox=s>0||i>0?Ce(r.left+S,r.top+H*2/3,c-U*2/3,l-H*2/3,ue.TOP_RIGHT):new K(r.left+r.width-U*2/3,r.top+H*2/3),this.bottomRightBorderDoubleInnerBox=f>0||p>0?Ce(r.left+k,r.top+D,f-U*2/3,p-m*2/3,ue.BOTTOM_RIGHT):new K(r.left+r.width-U*2/3,r.top+r.height-m*2/3),this.bottomLeftBorderDoubleInnerBox=_>0||v>0?Ce(r.left+w*2/3,r.top+O,_-w*2/3,v-m*2/3,ue.BOTTOM_LEFT):new K(r.left+w*2/3,r.top+r.height-m*2/3),this.topLeftBorderStroke=s>0||i>0?Ce(r.left+w/2,r.top+H/2,s-w/2,i-H/2,ue.TOP_LEFT):new K(r.left+w/2,r.top+H/2),this.topRightBorderStroke=s>0||i>0?Ce(r.left+S,r.top+H/2,c-U/2,l-H/2,ue.TOP_RIGHT):new K(r.left+r.width-U/2,r.top+H/2),this.bottomRightBorderStroke=f>0||p>0?Ce(r.left+k,r.top+D,f-U/2,p-m/2,ue.BOTTOM_RIGHT):new K(r.left+r.width-U/2,r.top+r.height-m/2),this.bottomLeftBorderStroke=_>0||v>0?Ce(r.left+w/2,r.top+O,_-w/2,v-m/2,ue.BOTTOM_LEFT):new K(r.left+w/2,r.top+r.height-m/2),this.topLeftBorderBox=s>0||i>0?Ce(r.left,r.top,s,i,ue.TOP_LEFT):new K(r.left,r.top),this.topRightBorderBox=c>0||l>0?Ce(r.left+S,r.top,c,l,ue.TOP_RIGHT):new K(r.left+r.width,r.top),this.bottomRightBorderBox=f>0||p>0?Ce(r.left+k,r.top+D,f,p,ue.BOTTOM_RIGHT):new K(r.left+r.width,r.top+r.height),this.bottomLeftBorderBox=_>0||v>0?Ce(r.left,r.top+O,_,v,ue.BOTTOM_LEFT):new K(r.left,r.top+r.height),this.topLeftPaddingBox=s>0||i>0?Ce(r.left+w,r.top+H,Math.max(0,s-w),Math.max(0,i-H),ue.TOP_LEFT):new K(r.left+w,r.top+H),this.topRightPaddingBox=c>0||l>0?Ce(r.left+Math.min(S,r.width-U),r.top+H,S>r.width+U?0:Math.max(0,c-U),Math.max(0,l-H),ue.TOP_RIGHT):new K(r.left+r.width-U,r.top+H),this.bottomRightPaddingBox=f>0||p>0?Ce(r.left+Math.min(k,r.width-w),r.top+Math.min(D,r.height-m),Math.max(0,f-U),Math.max(0,p-m),ue.BOTTOM_RIGHT):new K(r.left+r.width-U,r.top+r.height-m),this.bottomLeftPaddingBox=_>0||v>0?Ce(r.left+w,r.top+Math.min(O,r.height-m),Math.max(0,_-w),Math.max(0,v-m),ue.BOTTOM_LEFT):new K(r.left+w,r.top+r.height-m),this.topLeftContentBox=s>0||i>0?Ce(r.left+w+I,r.top+H+Q,Math.max(0,s-(w+I)),Math.max(0,i-(H+Q)),ue.TOP_LEFT):new K(r.left+w+I,r.top+H+Q),this.topRightContentBox=c>0||l>0?Ce(r.left+Math.min(S,r.width+w+I),r.top+H+Q,S>r.width+w+I?0:c-w+I,l-(H+Q),ue.TOP_RIGHT):new K(r.left+r.width-(U+F),r.top+H+Q),this.bottomRightContentBox=f>0||p>0?Ce(r.left+Math.min(k,r.width-(w+I)),r.top+Math.min(D,r.height+H+Q),Math.max(0,f-(U+F)),p-(m+T),ue.BOTTOM_RIGHT):new K(r.left+r.width-(U+F),r.top+r.height-(m+T)),this.bottomLeftContentBox=_>0||v>0?Ce(r.left+w+I,r.top+O,Math.max(0,_-(w+I)),v-(m+T),ue.BOTTOM_LEFT):new K(r.left+w+I,r.top+r.height-(m+T))}return A}(),ue;(function(A){A[A.TOP_LEFT=0]="TOP_LEFT",A[A.TOP_RIGHT=1]="TOP_RIGHT",A[A.BOTTOM_RIGHT=2]="BOTTOM_RIGHT",A[A.BOTTOM_LEFT=3]="BOTTOM_LEFT"})(ue||(ue={}));var Ce=function(A,e,t,r,n){var s=4*((Math.sqrt(2)-1)/3),i=t*s,a=r*s,c=A+t,l=e+r;switch(n){case ue.TOP_LEFT:return new Di(new K(A,l),new K(A,l-a),new K(c-i,e),new K(c,e));case ue.TOP_RIGHT:return new Di(new K(A,e),new K(A+i,e),new K(c,l-a),new K(c,l));case ue.BOTTOM_RIGHT:return new Di(new K(c,e),new K(c,e+a),new K(A+i,l),new K(A,l));case ue.BOTTOM_LEFT:default:return new Di(new K(c,l),new K(c-i,l),new K(A,e+a),new K(A,e))}},xo=function(A){return[A.topLeftBorderBox,A.topRightBorderBox,A.bottomRightBorderBox,A.bottomLeftBorderBox]},sP=function(A){return[A.topLeftContentBox,A.topRightContentBox,A.bottomRightContentBox,A.bottomLeftContentBox]},So=function(A){return[A.topLeftPaddingBox,A.topRightPaddingBox,A.bottomRightPaddingBox,A.bottomLeftPaddingBox]},iP=function(){function A(e,t,r){this.offsetX=e,this.offsetY=t,this.matrix=r,this.type=0,this.target=6}return A}(),Pi=function(){function A(e,t){this.path=e,this.target=t,this.type=1}return A}(),oP=function(){function A(e){this.opacity=e,this.type=2,this.target=6}return A}(),aP=function(A){return A.type===0},dy=function(A){return A.type===1},cP=function(A){return A.type===2},Zg=function(A,e){return A.length===e.length?A.some(function(t,r){return t===e[r]}):!1},lP=function(A,e,t,r,n){return A.map(function(s,i){switch(i){case 0:return s.add(e,t);case 1:return s.add(e+r,t);case 2:return s.add(e+r,t+n);case 3:return s.add(e,t+n)}return s})},fy=function(){function A(e){this.element=e,this.inlineLevel=[],this.nonInlineLevel=[],this.negativeZIndex=[],this.zeroOrAutoZIndexOrTransformedOrOpacity=[],this.positiveZIndex=[],this.nonPositionedFloats=[],this.nonPositionedInlineLevel=[]}return A}(),gy=function(){function A(e,t){if(this.container=e,this.parent=t,this.effects=[],this.curves=new nP(this.container),this.container.styles.opacity<1&&this.effects.push(new oP(this.container.styles.opacity)),this.container.styles.transform!==null){var r=this.container.bounds.left+this.container.styles.transformOrigin[0].number,n=this.container.bounds.top+this.container.styles.transformOrigin[1].number,s=this.container.styles.transform;this.effects.push(new iP(r,n,s))}if(this.container.styles.overflowX!==0){var i=xo(this.curves),a=So(this.curves);Zg(i,a)?this.effects.push(new Pi(i,6)):(this.effects.push(new Pi(i,2)),this.effects.push(new Pi(a,4)))}}return A.prototype.getEffects=function(e){for(var t=[2,3].indexOf(this.container.styles.position)===-1,r=this.parent,n=this.effects.slice(0);r;){var s=r.effects.filter(function(c){return!dy(c)});if(t||r.container.styles.position!==0||!r.parent){if(n.unshift.apply(n,s),t=[2,3].indexOf(r.container.styles.position)===-1,r.container.styles.overflowX!==0){var i=xo(r.curves),a=So(r.curves);Zg(i,a)||n.unshift(new Pi(a,6))}}else n.unshift.apply(n,s);r=r.parent}return n.filter(function(c){return ke(c.target,e)})},A}(),gl=function(A,e,t,r){A.container.elements.forEach(function(n){var s=ke(n.flags,4),i=ke(n.flags,2),a=new gy(n,A);ke(n.styles.display,2048)&&r.push(a);var c=ke(n.flags,8)?[]:r;if(s||i){var l=s||n.styles.isPositioned()?t:e,h=new fy(a);if(n.styles.isPositioned()||n.styles.opacity<1||n.styles.isTransformed()){var f=n.styles.zIndex.order;if(f<0){var p=0;l.negativeZIndex.some(function(_,v){return f>_.element.container.styles.zIndex.order?(p=v,!1):p>0}),l.negativeZIndex.splice(p,0,h)}else if(f>0){var C=0;l.positiveZIndex.some(function(_,v){return f>=_.element.container.styles.zIndex.order?(C=v+1,!1):C>0}),l.positiveZIndex.splice(C,0,h)}else l.zeroOrAutoZIndexOrTransformedOrOpacity.push(h)}else n.styles.isFloating()?l.nonPositionedFloats.push(h):l.nonPositionedInlineLevel.push(h);gl(a,h,s?h:t,c)}else n.styles.isInlineLevel()?e.inlineLevel.push(a):e.nonInlineLevel.push(a),gl(a,e,t,c);ke(n.flags,8)&&py(n,c)})},py=function(A,e){for(var t=A instanceof ll?A.start:1,r=A instanceof ll?A.reversed:!1,n=0;n<e.length;n++){var s=e[n];s.container instanceof Zw&&typeof s.container.value=="number"&&s.container.value!==0&&(t=s.container.value),s.listValue=_s(t,s.container.styles.listStyleType,!0),t+=r?-1:1}},uP=function(A){var e=new gy(A,null),t=new fy(e),r=[];return gl(e,t,t,r),py(e.container,r),t},ep=function(A,e){switch(e){case 0:return UA(A.topLeftBorderBox,A.topLeftPaddingBox,A.topRightBorderBox,A.topRightPaddingBox);case 1:return UA(A.topRightBorderBox,A.topRightPaddingBox,A.bottomRightBorderBox,A.bottomRightPaddingBox);case 2:return UA(A.bottomRightBorderBox,A.bottomRightPaddingBox,A.bottomLeftBorderBox,A.bottomLeftPaddingBox);case 3:default:return UA(A.bottomLeftBorderBox,A.bottomLeftPaddingBox,A.topLeftBorderBox,A.topLeftPaddingBox)}},hP=function(A,e){switch(e){case 0:return UA(A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox,A.topRightBorderBox,A.topRightBorderDoubleOuterBox);case 1:return UA(A.topRightBorderBox,A.topRightBorderDoubleOuterBox,A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox);case 2:return UA(A.bottomRightBorderBox,A.bottomRightBorderDoubleOuterBox,A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox);case 3:default:return UA(A.bottomLeftBorderBox,A.bottomLeftBorderDoubleOuterBox,A.topLeftBorderBox,A.topLeftBorderDoubleOuterBox)}},dP=function(A,e){switch(e){case 0:return UA(A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox,A.topRightBorderDoubleInnerBox,A.topRightPaddingBox);case 1:return UA(A.topRightBorderDoubleInnerBox,A.topRightPaddingBox,A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox);case 2:return UA(A.bottomRightBorderDoubleInnerBox,A.bottomRightPaddingBox,A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox);case 3:default:return UA(A.bottomLeftBorderDoubleInnerBox,A.bottomLeftPaddingBox,A.topLeftBorderDoubleInnerBox,A.topLeftPaddingBox)}},fP=function(A,e){switch(e){case 0:return Li(A.topLeftBorderStroke,A.topRightBorderStroke);case 1:return Li(A.topRightBorderStroke,A.bottomRightBorderStroke);case 2:return Li(A.bottomRightBorderStroke,A.bottomLeftBorderStroke);case 3:default:return Li(A.bottomLeftBorderStroke,A.topLeftBorderStroke)}},Li=function(A,e){var t=[];return EA(A)?t.push(A.subdivide(.5,!1)):t.push(A),EA(e)?t.push(e.subdivide(.5,!0)):t.push(e),t},UA=function(A,e,t,r){var n=[];return EA(A)?n.push(A.subdivide(.5,!1)):n.push(A),EA(t)?n.push(t.subdivide(.5,!0)):n.push(t),EA(r)?n.push(r.subdivide(.5,!0).reverse()):n.push(r),EA(e)?n.push(e.subdivide(.5,!1).reverse()):n.push(e),n},my=function(A){var e=A.bounds,t=A.styles;return e.add(t.borderLeftWidth,t.borderTopWidth,-(t.borderRightWidth+t.borderLeftWidth),-(t.borderTopWidth+t.borderBottomWidth))},Ro=function(A){var e=A.styles,t=A.bounds,r=me(e.paddingLeft,t.width),n=me(e.paddingRight,t.width),s=me(e.paddingTop,t.width),i=me(e.paddingBottom,t.width);return t.add(r+e.borderLeftWidth,s+e.borderTopWidth,-(e.borderRightWidth+e.borderLeftWidth+r+n),-(e.borderTopWidth+e.borderBottomWidth+s+i))},gP=function(A,e){return A===0?e.bounds:A===2?Ro(e):my(e)},pP=function(A,e){return A===0?e.bounds:A===2?Ro(e):my(e)},wc=function(A,e,t){var r=gP(Kr(A.styles.backgroundOrigin,e),A),n=pP(Kr(A.styles.backgroundClip,e),A),s=mP(Kr(A.styles.backgroundSize,e),t,r),i=s[0],a=s[1],c=Wn(Kr(A.styles.backgroundPosition,e),r.width-i,r.height-a),l=BP(Kr(A.styles.backgroundRepeat,e),c,s,r,n),h=Math.round(r.left+c[0]),f=Math.round(r.top+c[1]);return[l,h,f,i,a]},Pr=function(A){return fe(A)&&A.value===zr.AUTO},Hi=function(A){return typeof A=="number"},mP=function(A,e,t){var r=e[0],n=e[1],s=e[2],i=A[0],a=A[1];if(!i)return[0,0];if(De(i)&&a&&De(a))return[me(i,t.width),me(a,t.height)];var c=Hi(s);if(fe(i)&&(i.value===zr.CONTAIN||i.value===zr.COVER)){if(Hi(s)){var l=t.width/t.height;return l<s!=(i.value===zr.COVER)?[t.width,t.width/s]:[t.height*s,t.height]}return[t.width,t.height]}var h=Hi(r),f=Hi(n),p=h||f;if(Pr(i)&&(!a||Pr(a))){if(h&&f)return[r,n];if(!c&&!p)return[t.width,t.height];if(p&&c){var C=h?r:n*s,_=f?n:r/s;return[C,_]}var v=h?r:t.width,b=f?n:t.height;return[v,b]}if(c){var x=0,S=0;return De(i)?x=me(i,t.width):De(a)&&(S=me(a,t.height)),Pr(i)?x=S*s:(!a||Pr(a))&&(S=x/s),[x,S]}var D=null,k=null;if(De(i)?D=me(i,t.width):a&&De(a)&&(k=me(a,t.height)),D!==null&&(!a||Pr(a))&&(k=h&&f?D/r*n:t.height),k!==null&&Pr(i)&&(D=h&&f?k/n*r:t.width),D!==null&&k!==null)return[D,k];throw new Error("Unable to calculate background-size for element")},Kr=function(A,e){var t=A[e];return typeof t=="undefined"?A[0]:t},BP=function(A,e,t,r,n){var s=e[0],i=e[1],a=t[0],c=t[1];switch(A){case 2:return[new K(Math.round(r.left),Math.round(r.top+i)),new K(Math.round(r.left+r.width),Math.round(r.top+i)),new K(Math.round(r.left+r.width),Math.round(c+r.top+i)),new K(Math.round(r.left),Math.round(c+r.top+i))];case 3:return[new K(Math.round(r.left+s),Math.round(r.top)),new K(Math.round(r.left+s+a),Math.round(r.top)),new K(Math.round(r.left+s+a),Math.round(r.height+r.top)),new K(Math.round(r.left+s),Math.round(r.height+r.top))];case 1:return[new K(Math.round(r.left+s),Math.round(r.top+i)),new K(Math.round(r.left+s+a),Math.round(r.top+i)),new K(Math.round(r.left+s+a),Math.round(r.top+i+c)),new K(Math.round(r.left+s),Math.round(r.top+i+c))];default:return[new K(Math.round(n.left),Math.round(n.top)),new K(Math.round(n.left+n.width),Math.round(n.top)),new K(Math.round(n.left+n.width),Math.round(n.height+n.top)),new K(Math.round(n.left),Math.round(n.height+n.top))]}},wP="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",Ap="Hidden Text",yP=function(){function A(e){this._data={},this._document=e}return A.prototype.parseMetrics=function(e,t){var r=this._document.createElement("div"),n=this._document.createElement("img"),s=this._document.createElement("span"),i=this._document.body;r.style.visibility="hidden",r.style.fontFamily=e,r.style.fontSize=t,r.style.margin="0",r.style.padding="0",r.style.whiteSpace="nowrap",i.appendChild(r),n.src=wP,n.width=1,n.height=1,n.style.margin="0",n.style.padding="0",n.style.verticalAlign="baseline",s.style.fontFamily=e,s.style.fontSize=t,s.style.margin="0",s.style.padding="0",s.appendChild(this._document.createTextNode(Ap)),r.appendChild(s),r.appendChild(n);var a=n.offsetTop-s.offsetTop+2;r.removeChild(s),r.appendChild(this._document.createTextNode(Ap)),r.style.lineHeight="normal",n.style.verticalAlign="super";var c=n.offsetTop-r.offsetTop+2;return i.removeChild(r),{baseline:a,middle:c}},A.prototype.getMetrics=function(e,t){var r=e+" "+t;return typeof this._data[r]=="undefined"&&(this._data[r]=this.parseMetrics(e,t)),this._data[r]},A}(),By=function(){function A(e,t){this.context=e,this.options=t}return A}(),CP=1e4,vP=function(A){LA(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n._activeEffects=[],n.canvas=r.canvas?r.canvas:document.createElement("canvas"),n.ctx=n.canvas.getContext("2d"),r.canvas||(n.canvas.width=Math.floor(r.width*r.scale),n.canvas.height=Math.floor(r.height*r.scale),n.canvas.style.width=r.width+"px",n.canvas.style.height=r.height+"px"),n.fontMetrics=new yP(document),n.ctx.scale(n.options.scale,n.options.scale),n.ctx.translate(-r.x,-r.y),n.ctx.textBaseline="bottom",n._activeEffects=[],n.context.logger.debug("Canvas renderer initialized ("+r.width+"x"+r.height+") with scale "+r.scale),n}return e.prototype.applyEffects=function(t){for(var r=this;this._activeEffects.length;)this.popEffect();t.forEach(function(n){return r.applyEffect(n)})},e.prototype.applyEffect=function(t){this.ctx.save(),cP(t)&&(this.ctx.globalAlpha=t.opacity),aP(t)&&(this.ctx.translate(t.offsetX,t.offsetY),this.ctx.transform(t.matrix[0],t.matrix[1],t.matrix[2],t.matrix[3],t.matrix[4],t.matrix[5]),this.ctx.translate(-t.offsetX,-t.offsetY)),dy(t)&&(this.path(t.path),this.ctx.clip()),this._activeEffects.push(t)},e.prototype.popEffect=function(){this._activeEffects.pop(),this.ctx.restore()},e.prototype.renderStack=function(t){return cA(this,void 0,void 0,function(){var r;return eA(this,function(n){switch(n.label){case 0:return r=t.element.container.styles,r.isVisible()?[4,this.renderStackContent(t)]:[3,2];case 1:n.sent(),n.label=2;case 2:return[2]}})})},e.prototype.renderNode=function(t){return cA(this,void 0,void 0,function(){return eA(this,function(r){switch(r.label){case 0:if(ke(t.container.flags,16))debugger;return t.container.styles.isVisible()?[4,this.renderNodeBackgroundAndBorders(t)]:[3,3];case 1:return r.sent(),[4,this.renderNodeContent(t)];case 2:r.sent(),r.label=3;case 3:return[2]}})})},e.prototype.renderTextWithLetterSpacing=function(t,r,n){var s=this;if(r===0)this.ctx.fillText(t.text,t.bounds.left,t.bounds.top+n);else{var i=Su(t.text);i.reduce(function(a,c){return s.ctx.fillText(c,a,t.bounds.top+n),a+s.ctx.measureText(c).width},t.bounds.left)}},e.prototype.createFontStyle=function(t){var r=t.fontVariant.filter(function(i){return i==="normal"||i==="small-caps"}).join(""),n=QP(t.fontFamily).join(", "),s=Hs(t.fontSize)?""+t.fontSize.number+t.fontSize.unit:t.fontSize.number+"px";return[[t.fontStyle,r,t.fontWeight,s,n].join(" "),n,s]},e.prototype.renderTextNode=function(t,r){return cA(this,void 0,void 0,function(){var n,s,i,a,c,l,h,f,p=this;return eA(this,function(C){return n=this.createFontStyle(r),s=n[0],i=n[1],a=n[2],this.ctx.font=s,this.ctx.direction=r.direction===1?"rtl":"ltr",this.ctx.textAlign="left",this.ctx.textBaseline="alphabetic",c=this.fontMetrics.getMetrics(i,a),l=c.baseline,h=c.middle,f=r.paintOrder,t.textBounds.forEach(function(_){f.forEach(function(v){switch(v){case 0:p.ctx.fillStyle=Me(r.color),p.renderTextWithLetterSpacing(_,r.letterSpacing,l);var b=r.textShadow;b.length&&_.text.trim().length&&(b.slice(0).reverse().forEach(function(x){p.ctx.shadowColor=Me(x.color),p.ctx.shadowOffsetX=x.offsetX.number*p.options.scale,p.ctx.shadowOffsetY=x.offsetY.number*p.options.scale,p.ctx.shadowBlur=x.blur.number,p.renderTextWithLetterSpacing(_,r.letterSpacing,l)}),p.ctx.shadowColor="",p.ctx.shadowOffsetX=0,p.ctx.shadowOffsetY=0,p.ctx.shadowBlur=0),r.textDecorationLine.length&&(p.ctx.fillStyle=Me(r.textDecorationColor||r.color),r.textDecorationLine.forEach(function(x){switch(x){case 1:p.ctx.fillRect(_.bounds.left,Math.round(_.bounds.top+l),_.bounds.width,1);break;case 2:p.ctx.fillRect(_.bounds.left,Math.round(_.bounds.top),_.bounds.width,1);break;case 3:p.ctx.fillRect(_.bounds.left,Math.ceil(_.bounds.top+h),_.bounds.width,1);break}}));break;case 1:r.webkitTextStrokeWidth&&_.text.trim().length&&(p.ctx.strokeStyle=Me(r.webkitTextStrokeColor),p.ctx.lineWidth=r.webkitTextStrokeWidth,p.ctx.lineJoin=window.chrome?"miter":"round",p.ctx.strokeText(_.text,_.bounds.left,_.bounds.top+l)),p.ctx.strokeStyle="",p.ctx.lineWidth=0,p.ctx.lineJoin="miter";break}})}),[2]})})},e.prototype.renderReplacedElement=function(t,r,n){if(n&&t.intrinsicWidth>0&&t.intrinsicHeight>0){var s=Ro(t),i=So(r);this.path(i),this.ctx.save(),this.ctx.clip(),this.ctx.drawImage(n,0,0,t.intrinsicWidth,t.intrinsicHeight,s.left,s.top,s.width,s.height),this.ctx.restore()}},e.prototype.renderNodeContent=function(t){return cA(this,void 0,void 0,function(){var r,n,s,i,a,c,S,S,l,h,f,p,k,C,_,O,v,b,x,S,D,k,O;return eA(this,function(H){switch(H.label){case 0:this.applyEffects(t.getEffects(4)),r=t.container,n=t.curves,s=r.styles,i=0,a=r.textNodes,H.label=1;case 1:return i<a.length?(c=a[i],[4,this.renderTextNode(c,s)]):[3,4];case 2:H.sent(),H.label=3;case 3:return i++,[3,1];case 4:if(!(r instanceof zw))return[3,8];H.label=5;case 5:return H.trys.push([5,7,,8]),[4,this.context.cache.match(r.src)];case 6:return S=H.sent(),this.renderReplacedElement(r,n,S),[3,8];case 7:return H.sent(),this.context.logger.error("Error loading image "+r.src),[3,8];case 8:if(r instanceof Jw&&this.renderReplacedElement(r,n,r.canvas),!(r instanceof Yw))return[3,12];H.label=9;case 9:return H.trys.push([9,11,,12]),[4,this.context.cache.match(r.svg)];case 10:return S=H.sent(),this.renderReplacedElement(r,n,S),[3,12];case 11:return H.sent(),this.context.logger.error("Error loading svg "+r.svg.substring(0,255)),[3,12];case 12:return r instanceof ty&&r.tree?(l=new e(this.context,{scale:this.options.scale,backgroundColor:r.backgroundColor,x:0,y:0,width:r.width,height:r.height}),[4,l.render(r.tree)]):[3,14];case 13:h=H.sent(),r.width&&r.height&&this.ctx.drawImage(h,0,0,r.width,r.height,r.bounds.left,r.bounds.top,r.bounds.width,r.bounds.height),H.label=14;case 14:if(r instanceof Ru&&(f=Math.min(r.bounds.width,r.bounds.height),r.type===Qo?r.checked&&(this.ctx.save(),this.path([new K(r.bounds.left+f*.39363,r.bounds.top+f*.79),new K(r.bounds.left+f*.16,r.bounds.top+f*.5549),new K(r.bounds.left+f*.27347,r.bounds.top+f*.44071),new K(r.bounds.left+f*.39694,r.bounds.top+f*.5649),new K(r.bounds.left+f*.72983,r.bounds.top+f*.23),new K(r.bounds.left+f*.84,r.bounds.top+f*.34085),new K(r.bounds.left+f*.39363,r.bounds.top+f*.79)]),this.ctx.fillStyle=Me(Mg),this.ctx.fill(),this.ctx.restore()):r.type===bo&&r.checked&&(this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(r.bounds.left+f/2,r.bounds.top+f/2,f/4,0,Math.PI*2,!0),this.ctx.fillStyle=Me(Mg),this.ctx.fill(),this.ctx.restore())),EP(r)&&r.value.length){switch(p=this.createFontStyle(s),k=p[0],C=p[1],_=this.fontMetrics.getMetrics(k,C).baseline,this.ctx.font=k,this.ctx.fillStyle=Me(s.color),this.ctx.textBaseline="alphabetic",this.ctx.textAlign=_P(r.styles.textAlign),O=Ro(r),v=0,r.styles.textAlign){case 1:v+=O.width/2;break;case 2:v+=O.width;break}b=O.add(v,0,0,-O.height/2+1),this.ctx.save(),this.path([new K(O.left,O.top),new K(O.left+O.width,O.top),new K(O.left+O.width,O.top+O.height),new K(O.left,O.top+O.height)]),this.ctx.clip(),this.renderTextWithLetterSpacing(new as(r.value,b),s.letterSpacing,_),this.ctx.restore(),this.ctx.textBaseline="alphabetic",this.ctx.textAlign="left"}if(!ke(r.styles.display,2048))return[3,20];if(r.styles.listStyleImage===null)return[3,19];if(x=r.styles.listStyleImage,x.type!==0)return[3,18];S=void 0,D=x.url,H.label=15;case 15:return H.trys.push([15,17,,18]),[4,this.context.cache.match(D)];case 16:return S=H.sent(),this.ctx.drawImage(S,r.bounds.left-(S.width+10),r.bounds.top),[3,18];case 17:return H.sent(),this.context.logger.error("Error loading list-style-image "+D),[3,18];case 18:return[3,20];case 19:t.listValue&&r.styles.listStyleType!==-1&&(k=this.createFontStyle(s)[0],this.ctx.font=k,this.ctx.fillStyle=Me(s.color),this.ctx.textBaseline="middle",this.ctx.textAlign="right",O=new gt(r.bounds.left,r.bounds.top+me(r.styles.paddingTop,r.bounds.width),r.bounds.width,_g(s.lineHeight,s.fontSize.number)/2+1),this.renderTextWithLetterSpacing(new as(t.listValue,O),s.letterSpacing,_g(s.lineHeight,s.fontSize.number)/2+2),this.ctx.textBaseline="bottom",this.ctx.textAlign="left"),H.label=20;case 20:return[2]}})})},e.prototype.renderStackContent=function(t){return cA(this,void 0,void 0,function(){var r,n,x,s,i,x,a,c,x,l,h,x,f,p,x,C,_,x,v,b,x;return eA(this,function(S){switch(S.label){case 0:if(ke(t.element.container.flags,16))debugger;return[4,this.renderNodeBackgroundAndBorders(t.element)];case 1:S.sent(),r=0,n=t.negativeZIndex,S.label=2;case 2:return r<n.length?(x=n[r],[4,this.renderStack(x)]):[3,5];case 3:S.sent(),S.label=4;case 4:return r++,[3,2];case 5:return[4,this.renderNodeContent(t.element)];case 6:S.sent(),s=0,i=t.nonInlineLevel,S.label=7;case 7:return s<i.length?(x=i[s],[4,this.renderNode(x)]):[3,10];case 8:S.sent(),S.label=9;case 9:return s++,[3,7];case 10:a=0,c=t.nonPositionedFloats,S.label=11;case 11:return a<c.length?(x=c[a],[4,this.renderStack(x)]):[3,14];case 12:S.sent(),S.label=13;case 13:return a++,[3,11];case 14:l=0,h=t.nonPositionedInlineLevel,S.label=15;case 15:return l<h.length?(x=h[l],[4,this.renderStack(x)]):[3,18];case 16:S.sent(),S.label=17;case 17:return l++,[3,15];case 18:f=0,p=t.inlineLevel,S.label=19;case 19:return f<p.length?(x=p[f],[4,this.renderNode(x)]):[3,22];case 20:S.sent(),S.label=21;case 21:return f++,[3,19];case 22:C=0,_=t.zeroOrAutoZIndexOrTransformedOrOpacity,S.label=23;case 23:return C<_.length?(x=_[C],[4,this.renderStack(x)]):[3,26];case 24:S.sent(),S.label=25;case 25:return C++,[3,23];case 26:v=0,b=t.positiveZIndex,S.label=27;case 27:return v<b.length?(x=b[v],[4,this.renderStack(x)]):[3,30];case 28:S.sent(),S.label=29;case 29:return v++,[3,27];case 30:return[2]}})})},e.prototype.mask=function(t){this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(this.canvas.width,0),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.lineTo(0,0),this.formatPath(t.slice(0).reverse()),this.ctx.closePath()},e.prototype.path=function(t){this.ctx.beginPath(),this.formatPath(t),this.ctx.closePath()},e.prototype.formatPath=function(t){var r=this;t.forEach(function(n,s){var i=EA(n)?n.start:n;s===0?r.ctx.moveTo(i.x,i.y):r.ctx.lineTo(i.x,i.y),EA(n)&&r.ctx.bezierCurveTo(n.startControl.x,n.startControl.y,n.endControl.x,n.endControl.y,n.end.x,n.end.y)})},e.prototype.renderRepeat=function(t,r,n,s){this.path(t),this.ctx.fillStyle=r,this.ctx.translate(n,s),this.ctx.fill(),this.ctx.translate(-n,-s)},e.prototype.resizeImage=function(t,r,n){var s;if(t.width===r&&t.height===n)return t;var i=(s=this.canvas.ownerDocument)!==null&&s!==void 0?s:document,a=i.createElement("canvas");a.width=Math.max(1,r),a.height=Math.max(1,n);var c=a.getContext("2d");return c.drawImage(t,0,0,t.width,t.height,0,0,r,n),a},e.prototype.renderBackgroundImage=function(t){return cA(this,void 0,void 0,function(){var r,n,s,i,a,c;return eA(this,function(l){switch(l.label){case 0:r=t.styles.backgroundImage.length-1,n=function(h){var f,p,C,Q,ye,ge,I,te,m,_,Q,ye,ge,I,te,v,b,x,S,D,k,O,H,U,m,w,Q,F,T,I,te,ce,ye,ge,J,Ne,gA,CA,Qe,oe,de,ie;return eA(this,function(HA){switch(HA.label){case 0:if(h.type!==0)return[3,5];f=void 0,p=h.url,HA.label=1;case 1:return HA.trys.push([1,3,,4]),[4,s.context.cache.match(p)];case 2:return f=HA.sent(),[3,4];case 3:return HA.sent(),s.context.logger.error("Error loading background-image "+p),[3,4];case 4:return f&&(C=wc(t,r,[f.width,f.height,f.width/f.height]),Q=C[0],ye=C[1],ge=C[2],I=C[3],te=C[4],m=s.ctx.createPattern(s.resizeImage(f,I,te),"repeat"),s.renderRepeat(Q,m,ye,ge)),[3,6];case 5:aS(h)?(_=wc(t,r,[null,null,null]),Q=_[0],ye=_[1],ge=_[2],I=_[3],te=_[4],v=rS(h.angle,I,te),b=v[0],x=v[1],S=v[2],D=v[3],k=v[4],O=document.createElement("canvas"),O.width=I,O.height=te,H=O.getContext("2d"),U=H.createLinearGradient(x,D,S,k),Eg(h.stops,b).forEach(function(kA){return U.addColorStop(kA.stop,Me(kA.color))}),H.fillStyle=U,H.fillRect(0,0,I,te),I>0&&te>0&&(m=s.ctx.createPattern(O,"repeat"),s.renderRepeat(Q,m,ye,ge))):cS(h)&&(w=wc(t,r,[null,null,null]),Q=w[0],F=w[1],T=w[2],I=w[3],te=w[4],ce=h.position.length===0?[Fu]:h.position,ye=me(ce[0],I),ge=me(ce[ce.length-1],te),J=nS(h,ye,ge,I,te),Ne=J[0],gA=J[1],Ne>0&&gA>0&&(CA=s.ctx.createRadialGradient(F+ye,T+ge,0,F+ye,T+ge,Ne),Eg(h.stops,Ne*2).forEach(function(kA){return CA.addColorStop(kA.stop,Me(kA.color))}),s.path(Q),s.ctx.fillStyle=CA,Ne!==gA?(Qe=t.bounds.left+.5*t.bounds.width,oe=t.bounds.top+.5*t.bounds.height,de=gA/Ne,ie=1/de,s.ctx.save(),s.ctx.translate(Qe,oe),s.ctx.transform(1,0,0,de,0,0),s.ctx.translate(-Qe,-oe),s.ctx.fillRect(F,ie*(T-oe)+oe,I,te*ie),s.ctx.restore()):s.ctx.fill())),HA.label=6;case 6:return r--,[2]}})},s=this,i=0,a=t.styles.backgroundImage.slice(0).reverse(),l.label=1;case 1:return i<a.length?(c=a[i],[5,n(c)]):[3,4];case 2:l.sent(),l.label=3;case 3:return i++,[3,1];case 4:return[2]}})})},e.prototype.renderSolidBorder=function(t,r,n){return cA(this,void 0,void 0,function(){return eA(this,function(s){return this.path(ep(n,r)),this.ctx.fillStyle=Me(t),this.ctx.fill(),[2]})})},e.prototype.renderDoubleBorder=function(t,r,n,s){return cA(this,void 0,void 0,function(){var i,a;return eA(this,function(c){switch(c.label){case 0:return r<3?[4,this.renderSolidBorder(t,n,s)]:[3,2];case 1:return c.sent(),[2];case 2:return i=hP(s,n),this.path(i),this.ctx.fillStyle=Me(t),this.ctx.fill(),a=dP(s,n),this.path(a),this.ctx.fill(),[2]}})})},e.prototype.renderNodeBackgroundAndBorders=function(t){return cA(this,void 0,void 0,function(){var r,n,s,i,a,c,l,h,f=this;return eA(this,function(p){switch(p.label){case 0:return this.applyEffects(t.getEffects(2)),r=t.container.styles,n=!Nt(r.backgroundColor)||r.backgroundImage.length,s=[{style:r.borderTopStyle,color:r.borderTopColor,width:r.borderTopWidth},{style:r.borderRightStyle,color:r.borderRightColor,width:r.borderRightWidth},{style:r.borderBottomStyle,color:r.borderBottomColor,width:r.borderBottomWidth},{style:r.borderLeftStyle,color:r.borderLeftColor,width:r.borderLeftWidth}],i=IP(Kr(r.backgroundClip,0),t.curves),n||r.boxShadow.length?(this.ctx.save(),this.path(i),this.ctx.clip(),Nt(r.backgroundColor)||(this.ctx.fillStyle=Me(r.backgroundColor),this.ctx.fill()),[4,this.renderBackgroundImage(t.container)]):[3,2];case 1:p.sent(),this.ctx.restore(),r.boxShadow.slice(0).reverse().forEach(function(C){f.ctx.save();var _=xo(t.curves),v=C.inset?0:CP,b=lP(_,-v+(C.inset?1:-1)*C.spread.number,(C.inset?1:-1)*C.spread.number,C.spread.number*(C.inset?-2:2),C.spread.number*(C.inset?-2:2));C.inset?(f.path(_),f.ctx.clip(),f.mask(b)):(f.mask(_),f.ctx.clip(),f.path(b)),f.ctx.shadowOffsetX=C.offsetX.number+v,f.ctx.shadowOffsetY=C.offsetY.number,f.ctx.shadowColor=Me(C.color),f.ctx.shadowBlur=C.blur.number,f.ctx.fillStyle=C.inset?Me(C.color):"rgba(0,0,0,1)",f.ctx.fill(),f.ctx.restore()}),p.label=2;case 2:a=0,c=0,l=s,p.label=3;case 3:return c<l.length?(h=l[c],h.style!==0&&!Nt(h.color)&&h.width>0?h.style!==2?[3,5]:[4,this.renderDashedDottedBorder(h.color,h.width,a,t.curves,2)]:[3,11]):[3,13];case 4:return p.sent(),[3,11];case 5:return h.style!==3?[3,7]:[4,this.renderDashedDottedBorder(h.color,h.width,a,t.curves,3)];case 6:return p.sent(),[3,11];case 7:return h.style!==4?[3,9]:[4,this.renderDoubleBorder(h.color,h.width,a,t.curves)];case 8:return p.sent(),[3,11];case 9:return[4,this.renderSolidBorder(h.color,a,t.curves)];case 10:p.sent(),p.label=11;case 11:a++,p.label=12;case 12:return c++,[3,3];case 13:return[2]}})})},e.prototype.renderDashedDottedBorder=function(t,r,n,s,i){return cA(this,void 0,void 0,function(){var a,c,l,h,f,p,C,_,v,b,x,S,D,k,O,H,O,H;return eA(this,function(U){return this.ctx.save(),a=fP(s,n),c=ep(s,n),i===2&&(this.path(c),this.ctx.clip()),EA(c[0])?(l=c[0].start.x,h=c[0].start.y):(l=c[0].x,h=c[0].y),EA(c[1])?(f=c[1].end.x,p=c[1].end.y):(f=c[1].x,p=c[1].y),n===0||n===2?C=Math.abs(l-f):C=Math.abs(h-p),this.ctx.beginPath(),i===3?this.formatPath(a):this.formatPath(c.slice(0,2)),_=r<3?r*3:r*2,v=r<3?r*2:r,i===3&&(_=r,v=r),b=!0,C<=_*2?b=!1:C<=_*2+v?(x=C/(2*_+v),_*=x,v*=x):(S=Math.floor((C+v)/(_+v)),D=(C-S*_)/(S-1),k=(C-(S+1)*_)/S,v=k<=0||Math.abs(v-D)<Math.abs(v-k)?D:k),b&&(i===3?this.ctx.setLineDash([0,_+v]):this.ctx.setLineDash([_,v])),i===3?(this.ctx.lineCap="round",this.ctx.lineWidth=r):this.ctx.lineWidth=r*2+1.1,this.ctx.strokeStyle=Me(t),this.ctx.stroke(),this.ctx.setLineDash([]),i===2&&(EA(c[0])&&(O=c[3],H=c[0],this.ctx.beginPath(),this.formatPath([new K(O.end.x,O.end.y),new K(H.start.x,H.start.y)]),this.ctx.stroke()),EA(c[1])&&(O=c[1],H=c[2],this.ctx.beginPath(),this.formatPath([new K(O.end.x,O.end.y),new K(H.start.x,H.start.y)]),this.ctx.stroke())),this.ctx.restore(),[2]})})},e.prototype.render=function(t){return cA(this,void 0,void 0,function(){var r;return eA(this,function(n){switch(n.label){case 0:return this.options.backgroundColor&&(this.ctx.fillStyle=Me(this.options.backgroundColor),this.ctx.fillRect(this.options.x,this.options.y,this.options.width,this.options.height)),r=uP(t),[4,this.renderStack(r)];case 1:return n.sent(),this.applyEffects([]),[2,this.canvas]}})})},e}(By),EP=function(A){return A instanceof Ay||A instanceof ey?!0:A instanceof Ru&&A.type!==bo&&A.type!==Qo},IP=function(A,e){switch(A){case 0:return xo(e);case 2:return sP(e);case 1:default:return So(e)}},_P=function(A){switch(A){case 1:return"center";case 2:return"right";case 0:default:return"left"}},UP=["-apple-system","system-ui"],QP=function(A){return/iPhone OS 15_(0|1)/.test(window.navigator.userAgent)?A.filter(function(e){return UP.indexOf(e)===-1}):A},bP=function(A){LA(e,A);function e(t,r){var n=A.call(this,t,r)||this;return n.canvas=r.canvas?r.canvas:document.createElement("canvas"),n.ctx=n.canvas.getContext("2d"),n.options=r,n.canvas.width=Math.floor(r.width*r.scale),n.canvas.height=Math.floor(r.height*r.scale),n.canvas.style.width=r.width+"px",n.canvas.style.height=r.height+"px",n.ctx.scale(n.options.scale,n.options.scale),n.ctx.translate(-r.x,-r.y),n.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized ("+r.width+"x"+r.height+" at "+r.x+","+r.y+") with scale "+r.scale),n}return e.prototype.render=function(t){return cA(this,void 0,void 0,function(){var r,n;return eA(this,function(s){switch(s.label){case 0:return r=cl(this.options.width*this.options.scale,this.options.height*this.options.scale,this.options.scale,this.options.scale,t),[4,FP(r)];case 1:return n=s.sent(),this.options.backgroundColor&&(this.ctx.fillStyle=Me(this.options.backgroundColor),this.ctx.fillRect(0,0,this.options.width*this.options.scale,this.options.height*this.options.scale)),this.ctx.drawImage(n,-this.options.x*this.options.scale,-this.options.y*this.options.scale),[2,this.canvas]}})})},e}(By),FP=function(A){return new Promise(function(e,t){var r=new Image;r.onload=function(){e(r)},r.onerror=t,r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(new XMLSerializer().serializeToString(A))})},TP=function(){function A(e){var t=e.id,r=e.enabled;this.id=t,this.enabled=r,this.start=Date.now()}return A.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window!="undefined"&&window.console&&typeof console.debug=="function"?console.debug.apply(console,gi([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.prototype.getTime=function(){return Date.now()-this.start},A.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&typeof window!="undefined"&&window.console&&typeof console.info=="function"&&console.info.apply(console,gi([this.id,this.getTime()+"ms"],e))},A.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window!="undefined"&&window.console&&typeof console.warn=="function"?console.warn.apply(console,gi([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this.enabled&&(typeof window!="undefined"&&window.console&&typeof console.error=="function"?console.error.apply(console,gi([this.id,this.getTime()+"ms"],e)):this.info.apply(this,e))},A.instances={},A}(),xP=function(){function A(e,t){var r;this.windowBounds=t,this.instanceName="#"+A.instanceCount++,this.logger=new TP({id:this.instanceName,enabled:e.logging}),this.cache=(r=e.cache)!==null&&r!==void 0?r:new JD(this,e)}return A.instanceCount=1,A}(),SP=function(A,e){return e===void 0&&(e={}),RP(A,e)};typeof window!="undefined"&&hy.setContext(window);var RP=function(A,e){return cA(void 0,void 0,void 0,function(){var t,r,n,s,i,a,c,l,h,f,p,C,_,v,b,x,S,D,k,O,U,H,U,m,w,Q,F,T,I,te,ce,ye,ge,J,Ne,gA,CA,Qe,oe,de;return eA(this,function(ie){switch(ie.label){case 0:if(!A||typeof A!="object")return[2,Promise.reject("Invalid element provided as first argument")];if(t=A.ownerDocument,!t)throw new Error("Element is not attached to a Document");if(r=t.defaultView,!r)throw new Error("Document is not attached to a Window");return n={allowTaint:(m=e.allowTaint)!==null&&m!==void 0?m:!1,imageTimeout:(w=e.imageTimeout)!==null&&w!==void 0?w:15e3,proxy:e.proxy,useCORS:(Q=e.useCORS)!==null&&Q!==void 0?Q:!1},s=Xc({logging:(F=e.logging)!==null&&F!==void 0?F:!0,cache:e.cache},n),i={windowWidth:(T=e.windowWidth)!==null&&T!==void 0?T:r.innerWidth,windowHeight:(I=e.windowHeight)!==null&&I!==void 0?I:r.innerHeight,scrollX:(te=e.scrollX)!==null&&te!==void 0?te:r.pageXOffset,scrollY:(ce=e.scrollY)!==null&&ce!==void 0?ce:r.pageYOffset},a=new gt(i.scrollX,i.scrollY,i.windowWidth,i.windowHeight),c=new xP(s,a),l=(ye=e.foreignObjectRendering)!==null&&ye!==void 0?ye:!1,h={allowTaint:(ge=e.allowTaint)!==null&&ge!==void 0?ge:!1,onclone:e.onclone,ignoreElements:e.ignoreElements,inlineImages:l,copyStyles:l},c.logger.debug("Starting document clone with size "+a.width+"x"+a.height+" scrolled to "+-a.left+","+-a.top),f=new Jg(c,A,h),p=f.clonedReferenceElement,p?[4,f.toIFrame(t,a)]:[2,Promise.reject("Unable to find element in cloned iframe")];case 1:return C=ie.sent(),_=Du(p)||DD(p)?lx(p.ownerDocument):Aa(c,p),v=_.width,b=_.height,x=_.left,S=_.top,D=DP(c,p,e.backgroundColor),k={canvas:e.canvas,backgroundColor:D,scale:(Ne=(J=e.scale)!==null&&J!==void 0?J:r.devicePixelRatio)!==null&&Ne!==void 0?Ne:1,x:((gA=e.x)!==null&&gA!==void 0?gA:0)+x,y:((CA=e.y)!==null&&CA!==void 0?CA:0)+S,width:(Qe=e.width)!==null&&Qe!==void 0?Qe:Math.ceil(v),height:(oe=e.height)!==null&&oe!==void 0?oe:Math.ceil(b)},l?(c.logger.debug("Document cloned, using foreign object rendering"),U=new bP(c,k),[4,U.render(p)]):[3,3];case 2:return O=ie.sent(),[3,5];case 3:return c.logger.debug("Document cloned, element located at "+x+","+S+" with size "+v+"x"+b+" using computed rendering"),c.logger.debug("Starting DOM parsing"),H=ny(c,p),D===H.styles.backgroundColor&&(H.styles.backgroundColor=ct.TRANSPARENT),c.logger.debug("Starting renderer for element at "+k.x+","+k.y+" with size "+k.width+"x"+k.height),U=new vP(c,k),[4,U.render(H)];case 4:O=ie.sent(),ie.label=5;case 5:return(!((de=e.removeContainer)!==null&&de!==void 0)||de)&&(Jg.destroy(C)||c.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")),c.logger.debug("Finished rendering"),[2,O]}})})},DP=function(A,e,t){var r=e.ownerDocument,n=r.documentElement?is(A,getComputedStyle(r.documentElement).backgroundColor):ct.TRANSPARENT,s=r.body?is(A,getComputedStyle(r.body).backgroundColor):ct.TRANSPARENT,i=typeof t=="string"?is(A,t):t===null?ct.TRANSPARENT:4294967295;return e===r.documentElement?Nt(n)?Nt(s)?i:s:n:i};const PP=E.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${A=>A.theme.spacing.medium};
  font-family: 'Roboto', sans-serif;
`,LP=E.h1`
  font-size: 2rem;
  margin-bottom: ${A=>A.theme.spacing.medium};
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: ${A=>A.theme.colors.text.primary};
`,HP=E.div`
  display: flex;
  flex-direction: column;
  min-height: 120px;
  gap: 10px;
  align-items: center;
`,sr=E.button`
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
`,kP=E.div`
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
`,OP=E.div`
  flex: 1;
`,NP=E.h3`
  margin-top: 0;
  margin-bottom: 8px;
  font-weight: bold;
  color: ${A=>A.theme.colors.text.primary};
`,VP=E.div`
  margin-bottom: 12px;
`,MP=E.div`
  font-weight: bold;
  font-size: 1.1rem;
  margin-bottom: 2px;
  color: ${A=>A.theme.colors.text.primary};
  text-shadow: 2px 2px 6px rgba(0,0,0,.75);
`,KP=E.div`
  font-size: 1rem;
  margin-bottom: 12px;
  text-shadow: 2px 2px 6px rgba(0,0,0,.75);
  color: ${A=>A.theme.colors.text.secondary};
`,jP=E.img`
  width: 120px;
  height: 120px;
  border-radius: ${A=>A.theme.borderRadius.medium};
  object-fit: cover;
  margin-left: 12px;
  box-shadow: ${A=>A.theme.shadows.small};
`,tp=E.div`
  width: 100%;
  max-width: 500px;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.01);
`,GP=E.div`
  min-height: 48px;
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`,$P=({songs:A,album:e})=>{const[t,r]=L.useState([]),[n,s]=L.useState([...A]),[i,a]=L.useState(null),[c,l]=L.useState(!1),[h,f]=L.useState(!1),p=()=>y(null,null,function*(){f(!0);const D=document.getElementById("final-ranking");if(!D)return;const k=document.getElementById("share-buttons");k&&(k.style.display="none");const H=(yield SP(D)).toDataURL("image/png"),U=document.createElement("a");U.href=H,U.download="ranking.png",U.click(),k&&(k.style.display=""),f(!1)}),C=()=>{const D=encodeURIComponent("I just ranked my favorite songs! Try it here: http://beatmeter.top");window.open(`https://twitter.com/intent/tweet?text=${D}`)};L.useEffect(()=>{if(n.length===0&&!i){l(!0);return}if(!i&&n.length>0){const D=n[0];s(n.slice(1)),t.length===0?r([D]):a({song:D,index:0})}},[n,i,t]);const _=D=>{const{song:k,index:O}=i;if(D)O+1<t.length?a({song:k,index:O+1}):(r([...t,k]),a(null));else{const H=[...t];H.splice(O,0,k),r(H),a(null)}},v=e==null?void 0:e.name,b=e!=null&&e.artists?e.artists.map(D=>D.name).join(", "):"",x=e!=null&&e.images&&e.images.length>0?e.images[0].url:null,S=c?d.jsxs(kP,{id:"final-ranking",children:[d.jsxs(OP,{children:[d.jsxs(NP,{children:["MY ",v||"Song"," Ranking"]}),v&&d.jsx(VP,{children:d.jsx(MP,{children:v})}),b&&d.jsx(KP,{children:b}),d.jsx("ol",{children:t.map((D,k)=>d.jsx("li",{children:D},k))})]}),x&&d.jsx(jP,{src:x,alt:"Album cover"})]}):i?d.jsxs(tp,{children:[d.jsx(LP,{children:"Choose your favorite"}),d.jsxs(HP,{children:[d.jsx(sr,{onClick:()=>_(!1),children:i.song}),d.jsx(sr,{onClick:()=>_(!0),children:t[i.index]}),"      "]})]}):d.jsx(tp,{children:d.jsx(sr,{onClick:()=>a(null),children:"Start Sorting"})});return d.jsxs(PP,{children:[S,d.jsx(GP,{children:c?d.jsxs(d.Fragment,{children:[d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,marginBottom:8},children:[d.jsx(sr,{onClick:p,disabled:h,children:h?"Capturing...":"Download Image"}),d.jsx(sr,{onClick:C,children:"Share on Twitter"})]}),d.jsx(sr,{onClick:()=>window.location.reload(),children:"Sort Again"})]}):d.jsx(sr,{style:{visibility:"hidden"},children:"Sort Again"})})]})},WP=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
`,XP=E.form`
  width: 100%;
  max-width: 400px;
  background-color: ${A=>A.theme.colors.surface.primary||"rgba(30, 30, 30, 0.6)"};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`,qP=E.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,rp=E.div`
  margin-bottom: 1.5rem;
`,np=E.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,sp=E.input`
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
`,JP=E.div`
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
`,ZP=E.button`
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
`,e4=E.div`
  color: #ff4d4f;
  margin-bottom: 1rem;
  text-align: center;
`,A4=E.p`
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
`;function t4(){const[A,e]=L.useState(""),[t,r]=L.useState(""),[n,s]=L.useState(""),[i,a]=L.useState(!1),c=fA(),{login:l,googleSignIn:h}=Se();function f(C){return y(this,null,function*(){C.preventDefault();try{s(""),a(!0);const _=yield l(A,t),v=sA(ee,"userprofiles",_.user.uid),b=yield yA(v);b.exists()&&b.data().bio?c("/"):c("/profile-setup")}catch(_){console.error("Error during login:",_),_.code==="auth/user-not-found"||_.code==="auth/wrong-password"?s("Invalid email or password"):_.code==="auth/invalid-email"?s("Invalid email address"):_.code==="auth/too-many-requests"?s("Too many failed login attempts. Please try again later."):s("Failed to log in. Please try again.")}a(!1)})}function p(){return y(this,null,function*(){try{s(""),a(!0);const C=yield h(),_=sA(ee,"userprofiles",C.uid),v=yield yA(_);v.exists()&&v.data().bio?c("/"):c("/profile-setup")}catch(C){console.error("Error during Google sign-in:",C),s("Failed to sign in with Google. Please try again.")}a(!1)})}return d.jsx(WP,{children:d.jsxs(XP,{onSubmit:f,children:[d.jsx(qP,{children:"Log In"}),n&&d.jsx(e4,{children:n}),d.jsxs(rp,{children:[d.jsx(np,{htmlFor:"email",children:"Email"}),d.jsx(sp,{type:"email",id:"email",value:A,onChange:C=>e(C.target.value),required:!0})]}),d.jsxs(rp,{children:[d.jsx(np,{htmlFor:"password",children:"Password"}),d.jsx(sp,{type:"password",id:"password",value:t,onChange:C=>r(C.target.value),required:!0})]}),d.jsx(JP,{children:d.jsx(Vt,{to:"/forgot-password",children:"Forgot Password?"})}),d.jsx(zP,{type:"submit",disabled:i,children:i?"Logging in...":"Log In"}),d.jsx(YP,{children:d.jsx("span",{children:"OR"})}),d.jsxs(ZP,{type:"button",onClick:p,disabled:i,children:[d.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google logo"}),"Log in with Google"]}),d.jsxs(A4,{children:["Need an account? ",d.jsx(Vt,{to:"/create-account",children:"Create Account"})]})]})})}function r4(){const{currentUser:A}=Se(),e=fA();return L.useEffect(()=>{A&&e("/")},[A,e]),d.jsx(t4,{})}const n4=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
`,s4=E.form`
  width: 100%;
  max-width: 400px;
  background-color: ${A=>A.theme.colors.surface.primary||"rgba(30, 30, 30, 0.6)"};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`,i4=E.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,ki=E.div`
  margin-bottom: 1.5rem;
`,Oi=E.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,Ni=E.input`
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
`,o4=E.button`
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
`,a4=E.div`
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
`,c4=E.button`
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
`,l4=E.div`
  color: #ff4d4f;
  margin-bottom: 1rem;
  text-align: center;
`,u4=E.p`
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
`;function h4(){const[A,e]=L.useState(""),[t,r]=L.useState(""),[n,s]=L.useState(""),[i,a]=L.useState(""),[c,l]=L.useState(""),[h,f]=L.useState(!1),p=fA(),{signup:C,googleSignIn:_}=Se();function v(x){return y(this,null,function*(){if(x.preventDefault(),t!==n)return l("Passwords do not match");if(t.length<6)return l("Password must be at least 6 characters");if(!i.trim())return l("Please enter a display name");try{l(""),f(!0),yield C(A,t,i),p("/profile-setup")}catch(S){console.error("Error during signup:",S),S.code==="auth/email-already-in-use"?l("Email is already in use. Please use a different email or log in"):S.code==="auth/invalid-email"?l("Invalid email address"):l("Failed to create an account. Please try again.")}f(!1)})}function b(){return y(this,null,function*(){try{l(""),f(!0),yield _(),p("/profile-setup")}catch(x){console.error("Error during Google sign-in:",x),l("Failed to sign in with Google. Please try again.")}f(!1)})}return d.jsx(n4,{children:d.jsxs(s4,{onSubmit:v,children:[d.jsx(i4,{children:"Create Account"}),c&&d.jsx(l4,{children:c}),d.jsxs(ki,{children:[d.jsx(Oi,{htmlFor:"displayName",children:"Username"}),d.jsx(Ni,{type:"text",id:"displayName",value:i,onChange:x=>a(x.target.value),required:!0})]}),d.jsxs(ki,{children:[d.jsx(Oi,{htmlFor:"email",children:"Email"}),d.jsx(Ni,{type:"email",id:"email",value:A,onChange:x=>e(x.target.value),required:!0})]}),d.jsxs(ki,{children:[d.jsx(Oi,{htmlFor:"password",children:"Password"}),d.jsx(Ni,{type:"password",id:"password",value:t,onChange:x=>r(x.target.value),required:!0})]}),d.jsxs(ki,{children:[d.jsx(Oi,{htmlFor:"confirmPassword",children:"Confirm Password"}),d.jsx(Ni,{type:"password",id:"confirmPassword",value:n,onChange:x=>s(x.target.value),required:!0})]}),d.jsx(o4,{type:"submit",disabled:h,children:h?"Creating account...":"Create Account"}),d.jsx(a4,{children:d.jsx("span",{children:"OR"})}),d.jsxs(c4,{type:"button",onClick:b,disabled:h,children:[d.jsx("img",{src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google logo"}),"Sign up with Google"]}),d.jsxs(u4,{children:["Already have an account? ",d.jsx(Vt,{to:"/login",children:"Log In"})]})]})})}function d4(){const{currentUser:A}=Se(),e=fA();return L.useEffect(()=>{A&&e("/")},[A,e]),d.jsx(h4,{})}const f4=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
`,g4=E.form`
  width: 100%;
  max-width: 400px;
  background-color: ${A=>A.theme.colors.surface.primary||"rgba(30, 30, 30, 0.6)"};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`,p4=E.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,m4=E.p`
  text-align: center;
  margin-bottom: 2rem;
  color: ${A=>A.theme.colors.text.secondary||"rgba(255, 255, 255, 0.7)"};
`,B4=E.div`
  margin-bottom: 1.5rem;
`,w4=E.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,y4=E.input`
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
`,C4=E.button`
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
`,v4=E.div`
  color: #52c41a;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0.75rem;
  background-color: rgba(82, 196, 26, 0.1);
  border-radius: 4px;
`,E4=E.div`
  color: #ff4d4f;
  margin-bottom: 1rem;
  text-align: center;
  padding: 0.75rem;
  background-color: rgba(255, 77, 79, 0.1);
  border-radius: 4px;
`,I4=E.p`
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
`;function _4(){const[A,e]=L.useState(""),[t,r]=L.useState(""),[n,s]=L.useState(""),[i,a]=L.useState(!1),{resetPassword:c}=Se();function l(h){return y(this,null,function*(){h.preventDefault();try{s(""),r(""),a(!0),yield c(A),s("Check your inbox for further instructions")}catch(f){console.error("Error resetting password:",f),f.code==="auth/user-not-found"?r("No account found with that email"):f.code==="auth/invalid-email"?r("Invalid email address"):r("Failed to reset password. Please try again.")}a(!1)})}return d.jsx(f4,{children:d.jsxs(g4,{onSubmit:l,children:[d.jsx(p4,{children:"Password Reset"}),d.jsx(m4,{children:"Enter your email address and we'll send you instructions on how to reset your password."}),t&&d.jsx(E4,{children:t}),n&&d.jsx(v4,{children:n}),d.jsxs(B4,{children:[d.jsx(w4,{htmlFor:"email",children:"Email"}),d.jsx(y4,{type:"email",id:"email",value:A,onChange:h=>e(h.target.value),required:!0})]}),d.jsx(C4,{type:"submit",disabled:i,children:i?"Sending...":"Reset Password"}),d.jsx(I4,{children:d.jsx(Vt,{to:"/login",children:"Back to Log In"})})]})})}function U4(){const{currentUser:A}=Se(),e=fA();return L.useEffect(()=>{A&&e("/")},[A,e]),d.jsx(_4,{})}const Q4=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${A=>A.theme.spacing.large||"20px"};
  background-color: ${A=>A.theme.colors.background.secondary||"#f4f4f4"};
`,b4=E.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${A=>A.theme.colors.text.primary||"#111"};
  margin-bottom: ${A=>A.theme.spacing.medium||"20px"};
`,F4=E.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${A=>A.theme.spacing.large||"20px"};
  width: 100%;
  max-width: 1200px;
`,T4=E.div`
  background-color: ${A=>A.theme.colors.surface.primary||"#fff"};
  border-radius: ${A=>A.theme.borderRadius.medium||"8px"};
  box-shadow: ${A=>A.theme.shadows.medium||"0 2px 4px rgba(0, 0, 0, 0.1)"};
  width: 300px;
  overflow: hidden;
  transition: transform ${A=>A.theme.transitions.normal||"0.3s"};
  
  &:hover {
    transform: translateY(-5px);
  }
`,x4=E.p`
  font-size: 1rem;
  color: ${A=>A.theme.colors.text.secondary||"#666"};
  margin: ${A=>A.theme.spacing.small||"10px"} 0;
`,S4=E.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,R4=E.div`
  padding: ${A=>A.theme.spacing.medium||"15px"};
`,D4=E.h3`
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
`;const P4=()=>d.jsx(d.Fragment,{children:d.jsxs(Q4,{children:[d.jsx(b4,{children:"Your Lists"}),d.jsx(F4,{children:d.jsxs(T4,{children:[d.jsx(S4,{src:"https://via.placeholder.com/150",alt:"Playlist Cover"}),d.jsxs(R4,{children:[d.jsx(D4,{children:"Chill Vibes"}),d.jsx(x4,{children:"A collection of relaxing tunes."})]})]})})]})}),L4=E.div`
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
`,H4=E.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.9);
  text-shadow: 2px 2px 4px rgba(131, 131, 131, 0.5);
`,k4=E.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  
  form {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`,O4=E.input`
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
`,ip=E.button`
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
`,N4=E.div`
  min-height: 400px;
`,V4=E.div`
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
`,M4=E.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`,op=E.button`
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
`,K4=E.span`
  font-size: 1rem;
  color: #666;
  font-weight: 500;
`,j4=E.div`
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  padding: 60px 0;
`,G4=E.div`
  background-color: #fee;
  color: #c33;
  padding: 15px;
  border-radius: 6px;
  margin-bottom: 20px;
  text-align: center;
`,$4=()=>{const[A]=dp(),[e,t]=L.useState([]),[r,n]=L.useState(!1),[s,i]=L.useState(null),[a,c]=L.useState(1),[l,h]=L.useState(""),[f,p]=L.useState([]),[C,_]=L.useState(!1),v=20,b=5,x=(m=1)=>y(null,null,function*(){n(!0),i(null);try{const w=(m-1)*v,Q=yield fetch(vo(`/music/new-releases?limit=${v}&offset=${w}`));if(!Q.ok)throw new Error("Failed to fetch albums");const F=yield Q.json();t(Array.isArray(F.albums)?F.albums:[])}catch(w){i("Failed to load albums. Please try again."),console.error("Error fetching albums:",w)}finally{n(!1)}}),S=m=>y(null,null,function*(){if(m.trim()){_(!0),i(null);try{const w=yield fetch(vo(`/music/search?q=${encodeURIComponent(m)}&type=album&limit=${v}`));if(!w.ok)throw new Error("Failed to search");const Q=yield w.json();p(Array.isArray(Q.albums)?Q.albums:[])}catch(w){i("Failed to search. Please try again."),console.error("Error searching:",w)}finally{_(!1)}}});L.useEffect(()=>{x(a)},[a]),L.useEffect(()=>{const m=A.get("search")||A.get("q");m&&(h(m),S(m))},[A]);const D=m=>{m.preventDefault(),l.trim()&&S(l)},k=()=>{h(""),p([]),_(!1)},O=f.length>0?f:e||[],H=f.length===0,U=m=>{m>=1&&m<=b&&c(m)};return d.jsxs(L4,{children:[d.jsx(H4,{children:"Discover Music"}),d.jsx(k4,{children:d.jsxs("form",{onSubmit:D,children:[d.jsx(O4,{type:"text",placeholder:"Search for albums, artists, or songs...",value:l,onChange:m=>h(m.target.value)}),d.jsx(ip,{type:"submit",disabled:C,children:C?"Searching...":"Search"}),f.length>0&&d.jsx(ip,{type:"button",onClick:k,children:"Clear"})]})}),d.jsxs(N4,{children:[s&&d.jsx(G4,{children:s}),r||C?d.jsx(j4,{children:"Loading..."}):d.jsxs(d.Fragment,{children:["            ",d.jsx(V4,{children:O.map(m=>d.jsx(Qu,{album:m,variant:"grid"},m.id))}),H&&d.jsxs(M4,{children:[d.jsx(op,{onClick:()=>U(a-1),disabled:a===1,children:"← Previous"}),d.jsxs(K4,{children:["Page ",a," of ",b]}),d.jsx(op,{onClick:()=>U(a+1),disabled:a===b,children:"Next →"})]})]})]})]})},W4=E.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`,X4=E.h1`
  font-size: 2rem;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);
`,q4=E.span`
  color: ${A=>A.theme.colors.accent||"#1db954"};
`,z4=E.div`
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
`,J4=E.div`
  min-height: 400px;
`,ap=E.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.9);
`,Y4=E.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
`,Z4=E.div`
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
`,eL=E.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
`,AL=E.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.1);
`,tL=E.div`
  flex: 1;
`,rL=E.h4`
  margin: 0;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
`,nL=E.p`
  margin: 10px 0 0 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`,sL=E.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`,iL=E.div`
  text-align: center;
  padding: 40px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.1rem;
`,oL=E.div`
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid rgba(255, 0, 0, 0.3);
  color: #ff6b6b;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
`,aL=E.div`
  text-align: center;
  padding: 40px;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.1rem;
`,cL=()=>{const[A]=dp(),e=fA(),{currentUser:t}=Se(),r=A.get("q")||"",n=A.get("tab")||"all",[s,i]=L.useState([]),[a,c]=L.useState([]),[l,h]=L.useState(!1),[f,p]=L.useState(null),C=()=>y(null,null,function*(){if(r.trim()){h(!0),p(null);try{const D=[];if(n==="all"||n==="users"?D.push(aw(r,20)):D.push(Promise.resolve([])),n==="all"||n==="music"){const H=fetch(vo(`/music/search?q=${encodeURIComponent(r)}&type=album&limit=20`)).then(U=>{if(!U.ok)throw new Error("Music search failed");return U.json()}).then(U=>U.albums||[]);D.push(H)}else D.push(Promise.resolve([]));const[k,O]=yield Promise.all(D);i(k),c(O)}catch(D){console.error("Search error:",D),p("Failed to search. Please try again.")}finally{h(!1)}}});L.useEffect(()=>{r&&C()},[r,n]);const _=D=>{const k=new URLSearchParams(A);k.set("tab",D),e(`/search?${k.toString()}`)},v=D=>{e(`/profile/${D.displayName}`)},b=s.length>0||a.length>0,x=(n==="all"||n==="users")&&s.length>0,S=(n==="all"||n==="music")&&a.length>0;return d.jsxs(W4,{children:[d.jsxs(X4,{children:['Search Results for "',d.jsx(q4,{children:r}),'"']}),d.jsxs(z4,{children:[d.jsx(yc,{$active:n==="all",onClick:()=>_("all"),children:"All"}),d.jsxs(yc,{$active:n==="users",onClick:()=>_("users"),children:["Users (",s.length,")"]}),d.jsxs(yc,{$active:n==="music",onClick:()=>_("music"),children:["Music (",a.length,")"]})]}),d.jsxs(J4,{children:[f&&d.jsx(oL,{children:f}),l?d.jsx(iL,{children:"Searching..."}):!b&&r?d.jsxs(aL,{children:['No results found for "',r,'". Try searching with different keywords.']}):d.jsxs(d.Fragment,{children:[x&&d.jsxs(d.Fragment,{children:[d.jsx(ap,{children:"Users"}),d.jsx(Y4,{children:s.map(D=>d.jsxs(Z4,{onClick:()=>v(D),children:[d.jsxs(eL,{children:[d.jsx(AL,{src:D.profilePicture||"https://via.placeholder.com/50",alt:`${D.displayName}'s avatar`}),d.jsx(tL,{children:d.jsx(rL,{children:D.displayName})})]}),D.bio&&d.jsx(nL,{children:D.bio})]},D.id))})]}),S&&d.jsxs(d.Fragment,{children:[d.jsx(ap,{children:"Music"}),d.jsx(sL,{children:a.map(D=>d.jsx(Qu,{album:D,variant:"grid"},D.id))})]})]})]})]})};function lL(A){return cC({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(A)}const uL=E.div`
  display: flex;
  align-items: center;
`,wy=E(lL)`
  cursor: ${A=>A.readOnly?"default":"pointer"};
  color: ${A=>{var e;return A.filled?((e=A.theme.colors.star)==null?void 0:e.filled)||"#ffc107":A.theme.colors.text.disabled||"#e4e5e9"}};
  margin-right: 4px;
  transition: color 0.2s;

  &:hover {
    color: ${A=>{var e;return A.readOnly?"":((e=A.theme.colors.star)==null?void 0:e.hover)||"#e0a800"}};
  }
`;wy.shouldForwardProp=A=>A!=="filled"&&A!=="readOnly";const Pu=({count:A=5,initialRating:e=null,onRate:t,size:r=24,readOnly:n=!1,color:s,hoverColor:i,showClearOption:a=!0})=>{const[c,l]=L.useState(e),[h,f]=L.useState(null),p=Te.useId();Te.useEffect(()=>{l(e)},[e]);const C=b=>{n||(a&&b===c?(l(null),t&&t(null)):(l(b),t&&t(b)))},_=b=>{n||f(b)},v=()=>{n||f(null)};return d.jsx(uL,{children:[...Array(A)].map((b,x)=>{const S=x+1,D=c!==null&&S<=(h||c);let k=n?m=>{var w;return((w=m.theme.colors.star)==null?void 0:w.filled)||"#ffc107"}:s||(m=>{var w;return((w=m.theme.colors.star)==null?void 0:w.filled)||"#ffc107"}),O=i||(m=>{var w;return((w=m.theme.colors.star)==null?void 0:w.hover)||"#e0a800"}),H=m=>m.theme.colors.text.disabled||"#e4e5e9",U;return D?U=h&&!n?O:k:U=H,d.jsxs("label",{style:{display:"inline-block"},children:[d.jsx("input",{type:"radio",name:`rating-${p}`,value:S,onClick:()=>C(S),style:{display:"none"},"aria-label":`${S} Star`,checked:S===c,onChange:()=>{},readOnly:n}),d.jsx(wy,{size:r,filled:D,readOnly:n,onMouseEnter:()=>_(S),onMouseLeave:v,style:{color:U},role:"button",tabIndex:n?-1:0,onKeyDown:m=>{!n&&(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),C(S))}})]},x)})})},hL=E.div`
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
`,dL=E.p`
  margin: 0;
  font-size: 1rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
  font-weight: 500;
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,fL=E.span`
  font-size: 0.9rem;
  color: ${A=>A.theme.colors.text.secondary||"rgba(255,255,255,0.7)"};
  margin-left: 15px;
  min-width: 45px; /* Ensure space for the duration */
  text-align: right;
`,gL=E.span`
  font-size: 0.9rem;
  color: ${A=>A.theme.colors.text.secondary||"rgba(255,255,255,0.7)"};
  margin-right: 16px;
  min-width: 20px;
  text-align: right;
`,pL=E.div`
  display: flex;
  align-items: center;
  flex: 1; /* Take up available space */
  min-width: 0; /* Allow text to truncate if needed */
  margin-right: 20px; /* Add space between song info and rating */
`,mL=({track:A,currentRating:e,onRateSong:t,index:r})=>A?d.jsxs(hL,{children:["      ",d.jsxs(pL,{children:[typeof r=="number"&&d.jsx(gL,{children:r+1}),d.jsx(dL,{children:A.name||A.title||"Unknown Title"}),(A.duration_formatted||A.duration)&&d.jsx(fL,{children:A.duration_formatted||A.duration})]}),d.jsx("div",{style:{minWidth:"120px",display:"flex",justifyContent:"flex-end"},children:d.jsx(Pu,{initialRating:e,onRate:n=>t(A.id,n),size:20,showClearOption:!0})})]}):null;function BL(){return y(this,null,function*(){const A=TA.currentUser;if(!A)throw new Error("User not authenticated");return yield A.getIdToken()})}const wL=()=>y(null,null,function*(){try{const A=new AbortController,e=setTimeout(()=>A.abort(),1e4),t=yield Lu("/api/users/me/collection",{signal:A.signal});if(clearTimeout(e),!t.ok)throw new Error(`HTTP error! status: ${t.status}`);return yield t.json()}catch(A){throw console.error("Error fetching collection:",A),A}}),yL=(A,e)=>y(null,null,function*(){try{const t=new AbortController,r=setTimeout(()=>t.abort(),1e4),n=yield Lu(`/api/users/me/collection/${A}/rating`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({rating:e}),signal:t.signal});if(clearTimeout(r),!n.ok)throw new Error(`HTTP error! status: ${n.status}`);return yield n.json()}catch(t){throw console.error("Error updating item rating:",t),t}}),CL=A=>y(null,null,function*(){try{const e=new AbortController,t=setTimeout(()=>e.abort(),1e4),r=yield Lu(`/api/users/me/collection/${A}`,{method:"DELETE",signal:e.signal});if(clearTimeout(t),!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return yield r.json()}catch(e){throw console.error("Error removing from collection:",e),e}});function Lu(t){return y(this,arguments,function*(A,e={}){const r=yield BL(),n=Ve(Ie({},e.headers||{}),{Authorization:`Bearer ${r}`});return fetch(A,Ve(Ie({},e),{headers:n}))})}const zn=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
  min-width: 600px; /* Ensure minimum width for smaller screens */
  margin: 0 auto;
  padding: 40px 20px;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,vL=E.div`
  margin-bottom: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  height: 300px;
`,EL=E.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,IL=E.h1`
  font-size: 2.5rem;
  margin-bottom: 8px;
  text-align: center;
`,_L=E.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: ${A=>A.theme.colors.text.secondary||"rgba(255,255,255,0.7)"};
  text-align: center;
`,UL=E.div`
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
`,QL=E.div`
  width: 100%;
  max-width: 800px; /* Increased from 700px */
  min-width: 550px; /* Ensure minimum width */
  margin-top: 24px;
`,bL=E.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 16px;
  border-bottom: 1px solid ${A=>A.theme.colors.surface.secondary||"rgba(255,255,255,0.1)"};
  padding-bottom: 8px;
  width: 100%;
`,FL=E.ul`
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
`,TL=E.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`,xL=E(pl)`
  background-color: ${A=>A.theme.colors.secondary||"#7b68ee"};
  
  &:hover:not(:disabled) {
    background-color: #8a77ff;
  }
`,SL=A=>y(null,null,function*(){console.log(`Fetching details for album ID: ${A}`);try{const e=new AbortController,t=setTimeout(()=>e.abort(),15e3),r=yield fetch(`/api/music/albums/${A}`,{signal:e.signal});if(clearTimeout(t),!r.ok)throw new Error(`HTTP error! status: ${r.status}`);return yield r.json()}catch(e){throw console.error("Could not fetch album details:",e),e.name==="AbortError"?new Error("Request timed out. The server might be experiencing high load."):e}});function RL(){const{albumId:A}=hp();fA();const[e,t]=Te.useState(null),[r,n]=Te.useState(!0),[s,i]=Te.useState(null),[a,c]=Te.useState(0),[l,h]=Te.useState({}),[f,p]=Te.useState(null),{currentUser:C}=Se(),_=!!C,[v,b]=Te.useState(!1),[x,S]=Te.useState(!1),[D,k]=Te.useState(null);Te.useEffect(()=>{A&&y(null,null,function*(){var Q,F,T,I,te;try{n(!0),i(null);const ce=yield SL(A);if(ce){const ye=Ve(Ie({},ce),{tracks:Array.isArray(ce.tracks)?ce.tracks:((Q=ce.tracks)==null?void 0:Q.items)||[],imageUrl:ce.imageUrl||((T=(F=ce.images)==null?void 0:F[0])==null?void 0:T.url)||null,artistName:ce.artistName||((te=(I=ce.artists)==null?void 0:I[0])==null?void 0:te.name)||"Unknown Artist"});console.log("Album details loaded:",ye),t(ye),p(ce.initialAlbumRating||null),h(ce.initialSongRatings||{})}else i("Album not found")}catch(ce){console.error("Error fetching album details:",ce),i("Failed to load album details. API may be temporarily unavailable.")}finally{n(!1)}})},[A,a]),Te.useEffect(()=>{if(e&&e.tracks&&e.tracks.length>0){const w=Object.values(l).filter(Q=>Q!==null&&Q>0);if(w.length>0){const F=w.reduce((T,I)=>T+I,0)/w.length;p(Math.round(F*2)/2)}else p(null)}},[l,e]);const O=(w,Q)=>{h(F=>Ve(Ie({},F),{[w]:Q}));try{console.log(`Rated song ${w} with ${Q} stars`)}catch(F){console.error("Error saving song rating:",F)}},H=()=>y(null,null,function*(){try{k(null),console.log(`Adding album ${e.name} to user's collection with rating: ${f}`),b(!0),setTimeout(()=>{b(!1),alert("Album added to your collection successfully!")},3e3)}catch(w){console.error("Error adding album to collection:",w),w.name==="AbortError"?k("Request timed out. Please try again later."):k("Failed to add album to collection. Please try again."),setTimeout(()=>{k(null)},5e3)}}),U=()=>y(null,null,function*(){try{k(null),console.log(`Adding album ${e.name} to user's Rate Later list`),S(!0),setTimeout(()=>{S(!1)},3e3)}catch(w){console.error("Error adding album to Rate Later list:",w),w.name==="AbortError"?k("Request timed out. Please try again later."):k("Failed to add album to Rate Later list. Please try again."),setTimeout(()=>{k(null)},5e3)}}),m=()=>{c(w=>w+1)};return r?d.jsx(zn,{children:"Loading album details..."}):s?d.jsx(zn,{children:d.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[d.jsx("h2",{children:"Error"}),d.jsx("p",{children:s}),d.jsx(pl,{onClick:m,children:"Retry Loading"})]})}):e?d.jsxs(zn,{children:[d.jsxs(vL,{children:[e.imageUrl?d.jsx(EL,{src:e.imageUrl,alt:e.name,onError:w=>{var Q,F;console.log("Image failed to load:",e.imageUrl),w.target.style.display="none",(F=(Q=w.target.nextSibling)==null?void 0:Q.style)==null||F.setProperty("display","flex")}}):null,d.jsx("div",{style:{width:"100%",height:"100%",backgroundColor:"#333",display:e.imageUrl?"none":"flex",alignItems:"center",justifyContent:"center",color:"#666",borderRadius:"8px",fontSize:"14px"},children:e.imageUrl?"Image failed to load":"No Image Available"})]}),d.jsx(IL,{children:e.name}),d.jsx(_L,{children:e.artistName}),d.jsxs(UL,{children:[d.jsx("h3",{children:"Album Rating"}),d.jsx(Pu,{initialRating:f,readOnly:!0,size:30}),d.jsxs(TL,{children:[d.jsx(pl,{onClick:H,disabled:!f||!_,children:v?"Added to Collection":"Add to Collection"}),d.jsx(xL,{onClick:U,disabled:!_,children:x?"Added to Rate Later":"Rate Later"})]}),D&&d.jsx("p",{style:{color:"#ff6b6b",margin:"10px 0",fontSize:"0.9rem"},children:D}),d.jsx("p",{style:{fontSize:"0.9rem",marginTop:"5px",color:"rgba(255,255,255,0.7)"},children:"(Average of song ratings)"})]}),d.jsxs(QL,{children:[d.jsx(bL,{children:"Tracks"}),d.jsx(FL,{children:e.tracks&&Array.isArray(e.tracks)?e.tracks.map((w,Q)=>d.jsx(mL,{track:w,index:Q,currentRating:l[w.id]!==void 0?l[w.id]:null,onRateSong:O},w.id)):d.jsx("div",{children:"No tracks available"})})]})]}):d.jsx(zn,{children:"Album not found."})}const DL=E.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`,PL=E.div`
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
`,LL=E.img`
  width: 60px;
  height: 60px;
  border-radius: 4px;
  object-fit: cover;
`,HL=E.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`,kL=E.h4`
  margin: 0;
  font-weight: 600;
`,OL=E.p`
  margin: 3px 0 0 0;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
`,NL=E.div`
  min-width: 120px;
  text-align: right;
`,cp=E.button`
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
`,VL=E.p`
  color: #ff6b6b;
  margin: 5px 0;
  font-size: 0.9rem;
`,ML=E.div`
  text-align: center;
  padding: 20px;
  color: rgba(255, 255, 255, 0.7);
`,KL=({items:A,isLoading:e,error:t,onRetry:r,onRateItem:n,onRemoveItem:s,allowRating:i=!0})=>e?d.jsx(ML,{children:"Loading your collection..."}):t?d.jsxs("div",{children:[d.jsx(VL,{children:t}),r&&d.jsx(cp,{onClick:r,children:"Retry Loading"})]}):!A||A.length===0?d.jsx("div",{children:"Your collection is empty."}):d.jsx(DL,{children:A.map(a=>d.jsxs(PL,{children:[d.jsx(LL,{src:a.imageUrl,alt:a.name}),d.jsxs(HL,{children:[d.jsx(kL,{children:a.name}),d.jsx(OL,{children:a.artistName})]}),d.jsx(NL,{children:i&&d.jsx(Pu,{initialRating:a.rating,readOnly:!n,size:16,onRating:c=>n&&n(a.id,c)})}),s&&d.jsx(cp,{onClick:()=>s(a.id),style:{backgroundColor:"#e74c3c"},children:"Remove"})]},a.id))}),jL=E(zn)`
  max-width: 800px;
`,GL=E.h1`
  margin-bottom: 20px;
  font-size: 2rem;
`,$L=E.p`
  margin-bottom: 30px;
  color: rgba(255, 255, 255, 0.7);
`,WL=E.div`
  text-align: center;
  padding: 40px 20px;
  background-color: rgba(30, 30, 30, 0.6);
  border-radius: 8px;
`,XL=E.p`
  margin-bottom: 20px;
  font-size: 1.1rem;
`,qL=E.button`
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
`;function zL(){const A=fA(),[e,t]=Te.useState([]),[r,n]=Te.useState(!0),[s,i]=Te.useState(null),[a,c]=Te.useState(0);Te.useEffect(()=>{y(null,null,function*(){try{n(!0),i(null);const _=yield wL();t(_)}catch(_){console.error("Error loading collection:",_);let v="Failed to load your collection. Please try again later.";_.name==="AbortError"&&(v="Request timed out. The server might be experiencing high load."),i(v)}finally{n(!1)}})},[a]);const l=()=>{c(C=>C+1)},h=(C,_)=>y(null,null,function*(){try{t(v=>v.map(b=>b.id===C?Ve(Ie({},b),{rating:_}):b)),yield yL(C,_)}catch(v){console.error("Error updating rating:",v),i("Failed to update rating. Please try again."),setTimeout(()=>i(null),5e3)}}),f=C=>y(null,null,function*(){try{const _=[...e];t(v=>v.filter(b=>b.id!==C)),yield CL(C)}catch(_){console.error("Error removing item:",_),t(previousCollection),i("Failed to remove album from collection. Please try again."),setTimeout(()=>i(null),5e3)}}),p=()=>d.jsxs(WL,{children:[d.jsx(XL,{children:"Your collection is empty. Start rating albums to add them to your collection!"}),d.jsx(qL,{onClick:()=>A("/music"),children:"Browse Music"})]});return d.jsxs(jL,{children:[d.jsx(GL,{children:"Your Collection"}),d.jsx($L,{children:"Albums you've rated and added to your collection appear here."}),!r&&!s&&e.length===0?d.jsx(p,{}):d.jsx(KL,{items:e,isLoading:r,error:s,onRetry:l,onRateItem:h,onRemoveItem:f})]})}const JL=({children:A,requireCompleteProfile:e=!1})=>{const{currentUser:t}=Se(),[r,n]=L.useState(!0),[s,i]=L.useState(!0);return L.useEffect(()=>{function a(){return y(this,null,function*(){if(!t){n(!1);return}if(e)try{const c=yield yA(sA(ee,"userprofiles",t.uid));if(c.exists()){const l=c.data(),h=!!(l.bio&&(l.profilePicture||t.photoURL)&&l.profileSetup!==!1);i(h)}else i(!1)}catch(c){console.error("Error checking profile status:",c)}n(!1)})}a()},[t,e]),r?d.jsx("div",{children:"Loading..."}):t?e&&!s?d.jsx(Nh,{to:"/profile-setup",replace:!0}):A:d.jsx(Nh,{to:"/login",replace:!0})};function YL(A,e=null){return y(this,null,function*(){if(!A)throw new Error("No user UID provided");try{const t=sA(ee,"userprofiles",A),r=yield yA(t);if(!r.exists())return console.log("No profile document found for user:",A),!1;const n=r.data();if(n.profileSetupComplete!==void 0)return console.log("User already migrated:",A),!0;const s=n.displayName||(e==null?void 0:e.displayName),a=n.bio||n.profilePicture||s;return yield at(t,{profileSetupComplete:a},{merge:!0}),console.log(`Successfully migrated user ${A} with profileSetupComplete: ${a}`),!0}catch(t){return console.error("Error migrating user profile:",A,t),!1}})}const ZL=E.button`
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
`,eH=E.div`
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
`;function AH(){const{currentUser:A}=Se(),[e,t]=L.useState(!1),[r,n]=L.useState(""),[s,i]=L.useState(""),a=()=>y(null,null,function*(){if(!A){n("No user logged in"),i("error");return}t(!0),n("");try{(yield YL(A.uid,A))?(n("Profile successfully migrated! You can now use the app normally."),i("success"),setTimeout(()=>{window.location.reload()},2e3)):(n("Migration completed, but no changes were needed."),i("success"))}catch(c){console.error("Migration error:",c),n("Failed to migrate profile. Please try again."),i("error")}finally{t(!1)}});return d.jsxs("div",{style:{padding:"1rem",textAlign:"center"},children:[d.jsx("h3",{children:"Profile Migration"}),d.jsx("p",{children:"If you're stuck in the profile setup loop, click the button below to fix your account:"}),d.jsx(ZL,{onClick:a,disabled:e,children:e?"Migrating...":"Fix My Profile"}),r&&d.jsx(eH,{className:s,children:r})]})}const tH=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  padding: 2rem;
`,rH=E.form`
  width: 100%;
  max-width: 500px;
  background-color: ${A=>A.theme.colors.surface.primary||"rgba(30, 30, 30, 0.6)"};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
`,nH=E.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,lp=E.div`
  margin-bottom: 1.5rem;
`,up=E.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${A=>A.theme.colors.text.primary||"#fff"};
`,sH=E.input`
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
`,iH=E.textarea`
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
`,oH=E.button`
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
`,aH=E.div`
  color: #ff6b6b;
  margin-bottom: 1rem;
  text-align: center;
`,cH=E.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.5rem;
`,lH=E.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid ${A=>A.theme.colors.accent||"#1db954"};
`,uH=E.button`
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
`;function hH(){const{currentUser:A,updateUserProfile:e}=Se(),t=fA(),[r,n]=L.useState(!1),[s,i]=L.useState(""),[a,c]=L.useState((A==null?void 0:A.displayName)||""),[l,h]=L.useState(""),[f,p]=L.useState(null),[C,_]=L.useState((A==null?void 0:A.photoURL)||"https://via.placeholder.com/150"),v=L.useRef(null),b=D=>{const k=D.target.files[0];if(k){p(k);const O=new FileReader;O.onload=H=>{_(H.target.result)},O.readAsDataURL(k)}},x=()=>{v.current.click()},S=D=>y(null,null,function*(){if(D.preventDefault(),a.trim()===""){i("Display name cannot be empty");return}try{n(!0),i(""),yield e({displayName:a,bio:l,profilePicture:f,profileSetupComplete:!0}),t(`/profile/${a}`)}catch(k){console.error("Error setting up profile:",k),i("Failed to set up profile. Please try again.")}finally{n(!1)}});return d.jsxs(tH,{children:[d.jsxs(rH,{onSubmit:S,children:[d.jsx(nH,{children:"Set Up Your Profile"}),s&&d.jsx(aH,{children:s}),d.jsxs(cH,{children:[d.jsx(lH,{src:C,alt:"Profile Preview"}),d.jsx("input",{type:"file",accept:"image/*",onChange:b,ref:v,style:{display:"none"}}),d.jsx(uH,{type:"button",onClick:x,children:"Choose Profile Picture"})]}),d.jsxs(lp,{children:[d.jsx(up,{htmlFor:"displayName",children:"Display Name"}),d.jsx(sH,{id:"displayName",type:"text",value:a,onChange:D=>c(D.target.value),placeholder:"Choose a display name",required:!0})]}),d.jsxs(lp,{children:[d.jsx(up,{htmlFor:"bio",children:"Bio"}),d.jsx(iH,{id:"bio",value:l,onChange:D=>h(D.target.value),placeholder:"Tell us a bit about yourself..."})]}),d.jsx(oH,{type:"submit",disabled:r,children:r?"Setting Up Profile...":"Complete Setup"})]}),d.jsx(AH,{})]})}const dH=[{path:"/",element:AT,title:"Home | BeatMeter",isPublic:!0,description:"Track and rate your favorite music"},{path:"/sorter",element:$P,title:"Song Sorter | BeatMeter",isPublic:!0,description:"Sort and rank your favorite songs"},{path:"/profile/:username",element:tg,title:"Profile | BeatMeter",isPublic:!0,description:"View user profile and rankings"},{path:"/profile",element:tg,title:"My Profile | BeatMeter",isPublic:!1,description:"View your profile"},{path:"/profile-setup",element:hH,title:"Setup Your Profile | BeatMeter",isPublic:!1,description:"Complete your profile setup"},{path:"/login",element:r4,title:"Login | BeatMeter",isPublic:!0,description:"Sign in to BeatMeter"},{path:"/create-account",element:d4,title:"Create Account | BeatMeter",isPublic:!0,description:"Create a new BeatMeter account"},{path:"/forgot-password",element:U4,title:"Forgot Password | BeatMeter",isPublic:!0,description:"Reset your BeatMeter password"},{path:"/lists",element:P4,title:"Playlists",isPublic:!0,description:"Explore user-generated playlists and recommendations"},{path:"/Music",element:$4,title:"Music | BeatMeter",isPublic:!0,description:"Discover and manage your music collections"},{path:"/search",element:cL,title:"Search Results | BeatMeter",isPublic:!0,description:"Search for music and users"},{path:"/album/:albumId",element:RL,title:"Album Details | BeatMeter",isPublic:!0,description:"View album details and ratings"},{path:"/collection",element:zL,title:"Your Collection | BeatMeter",isPublic:!1,description:"View and manage your music collection"}],fH=()=>d.jsx(Vh,{element:d.jsx(bF,{}),children:dH.map(({path:A,element:e,title:t,isPublic:r})=>{const n=e;return d.jsx(Vh,{path:A,element:d.jsxs(d.Fragment,{children:[d.jsx("title",{children:t}),r?d.jsx(n,{}):d.jsx(JL,{children:d.jsx(n,{})})]})},A)})}),gH=lC`
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
`;function pH(){const{currentUser:A}=Se();return L.useEffect(()=>{function e(){return y(this,null,function*(){if(A)try{const t=sA(ee,"userprofiles",A.uid),r=yield yA(t);if(!r.exists())return;const n=r.data(),s={};if(n.bio||n.profileSetup===!0){console.log("[useProfileCreation] Profile appears complete, skipping field additions");return}"profilePicture"in n||(s.profilePicture=A.photoURL||"https://via.placeholder.com/150"),"bio"in n||(s.bio=""),"profileSetup"in n||(s.profileSetup=!!(n.bio&&n.profilePicture)),"joinDate"in n||(s.joinDate=n.createdAt),"musicCollection"in n||(s.musicCollection=[]),"followers"in n||(s.followers=[]),"following"in n||(s.following=[]),"rateLater"in n||(s.rateLater=[]),Object.keys(s).length>0&&(yield Tt(A.uid,s,!0,A))}catch(t){console.error("Error ensuring user profile:",t)}})}e()},[A]),null}const mH=({children:A})=>(pH(),d.jsx(d.Fragment,{children:A}));class BH extends Te.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){console.error("Error caught by boundary:",e,t),this.setState({errorInfo:t})}render(){return this.state.hasError?d.jsxs("div",{style:{padding:"20px",maxWidth:"600px",margin:"40px auto",backgroundColor:"#282828",borderRadius:"10px",color:"white"},children:[d.jsx("h2",{children:"Something went wrong"}),d.jsx("p",{children:"We encountered an error while loading this page. Please try:"}),d.jsxs("ul",{style:{marginBottom:"20px"},children:[d.jsx("li",{children:"Refreshing the page"}),d.jsx("li",{children:"Checking your internet connection"}),d.jsx("li",{children:"Logging out and back in"})]}),d.jsx("button",{onClick:()=>window.location.reload(),style:{backgroundColor:"#1db954",border:"none",color:"white",padding:"10px 20px",borderRadius:"20px",cursor:"pointer"},children:"Reload Page"}),!1]}):this.props.children}}const wH=E.div`
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
`,yH=E.button`
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
`;function CH(){const[A,e]=L.useState(navigator.onLine),[t,r]=L.useState(!1),[n,s]=L.useState(!1),i=()=>{const a=navigator.onLine;e(a),(!a||a&&n)&&(r(!0),a||s(!0),a&&setTimeout(()=>r(!1),5e3))};return L.useEffect(()=>(window.addEventListener("online",i),window.addEventListener("offline",i),()=>{window.removeEventListener("online",i),window.removeEventListener("offline",i)}),[n]),t?d.jsxs(wH,{isOnline:A,show:t,children:[A?"You are back online! Content will now update automatically.":"You are currently offline. Some features may not be available.",d.jsx(yH,{onClick:()=>r(!1),children:"×"})]}):null}function vH(){return d.jsx(BH,{children:d.jsxs(uC,{theme:mC,children:[" ",d.jsx(gH,{})," ",d.jsxs(Jb,{children:[" ",d.jsxs(mH,{children:[" ",d.jsxs(oC,{children:[d.jsx(aC,{children:fH()}),d.jsx(CH,{})]})]})]})]})})}pC.createRoot(document.getElementById("root")).render(d.jsx(Te.StrictMode,{children:d.jsx(vH,{})}))});export default EH();
