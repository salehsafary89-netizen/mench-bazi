const CACHE_NAME = 'saber-pwa-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './saber-app-icon.png'
];

// Install Event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    }).then(() => {
      self.skipWaiting();
    }).catch(error => {
      console.error('Cache addAll error:', error);
    })
  );
});

// Activate Event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => {
            console.log('Deleting old cache:', key);
            return caches.delete(key);
          })
      );
    }).then(() => {
      self.clients.claim();
    })
  );
});

// Fetch Event - Network first, then cache
self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome extensions and other non-http requests
  if (!event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      // Return cached response if available
      if (cached) {
        return cached;
      }

      // Otherwise fetch from network
      return fetch(event.request).then(response => {
        // Don't cache if not a success
        if (!response || response.status !== 200 || response.type === 'error') {
          return response;
        }

        // Clone the response
        const copy = response.clone();

        // Add to cache in background
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, copy);
        }).catch(error => {
          console.error('Error adding to cache:', error);
        });

        return response;
      }).catch(error => {
        console.error('Fetch error:', error);
        
        // Return offline fallback for HTML pages
        if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
        
        // Return error response for other requests
        return new Response('Offline - Resource not available', {
          status: 503,
          statusText: 'Service Unavailable'
        });
      });
    })
  );
});

// Handle messages from clients
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});