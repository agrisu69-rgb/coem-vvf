// Service worker: l'app funziona anche senza rete (pagina, icone e librerie già usate restano in memoria)
const CACHE = 'coem-v1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x))))); self.clients.claim(); });
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.origin === location.origin && e.request.mode === 'navigate') {
    // pagina: prima la rete (per gli aggiornamenti), se manca la rete la copia salvata
    e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(x => x.put('./index.html', c)); return r; }).catch(() => caches.match('./index.html')));
    return;
  }
  // resto: prima la copia salvata, poi la rete
  e.respondWith(caches.match(e.request).then(m => m || fetch(e.request).then(r => { if (r.ok && (url.origin === location.origin || url.host === 'cdnjs.cloudflare.com')) { const c = r.clone(); caches.open(CACHE).then(x => x.put(e.request, c)); } return r; })));
});
