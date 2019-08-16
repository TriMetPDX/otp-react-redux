"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

var _react = require("react");

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

var NarrativeItinerary =
/*#__PURE__*/
function (_Component) {
  _inherits(NarrativeItinerary, _Component);

  function NarrativeItinerary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, NarrativeItinerary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NarrativeItinerary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_onHeaderClick", function () {
      var _this$props = _this.props,
          active = _this$props.active,
          index = _this$props.index,
          onClick = _this$props.onClick,
          routingType = _this$props.routingType,
          setActiveItinerary = _this$props.setActiveItinerary;

      if (onClick) {
        onClick();
      } else if (!active) {
        setActiveItinerary(index);
      } else if (routingType === 'PROFILE') {
        setActiveItinerary(null);
      }
    });

    return _this;
  }

  _createClass(NarrativeItinerary, [{
    key: "render",
    value: function render() {
      throw new Error('render() called on abstract class NarrativeItinerary');
    }
  }]);

  return NarrativeItinerary;
}(_react.Component);

exports.default = NarrativeItinerary;

_defineProperty(NarrativeItinerary, "propTypes", {
  active: _react.PropTypes.bool,
  activeLeg: _react.PropTypes.number,
  activeStep: _react.PropTypes.number,
  expanded: _react.PropTypes.bool,
  index: _react.PropTypes.number,
  itinerary: _react.PropTypes.object,
  onClick: _react.PropTypes.func,
  routingType: _react.PropTypes.string,
  setActiveItinerary: _react.PropTypes.func,
  setActiveLeg: _react.PropTypes.func,
  setActiveStep: _react.PropTypes.func
});

module.exports = exports.default;

//# sourceMappingURL=narrative-itinerary.js