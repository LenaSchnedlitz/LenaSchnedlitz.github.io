function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function i(t){return null==t?"":t}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function h(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function v(){return m("")}function $(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e,n){t.setAttributeNS("http://www.w3.org/1999/xlink",e,n)}function E(t){return Array.from(t.childNodes)}function w(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?d(e):p(e)}function x(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function y(t){return x(t," ")}function C(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}class _{constructor(t,e=null){this.e=p("div"),this.a=e,this.u(t)}m(t,e=null){for(let n=0;n<this.n.length;n+=1)u(t,this.n[n],e);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(f)}}let L;function A(t){L=t}function P(t,e){(function(){if(!L)throw new Error("Function called outside component initialization");return L})().$$.context.set(t,e)}const k=[],R=[],j=[],N=[],O=Promise.resolve();let I=!1;function B(t){j.push(t)}let q=!1;const U=new Set;function T(){if(!q){q=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];A(e),H(e.$$)}for(k.length=0;R.length;)R.pop()();for(let t=0;t<j.length;t+=1){const e=j[t];U.has(e)||(U.add(e),e())}j.length=0}while(k.length);for(;N.length;)N.pop()();I=!1,q=!1,U.clear()}}function H(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const D=new Set;let V;function z(){V={r:0,c:[],p:V}}function G(){V.r||s(V.c),V=V.p}function M(t,e){t&&t.i&&(D.delete(t),t.i(e))}function J(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),V.c.push(()=>{D.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function F(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function K(t){return"object"==typeof t&&null!==t?t:{}}function X(t){t&&t.c()}function Y(t,e){t&&t.l(e)}function Z(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),B(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(B)}function W(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(k.push(t),I||(I=!0,O.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,o,a,c,i,l=[-1]){const u=L;A(e);const h=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let d=!1;if(p.ctx=o?o(e,h,(t,n,...r)=>{const s=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=s)&&(p.bound[t]&&p.bound[t](s),d&&Q(e,t)),n}):[],p.update(),d=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),n.target){if(n.hydrate){const t=E(n.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();n.intro&&M(e.$$.fragment),Z(e,n.target,n.anchor),T()}A(u)}class et{$destroy(){W(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const nt=[];function rt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!nt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),nt.push(n,e)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const st={},ot=()=>({});function at(e){let n,r,s,o,a,c,i,h,d,v,b,C,S,_,L,A;return{c(){n=p("nav"),r=p("ul"),s=p("li"),o=p("a"),a=m("Blog"),i=g(),h=p("li"),d=p("a"),v=m("Portfolio"),C=g(),S=p("li"),_=p("a"),L=m("About"),this.h()},l(t){n=w(t,"NAV",{class:!0});var e=E(n);r=w(e,"UL",{class:!0});var c=E(r);s=w(c,"LI",{class:!0});var l=E(s);o=w(l,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var u=E(o);a=x(u,"Blog"),u.forEach(f),l.forEach(f),i=y(c),h=w(c,"LI",{class:!0});var p=E(h);d=w(p,"A",{"aria-current":!0,href:!0,class:!0});var m=E(d);v=x(m,"Portfolio"),m.forEach(f),p.forEach(f),C=y(c),S=w(c,"LI",{class:!0});var g=E(S);_=w(g,"A",{"aria-current":!0,href:!0,class:!0});var $=E(_);L=x($,"About"),$.forEach(f),g.forEach(f),c.forEach(f),e.forEach(f),this.h()},h(){$(o,"rel","prefetch"),$(o,"aria-current",c="blog"===e[0]?"page":void 0),$(o,"href","blog"),$(o,"class","svelte-ukli01"),$(s,"class","svelte-ukli01"),$(d,"aria-current",b="portfolio"===e[0]?"page":void 0),$(d,"href","portfolio"),$(d,"class","svelte-ukli01"),$(h,"class","svelte-ukli01"),$(_,"aria-current",A="about"===e[0]?"page":void 0),$(_,"href","about"),$(_,"class","svelte-ukli01"),$(S,"class","svelte-ukli01"),$(r,"class","svelte-ukli01"),$(n,"class","svelte-ukli01")},m(t,e){u(t,n,e),l(n,r),l(r,s),l(s,o),l(o,a),l(r,i),l(r,h),l(h,d),l(d,v),l(r,C),l(r,S),l(S,_),l(_,L)},p(t,[e]){1&e&&c!==(c="blog"===t[0]?"page":void 0)&&$(o,"aria-current",c),1&e&&b!==(b="portfolio"===t[0]?"page":void 0)&&$(d,"aria-current",b),1&e&&A!==(A="about"===t[0]?"page":void 0)&&$(_,"aria-current",A)},i:t,o:t,d(t){t&&f(n)}}}function ct(t,e,n){let{segment:r}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class it extends et{constructor(t){super(),tt(this,t,ct,at,a,{segment:0})}}function lt(e){let n,r,s,o,a,c,h,g,v,b=!1,y=()=>{b=!1};return B(e[2]),{c(){r=p("a"),s=d("svg"),o=d("title"),a=m("Lena's Logo"),c=d("circle"),h=d("path"),this.h()},l(t){r=w(t,"A",{href:!0,class:!0});var e=E(r);s=w(e,"svg",{width:!0,height:!0,viewBox:!0,fill:!0,class:!0,xmlns:!0},1);var n=E(s);o=w(n,"title",{},1);var i=E(o);a=x(i,"Lena's Logo"),i.forEach(f),c=w(n,"circle",{cx:!0,cy:!0,r:!0,class:!0},1),E(c).forEach(f),h=w(n,"path",{d:!0,class:!0},1),E(h).forEach(f),n.forEach(f),e.forEach(f),this.h()},h(){$(c,"cx","11"),$(c,"cy","10"),$(c,"r","10"),$(c,"class","svelte-1xm8cxm"),$(h,"d","M6.246 4.644V14.994C6.246 15.378 6.354 15.654 6.57 15.822C6.792 15.984 7.095 16.065 7.479 16.065C7.725 16.065 7.962 16.038 8.19 15.984C8.418 15.924 8.631 15.855 8.829 15.777L9.513 17.676C9.189 17.844 8.799 17.991 8.343 18.117C7.887 18.243 7.356 18.306 6.75 18.306C5.598 18.306 4.752 17.976 4.212 17.316C3.672 16.65 3.402 15.759 3.402 14.643V6.588H0.585V4.644H6.246ZM15.887 16.272C16.361 16.272 16.742 16.197 17.03 16.047C17.324 15.897 17.471 15.672 17.471 15.372C17.471 15.168 17.414 14.997 17.3 14.859C17.186 14.721 16.967 14.589 16.643 14.463C16.319 14.337 15.839 14.187 15.203 14.013C14.327 13.779 13.613 13.443 13.061 13.005C12.515 12.567 12.242 11.925 12.242 11.079C12.242 10.227 12.596 9.522 13.304 8.964C14.018 8.406 15.047 8.127 16.391 8.127C17.243 8.127 17.984 8.238 18.614 8.46C19.25 8.676 19.799 8.952 20.261 9.288L19.127 10.962C18.731 10.716 18.305 10.521 17.849 10.377C17.393 10.227 16.934 10.152 16.472 10.152C15.56 10.152 15.104 10.398 15.104 10.89C15.104 11.052 15.161 11.193 15.275 11.313C15.395 11.427 15.617 11.547 15.941 11.673C16.265 11.793 16.739 11.943 17.363 12.123C17.981 12.297 18.518 12.498 18.974 12.726C19.436 12.954 19.793 13.26 20.045 13.644C20.297 14.022 20.423 14.523 20.423 15.147C20.423 15.843 20.216 16.428 19.802 16.902C19.388 17.37 18.839 17.721 18.155 17.955C17.471 18.189 16.721 18.306 15.905 18.306C14.981 18.306 14.165 18.174 13.457 17.91C12.749 17.646 12.146 17.298 11.648 16.866L13.079 15.264C13.451 15.552 13.871 15.792 14.339 15.984C14.813 16.176 15.329 16.272 15.887 16.272Z"),$(h,"class","svelte-1xm8cxm"),$(s,"width","22"),$(s,"height","22"),$(s,"viewBox","0 0 22 22"),$(s,"fill","none"),$(s,"class",g=i(e[1])+" svelte-1xm8cxm"),$(s,"xmlns","http://www.w3.org/2000/svg"),$(r,"href","."),$(r,"class","svelte-1xm8cxm")},m(t,i,f){var p,d,m,g;u(t,r,i),l(r,s),l(s,o),l(o,a),l(s,c),l(s,h),f&&v(),p=window,d="scroll",m=()=>{b=!0,clearTimeout(n),n=setTimeout(y,100),e[2]()},p.addEventListener(d,m,g),v=()=>p.removeEventListener(d,m,g)},p(t,[e]){1&e&&!b&&(b=!0,clearTimeout(n),scrollTo(window.pageXOffset,t[0]),n=setTimeout(y,100)),2&e&&g!==(g=i(t[1])+" svelte-1xm8cxm")&&$(s,"class",g)},i:t,o:t,d(t){t&&f(r),v()}}}function ut(t,e,n){let r,s=0;return t.$$.update=()=>{1&t.$$.dirty&&n(1,r=s>5?"scrolled":"")},[s,r,function(){n(0,s=window.pageYOffset)}]}class ft extends et{constructor(t){super(),tt(this,t,ut,lt,a,{})}}function ht(t){let e,n,r,s,o,a,i,h,v,C,S,_,L,A,P,k,R,j,N,O,I,B,q,U,T,H,D,V,z,G,F,K,Q,tt,et,nt,rt,st,ot,at,ct,lt,ut;const ht=new ft({}),pt=new it({props:{segment:t[0]}}),dt=t[2].default,mt=function(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}(dt,t,t[1],null);return{c(){X(ht.$$.fragment),e=g(),X(pt.$$.fragment),n=g(),r=p("main"),mt&&mt.c(),s=g(),o=p("aside"),a=p("strong"),i=m("Follow me"),h=g(),v=p("div"),C=g(),S=p("ul"),_=p("li"),L=p("a"),A=d("svg"),P=d("use"),k=g(),R=p("span"),j=m("GitHub"),N=g(),O=p("li"),I=p("a"),B=d("svg"),q=d("use"),U=g(),T=p("span"),H=m("GitLab"),D=g(),V=p("li"),z=p("a"),G=d("svg"),F=d("use"),K=g(),Q=p("span"),tt=m("Twitter"),et=g(),nt=p("li"),rt=p("a"),st=d("svg"),ot=d("use"),at=g(),ct=p("span"),lt=m("LinkedIn"),this.h()},l(t){Y(ht.$$.fragment,t),e=y(t),Y(pt.$$.fragment,t),n=y(t),r=w(t,"MAIN",{class:!0});var c=E(r);mt&&mt.l(c),c.forEach(f),s=y(t),o=w(t,"ASIDE",{id:!0});var l=E(o);a=w(l,"STRONG",{});var u=E(a);i=x(u,"Follow me"),u.forEach(f),h=y(l),v=w(l,"DIV",{class:!0}),E(v).forEach(f),C=y(l),S=w(l,"UL",{});var p=E(S);_=w(p,"LI",{});var d=E(_);L=w(d,"A",{href:!0});var m=E(L);A=w(m,"svg",{viewBox:!0,class:!0},1);var g=E(A);P=w(g,"use",{"xlink:href":!0},1),E(P).forEach(f),g.forEach(f),k=y(m),R=w(m,"SPAN",{class:!0});var $=E(R);j=x($,"GitHub"),$.forEach(f),m.forEach(f),d.forEach(f),N=y(p),O=w(p,"LI",{});var b=E(O);I=w(b,"A",{href:!0});var M=E(I);B=w(M,"svg",{viewBox:!0,class:!0},1);var J=E(B);q=w(J,"use",{"xlink:href":!0},1),E(q).forEach(f),J.forEach(f),U=y(M),T=w(M,"SPAN",{class:!0});var X=E(T);H=x(X,"GitLab"),X.forEach(f),M.forEach(f),b.forEach(f),D=y(p),V=w(p,"LI",{});var Z=E(V);z=w(Z,"A",{href:!0});var W=E(z);G=w(W,"svg",{viewBox:!0,class:!0},1);var it=E(G);F=w(it,"use",{"xlink:href":!0},1),E(F).forEach(f),it.forEach(f),K=y(W),Q=w(W,"SPAN",{class:!0});var ut=E(Q);tt=x(ut,"Twitter"),ut.forEach(f),W.forEach(f),Z.forEach(f),et=y(p),nt=w(p,"LI",{});var ft=E(nt);rt=w(ft,"A",{href:!0});var dt=E(rt);st=w(dt,"svg",{viewBox:!0,class:!0},1);var gt=E(st);ot=w(gt,"use",{"xlink:href":!0},1),E(ot).forEach(f),gt.forEach(f),at=y(dt),ct=w(dt,"SPAN",{class:!0});var vt=E(ct);lt=x(vt,"LinkedIn"),vt.forEach(f),dt.forEach(f),ft.forEach(f),p.forEach(f),l.forEach(f),this.h()},h(){$(r,"class","svelte-laa8ja"),$(v,"class","dot"),b(P,"xlink:href","icons/sprite.svg#github"),$(A,"viewBox","0 0 24 24"),$(A,"class","icon icon-small"),$(R,"class","label"),$(L,"href","https://github.com/LenaSchnedlitz"),b(q,"xlink:href","icons/sprite.svg#gitlab"),$(B,"viewBox","0 0 24 24"),$(B,"class","icon icon-small"),$(T,"class","label"),$(I,"href","https://gitlab.com/LenaSchnedlitz"),b(F,"xlink:href","icons/sprite.svg#twitter"),$(G,"viewBox","0 0 24 24"),$(G,"class","icon icon-small"),$(Q,"class","label"),$(z,"href","https://twitter.com/LenaSchnedlitz"),b(ot,"xlink:href","icons/sprite.svg#linkedin"),$(st,"viewBox","0 0 24 24"),$(st,"class","icon icon-small"),$(ct,"class","label"),$(rt,"href","https://www.linkedin.com/in/lenaschnedlitz"),$(o,"id","follow-me")},m(t,c){Z(ht,t,c),u(t,e,c),Z(pt,t,c),u(t,n,c),u(t,r,c),mt&&mt.m(r,null),u(t,s,c),u(t,o,c),l(o,a),l(a,i),l(o,h),l(o,v),l(o,C),l(o,S),l(S,_),l(_,L),l(L,A),l(A,P),l(L,k),l(L,R),l(R,j),l(S,N),l(S,O),l(O,I),l(I,B),l(B,q),l(I,U),l(I,T),l(T,H),l(S,D),l(S,V),l(V,z),l(z,G),l(G,F),l(z,K),l(z,Q),l(Q,tt),l(S,et),l(S,nt),l(nt,rt),l(rt,st),l(st,ot),l(rt,at),l(rt,ct),l(ct,lt),ut=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),pt.$set(n),mt&&mt.p&&2&e&&mt.p(c(dt,t,t[1],null),function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(dt,t[1],e,null))},i(t){ut||(M(ht.$$.fragment,t),M(pt.$$.fragment,t),M(mt,t),ut=!0)},o(t){J(ht.$$.fragment,t),J(pt.$$.fragment,t),J(mt,t),ut=!1},d(t){W(ht,t),t&&f(e),W(pt,t),t&&f(n),t&&f(r),mt&&mt.d(t),t&&f(s),t&&f(o)}}}function pt(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}class dt extends et{constructor(t){super(),tt(this,t,pt,ht,a,{segment:0})}}function mt(t){let e,n,r=t[1].stack+"";return{c(){e=p("pre"),n=m(r)},l(t){e=w(t,"PRE",{});var s=E(e);n=x(s,r),s.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&C(n,r)},d(t){t&&f(e)}}}function gt(e){let n,r,s,o,a,c,i,h,d,$=e[1].message+"";document.title=n=e[0];let b=e[2]&&e[1].stack&&mt(e);return{c(){r=g(),s=p("h1"),o=m(e[0]),a=g(),c=p("p"),i=m($),h=g(),b&&b.c(),d=v()},l(t){S('[data-svelte="svelte-1moakz"]',document.head).forEach(f),r=y(t),s=w(t,"H1",{});var n=E(s);o=x(n,e[0]),n.forEach(f),a=y(t),c=w(t,"P",{});var l=E(c);i=x(l,$),l.forEach(f),h=y(t),b&&b.l(t),d=v()},m(t,e){u(t,r,e),u(t,s,e),l(s,o),u(t,a,e),u(t,c,e),l(c,i),u(t,h,e),b&&b.m(t,e),u(t,d,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&C(o,t[0]),2&e&&$!==($=t[1].message+"")&&C(i,$),t[2]&&t[1].stack?b?b.p(t,e):(b=mt(t),b.c(),b.m(d.parentNode,d)):b&&(b.d(1),b=null)},i:t,o:t,d(t){t&&f(r),t&&f(s),t&&f(a),t&&f(c),t&&f(h),b&&b.d(t),t&&f(d)}}}function vt(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class $t extends et{constructor(t){super(),tt(this,t,vt,gt,a,{status:0,error:1})}}function bt(t){let n,r;const s=[t[4].props];var o=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var c=new o(a());return{c(){c&&X(c.$$.fragment),n=v()},l(t){c&&Y(c.$$.fragment,t),n=v()},m(t,e){c&&Z(c,t,e),u(t,n,e),r=!0},p(t,e){const r=16&e?F(s,[K(t[4].props)]):{};if(o!==(o=t[4].component)){if(c){z();const t=c;J(t.$$.fragment,1,0,()=>{W(t,1)}),G()}o?(X((c=new o(a())).$$.fragment),M(c.$$.fragment,1),Z(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(t){r||(c&&M(c.$$.fragment,t),r=!0)},o(t){c&&J(c.$$.fragment,t),r=!1},d(t){t&&f(n),c&&W(c,t)}}}function Et(t){let e;const n=new $t({props:{error:t[0],status:t[1]}});return{c(){X(n.$$.fragment)},l(t){Y(n.$$.fragment,t)},m(t,r){Z(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(M(n.$$.fragment,t),e=!0)},o(t){J(n.$$.fragment,t),e=!1},d(t){W(n,t)}}}function wt(t){let e,n,r,s;const o=[Et,bt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=v()},l(t){n.l(t),r=v()},m(t,n){a[e].m(t,n),u(t,r,n),s=!0},p(t,s){let i=e;e=c(t),e===i?a[e].p(t,s):(z(),J(a[i],1,1,()=>{a[i]=null}),G(),n=a[e],n||(n=a[e]=o[e](t),n.c()),M(n,1),n.m(r.parentNode,r))},i(t){s||(M(n),s=!0)},o(t){J(n),s=!1},d(t){a[e].d(t),t&&f(r)}}}function xt(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[wt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const o=new dt({props:s});return{c(){X(o.$$.fragment)},l(t){Y(o.$$.fragment,t)},m(t,e){Z(o,t,e),n=!0},p(t,[e]){const n=12&e?F(r,[4&e&&{segment:t[2][0]},8&e&&K(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(M(o.$$.fragment,t),n=!0)},o(t){J(o.$$.fragment,t),n=!1},d(t){W(o,t)}}}function yt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;return P(st,r),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)},[s,o,a,c,i,r]}class Ct extends et{constructor(t){super(),tt(this,t,yt,xt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const St=[/^\/portfolio.json$/,/^\/portfolio\/([^\/]+?).json$/,/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],_t=[{js:()=>import("./index.005ebc24.js"),css:["index.005ebc24.css","client.a763b13f.css"]},{js:()=>import("./index.a825ad5f.js"),css:["index.a825ad5f.css","client.a763b13f.css"]},{js:()=>import("./[slug].7873eb53.js"),css:["client.a763b13f.css"]},{js:()=>import("./about.cbb00879.js"),css:["about.cbb00879.css","client.a763b13f.css"]},{js:()=>import("./index.37d2b89e.js"),css:["index.37d2b89e.css","client.a763b13f.css"]},{js:()=>import("./[slug].58df5468.js"),css:["client.a763b13f.css"]}],Lt=(At=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/portfolio\/?$/,parts:[{i:1}]},{pattern:/^\/portfolio\/([^\/]+?)\/?$/,parts:[null,{i:2,params:t=>({slug:At(t[1])})}]},{pattern:/^\/about\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/?$/,parts:[{i:4}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:5,params:t=>({slug:At(t[1])})}]}]);var At;const Pt="undefined"!=typeof __SAPPER__&&__SAPPER__;let kt,Rt,jt,Nt=!1,Ot=[],It="{}";const Bt={page:rt({}),preloading:rt(null),session:rt(Pt&&Pt.session)};let qt,Ut;Bt.session.subscribe(async t=>{if(qt=t,!Nt)return;Ut=!0;const e=Jt(new URL(location.href)),n=Rt={},{redirect:r,props:s,branch:o}=await Yt(e);n===Rt&&await Xt(r,o,s,e.page)});let Tt,Ht=null;let Dt,Vt=1;const zt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Gt={};function Mt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Jt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Pt.baseUrl))return null;let e=t.pathname.slice(Pt.baseUrl.length);if(""===e&&(e="/"),!St.some(t=>t.test(e)))for(let n=0;n<Lt.length;n+=1){const r=Lt[n],s=r.pattern.exec(e);if(s){const n=Mt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Ft(){return{x:pageXOffset,y:pageYOffset}}async function Kt(t,e,n,r){if(e)Dt=e;else{const t=Ft();Gt[Dt]=t,e=Dt=++Vt,Gt[Dt]=n?t:{x:0,y:0}}Dt=e,kt&&Bt.preloading.set(!0);const s=Ht&&Ht.href===t.href?Ht.promise:Yt(t);Ht=null;const o=Rt={},{redirect:a,props:c,branch:i}=await s;if(o===Rt&&(await Xt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Gt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Gt[Dt]=t,t&&scrollTo(t.x,t.y)}}async function Xt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Jt(new URL(t,document.baseURI));return n?(zt[e.replaceState?"replaceState":"pushState"]({id:Dt},"",t),Kt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Bt.page.set(r),Bt.preloading.set(!1),kt)kt.$set(n);else{n.stores={page:{subscribe:Bt.page.subscribe},preloading:{subscribe:Bt.preloading.subscribe},session:Bt.session},n.level0={props:await jt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Wt(t.nextSibling);Wt(t),Wt(e)}kt=new Ct({target:Tt,props:n,hydrate:!0})}Ot=e,It=JSON.stringify(r.query),Nt=!0,Ut=!1}async function Yt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;jt||(jt=Pt.preloaded[0]||ot.call(a,{host:n.host,path:n.path,query:n.query,params:{}},qt));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==It)return!0;const s=Ot[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const h=i++;if(!Ut&&!u&&Ot[c]&&Ot[c].part===e.i)return Ot[c];u=!1;const{default:p,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Zt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(_t[e.i]);let m;return m=Nt||!Pt.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},qt):{}:Pt.preloaded[c+1],o[`level${h}`]={component:p,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Zt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Wt(t){t.parentNode.removeChild(t)}function Qt(t){const e=Jt(new URL(t,document.baseURI));if(e)return Ht&&t===Ht.href||function(t,e){Ht={href:t,promise:e}}(t,Yt(e)),Ht.promise}let te;function ee(t){clearTimeout(te),te=setTimeout(()=>{ne(t)},20)}function ne(t){const e=se(t.target);e&&"prefetch"===e.rel&&Qt(e.href)}function re(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=se(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Jt(s);if(o){Kt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),zt.pushState({id:Dt},"",s.href)}}function se(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function oe(t){if(Gt[Dt]=Ft(),t.state){const e=Jt(new URL(location.href));e?Kt(e,t.state.id):location.href=location.href}else Vt=Vt+1,function(t){Dt=t}(Vt),zt.replaceState({id:Dt},"",location.href)}var ae;ae={target:document.querySelector("#sapper")},"scrollRestoration"in zt&&(zt.scrollRestoration="manual"),function(t){Tt=t}(ae.target),addEventListener("click",re),addEventListener("popstate",oe),addEventListener("touchstart",ne),addEventListener("mousemove",ee),Promise.resolve().then(()=>{const{hash:t,href:e}=location;zt.replaceState({id:Vt},"",e);const n=new URL(location.href);if(Pt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=Pt;jt||(jt=o&&o[0]),Xt(null,[],{error:c,status:a,session:s,level0:{props:jt},level1:{props:{status:a,error:c},component:$t},segments:o},{host:e,path:n,query:Mt(r),params:{}})}();const r=Jt(n);return r?Kt(r,Vt,!0,t):void 0});export{_ as H,et as S,g as a,w as b,y as c,f as d,p as e,E as f,x as g,$ as h,tt as i,u as j,l as k,h as l,C as m,t as n,d as o,v as p,S as q,a as s,m as t,b as x};
