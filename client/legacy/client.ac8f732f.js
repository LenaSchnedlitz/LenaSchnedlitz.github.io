function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(n=(a=c.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(t){o=!0,i=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw i}}return r}}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(e){var r=function(e){var r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return _()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=w(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var f={};function l(){}function h(){}function p(){}var v={};v[i]=function(){return this};var d=Object.getPrototypeOf,m=d&&d(d(S([])));m&&m!==r&&n.call(m,i)&&(v=m);var g=p.prototype=l.prototype=Object.create(v);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function b(e,r){var o;this._invoke=function(i,a){function c(){return new r((function(o,c){!function o(i,a,c,u){var f=s(e[i],e,a);if("throw"!==f.type){var l=f.arg,h=l.value;return h&&"object"===t(h)&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):r.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(f.arg)}(i,a,o,c)}))}return o=o?o.then(c,c):c()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,f;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function $(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return h.prototype=g.constructor=p,p.constructor=h,p[c]=h.displayName="GeneratorFunction",e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},y(b.prototype),b.prototype[a]=function(){return this},e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(g),g[c]="Generator",g[i]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach($),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),$(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;$(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}));function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}function c(t){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?u(e):r}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function h(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function d(t,e,r){return e&&v(t.prototype,e),r&&v(t,r),t}function m(){}function g(t,e){for(var r in e)t[r]=e[r];return t}function y(t){return t()}function b(){return Object.create(null)}function w(t){t.forEach(y)}function x(t){return"function"==typeof t}function $(e,r){return e!=e?r==r:e!==r||e&&"object"===t(e)||"function"==typeof e}function E(t,e,r,n){return t[1]&&n?g(r.ctx.slice(),t[1](n(e))):r.ctx}function S(t){return null==t?"":t}function _(t,e){t.appendChild(e)}function L(t,e,r){t.insertBefore(e,r||null)}function k(t){t.parentNode.removeChild(t)}function C(t,e){for(var r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function R(t){return document.createElement(t)}function A(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function P(t){return document.createTextNode(t)}function j(){return P(" ")}function O(){return P("")}function N(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function I(t,e,r){t.setAttributeNS("http://www.w3.org/1999/xlink",e,r)}function T(t){return Array.from(t.childNodes)}function D(t,e,r,n){for(var o=0;o<t.length;o+=1){var i=t[o];if(i.nodeName===e){for(var a=0;a<i.attributes.length;){var c=i.attributes[a];r[c.name]?a++:i.removeAttribute(c.name)}return t.splice(o,1)[0]}}return n?A(e):R(e)}function B(t,e){for(var r=0;r<t.length;r+=1){var n=t[r];if(3===n.nodeType)return n.data=""+e,t.splice(r,1)[0]}return P(e)}function U(t){return B(t," ")}function q(t,e){e=""+e,t.data!==e&&(t.data=e)}function G(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}var H,F=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;p(this,t),this.e=R("div"),this.a=r,this.u(e)}return d(t,[{key:"m",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=0;r<this.n.length;r+=1)L(t,this.n[r],e);this.t=t}},{key:"u",value:function(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}},{key:"p",value:function(t){this.d(),this.u(t),this.m(this.t,this.a)}},{key:"d",value:function(){this.n.forEach(k)}}]),t}();function V(t){H=t}function z(t,e){(function(){if(!H)throw new Error("Function called outside component initialization");return H})().$$.context.set(t,e)}var M=[],J=[],Y=[],K=[],X=Promise.resolve(),Z=!1;function W(t){Y.push(t)}var Q=!1,tt=new Set;function et(){if(!Q){Q=!0;do{for(var t=0;t<M.length;t+=1){var e=M[t];V(e),rt(e.$$)}for(M.length=0;J.length;)J.pop()();for(var r=0;r<Y.length;r+=1){var n=Y[r];tt.has(n)||(tt.add(n),n())}Y.length=0}while(M.length);for(;K.length;)K.pop()();Z=!1,Q=!1,tt.clear()}}function rt(t){if(null!==t.fragment){t.update(),w(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}var nt,ot=new Set;function it(){nt={r:0,c:[],p:nt}}function at(){nt.r||w(nt.c),nt=nt.p}function ct(t,e){t&&t.i&&(ot.delete(t),t.i(e))}function ut(t,e,r,n){if(t&&t.o){if(ot.has(t))return;ot.add(t),nt.c.push((function(){ot.delete(t),n&&(r&&t.d(1),n())})),t.o(e)}}function st(t,e){for(var r={},n={},o={$$scope:1},i=t.length;i--;){var a=t[i],c=e[i];if(c){for(var u in a)u in c||(n[u]=1);for(var s in c)o[s]||(r[s]=c[s],o[s]=1);t[i]=c}else for(var f in a)o[f]=1}for(var l in n)l in r||(r[l]=void 0);return r}function ft(e){return"object"===t(e)&&null!==e?e:{}}function lt(t){t&&t.c()}function ht(t,e){t&&t.l(e)}function pt(t,e,r){var n=t.$$,o=n.fragment,i=n.on_mount,a=n.on_destroy,c=n.after_update;o&&o.m(e,r),W((function(){var e=i.map(y).filter(x);a?a.push.apply(a,h(e)):w(e),t.$$.on_mount=[]})),c.forEach(W)}function vt(t,e){var r=t.$$;null!==r.fragment&&(w(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function dt(t,e){-1===t.$$.dirty[0]&&(M.push(t),Z||(Z=!0,X.then(et)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function mt(t,e,r,n,o,i){var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],c=H;V(t);var u=e.props||{},s=t.$$={fragment:null,ctx:null,props:i,update:m,not_equal:o,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(c?c.$$.context:[]),callbacks:b(),dirty:a},f=!1;if(s.ctx=r?r(t,u,(function(e,r){var n=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:r;return s.ctx&&o(s.ctx[e],s.ctx[e]=n)&&(s.bound[e]&&s.bound[e](n),f&&dt(t,e)),r})):[],s.update(),f=!0,w(s.before_update),s.fragment=!!n&&n(s.ctx),e.target){if(e.hydrate){var l=T(e.target);s.fragment&&s.fragment.l(l),l.forEach(k)}else s.fragment&&s.fragment.c();e.intro&&ct(t.$$.fragment),pt(t,e.target,e.anchor),et()}V(c)}var gt=function(){function t(){p(this,t)}return d(t,[{key:"$destroy",value:function(){vt(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}}},{key:"$set",value:function(){}}]),t}(),yt=[];function bt(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=[];function o(r){if($(t,r)&&(t=r,e)){for(var o=!yt.length,i=0;i<n.length;i+=1){var a=n[i];a[1](),yt.push(a,t)}if(o){for(var c=0;c<yt.length;c+=2)yt[c][0](yt[c+1]);yt.length=0}}}function i(e){o(e(t))}function a(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[i,a];return n.push(c),1===n.length&&(e=r(o)||m),i(t),function(){var t=n.indexOf(c);-1!==t&&n.splice(t,1),0===n.length&&(e(),e=null)}}return{set:o,update:i,subscribe:a}}var wt={},xt=function(){return{}};function $t(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Et(t){var e,r,o,i,a,c,u,s,f,l,h,p,v,d,g,y;return{c:function(){e=R("nav"),r=R("ul"),o=R("li"),i=R("a"),a=P("Blog"),u=j(),s=R("li"),f=R("a"),l=P("Portfolio"),p=j(),v=R("li"),d=R("a"),g=P("About"),this.h()},l:function(t){var n=T(e=D(t,"NAV",{class:!0})),c=T(r=D(n,"UL",{class:!0})),h=T(o=D(c,"LI",{class:!0})),m=T(i=D(h,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));a=B(m,"Blog"),m.forEach(k),h.forEach(k),u=U(c);var y=T(s=D(c,"LI",{class:!0})),b=T(f=D(y,"A",{"aria-current":!0,href:!0,class:!0}));l=B(b,"Portfolio"),b.forEach(k),y.forEach(k),p=U(c);var w=T(v=D(c,"LI",{class:!0})),x=T(d=D(w,"A",{"aria-current":!0,href:!0,class:!0}));g=B(x,"About"),x.forEach(k),w.forEach(k),c.forEach(k),n.forEach(k),this.h()},h:function(){N(i,"rel","prefetch"),N(i,"aria-current",c="blog"===t[0]?"page":void 0),N(i,"href","blog"),N(i,"class","svelte-ukli01"),N(o,"class","svelte-ukli01"),N(f,"aria-current",h="portfolio"===t[0]?"page":void 0),N(f,"href","portfolio"),N(f,"class","svelte-ukli01"),N(s,"class","svelte-ukli01"),N(d,"aria-current",y="about"===t[0]?"page":void 0),N(d,"href","about"),N(d,"class","svelte-ukli01"),N(v,"class","svelte-ukli01"),N(r,"class","svelte-ukli01"),N(e,"class","svelte-ukli01")},m:function(t,n){L(t,e,n),_(e,r),_(r,o),_(o,i),_(i,a),_(r,u),_(r,s),_(s,f),_(f,l),_(r,p),_(r,v),_(v,d),_(d,g)},p:function(t,e){var r=n(e,1)[0];1&r&&c!==(c="blog"===t[0]?"page":void 0)&&N(i,"aria-current",c),1&r&&h!==(h="portfolio"===t[0]?"page":void 0)&&N(f,"aria-current",h),1&r&&y!==(y="about"===t[0]?"page":void 0)&&N(d,"aria-current",y)},i:m,o:m,d:function(t){t&&k(e)}}}function St(t,e,r){var n=e.segment;return t.$set=function(t){"segment"in t&&r(0,n=t.segment)},[n]}var _t=function(t){l(n,gt);var e,r=(e=n,function(){var t,r=c(e);if($t()){var n=c(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return s(this,t)});function n(t){var e;return p(this,n),mt(u(e=r.call(this)),t,St,Et,$,{segment:0}),e}return n}();function Lt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function kt(t){var e,r,o,i,a,c,u,s,f,l=!1,h=function(){l=!1};return W(t[2]),{c:function(){r=R("a"),o=A("svg"),i=A("title"),a=P("Lena's Logo"),c=A("circle"),u=A("path"),this.h()},l:function(t){var e=T(r=D(t,"A",{href:!0,class:!0})),n=T(o=D(e,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,class:!0,xmlns:!0},1)),s=T(i=D(n,"title",{},1));a=B(s,"Lena's Logo"),s.forEach(k),T(c=D(n,"circle",{cx:!0,cy:!0,r:!0,class:!0},1)).forEach(k),T(u=D(n,"path",{d:!0,class:!0},1)).forEach(k),n.forEach(k),e.forEach(k),this.h()},h:function(){N(c,"cx","11"),N(c,"cy","10"),N(c,"r","10"),N(c,"class","svelte-1xm8cxm"),N(u,"d","M6.246 4.644V14.994C6.246 15.378 6.354 15.654 6.57 15.822C6.792 15.984 7.095 16.065 7.479 16.065C7.725 16.065 7.962 16.038 8.19 15.984C8.418 15.924 8.631 15.855 8.829 15.777L9.513 17.676C9.189 17.844 8.799 17.991 8.343 18.117C7.887 18.243 7.356 18.306 6.75 18.306C5.598 18.306 4.752 17.976 4.212 17.316C3.672 16.65 3.402 15.759 3.402 14.643V6.588H0.585V4.644H6.246ZM15.887 16.272C16.361 16.272 16.742 16.197 17.03 16.047C17.324 15.897 17.471 15.672 17.471 15.372C17.471 15.168 17.414 14.997 17.3 14.859C17.186 14.721 16.967 14.589 16.643 14.463C16.319 14.337 15.839 14.187 15.203 14.013C14.327 13.779 13.613 13.443 13.061 13.005C12.515 12.567 12.242 11.925 12.242 11.079C12.242 10.227 12.596 9.522 13.304 8.964C14.018 8.406 15.047 8.127 16.391 8.127C17.243 8.127 17.984 8.238 18.614 8.46C19.25 8.676 19.799 8.952 20.261 9.288L19.127 10.962C18.731 10.716 18.305 10.521 17.849 10.377C17.393 10.227 16.934 10.152 16.472 10.152C15.56 10.152 15.104 10.398 15.104 10.89C15.104 11.052 15.161 11.193 15.275 11.313C15.395 11.427 15.617 11.547 15.941 11.673C16.265 11.793 16.739 11.943 17.363 12.123C17.981 12.297 18.518 12.498 18.974 12.726C19.436 12.954 19.793 13.26 20.045 13.644C20.297 14.022 20.423 14.523 20.423 15.147C20.423 15.843 20.216 16.428 19.802 16.902C19.388 17.37 18.839 17.721 18.155 17.955C17.471 18.189 16.721 18.306 15.905 18.306C14.981 18.306 14.165 18.174 13.457 17.91C12.749 17.646 12.146 17.298 11.648 16.866L13.079 15.264C13.451 15.552 13.871 15.792 14.339 15.984C14.813 16.176 15.329 16.272 15.887 16.272Z"),N(u,"class","svelte-1xm8cxm"),N(o,"width","22"),N(o,"height","22"),N(o,"viewBox","0 0 22 22"),N(o,"fill","none"),N(o,"class",s=S(t[1])+" svelte-1xm8cxm"),N(o,"xmlns","http://www.w3.org/2000/svg"),N(r,"href","."),N(r,"class","svelte-1xm8cxm")},m:function(n,s,p){var v,d,m,g;L(n,r,s),_(r,o),_(o,i),_(i,a),_(o,c),_(o,u),p&&f(),v=window,d="scroll",m=function(){l=!0,clearTimeout(e),e=setTimeout(h,100),t[2]()},v.addEventListener(d,m,g),f=function(){return v.removeEventListener(d,m,g)}},p:function(t,r){var i=n(r,1)[0];1&i&&!l&&(l=!0,clearTimeout(e),scrollTo(window.pageXOffset,t[0]),e=setTimeout(h,100)),2&i&&s!==(s=S(t[1])+" svelte-1xm8cxm")&&N(o,"class",s)},i:m,o:m,d:function(t){t&&k(r),f()}}}function Ct(t,e,r){var n,o=0;return t.$$.update=function(){1&t.$$.dirty&&r(1,n=o>5?"scrolled":"")},[o,n,function(){r(0,o=window.pageYOffset)}]}var Rt=function(t){l(n,gt);var e,r=(e=n,function(){var t,r=c(e);if(Lt()){var n=c(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return s(this,t)});function n(t){var e;return p(this,n),mt(u(e=r.call(this)),t,Ct,kt,$,{}),e}return n}();function At(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Pt(e){var r,o,i,a,c,u,s,f,l,h,p,v,d,m,g,y,b,w,x,$,S,C,O,q,G,H,F,V,z,M,J,Y,K,X,Z,W,Q,tt,et,rt,nt,ot,it,at=new Rt({}),st=new _t({props:{segment:e[0]}}),ft=e[2].default,dt=function(t,e,r,n){if(t){var o=E(t,e,r,n);return t[0](o)}}(ft,e,e[1],null);return{c:function(){lt(at.$$.fragment),r=j(),lt(st.$$.fragment),o=j(),i=R("main"),dt&&dt.c(),a=j(),c=R("aside"),u=R("strong"),s=P("Follow me"),f=j(),l=R("div"),h=j(),p=R("ul"),v=R("li"),d=R("a"),m=A("svg"),g=A("use"),y=j(),b=R("span"),w=P("GitHub"),x=j(),$=R("li"),S=R("a"),C=A("svg"),O=A("use"),q=j(),G=R("span"),H=P("GitLab"),F=j(),V=R("li"),z=R("a"),M=A("svg"),J=A("use"),Y=j(),K=R("span"),X=P("Twitter"),Z=j(),W=R("li"),Q=R("a"),tt=A("svg"),et=A("use"),rt=j(),nt=R("span"),ot=P("LinkedIn"),this.h()},l:function(t){ht(at.$$.fragment,t),r=U(t),ht(st.$$.fragment,t),o=U(t);var e=T(i=D(t,"MAIN",{class:!0}));dt&&dt.l(e),e.forEach(k),a=U(t);var n=T(c=D(t,"ASIDE",{id:!0})),E=T(u=D(n,"STRONG",{}));s=B(E,"Follow me"),E.forEach(k),f=U(n),T(l=D(n,"DIV",{class:!0})).forEach(k),h=U(n);var _=T(p=D(n,"UL",{})),L=T(v=D(_,"LI",{})),R=T(d=D(L,"A",{href:!0})),A=T(m=D(R,"svg",{viewBox:!0,class:!0},1));T(g=D(A,"use",{"xlink:href":!0},1)).forEach(k),A.forEach(k),y=U(R);var P=T(b=D(R,"SPAN",{class:!0}));w=B(P,"GitHub"),P.forEach(k),R.forEach(k),L.forEach(k),x=U(_);var j=T($=D(_,"LI",{})),N=T(S=D(j,"A",{href:!0})),I=T(C=D(N,"svg",{viewBox:!0,class:!0},1));T(O=D(I,"use",{"xlink:href":!0},1)).forEach(k),I.forEach(k),q=U(N);var it=T(G=D(N,"SPAN",{class:!0}));H=B(it,"GitLab"),it.forEach(k),N.forEach(k),j.forEach(k),F=U(_);var ct=T(V=D(_,"LI",{})),ut=T(z=D(ct,"A",{href:!0})),ft=T(M=D(ut,"svg",{viewBox:!0,class:!0},1));T(J=D(ft,"use",{"xlink:href":!0},1)).forEach(k),ft.forEach(k),Y=U(ut);var lt=T(K=D(ut,"SPAN",{class:!0}));X=B(lt,"Twitter"),lt.forEach(k),ut.forEach(k),ct.forEach(k),Z=U(_);var pt=T(W=D(_,"LI",{})),vt=T(Q=D(pt,"A",{href:!0})),mt=T(tt=D(vt,"svg",{viewBox:!0,class:!0},1));T(et=D(mt,"use",{"xlink:href":!0},1)).forEach(k),mt.forEach(k),rt=U(vt);var gt=T(nt=D(vt,"SPAN",{class:!0}));ot=B(gt,"LinkedIn"),gt.forEach(k),vt.forEach(k),pt.forEach(k),_.forEach(k),n.forEach(k),this.h()},h:function(){N(i,"class","svelte-laa8ja"),N(l,"class","dot"),I(g,"xlink:href","icons/sprite.svg#github"),N(m,"viewBox","0 0 24 24"),N(m,"class","icon icon-small"),N(b,"class","label"),N(d,"href","https://github.com/LenaSchnedlitz"),I(O,"xlink:href","icons/sprite.svg#gitlab"),N(C,"viewBox","0 0 24 24"),N(C,"class","icon icon-small"),N(G,"class","label"),N(S,"href","https://gitlab.com/LenaSchnedlitz"),I(J,"xlink:href","icons/sprite.svg#twitter"),N(M,"viewBox","0 0 24 24"),N(M,"class","icon icon-small"),N(K,"class","label"),N(z,"href","https://twitter.com/LenaSchnedlitz"),I(et,"xlink:href","icons/sprite.svg#linkedin"),N(tt,"viewBox","0 0 24 24"),N(tt,"class","icon icon-small"),N(nt,"class","label"),N(Q,"href","https://www.linkedin.com/in/lenaschnedlitz"),N(c,"id","follow-me")},m:function(t,e){pt(at,t,e),L(t,r,e),pt(st,t,e),L(t,o,e),L(t,i,e),dt&&dt.m(i,null),L(t,a,e),L(t,c,e),_(c,u),_(u,s),_(c,f),_(c,l),_(c,h),_(c,p),_(p,v),_(v,d),_(d,m),_(m,g),_(d,y),_(d,b),_(b,w),_(p,x),_(p,$),_($,S),_(S,C),_(C,O),_(S,q),_(S,G),_(G,H),_(p,F),_(p,V),_(V,z),_(z,M),_(M,J),_(z,Y),_(z,K),_(K,X),_(p,Z),_(p,W),_(W,Q),_(Q,tt),_(tt,et),_(Q,rt),_(Q,nt),_(nt,ot),it=!0},p:function(e,r){var o=n(r,1)[0],i={};1&o&&(i.segment=e[0]),st.$set(i),dt&&dt.p&&2&o&&dt.p(E(ft,e,e[1],null),function(e,r,n,o){if(e[2]&&o){var i=e[2](o(n));if(void 0===r.dirty)return i;if("object"===t(i)){for(var a=[],c=Math.max(r.dirty.length,i.length),u=0;u<c;u+=1)a[u]=r.dirty[u]|i[u];return a}return r.dirty|i}return r.dirty}(ft,e[1],o,null))},i:function(t){it||(ct(at.$$.fragment,t),ct(st.$$.fragment,t),ct(dt,t),it=!0)},o:function(t){ut(at.$$.fragment,t),ut(st.$$.fragment,t),ut(dt,t),it=!1},d:function(t){vt(at,t),t&&k(r),vt(st,t),t&&k(o),t&&k(i),dt&&dt.d(t),t&&k(a),t&&k(c)}}}function jt(t,e,r){var n=e.segment,o=e.$$slots,i=void 0===o?{}:o,a=e.$$scope;return t.$set=function(t){"segment"in t&&r(0,n=t.segment),"$$scope"in t&&r(1,a=t.$$scope)},[n,a,i]}var Ot=function(t){l(n,gt);var e,r=(e=n,function(){var t,r=c(e);if(At()){var n=c(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return s(this,t)});function n(t){var e;return p(this,n),mt(u(e=r.call(this)),t,jt,Pt,$,{segment:0}),e}return n}();function Nt(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function It(t){var e,r,n=t[1].stack+"";return{c:function(){e=R("pre"),r=P(n)},l:function(t){var o=T(e=D(t,"PRE",{}));r=B(o,n),o.forEach(k)},m:function(t,n){L(t,e,n),_(e,r)},p:function(t,e){2&e&&n!==(n=t[1].stack+"")&&q(r,n)},d:function(t){t&&k(e)}}}function Tt(t){var e,r,o,i,a,c,u,s,f,l=t[1].message+"";document.title=e=t[0];var h=t[2]&&t[1].stack&&It(t);return{c:function(){r=j(),o=R("h1"),i=P(t[0]),a=j(),c=R("p"),u=P(l),s=j(),h&&h.c(),f=O()},l:function(e){G('[data-svelte="svelte-1moakz"]',document.head).forEach(k),r=U(e);var n=T(o=D(e,"H1",{}));i=B(n,t[0]),n.forEach(k),a=U(e);var p=T(c=D(e,"P",{}));u=B(p,l),p.forEach(k),s=U(e),h&&h.l(e),f=O()},m:function(t,e){L(t,r,e),L(t,o,e),_(o,i),L(t,a,e),L(t,c,e),_(c,u),L(t,s,e),h&&h.m(t,e),L(t,f,e)},p:function(t,r){var o=n(r,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&q(i,t[0]),2&o&&l!==(l=t[1].message+"")&&q(u,l),t[2]&&t[1].stack?h?h.p(t,o):((h=It(t)).c(),h.m(f.parentNode,f)):h&&(h.d(1),h=null)},i:m,o:m,d:function(t){t&&k(r),t&&k(o),t&&k(a),t&&k(c),t&&k(s),h&&h.d(t),t&&k(f)}}}function Dt(t,e,r){var n=e.status,o=e.error;return t.$set=function(t){"status"in t&&r(0,n=t.status),"error"in t&&r(1,o=t.error)},[n,o,!1]}var Bt=function(t){l(n,gt);var e,r=(e=n,function(){var t,r=c(e);if(Nt()){var n=c(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return s(this,t)});function n(t){var e;return p(this,n),mt(u(e=r.call(this)),t,Dt,Tt,$,{status:0,error:1}),e}return n}();function Ut(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function qt(t){var e,r,n=[t[4].props],o=t[4].component;function i(t){for(var e={},r=0;r<n.length;r+=1)e=g(e,n[r]);return{props:e}}if(o)var a=new o(i());return{c:function(){a&&lt(a.$$.fragment),e=O()},l:function(t){a&&ht(a.$$.fragment,t),e=O()},m:function(t,n){a&&pt(a,t,n),L(t,e,n),r=!0},p:function(t,r){var c=16&r?st(n,[ft(t[4].props)]):{};if(o!==(o=t[4].component)){if(a){it();var u=a;ut(u.$$.fragment,1,0,(function(){vt(u,1)})),at()}o?(lt((a=new o(i())).$$.fragment),ct(a.$$.fragment,1),pt(a,e.parentNode,e)):a=null}else o&&a.$set(c)},i:function(t){r||(a&&ct(a.$$.fragment,t),r=!0)},o:function(t){a&&ut(a.$$.fragment,t),r=!1},d:function(t){t&&k(e),a&&vt(a,t)}}}function Gt(t){var e,r=new Bt({props:{error:t[0],status:t[1]}});return{c:function(){lt(r.$$.fragment)},l:function(t){ht(r.$$.fragment,t)},m:function(t,n){pt(r,t,n),e=!0},p:function(t,e){var n={};1&e&&(n.error=t[0]),2&e&&(n.status=t[1]),r.$set(n)},i:function(t){e||(ct(r.$$.fragment,t),e=!0)},o:function(t){ut(r.$$.fragment,t),e=!1},d:function(t){vt(r,t)}}}function Ht(t){var e,r,n,o,i=[Gt,qt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),r=a[e]=i[e](t),{c:function(){r.c(),n=O()},l:function(t){r.l(t),n=O()},m:function(t,r){a[e].m(t,r),L(t,n,r),o=!0},p:function(t,o){var u=e;(e=c(t))===u?a[e].p(t,o):(it(),ut(a[u],1,1,(function(){a[u]=null})),at(),(r=a[e])||(r=a[e]=i[e](t)).c(),ct(r,1),r.m(n.parentNode,n))},i:function(t){o||(ct(r),o=!0)},o:function(t){ut(r),o=!1},d:function(t){a[e].d(t),t&&k(n)}}}function Ft(t){for(var e,r=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[Ht]},$$scope:{ctx:t}},i=0;i<r.length;i+=1)o=g(o,r[i]);var a=new Ot({props:o});return{c:function(){lt(a.$$.fragment)},l:function(t){ht(a.$$.fragment,t)},m:function(t,r){pt(a,t,r),e=!0},p:function(t,e){var o=n(e,1)[0],i=12&o?st(r,[4&o&&{segment:t[2][0]},8&o&&ft(t[3].props)]):{};83&o&&(i.$$scope={dirty:o,ctx:t}),a.$set(i)},i:function(t){e||(ct(a.$$.fragment,t),e=!0)},o:function(t){ut(a.$$.fragment,t),e=!1},d:function(t){vt(a,t)}}}function Vt(t,e,r){var n=e.stores,o=e.error,i=e.status,a=e.segments,c=e.level0,u=e.level1,s=void 0===u?null:u;return z(wt,n),t.$set=function(t){"stores"in t&&r(5,n=t.stores),"error"in t&&r(0,o=t.error),"status"in t&&r(1,i=t.status),"segments"in t&&r(2,a=t.segments),"level0"in t&&r(3,c=t.level0),"level1"in t&&r(4,s=t.level1)},[o,i,a,c,s,n]}var zt,Mt=function(t){l(n,gt);var e,r=(e=n,function(){var t,r=c(e);if(Ut()){var n=c(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return s(this,t)});function n(t){var e;return p(this,n),mt(u(e=r.call(this)),t,Vt,Ft,$,{stores:5,error:0,status:1,segments:2,level0:3,level1:4}),e}return n}(),Jt=[/^\/portfolio.json$/,/^\/portfolio\/([^\/]+?).json$/,/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],Yt=[{js:function(){return import("./index.6b24c68e.js")},css:["legacy/index.6b24c68e.css","legacy/client.ac8f732f.css"]},{js:function(){return import("./index.a664e949.js")},css:["legacy/index.a664e949.css","legacy/client.ac8f732f.css"]},{js:function(){return import("./[slug].efccab23.js")},css:["legacy/client.ac8f732f.css"]},{js:function(){return import("./about.bdb67068.js")},css:["legacy/about.bdb67068.css","legacy/client.ac8f732f.css"]},{js:function(){return import("./index.5428b066.js")},css:["legacy/index.5428b066.css","legacy/client.ac8f732f.css"]},{js:function(){return import("./[slug].94e8845a.js")},css:["legacy/client.ac8f732f.css"]}],Kt=(zt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/portfolio\/?$/,parts:[{i:1}]},{pattern:/^\/portfolio\/([^\/]+?)\/?$/,parts:[null,{i:2,params:function(t){return{slug:zt(t[1])}}}]},{pattern:/^\/about\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/?$/,parts:[{i:4}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:5,params:function(t){return{slug:zt(t[1])}}}]}]);function Xt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},r=me(new URL(t,document.baseURI));return r?(pe[e.replaceState?"replaceState":"pushState"]({id:se},"",t),ye(r,null).then((function(){}))):(location.href=t,new Promise((function(t){})))}var Zt,Wt,Qt,te,ee,re="undefined"!=typeof __SAPPER__&&__SAPPER__,ne=!1,oe=[],ie="{}",ae={page:bt({}),preloading:bt(null),session:bt(re&&re.session)};ae.session.subscribe(function(){var t=a(o.mark((function t(e){var r,n,i,a,c,u;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(te=e,ne){t.next=3;break}return t.abrupt("return");case 3:return ee=!0,r=me(new URL(location.href)),n=Wt={},t.next=8,Ee(r);case 8:if(i=t.sent,a=i.redirect,c=i.props,u=i.branch,n===Wt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,we(a,u,c,r.page);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var ce,ue=null;var se,fe=1;var le,he,pe="undefined"!=typeof history?history:{pushState:function(t,e,r){},replaceState:function(t,e,r){},scrollRestoration:""},ve={};function de(e){var r=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var o=n(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),i=o[1],a=o[2],c=void 0===a?"":a;"string"==typeof r[i]&&(r[i]=[r[i]]),"object"===t(r[i])?r[i].push(c):r[i]=c})),r}function me(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(re.baseUrl))return null;var e=t.pathname.slice(re.baseUrl.length);if(""===e&&(e="/"),!Jt.some((function(t){return t.test(e)})))for(var r=0;r<Kt.length;r+=1){var n=Kt[r],o=n.pattern.exec(e);if(o){var i=de(t.search),a=n.parts[n.parts.length-1],c=a.params?a.params(o):{},u={host:location.host,path:e,query:i,params:c};return{href:t.href,route:n,match:o,page:u}}}}function ge(){return{x:pageXOffset,y:pageYOffset}}function ye(t,e,r,n){return be.apply(this,arguments)}function be(){return(be=a(o.mark((function t(e,r,n,i){var a,c,u,s,f,l,h,p,v;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r?se=r:(a=ge(),ve[se]=a,r=se=++fe,ve[se]=n?a:{x:0,y:0}),se=r,Zt&&ae.preloading.set(!0),c=ue&&ue.href===e.href?ue.promise:Ee(e),ue=null,u=Wt={},t.next=8,c;case 8:if(s=t.sent,f=s.redirect,l=s.props,h=s.branch,u===Wt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,we(f,h,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),n||(p=ve[r],i&&(v=document.getElementById(i.slice(1)))&&(p={x:0,y:v.getBoundingClientRect().top}),ve[se]=p,p&&scrollTo(p.x,p.y));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function we(t,e,r,n){return xe.apply(this,arguments)}function xe(){return(xe=a(o.mark((function t(e,r,n,i){var a,c;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",Xt(e.location,{replaceState:!0}));case 2:if(ae.page.set(i),ae.preloading.set(!1),!Zt){t.next=8;break}Zt.$set(n),t.next=17;break;case 8:return n.stores={page:{subscribe:ae.page.subscribe},preloading:{subscribe:ae.preloading.subscribe},session:ae.session},t.next=11,Qt;case 11:if(t.t0=t.sent,n.level0={props:t.t0},a=document.querySelector("#sapper-head-start"),c=document.querySelector("#sapper-head-end"),a&&c){for(;a.nextSibling!==c;)ke(a.nextSibling);ke(a),ke(c)}Zt=new Mt({target:ce,props:n,hydrate:!0});case 17:oe=r,ie=JSON.stringify(i.query),ne=!0,ee=!1;case 21:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function $e(t,e,r,n){if(n!==ie)return!0;var o=oe[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0))}function Ee(t){return Se.apply(this,arguments)}function Se(){return(Se=a(o.mark((function t(e){var r,n,i,c,u,s,f,l,h,p,v;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route,n=e.page,i=n.path.split("/").filter(Boolean),c=null,u={error:null,status:200,segments:[i[0]]},s={fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(c&&(c.statusCode!==t||c.location!==e))throw new Error("Conflicting redirects");c={statusCode:t,location:e}},error:function(t,e){u.error="string"==typeof e?new Error(e):e,u.status=t}},Qt||(Qt=re.preloaded[0]||xt.call(s,{host:n.host,path:n.path,query:n.query,params:{}},te)),l=1,t.prev=7,h=JSON.stringify(n.query),p=r.pattern.exec(n.path),v=!1,t.next=13,Promise.all(r.parts.map(function(){var t=a(o.mark((function t(r,a){var c,f,d,m,g,y;return o.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=i[a],$e(a,c,p,h)&&(v=!0),u.segments[l]=i[a+1],r){t.next=5;break}return t.abrupt("return",{segment:c});case 5:if(f=l++,ee||v||!oe[a]||oe[a].part!==r.i){t.next=8;break}return t.abrupt("return",oe[a]);case 8:return v=!1,t.next=11,Le(Yt[r.i]);case 11:if(d=t.sent,m=d.default,g=d.preload,!ne&&re.preloaded[a+1]){t.next=25;break}if(!g){t.next=21;break}return t.next=18,g.call(s,{host:n.host,path:n.path,query:n.query,params:r.params?r.params(e.match):{}},te);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:y=t.t0,t.next=26;break;case 25:y=re.preloaded[a+1];case 26:return t.abrupt("return",u["level".concat(f)]={component:m,props:y,segment:c,match:p,part:r.i});case 27:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()));case 13:f=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),u.error=t.t0,u.status=500,f=[];case 21:return t.abrupt("return",{redirect:c,props:u,branch:f});case 22:case"end":return t.stop()}}),t,null,[[7,16]])})))).apply(this,arguments)}function _e(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise((function(t,r){var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onload=function(){return t()},n.onerror=r,document.head.appendChild(n)}))}function Le(t){var e="string"==typeof t.css?[]:t.css.map(_e);return e.unshift(t.js()),Promise.all(e).then((function(t){return t[0]}))}function ke(t){t.parentNode.removeChild(t)}function Ce(t){var e=me(new URL(t,document.baseURI));if(e)return ue&&t===ue.href||function(t,e){ue={href:t,promise:e}}(t,Ee(e)),ue.promise}function Re(t){clearTimeout(le),le=setTimeout((function(){Ae(t)}),20)}function Ae(t){var e=je(t.target);e&&"prefetch"===e.rel&&Ce(e.href)}function Pe(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var r=je(e.target);if(r&&r.href){var n="object"===t(r.href)&&"SVGAnimatedString"===r.href.constructor.name,o=String(n?r.href.baseVal:r.href);if(o!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&!(n?r.target.baseVal:r.target)){var i=new URL(o);if(i.pathname!==location.pathname||i.search!==location.search){var a=me(i);if(a)ye(a,null,r.hasAttribute("sapper-noscroll"),i.hash),e.preventDefault(),pe.pushState({id:se},"",i.href)}}}else location.hash||e.preventDefault()}}}function je(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Oe(t){if(ve[se]=ge(),t.state){var e=me(new URL(location.href));e?ye(e,t.state.id):location.href=location.href}else(function(t){se=t})(fe=fe+1),pe.replaceState({id:se},"",location.href)}he={target:document.querySelector("#sapper")},"scrollRestoration"in pe&&(pe.scrollRestoration="manual"),function(t){ce=t}(he.target),addEventListener("click",Pe),addEventListener("popstate",Oe),addEventListener("touchstart",Ae),addEventListener("mousemove",Re),Promise.resolve().then((function(){var t=location,e=t.hash,r=t.href;pe.replaceState({id:fe},"",r);var n,o,i,a,c,u,s,f,l=new URL(location.href);if(re.error)return n=location,o=n.host,i=n.pathname,a=n.search,c=re.session,u=re.preloaded,s=re.status,f=re.error,Qt||(Qt=u&&u[0]),void we(null,[],{error:f,status:s,session:c,level0:{props:Qt},level1:{props:{status:s,error:f},component:Bt},segments:u},{host:o,path:i,query:de(a),params:{}});var h=me(l);return h?ye(h,fe,!0,e):void 0}));export{O as A,F as H,gt as S,l as _,p as a,u as b,j as c,k as d,R as e,U as f,D as g,T as h,mt as i,B as j,N as k,L as l,_ as m,m as n,c as o,s as p,G as q,n as r,$ as s,P as t,C as u,a as v,o as w,q as x,A as y,I as z};
