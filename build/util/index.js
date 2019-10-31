"use strict";

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.weak-map");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var distance = _interopRequireWildcard(require("./distance"));

var _geocoder = _interopRequireDefault(require("./geocoder"));

var itinerary = _interopRequireWildcard(require("./itinerary"));

var map = _interopRequireWildcard(require("./map"));

var profile = _interopRequireWildcard(require("./profile"));

var query = _interopRequireWildcard(require("./query"));

var reverse = _interopRequireWildcard(require("./reverse"));

var state = _interopRequireWildcard(require("./state"));

var time = _interopRequireWildcard(require("./time"));

var ui = _interopRequireWildcard(require("./ui"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var OtpUtils = {
  distance: distance,
  getGeocoder: _geocoder.default,
  itinerary: itinerary,
  map: map,
  profile: profile,
  query: query,
  reverse: reverse,
  state: state,
  time: time,
  ui: ui
};
var _default = OtpUtils;
exports.default = _default;
module.exports = exports.default;

//# sourceMappingURL=index.js