import{_ as t,a as n,i as r,s as e,b as a,S as s,e as o,t as c,c as f,g as i,h as u,j as h,d as l,f as p,k as v,l as g,m as d,x as m,A as y,q as E,r as R,n as j,u as b,o as x,p as P}from"./client.ac8f732f.js";function A(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function S(t,n,r){var e=t.slice();return e[1]=n[r],e}function q(t){var n,r,e,a,s,y,E,R,j,b,x=t[1].title+"",P=t[1].teaser+"";return{c:function(){n=o("article"),r=o("a"),e=o("h2"),a=c(x),s=f(),y=o("p"),E=c(P),R=c("..."),b=f(),this.h()},l:function(t){n=i(t,"ARTICLE",{});var o=u(n);r=i(o,"A",{rel:!0,href:!0});var c=u(r);e=i(c,"H2",{});var f=u(e);a=h(f,x),f.forEach(l),s=p(c),y=i(c,"P",{class:!0});var v=u(y);E=h(v,P),R=h(v,"..."),v.forEach(l),c.forEach(l),b=p(o),o.forEach(l),this.h()},h:function(){v(y,"class","svelte-pjg5ce"),v(r,"rel","prefetch"),v(r,"href",j="blog/"+t[1].slug)},m:function(t,o){g(t,n,o),d(n,r),d(r,e),d(e,a),d(r,s),d(r,y),d(y,E),d(y,R),d(n,b)},p:function(t,n){1&n&&x!==(x=t[1].title+"")&&m(a,x),1&n&&P!==(P=t[1].teaser+"")&&m(E,P),1&n&&j!==(j="blog/"+t[1].slug)&&v(r,"href",j)},d:function(t){t&&l(n)}}}function z(t){for(var n,r,e,a,s,v=t[0],m=[],x=0;x<v.length;x+=1)m[x]=q(S(t,v,x));return{c:function(){n=f(),r=o("h1"),e=c("Posts"),a=f();for(var t=0;t<m.length;t+=1)m[t].c();s=y(),this.h()},l:function(t){E('[data-svelte="svelte-193z6ig"]',document.head).forEach(l),n=p(t),r=i(t,"H1",{});var o=u(r);e=h(o,"Posts"),o.forEach(l),a=p(t);for(var c=0;c<m.length;c+=1)m[c].l(t);s=y(),this.h()},h:function(){document.title="Lena Schnedlitz - Blog"},m:function(t,o){g(t,n,o),g(t,r,o),d(r,e),g(t,a,o);for(var c=0;c<m.length;c+=1)m[c].m(t,o);g(t,s,o)},p:function(t,n){var r=R(n,1)[0];if(1&r){var e;for(v=t[0],e=0;e<v.length;e+=1){var a=S(t,v,e);m[e]?m[e].p(a,r):(m[e]=q(a),m[e].c(),m[e].m(s.parentNode,s))}for(;e<m.length;e+=1)m[e].d(1);m.length=v.length}},i:j,o:j,d:function(t){t&&l(n),t&&l(r),t&&l(a),b(m,t),t&&l(s)}}}function D(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function H(t,n,r){var e=n.posts;return t.$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var L=function(o){t(i,s);var c,f=(c=i,function(){var t,n=x(c);if(A()){var r=x(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return P(this,t)});function i(t){var s;return n(this,i),s=f.call(this),r(a(s),t,H,z,e,{posts:0}),s}return i}();export default L;export{D as preload};