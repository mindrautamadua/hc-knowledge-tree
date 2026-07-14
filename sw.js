// Service Worker — Pohon Ilmu Human Capital
// Strategi: network-first untuk file inti (HTML/JS/CSS) agar pembaruan
// langsung terlihat saat online; cache-first untuk aset berat (vendor,
// font, ikon). Offline tetap berjalan penuh dari cache.
const CACHE = 'pohon-ilmu-hc-v14';
const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './css/style.css',
  './js/main.js',
  './js/tree.js',
  './js/content.js',
  './vendor/three.module.js',
  './vendor/OrbitControls.js',
  './fonts/fraunces-400.woff2',
  './fonts/jakarta-400.woff2',
  './icons/favicon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

const CORE = /(\.html|\.css|\.js|\/)$/;

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  const isCore = e.request.mode === 'navigate' ||
    (url.origin === location.origin && CORE.test(url.pathname) && !url.pathname.includes('/vendor/'));

  if (isCore) {
    // network-first: selalu segar saat online, cache sebagai cadangan offline
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copy));
          }
          return res;
        })
        .catch(() =>
          caches.match(e.request, { ignoreSearch: true })
            .then((hit) => hit || caches.match('./index.html'))
        )
    );
  } else {
    // cache-first untuk aset berat yang jarang berubah
    e.respondWith(
      caches.match(e.request, { ignoreSearch: true }).then((hit) =>
        hit ||
        fetch(e.request).then((res) => {
          if (res.ok && url.origin === location.origin) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(e.request, copy));
          }
          return res;
        })
      )
    );
  }
});
