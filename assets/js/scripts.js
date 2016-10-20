!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],function(n){return t(e,n)}):"object"==typeof exports?t(e,require("jquery")):t(e,e.jQuery||e.Zepto)}(this,function(e,t){"use strict";function n(e){if(O&&"none"===e.css("animation-name")&&"none"===e.css("-webkit-animation-name")&&"none"===e.css("-moz-animation-name")&&"none"===e.css("-o-animation-name")&&"none"===e.css("-ms-animation-name"))return 0;var t,n,o,i,r=e.css("animation-duration")||e.css("-webkit-animation-duration")||e.css("-moz-animation-duration")||e.css("-o-animation-duration")||e.css("-ms-animation-duration")||"0s",a=e.css("animation-delay")||e.css("-webkit-animation-delay")||e.css("-moz-animation-delay")||e.css("-o-animation-delay")||e.css("-ms-animation-delay")||"0s",s=e.css("animation-iteration-count")||e.css("-webkit-animation-iteration-count")||e.css("-moz-animation-iteration-count")||e.css("-o-animation-iteration-count")||e.css("-ms-animation-iteration-count")||"1";for(r=r.split(", "),a=a.split(", "),s=s.split(", "),i=0,n=r.length,t=Number.NEGATIVE_INFINITY;i<n;i++)o=parseFloat(r[i])*parseInt(s[i],10)+parseFloat(a[i]),o>t&&(t=o);return t}function o(){if(t(document.body).height()<=t(window).height())return 0;var e,n,o=document.createElement("div"),i=document.createElement("div");return o.style.visibility="hidden",o.style.width="100px",document.body.appendChild(o),e=o.offsetWidth,o.style.overflow="scroll",i.style.width="100%",o.appendChild(i),n=i.offsetWidth,o.parentNode.removeChild(o),e-n}function i(){if(!C){var e,n,i=t("html"),r=l("is-locked");i.hasClass(r)||(n=t(document.body),e=parseInt(n.css("padding-right"),10)+o(),n.css("padding-right",e+"px"),i.addClass(r))}}function r(){if(!C){var e,n,i=t("html"),r=l("is-locked");i.hasClass(r)&&(n=t(document.body),e=parseInt(n.css("padding-right"),10)-o(),n.css("padding-right",e+"px"),i.removeClass(r))}}function a(e,t,n,o){var i=l("is",t),r=[l("is",E.CLOSING),l("is",E.OPENING),l("is",E.CLOSED),l("is",E.OPENED)].join(" ");e.$bg.removeClass(r).addClass(i),e.$overlay.removeClass(r).addClass(i),e.$wrapper.removeClass(r).addClass(i),e.$modal.removeClass(r).addClass(i),e.state=t,!n&&e.$modal.trigger({type:t,reason:o},[{reason:o}])}function s(e,o,i){var r=0,a=function(e){e.target===this&&r++},s=function(e){e.target===this&&0===--r&&(t.each(["$bg","$overlay","$wrapper","$modal"],function(e,t){i[t].off(y+" "+g)}),o())};t.each(["$bg","$overlay","$wrapper","$modal"],function(e,t){i[t].on(y,a).on(g,s)}),e(),0===n(i.$bg)&&0===n(i.$overlay)&&0===n(i.$wrapper)&&0===n(i.$modal)&&(t.each(["$bg","$overlay","$wrapper","$modal"],function(e,t){i[t].off(y+" "+g)}),o())}function u(e){e.state!==E.CLOSED&&(t.each(["$bg","$overlay","$wrapper","$modal"],function(t,n){e[n].off(y+" "+g)}),e.$bg.removeClass(e.settings.modifier),e.$overlay.removeClass(e.settings.modifier).hide(),e.$wrapper.hide(),r(),a(e,E.CLOSED,!0))}function c(e){var t,n,o,i,r={};for(e=e.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),t=e.split(","),i=0,n=t.length;i<n;i++)t[i]=t[i].split(":"),o=t[i][1],("string"==typeof o||o instanceof String)&&(o="true"===o||"false"!==o&&o),("string"==typeof o||o instanceof String)&&(o=isNaN(o)?o:+o),r[t[i][0]]=o;return r}function l(){for(var e=v,t=0;t<arguments.length;++t)e+="-"+arguments[t];return e}function f(){var e,n,o=location.hash.replace("#","");if(o){try{n=t('[data-remodal-id="'+o+'"]')}catch(e){}n&&n.length&&(e=t[m].lookup[n.data(m)],e&&e.settings.hashTracking&&e.open())}else h&&h.state===E.OPENED&&h.settings.hashTracking&&h.close()}function d(e,n){var o=t(document.body),i=o,r=this;r.settings=t.extend({},w,n),r.index=t[m].lookup.push(r)-1,r.state=E.CLOSED,r.$overlay=t("."+l("overlay")),null!==r.settings.appendTo&&r.settings.appendTo.length&&(i=t(r.settings.appendTo)),r.$overlay.length||(r.$overlay=t("<div>").addClass(l("overlay")+" "+l("is",E.CLOSED)).hide(),i.append(r.$overlay)),r.$bg=t("."+l("bg")).addClass(l("is",E.CLOSED)),r.$modal=e.addClass(v+" "+l("is-initialized")+" "+r.settings.modifier+" "+l("is",E.CLOSED)).attr("tabindex","-1"),r.$wrapper=t("<div>").addClass(l("wrapper")+" "+r.settings.modifier+" "+l("is",E.CLOSED)).hide().append(r.$modal),i.append(r.$wrapper),r.$wrapper.on("click."+v,'[data-remodal-action="close"]',function(e){e.preventDefault(),r.close()}),r.$wrapper.on("click."+v,'[data-remodal-action="cancel"]',function(e){e.preventDefault(),r.$modal.trigger(b.CANCELLATION),r.settings.closeOnCancel&&r.close(b.CANCELLATION)}),r.$wrapper.on("click."+v,'[data-remodal-action="confirm"]',function(e){e.preventDefault(),r.$modal.trigger(b.CONFIRMATION),r.settings.closeOnConfirm&&r.close(b.CONFIRMATION)}),r.$wrapper.on("click."+v,function(e){var n=t(e.target);n.hasClass(l("wrapper"))&&r.settings.closeOnOutsideClick&&r.close()})}var h,p,m="remodal",v=e.REMODAL_GLOBALS&&e.REMODAL_GLOBALS.NAMESPACE||m,y=t.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(e){return e+"."+v}).join(" "),g=t.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(e){return e+"."+v}).join(" "),w=t.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},e.REMODAL_GLOBALS&&e.REMODAL_GLOBALS.DEFAULTS),E={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},b={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},O=function(){var e=document.createElement("div").style;return void 0!==e.animationName||void 0!==e.WebkitAnimationName||void 0!==e.MozAnimationName||void 0!==e.msAnimationName||void 0!==e.OAnimationName}(),C=/iPad|iPhone|iPod/.test(navigator.platform);d.prototype.open=function(){var e,n=this;n.state!==E.OPENING&&n.state!==E.CLOSING&&(e=n.$modal.attr("data-remodal-id"),e&&n.settings.hashTracking&&(p=t(window).scrollTop(),location.hash=e),h&&h!==n&&u(h),h=n,i(),n.$bg.addClass(n.settings.modifier),n.$overlay.addClass(n.settings.modifier).show(),n.$wrapper.show().scrollTop(0),n.$modal.focus(),s(function(){a(n,E.OPENING)},function(){a(n,E.OPENED)},n))},d.prototype.close=function(e){var n=this;n.state!==E.OPENING&&n.state!==E.CLOSING&&(n.settings.hashTracking&&n.$modal.attr("data-remodal-id")===location.hash.substr(1)&&(location.hash="",t(window).scrollTop(p)),s(function(){a(n,E.CLOSING,!1,e)},function(){n.$bg.removeClass(n.settings.modifier),n.$overlay.removeClass(n.settings.modifier).hide(),n.$wrapper.hide(),r(),a(n,E.CLOSED,!1,e)},n))},d.prototype.getState=function(){return this.state},d.prototype.destroy=function(){var e,n=t[m].lookup;u(this),this.$wrapper.remove(),delete n[this.index],e=t.grep(n,function(e){return!!e}).length,0===e&&(this.$overlay.remove(),this.$bg.removeClass(l("is",E.CLOSING)+" "+l("is",E.OPENING)+" "+l("is",E.CLOSED)+" "+l("is",E.OPENED)))},t[m]={lookup:[]},t.fn[m]=function(e){var n,o;return this.each(function(i,r){o=t(r),null==o.data(m)?(n=new d(o,e),o.data(m,n.index),n.settings.hashTracking&&o.attr("data-remodal-id")===location.hash.substr(1)&&n.open()):n=t[m].lookup[o.data(m)]}),n},t(document).ready(function(){t(document).on("click","[data-remodal-target]",function(e){e.preventDefault();var n=e.currentTarget,o=n.getAttribute("data-remodal-target"),i=t('[data-remodal-id="'+o+'"]');t[m].lookup[i.data(m)].open()}),t(document).find("."+v).each(function(e,n){var o=t(n),i=o.data("remodal-options");i?("string"==typeof i||i instanceof String)&&(i=c(i)):i={},o[m](i)}),t(document).on("keydown."+v,function(e){h&&h.settings.closeOnEscape&&h.state===E.OPENED&&27===e.keyCode&&h.close()}),t(window).on("hashchange."+v,f)})}),!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e.Vimeo=e.Vimeo||{},e.Vimeo.Player=t())}(this,function(){"use strict";function e(e,t){return t={exports:{}},e(t,t.exports),t.exports}function t(e,t,n){var o=O.get(e.element)||{};t in o||(o[t]=[]),o[t].push(n),O.set(e.element,o)}function n(e,t){var n=O.get(e.element)||{};return n[t]||[]}function o(e,t,n){var o=O.get(e.element)||{};if(!o[t])return!0;if(!n)return o[t]=[],O.set(e.element,o),!0;var i=o[t].indexOf(n);return i!==-1&&o[t].splice(i,1),O.set(e.element,o),o[t]&&0===o[t].length}function i(e,t){var n=O.get(e);O.set(t,n),O.delete(e)}function r(e,t){return 0===e.indexOf(t.toLowerCase())?e:""+t.toLowerCase()+e.substr(0,1).toUpperCase()+e.substr(1)}function a(e){return e instanceof window.HTMLElement}function s(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function u(e){return/^(https?:)?\/\/(player.)?vimeo.com(?=$|\/)/.test(e)}function c(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.id,n=e.url,o=t||n;if(!o)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(s(o))return"https://vimeo.com/"+o;if(u(o))return o.replace("http:","https:");if(t)throw new TypeError("“"+t+"” is not a valid video id.");throw new TypeError("“"+o+"” is not a vimeo.com url.")}function l(e){for(var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],n=C,o=Array.isArray(n),i=0,n=o?n:n[Symbol.iterator]();;){var r;if(o){if(i>=n.length)break;r=n[i++]}else{if(i=n.next(),i.done)break;r=i.value}var a=r,s=e.getAttribute("data-vimeo-"+a);(s||""===s)&&(t[a]=""===s?1:s)}return t}function f(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return new Promise(function(n,o){if(!u(e))throw new TypeError("“"+e+"” is not a vimeo.com url.");var i="https://vimeo.com/api/oembed.json?url="+encodeURIComponent(e);for(var r in t)t.hasOwnProperty(r)&&(i+="&"+r+"="+encodeURIComponent(t[r]));var a="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;a.open("GET",i,!0),a.onload=function(){if(404===a.status)return void o(new Error("“"+e+"” was not found."));if(403===a.status)return void o(new Error("“"+e+"” is not embeddable."));try{var t=JSON.parse(a.responseText);n(t)}catch(e){o(e)}},a.onerror=function(){var e=a.status?" ("+a.status+")":"";o(new Error("There was an error fetching the embed code from Vimeo"+e+"."))},a.send()})}function d(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var o=document.createElement("div");return o.innerHTML=n,t.appendChild(o.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function h(){var e=arguments.length<=0||void 0===arguments[0]?document:arguments[0],t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: "+e)},o=function(){if(r){if(a>=i.length)return"break";s=i[a++]}else{if(a=i.next(),a.done)return"break";s=a.value}var e=s;try{if(null!==e.getAttribute("data-vimeo-defer"))return"continue";var t=l(e),o=c(t);f(o,t).then(function(t){return d(t,e)}).catch(n)}catch(e){n(e)}};e:for(var i=t,r=Array.isArray(i),a=0,i=r?i:i[Symbol.iterator]();;){var s,u=o();switch(u){case"break":break e;case"continue":continue}}}function p(e){return"string"==typeof e&&(e=JSON.parse(e)),e}function m(e,t,n){if(e.element.contentWindow.postMessage){var o={method:t};void 0!==n&&(o.value=n);var i=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));i>=8&&i<10&&(o=JSON.stringify(o)),e.element.contentWindow.postMessage(o,e.origin)}}function v(e,t){t=p(t);var i=[],r=void 0;if(t.event){if("error"===t.event)for(var a=n(e,t.data.method),s=a,u=Array.isArray(s),c=0,s=u?s:s[Symbol.iterator]();;){var l;if(u){if(c>=s.length)break;l=s[c++]}else{if(c=s.next(),c.done)break;l=c.value}var f=l,d=new Error(t.data.message);d.name=t.data.name,f.reject(d),o(e,t.data.method,f)}i=n(e,"event:"+t.event),r=t.data}else t.method&&(i=n(e,t.method),r=t.value,o(e,t.method));for(var h=i,m=Array.isArray(h),v=0,h=m?h:h[Symbol.iterator]();;){var y;if(m){if(v>=h.length)break;y=h[v++]}else{if(v=h.next(),v.done)break;y=v.value}var g=y;try{if("function"==typeof g){g.call(e,r);continue}g.resolve(r)}catch(e){}}}var y="undefined"!=typeof Array.prototype.indexOf,g="undefined"!=typeof window.postMessage;if(!y||!g)throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var w="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},E=(e(function(e,t){!function(e){function t(e,t){function o(e){return this&&this.constructor===o?(this._keys=[],this._values=[],this._itp=[],this.objectOnly=t,void(e&&n.call(this,e))):new o(e)}return t||w(e,"size",{get:v}),e.constructor=o,o.prototype=e,o}function n(e){this.add?e.forEach(this.add,this):e.forEach(function(e){this.set(e[0],e[1])},this)}function o(e){return this.has(e)&&(this._keys.splice(g,1),this._values.splice(g,1),this._itp.forEach(function(e){g<e[0]&&e[0]--})),-1<g}function i(e){return this.has(e)?this._values[g]:void 0}function r(e,t){if(this.objectOnly&&t!==Object(t))throw new TypeError("Invalid value used as weak collection key");if(t!=t||0===t)for(g=e.length;g--&&!E(e[g],t););else g=e.indexOf(t);return-1<g}function a(e){return r.call(this,this._values,e)}function s(e){return r.call(this,this._keys,e)}function u(e,t){return this.has(e)?this._values[g]=t:this._values[this._keys.push(e)-1]=t,this}function c(e){return this.has(e)||this._values.push(e),this}function l(){(this._keys||0).length=this._values.length=0}function f(){return m(this._itp,this._keys)}function d(){return m(this._itp,this._values)}function h(){return m(this._itp,this._keys,this._values)}function p(){return m(this._itp,this._values,this._values)}function m(e,t,n){var o=[0],i=!1;return e.push(o),{next:function(){var r,a=o[0];return!i&&a<t.length?(r=n?[t[a],n[a]]:t[a],o[0]++):(i=!0,e.splice(e.indexOf(o),1)),{done:i,value:r}}}}function v(){return this._values.length}function y(e,t){for(var n=this.entries();;){var o=n.next();if(o.done)break;e.call(t,o.value[1],o.value[0],this)}}var g,w=Object.defineProperty,E=function(e,t){return e===t||e!==e&&t!==t};"undefined"==typeof WeakMap&&(e.WeakMap=t({delete:o,clear:l,get:i,has:s,set:u},!0)),"undefined"!=typeof Map&&"function"==typeof(new Map).values&&(new Map).values().next||(e.Map=t({delete:o,has:s,get:i,set:u,keys:f,values:d,entries:h,forEach:y,clear:l})),"undefined"!=typeof Set&&"function"==typeof(new Set).values&&(new Set).values().next||(e.Set=t({has:a,add:c,delete:o,clear:l,keys:d,values:d,entries:p,forEach:y})),"undefined"==typeof WeakSet&&(e.WeakSet=t({delete:o,add:c,clear:l,has:a},!0))}("undefined"!=typeof t&&"undefined"!=typeof w?w:window)}),e(function(e){!function(t,n,o){n[t]=n[t]||o(),"undefined"!=typeof e&&e.exports?e.exports=n[t]:"function"==typeof define&&define.amd&&define(function(){return n[t]})}("Promise","undefined"!=typeof w?w:w,function(){function e(e,t){d.add(e,t),f||(f=p(d.drain))}function t(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function n(){for(var e=0;e<this.chain.length;e++)o(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function o(e,n,o){var i,r;try{n===!1?o.reject(e.msg):(i=n===!0?e.msg:n.call(void 0,e.msg),i===o.promise?o.reject(TypeError("Promise-chain cycle")):(r=t(i))?r.call(i,o.resolve,o.reject):o.resolve(i))}catch(e){o.reject(e)}}function i(o){var a,u=this;if(!u.triggered){u.triggered=!0,u.def&&(u=u.def);try{(a=t(o))?e(function(){var e=new s(u);try{a.call(o,function(){i.apply(e,arguments)},function(){r.apply(e,arguments)})}catch(t){r.call(e,t)}}):(u.msg=o,u.state=1,u.chain.length>0&&e(n,u))}catch(e){r.call(new s(u),e)}}}function r(t){var o=this;o.triggered||(o.triggered=!0,o.def&&(o=o.def),o.msg=t,o.state=2,o.chain.length>0&&e(n,o))}function a(e,t,n,o){for(var i=0;i<t.length;i++)!function(i){e.resolve(t[i]).then(function(e){n(i,e)},o)}(i)}function s(e){this.def=e,this.triggered=!1}function u(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function c(t){if("function"!=typeof t)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var o=new u(this);this.then=function(t,i){var r={success:"function"!=typeof t||t,failure:"function"==typeof i&&i};return r.promise=new this.constructor(function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t}),o.chain.push(r),0!==o.state&&e(n,o),r.promise},this.catch=function(e){return this.then(void 0,e)};try{t.call(void 0,function(e){i.call(o,e)},function(e){r.call(o,e)})}catch(e){r.call(o,e)}}var l,f,d,h=Object.prototype.toString,p="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),l=function(e,t,n,o){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:o!==!1})}}catch(e){l=function(e,t,n){return e[t]=n,e}}d=function(){function e(e,t){this.fn=e,this.self=t,this.next=void 0}var t,n,o;return{add:function(i,r){o=new e(i,r),n?n.next=o:t=o,n=o,o=void 0},drain:function(){var e=t;for(t=n=f=void 0;e;)e.fn.call(e.self),e=e.next}}}();var m=l({},"constructor",c,!1);return c.prototype=m,l(m,"__NPO__",0,!1),l(c,"resolve",function(e){var t=this;return e&&"object"==typeof e&&1===e.__NPO__?e:new t(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)})}),l(c,"reject",function(e){return new this(function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)})}),l(c,"all",function(e){var t=this;return"[object Array]"!=h.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t(function(n,o){if("function"!=typeof n||"function"!=typeof o)throw TypeError("Not a function");var i=e.length,r=Array(i),s=0;a(t,e,function(e,t){r[e]=t,++s===i&&n(r)},o)})}),l(c,"race",function(e){var t=this;return"[object Array]"!=h.call(e)?t.reject(TypeError("Not an array")):new t(function(n,o){if("function"!=typeof n||"function"!=typeof o)throw TypeError("Not a function");a(t,e,function(e,t){n(t)},o)})}),c})})),b=E&&"object"==typeof E&&"default"in E?E.default:E,O=new WeakMap,C=["id","url","width","maxwidth","height","maxheight","portrait","title","byline","color","autoplay","autopause","loop","responsive"],T=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},N=new WeakMap,k=new WeakMap,A=function(){function e(t){var n=this,o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];if(T(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"string"==typeof t&&(t=document.getElementById(t)),!a(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var r=t.querySelector("iframe");r&&(t=r)}if("IFRAME"===t.nodeName&&!u(t.getAttribute("src")||""))throw new Error("The player element passed isn’t a Vimeo embed.");if(N.has(t))return N.get(t);this.element=t,this.origin="*";var s=new b(function(e,r){var a=function(t){if(u(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var o=p(t.data),i="event"in o&&"ready"===o.event,r="method"in o&&"ping"===o.method;return i||r?(n.element.setAttribute("data-ready","true"),void e()):void v(n,o)}};if(window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a),"IFRAME"!==n.element.nodeName){var s=l(t,o),h=c(s);f(h,s).then(function(e){var o=d(e,t);return n.element=o,i(t,o),e}).catch(function(e){return r(e)})}});return k.set(this,s),N.set(this.element,this),"IFRAME"===this.element.nodeName&&m(this,"ping"),this}return e.prototype.then=function(e){var t=arguments.length<=1||void 0===arguments[1]?function(){}:arguments[1];return this.ready().then(e,t)},e.prototype.callMethod=function(e){var n=this,o=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];return new b(function(i,r){return n.ready().then(function(){t(n,e,{resolve:i,reject:r}),m(n,e,o)})})},e.prototype.get=function(e){var n=this;return new b(function(o,i){return e=r(e,"get"),n.ready().then(function(){t(n,e,{resolve:o,reject:i}),m(n,e)})})},e.prototype.set=function(e,n){var o=this;return b.resolve(n).then(function(n){if(e=r(e,"set"),void 0===n||null===n)throw new TypeError("There must be a value to set.");return o.ready().then(function(){return new b(function(i,r){t(o,e,{resolve:i,reject:r}),m(o,e,n)})})})},e.prototype.on=function(e,o){if(!e)throw new TypeError("You must pass an event name.");if(!o)throw new TypeError("You must pass a callback function.");if("function"!=typeof o)throw new TypeError("The callback must be a function.");var i=n(this,"event:"+e);0===i.length&&this.callMethod("addEventListener",e).catch(function(){}),t(this,"event:"+e,o)},e.prototype.off=function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!=typeof t)throw new TypeError("The callback must be a function.");var n=o(this,"event:"+e,t);n&&this.callMethod("removeEventListener",e).catch(function(e){})},e.prototype.loadVideo=function(e){return this.callMethod("loadVideo",e)},e.prototype.ready=function(){var e=k.get(this);return b.resolve(e)},e.prototype.enableTextTrack=function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})},e.prototype.disableTextTrack=function(){return this.callMethod("disableTextTrack")},e.prototype.pause=function(){return this.callMethod("pause")},e.prototype.play=function(){return this.callMethod("play")},e.prototype.unload=function(){return this.callMethod("unload")},e.prototype.getAutopause=function(){return this.get("autopause")},e.prototype.setAutopause=function(e){return this.set("autopause",e)},e.prototype.getColor=function(){return this.get("color")},e.prototype.setColor=function(e){return this.set("color",e)},e.prototype.getCurrentTime=function(){return this.get("currentTime")},e.prototype.setCurrentTime=function(e){return this.set("currentTime",e)},e.prototype.getDuration=function(){return this.get("duration")},e.prototype.getEnded=function(){return this.get("ended")},e.prototype.getLoop=function(){return this.get("loop")},e.prototype.setLoop=function(e){return this.set("loop",e)},e.prototype.getPaused=function(){return this.get("paused")},e.prototype.getTextTracks=function(){return this.get("textTracks")},e.prototype.getVideoEmbedCode=function(){return this.get("videoEmbedCode")},e.prototype.getVideoId=function(){return this.get("videoId")},e.prototype.getVideoTitle=function(){return this.get("videoTitle")},e.prototype.getVideoWidth=function(){return this.get("videoWidth")},e.prototype.getVideoHeight=function(){return this.get("videoHeight")},e.prototype.getVideoUrl=function(){return this.get("videoUrl")},e.prototype.getVolume=function(){return this.get("volume")},e.prototype.setVolume=function(e){return this.set("volume",e)},e}();return h(),A});
$(document).ready(function () {

/***************************
* General
***************************/
	var screenSize = $( window ).width(),
		$body = $('body'),
		device, // specify size of screen
		isMobile = false,
		break1 = 640, // first media query break
		break2 = 852; // break to 6 across
		fullwidth = 1480; // break to 6 across

	// set mobile flag
	function checkMobile() {
		console.log('checkMobile()');
		screenSize = $( window ).width();
		if(screenSize < break2) {
			isMobile = true;
			console.log('mobile');
		} else {
			console.log('desktop');
			isMobile = false;
		}
	}

	checkMobile(); // initial
	
	// $(window).resize( $.throttle(125, function() {
	// 	checkMobile();
	// }));

	// make active pseudo styles in mobile safari, from https://alxgbsn.co.uk/2011/10/17/enable-css-active-pseudo-styles-in-mobile-safari/
	document.addEventListener("touchstart", function() {},false);

/*********************
* Mobile dropdown menu
*********************/
	 // var $navItem = $('.meganav__main-item');
	 var $navItem = $('.meganav__main-item').add($('.footer__main-item'));
	 // var $footerNavItem = $('.footer__main-item');
	 var $navLists = $('.meganav__list').add($('.footer__list'));

	 // when click a main list item
	 $navItem.on('click', function() {
	 	var $this = $(this);

	 	var $thisUl = $this.children('ul');
	 	console.log('$thisUl: ', $thisUl);
	 	console.log('$thisUl.hasClass("nav-show-mobile"): ', $thisUl.hasClass("nav-show-mobile"));

	 	// var thisNavOpen = ; // check to see you are already open

	 	// console.log('thisNavOpen: ', thisNavOpen);

	 	// if you are already open, close all
	 	if($thisUl.hasClass('nav-show-mobile')) {
	 		$navLists.removeClass('nav-show-mobile'); // close all other open nav lists
	 		$navItem.removeClass('active'); // remove all active titles
	 		
	 		// BUGBUGBUGBUG - show child, otherwise in loop
	 		// $thisUl.addClass('nav-show-mobile'); // show child nav list BUG
	 	}
	 	// else close all and open yourself
	 	else {
	 		$navItem.removeClass('active'); // remove all active titles
	 		$navLists.removeClass('nav-show-mobile'); // close all other open nav lists
	 		$this.addClass('active'); // add css styles to title
	 		$thisUl.addClass('nav-show-mobile'); // show child nav list
	 	}
	 });

/***************************
Mobile Header Animation from http://www.webdesignerdepot.com/2014/05/how-to-create-an-animated-sticky-header-with-css3-and-jquery/
***************************/
	var isNavOpen = false;
	var $navBar = $('.navbar');
	var $navBarHeader = $('.navbar-header');
	var $navspacer = $('#navspacer');


	var gapNavHeight = 62;
	// var gapNavHeight = 10;
	var navSpacerHeight = 95;

	$(window).scroll(function() {
		// check if nav is open
		if (($(this).scrollTop() > gapNavHeight) && (isNavOpen == false)) {  
			$navBar.addClass("smaller-header");
			isNavOpen = true;
			if(!isMobile) {
				$navspacer.addClass("navspacer--taller"); // open right away
				$navspacer.addClass("navspacer-open"); // open right away
			}
			else {
				$socialMediaIconDivMobile.hide();
				shareClosed = true; // flag for closing	
			}
		}
		else if (($(this).scrollTop() <= gapNavHeight ) && (isNavOpen == true)) {
			$navBar.removeClass("smaller-header"); // shrink
			isNavOpen = false;
			if(!isMobile)
				$navspacer.removeClass("navspacer-open"); // gracefully cloase
			
		}

		// // Close Nav if mobile on scroll
		// if(isMobile && (!shareClosed || !menuClosed || !searchClosed )) {
		// 	console.log('close it');
		// 	navCloseAll(); // close anything else that's open
		// }

	});

/***************************
* NAVBAR
**************************/

	// CLICK OUTSIDE MENU
	// activate outside navbar div
	var $navbarOutside = $('.navbar-outside');

	// close nav if clicked
	$navbarOutside.on('click', function() {
		navCloseAll(); // close all auxiliary nav
		$navbarOutside.css('position', 'static'); // not fixed so not active
		$menuIcon.add($shareIcon).add($searchIcon).show(); // show just the main icons again
	});

/*********************
* Social Media Icons
*********************/
	var $socialMediaIconDivMobile = $('.social-icons--mobile');
	var $socialMediaIconsMobile = $('.social-icon--mobile');
	var $socialMediaIconsDesktop = $('.social-icons--desktop');
	var $socialMediaIcons = $('.social-icons');
	var $shareIcon = $('#share-icon');
	var shareClosed = true;

	// when click share icon
	$shareIcon.on('click', function() {
		// if not yet open
		if(shareClosed) {
			$navbarOutside.css('position', 'fixed'); // activate navbarOutside			
			navCloseAll(); // close anything else that's open
			$notShareIcon.addClass('lighter-nav-icons'); // grey out other icons
			shareClosed = false; // flag for closing	
			$socialMediaIcons.show();
		}
		// else is open already so JUST CLOSE IT
		else {
			navCloseAll();
		}
		
	});

/*********************
* Search 
*********************/
	var $searchBar = $('.search-bar');
	var $searchIcon = $('#search-icon');
	var $browsenav = $('#browsenav');
	var searchClosed = true;

	// when click share icon
	$searchIcon.on('click', function() {
		// if not yet open
		if(searchClosed) {
			$navbarOutside.css('position', 'fixed'); // activate navbarOutside
			navCloseAll(); // close anything else that's open
			$notSearchIcon.addClass('lighter-nav-icons'); // grey out other icons
			$searchBar.add($browsenav).show(); // show social media icons
			searchClosed = false; // flag for closing	
		}
		// else is open already so JUST CLOSE IT
		else {
			navCloseAll();
		}
	});

/*********************
* Menu
*********************/
	var $megaNav = $('#meganav');
	var $menuIcon = $('#menu-icon');
	var menuClosed = true;

	// when click share icon
	$menuIcon.on('click', function() {
		// if not yet open
		if(menuClosed) {
			$navbarOutside.css('position', 'fixed'); // activate navbarOutside
			navCloseAll(); // close anything else that's open
			$notMenuIcon.addClass('lighter-nav-icons'); // grey out other icons
			$megaNav.css('display', 'block'); // show social media icons
			// $navBarHeader.css('z-index', '0'); // make navbar clickable to close
			menuClosed = false; // flag for closing	
		}
		// else is open already so JUST CLOSE IT
		else {
			navCloseAll();
		}
		
	});


	// $megaNav.on({
	//   focusout: function () {
	//     $(this.hash).data('timer', setTimeout(function () {
	//       $(this.hash).removeClass('active');
	//       console.log('clickd outside');
	//     }.bind(this), 0));
	//   },
	//   focusin: function () {
	//     clearTimeout($(this.hash).data('timer'));  
	//       console.log('clickd inside');
	//   }
	// });

	// GRAY OUT NAV
	var $allIcons = $menuIcon.add($shareIcon).add($searchIcon);
	var $notMenuIcon = $allIcons.not($menuIcon);
	var $notShareIcon = $allIcons.not($shareIcon);
	var $notSearchIcon = $allIcons.not($searchIcon);

/*********************
* close nav
*********************/
	function navCloseAll() {
		// close other icons
		if (isMobile)
	 		$navLists.removeClass('nav-show-mobile'); // close all other open nav lists - mobile only
		$allIcons.removeClass('lighter-nav-icons');
		$megaNav.add($searchBar).add($browsenav).add($socialMediaIcons).hide(); // close auxiliaries
		menuClosed = true;
		searchClosed = true;
		shareClosed = true;
	}


/*********************
* search
*********************/
	$searchBar.on('submit', function() {
		alert('We are looking into it...');
	});

/*********************
* Hero Carousel
 Uses slick.js from Ken Wheeler at http://kenwheeler.github.io/slick/
*********************/
	var slickCreatedMobile = false; // flag to create and destroy when needed
	var slickCreatedDesktop = false; // flag to create and destroy when needed

	function initiateSlickCarousel() {
		if(isMobile) {
			console.log('mobile');
			createBannerMobile();
		} else {
			console.log('desktop');
			createBannerDesktop();
		}
	}

	function createBannerMobile() {
		console.log('creating mobile banner...');
		 $('#banner-carousel').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			asNavFor: '.banner__nav--mobile',
			autoplay: true, // pause for testing
			autoplaySpeed: 4000,
		});
		$('.banner__nav--mobile').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '#banner-carousel',
			dots: true,
			appendDots: '.dots--mobile',
		  	focusOnSelect: true,
			adaptiveHeight: true,
		});
		// slickCreatedDesktop = true; // so can destroy banner
		slickCreatedMobile = true; // so can destroy pager
	}


	function createBannerDesktop() {
		console.log('creating desktop banner...');
		$('#banner-carousel').slick({
			// centerMode: true,
			// centerPadding: '0',
			appendDots: '.dots',
			dots: true,
			mobileFirst: 'true',
			appendArrows: '.slick-list',
			autoplay: true, // pause for testing
			autoplaySpeed: 4000,
			slidesToShow: 1,
			responsive: [
				{
					breakpoint: 1480,
					settings: {
						centerMode: true,
						centerPadding: 'calc((100vw - 1400px) / 2)',
					}
				}
		   	]
		});
		
		slickCreatedDesktop = true; // set so can destroy on page resize
	}

	// on page load
	initiateSlickCarousel();

	// $(window).resize( $.throttle(125, function() {
	// 	// on resize
	// 	slickCarousel();
	// }));
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	};

	// var unslickifyDesktop = debounce(function() {
	var unslickify = function() {
		console.log('unslickify');
		
		// destroy desktop banner
		if(slickCreatedDesktop) {
			$('#banner-carousel').slick('unslick');
			slickCreatedDesktop = false;
		}
		
		// destroy mobile banner
		if(slickCreatedMobile) {
			$('#banner-carousel').slick('unslick');
			$('.banner__nav--mobile').slick('unslick');
			slickCreatedMobile = false;
		}
	};

	// $(window).on('breakpoint', function(event, _slick, breakpoint) {
	// $(window).resize( $.throttle(125, function() {
	$(window).on('resize', function() {
		checkMobile();

		// if getting smaller
		if(isMobile && slickCreatedDesktop) {
			unslickify(); // destroy
			createBannerMobile();
	 	} else if(!isMobile && slickCreatedMobile) {
			unslickify(); // destroy
			createBannerDesktop();
		}
	});

/*********************
* Video
* dependencies: remodal.js, vimeo-player-js
*********************/
	// initialize here
	$('[data-remodal-id=modal]').remodal();


	  var $remodal = $('.remodal');
	  var $remodalIframe = $('.remodal__iframe');
	  var $remodalTitle = $('.remodal__title');
	  var $remodalDescription = $('.remodal__description');
	  var $remodalClose = $('.remodal-close');
	  // var $remodalOverlay = $('.remodal-overlay');
	  var player; // global for playing, pausing
	  var playerLoaded = false;

	  // on playing a video in the gallery...
	  $('.video').on('click', function() {
	  	console.log('click');



		$video_id = $(this).data('video-id');
		// set title
		$title = $(this).data('title');
		$remodalTitle.html($title);

		// set description
		$description = $(this).data('description');
		$remodalDescription.html($description);

		// show close button
		$remodalClose.removeClass('visually-hidden');

		// if first time loading a video...
		if(!playerLoaded) {
			console.log('first time play');
		  var options = {
			  id: $video_id,
			  width: 640,
			  autoplay: true,
		  }

		  player = new Vimeo.Player('remodal__iframe', options);
		
		  if(player)
			playerLoaded = true;
		}
		// else just reload the player
		else {
			console.log('NOT first time play');
		  	// player = new Vimeo.Player('remodal__iframe', options);

		  	player.loadVideo($video_id);
		  // 	player.loadVideo($video_id).then(function(id) {
				// // auto play
				// player.play();
		  // 	});
		}

	  })

	  // listen for closing, from https://github.com/VodkaBears/Remodal
	  $(document).on('closing', '.remodal', function (e) {
	  	$remodalClose.addClass('visually-hidden');
		player.pause();
	  });


});