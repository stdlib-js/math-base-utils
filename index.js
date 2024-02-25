// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).utils=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,o=r-e.length;return o<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(o):n(o)+e,i&&(e="-"+e)),e}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===a.call(e.specifier)?a.call(n):o.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var u=Math.abs,s=String.prototype.toLowerCase,f=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,b=/^(\d+)e/,h=/\.0$/,y=/\.0*e/,v=/(\..*[^0])0*e/;function w(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":u(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=l.call(n,v,"$1e"),n=l.call(n,y,"e"),n=l.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=l.call(n,p,"e+0$1"),n=l.call(n,g,"e-0$1"),e.alternate&&(n=l.call(n,d,"$1."),n=l.call(n,b,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===f.call(e.specifier)?f.call(n):s.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,E=isNaN,j=Array.isArray;function x(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function S(e){var r,t,n,o,a,u,s,f,l,p,g,d,b;if(!j(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(u="",s=1,f=0;f<e.length;f++)if(n=e[f],"string"==typeof n)u+=n;else{if(r=void 0!==n.precision,!(n=x(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(s=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(o=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[s],10),s+=1,E(n.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[s],10),s+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[s],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1;break;case"c":if(!E(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(a)?String(n.arg):_(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=w(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,d=n.padRight,b=void 0,(b=g-p.length)<0?p:p=d?p+m(b):m(b)+p)),u+=n.arg||"",s+=1}return u}var N=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function k(e){var r,t,n,i;for(t=[],i=0,n=N.exec(e);n;)(r=e.slice(i,N.lastIndex-n[0].length)).length&&t.push(r),t.push(T(n)),i=N.lastIndex,n=N.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function I(e){var r,t;if("string"!=typeof e)throw new TypeError(I("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[k(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return S.apply(null,r)}var V,A=Object.prototype,F=A.toString,O=A.__defineGetter__,$=A.__defineSetter__,C=A.__lookupGetter__,P=A.__lookupSetter__;V=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,o,a;if("object"!=typeof e||null===e||"[object Array]"===F.call(e))throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(I("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(e,r)||P.call(e,r)?(n=e.__proto__,e.__proto__=A,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&O&&O.call(e,r,t.get),a&&$&&$.call(e,r,t.set),e};var B=V;function R(e,r,t){B(e,r,{configurable:!1,enumerable:!0,writable:!1,value:t})}var G=Number.POSITIVE_INFINITY;function L(e){return Math.abs(e)}function Z(e){return e!=e}var M=Number.NEGATIVE_INFINITY;function U(e){return e===G||e===M}var W=/./;function X(e,r,t){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function z(e){return"boolean"==typeof e}var Y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function q(){return Y&&"symbol"==typeof Symbol.toStringTag}var D=Object.prototype.toString;var H=Object.prototype.hasOwnProperty;var J="function"==typeof Symbol?Symbol:void 0,K="function"==typeof J?J.toStringTag:"";var Q=q()?function(e){var r,t,n,i,o;if(null==e)return D.call(e);t=e[K],o=K,r=null!=(i=e)&&H.call(i,o);try{e[K]=void 0}catch(r){return D.call(e)}return n=D.call(e),r?e[K]=t:delete e[K],n}:function(e){return D.call(e)},ee=Boolean,re=Boolean.prototype.toString;var te=q();function ne(e){return"object"==typeof e&&(e instanceof ee||(te?function(e){try{return re.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===Q(e)))}function ie(e){return z(e)||ne(e)}X(ie,"isPrimitive",z),X(ie,"isObject",ne);var oe="object"==typeof self?self:null,ae="object"==typeof window?window:null,ce="object"==typeof global?global:null,ue="object"==typeof globalThis?globalThis:null;var se=function(e){if(arguments.length){if(!z(e))throw new TypeError(I("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return new Function("return this;")()}if(ue)return ue;if(oe)return oe;if(ae)return ae;if(ce)return ce;throw new Error("unexpected error. Unable to resolve global object.")}(),fe=se.document&&se.document.childNodes,le=Int8Array;function pe(){return/^\s*function\s*([^(]*)/i}var ge=/^\s*function\s*([^(]*)/i;X(pe,"REGEXP",ge);var de=Array.isArray?Array.isArray:function(e){return"[object Array]"===Q(e)};function be(e){return null!==e&&"object"==typeof e}function he(e){var r,t,n,i;if(("Object"===(t=Q(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=ge.exec(n.toString()))return r[1]}return be(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}X(be,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(I("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,n;if(!de(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(be));var ye="function"==typeof W||"object"==typeof le||"function"==typeof fe?function(e){return he(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?he(e).toLowerCase():r};var ve={"max-abs":function(e,r){return(e=L(e))<(r=L(r))?r:e},max:function(e,r){return e<r?r:e},"min-abs":function(e,r){return(e=L(e))>(r=L(r))?r:e},min:function(e,r){return e>r?r:e},"mean-abs":function(e,r){return(e=L(e))+((r=L(r))-e)/2},mean:function(e,r){return e+(r-e)/2},x:function(e){return e},y:function(e,r){return r}};function we(e,r,t){var n,i;if(Z(e)||Z(r))return NaN;if(e===G||e===M||r===G||r===M)return e===r?NaN:G;if(e===r)return 0;if("function"===ye(t))n=t;else if(void 0===t&&(t="max-abs"),void 0===(n=ve[t]))throw new Error(I("invalid argument. Unrecognized/unsupported scale function. Value: `%s`.",t));return 0===(i=n(e,r))?NaN:L((e-r)/i)}var me=17976931348623157e292,_e=2220446049250313e-31;var Ee={};return R(Ee,"absdiff",(function(e,r){return Z(e)||Z(r)?NaN:U(e)||U(r)?e===r?NaN:G:L(e-r)})),R(Ee,"epsdiff",(function(e,r,t){var n=we(e,r,t||"max-abs");return Z(n)||n===G?n:n>=3991680619069439e277?me:n/_e})),R(Ee,"reldiff",we),Ee}));
//# sourceMappingURL=index.js.map