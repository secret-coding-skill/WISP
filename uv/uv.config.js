export default {
  prefix: '/uv/',
  bare: 'wss://wisp.pro',  // Replace with your WISP proxy URL
  encodeUrl: true,
  handler: '/uv/uv.handler.js',
  client: '/uv/uv.client.js',
  sw: '/uv/uv.sw.js'
};
