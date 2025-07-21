self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('push', function(event) {
  const data = event.data.json();
  event.waitUntil(
    self.registration.showNotification("From Shivansh 💌", {
      body: data.body,
      icon: "assets/image1.jpg"
    })
  );
});
