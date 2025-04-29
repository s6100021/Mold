self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("mold-cache").then((cache) =>
      cache.addAll([
        "./",
        "./index.html",
        "./head.png",
        "./footer.png",
        "./ml.png",
        "./click.mp3",
        "./icon-192.png",
        "./icon-512.png"
      ])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
