(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6c1af8e"],{"04a7":function(e,t,n){"use strict";var r=n("d844");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},"050d":function(e,t,n){"use strict";var r=n("d844");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var s;if(n)s=n(t);else if(r.isURLSearchParams(t))s=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(o(t)+"="+o(e))})))})),s=i.join("&")}if(s){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+s}return e}},"068e":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},"0bbf":function(e,t,n){"use strict";var r=n("d844"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,s,i={};return e?(r.forEach(e.split("\n"),(function(e){if(s=e.indexOf(":"),t=r.trim(e.substr(0,s)).toLowerCase(),n=r.trim(e.substr(s+1)),t){if(i[t]&&o.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},"11f4":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"155b":function(e,t,n){"use strict";var r=n("068e");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o((function(t){e=t}));return{token:t,cancel:e}},e.exports=o},"1eb2":function(e,t,n){"use strict";var r=n("c5b9");e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},"2ed0":function(e,t,n){"use strict";(function(t){var r=n("d844"),o=n("9d72"),s={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function a(){var e;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof t&&"[object process]"===Object.prototype.toString.call(t))&&(e=n("a169")),e}var c={adapter:a(),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(s)})),e.exports=c}).call(this,n("4362"))},"43d9":function(e,t,n){"use strict";var r=n("d844"),o=n("faf0"),s=n("4a67"),i=n("c9ba"),a=n("2ed0");function c(e){var t=new s(e),n=o(s.prototype.request,t);return r.extend(n,s.prototype,t),r.extend(n,t),n}var u=c(a);u.Axios=s,u.create=function(e){return c(i(u.defaults,e))},u.Cancel=n("068e"),u.CancelToken=n("155b"),u.isCancel=n("11f4"),u.all=function(e){return Promise.all(e)},u.spread=n("53f3"),e.exports=u,e.exports.default=u},"48ab":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("ul",e._l(e.nav,(function(t,r){return n("router-link",{key:r,staticClass:"lis",attrs:{tag:"li",to:"/"+t.navId}},[n("img",{ref:"img",refInFor:!0,attrs:{src:t.navIcon.def},on:{click:function(n){return e.seturl(n,t,r)}}})])})),1)])},o=[],s={data:function(){return{nav:[{navId:"home",navUrl:"https://m.jd.com",navIcon:{active:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png",def:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/81741/30/12345/4140/5d9c4b13E726f0a1e/82c582e7c375e4b3.png"}},{navId:"category",navUrl:"https://so.m.jd.com/category/all.html",navIcon:{active:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/48787/24/12910/3390/5d9c4b12Ee63270e4/4481f5b3dbad979d.png",def:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png"}},{navId:"find",navUrl:"https://wqs.jd.com/portal/wx/tuan/pingouv3.shtml?sceneval=2&fromM=1",navIcon:{active:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/70651/38/12417/3194/5d9d3eafE12cde68b/2467c20113c50451.png",def:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/70651/38/12417/3194/5d9d3eafE12cde68b/2467c20113c50451.png"}},{navId:"cart",navUrl:"https://p.m.jd.com/cart/cart.action?fromnav=1",navIcon:{active:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/45205/32/12889/3890/5d9c4b12E7bc2c425/dd60fafbde8542ca.png",def:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png"}},{navId:"me",navUrl:"https://home.m.jd.com/myJd/newhome.action",navIcon:{active:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/47480/36/12929/3209/5d9c4b13E97caa63a/4dc0ec8a7e47c2b7.png",def:"https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56206/13/12652/2957/5d9c4b13E503bcd76/1c8543653685e80e.png"}}]}},methods:{seturl:function(e,t,n){for(var r=document.getElementsByClassName("lis"),o=0;o<r.length;o++)r[o].children[0].src=this.nav[o].navIcon.def;e.target.src=t.navIcon.active}},mounted:function(){"/home"==this.$route.path?this.$refs.img[0].src=this.nav[0].navIcon.active:"/category"==this.$route.path?this.$refs.img[1].src=this.nav[1].navIcon.active:"/find"==this.$route.path?this.$refs.img[2].src=this.nav[2].navIcon.active:"/cart"==this.$route.path?this.$refs.img[3].src=this.nav[3].navIcon.active:"/me"==this.$route.path&&(this.$refs.img[4].src=this.nav[4].navIcon.active)}},i=s,a=(n("fedc"),n("2877")),c=Object(a["a"])(i,r,o,!1,null,"02dbdd8c",null);t["a"]=c.exports},"4a67":function(e,t,n){"use strict";var r=n("d844"),o=n("050d"),s=n("54b5"),i=n("c70f"),a=n("c9ba");function c(e){this.defaults=e,this.interceptors={request:new s,response:new s}}c.prototype.request=function(e){"string"===typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=a(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],n=Promise.resolve(e);this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));while(t.length)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=c},"4f37":function(e,t,n){"use strict";var r=n("ca19"),o=n("c4e8");e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},"53f3":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"54b5":function(e,t,n){"use strict";var r=n("d844");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},"744c":function(e,t,n){},"82ae":function(e,t,n){e.exports=n("43d9")},"83fe":function(e,t,n){"use strict";var r=n("d844");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,s,i){var a=[];a.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(o)&&a.push("path="+o),r.isString(s)&&a.push("domain="+s),!0===i&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"9d72":function(e,t,n){"use strict";var r=n("d844");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},a169:function(e,t,n){"use strict";var r=n("d844"),o=n("1eb2"),s=n("050d"),i=n("4f37"),a=n("0bbf"),c=n("edb4"),u=n("c5b9");e.exports=function(e){return new Promise((function(t,f){var d=e.data,p=e.headers;r.isFormData(d)&&delete p["Content-Type"];var h=new XMLHttpRequest;if(e.auth){var l=e.auth.username||"",m=e.auth.password||"";p.Authorization="Basic "+btoa(l+":"+m)}var v=i(e.baseURL,e.url);if(h.open(e.method.toUpperCase(),s(v,e.params,e.paramsSerializer),!0),h.timeout=e.timeout,h.onreadystatechange=function(){if(h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in h?a(h.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?h.response:h.responseText,s={data:r,status:h.status,statusText:h.statusText,headers:n,config:e,request:h};o(t,f,s),h=null}},h.onabort=function(){h&&(f(u("Request aborted",e,"ECONNABORTED",h)),h=null)},h.onerror=function(){f(u("Network Error",e,null,h)),h=null},h.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),f(u(t,e,"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var g=n("83fe"),y=(e.withCredentials||c(v))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;y&&(p[e.xsrfHeaderName]=y)}if("setRequestHeader"in h&&r.forEach(p,(function(e,t){"undefined"===typeof d&&"content-type"===t.toLowerCase()?delete p[t]:h.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(h.withCredentials=!!e.withCredentials),e.responseType)try{h.responseType=e.responseType}catch(b){if("json"!==e.responseType)throw b}"function"===typeof e.onDownloadProgress&&h.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){h&&(h.abort(),f(e),h=null)})),void 0===d&&(d=null),h.send(d)}))}},bd2a:function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},c4e8:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},c5b9:function(e,t,n){"use strict";var r=n("bd2a");e.exports=function(e,t,n,o,s){var i=new Error(e);return r(i,t,n,o,s)}},c70f:function(e,t,n){"use strict";var r=n("d844"),o=n("04a7"),s=n("11f4"),i=n("2ed0");function a(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){a(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]}));var t=e.adapter||i.adapter;return t(e).then((function(t){return a(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return s(t)||(a(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},c9ba:function(e,t,n){"use strict";var r=n("d844");e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],s=["headers","auth","proxy"],i=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(e){"undefined"!==typeof t[e]&&(n[e]=t[e])})),r.forEach(s,(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):"undefined"!==typeof t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):"undefined"!==typeof e[o]&&(n[o]=e[o])})),r.forEach(i,(function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])}));var a=o.concat(s).concat(i),c=Object.keys(t).filter((function(e){return-1===a.indexOf(e)}));return r.forEach(c,(function(r){"undefined"!==typeof t[r]?n[r]=t[r]:"undefined"!==typeof e[r]&&(n[r]=e[r])})),n}},ca19:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},d844:function(e,t,n){"use strict";var r=n("faf0"),o=Object.prototype.toString;function s(e){return"[object Array]"===o.call(e)}function i(e){return"undefined"===typeof e}function a(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function c(e){return"[object ArrayBuffer]"===o.call(e)}function u(e){return"undefined"!==typeof FormData&&e instanceof FormData}function f(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function d(e){return"string"===typeof e}function p(e){return"number"===typeof e}function h(e){return null!==e&&"object"===typeof e}function l(e){return"[object Date]"===o.call(e)}function m(e){return"[object File]"===o.call(e)}function v(e){return"[object Blob]"===o.call(e)}function g(e){return"[object Function]"===o.call(e)}function y(e){return h(e)&&g(e.pipe)}function b(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function x(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function w(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function j(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function E(){var e={};function t(t,n){"object"===typeof e[n]&&"object"===typeof t?e[n]=E(e[n],t):e[n]=t}for(var n=0,r=arguments.length;n<r;n++)j(arguments[n],t);return e}function C(){var e={};function t(t,n){"object"===typeof e[n]&&"object"===typeof t?e[n]=C(e[n],t):e[n]="object"===typeof t?C({},t):t}for(var n=0,r=arguments.length;n<r;n++)j(arguments[n],t);return e}function S(e,t,n){return j(t,(function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t})),e}e.exports={isArray:s,isArrayBuffer:c,isBuffer:a,isFormData:u,isArrayBufferView:f,isString:d,isNumber:p,isObject:h,isUndefined:i,isDate:l,isFile:m,isBlob:v,isFunction:g,isStream:y,isURLSearchParams:b,isStandardBrowserEnv:w,forEach:j,merge:E,deepMerge:C,extend:S,trim:x}},edb4:function(e,t,n){"use strict";var r=n("d844");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},faf0:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},fedc:function(e,t,n){"use strict";var r=n("744c"),o=n.n(r);o.a}}]);