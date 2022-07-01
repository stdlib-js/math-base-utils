// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).utils=e()}(this,(function(){"use strict";function r(r){var e=r.default;if("function"==typeof e){var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,e,t){var n,l,p,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,e)||c.call(r,e)?(n=r.__proto__,r.__proto__=o,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),p="get"in t,v="set"in t,l&&(p||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(r,e,t.get),v&&a&&a.call(r,e,t.set),r},p=n,v=l,s=t()?p:v,y=s;var b=function(r,e,t){y(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})},d=b,m=Number.POSITIVE_INFINITY;var _=function(r){return Math.abs(r)},g=_;var j=function(r){return r!=r},w=j,h=Number.NEGATIVE_INFINITY,N=m,O=h;var E=function(r){return r===N||r===O},S=m,P=g,T=w,x=E;var A=function(r,e){return T(r)||T(e)?NaN:x(r)||x(e)?r===e?NaN:S:P(r-e)},I=A,B=/./,V=s;var G=function(r,e,t){V(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},k=G;var F=function(r){return"boolean"==typeof r};var M=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var C=function(){return M&&"symbol"==typeof Symbol.toStringTag},L=Object.prototype.toString,z=L;var R=function(r){return z.call(r)},U=Object.prototype.hasOwnProperty;var X=function(r,e){return null!=r&&U.call(r,e)},Y="function"==typeof Symbol?Symbol.toStringTag:"",D=X,q=Y,H=L;var J=R,K=function(r){var e,t,n;if(null==r)return H.call(r);t=r[q],e=D(r,q);try{r[q]=void 0}catch(e){return H.call(r)}return n=H.call(r),e?r[q]=t:delete r[q],n},Q=C()?K:J,W=Boolean.prototype.toString;var Z=Q,$=function(r){try{return W.call(r),!0}catch(r){return!1}},rr=C();var er=function(r){return"object"==typeof r&&(r instanceof Boolean||(rr?$(r):"[object Boolean]"===Z(r)))},tr=F,nr=er;var or=k,ur=function(r){return tr(r)||nr(r)},ir=er;or(ur,"isPrimitive",F),or(ur,"isObject",ir);var ar=ur;var fr=function(){return new Function("return this;")()},cr="object"==typeof self?self:null,lr="object"==typeof window?window:null,pr="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},vr="object"==typeof pr?pr:null;module.exports=vr;var sr=ar.isPrimitive,yr=fr,br=cr,dr=lr,mr=r(Object.freeze({__proto__:null}));var _r=function(r){if(arguments.length){if(!sr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return yr()}if(br)return br;if(dr)return dr;if(mr)return mr;throw new Error("unexpected error. Unable to resolve global object.")},gr=_r(),jr=gr.document&&gr.document.childNodes,wr=Int8Array,hr=B,Nr=jr,Or=wr;var Er=function(){return"function"==typeof hr||"object"==typeof Or||"function"==typeof Nr};var Sr=function(){return/^\s*function\s*([^(]*)/i},Pr=Sr;k(Pr,"REGEXP",Sr());var Tr=Pr,xr=Q;var Ar=Array.isArray?Array.isArray:function(r){return"[object Array]"===xr(r)};var Ir=function(r){return null!==r&&"object"==typeof r};k(Ir,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!Ar(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Ir));var Br=Ir;var Vr=Q,Gr=Tr.REGEXP,kr=function(r){return Br(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Fr=function(r){var e,t,n;if(("Object"===(t=Vr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Gr.exec(n.toString()))return e[1]}return kr(r)?"Buffer":t},Mr=Fr;var Cr=Fr;var Lr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?Mr(r).toLowerCase():e},zr=function(r){return Cr(r).toLowerCase()},Rr=Er()?zr:Lr;var Ur=g;var Xr=function(r,e){return(r=Ur(r))<(e=Ur(e))?e:r};var Yr=function(r,e){return r<e?e:r},Dr=g;var qr=function(r,e){return(r=Dr(r))>(e=Dr(e))?e:r};var Hr=function(r,e){return r>e?e:r},Jr=g;var Kr=function(r,e){return(r=Jr(r))+((e=Jr(e))-r)/2};var Qr=function(r,e){return r+(e-r)/2};var Wr=function(r){return r};var Zr=function(r,e){return e},$r=function(r){return"function"===Rr(r)},re=w,ee=m,te=h,ne=g,oe={"max-abs":Xr,max:Yr,"min-abs":qr,min:Hr,"mean-abs":Kr,mean:Qr,x:Wr,y:Zr};var ue=function(r,e,t){var n,o;if(re(r)||re(e))return NaN;if(r===ee||r===te||e===ee||e===te)return r===e?NaN:ee;if(r===e)return 0;if($r(t))n=t;else if(void 0===t&&(t="max-abs"),void 0===(n=oe[t]))throw new Error("invalid argument. Unrecognized/unsupported scale function. Value: `"+t+"`.");return 0===(o=n(r,e))?NaN:ne((r-e)/o)},ie=ue,ae=ie,fe=w,ce=m,le=17976931348623157e292,pe=2220446049250313e-31;var ve=function(r,e,t){var n=ae(r,e,t||"max-abs");return fe(n)||n===ce?n:n>=3991680619069439e277?le:n/pe},se=ve,ye={};return d(ye,"absdiff",I),d(ye,"epsdiff",se),d(ye,"reldiff",ie),ye}));
//# sourceMappingURL=index.js.map
