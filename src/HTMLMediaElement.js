"use strict";

var _ = require("./utils");
var HTMLElement = require("./HTMLElement");

/* istanbul ignore else */
if (typeof global.HTMLMediaElement === "undefined") {
  global.HTMLMediaElement = function HTMLMediaElement() {
    throw new TypeError("Illegal constructor");
  };
  _.inherits(global.HTMLMediaElement, HTMLElement);
}

function HTMLMediaElement() {
}
_.inherits(HTMLMediaElement, global.HTMLMediaElement);

module.exports = global.WebAudioTestAPI.HTMLMediaElement = HTMLMediaElement;
