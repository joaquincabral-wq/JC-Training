const CACHE = 'jc-training-v7-2';
const ASSETS = ['./','./index.html','./styles.css','./app.js','./v3.css','./v3.js','./v4.css','./v4.js','./v4_1.css','./v4_1.js','./v4_2.css','./v4_2.js','./v5.css','./v5.js','./v6.css','./v6.js','./v7.css','./v7_1.js','./v7_1.css','./v7.js','./manifest.json','./icon.svg','./icon-192.png','./icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch', e => { if (e.request.method !== 'GET') return; e.respondWith(fetch(e.request).then(r=>{ const copy=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,copy)); return r; }).catch(()=>caches.match(e.request))); });
