import{S as t,i as s,s as e,e as l,a as r,b as o,f as a,c,d as n,h as i,j as h,k as f,t as p,q as u,g,n as d,l as v}from"./client.5fca4f33.js";function m(t,s,e){const l=t.slice();return l[1]=s[e],l}function j(t){let s,e,p,u,g,d,v,m,j,z,E,q;return{c(){s=l("div"),e=l("a"),p=l("img"),d=r(),v=l("img"),q=r(),this.h()},l(t){s=o(t,"DIV",{class:!0});var l=a(s);e=o(l,"A",{rel:!0,href:!0,title:!0,class:!0});var r=a(e);p=o(r,"IMG",{class:!0,alt:!0,src:!0}),d=c(r),v=o(r,"IMG",{class:!0,alt:!0,src:!0}),r.forEach(n),q=c(l),l.forEach(n),this.h()},h(){i(p,"class","square svelte-s50hzt"),i(p,"alt",u=t[1].title),p.src!==(g="portfolio/"+t[1].slug+"-square.png")&&i(p,"src",g),i(v,"class","rectangle svelte-s50hzt"),i(v,"alt",m=t[1].title),v.src!==(j="portfolio/"+t[1].slug+".png")&&i(v,"src",j),i(e,"rel","prefetch"),i(e,"href",z="portfolio/"+t[1].slug),i(e,"title",E=t[1].title),i(e,"class","svelte-s50hzt"),i(s,"class","link-wrapper svelte-s50hzt")},m(t,l){h(t,s,l),f(s,e),f(e,p),f(e,d),f(e,v),f(s,q)},p(t,s){1&s&&u!==(u=t[1].title)&&i(p,"alt",u),1&s&&p.src!==(g="portfolio/"+t[1].slug+"-square.png")&&i(p,"src",g),1&s&&m!==(m=t[1].title)&&i(v,"alt",m),1&s&&v.src!==(j="portfolio/"+t[1].slug+".png")&&i(v,"src",j),1&s&&z!==(z="portfolio/"+t[1].slug)&&i(e,"href",z),1&s&&E!==(E=t[1].title)&&i(e,"title",E)},d(t){t&&n(s)}}}function z(t){let s,e,z,E,q,w=t[0],I=[];for(let s=0;s<w.length;s+=1)I[s]=j(m(t,w,s));return{c(){s=r(),e=l("h1"),z=p("Projects"),E=r(),q=l("section");for(let t=0;t<I.length;t+=1)I[t].c();this.h()},l(t){u('[data-svelte="svelte-dwwwrw"]',document.head).forEach(n),s=c(t),e=o(t,"H1",{});var l=a(e);z=g(l,"Projects"),l.forEach(n),E=c(t),q=o(t,"SECTION",{class:!0});var r=a(q);for(let t=0;t<I.length;t+=1)I[t].l(r);r.forEach(n),this.h()},h(){document.title="Lena Schnedlitz - Portfolio",i(q,"class","svelte-s50hzt")},m(t,l){h(t,s,l),h(t,e,l),f(e,z),h(t,E,l),h(t,q,l);for(let t=0;t<I.length;t+=1)I[t].m(q,null)},p(t,[s]){if(1&s){let e;for(w=t[0],e=0;e<w.length;e+=1){const l=m(t,w,e);I[e]?I[e].p(l,s):(I[e]=j(l),I[e].c(),I[e].m(q,null))}for(;e<I.length;e+=1)I[e].d(1);I.length=w.length}},i:d,o:d,d(t){t&&n(s),t&&n(e),t&&n(E),t&&n(q),v(I,t)}}}function E({params:t,query:s}){return this.fetch("portfolio.json").then(t=>t.json()).then(t=>({posts:t}))}function q(t,s,e){let{posts:l}=s;return t.$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),s(this,t,q,z,e,{posts:0})}}export{E as preload};
