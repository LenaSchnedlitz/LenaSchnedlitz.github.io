import{y as t,z as e,_ as n,a as s,i as r,s as a,b as c,S as o,c as i,e as u,t as f,q as l,d as h,f as p,g as v,h as m,j as d,k as y,H as x,l as R,m as j,v as E,x as b,n as g,o as q,p as w}from"./client.e176cbe8.js";function S(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function k(t){var e,n,s,r,a,c,o,q,w,S,k=t[0].title+"",z=t[0].teaser+"",H=t[0].html+"";return document.title=e="Lena Schnedlitz - "+t[0].title,{c:function(){n=i(),s=u("article"),r=u("h1"),a=f(k),c=i(),o=u("h2"),q=f(z),w=i(),this.h()},l:function(t){l('[data-svelte="svelte-1vjitqe"]',document.head).forEach(h),n=p(t),s=v(t,"ARTICLE",{});var e=m(s);r=v(e,"H1",{});var i=m(r);a=d(i,k),i.forEach(h),c=p(e),o=v(e,"H2",{class:!0});var u=m(o);q=d(u,z),u.forEach(h),w=p(e),e.forEach(h),this.h()},h:function(){y(o,"class","teaser svelte-i0iqwu"),S=new x(H,null)},m:function(t,e){R(t,n,e),R(t,s,e),j(s,r),j(r,a),j(s,c),j(s,o),j(o,q),j(s,w),S.m(s)},p:function(t,n){var s=E(n,1)[0];1&s&&e!==(e="Lena Schnedlitz - "+t[0].title)&&(document.title=e),1&s&&k!==(k=t[0].title+"")&&b(a,k),1&s&&z!==(z=t[0].teaser+"")&&b(q,z),1&s&&H!==(H=t[0].html+"")&&S.p(H)},i:g,o:g,d:function(t){t&&h(n),t&&h(s)}}}function z(t){return H.apply(this,arguments)}function H(){return(H=t(e.mark((function t(n){var s,r,a;return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.params,n.query,t.next=3,this.fetch("portfolio/".concat(s.slug,".json"));case 3:return r=t.sent,t.next=6,r.json();case 6:if(a=t.sent,200!==r.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(r.status,a.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function L(t,e,n){var s=e.post;return t.$set=function(t){"post"in t&&n(0,s=t.post)},[s]}var D=function(t){n(u,o);var e,i=(e=u,function(){var t,n=q(e);if(S()){var s=q(this).constructor;t=Reflect.construct(n,arguments,s)}else t=n.apply(this,arguments);return w(this,t)});function u(t){var e;return s(this,u),e=i.call(this),r(c(e),t,L,k,a,{post:0}),e}return u}();export default D;export{z as preload};
