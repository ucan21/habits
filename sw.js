// SW v20260504113238 — 캐시 완전 비활성화
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  // 캐시 완전 무시 — 항상 네트워크
  if(e.request.method === 'GET') {
    e.respondWith(
      fetch(e.request, {cache: 'no-store', headers: {'Cache-Control': 'no-cache'}})
      .catch(() => new Response('offline'))
    );
  }
});
