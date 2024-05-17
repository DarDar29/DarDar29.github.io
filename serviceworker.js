const urlsToCache = [
    // List of assets to cache.
    "/",
    "imgs/app-touch-icon.png",
    "imgs/favicon.ico",
    "imgs/icon-192.png",
    "imgs/icon-512-maskable.png",
    "imgs/icon-512.png"
  ];
   
  self.addEventListener("install", (event) => {
    let cacheUrls = async () => {
       const cache = await caches.open("pwa-assets");
       return cache.addAll(urlsToCache);
    };
    event.waitUntil(cacheUrls());
  });
   
  self.addEventListener("fetch", event => {
    event.respondWith(caches.match(event.request));
  });