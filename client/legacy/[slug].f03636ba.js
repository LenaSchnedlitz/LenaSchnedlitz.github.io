import{y as t,z as e,_ as n,a as s,i as a,s as r,b as c,S as o,c as i,e as u,t as f,q as l,d as h,f as p,g as v,h as d,j as m,k as y,H as x,l as R,m as j,v as E,x as g,n as q,o as w,p as S}from"./client.eafe6dad.js";function b(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function k(t){var e,n,s,a,r,c,o,w,S,b,k=t[0].title+"",z=t[0].teaser+"",H=t[0].html+"";return document.title=e="Lena Schnedlitz - "+t[0].title,{c:function(){n=i(),s=u("article"),a=u("h1"),r=f(k),c=i(),o=u("h2"),w=f(z),S=i(),this.h()},l:function(t){l('[data-svelte="svelte-1vjitqe"]',document.head).forEach(h),n=p(t),s=v(t,"ARTICLE",{});var e=d(s);a=v(e,"H1",{});var i=d(a);r=m(i,k),i.forEach(h),c=p(e),o=v(e,"H2",{class:!0});var u=d(o);w=m(u,z),u.forEach(h),S=p(e),e.forEach(h),this.h()},h:function(){y(o,"class","teaser svelte-i0iqwu"),b=new x(H,null)},m:function(t,e){R(t,n,e),R(t,s,e),j(s,a),j(a,r),j(s,c),j(s,o),j(o,w),j(s,S),b.m(s)},p:function(t,n){var s=E(n,1)[0];1&s&&e!==(e="Lena Schnedlitz - "+t[0].title)&&(document.title=e),1&s&&k!==(k=t[0].title+"")&&g(r,k),1&s&&z!==(z=t[0].teaser+"")&&g(w,z),1&s&&H!==(H=t[0].html+"")&&b.p(H)},i:q,o:q,d:function(t){t&&h(n),t&&h(s)}}}function z(t){return H.apply(this,arguments)}function H(){return(H=t(e.mark((function t(n){var s,a,r;return e.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.params,n.query,t.next=3,this.fetch("portfolio/".concat(s.slug,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(r=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{post:r});case 11:this.error(a.status,r.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function L(t,e,n){var s=e.post;return t.$set=function(t){"post"in t&&n(0,s=t.post)},[s]}var D=function(t){n(u,o);var e,i=(e=u,function(){var t,n=w(e);if(b()){var s=w(this).constructor;t=Reflect.construct(n,arguments,s)}else t=n.apply(this,arguments);return S(this,t)});function u(t){var e;return s(this,u),e=i.call(this),a(c(e),t,L,k,r,{post:0}),e}return u}();export default D;export{z as preload};
