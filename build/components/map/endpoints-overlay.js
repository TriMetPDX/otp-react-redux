"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.assign");

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _endpoint = _interopRequireDefault(require("./endpoint"));

var _map = require("../../actions/map");

var _state = require("../../util/state");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var EndpointsOverlay =
/*#__PURE__*/
function (_Component) {
  _inherits(EndpointsOverlay, _Component);

  function EndpointsOverlay() {
    _classCallCheck(this, EndpointsOverlay);

    return _possibleConstructorReturn(this, _getPrototypeOf(EndpointsOverlay).apply(this, arguments));
  }

  _createClass(EndpointsOverlay, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          query = _this$props.query,
          showUserSettings = _this$props.showUserSettings;
      var from = query.from,
          to = query.to;
      return _react.default.createElement("div", null, _react.default.createElement(_endpoint.default, _extends({
        type: "from",
        showPopup: showUserSettings,
        location: from
      }, this.props)), _react.default.createElement(_endpoint.default, _extends({
        type: "to",
        showPopup: showUserSettings,
        location: to
      }, this.props)));
    }
  }]);

  return EndpointsOverlay;
}(_react.Component); // connect to the redux store


_defineProperty(EndpointsOverlay, "propTypes", {
  query: _react.PropTypes.object
});

var mapStateToProps = function mapStateToProps(state, ownProps) {
  // Use query from active search (if a search has been made) or default to
  // current query is no search is available.
  var activeSearch = (0, _state.getActiveSearch)(state.otp);
  var query = activeSearch ? activeSearch.query : state.otp.currentQuery;
  var showUserSettings = (0, _state.getShowUserSettings)(state.otp);
  return {
    locations: state.otp.user.locations,
    query: query,
    showUserSettings: showUserSettings
  };
};

var mapDispatchToProps = {
  forgetPlace: _map.forgetPlace,
  rememberPlace: _map.rememberPlace,
  setLocation: _map.setLocation,
  clearLocation: _map.clearLocation
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(EndpointsOverlay);

exports.default = _default;
module.exports = exports.default;

//# sourceMappingURL=endpoints-overlay.js