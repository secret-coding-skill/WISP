self.__uv = self.__uv || {};
self.__uv.$b = document.body;

(function () {
  const origOpen = XMLHttpRequest.prototype.open;
  const origSend = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.open = function () {
    this._uvUrl = arguments[1];
    return origOpen.apply(this, arguments);
  };

  XMLHttpRequest.prototype.send = function () {
    const url = new URL(this._uvUrl, location.href);
    const config = __uv.config;

    if (!url.pathname.startsWith(config.prefix)) {
      arguments[0] = undefined;
      this._uvUrl = config.prefix + __uv.$u(url.href);
    }

    return origSend.apply(this, arguments);
  };
})();
