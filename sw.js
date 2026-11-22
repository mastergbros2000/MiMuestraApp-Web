const CACHE_NAME = 'mimuestra-v5';
const PAGES = ['./', './index.html'].map(path => new URL(path, self.registration.scope).href);
const ASSETS = [
  './css/styles.css?v=5',
  './js/app.js?v=5',
  './manifest.json'
].map(path => new URL(path, self.registration.scope).href);

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll([...PAGES, ...ASSETS].map(url => new Request(url, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((cacheNames) => Promise.all(
        cacheNames
          .filter((cacheName) => cacheName.startsWith('mimuestra-') && cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const request = e.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  url.search = '';
  const isAppPage = request.mode === 'navigate' && PAGES.includes(url.href);
  if (!isAppPage && !ASSETS.includes(request.url)) return;

  e.respondWith(
    fetch(request, { cache: 'no-cache' }).catch(async () => {
      const cache = await caches.open(CACHE_NAME);
      return (await cache.match(isAppPage ? url.href : request)) || Response.error();
    })
  );
});
