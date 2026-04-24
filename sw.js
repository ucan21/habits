const C='henry-diary-v14';
const F=[
  './',
  './index.html',
  './habits.html',
  './brain.html',
  './gtask.html',
  './gratitude.html',
  './gcal.html',
  './manifest.json'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))));self.clients.claim();});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));});
