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

var _reactBootstrap = require("react-bootstrap");

var _reactRedux = require("react-redux");

var _dateTimePreview = _interopRequireDefault(require("./date-time-preview"));

var _settingsPreview = _interopRequireDefault(require("./settings-preview"));

var _dateTimeModal = _interopRequireDefault(require("./date-time-modal"));

var _settingsSelectorPanel = _interopRequireDefault(require("./settings-selector-panel"));

var _ui = require("../../actions/ui");

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

var TabbedFormPanel =
/*#__PURE__*/
function (_Component) {
  _inherits(TabbedFormPanel, _Component);

  function TabbedFormPanel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TabbedFormPanel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TabbedFormPanel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_onEditDateTimeClick", function () {
      var _this$props = _this.props,
          mainPanelContent = _this$props.mainPanelContent,
          setMainPanelContent = _this$props.setMainPanelContent;
      setMainPanelContent(mainPanelContent === 'EDIT_DATETIME' ? null : 'EDIT_DATETIME');
    });

    _defineProperty(_assertThisInitialized(_this), "_onEditSettingsClick", function () {
      var _this$props2 = _this.props,
          mainPanelContent = _this$props2.mainPanelContent,
          setMainPanelContent = _this$props2.setMainPanelContent;
      setMainPanelContent(mainPanelContent === 'EDIT_SETTINGS' ? null : 'EDIT_SETTINGS');
    });

    _defineProperty(_assertThisInitialized(_this), "_onHideClick", function () {
      return _this.props.setMainPanelContent(null);
    });

    return _this;
  }

  _createClass(TabbedFormPanel, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          icons = _this$props3.icons,
          mainPanelContent = _this$props3.mainPanelContent;
      return _react.default.createElement("div", {
        className: "tabbed-form-panel"
      }, _react.default.createElement("div", {
        className: "tab-row"
      }, _react.default.createElement("div", {
        className: "tab left ".concat(mainPanelContent === 'EDIT_DATETIME' ? ' selected' : '')
      }, _react.default.createElement("div", {
        className: "tab-content"
      }, _react.default.createElement(_dateTimePreview.default, {
        onClick: this._onEditDateTimeClick
      }))), _react.default.createElement("div", {
        className: "tab right ".concat(mainPanelContent === 'EDIT_SETTINGS' ? ' selected' : '')
      }, _react.default.createElement("div", {
        className: "tab-content"
      }, _react.default.createElement(_settingsPreview.default, {
        onClick: this._onEditSettingsClick
      })))), (mainPanelContent === 'EDIT_DATETIME' || mainPanelContent === 'EDIT_SETTINGS') && _react.default.createElement("div", {
        className: "active-panel"
      }, mainPanelContent === 'EDIT_DATETIME' && _react.default.createElement(_dateTimeModal.default, null), mainPanelContent === 'EDIT_SETTINGS' && _react.default.createElement(_settingsSelectorPanel.default, {
        icons: icons
      }), _react.default.createElement("div", {
        className: "hide-button-row"
      }, _react.default.createElement(_reactBootstrap.Button, {
        className: "hide-button clear-button-formatting",
        onClick: this._onHideClick
      }, _react.default.createElement("i", {
        className: "fa fa-caret-up"
      }), " Hide Settings"))));
    }
  }]);

  return TabbedFormPanel;
}(_react.Component); // connect to redux store


_defineProperty(TabbedFormPanel, "propTypes", {
  icons: _propTypes.default.object
});

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    mainPanelContent: state.otp.ui.mainPanelContent
  };
};

var mapDispatchToProps = {
  setMainPanelContent: _ui.setMainPanelContent
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(TabbedFormPanel);

exports.default = _default;
module.exports = exports.default;

//# sourceMappingURL=tabbed-form-panel.js