import{_ as t,a as s,i as r,s as n,b as e,S as o,e as c,c as a,g as l,h as i,f,d as u,k as h,l as p,m as v,t as g,q as d,j as m,r as y,n as j,u as z,o as E,p as q}from"./client.280746da.js";function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function R(t,s,r){var n=t.slice();return n[1]=s[r],n}function I(t){var s,r,n,e,o,g,d,m,y,j,z,E;return{c:function(){s=c("div"),r=c("a"),n=c("img"),g=a(),d=c("img"),E=a(),this.h()},l:function(t){s=l(t,"DIV",{class:!0});var e=i(s);r=l(e,"A",{rel:!0,href:!0,title:!0,class:!0});var o=i(r);n=l(o,"IMG",{class:!0,alt:!0,src:!0}),g=f(o),d=l(o,"IMG",{class:!0,alt:!0,src:!0}),o.forEach(u),E=f(e),e.forEach(u),this.h()},h:function(){h(n,"class","square svelte-s50hzt"),h(n,"alt",e=t[1].title),n.src!==(o="portfolio/"+t[1].slug+"-square.png")&&h(n,"src",o),h(d,"class","rectangle svelte-s50hzt"),h(d,"alt",m=t[1].title),d.src!==(y="portfolio/"+t[1].slug+".png")&&h(d,"src",y),h(r,"rel","prefetch"),h(r,"href",j="portfolio/"+t[1].slug),h(r,"title",z=t[1].title),h(r,"class","svelte-s50hzt"),h(s,"class","link-wrapper svelte-s50hzt")},m:function(t,e){p(t,s,e),v(s,r),v(r,n),v(r,g),v(r,d),v(s,E)},p:function(t,s){1&s&&e!==(e=t[1].title)&&h(n,"alt",e),1&s&&n.src!==(o="portfolio/"+t[1].slug+"-square.png")&&h(n,"src",o),1&s&&m!==(m=t[1].title)&&h(d,"alt",m),1&s&&d.src!==(y="portfolio/"+t[1].slug+".png")&&h(d,"src",y),1&s&&j!==(j="portfolio/"+t[1].slug)&&h(r,"href",j),1&s&&z!==(z=t[1].title)&&h(r,"title",z)},d:function(t){t&&u(s)}}}function P(t){for(var s,r,n,e,o,E=t[0],q=[],w=0;w<E.length;w+=1)q[w]=I(R(t,E,w));return{c:function(){s=a(),r=c("h1"),n=g("Projects"),e=a(),o=c("section");for(var t=0;t<q.length;t+=1)q[t].c();this.h()},l:function(t){d('[data-svelte="svelte-dwwwrw"]',document.head).forEach(u),s=f(t),r=l(t,"H1",{});var c=i(r);n=m(c,"Projects"),c.forEach(u),e=f(t),o=l(t,"SECTION",{class:!0});for(var a=i(o),h=0;h<q.length;h+=1)q[h].l(a);a.forEach(u),this.h()},h:function(){document.title="Lena Schnedlitz - Portfolio",h(o,"class","svelte-s50hzt")},m:function(t,c){p(t,s,c),p(t,r,c),v(r,n),p(t,e,c),p(t,o,c);for(var a=0;a<q.length;a+=1)q[a].m(o,null)},p:function(t,s){var r=y(s,1)[0];if(1&r){var n;for(E=t[0],n=0;n<E.length;n+=1){var e=R(t,E,n);q[n]?q[n].p(e,r):(q[n]=I(e),q[n].c(),q[n].m(o,null))}for(;n<q.length;n+=1)q[n].d(1);q.length=E.length}},i:j,o:j,d:function(t){t&&u(s),t&&u(r),t&&u(e),t&&u(o),z(q,t)}}}function S(t){t.params,t.query;return this.fetch("portfolio.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function x(t,s,r){var n=s.posts;return t.$set=function(t){"posts"in t&&r(0,n=t.posts)},[n]}var D=function(c){t(i,o);var a,l=(a=i,function(){var t,s=E(a);if(w()){var r=E(this).constructor;t=Reflect.construct(s,arguments,r)}else t=s.apply(this,arguments);return q(this,t)});function i(t){var o;return s(this,i),o=l.call(this),r(e(o),t,x,P,n,{posts:0}),o}return i}();export default D;export{S as preload};