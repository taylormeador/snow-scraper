"use strict";(()=>{var Jp=Object.create;var _s=Object.defineProperty;var Xp=Object.getOwnPropertyDescriptor;var Yp=Object.getOwnPropertyNames;var Kp=Object.getPrototypeOf,Zp=Object.prototype.hasOwnProperty;var ze=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ef=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Yp(t))!Zp.call(e,o)&&o!==n&&_s(e,o,{get:()=>t[o],enumerable:!(r=Xp(t,o))||r.enumerable});return e};var P=(e,t,n)=>(n=e!=null?Jp(Kp(e)):{},ef(t||!e||!e.__esModule?_s(n,"default",{value:e,enumerable:!0}):n,e));var Is=ze(T=>{"use strict";var Kn=Symbol.for("react.element"),tf=Symbol.for("react.portal"),nf=Symbol.for("react.fragment"),rf=Symbol.for("react.strict_mode"),of=Symbol.for("react.profiler"),lf=Symbol.for("react.provider"),af=Symbol.for("react.context"),sf=Symbol.for("react.forward_ref"),uf=Symbol.for("react.suspense"),cf=Symbol.for("react.memo"),df=Symbol.for("react.lazy"),Cs=Symbol.iterator;function pf(e){return e===null||typeof e!="object"?null:(e=Cs&&e[Cs]||e["@@iterator"],typeof e=="function"?e:null)}var Ns={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ts=Object.assign,Fs={};function xn(e,t,n){this.props=e,this.context=t,this.refs=Fs,this.updater=n||Ns}xn.prototype.isReactComponent={};xn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};xn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qs(){}Qs.prototype=xn.prototype;function Jl(e,t,n){this.props=e,this.context=t,this.refs=Fs,this.updater=n||Ns}var Xl=Jl.prototype=new Qs;Xl.constructor=Jl;Ts(Xl,xn.prototype);Xl.isPureReactComponent=!0;var Es=Array.isArray,Os=Object.prototype.hasOwnProperty,Yl={current:null},zs={key:!0,ref:!0,__self:!0,__source:!0};function bs(e,t,n){var r,o={},l=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(l=""+t.key),t)Os.call(t,r)&&!zs.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),c=0;c<a;c++)s[c]=arguments[c+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:Kn,type:e,key:l,ref:i,props:o,_owner:Yl.current}}function ff(e,t){return{$$typeof:Kn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Kl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Kn}function gf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ps=/\/+/g;function Gl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gf(""+e.key):t.toString(36)}function oo(e,t,n,r,o){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(l){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Kn:case tf:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Gl(i,0):r,Es(o)?(n="",e!=null&&(n=e.replace(Ps,"$&/")+"/"),oo(o,t,n,"",function(c){return c})):o!=null&&(Kl(o)&&(o=ff(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Ps,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Es(e))for(var a=0;a<e.length;a++){l=e[a];var s=r+Gl(l,a);i+=oo(l,t,n,s,o)}else if(s=pf(e),typeof s=="function")for(e=s.call(e),a=0;!(l=e.next()).done;)l=l.value,s=r+Gl(l,a++),i+=oo(l,t,n,s,o);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function ro(e,t,n){if(e==null)return e;var r=[],o=0;return oo(e,r,"","",function(l){return t.call(n,l,o++)}),r}function mf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},lo={transition:null},hf={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:lo,ReactCurrentOwner:Yl};T.Children={map:ro,forEach:function(e,t,n){ro(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ro(e,function(){t++}),t},toArray:function(e){return ro(e,function(t){return t})||[]},only:function(e){if(!Kl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};T.Component=xn;T.Fragment=nf;T.Profiler=of;T.PureComponent=Jl;T.StrictMode=rf;T.Suspense=uf;T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hf;T.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ts({},e.props),o=e.key,l=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,i=Yl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Os.call(t,s)&&!zs.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var c=0;c<s;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Kn,type:e.type,key:o,ref:l,props:r,_owner:i}};T.createContext=function(e){return e={$$typeof:af,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:lf,_context:e},e.Consumer=e};T.createElement=bs;T.createFactory=function(e){var t=bs.bind(null,e);return t.type=e,t};T.createRef=function(){return{current:null}};T.forwardRef=function(e){return{$$typeof:sf,render:e}};T.isValidElement=Kl;T.lazy=function(e){return{$$typeof:df,_payload:{_status:-1,_result:e},_init:mf}};T.memo=function(e,t){return{$$typeof:cf,type:e,compare:t===void 0?null:t}};T.startTransition=function(e){var t=lo.transition;lo.transition={};try{e()}finally{lo.transition=t}};T.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};T.useCallback=function(e,t){return pe.current.useCallback(e,t)};T.useContext=function(e){return pe.current.useContext(e)};T.useDebugValue=function(){};T.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};T.useEffect=function(e,t){return pe.current.useEffect(e,t)};T.useId=function(){return pe.current.useId()};T.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};T.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};T.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};T.useMemo=function(e,t){return pe.current.useMemo(e,t)};T.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};T.useRef=function(e){return pe.current.useRef(e)};T.useState=function(e){return pe.current.useState(e)};T.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};T.useTransition=function(){return pe.current.useTransition()};T.version="18.2.0"});var U=ze((ch,Us)=>{"use strict";Us.exports=Is()});var Ws=ze(L=>{"use strict";function ni(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(0<io(o,t))e[r]=t,e[n]=o,n=r;else break e}}function Re(e){return e.length===0?null:e[0]}function so(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,l=o>>>1;r<l;){var i=2*(r+1)-1,a=e[i],s=i+1,c=e[s];if(0>io(a,n))s<o&&0>io(c,a)?(e[r]=c,e[s]=n,r=s):(e[r]=a,e[i]=n,r=i);else if(s<o&&0>io(c,n))e[r]=c,e[s]=n,r=s;else break e}}return t}function io(e,t){var n=e.sortIndex-t.sortIndex;return n!==0?n:e.id-t.id}typeof performance=="object"&&typeof performance.now=="function"?(Ls=performance,L.unstable_now=function(){return Ls.now()}):(Zl=Date,Bs=Zl.now(),L.unstable_now=function(){return Zl.now()-Bs});var Ls,Zl,Bs,Ke=[],Pt=[],yf=1,be=null,ie=3,uo=!1,Kt=!1,er=!1,Rs=typeof setTimeout=="function"?setTimeout:null,$s=typeof clearTimeout=="function"?clearTimeout:null,Ds=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ri(e){for(var t=Re(Pt);t!==null;){if(t.callback===null)so(Pt);else if(t.startTime<=e)so(Pt),t.sortIndex=t.expirationTime,ni(Ke,t);else break;t=Re(Pt)}}function oi(e){if(er=!1,ri(e),!Kt)if(Re(Ke)!==null)Kt=!0,ii(li);else{var t=Re(Pt);t!==null&&ai(oi,t.startTime-e)}}function li(e,t){Kt=!1,er&&(er=!1,$s(tr),tr=-1),uo=!0;var n=ie;try{for(ri(t),be=Re(Ke);be!==null&&(!(be.expirationTime>t)||e&&!Vs());){var r=be.callback;if(typeof r=="function"){be.callback=null,ie=be.priorityLevel;var o=r(be.expirationTime<=t);t=L.unstable_now(),typeof o=="function"?be.callback=o:be===Re(Ke)&&so(Ke),ri(t)}else so(Ke);be=Re(Ke)}if(be!==null)var l=!0;else{var i=Re(Pt);i!==null&&ai(oi,i.startTime-t),l=!1}return l}finally{be=null,ie=n,uo=!1}}var co=!1,ao=null,tr=-1,js=5,As=-1;function Vs(){return!(L.unstable_now()-As<js)}function ei(){if(ao!==null){var e=L.unstable_now();As=e;var t=!0;try{t=ao(!0,e)}finally{t?Zn():(co=!1,ao=null)}}else co=!1}var Zn;typeof Ds=="function"?Zn=function(){Ds(ei)}:typeof MessageChannel<"u"?(ti=new MessageChannel,Ms=ti.port2,ti.port1.onmessage=ei,Zn=function(){Ms.postMessage(null)}):Zn=function(){Rs(ei,0)};var ti,Ms;function ii(e){ao=e,co||(co=!0,Zn())}function ai(e,t){tr=Rs(function(){e(L.unstable_now())},t)}L.unstable_IdlePriority=5;L.unstable_ImmediatePriority=1;L.unstable_LowPriority=4;L.unstable_NormalPriority=3;L.unstable_Profiling=null;L.unstable_UserBlockingPriority=2;L.unstable_cancelCallback=function(e){e.callback=null};L.unstable_continueExecution=function(){Kt||uo||(Kt=!0,ii(li))};L.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):js=0<e?Math.floor(1e3/e):5};L.unstable_getCurrentPriorityLevel=function(){return ie};L.unstable_getFirstCallbackNode=function(){return Re(Ke)};L.unstable_next=function(e){switch(ie){case 1:case 2:case 3:var t=3;break;default:t=ie}var n=ie;ie=t;try{return e()}finally{ie=n}};L.unstable_pauseExecution=function(){};L.unstable_requestPaint=function(){};L.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=ie;ie=e;try{return t()}finally{ie=n}};L.unstable_scheduleCallback=function(e,t,n){var r=L.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?r+n:r):n=r,e){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return o=n+o,e={id:yf++,callback:t,priorityLevel:e,startTime:n,expirationTime:o,sortIndex:-1},n>r?(e.sortIndex=n,ni(Pt,e),Re(Ke)===null&&e===Re(Pt)&&(er?($s(tr),tr=-1):er=!0,ai(oi,n-r))):(e.sortIndex=o,ni(Ke,e),Kt||uo||(Kt=!0,ii(li))),e};L.unstable_shouldYield=Vs;L.unstable_wrapCallback=function(e){var t=ie;return function(){var n=ie;ie=t;try{return e.apply(this,arguments)}finally{ie=n}}}});var qs=ze((ph,Hs)=>{"use strict";Hs.exports=Ws()});var Zd=ze(Oe=>{"use strict";var ec=U(),Fe=qs();function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var tc=new Set,_r={};function pn(e,t){Rn(e,t),Rn(e+"Capture",t)}function Rn(e,t){for(_r[e]=t,e=0;e<t.length;e++)tc.add(t[e])}var ft=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qi=Object.prototype.hasOwnProperty,vf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gs={},Js={};function xf(e){return Qi.call(Js,e)?!0:Qi.call(Gs,e)?!1:vf.test(e)?Js[e]=!0:(Gs[e]=!0,!1)}function wf(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sf(e,t,n,r){if(t===null||typeof t>"u"||wf(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function me(e,t,n,r,o,l,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=i}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new me(e,5,!1,e.toLowerCase(),null,!1,!1)});var ka=/[\-:]([a-z])/g;function _a(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ka,_a);oe[t]=new me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ka,_a);oe[t]=new me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ka,_a);oe[t]=new me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new me(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ca(e,t,n,r){var o=oe.hasOwnProperty(t)?oe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sf(t,n,o,r)&&(n=null),r||o===null?xf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yt=ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,po=Symbol.for("react.element"),kn=Symbol.for("react.portal"),_n=Symbol.for("react.fragment"),Ea=Symbol.for("react.strict_mode"),Oi=Symbol.for("react.profiler"),nc=Symbol.for("react.provider"),rc=Symbol.for("react.context"),Pa=Symbol.for("react.forward_ref"),zi=Symbol.for("react.suspense"),bi=Symbol.for("react.suspense_list"),Na=Symbol.for("react.memo"),Tt=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var oc=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var Xs=Symbol.iterator;function nr(e){return e===null||typeof e!="object"?null:(e=Xs&&e[Xs]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,si;function cr(e){if(si===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);si=t&&t[1]||""}return`
`+si+e}var ui=!1;function ci(e,t){if(!e||ui)return"";ui=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var o=c.stack.split(`
`),l=r.stack.split(`
`),i=o.length-1,a=l.length-1;1<=i&&0<=a&&o[i]!==l[a];)a--;for(;1<=i&&0<=a;i--,a--)if(o[i]!==l[a]){if(i!==1||a!==1)do if(i--,a--,0>a||o[i]!==l[a]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=a);break}}}finally{ui=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?cr(e):""}function kf(e){switch(e.tag){case 5:return cr(e.type);case 16:return cr("Lazy");case 13:return cr("Suspense");case 19:return cr("SuspenseList");case 0:case 2:case 15:return e=ci(e.type,!1),e;case 11:return e=ci(e.type.render,!1),e;case 1:return e=ci(e.type,!0),e;default:return""}}function Ii(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _n:return"Fragment";case kn:return"Portal";case Oi:return"Profiler";case Ea:return"StrictMode";case zi:return"Suspense";case bi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case rc:return(e.displayName||"Context")+".Consumer";case nc:return(e._context.displayName||"Context")+".Provider";case Pa:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Na:return t=e.displayName||null,t!==null?t:Ii(e.type)||"Memo";case Tt:t=e._payload,e=e._init;try{return Ii(e(t))}catch{}}return null}function _f(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ii(t);case 8:return t===Ea?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function jt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function lc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cf(e){var t=lc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,l.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fo(e){e._valueTracker||(e._valueTracker=Cf(e))}function ic(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=lc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ui(e,t){var n=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Ys(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=jt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ac(e,t){t=t.checked,t!=null&&Ca(e,"checked",t,!1)}function Li(e,t){ac(e,t);var n=jt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Bi(e,t.type,n):t.hasOwnProperty("defaultValue")&&Bi(e,t.type,jt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ks(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Bi(e,t,n){(t!=="number"||$o(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var dr=Array.isArray;function In(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+jt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Di(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Zs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(dr(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:jt(n)}}function sc(e,t){var n=jt(t.value),r=jt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function eu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var go,cc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(go=go||document.createElement("div"),go.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=go.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Cr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var gr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ef=["Webkit","ms","Moz","O"];Object.keys(gr).forEach(function(e){Ef.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),gr[t]=gr[e]})});function dc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||gr.hasOwnProperty(e)&&gr[e]?(""+t).trim():t+"px"}function pc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=dc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Pf=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ri(e,t){if(t){if(Pf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function $i(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ji=null;function Ta(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ai=null,Un=null,Ln=null;function tu(e){if(e=jr(e)){if(typeof Ai!="function")throw Error(_(280));var t=e.stateNode;t&&(t=ml(t),Ai(e.stateNode,e.type,t))}}function fc(e){Un?Ln?Ln.push(e):Ln=[e]:Un=e}function gc(){if(Un){var e=Un,t=Ln;if(Ln=Un=null,tu(e),t)for(e=0;e<t.length;e++)tu(t[e])}}function mc(e,t){return e(t)}function hc(){}var di=!1;function yc(e,t,n){if(di)return e(t,n);di=!0;try{return mc(e,t,n)}finally{di=!1,(Un!==null||Ln!==null)&&(hc(),gc())}}function Er(e,t){var n=e.stateNode;if(n===null)return null;var r=ml(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Vi=!1;if(ft)try{wn={},Object.defineProperty(wn,"passive",{get:function(){Vi=!0}}),window.addEventListener("test",wn,wn),window.removeEventListener("test",wn,wn)}catch{Vi=!1}var wn;function Nf(e,t,n,r,o,l,i,a,s){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(g){this.onError(g)}}var mr=!1,jo=null,Ao=!1,Wi=null,Tf={onError:function(e){mr=!0,jo=e}};function Ff(e,t,n,r,o,l,i,a,s){mr=!1,jo=null,Nf.apply(Tf,arguments)}function Qf(e,t,n,r,o,l,i,a,s){if(Ff.apply(this,arguments),mr){if(mr){var c=jo;mr=!1,jo=null}else throw Error(_(198));Ao||(Ao=!0,Wi=c)}}function fn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nu(e){if(fn(e)!==e)throw Error(_(188))}function Of(e){var t=e.alternate;if(!t){if(t=fn(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var l=o.alternate;if(l===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===l.child){for(l=o.child;l;){if(l===n)return nu(o),e;if(l===r)return nu(o),t;l=l.sibling}throw Error(_(188))}if(n.return!==r.return)n=o,r=l;else{for(var i=!1,a=o.child;a;){if(a===n){i=!0,n=o,r=l;break}if(a===r){i=!0,r=o,n=l;break}a=a.sibling}if(!i){for(a=l.child;a;){if(a===n){i=!0,n=l,r=o;break}if(a===r){i=!0,r=l,n=o;break}a=a.sibling}if(!i)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function xc(e){return e=Of(e),e!==null?wc(e):null}function wc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=wc(e);if(t!==null)return t;e=e.sibling}return null}var Sc=Fe.unstable_scheduleCallback,ru=Fe.unstable_cancelCallback,zf=Fe.unstable_shouldYield,bf=Fe.unstable_requestPaint,G=Fe.unstable_now,If=Fe.unstable_getCurrentPriorityLevel,Fa=Fe.unstable_ImmediatePriority,kc=Fe.unstable_UserBlockingPriority,Vo=Fe.unstable_NormalPriority,Uf=Fe.unstable_LowPriority,_c=Fe.unstable_IdlePriority,dl=null,nt=null;function Lf(e){if(nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(dl,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Mf,Bf=Math.log,Df=Math.LN2;function Mf(e){return e>>>=0,e===0?32:31-(Bf(e)/Df|0)|0}var mo=64,ho=4194304;function pr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,l=e.pingedLanes,i=n&268435455;if(i!==0){var a=i&~o;a!==0?r=pr(a):(l&=i,l!==0&&(r=pr(l)))}else i=n&~o,i!==0?r=pr(i):l!==0&&(r=pr(l));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,l=t&-t,o>=l||o===16&&(l&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-We(t),o=1<<n,r|=e[n],t&=~o;return r}function Rf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $f(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,l=e.pendingLanes;0<l;){var i=31-We(l),a=1<<i,s=o[i];s===-1?((a&n)===0||(a&r)!==0)&&(o[i]=Rf(a,t)):s<=t&&(e.expiredLanes|=a),l&=~a}}function Hi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cc(){var e=mo;return mo<<=1,(mo&4194240)===0&&(mo=64),e}function pi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Rr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function jf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-We(n),l=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~l}}function Qa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var z=0;function Ec(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Pc,Oa,Nc,Tc,Fc,qi=!1,yo=[],It=null,Ut=null,Lt=null,Pr=new Map,Nr=new Map,Qt=[],Af="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ou(e,t){switch(e){case"focusin":case"focusout":It=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Nr.delete(t.pointerId)}}function rr(e,t,n,r,o,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[o]},t!==null&&(t=jr(t),t!==null&&Oa(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Vf(e,t,n,r,o){switch(t){case"focusin":return It=rr(It,e,t,n,r,o),!0;case"dragenter":return Ut=rr(Ut,e,t,n,r,o),!0;case"mouseover":return Lt=rr(Lt,e,t,n,r,o),!0;case"pointerover":var l=o.pointerId;return Pr.set(l,rr(Pr.get(l)||null,e,t,n,r,o)),!0;case"gotpointercapture":return l=o.pointerId,Nr.set(l,rr(Nr.get(l)||null,e,t,n,r,o)),!0}return!1}function Qc(e){var t=tn(e.target);if(t!==null){var n=fn(t);if(n!==null){if(t=n.tag,t===13){if(t=vc(n),t!==null){e.blockedOn=t,Fc(e.priority,function(){Nc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Oo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ji=r,n.target.dispatchEvent(r),ji=null}else return t=jr(n),t!==null&&Oa(t),e.blockedOn=n,!1;t.shift()}return!0}function lu(e,t,n){Oo(e)&&n.delete(t)}function Wf(){qi=!1,It!==null&&Oo(It)&&(It=null),Ut!==null&&Oo(Ut)&&(Ut=null),Lt!==null&&Oo(Lt)&&(Lt=null),Pr.forEach(lu),Nr.forEach(lu)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,qi||(qi=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,Wf)))}function Tr(e){function t(o){return or(o,e)}if(0<yo.length){or(yo[0],e);for(var n=1;n<yo.length;n++){var r=yo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(It!==null&&or(It,e),Ut!==null&&or(Ut,e),Lt!==null&&or(Lt,e),Pr.forEach(t),Nr.forEach(t),n=0;n<Qt.length;n++)r=Qt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Qt.length&&(n=Qt[0],n.blockedOn===null);)Qc(n),n.blockedOn===null&&Qt.shift()}var Bn=yt.ReactCurrentBatchConfig,Ho=!0;function Hf(e,t,n,r){var o=z,l=Bn.transition;Bn.transition=null;try{z=1,za(e,t,n,r)}finally{z=o,Bn.transition=l}}function qf(e,t,n,r){var o=z,l=Bn.transition;Bn.transition=null;try{z=4,za(e,t,n,r)}finally{z=o,Bn.transition=l}}function za(e,t,n,r){if(Ho){var o=Gi(e,t,n,r);if(o===null)xi(e,t,r,qo,n),ou(e,r);else if(Vf(o,e,t,n,r))r.stopPropagation();else if(ou(e,r),t&4&&-1<Af.indexOf(e)){for(;o!==null;){var l=jr(o);if(l!==null&&Pc(l),l=Gi(e,t,n,r),l===null&&xi(e,t,r,qo,n),l===o)break;o=l}o!==null&&r.stopPropagation()}else xi(e,t,r,null,n)}}var qo=null;function Gi(e,t,n,r){if(qo=null,e=Ta(r),e=tn(e),e!==null)if(t=fn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qo=e,null}function Oc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(If()){case Fa:return 1;case kc:return 4;case Vo:case Uf:return 16;case _c:return 536870912;default:return 16}default:return 16}}var zt=null,ba=null,zo=null;function zc(){if(zo)return zo;var e,t=ba,n=t.length,r,o="value"in zt?zt.value:zt.textContent,l=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[l-r];r++);return zo=o.slice(e,1<r?1-r:void 0)}function bo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function vo(){return!0}function iu(){return!1}function Qe(e){function t(n,r,o,l,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=l,this.target=i,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(l):l[a]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?vo:iu,this.isPropagationStopped=iu,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),t}var qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ia=Qe(qn),$r=V({},qn,{view:0,detail:0}),Gf=Qe($r),fi,gi,lr,pl=V({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ua,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?(fi=e.screenX-lr.screenX,gi=e.screenY-lr.screenY):gi=fi=0,lr=e),fi)},movementY:function(e){return"movementY"in e?e.movementY:gi}}),au=Qe(pl),Jf=V({},pl,{dataTransfer:0}),Xf=Qe(Jf),Yf=V({},$r,{relatedTarget:0}),mi=Qe(Yf),Kf=V({},qn,{animationName:0,elapsedTime:0,pseudoElement:0}),Zf=Qe(Kf),eg=V({},qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tg=Qe(eg),ng=V({},qn,{data:0}),su=Qe(ng),rg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ig(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=lg[e])?!!t[e]:!1}function Ua(){return ig}var ag=V({},$r,{key:function(e){if(e.key){var t=rg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?og[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ua,charCode:function(e){return e.type==="keypress"?bo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sg=Qe(ag),ug=V({},pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),uu=Qe(ug),cg=V({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ua}),dg=Qe(cg),pg=V({},qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),fg=Qe(pg),gg=V({},pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mg=Qe(gg),hg=[9,13,27,32],La=ft&&"CompositionEvent"in window,hr=null;ft&&"documentMode"in document&&(hr=document.documentMode);var yg=ft&&"TextEvent"in window&&!hr,bc=ft&&(!La||hr&&8<hr&&11>=hr),cu=String.fromCharCode(32),du=!1;function Ic(e,t){switch(e){case"keyup":return hg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Cn=!1;function vg(e,t){switch(e){case"compositionend":return Uc(t);case"keypress":return t.which!==32?null:(du=!0,cu);case"textInput":return e=t.data,e===cu&&du?null:e;default:return null}}function xg(e,t){if(Cn)return e==="compositionend"||!La&&Ic(e,t)?(e=zc(),zo=ba=zt=null,Cn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return bc&&t.locale!=="ko"?null:t.data;default:return null}}var wg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!wg[e.type]:t==="textarea"}function Lc(e,t,n,r){fc(r),t=Go(t,"onChange"),0<t.length&&(n=new Ia("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var yr=null,Fr=null;function Sg(e){qc(e,0)}function fl(e){var t=Nn(e);if(ic(t))return e}function kg(e,t){if(e==="change")return t}var Bc=!1;ft&&(ft?(wo="oninput"in document,wo||(hi=document.createElement("div"),hi.setAttribute("oninput","return;"),wo=typeof hi.oninput=="function"),xo=wo):xo=!1,Bc=xo&&(!document.documentMode||9<document.documentMode));var xo,wo,hi;function fu(){yr&&(yr.detachEvent("onpropertychange",Dc),Fr=yr=null)}function Dc(e){if(e.propertyName==="value"&&fl(Fr)){var t=[];Lc(t,Fr,e,Ta(e)),yc(Sg,t)}}function _g(e,t,n){e==="focusin"?(fu(),yr=t,Fr=n,yr.attachEvent("onpropertychange",Dc)):e==="focusout"&&fu()}function Cg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fl(Fr)}function Eg(e,t){if(e==="click")return fl(t)}function Pg(e,t){if(e==="input"||e==="change")return fl(t)}function Ng(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qe=typeof Object.is=="function"?Object.is:Ng;function Qr(e,t){if(qe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Qi.call(t,o)||!qe(e[o],t[o]))return!1}return!0}function gu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mu(e,t){var n=gu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gu(n)}}function Mc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rc(){for(var e=window,t=$o();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$o(e.document)}return t}function Ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Tg(e){var t=Rc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mc(n.ownerDocument.documentElement,n)){if(r!==null&&Ba(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,l=Math.min(r.start,o);r=r.end===void 0?l:Math.min(r.end,o),!e.extend&&l>r&&(o=r,r=l,l=o),o=mu(n,l);var i=mu(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Fg=ft&&"documentMode"in document&&11>=document.documentMode,En=null,Ji=null,vr=null,Xi=!1;function hu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xi||En==null||En!==$o(r)||(r=En,"selectionStart"in r&&Ba(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&Qr(vr,r)||(vr=r,r=Go(Ji,"onSelect"),0<r.length&&(t=new Ia("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=En)))}function So(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},yi={},$c={};ft&&($c=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function gl(e){if(yi[e])return yi[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $c)return yi[e]=t[n];return e}var jc=gl("animationend"),Ac=gl("animationiteration"),Vc=gl("animationstart"),Wc=gl("transitionend"),Hc=new Map,yu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vt(e,t){Hc.set(e,t),pn(t,[e])}for(ko=0;ko<yu.length;ko++)_o=yu[ko],vu=_o.toLowerCase(),xu=_o[0].toUpperCase()+_o.slice(1),Vt(vu,"on"+xu);var _o,vu,xu,ko;Vt(jc,"onAnimationEnd");Vt(Ac,"onAnimationIteration");Vt(Vc,"onAnimationStart");Vt("dblclick","onDoubleClick");Vt("focusin","onFocus");Vt("focusout","onBlur");Vt(Wc,"onTransitionEnd");Rn("onMouseEnter",["mouseout","mouseover"]);Rn("onMouseLeave",["mouseout","mouseover"]);Rn("onPointerEnter",["pointerout","pointerover"]);Rn("onPointerLeave",["pointerout","pointerover"]);pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qg=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function wu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qf(r,t,void 0,e),e.currentTarget=null}function qc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var i=r.length-1;0<=i;i--){var a=r[i],s=a.instance,c=a.currentTarget;if(a=a.listener,s!==l&&o.isPropagationStopped())break e;wu(o,a,c),l=s}else for(i=0;i<r.length;i++){if(a=r[i],s=a.instance,c=a.currentTarget,a=a.listener,s!==l&&o.isPropagationStopped())break e;wu(o,a,c),l=s}}}if(Ao)throw e=Wi,Ao=!1,Wi=null,e}function M(e,t){var n=t[ta];n===void 0&&(n=t[ta]=new Set);var r=e+"__bubble";n.has(r)||(Gc(t,e,2,!1),n.add(r))}function vi(e,t,n){var r=0;t&&(r|=4),Gc(n,e,r,t)}var Co="_reactListening"+Math.random().toString(36).slice(2);function Or(e){if(!e[Co]){e[Co]=!0,tc.forEach(function(n){n!=="selectionchange"&&(Qg.has(n)||vi(n,!1,e),vi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Co]||(t[Co]=!0,vi("selectionchange",!1,t))}}function Gc(e,t,n,r){switch(Oc(t)){case 1:var o=Hf;break;case 4:o=qf;break;default:o=za}n=o.bind(null,t,n,e),o=void 0,!Vi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function xi(e,t,n,r,o){var l=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;a!==null;){if(i=tn(a),i===null)return;if(s=i.tag,s===5||s===6){r=l=i;continue e}a=a.parentNode}}r=r.return}yc(function(){var c=l,g=Ta(n),f=[];e:{var m=Hc.get(e);if(m!==void 0){var y=Ia,x=e;switch(e){case"keypress":if(bo(n)===0)break e;case"keydown":case"keyup":y=sg;break;case"focusin":x="focus",y=mi;break;case"focusout":x="blur",y=mi;break;case"beforeblur":case"afterblur":y=mi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Xf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=dg;break;case jc:case Ac:case Vc:y=Zf;break;case Wc:y=fg;break;case"scroll":y=Gf;break;case"wheel":y=mg;break;case"copy":case"cut":case"paste":y=tg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=uu}var w=(t&4)!==0,N=!w&&e==="scroll",p=w?m!==null?m+"Capture":null:m;w=[];for(var u=c,d;u!==null;){d=u;var h=d.stateNode;if(d.tag===5&&h!==null&&(d=h,p!==null&&(h=Er(u,p),h!=null&&w.push(zr(u,h,d)))),N)break;u=u.return}0<w.length&&(m=new y(m,x,null,n,g),f.push({event:m,listeners:w}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",m&&n!==ji&&(x=n.relatedTarget||n.fromElement)&&(tn(x)||x[gt]))break e;if((y||m)&&(m=g.window===g?g:(m=g.ownerDocument)?m.defaultView||m.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=c,x=x?tn(x):null,x!==null&&(N=fn(x),x!==N||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=c),y!==x)){if(w=au,h="onMouseLeave",p="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(w=uu,h="onPointerLeave",p="onPointerEnter",u="pointer"),N=y==null?m:Nn(y),d=x==null?m:Nn(x),m=new w(h,u+"leave",y,n,g),m.target=N,m.relatedTarget=d,h=null,tn(g)===c&&(w=new w(p,u+"enter",x,n,g),w.target=d,w.relatedTarget=N,h=w),N=h,y&&x)t:{for(w=y,p=x,u=0,d=w;d;d=Sn(d))u++;for(d=0,h=p;h;h=Sn(h))d++;for(;0<u-d;)w=Sn(w),u--;for(;0<d-u;)p=Sn(p),d--;for(;u--;){if(w===p||p!==null&&w===p.alternate)break t;w=Sn(w),p=Sn(p)}w=null}else w=null;y!==null&&Su(f,m,y,w,!1),x!==null&&N!==null&&Su(f,N,x,w,!0)}}e:{if(m=c?Nn(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var k=kg;else if(pu(m))if(Bc)k=Pg;else{k=Cg;var v=_g}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=Eg);if(k&&(k=k(e,c))){Lc(f,k,n,g);break e}v&&v(e,m,c),e==="focusout"&&(v=m._wrapperState)&&v.controlled&&m.type==="number"&&Bi(m,"number",m.value)}switch(v=c?Nn(c):window,e){case"focusin":(pu(v)||v.contentEditable==="true")&&(En=v,Ji=c,vr=null);break;case"focusout":vr=Ji=En=null;break;case"mousedown":Xi=!0;break;case"contextmenu":case"mouseup":case"dragend":Xi=!1,hu(f,n,g);break;case"selectionchange":if(Fg)break;case"keydown":case"keyup":hu(f,n,g)}var S;if(La)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Cn?Ic(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(bc&&n.locale!=="ko"&&(Cn||E!=="onCompositionStart"?E==="onCompositionEnd"&&Cn&&(S=zc()):(zt=g,ba="value"in zt?zt.value:zt.textContent,Cn=!0)),v=Go(c,E),0<v.length&&(E=new su(E,e,null,n,g),f.push({event:E,listeners:v}),S?E.data=S:(S=Uc(n),S!==null&&(E.data=S)))),(S=yg?vg(e,n):xg(e,n))&&(c=Go(c,"onBeforeInput"),0<c.length&&(g=new su("onBeforeInput","beforeinput",null,n,g),f.push({event:g,listeners:c}),g.data=S))}qc(f,t)})}function zr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Go(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,l=o.stateNode;o.tag===5&&l!==null&&(o=l,l=Er(e,n),l!=null&&r.unshift(zr(e,l,o)),l=Er(e,t),l!=null&&r.push(zr(e,l,o))),e=e.return}return r}function Sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Su(e,t,n,r,o){for(var l=t._reactName,i=[];n!==null&&n!==r;){var a=n,s=a.alternate,c=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&c!==null&&(a=c,o?(s=Er(n,l),s!=null&&i.unshift(zr(n,s,a))):o||(s=Er(n,l),s!=null&&i.push(zr(n,s,a)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Og=/\r\n?/g,zg=/\u0000|\uFFFD/g;function ku(e){return(typeof e=="string"?e:""+e).replace(Og,`
`).replace(zg,"")}function Eo(e,t,n){if(t=ku(t),ku(e)!==t&&n)throw Error(_(425))}function Jo(){}var Yi=null,Ki=null;function Zi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ea=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,_u=typeof Promise=="function"?Promise:void 0,Ig=typeof queueMicrotask=="function"?queueMicrotask:typeof _u<"u"?function(e){return _u.resolve(null).then(e).catch(Ug)}:ea;function Ug(e){setTimeout(function(){throw e})}function wi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Tr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Tr(t)}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Gn=Math.random().toString(36).slice(2),tt="__reactFiber$"+Gn,br="__reactProps$"+Gn,gt="__reactContainer$"+Gn,ta="__reactEvents$"+Gn,Lg="__reactListeners$"+Gn,Bg="__reactHandles$"+Gn;function tn(e){var t=e[tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[gt]||n[tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cu(e);e!==null;){if(n=e[tt])return n;e=Cu(e)}return t}e=n,n=e.parentNode}return null}function jr(e){return e=e[tt]||e[gt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function ml(e){return e[br]||null}var na=[],Tn=-1;function Wt(e){return{current:e}}function R(e){0>Tn||(e.current=na[Tn],na[Tn]=null,Tn--)}function B(e,t){Tn++,na[Tn]=e.current,e.current=t}var At={},ce=Wt(At),xe=Wt(!1),an=At;function $n(e,t){var n=e.type.contextTypes;if(!n)return At;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},l;for(l in n)o[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function we(e){return e=e.childContextTypes,e!=null}function Xo(){R(xe),R(ce)}function Eu(e,t,n){if(ce.current!==At)throw Error(_(168));B(ce,t),B(xe,n)}function Jc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(_(108,_f(e)||"Unknown",o));return V({},n,r)}function Yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||At,an=ce.current,B(ce,e),B(xe,xe.current),!0}function Pu(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Jc(e,t,an),r.__reactInternalMemoizedMergedChildContext=e,R(xe),R(ce),B(ce,e)):R(xe),B(xe,n)}var ut=null,hl=!1,Si=!1;function Xc(e){ut===null?ut=[e]:ut.push(e)}function Dg(e){hl=!0,Xc(e)}function Ht(){if(!Si&&ut!==null){Si=!0;var e=0,t=z;try{var n=ut;for(z=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ut=null,hl=!1}catch(o){throw ut!==null&&(ut=ut.slice(e+1)),Sc(Fa,Ht),o}finally{z=t,Si=!1}}return null}var Fn=[],Qn=0,Ko=null,Zo=0,Ie=[],Ue=0,sn=null,ct=1,dt="";function Zt(e,t){Fn[Qn++]=Zo,Fn[Qn++]=Ko,Ko=e,Zo=t}function Yc(e,t,n){Ie[Ue++]=ct,Ie[Ue++]=dt,Ie[Ue++]=sn,sn=e;var r=ct;e=dt;var o=32-We(r)-1;r&=~(1<<o),n+=1;var l=32-We(t)+o;if(30<l){var i=o-o%5;l=(r&(1<<i)-1).toString(32),r>>=i,o-=i,ct=1<<32-We(t)+o|n<<o|r,dt=l+e}else ct=1<<l|n<<o|r,dt=e}function Da(e){e.return!==null&&(Zt(e,1),Yc(e,1,0))}function Ma(e){for(;e===Ko;)Ko=Fn[--Qn],Fn[Qn]=null,Zo=Fn[--Qn],Fn[Qn]=null;for(;e===sn;)sn=Ie[--Ue],Ie[Ue]=null,dt=Ie[--Ue],Ie[Ue]=null,ct=Ie[--Ue],Ie[Ue]=null}var Te=null,Ne=null,$=!1,Ve=null;function Kc(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Nu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Te=e,Ne=Bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Te=e,Ne=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sn!==null?{id:ct,overflow:dt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Te=e,Ne=null,!0):!1;default:return!1}}function ra(e){return(e.mode&1)!==0&&(e.flags&128)===0}function oa(e){if($){var t=Ne;if(t){var n=t;if(!Nu(e,t)){if(ra(e))throw Error(_(418));t=Bt(n.nextSibling);var r=Te;t&&Nu(e,t)?Kc(r,n):(e.flags=e.flags&-4097|2,$=!1,Te=e)}}else{if(ra(e))throw Error(_(418));e.flags=e.flags&-4097|2,$=!1,Te=e}}}function Tu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Te=e}function Po(e){if(e!==Te)return!1;if(!$)return Tu(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Zi(e.type,e.memoizedProps)),t&&(t=Ne)){if(ra(e))throw Zc(),Error(_(418));for(;t;)Kc(e,t),t=Bt(t.nextSibling)}if(Tu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ne=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ne=null}}else Ne=Te?Bt(e.stateNode.nextSibling):null;return!0}function Zc(){for(var e=Ne;e;)e=Bt(e.nextSibling)}function jn(){Ne=Te=null,$=!1}function Ra(e){Ve===null?Ve=[e]:Ve.push(e)}var Mg=yt.ReactCurrentBatchConfig;function je(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var el=Wt(null),tl=null,On=null,$a=null;function ja(){$a=On=tl=null}function Aa(e){var t=el.current;R(el),e._currentValue=t}function la(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Dn(e,t){tl=e,$a=On=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(ve=!0),e.firstContext=null)}function De(e){var t=e._currentValue;if($a!==e)if(e={context:e,memoizedValue:t,next:null},On===null){if(tl===null)throw Error(_(308));On=e,tl.dependencies={lanes:0,firstContext:e}}else On=On.next=e;return t}var nn=null;function Va(e){nn===null?nn=[e]:nn.push(e)}function ed(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Va(t)):(n.next=o.next,o.next=n),t.interleaved=n,mt(e,r)}function mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ft=!1;function Wa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function td(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Dt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Q&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,mt(e,n)}return o=r.interleaved,o===null?(t.next=t,Va(r)):(t.next=o.next,o.next=t),r.interleaved=t,mt(e,n)}function Io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qa(e,n)}}function Fu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?o=l=i:l=l.next=i,n=n.next}while(n!==null);l===null?o=l=t:l=l.next=t}else o=l=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function nl(e,t,n,r){var o=e.updateQueue;Ft=!1;var l=o.firstBaseUpdate,i=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,c=s.next;s.next=null,i===null?l=c:i.next=c,i=s;var g=e.alternate;g!==null&&(g=g.updateQueue,a=g.lastBaseUpdate,a!==i&&(a===null?g.firstBaseUpdate=c:a.next=c,g.lastBaseUpdate=s))}if(l!==null){var f=o.baseState;i=0,g=c=s=null,a=l;do{var m=a.lane,y=a.eventTime;if((r&m)===m){g!==null&&(g=g.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,w=a;switch(m=t,y=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){f=x.call(y,f,m);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,m=typeof x=="function"?x.call(y,f,m):x,m==null)break e;f=V({},f,m);break e;case 2:Ft=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},g===null?(c=g=y,s=f):g=g.next=y,i|=m;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;m=a,a=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(1);if(g===null&&(s=f),o.baseState=s,o.firstBaseUpdate=c,o.lastBaseUpdate=g,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else l===null&&(o.shared.lanes=0);cn|=i,e.lanes=i,e.memoizedState=f}}function Qu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(_(191,o));o.call(r)}}}var nd=new ec.Component().refs;function ia(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:V({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var yl={isMounted:function(e){return(e=e._reactInternals)?fn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ge(),o=Rt(e),l=pt(r,o);l.payload=t,n!=null&&(l.callback=n),t=Dt(e,l,o),t!==null&&(He(t,e,o,r),Io(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ge(),o=Rt(e),l=pt(r,o);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=Dt(e,l,o),t!==null&&(He(t,e,o,r),Io(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ge(),r=Rt(e),o=pt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Dt(e,o,r),t!==null&&(He(t,e,r,n),Io(t,e,r))}};function Ou(e,t,n,r,o,l,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,i):t.prototype&&t.prototype.isPureReactComponent?!Qr(n,r)||!Qr(o,l):!0}function rd(e,t,n){var r=!1,o=At,l=t.contextType;return typeof l=="object"&&l!==null?l=De(l):(o=we(t)?an:ce.current,r=t.contextTypes,l=(r=r!=null)?$n(e,o):At),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=yl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=l),t}function zu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&yl.enqueueReplaceState(t,t.state,null)}function aa(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=nd,Wa(e);var l=t.contextType;typeof l=="object"&&l!==null?o.context=De(l):(l=we(t)?an:ce.current,o.context=$n(e,l)),o.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(ia(e,t,l,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&yl.enqueueReplaceState(o,o.state,null),nl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var o=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(i){var a=o.refs;a===nd&&(a=o.refs={}),i===null?delete a[l]:a[l]=i},t._stringRef=l,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function No(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function bu(e){var t=e._init;return t(e._payload)}function od(e){function t(p,u){if(e){var d=p.deletions;d===null?(p.deletions=[u],p.flags|=16):d.push(u)}}function n(p,u){if(!e)return null;for(;u!==null;)t(p,u),u=u.sibling;return null}function r(p,u){for(p=new Map;u!==null;)u.key!==null?p.set(u.key,u):p.set(u.index,u),u=u.sibling;return p}function o(p,u){return p=$t(p,u),p.index=0,p.sibling=null,p}function l(p,u,d){return p.index=d,e?(d=p.alternate,d!==null?(d=d.index,d<u?(p.flags|=2,u):d):(p.flags|=2,u)):(p.flags|=1048576,u)}function i(p){return e&&p.alternate===null&&(p.flags|=2),p}function a(p,u,d,h){return u===null||u.tag!==6?(u=Ti(d,p.mode,h),u.return=p,u):(u=o(u,d),u.return=p,u)}function s(p,u,d,h){var k=d.type;return k===_n?g(p,u,d.props.children,h,d.key):u!==null&&(u.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Tt&&bu(k)===u.type)?(h=o(u,d.props),h.ref=ir(p,u,d),h.return=p,h):(h=Ro(d.type,d.key,d.props,null,p.mode,h),h.ref=ir(p,u,d),h.return=p,h)}function c(p,u,d,h){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=Fi(d,p.mode,h),u.return=p,u):(u=o(u,d.children||[]),u.return=p,u)}function g(p,u,d,h,k){return u===null||u.tag!==7?(u=ln(d,p.mode,h,k),u.return=p,u):(u=o(u,d),u.return=p,u)}function f(p,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Ti(""+u,p.mode,d),u.return=p,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case po:return d=Ro(u.type,u.key,u.props,null,p.mode,d),d.ref=ir(p,null,u),d.return=p,d;case kn:return u=Fi(u,p.mode,d),u.return=p,u;case Tt:var h=u._init;return f(p,h(u._payload),d)}if(dr(u)||nr(u))return u=ln(u,p.mode,d,null),u.return=p,u;No(p,u)}return null}function m(p,u,d,h){var k=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return k!==null?null:a(p,u,""+d,h);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case po:return d.key===k?s(p,u,d,h):null;case kn:return d.key===k?c(p,u,d,h):null;case Tt:return k=d._init,m(p,u,k(d._payload),h)}if(dr(d)||nr(d))return k!==null?null:g(p,u,d,h,null);No(p,d)}return null}function y(p,u,d,h,k){if(typeof h=="string"&&h!==""||typeof h=="number")return p=p.get(d)||null,a(u,p,""+h,k);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case po:return p=p.get(h.key===null?d:h.key)||null,s(u,p,h,k);case kn:return p=p.get(h.key===null?d:h.key)||null,c(u,p,h,k);case Tt:var v=h._init;return y(p,u,d,v(h._payload),k)}if(dr(h)||nr(h))return p=p.get(d)||null,g(u,p,h,k,null);No(u,h)}return null}function x(p,u,d,h){for(var k=null,v=null,S=u,E=u=0,q=null;S!==null&&E<d.length;E++){S.index>E?(q=S,S=null):q=S.sibling;var O=m(p,S,d[E],h);if(O===null){S===null&&(S=q);break}e&&S&&O.alternate===null&&t(p,S),u=l(O,u,E),v===null?k=O:v.sibling=O,v=O,S=q}if(E===d.length)return n(p,S),$&&Zt(p,E),k;if(S===null){for(;E<d.length;E++)S=f(p,d[E],h),S!==null&&(u=l(S,u,E),v===null?k=S:v.sibling=S,v=S);return $&&Zt(p,E),k}for(S=r(p,S);E<d.length;E++)q=y(S,p,E,d[E],h),q!==null&&(e&&q.alternate!==null&&S.delete(q.key===null?E:q.key),u=l(q,u,E),v===null?k=q:v.sibling=q,v=q);return e&&S.forEach(function(Et){return t(p,Et)}),$&&Zt(p,E),k}function w(p,u,d,h){var k=nr(d);if(typeof k!="function")throw Error(_(150));if(d=k.call(d),d==null)throw Error(_(151));for(var v=k=null,S=u,E=u=0,q=null,O=d.next();S!==null&&!O.done;E++,O=d.next()){S.index>E?(q=S,S=null):q=S.sibling;var Et=m(p,S,O.value,h);if(Et===null){S===null&&(S=q);break}e&&S&&Et.alternate===null&&t(p,S),u=l(Et,u,E),v===null?k=Et:v.sibling=Et,v=Et,S=q}if(O.done)return n(p,S),$&&Zt(p,E),k;if(S===null){for(;!O.done;E++,O=d.next())O=f(p,O.value,h),O!==null&&(u=l(O,u,E),v===null?k=O:v.sibling=O,v=O);return $&&Zt(p,E),k}for(S=r(p,S);!O.done;E++,O=d.next())O=y(S,p,E,O.value,h),O!==null&&(e&&O.alternate!==null&&S.delete(O.key===null?E:O.key),u=l(O,u,E),v===null?k=O:v.sibling=O,v=O);return e&&S.forEach(function(Gp){return t(p,Gp)}),$&&Zt(p,E),k}function N(p,u,d,h){if(typeof d=="object"&&d!==null&&d.type===_n&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case po:e:{for(var k=d.key,v=u;v!==null;){if(v.key===k){if(k=d.type,k===_n){if(v.tag===7){n(p,v.sibling),u=o(v,d.props.children),u.return=p,p=u;break e}}else if(v.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Tt&&bu(k)===v.type){n(p,v.sibling),u=o(v,d.props),u.ref=ir(p,v,d),u.return=p,p=u;break e}n(p,v);break}else t(p,v);v=v.sibling}d.type===_n?(u=ln(d.props.children,p.mode,h,d.key),u.return=p,p=u):(h=Ro(d.type,d.key,d.props,null,p.mode,h),h.ref=ir(p,u,d),h.return=p,p=h)}return i(p);case kn:e:{for(v=d.key;u!==null;){if(u.key===v)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(p,u.sibling),u=o(u,d.children||[]),u.return=p,p=u;break e}else{n(p,u);break}else t(p,u);u=u.sibling}u=Fi(d,p.mode,h),u.return=p,p=u}return i(p);case Tt:return v=d._init,N(p,u,v(d._payload),h)}if(dr(d))return x(p,u,d,h);if(nr(d))return w(p,u,d,h);No(p,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(p,u.sibling),u=o(u,d),u.return=p,p=u):(n(p,u),u=Ti(d,p.mode,h),u.return=p,p=u),i(p)):n(p,u)}return N}var An=od(!0),ld=od(!1),Ar={},rt=Wt(Ar),Ir=Wt(Ar),Ur=Wt(Ar);function rn(e){if(e===Ar)throw Error(_(174));return e}function Ha(e,t){switch(B(Ur,t),B(Ir,e),B(rt,Ar),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Mi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Mi(t,e)}R(rt),B(rt,t)}function Vn(){R(rt),R(Ir),R(Ur)}function id(e){rn(Ur.current);var t=rn(rt.current),n=Mi(t,e.type);t!==n&&(B(Ir,e),B(rt,n))}function qa(e){Ir.current===e&&(R(rt),R(Ir))}var j=Wt(0);function rl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ki=[];function Ga(){for(var e=0;e<ki.length;e++)ki[e]._workInProgressVersionPrimary=null;ki.length=0}var Uo=yt.ReactCurrentDispatcher,_i=yt.ReactCurrentBatchConfig,un=0,A=null,K=null,ee=null,ol=!1,xr=!1,Lr=0,Rg=0;function ae(){throw Error(_(321))}function Ja(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qe(e[n],t[n]))return!1;return!0}function Xa(e,t,n,r,o,l){if(un=l,A=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Uo.current=e===null||e.memoizedState===null?Vg:Wg,e=n(r,o),xr){l=0;do{if(xr=!1,Lr=0,25<=l)throw Error(_(301));l+=1,ee=K=null,t.updateQueue=null,Uo.current=Hg,e=n(r,o)}while(xr)}if(Uo.current=ll,t=K!==null&&K.next!==null,un=0,ee=K=A=null,ol=!1,t)throw Error(_(300));return e}function Ya(){var e=Lr!==0;return Lr=0,e}function et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?A.memoizedState=ee=e:ee=ee.next=e,ee}function Me(){if(K===null){var e=A.alternate;e=e!==null?e.memoizedState:null}else e=K.next;var t=ee===null?A.memoizedState:ee.next;if(t!==null)ee=t,K=e;else{if(e===null)throw Error(_(310));K=e,e={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null},ee===null?A.memoizedState=ee=e:ee=ee.next=e}return ee}function Br(e,t){return typeof t=="function"?t(e):t}function Ci(e){var t=Me(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=K,o=r.baseQueue,l=n.pending;if(l!==null){if(o!==null){var i=o.next;o.next=l.next,l.next=i}r.baseQueue=o=l,n.pending=null}if(o!==null){l=o.next,r=r.baseState;var a=i=null,s=null,c=l;do{var g=c.lane;if((un&g)===g)s!==null&&(s=s.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:g,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};s===null?(a=s=f,i=r):s=s.next=f,A.lanes|=g,cn|=g}c=c.next}while(c!==null&&c!==l);s===null?i=r:s.next=a,qe(r,t.memoizedState)||(ve=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do l=o.lane,A.lanes|=l,cn|=l,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ei(e){var t=Me(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,l=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do l=e(l,i.action),i=i.next;while(i!==o);qe(l,t.memoizedState)||(ve=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function ad(){}function sd(e,t){var n=A,r=Me(),o=t(),l=!qe(r.memoizedState,o);if(l&&(r.memoizedState=o,ve=!0),r=r.queue,Ka(dd.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ee!==null&&ee.memoizedState.tag&1){if(n.flags|=2048,Dr(9,cd.bind(null,n,r,o,t),void 0,null),te===null)throw Error(_(349));(un&30)!==0||ud(n,t,o)}return o}function ud(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cd(e,t,n,r){t.value=n,t.getSnapshot=r,pd(t)&&fd(e)}function dd(e,t,n){return n(function(){pd(t)&&fd(e)})}function pd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qe(e,n)}catch{return!0}}function fd(e){var t=mt(e,1);t!==null&&He(t,e,1,-1)}function Iu(e){var t=et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},t.queue=e,e=e.dispatch=Ag.bind(null,A,e),[t.memoizedState,e]}function Dr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=A.updateQueue,t===null?(t={lastEffect:null,stores:null},A.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gd(){return Me().memoizedState}function Lo(e,t,n,r){var o=et();A.flags|=e,o.memoizedState=Dr(1|t,n,void 0,r===void 0?null:r)}function vl(e,t,n,r){var o=Me();r=r===void 0?null:r;var l=void 0;if(K!==null){var i=K.memoizedState;if(l=i.destroy,r!==null&&Ja(r,i.deps)){o.memoizedState=Dr(t,n,l,r);return}}A.flags|=e,o.memoizedState=Dr(1|t,n,l,r)}function Uu(e,t){return Lo(8390656,8,e,t)}function Ka(e,t){return vl(2048,8,e,t)}function md(e,t){return vl(4,2,e,t)}function hd(e,t){return vl(4,4,e,t)}function yd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vd(e,t,n){return n=n!=null?n.concat([e]):null,vl(4,4,yd.bind(null,t,e),n)}function Za(){}function xd(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ja(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wd(e,t){var n=Me();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ja(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sd(e,t,n){return(un&21)===0?(e.baseState&&(e.baseState=!1,ve=!0),e.memoizedState=n):(qe(n,t)||(n=Cc(),A.lanes|=n,cn|=n,e.baseState=!0),t)}function $g(e,t){var n=z;z=n!==0&&4>n?n:4,e(!0);var r=_i.transition;_i.transition={};try{e(!1),t()}finally{z=n,_i.transition=r}}function kd(){return Me().memoizedState}function jg(e,t,n){var r=Rt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_d(e))Cd(t,n);else if(n=ed(e,t,n,r),n!==null){var o=ge();He(n,e,r,o),Ed(n,t,r)}}function Ag(e,t,n){var r=Rt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_d(e))Cd(t,o);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var i=t.lastRenderedState,a=l(i,n);if(o.hasEagerState=!0,o.eagerState=a,qe(a,i)){var s=t.interleaved;s===null?(o.next=o,Va(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=ed(e,t,o,r),n!==null&&(o=ge(),He(n,e,r,o),Ed(n,t,r))}}function _d(e){var t=e.alternate;return e===A||t!==null&&t===A}function Cd(e,t){xr=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ed(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qa(e,n)}}var ll={readContext:De,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Vg={readContext:De,useCallback:function(e,t){return et().memoizedState=[e,t===void 0?null:t],e},useContext:De,useEffect:Uu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Lo(4194308,4,yd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Lo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Lo(4,2,e,t)},useMemo:function(e,t){var n=et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=jg.bind(null,A,e),[r.memoizedState,e]},useRef:function(e){var t=et();return e={current:e},t.memoizedState=e},useState:Iu,useDebugValue:Za,useDeferredValue:function(e){return et().memoizedState=e},useTransition:function(){var e=Iu(!1),t=e[0];return e=$g.bind(null,e[1]),et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=A,o=et();if($){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),te===null)throw Error(_(349));(un&30)!==0||ud(r,t,n)}o.memoizedState=n;var l={value:n,getSnapshot:t};return o.queue=l,Uu(dd.bind(null,r,l,e),[e]),r.flags|=2048,Dr(9,cd.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=et(),t=te.identifierPrefix;if($){var n=dt,r=ct;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Lr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Rg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wg={readContext:De,useCallback:xd,useContext:De,useEffect:Ka,useImperativeHandle:vd,useInsertionEffect:md,useLayoutEffect:hd,useMemo:wd,useReducer:Ci,useRef:gd,useState:function(){return Ci(Br)},useDebugValue:Za,useDeferredValue:function(e){var t=Me();return Sd(t,K.memoizedState,e)},useTransition:function(){var e=Ci(Br)[0],t=Me().memoizedState;return[e,t]},useMutableSource:ad,useSyncExternalStore:sd,useId:kd,unstable_isNewReconciler:!1},Hg={readContext:De,useCallback:xd,useContext:De,useEffect:Ka,useImperativeHandle:vd,useInsertionEffect:md,useLayoutEffect:hd,useMemo:wd,useReducer:Ei,useRef:gd,useState:function(){return Ei(Br)},useDebugValue:Za,useDeferredValue:function(e){var t=Me();return K===null?t.memoizedState=e:Sd(t,K.memoizedState,e)},useTransition:function(){var e=Ei(Br)[0],t=Me().memoizedState;return[e,t]},useMutableSource:ad,useSyncExternalStore:sd,useId:kd,unstable_isNewReconciler:!1};function Wn(e,t){try{var n="",r=t;do n+=kf(r),r=r.return;while(r);var o=n}catch(l){o=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:o,digest:null}}function Pi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function sa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var qg=typeof WeakMap=="function"?WeakMap:Map;function Pd(e,t,n){n=pt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){al||(al=!0,va=r),sa(e,t)},n}function Nd(e,t,n){n=pt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){sa(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){sa(e,t),typeof r!="function"&&(Mt===null?Mt=new Set([this]):Mt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Lu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new qg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=am.bind(null,e,t,n),t.then(e,e))}function Bu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Du(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pt(-1,1),t.tag=2,Dt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Gg=yt.ReactCurrentOwner,ve=!1;function fe(e,t,n,r){t.child=e===null?ld(t,null,n,r):An(t,e.child,n,r)}function Mu(e,t,n,r,o){n=n.render;var l=t.ref;return Dn(t,o),r=Xa(e,t,n,r,l,o),n=Ya(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ht(e,t,o)):($&&n&&Da(t),t.flags|=1,fe(e,t,r,o),t.child)}function Ru(e,t,n,r,o){if(e===null){var l=n.type;return typeof l=="function"&&!as(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,Td(e,t,l,r,o)):(e=Ro(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,(e.lanes&o)===0){var i=l.memoizedProps;if(n=n.compare,n=n!==null?n:Qr,n(i,r)&&e.ref===t.ref)return ht(e,t,o)}return t.flags|=1,e=$t(l,r),e.ref=t.ref,e.return=t,t.child=e}function Td(e,t,n,r,o){if(e!==null){var l=e.memoizedProps;if(Qr(l,r)&&e.ref===t.ref)if(ve=!1,t.pendingProps=r=l,(e.lanes&o)!==0)(e.flags&131072)!==0&&(ve=!0);else return t.lanes=e.lanes,ht(e,t,o)}return ua(e,t,n,r,o)}function Fd(e,t,n){var r=t.pendingProps,o=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(bn,Pe),Pe|=n;else{if((n&1073741824)===0)return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(bn,Pe),Pe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,B(bn,Pe),Pe|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,B(bn,Pe),Pe|=r;return fe(e,t,o,n),t.child}function Qd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ua(e,t,n,r,o){var l=we(n)?an:ce.current;return l=$n(t,l),Dn(t,o),n=Xa(e,t,n,r,l,o),r=Ya(),e!==null&&!ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ht(e,t,o)):($&&r&&Da(t),t.flags|=1,fe(e,t,n,o),t.child)}function $u(e,t,n,r,o){if(we(n)){var l=!0;Yo(t)}else l=!1;if(Dn(t,o),t.stateNode===null)Bo(e,t),rd(t,n,r),aa(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,a=t.memoizedProps;i.props=a;var s=i.context,c=n.contextType;typeof c=="object"&&c!==null?c=De(c):(c=we(n)?an:ce.current,c=$n(t,c));var g=n.getDerivedStateFromProps,f=typeof g=="function"||typeof i.getSnapshotBeforeUpdate=="function";f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==r||s!==c)&&zu(t,i,r,c),Ft=!1;var m=t.memoizedState;i.state=m,nl(t,r,i,o),s=t.memoizedState,a!==r||m!==s||xe.current||Ft?(typeof g=="function"&&(ia(t,n,g,r),s=t.memoizedState),(a=Ft||Ou(t,n,a,r,m,s,c))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=c,r=a):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,td(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:je(t.type,a),i.props=c,f=t.pendingProps,m=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=De(s):(s=we(n)?an:ce.current,s=$n(t,s));var y=n.getDerivedStateFromProps;(g=typeof y=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(a!==f||m!==s)&&zu(t,i,r,s),Ft=!1,m=t.memoizedState,i.state=m,nl(t,r,i,o);var x=t.memoizedState;a!==f||m!==x||xe.current||Ft?(typeof y=="function"&&(ia(t,n,y,r),x=t.memoizedState),(c=Ft||Ou(t,n,c,r,m,x,s)||!1)?(g||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,x,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,x,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),i.props=r,i.state=x,i.context=s,r=c):(typeof i.componentDidUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return ca(e,t,n,r,l,o)}function ca(e,t,n,r,o,l){Qd(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Pu(t,n,!1),ht(e,t,l);r=t.stateNode,Gg.current=t;var a=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=An(t,e.child,null,l),t.child=An(t,null,a,l)):fe(e,t,a,l),t.memoizedState=r.state,o&&Pu(t,n,!0),t.child}function Od(e){var t=e.stateNode;t.pendingContext?Eu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Eu(e,t.context,!1),Ha(e,t.containerInfo)}function ju(e,t,n,r,o){return jn(),Ra(o),t.flags|=256,fe(e,t,n,r),t.child}var da={dehydrated:null,treeContext:null,retryLane:0};function pa(e){return{baseLanes:e,cachePool:null,transitions:null}}function zd(e,t,n){var r=t.pendingProps,o=j.current,l=!1,i=(t.flags&128)!==0,a;if((a=i)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(j,o&1),e===null)return oa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,l?(r=t.mode,l=t.child,i={mode:"hidden",children:i},(r&1)===0&&l!==null?(l.childLanes=0,l.pendingProps=i):l=Sl(i,r,0,null),e=ln(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=pa(n),t.memoizedState=da,e):es(t,i));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Jg(e,t,i,r,a,o,n);if(l){l=r.fallback,i=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=$t(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?l=$t(a,l):(l=ln(l,i,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,i=e.child.memoizedState,i=i===null?pa(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},l.memoizedState=i,l.childLanes=e.childLanes&~n,t.memoizedState=da,r}return l=e.child,e=l.sibling,r=$t(l,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function es(e,t){return t=Sl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function To(e,t,n,r){return r!==null&&Ra(r),An(t,e.child,null,n),e=es(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Jg(e,t,n,r,o,l,i){if(n)return t.flags&256?(t.flags&=-257,r=Pi(Error(_(422))),To(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,o=t.mode,r=Sl({mode:"visible",children:r.children},o,0,null),l=ln(l,o,i,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,(t.mode&1)!==0&&An(t,e.child,null,i),t.child.memoizedState=pa(i),t.memoizedState=da,l);if((t.mode&1)===0)return To(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,l=Error(_(419)),r=Pi(l,r,void 0),To(e,t,i,r)}if(a=(i&e.childLanes)!==0,ve||a){if(r=te,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==l.retryLane&&(l.retryLane=o,mt(e,o),He(r,e,o,-1))}return is(),r=Pi(Error(_(421))),To(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=sm.bind(null,e),o._reactRetry=t,null):(e=l.treeContext,Ne=Bt(o.nextSibling),Te=t,$=!0,Ve=null,e!==null&&(Ie[Ue++]=ct,Ie[Ue++]=dt,Ie[Ue++]=sn,ct=e.id,dt=e.overflow,sn=t),t=es(t,r.children),t.flags|=4096,t)}function Au(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),la(e.return,t,n)}function Ni(e,t,n,r,o){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=o)}function bd(e,t,n){var r=t.pendingProps,o=r.revealOrder,l=r.tail;if(fe(e,t,r.children,n),r=j.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Au(e,n,t);else if(e.tag===19)Au(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(j,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&rl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ni(t,!1,o,n,l);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&rl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ni(t,!0,n,null,l);break;case"together":Ni(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),cn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=$t(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=$t(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Xg(e,t,n){switch(t.tag){case 3:Od(t),jn();break;case 5:id(t);break;case 1:we(t.type)&&Yo(t);break;case 4:Ha(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;B(el,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(j,j.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?zd(e,t,n):(B(j,j.current&1),e=ht(e,t,n),e!==null?e.sibling:null);B(j,j.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return bd(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(j,j.current),r)break;return null;case 22:case 23:return t.lanes=0,Fd(e,t,n)}return ht(e,t,n)}var Id,fa,Ud,Ld;Id=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fa=function(){};Ud=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,rn(rt.current);var l=null;switch(n){case"input":o=Ui(e,o),r=Ui(e,r),l=[];break;case"select":o=V({},o,{value:void 0}),r=V({},r,{value:void 0}),l=[];break;case"textarea":o=Di(e,o),r=Di(e,r),l=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jo)}Ri(n,r);var i;n=null;for(c in o)if(!r.hasOwnProperty(c)&&o.hasOwnProperty(c)&&o[c]!=null)if(c==="style"){var a=o[c];for(i in a)a.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_r.hasOwnProperty(c)?l||(l=[]):(l=l||[]).push(c,null));for(c in r){var s=r[c];if(a=o?.[c],r.hasOwnProperty(c)&&s!==a&&(s!=null||a!=null))if(c==="style")if(a){for(i in a)!a.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&a[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(l||(l=[]),l.push(c,n)),n=s;else c==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(l=l||[]).push(c,s)):c==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(c,""+s):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_r.hasOwnProperty(c)?(s!=null&&c==="onScroll"&&M("scroll",e),l||a===s||(l=[])):(l=l||[]).push(c,s))}n&&(l=l||[]).push("style",n);var c=l;(t.updateQueue=c)&&(t.flags|=4)}};Ld=function(e,t,n,r){n!==r&&(t.flags|=4)};function ar(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function se(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yg(e,t,n){var r=t.pendingProps;switch(Ma(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return se(t),null;case 1:return we(t.type)&&Xo(),se(t),null;case 3:return r=t.stateNode,Vn(),R(xe),R(ce),Ga(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Po(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ve!==null&&(Sa(Ve),Ve=null))),fa(e,t),se(t),null;case 5:qa(t);var o=rn(Ur.current);if(n=t.type,e!==null&&t.stateNode!=null)Ud(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return se(t),null}if(e=rn(rt.current),Po(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[tt]=t,r[br]=l,e=(t.mode&1)!==0,n){case"dialog":M("cancel",r),M("close",r);break;case"iframe":case"object":case"embed":M("load",r);break;case"video":case"audio":for(o=0;o<fr.length;o++)M(fr[o],r);break;case"source":M("error",r);break;case"img":case"image":case"link":M("error",r),M("load",r);break;case"details":M("toggle",r);break;case"input":Ys(r,l),M("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},M("invalid",r);break;case"textarea":Zs(r,l),M("invalid",r)}Ri(n,l),o=null;for(var i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="children"?typeof a=="string"?r.textContent!==a&&(l.suppressHydrationWarning!==!0&&Eo(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(l.suppressHydrationWarning!==!0&&Eo(r.textContent,a,e),o=["children",""+a]):_r.hasOwnProperty(i)&&a!=null&&i==="onScroll"&&M("scroll",r)}switch(n){case"input":fo(r),Ks(r,l,!0);break;case"textarea":fo(r),eu(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Jo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[tt]=t,e[br]=r,Id(e,t,!1,!1),t.stateNode=e;e:{switch(i=$i(n,r),n){case"dialog":M("cancel",e),M("close",e),o=r;break;case"iframe":case"object":case"embed":M("load",e),o=r;break;case"video":case"audio":for(o=0;o<fr.length;o++)M(fr[o],e);o=r;break;case"source":M("error",e),o=r;break;case"img":case"image":case"link":M("error",e),M("load",e),o=r;break;case"details":M("toggle",e),o=r;break;case"input":Ys(e,r),o=Ui(e,r),M("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=V({},r,{value:void 0}),M("invalid",e);break;case"textarea":Zs(e,r),o=Di(e,r),M("invalid",e);break;default:o=r}Ri(n,o),a=o;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];l==="style"?pc(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&cc(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Cr(e,s):typeof s=="number"&&Cr(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(_r.hasOwnProperty(l)?s!=null&&l==="onScroll"&&M("scroll",e):s!=null&&Ca(e,l,s,i))}switch(n){case"input":fo(e),Ks(e,r,!1);break;case"textarea":fo(e),eu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+jt(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?In(e,!!r.multiple,l,!1):r.defaultValue!=null&&In(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Jo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return se(t),null;case 6:if(e&&t.stateNode!=null)Ld(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=rn(Ur.current),rn(rt.current),Po(t)){if(r=t.stateNode,n=t.memoizedProps,r[tt]=t,(l=r.nodeValue!==n)&&(e=Te,e!==null))switch(e.tag){case 3:Eo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Eo(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tt]=t,t.stateNode=r}return se(t),null;case 13:if(R(j),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&Ne!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Zc(),jn(),t.flags|=98560,l=!1;else if(l=Po(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(_(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(_(317));l[tt]=t}else jn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;se(t),l=!1}else Ve!==null&&(Sa(Ve),Ve=null),l=!0;if(!l)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(j.current&1)!==0?Z===0&&(Z=3):is())),t.updateQueue!==null&&(t.flags|=4),se(t),null);case 4:return Vn(),fa(e,t),e===null&&Or(t.stateNode.containerInfo),se(t),null;case 10:return Aa(t.type._context),se(t),null;case 17:return we(t.type)&&Xo(),se(t),null;case 19:if(R(j),l=t.memoizedState,l===null)return se(t),null;if(r=(t.flags&128)!==0,i=l.rendering,i===null)if(r)ar(l,!1);else{if(Z!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=rl(e),i!==null){for(t.flags|=128,ar(l,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,i=l.alternate,i===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,l.type=i.type,e=i.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(j,j.current&1|2),t.child}e=e.sibling}l.tail!==null&&G()>Hn&&(t.flags|=128,r=!0,ar(l,!1),t.lanes=4194304)}else{if(!r)if(e=rl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ar(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!$)return se(t),null}else 2*G()-l.renderingStartTime>Hn&&n!==1073741824&&(t.flags|=128,r=!0,ar(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(n=l.last,n!==null?n.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=G(),t.sibling=null,n=j.current,B(j,r?n&1|2:n&1),t):(se(t),null);case 22:case 23:return ls(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Pe&1073741824)!==0&&(se(t),t.subtreeFlags&6&&(t.flags|=8192)):se(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function Kg(e,t){switch(Ma(t),t.tag){case 1:return we(t.type)&&Xo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Vn(),R(xe),R(ce),Ga(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return qa(t),null;case 13:if(R(j),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));jn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(j),null;case 4:return Vn(),null;case 10:return Aa(t.type._context),null;case 22:case 23:return ls(),null;case 24:return null;default:return null}}var Fo=!1,ue=!1,Zg=typeof WeakSet=="function"?WeakSet:Set,C=null;function zn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){H(e,t,r)}else n.current=null}function ga(e,t,n){try{n()}catch(r){H(e,t,r)}}var Vu=!1;function em(e,t){if(Yi=Ho,e=Rc(),Ba(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var i=0,a=-1,s=-1,c=0,g=0,f=e,m=null;t:for(;;){for(var y;f!==n||o!==0&&f.nodeType!==3||(a=i+o),f!==l||r!==0&&f.nodeType!==3||(s=i+r),f.nodeType===3&&(i+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===e)break t;if(m===n&&++c===o&&(a=i),m===l&&++g===r&&(s=i),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ki={focusedElem:e,selectionRange:n},Ho=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var x=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,N=x.memoizedState,p=t.stateNode,u=p.getSnapshotBeforeUpdate(t.elementType===t.type?w:je(t.type,w),N);p.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(h){H(t,t.return,h)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return x=Vu,Vu=!1,x}function wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var l=o.destroy;o.destroy=void 0,l!==void 0&&ga(t,n,l)}o=o.next}while(o!==r)}}function xl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ma(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Bd(e){var t=e.alternate;t!==null&&(e.alternate=null,Bd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[tt],delete t[br],delete t[ta],delete t[Lg],delete t[Bg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dd(e){return e.tag===5||e.tag===3||e.tag===4}function Wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Dd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ha(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jo));else if(r!==4&&(e=e.child,e!==null))for(ha(e,t,n),e=e.sibling;e!==null;)ha(e,t,n),e=e.sibling}function ya(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ya(e,t,n),e=e.sibling;e!==null;)ya(e,t,n),e=e.sibling}var ne=null,Ae=!1;function Nt(e,t,n){for(n=n.child;n!==null;)Md(e,t,n),n=n.sibling}function Md(e,t,n){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(dl,n)}catch{}switch(n.tag){case 5:ue||zn(n,t);case 6:var r=ne,o=Ae;ne=null,Nt(e,t,n),ne=r,Ae=o,ne!==null&&(Ae?(e=ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ne.removeChild(n.stateNode));break;case 18:ne!==null&&(Ae?(e=ne,n=n.stateNode,e.nodeType===8?wi(e.parentNode,n):e.nodeType===1&&wi(e,n),Tr(e)):wi(ne,n.stateNode));break;case 4:r=ne,o=Ae,ne=n.stateNode.containerInfo,Ae=!0,Nt(e,t,n),ne=r,Ae=o;break;case 0:case 11:case 14:case 15:if(!ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var l=o,i=l.destroy;l=l.tag,i!==void 0&&((l&2)!==0||(l&4)!==0)&&ga(n,t,i),o=o.next}while(o!==r)}Nt(e,t,n);break;case 1:if(!ue&&(zn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){H(n,t,a)}Nt(e,t,n);break;case 21:Nt(e,t,n);break;case 22:n.mode&1?(ue=(r=ue)||n.memoizedState!==null,Nt(e,t,n),ue=r):Nt(e,t,n);break;default:Nt(e,t,n)}}function Hu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Zg),t.forEach(function(r){var o=um.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function $e(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var l=e,i=t,a=i;e:for(;a!==null;){switch(a.tag){case 5:ne=a.stateNode,Ae=!1;break e;case 3:ne=a.stateNode.containerInfo,Ae=!0;break e;case 4:ne=a.stateNode.containerInfo,Ae=!0;break e}a=a.return}if(ne===null)throw Error(_(160));Md(l,i,o),ne=null,Ae=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(c){H(o,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rd(t,e),t=t.sibling}function Rd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if($e(t,e),Ze(e),r&4){try{wr(3,e,e.return),xl(3,e)}catch(w){H(e,e.return,w)}try{wr(5,e,e.return)}catch(w){H(e,e.return,w)}}break;case 1:$e(t,e),Ze(e),r&512&&n!==null&&zn(n,n.return);break;case 5:if($e(t,e),Ze(e),r&512&&n!==null&&zn(n,n.return),e.flags&32){var o=e.stateNode;try{Cr(o,"")}catch(w){H(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var l=e.memoizedProps,i=n!==null?n.memoizedProps:l,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&l.type==="radio"&&l.name!=null&&ac(o,l),$i(a,i);var c=$i(a,l);for(i=0;i<s.length;i+=2){var g=s[i],f=s[i+1];g==="style"?pc(o,f):g==="dangerouslySetInnerHTML"?cc(o,f):g==="children"?Cr(o,f):Ca(o,g,f,c)}switch(a){case"input":Li(o,l);break;case"textarea":sc(o,l);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!l.multiple;var y=l.value;y!=null?In(o,!!l.multiple,y,!1):m!==!!l.multiple&&(l.defaultValue!=null?In(o,!!l.multiple,l.defaultValue,!0):In(o,!!l.multiple,l.multiple?[]:"",!1))}o[br]=l}catch(w){H(e,e.return,w)}}break;case 6:if($e(t,e),Ze(e),r&4){if(e.stateNode===null)throw Error(_(162));o=e.stateNode,l=e.memoizedProps;try{o.nodeValue=l}catch(w){H(e,e.return,w)}}break;case 3:if($e(t,e),Ze(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Tr(t.containerInfo)}catch(w){H(e,e.return,w)}break;case 4:$e(t,e),Ze(e);break;case 13:$e(t,e),Ze(e),o=e.child,o.flags&8192&&(l=o.memoizedState!==null,o.stateNode.isHidden=l,!l||o.alternate!==null&&o.alternate.memoizedState!==null||(rs=G())),r&4&&Hu(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(ue=(c=ue)||g,$e(t,e),ue=c):$e(t,e),Ze(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!g&&(e.mode&1)!==0)for(C=e,g=e.child;g!==null;){for(f=C=g;C!==null;){switch(m=C,y=m.child,m.tag){case 0:case 11:case 14:case 15:wr(4,m,m.return);break;case 1:zn(m,m.return);var x=m.stateNode;if(typeof x.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){H(r,n,w)}}break;case 5:zn(m,m.return);break;case 22:if(m.memoizedState!==null){Gu(f);continue}}y!==null?(y.return=m,C=y):Gu(f)}g=g.sibling}e:for(g=null,f=e;;){if(f.tag===5){if(g===null){g=f;try{o=f.stateNode,c?(l=o.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(a=f.stateNode,s=f.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=dc("display",i))}catch(w){H(e,e.return,w)}}}else if(f.tag===6){if(g===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(w){H(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;g===f&&(g=null),f=f.return}g===f&&(g=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$e(t,e),Ze(e),r&4&&Hu(e);break;case 21:break;default:$e(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Dd(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Cr(o,""),r.flags&=-33);var l=Wu(e);ya(e,l,o);break;case 3:case 4:var i=r.stateNode.containerInfo,a=Wu(e);ha(e,a,i);break;default:throw Error(_(161))}}catch(s){H(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function tm(e,t,n){C=e,$d(e,t,n)}function $d(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var o=C,l=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Fo;if(!i){var a=o.alternate,s=a!==null&&a.memoizedState!==null||ue;a=Fo;var c=ue;if(Fo=i,(ue=s)&&!c)for(C=o;C!==null;)i=C,s=i.child,i.tag===22&&i.memoizedState!==null?Ju(o):s!==null?(s.return=i,C=s):Ju(o);for(;l!==null;)C=l,$d(l,t,n),l=l.sibling;C=o,Fo=a,ue=c}qu(e,t,n)}else(o.subtreeFlags&8772)!==0&&l!==null?(l.return=o,C=l):qu(e,t,n)}}function qu(e){for(;C!==null;){var t=C;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:ue||xl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ue)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:je(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Qu(t,l,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Qu(t,i,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var g=c.memoizedState;if(g!==null){var f=g.dehydrated;f!==null&&Tr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}ue||t.flags&512&&ma(t)}catch(m){H(t,t.return,m)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Gu(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Ju(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xl(4,t)}catch(s){H(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){H(t,o,s)}}var l=t.return;try{ma(t)}catch(s){H(t,l,s)}break;case 5:var i=t.return;try{ma(t)}catch(s){H(t,i,s)}}}catch(s){H(t,t.return,s)}if(t===e){C=null;break}var a=t.sibling;if(a!==null){a.return=t.return,C=a;break}C=t.return}}var nm=Math.ceil,il=yt.ReactCurrentDispatcher,ts=yt.ReactCurrentOwner,Be=yt.ReactCurrentBatchConfig,Q=0,te=null,X=null,re=0,Pe=0,bn=Wt(0),Z=0,Mr=null,cn=0,wl=0,ns=0,Sr=null,ye=null,rs=0,Hn=1/0,st=null,al=!1,va=null,Mt=null,Qo=!1,bt=null,sl=0,kr=0,xa=null,Do=-1,Mo=0;function ge(){return(Q&6)!==0?G():Do!==-1?Do:Do=G()}function Rt(e){return(e.mode&1)===0?1:(Q&2)!==0&&re!==0?re&-re:Mg.transition!==null?(Mo===0&&(Mo=Cc()),Mo):(e=z,e!==0||(e=window.event,e=e===void 0?16:Oc(e.type)),e)}function He(e,t,n,r){if(50<kr)throw kr=0,xa=null,Error(_(185));Rr(e,n,r),((Q&2)===0||e!==te)&&(e===te&&((Q&2)===0&&(wl|=n),Z===4&&Ot(e,re)),Se(e,r),n===1&&Q===0&&(t.mode&1)===0&&(Hn=G()+500,hl&&Ht()))}function Se(e,t){var n=e.callbackNode;$f(e,t);var r=Wo(e,e===te?re:0);if(r===0)n!==null&&ru(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ru(n),t===1)e.tag===0?Dg(Xu.bind(null,e)):Xc(Xu.bind(null,e)),Ig(function(){(Q&6)===0&&Ht()}),n=null;else{switch(Ec(r)){case 1:n=Fa;break;case 4:n=kc;break;case 16:n=Vo;break;case 536870912:n=_c;break;default:n=Vo}n=Jd(n,jd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jd(e,t){if(Do=-1,Mo=0,(Q&6)!==0)throw Error(_(327));var n=e.callbackNode;if(Mn()&&e.callbackNode!==n)return null;var r=Wo(e,e===te?re:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=ul(e,r);else{t=r;var o=Q;Q|=2;var l=Vd();(te!==e||re!==t)&&(st=null,Hn=G()+500,on(e,t));do try{lm();break}catch(a){Ad(e,a)}while(1);ja(),il.current=l,Q=o,X!==null?t=0:(te=null,re=0,t=Z)}if(t!==0){if(t===2&&(o=Hi(e),o!==0&&(r=o,t=wa(e,o))),t===1)throw n=Mr,on(e,0),Ot(e,r),Se(e,G()),n;if(t===6)Ot(e,r);else{if(o=e.current.alternate,(r&30)===0&&!rm(o)&&(t=ul(e,r),t===2&&(l=Hi(e),l!==0&&(r=l,t=wa(e,l))),t===1))throw n=Mr,on(e,0),Ot(e,r),Se(e,G()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:en(e,ye,st);break;case 3:if(Ot(e,r),(r&130023424)===r&&(t=rs+500-G(),10<t)){if(Wo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ea(en.bind(null,e,ye,st),t);break}en(e,ye,st);break;case 4:if(Ot(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-We(r);l=1<<i,i=t[i],i>o&&(o=i),r&=~l}if(r=o,r=G()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*nm(r/1960))-r,10<r){e.timeoutHandle=ea(en.bind(null,e,ye,st),r);break}en(e,ye,st);break;case 5:en(e,ye,st);break;default:throw Error(_(329))}}}return Se(e,G()),e.callbackNode===n?jd.bind(null,e):null}function wa(e,t){var n=Sr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=ul(e,t),e!==2&&(t=ye,ye=n,t!==null&&Sa(t)),e}function Sa(e){ye===null?ye=e:ye.push.apply(ye,e)}function rm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],l=o.getSnapshot;o=o.value;try{if(!qe(l(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ot(e,t){for(t&=~ns,t&=~wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),r=1<<n;e[n]=-1,t&=~r}}function Xu(e){if((Q&6)!==0)throw Error(_(327));Mn();var t=Wo(e,0);if((t&1)===0)return Se(e,G()),null;var n=ul(e,t);if(e.tag!==0&&n===2){var r=Hi(e);r!==0&&(t=r,n=wa(e,r))}if(n===1)throw n=Mr,on(e,0),Ot(e,t),Se(e,G()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,en(e,ye,st),Se(e,G()),null}function os(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(Hn=G()+500,hl&&Ht())}}function dn(e){bt!==null&&bt.tag===0&&(Q&6)===0&&Mn();var t=Q;Q|=1;var n=Be.transition,r=z;try{if(Be.transition=null,z=1,e)return e()}finally{z=r,Be.transition=n,Q=t,(Q&6)===0&&Ht()}}function ls(){Pe=bn.current,R(bn)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bg(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Ma(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Xo();break;case 3:Vn(),R(xe),R(ce),Ga();break;case 5:qa(r);break;case 4:Vn();break;case 13:R(j);break;case 19:R(j);break;case 10:Aa(r.type._context);break;case 22:case 23:ls()}n=n.return}if(te=e,X=e=$t(e.current,null),re=Pe=t,Z=0,Mr=null,ns=wl=cn=0,ye=Sr=null,nn!==null){for(t=0;t<nn.length;t++)if(n=nn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,l=n.pending;if(l!==null){var i=l.next;l.next=o,r.next=i}n.pending=r}nn=null}return e}function Ad(e,t){do{var n=X;try{if(ja(),Uo.current=ll,ol){for(var r=A.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ol=!1}if(un=0,ee=K=A=null,xr=!1,Lr=0,ts.current=null,n===null||n.return===null){Z=1,Mr=t,X=null;break}e:{var l=e,i=n.return,a=n,s=t;if(t=re,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var c=s,g=a,f=g.tag;if((g.mode&1)===0&&(f===0||f===11||f===15)){var m=g.alternate;m?(g.updateQueue=m.updateQueue,g.memoizedState=m.memoizedState,g.lanes=m.lanes):(g.updateQueue=null,g.memoizedState=null)}var y=Bu(i);if(y!==null){y.flags&=-257,Du(y,i,a,l,t),y.mode&1&&Lu(l,c,t),t=y,s=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(s),t.updateQueue=w}else x.add(s);break e}else{if((t&1)===0){Lu(l,c,t),is();break e}s=Error(_(426))}}else if($&&a.mode&1){var N=Bu(i);if(N!==null){(N.flags&65536)===0&&(N.flags|=256),Du(N,i,a,l,t),Ra(Wn(s,a));break e}}l=s=Wn(s,a),Z!==4&&(Z=2),Sr===null?Sr=[l]:Sr.push(l),l=i;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var p=Pd(l,s,t);Fu(l,p);break e;case 1:a=s;var u=l.type,d=l.stateNode;if((l.flags&128)===0&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Mt===null||!Mt.has(d)))){l.flags|=65536,t&=-t,l.lanes|=t;var h=Nd(l,a,t);Fu(l,h);break e}}l=l.return}while(l!==null)}Hd(n)}catch(k){t=k,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function Vd(){var e=il.current;return il.current=ll,e===null?ll:e}function is(){(Z===0||Z===3||Z===2)&&(Z=4),te===null||(cn&268435455)===0&&(wl&268435455)===0||Ot(te,re)}function ul(e,t){var n=Q;Q|=2;var r=Vd();(te!==e||re!==t)&&(st=null,on(e,t));do try{om();break}catch(o){Ad(e,o)}while(1);if(ja(),Q=n,il.current=r,X!==null)throw Error(_(261));return te=null,re=0,Z}function om(){for(;X!==null;)Wd(X)}function lm(){for(;X!==null&&!zf();)Wd(X)}function Wd(e){var t=Gd(e.alternate,e,Pe);e.memoizedProps=e.pendingProps,t===null?Hd(e):X=t,ts.current=null}function Hd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Yg(n,t,Pe),n!==null){X=n;return}}else{if(n=Kg(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,X=null;return}}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Z===0&&(Z=5)}function en(e,t,n){var r=z,o=Be.transition;try{Be.transition=null,z=1,im(e,t,n,r)}finally{Be.transition=o,z=r}return null}function im(e,t,n,r){do Mn();while(bt!==null);if((Q&6)!==0)throw Error(_(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(jf(e,l),e===te&&(X=te=null,re=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Qo||(Qo=!0,Jd(Vo,function(){return Mn(),null})),l=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||l){l=Be.transition,Be.transition=null;var i=z;z=1;var a=Q;Q|=4,ts.current=null,em(e,n),Rd(n,e),Tg(Ki),Ho=!!Yi,Ki=Yi=null,e.current=n,tm(n,e,o),bf(),Q=a,z=i,Be.transition=l}else e.current=n;if(Qo&&(Qo=!1,bt=e,sl=o),l=e.pendingLanes,l===0&&(Mt=null),Lf(n.stateNode,r),Se(e,G()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(al)throw al=!1,e=va,va=null,e;return(sl&1)!==0&&e.tag!==0&&Mn(),l=e.pendingLanes,(l&1)!==0?e===xa?kr++:(kr=0,xa=e):kr=0,Ht(),null}function Mn(){if(bt!==null){var e=Ec(sl),t=Be.transition,n=z;try{if(Be.transition=null,z=16>e?16:e,bt===null)var r=!1;else{if(e=bt,bt=null,sl=0,(Q&6)!==0)throw Error(_(331));var o=Q;for(Q|=4,C=e.current;C!==null;){var l=C,i=l.child;if((C.flags&16)!==0){var a=l.deletions;if(a!==null){for(var s=0;s<a.length;s++){var c=a[s];for(C=c;C!==null;){var g=C;switch(g.tag){case 0:case 11:case 15:wr(8,g,l)}var f=g.child;if(f!==null)f.return=g,C=f;else for(;C!==null;){g=C;var m=g.sibling,y=g.return;if(Bd(g),g===c){C=null;break}if(m!==null){m.return=y,C=m;break}C=y}}}var x=l.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var N=w.sibling;w.sibling=null,w=N}while(w!==null)}}C=l}}if((l.subtreeFlags&2064)!==0&&i!==null)i.return=l,C=i;else e:for(;C!==null;){if(l=C,(l.flags&2048)!==0)switch(l.tag){case 0:case 11:case 15:wr(9,l,l.return)}var p=l.sibling;if(p!==null){p.return=l.return,C=p;break e}C=l.return}}var u=e.current;for(C=u;C!==null;){i=C;var d=i.child;if((i.subtreeFlags&2064)!==0&&d!==null)d.return=i,C=d;else e:for(i=u;C!==null;){if(a=C,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:xl(9,a)}}catch(k){H(a,a.return,k)}if(a===i){C=null;break e}var h=a.sibling;if(h!==null){h.return=a.return,C=h;break e}C=a.return}}if(Q=o,Ht(),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(dl,e)}catch{}r=!0}return r}finally{z=n,Be.transition=t}}return!1}function Yu(e,t,n){t=Wn(n,t),t=Pd(e,t,1),e=Dt(e,t,1),t=ge(),e!==null&&(Rr(e,1,t),Se(e,t))}function H(e,t,n){if(e.tag===3)Yu(e,e,n);else for(;t!==null;){if(t.tag===3){Yu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Mt===null||!Mt.has(r))){e=Wn(n,e),e=Nd(t,e,1),t=Dt(t,e,1),e=ge(),t!==null&&(Rr(t,1,e),Se(t,e));break}}t=t.return}}function am(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ge(),e.pingedLanes|=e.suspendedLanes&n,te===e&&(re&n)===n&&(Z===4||Z===3&&(re&130023424)===re&&500>G()-rs?on(e,0):ns|=n),Se(e,t)}function qd(e,t){t===0&&((e.mode&1)===0?t=1:(t=ho,ho<<=1,(ho&130023424)===0&&(ho=4194304)));var n=ge();e=mt(e,t),e!==null&&(Rr(e,t,n),Se(e,n))}function sm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qd(e,n)}function um(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),qd(e,n)}var Gd;Gd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||xe.current)ve=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return ve=!1,Xg(e,t,n);ve=(e.flags&131072)!==0}else ve=!1,$&&(t.flags&1048576)!==0&&Yc(t,Zo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bo(e,t),e=t.pendingProps;var o=$n(t,ce.current);Dn(t,n),o=Xa(null,t,r,e,o,n);var l=Ya();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,we(r)?(l=!0,Yo(t)):l=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Wa(t),o.updater=yl,t.stateNode=o,o._reactInternals=t,aa(t,r,e,n),t=ca(null,t,r,!0,l,n)):(t.tag=0,$&&l&&Da(t),fe(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=dm(r),e=je(r,e),o){case 0:t=ua(null,t,r,e,n);break e;case 1:t=$u(null,t,r,e,n);break e;case 11:t=Mu(null,t,r,e,n);break e;case 14:t=Ru(null,t,r,je(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:je(r,o),ua(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:je(r,o),$u(e,t,r,o,n);case 3:e:{if(Od(t),e===null)throw Error(_(387));r=t.pendingProps,l=t.memoizedState,o=l.element,td(e,t),nl(t,r,null,n);var i=t.memoizedState;if(r=i.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){o=Wn(Error(_(423)),t),t=ju(e,t,r,n,o);break e}else if(r!==o){o=Wn(Error(_(424)),t),t=ju(e,t,r,n,o);break e}else for(Ne=Bt(t.stateNode.containerInfo.firstChild),Te=t,$=!0,Ve=null,n=ld(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jn(),r===o){t=ht(e,t,n);break e}fe(e,t,r,n)}t=t.child}return t;case 5:return id(t),e===null&&oa(t),r=t.type,o=t.pendingProps,l=e!==null?e.memoizedProps:null,i=o.children,Zi(r,o)?i=null:l!==null&&Zi(r,l)&&(t.flags|=32),Qd(e,t),fe(e,t,i,n),t.child;case 6:return e===null&&oa(t),null;case 13:return zd(e,t,n);case 4:return Ha(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=An(t,null,r,n):fe(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:je(r,o),Mu(e,t,r,o,n);case 7:return fe(e,t,t.pendingProps,n),t.child;case 8:return fe(e,t,t.pendingProps.children,n),t.child;case 12:return fe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,l=t.memoizedProps,i=o.value,B(el,r._currentValue),r._currentValue=i,l!==null)if(qe(l.value,i)){if(l.children===o.children&&!xe.current){t=ht(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var a=l.dependencies;if(a!==null){i=l.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(l.tag===1){s=pt(-1,n&-n),s.tag=2;var c=l.updateQueue;if(c!==null){c=c.shared;var g=c.pending;g===null?s.next=s:(s.next=g.next,g.next=s),c.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),la(l.return,n,t),a.lanes|=n;break}s=s.next}}else if(l.tag===10)i=l.type===t.type?null:l.child;else if(l.tag===18){if(i=l.return,i===null)throw Error(_(341));i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),la(i,n,t),i=l.sibling}else i=l.child;if(i!==null)i.return=l;else for(i=l;i!==null;){if(i===t){i=null;break}if(l=i.sibling,l!==null){l.return=i.return,i=l;break}i=i.return}l=i}fe(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Dn(t,n),o=De(o),r=r(o),t.flags|=1,fe(e,t,r,n),t.child;case 14:return r=t.type,o=je(r,t.pendingProps),o=je(r.type,o),Ru(e,t,r,o,n);case 15:return Td(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:je(r,o),Bo(e,t),t.tag=1,we(r)?(e=!0,Yo(t)):e=!1,Dn(t,n),rd(t,r,o),aa(t,r,o,n),ca(null,t,r,!0,e,n);case 19:return bd(e,t,n);case 22:return Fd(e,t,n)}throw Error(_(156,t.tag))};function Jd(e,t){return Sc(e,t)}function cm(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,r){return new cm(e,t,n,r)}function as(e){return e=e.prototype,!(!e||!e.isReactComponent)}function dm(e){if(typeof e=="function")return as(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pa)return 11;if(e===Na)return 14}return 2}function $t(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ro(e,t,n,r,o,l){var i=2;if(r=e,typeof e=="function")as(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case _n:return ln(n.children,o,l,t);case Ea:i=8,o|=8;break;case Oi:return e=Le(12,n,t,o|2),e.elementType=Oi,e.lanes=l,e;case zi:return e=Le(13,n,t,o),e.elementType=zi,e.lanes=l,e;case bi:return e=Le(19,n,t,o),e.elementType=bi,e.lanes=l,e;case oc:return Sl(n,o,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nc:i=10;break e;case rc:i=9;break e;case Pa:i=11;break e;case Na:i=14;break e;case Tt:i=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Le(i,n,t,o),t.elementType=e,t.type=r,t.lanes=l,t}function ln(e,t,n,r){return e=Le(7,e,r,t),e.lanes=n,e}function Sl(e,t,n,r){return e=Le(22,e,r,t),e.elementType=oc,e.lanes=n,e.stateNode={isHidden:!1},e}function Ti(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function Fi(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pm(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pi(0),this.expirationTimes=pi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pi(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ss(e,t,n,r,o,l,i,a,s){return e=new pm(e,t,n,a,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Le(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wa(l),e}function fm(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xd(e){if(!e)return At;e=e._reactInternals;e:{if(fn(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(we(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(we(n))return Jc(e,n,t)}return t}function Yd(e,t,n,r,o,l,i,a,s){return e=ss(n,r,!0,e,o,l,i,a,s),e.context=Xd(null),n=e.current,r=ge(),o=Rt(n),l=pt(r,o),l.callback=t??null,Dt(n,l,o),e.current.lanes=o,Rr(e,o,r),Se(e,r),e}function kl(e,t,n,r){var o=t.current,l=ge(),i=Rt(o);return n=Xd(n),t.context===null?t.context=n:t.pendingContext=n,t=pt(l,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Dt(o,t,i),e!==null&&(He(e,o,i,l),Io(e,o,i)),i}function cl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ku(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function us(e,t){Ku(e,t),(e=e.alternate)&&Ku(e,t)}function gm(){return null}var Kd=typeof reportError=="function"?reportError:function(e){console.error(e)};function cs(e){this._internalRoot=e}_l.prototype.render=cs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));kl(e,t,null,null)};_l.prototype.unmount=cs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dn(function(){kl(null,e,null,null)}),t[gt]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Qt.length&&t!==0&&t<Qt[n].priority;n++);Qt.splice(n,0,e),n===0&&Qc(e)}};function ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Cl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zu(){}function mm(e,t,n,r,o){if(o){if(typeof r=="function"){var l=r;r=function(){var c=cl(i);l.call(c)}}var i=Yd(t,r,e,0,null,!1,!1,"",Zu);return e._reactRootContainer=i,e[gt]=i.current,Or(e.nodeType===8?e.parentNode:e),dn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var c=cl(s);a.call(c)}}var s=ss(e,0,!1,null,null,!1,!1,"",Zu);return e._reactRootContainer=s,e[gt]=s.current,Or(e.nodeType===8?e.parentNode:e),dn(function(){kl(t,s,n,r)}),s}function El(e,t,n,r,o){var l=n._reactRootContainer;if(l){var i=l;if(typeof o=="function"){var a=o;o=function(){var s=cl(i);a.call(s)}}kl(t,i,e,o)}else i=mm(n,t,e,o,r);return cl(i)}Pc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=pr(t.pendingLanes);n!==0&&(Qa(t,n|1),Se(t,G()),(Q&6)===0&&(Hn=G()+500,Ht()))}break;case 13:dn(function(){var r=mt(e,1);if(r!==null){var o=ge();He(r,e,1,o)}}),us(e,1)}};Oa=function(e){if(e.tag===13){var t=mt(e,134217728);if(t!==null){var n=ge();He(t,e,134217728,n)}us(e,134217728)}};Nc=function(e){if(e.tag===13){var t=Rt(e),n=mt(e,t);if(n!==null){var r=ge();He(n,e,t,r)}us(e,t)}};Tc=function(){return z};Fc=function(e,t){var n=z;try{return z=e,t()}finally{z=n}};Ai=function(e,t,n){switch(t){case"input":if(Li(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=ml(r);if(!o)throw Error(_(90));ic(r),Li(r,o)}}}break;case"textarea":sc(e,n);break;case"select":t=n.value,t!=null&&In(e,!!n.multiple,t,!1)}};mc=os;hc=dn;var hm={usingClientEntryPoint:!1,Events:[jr,Nn,ml,fc,gc,os]},sr={findFiberByHostInstance:tn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},ym={bundleType:sr.bundleType,version:sr.version,rendererPackageName:sr.rendererPackageName,rendererConfig:sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xc(e),e===null?null:e.stateNode},findFiberByHostInstance:sr.findFiberByHostInstance||gm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(ur=__REACT_DEVTOOLS_GLOBAL_HOOK__,!ur.isDisabled&&ur.supportsFiber))try{dl=ur.inject(ym),nt=ur}catch{}var ur;Oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hm;Oe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ds(t))throw Error(_(200));return fm(e,t,null,n)};Oe.createRoot=function(e,t){if(!ds(e))throw Error(_(299));var n=!1,r="",o=Kd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ss(e,1,!1,null,null,n,!1,r,o),e[gt]=t.current,Or(e.nodeType===8?e.parentNode:e),new cs(t)};Oe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=xc(t),e=e===null?null:e.stateNode,e};Oe.flushSync=function(e){return dn(e)};Oe.hydrate=function(e,t,n){if(!Cl(t))throw Error(_(200));return El(null,e,t,!0,n)};Oe.hydrateRoot=function(e,t,n){if(!ds(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,o=!1,l="",i=Kd;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Yd(t,null,e,1,n??null,o,!1,l,i),e[gt]=t.current,Or(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new _l(t)};Oe.render=function(e,t,n){if(!Cl(t))throw Error(_(200));return El(null,e,t,!1,n)};Oe.unmountComponentAtNode=function(e){if(!Cl(e))throw Error(_(40));return e._reactRootContainer?(dn(function(){El(null,null,e,!1,function(){e._reactRootContainer=null,e[gt]=null})}),!0):!1};Oe.unstable_batchedUpdates=os;Oe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Cl(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return El(e,t,n,!1,r)};Oe.version="18.2.0-next-9e3b772b8-20220608"});var np=ze((gh,tp)=>{"use strict";function ep(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ep)}catch(e){console.error(e)}}ep(),tp.exports=Zd()});var op=ze(ps=>{"use strict";var rp=np();ps.createRoot=rp.createRoot,ps.hydrateRoot=rp.hydrateRoot;var mh});var wp=ze((Lh,xp)=>{"use strict";var Pm="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";xp.exports=Pm});var Cp=ze((Bh,_p)=>{"use strict";var Nm=wp();function Sp(){}function kp(){}kp.resetWarningCache=Sp;_p.exports=function(){function e(r,o,l,i,a,s){if(s!==Nm){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:kp,resetWarningCache:Sp};return n.PropTypes=n,n}});var J=ze((Rh,Ep)=>{Ep.exports=Cp()();var Dh,Mh});var Vp=ze(Hl=>{"use strict";var th=U(),nh=Symbol.for("react.element"),rh=Symbol.for("react.fragment"),oh=Object.prototype.hasOwnProperty,lh=th.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ih={key:!0,ref:!0,__self:!0,__source:!0};function Ap(e,t,n){var r,o={},l=null,i=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)oh.call(t,r)&&!ih.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:nh,type:e,key:l,ref:i,props:o,_owner:lh.current}}Hl.Fragment=rh;Hl.jsx=Ap;Hl.jsxs=Ap});var eo=ze((hy,Wp)=>{"use strict";Wp.exports=Vp()});var qp=P(op());function lp(e,t,n){return e?(e.length>t&&(e=e.substring(0,t+1),e=e.substring(0,Math.min(e.length,e.lastIndexOf(" "))),e=e+n),e):""}function ip(e){return e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase())}function ap(e){return new Intl.NumberFormat(void 0,{style:"currency",currency:"USD"}).format(e)}var fs=1033,vm=1019;function ot(e){let t={};return e.dblProductSalePrice&&e.dblProductPrice&&e.dblProductPrice!=e.dblProductSalePrice?(t.salePercent=Math.round((1-e.dblProductSalePrice/e.dblProductPrice)*100),t.saleClass="snapgadget-onsale",t.onSale=!0):(t.salePercent=0,t.saleClass="",t.onSale=!1),t.price=e.dblProductPrice,t}function Pl(e){return lp(e.txtAbbreviatedDescription||e.txtLongDescription,350," ...")}function lt(e,t=0,n=0){let r=e.strThumbnailImage||e.strMediumImage||e.strLargeImage||"//www.snapsearcher.com/images/no_image.gif";return(t>100||n>100)&&(r=e.strMediumImage||e.strLargeImage||"//www.snapsearcher.com/images/no_image.gif"),r=r.replace("http:",""),r}function qt(e,t,n="",r=vm){let o=`http://www.avantlink.com/click.php?tt=app&ti=${r}&pw=${t}&mi=${e.lngMerchantId}&df=${e.lngDatafeedId}&pri=${e.lngProductId}`;return n&&n.length>0&&(o+=`&ctc=${n}`),o}function sp(e){var t=e.dblProductPrice;e.onSale&&(t=e.dblProductSalePrice);let n=parseFloat(e?.strActionCommission?.replace("%",""));return isNaN(n)?"0.00":ap(parseFloat(t)*n*.01)}var xm={"/assets/snapbase_blue.css":"#2C3E50","/assets/snapbase_water.css":"#3498DB","/assets/snapbase_turquoise.css":"#1ABC9C","/assets/snapbase_emerald.css":"#2ecc71","/assets/snapbase_amethyst.css":"#9b59b6","/assets/snapbase_alizarin.css":"#e74c3c","/assets/snapbase_red.css":"#c2070a","/assets/snapbase_carrot.css":"#E67E22","/assets/snapbase_orange.css":"#F39C12","/assets/snapbase_silver.css":"#BDC3C7","/assets/snapbase_brown.css":"#443B31"};function up(e){return xm[e]}function cp(e){let t=String(e).replace(/[^0-9a-f]/gi,"");return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),t}function wm(e){let t=cp(e),n=parseInt(t.substr(0,2),16),r=parseInt(t.substr(2,2),16),o=parseInt(t.substr(4,2),16),l=1;return t[6]&&(l=parseInt(t.split(",")[3],16)),{r:n,g:r,b:o,a:l}}function Sm(e){let{r:t,g:n,b:r}=wm(e);return(Math.round(t*299)+Math.round(n*587)+Math.round(r*114))/1e3}function km(e,t=0){let n=cp(e),r="#",o,l;for(l=0;l<3;l+=1)o=parseInt(n.substr(l*2,2),16),o=Math.round(Math.min(Math.max(0,o+o*t),255)).toString(16),r+=`00${o}`.substr(o.length);return r}function _m(e){return Sm(e)>=140?"#000000":"#FFFFFF"}function gs(e){return{lightColor:km(e,.4),highLightColor:e,buttonColor:_m(e)}}var Nl={};try{(function(e,t){if(new e("q=%2B").get("q")!==t||new e({q:t}).get("q")!==t||new e([["q",t]]).get("q")!==t||new e(`q=
`).toString()!=="q=%0A"||new e({q:" &"}).toString()!=="q=+%26"||new e({q:"%zx"}).toString()!=="q=%25zx")throw e;Nl.URLSearchParams=e})(URLSearchParams,"+")}catch{(function(t,n,r){"use strict";var o=t.create,l=t.defineProperty,i=/[!'\(\)~]|%20|%00/g,a=/%(?![0-9a-fA-F]{2})/g,s=/\+/g,c={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"},g={append:function(u,d){x(this._ungap,u,d)},delete:function(u){delete this._ungap[u]},get:function(u){return this.has(u)?this._ungap[u][0]:null},getAll:function(u){return this.has(u)?this._ungap[u].slice(0):[]},has:function(u){return u in this._ungap},set:function(u,d){this._ungap[u]=[n(d)]},forEach:function(u,d){var h=this;for(var k in h._ungap)h._ungap[k].forEach(v,k);function v(S){u.call(d,S,n(k),h)}},toJSON:function(){return{}},toString:function(){var u=[];for(var d in this._ungap)for(var h=N(d),k=0,v=this._ungap[d];k<v.length;k++)u.push(h+"="+N(v[k]));return u.join("&")}};for(var f in g)l(m.prototype,f,{configurable:!0,writable:!0,value:g[f]});Nl.URLSearchParams=m;function m(u){var d=o(null);switch(l(this,"_ungap",{value:d}),!0){case!u:break;case typeof u=="string":u.charAt(0)==="?"&&(u=u.slice(1));for(var h=u.split("&"),k=0,v=h.length;k<v;k++){var S=h[k],E=S.indexOf("=");-1<E?x(d,w(S.slice(0,E)),w(S.slice(E+1))):S.length&&x(d,w(S),"")}break;case r(u):for(var k=0,v=u.length;k<v;k++){var S=u[k];x(d,S[0],S[1])}break;case"forEach"in u:u.forEach(y,d);break;default:for(var q in u)x(d,q,u[q])}}function y(u,d){x(this,d,u)}function x(u,d,h){var k=r(h)?h.join(","):h;d in u?u[d].push(k):u[d]=[k]}function w(u){return decodeURIComponent(u.replace(a,"%25").replace(s," "))}function N(u){return encodeURIComponent(u).replace(i,p)}function p(u){return c[u]}})(Object,String,Array.isArray)}(function(e){var t=!1;try{t=!!Symbol.iterator}catch{}"forEach"in e||(e.forEach=function(o,l){var i=this,a=Object.create(null);this.toString().replace(/=[\s\S]*?(?:&|$)/g,"=").split("=").forEach(function(s){!s.length||s in a||(a[s]=i.getAll(s)).forEach(function(c){o.call(l,c,s,i)})})}),"keys"in e||(e.keys=function(){return n(this,function(o,l){this.push(l)})}),"values"in e||(e.values=function(){return n(this,function(o,l){this.push(o)})}),"entries"in e||(e.entries=function(){return n(this,function(o,l){this.push([l,o])})}),t&&!(Symbol.iterator in e)&&(e[Symbol.iterator]=e.entries),"sort"in e||(e.sort=function(){for(var o=this.entries(),l=o.next(),i=l.done,a=[],s=Object.create(null),c,g,f;!i;)f=l.value,g=f[0],a.push(g),g in s||(s[g]=[]),s[g].push(f[1]),l=o.next(),i=l.done;for(a.sort(),c=0;c<a.length;c++)this.delete(a[c]);for(c=0;c<a.length;c++)g=a[c],this.append(g,s[g].shift())});function n(r,o){var l=[];return r.forEach(o,l),t?l[Symbol.iterator]():{next:function(){var i=l.shift();return{done:i===void 0,value:i}}}}(function(r){var o=r.defineProperty,l=r.getOwnPropertyDescriptor,i=function(f){function m(w,N){e.append.call(this,w,N),w=this.toString(),f.set.call(this._usp,w?"?"+w:"")}function y(w){e.delete.call(this,w),w=this.toString(),f.set.call(this._usp,w?"?"+w:"")}function x(w,N){e.set.call(this,w,N),w=this.toString(),f.set.call(this._usp,w?"?"+w:"")}return function(w,N){return w.append=m,w.delete=y,w.set=x,o(w,"_usp",{configurable:!0,writable:!0,value:N})}},a=function(f){return function(m,y){return o(m,"_searchParams",{configurable:!0,writable:!0,value:f(y,m)}),y}},s=function(f){var m=f.append;f.append=e.append,URLSearchParams.call(f,f._usp.search.slice(1)),f.append=m},c=function(f,m){if(!(f instanceof m))throw new TypeError("'searchParams' accessed on an object that does not implement interface "+m.name)},g=function(f){var m=f.prototype,y=l(m,"searchParams"),x=l(m,"href"),w=l(m,"search"),N;!y&&w&&w.set&&(N=a(i(w)),r.defineProperties(m,{href:{get:function(){return x.get.call(this)},set:function(p){var u=this._searchParams;x.set.call(this,p),u&&s(u)}},search:{get:function(){return w.get.call(this)},set:function(p){var u=this._searchParams;w.set.call(this,p),u&&s(u)}},searchParams:{get:function(){return c(this,f),this._searchParams||N(this,new URLSearchParams(this.search.slice(1)))},set:function(p){c(this,f),N(this,p)}}}))};try{g(HTMLAnchorElement),/^function|object$/.test(typeof URL)&&URL.prototype&&g(URL)}catch{}})(Object)})(Nl.URLSearchParams.prototype,Object);var dp=Nl.URLSearchParams;function pp(e=location.search){return new dp(e)}function fp(e,t){return Math.floor(Math.random()*(t-e+1))+e}var gp="Match+Score";var mp="#2C3E50",ms=gs(mp),hp=160,Tl=110,Jn=14;var hs={brand:"",category:"",customCategory:"",subCategory:"",merchantIds:[],onSaleOnly:!1,onSaleLevel:null,minPrice:null,maxPrice:null,department:"",merchantCategoryIds:[]},Fl={query:null,page:0,sortOrder:gp,resultCount:20,avantlinkAffiliateId:"",avantlinkWebsiteId:"",...hs},Cm={element:"snapsearcher-container",resultType:"flex",darkColor:mp,lightColor:ms.lightColor,highLightColor:ms.highLightColor,buttonColor:ms.buttonColor,saleTagColor:"#c0392b",borderColor:"#95A5A6",textColor:"#7F8C8D",backgroundColor:"",showMoreResults:!0,showMoreResultsText:"Load More",placeholder:"",openNewWindow:!0};function yp(e){let t=Cm;t.darkColor=up(e.css)||e.color||t.darkColor;let n=gs(t.darkColor);return t.lightColor=n.lightColor,t.highLightColor=n.highLightColor,t.buttonColor=n.buttonColor,Object.keys(e).forEach(r=>{t[ip(r)]=e[r]}),t.useQueryParamName&&(t.queryParam=t.useQueryParamName),t.useQuery&&(t.defaultQuery=t.useQuery),t.avantlinkAffiliateId=t.avantlinkAffiliateId||t.affiliateId||t.affiliate_id,t.avantlinkWebsiteId=t.avantlinkWebsiteId||t.websiteId||t.website_id,t}function Em(e){let t="",n=pp();if(e.defaultQuery){let r=e.defaultQuery.split("|");t=r[fp(0,r.length-1)]}else if(e.queryParam&&n.get(e.queryParam)&&n.get(e.queryParam).length>0)t=n.get(e.queryParam);else if(e.useSelector){let r=[],o=document.querySelectorAll(e.useSelector);for(let l=0;l<o.length;l+=1)r.push(o[l].textContent.trim());t=r.join(" AND ")}else if(e.queryType==="useUrl"){let o=window.location.pathname.split(".")[0].split("/").filter(l=>!!l);t=o[o.length-1]||"",t=t.replace(/-/g," ").replace(/_/g," ")}return t}function vp(e){let t={...Fl};return e.searchUrl&&(t.searchUrl=e.searchUrl),e.searchHeaders&&(t.searchHeaders=e.searchHeaders),(e.page||e.page===0)&&(t.page=e.page),e.query?t.query=e.query:t.query=Em(e),e.sortOrder?t.sortOrder=e.sortOrder:e.searchResultsSortOrder?t.sortOrder=e.searchResultsSortOrder:e.sortHighestCommissionFirst&&(t.sortHighestCommissionFirst=e.sortHighestCommissionFirst),e.merchantIds&&e.merchantIds.length>0&&(t.merchantIds=e.merchantIds),e.merchantCategoryIds&&e.merchantCategoryIds.length>0&&(t.merchantCategoryIds=e.merchantCategoryIds),e.category&&(t.category=e.category),e.subCategory&&(t.subCategory=e.subCategory),e.brand&&(t.brand=e.brand),e.department&&(t.department=e.department),e.resultCount&&(t.resultCount=parseInt(e.resultCount,10)),t.avantlinkAffiliateId=e.avantlinkAffiliateId,t.avantlinkWebsiteId=e.avantlinkWebsiteId,e.onSaleOnly?t.onSaleOnly=e.onSaleOnly:e.searchOnSaleOnly&&(t.onSaleOnly=e.searchOnSaleOnly),e.onSaleLevel?t.onSaleLevel=e.onSaleLevel:e.searchOnSaleLevel&&(t.onSaleLevel=e.searchOnSaleLevel),t.minPrice=e.searchPriceMinimum||e.minPrice||0,t.maxPrice=e.searchPriceMaximum||e.maxPrice||1e4,t}var b=P(J()),F=P(U());var Tm={},Pp=(0,F.createContext)(Tm),Np=(0,F.createContext)(void 0);function Fm(e,t){switch(t.type){case"clearSearchState":return{...e,...Fl};case"setQuery":return{...e,page:0,query:t.query};case"setPage":return{...e,page:t.page};case"setSortOrder":return{...e,sortOrder:t.sortOrder};case"setBrand":return{...e,brand:t.brand};case"setCategory":return{...e,category:t.category,customCategory:""};case"setCustomCategory":return{...e,customCategory:t.customCategory,category:""};case"setSubCategory":return{...e,subCategory:t.subCategory};case"setMerchantIds":return{...e,merchantIds:t.merchantIds};case"setResultCount":return{...e,resultCount:t.resultCount};case"setOnSaleOnly":return{...e,onSaleOnly:t.onSaleOnly};case"setOnSaleLevel":return{...e,onSaleLevel:t.onSaleLevel};case"setMinPrice":return{...e,minPrice:t.minPrice};case"setMaxPrice":return{...e,maxPrice:t.maxPrice};case"setDepartment":return{...e,department:t.department};case"setMerchantCategoryIds":return{...e,merchantCategoryIds:t.merchantCategoryIds};case"setAvantlinkAffiliateId":return{...e,avantlinkAffiliateId:t.avantlinkAffiliateId};case"setAvantlinkWebsiteId":return{...e,avantlinkWebsiteId:t.avantlinkWebsiteId};case"setSearchUrl":return{...e,searchUrl:t.searchUrl};case"setSearchHeaders":return{...e,searchHeaders:t.searchHeaders};case"clearFilters":return{...e,...hs};default:throw new Error("Invalid type")}}function Ql(e){let{children:t,settings:n}=e,[r,o]=(0,F.useReducer)(Fm,{...Fl,...n});return F.default.createElement(Pp.Provider,{value:r},F.default.createElement(Np.Provider,{value:o},t))}Ql.propTypes={children:b.default.node.isRequired,settings:b.default.shape({query:b.default.string,page:b.default.number,sortOrder:b.default.string,brand:b.default.string,category:b.default.string,subCategory:b.default.string,merchantIds:b.default.arrayOf(b.default.number),onSaleOnly:b.default.oneOfType([b.default.bool,b.default.number]),onSaleLevel:b.default.number,minPrice:b.default.number,maxPrice:b.default.number,department:b.default.string,merchantCategoryIds:b.default.arrayOf(b.default.number),avantlinkAffiliateId:b.default.oneOfType([b.default.string,b.default.number]),avantlinkWebsiteId:b.default.oneOfType([b.default.string,b.default.number]),searchUrl:b.default.string,searchHeaders:b.default.shape({})})};Ql.defaultProps={settings:{}};function Tp(){return(0,F.useContext)(Pp)}function Fp(){let e=(0,F.useContext)(Np);if(e===void 0)throw new Error("useSearchDispatch must be used within a SearchContextProvider");let t=(0,F.useCallback)(v=>{e({type:"setQuery",query:v})},[e]),n=(0,F.useCallback)(v=>{e({type:"setPage",page:v})},[e]),r=(0,F.useCallback)(v=>{e({type:"setSortOrder",sortOrder:v})},[e]),o=(0,F.useCallback)(v=>{e({type:"setBrand",brand:v})},[e]),l=(0,F.useCallback)(v=>{e({type:"setCategory",category:v})},[e]),i=(0,F.useCallback)(v=>{e({type:"setCustomCategory",customCategory:v})},[e]),a=(0,F.useCallback)(v=>{e({type:"setSubCategory",subCategory:v})},[e]),s=(0,F.useCallback)(v=>{e({type:"setMerchantIds",merchantIds:v})},[e]),c=(0,F.useCallback)(()=>{e({type:"clearSearchState"})},[e]),g=(0,F.useCallback)(v=>{e({type:"setResultCount",resultCount:parseInt(v,10)})},[e]),f=(0,F.useCallback)(v=>{e({type:"setOnSaleOnly",onSaleOnly:v})},[e]),m=(0,F.useCallback)(v=>{e({type:"setOnSaleLevel",onSaleLevel:v})},[e]),y=(0,F.useCallback)(v=>{e({type:"setMinPrice",minPrice:v})},[e]),x=(0,F.useCallback)(v=>{e({type:"setMaxPrice",maxPrice:v})},[e]),w=(0,F.useCallback)(v=>{e({type:"setDepartment",department:v})},[e]),N=(0,F.useCallback)(v=>{e({type:"setMerchantCategoryIds",merchantCategoryIds:v})},[e]),p=(0,F.useCallback)(v=>{e({type:"setAvantlinkAffiliateId",avantlinkAffiliateId:v})},[e]),u=(0,F.useCallback)(v=>{e({type:"setAvantlinkWebsiteId",avantlinkWebsiteId:v})},[e]),d=(0,F.useCallback)(v=>{e({type:"setSearchUrl",searchUrl:v})},[e]),h=(0,F.useCallback)(v=>{e({type:"setSearchHeaders",searchHeaders:v})},[e]),k=(0,F.useCallback)(()=>{e({type:"clearFilters"})},[e]);return(0,F.useMemo)(()=>({setQuery:t,setPage:n,setSortOrder:r,setBrand:o,setCategory:l,setCustomCategory:i,setSubCategory:a,setMerchantIds:s,clearSearchState:c,setResultCount:g,setOnSaleOnly:f,setOnSaleLevel:m,setMinPrice:y,setMaxPrice:x,setDepartment:w,setMerchantCategoryIds:N,setAvantlinkAffiliateId:p,setAvantlinkWebsiteId:u,setSearchUrl:d,setSearchHeaders:h,clearFilters:k}),[e])}function Qm(){return!document.attachEvent||typeof document.attachEvent>"u"?"not-ie":"ie"}function ys(e){let t=["complete","loaded","interactive"];t.includes(document.readyState)&&document.body?e():Qm()==="not-ie"?document.addEventListener("DOMContentLoaded",()=>e()):document.attachEvent("onreadystatechange",()=>{t.includes(document.readyState)&&e()})}var Ol="SnapDealist",Wh=`${Ol} is a free tool for AvantLink affiliates that makes adding product deals to your website or blog simple.`;var Qp=`
/* Flat UI */
/* Settings for input range control */
.snapbase-widget {
  azimuth: center !important;
  background-attachment: scroll !important;
  background-image: none !important;
  background-position: 0% 0% !important;
  background-repeat: repeat !important;
  border-collapse: separate !important;
  border-spacing: 0 !important;
  bottom: auto !important;
  caption-side: top !important;
  clear: none !important;
  clip: auto !important;
  content: normal !important;
  counter-increment: none !important;
  counter-reset: none !important;
  cursor: auto !important;
  direction: ltr !important;
  elevation: level !important;
  empty-cells: show !important;
  font-feature-settings: normal !important;
  font-variant: normal !important;
  font-weight: normal !important;
  letter-spacing: normal !important;
  line-height: normal !important;
  list-style-image: none !important;
  list-style-position: outside !important;
  list-style-type: disc !important;
  max-width: none !important;
  min-height: 0 !important;
  min-width: 0 !important;
  orphans: 2 !important;
  outline-color: invert !important;
  outline-style: none !important;
  outline-width: medium !important;
  overflow: auto !important;
  page-break-after: auto !important;
  page-break-before: auto !important;
  page-break-inside: auto !important;
  table-layout: auto !important;
  text-align: left !important;
  text-decoration: none !important;
  text-indent: 0 !important;
  text-transform: none !important;
  unicode-bidi: normal !important;
  vertical-align: baseline !important;
  visibility: visible !important;
  white-space: normal !important;
  widows: 2 !important;
  word-spacing: normal !important;
  display: block !important;
  margin: auto !important;
  padding: 5px !important;
  float: none !important;
  font-style: none !important;
}
.snapbase-widget {
  height: auto;
  max-height: none;
}
.snapbase-widget *,
.snapbase-widget *:before,
.snapbase-widget *:after {
  box-sizing: border-box;
}
.snapbase-widget * {
  azimuth: center;
  background-attachment: scroll;
  background-image: none;
  background-position: 0% 0%;
  background-repeat: repeat;
  border-collapse: separate;
  border-spacing: 0;
  bottom: auto;
  caption-side: top;
  clear: none;
  clip: auto;
  color: #0f214a;
  content: normal;
  counter-increment: none;
  counter-reset: none;
  cursor: auto;
  direction: ltr;
  elevation: level;
  empty-cells: show;
  font-family: "Lucida Grande", Tahoma, Arial, Verdana, sans-serif;
  font-feature-settings: normal;
  font-variant: normal;
  font-weight: normal;
  height: auto;
  left: auto;
  letter-spacing: normal;
  line-height: normal;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: disc;
  max-height: none;
  max-width: none;
  min-height: 0;
  min-width: 0;
  orphans: 2;
  outline-color: invert;
  outline-style: none;
  outline-width: medium;
  overflow: visible;
  page-break-after: auto;
  page-break-before: auto;
  page-break-inside: auto;
  table-layout: auto;
  text-decoration: none;
  text-indent: 0;
  text-transform: none;
  top: auto;
  unicode-bidi: normal;
  vertical-align: baseline;
  visibility: visible;
  white-space: normal;
  widows: 2;
  width: auto;
  word-spacing: normal;
  margin: 0px;
  padding: 0px;
  font-size: 1em;
  float: none;
  border: none;
  font-style: none;
  background: transparent;
  text-align: left;
}
.snapbase-widget .snapgadget_clearfix {
  clear: both;
}
/*
NOTE: Includestyles from external libraries in includes.css
*/
/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9vcHQvYnVpbGRob21lL3JlcG8vbm9kZV9tb2R1bGVzL0BzbmFwYnJhaW5zL3NuYXBhcnRzL3NyYy9zdHlsZXMvX2RlZmluZXMuc2NzcyIsIi9vcHQvYnVpbGRob21lL3JlcG8vd2lkZ2V0L3N0eWxlcy9zdHlsZXMuc2NzcyIsIi9vcHQvYnVpbGRob21lL3JlcG8vbm9kZV9tb2R1bGVzL0BzbmFwYnJhaW5zL3NuYXBhcnRzL3NyYy9zdHlsZXMvX3Jlc2V0LnNjc3MiLCIlM0NpbnB1dCUyMGNzcyUyMGpvQnJwSSUzRSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxZQUFBO0FBNEVBLHFDQUFBO0FDM0VBO0VDSEUsMEJBQUE7RUFDQSx3Q0FBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxvQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esd0NBQUE7RUFBQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsaUNBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUVBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQ0dGO0FGckRBO0VDaUJFLFlBQUE7RUFNQSxnQkFBQTtBQzhCRjtBREFFOzs7RUFLRSxzQkFBQTtBQ0VKO0FEQ0U7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxjRnJDYTtFRXNDYixlQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdFRmxDVTtFRW1DViw2QkFBQTtFQUFBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBRUEscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjRnhFUTtFRXlFUixXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0NKO0FGMUhFO0VBQ0UsV0FBQTtBRTRISjtBRnhIQTs7Q0FBQSIsImZpbGUiOiJ0by5jc3MifQ== */`;var Op=`
/*
Include stylesheets from libraries here so that the reset in styles.scss doesn't stomp on them
*/
/* Flat UI */
/* Settings for input range control */
.snapgadget-btn {
  padding: 0.5em 0.4em;
  width: auto;
  border-radius: 5px;
  border: solid 0.05em hsl(0, 0%, 80%);
  text-decoration: none;
  text-align: center;
  font-size: 1em;
  color: #fff;
}
.snapgadget-btn:hover {
  text-decoration: none;
}
.snapgadget-btn-icon {
  border: none;
  background: none;
}
.snapgadget-btn-sm {
  font-size: 0.8em;
  padding: 0.3em 0.4em;
}
.snapgadget-btn-primary {
  background-color: #3667ae;
  border: solid 0.05em #3667ae;
}
.snapgadget-btn-secondary {
  background-color: transparent;
  border: solid 0.05em hsl(0, 0%, 80%);
  color: hsl(0, 0%, 40%);
}
.snapgadget-buttons {
  grid-column: 2/6;
  display: flex;
}
.snapgadget-buttons button {
  grid-column: none;
}
.snapgadget-buttons button:not(:last-child) {
  margin-right: 0.5em;
}
.snapgadget-button-group {
  grid-column: 2/6;
  display: flex;
}
.snapgadget-button-group button {
  grid-column: none;
}
.snapgadget-button-group-column {
  grid-column: 2/6;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.snapgadget-button-group-column button {
  grid-column: none;
}
.snapgadget-button-group-column button:not(:last-child) {
  border-bottom: none;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.snapgadget-button-group-column button:not(:first-child) {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
@media (min-width: 768px) {
  .snapgadget-button-group button:not(:last-child) {
    border-right: none;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .snapgadget-button-group button:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}
@media (max-width: 768px) {
  .snapgadget-form .snapgadget-buttons {
    grid-column: 1/3;
    justify-content: center;
  }
  .snapgadget-form .snapgadget-button-group {
    grid-column: 1/6;
    flex-wrap: wrap;
    flex-direction: column;
  }
  .snapgadget-form .snapgadget-button-group button {
    grid-column: 1/6;
  }
  .snapgadget-form .snapgadget-button-group button:not(:last-child) {
    border-bottom: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  .snapgadget-form .snapgadget-button-group button:not(:first-child) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
.snapgadget-form input.snapgadget-checkbox {
  /* Remove most all native input styles */
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  /* For iOS < 15 */
  background-color: #fff;
  /* Not removed via appearance */
  margin: 0;
  font: inherit;
  color: hsl(0, 0%, 40%);
  width: 1.15em;
  height: 1.15em;
  border: 0.15em solid hsl(0, 0%, 80%);
  border-radius: 0.15em;
  display: grid;
  align-content: center;
  justify-content: center;
  place-content: center;
}
.snapgadget-form input.snapgadget-checkbox::before {
  content: "";
  width: 0.65em;
  height: 0.65em;
  -webkit-clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
          clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  transform: scale(0);
  transform-origin: bottom left;
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em #000;
  /* Windows High Contrast Mode */
  background-color: CanvasText;
}
.snapgadget-form input[type=checkbox]:checked::before {
  transform: scale(1);
}
.snapgadget-form input[type=checkbox]:focus {
  outline: max(2px, 0.15em) solid hsl(0, 0%, 80%);
  outline-offset: max(2px, 0.15em);
}
.snapgadget-form input[type=checkbox]:disabled {
  color: #959495;
  cursor: not-allowed;
}
.snapgadget-form {
  background-color: #fff;
  color: hsl(0, 0%, 40%);
  font-size: 1em;
  font-weight: bold;
  font-family: "Lucida Grande", Tahoma, Arial, Verdana, sans-serif;
  display: grid;
  grid-template-columns: 1fr 1em 1fr 1fr 1fr;
  grid-gap: 0.8em 0.6em;
  grid-auto-flow: row;
  align-items: center;
}
.snapgadget-form label {
  text-align: right;
  grid-column: 1/2;
}
.snapgadget-form select, .snapgadget-form input[type=text], .snapgadget-form textarea {
  padding: 0.5em 0.8em;
  border: 0.05em solid hsl(0, 0%, 80%);
  border-radius: 0.25em;
}
.snapgadget-form input, .snapgadget-form textarea, .snapgadget-form select {
  color: hsl(0, 0%, 60%);
}
.snapgadget-form input, .snapgadget-form output, .snapgadget-form textarea, .snapgadget-form select, .snapgadget-form .snapgadget-form-element {
  font-size: 1em;
  grid-column: 2/6;
  width: auto;
  margin: 0;
}
.snapgadget-form button {
  grid-column: 2/4;
}
.snapgadget-form input[type=checkbox], .snapgadget-form input[type=radio] {
  grid-column: 2/3;
  justify-self: end;
  margin: 0;
}
.snapgadget-form label, .snapgadget-form input[type=checkbox] + label, .snapgadget-form input[type=radio] + label {
  width: auto;
  padding: 0;
  margin: 0;
}
.snapgadget-form input[type=checkbox] + label, .snapgadget-form input[type=radio] + label {
  grid-column: 3/6;
  text-align: left;
}
.snapgadget-form textarea + label {
  align-self: start;
}
.snapgadget-form .snapgadget-sub {
  grid-column: 5/6;
}
.snapgadget-form .snapgadget-sub-label {
  grid-column: 4/5;
}
.snapgadget-form .snapgadget-form-row, .snapgadget-form .snapgadget-form-row-flex {
  grid-column: 2/6;
}
.snapgadget-form .snapgadget-form-row-checkbox-children {
  grid-column: 3/6;
}
.snapgadget-form .snapgadget-form-row-flex {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 1em 2em;
}
.snapgadget-form .snapgadget-info-block {
  grid-column: 2/6;
  background-color: rgba(236, 240, 241, 0.2);
  border: 0.05em solid hsl(0, 0%, 80%);
  padding: 1em;
  border-radius: 0.25em;
  font-size: 0.9em;
}
.snapgadget-form .snapgadget-info-block h2 {
  font-size: 1.6em;
}
.snapgadget-form .snapgadget-info-block h3 {
  font-size: 1.4em;
}
.snapgadget-form .snapgadget-info-block h4 {
  font-size: 1.2em;
}
.snapgadget-form .snapgadget-form-part {
  display: flex;
  align-items: center;
}
.snapgadget-form .snapgadget-form-part * {
  grid-column: none;
}
.snapgadget-form .snapgadget-form-part *:not(:last-child) {
  margin-right: 1em;
}
.snapgadget-form .snapgadget-form-part label {
  margin-right: 0.5em !important;
}
.snapgadget-form-text {
  width: 100%;
}
.snapgadget-form-error {
  grid-column: 2/6;
  font-size: 0.9em;
  color: #e74c3c;
}
.snapgadget-text-muted {
  font-size: 0.8em;
  color: #bdc3c7;
}
.snapgadget-disabled {
  color: #959495;
  cursor: not-allowed;
}
@media (max-width: 768px) {
  .snapgadget-form {
    grid-template-columns: 1em 1fr;
  }
  .snapgadget-form label {
    text-align: left;
    grid-column: 1/3;
  }
  .snapgadget-form input, .snapgadget-form output, .snapgadget-form textarea, .snapgadget-form select, .snapgadget-form button, .snapgadget-form .snapgadget-form-element {
    grid-column: 1/3;
  }
  .snapgadget-form input[type=checkbox],
.snapgadget-form input[type=radio] {
    grid-column: 1/2;
  }
  .snapgadget-form input[type=checkbox] + label,
.snapgadget-form input[type=radio] + label {
    grid-column: 2/6;
  }
  .snapgadget-form .snapgadget-sub {
    grid-column: 2/3;
  }
  .snapgadget-form .snapgadget-sub-label {
    grid-column: 2/3;
  }
  .snapgadget-form .snapgadget-form-row, .snapgadget-form .snapgadget-form-row-flex, .snapgadget-form .snapgadget-form-row-checkbox-children {
    grid-column: 1/6;
  }
}
.snapgadget-color-picker {
  position: relative;
}
.snapgadget-color-picker .react-colorful,
.snapgadget-color-picker .react-colorful__saturation,
.snapgadget-color-picker .react-colorful__hue,
.snapgadget-color-picker .react-colorful__alpha-gradient,
.snapgadget-color-picker .react-colorful__interactive {
  margin-right: 0em !important;
}
.snapgadget-color-picker .react-colorful,
.snapgadget-color-picker .react-colorful__saturation,
.snapgadget-color-picker .react-colorful__hue,
.snapgadget-color-picker .react-colorful__alpha-gradient,
.snapgadget-color-picker .react-colorful__interactive {
  width: 100%;
}
.snapgadget-color-swatch {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 3px solid #fff;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-indent: -2000px;
}
.snapgadget-color-popover {
  position: absolute;
  top: calc(100% + 2px);
  left: 0;
  border-radius: 9px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  z-index: 100;
  background-color: #FFF;
}
.snapgadget-color-input {
  padding: 0.4em;
}
.snapgadget-loader-container {
  display: flex;
  gap: 0.5em;
  align-items: center;
}
.snapgadget-loader {
  border: 4px solid #ecf0f1;
  border-top: 4px solid #499c85;
  border-radius: 50%;
  width: 16px;
  height: 16px;
  animation: spin 2s linear infinite;
  display: inline-block;
  margin-right: 5px;
}
.snapgadget-loader-message {
  color: #7f8c8d;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@media (min-width: 768px) {
  label.snapgadget-data-loaded {
    margin-top: -1.2em;
  }
}
span.snapgadget-sub-label {
  display: block;
  font-size: 0.8em;
}
.snapgadget_results {
  azimuth: center !important;
  background-attachment: scroll !important;
  background-image: none !important;
  background-position: 0% 0% !important;
  background-repeat: repeat !important;
  border-collapse: separate !important;
  border-spacing: 0 !important;
  bottom: auto !important;
  caption-side: top !important;
  clear: none !important;
  clip: auto !important;
  content: normal !important;
  counter-increment: none !important;
  counter-reset: none !important;
  cursor: auto !important;
  direction: ltr !important;
  elevation: level !important;
  empty-cells: show !important;
  font-feature-settings: normal !important;
  font-variant: normal !important;
  font-weight: normal !important;
  letter-spacing: normal !important;
  line-height: normal !important;
  list-style-image: none !important;
  list-style-position: outside !important;
  list-style-type: disc !important;
  max-width: none !important;
  min-height: 0 !important;
  min-width: 0 !important;
  orphans: 2 !important;
  outline-color: invert !important;
  outline-style: none !important;
  outline-width: medium !important;
  overflow: auto !important;
  page-break-after: auto !important;
  page-break-before: auto !important;
  page-break-inside: auto !important;
  table-layout: auto !important;
  text-align: left !important;
  text-decoration: none !important;
  text-indent: 0 !important;
  text-transform: none !important;
  unicode-bidi: normal !important;
  vertical-align: baseline !important;
  visibility: visible !important;
  white-space: normal !important;
  widows: 2 !important;
  word-spacing: normal !important;
  display: block !important;
  margin: auto !important;
  padding: 5px !important;
  float: none !important;
  font-style: none !important;
}
.snapgadget_results {
  height: auto;
  max-height: none;
}
.snapgadget_results *,
.snapgadget_results *:before,
.snapgadget_results *:after {
  box-sizing: border-box;
}
.snapgadget_results * {
  azimuth: center;
  background-attachment: scroll;
  background-image: none;
  background-position: 0% 0%;
  background-repeat: repeat;
  border-collapse: separate;
  border-spacing: 0;
  bottom: auto;
  caption-side: top;
  clear: none;
  clip: auto;
  color: #0f214a;
  content: normal;
  counter-increment: none;
  counter-reset: none;
  cursor: auto;
  direction: ltr;
  elevation: level;
  empty-cells: show;
  font-family: "Lucida Grande", Tahoma, Arial, Verdana, sans-serif;
  font-feature-settings: normal;
  font-variant: normal;
  font-weight: normal;
  height: auto;
  left: auto;
  letter-spacing: normal;
  line-height: normal;
  list-style-image: none;
  list-style-position: outside;
  list-style-type: disc;
  max-height: none;
  max-width: none;
  min-height: 0;
  min-width: 0;
  orphans: 2;
  outline-color: invert;
  outline-style: none;
  outline-width: medium;
  overflow: visible;
  page-break-after: auto;
  page-break-before: auto;
  page-break-inside: auto;
  table-layout: auto;
  text-decoration: none;
  text-indent: 0;
  text-transform: none;
  top: auto;
  unicode-bidi: normal;
  vertical-align: baseline;
  visibility: visible;
  white-space: normal;
  widows: 2;
  width: auto;
  word-spacing: normal;
  margin: 0px;
  padding: 0px;
  font-size: 1em;
  float: none;
  border: none;
  font-style: none;
  background: transparent;
  text-align: left;
}
.snapgadget_results .snapgadget_result {
  width: 198px;
  height: 260px;
  padding: 10px;
  float: left;
  display: inline-block;
  border-radius: 10px;
  margin: 15px;
  position: relative;
}
.snapgadget_results .snapgadget_result a {
  cursor: pointer;
  text-decoration: none;
}
.snapgadget_results .snapgadget_result a:hover {
  text-decoration: underline;
}
.snapgadget_results .snapgadget_result .snapgadget_header {
  height: 50px;
  overflow: hidden;
  text-align: center;
  font-weight: bold;
}
.snapgadget_results .snapgadget_result .snapgadget_content {
  width: 176px;
  height: 170px;
}
.snapgadget_results .snapgadget_result .snapgadget_main {
  float: left;
  width: 176px;
}
.snapgadget_results .snapgadget_result .snapgadget_main .snapgadget_image,
.snapgadget_results .snapgadget_result .snapgadget_main .snapgadget_linked_image {
  text-align: center;
}
.snapgadget_results .snapgadget_result .snapgadget_main .snapgadget_image img,
.snapgadget_results .snapgadget_result .snapgadget_main .snapgadget_linked_image img {
  max-height: 100px;
  max-width: 100%;
}
.snapgadget_results .snapgadget_result .snapgadget_close {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
  position: absolute;
  top: -1px;
  right: 4px;
  font-size: 21px;
  font-weight: bold;
  line-height: 1;
  color: #95a5a6;
  display: none;
}
.snapgadget_results .snapgadget_result .snapgadget_close:focus {
  outline: 0;
}
.snapgadget_results .snapgadget_result .snapgadget_meta {
  display: none;
  float: right;
}
.snapgadget_results .snapgadget_result .snapgadget_meta .snapgadget_description {
  color: #95a5a6;
  font-size: 12px;
  padding: 0;
  margin: 0;
}
.snapgadget_results .snapgadget_result .snapgadget_meta .snapgadget-social-controls {
  float: left;
  /*
  .snapgadget-linkFB {
    background: transparent url(image-path("facebook_sm.png")) no-repeat;
  }
  .snapgadget-linkTwitter {
    background: transparent url(image-path("twitter_sm.png")) no-repeat;
  }
  .snapgadget-linkPinterest {
    background: transparent url(image-path("pinterest_sm.png")) no-repeat;
  }
  */
}
.snapgadget_results .snapgadget_result .snapgadget_meta .snapgadget-social-controls .snapgadget-linkFB,
.snapgadget_results .snapgadget_result .snapgadget_meta .snapgadget-social-controls .snapgadget-linkTwitter,
.snapgadget_results .snapgadget_result .snapgadget_meta .snapgadget-social-controls .snapgadget-linkPinterest {
  width: 32px;
  height: 32px;
  border: none;
  text-indent: -2000px;
}
.snapgadget_results .snapgadget_result .snapgadget_meta .snapgadget-social-controls .snapgadget-linkFB:hover,
.snapgadget_results .snapgadget_result .snapgadget_meta .snapgadget-social-controls .snapgadget-linkTwitter:hover,
.snapgadget_results .snapgadget_result .snapgadget_meta .snapgadget-social-controls .snapgadget-linkPinterest:hover {
  background-color: none;
  border: none;
}
.snapgadget_results .snapgadget_result .snapgadget_linked_image {
  display: none;
}
.snapgadget_results .snapgadget_result .snapgadget_view_now {
  position: absolute;
  bottom: 30px;
  display: none;
}
.snapgadget_results .snapgadget_result .snapgadget_footer {
  color: #bdc3c7;
  display: flex;
  justify-content: space-between;
  margin-top: 2px;
}
.snapgadget_results .snapgadget_result .snapgadget_footer .snapgadget_merchant {
  font-size: 10px;
}
.snapgadget_results .snapgadget_result .snapgadget_footer .snapgadget_price {
  font-weight: bold;
}
.snapgadget_results .snapgadget_result .snapgadget-onsale {
  text-decoration: line-through;
}
.snapgadget_results .snapgadget_result_expanded {
  width: 425px;
}
.snapgadget_results .snapgadget_result_expanded .snapgadget_linked_image {
  display: block;
}
.snapgadget_results .snapgadget_result_expanded .snapgadget_image {
  display: none;
}
.snapgadget_results .snapgadget_result_expanded .snapgadget_close {
  display: block;
}
.snapgadget_results .snapgadget_result_expanded .snapgadget_header {
  height: 20px;
  text-align: left;
}
.snapgadget_results .snapgadget_result_expanded .snapgadget_content {
  width: 425px;
  height: 204px;
}
.snapgadget_results .snapgadget_result_expanded .snapgadget_meta {
  display: block;
  margin-right: 25px;
  width: 224px;
}
.snapgadget_results .snapgadget_result_expanded .snapgadget_footer .snapgadget_view_now {
  display: block;
  float: left;
  margin: -5px 5px 0 0;
}
.snapgadget-result a {
  cursor: pointer;
}
.snapgadget-result h4 {
  margin: 0 68px 5px 0;
  height: 60px;
  overflow: hidden;
  line-height: 14px;
}
.snapgadget-result h4 a {
  font-size: 18px;
  cursor: pointer;
}
.snapgadget-result p {
  margin: 0 0 10px;
  font-size: 12px;
}
.snapgadget-result .snapgadget-content img {
  float: left;
  height: 100px;
  width: 100px;
  margin: 0 5px 5px 0;
}
.snapgadget-result .snapgadget-content p {
  height: 120px;
  overflow: hidden;
}
.snapgadget-result .snapgadget-onsale {
  text-decoration: line-through;
}
.snapgadget-result .snapgadget-original-price {
  position: absolute;
  top: 4px;
  right: 4px;
}
.snapgadget-result .snapgadget-original-price a {
  font-size: 14px;
  font-weight: bold;
}
.snapgadget-result .snapgadget-original-price.snapgadget-onsale {
  top: 45px;
  right: 4px;
}
.snapgadget-result .snapgadget-footer {
  clear: both;
}
.snapgadget-result .snapgadget-footer .snapgadget-merchant {
  position: absolute;
  bottom: 0;
  left: 8px;
}
.snapgadget-result .snapgadget-footer .snapgadget-merchant a {
  font-size: 12px;
  color: #95a5a6;
}
.snapgadget-result .snapgadget-footer .snapgadget-buy-it {
  position: absolute;
  bottom: 4px;
  right: 4px;
}
.snapgadget-result .snapgadget-footer .snapgadget-buy-it a {
  padding: 6px 12px;
}
.snapgadget-result-bar {
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-content: space-between;
  border-bottom: solid 1px #bdc3c7;
  margin: 0.5em 0;
}
.snapgadget-result-bar-info {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  flex-grow: 2;
  height: 100%;
  width: 100%;
  gap: 5px;
  align-items: center;
}
.snapgadget-result-bar-info-name {
  font-size: 1.1em;
  font-weight: bold;
  width: 100%;
  margin-left: 5px;
  text-align: center;
}
.snapgadget-result-bar-info-merchant {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.snapgadget-result-bar-select {
  padding: 5px 8px;
  background: #f0f0f0;
}
.snapgadget-result-bar-select-wrap {
  margin-top: 5px;
}
.snapgadget_controls .snapgadget_controls_row {
  display: flex;
}
.snapgadget_controls .snapgadget_controls_row_reverse {
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
}
.snapgadget_controls .snapgadget_on_sale_only {
  margin: 0 10px;
}
.snapgadget_controls .snapgadget_search_container,
.snapgadget_controls .snapgadget-price-slider,
.snapgadget_controls .snapgadget_refine {
  margin: 0.6em 0.3em;
}
.snapgadget_controls .snapgadget-filter-btn-container {
  margin: 0.7em 0;
}
.snapgadget_controls .snapgadget-filter-btn-container .snapgadget-btn-icon {
  font-size: 1em;
  display: flex;
  align-items: center;
  gap: 0.5em;
}
.snapgadget_controls .snapgadget_result_controls_container {
  text-align: center;
  margin: 40px;
  font-size: 14px;
  clear: both;
  display: block;
}
.snapgadget_controls .snapgadget_result_controls_container p {
  text-align: center;
}
.snapgadget_controls .snapgadget_result_controls_container .snapgadget-btn {
  width: 200px;
  margin: 10px auto;
}
.snapgadget_controls .snapgadget_refine {
  flex-grow: 1;
}
.snapgadget_controls .snapgadget_refine select {
  width: 100%;
}
.snapgadget_controls .snapgadget-price-slider {
  padding: 0px 25px 10px 10px;
  flex-grow: 2;
}
.snapgadget_controls .snapgadget_search_container {
  display: flex;
  flex-grow: 1;
  height: 31px;
  gap: 2px;
}
.snapgadget_controls .snapgadget_search_container .snapgadget_query {
  border-radius: 5px;
  padding: 4px 6px 4px 6px;
  font-size: 1em;
  margin: 0px;
  flex-grow: 3;
  border: solid 1px;
}
.snapgadget_controls .snapgadget_search_container .snapgadget_search {
  flex-grow: 1;
  display: inline-block;
  min-width: 65px;
}
.snapgadget_controls .snapgadget_search_container .snapgadget-btn {
  padding: 0;
}
.snapgadget_controls .snapgadget_refine .snapgadget-sort-order {
  width: 100%;
  max-width: 100%;
  font-size: 1em;
  border-radius: 5px;
  height: 31px;
}
.snapgadget-button-text {
  display: none;
}
@media all and (max-width: 765px) {
  .snapgadget_controls_row {
    flex-direction: column;
  }
  .snapgadget_controls_row_reverse {
    margin-bottom: 1em;
  }
  .snapgadget-filter-btn-container .snapgadget-button-text {
    display: inline;
  }
}
.snapgadget-button-wrapper {
  display: flex;
  align-items: center;
}
.snapgadget-button-wrapper a {
  height: 18px;
}
.snapgadget-results {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.snapgadget-result-bars-container {
  margin: 5px 0;
}
.snapgadget-result-bars-scroll {
  padding: 1px 9px 1px 5px;
  overflow-y: auto;
}
.snapgadget-search-container {
  display: flex;
  flex-direction: column;
}
.snapgadget-search {
  display: flex;
  flex-direction: column;
}
.snapgadget-search .snapgadget-search-input {
  flex: 1;
  line-height: normal;
  width: 100%;
  font-size: 1em;
  padding: 0.2em;
}
.snapgadget-search .snapgadget-search-facet-contents {
  overflow-y: auto;
}
.snapgadget-search .snapbrains-facet-button {
  background: none;
  border: none;
}
.snapgadget-search .snapgadget-btn-icon {
  border: none;
  background: none;
}
.snapgadget-addon-container {
  display: flex;
  align-items: center;
}
.snapgadget-addon-field {
  flex: 1;
}
.snapgadget-search-input-container {
  display: flex;
  position: relative;
}
.snapgadget-no-more-results {
  font-weight: bold;
  font-size: 1.2em;
}
.snapgadget-search-facets, .snapgadget-search-facets-min {
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  align-items: start;
  grid-gap: 0.5em 1em;
}
.snapgadget-search-facets {
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: "a b c d";
}
.snapgadget-search-facets-min {
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "a b c";
}
.snapgadget-search-facet-group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
}
.snapgadget-search-facet-merchants {
  grid-area: a;
}
.snapgadget-search-facet-categories {
  grid-area: b;
}
.snapgadget-search-facet-brands {
  grid-area: c;
}
.snapgadget-search-facet-sort-sale {
  grid-area: d;
}
@media (max-width: 768px) {
  .snapgadget-search-facets {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas: "a b d" "c b d";
  }
}
.snapgadget-search-facet {
  width: 100%;
}
.snapgadget-search-facet h2 {
  font-size: 14px;
  margin: 0;
  border-bottom: solid 1px #ccc;
  width: 100%;
}
.snapgadget-search-facet .snapgadget-sub-head {
  margin-top: 6px;
}
.snapgadget-search-facet-contents {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.snapgadget-facet-button {
  text-align: left;
  justify-content: left;
  align-items: center;
  padding: 2px 4px;
  border: none;
  background: none;
}
.snapgadget-facet-button svg {
  margin-right: 4px;
  outline: none;
}
.snapgadget-facet-button:hover {
  background: #eee;
}
button.snapgadget-facet-button {
  display: flex;
}
.snapgadget-onsale-label {
  font-size: 0.9em;
}
.snapgadget-clear-filter-container {
  margin-top: 1em;
}
.snapgadget-clear-filter {
  margin: 0 0.3em;
  display: flex;
  justify-content: center;
}
.snapgadget-clear-filter button {
  font-size: 0.8em;
}
.snapgadget-rotate-enter {
  opacity: 0;
}
.snapgadget-rotate-enter-active {
  opacity: 1;
  transform: rotate(90deg);
  transition: all 100ms ease-in-out;
}
.snapgadget-rotate-enter-done {
  opacity: 1;
}
.snapgadget-rotate-exit {
  opacity: 1;
}
.snapgadget-rotate-exit-active {
  opacity: 0;
  transform: rotate(90deg);
  transition: all 100ms ease-in-out;
}
.snapgadget-rotate-exit-done {
  opacity: 0;
  display: none;
}
.snapgadget-slide-enter {
  transform: scale(1, 0);
}
.snapgadget-slide-enter-active {
  transform: scale(1, 1);
  transform-origin: top;
  transition: all 100ms ease-in-out;
}
.snapgadget-slide-exit {
  transform: scale(1, 1);
}
.snapgadget-slide-exit-active {
  transform: scale(1, 0);
  transform-origin: top;
  transition: all 100ms ease-in-out;
}
.snapgadget-slide-exit-done {
  display: none;
}
.snapgadget-fade-enter {
  opacity: 0;
}
.snapgadget-fade-enter-active {
  opacity: 1;
  transition: all 100ms ease-in-out;
}
.snapgadget-fade-enter-done {
  opacity: 1;
}
.snapgadget-fade-exit {
  opacity: 1;
}
.snapgadget-fade-exit-active {
  opacity: 0;
  transition: all 100ms ease-in-out;
}
.snapgadget-fade-exit-done {
  opacity: 0;
  display: none;
}
.snapgadget-filter-error {
  color: #FF0000;
  padding-top: 12px;
}
.snapgadget-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  /* added line */
  border: 0;
}
.snapgadget-btn-icon {
  vertical-align: middle;
}
.snapgadget-btn-icon :focus {
  outline: none;
}
.snapgadget-center {
  display: flex;
  justify-content: center;
}
@keyframes react-loading-skeleton {
    100% {
        transform: translateX(100%);
    }
}
.react-loading-skeleton {
    --base-color: #ebebeb;
    --highlight-color: #f5f5f5;
    --animation-duration: 1.5s;
    --animation-direction: normal;
    --pseudo-element-display: block; /* Enable animation */

    background-color: var(--base-color);

    width: 100%;
    border-radius: 0.25rem;
    display: inline-flex;
    line-height: 1;

    position: relative;
    overflow: hidden;
    z-index: 1; /* Necessary for overflow: hidden to work correctly in Safari */
}
.react-loading-skeleton::after {
    content: ' ';
    display: var(--pseudo-element-display);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-repeat: no-repeat;
    background-image: linear-gradient(
        90deg,
        var(--base-color),
        var(--highlight-color),
        var(--base-color)
    );
    transform: translateX(-100%);

    animation-name: react-loading-skeleton;
    animation-direction: var(--animation-direction);
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
}
.rc-slider {
  position: relative;
  width: 100%;
  height: 14px;
  padding: 5px 0;
  border-radius: 6px;
  touch-action: none;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.rc-slider * {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.rc-slider-rail {
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: #e9e9e9;
  border-radius: 6px;
}
.rc-slider-track {
  position: absolute;
  height: 4px;
  background-color: #abe2fb;
  border-radius: 6px;
}
.rc-slider-handle {
  position: absolute;
  width: 14px;
  height: 14px;
  margin-top: -5px;
  background-color: #fff;
  border: solid 2px #96dbfa;
  border-radius: 50%;
  cursor: pointer;
  cursor: grab;
  opacity: 0.8;
  touch-action: pan-x;
}
.rc-slider-handle-dragging.rc-slider-handle-dragging.rc-slider-handle-dragging {
  border-color: #57c5f7;
  box-shadow: 0 0 0 5px #96dbfa;
}
.rc-slider-handle:focus {
  outline: none;
  box-shadow: none;
}
.rc-slider-handle.focus-visible {
  border-color: #2db7f5;
  box-shadow: 0 0 0 3px #96dbfa;
}
.rc-slider-handle:focus-visible {
  border-color: #2db7f5;
  box-shadow: 0 0 0 3px #96dbfa;
}
.rc-slider-handle-click-focused:focus {
  border-color: #96dbfa;
  box-shadow: none;
  box-shadow: initial;
}
.rc-slider-handle:hover {
  border-color: #57c5f7;
}
.rc-slider-handle:active {
  border-color: #57c5f7;
  box-shadow: 0 0 5px #57c5f7;
  cursor: grabbing;
}
.rc-slider-mark {
  position: absolute;
  top: 18px;
  left: 0;
  width: 100%;
  font-size: 12px;
}
.rc-slider-mark-text {
  position: absolute;
  display: inline-block;
  color: #999;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
}
.rc-slider-mark-text-active {
  color: #666;
}
.rc-slider-step {
  position: absolute;
  width: 100%;
  height: 4px;
  background: transparent;
  pointer-events: none;
}
.rc-slider-dot {
  position: absolute;
  bottom: -2px;
  width: 8px;
  height: 8px;
  vertical-align: middle;
  background-color: #fff;
  border: 2px solid #e9e9e9;
  border-radius: 50%;
  cursor: pointer;
}
.rc-slider-dot-active {
  border-color: #96dbfa;
}
.rc-slider-dot-reverse {
  margin-right: -4px;
}
.rc-slider-disabled {
  background-color: #e9e9e9;
}
.rc-slider-disabled .rc-slider-track {
  background-color: #ccc;
}
.rc-slider-disabled .rc-slider-handle,
.rc-slider-disabled .rc-slider-dot {
  background-color: #fff;
  border-color: #ccc;
  box-shadow: none;
  cursor: not-allowed;
}
.rc-slider-disabled .rc-slider-mark-text,
.rc-slider-disabled .rc-slider-dot {
  cursor: not-allowed !important;
}
.rc-slider-vertical {
  width: 14px;
  height: 100%;
  padding: 0 5px;
}
.rc-slider-vertical .rc-slider-rail {
  width: 4px;
  height: 100%;
}
.rc-slider-vertical .rc-slider-track {
  bottom: 0;
  left: 5px;
  width: 4px;
}
.rc-slider-vertical .rc-slider-handle {
  margin-top: 0;
  margin-left: -5px;
  touch-action: pan-y;
}
.rc-slider-vertical .rc-slider-mark {
  top: 0;
  left: 18px;
  height: 100%;
}
.rc-slider-vertical .rc-slider-step {
  width: 4px;
  height: 100%;
}
.rc-slider-vertical .rc-slider-dot {
  margin-left: -2px;
}
.rc-slider-tooltip-zoom-down-enter,
.rc-slider-tooltip-zoom-down-appear {
  display: block !important;
}
.rc-slider-tooltip-zoom-down-enter,
.rc-slider-tooltip-zoom-down-appear {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-play-state: paused;
}
.rc-slider-tooltip-zoom-down-leave {
  display: block !important;
}
.rc-slider-tooltip-zoom-down-leave {
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-play-state: paused;
}
.rc-slider-tooltip-zoom-down-enter.rc-slider-tooltip-zoom-down-enter-active,
.rc-slider-tooltip-zoom-down-appear.rc-slider-tooltip-zoom-down-appear-active {
  animation-name: rcSliderTooltipZoomDownIn;
  animation-play-state: running;
}
.rc-slider-tooltip-zoom-down-leave.rc-slider-tooltip-zoom-down-leave-active {
  animation-name: rcSliderTooltipZoomDownOut;
  animation-play-state: running;
}
.rc-slider-tooltip-zoom-down-enter,
.rc-slider-tooltip-zoom-down-appear {
  transform: scale(0, 0);
  animation-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
}
.rc-slider-tooltip-zoom-down-leave {
  animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
}
@keyframes rcSliderTooltipZoomDownIn {
  0% {
    transform: scale(0, 0);
    transform-origin: 50% 100%;
    opacity: 0;
  }
  100% {
    transform: scale(1, 1);
    transform-origin: 50% 100%;
  }
}
@keyframes rcSliderTooltipZoomDownOut {
  0% {
    transform: scale(1, 1);
    transform-origin: 50% 100%;
  }
  100% {
    transform: scale(0, 0);
    transform-origin: 50% 100%;
    opacity: 0;
  }
}
.rc-slider-tooltip {
  position: absolute;
  top: -9999px;
  left: -9999px;
  visibility: visible;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.rc-slider-tooltip * {
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.rc-slider-tooltip-hidden {
  display: none;
}
.rc-slider-tooltip-placement-top {
  padding: 4px 0 8px 0;
}
.rc-slider-tooltip-inner {
  min-width: 24px;
  height: 24px;
  padding: 6px 2px;
  color: #fff;
  font-size: 12px;
  line-height: 1;
  text-align: center;
  text-decoration: none;
  background-color: #6c6c6c;
  border-radius: 6px;
  box-shadow: 0 0 4px #d9d9d9;
}
.rc-slider-tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.rc-slider-tooltip-placement-top .rc-slider-tooltip-arrow {
  bottom: 4px;
  left: 50%;
  margin-left: -4px;
  border-width: 4px 4px 0;
  border-top-color: #6c6c6c;
}
/*# sourceMappingURL=to.css.map */`;var yy=P(U()),Ee=P(J());var zp=P(U()),gn=P(J());function Vr(e){let{settings:t,containerCssClass:n}=e,r=n||t.containerCssSelector||"",o=`
    ${r} .snapgadget-btn{
      background: ${t.darkColor};
      color: ${t.buttonColor};
    }
    ${r} a.snapgadget-btn{
      background: ${t.darkColor};
      color: ${t.buttonColor};
      display: inline-block;
    }
    ${r} .snapgadget-btn:hover, ${r} a.snapgadget-btn:hover{
      background-color: ${t.lightColor} !important;
    }
  `;return zp.default.createElement("style",{dangerouslySetInnerHTML:{__html:o}})}Vr.propTypes={settings:gn.default.shape({darkColor:gn.default.string,buttonColor:gn.default.string,lightColor:gn.default.string,containerCssSelector:gn.default.string}).isRequired,containerCssClass:gn.default.string};Vr.defaultProps={containerCssClass:""};var Yt=P(U()),ks=P(J());var Ge=P(U());function Om(){let e=["Msxml2.XMLHTTP","Microsoft.XMLHTTP"];if(window.ActiveXObject)for(let t=0;t<e.length;t+=1)try{return new ActiveXObject(e[t])}catch{}else if(window.XMLHttpRequest)return new XMLHttpRequest;return!1}function zm(e,t,n,r,o,l={}){let i=new Om;return i.onreadystatechange=()=>{i.readyState===4&&(i.status>=200&&i.status<300?r(i):o(i))},i.open(t,e,!0),Object.keys(l).forEach(a=>{i.setRequestHeader(a,l[a])}),i.send(n),i}function bm(e,t,n,r={}){return zm(e,"GET",null,t,n,r)}function bp(e,t,n={}){return bm(e,r=>{let o=JSON.parse(r.responseText);t(o)},r=>{t({error:`Request failed ${r}`})},n)}var Im="Commission";var Um="https://classic.avantlink.com/api.php";function Lm(e){let{query:t,page:n,sortOrder:r,merchantIds:o=[],category:l,subCategory:i,customCategory:a,brand:s,resultCount:c,overFetchCount:g,onSaleOnly:f,searchOnSaleOnly:m,onSaleLevel:y,minPrice:x,maxPrice:w,department:N,merchantCategoryIds:p,sortHighestCommissionFirst:u,avantlinkAffiliateId:d,avantlinkWebsiteId:h,searchUrl:k}=e,v=(n||0)*c,S=`${k||Um}?affiliate_id=${d}`;return S=`${S}&module=ProductSearch&output=json&website_id=${h}`,S=`${S}&search_results_count=${g||c}`,S=`${S}&search_term=${encodeURIComponent(t)}`,a&&(S=`${S}+${encodeURIComponent(a)}`),S=`${S}&search_results_base=${v}`,o&&o.length>0&&(S=`${S}&merchant_ids=${o.join("%7C")}`),r?S=`${S}&search_results_sort_order=${r}`:u&&(S=`${S}&search_results_sort_order=${Im}`),(f||m)&&(S=`${S}&search_on_sale_only=1`),y&&(S=`${S}&search_on_sale_level=${y}`),p&&p.length>0&&(S=`${S}&merchant_category_ids=${p.join("%7C")}`),w&&(S=`${S}&search_price_maximum=${w}`),x&&(S=`${S}&search_price_minimum=${x}`),S=`${S}&search_advanced_syntax=1`,s&&(S=`${S}&search_brand=${s}`),l&&(S=`${S}&search_category=${l}`),i&&(S="".concat(S,"&search_subcategory=").concat(i)),N&&(S=`${S}&search_department=${N}`),S}function Wr(e,t){let n=Lm(e),{searchHeaders:r={}}=e;bp(n,o=>{o&&o[0]==="No active merchant associations found for this affiliate, using the specified options."?t([]):t(o)},r)}function zl(e,t){let n=[];for(let r=0;r<e.length;r+=1)t(e[r])&&n.push(e[r]);return n}function Bm(e,t,n){let r=[];for(let o=0;o<t.length&&r.length<n;o+=1){let l=zl(e,i=>parseInt(i.lngCategoryId,10)===t[o]);r=r.concat(l)}return r}function Ip(e,t,n){if(e.length<n)for(let r=0;r<t.length&&e.length<n;r+=1)e.indexOf(t[r])<0&&e.push(t[r]);return e}function Dm(e){let t=[];return Object.keys(e).forEach(n=>{t.push(parseInt(n,10))}),t.sort((n,r)=>e[r]-e[n])}function Up(e,t){if(e.length===0)return[];let n={};for(let r=0;r<e.length;r+=1){let o=parseInt(e[r][t],10);n[o]?n[o]+=1:o>0&&(n[o]=1)}return Dm(n)}function Mm(e,t){return e.filter((n,r,o)=>o.map(l=>l[t]).indexOf(n[t])===r)}function Lp(e,t){let{resultCount:n,rawResults:r}=e,o={...e};o.overFetchCount=o.resultCount*4,Wr(o,l=>{let i=l.length,a=Mm(l,"strProductName"),s=zl(a,y=>y!=null);if(r){t(s.slice(0,n),i);return}let c=Up(s,"lngCategoryId"),g=Up(s,"lngSubCategoryId"),f=Bm(s,c,n);if(f.length>n){let y=zl(f,x=>x.lngSubCategoryId===`${g[0]}`);Ip(y,f,n)}let m=zl(s,y=>y?y.lngCategoryId==="0"&&y.dblProductOnSalePercent>10&&y.intSearchResultScore>=s[0].intSearchResultScore-100:!1);f=f.concat(m),Ip(f,s,n),f.sort((y,x)=>y.dblProductOnSalePercent<x.dblProductOnSalePercent),t(f.slice(0,n),i)})}var bl=P(U()),Rm=300;function vs(e,t=Rm,n=void 0){let[r,o]=(0,bl.useState)(n);return(0,bl.useEffect)(()=>{let l=setTimeout(()=>{o(e)},t);return()=>{clearTimeout(l)}},[e,t]),r}var ke={requested:"requested",inflight:"inflight",completed:"completed",unknown:"unknown"};function $m(e){if(!e)return null;let{query:t="",sortOrder:n,merchantIds:r=[],category:o,subCategory:l,customCategory:i,brand:a,onSaleOnly:s,onSaleLevel:c,minPrice:g,maxPrice:f,department:m,merchantCategoryIds:y=[]}=e;return`${t}-${n}-${r.join("-")}-${o}-${i}-${l}-${a}-${s}-${c}-${g}-${f}-${m}-${y.join("-")}`}function jm(e,t,n){return e[t]&&e[t][n]?e[t][n]:{status:ke.unknown,hasMore:!0,results:null,loading:null}}function Am(e,t){switch(t.type){case"setStatus":{let{page:n,key:r,status:o,hasMore:l,results:i}=t,a={...e};return a[r]||(a[r]={}),a[r][n]={status:o,hasMore:l,results:i},a}default:throw new Error("Invalid type")}}function Vm(e){let{merchantIds:t,category:n,customCategory:r,subCategory:o,brand:l,onSaleOnly:i,searchOnSaleOnly:a,onSaleLevel:s,minPrice:c,maxPrice:g,department:f,merchantCategoryIds:m}=e;return t.length<=0&&(n===null||n==="")&&(r===null||r==="")&&(o===null||o==="")&&(l===null||l==="")&&(f===null||f==="")&&!i&&!a&&(s===null||s===0)&&(c===null||c===0)&&g===null&&m.length<=0}function Wm(e,t){let n={avantlinkAffiliateId:t.avantlinkAffiliateId,avantlinkWebsiteId:t.avantlinkWebsiteId,query:e,page:0,resultCount:1e3,merchantIds:[],category:"",customCategory:"",subCategory:"",brand:"",onSaleOnly:!1,onSaleLevel:null,minPrice:null,maxPrice:null,department:null,merchantCategoryIds:[]};return t.searchUrl&&(n.searchUrl=t.searchUrl),t.searchHeaders&&(n.searchHeaders=t.searchHeaders),n}function xs(e,t=!1,n=!0){let{query:r,page:o,resultCount:l}=e,[i,a]=(0,Ge.useReducer)(Am,{}),s=vs(r,300),c=s,g=$m({...e,query:s}),f=jm(i,g,o),[m,y]=(0,Ge.useState)(!1),x=i,w=(0,Ge.useCallback)(()=>{a({type:"setStatus",key:g,page:o,status:ke.inflight}),(t?Lp:Wr)({...e,query:s},k=>{a({type:"setStatus",key:g,page:o,results:k,status:ke.completed,hasMore:k?.length===l}),Vm(e)?a({type:"setStatus",key:c,page:o,results:k,status:ke.completed,hasMore:k?.length===l}):n&&typeof x[c]>"u"&&Wr(Wm(s,e),v=>{a({type:"setStatus",key:c,page:o,results:v,status:ke.completed,hasMore:v.length===l})})})},[g,o,t,e,s,l,n,x,c]);(0,Ge.useEffect)(()=>{e?.query?.length>2&&f.status===ke.unknown&&a({type:"setStatus",key:g,page:o,status:ke.requested})},[e?.query?.length,g,o,f.status]),(0,Ge.useEffect)(()=>{s?.length>2&&f.status===ke.requested&&w()},[f.status,s?.length,w]),(0,Ge.useEffect)(()=>{!m&&f.status===ke.completed&&y(!0)},[m,f.status]),(0,Ge.useEffect)(()=>{y(!1)},[s]);let N=[];if(x[g]){let h=Object.keys(x[g]);for(let k=0;k<h.length;k++)x[g][h[k]].status===ke.completed&&(N=N.concat(x[g][h[k]].results))}let p=[];if(x[c]){let h=Object.keys(x[c]);for(let k=0;k<h.length;k++)x[c][h[k]].status===ke.completed&&(p=p.concat(x[c][h[k]].results))}let u=!1;f.status===ke.requested||f.status===ke.inflight?u=!0:f.status===ke.completed&&(u=!1);let d=f.hasMore===!0||typeof f.hasMore>"u";return{unfilteredResults:p,results:N,key:g,loading:u,hasSearched:m,hasMore:d}}var at=P(J()),Xt=P(U());var Y=P(J()),I=P(U());var mn=P(U()),vt=P(J());function Xn(e){let{onSale:t,salePrice:n,salePercent:r,settings:o,url:l}=e;if(!t)return null;let i=84,a=-10,s=24,{saleTagColor:c}=o,g="#fff",f="#ecf0f5",m={position:"absolute",right:i+a,bottom:s,width:0,height:0,borderStyle:"solid",borderWidth:"18px 15px 15px 0",borderColor:`transparent ${c} transparent transparent`};return mn.default.createElement("div",null,mn.default.createElement("div",{style:m}),mn.default.createElement("div",{style:{position:"absolute",borderTopRightRadius:5,borderBottomRightRadius:5,backgroundColor:c,color:g,lineHeight:"10px",padding:"0px 0 0 2px",border:2,right:a,bottom:s,width:i,fontSize:"0.9em"}},mn.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",style:{color:g},href:l},"$",n,mn.default.createElement("br",null),mn.default.createElement("span",{style:{fontSize:12,color:f}},"Save",r,"%"))))}Xn.propTypes={onSale:vt.default.bool,salePrice:vt.default.string,salePercent:vt.default.oneOfType([vt.default.string,vt.default.number]),settings:vt.default.shape({saleTagColor:vt.default.string}),url:vt.default.string};function Il(e){let{result:t,settings:n}=e,{avantlinkWebsiteId:r,trackingCode:o,appId:l,buttonText:i}=n,a=ot(t),s=qt(t,r,o,l),c=lt(t),g=n.openNewWindow?"_blank":"_self";return I.default.createElement("div",{key:`snapgadget_${t.lngProductId}`,className:"snapgadget_result"},I.default.createElement("div",{className:"snapgadget_header"},I.default.createElement("a",{href:s,className:"snapgadget_url",target:g,rel:"nofollow noreferrer"},t.strProductName),I.default.createElement("button",{type:"button",className:"snapgadget_close"},"\xD7")),I.default.createElement("div",{className:"snapgadget_content"},I.default.createElement("div",{className:"snapgadget_main"},I.default.createElement("div",{className:"snapgadget_image"},I.default.createElement("img",{src:c,alt:t.strProductName})),I.default.createElement("div",{className:"snapgadget_linked_image"},I.default.createElement("a",{href:s,className:"snapgadget_url",target:g,rel:"nofollow noreferrer"},I.default.createElement("img",{src:c,alt:t.strProductName})))),I.default.createElement("div",{className:"snapgadget_meta"},I.default.createElement("p",{className:"snapgadget_description"},Pl(t),I.default.createElement("a",{href:s,target:g},"View More")),I.default.createElement("div",{className:"snapgadget-social-controls"},I.default.createElement("button",{type:"button",className:"snapgadget-linkFB","data-url":s},"Post to Facebook"),I.default.createElement("button",{type:"button",className:"snapgadget-linkTwitter","data-url":s,"data-title":t.strProductName},"Post to Twitter"),I.default.createElement("button",{type:"button",style:{display:"none"},className:"snapgadget-linkPinterest","data-url":s,"data-img":c,"data-title":t.strProductName},"Post to PInterest"))),I.default.createElement(Xn,{settings:n,onSale:a.onSale,salePercent:a.salePercent,salePrice:t.dblProductSalePrice,url:s}),I.default.createElement("div",{className:"snapgadget_view_now"},I.default.createElement("a",{href:s,className:"snapgadget-btn",target:g,rel:"nofollow noreferrer"},i||"View Now"))),I.default.createElement("div",{className:"snapgadget_footer"},I.default.createElement("div",{className:"snapgadget_merchant"},I.default.createElement("a",{href:s,target:g,rel:"nofollow noreferrer"},t.strMerchantName)),I.default.createElement("div",{className:`snapgadget_price ${a.saleClass}`},I.default.createElement("a",{href:s,target:g,rel:"nofollow noreferrer"},"$",a.price))))}Il.propTypes={settings:Y.default.shape({appId:Y.default.number,buttonText:Y.default.string,avantlinkWebsiteId:Y.default.oneOfType([Y.default.string,Y.default.number]),trackingCode:Y.default.string,openNewWindow:Y.default.bool,darkColor:Y.default.string,borderColor:Y.default.string,backgroundColor:Y.default.string,textColor:Y.default.string,buttonColor:Y.default.string,lightColor:Y.default.string}).isRequired,result:Y.default.shape({strProductName:Y.default.string,strMerchantName:Y.default.string,lngProductId:Y.default.string,dblProductSalePrice:Y.default.string}).isRequired};var de=P(J()),W=P(U());var Hr=P(U()),Ul=P(J());var xt=P(U(),1),Hm=xt.default.createContext({}),Bp=!0;function qm({baseColor:e,highlightColor:t,width:n,height:r,borderRadius:o,circle:l,direction:i,duration:a,enableAnimation:s=Bp}){let c={};return i==="rtl"&&(c["--animation-direction"]="reverse"),typeof a=="number"&&(c["--animation-duration"]=`${a}s`),s||(c["--pseudo-element-display"]="none"),(typeof n=="string"||typeof n=="number")&&(c.width=n),(typeof r=="string"||typeof r=="number")&&(c.height=r),(typeof o=="string"||typeof o=="number")&&(c.borderRadius=o),l&&(c.borderRadius="50%"),typeof e<"u"&&(c["--base-color"]=e),typeof t<"u"&&(c["--highlight-color"]=t),c}function wt({count:e=1,wrapper:t,className:n,containerClassName:r,containerTestId:o,circle:l=!1,style:i,...a}){var s,c,g;let f=xt.default.useContext(Hm),m={...a};for(let[d,h]of Object.entries(a))typeof h>"u"&&delete m[d];let y={...f,...m,circle:l},x={...i,...qm(y)},w="react-loading-skeleton";n&&(w+=` ${n}`);let N=(s=y.inline)!==null&&s!==void 0?s:!1,p=[],u=Math.ceil(e);for(let d=0;d<u;d++){let h=x;if(u>e&&d===u-1){let v=(c=h.width)!==null&&c!==void 0?c:"100%",S=e%1,E=typeof v=="number"?v*S:`calc(${v} * ${S})`;h={...h,width:E}}let k=xt.default.createElement("span",{className:w,style:h,key:d},"\u200C");N?p.push(k):p.push(xt.default.createElement(xt.default.Fragment,{key:d},k,xt.default.createElement("br",null)))}return xt.default.createElement("span",{className:r,"data-testid":o,"aria-live":"polite","aria-busy":(g=y.enableAnimation)!==null&&g!==void 0?g:Bp},t?p.map((d,h)=>xt.default.createElement(t,{key:h},d)):p)}function Gt(e){let{result:t}=e,n=!!t,r=n?sp(t):"",o=r.indexOf("$")>=0?"":"$",l="#7f8c8d";return n?t.strActionCommission||t.commission?Hr.default.createElement("div",{style:{fontSize:"0.7em",color:l,margin:"0.3em"}},"Commission:"," ",Hr.default.createElement("span",null,t.strActionCommission," ","(",o,r,")")):null:Hr.default.createElement("div",null,Hr.default.createElement(wt,{style:{width:300}}))}Gt.propTypes={result:Ul.default.shape({strActionCommission:Ul.default.string,commission:Ul.default.number}).isRequired};var Ll=P(U()),it=P(J());function Je(e){let{display:t,result:n,target:r,styles:o,url:l,containerClassName:i}=e,a=!!n,s=a?n?.strMerchantName?.replace(/&amp;/gi,"&"):"",c=l?Ll.default.createElement("a",{href:l,target:r,rel:"noopener noreferrer",style:o.merchantLink},s):s;return t?Ll.default.createElement("div",{style:o.merchantContainer,className:i},a?c:Ll.default.createElement(wt,{style:{width:200}})):null}Je.propTypes={display:it.default.bool,target:it.default.string,result:it.default.shape({strMerchantName:it.default.string}),styles:it.default.shape({merchantLink:it.default.shape({}),merchantContainer:it.default.shape({})}),url:it.default.string,containerClassName:it.default.string};Je.defaultProps={display:!0,result:null,target:"_blank",styles:{},url:null,containerClassName:null};var Gm=768;function Dp(){return{viewport:{width:document.documentElement.clientWidth,height:document.documentElement.clientHeight}}}function Jm(e,t){let n={container:{display:"block",position:"relative",padding:10,margin:"2px 10px 0 0",borderLeftWidth:5,borderRadius:3,width:"100%",height:"auto",float:"none"},p:{}};if(e.width>Gm){let o=parseInt(t.columns,10);if(n.container.width=`${100/o-2}%`,o>1)switch(n.container.float="left",n.container.marginRight=`${2}%`,o){case 2:n.container.height=230,n.p.height=120;break;case 3:n.container.height=220;break;case 4:n.container.height=270;break;default:n.p.marginRight=0,n.p.height=72,n.container.height=270}}return t.backgroundColor&&(n.container.backgroundColor=t.backgroundColor),n}function Bl(e){let[t,n]=(0,W.useState)(Dp()),r=(0,W.useCallback)(()=>{n(Dp())},[n]);(0,W.useEffect)(()=>(window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}),[r]);let{result:o,settings:l}=e,{forAffiliate:i=!1,resultMetaRenderer:a=null}=l,s=ot(o),c=qt(o,l.avantlinkWebsiteId,l.trackingCode,l.appId),g=lt(o),f=Pl(o),m=l.buttonText||"View",y=l.openNewWindow?"_blank":"_self",x=Jm(t,l);return W.default.createElement("div",{className:"snapgadget-result",style:x.container},W.default.createElement("h4",null,W.default.createElement("a",{target:y,href:c,rel:"nofollow"},o.strProductName)),W.default.createElement("div",{className:"snapgadget-content"},W.default.createElement("img",{src:g,alt:o.strProductName}),W.default.createElement("p",{style:x.p},f)),W.default.createElement("div",{className:`snapgadget-original-price ${s.saleClass}`},W.default.createElement(Xn,{settings:l,onSale:s.onSale,salePercent:s.salePercent,salePrice:o.dblProductSalePrice,url:c}),W.default.createElement("a",{target:y,href:c,rel:"nofollow"},"$",s.price)),W.default.createElement("div",{className:"snapgadget-footer"},W.default.createElement("div",{className:"snapgadget-merchant"},W.default.createElement("a",{href:c,target:y,rel:"nofollow"},o.strMerchantName)),W.default.createElement(Je,{display:!0,containerClassName:"snapgadget-merchant",url:c,target:y,result:o}),W.default.createElement("div",{className:"snapgadget-buy-it"},W.default.createElement("a",{target:y,className:"snapgadget-btn",href:c,rel:"nofollow"},m))),i&&W.default.createElement(Gt,{result:o}),a&&a(e))}Bl.propTypes={settings:de.default.shape({forAffiliate:de.default.bool,buttonText:de.default.string,appId:de.default.number,avantlinkWebsiteId:de.default.oneOfType([de.default.string,de.default.number]),trackingCode:de.default.string,openNewWindow:de.default.bool,resultMetaRenderer:de.default.func}).isRequired,result:de.default.shape({strProductName:de.default.string,strMerchantName:de.default.string,lngProductId:de.default.string,dblProductSalePrice:de.default.string}).isRequired};var Ce=P(J()),Xe=P(U());var ws=P(U()),Yn=P(J()),Jt="#c0392b",Xm=12,Dl={saleTagContainer:{position:"relative"},saleTag:{backgroundColor:Jt,color:"#FFF",top:-4,left:-17,padding:"2px 10px",position:"absolute",fontWeight:100,fontSize:Xm-2}};function St(e){let{calculatedPricing:t,styles:n}=e;return t&&t.onSale?ws.default.createElement("div",{style:n.saleTagContainer},ws.default.createElement("div",{style:n.saleTag},"SALE!")):null}St.propTypes={calculatedPricing:Yn.default.shape({onSale:Yn.default.bool}).isRequired,styles:Yn.default.shape({saleTagContainer:Yn.default.shape({}),saleTag:Yn.default.shape({})})};St.defaultProps={styles:Dl};var hn=P(U()),_e=P(J());var Ss={priceContainer:{},priceContainerChild:{fontWeight:500,fontSize:16,textAlign:"center"},salePrice:{margin:"0 10px",textDecoration:"line-through",textDecorationColor:Jt}};function kt({result:e,calculatedPricing:t,styles:n}){return!e?hn.default.createElement("div",{style:n.priceContainer},hn.default.createElement(wt,null)):t.onSale?hn.default.createElement("div",{style:n.priceContainer},hn.default.createElement("div",{style:{...n.salePrice,...n.priceContainerChild}},"$",t.price),hn.default.createElement("div",{style:n.priceContainerChild},"$",e.dblProductSalePrice)):hn.default.createElement("div",{style:n.priceContainer},"$",t.price)}kt.propTypes={result:_e.default.shape({dblProductSalePrice:_e.default.oneOfType([_e.default.number,_e.default.string])}).isRequired,calculatedPricing:_e.default.shape({onSale:_e.default.bool,price:_e.default.oneOfType([_e.default.number,_e.default.string])}).isRequired,styles:_e.default.shape({priceContainer:_e.default.shape({}),priceContainerChild:_e.default.shape({}),salePrice:_e.default.shape({})})};kt.defaultProps={styles:Ss};function Ym(e,t){let n=t.fontSize||Jn,r={container:{float:"left",display:"block",width:e.width,padding:"10px 5px",textAlign:"center",margin:5,color:t.textColor},imageContainer:{height:e.height,width:"100%",textAlign:"center",backgroundImage:`url("${e.image}")`,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%"},imageLink:{cursor:"pointer",height:e.height,width:"100%",display:"block"},titleContainer:{height:32,overflow:"hidden",textAlign:"center",margin:"4px 0",width:"100%"},title:{lineHeight:"1.1em",fontSize:n,color:t.textColor,cursor:"pointer"},button:{color:t.buttonColor,backgroundColor:t.darkColor,display:"inline-block",fontSize:n,padding:"3px 15px",textAlign:"center",cursor:"pointer",textDecoration:"none",borderRadius:3},buttonContainer:{textAlign:"center"},priceContainer:{textAlign:"center",margin:"5px 0",display:"flex",flexWrap:"wrap",justifyContent:"center"},saleTagContainer:{position:"relative"},saleTag:{backgroundColor:t.saleTagColor,color:"#FFF",top:0,right:-10,padding:"2px 10px",position:"absolute",fontWeight:100,fontSize:n-2},salePrice:{margin:"0 10px",textDecoration:"line-through",textDecorationColor:t.saleTagColor||Jt},merchantContainer:{textAlign:"center",marginBottom:5},merchantLink:{fontSize:n-4,color:t.textColor,textDecoration:"none"}};return t.backgroundColor&&(r.container.backgroundColor=t.backgroundColor),t.borderColor&&(r.container.border=`solid 1px ${t.borderColor}`),r}function Ml(e){let{result:t,settings:n}=e,r=qt(t,n.avantlinkWebsiteId,n.trackingCode,n.appId),o=n.width||hp,l=n.height||Tl,i=lt(t,o,l),a=ot(t),s=n.buttonText||"More Info",c=n.openNewWindow?"_blank":"_self",g=Ym({image:i,width:o,height:l},n);return Xe.default.createElement("div",{style:g.container},Xe.default.createElement(St,{styles:g,calculatedPricing:a}),Xe.default.createElement("div",{style:g.imageContainer},Xe.default.createElement("a",{href:r,target:c,rel:"nofollow noreferrer",style:g.imageLink},"\xA0")),Xe.default.createElement("div",{style:g.titleContainer},Xe.default.createElement("a",{href:r,target:c,style:g.title},t.strProductName)),Xe.default.createElement(kt,{styles:g,result:t,calculatedPricing:a}),Xe.default.createElement(Je,{display:n.displayMerchant,styles:g,url:r,target:c,result:t}),Xe.default.createElement("div",{style:g.buttonContainer},Xe.default.createElement("a",{target:c,href:r,rel:"nofollow noreferrer",className:"snapgadget-btn",style:g.button},s)))}Ml.propTypes={settings:Ce.default.shape({width:Ce.default.number,height:Ce.default.number,buttonText:Ce.default.string,appId:Ce.default.number,avantlinkWebsiteId:Ce.default.oneOfType([Ce.default.string,Ce.default.number]),trackingCode:Ce.default.string,openNewWindow:Ce.default.bool,displayMerchant:Ce.default.bool}).isRequired,result:Ce.default.shape({strProductName:Ce.default.string}).isRequired};var D=P(J()),he=P(U());function Km(e,t){let n=t.fontSize||Jn,r={container:{padding:"10px 5px",textAlign:"center",margin:5,color:t.textColor,flex:`${e.width}px`,display:"flex",flexDirection:"column",alignContent:"space-between"},subContainer:{flexGrow:2},imageContainer:{textAlign:"center"},image:{maxHeight:e.height,width:"auto",maxWidth:"100%",cursor:"pointer"},imageLink:{cursor:"pointer",height:e.height,width:"100%",display:"block",textAlign:"center"},titleContainer:{maxHeight:95,overflow:"hidden",textAlign:"center",margin:"8px 0",width:"100%"},title:{lineHeight:"1.1em",fontSize:n,color:t.textColor,cursor:"pointer"},button:{color:t.buttonColor,backgroundColor:t.darkColor,display:"inline-block",fontSize:n,padding:"3px 15px",textAlign:"center",cursor:"pointer",textDecoration:"none",borderRadius:3},buttonContainer:{textAlign:"center"},priceContainer:{display:"flex",flexWrap:"wrap",justifyContent:"center",margin:"5px 0"},saleTagContainer:{position:"relative"},saleTag:{backgroundColor:t.saleTagColor||Jt,color:"#FFF",top:-8,right:-10,padding:"2px 10px",position:"absolute",fontWeight:100,fontSize:n-2},salePrice:{margin:"0 10px",textDecoration:"line-through",textDecorationColor:t.saleTagColor||Jt},merchantContainer:{textAlign:"center",marginBottom:5},merchantLink:{fontSize:n-4,color:t.textColor,textDecoration:"none"}};return t.backgroundColor&&(r.container.backgroundColor=t.backgroundColor),t.borderColor&&(r.container.border=`solid 1px ${t.borderColor}`),e.borderRadius&&(r.container.borderRadius=e.borderRadius),r}function Rl(e){let{result:t,settings:n}=e,r=qt(t,n.avantlinkWebsiteId,n.trackingCode,n.appId),o=n.width||140,l=n.height||Tl,i=n.borderRadius||0,a=lt(t,o,l),s=ot(t),c=n.buttonText||"More Info",g=n.openNewWindow?"_blank":"_self",f=Km({image:a,width:o,height:l,borderRadius:i},n),{forAffiliate:m=!1,displayMerchant:y,resultMetaRenderer:x=null}=n;return he.default.createElement("div",{style:f.container},he.default.createElement("div",{style:f.subContainer},he.default.createElement(St,{styles:f,calculatedPricing:s}),he.default.createElement("div",{style:f.imageContainer},he.default.createElement("a",{href:r,target:g,style:f.imageLink},he.default.createElement("img",{src:a,style:f.image,alt:t.strProductName}))),he.default.createElement("div",{style:f.titleContainer},he.default.createElement("a",{href:r,target:g,style:f.title},t.strProductName)),he.default.createElement(kt,{styles:f,result:t,calculatedPricing:s})),he.default.createElement("div",null,he.default.createElement(Je,{display:y,styles:f,url:r,target:g,result:t}),he.default.createElement("div",{style:f.buttonContainer},he.default.createElement("a",{target:g,href:r,rel:"nofollow noreferrer",className:"snapgadget-btn",style:f.button},c)),m&&he.default.createElement(Gt,{result:t}),x&&x(e)))}Rl.propTypes={settings:D.default.shape({forAffiliate:D.default.bool,borderRadius:D.default.number,width:D.default.number,height:D.default.number,buttonText:D.default.string,appId:D.default.number,avantlinkWebsiteId:D.default.oneOfType([D.default.string,D.default.number]),trackingCode:D.default.string,openNewWindow:D.default.bool,darkColor:D.default.string,borderColor:D.default.string,backgroundColor:D.default.string,textColor:D.default.string,buttonColor:D.default.string,lightColor:D.default.string,displayMerchant:D.default.bool,resultMetaRenderer:D.default.func}).isRequired,result:D.default.shape({strProductName:D.default.string,strMerchantName:D.default.string,lngProductId:D.default.string,dblProductSalePrice:D.default.string}).isRequired};var le=P(U()),qr=P(J());function Gr(e){let{result:t,isOption:n,selected:r}=e,o=!!t,l=96,i=96,a=o?lt(t,l,i):"",s=o?ot(t):0,c={...Dl,saleTag:{...Dl.saleTag,left:0}},g={...Ss,priceContainerChild:{textAlign:"left",margin:0,minWidth:120}};return le.default.createElement("div",{className:"snapgadget-result-bar"},le.default.createElement(St,{calculatedPricing:s,styles:c}),le.default.createElement("div",{style:{width:l}},o?le.default.createElement("img",{src:a,style:{maxWidth:l},alt:t.strProductName,"aria-hidden":"true"}):le.default.createElement(wt,{style:{width:l,maxWidth:l,minHeight:i}})),le.default.createElement("div",{className:"snapgadget-result-bar-info"},le.default.createElement("div",{className:"snapgadget-result-bar-info-name"},o?t.strProductName:le.default.createElement(wt,{count:2,width:"100%"})),le.default.createElement("div",{className:"snapgadget-result-bar-info-merchant"},le.default.createElement(Je,{result:t}),le.default.createElement(Gt,{result:t}),r&&le.default.createElement("div",{className:"snapgadget-result-bar-select-wrap"},"(Press enter to select this link)"))),le.default.createElement("div",{className:"snapgadget-result-bar-info-price"},le.default.createElement(kt,{result:t,calculatedPricing:s,styles:g}),n?le.default.createElement("div",{className:"snapgadget-result-bar-select-wrap"},le.default.createElement("span",{className:"snapgadget-result-bar-select"},"SELECT")):null))}Gr.propTypes={result:qr.default.shape({strProductName:qr.default.string}).isRequired,selected:qr.default.bool,isOption:qr.default.bool};Gr.defaultProps={selected:!1,isOption:!1};function Mp(){return{display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"center",alignContent:"center"}}function $l(e){let t,n={},{allResults:r,settings:o}=e,{resultRender:l}=o;return r&&r.length>0&&(t=r.map(i=>{if(l)return l(i,o);switch(o.resultType){case"flex":return n=Mp(),Xt.default.createElement(Rl,{key:i.lngProductId,result:i,settings:o});case"simple":return Xt.default.createElement(Ml,{key:i.lngProductId,result:i,settings:o});case"detailed":return Xt.default.createElement(Bl,{key:i.lngProductId,result:i,settings:o});case"bar":return Xt.default.createElement(Gr,{key:i.lngProductId,result:i,settings:o});default:return n=Mp(),Xt.default.createElement(Il,{key:i.lngProductId,result:i,settings:o})}})),Xt.default.createElement("div",{className:"snapgadget_results"},Xt.default.createElement("div",{style:n},t))}$l.propTypes={allResults:at.default.arrayOf(at.default.shape({strProductName:at.default.string,strMerchantName:at.default.string,lngProductId:at.default.string,dblProductSalePrice:at.default.string})).isRequired,settings:at.default.shape({resultRender:at.default.bool,resultType:at.default.string}).isRequired};var yn=P(U()),Ye=P(J());var Jr=P(J()),jl=P(U());function Xr(e){let{message:t,className:n,style:r}=e;return jl.default.createElement("div",{style:r.loader,className:`snapgadget-loader-container ${n}`},jl.default.createElement("div",{className:"snapgadget-loader"}),jl.default.createElement("div",{className:"snapgadget-loader-message"},t))}Xr.propTypes={message:Jr.default.string,className:Jr.default.string,style:Jr.default.shape({loader:Jr.default.shape({})})};Xr.defaultProps={message:"",className:"",style:{}};var Zm={textAlign:"center",margin:40,fontSize:14,clear:"both",display:"block"},Rp={textAlign:"center"},eh={width:200,margin:"10px auto"};function Yr(e){let{results:t,totalResults:n,loadingSearch:r,settings:o,hasSearched:l,getMoreResults:i,hasMore:a}=e,{showMoreResults:s,showMoreResultsText:c}=o,g=n||t.length,f="";return r?f=yn.default.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"20%"}},yn.default.createElement(Xr,{message:"Please wait. Loading search results..."})):a&&l&&s?f=yn.default.createElement("button",{type:"button",className:"snapgadget-btn snapgadget-load-more-btn",style:eh,onClick:()=>{i()}},c||"More Results"):g>0&&l&&s?f=yn.default.createElement("p",{style:Rp},"No More Results"):g===0&&l&&s&&(f=yn.default.createElement("p",{style:Rp},"No Results")),yn.default.createElement("div",{style:Zm},f)}Yr.propTypes={results:Ye.default.arrayOf(Ye.default.shape({})).isRequired,totalResults:Ye.default.number,loadingSearch:Ye.default.bool,settings:Ye.default.shape({showMoreResults:Ye.default.bool,showMoreResultsText:Ye.default.string}).isRequired,hasSearched:Ye.default.bool,getMoreResults:Ye.default.func.isRequired,hasMore:Ye.default.bool};Yr.defaultProps={totalResults:null,loadingSearch:!1,hasMore:!1,hasSearched:!1};var _t=P(J()),$p=P(U());function Al(e){let{settings:t}=e,{darkColor:n,lightColor:r,borderColor:o,backgroundColor:l,textColor:i,buttonColor:a,containerCssSelector:s=""}=t,c=`
    ${s} .snapgadget_main_container{
      color: ${i};
      display: flex;
      flex-direction: column;
    }
    ${s} .snapgadget_refine .snapgadget-sort-order{
      border: 1px solid ${n};
      background:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' fill='#FFF' width='50px' height='50px'><polyline points='46.139,15.518 25.166,36.49 4.193,15.519'/></svg>") right no-repeat;
      background-color: ${n};
      color: ${a};
    }
    ${s} .snapgadget_refine .snapgadget-sort-order:active{
      border: 1px solid ${r};
      background-color: ${r};
    }
    ${s} .snapgadget_refine .snapgadget-sort-order:hover{
      border: 1px solid ${r};
      background-color: ${r};
    }
    ${s} .snapgadget_search_container .snapgadget_query_container .snapgadget_query{
      border: solid 2px ${o};
    }
    ${s} .snapgadget_search_container .snapgadget-btn, .snapgadget-load-more-btn, .snapgadget-clear-filter .snapgadget-btn{
      background-color: ${n};
    }
    ${s} .snapgadget_results .snapgadget_result{
      ${o?`border: solid 2px ${o}`:""};
      ${l?`background-color:${l}`:""};
    }
    ${s} .snapgadget_results .snapgadget_result a{
      color: ${i};
    }
    ${s} .snapgadget_results .snapgadget_result .snapgadget_header{
      color: ${i};
    }
    ${s} .snapgadget_results .snapgadget_result .snapgadget_footer .snapgadget_price{
      color: ${i};
    }
  `;return $p.default.createElement("style",{dangerouslySetInnerHTML:{__html:c}})}Al.propTypes={settings:_t.default.shape({darkColor:_t.default.string,borderColor:_t.default.string,backgroundColor:_t.default.string,textColor:_t.default.string,buttonColor:_t.default.string,lightColor:_t.default.string,containerCssSelector:_t.default.string}).isRequired};var vn=P(J()),jp=P(U());function Vl(e){let{settings:t}=e,{darkColor:n,borderColor:r,backgroundColor:o,textColor:l,containerCssSelector:i=""}=t,a=`
    ${i} .snapgadget-result{
      border-left-color: ${n};
      border-left-width: 5px;
      ${r?`border: solid 1px ${r}`:""};
      ${o?`background-color:${o}`:""};
    }
    ${i} .snapgadget-result p{
      color: ${l};
    }
    ${i} .snapgadget-result h4 a{
      color: ${n};
    }
    ${i} .snapgadget-original-price a{
      color: ${l};
    }
  `;return jp.default.createElement("style",{dangerouslySetInnerHTML:{__html:a}})}Vl.propTypes={settings:vn.default.shape({darkColor:vn.default.string,borderColor:vn.default.string,backgroundColor:vn.default.string,textColor:vn.default.string,containerCssSelector:vn.default.string}).isRequired};var Kr=P(U()),Ct=P(J());function Zr(e){let{onChange:t,onSaleOnly:n,settings:r}=e;if(!r.showOnSaleOnly)return null;let{highLightColor:o,fontSize:l=Jn}=r;return Kr.default.createElement("div",{className:"snapgadget_on_sale_only"},Kr.default.createElement("label",{htmlFor:"snapgadget_on_sale_only_input"},Kr.default.createElement("input",{id:"snapgadget_on_sale_only_input",className:"snapgadget_on_sale_only_input",type:"checkbox",value:"1",checked:n,onChange:i=>t(i.target.checked)}),Kr.default.createElement("span",{style:{color:o,fontSize:l,paddingLeft:2}},"Only Show Items On Sale")))}Zr.propTypes={onChange:Ct.default.func.isRequired,onSaleOnly:Ct.default.oneOfType([Ct.default.bool,Ct.default.number]),settings:Ct.default.shape({showOnSaleOnly:Ct.default.bool,highLightColor:Ct.default.string,fontSize:Ct.default.number}).isRequired};Zr.defaultProps={onSaleOnly:!1};function Wl(e){let{settings:t}=e,{showMoreResults:n}=t,{setPage:r,setOnSaleOnly:o}=Fp(),l=Tp(),{onSaleOnly:i,page:a}=l,{results:s,loading:c,hasSearched:g,hasMore:f}=xs(l,!0,!1);return Yt.default.createElement("div",null,Yt.default.createElement(Al,{settings:t}),Yt.default.createElement(Vl,{settings:t}),Yt.default.createElement("div",{className:"snapgadget_controls_row snapgadget_controls_row_reverse"},Yt.default.createElement(Zr,{settings:t,onSaleOnly:i,onChange:m=>o(m)})),Yt.default.createElement($l,{allResults:s,settings:t}),n?Yt.default.createElement(Yr,{results:s,loadingSearch:c,settings:t,hasSearched:g,getMoreResults:()=>r(a+1),hasMore:f}):null)}Wl.propTypes={settings:ks.default.shape({showMoreResults:ks.default.bool}).isRequired};var to=P(eo());function no(e){let{settings:t}=e;return(0,to.jsxs)("div",{className:"snapbase-widget",children:[(0,to.jsx)(Vr,{settings:t,containerCssClass:".snapbase-widget"}),(0,to.jsx)(Wl,{settings:t})]})}no.propTypes={settings:Ee.default.shape({forAffiliate:Ee.default.bool,hideSort:Ee.default.bool,queryParam:Ee.default.string,searchPriceMinimum:Ee.default.number,searchPriceMaximum:Ee.default.number,hideSearch:Ee.default.bool,placeholder:Ee.default.string,slider:Ee.default.oneOfType([Ee.default.bool,Ee.default.number]),allowFiltering:Ee.default.bool,showOnSaleOnly:Ee.default.bool})};no.defaultProps={settings:{}};var ql=P(eo());function ah(e){let t={...e.settings,appId:fs};return(0,ql.jsx)(Ql,{settings:vp(e.settings),children:(0,ql.jsx)(no,{settings:t})})}function Hp(e){let t=document.createElement("style");t.type="text/css",t.appendChild(document.createTextNode(e)),document.head.appendChild(t)}window[Ol]={run(e){Hp(Qp),Hp(Op);let t=document.getElementById(e.element);for(;t.firstChild;)t.removeChild(t.firstChild);(0,qp.createRoot)(t).render((0,ql.jsx)(ah,{settings:yp(e)}))},init(e){ys(()=>window[Ol].run(e))}};})();
/*! (c) Andrea Giammarchi - ISC */
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=widget.js.map
