importScripts('/uv/uv.bundle.js', '/uv/uv.config.js');

self.__uv.handler = async function (request) {
  const url = new URL(request.url);
  const prefix = __uv.config.prefix;
  let path = url.pathname.slice(prefix.length - 1);

  if (path.startsWith('/')) path = path.slice(1);
  if (!path) return new Response('No path provided.', { status: 400 });

  const base = self.__uv.r(path);
  const headers = new Headers(request.headers);

  headers.set('x-requested-with', 'XMLHttpRequest');

  return fetch(new Request(base, {
    method: request.method,
    headers,
    body: request.body,
    redirect: 'manual'
  }));
};
