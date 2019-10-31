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

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactLeaflet = require("react-leaflet");

var _polyline = _interopRequireDefault(require("@mapbox/polyline"));

var _itinerary = require("../../util/itinerary");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ItineraryLegs =
/*#__PURE__*/
function (_Component) {
  _inherits(ItineraryLegs, _Component);

  function ItineraryLegs() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ItineraryLegs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ItineraryLegs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_onLegClick", function (e) {
      var index = e.layer.feature.geometry.index;
      var leg = _this.props.itinerary.legs[index];

      if (index === _this.props.activeLeg) {
        _this.props.setActiveLeg(null);
      } else {
        _this.props.setActiveLeg(index, leg);
      }
    });

    return _this;
  }

  _createClass(ItineraryLegs, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          itinerary = _this$props.itinerary,
          activeLeg = _this$props.activeLeg;
      return _react.default.createElement(_reactLeaflet.FeatureGroup, null, itinerary.legs.map(function (leg, index) {
        var geojson = _polyline.default.toGeoJSON(leg.legGeometry.points);

        geojson.index = index;
        var active = activeLeg === index;
        var color = active ? 'yellow' : (0, _itinerary.isTransit)(leg.mode) ? 'blue' : 'black';
        return _react.default.createElement(_reactLeaflet.GeoJSON, {
          key: Math.random(),
          color: color,
          onClick: _this2._onLegClick,
          data: geojson
        });
      }));
    }
  }]);

  return ItineraryLegs;
}(_react.Component);

exports.default = ItineraryLegs;

_defineProperty(ItineraryLegs, "propTypes", {
  itinerary: _propTypes.default.object,
  activeLeg: _propTypes.default.number,
  setActiveLeg: _propTypes.default.func
});

module.exports = exports.default;

//# sourceMappingURL=itinerary-legs.js