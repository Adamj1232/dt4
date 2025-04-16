/* eslint-disable no-restricted-globals */
const CACHE_NAME = 'dtf-cache-v1'
const urlsToCache = [
  '/',
  '/index.html',
  '/static/js/main.bundle.js',
  '/static/css/main.css',
  '/images/DT4_logo_initials.webp',
  '/images/WinterDTF-Clean_no_bg_compressed.webp'
]

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)))
})

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)))
})
