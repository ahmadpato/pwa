self.addEventListener('install', function(e) {
e.waitUntil(
  caches.open('mycache').then(function(cache) {
   //list file yang akan diletakkan di storage
    return cache.addAll([
      '/',
      '/index.html',
      '/project_1/add2numbers.html',
      '/project_1/add2numbers.js',
      '/project_1/images/icon.png',
      '/project_2/index.html',
      '/project_2/add2numbers.js',
      '/project_2/css/mystyle.css',
      '/images/ahmad.jpg',
      '/images/gmail.svg',
      '/images/image.png',
      '/images/ahmad2.png',
      '/images/BasketBall.png',
      '/offline.html'
    ]);
  })
);
});

self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    }).catch(function(){
      //if both fail, show a generic callback
      return caches.match('offline.html');
    })
  );
});