self.__uv = self.__uv || {};
self.__uv.location = new Proxy({}, {
  get(target, prop) {
    return Reflect.get(self.location, prop);
  },
  set(target, prop, value) {
    return Reflect.set(self.location, prop, value);
  }
});
self.__uv.$location = self.location;
self.__uv.$u = function (url) {
  if (typeof url !== 'string') throw new TypeError('URL must be a string');
  return btoa(url).replace(/[+/=]/g, (m) => ({
    '+': '-', '/': '_', '=': ''
  })[m]);
};
self.__uv.r = function (path) {
  return decodeURIComponent(path.replace(/__(\w+)_/g, (_, c) => String.fromCharCode(parseInt(c, 16))));
};
