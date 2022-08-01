// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).utils={})}(this,(function(e){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,n=Object.defineProperty,o=Object.prototype,u=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,a=o.__lookupGetter__,c=o.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?n:function(e,r,t){var n,l,s,p;if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(a.call(e,r)||c.call(e,r)?(n=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),s="get"in t,p="set"in t,l&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(e,r,t.get),p&&f&&f.call(e,r,t.set),e};var l=t;function s(e,r,t){l(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var p=Number.POSITIVE_INFINITY;function y(e){return Math.abs(e)}function b(e){return e!=e}var d=Number.NEGATIVE_INFINITY;function v(e){return e===p||e===d}function m(e,r){return b(e)||b(r)?NaN:v(e)||v(r)?e===r?NaN:p:y(e-r)}var _=/./;function w(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function g(e){return"boolean"==typeof e}var j="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function h(){return j&&"symbol"==typeof Symbol.toStringTag}var N=Object.prototype.toString;var S=Object.prototype.hasOwnProperty;var E="function"==typeof Symbol?Symbol.toStringTag:"";var O=h()?function(e){var r,t,n,o,u;if(null==e)return N.call(e);t=e[E],u=E,r=null!=(o=e)&&S.call(o,u);try{e[E]=void 0}catch(r){return N.call(e)}return n=N.call(e),r?e[E]=t:delete e[E],n}:function(e){return N.call(e)},T=Boolean.prototype.toString;var x=h();function A(e){return"object"==typeof e&&(e instanceof Boolean||(x?function(e){try{return T.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===O(e)))}function I(e){return g(e)||A(e)}function P(){return new Function("return this;")()}w(I,"isPrimitive",g),w(I,"isObject",A);var B="object"==typeof self?self:null,V="object"==typeof window?window:null,F="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},G="object"==typeof F?F:null;var M=function(e){if(arguments.length){if(!g(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return P()}if(B)return B;if(V)return V;if(G)return G;throw new Error("unexpected error. Unable to resolve global object.")}(),k=M.document&&M.document.childNodes,C=Int8Array;function L(){return/^\s*function\s*([^(]*)/i}var U=/^\s*function\s*([^(]*)/i;w(L,"REGEXP",U);var Y=Array.isArray?Array.isArray:function(e){return"[object Array]"===O(e)};function z(e){return null!==e&&"object"==typeof e}function R(e){var r,t,n,o;if(("Object"===(t=O(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=U.exec(n.toString()))return r[1]}return z(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}w(z,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!Y(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(z));var X="function"==typeof _||"object"==typeof C||"function"==typeof k?function(e){return R(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?R(e).toLowerCase():r};var q={"max-abs":function(e,r){return(e=y(e))<(r=y(r))?r:e},max:function(e,r){return e<r?r:e},"min-abs":function(e,r){return(e=y(e))>(r=y(r))?r:e},min:function(e,r){return e>r?r:e},"mean-abs":function(e,r){return(e=y(e))+((r=y(r))-e)/2},mean:function(e,r){return e+(r-e)/2},x:function(e){return e},y:function(e,r){return r}};function D(e,r,t){var n,o;if(b(e)||b(r))return NaN;if(e===p||e===d||r===p||r===d)return e===r?NaN:p;if(e===r)return 0;if("function"===X(t))n=t;else if(void 0===t&&(t="max-abs"),void 0===(n=q[t]))throw new Error("invalid argument. Unrecognized/unsupported scale function. Value: `"+t+"`.");return 0===(o=n(e,r))?NaN:y((e-r)/o)}var H=17976931348623157e292,J=2220446049250313e-31;function K(e,r,t){var n=D(e,r,t||"max-abs");return b(n)||n===p?n:n>=3991680619069439e277?H:n/J}var Q={};s(Q,"absdiff",m),s(Q,"epsdiff",K),s(Q,"reldiff",D),e.absdiff=m,e.default=Q,e.epsdiff=K,e.reldiff=D,Object.defineProperty(e,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map