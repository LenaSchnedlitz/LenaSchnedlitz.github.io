!function(){"use strict";const e=["client/client.0578982d.js","client/index.aab2b6f4.js","client/index.e0f48498.js","client/[slug].02ce6cf6.js","client/about.0469ac6f.js","client/index.34412279.js","client/[slug].2d0b042e.js","client/client.7bf0a908.js"].concat(["service-worker-index.html","dark-mode.css","favicon.png","fonts/FiraCode/FiraCode-Bold.woff2","fonts/FiraCode/FiraCode-Regular.woff2","fonts/FiraCode/OFL.txt","fonts/Lora/Lora-BoldItalic.woff2","fonts/Lora/Lora-Italic.woff2","fonts/Lora/Lora-Regular.woff2","fonts/Lora/OFL.txt","fonts/Montserrat/Montserrat-ExtraBold.woff2","fonts/Montserrat/Montserrat-Regular.woff2","fonts/Montserrat/Montserrat-SemiBold.woff2","fonts/Montserrat/OFL.txt","global.css","icons/MIT.txt","icons/sprite.svg","logo-192.png","logo-512.png","logo.svg","manifest.json","me/high-res/me-l.jpg","me/high-res/me-m.jpg","me/high-res/me-s.jpg","me/high-res/me-xl.jpg","me/optimized/me-dark-l-min.jpg","me/optimized/me-dark-m-min.jpg","me/optimized/me-dark-xl-min.jpg","me/optimized/me-l-min.jpg","me/optimized/me-m-min.jpg","me/optimized/me-s-min.jpg","me/optimized/me-xl-min.jpg","portfolio/placeholder-2-square.png","portfolio/placeholder-2.png","portfolio/placeholder-3-square.png","portfolio/placeholder-3.png","portfolio/placeholder-4-square.png","portfolio/placeholder-4.png","portfolio/placeholder-square.png","portfolio/placeholder.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1587286139499").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1587286139499"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const o=new URL(e.request.url);o.protocol.startsWith("http")&&(o.hostname===self.location.hostname&&o.port!==self.location.port||(o.host===self.location.host&&t.has(o.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1587286139499").then(async t=>{try{const o=await fetch(e.request);return t.put(e.request,o.clone()),o}catch(o){const n=await t.match(e.request);if(n)return n;throw o}}))))})}();
