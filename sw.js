const CACHE_NAME = 'mimuestra-v16';
const PAGES = ['./', './index.html'].map(path => new URL(path, self.registration.scope).href);
const ASSETS = [
  './css/styles.css?v=8',
  './js/app.js?v=8',
  './manifest.json',
  './assets/vendor/bootstrap/bootstrap.min.css',
  './assets/vendor/bootstrap/bootstrap.bundle.min.js',
  './assets/vendor/bootstrap-icons/bootstrap-icons.min.css',
  './assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff2?dd67030699838ea613ee6dbda90effa6',
  './assets/vendor/bootstrap-icons/fonts/bootstrap-icons.woff?dd67030699838ea613ee6dbda90effa6'
].map(path => new URL(path, self.registration.scope).href);

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll([...PAGES, ...ASSETS].map(url => new Request(url, { cache: 'reload' }))))
      .then(async () => {
        try {
          const manifestUrl = new URL('./assets/audio/audio-manifest.json', self.registration.scope);
          const response = await fetch(new Request(manifestUrl, { cache: 'reload' }));
          if (!response.ok) throw new Error(`HTTP ${response.status}`);
          const filenames = await response.json();
          const cache = await caches.open(CACHE_NAME);
          await cache.addAll(filenames.map(filename => new Request(
            new URL(`./assets/audio/${filename}`, self.registration.scope),
            { cache: 'reload' }
          )));
        } catch (error) {
          console.warn('No se pudieron precargar los audios locales:', error);
        }
      })
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
  const isAudioAsset = url.origin === self.location.origin && /\/assets\/audio\//.test(url.pathname);
  if (isAudioAsset) {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      if (cached) return cached;
      try {
        const response = await fetch(request);
        if (response.ok) await cache.put(request, response.clone());
        return response;
      } catch (error) {
        console.error('No se pudo cargar el audio local:', error);
        return Response.error();
      }
    })());
    return;
  }
  if (!isAppPage && !ASSETS.includes(request.url)) return;

  e.respondWith(
    fetch(request, { cache: 'no-cache' }).catch(async () => {
      const cache = await caches.open(CACHE_NAME);
      return (await cache.match(isAppPage ? url.href : request)) || Response.error();
    })
  );
});
