!function(){"use strict";const e=["client/client.269a4f61.js","client/index.fcf5696b.js","client/index.85c86139.js","client/[slug].dde6b0ca.js","client/about.1c2ec1cb.js","client/index.571245a0.js","client/[slug].ca14b056.js","client/client.198ca9d7.js"].concat(["service-worker-index.html","dark-mode.css","favicon.png","fonts/FiraCode/FiraCode-Bold.woff2","fonts/FiraCode/FiraCode-Regular.woff2","fonts/FiraCode/OFL.txt","fonts/Lora/Lora-BoldItalic.woff2","fonts/Lora/Lora-Italic.woff2","fonts/Lora/Lora-Regular.woff2","fonts/Lora/OFL.txt","fonts/Montserrat/Montserrat-ExtraBold.woff2","fonts/Montserrat/Montserrat-Regular.woff2","fonts/Montserrat/Montserrat-SemiBold.woff2","fonts/Montserrat/OFL.txt","global.css","icons/MIT.txt","icons/sprite.svg","logo-192.png","logo-512.png","logo.svg","manifest.json","me/high-res/me-l.jpg","me/high-res/me-m.jpg","me/high-res/me-s.jpg","me/high-res/me-xl.jpg","me/optimized/me-dark-l-min.jpg","me/optimized/me-dark-m-min.jpg","me/optimized/me-dark-xl-min.jpg","me/optimized/me-l-min.jpg","me/optimized/me-m-min.jpg","me/optimized/me-s-min.jpg","me/optimized/me-xl-min.jpg","portfolio/game-of-life.gif","portfolio/skycalc.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1588023172478").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1588023172478"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const o=new URL(e.request.url);o.protocol.startsWith("http")&&(o.hostname===self.location.hostname&&o.port!==self.location.port||(o.host===self.location.host&&t.has(o.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1588023172478").then(async t=>{try{const o=await fetch(e.request);return t.put(e.request,o.clone()),o}catch(o){const s=await t.match(e.request);if(s)return s;throw o}}))))})}();
