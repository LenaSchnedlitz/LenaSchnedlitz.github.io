import{S as t,i as s,s as a,a as e,e as r,t as i,q as o,d as n,c as l,b as c,f as h,g as u,h as f,H as p,j as d,k as m,p as v,n as j}from"./client.faad2ae3.js";function E(t){let s,a,E,q,w,g,x,H,L,S,y=t[0].title+"",z=t[0].teaser+"",$=t[0].html+"";return document.title=s="Lena Schnedlitz - "+t[0].title,{c(){a=e(),E=r("article"),q=r("h1"),w=i(y),g=e(),x=r("h2"),H=i(z),L=e(),this.h()},l(t){o('[data-svelte="svelte-1vjitqe"]',document.head).forEach(n),a=l(t),E=c(t,"ARTICLE",{});var s=h(E);q=c(s,"H1",{});var e=h(q);w=u(e,y),e.forEach(n),g=l(s),x=c(s,"H2",{class:!0});var r=h(x);H=u(r,z),r.forEach(n),L=l(s),s.forEach(n),this.h()},h(){f(x,"class","teaser svelte-i0iqwu"),S=new p($,null)},m(t,s){d(t,a,s),d(t,E,s),m(E,q),m(q,w),m(E,g),m(E,x),m(x,H),m(E,L),S.m(E)},p(t,[a]){1&a&&s!==(s="Lena Schnedlitz - "+t[0].title)&&(document.title=s),1&a&&y!==(y=t[0].title+"")&&v(w,y),1&a&&z!==(z=t[0].teaser+"")&&v(H,z),1&a&&$!==($=t[0].html+"")&&S.p($)},i:j,o:j,d(t){t&&n(a),t&&n(E)}}}async function q({params:t,query:s}){const a=await this.fetch(`portfolio/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function w(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,w,E,a,{post:0})}}export{q as preload};