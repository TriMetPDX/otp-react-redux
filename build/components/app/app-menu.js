"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _reactBootstrap = require("react-bootstrap");

var _icon = _interopRequireDefault(require("../narrative/icon"));

var _ui = require("../../actions/ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

// TODO: make menu items configurable via props/config
var AppMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(AppMenu, _Component);

  function AppMenu() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AppMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AppMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_showRouteViewer", function () {
      _this.props.setMainPanelContent(_ui.MainPanelContent.ROUTE_VIEWER);
    });

    _defineProperty(_assertThisInitialized(_this), "_startOver", function () {
      var reactRouterConfig = _this.props.reactRouterConfig;
      var startOverUrl = '/';

      if (reactRouterConfig && reactRouterConfig.basename) {
        startOverUrl += reactRouterConfig.basename;
      }

      window.location.href = startOverUrl;
    });

    return _this;
  }

  _createClass(AppMenu, [{
    key: "render",
    value: function render() {
      var languageConfig = this.props.languageConfig;
      return _react.default.createElement("div", {
        className: "app-menu"
      }, _react.default.createElement(_reactBootstrap.DropdownButton, {
        title: _react.default.createElement(_icon.default, {
          type: "bars"
        }),
        noCaret: true,
        className: "app-menu-button",
        id: "app-menu"
      }, _react.default.createElement(_reactBootstrap.MenuItem, {
        onClick: this._showRouteViewer
      }, _react.default.createElement(_icon.default, {
        type: "bus"
      }), " ", languageConfig.routeViewer || 'Route Viewer'), _react.default.createElement(_reactBootstrap.MenuItem, {
        onClick: this._startOver
      }, _react.default.createElement(_icon.default, {
        type: "undo"
      }), " Start Over")));
    }
  }]);

  return AppMenu;
}(_react.Component); // connect to the redux store


_defineProperty(AppMenu, "propTypes", {
  setMainPanelContent: _propTypes.default.func
});

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    languageConfig: state.otp.config.language
  };
};

var mapDispatchToProps = {
  setMainPanelContent: _ui.setMainPanelContent
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AppMenu);

exports.default = _default;
module.exports = exports.default;

//# sourceMappingURL=app-menu.js