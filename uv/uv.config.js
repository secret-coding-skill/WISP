self.__uv = self.__uv || {};
self.__uv.config = {
  prefix: '/uv/',
  bare: 'wss://wisp.pro', // public WISP server
  encodeUrl: true,
  handler: '/uv/uv.handler.js',
  client: '/uv/uv.client.js',
  sw: '/uv/uv.sw.js'
};
