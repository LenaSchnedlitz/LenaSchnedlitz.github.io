!function(){"use strict";const e=["client/client.c70badb5.js","client/index.a2039efa.js","client/index.1a4fc815.js","client/[slug].6a0e0410.js","client/about.73ec42ed.js","client/index.4249154a.js","client/[slug].5a52986e.js","client/client.e599239a.js"].concat(["service-worker-index.html","dark-mode.css","favicon.png","fonts/FiraCode/FiraCode-Bold.woff2","fonts/FiraCode/FiraCode-Regular.woff2","fonts/FiraCode/OFL.txt","fonts/Lora/Lora-BoldItalic.woff2","fonts/Lora/Lora-Italic.woff2","fonts/Lora/Lora-Regular.woff2","fonts/Lora/OFL.txt","fonts/Montserrat/Montserrat-ExtraBold.woff2","fonts/Montserrat/Montserrat-Regular.woff2","fonts/Montserrat/Montserrat-SemiBold.woff2","fonts/Montserrat/OFL.txt","global.css","icons/MIT.txt","icons/sprite.svg","logo-192.png","logo-512.png","logo.svg","manifest.json","me/me-l.jpg","me/me-m.jpg","me/me-s.jpg","me/me-xl.jpg","portfolio/placeholder-2-square.png","portfolio/placeholder-2.png","portfolio/placeholder-square.png","portfolio/placeholder.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1587213923864").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1587213923864"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const o=new URL(e.request.url);o.protocol.startsWith("http")&&(o.hostname===self.location.hostname&&o.port!==self.location.port||(o.host===self.location.host&&t.has(o.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1587213923864").then(async t=>{try{const o=await fetch(e.request);return t.put(e.request,o.clone()),o}catch(o){const s=await t.match(e.request);if(s)return s;throw o}}))))})}();
