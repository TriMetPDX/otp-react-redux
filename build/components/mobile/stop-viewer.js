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

var _reactRedux = require("react-redux");

var _container = _interopRequireDefault(require("./container"));

var _navigationBar = _interopRequireDefault(require("./navigation-bar"));

var _stopViewer = _interopRequireDefault(require("../viewers/stop-viewer"));

var _defaultMap = _interopRequireDefault(require("../map/default-map"));

var _ui = require("../../actions/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MobileStopViewer =
/*#__PURE__*/
function (_Component) {
  _inherits(MobileStopViewer, _Component);

  function MobileStopViewer() {
    _classCallCheck(this, MobileStopViewer);

    return _possibleConstructorReturn(this, _getPrototypeOf(MobileStopViewer).apply(this, arguments));
  }

  _createClass(MobileStopViewer, [{
    key: "render",
    value: function render() {
      var _this = this;

      return _react.default.createElement(_container.default, null, _react.default.createElement(_navigationBar.default, {
        headerText: this.props.languageConfig.stopViewer || 'Stop Viewer',
        showBackButton: true,
        onBackClicked: function onBackClicked() {
          _this.props.setViewedStop(null);
        }
      }), _react.default.createElement("div", {
        className: "viewer-map"
      }, _react.default.createElement(_defaultMap.default, null)), _react.default.createElement("div", {
        className: "viewer-container"
      }, _react.default.createElement(_stopViewer.default, {
        hideBackButton: true
      })));
    }
  }]);

  return MobileStopViewer;
}(_react.Component); // connect to the redux store


_defineProperty(MobileStopViewer, "propTypes", {
  setViewedStop: _propTypes.default.func
});

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    languageConfig: state.otp.config.language
  };
};

var mapDispatchToProps = {
  setViewedStop: _ui.setViewedStop
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MobileStopViewer);

exports.default = _default;
module.exports = exports.default;

//# sourceMappingURL=stop-viewer.js