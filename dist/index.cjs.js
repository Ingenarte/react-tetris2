"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const h=require("react"),x=require("styled-components");function ut(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ie={exports:{}},Q={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e;function ft(){if(_e)return Q;_e=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(n,c,u){var d=null;if(u!==void 0&&(d=""+u),c.key!==void 0&&(d=""+c.key),"key"in c){u={};for(var p in c)p!=="key"&&(u[p]=c[p])}else u=c;return c=u.ref,{$$typeof:e,type:n,key:d,ref:c!==void 0?c:null,props:u}}return Q.Fragment=t,Q.jsx=r,Q.jsxs=r,Q}var ee={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Se;function dt(){return Se||(Se=1,process.env.NODE_ENV!=="production"&&function(){function e(o){if(o==null)return null;if(typeof o=="function")return o.$$typeof===W?null:o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case F:return"Fragment";case _:return"Profiler";case Z:return"StrictMode";case C:return"Suspense";case $:return"SuspenseList";case L:return"Activity"}if(typeof o=="object")switch(typeof o.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),o.$$typeof){case R:return"Portal";case z:return(o.displayName||"Context")+".Provider";case S:return(o._context.displayName||"Context")+".Consumer";case B:var f=o.render;return o=o.displayName,o||(o=f.displayName||f.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case K:return f=o.displayName||null,f!==null?f:e(o.type)||"Memo";case N:f=o._payload,o=o._init;try{return e(o(f))}catch{}}return null}function t(o){return""+o}function r(o){try{t(o);var f=!1}catch{f=!0}if(f){f=console;var w=f.error,E=typeof Symbol=="function"&&Symbol.toStringTag&&o[Symbol.toStringTag]||o.constructor.name||"Object";return w.call(f,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",E),t(o)}}function n(o){if(o===F)return"<>";if(typeof o=="object"&&o!==null&&o.$$typeof===N)return"<...>";try{var f=e(o);return f?"<"+f+">":"<...>"}catch{return"<...>"}}function c(){var o=q.A;return o===null?null:o.getOwner()}function u(){return Error("react-stack-top-frame")}function d(o){if(ne.call(o,"key")){var f=Object.getOwnPropertyDescriptor(o,"key").get;if(f&&f.isReactWarning)return!1}return o.key!==void 0}function p(o,f){function w(){a||(a=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",f))}w.isReactWarning=!0,Object.defineProperty(o,"key",{get:w,configurable:!0})}function b(){var o=e(this.type);return l[o]||(l[o]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),o=this.props.ref,o!==void 0?o:null}function v(o,f,w,E,G,A,xe,me){return w=A.ref,o={$$typeof:T,type:o,key:f,props:A,_owner:G},(w!==void 0?w:null)!==null?Object.defineProperty(o,"ref",{enumerable:!1,get:b}):Object.defineProperty(o,"ref",{enumerable:!1,value:null}),o._store={},Object.defineProperty(o._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(o,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(o,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:xe}),Object.defineProperty(o,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:me}),Object.freeze&&(Object.freeze(o.props),Object.freeze(o)),o}function g(o,f,w,E,G,A,xe,me){var y=f.children;if(y!==void 0)if(E)if(he(y)){for(E=0;E<y.length;E++)P(y[E]);Object.freeze&&Object.freeze(y)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else P(y);if(ne.call(f,"key")){y=e(o);var V=Object.keys(f).filter(function(lt){return lt!=="key"});E=0<V.length?"{key: someKey, "+V.join(": ..., ")+": ...}":"{key: someKey}",j[y+E]||(V=0<V.length?"{"+V.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,E,y,V,y),j[y+E]=!0)}if(y=null,w!==void 0&&(r(w),y=""+w),d(f)&&(r(f.key),y=""+f.key),"key"in f){w={};for(var be in f)be!=="key"&&(w[be]=f[be])}else w=f;return y&&p(w,typeof o=="function"?o.displayName||o.name||"Unknown":o),v(o,y,A,G,c(),w,xe,me)}function P(o){typeof o=="object"&&o!==null&&o.$$typeof===T&&o._store&&(o._store.validated=1)}var O=h,T=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),S=Symbol.for("react.consumer"),z=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),W=Symbol.for("react.client.reference"),q=O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne=Object.prototype.hasOwnProperty,he=Array.isArray,s=console.createTask?console.createTask:function(){return null};O={"react-stack-bottom-frame":function(o){return o()}};var a,l={},m=O["react-stack-bottom-frame"].bind(O,u)(),k=s(n(u)),j={};ee.Fragment=F,ee.jsx=function(o,f,w,E,G){var A=1e4>q.recentlyCreatedOwnerStacks++;return g(o,f,w,!1,E,G,A?Error("react-stack-top-frame"):m,A?s(n(o)):k)},ee.jsxs=function(o,f,w,E,G){var A=1e4>q.recentlyCreatedOwnerStacks++;return g(o,f,w,!0,E,G,A?Error("react-stack-top-frame"):m,A?s(n(o)):k)}}()),ee}var Le;function pt(){return Le||(Le=1,process.env.NODE_ENV==="production"?ie.exports=ft():ie.exports=dt()),ie.exports}var i=pt();const Y=new Audio("/audio/tetris.mp3");Y.loop=!0;Y.volume=.8;let oe=!1,Ae=!1;const Ee=new Set,Ne=()=>Ee.forEach(e=>e());function Ke(){const[,e]=h.useState(0);h.useEffect(()=>{const n=()=>e(c=>c+1);return Ee.add(n),()=>{Ee.delete(n)}},[]);const t=h.useCallback(()=>{oe?Y.pause():Y.play().catch(()=>{}),oe=!oe,Ne()},[]),r=h.useCallback(()=>{Y.muted=!Y.muted,Ae=Y.muted,Ne()},[]);return{isPlaying:oe,isMuted:Ae,togglePlay:t,toggleMute:r}}var We={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ie=h.createContext&&h.createContext(We),ht=["attr","size","title"];function xt(e,t){if(e==null)return{};var r=mt(e,t),n,c;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(c=0;c<u.length;c++)n=u[c],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function mt(e,t){if(e==null)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ue.apply(this,arguments)}function Me(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),r.push.apply(r,n)}return r}function fe(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Me(Object(r),!0).forEach(function(n){bt(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Me(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function bt(e,t,r){return t=gt(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function gt(e){var t=vt(e,"string");return typeof t=="symbol"?t:t+""}function vt(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function qe(e){return e&&e.map((t,r)=>h.createElement(t.tag,fe({key:r},t.attr),qe(t.child)))}function Ye(e){return t=>h.createElement(wt,ue({attr:fe({},e.attr)},t),qe(e.child))}function wt(e){var t=r=>{var{attr:n,size:c,title:u}=e,d=xt(e,ht),p=c||r.size||"1em",b;return r.className&&(b=r.className),e.className&&(b=(b?b+" ":"")+e.className),h.createElement("svg",ue({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,d,{className:b,style:fe(fe({color:e.color||r.color},r.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),u&&h.createElement("title",null,u),e.children)};return Ie!==void 0?h.createElement(Ie.Consumer,null,r=>t(r)):t(We)}function jt(e){return Ye({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"},child:[]}]})(e)}function Et(e){return Ye({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},child:[]}]})(e)}const yt=x.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 12px;
`,Be=x.css`
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 6px;
  font-size: 18px;
`,Pt=x.div`
  ${Be};
  pointer-events: none; /* reserve room for a hidden play button */
`,Ot=x.button.attrs({type:"button"})`
  ${Be};
  background: #28203e;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #f0f0f0;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #3a2c5b;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    background: #28203e;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 107, 198, 0.3);
    border-color: rgba(16, 16, 31, 0.3);
  }
`,Tt=({disabled:e=!1})=>{const{isMuted:t,toggleMute:r}=Ke();return i.jsxs(yt,{children:[i.jsx(Pt,{}),i.jsx(Ot,{"data-testid":"audio-toggle",onClick:()=>{e||r()},disabled:e,title:t?"Un-mute":"Mute",children:t?i.jsx(jt,{}):i.jsx(Et,{})})]})},H={GAME_WIDTH:10,GAME_HEIGHT:20,BLOCK_WIDTH:4,BLOCK_HEIGHT:4,ROTATION_COUNT:4},kt=["I","J","L","O","S","T","Z"],Ve=e=>e>=0&&e<H.ROTATION_COUNT,Oe=e=>{switch(e){case"I":return[[[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,1,0,0]],[[0,0,0,0],[1,1,1,1],[0,0,0,0],[0,0,0,0]],[[0,0,1,0],[0,0,1,0],[0,0,1,0],[0,0,1,0]],[[0,0,0,0],[0,0,0,0],[1,1,1,1],[0,0,0,0]]];case"J":return[[[0,1,0,0],[0,1,0,0],[1,1,0,0],[0,0,0,0]],[[1,0,0,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]],[[0,1,1,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,0,0,0],[1,1,1,0],[0,0,1,0],[0,0,0,0]]];case"L":return[[[0,1,0,0],[0,1,0,0],[0,1,1,0],[0,0,0,0]],[[0,0,0,0],[1,1,1,0],[1,0,0,0],[0,0,0,0]],[[1,1,0,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,0,1,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]]];case"O":return[[[1,1,0,0],[1,1,0,0],[0,0,0,0],[0,0,0,0]],[[1,1,0,0],[1,1,0,0],[0,0,0,0],[0,0,0,0]],[[1,1,0,0],[1,1,0,0],[0,0,0,0],[0,0,0,0]],[[1,1,0,0],[1,1,0,0],[0,0,0,0],[0,0,0,0]]];case"S":return[[[0,0,0,0],[0,1,1,0],[1,1,0,0],[0,0,0,0]],[[1,0,0,0],[1,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,1,1,0],[1,1,0,0],[0,0,0,0],[0,0,0,0]],[[0,1,0,0],[0,1,1,0],[0,0,1,0],[0,0,0,0]]];case"T":return[[[0,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]],[[0,1,0,0],[1,1,0,0],[0,1,0,0],[0,0,0,0]],[[0,1,0,0],[1,1,1,0],[0,0,0,0],[0,0,0,0]],[[0,1,0,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]]];case"Z":return[[[0,0,0,0],[1,1,0,0],[0,1,1,0],[0,0,0,0]],[[0,1,0,0],[1,1,0,0],[1,0,0,0],[0,0,0,0]],[[1,1,0,0],[0,1,1,0],[0,0,0,0],[0,0,0,0]],[[0,0,1,0],[0,1,1,0],[0,1,0,0],[0,0,0,0]]];default:{const t=e;throw new Error(`Unhandled color case: ${t}`)}}},Je=e=>{switch(e){case"I":return"piece-i";case"J":return"piece-j";case"L":return"piece-l";case"O":return"piece-o";case"S":return"piece-s";case"T":return"piece-t";case"Z":return"piece-z";case"ghost":return"piece-preview";default:{const t=e;throw new Error(`Unhandled piece case: ${t}`)}}},{GAME_HEIGHT:Xe,GAME_WIDTH:Ze}=H,De=({x:e,y:t})=>`${e},${t}`;function Ct(){const e=new Array(Xe);for(let t=0;t<e.length;t++)e[t]=Qe();return e}function Qe(){return new Array(Ze).fill(null)}const ye=(e,t,r=!1)=>{const{piece:n,rotation:c,position:u}=t,d=Oe(n)[c];if(!d)throw new Error(`Unexpected: no rotation ${c} found to piece ${n}`);const p=d.reduce((g,P,O)=>g.concat(P.map((T,R)=>T?{x:R+u.x,y:O+u.y}:!1)),[]),b=new Set(p.map(g=>g?De(g):"").filter(Boolean)),v=r?"ghost":n;return e.map((g,P)=>g.map((O,T)=>b.has(De({x:T,y:P}))?v:O))};function Rt(e,t){return ye(e,t)}function ze(e){const t=[],r=[];let n=0;for(let c=0;c<e.length;c++)_t(e[c])?(t.push(c),n++):r.push(e[c]);for(;r.length<e.length;)r.unshift(Qe());return[r,t,n]}function _t(e){for(let t=0;t<e.length;t++)if(!e[t])return!1;return!0}function de(e,t){const{piece:r,rotation:n,position:c}=t,u=Oe(r)[n];for(let d=0;d<H.BLOCK_WIDTH;d++)for(let p=0;p<H.BLOCK_HEIGHT;p++){const b=u[p][d],v=d+c.x,g=p+c.y;if(b)if(v>=0&&v<Ze&&g<Xe){if(!e[g]||e[g][v])return!1}else return!1}return!0}function et(e){if(!e)throw new Error("assertion failed")}function re(e){return function(t,r){const n=e(r);if(de(t,n))return n}}const St=re(e=>{const t={...e.position,x:e.position.x-1};return{...e,position:t}}),Lt=re(e=>{const t={...e.position,x:e.position.x+1};return{...e,position:t}}),$e=re(e=>{const t={...e.position,y:e.position.y+1};return{...e,position:t}}),At=re(e=>{const t=((e.rotation??0)+1)%H.ROTATION_COUNT;return et(Ve(t)),{...e,rotation:t}}),Nt=re(e=>{let t=(e.rotation??0)-1;return t<0&&(t+=H.ROTATION_COUNT),et(Ve(t)),{...e,rotation:t}});function tt(e,t){const r={...t.position};for(;de(e,{...t,position:r});)r.y+=1;return r.y-=1,{...t,position:r}}function rt(){const e=kt.slice();for(let t=e.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[r],e[r]=n}return e}function It(e){return nt({minimumLength:e,queue:[],bucket:rt()})}function Te(e){if(e.queue.length===0)throw new Error("Cannot getNext from an empty queue");const t=e.queue[0],r=e.queue.slice(1),n=nt({minimumLength:e.minimumLength,queue:r,bucket:e.bucket});return{piece:t,queue:n}}function nt(e){const{minimumLength:t}=e,r=e.queue.slice();let n=e.bucket.slice();for(;r.length<t;){n.length===0&&(n=rt());const c=n.shift();r.push(c)}return{minimumLength:t,queue:r,bucket:n}}function Mt(e){return e.every(Boolean)}const Dt=e=>Math.floor(e.lines/10)+1,zt=(e,t)=>{var r;switch(t){case"RESTART":return Ce();case"PAUSE":return e.state==="PLAYING"?{...e,state:"PAUSED"}:e;case"RESUME":return e.state==="PAUSED"?{...e,state:"PLAYING"}:e;case"TOGGLE_PAUSE":return e.state==="PLAYING"?{...e,state:"PAUSED"}:e.state==="PAUSED"?{...e,state:"PLAYING"}:e;case"HARD_DROP":if(e.state!=="PLAYING")return e;const n=tt(e.matrix,e.piece);return ge({...e,piece:n});case"MOVE_DOWN":if(e.state!=="PLAYING")return e;if(e.pendingClear){const[b,,v]=ze(e.matrix);return Pe({...e,matrix:b},b,v)}const c=J($e,e);return c.piece===e.piece?ge(c):c;case"TICK":if(e.state!=="PLAYING"&&!e.pendingClear)return e;if(e.pendingClear){const[b,,v]=ze(e.matrix);return Pe({...e,matrix:b},b,v)}const u=J($e,e);return u.piece===e.piece?ge(u):u;case"MOVE_LEFT":return J(St,e);case"MOVE_RIGHT":return J(Lt,e);case"FLIP_CLOCKWISE":return J(At,e);case"FLIP_COUNTERCLOCKWISE":return J(Nt,e);case"HOLD":if(e.state!=="PLAYING"||e.heldPiece&&!e.heldPiece.available||e.heldPiece&&!de(e.matrix,{...e.piece,piece:e.heldPiece.piece}))return e;const d=Te(e.queue),p=((r=e.heldPiece)==null?void 0:r.piece)??d.piece;return{...e,heldPiece:{piece:e.piece.piece,available:!1},piece:ke(p),queue:p===d.piece?d.queue:e.queue};default:throw new Error(`Unhandled action: ${t}`)}};function $t(e){return e.reduce((t,r,n)=>(Mt(r)&&t.push(n),t),[])}function Pe(e,t,r){const n=Te(e.queue),c=ke(n.piece);return{...e,state:de(t,c)?e.state:"LOST",matrix:t,piece:c,heldPiece:e.heldPiece?{...e.heldPiece,available:!0}:void 0,queue:n.queue,lines:e.lines+r,points:e.points+Gt(r),justCleared:[],pendingClear:!1}}const ge=e=>{const t=Rt(e.matrix,e.piece),r=$t(t);return r.length>0?{...e,matrix:t,justCleared:r,pendingClear:!0}:Pe(e,t,0)},Ge=100,Gt=e=>e===4?Ge*10:e*Ge,Ut={x:H.GAME_WIDTH/2-H.BLOCK_WIDTH/2,y:0},ke=e=>({position:Ut,piece:e,rotation:0}),J=(e,t)=>{if(t.state!=="PLAYING")return t;const r=e(t.matrix,t.piece);return r?{...t,piece:r}:t},Ce=()=>{const e=It(5),t=Te(e);return{state:"PAUSED",points:0,lines:0,matrix:Ct(),piece:ke(t.piece),heldPiece:void 0,queue:t.queue}};function Ht(e){let t=e.matrix;return t=ye(t,tt(e.matrix,e.piece),!0),ye(t,e.piece)}const pe=h.createContext(Ce()),Ft=x.div`
  display: grid;
  gap: 0;
`,it=({piece:e})=>{var c;const t=h.useMemo(()=>{const u=(e==null?void 0:e.rotation)??0;return(e?Oe(e.piece)[u]:void 0)??[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]},[e]),r=((c=t[0])==null?void 0:c.length)??0,n=t.length;return i.jsx(Ft,{style:{gridTemplateColumns:`repeat(${r}, var(--preview-size))`,gridTemplateRows:`repeat(${n}, var(--preview-size))`},className:"piece-view",children:t.flatMap((u,d)=>u.map((p,b)=>{const g=["game-block",p===1&&e?Je(e.piece):"",e?"piece-preview":""].filter(Boolean).join(" ");return i.jsx("div",{className:g},`${d}-${b}`)}))})};function Kt(){const{heldPiece:e}=h.useContext(pe),t=e!=null&&e.piece?{piece:e.piece,rotation:0}:void 0;return i.jsx(it,{piece:t})}const Wt=x.div`
  /* base block */
  width: var(--block-size);
  height: var(--block-size);
  box-sizing: border-box;
  border: 1px solid #333;
  border-radius: 4px;

  /* if preview (small queue), shrink it */
  ${({preview:e})=>e&&`
      width: var(--preview-size);
      height: var(--preview-size);
    `}

  /* ghost styling */
  ${({ghost:e})=>e&&`
      background-color: rgba(255,255,255,0.1);
      border: 1px dashed rgba(255,255,255,0.15);
      border-radius: 4px;
    `}

  /* cleared-line animation */
  ${({clearing:e})=>e&&`
      animation: flashOut 200ms ease-in-out forwards;
    `}
`;function ve({ghost:e,clearing:t,preview:r,className:n,...c}){return i.jsx(Wt,{ghost:e,clearing:t,preview:r,className:n,...c})}const qt=x.div`
  display: grid;
`;function Yt(){var u;const e=h.useContext(pe),t=Ht(e),r=e.justCleared??[],n=((u=t[0])==null?void 0:u.length)??0,c=t.length;return i.jsx(qt,{"data-testid":"gameboard",style:{gridTemplateColumns:`repeat(${n}, var(--block-size))`,gridTemplateRows:`repeat(${c}, var(--block-size))`},children:t.flatMap((d,p)=>d.map((b,v)=>{const g=r.includes(p);if(b===null)return i.jsx(ve,{clearing:g},`${p}-${v}`);if(b==="ghost")return i.jsx(ve,{ghost:!0,clearing:g,className:"ghost"},`${p}-${v}`);const P=Je(b);return i.jsx(ve,{className:P,clearing:g},`${p}-${v}`)}))})}function Bt(){const{queue:e}=h.useContext(pe);return i.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:e.queue.map((t,r)=>{const n={piece:t,rotation:0};return i.jsx(it,{piece:n},r)})})}var ae={exports:{}},Vt=ae.exports,Ue;function Jt(){return Ue||(Ue=1,function(e){(function(t){var r,n={},c={16:!1,18:!1,17:!1,91:!1},u="all",d={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},p={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},b=function(s){return p[s]||s.toUpperCase().charCodeAt(0)},v=[];for(r=1;r<20;r++)p["f"+r]=111+r;function g(s,a){for(var l=s.length;l--;)if(s[l]===a)return l;return-1}function P(s,a){if(s.length!=a.length)return!1;for(var l=0;l<s.length;l++)if(s[l]!==a[l])return!1;return!0}var O={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"};function T(s){for(r in c)c[r]=s[O[r]]}function R(s){var a,l,m,k,j,o;if(a=s.keyCode,g(v,a)==-1&&v.push(a),(a==93||a==224)&&(a=91),a in c){c[a]=!0;for(m in d)d[m]==a&&(_[m]=!0);return}if(T(s),!!_.filter.call(this,s)&&a in n){for(o=K(),k=0;k<n[a].length;k++)if(l=n[a][k],l.scope==o||l.scope=="all"){j=l.mods.length>0;for(m in c)(!c[m]&&g(l.mods,+m)>-1||c[m]&&g(l.mods,+m)==-1)&&(j=!1);(l.mods.length==0&&!c[16]&&!c[18]&&!c[17]&&!c[91]||j)&&l.method(s,l)===!1&&(s.preventDefault?s.preventDefault():s.returnValue=!1,s.stopPropagation&&s.stopPropagation(),s.cancelBubble&&(s.cancelBubble=!0))}}}function F(s){var a=s.keyCode,l,m=g(v,a);if(m>=0&&v.splice(m,1),(a==93||a==224)&&(a=91),a in c){c[a]=!1;for(l in d)d[l]==a&&(_[l]=!1)}}function Z(){for(r in c)c[r]=!1;for(r in d)_[r]=!1}function _(s,a,l){var m,k;m=L(s),l===void 0&&(l=a,a="all");for(var j=0;j<m.length;j++)k=[],s=m[j].split("+"),s.length>1&&(k=W(s),s=[s[s.length-1]]),s=s[0],s=b(s),s in n||(n[s]=[]),n[s].push({shortcut:m[j],scope:a,method:l,key:m[j],mods:k})}function S(s,a){var l,m,k=[],j,o,f;for(l=L(s),o=0;o<l.length;o++){if(m=l[o].split("+"),m.length>1&&(k=W(m),s=m[m.length-1]),s=b(s),a===void 0&&(a=K()),!n[s])return;for(j=0;j<n[s].length;j++)f=n[s][j],f.scope===a&&P(f.mods,k)&&(n[s][j]={})}}function z(s){return typeof s=="string"&&(s=b(s)),g(v,s)!=-1}function B(){return v.slice(0)}function C(s){var a=(s.target||s.srcElement).tagName;return!(a=="INPUT"||a=="SELECT"||a=="TEXTAREA")}for(r in d)_[r]=!1;function $(s){u=s||"all"}function K(){return u||"all"}function N(s){var a,l,m;for(a in n)for(l=n[a],m=0;m<l.length;)l[m].scope===s?l.splice(m,1):m++}function L(s){var a;return s=s.replace(/\s/g,""),a=s.split(","),a[a.length-1]==""&&(a[a.length-2]+=","),a}function W(s){for(var a=s.slice(0,s.length-1),l=0;l<a.length;l++)a[l]=d[a[l]];return a}function q(s,a,l){s.addEventListener?s.addEventListener(a,l,!1):s.attachEvent&&s.attachEvent("on"+a,function(){l(window.event)})}q(document,"keydown",function(s){R(s)}),q(document,"keyup",F),q(window,"focus",Z);var ne=t.key;function he(){var s=t.key;return t.key=ne,s}t.key=_,t.key.setScope=$,t.key.getScope=K,t.key.deleteScope=N,t.key.filter=C,t.key.isPressed=z,t.key.getPressedKeyCodes=B,t.key.noConflict=he,t.key.unbind=S,e.exports=_})(Vt)}(ae)),ae.exports}var Xt=Jt();const He=ut(Xt),X=[];let te=!1;function ot(e){e.shiftKey&&!te&&(te=!0,X.forEach(t=>t()))}function st(e){!e.shiftKey&&te&&(te=!1)}function Zt(){document.addEventListener("keydown",ot),document.addEventListener("keyup",st)}function Qt(){document.removeEventListener("keydown",ot),document.removeEventListener("keyup",st),te=!1,X.length=0}function er(e){X.includes(e)||X.push(e)}function tr(e){const t=X.indexOf(e);t!==-1&&X.splice(t,1)}function rr(e){h.useEffect(()=>(Zt(),er(e),()=>{tr(e),Qt()}),[e])}function nr(e,t){rr(()=>{const r=e.shift;r&&t(r)}),h.useEffect(()=>{const r={};for(const[n,c]of Object.entries(e)){if(n==="shift")continue;const u=()=>t(c);r[n]=u,He(n,u)}return()=>{for(const n of Object.keys(r))He.unbind(n)}},[e,t])}function ir(){const[e,t]=h.useReducer(zt,Ce()),r=Dt(e);return h.useEffect(()=>{if(e.state!=="PLAYING")return;const n=Math.pow(.8-(r-1)*.007,r-1)*1e3,c=window.setInterval(()=>t("TICK"),n);return()=>window.clearInterval(c)},[e.state,r]),h.useMemo(()=>({game:e,dispatch:t,level:r}),[e,t,r])}const or={down:"MOVE_DOWN",left:"MOVE_LEFT",right:"MOVE_RIGHT",space:"HARD_DROP",z:"FLIP_COUNTERCLOCKWISE",x:"FLIP_CLOCKWISE",up:"FLIP_CLOCKWISE",p:"TOGGLE_PAUSE",c:"HOLD",shift:"HOLD"};function sr(e){const{game:t,dispatch:r,level:n}=ir(),[c,u]=h.useState(e.credits??9999),d=e.manageCredits!==!1;nr(e.keyboardControls??or,r);const p=h.useMemo(()=>({pause:()=>r("PAUSE"),resume:()=>{d?c>0&&(u(b=>b-1),r("RESUME")):r("RESUME")},hold:()=>r("HOLD"),hardDrop:()=>r("HARD_DROP"),moveDown:()=>r("MOVE_DOWN"),moveLeft:()=>r("MOVE_LEFT"),moveRight:()=>r("MOVE_RIGHT"),flipClockwise:()=>r("FLIP_CLOCKWISE"),flipCounterclockwise:()=>r("FLIP_COUNTERCLOCKWISE"),restart:()=>r("RESTART")}),[r,c,d]);return i.jsx(pe.Provider,{value:t,children:e.children({HeldPiece:Kt,Gameboard:Yt,PieceQueue:Bt,points:t.points,linesCleared:t.lines,level:n,state:t.state,controller:p,credits:c})})}const cr=x.div`
  box-sizing: border-box;
  font-family: 'Montserrat';
  font-weight: 300;
  width: 100%;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: rgba(18, 13, 31, 0.95);
`,ar=x.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
`,lr=x.div`
  margin: 24px auto 0;
  width: 100%;
  padding: 0 1rem;
`,ur=x.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  transform: translateX(-5%);
`,ct=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`,fr=x(ct)`
  flex: 1;
  max-width: 200px;
`,dr=x(ct)`
  flex-shrink: 0;
  width: clamp(180px, 50vw, 240px);
`,pr=x.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 15%;
  flex: 1;
  max-width: 280px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`,Fe=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  /* panel title */
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: clamp(14px, 2vw, 20px);
    font-weight: 600;

    /* 4.55 : 1 contrast on the #1e192a / #211b30 cards */
    color: #c4c8ff;

    margin: 0;
  }
`,hr=x.div`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 10;

  @media (max-width: 768px) {
    display: none;
  }
`,xr=x.span`
  font-family: 'Courier New', monospace;
  font-size: clamp(20px, 5vw, 36px);
  min-width: 4ch;
  text-align: right;
  display: inline-block;
`,se=({children:e,count:t=4,...r})=>{let n=e.toString();for(;n.length<t;)n=`0${n}`;return i.jsx(xr,{...r,children:n})},le=x.hr`
  width: 100%;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  margin: 4px 0;
`,mr=x.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(16px, 2vw, 24px);
  color: #f0f0f0;
  padding: 1rem;
  background: rgba(40, 32, 62, 0.6);
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(4px);
  gap: 0.75rem;
`,ce=x.p`
  margin: 0;
  padding-top: 2px;
  font-size: clamp(14px, 2vw, 18px);
  font-weight: 600;
  text-transform: uppercase;

  color: #e2e4ff;
`,U=x.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.25rem;
`,br=({credits:e,points:t,linesCleared:r,level:n})=>i.jsxs(mr,{children:[i.jsx(U,{children:i.jsx(ce,{children:"Credits"})}),i.jsx(U,{children:i.jsx(se,{children:e})}),i.jsx(le,{}),i.jsx(U,{children:i.jsx(ce,{children:"Points"})}),i.jsx(U,{children:i.jsx(se,{"data-testid":"score",children:t})}),i.jsx(le,{}),i.jsx(U,{children:i.jsx(ce,{children:"Lines"})}),i.jsx(U,{children:i.jsx(se,{children:r})}),i.jsx(le,{}),i.jsx(U,{children:i.jsx(ce,{children:"Level"})}),i.jsx(U,{children:i.jsx(se,{children:n})})]}),Re=x.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(27, 19, 44, 0.95);
  padding: 1rem 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 90%;
`,gr=x(Re)`
  background: rgba(63, 129, 28, 0.5);
`,vr=x(Re)`
  background: rgba(176, 32, 32, 0.9);
  box-shadow: 0 0 16px rgba(176, 32, 32, 0.5);
`,we=x.h2`
  margin: 0;
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 400;
  color: #f0f0f0;
`,je=x.button.attrs({type:"button"})`
  margin-top: 24px;
  padding: 0.5rem 1.2rem;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(18px, 3vw, 24px);
  border-radius: 6px;
  background: #28203e;
  color: #f0f0f0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition:
    background 0.2s ease,
    transform 0.1s ease;

  &:hover {
    background: #3a2c5b;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.96);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 107, 198, 0.3);
    border-color: rgba(16, 16, 31, 0.3);
  }
`,wr=x.div`
  display: flex;
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  font-size: clamp(14px, 2vw, 18px);
  color: #f0f0f0;
  padding: 1rem;
  background: rgba(40, 32, 62, 0.4);
  border-radius: 12px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(4px);
  gap: 0.75rem;
  min-width: 220px;
`,jr=x.p`
  margin: 0;
  font-size: clamp(14px, 2vw, 16px);
  font-weight: 600;
  text-transform: uppercase;
  color: #aaa;
`,I=x.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`,M=x.span`
  font-family: 'Courier New', monospace;
  font-weight: bold;
  color: rgba(201, 205, 209, 0.85);
  min-width: 70px;
  text-align: left;
`,D=x.span`
  color: #ddd;
  text-align: left;
  flex: 1;
`,Er=()=>i.jsxs(wr,{children:[i.jsx(jr,{children:"Controls"}),i.jsx(le,{}),i.jsxs(I,{children:[i.jsx(M,{children:"← →"}),i.jsx(D,{children:"Move left / right"})]}),i.jsxs(I,{children:[i.jsx(M,{children:"↓"}),i.jsx(D,{children:"Soft drop"})]}),i.jsxs(I,{children:[i.jsx(M,{children:"↑"}),i.jsx(D,{children:"Rotate →"})]}),i.jsxs(I,{children:[i.jsx(M,{children:"Z"}),i.jsx(D,{children:"Rotate ←"})]}),i.jsxs(I,{children:[i.jsx(M,{children:"Space"}),i.jsx(D,{children:"Hard drop"})]}),i.jsxs(I,{children:[i.jsx(M,{children:"Shift"}),i.jsx(D,{children:"Hold piece"})]}),i.jsxs(I,{children:[i.jsx(M,{children:"P"}),i.jsx(D,{children:"Pause / Resume"})]}),i.jsxs(I,{children:[i.jsx(M,{children:"M"}),i.jsx(D,{children:"Toggle sound"})]}),i.jsxs(I,{children:[i.jsx(M,{children:"Enter"}),i.jsx(D,{children:"Start / Restart"})]})]});class yr extends h.Component{constructor(t){super(t),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(t,r){console.error("🧨 ErrorBoundary caught an error:",t,r)}render(){return this.state.hasError?i.jsxs("div",{style:{color:"#fff",background:"#2a1e3a",padding:"1rem",borderRadius:"8px",textAlign:"center",maxWidth:"480px",margin:"2rem auto"},children:[i.jsx("h2",{children:"Something went wrong in the Tetris engine."}),i.jsx("p",{children:"Try reloading or restarting the game."})]}):this.props.children}}const Pr=x.createGlobalStyle`
  /* —————————————————————————————
     Variables & resets from tetris.css
  ————————————————————————————— */
  :root {
    --block-size: clamp(14px, 4vw, 28px);
    --preview-size: clamp(12px, 3vw, 18px);
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    background: #120d1f;
    color: #f0f0f0;
  }

  /* —————————————————————————————
     Game-board / preview block styles
  ————————————————————————————— */
  .game-block {
    margin: 0;
    aspect-ratio: 1/1;
    padding: 0;
    width: var(--block-size);
    height: var(--block-size);
    border: 0.1px solid rgba(65, 52, 78, 0.35);
    background-color: rgba(27, 19, 44, 0.18);
    border-radius: 4px;
  }

  .piece-view {
    margin-bottom: 12px;
  }
  .piece-view:first-child {
    margin-top: 4px;
  }
  .piece-view .game-block {
    width: var(--preview-size);
    height: var(--preview-size);
  }

  /* —————————————————————————————
     Tetromino colors
  ————————————————————————————— */
  .piece-i { background-color: #42c8f4; }
  .piece-j { background-color: #5d9bf5; }
  .piece-l { background-color: #f2b63c; }
  .piece-o { background-color: #e7d84b; }
  .piece-s { background-color: #84d686; }
  .piece-t { background-color: #bb84e8; }
  .piece-z { background-color: #f36f6f; }

  /* —————————————————————————————
     Cleared-line flash animation
  ————————————————————————————— */
  @keyframes flashOut {
    0%   { background-color: #ffffff; opacity: 1; }
    100% { background-color: transparent; opacity: 0.3; }
  }
  .cleared-line {
    animation: flashOut 200ms ease-in-out forwards;
  }
`,at=h.forwardRef(({credits:e,manageCredits:t,showModals:r=!0,soundEnabled:n=!0,showControlsLegend:c=!0,onGameOver:u,onScoreChange:d,onLevelChange:p},b)=>{const{isMuted:v,isPlaying:g,toggleMute:P,togglePlay:O}=Ke(),T=h.useRef(),R=h.useRef(!1);return i.jsxs(i.Fragment,{children:[i.jsx(Pr,{}),i.jsx(cr,{children:i.jsx(ar,{children:i.jsxs(lr,{"data-testid":"tetris2-root",children:[n&&i.jsx(Tt,{}),i.jsx(yr,{children:i.jsx(sr,{credits:e,manageCredits:t,children:({Gameboard:F,HeldPiece:Z,PieceQueue:_,controller:S,points:z,linesCleared:B,state:C,level:$,credits:K})=>{const N=()=>{!g&&n&&O(),v&&n&&P(),S.resume(),R.current=!0};return T.current=N,h.useImperativeHandle(b,()=>({start:()=>{var L;return(L=T.current)==null?void 0:L.call(T)},restart:()=>S.restart()})),h.useEffect(()=>{d==null||d(z)},[z]),h.useEffect(()=>{p==null||p($)},[$]),h.useEffect(()=>{C==="LOST"&&(u==null||u())},[C]),T.current=N,h.useEffect(()=>{const L=W=>{W.key==="Enter"&&(C==="PAUSED"&&R.current?S.resume():C==="LOST"&&r?(S.restart(),R.current=!1,!g&&n&&O(),v&&n&&P()):!R.current&&C==="PAUSED"&&r&&N()),W.key.toLowerCase()==="m"&&P()};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[C,S,n,v,g]),i.jsxs(i.Fragment,{children:[i.jsxs(ur,{style:{opacity:C==="PLAYING"?1:.5},children:[i.jsxs(pr,{children:[i.jsx(br,{credits:K,points:z,linesCleared:B,level:$}),i.jsxs(Fe,{children:[i.jsx("h1",{children:"HOLD"}),i.jsx(Z,{})]})]}),i.jsx(dr,{children:i.jsx(F,{})}),i.jsx(fr,{children:i.jsxs(Fe,{children:[i.jsx("h1",{children:"NEXT"}),i.jsx(_,{})]})})]}),c&&i.jsx(hr,{children:i.jsx(Er,{})}),r&&C==="PAUSED"&&(R.current?i.jsxs(Re,{children:[i.jsx(we,{children:"Paused"})," ",i.jsx(je,{"data-testid":"resume-btn",onClick:S.resume,children:"Resume"})]}):i.jsxs(gr,{children:[i.jsx(we,{children:"Start Game"})," ",i.jsx(je,{"data-testid":"start-btn",onClick:N,children:"Play"})]})),r&&C==="LOST"&&i.jsxs(vr,{"data-testid":"popup-gameover",children:[i.jsx(we,{children:"Game Over"}),i.jsxs("div",{style:{marginTop:"1rem",textAlign:"left",fontSize:"clamp(14px, 2vw, 26px)",color:"#ddd"},children:[i.jsxs("p",{children:[i.jsx("strong",{children:"Level:"})," ",$]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Lines:"})," ",B]}),i.jsxs("p",{children:[i.jsx("strong",{children:"Points:"})," ",z]})]}),i.jsx(je,{"data-testid":"restart-btn",onClick:()=>{S.restart(),R.current=!1,!g&&n&&O(),v&&n&&P()},children:"Restart"})]})]})}})})]})})})]})});at.displayName="Tetris2";exports.Tetris2=at;
