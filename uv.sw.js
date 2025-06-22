importScripts('/uv/uv.bundle.js', '/uv/uv.config.js', '/uv/uv.handler.js');

self.addEventListener('fetch', event => {
  if (event.request.url.includes(__uv.config.prefix)) {
    event.respondWith(__uv.handler(event.request));
  }
});
