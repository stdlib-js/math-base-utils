// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,o=Object.prototype,u=o.toString,a=o.__defineGetter__,i=o.__defineSetter__,f=o.__lookupGetter__,c=o.__lookupSetter__;var l=function(r,e,t){var n,l,v,s;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(f.call(r,e)||c.call(r,e)?(n=r.__proto__,r.__proto__=o,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),v="get"in t,s="set"in t,l&&(v||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&a&&a.call(r,e,t.get),s&&i&&i.call(r,e,t.set),r},v=n,s=l,b=t()?v:s,p=b;var y=function(r,e,t){p(r,e,{configurable:!1,enumerable:!0,writable:!1,value:t})},d=y,_=Number.POSITIVE_INFINITY;var m=function(r){return Math.abs(r)},j=m;var g=function(r){return r!=r},w=g,h=Number.NEGATIVE_INFINITY,N=_,O=h;var E=function(r){return r===N||r===O},S=_,P=j,A=w,I=E;var T=function(r,e){return A(r)||A(e)?NaN:I(r)||I(e)?r===e?NaN:S:P(r-e)},x=T,B=/./,V=b;var G=function(r,e,t){V(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},M=G;var k=function(r){return"boolean"==typeof r};var F=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var C=function(){return F&&"symbol"==typeof Symbol.toStringTag},L=Object.prototype.toString,z=L;var R=function(r){return z.call(r)},U=Object.prototype.hasOwnProperty;var X=function(r,e){return null!=r&&U.call(r,e)},Y="function"==typeof Symbol?Symbol.toStringTag:"",D=X,q=Y,H=L;var J=R,K=function(r){var e,t,n;if(null==r)return H.call(r);t=r[q],e=D(r,q);try{r[q]=void 0}catch(e){return H.call(r)}return n=H.call(r),e?r[q]=t:delete r[q],n},Q=C()?K:J,W=Boolean.prototype.toString;var Z=Q,$=function(r){try{return W.call(r),!0}catch(r){return!1}},rr=C();var er=function(r){return"object"==typeof r&&(r instanceof Boolean||(rr?$(r):"[object Boolean]"===Z(r)))},tr=k,nr=er;var or=M,ur=function(r){return tr(r)||nr(r)},ar=er;or(ur,"isPrimitive",k),or(ur,"isObject",ar);var ir="object"==typeof self?self:null,fr="object"==typeof window?window:null,cr=ur.isPrimitive,lr=function(){return new Function("return this;")()},vr=ir,sr=fr,br=r(Object.freeze({__proto__:null}));var pr=function(r){if(arguments.length){if(!cr(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return lr()}if(vr)return vr;if(sr)return sr;if(br)return br;throw new Error("unexpected error. Unable to resolve global object.")},yr=pr(),dr=yr.document&&yr.document.childNodes,_r=Int8Array,mr=B,jr=dr,gr=_r;var wr=function(){return"function"==typeof mr||"object"==typeof gr||"function"==typeof jr};var hr=function(){return/^\s*function\s*([^(]*)/i},Nr=hr;M(Nr,"REGEXP",hr());var Or=Nr,Er=Q;var Sr=Array.isArray?Array.isArray:function(r){return"[object Array]"===Er(r)};var Pr=function(r){return null!==r&&"object"==typeof r};M(Pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!Sr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(Pr));var Ar=Pr;var Ir=Q,Tr=Or.REGEXP,xr=function(r){return Ar(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Br=function(r){var e,t,n;if(("Object"===(t=Ir(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Tr.exec(n.toString()))return e[1]}return xr(r)?"Buffer":t},Vr=Br;var Gr=Br;var Mr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?Vr(r).toLowerCase():e},kr=function(r){return Gr(r).toLowerCase()},Fr=wr()?kr:Mr;var Cr=j;var Lr=function(r,e){return(r=Cr(r))<(e=Cr(e))?e:r};var zr=function(r,e){return r<e?e:r},Rr=j;var Ur=function(r,e){return(r=Rr(r))>(e=Rr(e))?e:r};var Xr=function(r,e){return r>e?e:r},Yr=j;var Dr=function(r,e){return(r=Yr(r))+((e=Yr(e))-r)/2};var qr=function(r,e){return r+(e-r)/2};var Hr=function(r){return r};var Jr=function(r,e){return e},Kr=function(r){return"function"===Fr(r)},Qr=w,Wr=_,Zr=h,$r=j,re={"max-abs":Lr,max:zr,"min-abs":Ur,min:Xr,"mean-abs":Dr,mean:qr,x:Hr,y:Jr};var ee=function(r,e,t){var n,o;if(Qr(r)||Qr(e))return NaN;if(r===Wr||r===Zr||e===Wr||e===Zr)return r===e?NaN:Wr;if(r===e)return 0;if(Kr(t))n=t;else if(void 0===t&&(t="max-abs"),void 0===(n=re[t]))throw new Error("invalid argument. Unrecognized/unsupported scale function. Value: `"+t+"`.");return 0===(o=n(r,e))?NaN:$r((r-e)/o)},te=ee,ne=te,oe=w,ue=_,ae=17976931348623157e292,ie=2220446049250313e-31;var fe=function(r,e,t){var n=ne(r,e,t||"max-abs");return oe(n)||n===ue?n:n>=3991680619069439e277?ae:n/ie},ce=fe,le=d,ve={};le(ve,"absdiff",x),le(ve,"epsdiff",ce),le(ve,"reldiff",te);var se=ve;export{x as absdiff,se as default,ce as epsdiff,te as reldiff};
//# sourceMappingURL=mod.js.map
