const cacheName = 'hello-pwa';
const filesToCache = [
  './',
  './index.html',
  './css/style.css',
  './js/main.js',
  './fonts/Quicksand-Regular.ttf',
  './img/bg.jpeg',
  './assets/',
];

self.addEventListener('install', e => {
  e.waitUntil(
    (async () => {
      try {
        const cache = await caches.open(cacheName);
        return cache.addAll(filesToCache);
      } catch (e) {
        console.log(e.message);
      }
    })()
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    (async () => {
      try {
        const response = await caches.match(e.request);
        return response || fetch(e.request);
      } catch (e) {
        console.log(e.message);
      }
    })()
  );
});
