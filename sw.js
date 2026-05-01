// 모든 기존 캐시 삭제 후 네트워크만 사용
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
  );
  self.clients.claim();
});
// 캐시 완전 무시 — 항상 네트워크
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request, { cache: 'no-store' }));
});
