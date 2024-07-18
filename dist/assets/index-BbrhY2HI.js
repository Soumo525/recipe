function FC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function jC(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var xy={exports:{}},ru={},Ny={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),BC=Symbol.for("react.portal"),zC=Symbol.for("react.fragment"),VC=Symbol.for("react.strict_mode"),$C=Symbol.for("react.profiler"),HC=Symbol.for("react.provider"),WC=Symbol.for("react.context"),GC=Symbol.for("react.forward_ref"),KC=Symbol.for("react.suspense"),qC=Symbol.for("react.memo"),YC=Symbol.for("react.lazy"),Ag=Symbol.iterator;function QC(t){return t===null||typeof t!="object"?null:(t=Ag&&t[Ag]||t["@@iterator"],typeof t=="function"?t:null)}var Py={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ay=Object.assign,Oy={};function Ji(t,e,n){this.props=t,this.context=e,this.refs=Oy,this.updater=n||Py}Ji.prototype.isReactComponent={};Ji.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ji.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function by(){}by.prototype=Ji.prototype;function Rd(t,e,n){this.props=t,this.context=e,this.refs=Oy,this.updater=n||Py}var xd=Rd.prototype=new by;xd.constructor=Rd;Ay(xd,Ji.prototype);xd.isPureReactComponent=!0;var Og=Array.isArray,Dy=Object.prototype.hasOwnProperty,Nd={current:null},Ly={key:!0,ref:!0,__self:!0,__source:!0};function My(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Dy.call(e,r)&&!Ly.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),h=0;h<a;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:jo,type:t,key:s,ref:o,props:i,_owner:Nd.current}}function XC(t,e){return{$$typeof:jo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Pd(t){return typeof t=="object"&&t!==null&&t.$$typeof===jo}function JC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var bg=/\/+/g;function hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?JC(""+t.key):e.toString(36)}function Hl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case jo:case BC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+hc(o,0):r,Og(i)?(n="",t!=null&&(n=t.replace(bg,"$&/")+"/"),Hl(i,e,n,"",function(h){return h})):i!=null&&(Pd(i)&&(i=XC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(bg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Og(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+hc(s,a);o+=Hl(s,e,n,u,i)}else if(u=QC(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+hc(s,a++),o+=Hl(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function wl(t,e,n){if(t==null)return t;var r=[],i=0;return Hl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function ZC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var lt={current:null},Wl={transition:null},eI={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Wl,ReactCurrentOwner:Nd};function Uy(){throw Error("act(...) is not supported in production builds of React.")}Y.Children={map:wl,forEach:function(t,e,n){wl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return wl(t,function(){e++}),e},toArray:function(t){return wl(t,function(e){return e})||[]},only:function(t){if(!Pd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=Ji;Y.Fragment=zC;Y.Profiler=$C;Y.PureComponent=Rd;Y.StrictMode=VC;Y.Suspense=KC;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eI;Y.act=Uy;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ay({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Nd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)Dy.call(e,u)&&!Ly.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var h=0;h<u;h++)a[h]=arguments[h+2];r.children=a}return{$$typeof:jo,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:WC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:HC,_context:t},t.Consumer=t};Y.createElement=My;Y.createFactory=function(t){var e=My.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:GC,render:t}};Y.isValidElement=Pd;Y.lazy=function(t){return{$$typeof:YC,_payload:{_status:-1,_result:t},_init:ZC}};Y.memo=function(t,e){return{$$typeof:qC,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=Wl.transition;Wl.transition={};try{t()}finally{Wl.transition=e}};Y.unstable_act=Uy;Y.useCallback=function(t,e){return lt.current.useCallback(t,e)};Y.useContext=function(t){return lt.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return lt.current.useDeferredValue(t)};Y.useEffect=function(t,e){return lt.current.useEffect(t,e)};Y.useId=function(){return lt.current.useId()};Y.useImperativeHandle=function(t,e,n){return lt.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return lt.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return lt.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return lt.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return lt.current.useReducer(t,e,n)};Y.useRef=function(t){return lt.current.useRef(t)};Y.useState=function(t){return lt.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return lt.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return lt.current.useTransition()};Y.version="18.3.1";Ny.exports=Y;var M=Ny.exports;const Fy=jC(M),tI=FC({__proto__:null,default:Fy},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nI=M,rI=Symbol.for("react.element"),iI=Symbol.for("react.fragment"),sI=Object.prototype.hasOwnProperty,oI=nI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lI={key:!0,ref:!0,__self:!0,__source:!0};function jy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)sI.call(e,r)&&!lI.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:rI,type:t,key:s,ref:o,props:i,_owner:oI.current}}ru.Fragment=iI;ru.jsx=jy;ru.jsxs=jy;xy.exports=ru;var A=xy.exports,oh={},By={exports:{}},Tt={},zy={exports:{}},Vy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,W){var G=z.length;z.push(W);e:for(;0<G;){var fe=G-1>>>1,re=z[fe];if(0<i(re,W))z[fe]=W,z[G]=re,G=fe;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var W=z[0],G=z.pop();if(G!==W){z[0]=G;e:for(var fe=0,re=z.length,Ee=re>>>1;fe<Ee;){var an=2*(fe+1)-1,un=z[an],cn=an+1,hn=z[cn];if(0>i(un,G))cn<re&&0>i(hn,un)?(z[fe]=hn,z[cn]=G,fe=cn):(z[fe]=un,z[an]=G,fe=an);else if(cn<re&&0>i(hn,G))z[fe]=hn,z[cn]=G,fe=cn;else break e}}return W}function i(z,W){var G=z.sortIndex-W.sortIndex;return G!==0?G:z.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],h=[],p=1,f=null,g=3,T=!1,k=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(z){for(var W=n(h);W!==null;){if(W.callback===null)r(h);else if(W.startTime<=z)r(h),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(h)}}function D(z){if(N=!1,I(z),!k)if(n(u)!==null)k=!0,us(U);else{var W=n(h);W!==null&&ln(D,W.startTime-z)}}function U(z,W){k=!1,N&&(N=!1,v(_),_=-1),T=!0;var G=g;try{for(I(W),f=n(u);f!==null&&(!(f.expirationTime>W)||z&&!R());){var fe=f.callback;if(typeof fe=="function"){f.callback=null,g=f.priorityLevel;var re=fe(f.expirationTime<=W);W=t.unstable_now(),typeof re=="function"?f.callback=re:f===n(u)&&r(u),I(W)}else r(u);f=n(u)}if(f!==null)var Ee=!0;else{var an=n(h);an!==null&&ln(D,an.startTime-W),Ee=!1}return Ee}finally{f=null,g=G,T=!1}}var B=!1,E=null,_=-1,w=5,S=-1;function R(){return!(t.unstable_now()-S<w)}function P(){if(E!==null){var z=t.unstable_now();S=z;var W=!0;try{W=E(!0,z)}finally{W?C():(B=!1,E=null)}}else B=!1}var C;if(typeof y=="function")C=function(){y(P)};else if(typeof MessageChannel<"u"){var Rt=new MessageChannel,Ir=Rt.port2;Rt.port1.onmessage=P,C=function(){Ir.postMessage(null)}}else C=function(){O(P,0)};function us(z){E=z,B||(B=!0,C())}function ln(z,W){_=O(function(){z(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){k||T||(k=!0,us(U))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(g){case 1:case 2:case 3:var W=3;break;default:W=g}var G=g;g=W;try{return z()}finally{g=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,W){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var G=g;g=z;try{return W()}finally{g=G}},t.unstable_scheduleCallback=function(z,W,G){var fe=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?fe+G:fe):G=fe,z){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=G+re,z={id:p++,callback:W,priorityLevel:z,startTime:G,expirationTime:re,sortIndex:-1},G>fe?(z.sortIndex=G,e(h,z),n(u)===null&&z===n(h)&&(N?(v(_),_=-1):N=!0,ln(D,G-fe))):(z.sortIndex=re,e(u,z),k||T||(k=!0,us(U))),z},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(z){var W=g;return function(){var G=g;g=W;try{return z.apply(this,arguments)}finally{g=G}}}})(Vy);zy.exports=Vy;var aI=zy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uI=M,It=aI;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $y=new Set,oo={};function ti(t,e){Bi(t,e),Bi(t+"Capture",e)}function Bi(t,e){for(oo[t]=e,t=0;t<e.length;t++)$y.add(e[t])}var Tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lh=Object.prototype.hasOwnProperty,cI=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Dg={},Lg={};function hI(t){return lh.call(Lg,t)?!0:lh.call(Dg,t)?!1:cI.test(t)?Lg[t]=!0:(Dg[t]=!0,!1)}function dI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function fI(t,e,n,r){if(e===null||typeof e>"u"||dI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ad=/[\-:]([a-z])/g;function Od(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ad,Od);Be[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ad,Od);Be[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ad,Od);Be[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function bd(t,e,n,r){var i=Be.hasOwnProperty(e)?Be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(fI(e,n,i,r)&&(n=null),r||i===null?hI(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var An=uI.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,El=Symbol.for("react.element"),pi=Symbol.for("react.portal"),gi=Symbol.for("react.fragment"),Dd=Symbol.for("react.strict_mode"),ah=Symbol.for("react.profiler"),Hy=Symbol.for("react.provider"),Wy=Symbol.for("react.context"),Ld=Symbol.for("react.forward_ref"),uh=Symbol.for("react.suspense"),ch=Symbol.for("react.suspense_list"),Md=Symbol.for("react.memo"),Bn=Symbol.for("react.lazy"),Gy=Symbol.for("react.offscreen"),Mg=Symbol.iterator;function Is(t){return t===null||typeof t!="object"?null:(t=Mg&&t[Mg]||t["@@iterator"],typeof t=="function"?t:null)}var me=Object.assign,dc;function Ms(t){if(dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dc=e&&e[1]||""}return`
`+dc+t}var fc=!1;function pc(t,e){if(!t||fc)return"";fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ms(t):""}function pI(t){switch(t.tag){case 5:return Ms(t.type);case 16:return Ms("Lazy");case 13:return Ms("Suspense");case 19:return Ms("SuspenseList");case 0:case 2:case 15:return t=pc(t.type,!1),t;case 11:return t=pc(t.type.render,!1),t;case 1:return t=pc(t.type,!0),t;default:return""}}function hh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gi:return"Fragment";case pi:return"Portal";case ah:return"Profiler";case Dd:return"StrictMode";case uh:return"Suspense";case ch:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wy:return(t.displayName||"Context")+".Consumer";case Hy:return(t._context.displayName||"Context")+".Provider";case Ld:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Md:return e=t.displayName||null,e!==null?e:hh(t.type)||"Memo";case Bn:e=t._payload,t=t._init;try{return hh(t(e))}catch{}}return null}function gI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hh(e);case 8:return e===Dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function hr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ky(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mI(t){var e=Ky(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Cl(t){t._valueTracker||(t._valueTracker=mI(t))}function qy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Ky(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function la(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dh(t,e){var n=e.checked;return me({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ug(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=hr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Yy(t,e){e=e.checked,e!=null&&bd(t,"checked",e,!1)}function fh(t,e){Yy(t,e);var n=hr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ph(t,e.type,n):e.hasOwnProperty("defaultValue")&&ph(t,e.type,hr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ph(t,e,n){(e!=="number"||la(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Us=Array.isArray;function xi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+hr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function gh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return me({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(Us(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:hr(n)}}function Qy(t,e){var n=hr(e.value),r=hr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Bg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Il,Jy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Il=Il||document.createElement("div"),Il.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Il.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function lo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Vs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_I=["Webkit","ms","Moz","O"];Object.keys(Vs).forEach(function(t){_I.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Vs[e]=Vs[t]})});function Zy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Vs.hasOwnProperty(t)&&Vs[t]?(""+e).trim():e+"px"}function ev(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var yI=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _h(t,e){if(e){if(yI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function yh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vh=null;function Ud(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wh=null,Ni=null,Pi=null;function zg(t){if(t=Vo(t)){if(typeof wh!="function")throw Error(L(280));var e=t.stateNode;e&&(e=au(e),wh(t.stateNode,t.type,e))}}function tv(t){Ni?Pi?Pi.push(t):Pi=[t]:Ni=t}function nv(){if(Ni){var t=Ni,e=Pi;if(Pi=Ni=null,zg(t),e)for(t=0;t<e.length;t++)zg(e[t])}}function rv(t,e){return t(e)}function iv(){}var gc=!1;function sv(t,e,n){if(gc)return t(e,n);gc=!0;try{return rv(t,e,n)}finally{gc=!1,(Ni!==null||Pi!==null)&&(iv(),nv())}}function ao(t,e){var n=t.stateNode;if(n===null)return null;var r=au(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Eh=!1;if(Tn)try{var Ss={};Object.defineProperty(Ss,"passive",{get:function(){Eh=!0}}),window.addEventListener("test",Ss,Ss),window.removeEventListener("test",Ss,Ss)}catch{Eh=!1}function vI(t,e,n,r,i,s,o,a,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var $s=!1,aa=null,ua=!1,Ch=null,wI={onError:function(t){$s=!0,aa=t}};function EI(t,e,n,r,i,s,o,a,u){$s=!1,aa=null,vI.apply(wI,arguments)}function CI(t,e,n,r,i,s,o,a,u){if(EI.apply(this,arguments),$s){if($s){var h=aa;$s=!1,aa=null}else throw Error(L(198));ua||(ua=!0,Ch=h)}}function ni(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ov(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vg(t){if(ni(t)!==t)throw Error(L(188))}function II(t){var e=t.alternate;if(!e){if(e=ni(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vg(i),t;if(s===r)return Vg(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function lv(t){return t=II(t),t!==null?av(t):null}function av(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=av(t);if(e!==null)return e;t=t.sibling}return null}var uv=It.unstable_scheduleCallback,$g=It.unstable_cancelCallback,SI=It.unstable_shouldYield,TI=It.unstable_requestPaint,Ie=It.unstable_now,kI=It.unstable_getCurrentPriorityLevel,Fd=It.unstable_ImmediatePriority,cv=It.unstable_UserBlockingPriority,ca=It.unstable_NormalPriority,RI=It.unstable_LowPriority,hv=It.unstable_IdlePriority,iu=null,tn=null;function xI(t){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(iu,t,void 0,(t.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:AI,NI=Math.log,PI=Math.LN2;function AI(t){return t>>>=0,t===0?32:31-(NI(t)/PI|0)|0}var Sl=64,Tl=4194304;function Fs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ha(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Fs(a):(s&=o,s!==0&&(r=Fs(s)))}else o=n&~i,o!==0?r=Fs(o):s!==0&&(r=Fs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Wt(e),i=1<<n,r|=t[n],e&=~i;return r}function OI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wt(s),a=1<<o,u=i[o];u===-1?(!(a&n)||a&r)&&(i[o]=OI(a,e)):u<=e&&(t.expiredLanes|=a),s&=~a}}function Ih(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function dv(){var t=Sl;return Sl<<=1,!(Sl&4194240)&&(Sl=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wt(e),t[e]=n}function DI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function jd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function fv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pv,Bd,gv,mv,_v,Sh=!1,kl=[],Jn=null,Zn=null,er=null,uo=new Map,co=new Map,Vn=[],LI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hg(t,e){switch(t){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":uo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":co.delete(e.pointerId)}}function Ts(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Vo(e),e!==null&&Bd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function MI(t,e,n,r,i){switch(e){case"focusin":return Jn=Ts(Jn,t,e,n,r,i),!0;case"dragenter":return Zn=Ts(Zn,t,e,n,r,i),!0;case"mouseover":return er=Ts(er,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return uo.set(s,Ts(uo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,co.set(s,Ts(co.get(s)||null,t,e,n,r,i)),!0}return!1}function yv(t){var e=Or(t.target);if(e!==null){var n=ni(e);if(n!==null){if(e=n.tag,e===13){if(e=ov(n),e!==null){t.blockedOn=e,_v(t.priority,function(){gv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Gl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Th(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);vh=r,n.target.dispatchEvent(r),vh=null}else return e=Vo(n),e!==null&&Bd(e),t.blockedOn=n,!1;e.shift()}return!0}function Wg(t,e,n){Gl(t)&&n.delete(e)}function UI(){Sh=!1,Jn!==null&&Gl(Jn)&&(Jn=null),Zn!==null&&Gl(Zn)&&(Zn=null),er!==null&&Gl(er)&&(er=null),uo.forEach(Wg),co.forEach(Wg)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Sh||(Sh=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,UI)))}function ho(t){function e(i){return ks(i,t)}if(0<kl.length){ks(kl[0],t);for(var n=1;n<kl.length;n++){var r=kl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jn!==null&&ks(Jn,t),Zn!==null&&ks(Zn,t),er!==null&&ks(er,t),uo.forEach(e),co.forEach(e),n=0;n<Vn.length;n++)r=Vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Vn.length&&(n=Vn[0],n.blockedOn===null);)yv(n),n.blockedOn===null&&Vn.shift()}var Ai=An.ReactCurrentBatchConfig,da=!0;function FI(t,e,n,r){var i=ne,s=Ai.transition;Ai.transition=null;try{ne=1,zd(t,e,n,r)}finally{ne=i,Ai.transition=s}}function jI(t,e,n,r){var i=ne,s=Ai.transition;Ai.transition=null;try{ne=4,zd(t,e,n,r)}finally{ne=i,Ai.transition=s}}function zd(t,e,n,r){if(da){var i=Th(t,e,n,r);if(i===null)kc(t,e,r,fa,n),Hg(t,r);else if(MI(i,t,e,n,r))r.stopPropagation();else if(Hg(t,r),e&4&&-1<LI.indexOf(t)){for(;i!==null;){var s=Vo(i);if(s!==null&&pv(s),s=Th(t,e,n,r),s===null&&kc(t,e,r,fa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else kc(t,e,r,null,n)}}var fa=null;function Th(t,e,n,r){if(fa=null,t=Ud(r),t=Or(t),t!==null)if(e=ni(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ov(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return fa=t,null}function vv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(kI()){case Fd:return 1;case cv:return 4;case ca:case RI:return 16;case hv:return 536870912;default:return 16}default:return 16}}var Yn=null,Vd=null,Kl=null;function wv(){if(Kl)return Kl;var t,e=Vd,n=e.length,r,i="value"in Yn?Yn.value:Yn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Kl=i.slice(t,1<r?1-r:void 0)}function ql(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rl(){return!0}function Gg(){return!1}function kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rl:Gg,this.isPropagationStopped=Gg,this}return me(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),e}var Zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$d=kt(Zi),zo=me({},Zi,{view:0,detail:0}),BI=kt(zo),_c,yc,Rs,su=me({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Rs&&(Rs&&t.type==="mousemove"?(_c=t.screenX-Rs.screenX,yc=t.screenY-Rs.screenY):yc=_c=0,Rs=t),_c)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),Kg=kt(su),zI=me({},su,{dataTransfer:0}),VI=kt(zI),$I=me({},zo,{relatedTarget:0}),vc=kt($I),HI=me({},Zi,{animationName:0,elapsedTime:0,pseudoElement:0}),WI=kt(HI),GI=me({},Zi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),KI=kt(GI),qI=me({},Zi,{data:0}),qg=kt(qI),YI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=XI[t])?!!e[t]:!1}function Hd(){return JI}var ZI=me({},zo,{key:function(t){if(t.key){var e=YI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ql(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?QI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hd,charCode:function(t){return t.type==="keypress"?ql(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ql(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),eS=kt(ZI),tS=me({},su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yg=kt(tS),nS=me({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hd}),rS=kt(nS),iS=me({},Zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),sS=kt(iS),oS=me({},su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lS=kt(oS),aS=[9,13,27,32],Wd=Tn&&"CompositionEvent"in window,Hs=null;Tn&&"documentMode"in document&&(Hs=document.documentMode);var uS=Tn&&"TextEvent"in window&&!Hs,Ev=Tn&&(!Wd||Hs&&8<Hs&&11>=Hs),Qg=" ",Xg=!1;function Cv(t,e){switch(t){case"keyup":return aS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var mi=!1;function cS(t,e){switch(t){case"compositionend":return Iv(e);case"keypress":return e.which!==32?null:(Xg=!0,Qg);case"textInput":return t=e.data,t===Qg&&Xg?null:t;default:return null}}function hS(t,e){if(mi)return t==="compositionend"||!Wd&&Cv(t,e)?(t=wv(),Kl=Vd=Yn=null,mi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ev&&e.locale!=="ko"?null:e.data;default:return null}}var dS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dS[t.type]:e==="textarea"}function Sv(t,e,n,r){tv(r),e=pa(e,"onChange"),0<e.length&&(n=new $d("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ws=null,fo=null;function fS(t){Lv(t,0)}function ou(t){var e=vi(t);if(qy(e))return t}function pS(t,e){if(t==="change")return e}var Tv=!1;if(Tn){var wc;if(Tn){var Ec="oninput"in document;if(!Ec){var Zg=document.createElement("div");Zg.setAttribute("oninput","return;"),Ec=typeof Zg.oninput=="function"}wc=Ec}else wc=!1;Tv=wc&&(!document.documentMode||9<document.documentMode)}function em(){Ws&&(Ws.detachEvent("onpropertychange",kv),fo=Ws=null)}function kv(t){if(t.propertyName==="value"&&ou(fo)){var e=[];Sv(e,fo,t,Ud(t)),sv(fS,e)}}function gS(t,e,n){t==="focusin"?(em(),Ws=e,fo=n,Ws.attachEvent("onpropertychange",kv)):t==="focusout"&&em()}function mS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ou(fo)}function _S(t,e){if(t==="click")return ou(e)}function yS(t,e){if(t==="input"||t==="change")return ou(e)}function vS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qt=typeof Object.is=="function"?Object.is:vS;function po(t,e){if(qt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!lh.call(e,i)||!qt(t[i],e[i]))return!1}return!0}function tm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function nm(t,e){var n=tm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tm(n)}}function Rv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Rv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xv(){for(var t=window,e=la();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=la(t.document)}return e}function Gd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wS(t){var e=xv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Rv(n.ownerDocument.documentElement,n)){if(r!==null&&Gd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=nm(n,s);var o=nm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ES=Tn&&"documentMode"in document&&11>=document.documentMode,_i=null,kh=null,Gs=null,Rh=!1;function rm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rh||_i==null||_i!==la(r)||(r=_i,"selectionStart"in r&&Gd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gs&&po(Gs,r)||(Gs=r,r=pa(kh,"onSelect"),0<r.length&&(e=new $d("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_i)))}function xl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var yi={animationend:xl("Animation","AnimationEnd"),animationiteration:xl("Animation","AnimationIteration"),animationstart:xl("Animation","AnimationStart"),transitionend:xl("Transition","TransitionEnd")},Cc={},Nv={};Tn&&(Nv=document.createElement("div").style,"AnimationEvent"in window||(delete yi.animationend.animation,delete yi.animationiteration.animation,delete yi.animationstart.animation),"TransitionEvent"in window||delete yi.transitionend.transition);function lu(t){if(Cc[t])return Cc[t];if(!yi[t])return t;var e=yi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Nv)return Cc[t]=e[n];return t}var Pv=lu("animationend"),Av=lu("animationiteration"),Ov=lu("animationstart"),bv=lu("transitionend"),Dv=new Map,im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,e){Dv.set(t,e),ti(e,[t])}for(var Ic=0;Ic<im.length;Ic++){var Sc=im[Ic],CS=Sc.toLowerCase(),IS=Sc[0].toUpperCase()+Sc.slice(1);mr(CS,"on"+IS)}mr(Pv,"onAnimationEnd");mr(Av,"onAnimationIteration");mr(Ov,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(bv,"onTransitionEnd");Bi("onMouseEnter",["mouseout","mouseover"]);Bi("onMouseLeave",["mouseout","mouseover"]);Bi("onPointerEnter",["pointerout","pointerover"]);Bi("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SS=new Set("cancel close invalid load scroll toggle".split(" ").concat(js));function sm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,CI(r,e,void 0,t),t.currentTarget=null}function Lv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,h=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;sm(i,a,h),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,h=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;sm(i,a,h),s=u}}}if(ua)throw t=Ch,ua=!1,Ch=null,t}function ue(t,e){var n=e[Oh];n===void 0&&(n=e[Oh]=new Set);var r=t+"__bubble";n.has(r)||(Mv(e,t,2,!1),n.add(r))}function Tc(t,e,n){var r=0;e&&(r|=4),Mv(n,t,r,e)}var Nl="_reactListening"+Math.random().toString(36).slice(2);function go(t){if(!t[Nl]){t[Nl]=!0,$y.forEach(function(n){n!=="selectionchange"&&(SS.has(n)||Tc(n,!1,t),Tc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Nl]||(e[Nl]=!0,Tc("selectionchange",!1,e))}}function Mv(t,e,n,r){switch(vv(e)){case 1:var i=FI;break;case 4:i=jI;break;default:i=zd}n=i.bind(null,e,n,t),i=void 0,!Eh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function kc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Or(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}sv(function(){var h=s,p=Ud(n),f=[];e:{var g=Dv.get(t);if(g!==void 0){var T=$d,k=t;switch(t){case"keypress":if(ql(n)===0)break e;case"keydown":case"keyup":T=eS;break;case"focusin":k="focus",T=vc;break;case"focusout":k="blur",T=vc;break;case"beforeblur":case"afterblur":T=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Kg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=VI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=rS;break;case Pv:case Av:case Ov:T=WI;break;case bv:T=sS;break;case"scroll":T=BI;break;case"wheel":T=lS;break;case"copy":case"cut":case"paste":T=KI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Yg}var N=(e&4)!==0,O=!N&&t==="scroll",v=N?g!==null?g+"Capture":null:g;N=[];for(var y=h,I;y!==null;){I=y;var D=I.stateNode;if(I.tag===5&&D!==null&&(I=D,v!==null&&(D=ao(y,v),D!=null&&N.push(mo(y,D,I)))),O)break;y=y.return}0<N.length&&(g=new T(g,k,null,n,p),f.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",g&&n!==vh&&(k=n.relatedTarget||n.fromElement)&&(Or(k)||k[kn]))break e;if((T||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,T?(k=n.relatedTarget||n.toElement,T=h,k=k?Or(k):null,k!==null&&(O=ni(k),k!==O||k.tag!==5&&k.tag!==6)&&(k=null)):(T=null,k=h),T!==k)){if(N=Kg,D="onMouseLeave",v="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(N=Yg,D="onPointerLeave",v="onPointerEnter",y="pointer"),O=T==null?g:vi(T),I=k==null?g:vi(k),g=new N(D,y+"leave",T,n,p),g.target=O,g.relatedTarget=I,D=null,Or(p)===h&&(N=new N(v,y+"enter",k,n,p),N.target=I,N.relatedTarget=O,D=N),O=D,T&&k)t:{for(N=T,v=k,y=0,I=N;I;I=di(I))y++;for(I=0,D=v;D;D=di(D))I++;for(;0<y-I;)N=di(N),y--;for(;0<I-y;)v=di(v),I--;for(;y--;){if(N===v||v!==null&&N===v.alternate)break t;N=di(N),v=di(v)}N=null}else N=null;T!==null&&om(f,g,T,N,!1),k!==null&&O!==null&&om(f,O,k,N,!0)}}e:{if(g=h?vi(h):window,T=g.nodeName&&g.nodeName.toLowerCase(),T==="select"||T==="input"&&g.type==="file")var U=pS;else if(Jg(g))if(Tv)U=yS;else{U=mS;var B=gS}else(T=g.nodeName)&&T.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(U=_S);if(U&&(U=U(t,h))){Sv(f,U,n,p);break e}B&&B(t,g,h),t==="focusout"&&(B=g._wrapperState)&&B.controlled&&g.type==="number"&&ph(g,"number",g.value)}switch(B=h?vi(h):window,t){case"focusin":(Jg(B)||B.contentEditable==="true")&&(_i=B,kh=h,Gs=null);break;case"focusout":Gs=kh=_i=null;break;case"mousedown":Rh=!0;break;case"contextmenu":case"mouseup":case"dragend":Rh=!1,rm(f,n,p);break;case"selectionchange":if(ES)break;case"keydown":case"keyup":rm(f,n,p)}var E;if(Wd)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else mi?Cv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Ev&&n.locale!=="ko"&&(mi||_!=="onCompositionStart"?_==="onCompositionEnd"&&mi&&(E=wv()):(Yn=p,Vd="value"in Yn?Yn.value:Yn.textContent,mi=!0)),B=pa(h,_),0<B.length&&(_=new qg(_,t,null,n,p),f.push({event:_,listeners:B}),E?_.data=E:(E=Iv(n),E!==null&&(_.data=E)))),(E=uS?cS(t,n):hS(t,n))&&(h=pa(h,"onBeforeInput"),0<h.length&&(p=new qg("onBeforeInput","beforeinput",null,n,p),f.push({event:p,listeners:h}),p.data=E))}Lv(f,e)})}function mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function pa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ao(t,n),s!=null&&r.unshift(mo(t,s,i)),s=ao(t,e),s!=null&&r.push(mo(t,s,i))),t=t.return}return r}function di(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function om(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,h=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&h!==null&&(a=h,i?(u=ao(n,s),u!=null&&o.unshift(mo(n,u,a))):i||(u=ao(n,s),u!=null&&o.push(mo(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var TS=/\r\n?/g,kS=/\u0000|\uFFFD/g;function lm(t){return(typeof t=="string"?t:""+t).replace(TS,`
`).replace(kS,"")}function Pl(t,e,n){if(e=lm(e),lm(t)!==e&&n)throw Error(L(425))}function ga(){}var xh=null,Nh=null;function Ph(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ah=typeof setTimeout=="function"?setTimeout:void 0,RS=typeof clearTimeout=="function"?clearTimeout:void 0,am=typeof Promise=="function"?Promise:void 0,xS=typeof queueMicrotask=="function"?queueMicrotask:typeof am<"u"?function(t){return am.resolve(null).then(t).catch(NS)}:Ah;function NS(t){setTimeout(function(){throw t})}function Rc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ho(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ho(e)}function tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function um(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var es=Math.random().toString(36).slice(2),Jt="__reactFiber$"+es,_o="__reactProps$"+es,kn="__reactContainer$"+es,Oh="__reactEvents$"+es,PS="__reactListeners$"+es,AS="__reactHandles$"+es;function Or(t){var e=t[Jt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[kn]||n[Jt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=um(t);t!==null;){if(n=t[Jt])return n;t=um(t)}return e}t=n,n=t.parentNode}return null}function Vo(t){return t=t[Jt]||t[kn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function au(t){return t[_o]||null}var bh=[],wi=-1;function _r(t){return{current:t}}function he(t){0>wi||(t.current=bh[wi],bh[wi]=null,wi--)}function le(t,e){wi++,bh[wi]=t.current,t.current=e}var dr={},Je=_r(dr),dt=_r(!1),zr=dr;function zi(t,e){var n=t.type.contextTypes;if(!n)return dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ft(t){return t=t.childContextTypes,t!=null}function ma(){he(dt),he(Je)}function cm(t,e,n){if(Je.current!==dr)throw Error(L(168));le(Je,e),le(dt,n)}function Uv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,gI(t)||"Unknown",i));return me({},n,r)}function _a(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,zr=Je.current,le(Je,t),le(dt,dt.current),!0}function hm(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=Uv(t,e,zr),r.__reactInternalMemoizedMergedChildContext=t,he(dt),he(Je),le(Je,t)):he(dt),le(dt,n)}var gn=null,uu=!1,xc=!1;function Fv(t){gn===null?gn=[t]:gn.push(t)}function OS(t){uu=!0,Fv(t)}function yr(){if(!xc&&gn!==null){xc=!0;var t=0,e=ne;try{var n=gn;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}gn=null,uu=!1}catch(i){throw gn!==null&&(gn=gn.slice(t+1)),uv(Fd,yr),i}finally{ne=e,xc=!1}}return null}var Ei=[],Ci=0,ya=null,va=0,Nt=[],Pt=0,Vr=null,mn=1,_n="";function Rr(t,e){Ei[Ci++]=va,Ei[Ci++]=ya,ya=t,va=e}function jv(t,e,n){Nt[Pt++]=mn,Nt[Pt++]=_n,Nt[Pt++]=Vr,Vr=t;var r=mn;t=_n;var i=32-Wt(r)-1;r&=~(1<<i),n+=1;var s=32-Wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,mn=1<<32-Wt(e)+i|n<<i|r,_n=s+t}else mn=1<<s|n<<i|r,_n=t}function Kd(t){t.return!==null&&(Rr(t,1),jv(t,1,0))}function qd(t){for(;t===ya;)ya=Ei[--Ci],Ei[Ci]=null,va=Ei[--Ci],Ei[Ci]=null;for(;t===Vr;)Vr=Nt[--Pt],Nt[Pt]=null,_n=Nt[--Pt],Nt[Pt]=null,mn=Nt[--Pt],Nt[Pt]=null}var Et=null,vt=null,de=!1,zt=null;function Bv(t,e){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function dm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Et=t,vt=tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Et=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Vr!==null?{id:mn,overflow:_n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Et=t,vt=null,!0):!1;default:return!1}}function Dh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lh(t){if(de){var e=vt;if(e){var n=e;if(!dm(t,e)){if(Dh(t))throw Error(L(418));e=tr(n.nextSibling);var r=Et;e&&dm(t,e)?Bv(r,n):(t.flags=t.flags&-4097|2,de=!1,Et=t)}}else{if(Dh(t))throw Error(L(418));t.flags=t.flags&-4097|2,de=!1,Et=t}}}function fm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function Al(t){if(t!==Et)return!1;if(!de)return fm(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ph(t.type,t.memoizedProps)),e&&(e=vt)){if(Dh(t))throw zv(),Error(L(418));for(;e;)Bv(t,e),e=tr(e.nextSibling)}if(fm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=Et?tr(t.stateNode.nextSibling):null;return!0}function zv(){for(var t=vt;t;)t=tr(t.nextSibling)}function Vi(){vt=Et=null,de=!1}function Yd(t){zt===null?zt=[t]:zt.push(t)}var bS=An.ReactCurrentBatchConfig;function xs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Ol(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function pm(t){var e=t._init;return e(t._payload)}function Vv(t){function e(v,y){if(t){var I=v.deletions;I===null?(v.deletions=[y],v.flags|=16):I.push(y)}}function n(v,y){if(!t)return null;for(;y!==null;)e(v,y),y=y.sibling;return null}function r(v,y){for(v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function i(v,y){return v=sr(v,y),v.index=0,v.sibling=null,v}function s(v,y,I){return v.index=I,t?(I=v.alternate,I!==null?(I=I.index,I<y?(v.flags|=2,y):I):(v.flags|=2,y)):(v.flags|=1048576,y)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,y,I,D){return y===null||y.tag!==6?(y=Lc(I,v.mode,D),y.return=v,y):(y=i(y,I),y.return=v,y)}function u(v,y,I,D){var U=I.type;return U===gi?p(v,y,I.props.children,D,I.key):y!==null&&(y.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Bn&&pm(U)===y.type)?(D=i(y,I.props),D.ref=xs(v,y,I),D.return=v,D):(D=ta(I.type,I.key,I.props,null,v.mode,D),D.ref=xs(v,y,I),D.return=v,D)}function h(v,y,I,D){return y===null||y.tag!==4||y.stateNode.containerInfo!==I.containerInfo||y.stateNode.implementation!==I.implementation?(y=Mc(I,v.mode,D),y.return=v,y):(y=i(y,I.children||[]),y.return=v,y)}function p(v,y,I,D,U){return y===null||y.tag!==7?(y=jr(I,v.mode,D,U),y.return=v,y):(y=i(y,I),y.return=v,y)}function f(v,y,I){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Lc(""+y,v.mode,I),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case El:return I=ta(y.type,y.key,y.props,null,v.mode,I),I.ref=xs(v,null,y),I.return=v,I;case pi:return y=Mc(y,v.mode,I),y.return=v,y;case Bn:var D=y._init;return f(v,D(y._payload),I)}if(Us(y)||Is(y))return y=jr(y,v.mode,I,null),y.return=v,y;Ol(v,y)}return null}function g(v,y,I,D){var U=y!==null?y.key:null;if(typeof I=="string"&&I!==""||typeof I=="number")return U!==null?null:a(v,y,""+I,D);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case El:return I.key===U?u(v,y,I,D):null;case pi:return I.key===U?h(v,y,I,D):null;case Bn:return U=I._init,g(v,y,U(I._payload),D)}if(Us(I)||Is(I))return U!==null?null:p(v,y,I,D,null);Ol(v,I)}return null}function T(v,y,I,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return v=v.get(I)||null,a(y,v,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case El:return v=v.get(D.key===null?I:D.key)||null,u(y,v,D,U);case pi:return v=v.get(D.key===null?I:D.key)||null,h(y,v,D,U);case Bn:var B=D._init;return T(v,y,I,B(D._payload),U)}if(Us(D)||Is(D))return v=v.get(I)||null,p(y,v,D,U,null);Ol(y,D)}return null}function k(v,y,I,D){for(var U=null,B=null,E=y,_=y=0,w=null;E!==null&&_<I.length;_++){E.index>_?(w=E,E=null):w=E.sibling;var S=g(v,E,I[_],D);if(S===null){E===null&&(E=w);break}t&&E&&S.alternate===null&&e(v,E),y=s(S,y,_),B===null?U=S:B.sibling=S,B=S,E=w}if(_===I.length)return n(v,E),de&&Rr(v,_),U;if(E===null){for(;_<I.length;_++)E=f(v,I[_],D),E!==null&&(y=s(E,y,_),B===null?U=E:B.sibling=E,B=E);return de&&Rr(v,_),U}for(E=r(v,E);_<I.length;_++)w=T(E,v,_,I[_],D),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?_:w.key),y=s(w,y,_),B===null?U=w:B.sibling=w,B=w);return t&&E.forEach(function(R){return e(v,R)}),de&&Rr(v,_),U}function N(v,y,I,D){var U=Is(I);if(typeof U!="function")throw Error(L(150));if(I=U.call(I),I==null)throw Error(L(151));for(var B=U=null,E=y,_=y=0,w=null,S=I.next();E!==null&&!S.done;_++,S=I.next()){E.index>_?(w=E,E=null):w=E.sibling;var R=g(v,E,S.value,D);if(R===null){E===null&&(E=w);break}t&&E&&R.alternate===null&&e(v,E),y=s(R,y,_),B===null?U=R:B.sibling=R,B=R,E=w}if(S.done)return n(v,E),de&&Rr(v,_),U;if(E===null){for(;!S.done;_++,S=I.next())S=f(v,S.value,D),S!==null&&(y=s(S,y,_),B===null?U=S:B.sibling=S,B=S);return de&&Rr(v,_),U}for(E=r(v,E);!S.done;_++,S=I.next())S=T(E,v,_,S.value,D),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?_:S.key),y=s(S,y,_),B===null?U=S:B.sibling=S,B=S);return t&&E.forEach(function(P){return e(v,P)}),de&&Rr(v,_),U}function O(v,y,I,D){if(typeof I=="object"&&I!==null&&I.type===gi&&I.key===null&&(I=I.props.children),typeof I=="object"&&I!==null){switch(I.$$typeof){case El:e:{for(var U=I.key,B=y;B!==null;){if(B.key===U){if(U=I.type,U===gi){if(B.tag===7){n(v,B.sibling),y=i(B,I.props.children),y.return=v,v=y;break e}}else if(B.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===Bn&&pm(U)===B.type){n(v,B.sibling),y=i(B,I.props),y.ref=xs(v,B,I),y.return=v,v=y;break e}n(v,B);break}else e(v,B);B=B.sibling}I.type===gi?(y=jr(I.props.children,v.mode,D,I.key),y.return=v,v=y):(D=ta(I.type,I.key,I.props,null,v.mode,D),D.ref=xs(v,y,I),D.return=v,v=D)}return o(v);case pi:e:{for(B=I.key;y!==null;){if(y.key===B)if(y.tag===4&&y.stateNode.containerInfo===I.containerInfo&&y.stateNode.implementation===I.implementation){n(v,y.sibling),y=i(y,I.children||[]),y.return=v,v=y;break e}else{n(v,y);break}else e(v,y);y=y.sibling}y=Mc(I,v.mode,D),y.return=v,v=y}return o(v);case Bn:return B=I._init,O(v,y,B(I._payload),D)}if(Us(I))return k(v,y,I,D);if(Is(I))return N(v,y,I,D);Ol(v,I)}return typeof I=="string"&&I!==""||typeof I=="number"?(I=""+I,y!==null&&y.tag===6?(n(v,y.sibling),y=i(y,I),y.return=v,v=y):(n(v,y),y=Lc(I,v.mode,D),y.return=v,v=y),o(v)):n(v,y)}return O}var $i=Vv(!0),$v=Vv(!1),wa=_r(null),Ea=null,Ii=null,Qd=null;function Xd(){Qd=Ii=Ea=null}function Jd(t){var e=wa.current;he(wa),t._currentValue=e}function Mh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Oi(t,e){Ea=t,Qd=Ii=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ct=!0),t.firstContext=null)}function bt(t){var e=t._currentValue;if(Qd!==t)if(t={context:t,memoizedValue:e,next:null},Ii===null){if(Ea===null)throw Error(L(308));Ii=t,Ea.dependencies={lanes:0,firstContext:t}}else Ii=Ii.next=t;return e}var br=null;function Zd(t){br===null?br=[t]:br.push(t)}function Hv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Zd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Rn(t,r)}function Rn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zn=!1;function ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Rn(t,n)}return i=r.interleaved,i===null?(e.next=e,Zd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Rn(t,n)}function Yl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jd(t,n)}}function gm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ca(t,e,n,r){var i=t.updateQueue;zn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,a=p.lastBaseUpdate,a!==o&&(a===null?p.firstBaseUpdate=h:a.next=h,p.lastBaseUpdate=u))}if(s!==null){var f=i.baseState;o=0,p=h=u=null,a=s;do{var g=a.lane,T=a.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:T,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var k=t,N=a;switch(g=e,T=n,N.tag){case 1:if(k=N.payload,typeof k=="function"){f=k.call(T,f,g);break e}f=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=N.payload,g=typeof k=="function"?k.call(T,f,g):k,g==null)break e;f=me({},f,g);break e;case 2:zn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,g=i.effects,g===null?i.effects=[a]:g.push(a))}else T={eventTime:T,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},p===null?(h=p=T,u=f):p=p.next=T,o|=g;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;g=a,a=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(p===null&&(u=f),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Hr|=o,t.lanes=o,t.memoizedState=f}}function mm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var $o={},nn=_r($o),yo=_r($o),vo=_r($o);function Dr(t){if(t===$o)throw Error(L(174));return t}function tf(t,e){switch(le(vo,e),le(yo,t),le(nn,$o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:mh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=mh(e,t)}he(nn),le(nn,e)}function Hi(){he(nn),he(yo),he(vo)}function Gv(t){Dr(vo.current);var e=Dr(nn.current),n=mh(e,t.type);e!==n&&(le(yo,t),le(nn,n))}function nf(t){yo.current===t&&(he(nn),he(yo))}var pe=_r(0);function Ia(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nc=[];function rf(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var Ql=An.ReactCurrentDispatcher,Pc=An.ReactCurrentBatchConfig,$r=0,ge=null,Re=null,Oe=null,Sa=!1,Ks=!1,wo=0,DS=0;function He(){throw Error(L(321))}function sf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qt(t[n],e[n]))return!1;return!0}function of(t,e,n,r,i,s){if($r=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ql.current=t===null||t.memoizedState===null?FS:jS,t=n(r,i),Ks){s=0;do{if(Ks=!1,wo=0,25<=s)throw Error(L(301));s+=1,Oe=Re=null,e.updateQueue=null,Ql.current=BS,t=n(r,i)}while(Ks)}if(Ql.current=Ta,e=Re!==null&&Re.next!==null,$r=0,Oe=Re=ge=null,Sa=!1,e)throw Error(L(300));return t}function lf(){var t=wo!==0;return wo=0,t}function Xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?ge.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function Dt(){if(Re===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Re.next;var e=Oe===null?ge.memoizedState:Oe.next;if(e!==null)Oe=e,Re=t;else{if(t===null)throw Error(L(310));Re=t,t={memoizedState:Re.memoizedState,baseState:Re.baseState,baseQueue:Re.baseQueue,queue:Re.queue,next:null},Oe===null?ge.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function Eo(t,e){return typeof e=="function"?e(t):e}function Ac(t){var e=Dt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Re,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,u=null,h=s;do{var p=h.lane;if(($r&p)===p)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var f={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,ge.lanes|=p,Hr|=p}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=a,qt(r,e.memoizedState)||(ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Hr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Oc(t){var e=Dt(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);qt(s,e.memoizedState)||(ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Kv(){}function qv(t,e){var n=ge,r=Dt(),i=e(),s=!qt(r.memoizedState,i);if(s&&(r.memoizedState=i,ct=!0),r=r.queue,af(Xv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,Co(9,Qv.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(L(349));$r&30||Yv(n,e,i)}return i}function Yv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Qv(t,e,n,r){e.value=n,e.getSnapshot=r,Jv(e)&&Zv(t)}function Xv(t,e,n){return n(function(){Jv(e)&&Zv(t)})}function Jv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qt(t,n)}catch{return!0}}function Zv(t){var e=Rn(t,1);e!==null&&Gt(e,t,1,-1)}function _m(t){var e=Xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:t},e.queue=t,t=t.dispatch=US.bind(null,ge,t),[e.memoizedState,t]}function Co(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function e0(){return Dt().memoizedState}function Xl(t,e,n,r){var i=Xt();ge.flags|=t,i.memoizedState=Co(1|e,n,void 0,r===void 0?null:r)}function cu(t,e,n,r){var i=Dt();r=r===void 0?null:r;var s=void 0;if(Re!==null){var o=Re.memoizedState;if(s=o.destroy,r!==null&&sf(r,o.deps)){i.memoizedState=Co(e,n,s,r);return}}ge.flags|=t,i.memoizedState=Co(1|e,n,s,r)}function ym(t,e){return Xl(8390656,8,t,e)}function af(t,e){return cu(2048,8,t,e)}function t0(t,e){return cu(4,2,t,e)}function n0(t,e){return cu(4,4,t,e)}function r0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function i0(t,e,n){return n=n!=null?n.concat([t]):null,cu(4,4,r0.bind(null,e,t),n)}function uf(){}function s0(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function o0(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&sf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function l0(t,e,n){return $r&21?(qt(n,e)||(n=dv(),ge.lanes|=n,Hr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ct=!0),t.memoizedState=n)}function LS(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=Pc.transition;Pc.transition={};try{t(!1),e()}finally{ne=n,Pc.transition=r}}function a0(){return Dt().memoizedState}function MS(t,e,n){var r=ir(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},u0(t))c0(e,n);else if(n=Hv(t,e,n,r),n!==null){var i=ot();Gt(n,t,r,i),h0(n,e,r)}}function US(t,e,n){var r=ir(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(u0(t))c0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,qt(a,o)){var u=e.interleaved;u===null?(i.next=i,Zd(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Hv(t,e,i,r),n!==null&&(i=ot(),Gt(n,t,r,i),h0(n,e,r))}}function u0(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function c0(t,e){Ks=Sa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function h0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,jd(t,n)}}var Ta={readContext:bt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},FS={readContext:bt,useCallback:function(t,e){return Xt().memoizedState=[t,e===void 0?null:e],t},useContext:bt,useEffect:ym,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xl(4194308,4,r0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xl(4,2,t,e)},useMemo:function(t,e){var n=Xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=MS.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=Xt();return t={current:t},e.memoizedState=t},useState:_m,useDebugValue:uf,useDeferredValue:function(t){return Xt().memoizedState=t},useTransition:function(){var t=_m(!1),e=t[0];return t=LS.bind(null,t[1]),Xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=Xt();if(de){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),Le===null)throw Error(L(349));$r&30||Yv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,ym(Xv.bind(null,r,s,t),[t]),r.flags|=2048,Co(9,Qv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Xt(),e=Le.identifierPrefix;if(de){var n=_n,r=mn;n=(r&~(1<<32-Wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=DS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jS={readContext:bt,useCallback:s0,useContext:bt,useEffect:af,useImperativeHandle:i0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:o0,useReducer:Ac,useRef:e0,useState:function(){return Ac(Eo)},useDebugValue:uf,useDeferredValue:function(t){var e=Dt();return l0(e,Re.memoizedState,t)},useTransition:function(){var t=Ac(Eo)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:Kv,useSyncExternalStore:qv,useId:a0,unstable_isNewReconciler:!1},BS={readContext:bt,useCallback:s0,useContext:bt,useEffect:af,useImperativeHandle:i0,useInsertionEffect:t0,useLayoutEffect:n0,useMemo:o0,useReducer:Oc,useRef:e0,useState:function(){return Oc(Eo)},useDebugValue:uf,useDeferredValue:function(t){var e=Dt();return Re===null?e.memoizedState=t:l0(e,Re.memoizedState,t)},useTransition:function(){var t=Oc(Eo)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:Kv,useSyncExternalStore:qv,useId:a0,unstable_isNewReconciler:!1};function jt(t,e){if(t&&t.defaultProps){e=me({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Uh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:me({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var hu={isMounted:function(t){return(t=t._reactInternals)?ni(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ot(),i=ir(t),s=Cn(r,i);s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(Gt(e,t,i,r),Yl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ot(),i=ir(t),s=Cn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=nr(t,s,i),e!==null&&(Gt(e,t,i,r),Yl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ot(),r=ir(t),i=Cn(n,r);i.tag=2,e!=null&&(i.callback=e),e=nr(t,i,r),e!==null&&(Gt(e,t,r,n),Yl(e,t,r))}};function vm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!po(n,r)||!po(i,s):!0}function d0(t,e,n){var r=!1,i=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=bt(s):(i=ft(e)?zr:Je.current,r=e.contextTypes,s=(r=r!=null)?zi(t,i):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=hu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function wm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&hu.enqueueReplaceState(e,e.state,null)}function Fh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ef(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=bt(s):(s=ft(e)?zr:Je.current,i.context=zi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Uh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&hu.enqueueReplaceState(i,i.state,null),Ca(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Wi(t,e){try{var n="",r=e;do n+=pI(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var zS=typeof WeakMap=="function"?WeakMap:Map;function f0(t,e,n){n=Cn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ra||(Ra=!0,Yh=r),jh(t,e)},n}function p0(t,e,n){n=Cn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){jh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jh(t,e),typeof r!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Em(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new zS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=tT.bind(null,t,e,n),e.then(t,t))}function Cm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Im(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cn(-1,1),e.tag=2,nr(n,e,1))),n.lanes|=1),t)}var VS=An.ReactCurrentOwner,ct=!1;function rt(t,e,n,r){e.child=t===null?$v(e,null,n,r):$i(e,t.child,n,r)}function Sm(t,e,n,r,i){n=n.render;var s=e.ref;return Oi(e,i),r=of(t,e,n,r,s,i),n=lf(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(de&&n&&Kd(e),e.flags|=1,rt(t,e,r,i),e.child)}function Tm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!_f(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,g0(t,e,s,r,i)):(t=ta(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:po,n(o,r)&&t.ref===e.ref)return xn(t,e,i)}return e.flags|=1,t=sr(s,r),t.ref=e.ref,t.return=e,e.child=t}function g0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(po(s,r)&&t.ref===e.ref)if(ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ct=!0);else return e.lanes=t.lanes,xn(t,e,i)}return Bh(t,e,n,r,i)}function m0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Ti,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(Ti,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,le(Ti,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,le(Ti,yt),yt|=r;return rt(t,e,i,n),e.child}function _0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bh(t,e,n,r,i){var s=ft(n)?zr:Je.current;return s=zi(e,s),Oi(e,i),n=of(t,e,n,r,s,i),r=lf(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,xn(t,e,i)):(de&&r&&Kd(e),e.flags|=1,rt(t,e,n,i),e.child)}function km(t,e,n,r,i){if(ft(n)){var s=!0;_a(e)}else s=!1;if(Oi(e,i),e.stateNode===null)Jl(t,e),d0(e,n,r),Fh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=bt(h):(h=ft(n)?zr:Je.current,h=zi(e,h));var p=n.getDerivedStateFromProps,f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==h)&&wm(e,o,r,h),zn=!1;var g=e.memoizedState;o.state=g,Ca(e,r,o,i),u=e.memoizedState,a!==r||g!==u||dt.current||zn?(typeof p=="function"&&(Uh(e,n,p,r),u=e.memoizedState),(a=zn||vm(e,n,a,r,g,u,h))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Wv(t,e),a=e.memoizedProps,h=e.type===e.elementType?a:jt(e.type,a),o.props=h,f=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=bt(u):(u=ft(n)?zr:Je.current,u=zi(e,u));var T=n.getDerivedStateFromProps;(p=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||g!==u)&&wm(e,o,r,u),zn=!1,g=e.memoizedState,o.state=g,Ca(e,r,o,i);var k=e.memoizedState;a!==f||g!==k||dt.current||zn?(typeof T=="function"&&(Uh(e,n,T,r),k=e.memoizedState),(h=zn||vm(e,n,h,r,g,k,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,k,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,k,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=k),o.props=r,o.state=k,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return zh(t,e,n,r,s,i)}function zh(t,e,n,r,i,s){_0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&hm(e,n,!1),xn(t,e,s);r=e.stateNode,VS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=$i(e,t.child,null,s),e.child=$i(e,null,a,s)):rt(t,e,a,s),e.memoizedState=r.state,i&&hm(e,n,!0),e.child}function y0(t){var e=t.stateNode;e.pendingContext?cm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&cm(t,e.context,!1),tf(t,e.containerInfo)}function Rm(t,e,n,r,i){return Vi(),Yd(i),e.flags|=256,rt(t,e,n,r),e.child}var Vh={dehydrated:null,treeContext:null,retryLane:0};function $h(t){return{baseLanes:t,cachePool:null,transitions:null}}function v0(t,e,n){var r=e.pendingProps,i=pe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(pe,i&1),t===null)return Lh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pu(o,r,0,null),t=jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=$h(n),e.memoizedState=Vh,t):cf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return $S(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=sr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=sr(a,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?$h(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vh,r}return s=t.child,t=s.sibling,r=sr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function cf(t,e){return e=pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function bl(t,e,n,r){return r!==null&&Yd(r),$i(e,t.child,null,n),t=cf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $S(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=bc(Error(L(422))),bl(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=pu({mode:"visible",children:r.children},i,0,null),s=jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&$i(e,t.child,null,o),e.child.memoizedState=$h(o),e.memoizedState=Vh,s);if(!(e.mode&1))return bl(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(L(419)),r=bc(s,r,void 0),bl(t,e,o,r)}if(a=(o&t.childLanes)!==0,ct||a){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Rn(t,i),Gt(r,t,i,-1))}return mf(),r=bc(Error(L(421))),bl(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=nT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=tr(i.nextSibling),Et=e,de=!0,zt=null,t!==null&&(Nt[Pt++]=mn,Nt[Pt++]=_n,Nt[Pt++]=Vr,mn=t.id,_n=t.overflow,Vr=e),e=cf(e,r.children),e.flags|=4096,e)}function xm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Mh(t.return,e,n)}function Dc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function w0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(rt(t,e,r.children,n),r=pe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xm(t,n,e);else if(t.tag===19)xm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(pe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ia(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Dc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ia(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Dc(e,!0,n,null,s);break;case"together":Dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Jl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function xn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Hr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function HS(t,e,n){switch(e.tag){case 3:y0(e),Vi();break;case 5:Gv(e);break;case 1:ft(e.type)&&_a(e);break;case 4:tf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le(wa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(pe,pe.current&1),e.flags|=128,null):n&e.child.childLanes?v0(t,e,n):(le(pe,pe.current&1),t=xn(t,e,n),t!==null?t.sibling:null);le(pe,pe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return w0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(pe,pe.current),r)break;return null;case 22:case 23:return e.lanes=0,m0(t,e,n)}return xn(t,e,n)}var E0,Hh,C0,I0;E0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hh=function(){};C0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Dr(nn.current);var s=null;switch(n){case"input":i=dh(t,i),r=dh(t,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=gh(t,i),r=gh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ga)}_h(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var a=i[h];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(oo.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(a=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==a&&(u!=null||a!=null))if(h==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(oo.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ue("scroll",t),s||a===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};I0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ns(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function We(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function WS(t,e,n){var r=e.pendingProps;switch(qd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return We(e),null;case 1:return ft(e.type)&&ma(),We(e),null;case 3:return r=e.stateNode,Hi(),he(dt),he(Je),rf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,zt!==null&&(Jh(zt),zt=null))),Hh(t,e),We(e),null;case 5:nf(e);var i=Dr(vo.current);if(n=e.type,t!==null&&e.stateNode!=null)C0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return We(e),null}if(t=Dr(nn.current),Al(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Jt]=e,r[_o]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<js.length;i++)ue(js[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Ug(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":jg(r,s),ue("invalid",r)}_h(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pl(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pl(r.textContent,a,t),i=["children",""+a]):oo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":Cl(r),Fg(r,s,!0);break;case"textarea":Cl(r),Bg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ga)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Jt]=e,t[_o]=r,E0(t,e,!1,!1),e.stateNode=t;e:{switch(o=yh(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<js.length;i++)ue(js[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":Ug(t,r),i=dh(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),ue("invalid",t);break;case"textarea":jg(t,r),i=gh(t,r),ue("invalid",t);break;default:i=r}_h(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?ev(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Jy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&lo(t,u):typeof u=="number"&&lo(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oo.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ue("scroll",t):u!=null&&bd(t,s,u,o))}switch(n){case"input":Cl(t),Fg(t,r,!1);break;case"textarea":Cl(t),Bg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+hr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?xi(t,!!r.multiple,s,!1):r.defaultValue!=null&&xi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ga)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return We(e),null;case 6:if(t&&e.stateNode!=null)I0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=Dr(vo.current),Dr(nn.current),Al(e)){if(r=e.stateNode,n=e.memoizedProps,r[Jt]=e,(s=r.nodeValue!==n)&&(t=Et,t!==null))switch(t.tag){case 3:Pl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Pl(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Jt]=e,e.stateNode=r}return We(e),null;case 13:if(he(pe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&vt!==null&&e.mode&1&&!(e.flags&128))zv(),Vi(),e.flags|=98560,s=!1;else if(s=Al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[Jt]=e}else Vi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;We(e),s=!1}else zt!==null&&(Jh(zt),zt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||pe.current&1?Pe===0&&(Pe=3):mf())),e.updateQueue!==null&&(e.flags|=4),We(e),null);case 4:return Hi(),Hh(t,e),t===null&&go(e.stateNode.containerInfo),We(e),null;case 10:return Jd(e.type._context),We(e),null;case 17:return ft(e.type)&&ma(),We(e),null;case 19:if(he(pe),s=e.memoizedState,s===null)return We(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ns(s,!1);else{if(Pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ia(t),o!==null){for(e.flags|=128,Ns(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(pe,pe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ie()>Gi&&(e.flags|=128,r=!0,Ns(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ia(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ns(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!de)return We(e),null}else 2*Ie()-s.renderingStartTime>Gi&&n!==1073741824&&(e.flags|=128,r=!0,Ns(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ie(),e.sibling=null,n=pe.current,le(pe,r?n&1|2:n&1),e):(We(e),null);case 22:case 23:return gf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(We(e),e.subtreeFlags&6&&(e.flags|=8192)):We(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function GS(t,e){switch(qd(e),e.tag){case 1:return ft(e.type)&&ma(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hi(),he(dt),he(Je),rf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return nf(e),null;case 13:if(he(pe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));Vi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return he(pe),null;case 4:return Hi(),null;case 10:return Jd(e.type._context),null;case 22:case 23:return gf(),null;case 24:return null;default:return null}}var Dl=!1,Ke=!1,KS=typeof WeakSet=="function"?WeakSet:Set,V=null;function Si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function Wh(t,e,n){try{n()}catch(r){_e(t,e,r)}}var Nm=!1;function qS(t,e){if(xh=da,t=xv(),Gd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,h=0,p=0,f=t,g=null;t:for(;;){for(var T;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(T=f.firstChild)!==null;)g=f,f=T;for(;;){if(f===t)break t;if(g===n&&++h===i&&(a=o),g===s&&++p===r&&(u=o),(T=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=T}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nh={focusedElem:t,selectionRange:n},da=!1,V=e;V!==null;)if(e=V,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,V=t;else for(;V!==null;){e=V;try{var k=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var N=k.memoizedProps,O=k.memoizedState,v=e.stateNode,y=v.getSnapshotBeforeUpdate(e.elementType===e.type?N:jt(e.type,N),O);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var I=e.stateNode.containerInfo;I.nodeType===1?I.textContent="":I.nodeType===9&&I.documentElement&&I.removeChild(I.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(D){_e(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,V=t;break}V=e.return}return k=Nm,Nm=!1,k}function qs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Wh(e,n,s)}i=i.next}while(i!==r)}}function du(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Gh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function S0(t){var e=t.alternate;e!==null&&(t.alternate=null,S0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Jt],delete e[_o],delete e[Oh],delete e[PS],delete e[AS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function T0(t){return t.tag===5||t.tag===3||t.tag===4}function Pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||T0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ga));else if(r!==4&&(t=t.child,t!==null))for(Kh(t,e,n),t=t.sibling;t!==null;)Kh(t,e,n),t=t.sibling}function qh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qh(t,e,n),t=t.sibling;t!==null;)qh(t,e,n),t=t.sibling}var Fe=null,Bt=!1;function Fn(t,e,n){for(n=n.child;n!==null;)k0(t,e,n),n=n.sibling}function k0(t,e,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(iu,n)}catch{}switch(n.tag){case 5:Ke||Si(n,e);case 6:var r=Fe,i=Bt;Fe=null,Fn(t,e,n),Fe=r,Bt=i,Fe!==null&&(Bt?(t=Fe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Fe.removeChild(n.stateNode));break;case 18:Fe!==null&&(Bt?(t=Fe,n=n.stateNode,t.nodeType===8?Rc(t.parentNode,n):t.nodeType===1&&Rc(t,n),ho(t)):Rc(Fe,n.stateNode));break;case 4:r=Fe,i=Bt,Fe=n.stateNode.containerInfo,Bt=!0,Fn(t,e,n),Fe=r,Bt=i;break;case 0:case 11:case 14:case 15:if(!Ke&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Wh(n,e,o),i=i.next}while(i!==r)}Fn(t,e,n);break;case 1:if(!Ke&&(Si(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){_e(n,e,a)}Fn(t,e,n);break;case 21:Fn(t,e,n);break;case 22:n.mode&1?(Ke=(r=Ke)||n.memoizedState!==null,Fn(t,e,n),Ke=r):Fn(t,e,n);break;default:Fn(t,e,n)}}function Am(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new KS),e.forEach(function(r){var i=rT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Fe=a.stateNode,Bt=!1;break e;case 3:Fe=a.stateNode.containerInfo,Bt=!0;break e;case 4:Fe=a.stateNode.containerInfo,Bt=!0;break e}a=a.return}if(Fe===null)throw Error(L(160));k0(s,o,i),Fe=null,Bt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){_e(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)R0(e,t),e=e.sibling}function R0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ft(e,t),Qt(t),r&4){try{qs(3,t,t.return),du(3,t)}catch(N){_e(t,t.return,N)}try{qs(5,t,t.return)}catch(N){_e(t,t.return,N)}}break;case 1:Ft(e,t),Qt(t),r&512&&n!==null&&Si(n,n.return);break;case 5:if(Ft(e,t),Qt(t),r&512&&n!==null&&Si(n,n.return),t.flags&32){var i=t.stateNode;try{lo(i,"")}catch(N){_e(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Yy(i,s),yh(a,o);var h=yh(a,s);for(o=0;o<u.length;o+=2){var p=u[o],f=u[o+1];p==="style"?ev(i,f):p==="dangerouslySetInnerHTML"?Jy(i,f):p==="children"?lo(i,f):bd(i,p,f,h)}switch(a){case"input":fh(i,s);break;case"textarea":Qy(i,s);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var T=s.value;T!=null?xi(i,!!s.multiple,T,!1):g!==!!s.multiple&&(s.defaultValue!=null?xi(i,!!s.multiple,s.defaultValue,!0):xi(i,!!s.multiple,s.multiple?[]:"",!1))}i[_o]=s}catch(N){_e(t,t.return,N)}}break;case 6:if(Ft(e,t),Qt(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){_e(t,t.return,N)}}break;case 3:if(Ft(e,t),Qt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ho(e.containerInfo)}catch(N){_e(t,t.return,N)}break;case 4:Ft(e,t),Qt(t);break;case 13:Ft(e,t),Qt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ff=Ie())),r&4&&Am(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Ke=(h=Ke)||p,Ft(e,t),Ke=h):Ft(e,t),Qt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(V=t,p=t.child;p!==null;){for(f=V=p;V!==null;){switch(g=V,T=g.child,g.tag){case 0:case 11:case 14:case 15:qs(4,g,g.return);break;case 1:Si(g,g.return);var k=g.stateNode;if(typeof k.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,k.props=e.memoizedProps,k.state=e.memoizedState,k.componentWillUnmount()}catch(N){_e(r,n,N)}}break;case 5:Si(g,g.return);break;case 22:if(g.memoizedState!==null){bm(f);continue}}T!==null?(T.return=g,V=T):bm(f)}p=p.sibling}e:for(p=null,f=t;;){if(f.tag===5){if(p===null){p=f;try{i=f.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=Zy("display",o))}catch(N){_e(t,t.return,N)}}}else if(f.tag===6){if(p===null)try{f.stateNode.nodeValue=h?"":f.memoizedProps}catch(N){_e(t,t.return,N)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;p===f&&(p=null),f=f.return}p===f&&(p=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Ft(e,t),Qt(t),r&4&&Am(t);break;case 21:break;default:Ft(e,t),Qt(t)}}function Qt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(T0(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(lo(i,""),r.flags&=-33);var s=Pm(t);qh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Pm(t);Kh(t,a,o);break;default:throw Error(L(161))}}catch(u){_e(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function YS(t,e,n){V=t,x0(t)}function x0(t,e,n){for(var r=(t.mode&1)!==0;V!==null;){var i=V,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Dl;if(!o){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Ke;a=Dl;var h=Ke;if(Dl=o,(Ke=u)&&!h)for(V=i;V!==null;)o=V,u=o.child,o.tag===22&&o.memoizedState!==null?Dm(i):u!==null?(u.return=o,V=u):Dm(i);for(;s!==null;)V=s,x0(s),s=s.sibling;V=i,Dl=a,Ke=h}Om(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,V=s):Om(t)}}function Om(t){for(;V!==null;){var e=V;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ke||du(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ke)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:jt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&mm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}mm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var f=p.dehydrated;f!==null&&ho(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Ke||e.flags&512&&Gh(e)}catch(g){_e(e,e.return,g)}}if(e===t){V=null;break}if(n=e.sibling,n!==null){n.return=e.return,V=n;break}V=e.return}}function bm(t){for(;V!==null;){var e=V;if(e===t){V=null;break}var n=e.sibling;if(n!==null){n.return=e.return,V=n;break}V=e.return}}function Dm(t){for(;V!==null;){var e=V;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{du(4,e)}catch(u){_e(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){_e(e,i,u)}}var s=e.return;try{Gh(e)}catch(u){_e(e,s,u)}break;case 5:var o=e.return;try{Gh(e)}catch(u){_e(e,o,u)}}}catch(u){_e(e,e.return,u)}if(e===t){V=null;break}var a=e.sibling;if(a!==null){a.return=e.return,V=a;break}V=e.return}}var QS=Math.ceil,ka=An.ReactCurrentDispatcher,hf=An.ReactCurrentOwner,Ot=An.ReactCurrentBatchConfig,J=0,Le=null,Te=null,je=0,yt=0,Ti=_r(0),Pe=0,Io=null,Hr=0,fu=0,df=0,Ys=null,ut=null,ff=0,Gi=1/0,pn=null,Ra=!1,Yh=null,rr=null,Ll=!1,Qn=null,xa=0,Qs=0,Qh=null,Zl=-1,ea=0;function ot(){return J&6?Ie():Zl!==-1?Zl:Zl=Ie()}function ir(t){return t.mode&1?J&2&&je!==0?je&-je:bS.transition!==null?(ea===0&&(ea=dv()),ea):(t=ne,t!==0||(t=window.event,t=t===void 0?16:vv(t.type)),t):1}function Gt(t,e,n,r){if(50<Qs)throw Qs=0,Qh=null,Error(L(185));Bo(t,n,r),(!(J&2)||t!==Le)&&(t===Le&&(!(J&2)&&(fu|=n),Pe===4&&$n(t,je)),pt(t,r),n===1&&J===0&&!(e.mode&1)&&(Gi=Ie()+500,uu&&yr()))}function pt(t,e){var n=t.callbackNode;bI(t,e);var r=ha(t,t===Le?je:0);if(r===0)n!==null&&$g(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$g(n),e===1)t.tag===0?OS(Lm.bind(null,t)):Fv(Lm.bind(null,t)),xS(function(){!(J&6)&&yr()}),n=null;else{switch(fv(r)){case 1:n=Fd;break;case 4:n=cv;break;case 16:n=ca;break;case 536870912:n=hv;break;default:n=ca}n=M0(n,N0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function N0(t,e){if(Zl=-1,ea=0,J&6)throw Error(L(327));var n=t.callbackNode;if(bi()&&t.callbackNode!==n)return null;var r=ha(t,t===Le?je:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Na(t,r);else{e=r;var i=J;J|=2;var s=A0();(Le!==t||je!==e)&&(pn=null,Gi=Ie()+500,Fr(t,e));do try{ZS();break}catch(a){P0(t,a)}while(!0);Xd(),ka.current=s,J=i,Te!==null?e=0:(Le=null,je=0,e=Pe)}if(e!==0){if(e===2&&(i=Ih(t),i!==0&&(r=i,e=Xh(t,i))),e===1)throw n=Io,Fr(t,0),$n(t,r),pt(t,Ie()),n;if(e===6)$n(t,r);else{if(i=t.current.alternate,!(r&30)&&!XS(i)&&(e=Na(t,r),e===2&&(s=Ih(t),s!==0&&(r=s,e=Xh(t,s))),e===1))throw n=Io,Fr(t,0),$n(t,r),pt(t,Ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:xr(t,ut,pn);break;case 3:if($n(t,r),(r&130023424)===r&&(e=ff+500-Ie(),10<e)){if(ha(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ot(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ah(xr.bind(null,t,ut,pn),e);break}xr(t,ut,pn);break;case 4:if($n(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*QS(r/1960))-r,10<r){t.timeoutHandle=Ah(xr.bind(null,t,ut,pn),r);break}xr(t,ut,pn);break;case 5:xr(t,ut,pn);break;default:throw Error(L(329))}}}return pt(t,Ie()),t.callbackNode===n?N0.bind(null,t):null}function Xh(t,e){var n=Ys;return t.current.memoizedState.isDehydrated&&(Fr(t,e).flags|=256),t=Na(t,e),t!==2&&(e=ut,ut=n,e!==null&&Jh(e)),t}function Jh(t){ut===null?ut=t:ut.push.apply(ut,t)}function XS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!qt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $n(t,e){for(e&=~df,e&=~fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wt(e),r=1<<n;t[n]=-1,e&=~r}}function Lm(t){if(J&6)throw Error(L(327));bi();var e=ha(t,0);if(!(e&1))return pt(t,Ie()),null;var n=Na(t,e);if(t.tag!==0&&n===2){var r=Ih(t);r!==0&&(e=r,n=Xh(t,r))}if(n===1)throw n=Io,Fr(t,0),$n(t,e),pt(t,Ie()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,xr(t,ut,pn),pt(t,Ie()),null}function pf(t,e){var n=J;J|=1;try{return t(e)}finally{J=n,J===0&&(Gi=Ie()+500,uu&&yr())}}function Wr(t){Qn!==null&&Qn.tag===0&&!(J&6)&&bi();var e=J;J|=1;var n=Ot.transition,r=ne;try{if(Ot.transition=null,ne=1,t)return t()}finally{ne=r,Ot.transition=n,J=e,!(J&6)&&yr()}}function gf(){yt=Ti.current,he(Ti)}function Fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RS(n)),Te!==null)for(n=Te.return;n!==null;){var r=n;switch(qd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ma();break;case 3:Hi(),he(dt),he(Je),rf();break;case 5:nf(r);break;case 4:Hi();break;case 13:he(pe);break;case 19:he(pe);break;case 10:Jd(r.type._context);break;case 22:case 23:gf()}n=n.return}if(Le=t,Te=t=sr(t.current,null),je=yt=e,Pe=0,Io=null,df=fu=Hr=0,ut=Ys=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}br=null}return t}function P0(t,e){do{var n=Te;try{if(Xd(),Ql.current=Ta,Sa){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Sa=!1}if($r=0,Oe=Re=ge=null,Ks=!1,wo=0,hf.current=null,n===null||n.return===null){Pe=1,Io=e,Te=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=je,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,p=a,f=p.tag;if(!(p.mode&1)&&(f===0||f===11||f===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var T=Cm(o);if(T!==null){T.flags&=-257,Im(T,o,a,s,e),T.mode&1&&Em(s,h,e),e=T,u=h;var k=e.updateQueue;if(k===null){var N=new Set;N.add(u),e.updateQueue=N}else k.add(u);break e}else{if(!(e&1)){Em(s,h,e),mf();break e}u=Error(L(426))}}else if(de&&a.mode&1){var O=Cm(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Im(O,o,a,s,e),Yd(Wi(u,a));break e}}s=u=Wi(u,a),Pe!==4&&(Pe=2),Ys===null?Ys=[s]:Ys.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=f0(s,u,e);gm(s,v);break e;case 1:a=u;var y=s.type,I=s.stateNode;if(!(s.flags&128)&&(typeof y.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(rr===null||!rr.has(I)))){s.flags|=65536,e&=-e,s.lanes|=e;var D=p0(s,a,e);gm(s,D);break e}}s=s.return}while(s!==null)}b0(n)}catch(U){e=U,Te===n&&n!==null&&(Te=n=n.return);continue}break}while(!0)}function A0(){var t=ka.current;return ka.current=Ta,t===null?Ta:t}function mf(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Le===null||!(Hr&268435455)&&!(fu&268435455)||$n(Le,je)}function Na(t,e){var n=J;J|=2;var r=A0();(Le!==t||je!==e)&&(pn=null,Fr(t,e));do try{JS();break}catch(i){P0(t,i)}while(!0);if(Xd(),J=n,ka.current=r,Te!==null)throw Error(L(261));return Le=null,je=0,Pe}function JS(){for(;Te!==null;)O0(Te)}function ZS(){for(;Te!==null&&!SI();)O0(Te)}function O0(t){var e=L0(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?b0(t):Te=e,hf.current=null}function b0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=GS(n,e),n!==null){n.flags&=32767,Te=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pe=6,Te=null;return}}else if(n=WS(n,e,yt),n!==null){Te=n;return}if(e=e.sibling,e!==null){Te=e;return}Te=e=t}while(e!==null);Pe===0&&(Pe=5)}function xr(t,e,n){var r=ne,i=Ot.transition;try{Ot.transition=null,ne=1,eT(t,e,n,r)}finally{Ot.transition=i,ne=r}return null}function eT(t,e,n,r){do bi();while(Qn!==null);if(J&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(DI(t,s),t===Le&&(Te=Le=null,je=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ll||(Ll=!0,M0(ca,function(){return bi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ot.transition,Ot.transition=null;var o=ne;ne=1;var a=J;J|=4,hf.current=null,qS(t,n),R0(n,t),wS(Nh),da=!!xh,Nh=xh=null,t.current=n,YS(n),TI(),J=a,ne=o,Ot.transition=s}else t.current=n;if(Ll&&(Ll=!1,Qn=t,xa=i),s=t.pendingLanes,s===0&&(rr=null),xI(n.stateNode),pt(t,Ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ra)throw Ra=!1,t=Yh,Yh=null,t;return xa&1&&t.tag!==0&&bi(),s=t.pendingLanes,s&1?t===Qh?Qs++:(Qs=0,Qh=t):Qs=0,yr(),null}function bi(){if(Qn!==null){var t=fv(xa),e=Ot.transition,n=ne;try{if(Ot.transition=null,ne=16>t?16:t,Qn===null)var r=!1;else{if(t=Qn,Qn=null,xa=0,J&6)throw Error(L(331));var i=J;for(J|=4,V=t.current;V!==null;){var s=V,o=s.child;if(V.flags&16){var a=s.deletions;if(a!==null){for(var u=0;u<a.length;u++){var h=a[u];for(V=h;V!==null;){var p=V;switch(p.tag){case 0:case 11:case 15:qs(8,p,s)}var f=p.child;if(f!==null)f.return=p,V=f;else for(;V!==null;){p=V;var g=p.sibling,T=p.return;if(S0(p),p===h){V=null;break}if(g!==null){g.return=T,V=g;break}V=T}}}var k=s.alternate;if(k!==null){var N=k.child;if(N!==null){k.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}V=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,V=o;else e:for(;V!==null;){if(s=V,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qs(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,V=v;break e}V=s.return}}var y=t.current;for(V=y;V!==null;){o=V;var I=o.child;if(o.subtreeFlags&2064&&I!==null)I.return=o,V=I;else e:for(o=y;V!==null;){if(a=V,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:du(9,a)}}catch(U){_e(a,a.return,U)}if(a===o){V=null;break e}var D=a.sibling;if(D!==null){D.return=a.return,V=D;break e}V=a.return}}if(J=i,yr(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(iu,t)}catch{}r=!0}return r}finally{ne=n,Ot.transition=e}}return!1}function Mm(t,e,n){e=Wi(n,e),e=f0(t,e,1),t=nr(t,e,1),e=ot(),t!==null&&(Bo(t,1,e),pt(t,e))}function _e(t,e,n){if(t.tag===3)Mm(t,t,n);else for(;e!==null;){if(e.tag===3){Mm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(rr===null||!rr.has(r))){t=Wi(n,t),t=p0(e,t,1),e=nr(e,t,1),t=ot(),e!==null&&(Bo(e,1,t),pt(e,t));break}}e=e.return}}function tT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ot(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(je&n)===n&&(Pe===4||Pe===3&&(je&130023424)===je&&500>Ie()-ff?Fr(t,0):df|=n),pt(t,e)}function D0(t,e){e===0&&(t.mode&1?(e=Tl,Tl<<=1,!(Tl&130023424)&&(Tl=4194304)):e=1);var n=ot();t=Rn(t,e),t!==null&&(Bo(t,e,n),pt(t,n))}function nT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),D0(t,n)}function rT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),D0(t,n)}var L0;L0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dt.current)ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ct=!1,HS(t,e,n);ct=!!(t.flags&131072)}else ct=!1,de&&e.flags&1048576&&jv(e,va,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Jl(t,e),t=e.pendingProps;var i=zi(e,Je.current);Oi(e,n),i=of(null,e,r,t,i,n);var s=lf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ft(r)?(s=!0,_a(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ef(e),i.updater=hu,e.stateNode=i,i._reactInternals=e,Fh(e,r,t,n),e=zh(null,e,r,!0,s,n)):(e.tag=0,de&&s&&Kd(e),rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Jl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=sT(r),t=jt(r,t),i){case 0:e=Bh(null,e,r,t,n);break e;case 1:e=km(null,e,r,t,n);break e;case 11:e=Sm(null,e,r,t,n);break e;case 14:e=Tm(null,e,r,jt(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Bh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),km(t,e,r,i,n);case 3:e:{if(y0(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Wv(t,e),Ca(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Wi(Error(L(423)),e),e=Rm(t,e,r,n,i);break e}else if(r!==i){i=Wi(Error(L(424)),e),e=Rm(t,e,r,n,i);break e}else for(vt=tr(e.stateNode.containerInfo.firstChild),Et=e,de=!0,zt=null,n=$v(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vi(),r===i){e=xn(t,e,n);break e}rt(t,e,r,n)}e=e.child}return e;case 5:return Gv(e),t===null&&Lh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ph(r,i)?o=null:s!==null&&Ph(r,s)&&(e.flags|=32),_0(t,e),rt(t,e,o,n),e.child;case 6:return t===null&&Lh(e),null;case 13:return v0(t,e,n);case 4:return tf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=$i(e,null,r,n):rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Sm(t,e,r,i,n);case 7:return rt(t,e,e.pendingProps,n),e.child;case 8:return rt(t,e,e.pendingProps.children,n),e.child;case 12:return rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,le(wa,r._currentValue),r._currentValue=o,s!==null)if(qt(s.value,o)){if(s.children===i.children&&!dt.current){e=xn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Cn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?u.next=u:(u.next=p.next,p.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Mh(s.return,n,e),a.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(L(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Mh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Oi(e,n),i=bt(i),r=r(i),e.flags|=1,rt(t,e,r,n),e.child;case 14:return r=e.type,i=jt(r,e.pendingProps),i=jt(r.type,i),Tm(t,e,r,i,n);case 15:return g0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:jt(r,i),Jl(t,e),e.tag=1,ft(r)?(t=!0,_a(e)):t=!1,Oi(e,n),d0(e,r,i),Fh(e,r,i,n),zh(null,e,r,!0,t,n);case 19:return w0(t,e,n);case 22:return m0(t,e,n)}throw Error(L(156,e.tag))};function M0(t,e){return uv(t,e)}function iT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,n,r){return new iT(t,e,n,r)}function _f(t){return t=t.prototype,!(!t||!t.isReactComponent)}function sT(t){if(typeof t=="function")return _f(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ld)return 11;if(t===Md)return 14}return 2}function sr(t,e){var n=t.alternate;return n===null?(n=At(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ta(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")_f(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gi:return jr(n.children,i,s,e);case Dd:o=8,i|=8;break;case ah:return t=At(12,n,e,i|2),t.elementType=ah,t.lanes=s,t;case uh:return t=At(13,n,e,i),t.elementType=uh,t.lanes=s,t;case ch:return t=At(19,n,e,i),t.elementType=ch,t.lanes=s,t;case Gy:return pu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Hy:o=10;break e;case Wy:o=9;break e;case Ld:o=11;break e;case Md:o=14;break e;case Bn:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=At(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function jr(t,e,n,r){return t=At(7,t,r,e),t.lanes=n,t}function pu(t,e,n,r){return t=At(22,t,r,e),t.elementType=Gy,t.lanes=n,t.stateNode={isHidden:!1},t}function Lc(t,e,n){return t=At(6,t,null,e),t.lanes=n,t}function Mc(t,e,n){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function oT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yf(t,e,n,r,i,s,o,a,u){return t=new oT(t,e,n,a,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=At(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ef(s),t}function lT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function U0(t){if(!t)return dr;t=t._reactInternals;e:{if(ni(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ft(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(ft(n))return Uv(t,n,e)}return e}function F0(t,e,n,r,i,s,o,a,u){return t=yf(n,r,!0,t,i,s,o,a,u),t.context=U0(null),n=t.current,r=ot(),i=ir(n),s=Cn(r,i),s.callback=e??null,nr(n,s,i),t.current.lanes=i,Bo(t,i,r),pt(t,r),t}function gu(t,e,n,r){var i=e.current,s=ot(),o=ir(i);return n=U0(n),e.context===null?e.context=n:e.pendingContext=n,e=Cn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=nr(i,e,o),t!==null&&(Gt(t,i,o,s),Yl(t,i,o)),o}function Pa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Um(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function vf(t,e){Um(t,e),(t=t.alternate)&&Um(t,e)}function aT(){return null}var j0=typeof reportError=="function"?reportError:function(t){console.error(t)};function wf(t){this._internalRoot=t}mu.prototype.render=wf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));gu(t,e,null,null)};mu.prototype.unmount=wf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){gu(null,t,null,null)}),e[kn]=null}};function mu(t){this._internalRoot=t}mu.prototype.unstable_scheduleHydration=function(t){if(t){var e=mv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Vn.length&&e!==0&&e<Vn[n].priority;n++);Vn.splice(n,0,t),n===0&&yv(t)}};function Ef(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fm(){}function uT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=Pa(o);s.call(h)}}var o=F0(e,r,t,0,null,!1,!1,"",Fm);return t._reactRootContainer=o,t[kn]=o.current,go(t.nodeType===8?t.parentNode:t),Wr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var h=Pa(u);a.call(h)}}var u=yf(t,0,!1,null,null,!1,!1,"",Fm);return t._reactRootContainer=u,t[kn]=u.current,go(t.nodeType===8?t.parentNode:t),Wr(function(){gu(e,u,n,r)}),u}function yu(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var u=Pa(o);a.call(u)}}gu(e,o,t,i)}else o=uT(n,e,t,i,r);return Pa(o)}pv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fs(e.pendingLanes);n!==0&&(jd(e,n|1),pt(e,Ie()),!(J&6)&&(Gi=Ie()+500,yr()))}break;case 13:Wr(function(){var r=Rn(t,1);if(r!==null){var i=ot();Gt(r,t,1,i)}}),vf(t,1)}};Bd=function(t){if(t.tag===13){var e=Rn(t,134217728);if(e!==null){var n=ot();Gt(e,t,134217728,n)}vf(t,134217728)}};gv=function(t){if(t.tag===13){var e=ir(t),n=Rn(t,e);if(n!==null){var r=ot();Gt(n,t,e,r)}vf(t,e)}};mv=function(){return ne};_v=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};wh=function(t,e,n){switch(e){case"input":if(fh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=au(r);if(!i)throw Error(L(90));qy(r),fh(r,i)}}}break;case"textarea":Qy(t,n);break;case"select":e=n.value,e!=null&&xi(t,!!n.multiple,e,!1)}};rv=pf;iv=Wr;var cT={usingClientEntryPoint:!1,Events:[Vo,vi,au,tv,nv,pf]},Ps={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hT={bundleType:Ps.bundleType,version:Ps.version,rendererPackageName:Ps.rendererPackageName,rendererConfig:Ps.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=lv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ps.findFiberByHostInstance||aT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{iu=Ml.inject(hT),tn=Ml}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cT;Tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ef(e))throw Error(L(200));return lT(t,e,null,n)};Tt.createRoot=function(t,e){if(!Ef(t))throw Error(L(299));var n=!1,r="",i=j0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=yf(t,1,!1,null,null,n,!1,r,i),t[kn]=e.current,go(t.nodeType===8?t.parentNode:t),new wf(e)};Tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=lv(e),t=t===null?null:t.stateNode,t};Tt.flushSync=function(t){return Wr(t)};Tt.hydrate=function(t,e,n){if(!_u(e))throw Error(L(200));return yu(null,t,e,!0,n)};Tt.hydrateRoot=function(t,e,n){if(!Ef(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=j0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=F0(e,null,t,1,n??null,i,!1,s,o),t[kn]=e.current,go(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new mu(e)};Tt.render=function(t,e,n){if(!_u(e))throw Error(L(200));return yu(null,t,e,!1,n)};Tt.unmountComponentAtNode=function(t){if(!_u(t))throw Error(L(40));return t._reactRootContainer?(Wr(function(){yu(null,null,t,!1,function(){t._reactRootContainer=null,t[kn]=null})}),!0):!1};Tt.unstable_batchedUpdates=pf;Tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_u(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return yu(t,e,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function B0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(B0)}catch(t){console.error(t)}}B0(),By.exports=Tt;var dT=By.exports,jm=dT;oh.createRoot=jm.createRoot,oh.hydrateRoot=jm.hydrateRoot;/**
 * @remix-run/router v1.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function So(){return So=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},So.apply(this,arguments)}var Xn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Xn||(Xn={}));const Bm="popstate";function fT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Zh("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Aa(i)}return gT(e,n,null,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function z0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function pT(){return Math.random().toString(36).substr(2,8)}function zm(t,e){return{usr:t.state,key:t.key,idx:e}}function Zh(t,e,n,r){return n===void 0&&(n=null),So({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ts(e):e,{state:n,key:e&&e.key||r||pT()})}function Aa(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function ts(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function gT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Xn.Pop,u=null,h=p();h==null&&(h=0,o.replaceState(So({},o.state,{idx:h}),""));function p(){return(o.state||{idx:null}).idx}function f(){a=Xn.Pop;let O=p(),v=O==null?null:O-h;h=O,u&&u({action:a,location:N.location,delta:v})}function g(O,v){a=Xn.Push;let y=Zh(N.location,O,v);h=p()+1;let I=zm(y,h),D=N.createHref(y);try{o.pushState(I,"",D)}catch(U){if(U instanceof DOMException&&U.name==="DataCloneError")throw U;i.location.assign(D)}s&&u&&u({action:a,location:N.location,delta:1})}function T(O,v){a=Xn.Replace;let y=Zh(N.location,O,v);h=p();let I=zm(y,h),D=N.createHref(y);o.replaceState(I,"",D),s&&u&&u({action:a,location:N.location,delta:0})}function k(O){let v=i.location.origin!=="null"?i.location.origin:i.location.href,y=typeof O=="string"?O:Aa(O);return y=y.replace(/ $/,"%20"),ke(v,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,v)}let N={get action(){return a},get location(){return t(i,o)},listen(O){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Bm,f),u=O,()=>{i.removeEventListener(Bm,f),u=null}},createHref(O){return e(i,O)},createURL:k,encodeLocation(O){let v=k(O);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:g,replace:T,go(O){return o.go(O)}};return N}var Vm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Vm||(Vm={}));function mT(t,e,n){return n===void 0&&(n="/"),_T(t,e,n,!1)}function _T(t,e,n,r){let i=typeof e=="string"?ts(e):e,s=Cf(i.pathname||"/",n);if(s==null)return null;let o=V0(t);yT(o);let a=null;for(let u=0;a==null&&u<o.length;++u){let h=NT(s);a=RT(o[u],h,r)}return a}function V0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let u={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(ke(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=or([r,u.relativePath]),p=n.concat(u);s.children&&s.children.length>0&&(ke(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),V0(s.children,e,p,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:TT(h,s.index),routesMeta:p})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let u of $0(s.path))i(s,o,u)}),e}function $0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=$0(r.join("/")),a=[];return a.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&a.push(...o),a.map(u=>t.startsWith("/")&&u===""?"/":u)}function yT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:kT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const vT=/^:[\w-]+$/,wT=3,ET=2,CT=1,IT=10,ST=-2,$m=t=>t==="*";function TT(t,e){let n=t.split("/"),r=n.length;return n.some($m)&&(r+=ST),e&&(r+=ET),n.filter(i=>!$m(i)).reduce((i,s)=>i+(vT.test(s)?wT:s===""?CT:IT),r)}function kT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function RT(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let u=r[a],h=a===r.length-1,p=s==="/"?e:e.slice(s.length)||"/",f=Hm({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},p),g=u.route;if(!f&&h&&n&&!r[r.length-1].route.index&&(f=Hm({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},p)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:or([s,f.pathname]),pathnameBase:bT(or([s,f.pathnameBase])),route:g}),f.pathnameBase!=="/"&&(s=or([s,f.pathnameBase]))}return o}function Hm(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=xT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((h,p,f)=>{let{paramName:g,isOptional:T}=p;if(g==="*"){let N=a[f]||"";o=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const k=a[f];return T&&!k?h[g]=void 0:h[g]=(k||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function xT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),z0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,u)=>(r.push({paramName:a,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function NT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return z0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Cf(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function PT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?ts(t):t;return{pathname:n?n.startsWith("/")?n:AT(n,e):e,search:DT(r),hash:LT(i)}}function AT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Uc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function OT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function H0(t,e){let n=OT(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function W0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=ts(t):(i=So({},t),ke(!i.pathname||!i.pathname.includes("?"),Uc("?","pathname","search",i)),ke(!i.pathname||!i.pathname.includes("#"),Uc("#","pathname","hash",i)),ke(!i.search||!i.search.includes("#"),Uc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),f-=1;i.pathname=g.join("/")}a=f>=0?e[f]:"/"}let u=PT(i,a),h=o&&o!=="/"&&o.endsWith("/"),p=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||p)&&(u.pathname+="/"),u}const or=t=>t.join("/").replace(/\/\/+/g,"/"),bT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),DT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,LT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function MT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const G0=["post","put","patch","delete"];new Set(G0);const UT=["get",...G0];new Set(UT);/**
 * React Router v6.25.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function To(){return To=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},To.apply(this,arguments)}const If=M.createContext(null),FT=M.createContext(null),ri=M.createContext(null),vu=M.createContext(null),vr=M.createContext({outlet:null,matches:[],isDataRoute:!1}),K0=M.createContext(null);function jT(t,e){let{relative:n}=e===void 0?{}:e;Ho()||ke(!1);let{basename:r,navigator:i}=M.useContext(ri),{hash:s,pathname:o,search:a}=Y0(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:or([r,o])),i.createHref({pathname:u,search:a,hash:s})}function Ho(){return M.useContext(vu)!=null}function wu(){return Ho()||ke(!1),M.useContext(vu).location}function q0(t){M.useContext(ri).static||M.useLayoutEffect(t)}function ns(){let{isDataRoute:t}=M.useContext(vr);return t?ek():BT()}function BT(){Ho()||ke(!1);let t=M.useContext(If),{basename:e,future:n,navigator:r}=M.useContext(ri),{matches:i}=M.useContext(vr),{pathname:s}=wu(),o=JSON.stringify(H0(i,n.v7_relativeSplatPath)),a=M.useRef(!1);return q0(()=>{a.current=!0}),M.useCallback(function(h,p){if(p===void 0&&(p={}),!a.current)return;if(typeof h=="number"){r.go(h);return}let f=W0(h,JSON.parse(o),s,p.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:or([e,f.pathname])),(p.replace?r.replace:r.push)(f,p.state,p)},[e,r,o,s,t])}const zT=M.createContext(null);function VT(t){let e=M.useContext(vr).outlet;return e&&M.createElement(zT.Provider,{value:t},e)}function Y0(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=M.useContext(ri),{matches:i}=M.useContext(vr),{pathname:s}=wu(),o=JSON.stringify(H0(i,r.v7_relativeSplatPath));return M.useMemo(()=>W0(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function $T(t,e){return HT(t,e)}function HT(t,e,n,r){Ho()||ke(!1);let{navigator:i}=M.useContext(ri),{matches:s}=M.useContext(vr),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=wu(),p;if(e){var f;let O=typeof e=="string"?ts(e):e;u==="/"||(f=O.pathname)!=null&&f.startsWith(u)||ke(!1),p=O}else p=h;let g=p.pathname||"/",T=g;if(u!=="/"){let O=u.replace(/^\//,"").split("/");T="/"+g.replace(/^\//,"").split("/").slice(O.length).join("/")}let k=mT(t,{pathname:T}),N=YT(k&&k.map(O=>Object.assign({},O,{params:Object.assign({},a,O.params),pathname:or([u,i.encodeLocation?i.encodeLocation(O.pathname).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?u:or([u,i.encodeLocation?i.encodeLocation(O.pathnameBase).pathname:O.pathnameBase])})),s,n,r);return e&&N?M.createElement(vu.Provider,{value:{location:To({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Xn.Pop}},N):N}function WT(){let t=ZT(),e=MT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const GT=M.createElement(WT,null);class KT extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(vr.Provider,{value:this.props.routeContext},M.createElement(K0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function qT(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(If);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(vr.Provider,{value:e},r)}function YT(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let p=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);p>=0||ke(!1),o=o.slice(0,Math.min(o.length,p+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<o.length;p++){let f=o[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(h=p),f.route.id){let{loaderData:g,errors:T}=n,k=f.route.loader&&g[f.route.id]===void 0&&(!T||T[f.route.id]===void 0);if(f.route.lazy||k){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((p,f,g)=>{let T,k=!1,N=null,O=null;n&&(T=a&&f.route.id?a[f.route.id]:void 0,N=f.route.errorElement||GT,u&&(h<0&&g===0?(k=!0,O=null):h===g&&(k=!0,O=f.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,g+1)),y=()=>{let I;return T?I=N:k?I=O:f.route.Component?I=M.createElement(f.route.Component,null):f.route.element?I=f.route.element:I=p,M.createElement(qT,{match:f,routeContext:{outlet:p,matches:v,isDataRoute:n!=null},children:I})};return n&&(f.route.ErrorBoundary||f.route.errorElement||g===0)?M.createElement(KT,{location:n.location,revalidation:n.revalidation,component:N,error:T,children:y(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):y()},null)}var Q0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Q0||{}),Oa=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Oa||{});function QT(t){let e=M.useContext(If);return e||ke(!1),e}function XT(t){let e=M.useContext(FT);return e||ke(!1),e}function JT(t){let e=M.useContext(vr);return e||ke(!1),e}function X0(t){let e=JT(),n=e.matches[e.matches.length-1];return n.route.id||ke(!1),n.route.id}function ZT(){var t;let e=M.useContext(K0),n=XT(Oa.UseRouteError),r=X0(Oa.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function ek(){let{router:t}=QT(Q0.UseNavigateStable),e=X0(Oa.UseNavigateStable),n=M.useRef(!1);return q0(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,To({fromRouteId:e},s)))},[t,e])}function tk(t){return VT(t.context)}function Nr(t){ke(!1)}function nk(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Xn.Pop,navigator:s,static:o=!1,future:a}=t;Ho()&&ke(!1);let u=e.replace(/^\/*/,"/"),h=M.useMemo(()=>({basename:u,navigator:s,static:o,future:To({v7_relativeSplatPath:!1},a)}),[u,a,s,o]);typeof r=="string"&&(r=ts(r));let{pathname:p="/",search:f="",hash:g="",state:T=null,key:k="default"}=r,N=M.useMemo(()=>{let O=Cf(p,u);return O==null?null:{location:{pathname:O,search:f,hash:g,state:T,key:k},navigationType:i}},[u,p,f,g,T,k,i]);return N==null?null:M.createElement(ri.Provider,{value:h},M.createElement(vu.Provider,{children:n,value:N}))}function rk(t){let{children:e,location:n}=t;return $T(ed(e),n)}new Promise(()=>{});function ed(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,ed(r.props.children,s));return}r.type!==Nr&&ke(!1),!r.props.index||!r.props.children||ke(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ed(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.25.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function td(){return td=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},td.apply(this,arguments)}function ik(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function sk(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function ok(t,e){return t.button===0&&(!e||e==="_self")&&!sk(t)}const lk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],ak="6";try{window.__reactRouterVersion=ak}catch{}const uk="startTransition",Wm=tI[uk];function ck(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=fT({window:i,v5Compat:!0}));let o=s.current,[a,u]=M.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},p=M.useCallback(f=>{h&&Wm?Wm(()=>u(f)):u(f)},[u,h]);return M.useLayoutEffect(()=>o.listen(p),[o,p]),M.createElement(nk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const hk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,J0=M.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:u,to:h,preventScrollReset:p,unstable_viewTransition:f}=e,g=ik(e,lk),{basename:T}=M.useContext(ri),k,N=!1;if(typeof h=="string"&&dk.test(h)&&(k=h,hk))try{let I=new URL(window.location.href),D=h.startsWith("//")?new URL(I.protocol+h):new URL(h),U=Cf(D.pathname,T);D.origin===I.origin&&U!=null?h=U+D.search+D.hash:N=!0}catch{}let O=jT(h,{relative:i}),v=fk(h,{replace:o,state:a,target:u,preventScrollReset:p,relative:i,unstable_viewTransition:f});function y(I){r&&r(I),I.defaultPrevented||v(I)}return M.createElement("a",td({},g,{href:k||O,onClick:N||s?r:y,ref:n,target:u}))});var Gm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Gm||(Gm={}));var Km;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Km||(Km={}));function fk(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,u=ns(),h=wu(),p=Y0(t,{relative:o});return M.useCallback(f=>{if(ok(f,n)){f.preventDefault();let g=r!==void 0?r:Aa(h)===Aa(p);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[h,u,p,r,i,n,t,s,o,a])}var qm={};/**
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
 */const Z0={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const F=function(t,e){if(!t)throw rs(e)},rs=function(t){return new Error("Firebase Database ("+Z0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const ew=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pk=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Sf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,p=s>>2,f=(s&3)<<4|a>>4;let g=(a&15)<<2|h>>6,T=h&63;u||(T=64,o||(g=64)),r.push(n[p],n[f],n[g],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ew(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||h==null||f==null)throw new gk;const g=s<<2|a>>4;if(r.push(g),h!==64){const T=a<<4&240|h>>2;if(r.push(T),f!==64){const k=h<<6&192|f;r.push(k)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tw=function(t){const e=ew(t);return Sf.encodeByteArray(e,!0)},ba=function(t){return tw(t).replace(/\./g,"")},Da=function(t){try{return Sf.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mk(t){return nw(void 0,t)}function nw(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_k(n)||(t[n]=nw(t[n],e[n]));return t}function _k(t){return t!=="__proto__"}/**
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
 */function yk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const vk=()=>yk().__FIREBASE_DEFAULTS__,wk=()=>{if(typeof process>"u"||typeof qm>"u")return;const t=qm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ek=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Da(t[1]);return e&&JSON.parse(e)},Tf=()=>{try{return vk()||wk()||Ek()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},rw=t=>{var e,n;return(n=(e=Tf())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},kf=t=>{const e=rw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},iw=()=>{var t;return(t=Tf())===null||t===void 0?void 0:t.config},sw=t=>{var e;return(e=Tf())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Eu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Rf(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ba(JSON.stringify(n)),ba(JSON.stringify(o)),""].join(".")}/**
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function ow(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function lw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ck(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aw(){return Z0.NODE_ADMIN===!0}function uw(){try{return typeof indexedDB=="object"}catch{return!1}}function cw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Ik(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Sk="FirebaseError";class Mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Sk,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ii.prototype.create)}}class ii{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Tk(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mt(i,a,r)}}function Tk(t,e){return t.replace(kk,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const kk=/\{\$([^}]+)}/g;/**
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
 */function ko(t){return JSON.parse(t)}function xe(t){return JSON.stringify(t)}/**
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
 */const hw=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ko(Da(s[0])||""),n=ko(Da(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},Rk=function(t){const e=hw(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},xk=function(t){const e=hw(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function On(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ki(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function nd(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function La(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Ro(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Ym(s)&&Ym(o)){if(!Ro(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ym(t){return t!==null&&typeof t=="object"}/**
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
 */function is(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Bs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class Nk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)r[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)r[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const g=r[f-3]^r[f-8]^r[f-14]^r[f-16];r[f]=(g<<1|g>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],u=this.chain_[4],h,p;for(let f=0;f<80;f++){f<40?f<20?(h=a^s&(o^a),p=1518500249):(h=s^o^a,p=1859775393):f<60?(h=s&o|a&(s|o),p=2400959708):(h=s^o^a,p=3395469782);const g=(i<<5|i>>>27)+h+u+p+r[f]&4294967295;u=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=g}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function Pk(t,e){const n=new Ak(t,e);return n.subscribe.bind(n)}class Ak{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ok(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fc),i.error===void 0&&(i.error=Fc),i.complete===void 0&&(i.complete=Fc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ok(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fc(){}function Nf(t,e){return`${t} failed: ${e} argument `}/**
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
 */const bk=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,F(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Cu=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */const Dk=1e3,Lk=2,Mk=4*60*60*1e3,Uk=.5;function Qm(t,e=Dk,n=Lk){const r=e*Math.pow(n,t),i=Math.round(Uk*r*(Math.random()-.5)*2);return Math.min(Mk,r+i)}/**
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
 */function Se(t){return t&&t._delegate?t._delegate:t}class St{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pr="[DEFAULT]";/**
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
 */class Fk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Eu;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Bk(e))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pr){return this.instances.has(e)}getOptions(e=Pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jk(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pr){return this.component?this.component.multipleInstances?e:Pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jk(t){return t===Pr?void 0:t}function Bk(t){return t.instantiationMode==="EAGER"}/**
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
 */class zk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Fk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(te||(te={}));const Vk={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},$k=te.INFO,Hk={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},Wk=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Hk[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Wo{constructor(e){this.name=e,this._logLevel=$k,this._logHandler=Wk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const Gk=(t,e)=>e.some(n=>t instanceof n);let Xm,Jm;function Kk(){return Xm||(Xm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qk(){return Jm||(Jm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dw=new WeakMap,rd=new WeakMap,fw=new WeakMap,jc=new WeakMap,Pf=new WeakMap;function Yk(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(lr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&dw.set(n,t)}).catch(()=>{}),Pf.set(e,t),e}function Qk(t){if(rd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});rd.set(t,e)}let id={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return lr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xk(t){id=t(id)}function Jk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Bc(this),e,...n);return fw.set(r,e.sort?e.sort():[e]),lr(r)}:qk().includes(t)?function(...e){return t.apply(Bc(this),e),lr(dw.get(this))}:function(...e){return lr(t.apply(Bc(this),e))}}function Zk(t){return typeof t=="function"?Jk(t):(t instanceof IDBTransaction&&Qk(t),Gk(t,Kk())?new Proxy(t,id):t)}function lr(t){if(t instanceof IDBRequest)return Yk(t);if(jc.has(t))return jc.get(t);const e=Zk(t);return e!==t&&(jc.set(t,e),Pf.set(e,t)),e}const Bc=t=>Pf.get(t);function pw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=lr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(lr(o.result),u.oldVersion,u.newVersion,lr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}const eR=["get","getKey","getAll","getAllKeys","count"],tR=["put","add","delete","clear"],zc=new Map;function Zm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(zc.get(e))return zc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=tR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||eR.includes(n)))return;const s=async function(o,...a){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),i&&u.done]))[0]};return zc.set(e,s),s}Xk(t=>({...t,get:(e,n,r)=>Zm(e,n)||t.get(e,n,r),has:(e,n)=>!!Zm(e,n)||t.has(e,n)}));/**
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
 */class nR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sd="@firebase/app",e_="0.10.6";/**
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
 */const Gr=new Wo("@firebase/app"),iR="@firebase/app-compat",sR="@firebase/analytics-compat",oR="@firebase/analytics",lR="@firebase/app-check-compat",aR="@firebase/app-check",uR="@firebase/auth",cR="@firebase/auth-compat",hR="@firebase/database",dR="@firebase/database-compat",fR="@firebase/functions",pR="@firebase/functions-compat",gR="@firebase/installations",mR="@firebase/installations-compat",_R="@firebase/messaging",yR="@firebase/messaging-compat",vR="@firebase/performance",wR="@firebase/performance-compat",ER="@firebase/remote-config",CR="@firebase/remote-config-compat",IR="@firebase/storage",SR="@firebase/storage-compat",TR="@firebase/firestore",kR="@firebase/vertexai-preview",RR="@firebase/firestore-compat",xR="firebase",NR="10.12.3";/**
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
 */const od="[DEFAULT]",PR={[sd]:"fire-core",[iR]:"fire-core-compat",[oR]:"fire-analytics",[sR]:"fire-analytics-compat",[aR]:"fire-app-check",[lR]:"fire-app-check-compat",[uR]:"fire-auth",[cR]:"fire-auth-compat",[hR]:"fire-rtdb",[dR]:"fire-rtdb-compat",[fR]:"fire-fn",[pR]:"fire-fn-compat",[gR]:"fire-iid",[mR]:"fire-iid-compat",[_R]:"fire-fcm",[yR]:"fire-fcm-compat",[vR]:"fire-perf",[wR]:"fire-perf-compat",[ER]:"fire-rc",[CR]:"fire-rc-compat",[IR]:"fire-gcs",[SR]:"fire-gcs-compat",[TR]:"fire-fst",[RR]:"fire-fst-compat",[kR]:"fire-vertex","fire-js":"fire-js",[xR]:"fire-js-all"};/**
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
 */const Ma=new Map,AR=new Map,ld=new Map;function t_(t,e){try{t.container.addComponent(e)}catch(n){Gr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Lt(t){const e=t.name;if(ld.has(e))return Gr.debug(`There were multiple attempts to register component ${e}.`),!1;ld.set(e,t);for(const n of Ma.values())t_(n,t);for(const n of AR.values())t_(n,t);return!0}function bn(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zt(t){return t.settings!==void 0}/**
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
 */const OR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ar=new ii("app","Firebase",OR);/**
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
 */class bR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new St("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ar.create("app-deleted",{appName:this._name})}}/**
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
 */const wr=NR;function gw(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:od,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ar.create("bad-app-name",{appName:String(i)});if(n||(n=iw()),!n)throw ar.create("no-options");const s=Ma.get(i);if(s){if(Ro(n,s.options)&&Ro(r,s.config))return s;throw ar.create("duplicate-app",{appName:i})}const o=new zk(i);for(const u of ld.values())o.addComponent(u);const a=new bR(n,r,o);return Ma.set(i,a),a}function Go(t=od){const e=Ma.get(t);if(!e&&t===od&&iw())return gw();if(!e)throw ar.create("no-app",{appName:t});return e}function Xe(t,e,n){var r;let i=(r=PR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Gr.warn(a.join(" "));return}Lt(new St(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const DR="firebase-heartbeat-database",LR=1,xo="firebase-heartbeat-store";let Vc=null;function mw(){return Vc||(Vc=pw(DR,LR,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(xo)}catch(n){console.warn(n)}}}}).catch(t=>{throw ar.create("idb-open",{originalErrorMessage:t.message})})),Vc}async function MR(t){try{const n=(await mw()).transaction(xo),r=await n.objectStore(xo).get(_w(t));return await n.done,r}catch(e){if(e instanceof Mt)Gr.warn(e.message);else{const n=ar.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Gr.warn(n.message)}}}async function n_(t,e){try{const r=(await mw()).transaction(xo,"readwrite");await r.objectStore(xo).put(e,_w(t)),await r.done}catch(n){if(n instanceof Mt)Gr.warn(n.message);else{const r=ar.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Gr.warn(r.message)}}}function _w(t){return`${t.name}!${t.options.appId}`}/**
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
 */const UR=1024,FR=30*24*60*60*1e3;class jR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zR(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=r_();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=FR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=r_(),{heartbeatsToSend:r,unsentEntries:i}=BR(this._heartbeatsCache.heartbeats),s=ba(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function r_(){return new Date().toISOString().substring(0,10)}function BR(t,e=UR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),i_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),i_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zR{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uw()?cw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await MR(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return n_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return n_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function i_(t){return ba(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function VR(t){Lt(new St("platform-logger",e=>new nR(e),"PRIVATE")),Lt(new St("heartbeat",e=>new jR(e),"PRIVATE")),Xe(sd,e_,t),Xe(sd,e_,"esm2017"),Xe("fire-js","")}VR("");function Af(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function yw(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const $R=yw,vw=new ii("auth","Firebase",yw());/**
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
 */const Ua=new Wo("@firebase/auth");function HR(t,...e){Ua.logLevel<=te.WARN&&Ua.warn(`Auth (${wr}): ${t}`,...e)}function na(t,...e){Ua.logLevel<=te.ERROR&&Ua.error(`Auth (${wr}): ${t}`,...e)}/**
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
 */function Yt(t,...e){throw Of(t,...e)}function rn(t,...e){return Of(t,...e)}function ww(t,e,n){const r=Object.assign(Object.assign({},$R()),{[e]:n});return new ii("auth","Firebase",r).create(e,{appName:t.name})}function In(t){return ww(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Of(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return vw.create(t,...e)}function H(t,e,...n){if(!t)throw Of(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw na(e),new Error(e)}function Nn(t,e){t||yn(e)}/**
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
 */function ad(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function WR(){return s_()==="http:"||s_()==="https:"}function s_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function GR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(WR()||ow()||"connection"in navigator)?navigator.onLine:!0}function KR(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ko{constructor(e,n){this.shortDelay=e,this.longDelay=n,Nn(n>e,"Short delay should be less than long delay!"),this.isMobile=xf()||lw()}get(){return GR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function bf(t,e){Nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ew{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const qR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const YR=new Ko(3e4,6e4);function Er(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Cr(t,e,n,r,i={}){return Cw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=is(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),Ew.fetch()(Iw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function Cw(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},qR),e);try{const i=new XR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ul(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,h]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ul(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ul(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ul(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ww(t,p,h);Yt(t,p)}}catch(i){if(i instanceof Mt)throw i;Yt(t,"network-request-failed",{message:String(i)})}}async function qo(t,e,n,r,i={}){const s=await Cr(t,e,n,r,i);return"mfaPendingCredential"in s&&Yt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Iw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?bf(t.config,i):`${t.config.apiScheme}://${i}`}function QR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class XR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),YR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ul(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=rn(t,e,r);return i.customData._tokenResponse=n,i}function o_(t){return t!==void 0&&t.enterprise!==void 0}class JR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return QR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ZR(t,e){return Cr(t,"GET","/v2/recaptchaConfig",Er(t,e))}/**
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
 */async function e2(t,e){return Cr(t,"POST","/v1/accounts:delete",e)}async function Sw(t,e){return Cr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function t2(t,e=!1){const n=Se(t),r=await n.getIdToken(e),i=Df(r);H(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Xs($c(i.auth_time)),issuedAtTime:Xs($c(i.iat)),expirationTime:Xs($c(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function $c(t){return Number(t)*1e3}function Df(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return na("JWT malformed, contained fewer than 3 sections"),null;try{const i=Da(n);return i?JSON.parse(i):(na("Failed to decode base64 JWT payload"),null)}catch(i){return na("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function l_(t){const e=Df(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function No(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mt&&n2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function n2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class r2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ud{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await No(t,Sw(n,{idToken:r}));H(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Tw(s.providerUserInfo):[],a=s2(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),p=u?h:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ud(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,f)}async function i2(t){const e=Se(t);await Fa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function s2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Tw(t){return t.map(e=>{var{providerId:n}=e,r=Af(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function o2(t,e){const n=await Cw(t,{},async()=>{const r=is({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Iw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ew.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function l2(t,e){return Cr(t,"POST","/v2/accounts:revokeToken",Er(t,e))}/**
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
 */class Di{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):l_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){H(e.length!==0,"internal-error");const n=l_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(H(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await o2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Di;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(H(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(H(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Di,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
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
 */function jn(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class vn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Af(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new r2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ud(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await No(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return t2(this,e)}reload(){return i2(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new vn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zt(this.auth.app))return Promise.reject(In(this.auth));const e=await this.getIdToken();return await No(this,e2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,h,p;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,T=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,k=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(a=n.tenantId)!==null&&a!==void 0?a:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,v=(h=n.createdAt)!==null&&h!==void 0?h:void 0,y=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:I,emailVerified:D,isAnonymous:U,providerData:B,stsTokenManager:E}=n;H(I&&E,e,"internal-error");const _=Di.fromJSON(this.name,E);H(typeof I=="string",e,"internal-error"),jn(f,e.name),jn(g,e.name),H(typeof D=="boolean",e,"internal-error"),H(typeof U=="boolean",e,"internal-error"),jn(T,e.name),jn(k,e.name),jn(N,e.name),jn(O,e.name),jn(v,e.name),jn(y,e.name);const w=new vn({uid:I,auth:e,email:g,emailVerified:D,displayName:f,isAnonymous:U,photoURL:k,phoneNumber:T,tenantId:N,stsTokenManager:_,createdAt:v,lastLoginAt:y});return B&&Array.isArray(B)&&(w.providerData=B.map(S=>Object.assign({},S))),O&&(w._redirectEventId=O),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Di;i.updateFromServerResponse(n);const s=new vn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Fa(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];H(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Tw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new Di;a.updateFromIdToken(r);const u=new vn({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new ud(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const a_=new Map;function wn(t){Nn(t instanceof Function,"Expected a class definition");let e=a_.get(t);return e?(Nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,a_.set(t,e),e)}/**
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
 */class kw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}kw.type="NONE";const u_=kw;/**
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
 */function ra(t,e,n){return`firebase:${t}:${e}:${n}`}class Li{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ra(this.userKey,i.apiKey,s),this.fullPersistenceKey=ra("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?vn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Li(wn(u_),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||wn(u_);const o=ra(r,e.config.apiKey,e.name);let a=null;for(const h of n)try{const p=await h._get(o);if(p){const f=vn._fromJSON(e,p);h!==s&&(a=f),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Li(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Li(s,e,r))}}/**
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
 */function c_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Aw(e))return"Blackberry";if(Ow(e))return"Webos";if(Lf(e))return"Safari";if((e.includes("chrome/")||xw(e))&&!e.includes("edge/"))return"Chrome";if(Pw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rw(t=Ze()){return/firefox\//i.test(t)}function Lf(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xw(t=Ze()){return/crios\//i.test(t)}function Nw(t=Ze()){return/iemobile/i.test(t)}function Pw(t=Ze()){return/android/i.test(t)}function Aw(t=Ze()){return/blackberry/i.test(t)}function Ow(t=Ze()){return/webos/i.test(t)}function Iu(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function a2(t=Ze()){var e;return Iu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function u2(){return Ck()&&document.documentMode===10}function bw(t=Ze()){return Iu(t)||Pw(t)||Ow(t)||Aw(t)||/windows phone/i.test(t)||Nw(t)}function c2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Dw(t,e=[]){let n;switch(t){case"Browser":n=c_(Ze());break;case"Worker":n=`${c_(Ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wr}/${r}`}/**
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
 */class h2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const u=e(s);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function d2(t,e={}){return Cr(t,"GET","/v2/passwordPolicy",Er(t,e))}/**
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
 */const f2=6;class p2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:f2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class g2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new h_(this),this.idTokenSubscription=new h_(this),this.beforeStateQueue=new h2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=vw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Li.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Sw(this,{idToken:e}),r=await vn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zt(this.app))return Promise.reject(In(this));const n=e?Se(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zt(this.app)?Promise.reject(In(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zt(this.app)?Promise.reject(In(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await d2(this),n=new p2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ii("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await l2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await Li.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Dw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&HR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function si(t){return Se(t)}class h_{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pk(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Su={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function m2(t){Su=t}function Lw(t){return Su.loadJS(t)}function _2(){return Su.recaptchaEnterpriseScript}function y2(){return Su.gapiScript}function v2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const w2="recaptcha-enterprise",E2="NO_RECAPTCHA";class C2{constructor(e){this.type=w2,this.auth=si(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{ZR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const h=new JR(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{a(u)})})}function i(s,o,a){const u=window.grecaptcha;o_(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(E2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&o_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=_2();u.length!==0&&(u+=a),Lw(u).then(()=>{i(a,s,o)}).catch(h=>{o(h)})}}).catch(a=>{o(a)})})}}async function d_(t,e,n,r=!1){const i=new C2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function cd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await d_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await d_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function I2(t,e){const n=bn(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ro(s,e??{}))return i;Yt(i,"already-initialized")}return n.initialize({options:e})}function S2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function T2(t,e,n){const r=si(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Mw(e),{host:o,port:a}=k2(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),R2()}function Mw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function k2(t){const e=Mw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:f_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:f_(o)}}}function f_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function R2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Mf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function x2(t,e){return Cr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function N2(t,e){return qo(t,"POST","/v1/accounts:signInWithPassword",Er(t,e))}/**
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
 */async function P2(t,e){return qo(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}async function A2(t,e){return qo(t,"POST","/v1/accounts:signInWithEmailLink",Er(t,e))}/**
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
 */class Po extends Mf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Po(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Po(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cd(e,n,"signInWithPassword",N2);case"emailLink":return P2(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return cd(e,r,"signUpPassword",x2);case"emailLink":return A2(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Mi(t,e){return qo(t,"POST","/v1/accounts:signInWithIdp",Er(t,e))}/**
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
 */const O2="http://localhost";class Kr extends Mf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Af(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Kr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mi(e,n)}buildRequest(){const e={requestUri:O2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=is(n)}return e}}/**
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
 */function b2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function D2(t){const e=Bs(zs(t)).link,n=e?Bs(zs(e)).deep_link_id:null,r=Bs(zs(t)).deep_link_id;return(r?Bs(zs(r)).link:null)||r||n||e||t}class Uf{constructor(e){var n,r,i,s,o,a;const u=Bs(zs(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,f=b2((i=u.mode)!==null&&i!==void 0?i:null);H(h&&p&&f,"argument-error"),this.apiKey=h,this.operation=f,this.code=p,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=D2(e);try{return new Uf(n)}catch{return null}}}/**
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
 */class ss{constructor(){this.providerId=ss.PROVIDER_ID}static credential(e,n){return Po._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Uf.parseLink(n);return H(r,"argument-error"),Po._fromEmailAndCode(e,r.code,r.tenantId)}}ss.PROVIDER_ID="password";ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Uw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Yo extends Uw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Hn extends Yo{constructor(){super("facebook.com")}static credential(e){return Kr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
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
 */class Wn extends Yo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Wn.credential(n,r)}catch{return null}}}Wn.GOOGLE_SIGN_IN_METHOD="google.com";Wn.PROVIDER_ID="google.com";/**
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
 */class Gn extends Yo{constructor(){super("github.com")}static credential(e){return Kr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
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
 */class Kn extends Yo{constructor(){super("twitter.com")}static credential(e,n){return Kr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
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
 */async function L2(t,e){return qo(t,"POST","/v1/accounts:signUp",Er(t,e))}/**
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
 */class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await vn._fromIdTokenResponse(e,r,i),o=p_(r);return new qr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=p_(r);return new qr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function p_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ja extends Mt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ja.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ja(e,n,r,i)}}function Fw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ja._fromErrorAndOperation(t,s,e,r):s})}async function M2(t,e,n=!1){const r=await No(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return qr._forOperation(t,"link",r)}/**
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
 */async function U2(t,e,n=!1){const{auth:r}=t;if(Zt(r.app))return Promise.reject(In(r));const i="reauthenticate";try{const s=await No(t,Fw(r,i,e,t),n);H(s.idToken,r,"internal-error");const o=Df(s.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),qr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),s}}/**
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
 */async function jw(t,e,n=!1){if(Zt(t.app))return Promise.reject(In(t));const r="signIn",i=await Fw(t,r,e),s=await qr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function F2(t,e){return jw(si(t),e)}/**
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
 */async function Bw(t){const e=si(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function j2(t,e,n){if(Zt(t.app))return Promise.reject(In(t));const r=si(t),o=await cd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",L2).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Bw(t),u}),a=await qr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function B2(t,e,n){return Zt(t.app)?Promise.reject(In(t)):F2(Se(t),ss.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Bw(t),r})}function z2(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function V2(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function $2(t){return Se(t).signOut()}const Ba="__sak";/**
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
 */class zw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ba,"1"),this.storage.removeItem(Ba),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function H2(){const t=Ze();return Lf(t)||Iu(t)}const W2=1e3,G2=10;class Vw extends zw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=H2()&&c2(),this.fallbackToPolling=bw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);u2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,G2):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},W2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Vw.type="LOCAL";const K2=Vw;/**
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
 */class $w extends zw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$w.type="SESSION";const Hw=$w;/**
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
 */function q2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Tu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async h=>h(n.origin,s)),u=await q2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tu.receivers=[];/**
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
 */function Ff(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Y2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const h=Ff("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const g=f;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(g.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function sn(){return window}function Q2(t){sn().location.href=t}/**
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
 */function Ww(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function X2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function J2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Z2(){return Ww()?self:null}/**
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
 */const Gw="firebaseLocalStorageDb",ex=1,za="firebaseLocalStorage",Kw="fbase_key";class Qo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ku(t,e){return t.transaction([za],e?"readwrite":"readonly").objectStore(za)}function tx(){const t=indexedDB.deleteDatabase(Gw);return new Qo(t).toPromise()}function hd(){const t=indexedDB.open(Gw,ex);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(za,{keyPath:Kw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(za)?e(r):(r.close(),await tx(),e(await hd()))})})}async function g_(t,e,n){const r=ku(t,!0).put({[Kw]:e,value:n});return new Qo(r).toPromise()}async function nx(t,e){const n=ku(t,!1).get(e),r=await new Qo(n).toPromise();return r===void 0?null:r.value}function m_(t,e){const n=ku(t,!0).delete(e);return new Qo(n).toPromise()}const rx=800,ix=3;class qw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ix)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ww()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tu._getInstance(Z2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await X2(),!this.activeServiceWorker)return;this.sender=new Y2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||J2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hd();return await g_(e,Ba,"1"),await m_(e,Ba),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>g_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>m_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ku(i,!1).getAll();return new Qo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}qw.type="LOCAL";const sx=qw;new Ko(3e4,6e4);/**
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
 */function ox(t,e){return e?wn(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class jf extends Mf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lx(t){return jw(t.auth,new jf(t),t.bypassAuthState)}function ax(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),U2(n,new jf(t),t.bypassAuthState)}async function ux(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),M2(n,new jf(t),t.bypassAuthState)}/**
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
 */class Yw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lx;case"linkViaPopup":case"linkViaRedirect":return ux;case"reauthViaPopup":case"reauthViaRedirect":return ax;default:Yt(this.auth,"internal-error")}}resolve(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const cx=new Ko(2e3,1e4);class ki extends Yw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ki.currentPopupAction&&ki.currentPopupAction.cancel(),ki.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){Nn(this.filter.length===1,"Popup operations only handle one event");const e=Ff();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ki.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cx.get())};e()}}ki.currentPopupAction=null;/**
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
 */const hx="pendingRedirect",ia=new Map;class dx extends Yw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ia.get(this.auth._key());if(!e){try{const r=await fx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ia.set(this.auth._key(),e)}return this.bypassAuthState||ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function fx(t,e){const n=mx(e),r=gx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function px(t,e){ia.set(t._key(),e)}function gx(t){return wn(t._redirectPersistence)}function mx(t){return ra(hx,t.config.apiKey,t.name)}async function _x(t,e,n=!1){if(Zt(t.app))return Promise.reject(In(t));const r=si(t),i=ox(r,e),o=await new dx(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const yx=10*60*1e3;class vx{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=yx&&this.cachedEventUids.clear(),this.cachedEventUids.has(__(e))}saveEventToCache(e){this.cachedEventUids.add(__(e)),this.lastProcessedEventTime=Date.now()}}function __(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function wx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qw(t);default:return!1}}/**
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
 */async function Ex(t,e={}){return Cr(t,"GET","/v1/projects",e)}/**
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
 */const Cx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ix=/^https?/;async function Sx(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ex(t);for(const n of e)try{if(Tx(n))return}catch{}Yt(t,"unauthorized-domain")}function Tx(t){const e=ad(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Ix.test(n))return!1;if(Cx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const kx=new Ko(3e4,6e4);function y_(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Rx(t){return new Promise((e,n)=>{var r,i,s;function o(){y_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{y_(),n(rn(t,"network-request-failed"))},timeout:kx.get()})}if(!((i=(r=sn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=sn().gapi)===null||s===void 0)&&s.load)o();else{const a=v2("iframefcb");return sn()[a]=()=>{gapi.load?o():n(rn(t,"network-request-failed"))},Lw(`${y2()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw sa=null,e})}let sa=null;function xx(t){return sa=sa||Rx(t),sa}/**
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
 */const Nx=new Ko(5e3,15e3),Px="__/auth/iframe",Ax="emulator/auth/iframe",Ox={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dx(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?bf(e,Ax):`https://${t.config.authDomain}/${Px}`,r={apiKey:e.apiKey,appName:t.name,v:wr},i=bx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${is(r).slice(1)}`}async function Lx(t){const e=await xx(t),n=sn().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:Dx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ox,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),a=sn().setTimeout(()=>{s(o)},Nx.get());function u(){sn().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Mx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Ux=500,Fx=600,jx="_blank",Bx="http://localhost";class v_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zx(t,e,n,r=Ux,i=Fx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},Mx),{width:r.toString(),height:i.toString(),top:s,left:o}),h=Ze().toLowerCase();n&&(a=xw(h)?jx:n),Rw(h)&&(e=e||Bx,u.scrollbars="yes");const p=Object.entries(u).reduce((g,[T,k])=>`${g}${T}=${k},`,"");if(a2(h)&&a!=="_self")return Vx(e||"",a),new v_(null);const f=window.open(e||"",a,p);H(f,t,"popup-blocked");try{f.focus()}catch{}return new v_(f)}function Vx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const $x="__/auth/handler",Hx="emulator/auth/handler",Wx=encodeURIComponent("fac");async function w_(t,e,n,r,i,s){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:wr,eventId:i};if(e instanceof Uw){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nd(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,f]of Object.entries({}))o[p]=f}if(e instanceof Yo){const p=e.getScopes().filter(f=>f!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const p of Object.keys(a))a[p]===void 0&&delete a[p];const u=await t._getAppCheckToken(),h=u?`#${Wx}=${encodeURIComponent(u)}`:"";return`${Gx(t)}?${is(a).slice(1)}${h}`}function Gx({config:t}){return t.emulator?bf(t,Hx):`https://${t.authDomain}/${$x}`}/**
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
 */const Hc="webStorageSupport";class Kx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hw,this._completeRedirectFn=_x,this._overrideRedirectResult=px}async _openPopup(e,n,r,i){var s;Nn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await w_(e,n,r,ad(),i);return zx(e,o,Ff())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await w_(e,n,r,ad(),i);return Q2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Nn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Lx(e),r=new vx(e);return n.register("authEvent",i=>(H(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hc,{type:Hc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hc];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Sx(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return bw()||Lf()||Iu()}}const qx=Kx;var E_="@firebase/auth",C_="1.7.5";/**
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
 */class Yx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Qx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Xx(t){Lt(new St("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dw(t)},h=new g2(r,i,s,u);return S2(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Lt(new St("auth-internal",e=>{const n=si(e.getProvider("auth").getImmediate());return(r=>new Yx(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(E_,C_,Qx(t)),Xe(E_,C_,"esm2017")}/**
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
 */const Jx=5*60,Zx=sw("authIdTokenMaxAge")||Jx;let I_=null;const eN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Zx)return;const i=n==null?void 0:n.token;I_!==i&&(I_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function tN(t=Go()){const e=bn(t,"auth");if(e.isInitialized())return e.getImmediate();const n=I2(t,{popupRedirectResolver:qx,persistence:[sx,K2,Hw]}),r=sw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=eN(s.toString());V2(n,o,()=>o(n.currentUser)),z2(n,a=>o(a))}}const i=rw("auth");return i&&T2(n,`http://${i}`),n}function nN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}m2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=rn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",nN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Xx("Browser");var rN="firebase",iN="10.12.3";/**
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
 */Xe(rN,iN,"app");var S_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,_){function w(){}w.prototype=_.prototype,E.D=_.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(S,R,P){for(var C=Array(arguments.length-2),Rt=2;Rt<arguments.length;Rt++)C[Rt-2]=arguments[Rt];return _.prototype[R].apply(S,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,_,w){w||(w=0);var S=Array(16);if(typeof _=="string")for(var R=0;16>R;++R)S[R]=_.charCodeAt(w++)|_.charCodeAt(w++)<<8|_.charCodeAt(w++)<<16|_.charCodeAt(w++)<<24;else for(R=0;16>R;++R)S[R]=_[w++]|_[w++]<<8|_[w++]<<16|_[w++]<<24;_=E.g[0],w=E.g[1],R=E.g[2];var P=E.g[3],C=_+(P^w&(R^P))+S[0]+3614090360&4294967295;_=w+(C<<7&4294967295|C>>>25),C=P+(R^_&(w^R))+S[1]+3905402710&4294967295,P=_+(C<<12&4294967295|C>>>20),C=R+(w^P&(_^w))+S[2]+606105819&4294967295,R=P+(C<<17&4294967295|C>>>15),C=w+(_^R&(P^_))+S[3]+3250441966&4294967295,w=R+(C<<22&4294967295|C>>>10),C=_+(P^w&(R^P))+S[4]+4118548399&4294967295,_=w+(C<<7&4294967295|C>>>25),C=P+(R^_&(w^R))+S[5]+1200080426&4294967295,P=_+(C<<12&4294967295|C>>>20),C=R+(w^P&(_^w))+S[6]+2821735955&4294967295,R=P+(C<<17&4294967295|C>>>15),C=w+(_^R&(P^_))+S[7]+4249261313&4294967295,w=R+(C<<22&4294967295|C>>>10),C=_+(P^w&(R^P))+S[8]+1770035416&4294967295,_=w+(C<<7&4294967295|C>>>25),C=P+(R^_&(w^R))+S[9]+2336552879&4294967295,P=_+(C<<12&4294967295|C>>>20),C=R+(w^P&(_^w))+S[10]+4294925233&4294967295,R=P+(C<<17&4294967295|C>>>15),C=w+(_^R&(P^_))+S[11]+2304563134&4294967295,w=R+(C<<22&4294967295|C>>>10),C=_+(P^w&(R^P))+S[12]+1804603682&4294967295,_=w+(C<<7&4294967295|C>>>25),C=P+(R^_&(w^R))+S[13]+4254626195&4294967295,P=_+(C<<12&4294967295|C>>>20),C=R+(w^P&(_^w))+S[14]+2792965006&4294967295,R=P+(C<<17&4294967295|C>>>15),C=w+(_^R&(P^_))+S[15]+1236535329&4294967295,w=R+(C<<22&4294967295|C>>>10),C=_+(R^P&(w^R))+S[1]+4129170786&4294967295,_=w+(C<<5&4294967295|C>>>27),C=P+(w^R&(_^w))+S[6]+3225465664&4294967295,P=_+(C<<9&4294967295|C>>>23),C=R+(_^w&(P^_))+S[11]+643717713&4294967295,R=P+(C<<14&4294967295|C>>>18),C=w+(P^_&(R^P))+S[0]+3921069994&4294967295,w=R+(C<<20&4294967295|C>>>12),C=_+(R^P&(w^R))+S[5]+3593408605&4294967295,_=w+(C<<5&4294967295|C>>>27),C=P+(w^R&(_^w))+S[10]+38016083&4294967295,P=_+(C<<9&4294967295|C>>>23),C=R+(_^w&(P^_))+S[15]+3634488961&4294967295,R=P+(C<<14&4294967295|C>>>18),C=w+(P^_&(R^P))+S[4]+3889429448&4294967295,w=R+(C<<20&4294967295|C>>>12),C=_+(R^P&(w^R))+S[9]+568446438&4294967295,_=w+(C<<5&4294967295|C>>>27),C=P+(w^R&(_^w))+S[14]+3275163606&4294967295,P=_+(C<<9&4294967295|C>>>23),C=R+(_^w&(P^_))+S[3]+4107603335&4294967295,R=P+(C<<14&4294967295|C>>>18),C=w+(P^_&(R^P))+S[8]+1163531501&4294967295,w=R+(C<<20&4294967295|C>>>12),C=_+(R^P&(w^R))+S[13]+2850285829&4294967295,_=w+(C<<5&4294967295|C>>>27),C=P+(w^R&(_^w))+S[2]+4243563512&4294967295,P=_+(C<<9&4294967295|C>>>23),C=R+(_^w&(P^_))+S[7]+1735328473&4294967295,R=P+(C<<14&4294967295|C>>>18),C=w+(P^_&(R^P))+S[12]+2368359562&4294967295,w=R+(C<<20&4294967295|C>>>12),C=_+(w^R^P)+S[5]+4294588738&4294967295,_=w+(C<<4&4294967295|C>>>28),C=P+(_^w^R)+S[8]+2272392833&4294967295,P=_+(C<<11&4294967295|C>>>21),C=R+(P^_^w)+S[11]+1839030562&4294967295,R=P+(C<<16&4294967295|C>>>16),C=w+(R^P^_)+S[14]+4259657740&4294967295,w=R+(C<<23&4294967295|C>>>9),C=_+(w^R^P)+S[1]+2763975236&4294967295,_=w+(C<<4&4294967295|C>>>28),C=P+(_^w^R)+S[4]+1272893353&4294967295,P=_+(C<<11&4294967295|C>>>21),C=R+(P^_^w)+S[7]+4139469664&4294967295,R=P+(C<<16&4294967295|C>>>16),C=w+(R^P^_)+S[10]+3200236656&4294967295,w=R+(C<<23&4294967295|C>>>9),C=_+(w^R^P)+S[13]+681279174&4294967295,_=w+(C<<4&4294967295|C>>>28),C=P+(_^w^R)+S[0]+3936430074&4294967295,P=_+(C<<11&4294967295|C>>>21),C=R+(P^_^w)+S[3]+3572445317&4294967295,R=P+(C<<16&4294967295|C>>>16),C=w+(R^P^_)+S[6]+76029189&4294967295,w=R+(C<<23&4294967295|C>>>9),C=_+(w^R^P)+S[9]+3654602809&4294967295,_=w+(C<<4&4294967295|C>>>28),C=P+(_^w^R)+S[12]+3873151461&4294967295,P=_+(C<<11&4294967295|C>>>21),C=R+(P^_^w)+S[15]+530742520&4294967295,R=P+(C<<16&4294967295|C>>>16),C=w+(R^P^_)+S[2]+3299628645&4294967295,w=R+(C<<23&4294967295|C>>>9),C=_+(R^(w|~P))+S[0]+4096336452&4294967295,_=w+(C<<6&4294967295|C>>>26),C=P+(w^(_|~R))+S[7]+1126891415&4294967295,P=_+(C<<10&4294967295|C>>>22),C=R+(_^(P|~w))+S[14]+2878612391&4294967295,R=P+(C<<15&4294967295|C>>>17),C=w+(P^(R|~_))+S[5]+4237533241&4294967295,w=R+(C<<21&4294967295|C>>>11),C=_+(R^(w|~P))+S[12]+1700485571&4294967295,_=w+(C<<6&4294967295|C>>>26),C=P+(w^(_|~R))+S[3]+2399980690&4294967295,P=_+(C<<10&4294967295|C>>>22),C=R+(_^(P|~w))+S[10]+4293915773&4294967295,R=P+(C<<15&4294967295|C>>>17),C=w+(P^(R|~_))+S[1]+2240044497&4294967295,w=R+(C<<21&4294967295|C>>>11),C=_+(R^(w|~P))+S[8]+1873313359&4294967295,_=w+(C<<6&4294967295|C>>>26),C=P+(w^(_|~R))+S[15]+4264355552&4294967295,P=_+(C<<10&4294967295|C>>>22),C=R+(_^(P|~w))+S[6]+2734768916&4294967295,R=P+(C<<15&4294967295|C>>>17),C=w+(P^(R|~_))+S[13]+1309151649&4294967295,w=R+(C<<21&4294967295|C>>>11),C=_+(R^(w|~P))+S[4]+4149444226&4294967295,_=w+(C<<6&4294967295|C>>>26),C=P+(w^(_|~R))+S[11]+3174756917&4294967295,P=_+(C<<10&4294967295|C>>>22),C=R+(_^(P|~w))+S[2]+718787259&4294967295,R=P+(C<<15&4294967295|C>>>17),C=w+(P^(R|~_))+S[9]+3951481745&4294967295,E.g[0]=E.g[0]+_&4294967295,E.g[1]=E.g[1]+(R+(C<<21&4294967295|C>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+P&4294967295}r.prototype.u=function(E,_){_===void 0&&(_=E.length);for(var w=_-this.blockSize,S=this.B,R=this.h,P=0;P<_;){if(R==0)for(;P<=w;)i(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<_;)if(S[R++]=E.charCodeAt(P++),R==this.blockSize){i(this,S),R=0;break}}else for(;P<_;)if(S[R++]=E[P++],R==this.blockSize){i(this,S),R=0;break}}this.h=R,this.o+=_},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var _=1;_<E.length-8;++_)E[_]=0;var w=8*this.o;for(_=E.length-8;_<E.length;++_)E[_]=w&255,w/=256;for(this.u(E),E=Array(16),_=w=0;4>_;++_)for(var S=0;32>S;S+=8)E[w++]=this.g[_]>>>S&255;return E};function s(E,_){var w=a;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=_(E)}function o(E,_){this.h=_;for(var w=[],S=!0,R=E.length-1;0<=R;R--){var P=E[R]|0;S&&P==_||(w[R]=P,S=!1)}this.g=w}var a={};function u(E){return-128<=E&&128>E?s(E,function(_){return new o([_|0],0>_?-1:0)}):new o([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return f;if(0>E)return O(h(-E));for(var _=[],w=1,S=0;E>=w;S++)_[S]=E/w|0,w*=4294967296;return new o(_,0)}function p(E,_){if(E.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(E.charAt(0)=="-")return O(p(E.substring(1),_));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(_,8)),S=f,R=0;R<E.length;R+=8){var P=Math.min(8,E.length-R),C=parseInt(E.substring(R,R+P),_);8>P?(P=h(Math.pow(_,P)),S=S.j(P).add(h(C))):(S=S.j(w),S=S.add(h(C)))}return S}var f=u(0),g=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var E=0,_=1,w=0;w<this.g.length;w++){var S=this.i(w);E+=(0<=S?S:4294967296+S)*_,_*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(k(this))return"0";if(N(this))return"-"+O(this).toString(E);for(var _=h(Math.pow(E,6)),w=this,S="";;){var R=D(w,_).g;w=v(w,R.j(_));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=R,k(w))return P+S;for(;6>P.length;)P="0"+P;S=P+S}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function k(E){if(E.h!=0)return!1;for(var _=0;_<E.g.length;_++)if(E.g[_]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=v(this,E),N(E)?-1:k(E)?0:1};function O(E){for(var _=E.g.length,w=[],S=0;S<_;S++)w[S]=~E.g[S];return new o(w,~E.h).add(g)}t.abs=function(){return N(this)?O(this):this},t.add=function(E){for(var _=Math.max(this.g.length,E.g.length),w=[],S=0,R=0;R<=_;R++){var P=S+(this.i(R)&65535)+(E.i(R)&65535),C=(P>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);S=C>>>16,P&=65535,C&=65535,w[R]=C<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function v(E,_){return E.add(O(_))}t.j=function(E){if(k(this)||k(E))return f;if(N(this))return N(E)?O(this).j(O(E)):O(O(this).j(E));if(N(E))return O(this.j(O(E)));if(0>this.l(T)&&0>E.l(T))return h(this.m()*E.m());for(var _=this.g.length+E.g.length,w=[],S=0;S<2*_;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(var R=0;R<E.g.length;R++){var P=this.i(S)>>>16,C=this.i(S)&65535,Rt=E.i(R)>>>16,Ir=E.i(R)&65535;w[2*S+2*R]+=C*Ir,y(w,2*S+2*R),w[2*S+2*R+1]+=P*Ir,y(w,2*S+2*R+1),w[2*S+2*R+1]+=C*Rt,y(w,2*S+2*R+1),w[2*S+2*R+2]+=P*Rt,y(w,2*S+2*R+2)}for(S=0;S<_;S++)w[S]=w[2*S+1]<<16|w[2*S];for(S=_;S<2*_;S++)w[S]=0;return new o(w,0)};function y(E,_){for(;(E[_]&65535)!=E[_];)E[_+1]+=E[_]>>>16,E[_]&=65535,_++}function I(E,_){this.g=E,this.h=_}function D(E,_){if(k(_))throw Error("division by zero");if(k(E))return new I(f,f);if(N(E))return _=D(O(E),_),new I(O(_.g),O(_.h));if(N(_))return _=D(E,O(_)),new I(O(_.g),_.h);if(30<E.g.length){if(N(E)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var w=g,S=_;0>=S.l(E);)w=U(w),S=U(S);var R=B(w,1),P=B(S,1);for(S=B(S,2),w=B(w,2);!k(S);){var C=P.add(S);0>=C.l(E)&&(R=R.add(w),P=C),S=B(S,1),w=B(w,1)}return _=v(E,R.j(_)),new I(R,_)}for(R=f;0<=E.l(_);){for(w=Math.max(1,Math.floor(E.m()/_.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),P=h(w),C=P.j(_);N(C)||0<C.l(E);)w-=S,P=h(w),C=P.j(_);k(P)&&(P=g),R=R.add(P),E=v(E,C)}return new I(R,E)}t.A=function(E){return D(this,E).h},t.and=function(E){for(var _=Math.max(this.g.length,E.g.length),w=[],S=0;S<_;S++)w[S]=this.i(S)&E.i(S);return new o(w,this.h&E.h)},t.or=function(E){for(var _=Math.max(this.g.length,E.g.length),w=[],S=0;S<_;S++)w[S]=this.i(S)|E.i(S);return new o(w,this.h|E.h)},t.xor=function(E){for(var _=Math.max(this.g.length,E.g.length),w=[],S=0;S<_;S++)w[S]=this.i(S)^E.i(S);return new o(w,this.h^E.h)};function U(E){for(var _=E.g.length+1,w=[],S=0;S<_;S++)w[S]=E.i(S)<<1|E.i(S-1)>>>31;return new o(w,E.h)}function B(E,_){var w=_>>5;_%=32;for(var S=E.g.length-w,R=[],P=0;P<S;P++)R[P]=0<_?E.i(P+w)>>>_|E.i(P+w+1)<<32-_:E.i(P+w);return new o(R,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,Xw=o}).apply(typeof S_<"u"?S_:typeof self<"u"?self:typeof window<"u"?window:{});var Fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,c,d){return l==Array.prototype||l==Object.prototype||(l[c]=d.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Fl=="object"&&Fl];for(var c=0;c<l.length;++c){var d=l[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(l,c){if(c)e:{var d=r;l=l.split(".");for(var m=0;m<l.length-1;m++){var x=l[m];if(!(x in d))break e;d=d[x]}l=l[l.length-1],m=d[l],c=c(m),c!=m&&c!=null&&e(d,l,{configurable:!0,writable:!0,value:c})}}function s(l,c){l instanceof String&&(l+="");var d=0,m=!1,x={next:function(){if(!m&&d<l.length){var b=d++;return{value:c(b,l[b]),done:!1}}return m=!0,{done:!0,value:void 0}}};return x[Symbol.iterator]=function(){return x},x}i("Array.prototype.values",function(l){return l||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var c=typeof l;return c=c!="object"?c:l?Array.isArray(l)?"array":c:"null",c=="array"||c=="object"&&typeof l.length=="number"}function h(l){var c=typeof l;return c=="object"&&l!=null||c=="function"}function p(l,c,d){return l.call.apply(l.bind,arguments)}function f(l,c,d){if(!l)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var x=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(x,m),l.apply(c,x)}}return function(){return l.apply(c,arguments)}}function g(l,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:f,g.apply(null,arguments)}function T(l,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),l.apply(this,m)}}function k(l,c){function d(){}d.prototype=c.prototype,l.aa=c.prototype,l.prototype=new d,l.prototype.constructor=l,l.Qb=function(m,x,b){for(var j=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)j[ie-2]=arguments[ie];return c.prototype[x].apply(m,j)}}function N(l){const c=l.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=l[m];return d}return[]}function O(l,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const x=l.length||0,b=m.length||0;l.length=x+b;for(let j=0;j<b;j++)l[x+j]=m[j]}else l.push(m)}}class v{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function y(l){return/^[\s\xa0]*$/.test(l)}function I(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function D(l){return D[" "](l),l}D[" "]=function(){};var U=I().indexOf("Gecko")!=-1&&!(I().toLowerCase().indexOf("webkit")!=-1&&I().indexOf("Edge")==-1)&&!(I().indexOf("Trident")!=-1||I().indexOf("MSIE")!=-1)&&I().indexOf("Edge")==-1;function B(l,c,d){for(const m in l)c.call(d,l[m],m,l)}function E(l,c){for(const d in l)c.call(void 0,l[d],d,l)}function _(l){const c={};for(const d in l)c[d]=l[d];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(l,c){let d,m;for(let x=1;x<arguments.length;x++){m=arguments[x];for(d in m)l[d]=m[d];for(let b=0;b<w.length;b++)d=w[b],Object.prototype.hasOwnProperty.call(m,d)&&(l[d]=m[d])}}function R(l){var c=1;l=l.split(":");const d=[];for(;0<c&&l.length;)d.push(l.shift()),c--;return l.length&&d.push(l.join(":")),d}function P(l){a.setTimeout(()=>{throw l},0)}function C(){var l=W;let c=null;return l.g&&(c=l.g,l.g=l.g.next,l.g||(l.h=null),c.next=null),c}class Rt{constructor(){this.h=this.g=null}add(c,d){const m=Ir.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Ir=new v(()=>new us,l=>l.reset());class us{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ln,z=!1,W=new Rt,G=()=>{const l=a.Promise.resolve(void 0);ln=()=>{l.then(fe)}};var fe=()=>{for(var l;l=C();){try{l.h.call(l.g)}catch(d){P(d)}var c=Ir;c.j(l),100>c.h&&(c.h++,l.next=c.g,c.g=l)}z=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(l,c){this.type=l,this.g=this.target=c,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var an=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,c=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const d=()=>{};a.addEventListener("test",d,c),a.removeEventListener("test",d,c)}catch{}return l}();function un(l,c){if(Ee.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var d=this.type=l.type,m=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=c,c=l.relatedTarget){if(U){e:{try{D(c.nodeName);var x=!0;break e}catch{}x=!1}x||(c=null)}}else d=="mouseover"?c=l.fromElement:d=="mouseout"&&(c=l.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:cn[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&un.aa.h.call(this)}}k(un,Ee);var cn={2:"touch",3:"pen",4:"mouse"};un.prototype.h=function(){un.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var hn="closure_listenable_"+(1e6*Math.random()|0),sC=0;function oC(l,c,d,m,x){this.listener=l,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=x,this.key=++sC,this.da=this.fa=!1}function sl(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function ol(l){this.src=l,this.g={},this.h=0}ol.prototype.add=function(l,c,d,m,x){var b=l.toString();l=this.g[b],l||(l=this.g[b]=[],this.h++);var j=zu(l,c,m,x);return-1<j?(c=l[j],d||(c.fa=!1)):(c=new oC(c,this.src,b,!!m,x),c.fa=d,l.push(c)),c};function Bu(l,c){var d=c.type;if(d in l.g){var m=l.g[d],x=Array.prototype.indexOf.call(m,c,void 0),b;(b=0<=x)&&Array.prototype.splice.call(m,x,1),b&&(sl(c),l.g[d].length==0&&(delete l.g[d],l.h--))}}function zu(l,c,d,m){for(var x=0;x<l.length;++x){var b=l[x];if(!b.da&&b.listener==c&&b.capture==!!d&&b.ha==m)return x}return-1}var Vu="closure_lm_"+(1e6*Math.random()|0),$u={};function Dp(l,c,d,m,x){if(Array.isArray(c)){for(var b=0;b<c.length;b++)Dp(l,c[b],d,m,x);return null}return d=Up(d),l&&l[hn]?l.K(c,d,h(m)?!!m.capture:!!m,x):lC(l,c,d,!1,m,x)}function lC(l,c,d,m,x,b){if(!c)throw Error("Invalid event type");var j=h(x)?!!x.capture:!!x,ie=Wu(l);if(ie||(l[Vu]=ie=new ol(l)),d=ie.add(c,d,m,j,b),d.proxy)return d;if(m=aC(),d.proxy=m,m.src=l,m.listener=d,l.addEventListener)an||(x=j),x===void 0&&(x=!1),l.addEventListener(c.toString(),m,x);else if(l.attachEvent)l.attachEvent(Mp(c.toString()),m);else if(l.addListener&&l.removeListener)l.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function aC(){function l(d){return c.call(l.src,l.listener,d)}const c=uC;return l}function Lp(l,c,d,m,x){if(Array.isArray(c))for(var b=0;b<c.length;b++)Lp(l,c[b],d,m,x);else m=h(m)?!!m.capture:!!m,d=Up(d),l&&l[hn]?(l=l.i,c=String(c).toString(),c in l.g&&(b=l.g[c],d=zu(b,d,m,x),-1<d&&(sl(b[d]),Array.prototype.splice.call(b,d,1),b.length==0&&(delete l.g[c],l.h--)))):l&&(l=Wu(l))&&(c=l.g[c.toString()],l=-1,c&&(l=zu(c,d,m,x)),(d=-1<l?c[l]:null)&&Hu(d))}function Hu(l){if(typeof l!="number"&&l&&!l.da){var c=l.src;if(c&&c[hn])Bu(c.i,l);else{var d=l.type,m=l.proxy;c.removeEventListener?c.removeEventListener(d,m,l.capture):c.detachEvent?c.detachEvent(Mp(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=Wu(c))?(Bu(d,l),d.h==0&&(d.src=null,c[Vu]=null)):sl(l)}}}function Mp(l){return l in $u?$u[l]:$u[l]="on"+l}function uC(l,c){if(l.da)l=!0;else{c=new un(c,this);var d=l.listener,m=l.ha||l.src;l.fa&&Hu(l),l=d.call(m,c)}return l}function Wu(l){return l=l[Vu],l instanceof ol?l:null}var Gu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Up(l){return typeof l=="function"?l:(l[Gu]||(l[Gu]=function(c){return l.handleEvent(c)}),l[Gu])}function ze(){re.call(this),this.i=new ol(this),this.M=this,this.F=null}k(ze,re),ze.prototype[hn]=!0,ze.prototype.removeEventListener=function(l,c,d,m){Lp(this,l,c,d,m)};function et(l,c){var d,m=l.F;if(m)for(d=[];m;m=m.F)d.push(m);if(l=l.M,m=c.type||c,typeof c=="string")c=new Ee(c,l);else if(c instanceof Ee)c.target=c.target||l;else{var x=c;c=new Ee(m,l),S(c,x)}if(x=!0,d)for(var b=d.length-1;0<=b;b--){var j=c.g=d[b];x=ll(j,m,!0,c)&&x}if(j=c.g=l,x=ll(j,m,!0,c)&&x,x=ll(j,m,!1,c)&&x,d)for(b=0;b<d.length;b++)j=c.g=d[b],x=ll(j,m,!1,c)&&x}ze.prototype.N=function(){if(ze.aa.N.call(this),this.i){var l=this.i,c;for(c in l.g){for(var d=l.g[c],m=0;m<d.length;m++)sl(d[m]);delete l.g[c],l.h--}}this.F=null},ze.prototype.K=function(l,c,d,m){return this.i.add(String(l),c,!1,d,m)},ze.prototype.L=function(l,c,d,m){return this.i.add(String(l),c,!0,d,m)};function ll(l,c,d,m){if(c=l.i.g[String(c)],!c)return!0;c=c.concat();for(var x=!0,b=0;b<c.length;++b){var j=c[b];if(j&&!j.da&&j.capture==d){var ie=j.listener,Me=j.ha||j.src;j.fa&&Bu(l.i,j),x=ie.call(Me,m)!==!1&&x}}return x&&!m.defaultPrevented}function Fp(l,c,d){if(typeof l=="function")d&&(l=g(l,d));else if(l&&typeof l.handleEvent=="function")l=g(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:a.setTimeout(l,c||0)}function jp(l){l.g=Fp(()=>{l.g=null,l.i&&(l.i=!1,jp(l))},l.l);const c=l.h;l.h=null,l.m.apply(null,c)}class cC extends re{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:jp(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function cs(l){re.call(this),this.h=l,this.g={}}k(cs,re);var Bp=[];function zp(l){B(l.g,function(c,d){this.g.hasOwnProperty(d)&&Hu(c)},l),l.g={}}cs.prototype.N=function(){cs.aa.N.call(this),zp(this)},cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ku=a.JSON.stringify,hC=a.JSON.parse,dC=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function qu(){}qu.prototype.h=null;function Vp(l){return l.h||(l.h=l.i())}function fC(){}var hs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yu(){Ee.call(this,"d")}k(Yu,Ee);function Qu(){Ee.call(this,"c")}k(Qu,Ee);var li={},$p=null;function Xu(){return $p=$p||new ze}li.La="serverreachability";function Hp(l){Ee.call(this,li.La,l)}k(Hp,Ee);function ds(l){const c=Xu();et(c,new Hp(c))}li.STAT_EVENT="statevent";function Wp(l,c){Ee.call(this,li.STAT_EVENT,l),this.stat=c}k(Wp,Ee);function tt(l){const c=Xu();et(c,new Wp(c,l))}li.Ma="timingevent";function Gp(l,c){Ee.call(this,li.Ma,l),this.size=c}k(Gp,Ee);function fs(l,c){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},c)}function ps(){this.g=!0}ps.prototype.xa=function(){this.g=!1};function pC(l,c,d,m,x,b){l.info(function(){if(l.g)if(b)for(var j="",ie=b.split("&"),Me=0;Me<ie.length;Me++){var Z=ie[Me].split("=");if(1<Z.length){var Ve=Z[0];Z=Z[1];var $e=Ve.split("_");j=2<=$e.length&&$e[1]=="type"?j+(Ve+"="+Z+"&"):j+(Ve+"=redacted&")}}else j=null;else j=b;return"XMLHTTP REQ ("+m+") [attempt "+x+"]: "+c+`
`+d+`
`+j})}function gC(l,c,d,m,x,b,j){l.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+x+"]: "+c+`
`+d+`
`+b+" "+j})}function ai(l,c,d,m){l.info(function(){return"XMLHTTP TEXT ("+c+"): "+_C(l,d)+(m?" "+m:"")})}function mC(l,c){l.info(function(){return"TIMEOUT: "+c})}ps.prototype.info=function(){};function _C(l,c){if(!l.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(l=0;l<d.length;l++)if(Array.isArray(d[l])){var m=d[l];if(!(2>m.length)){var x=m[1];if(Array.isArray(x)&&!(1>x.length)){var b=x[0];if(b!="noop"&&b!="stop"&&b!="close")for(var j=1;j<x.length;j++)x[j]=""}}}}return Ku(d)}catch{return c}}var Ju={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},yC={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Zu;function al(){}k(al,qu),al.prototype.g=function(){return new XMLHttpRequest},al.prototype.i=function(){return{}},Zu=new al;function Ln(l,c,d,m){this.j=l,this.i=c,this.l=d,this.R=m||1,this.U=new cs(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Kp}function Kp(){this.i=null,this.g="",this.h=!1}var qp={},ec={};function tc(l,c,d){l.L=1,l.v=dl(dn(c)),l.m=d,l.P=!0,Yp(l,null)}function Yp(l,c){l.F=Date.now(),ul(l),l.A=dn(l.v);var d=l.A,m=l.R;Array.isArray(m)||(m=[String(m)]),ug(d.i,"t",m),l.C=0,d=l.j.J,l.h=new Kp,l.g=Rg(l.j,d?c:null,!l.m),0<l.O&&(l.M=new cC(g(l.Y,l,l.g),l.O)),c=l.U,d=l.g,m=l.ca;var x="readystatechange";Array.isArray(x)||(x&&(Bp[0]=x.toString()),x=Bp);for(var b=0;b<x.length;b++){var j=Dp(d,x[b],m||c.handleEvent,!1,c.h||c);if(!j)break;c.g[j.key]=j}c=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,c)):(l.u="GET",l.g.ea(l.A,l.u,null,c)),ds(),pC(l.i,l.u,l.A,l.l,l.R,l.m)}Ln.prototype.ca=function(l){l=l.target;const c=this.M;c&&fn(l)==3?c.j():this.Y(l)},Ln.prototype.Y=function(l){try{if(l==this.g)e:{const $e=fn(this.g);var c=this.g.Ba();const hi=this.g.Z();if(!(3>$e)&&($e!=3||this.g&&(this.h.h||this.g.oa()||mg(this.g)))){this.J||$e!=4||c==7||(c==8||0>=hi?ds(3):ds(2)),nc(this);var d=this.g.Z();this.X=d;t:if(Qp(this)){var m=mg(this.g);l="";var x=m.length,b=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Sr(this),gs(this);var j="";break t}this.h.i=new a.TextDecoder}for(c=0;c<x;c++)this.h.h=!0,l+=this.h.i.decode(m[c],{stream:!(b&&c==x-1)});m.length=0,this.h.g+=l,this.C=0,j=this.h.g}else j=this.g.oa();if(this.o=d==200,gC(this.i,this.u,this.A,this.l,this.R,$e,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ie,Me=this.g;if((ie=Me.g?Me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(ie)){var Z=ie;break t}}Z=null}if(d=Z)ai(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,rc(this,d);else{this.o=!1,this.s=3,tt(12),Sr(this),gs(this);break e}}if(this.P){d=!0;let Ut;for(;!this.J&&this.C<j.length;)if(Ut=vC(this,j),Ut==ec){$e==4&&(this.s=4,tt(14),d=!1),ai(this.i,this.l,null,"[Incomplete Response]");break}else if(Ut==qp){this.s=4,tt(15),ai(this.i,this.l,j,"[Invalid Chunk]"),d=!1;break}else ai(this.i,this.l,Ut,null),rc(this,Ut);if(Qp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),$e!=4||j.length!=0||this.h.h||(this.s=1,tt(16),d=!1),this.o=this.o&&d,!d)ai(this.i,this.l,j,"[Invalid Chunked Response]"),Sr(this),gs(this);else if(0<j.length&&!this.W){this.W=!0;var Ve=this.j;Ve.g==this&&Ve.ba&&!Ve.M&&(Ve.j.info("Great, no buffering proxy detected. Bytes received: "+j.length),uc(Ve),Ve.M=!0,tt(11))}}else ai(this.i,this.l,j,null),rc(this,j);$e==4&&Sr(this),this.o&&!this.J&&($e==4?Ig(this.j,this):(this.o=!1,ul(this)))}else MC(this.g),d==400&&0<j.indexOf("Unknown SID")?(this.s=3,tt(12)):(this.s=0,tt(13)),Sr(this),gs(this)}}}catch{}finally{}};function Qp(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function vC(l,c){var d=l.C,m=c.indexOf(`
`,d);return m==-1?ec:(d=Number(c.substring(d,m)),isNaN(d)?qp:(m+=1,m+d>c.length?ec:(c=c.slice(m,m+d),l.C=m+d,c)))}Ln.prototype.cancel=function(){this.J=!0,Sr(this)};function ul(l){l.S=Date.now()+l.I,Xp(l,l.I)}function Xp(l,c){if(l.B!=null)throw Error("WatchDog timer not null");l.B=fs(g(l.ba,l),c)}function nc(l){l.B&&(a.clearTimeout(l.B),l.B=null)}Ln.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(mC(this.i,this.A),this.L!=2&&(ds(),tt(17)),Sr(this),this.s=2,gs(this)):Xp(this,this.S-l)};function gs(l){l.j.G==0||l.J||Ig(l.j,l)}function Sr(l){nc(l);var c=l.M;c&&typeof c.ma=="function"&&c.ma(),l.M=null,zp(l.U),l.g&&(c=l.g,l.g=null,c.abort(),c.ma())}function rc(l,c){try{var d=l.j;if(d.G!=0&&(d.g==l||ic(d.h,l))){if(!l.K&&ic(d.h,l)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var x=m;if(x[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<l.F)yl(d),ml(d);else break e;ac(d),tt(18)}}else d.za=x[1],0<d.za-d.T&&37500>x[2]&&d.F&&d.v==0&&!d.C&&(d.C=fs(g(d.Za,d),6e3));if(1>=eg(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else kr(d,11)}else if((l.K||d.g==l)&&yl(d),!y(c))for(x=d.Da.g.parse(c),c=0;c<x.length;c++){let Z=x[c];if(d.T=Z[0],Z=Z[1],d.G==2)if(Z[0]=="c"){d.K=Z[1],d.ia=Z[2];const Ve=Z[3];Ve!=null&&(d.la=Ve,d.j.info("VER="+d.la));const $e=Z[4];$e!=null&&(d.Aa=$e,d.j.info("SVER="+d.Aa));const hi=Z[5];hi!=null&&typeof hi=="number"&&0<hi&&(m=1.5*hi,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ut=l.g;if(Ut){const vl=Ut.g?Ut.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vl){var b=m.h;b.g||vl.indexOf("spdy")==-1&&vl.indexOf("quic")==-1&&vl.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(sc(b,b.h),b.h=null))}if(m.D){const cc=Ut.g?Ut.g.getResponseHeader("X-HTTP-Session-Id"):null;cc&&(m.ya=cc,ae(m.I,m.D,cc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-l.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var j=l;if(m.qa=kg(m,m.J?m.ia:null,m.W),j.K){tg(m.h,j);var ie=j,Me=m.L;Me&&(ie.I=Me),ie.B&&(nc(ie),ul(ie)),m.g=j}else Eg(m);0<d.i.length&&_l(d)}else Z[0]!="stop"&&Z[0]!="close"||kr(d,7);else d.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?kr(d,7):lc(d):Z[0]!="noop"&&d.l&&d.l.ta(Z),d.v=0)}}ds(4)}catch{}}var wC=class{constructor(l,c){this.g=l,this.map=c}};function Jp(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Zp(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function eg(l){return l.h?1:l.g?l.g.size:0}function ic(l,c){return l.h?l.h==c:l.g?l.g.has(c):!1}function sc(l,c){l.g?l.g.add(c):l.h=c}function tg(l,c){l.h&&l.h==c?l.h=null:l.g&&l.g.has(c)&&l.g.delete(c)}Jp.prototype.cancel=function(){if(this.i=ng(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ng(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let c=l.i;for(const d of l.g.values())c=c.concat(d.D);return c}return N(l.i)}function EC(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var c=[],d=l.length,m=0;m<d;m++)c.push(l[m]);return c}c=[],d=0;for(m in l)c[d++]=l[m];return c}function CC(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var c=[];l=l.length;for(var d=0;d<l;d++)c.push(d);return c}c=[],d=0;for(const m in l)c[d++]=m;return c}}}function rg(l,c){if(l.forEach&&typeof l.forEach=="function")l.forEach(c,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,c,void 0);else for(var d=CC(l),m=EC(l),x=m.length,b=0;b<x;b++)c.call(void 0,m[b],d&&d[b],l)}var ig=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function IC(l,c){if(l){l=l.split("&");for(var d=0;d<l.length;d++){var m=l[d].indexOf("="),x=null;if(0<=m){var b=l[d].substring(0,m);x=l[d].substring(m+1)}else b=l[d];c(b,x?decodeURIComponent(x.replace(/\+/g," ")):"")}}}function Tr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof Tr){this.h=l.h,cl(this,l.j),this.o=l.o,this.g=l.g,hl(this,l.s),this.l=l.l;var c=l.i,d=new ys;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),sg(this,d),this.m=l.m}else l&&(c=String(l).match(ig))?(this.h=!1,cl(this,c[1]||"",!0),this.o=ms(c[2]||""),this.g=ms(c[3]||"",!0),hl(this,c[4]),this.l=ms(c[5]||"",!0),sg(this,c[6]||"",!0),this.m=ms(c[7]||"")):(this.h=!1,this.i=new ys(null,this.h))}Tr.prototype.toString=function(){var l=[],c=this.j;c&&l.push(_s(c,og,!0),":");var d=this.g;return(d||c=="file")&&(l.push("//"),(c=this.o)&&l.push(_s(c,og,!0),"@"),l.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&l.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&l.push("/"),l.push(_s(d,d.charAt(0)=="/"?kC:TC,!0))),(d=this.i.toString())&&l.push("?",d),(d=this.m)&&l.push("#",_s(d,xC)),l.join("")};function dn(l){return new Tr(l)}function cl(l,c,d){l.j=d?ms(c,!0):c,l.j&&(l.j=l.j.replace(/:$/,""))}function hl(l,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);l.s=c}else l.s=null}function sg(l,c,d){c instanceof ys?(l.i=c,NC(l.i,l.h)):(d||(c=_s(c,RC)),l.i=new ys(c,l.h))}function ae(l,c,d){l.i.set(c,d)}function dl(l){return ae(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function ms(l,c){return l?c?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function _s(l,c,d){return typeof l=="string"?(l=encodeURI(l).replace(c,SC),d&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function SC(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var og=/[#\/\?@]/g,TC=/[#\?:]/g,kC=/[#\?]/g,RC=/[#\?@]/g,xC=/#/g;function ys(l,c){this.h=this.g=null,this.i=l||null,this.j=!!c}function Mn(l){l.g||(l.g=new Map,l.h=0,l.i&&IC(l.i,function(c,d){l.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=ys.prototype,t.add=function(l,c){Mn(this),this.i=null,l=ui(this,l);var d=this.g.get(l);return d||this.g.set(l,d=[]),d.push(c),this.h+=1,this};function lg(l,c){Mn(l),c=ui(l,c),l.g.has(c)&&(l.i=null,l.h-=l.g.get(c).length,l.g.delete(c))}function ag(l,c){return Mn(l),c=ui(l,c),l.g.has(c)}t.forEach=function(l,c){Mn(this),this.g.forEach(function(d,m){d.forEach(function(x){l.call(c,x,m,this)},this)},this)},t.na=function(){Mn(this);const l=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const x=l[m];for(let b=0;b<x.length;b++)d.push(c[m])}return d},t.V=function(l){Mn(this);let c=[];if(typeof l=="string")ag(this,l)&&(c=c.concat(this.g.get(ui(this,l))));else{l=Array.from(this.g.values());for(let d=0;d<l.length;d++)c=c.concat(l[d])}return c},t.set=function(l,c){return Mn(this),this.i=null,l=ui(this,l),ag(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[c]),this.h+=1,this},t.get=function(l,c){return l?(l=this.V(l),0<l.length?String(l[0]):c):c};function ug(l,c,d){lg(l,c),0<d.length&&(l.i=null,l.g.set(ui(l,c),N(d)),l.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const b=encodeURIComponent(String(m)),j=this.V(m);for(m=0;m<j.length;m++){var x=b;j[m]!==""&&(x+="="+encodeURIComponent(String(j[m]))),l.push(x)}}return this.i=l.join("&")};function ui(l,c){return c=String(c),l.j&&(c=c.toLowerCase()),c}function NC(l,c){c&&!l.j&&(Mn(l),l.i=null,l.g.forEach(function(d,m){var x=m.toLowerCase();m!=x&&(lg(this,m),ug(this,x,d))},l)),l.j=c}function PC(l,c){const d=new ps;if(a.Image){const m=new Image;m.onload=T(Un,d,"TestLoadImage: loaded",!0,c,m),m.onerror=T(Un,d,"TestLoadImage: error",!1,c,m),m.onabort=T(Un,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=T(Un,d,"TestLoadImage: timeout",!1,c,m),a.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=l}else c(!1)}function AC(l,c){const d=new ps,m=new AbortController,x=setTimeout(()=>{m.abort(),Un(d,"TestPingServer: timeout",!1,c)},1e4);fetch(l,{signal:m.signal}).then(b=>{clearTimeout(x),b.ok?Un(d,"TestPingServer: ok",!0,c):Un(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(x),Un(d,"TestPingServer: error",!1,c)})}function Un(l,c,d,m,x){try{x&&(x.onload=null,x.onerror=null,x.onabort=null,x.ontimeout=null),m(d)}catch{}}function OC(){this.g=new dC}function bC(l,c,d){const m=d||"";try{rg(l,function(x,b){let j=x;h(x)&&(j=Ku(x)),c.push(m+b+"="+encodeURIComponent(j))})}catch(x){throw c.push(m+"type="+encodeURIComponent("_badmap")),x}}function fl(l){this.l=l.Ub||null,this.j=l.eb||!1}k(fl,qu),fl.prototype.g=function(){return new pl(this.l,this.j)},fl.prototype.i=function(l){return function(){return l}}({});function pl(l,c){ze.call(this),this.D=l,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}k(pl,ze),t=pl.prototype,t.open=function(l,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=c,this.readyState=1,ws(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(c.body=l),(this.D||a).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vs(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cg(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function cg(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var c=l.value?l.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!l.done}))&&(this.response=this.responseText+=c)}l.done?vs(this):ws(this),this.readyState==3&&cg(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,vs(this))},t.Qa=function(l){this.g&&(this.response=l,vs(this))},t.ga=function(){this.g&&vs(this)};function vs(l){l.readyState=4,l.l=null,l.j=null,l.v=null,ws(l)}t.setRequestHeader=function(l,c){this.u.append(l,c)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,l.push(d[0]+": "+d[1]),d=c.next();return l.join(`\r
`)};function ws(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(pl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function hg(l){let c="";return B(l,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function oc(l,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=hg(d),typeof l=="string"?d!=null&&encodeURIComponent(String(d)):ae(l,c,d))}function Ce(l){ze.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}k(Ce,ze);var DC=/^https?$/i,LC=["POST","PUT"];t=Ce.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);c=c?c.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Zu.g(),this.v=this.o?Vp(this.o):Vp(Zu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(l),!0),this.B=!1}catch(b){dg(this,b);return}if(l=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var x in m)d.set(x,m[x]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const b of m.keys())d.set(b,m.get(b));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(b=>b.toLowerCase()=="content-type"),x=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(LC,c,void 0))||m||x||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,j]of d)this.g.setRequestHeader(b,j);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{gg(this),this.u=!0,this.g.send(l),this.u=!1}catch(b){dg(this,b)}};function dg(l,c){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=c,l.m=5,fg(l),gl(l)}function fg(l){l.A||(l.A=!0,et(l,"complete"),et(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,et(this,"complete"),et(this,"abort"),gl(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gl(this,!0)),Ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?pg(this):this.bb())},t.bb=function(){pg(this)};function pg(l){if(l.h&&typeof o<"u"&&(!l.v[1]||fn(l)!=4||l.Z()!=2)){if(l.u&&fn(l)==4)Fp(l.Ea,0,l);else if(et(l,"readystatechange"),fn(l)==4){l.h=!1;try{const j=l.Z();e:switch(j){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=j===0){var x=String(l.D).match(ig)[1]||null;!x&&a.self&&a.self.location&&(x=a.self.location.protocol.slice(0,-1)),m=!DC.test(x?x.toLowerCase():"")}d=m}if(d)et(l,"complete"),et(l,"success");else{l.m=6;try{var b=2<fn(l)?l.g.statusText:""}catch{b=""}l.l=b+" ["+l.Z()+"]",fg(l)}}finally{gl(l)}}}}function gl(l,c){if(l.g){gg(l);const d=l.g,m=l.v[0]?()=>{}:null;l.g=null,l.v=null,c||et(l,"ready");try{d.onreadystatechange=m}catch{}}}function gg(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function fn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var c=this.g.responseText;return l&&c.indexOf(l)==0&&(c=c.substring(l.length)),hC(c)}};function mg(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function MC(l){const c={};l=(l.g&&2<=fn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<l.length;m++){if(y(l[m]))continue;var d=R(l[m]);const x=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const b=c[x]||[];c[x]=b,b.push(d)}E(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Es(l,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[l]||c}function _g(l){this.Aa=0,this.i=[],this.j=new ps,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Es("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Es("baseRetryDelayMs",5e3,l),this.cb=Es("retryDelaySeedMs",1e4,l),this.Wa=Es("forwardChannelMaxRetries",2,l),this.wa=Es("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Jp(l&&l.concurrentRequestLimit),this.Da=new OC,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=_g.prototype,t.la=8,t.G=1,t.connect=function(l,c,d,m){tt(0),this.W=l,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=kg(this,null,this.W),_l(this)};function lc(l){if(yg(l),l.G==3){var c=l.U++,d=dn(l.I);if(ae(d,"SID",l.K),ae(d,"RID",c),ae(d,"TYPE","terminate"),Cs(l,d),c=new Ln(l,l.j,c),c.L=2,c.v=dl(dn(d)),d=!1,a.navigator&&a.navigator.sendBeacon)try{d=a.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&a.Image&&(new Image().src=c.v,d=!0),d||(c.g=Rg(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ul(c)}Tg(l)}function ml(l){l.g&&(uc(l),l.g.cancel(),l.g=null)}function yg(l){ml(l),l.u&&(a.clearTimeout(l.u),l.u=null),yl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function _l(l){if(!Zp(l.h)&&!l.s){l.s=!0;var c=l.Ga;ln||G(),z||(ln(),z=!0),W.add(c,l),l.B=0}}function UC(l,c){return eg(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=c.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=fs(g(l.Ga,l,c),Sg(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const x=new Ln(this,this.j,l);let b=this.o;if(this.S&&(b?(b=_(b),S(b,this.S)):b=this.S),this.m!==null||this.O||(x.H=b,b=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=wg(this,x,c),d=dn(this.I),ae(d,"RID",l),ae(d,"CVER",22),this.D&&ae(d,"X-HTTP-Session-Id",this.D),Cs(this,d),b&&(this.O?c="headers="+encodeURIComponent(String(hg(b)))+"&"+c:this.m&&oc(d,this.m,b)),sc(this.h,x),this.Ua&&ae(d,"TYPE","init"),this.P?(ae(d,"$req",c),ae(d,"SID","null"),x.T=!0,tc(x,d,null)):tc(x,d,c),this.G=2}}else this.G==3&&(l?vg(this,l):this.i.length==0||Zp(this.h)||vg(this))};function vg(l,c){var d;c?d=c.l:d=l.U++;const m=dn(l.I);ae(m,"SID",l.K),ae(m,"RID",d),ae(m,"AID",l.T),Cs(l,m),l.m&&l.o&&oc(m,l.m,l.o),d=new Ln(l,l.j,d,l.B+1),l.m===null&&(d.H=l.o),c&&(l.i=c.D.concat(l.i)),c=wg(l,d,1e3),d.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),sc(l.h,d),tc(d,m,c)}function Cs(l,c){l.H&&B(l.H,function(d,m){ae(c,m,d)}),l.l&&rg({},function(d,m){ae(c,m,d)})}function wg(l,c,d){d=Math.min(l.i.length,d);var m=l.l?g(l.l.Na,l.l,l):null;e:{var x=l.i;let b=-1;for(;;){const j=["count="+d];b==-1?0<d?(b=x[0].g,j.push("ofs="+b)):b=0:j.push("ofs="+b);let ie=!0;for(let Me=0;Me<d;Me++){let Z=x[Me].g;const Ve=x[Me].map;if(Z-=b,0>Z)b=Math.max(0,x[Me].g-100),ie=!1;else try{bC(Ve,j,"req"+Z+"_")}catch{m&&m(Ve)}}if(ie){m=j.join("&");break e}}}return l=l.i.splice(0,d),c.D=l,m}function Eg(l){if(!l.g&&!l.u){l.Y=1;var c=l.Fa;ln||G(),z||(ln(),z=!0),W.add(c,l),l.v=0}}function ac(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=fs(g(l.Fa,l),Sg(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Cg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=fs(g(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,tt(10),ml(this),Cg(this))};function uc(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function Cg(l){l.g=new Ln(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var c=dn(l.qa);ae(c,"RID","rpc"),ae(c,"SID",l.K),ae(c,"AID",l.T),ae(c,"CI",l.F?"0":"1"),!l.F&&l.ja&&ae(c,"TO",l.ja),ae(c,"TYPE","xmlhttp"),Cs(l,c),l.m&&l.o&&oc(c,l.m,l.o),l.L&&(l.g.I=l.L);var d=l.g;l=l.ia,d.L=1,d.v=dl(dn(c)),d.m=null,d.P=!0,Yp(d,l)}t.Za=function(){this.C!=null&&(this.C=null,ml(this),ac(this),tt(19))};function yl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function Ig(l,c){var d=null;if(l.g==c){yl(l),uc(l),l.g=null;var m=2}else if(ic(l.h,c))d=c.D,tg(l.h,c),m=1;else return;if(l.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var x=l.B;m=Xu(),et(m,new Gp(m,d)),_l(l)}else Eg(l);else if(x=c.s,x==3||x==0&&0<c.X||!(m==1&&UC(l,c)||m==2&&ac(l)))switch(d&&0<d.length&&(c=l.h,c.i=c.i.concat(d)),x){case 1:kr(l,5);break;case 4:kr(l,10);break;case 3:kr(l,6);break;default:kr(l,2)}}}function Sg(l,c){let d=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(d*=2),d*c}function kr(l,c){if(l.j.info("Error code "+c),c==2){var d=g(l.fb,l),m=l.Xa;const x=!m;m=new Tr(m||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||cl(m,"https"),dl(m),x?PC(m.toString(),d):AC(m.toString(),d)}else tt(2);l.G=0,l.l&&l.l.sa(c),Tg(l),yg(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),tt(2)):(this.j.info("Failed to ping google.com"),tt(1))};function Tg(l){if(l.G=0,l.ka=[],l.l){const c=ng(l.h);(c.length!=0||l.i.length!=0)&&(O(l.ka,c),O(l.ka,l.i),l.h.i.length=0,N(l.i),l.i.length=0),l.l.ra()}}function kg(l,c,d){var m=d instanceof Tr?dn(d):new Tr(d);if(m.g!="")c&&(m.g=c+"."+m.g),hl(m,m.s);else{var x=a.location;m=x.protocol,c=c?c+"."+x.hostname:x.hostname,x=+x.port;var b=new Tr(null);m&&cl(b,m),c&&(b.g=c),x&&hl(b,x),d&&(b.l=d),m=b}return d=l.D,c=l.ya,d&&c&&ae(m,d,c),ae(m,"VER",l.la),Cs(l,m),m}function Rg(l,c,d){if(c&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=l.Ca&&!l.pa?new Ce(new fl({eb:d})):new Ce(l.pa),c.Ha(l.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function xg(){}t=xg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function xt(l,c){ze.call(this),this.g=new _g(c),this.l=l,this.h=c&&c.messageUrlParams||null,l=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(l?l["X-WebChannel-Content-Type"]=c.messageContentType:l={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(l?l["X-WebChannel-Client-Profile"]=c.va:l={"X-WebChannel-Client-Profile":c.va}),this.g.S=l,(l=c&&c.Sb)&&!y(l)&&(this.g.m=l),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!y(c)&&(this.g.D=c,l=this.h,l!==null&&c in l&&(l=this.h,c in l&&delete l[c])),this.j=new ci(this)}k(xt,ze),xt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},xt.prototype.close=function(){lc(this.g)},xt.prototype.o=function(l){var c=this.g;if(typeof l=="string"){var d={};d.__data__=l,l=d}else this.u&&(d={},d.__data__=Ku(l),l=d);c.i.push(new wC(c.Ya++,l)),c.G==3&&_l(c)},xt.prototype.N=function(){this.g.l=null,delete this.j,lc(this.g),delete this.g,xt.aa.N.call(this)};function Ng(l){Yu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var c=l.__sm__;if(c){e:{for(const d in c){l=d;break e}l=void 0}(this.i=l)&&(l=this.i,c=c!==null&&l in c?c[l]:void 0),this.data=c}else this.data=l}k(Ng,Yu);function Pg(){Qu.call(this),this.status=1}k(Pg,Qu);function ci(l){this.g=l}k(ci,xg),ci.prototype.ua=function(){et(this.g,"a")},ci.prototype.ta=function(l){et(this.g,new Ng(l))},ci.prototype.sa=function(l){et(this.g,new Pg)},ci.prototype.ra=function(){et(this.g,"b")},xt.prototype.send=xt.prototype.o,xt.prototype.open=xt.prototype.m,xt.prototype.close=xt.prototype.close,Ju.NO_ERROR=0,Ju.TIMEOUT=8,Ju.HTTP_ERROR=6,yC.COMPLETE="complete",fC.EventType=hs,hs.OPEN="a",hs.CLOSE="b",hs.ERROR="c",hs.MESSAGE="d",ze.prototype.listen=ze.prototype.K,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha}).apply(typeof Fl<"u"?Fl:typeof self<"u"?self:typeof window<"u"?window:{});const T_="@firebase/firestore";/**
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
 */class Ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ge.UNAUTHENTICATED=new Ge(null),Ge.GOOGLE_CREDENTIALS=new Ge("google-credentials-uid"),Ge.FIRST_PARTY=new Ge("first-party-uid"),Ge.MOCK_USER=new Ge("mock-user");/**
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
 */let Xo="10.12.3";/**
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
 */const qi=new Wo("@firebase/firestore");function wt(t,...e){if(qi.logLevel<=te.DEBUG){const n=e.map(zf);qi.debug(`Firestore (${Xo}): ${t}`,...n)}}function Bf(t,...e){if(qi.logLevel<=te.ERROR){const n=e.map(zf);qi.error(`Firestore (${Xo}): ${t}`,...n)}}function sN(t,...e){if(qi.logLevel<=te.WARN){const n=e.map(zf);qi.warn(`Firestore (${Xo}): ${t}`,...n)}}function zf(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Vf(t="Unexpected state"){const e=`FIRESTORE (${Xo}) INTERNAL ASSERTION FAILED: `+t;throw Bf(e),new Error(e)}function dd(t,e){t||Vf()}/**
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
 */const Ye={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Qe extends Mt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ui{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Jw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class oN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ge.UNAUTHENTICATED))}shutdown(){}}class lN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class aN{constructor(e){this.t=e,this.currentUser=Ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ui;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ui,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{wt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(wt("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ui)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(wt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(dd(typeof r.accessToken=="string"),new Jw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return dd(e===null||typeof e=="string"),new Ge(e)}}class uN{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ge.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class cN{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new uN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class hN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dN{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&wt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,wt("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{wt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):wt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(dd(typeof n.token=="string"),this.R=n.token,new hN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function fN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class pN{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=fN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Zw(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class gN{constructor(e,n,r,i,s,o,a,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=h}}class Va{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Va("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Va&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */var k_,X;(X=k_||(k_={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Xw([4294967295,4294967295],0);function Wc(){return typeof document<"u"?document:null}/**
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
 */class mN{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&wt("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class $f{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ui,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new $f(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Qe(Ye.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _N(t,e){if(Bf("AsyncQueue",`${e}: ${t}`),Zw(t))return new Qe(Ye.UNAVAILABLE,`${e}: ${t}`);throw t}var R_,x_;(x_=R_||(R_={})).J_="default",x_.Cache="cache";/**
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
 */class yN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ge.UNAUTHENTICATED,this.clientId=pN.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{wt("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(wt("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Qe(Ye.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ui;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_N(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
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
 */function e1(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const N_=new Map;function vN(t,e,n,r){if(e===!0&&r===!0)throw new Qe(Ye.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wN(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Vf()}function EN(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Qe(Ye.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wN(t);throw new Qe(Ye.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class P_{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Qe(Ye.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Qe(Ye.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=e1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Qe(Ye.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Qe(Ye.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Qe(Ye.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class t1{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new P_({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Qe(Ye.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Qe(Ye.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new P_(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new oN;switch(r.type){case"firstParty":return new cN(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Qe(Ye.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=N_.get(n);r&&(wt("ComponentProvider","Removing Datastore"),N_.delete(n),r.terminate())}(this),Promise.resolve()}}function CN(t,e,n,r={}){var i;const s=(t=EN(t,t1))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&sN("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Ge.MOCK_USER;else{a=Rf(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new Qe(Ye.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ge(h)}t._authCredentials=new lN(new Jw(a,u))}}/**
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
 */class IN{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new mN(this,"async_queue_retry"),this.hu=()=>{const n=Wc();n&&wt("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Wc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Wc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Ui;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Zw(e))throw e;wt("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Bf("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=$f.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Vf()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class SN extends t1{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new IN}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kN(this),this._firestoreClient.terminate()}}function TN(t,e){const n=typeof t=="object"?t:Go(),r=typeof t=="string"?t:"(default)",i=bn(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=kf("firestore");s&&CN(i,...s)}return i}function kN(t){var e,n,r;const i=t._freezeSettings(),s=function(a,u,h,p){return new gN(a,u,h,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,e1(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new yN(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(e,n=!0){(function(i){Xo=i})(wr),Lt(new St("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new SN(new aN(r.getProvider("auth-internal")),new dN(r.getProvider("app-check-internal")),function(h,p){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new Qe(Ye.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Va(h.options.projectId,p)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Xe(T_,"4.6.4",e),Xe(T_,"4.6.4","esm2017")})();/**
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
 */const n1="firebasestorage.googleapis.com",r1="storageBucket",RN=2*60*1e3,xN=10*60*1e3;/**
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
 */class we extends Mt{constructor(e,n,r=0){super(Gc(e),`Firebase Storage: ${n} (${Gc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,we.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Gc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ve;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ve||(ve={}));function Gc(t){return"storage/"+t}function Hf(){const t="An unknown error occurred, please check the error payload for server response.";return new we(ve.UNKNOWN,t)}function NN(t){return new we(ve.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function PN(t){return new we(ve.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function AN(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new we(ve.UNAUTHENTICATED,t)}function ON(){return new we(ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function bN(t){return new we(ve.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function DN(){return new we(ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function LN(){return new we(ve.CANCELED,"User canceled the upload/download.")}function MN(t){return new we(ve.INVALID_URL,"Invalid URL '"+t+"'.")}function UN(t){return new we(ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function FN(){return new we(ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+r1+"' property when initializing the app?")}function jN(){return new we(ve.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function BN(){return new we(ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function zN(t){return new we(ve.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function fd(t){return new we(ve.INVALID_ARGUMENT,t)}function i1(){return new we(ve.APP_DELETED,"The Firebase app was deleted.")}function VN(t){return new we(ve.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Js(t,e){return new we(ve.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function As(t){throw new we(ve.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class it{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=it.makeFromUrl(e,n)}catch{return new it(e,"")}if(r.path==="")return r;throw UN(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(D){D.path.charAt(D.path.length-1)==="/"&&(D.path_=D.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(D){D.path_=decodeURIComponent(D.path)}const p="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",T=new RegExp(`^https?://${f}/${p}/b/${i}/o${g}`,"i"),k={bucket:1,path:3},N=n===n1?"(?:storage.googleapis.com|storage.cloud.google.com)":n,O="([^?#]*)",v=new RegExp(`^https?://${N}/${i}/${O}`,"i"),I=[{regex:a,indices:u,postModify:s},{regex:T,indices:k,postModify:h},{regex:v,indices:{bucket:1,path:2},postModify:h}];for(let D=0;D<I.length;D++){const U=I[D],B=U.regex.exec(e);if(B){const E=B[U.indices.bucket];let _=B[U.indices.path];_||(_=""),r=new it(E,_),U.postModify(r);break}}if(r==null)throw MN(e);return r}}class $N{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function HN(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function u(){return a===2}let h=!1;function p(...O){h||(h=!0,e.apply(null,O))}function f(O){i=setTimeout(()=>{i=null,t(T,u())},O)}function g(){s&&clearTimeout(s)}function T(O,...v){if(h){g();return}if(O){g(),p.call(null,O,...v);return}if(u()||o){g(),p.call(null,O,...v);return}r<64&&(r*=2);let I;a===1?(a=2,I=0):I=(r+Math.random())*1e3,f(I)}let k=!1;function N(O){k||(k=!0,g(),!h&&(i!==null?(O||(a=2),clearTimeout(i),f(0)):O||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,N(!0)},n),N}function WN(t){t(!1)}/**
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
 */function GN(t){return t!==void 0}function KN(t){return typeof t=="object"&&!Array.isArray(t)}function Wf(t){return typeof t=="string"||t instanceof String}function A_(t){return Gf()&&t instanceof Blob}function Gf(){return typeof Blob<"u"}function pd(t,e,n,r){if(r<e)throw fd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw fd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Ru(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function s1(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */var Br;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Br||(Br={}));/**
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
 */function qN(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class YN{constructor(e,n,r,i,s,o,a,u,h,p,f,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=p,this.connectionFactory_=f,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,k)=>{this.resolve_=T,this.reject_=k,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new jl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const u=a.loaded,h=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===Br.NO_ERROR,u=s.getStatus();if(!a||qN(u,this.additionalRetryCodes_)&&this.retry){const p=s.getErrorCode()===Br.ABORT;r(!1,new jl(!1,null,p));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new jl(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(a,a.getResponse());GN(u)?s(u):s()}catch(u){o(u)}else if(a!==null){const u=Hf();u.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,u)):o(u)}else if(i.canceled){const u=this.appDelete_?i1():LN();o(u)}else{const u=DN();o(u)}};this.canceled_?n(!1,new jl(!1,null,!0)):this.backoffId_=HN(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&WN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class jl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function QN(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function XN(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function JN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ZN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function eP(t,e,n,r,i,s,o=!0){const a=s1(t.urlParams),u=t.url+a,h=Object.assign({},t.headers);return JN(h,e),QN(h,n),XN(h,s),ZN(h,r),new YN(u,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function tP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function nP(...t){const e=tP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Gf())return new Blob(t);throw new we(ve.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function rP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function iP(t){if(typeof atob>"u")throw zN("base-64");return atob(t)}/**
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
 */const en={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Kc{constructor(e,n){this.data=e,this.contentType=n||null}}function sP(t,e){switch(t){case en.RAW:return new Kc(o1(e));case en.BASE64:case en.BASE64URL:return new Kc(l1(t,e));case en.DATA_URL:return new Kc(lP(e),aP(e))}throw Hf()}function o1(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function oP(t){let e;try{e=decodeURIComponent(t)}catch{throw Js(en.DATA_URL,"Malformed data URL.")}return o1(e)}function l1(t,e){switch(t){case en.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Js(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case en.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Js(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=iP(e)}catch(i){throw i.message.includes("polyfill")?i:Js(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class a1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Js(en.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=uP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function lP(t){const e=new a1(t);return e.base64?l1(en.BASE64,e.rest):oP(e.rest)}function aP(t){return new a1(t).contentType}function uP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class qn{constructor(e,n){let r=0,i="";A_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(A_(this.data_)){const r=this.data_,i=rP(r,e,n);return i===null?null:new qn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new qn(r,!0)}}static getBlob(...e){if(Gf()){const n=e.map(r=>r instanceof qn?r.data_:r);return new qn(nP.apply(null,n))}else{const n=e.map(o=>Wf(o)?sP(en.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new qn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Kf(t){let e;try{e=JSON.parse(t)}catch{return null}return KN(e)?e:null}/**
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
 */function cP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function hP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function u1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function dP(t,e){return e}class nt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||dP}}let Bl=null;function fP(t){return!Wf(t)||t.length<2?t:u1(t)}function c1(){if(Bl)return Bl;const t=[];t.push(new nt("bucket")),t.push(new nt("generation")),t.push(new nt("metageneration")),t.push(new nt("name","fullPath",!0));function e(s,o){return fP(o)}const n=new nt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new nt("size");return i.xform=r,t.push(i),t.push(new nt("timeCreated")),t.push(new nt("updated")),t.push(new nt("md5Hash",null,!0)),t.push(new nt("cacheControl",null,!0)),t.push(new nt("contentDisposition",null,!0)),t.push(new nt("contentEncoding",null,!0)),t.push(new nt("contentLanguage",null,!0)),t.push(new nt("contentType",null,!0)),t.push(new nt("metadata","customMetadata",!0)),Bl=t,Bl}function pP(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new it(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function gP(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return pP(r,t),r}function h1(t,e,n){const r=Kf(e);return r===null?null:gP(t,r,n)}function mP(t,e,n,r){const i=Kf(e);if(i===null||!Wf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(h=>{const p=t.bucket,f=t.fullPath,g="/b/"+o(p)+"/o/"+o(f),T=Ru(g,n,r),k=s1({alt:"media",token:h});return T+k})[0]}function _P(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const O_="prefixes",b_="items";function yP(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[O_])for(const i of n[O_]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new it(e,s));r.prefixes.push(o)}if(n[b_])for(const i of n[b_]){const s=t._makeStorageReference(new it(e,i.name));r.items.push(s)}return r}function vP(t,e,n){const r=Kf(n);return r===null?null:yP(t,e,r)}class qf{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Yf(t){if(!t)throw Hf()}function wP(t,e){function n(r,i){const s=h1(t,i,e);return Yf(s!==null),s}return n}function EP(t,e){function n(r,i){const s=vP(t,e,i);return Yf(s!==null),s}return n}function CP(t,e){function n(r,i){const s=h1(t,i,e);return Yf(s!==null),mP(s,i,t.host,t._protocol)}return n}function Qf(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=ON():i=AN():n.getStatus()===402?i=PN(t.bucket):n.getStatus()===403?i=bN(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function IP(t){const e=Qf(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=NN(t.path)),s.serverResponse=i.serverResponse,s}return n}function SP(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Ru(o,t.host,t._protocol),u="GET",h=t.maxOperationRetryTime,p=new qf(a,u,EP(t,e.bucket),h);return p.urlParams=s,p.errorHandler=Qf(e),p}function TP(t,e,n){const r=e.fullServerUrl(),i=Ru(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new qf(i,s,CP(t,n),o);return a.errorHandler=IP(e),a}function kP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function RP(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=kP(null,e)),r}function xP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let D=0;D<2;D++)I=I+Math.random().toString().slice(2);return I}const u=a();o["Content-Type"]="multipart/related; boundary="+u;const h=RP(e,r,i),p=_P(h,n),f="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+u+`\r
Content-Type: `+h.contentType+`\r
\r
`,g=`\r
--`+u+"--",T=qn.getBlob(f,r,g);if(T===null)throw jN();const k={name:h.fullPath},N=Ru(s,t.host,t._protocol),O="POST",v=t.maxUploadRetryTime,y=new qf(N,O,wP(t,n),v);return y.urlParams=k,y.headers=o,y.body=T.uploadData(),y.errorHandler=Qf(e),y}class NP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Br.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Br.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Br.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw As("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw As("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw As("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw As("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw As("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class PP extends NP{initXhr(){this.xhr_.responseType="text"}}function Xf(){return new PP}/**
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
 */class Yr{constructor(e,n){this._service=e,n instanceof it?this._location=n:this._location=it.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Yr(e,n)}get root(){const e=new it(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return u1(this._location.path)}get storage(){return this._service}get parent(){const e=cP(this._location.path);if(e===null)return null;const n=new it(this._location.bucket,e);return new Yr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw VN(e)}}function AP(t,e,n){t._throwIfRoot("uploadBytes");const r=xP(t.storage,t._location,c1(),new qn(e,!0),n);return t.storage.makeRequestWithTokens(r,Xf).then(i=>({metadata:i,ref:t}))}function OP(t){const e={prefixes:[],items:[]};return d1(t,e).then(()=>e)}async function d1(t,e,n){const i=await bP(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await d1(t,e,i.nextPageToken)}function bP(t,e){e!=null&&typeof e.maxResults=="number"&&pd("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=SP(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Xf)}function DP(t){t._throwIfRoot("getDownloadURL");const e=TP(t.storage,t._location,c1());return t.storage.makeRequestWithTokens(e,Xf).then(n=>{if(n===null)throw BN();return n})}function LP(t,e){const n=hP(t._location.path,e),r=new it(t._location.bucket,n);return new Yr(t.storage,r)}/**
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
 */function MP(t){return/^[A-Za-z]+:\/\//.test(t)}function UP(t,e){return new Yr(t,e)}function f1(t,e){if(t instanceof Jf){const n=t;if(n._bucket==null)throw FN();const r=new Yr(n,n._bucket);return e!=null?f1(r,e):r}else return e!==void 0?LP(t,e):t}function FP(t,e){if(e&&MP(e)){if(t instanceof Jf)return UP(t,e);throw fd("To use ref(service, url), the first argument must be a Storage instance.")}else return f1(t,e)}function D_(t,e){const n=e==null?void 0:e[r1];return n==null?null:it.makeFromBucketSpec(n,t)}function jP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Rf(i,t.app.options.projectId))}class Jf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=n1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=RN,this._maxUploadRetryTime=xN,this._requests=new Set,i!=null?this._bucket=it.makeFromBucketSpec(i,this._host):this._bucket=D_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=it.makeFromBucketSpec(this._url,e):this._bucket=D_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){pd("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){pd("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Yr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new $N(i1());{const o=eP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const L_="@firebase/storage",M_="0.12.6";/**
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
 */const p1="storage";function BP(t,e,n){return t=Se(t),AP(t,e,n)}function zP(t){return t=Se(t),OP(t)}function U_(t){return t=Se(t),DP(t)}function qc(t,e){return t=Se(t),FP(t,e)}function VP(t=Go(),e){t=Se(t);const r=bn(t,p1).getImmediate({identifier:e}),i=kf("storage");return i&&$P(r,...i),r}function $P(t,e,n,r={}){jP(t,e,n,r)}function HP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Jf(n,r,i,e,wr)}function WP(){Lt(new St(p1,HP,"PUBLIC").setMultipleInstances(!0)),Xe(L_,M_,""),Xe(L_,M_,"esm2017")}WP();const g1="@firebase/installations",Zf="0.6.8";/**
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
 */const m1=1e4,_1=`w:${Zf}`,y1="FIS_v2",GP="https://firebaseinstallations.googleapis.com/v1",KP=60*60*1e3,qP="installations",YP="Installations";/**
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
 */const QP={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qr=new ii(qP,YP,QP);function v1(t){return t instanceof Mt&&t.code.includes("request-failed")}/**
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
 */function w1({projectId:t}){return`${GP}/projects/${t}/installations`}function E1(t){return{token:t.token,requestStatus:2,expiresIn:JP(t.expiresIn),creationTime:Date.now()}}async function C1(t,e){const r=(await e.json()).error;return Qr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function I1({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function XP(t,{refreshToken:e}){const n=I1(t);return n.append("Authorization",ZP(e)),n}async function S1(t){const e=await t();return e.status>=500&&e.status<600?t():e}function JP(t){return Number(t.replace("s","000"))}function ZP(t){return`${y1} ${t}`}/**
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
 */async function eA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=w1(t),i=I1(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:y1,appId:t.appId,sdkVersion:_1},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await S1(()=>fetch(r,a));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:E1(h.authToken)}}else throw await C1("Create Installation",u)}/**
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
 */function T1(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function tA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const nA=/^[cdef][\w-]{21}$/,gd="";function rA(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=iA(t);return nA.test(n)?n:gd}catch{return gd}}function iA(t){return tA(t).substr(0,22)}/**
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
 */function xu(t){return`${t.appName}!${t.appId}`}/**
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
 */const k1=new Map;function R1(t,e){const n=xu(t);x1(n,e),sA(n,e)}function x1(t,e){const n=k1.get(t);if(n)for(const r of n)r(e)}function sA(t,e){const n=oA();n&&n.postMessage({key:t,fid:e}),lA()}let Lr=null;function oA(){return!Lr&&"BroadcastChannel"in self&&(Lr=new BroadcastChannel("[Firebase] FID Change"),Lr.onmessage=t=>{x1(t.data.key,t.data.fid)}),Lr}function lA(){k1.size===0&&Lr&&(Lr.close(),Lr=null)}/**
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
 */const aA="firebase-installations-database",uA=1,Xr="firebase-installations-store";let Yc=null;function ep(){return Yc||(Yc=pw(aA,uA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Xr)}}})),Yc}async function $a(t,e){const n=xu(t),i=(await ep()).transaction(Xr,"readwrite"),s=i.objectStore(Xr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&R1(t,e.fid),e}async function N1(t){const e=xu(t),r=(await ep()).transaction(Xr,"readwrite");await r.objectStore(Xr).delete(e),await r.done}async function Nu(t,e){const n=xu(t),i=(await ep()).transaction(Xr,"readwrite"),s=i.objectStore(Xr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&R1(t,a.fid),a}/**
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
 */async function tp(t){let e;const n=await Nu(t.appConfig,r=>{const i=cA(r),s=hA(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===gd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function cA(t){const e=t||{fid:rA(),registrationStatus:0};return P1(e)}function hA(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Qr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=dA(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:fA(t)}:{installationEntry:e}}async function dA(t,e){try{const n=await eA(t,e);return $a(t.appConfig,n)}catch(n){throw v1(n)&&n.customData.serverCode===409?await N1(t.appConfig):await $a(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function fA(t){let e=await F_(t.appConfig);for(;e.registrationStatus===1;)await T1(100),e=await F_(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await tp(t);return r||n}return e}function F_(t){return Nu(t,e=>{if(!e)throw Qr.create("installation-not-found");return P1(e)})}function P1(t){return pA(t)?{fid:t.fid,registrationStatus:0}:t}function pA(t){return t.registrationStatus===1&&t.registrationTime+m1<Date.now()}/**
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
 */async function gA({appConfig:t,heartbeatServiceProvider:e},n){const r=mA(t,n),i=XP(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:_1,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},u=await S1(()=>fetch(r,a));if(u.ok){const h=await u.json();return E1(h)}else throw await C1("Generate Auth Token",u)}function mA(t,{fid:e}){return`${w1(t)}/${e}/authTokens:generate`}/**
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
 */async function np(t,e=!1){let n;const r=await Nu(t.appConfig,s=>{if(!A1(s))throw Qr.create("not-registered");const o=s.authToken;if(!e&&vA(o))return s;if(o.requestStatus===1)return n=_A(t,e),s;{if(!navigator.onLine)throw Qr.create("app-offline");const a=EA(s);return n=yA(t,a),a}});return n?await n:r.authToken}async function _A(t,e){let n=await j_(t.appConfig);for(;n.authToken.requestStatus===1;)await T1(100),n=await j_(t.appConfig);const r=n.authToken;return r.requestStatus===0?np(t,e):r}function j_(t){return Nu(t,e=>{if(!A1(e))throw Qr.create("not-registered");const n=e.authToken;return CA(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function yA(t,e){try{const n=await gA(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await $a(t.appConfig,r),n}catch(n){if(v1(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await N1(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await $a(t.appConfig,r)}throw n}}function A1(t){return t!==void 0&&t.registrationStatus===2}function vA(t){return t.requestStatus===2&&!wA(t)}function wA(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+KP}function EA(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function CA(t){return t.requestStatus===1&&t.requestTime+m1<Date.now()}/**
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
 */async function IA(t){const e=t,{installationEntry:n,registrationPromise:r}=await tp(e);return r?r.catch(console.error):np(e).catch(console.error),n.fid}/**
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
 */async function SA(t,e=!1){const n=t;return await TA(n),(await np(n,e)).token}async function TA(t){const{registrationPromise:e}=await tp(t);e&&await e}/**
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
 */function kA(t){if(!t||!t.options)throw Qc("App Configuration");if(!t.name)throw Qc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Qc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Qc(t){return Qr.create("missing-app-config-values",{valueName:t})}/**
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
 */const O1="installations",RA="installations-internal",xA=t=>{const e=t.getProvider("app").getImmediate(),n=kA(e),r=bn(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},NA=t=>{const e=t.getProvider("app").getImmediate(),n=bn(e,O1).getImmediate();return{getId:()=>IA(n),getToken:i=>SA(n,i)}};function PA(){Lt(new St(O1,xA,"PUBLIC")),Lt(new St(RA,NA,"PRIVATE"))}PA();Xe(g1,Zf);Xe(g1,Zf,"esm2017");/**
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
 */const Ha="analytics",AA="firebase_id",OA="origin",bA=60*1e3,DA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",rp="https://www.googletagmanager.com/gtag/js";/**
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
 */const gt=new Wo("@firebase/analytics");/**
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
 */const LA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ct=new ii("analytics","Analytics",LA);/**
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
 */function MA(t){if(!t.startsWith(rp)){const e=Ct.create("invalid-gtag-resource",{gtagURL:t});return gt.warn(e.message),""}return t}function b1(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function UA(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function FA(t,e){const n=UA("firebase-js-sdk-policy",{createScriptURL:MA}),r=document.createElement("script"),i=`${rp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function jA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function BA(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await b1(n)).find(h=>h.measurementId===i);u&&await e[u.appId]}}catch(a){gt.error(a)}t("config",i,s)}async function zA(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const a=await b1(n);for(const u of o){const h=a.find(f=>f.measurementId===u),p=h&&e[h.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){gt.error(s)}}function VA(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[a,u]=o;await zA(t,e,n,a,u)}else if(s==="config"){const[a,u]=o;await BA(t,e,n,r,a,u)}else if(s==="consent"){const[a,u]=o;t("consent",a,u)}else if(s==="get"){const[a,u,h]=o;t("get",a,u,h)}else if(s==="set"){const[a]=o;t("set",a)}else t(s,...o)}catch(a){gt.error(a)}}return i}function $A(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=VA(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function HA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(rp)&&n.src.includes(t))return n;return null}/**
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
 */const WA=30,GA=1e3;class KA{constructor(e={},n=GA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const D1=new KA;function qA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function YA(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:qA(r)},s=DA.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let a="";try{const u=await o.json();!((e=u.error)===null||e===void 0)&&e.message&&(a=u.error.message)}catch{}throw Ct.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function QA(t,e=D1,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Ct.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Ct.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ZA;return setTimeout(async()=>{a.abort()},bA),L1({appId:r,apiKey:i,measurementId:s},o,a,e)}async function L1(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=D1){var s;const{appId:o,measurementId:a}=t;try{await XA(r,e)}catch(u){if(a)return gt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:a};throw u}try{const u=await YA(t);return i.deleteThrottleMetadata(o),u}catch(u){const h=u;if(!JA(h)){if(i.deleteThrottleMetadata(o),a)return gt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:o,measurementId:a};throw u}const p=Number((s=h==null?void 0:h.customData)===null||s===void 0?void 0:s.httpStatus)===503?Qm(n,i.intervalMillis,WA):Qm(n,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return i.setThrottleMetadata(o,f),gt.debug(`Calling attemptFetch again in ${p} millis`),L1(t,f,r,i)}}function XA(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Ct.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function JA(t){if(!(t instanceof Mt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class ZA{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function e4(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function t4(){if(uw())try{await cw()}catch(t){return gt.warn(Ct.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return gt.warn(Ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function n4(t,e,n,r,i,s,o){var a;const u=QA(t);u.then(T=>{n[T.measurementId]=T.appId,t.options.measurementId&&T.measurementId!==t.options.measurementId&&gt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${T.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(T=>gt.error(T)),e.push(u);const h=t4().then(T=>{if(T)return r.getId()}),[p,f]=await Promise.all([u,h]);HA(s)||FA(s,p.measurementId),i("js",new Date);const g=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return g[OA]="firebase",g.update=!0,f!=null&&(g[AA]=f),i("config",p.measurementId,g),p.measurementId}/**
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
 */class r4{constructor(e){this.app=e}_delete(){return delete Zs[this.app.options.appId],Promise.resolve()}}let Zs={},B_=[];const z_={};let Xc="dataLayer",i4="gtag",V_,M1,$_=!1;function s4(){const t=[];if(ow()&&t.push("This is a browser extension environment."),Ik()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ct.create("invalid-analytics-context",{errorInfo:e});gt.warn(n.message)}}function o4(t,e,n){s4();const r=t.options.appId;if(!r)throw Ct.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)gt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ct.create("no-api-key");if(Zs[r]!=null)throw Ct.create("already-exists",{id:r});if(!$_){jA(Xc);const{wrappedGtag:s,gtagCore:o}=$A(Zs,B_,z_,Xc,i4);M1=s,V_=o,$_=!0}return Zs[r]=n4(t,B_,z_,e,V_,Xc,n),new r4(t)}function l4(t=Go()){t=Se(t);const e=bn(t,Ha);return e.isInitialized()?e.getImmediate():a4(t)}function a4(t,e={}){const n=bn(t,Ha);if(n.isInitialized()){const i=n.getImmediate();if(Ro(e,n.getOptions()))return i;throw Ct.create("already-initialized")}return n.initialize({options:e})}function u4(t,e,n,r){t=Se(t),e4(M1,Zs[t.app.options.appId],e,n,r).catch(i=>gt.error(i))}const H_="@firebase/analytics",W_="0.10.5";function c4(){Lt(new St(Ha,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return o4(r,i,n)},"PUBLIC")),Lt(new St("analytics-internal",t,"PRIVATE")),Xe(H_,W_),Xe(H_,W_,"esm2017");function t(e){try{const n=e.getProvider(Ha).getImmediate();return{logEvent:(r,i,s)=>u4(n,r,i,s)}}catch(n){throw Ct.create("interop-component-reg-failed",{reason:n})}}}c4();var G_={};const K_="@firebase/database",q_="1.0.6";/**
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
 */let U1="";function h4(t){U1=t}/**
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
 */class d4{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),xe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ko(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class f4{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return On(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const F1=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new d4(e)}}catch{}return new f4},Mr=F1("localStorage"),p4=F1("sessionStorage");/**
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
 */const Fi=new Wo("@firebase/database"),g4=function(){let t=1;return function(){return t++}}(),j1=function(t){const e=bk(t),n=new Nk;n.update(e);const r=n.digest();return Sf.encodeByteArray(r)},Jo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Jo.apply(null,r):typeof r=="object"?e+=xe(r):e+=r,e+=" "}return e};let eo=null,Y_=!0;const m4=function(t,e){F(!e,"Can't turn on custom loggers persistently."),Fi.logLevel=te.VERBOSE,eo=Fi.log.bind(Fi)},qe=function(...t){if(Y_===!0&&(Y_=!1,eo===null&&p4.get("logging_enabled")===!0&&m4()),eo){const e=Jo.apply(null,t);eo(e)}},Zo=function(t){return function(...e){qe(t,...e)}},md=function(...t){const e="FIREBASE INTERNAL ERROR: "+Jo(...t);Fi.error(e)},Pn=function(...t){const e=`FIREBASE FATAL ERROR: ${Jo(...t)}`;throw Fi.error(e),new Error(e)},mt=function(...t){const e="FIREBASE WARNING: "+Jo(...t);Fi.warn(e)},_4=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&mt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},B1=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},y4=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Yi="[MIN_NAME]",Jr="[MAX_NAME]",os=function(t,e){if(t===e)return 0;if(t===Yi||e===Jr)return-1;if(e===Yi||t===Jr)return 1;{const n=Q_(t),r=Q_(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},v4=function(t,e){return t===e?0:t<e?-1:1},Os=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+xe(e))},ip=function(t){if(typeof t!="object"||t===null)return xe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=xe(e[r]),n+=":",n+=ip(t[e[r]]);return n+="}",n},z1=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function _t(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const V1=function(t){F(!B1(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,u;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const h=[];for(u=n;u;u-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(u=e;u;u-=1)h.push(s%2?1:0),s=Math.floor(s/2);h.push(i?1:0),h.reverse();const p=h.join("");let f="";for(u=0;u<64;u+=8){let g=parseInt(p.substr(u,8),2).toString(16);g.length===1&&(g="0"+g),f=f+g}return f.toLowerCase()},w4=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},E4=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function C4(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const I4=new RegExp("^-?(0*)\\d{1,10}$"),S4=-2147483648,T4=2147483647,Q_=function(t){if(I4.test(t)){const e=Number(t);if(e>=S4&&e<=T4)return e}return null},ls=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw mt("Exception was thrown by user callback.",n),e},Math.floor(0))}},k4=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},to=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class R4{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){mt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class x4{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',mt(e)}}class oa{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}oa.OWNER="owner";/**
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
 */const sp="5",$1="v",H1="s",W1="r",G1="f",K1=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,q1="ls",Y1="p",_d="ac",Q1="websocket",X1="long_polling";/**
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
 */class J1{constructor(e,n,r,i,s=!1,o="",a=!1,u=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Mr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Mr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function N4(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Z1(t,e,n){F(typeof e=="string","typeof type must == string"),F(typeof n=="object","typeof params must == object");let r;if(e===Q1)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===X1)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);N4(t)&&(n.ns=t.namespace);const i=[];return _t(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class P4{constructor(){this.counters_={}}incrementCounter(e,n=1){On(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return mk(this.counters_)}}/**
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
 */const Jc={},Zc={};function op(t){const e=t.toString();return Jc[e]||(Jc[e]=new P4),Jc[e]}function A4(t,e){const n=t.toString();return Zc[n]||(Zc[n]=e()),Zc[n]}/**
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
 */class O4{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ls(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const X_="start",b4="close",D4="pLPCommand",L4="pRTLPCB",eE="id",tE="pw",nE="ser",M4="cb",U4="seg",F4="ts",j4="d",B4="dframe",rE=1870,iE=30,z4=rE-iE,V4=25e3,$4=3e4;class Ri{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Zo(e),this.stats_=op(n),this.urlFn=u=>(this.appCheckToken&&(u[_d]=this.appCheckToken),Z1(n,X1,u))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new O4(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor($4)),y4(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lp((...s)=>{const[o,a,u,h,p]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===X_)this.id=a,this.password=u;else if(o===b4)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[X_]="t",r[nE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[M4]=this.scriptTagHolder.uniqueCallbackIdentifier),r[$1]=sp,this.transportSessionId&&(r[H1]=this.transportSessionId),this.lastSessionId&&(r[q1]=this.lastSessionId),this.applicationId&&(r[Y1]=this.applicationId),this.appCheckToken&&(r[_d]=this.appCheckToken),typeof location<"u"&&location.hostname&&K1.test(location.hostname)&&(r[W1]=G1);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ri.forceAllow_=!0}static forceDisallow(){Ri.forceDisallow_=!0}static isAvailable(){return Ri.forceAllow_?!0:!Ri.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!w4()&&!E4()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=tw(n),i=z1(r,z4);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[B4]="t",r[eE]=e,r[tE]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=xe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class lp{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=g4(),window[D4+this.uniqueCallbackIdentifier]=e,window[L4+this.uniqueCallbackIdentifier]=n,this.myIFrame=lp.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){qe("frame writing exception"),a.stack&&qe(a.stack),qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||qe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[eE]=this.myID,e[tE]=this.myPW,e[nE]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+iE+r.length<=rE;){const o=this.pendingSegs.shift();r=r+"&"+U4+i+"="+o.seg+"&"+F4+i+"="+o.ts+"&"+j4+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(V4)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const H4=16384,W4=45e3;let Wa=null;typeof MozWebSocket<"u"?Wa=MozWebSocket:typeof WebSocket<"u"&&(Wa=WebSocket);class Vt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Zo(this.connId),this.stats_=op(n),this.connURL=Vt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[$1]=sp,typeof location<"u"&&location.hostname&&K1.test(location.hostname)&&(o[W1]=G1),n&&(o[H1]=n),r&&(o[q1]=r),i&&(o[_d]=i),s&&(o[Y1]=s),Z1(e,Q1,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Mr.set("previous_websocket_failure",!0);try{let r;aw(),this.mySock=new Wa(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Vt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Wa!==null&&!Vt.forceDisallow_}static previouslyFailed(){return Mr.isInMemoryStorage||Mr.get("previous_websocket_failure")===!0}markConnectionHealthy(){Mr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ko(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(F(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=xe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=z1(n,H4);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(W4))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Vt.responsesRequiredToBeHealthy=2;Vt.healthyTimeout=3e4;/**
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
 */class Ao{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ri,Vt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Vt&&Vt.isAvailable();let r=n&&!Vt.previouslyFailed();if(e.webSocketOnly&&(n||mt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Vt];else{const i=this.transports_=[];for(const s of Ao.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ao.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ao.globalTransportInitialized_=!1;/**
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
 */const G4=6e4,K4=5e3,q4=10*1024,Y4=100*1024,eh="t",J_="d",Q4="s",Z_="r",X4="e",ey="o",ty="a",ny="n",ry="p",J4="h";class Z4{constructor(e,n,r,i,s,o,a,u,h,p){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=u,this.onKill_=h,this.lastSessionId=p,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Zo("c:"+this.id+":"),this.transportManager_=new Ao(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=to(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Y4?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>q4?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(eh in e){const n=e[eh];n===ty?this.upgradeIfSecondaryHealthy_():n===Z_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ey&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Os("t",e),r=Os("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ry,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ty,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ny,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Os("t",e),r=Os("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Os(eh,e);if(J_ in e){const r=e[J_];if(n===J4){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ny){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Q4?this.onConnectionShutdown_(r):n===Z_?this.onReset_(r):n===X4?md("Server Error: "+r):n===ey?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):md("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),sp!==r&&mt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),to(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(G4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):to(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(K4))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ry,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Mr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class sE{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class oE{constructor(e){this.allowedEvents_=e,this.listeners_={},F(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){F(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ga extends oE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!xf()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ga}getInitialEvent(e){return F(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const iy=32,sy=768;class se{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ee(){return new se("")}function Q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function fr(t){return t.pieces_.length-t.pieceNum_}function oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new se(t.pieces_,e)}function lE(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function eO(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function aE(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function uE(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new se(e,0)}function Ne(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof se)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new se(n,0)}function q(t){return t.pieceNum_>=t.pieces_.length}function st(t,e){const n=Q(t),r=Q(e);if(n===null)return e;if(n===r)return st(oe(t),oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function cE(t,e){if(fr(t)!==fr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function $t(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(fr(t)>fr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class tO{constructor(e,n){this.errorPrefix_=n,this.parts_=aE(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Cu(this.parts_[r]);hE(this)}}function nO(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Cu(e),hE(t)}function rO(t){const e=t.parts_.pop();t.byteLength_-=Cu(e),t.parts_.length>0&&(t.byteLength_-=1)}function hE(t){if(t.byteLength_>sy)throw new Error(t.errorPrefix_+"has a key path longer than "+sy+" bytes ("+t.byteLength_+").");if(t.parts_.length>iy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+iy+") or object contains a cycle "+Ar(t))}function Ar(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ap extends oE{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ap}getInitialEvent(e){return F(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const bs=1e3,iO=60*5*1e3,oy=30*1e3,sO=1.3,oO=3e4,lO="server_kill",ly=3;class Sn extends sE{constructor(e,n,r,i,s,o,a,u){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=u,this.id=Sn.nextPersistentConnectionId_++,this.log_=Zo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=bs,this.maxReconnectDelay_=iO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!aw())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ap.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ga.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(xe(s)),F(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Eu,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),F(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const u=a.d,h=a.s;Sn.warnOnListenWarnings_(u,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),h!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(h,u))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&On(e,"w")){const r=Ki(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();mt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||xk(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=oy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Rk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),F(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+xe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):md("Unrecognized action received from server: "+xe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){F(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=bs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=bs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>oO&&(this.reconnectDelay_=bs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*sO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Sn.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const u=function(){a?a.close():(o=!0,r())},h=function(f){F(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:u,sendRequest:h};const p=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,g]=await Promise.all([this.authTokenProvider_.getToken(p),this.appCheckTokenProvider_.getToken(p)]);o?qe("getToken() completed but was canceled"):(qe("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=g&&g.token,a=new Z4(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,T=>{mt(T+" ("+this.repoInfo_.toString()+")"),this.interrupt(lO)},s))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&mt(f),u())}}}interrupt(e){qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],nd(this.interruptReasons_)&&(this.reconnectDelay_=bs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>ip(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new se(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ly&&(this.reconnectDelay_=oy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ly&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+U1.replace(/\./g,"-")]=1,xf()?e["framework.cordova"]=1:lw()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ga.getInstance().currentlyOnline();return nd(this.interruptReasons_)&&e}}Sn.nextPersistentConnectionId_=0;Sn.nextConnectionId_=0;/**
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
 */class K{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new K(e,n)}}/**
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
 */class Pu{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new K(Yi,e),i=new K(Yi,n);return this.compare(r,i)!==0}minPost(){return K.MIN}}/**
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
 */let zl;class dE extends Pu{static get __EMPTY_NODE(){return zl}static set __EMPTY_NODE(e){zl=e}compare(e,n){return os(e.name,n.name)}isDefinedOn(e){throw rs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return K.MIN}maxPost(){return new K(Jr,zl)}makePost(e,n){return F(typeof e=="string","KeyIndex indexValue must always be a string."),new K(e,zl)}toString(){return".key"}}const ji=new dE;/**
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
 */class Vl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class be{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??be.RED,this.left=i??ht.EMPTY_NODE,this.right=s??ht.EMPTY_NODE}copy(e,n,r,i,s){return new be(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ht.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return ht.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class aO{copy(e,n,r,i,s){return this}insert(e,n,r){return new be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ht{constructor(e,n=ht.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ht(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(e){return new ht(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,be.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Vl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Vl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Vl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Vl(this.root_,null,this.comparator_,!0,e)}}ht.EMPTY_NODE=new aO;/**
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
 */function uO(t,e){return os(t.name,e.name)}function up(t,e){return os(t,e)}/**
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
 */let yd;function cO(t){yd=t}const fE=function(t){return typeof t=="number"?"number:"+V1(t):"string:"+t},pE=function(t){if(t.isLeafNode()){const e=t.val();F(typeof e=="string"||typeof e=="number"||typeof e=="object"&&On(e,".sv"),"Priority must be a string or number.")}else F(t===yd||t.isEmpty(),"priority of unexpected type.");F(t===yd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ay;class Ae{constructor(e,n=Ae.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,F(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),pE(this.priorityNode_)}static set __childrenNodeConstructor(e){ay=e}static get __childrenNodeConstructor(){return ay}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ae(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return q(e)?this:Q(e)===".priority"?this.priorityNode_:Ae.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ae.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=Q(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(F(r!==".priority"||fr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ae.__childrenNodeConstructor.EMPTY_NODE.updateChild(oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+fE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=V1(this.value_):e+=this.value_,this.lazyHash_=j1(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ae.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ae.__childrenNodeConstructor?-1:(F(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ae.VALUE_TYPE_ORDER.indexOf(n),s=Ae.VALUE_TYPE_ORDER.indexOf(r);return F(i>=0,"Unknown leaf type: "+n),F(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ae.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let gE,mE;function hO(t){gE=t}function dO(t){mE=t}class fO extends Pu{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?os(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return K.MIN}maxPost(){return new K(Jr,new Ae("[PRIORITY-POST]",mE))}makePost(e,n){const r=gE(e);return new K(n,new Ae("[PRIORITY-POST]",r))}toString(){return".priority"}}const ye=new fO;/**
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
 */const pO=Math.log(2);class gO{constructor(e){const n=s=>parseInt(Math.log(s)/pO,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ka=function(t,e,n,r){t.sort(e);const i=function(u,h){const p=h-u;let f,g;if(p===0)return null;if(p===1)return f=t[u],g=n?n(f):f,new be(g,f.node,be.BLACK,null,null);{const T=parseInt(p/2,10)+u,k=i(u,T),N=i(T+1,h);return f=t[T],g=n?n(f):f,new be(g,f.node,be.BLACK,k,N)}},s=function(u){let h=null,p=null,f=t.length;const g=function(k,N){const O=f-k,v=f;f-=k;const y=i(O+1,v),I=t[O],D=n?n(I):I;T(new be(D,I.node,N,null,y))},T=function(k){h?(h.left=k,h=k):(p=k,h=k)};for(let k=0;k<u.count;++k){const N=u.nextBitIsOne(),O=Math.pow(2,u.count-(k+1));N?g(O,be.BLACK):(g(O,be.BLACK),g(O,be.RED))}return p},o=new gO(t.length),a=s(o);return new ht(r||e,a)};/**
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
 */let th;const fi={};class En{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return F(fi&&ye,"ChildrenNode.ts has not been loaded"),th=th||new En({".priority":fi},{".priority":ye}),th}get(e){const n=Ki(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ht?n:null}hasIndex(e){return On(this.indexSet_,e.toString())}addIndex(e,n){F(e!==ji,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(K.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ka(r,e.getCompare()):a=fi;const u=e.toString(),h=Object.assign({},this.indexSet_);h[u]=e;const p=Object.assign({},this.indexes_);return p[u]=a,new En(p,h)}addToIndexes(e,n){const r=La(this.indexes_,(i,s)=>{const o=Ki(this.indexSet_,s);if(F(o,"Missing index implementation for "+s),i===fi)if(o.isDefinedOn(e.node)){const a=[],u=n.getIterator(K.Wrap);let h=u.getNext();for(;h;)h.name!==e.name&&a.push(h),h=u.getNext();return a.push(e),Ka(a,o.getCompare())}else return fi;else{const a=n.get(e.name);let u=i;return a&&(u=u.remove(new K(e.name,a))),u.insert(e,e.node)}});return new En(r,this.indexSet_)}removeFromIndexes(e,n){const r=La(this.indexes_,i=>{if(i===fi)return i;{const s=n.get(e.name);return s?i.remove(new K(e.name,s)):i}});return new En(r,this.indexSet_)}}/**
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
 */let Ds;class ${constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&pE(this.priorityNode_),this.children_.isEmpty()&&F(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ds||(Ds=new $(new ht(up),null,En.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ds}updatePriority(e){return this.children_.isEmpty()?this:new $(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ds:n}}getChild(e){const n=Q(e);return n===null?this:this.getImmediateChild(n).getChild(oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(F(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new K(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ds:this.priorityNode_;return new $(i,o,s)}}updateChild(e,n){const r=Q(e);if(r===null)return n;{F(Q(e)!==".priority"||fr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(oe(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ye,(o,a)=>{n[o]=a.val(e),r++,s&&$.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+fE(this.getPriority().val())+":"),this.forEachChild(ye,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":j1(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new K(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new K(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new K(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,K.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===el?-1:0}withIndex(e){if(e===ji||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new $(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ji||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ye),i=n.getIterator(ye);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ji?null:this.indexMap_.get(e.toString())}}$.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class mO extends ${constructor(){super(new ht(up),$.EMPTY_NODE,En.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return $.EMPTY_NODE}isEmpty(){return!1}}const el=new mO;Object.defineProperties(K,{MIN:{value:new K(Yi,$.EMPTY_NODE)},MAX:{value:new K(Jr,el)}});dE.__EMPTY_NODE=$.EMPTY_NODE;Ae.__childrenNodeConstructor=$;cO(el);dO(el);/**
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
 */const _O=!0;function De(t,e=null){if(t===null)return $.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),F(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ae(n,De(e))}if(!(t instanceof Array)&&_O){const n=[];let r=!1;if(_t(t,(o,a)=>{if(o.substring(0,1)!=="."){const u=De(a);u.isEmpty()||(r=r||!u.getPriority().isEmpty(),n.push(new K(o,u)))}}),n.length===0)return $.EMPTY_NODE;const s=Ka(n,uO,o=>o.name,up);if(r){const o=Ka(n,ye.getCompare());return new $(s,De(e),new En({".priority":o},{".priority":ye}))}else return new $(s,De(e),En.Default)}else{let n=$.EMPTY_NODE;return _t(t,(r,i)=>{if(On(t,r)&&r.substring(0,1)!=="."){const s=De(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(De(e))}}hO(De);/**
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
 */class yO extends Pu{constructor(e){super(),this.indexPath_=e,F(!q(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?os(e.name,n.name):s}makePost(e,n){const r=De(e),i=$.EMPTY_NODE.updateChild(this.indexPath_,r);return new K(n,i)}maxPost(){const e=$.EMPTY_NODE.updateChild(this.indexPath_,el);return new K(Jr,e)}toString(){return aE(this.indexPath_,0).join("/")}}/**
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
 */class vO extends Pu{compare(e,n){const r=e.node.compareTo(n.node);return r===0?os(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return K.MIN}maxPost(){return K.MAX}makePost(e,n){const r=De(e);return new K(n,r)}toString(){return".value"}}const wO=new vO;/**
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
 */function _E(t){return{type:"value",snapshotNode:t}}function Qi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Oo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function bo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function EO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class cp{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){F(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Oo(n,a)):F(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Qi(n,r)):o.trackChildChange(bo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ye,(i,s)=>{n.hasChild(i)||r.trackChildChange(Oo(i,s))}),n.isLeafNode()||n.forEachChild(ye,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(bo(i,s,o))}else r.trackChildChange(Qi(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?$.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Do{constructor(e){this.indexedFilter_=new cp(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Do.getStartPost_(e),this.endPost_=Do.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new K(n,r))||(r=$.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=$.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority($.EMPTY_NODE);const s=this;return n.forEachChild(ye,(o,a)=>{s.matches(new K(o,a))||(i=i.updateImmediateChild(o,$.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class CO{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Do(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new K(n,r))||(r=$.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=$.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=$.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority($.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,$.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const f=this.index_.getCompare();o=(g,T)=>f(T,g)}else o=this.index_.getCompare();const a=e;F(a.numChildren()===this.limit_,"");const u=new K(n,r),h=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),p=this.rangedFilter_.matches(u);if(a.hasChild(n)){const f=a.getImmediateChild(n);let g=i.getChildAfterChild(this.index_,h,this.reverse_);for(;g!=null&&(g.name===n||a.hasChild(g.name));)g=i.getChildAfterChild(this.index_,g,this.reverse_);const T=g==null?1:o(g,u);if(p&&!r.isEmpty()&&T>=0)return s!=null&&s.trackChildChange(bo(n,r,f)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Oo(n,f));const N=a.updateImmediateChild(n,$.EMPTY_NODE);return g!=null&&this.rangedFilter_.matches(g)?(s!=null&&s.trackChildChange(Qi(g.name,g.node)),N.updateImmediateChild(g.name,g.node)):N}}else return r.isEmpty()?e:p&&o(h,u)>=0?(s!=null&&(s.trackChildChange(Oo(h.name,h.node)),s.trackChildChange(Qi(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(h.name,$.EMPTY_NODE)):e}}/**
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
 */class hp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ye}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return F(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return F(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Yi}hasEnd(){return this.endSet_}getIndexEndValue(){return F(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return F(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Jr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return F(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ye}copy(){const e=new hp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function IO(t){return t.loadsAllData()?new cp(t.getIndex()):t.hasLimit()?new CO(t):new Do(t)}function uy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ye?n="$priority":t.index_===wO?n="$value":t.index_===ji?n="$key":(F(t.index_ instanceof yO,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=xe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=xe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+xe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=xe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+xe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function cy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ye&&(e.i=t.index_.toString()),e}/**
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
 */class qa extends sE{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Zo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(F(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=qa.getListenId_(e,r),a={};this.listens_[o]=a;const u=uy(e._queryParams);this.restRequest_(s+".json",u,(h,p)=>{let f=p;if(h===404&&(f=null,h=null),h===null&&this.onDataUpdate_(s,f,!1,r),Ki(this.listens_,o)===a){let g;h?h===401?g="permission_denied":g="rest_error:"+h:g="ok",i(g,null)}})}unlisten(e,n){const r=qa.getListenId_(e,n);delete this.listens_[r]}get(e){const n=uy(e._queryParams),r=e._path.toString(),i=new Eu;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+is(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let u=null;if(a.status>=200&&a.status<300){try{u=ko(a.responseText)}catch{mt("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,u)}else a.status!==401&&a.status!==404&&mt("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class SO{constructor(){this.rootNode_=$.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Ya(){return{value:null,children:new Map}}function yE(t,e,n){if(q(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=Q(e);t.children.has(r)||t.children.set(r,Ya());const i=t.children.get(r);e=oe(e),yE(i,e,n)}}function vd(t,e,n){t.value!==null?n(e,t.value):TO(t,(r,i)=>{const s=new se(e.toString()+"/"+r);vd(i,s,n)})}function TO(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class kO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&_t(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const hy=10*1e3,RO=30*1e3,xO=5*60*1e3;class NO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new kO(e);const r=hy+(RO-hy)*Math.random();to(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;_t(e,(i,s)=>{s>0&&On(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),to(this.reportStats_.bind(this),Math.floor(Math.random()*2*xO))}}/**
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
 */var Ht;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ht||(Ht={}));function vE(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function dp(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fp(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Qa{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ht.ACK_USER_WRITE,this.source=vE()}operationForChild(e){if(q(this.path)){if(this.affectedTree.value!=null)return F(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new se(e));return new Qa(ee(),n,this.revert)}}else return F(Q(this.path)===e,"operationForChild called for unrelated child."),new Qa(oe(this.path),this.affectedTree,this.revert)}}/**
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
 */class Lo{constructor(e,n){this.source=e,this.path=n,this.type=Ht.LISTEN_COMPLETE}operationForChild(e){return q(this.path)?new Lo(this.source,ee()):new Lo(this.source,oe(this.path))}}/**
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
 */class Zr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ht.OVERWRITE}operationForChild(e){return q(this.path)?new Zr(this.source,ee(),this.snap.getImmediateChild(e)):new Zr(this.source,oe(this.path),this.snap)}}/**
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
 */class Mo{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ht.MERGE}operationForChild(e){if(q(this.path)){const n=this.children.subtree(new se(e));return n.isEmpty()?null:n.value?new Zr(this.source,ee(),n.value):new Mo(this.source,ee(),n)}else return F(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Mo(this.source,oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class pr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(q(e))return this.isFullyInitialized()&&!this.filtered_;const n=Q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class PO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function AO(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(EO(o.childName,o.snapshotNode))}),Ls(t,i,"child_removed",e,r,n),Ls(t,i,"child_added",e,r,n),Ls(t,i,"child_moved",s,r,n),Ls(t,i,"child_changed",e,r,n),Ls(t,i,"value",e,r,n),i}function Ls(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,u)=>bO(t,a,u)),o.forEach(a=>{const u=OO(t,a,s);i.forEach(h=>{h.respondsTo(a.type)&&e.push(h.createEvent(u,t.query_))})})}function OO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function bO(t,e,n){if(e.childName==null||n.childName==null)throw rs("Should only compare child_ events.");const r=new K(e.childName,e.snapshotNode),i=new K(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Au(t,e){return{eventCache:t,serverCache:e}}function no(t,e,n,r){return Au(new pr(e,n,r),t.serverCache)}function wE(t,e,n,r){return Au(t.eventCache,new pr(e,n,r))}function Xa(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ei(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let nh;const DO=()=>(nh||(nh=new ht(v4)),nh);class ce{constructor(e,n=DO()){this.value=e,this.children=n}static fromObject(e){let n=new ce(null);return _t(e,(r,i)=>{n=n.set(new se(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ee(),value:this.value};if(q(e))return null;{const r=Q(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(oe(e),n);return s!=null?{path:Ne(new se(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(q(e))return this;{const n=Q(e),r=this.children.get(n);return r!==null?r.subtree(oe(e)):new ce(null)}}set(e,n){if(q(e))return new ce(n,this.children);{const r=Q(e),s=(this.children.get(r)||new ce(null)).set(oe(e),n),o=this.children.insert(r,s);return new ce(this.value,o)}}remove(e){if(q(e))return this.children.isEmpty()?new ce(null):new ce(null,this.children);{const n=Q(e),r=this.children.get(n);if(r){const i=r.remove(oe(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ce(null):new ce(this.value,s)}else return this}}get(e){if(q(e))return this.value;{const n=Q(e),r=this.children.get(n);return r?r.get(oe(e)):null}}setTree(e,n){if(q(e))return n;{const r=Q(e),s=(this.children.get(r)||new ce(null)).setTree(oe(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ce(this.value,o)}}fold(e){return this.fold_(ee(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ne(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,ee(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(q(e))return null;{const s=Q(e),o=this.children.get(s);return o?o.findOnPath_(oe(e),Ne(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ee(),n)}foreachOnPath_(e,n,r){if(q(e))return this;{this.value&&r(n,this.value);const i=Q(e),s=this.children.get(i);return s?s.foreachOnPath_(oe(e),Ne(n,i),r):new ce(null)}}foreach(e){this.foreach_(ee(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ne(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class Kt{constructor(e){this.writeTree_=e}static empty(){return new Kt(new ce(null))}}function ro(t,e,n){if(q(e))return new Kt(new ce(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=st(i,e);return s=s.updateChild(o,n),new Kt(t.writeTree_.set(i,s))}else{const i=new ce(n),s=t.writeTree_.setTree(e,i);return new Kt(s)}}}function dy(t,e,n){let r=t;return _t(n,(i,s)=>{r=ro(r,Ne(e,i),s)}),r}function fy(t,e){if(q(e))return Kt.empty();{const n=t.writeTree_.setTree(e,new ce(null));return new Kt(n)}}function wd(t,e){return oi(t,e)!=null}function oi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(st(n.path,e)):null}function py(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ye,(r,i)=>{e.push(new K(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new K(r,i.value))}),e}function ur(t,e){if(q(e))return t;{const n=oi(t,e);return n!=null?new Kt(new ce(n)):new Kt(t.writeTree_.subtree(e))}}function Ed(t){return t.writeTree_.isEmpty()}function Xi(t,e){return EE(ee(),t.writeTree_,e)}function EE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(F(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=EE(Ne(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ne(t,".priority"),r)),n}}/**
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
 */function Ou(t,e){return TE(e,t)}function LO(t,e,n,r,i){F(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ro(t.visibleWrites,e,n)),t.lastWriteId=r}function MO(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function UO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);F(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&FO(a,r.path)?i=!1:$t(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return jO(t),!0;if(r.snap)t.visibleWrites=fy(t.visibleWrites,r.path);else{const a=r.children;_t(a,u=>{t.visibleWrites=fy(t.visibleWrites,Ne(r.path,u))})}return!0}else return!1}function FO(t,e){if(t.snap)return $t(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&$t(Ne(t.path,n),e))return!0;return!1}function jO(t){t.visibleWrites=CE(t.allWrites,BO,ee()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function BO(t){return t.visible}function CE(t,e,n){let r=Kt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)$t(n,o)?(a=st(n,o),r=ro(r,a,s.snap)):$t(o,n)&&(a=st(o,n),r=ro(r,ee(),s.snap.getChild(a)));else if(s.children){if($t(n,o))a=st(n,o),r=dy(r,a,s.children);else if($t(o,n))if(a=st(o,n),q(a))r=dy(r,ee(),s.children);else{const u=Ki(s.children,Q(a));if(u){const h=u.getChild(oe(a));r=ro(r,ee(),h)}}}else throw rs("WriteRecord should have .snap or .children")}}return r}function IE(t,e,n,r,i){if(!r&&!i){const s=oi(t.visibleWrites,e);if(s!=null)return s;{const o=ur(t.visibleWrites,e);if(Ed(o))return n;if(n==null&&!wd(o,ee()))return null;{const a=n||$.EMPTY_NODE;return Xi(o,a)}}}else{const s=ur(t.visibleWrites,e);if(!i&&Ed(s))return n;if(!i&&n==null&&!wd(s,ee()))return null;{const o=function(h){return(h.visible||i)&&(!r||!~r.indexOf(h.writeId))&&($t(h.path,e)||$t(e,h.path))},a=CE(t.allWrites,o,e),u=n||$.EMPTY_NODE;return Xi(a,u)}}}function zO(t,e,n){let r=$.EMPTY_NODE;const i=oi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ye,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=ur(t.visibleWrites,e);return n.forEachChild(ye,(o,a)=>{const u=Xi(ur(s,new se(o)),a);r=r.updateImmediateChild(o,u)}),py(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=ur(t.visibleWrites,e);return py(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function VO(t,e,n,r,i){F(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ne(e,n);if(wd(t.visibleWrites,s))return null;{const o=ur(t.visibleWrites,s);return Ed(o)?i.getChild(n):Xi(o,i.getChild(n))}}function $O(t,e,n,r){const i=Ne(e,n),s=oi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=ur(t.visibleWrites,i);return Xi(o,r.getNode().getImmediateChild(n))}else return null}function HO(t,e){return oi(t.visibleWrites,e)}function WO(t,e,n,r,i,s,o){let a;const u=ur(t.visibleWrites,e),h=oi(u,ee());if(h!=null)a=h;else if(n!=null)a=Xi(u,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const p=[],f=o.getCompare(),g=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let T=g.getNext();for(;T&&p.length<i;)f(T,r)!==0&&p.push(T),T=g.getNext();return p}else return[]}function GO(){return{visibleWrites:Kt.empty(),allWrites:[],lastWriteId:-1}}function Ja(t,e,n,r){return IE(t.writeTree,t.treePath,e,n,r)}function pp(t,e){return zO(t.writeTree,t.treePath,e)}function gy(t,e,n,r){return VO(t.writeTree,t.treePath,e,n,r)}function Za(t,e){return HO(t.writeTree,Ne(t.treePath,e))}function KO(t,e,n,r,i,s){return WO(t.writeTree,t.treePath,e,n,r,i,s)}function gp(t,e,n){return $O(t.writeTree,t.treePath,e,n)}function SE(t,e){return TE(Ne(t.treePath,e),t.writeTree)}function TE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class qO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;F(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),F(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,bo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Oo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Qi(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,bo(r,e.snapshotNode,i.oldSnap));else throw rs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class YO{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const kE=new YO;class mp{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new pr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gp(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ei(this.viewCache_),s=KO(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function QO(t){return{filter:t}}function XO(t,e){F(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),F(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function JO(t,e,n,r,i){const s=new qO;let o,a;if(n.type===Ht.OVERWRITE){const h=n;h.source.fromUser?o=Cd(t,e,h.path,h.snap,r,i,s):(F(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered()&&!q(h.path),o=eu(t,e,h.path,h.snap,r,i,a,s))}else if(n.type===Ht.MERGE){const h=n;h.source.fromUser?o=eb(t,e,h.path,h.children,r,i,s):(F(h.source.fromServer,"Unknown source."),a=h.source.tagged||e.serverCache.isFiltered(),o=Id(t,e,h.path,h.children,r,i,a,s))}else if(n.type===Ht.ACK_USER_WRITE){const h=n;h.revert?o=rb(t,e,h.path,r,i,s):o=tb(t,e,h.path,h.affectedTree,r,i,s)}else if(n.type===Ht.LISTEN_COMPLETE)o=nb(t,e,n.path,r,s);else throw rs("Unknown operation type: "+n.type);const u=s.getChanges();return ZO(e,o,u),{viewCache:o,changes:u}}function ZO(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Xa(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(_E(Xa(e)))}}function RE(t,e,n,r,i,s){const o=e.eventCache;if(Za(r,n)!=null)return e;{let a,u;if(q(n))if(F(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=ei(e),p=h instanceof $?h:$.EMPTY_NODE,f=pp(r,p);a=t.filter.updateFullNode(e.eventCache.getNode(),f,s)}else{const h=Ja(r,ei(e));a=t.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const h=Q(n);if(h===".priority"){F(fr(n)===1,"Can't have a priority with additional path components");const p=o.getNode();u=e.serverCache.getNode();const f=gy(r,n,p,u);f!=null?a=t.filter.updatePriority(p,f):a=o.getNode()}else{const p=oe(n);let f;if(o.isCompleteForChild(h)){u=e.serverCache.getNode();const g=gy(r,n,o.getNode(),u);g!=null?f=o.getNode().getImmediateChild(h).updateChild(p,g):f=o.getNode().getImmediateChild(h)}else f=gp(r,h,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),h,f,p,i,s):a=o.getNode()}}return no(e,a,o.isFullyInitialized()||q(n),t.filter.filtersNodes())}}function eu(t,e,n,r,i,s,o,a){const u=e.serverCache;let h;const p=o?t.filter:t.filter.getIndexedFilter();if(q(n))h=p.updateFullNode(u.getNode(),r,null);else if(p.filtersNodes()&&!u.isFiltered()){const T=u.getNode().updateChild(n,r);h=p.updateFullNode(u.getNode(),T,null)}else{const T=Q(n);if(!u.isCompleteForPath(n)&&fr(n)>1)return e;const k=oe(n),O=u.getNode().getImmediateChild(T).updateChild(k,r);T===".priority"?h=p.updatePriority(u.getNode(),O):h=p.updateChild(u.getNode(),T,O,k,kE,null)}const f=wE(e,h,u.isFullyInitialized()||q(n),p.filtersNodes()),g=new mp(i,f,s);return RE(t,f,n,i,g,a)}function Cd(t,e,n,r,i,s,o){const a=e.eventCache;let u,h;const p=new mp(i,e,s);if(q(n))h=t.filter.updateFullNode(e.eventCache.getNode(),r,o),u=no(e,h,!0,t.filter.filtersNodes());else{const f=Q(n);if(f===".priority")h=t.filter.updatePriority(e.eventCache.getNode(),r),u=no(e,h,a.isFullyInitialized(),a.isFiltered());else{const g=oe(n),T=a.getNode().getImmediateChild(f);let k;if(q(g))k=r;else{const N=p.getCompleteChild(f);N!=null?lE(g)===".priority"&&N.getChild(uE(g)).isEmpty()?k=N:k=N.updateChild(g,r):k=$.EMPTY_NODE}if(T.equals(k))u=e;else{const N=t.filter.updateChild(a.getNode(),f,k,g,p,o);u=no(e,N,a.isFullyInitialized(),t.filter.filtersNodes())}}}return u}function my(t,e){return t.eventCache.isCompleteForChild(e)}function eb(t,e,n,r,i,s,o){let a=e;return r.foreach((u,h)=>{const p=Ne(n,u);my(e,Q(p))&&(a=Cd(t,a,p,h,i,s,o))}),r.foreach((u,h)=>{const p=Ne(n,u);my(e,Q(p))||(a=Cd(t,a,p,h,i,s,o))}),a}function _y(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Id(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,h;q(n)?h=r:h=new ce(null).setTree(n,r);const p=e.serverCache.getNode();return h.children.inorderTraversal((f,g)=>{if(p.hasChild(f)){const T=e.serverCache.getNode().getImmediateChild(f),k=_y(t,T,g);u=eu(t,u,new se(f),k,i,s,o,a)}}),h.children.inorderTraversal((f,g)=>{const T=!e.serverCache.isCompleteForChild(f)&&g.value===null;if(!p.hasChild(f)&&!T){const k=e.serverCache.getNode().getImmediateChild(f),N=_y(t,k,g);u=eu(t,u,new se(f),N,i,s,o,a)}}),u}function tb(t,e,n,r,i,s,o){if(Za(i,n)!=null)return e;const a=e.serverCache.isFiltered(),u=e.serverCache;if(r.value!=null){if(q(n)&&u.isFullyInitialized()||u.isCompleteForPath(n))return eu(t,e,n,u.getNode().getChild(n),i,s,a,o);if(q(n)){let h=new ce(null);return u.getNode().forEachChild(ji,(p,f)=>{h=h.set(new se(p),f)}),Id(t,e,n,h,i,s,a,o)}else return e}else{let h=new ce(null);return r.foreach((p,f)=>{const g=Ne(n,p);u.isCompleteForPath(g)&&(h=h.set(p,u.getNode().getChild(g)))}),Id(t,e,n,h,i,s,a,o)}}function nb(t,e,n,r,i){const s=e.serverCache,o=wE(e,s.getNode(),s.isFullyInitialized()||q(n),s.isFiltered());return RE(t,o,n,r,kE,i)}function rb(t,e,n,r,i,s){let o;if(Za(r,n)!=null)return e;{const a=new mp(r,e,i),u=e.eventCache.getNode();let h;if(q(n)||Q(n)===".priority"){let p;if(e.serverCache.isFullyInitialized())p=Ja(r,ei(e));else{const f=e.serverCache.getNode();F(f instanceof $,"serverChildren would be complete if leaf node"),p=pp(r,f)}p=p,h=t.filter.updateFullNode(u,p,s)}else{const p=Q(n);let f=gp(r,p,e.serverCache);f==null&&e.serverCache.isCompleteForChild(p)&&(f=u.getImmediateChild(p)),f!=null?h=t.filter.updateChild(u,p,f,oe(n),a,s):e.eventCache.getNode().hasChild(p)?h=t.filter.updateChild(u,p,$.EMPTY_NODE,oe(n),a,s):h=u,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ja(r,ei(e)),o.isLeafNode()&&(h=t.filter.updateFullNode(h,o,s)))}return o=e.serverCache.isFullyInitialized()||Za(r,ee())!=null,no(e,h,o,t.filter.filtersNodes())}}/**
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
 */class ib{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new cp(r.getIndex()),s=IO(r);this.processor_=QO(s);const o=n.serverCache,a=n.eventCache,u=i.updateFullNode($.EMPTY_NODE,o.getNode(),null),h=s.updateFullNode($.EMPTY_NODE,a.getNode(),null),p=new pr(u,o.isFullyInitialized(),i.filtersNodes()),f=new pr(h,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Au(f,p),this.eventGenerator_=new PO(this.query_)}get query(){return this.query_}}function sb(t){return t.viewCache_.serverCache.getNode()}function ob(t){return Xa(t.viewCache_)}function lb(t,e){const n=ei(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!q(e)&&!n.getImmediateChild(Q(e)).isEmpty())?n.getChild(e):null}function yy(t){return t.eventRegistrations_.length===0}function ab(t,e){t.eventRegistrations_.push(e)}function vy(t,e,n){const r=[];if(n){F(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function wy(t,e,n,r){e.type===Ht.MERGE&&e.source.queryId!==null&&(F(ei(t.viewCache_),"We should always have a full cache before handling merges"),F(Xa(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=JO(t.processor_,i,e,n,r);return XO(t.processor_,s.viewCache),F(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,xE(t,s.changes,s.viewCache.eventCache.getNode(),null)}function ub(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ye,(s,o)=>{r.push(Qi(s,o))}),n.isFullyInitialized()&&r.push(_E(n.getNode())),xE(t,r,n.getNode(),e)}function xE(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return AO(t.eventGenerator_,e,n,i)}/**
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
 */let tu;class NE{constructor(){this.views=new Map}}function cb(t){F(!tu,"__referenceConstructor has already been defined"),tu=t}function hb(){return F(tu,"Reference.ts has not been loaded"),tu}function db(t){return t.views.size===0}function _p(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return F(s!=null,"SyncTree gave us an op for an invalid query."),wy(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(wy(o,e,n,r));return s}}function PE(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ja(n,i?r:null),u=!1;a?u=!0:r instanceof $?(a=pp(n,r),u=!1):(a=$.EMPTY_NODE,u=!1);const h=Au(new pr(a,u,!1),new pr(r,i,!1));return new ib(e,h)}return o}function fb(t,e,n,r,i,s){const o=PE(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),ab(o,n),ub(o,n)}function pb(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=gr(t);if(i==="default")for(const[u,h]of t.views.entries())o=o.concat(vy(h,n,r)),yy(h)&&(t.views.delete(u),h.query._queryParams.loadsAllData()||s.push(h.query));else{const u=t.views.get(i);u&&(o=o.concat(vy(u,n,r)),yy(u)&&(t.views.delete(i),u.query._queryParams.loadsAllData()||s.push(u.query)))}return a&&!gr(t)&&s.push(new(hb())(e._repo,e._path)),{removed:s,events:o}}function AE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function cr(t,e){let n=null;for(const r of t.views.values())n=n||lb(r,e);return n}function OE(t,e){if(e._queryParams.loadsAllData())return bu(t);{const r=e._queryIdentifier;return t.views.get(r)}}function bE(t,e){return OE(t,e)!=null}function gr(t){return bu(t)!=null}function bu(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let nu;function gb(t){F(!nu,"__referenceConstructor has already been defined"),nu=t}function mb(){return F(nu,"Reference.ts has not been loaded"),nu}let _b=1;class Ey{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ce(null),this.pendingWriteTree_=GO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function DE(t,e,n,r,i){return LO(t.pendingWriteTree_,e,n,r,i),i?nl(t,new Zr(vE(),e,n)):[]}function Ur(t,e,n=!1){const r=MO(t.pendingWriteTree_,e);if(UO(t.pendingWriteTree_,e)){let s=new ce(null);return r.snap!=null?s=s.set(ee(),!0):_t(r.children,o=>{s=s.set(new se(o),!0)}),nl(t,new Qa(r.path,s,n))}else return[]}function tl(t,e,n){return nl(t,new Zr(dp(),e,n))}function yb(t,e,n){const r=ce.fromObject(n);return nl(t,new Mo(dp(),e,r))}function vb(t,e){return nl(t,new Lo(dp(),e))}function wb(t,e,n){const r=vp(t,n);if(r){const i=wp(r),s=i.path,o=i.queryId,a=st(s,e),u=new Lo(fp(o),a);return Ep(t,s,u)}else return[]}function LE(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||bE(o,e))){const u=pb(o,e,n,r);db(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const h=u.removed;if(a=u.events,!i){const p=h.findIndex(g=>g._queryParams.loadsAllData())!==-1,f=t.syncPointTree_.findOnPath(s,(g,T)=>gr(T));if(p&&!f){const g=t.syncPointTree_.subtree(s);if(!g.isEmpty()){const T=Sb(g);for(let k=0;k<T.length;++k){const N=T[k],O=N.query,v=jE(t,N);t.listenProvider_.startListening(io(O),Uo(t,O),v.hashFn,v.onComplete)}}}!f&&h.length>0&&!r&&(p?t.listenProvider_.stopListening(io(e),null):h.forEach(g=>{const T=t.queryToTagMap.get(Du(g));t.listenProvider_.stopListening(io(g),T)}))}Tb(t,h)}return a}function ME(t,e,n,r){const i=vp(t,r);if(i!=null){const s=wp(i),o=s.path,a=s.queryId,u=st(o,e),h=new Zr(fp(a),u,n);return Ep(t,o,h)}else return[]}function Eb(t,e,n,r){const i=vp(t,r);if(i){const s=wp(i),o=s.path,a=s.queryId,u=st(o,e),h=ce.fromObject(n),p=new Mo(fp(a),u,h);return Ep(t,o,p)}else return[]}function Cb(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(g,T)=>{const k=st(g,i);s=s||cr(T,k),o=o||gr(T)});let a=t.syncPointTree_.get(i);a?(o=o||gr(a),s=s||cr(a,ee())):(a=new NE,t.syncPointTree_=t.syncPointTree_.set(i,a));let u;s!=null?u=!0:(u=!1,s=$.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((T,k)=>{const N=cr(k,ee());N&&(s=s.updateImmediateChild(T,N))}));const h=bE(a,e);if(!h&&!e._queryParams.loadsAllData()){const g=Du(e);F(!t.queryToTagMap.has(g),"View does not exist, but we have a tag");const T=kb();t.queryToTagMap.set(g,T),t.tagToQueryMap.set(T,g)}const p=Ou(t.pendingWriteTree_,i);let f=fb(a,e,n,p,s,u);if(!h&&!o&&!r){const g=OE(a,e);f=f.concat(Rb(t,e,g))}return f}function yp(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const u=st(o,e),h=cr(a,u);if(h)return h});return IE(i,e,s,n,!0)}function Ib(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(h,p)=>{const f=st(h,n);r=r||cr(p,f)});let i=t.syncPointTree_.get(n);i?r=r||cr(i,ee()):(i=new NE,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new pr(r,!0,!1):null,a=Ou(t.pendingWriteTree_,e._path),u=PE(i,e,a,s?o.getNode():$.EMPTY_NODE,s);return ob(u)}function nl(t,e){return UE(e,t.syncPointTree_,null,Ou(t.pendingWriteTree_,ee()))}function UE(t,e,n,r){if(q(t.path))return FE(t,e,n,r);{const i=e.get(ee());n==null&&i!=null&&(n=cr(i,ee()));let s=[];const o=Q(t.path),a=t.operationForChild(o),u=e.children.get(o);if(u&&a){const h=n?n.getImmediateChild(o):null,p=SE(r,o);s=s.concat(UE(a,u,h,p))}return i&&(s=s.concat(_p(i,t,r,n))),s}}function FE(t,e,n,r){const i=e.get(ee());n==null&&i!=null&&(n=cr(i,ee()));let s=[];return e.children.inorderTraversal((o,a)=>{const u=n?n.getImmediateChild(o):null,h=SE(r,o),p=t.operationForChild(o);p&&(s=s.concat(FE(p,a,u,h)))}),i&&(s=s.concat(_p(i,t,r,n))),s}function jE(t,e){const n=e.query,r=Uo(t,n);return{hashFn:()=>(sb(e)||$.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?wb(t,n._path,r):vb(t,n._path);{const s=C4(i,n);return LE(t,n,null,s)}}}}function Uo(t,e){const n=Du(e);return t.queryToTagMap.get(n)}function Du(t){return t._path.toString()+"$"+t._queryIdentifier}function vp(t,e){return t.tagToQueryMap.get(e)}function wp(t){const e=t.indexOf("$");return F(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new se(t.substr(0,e))}}function Ep(t,e,n){const r=t.syncPointTree_.get(e);F(r,"Missing sync point for query tag that we're tracking");const i=Ou(t.pendingWriteTree_,e);return _p(r,n,i,null)}function Sb(t){return t.fold((e,n,r)=>{if(n&&gr(n))return[bu(n)];{let i=[];return n&&(i=AE(n)),_t(r,(s,o)=>{i=i.concat(o)}),i}})}function io(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(mb())(t._repo,t._path):t}function Tb(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Du(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function kb(){return _b++}function Rb(t,e,n){const r=e._path,i=Uo(t,e),s=jE(t,n),o=t.listenProvider_.startListening(io(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)F(!gr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const u=a.fold((h,p,f)=>{if(!q(h)&&p&&gr(p))return[bu(p).query];{let g=[];return p&&(g=g.concat(AE(p).map(T=>T.query))),_t(f,(T,k)=>{g=g.concat(k)}),g}});for(let h=0;h<u.length;++h){const p=u[h];t.listenProvider_.stopListening(io(p),Uo(t,p))}}return o}/**
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
 */class Cp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Cp(n)}node(){return this.node_}}class Ip{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ne(this.path_,e);return new Ip(this.syncTree_,n)}node(){return yp(this.syncTree_,this.path_)}}const xb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Cy=function(t,e,n){if(!t||typeof t!="object")return t;if(F(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Nb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Pb(t[".sv"],e);F(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Nb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:F(!1,"Unexpected server value: "+t)}},Pb=function(t,e,n){t.hasOwnProperty("increment")||F(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&F(!1,"Unexpected increment value: "+r);const i=e.node();if(F(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Ab=function(t,e,n,r){return Sp(e,new Ip(n,t),r)},BE=function(t,e,n){return Sp(t,new Cp(e),n)};function Sp(t,e,n){const r=t.getPriority().val(),i=Cy(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Cy(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ae(a,De(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ae(i))),o.forEachChild(ye,(a,u)=>{const h=Sp(u,e.getImmediateChild(a),n);h!==u&&(s=s.updateImmediateChild(a,h))}),s}}/**
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
 */class Tp{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function kp(t,e){let n=e instanceof se?e:new se(e),r=t,i=Q(n);for(;i!==null;){const s=Ki(r.node.children,i)||{children:{},childCount:0};r=new Tp(i,r,s),n=oe(n),i=Q(n)}return r}function as(t){return t.node.value}function zE(t,e){t.node.value=e,Sd(t)}function VE(t){return t.node.childCount>0}function Ob(t){return as(t)===void 0&&!VE(t)}function Lu(t,e){_t(t.node.children,(n,r)=>{e(new Tp(n,t,r))})}function $E(t,e,n,r){n&&!r&&e(t),Lu(t,i=>{$E(i,e,!0,r)}),n&&r&&e(t)}function bb(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function rl(t){return new se(t.parent===null?t.name:rl(t.parent)+"/"+t.name)}function Sd(t){t.parent!==null&&Db(t.parent,t.name,t)}function Db(t,e,n){const r=Ob(n),i=On(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Sd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Sd(t))}/**
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
 */const Lb=/[\[\].#$\/\u0000-\u001F\u007F]/,Mb=/[\[\].#$\u0000-\u001F\u007F]/,rh=10*1024*1024,HE=function(t){return typeof t=="string"&&t.length!==0&&!Lb.test(t)},WE=function(t){return typeof t=="string"&&t.length!==0&&!Mb.test(t)},Ub=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),WE(t)},Fb=function(t,e,n,r){Rp(Nf(t,"value"),e,n)},Rp=function(t,e,n){const r=n instanceof se?new tO(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Ar(r));if(typeof e=="function")throw new Error(t+"contains a function "+Ar(r)+" with contents = "+e.toString());if(B1(e))throw new Error(t+"contains "+e.toString()+" "+Ar(r));if(typeof e=="string"&&e.length>rh/3&&Cu(e)>rh)throw new Error(t+"contains a string greater than "+rh+" utf8 bytes "+Ar(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(_t(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!HE(o)))throw new Error(t+" contains an invalid key ("+o+") "+Ar(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);nO(r,o),Rp(t,a,r),rO(r)}),i&&s)throw new Error(t+' contains ".value" child '+Ar(r)+" in addition to actual children.")}},GE=function(t,e,n,r){if(!WE(n))throw new Error(Nf(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jb=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),GE(t,e,n)},Bb=function(t,e){if(Q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},zb=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!HE(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Ub(n))throw new Error(Nf(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Vb{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function KE(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!cE(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function on(t,e,n){KE(t,n),$b(t,r=>$t(r,e)||$t(e,r))}function $b(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(Hb(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Hb(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();eo&&qe("event: "+n.toString()),ls(r)}}}/**
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
 */const Wb="repo_interrupt",Gb=25;class Kb{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Vb,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ya(),this.transactionQueueTree_=new Tp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qb(t,e,n){if(t.stats_=op(t.repoInfo_),t.forceRestClient_||k4())t.server_=new qa(t.repoInfo_,(r,i,s,o)=>{Iy(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Sy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{xe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Sn(t.repoInfo_,e,(r,i,s,o)=>{Iy(t,r,i,s,o)},r=>{Sy(t,r)},r=>{Qb(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=A4(t.repoInfo_,()=>new NO(t.stats_,t.server_)),t.infoData_=new SO,t.infoSyncTree_=new Ey({startListening:(r,i,s,o)=>{let a=[];const u=t.infoData_.getNode(r._path);return u.isEmpty()||(a=tl(t.infoSyncTree_,r._path,u),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Np(t,"connected",!1),t.serverSyncTree_=new Ey({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,u)=>{const h=o(a,u);on(t.eventQueue_,r._path,h)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function Yb(t){const n=t.infoData_.getNode(new se(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xp(t){return xb({timestamp:Yb(t)})}function Iy(t,e,n,r,i){t.dataUpdateCount++;const s=new se(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const u=La(n,h=>De(h));o=Eb(t.serverSyncTree_,s,u,i)}else{const u=De(n);o=ME(t.serverSyncTree_,s,u,i)}else if(r){const u=La(n,h=>De(h));o=yb(t.serverSyncTree_,s,u)}else{const u=De(n);o=tl(t.serverSyncTree_,s,u)}let a=s;o.length>0&&(a=Uu(t,s)),on(t.eventQueue_,a,o)}function Sy(t,e){Np(t,"connected",e),e===!1&&Zb(t)}function Qb(t,e){_t(e,(n,r)=>{Np(t,n,r)})}function Np(t,e,n){const r=new se("/.info/"+e),i=De(n);t.infoData_.updateSnapshot(r,i);const s=tl(t.infoSyncTree_,r,i);on(t.eventQueue_,r,s)}function qE(t){return t.nextWriteId_++}function Xb(t,e,n){const r=Ib(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=De(i).withIndex(e._queryParams.getIndex());Cb(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=tl(t.serverSyncTree_,e._path,s);else{const a=Uo(t.serverSyncTree_,e);o=ME(t.serverSyncTree_,e._path,s,a)}return on(t.eventQueue_,e._path,o),LE(t.serverSyncTree_,e,n,null,!0),s},i=>(Mu(t,"get for query "+xe(e)+" failed: "+i),Promise.reject(new Error(i))))}function Jb(t,e,n,r,i){Mu(t,"set",{path:e.toString(),value:n,priority:r});const s=xp(t),o=De(n,r),a=yp(t.serverSyncTree_,e),u=BE(o,a,s),h=qE(t),p=DE(t.serverSyncTree_,e,u,h,!0);KE(t.eventQueue_,p),t.server_.put(e.toString(),o.val(!0),(g,T)=>{const k=g==="ok";k||mt("set at "+e+" failed: "+g);const N=Ur(t.serverSyncTree_,h,!k);on(t.eventQueue_,e,N),tD(t,i,g,T)});const f=ZE(t,e);Uu(t,f),on(t.eventQueue_,f,[])}function Zb(t){Mu(t,"onDisconnectEvents");const e=xp(t),n=Ya();vd(t.onDisconnect_,ee(),(i,s)=>{const o=Ab(i,s,t.serverSyncTree_,e);yE(n,i,o)});let r=[];vd(n,ee(),(i,s)=>{r=r.concat(tl(t.serverSyncTree_,i,s));const o=ZE(t,i);Uu(t,o)}),t.onDisconnect_=Ya(),on(t.eventQueue_,ee(),r)}function eD(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Wb)}function Mu(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),qe(n,...e)}function tD(t,e,n,r){e&&ls(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function YE(t,e,n){return yp(t.serverSyncTree_,e,n)||$.EMPTY_NODE}function Pp(t,e=t.transactionQueueTree_){if(e||Fu(t,e),as(e)){const n=XE(t,e);F(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&nD(t,rl(e),n)}else VE(e)&&Lu(e,n=>{Pp(t,n)})}function nD(t,e,n){const r=n.map(h=>h.currentWriteId),i=YE(t,e,r);let s=i;const o=i.hash();for(let h=0;h<n.length;h++){const p=n[h];F(p.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),p.status=1,p.retryCount++;const f=st(e,p.path);s=s.updateChild(f,p.currentOutputSnapshotRaw)}const a=s.val(!0),u=e;t.server_.put(u.toString(),a,h=>{Mu(t,"transaction put response",{path:u.toString(),status:h});let p=[];if(h==="ok"){const f=[];for(let g=0;g<n.length;g++)n[g].status=2,p=p.concat(Ur(t.serverSyncTree_,n[g].currentWriteId)),n[g].onComplete&&f.push(()=>n[g].onComplete(null,!0,n[g].currentOutputSnapshotResolved)),n[g].unwatcher();Fu(t,kp(t.transactionQueueTree_,e)),Pp(t,t.transactionQueueTree_),on(t.eventQueue_,e,p);for(let g=0;g<f.length;g++)ls(f[g])}else{if(h==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{mt("transaction at "+u.toString()+" failed: "+h);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=h}Uu(t,e)}},o)}function Uu(t,e){const n=QE(t,e),r=rl(n),i=XE(t,n);return rD(t,i,r),r}function rD(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const u=e[a],h=st(n,u.path);let p=!1,f;if(F(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)p=!0,f=u.abortReason,i=i.concat(Ur(t.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=Gb)p=!0,f="maxretry",i=i.concat(Ur(t.serverSyncTree_,u.currentWriteId,!0));else{const g=YE(t,u.path,o);u.currentInputSnapshot=g;const T=e[a].update(g.val());if(T!==void 0){Rp("transaction failed: Data returned ",T,u.path);let k=De(T);typeof T=="object"&&T!=null&&On(T,".priority")||(k=k.updatePriority(g.getPriority()));const O=u.currentWriteId,v=xp(t),y=BE(k,g,v);u.currentOutputSnapshotRaw=k,u.currentOutputSnapshotResolved=y,u.currentWriteId=qE(t),o.splice(o.indexOf(O),1),i=i.concat(DE(t.serverSyncTree_,u.path,y,u.currentWriteId,u.applyLocally)),i=i.concat(Ur(t.serverSyncTree_,O,!0))}else p=!0,f="nodata",i=i.concat(Ur(t.serverSyncTree_,u.currentWriteId,!0))}on(t.eventQueue_,n,i),i=[],p&&(e[a].status=2,function(g){setTimeout(g,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(f),!1,null))))}Fu(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ls(r[a]);Pp(t,t.transactionQueueTree_)}function QE(t,e){let n,r=t.transactionQueueTree_;for(n=Q(e);n!==null&&as(r)===void 0;)r=kp(r,n),e=oe(e),n=Q(e);return r}function XE(t,e){const n=[];return JE(t,e,n),n.sort((r,i)=>r.order-i.order),n}function JE(t,e,n){const r=as(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Lu(e,i=>{JE(t,i,n)})}function Fu(t,e){const n=as(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,zE(e,n.length>0?n:void 0)}Lu(e,r=>{Fu(t,r)})}function ZE(t,e){const n=rl(QE(t,e)),r=kp(t.transactionQueueTree_,e);return bb(r,i=>{ih(t,i)}),ih(t,r),$E(r,i=>{ih(t,i)}),n}function ih(t,e){const n=as(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(F(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(F(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Ur(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?zE(e,void 0):n.length=s+1,on(t.eventQueue_,rl(e),i);for(let o=0;o<r.length;o++)ls(r[o])}}/**
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
 */function iD(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function sD(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):mt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Ty=function(t,e){const n=oD(t),r=n.namespace;n.domain==="firebase.com"&&Pn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Pn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||_4();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new J1(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new se(n.pathString)}},oD=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",u=443;if(typeof t=="string"){let h=t.indexOf("//");h>=0&&(a=t.substring(0,h-1),t=t.substring(h+2));let p=t.indexOf("/");p===-1&&(p=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(p,f)),p<f&&(i=iD(t.substring(p,f)));const g=sD(t.substring(Math.min(t.length,f)));h=e.indexOf(":"),h>=0?(o=a==="https"||a==="wss",u=parseInt(e.substring(h+1),10)):h=e.length;const T=e.slice(0,h);if(T.toLowerCase()==="localhost")n="localhost";else if(T.split(".").length<=2)n=T;else{const k=e.indexOf(".");r=e.substring(0,k).toLowerCase(),n=e.substring(k+1),s=r}"ns"in g&&(s=g.ns)}return{host:e,port:u,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class lD{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+xe(this.snapshot.exportVal())}}class aD{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class uD{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return F(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Ap{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return q(this._path)?null:lE(this._path)}get ref(){return new Dn(this._repo,this._path)}get _queryIdentifier(){const e=cy(this._queryParams),n=ip(e);return n==="{}"?"default":n}get _queryObject(){return cy(this._queryParams)}isEqual(e){if(e=Se(e),!(e instanceof Ap))return!1;const n=this._repo===e._repo,r=cE(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+eO(this._path)}}class Dn extends Ap{constructor(e,n){super(e,n,new hp,!1)}get parent(){const e=uE(this._path);return e===null?null:new Dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Fo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new se(e),r=Td(this.ref,e);return new Fo(this._node.getChild(n),r,ye)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Fo(i,Td(this.ref,r),ye)))}hasChild(e){const n=new se(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function eC(t,e){return t=Se(t),t._checkNotDeleted("ref"),e!==void 0?Td(t._root,e):t._root}function Td(t,e){return t=Se(t),Q(t._path)===null?jb("child","path",e):GE("child","path",e),new Dn(t._repo,Ne(t._path,e))}function cD(t,e){t=Se(t),Bb("set",t._path),Fb("set",e,t._path);const n=new Eu;return Jb(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function tC(t){t=Se(t);const e=new uD(()=>{}),n=new Op(e);return Xb(t._repo,t,n).then(r=>new Fo(r,new Dn(t._repo,t._path),t._queryParams.getIndex()))}class Op{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new lD("value",this,new Fo(e.snapshotNode,new Dn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new aD(this,e,n):null}matches(e){return e instanceof Op?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}cb(Dn);gb(Dn);/**
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
 */const hD="FIREBASE_DATABASE_EMULATOR_HOST",kd={};let dD=!1;function fD(t,e,n,r){t.repoInfo_=new J1(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function pD(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Pn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),qe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Ty(s,i),a=o.repoInfo,u;typeof process<"u"&&G_&&(u=G_[hD]),u?(s=`http://${u}?ns=${a.namespace}`,o=Ty(s,i),a=o.repoInfo):o.repoInfo.secure;const h=new x4(t.name,t.options,e);zb("Invalid Firebase Database URL",o),q(o.path)||Pn("Database URL must point to the root of a Firebase Database (not including a child path).");const p=mD(a,t,h,new R4(t.name,n));return new _D(p,t)}function gD(t,e){const n=kd[e];(!n||n[t.key]!==t)&&Pn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),eD(t),delete n[t.key]}function mD(t,e,n,r){let i=kd[e.name];i||(i={},kd[e.name]=i);let s=i[t.toURLString()];return s&&Pn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Kb(t,dD,n,r),i[t.toURLString()]=s,s}class _D{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qb(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Dn(this._repo,ee())),this._rootInternal}_delete(){return this._rootInternal!==null&&(gD(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Pn("Cannot call "+e+" on a deleted database.")}}function yD(t=Go(),e){const n=bn(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=kf("database");r&&vD(n,...r)}return n}function vD(t,e,n,r={}){t=Se(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Pn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Pn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new oa(oa.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Rf(r.mockUserToken,t.app.options.projectId);s=new oa(o)}fD(i,e,n,s)}/**
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
 */function wD(t){h4(wr),Lt(new St("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return pD(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Xe(K_,q_,t),Xe(K_,q_,"esm2017")}Sn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Sn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};wD();const ED={apiKey:"AIzaSyAtF4tc8kgpsYcjMpxNGqYKvajEM2p5zGY",authDomain:"photo-76f2d.firebaseapp.com",databaseURL:"https://photo-76f2d-default-rtdb.firebaseio.com",projectId:"photo-76f2d",storageBucket:"photo-76f2d.appspot.com",messagingSenderId:"626495407921",appId:"1:626495407921:web:8f384954e06a350baad210",measurementId:"G-DHXBSJ7DGZ"},il=gw(ED);l4(il);const so=tN(il);TN(il);const ky=VP(il),bp=yD(il);var Ue=[];for(var sh=0;sh<256;++sh)Ue.push((sh+256).toString(16).slice(1));function CD(t,e=0){return(Ue[t[e+0]]+Ue[t[e+1]]+Ue[t[e+2]]+Ue[t[e+3]]+"-"+Ue[t[e+4]]+Ue[t[e+5]]+"-"+Ue[t[e+6]]+Ue[t[e+7]]+"-"+Ue[t[e+8]]+Ue[t[e+9]]+"-"+Ue[t[e+10]]+Ue[t[e+11]]+Ue[t[e+12]]+Ue[t[e+13]]+Ue[t[e+14]]+Ue[t[e+15]]).toLowerCase()}var $l,ID=new Uint8Array(16);function SD(){if(!$l&&($l=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!$l))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return $l(ID)}var TD=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Ry={randomUUID:TD};function nC(t,e,n){if(Ry.randomUUID&&!e&&!t)return Ry.randomUUID();t=t||{};var r=t.random||(t.rng||SD)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,CD(r)}const rC=M.createContext(),kD=({children:t})=>{const[e,n]=M.useState(null),[r,i]=M.useState(!0),[s,o]=M.useState([]),[a,u]=M.useState([]),h=ns();M.useEffect(()=>{const O=so.onAuthStateChanged(v=>{n(v),i(!1)});return()=>O()},[h]);const N={currentUser:e,userLogin:async O=>{try{const v=await B2(so,O.email,O.password);n(v.user)}catch(v){console.error("Error signing in:",v.message)}},uploadImage:async O=>{i(!0);try{const v=qc(ky,`files/${nC()}`);await BP(v,O);const y=await U_(v);return o(I=>[...I,y]),y}catch(v){throw console.error("Error uploading image:",v.message),v}finally{i(!1)}},imageList:s,fetchImages:async()=>{try{const O=qc(ky,"files"),v=await zP(O),y=await Promise.all(v.items.map(I=>U_(I)));o(y)}catch(O){console.error("Error fetching images:",O.message)}},fetchData:async()=>{try{const O=qc(bp,"users"),v=await tC(O);if(v.exists()){const y=Object.entries(v.val()).map(([I,D])=>({id:I,...D}));u(y)}else console.log("No data available")}catch(O){console.error("Error fetching data:",O.message)}},dataList:a,userCreate:async O=>{try{const v=await j2(so,O.email,O.password);n(v.user),h("/login")}catch(v){console.error("Error signing in:",v.message)}}};return A.jsx(rC.Provider,{value:N,children:r?A.jsx("p",{children:"Loading..."}):t})},ju=()=>M.useContext(rC),iC="/assets/donut-DjY1SzKH.png";function RD(){const t=ns(),{currentUser:e}=ju(),[n,r]=M.useState(!1),i=()=>{console.log("Navigating to login page"),t("/login")},s=async()=>{try{await $2(so),console.log("User signed out")}catch(a){console.error("Error signing out:",a)}},o=()=>{r(!n)};return A.jsxs("div",{className:"relative w-full bg-white",children:[A.jsxs("div",{className:"mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8",children:[A.jsx(J0,{to:"/",children:A.jsxs("div",{className:"inline-flex items-center space-x-2",children:[A.jsx("span",{children:A.jsx("img",{src:iC,alt:"logo",className:"h-8 w-8"})}),A.jsx("span",{className:"font-bold",children:"DeliciousBook"})]})}),A.jsx("div",{className:"hidden grow items-start lg:flex",children:A.jsxs("ul",{className:"ml-12 inline-flex space-x-8",children:[A.jsx("li",{children:A.jsxs("a",{href:"/",className:"inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900",children:["Home",A.jsx("span",{})]})}),A.jsx("li",{children:A.jsxs("a",{href:"/upload",className:"inline-flex items-center text-sm font-semibold text-gray-800 hover:text-gray-900",children:["Upload Recipe",A.jsx("span",{})]})})]})}),A.jsx("div",{className:"hidden space-x-2 lg:block",children:e?A.jsx("button",{onClick:s,type:"button",className:"rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Log Out"}):A.jsx("button",{onClick:i,type:"button",className:"rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-black hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black",children:"Log In"})}),A.jsx("div",{className:"lg:hidden",children:A.jsx("button",{onClick:o,children:A.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"h-6 w-6 text-black",children:A.jsx("path",{d:"M4 6h16M4 12h16m-7 6h7"})})})})]}),n&&A.jsx("div",{className:"lg:hidden bg-white border-t border-gray-200",children:A.jsxs("ul",{className:"px-4 py-2",children:[A.jsx("li",{children:A.jsx("a",{href:"/",className:"block py-2 text-sm font-semibold text-gray-800 hover:text-gray-900",children:"Home"})}),A.jsx("li",{children:A.jsx("a",{href:"/upload",className:"block py-2 text-sm font-semibold text-gray-800 hover:text-gray-900",children:"Upload Recipe"})}),A.jsx("li",{children:e?A.jsx("button",{onClick:s,type:"button",className:"block w-full text-left py-2 text-sm font-semibold text-black hover:bg-black/10",children:"Log Out"}):A.jsx("button",{onClick:i,type:"button",className:"block w-full text-left py-2 text-sm font-semibold text-black hover:bg-black/10",children:"Log In"})})]})})]})}function xD(){return A.jsx("section",{class:"relative overflow-hidden bg-white py-8",children:A.jsx("div",{class:"container relative z-10 mx-auto px-4",children:A.jsxs("div",{class:"-m-8 flex flex-wrap items-center justify-between",children:[A.jsx(J0,{to:"/",children:A.jsxs("div",{className:"inline-flex items-center space-x-2",children:[A.jsx("span",{children:A.jsx("img",{src:iC,alt:"logo",className:"h-8 w-8"})}),A.jsx("span",{className:"font-bold",children:"DeliciousBook"})]})}),A.jsx("div",{class:"w-auto p-8",children:A.jsxs("ul",{class:"-m-5 flex flex-wrap items-center",children:[A.jsx("li",{class:"p-5",children:A.jsx("a",{class:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Privacy Policy"})}),A.jsx("li",{class:"p-5",children:A.jsx("a",{class:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Terms of Service"})}),A.jsx("li",{class:"p-5",children:A.jsx("a",{class:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Return Policy"})}),A.jsx("li",{class:"p-5",children:A.jsx("a",{class:"font-medium text-gray-600 hover:text-gray-700",href:"#",children:"Contact Us"})})]})}),A.jsx("div",{class:"w-auto p-8",children:A.jsxs("div",{class:"-m-1.5 flex flex-wrap",children:[A.jsx("div",{class:"w-auto p-1.5",children:A.jsx("a",{href:"#",children:A.jsx("div",{class:"flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400",children:A.jsx("svg",{width:"8",height:"14",viewBox:"0 0 8 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:A.jsx("path",{d:"M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z",fill:"#27272A"})})})})}),A.jsx("div",{class:"w-auto p-1.5",children:A.jsx("a",{href:"#",children:A.jsx("div",{class:"flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400",children:A.jsx("svg",{width:"14",height:"11",viewBox:"0 0 14 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:A.jsx("path",{d:"M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z",fill:"#27272A"})})})})}),A.jsx("div",{class:"w-auto p-1.5",children:A.jsx("a",{href:"#",children:A.jsx("div",{class:"flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400",children:A.jsx("svg",{width:"16",height:"15",viewBox:"0 0 16 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:A.jsx("path",{d:"M8.00094 0.360001C6.09046 0.360001 5.85022 0.368801 5.09958 0.402241C4.34894 0.437441 3.83766 0.555361 3.38974 0.729601C2.9199 0.906321 2.49433 1.18353 2.14278 1.54184C1.78468 1.89357 1.50751 2.31909 1.33054 2.7888C1.1563 3.23584 1.0375 3.748 1.00318 4.496C0.969738 5.2484 0.960937 5.48776 0.960937 7.40088C0.960937 9.31224 0.969738 9.5516 1.00318 10.3022C1.03838 11.052 1.1563 11.5633 1.33054 12.0112C1.51094 12.4741 1.75118 12.8666 2.14278 13.2582C2.5335 13.6498 2.92598 13.8909 3.38886 14.0704C3.83766 14.2446 4.34806 14.3634 5.09782 14.3978C5.84934 14.4312 6.0887 14.44 8.00094 14.44C9.91318 14.44 10.1517 14.4312 10.9032 14.3978C11.6521 14.3626 12.1651 14.2446 12.613 14.0704C13.0826 13.8936 13.5078 13.6164 13.8591 13.2582C14.2507 12.8666 14.4909 12.4741 14.6713 12.0112C14.8447 11.5633 14.9635 11.052 14.9987 10.3022C15.0321 9.5516 15.0409 9.31224 15.0409 7.4C15.0409 5.48776 15.0321 5.2484 14.9987 4.49688C14.9635 3.748 14.8447 3.23584 14.6713 2.7888C14.4944 2.31908 14.2172 1.89356 13.8591 1.54184C13.5077 1.1834 13.0821 0.906169 12.6121 0.729601C12.1633 0.555361 11.6512 0.436561 10.9023 0.402241C10.1508 0.368801 9.9123 0.360001 7.99918 0.360001H8.00182H8.00094ZM7.36998 1.62896H8.00182C9.8815 1.62896 10.1041 1.63512 10.846 1.66944C11.5324 1.70024 11.9055 1.81552 12.1537 1.91144C12.4819 2.03904 12.7169 2.19216 12.9633 2.43856C13.2097 2.68496 13.3619 2.91904 13.4895 3.24816C13.5863 3.49544 13.7007 3.86856 13.7315 4.55496C13.7658 5.2968 13.7729 5.51944 13.7729 7.39824C13.7729 9.27704 13.7658 9.50056 13.7315 10.2424C13.7007 10.9288 13.5854 11.301 13.4895 11.5492C13.3766 11.8549 13.1965 12.1313 12.9624 12.3579C12.716 12.6043 12.4819 12.7566 12.1528 12.8842C11.9064 12.981 11.5333 13.0954 10.846 13.127C10.1041 13.1605 9.8815 13.1684 8.00182 13.1684C6.12214 13.1684 5.89862 13.1605 5.15678 13.127C4.47038 13.0954 4.09814 12.981 3.84998 12.8842C3.54418 12.7715 3.26753 12.5916 3.04038 12.3579C2.80608 12.1309 2.62565 11.8543 2.51238 11.5483C2.41646 11.301 2.30118 10.9279 2.27038 10.2415C2.23694 9.49968 2.2299 9.27704 2.2299 7.39648C2.2299 5.5168 2.23694 5.29504 2.27038 4.5532C2.30206 3.8668 2.41646 3.49368 2.51326 3.24552C2.64086 2.91728 2.79398 2.68232 3.04038 2.43592C3.28678 2.18952 3.52086 2.03728 3.84998 1.90968C4.09814 1.81288 4.47038 1.69848 5.15678 1.6668C5.80622 1.63688 6.0579 1.62808 7.36998 1.6272V1.62896ZM11.7594 2.7976C11.6485 2.7976 11.5386 2.81945 11.4361 2.86191C11.3336 2.90436 11.2405 2.96659 11.1621 3.04504C11.0836 3.12348 11.0214 3.21661 10.9789 3.31911C10.9365 3.42161 10.9146 3.53146 10.9146 3.6424C10.9146 3.75334 10.9365 3.8632 10.9789 3.96569C11.0214 4.06819 11.0836 4.16132 11.1621 4.23976C11.2405 4.31821 11.3336 4.38044 11.4361 4.42289C11.5386 4.46535 11.6485 4.4872 11.7594 4.4872C11.9835 4.4872 12.1984 4.3982 12.3568 4.23976C12.5152 4.08133 12.6042 3.86646 12.6042 3.6424C12.6042 3.41835 12.5152 3.20347 12.3568 3.04504C12.1984 2.88661 11.9835 2.7976 11.7594 2.7976ZM8.00182 3.78496C7.52228 3.77748 7.04604 3.86547 6.60084 4.0438C6.15563 4.22214 5.75035 4.48726 5.40859 4.82373C5.06683 5.1602 4.79542 5.5613 4.61016 6.00367C4.4249 6.44604 4.32949 6.92084 4.32949 7.40044C4.32949 7.88004 4.4249 8.35484 4.61016 8.79721C4.79542 9.23958 5.06683 9.64068 5.40859 9.97715C5.75035 10.3136 6.15563 10.5787 6.60084 10.7571C7.04604 10.9354 7.52228 11.0234 8.00182 11.0159C8.95093 11.0011 9.85616 10.6137 10.5221 9.93726C11.1881 9.26084 11.5613 8.34967 11.5613 7.40044C11.5613 6.45121 11.1881 5.54004 10.5221 4.86362C9.85616 4.1872 8.95093 3.79977 8.00182 3.78496ZM8.00182 5.05304C8.62427 5.05304 9.22123 5.30031 9.66137 5.74045C10.1015 6.18059 10.3488 6.77755 10.3488 7.4C10.3488 8.02245 10.1015 8.61941 9.66137 9.05955C9.22123 9.49969 8.62427 9.74696 8.00182 9.74696C7.37937 9.74696 6.78241 9.49969 6.34227 9.05955C5.90213 8.61941 5.65486 8.02245 5.65486 7.4C5.65486 6.77755 5.90213 6.18059 6.34227 5.74045C6.78241 5.30031 7.37937 5.05304 8.00182 5.05304Z",fill:"#27272A"})})})})})]})})]})})})}function ND(){return A.jsxs(A.Fragment,{children:[A.jsx(RD,{}),A.jsx(tk,{}),A.jsx(xD,{})]})}function PD(){const[t,e]=M.useState([]),[n,r]=M.useState([]),[i,s]=M.useState({});M.useEffect(()=>{const u=eC(bp,"users");tC(u).then(h=>{if(h.exists()){const p=Object.entries(h.val()).map(([f,g])=>({...g,id:f}));e(p),r(p)}else console.log("No data available")}).catch(h=>{console.error("Error fetching data:",h)})},[]);const o=u=>{const h=u.target.value.toLowerCase();r(t.filter(p=>p.category.toLowerCase().includes(h)||p.title.toLowerCase().includes(h)))},a=u=>{s(h=>({...h,[u]:!h[u]}))};return A.jsxs("div",{className:"flex flex-col items-center",children:[A.jsx("input",{type:"text",className:"form-control p-2 m-4 border rounded w-96",placeholder:"Search by title or category...",onChange:o}),A.jsx("div",{className:"flex flex-wrap justify-center",children:n.map((u,h)=>A.jsxs("div",{className:"m-4 relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96",children:[A.jsx("div",{className:"relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40",children:A.jsx("img",{src:u.fileId,alt:`card-image-${h}`,className:"object-cover w-full h-full"})}),A.jsxs("div",{className:"p-6",children:[A.jsxs("h5",{className:"block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900",children:["Name: ",u.title]}),A.jsxs("p",{className:"block font-sans text-base antialiased font-light leading-relaxed text-inherit",children:[A.jsx("span",{className:"font-semibold",children:"Category:"})," ",u.category]}),i[u.id]&&A.jsxs(A.Fragment,{children:[A.jsxs("p",{className:"block font-sans text-base antialiased font-light leading-relaxed text-inherit",children:[A.jsx("span",{className:"font-semibold",children:"Ingredients:"})," ",u.ingredients]}),A.jsxs("p",{className:"block font-sans text-base antialiased font-light leading-relaxed text-inherit",children:[A.jsx("span",{className:"font-semibold",children:"Instructions:"})," ",u.instructions]})]}),A.jsx("button",{className:"mt-4 text-blue-500 hover:text-blue-700",onClick:()=>a(u.id),children:i[u.id]?"Show Less":"Read More"})]})]},h))})]})}function AD(){const{currentUser:t,userLogin:e}=ju(),n=M.useRef(null),r=ns();M.useEffect(()=>{t&&r("/")},[t,r]);const i=s=>{s.preventDefault();const o=n.current.email.value,a=n.current.password.value;e({email:o,password:a})};return A.jsx(A.Fragment,{children:A.jsx("div",{className:"min-h-screen flex items-center justify-center w-full dark:bg-gray-950",children:A.jsxs("div",{className:"bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md",children:[A.jsx("h1",{className:"text-2xl font-bold text-center mb-4 dark:text-gray-200",children:"Welcome Back!"}),A.jsxs("form",{ref:n,onSubmit:i,children:[A.jsxs("div",{className:"mb-4",children:[A.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Email Address"}),A.jsx("input",{type:"email",id:"email",className:`shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 \r
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`,placeholder:"your@email.com",required:!0})]}),A.jsxs("div",{className:"mb-4",children:[A.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"Password"}),A.jsx("input",{type:"password",id:"password",className:`shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 \r
              focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`,placeholder:"Enter your password",required:!0}),A.jsx("a",{href:"#",className:"text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot Password?"})]}),A.jsxs("div",{className:"flex items-center justify-between mb-4",children:[A.jsxs("div",{className:"flex items-center",children:[A.jsx("input",{type:"checkbox",id:"remember",className:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none",defaultChecked:!0}),A.jsx("label",{htmlFor:"remember",className:"ml-2 block text-sm text-gray-700 dark:text-gray-300",children:"Remember me"})]}),A.jsx("a",{href:"/signup",className:"text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Create Account"})]}),A.jsx("button",{type:"submit",className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Login"})]})]})})})}function OD(){const[t,e]=M.useState(null),{uploadImage:n,currentUser:r}=ju(),i=ns(),[s,o]=M.useState(""),[a,u]=M.useState(""),[h,p]=M.useState(""),[f,g]=M.useState("");M.useEffect(()=>{r||i("/login")},[r,i]);const T=N=>{const O=N.target.files?N.target.files[0]:null;e(O)},k=async N=>{const O=so.currentUser.uid;if(N.preventDefault(),t)try{const v=await n(t);console.log("File uploaded successfully"),await cD(eC(bp,"users/"+nC()),{userId:O,title:s,ingredients:a,instructions:h,category:f,fileId:v}),console.log("Data added to database successfully"),e(null),o(""),u(""),p(""),g("")}catch(v){console.error("Error uploading file:",v)}};return A.jsxs("form",{onSubmit:k,className:"max-w-md mx-auto mt-10",children:[A.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[A.jsx("input",{onChange:N=>o(N.target.value),type:"text",name:"title",id:"title",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:s,required:!0}),A.jsx("label",{htmlFor:"title",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Title"})]}),A.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[A.jsx("input",{onChange:N=>u(N.target.value),type:"text",name:"ingredients",id:"ingredients",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:a,required:!0}),A.jsx("label",{htmlFor:"ingredients",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Ingredients"})]}),A.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[A.jsx("input",{onChange:N=>p(N.target.value),type:"text",name:"instructions",id:"instructions",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:h,required:!0}),A.jsx("label",{htmlFor:"instructions",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Instructions"})]}),A.jsxs("div",{className:"relative z-0 w-full mb-5 group",children:[A.jsx("input",{onChange:N=>g(N.target.value),type:"text",name:"category",id:"category",className:"block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",placeholder:" ",value:f,required:!0}),A.jsx("label",{htmlFor:"category",className:"peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6",children:"Category"})]}),A.jsxs("div",{children:[A.jsx("label",{htmlFor:"file_input",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Upload file"}),A.jsx("input",{className:"block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400",id:"file_input",type:"file",onChange:T})]}),A.jsx("button",{type:"submit",className:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Submit"})]})}function bD(){const t=M.useRef(null),{userCreate:e}=ju(),n=ns(),r=async i=>{i.preventDefault();const s=t.current.email.value,o=t.current.password.value,a={email:s,password:o};try{await e(a),console.log("User account created successfully"),n("/")}catch(u){console.error("Error creating account:",u.message)}};return A.jsx("form",{ref:t,onSubmit:r,children:A.jsx("section",{className:"flex flex-col items-center pt-6",children:A.jsx("div",{className:"w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700",children:A.jsxs("div",{className:"p-6 space-y-4 md:space-y-6 sm:p-8",children:[A.jsx("h1",{className:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white",children:"Create an account"}),A.jsxs("div",{className:"space-y-4 md:space-y-6",children:[A.jsxs("div",{children:[A.jsx("label",{htmlFor:"email",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Email"}),A.jsx("input",{type:"text",name:"email",id:"email",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"test@gmail.com",required:!0})]}),A.jsxs("div",{children:[A.jsx("label",{htmlFor:"password",className:"block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:"Password"}),A.jsx("input",{type:"password",name:"password",id:"password",placeholder:"••••••••",className:"bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:!0})]}),A.jsx("button",{type:"submit",className:"w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",children:"Create an account"}),A.jsxs("p",{className:"text-sm font-light text-gray-500 dark:text-gray-400",children:["Already have an account?"," ",A.jsx("a",{className:"font-medium text-blue-600 hover:underline dark:text-blue-500",href:"/login",children:"Sign in here"})]})]})]})})})})}function DD(){return A.jsx(ck,{children:A.jsx(kD,{children:A.jsx(rk,{children:A.jsxs(Nr,{path:"/",element:A.jsx(ND,{}),children:[A.jsx(Nr,{index:!0,element:A.jsx(PD,{})}),A.jsx(Nr,{path:"*",element:A.jsx(LD,{})}),A.jsx(Nr,{path:"/upload",element:A.jsx(OD,{})}),A.jsx(Nr,{path:"/login",element:A.jsx(AD,{})}),A.jsx(Nr,{path:"/signup",element:A.jsx(bD,{})})]})})})})}const LD=()=>A.jsx("h2",{children:"Page not found"});oh.createRoot(document.getElementById("root")).render(A.jsx(Fy.StrictMode,{children:A.jsx(DD,{})}));
