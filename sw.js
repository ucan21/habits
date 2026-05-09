const C='hd-quote-display-v1';
const F=['/habits/','/habits/index.html','/habits/habits.html','/habits/brain.html','/habits/gtask.html','/habits/gratitude.html','/habits/gcal.html','/habits/backup.html','/habits/manifest.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{if(!e.request.url.includes('/habits/'))return;e.respondWith(fetch(e.request,{cache:'no-store'}).catch(()=>caches.match(e.request)));});
