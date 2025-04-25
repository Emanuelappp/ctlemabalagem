self.addEventListener('install', (event) => {
    self.skipWaiting();
  });
  
  self.addEventListener('activate', (event) => {
    console.log('Service Worker ativado');
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request)
        .then((res) => res || fetch(event.request))
    );
  });
  