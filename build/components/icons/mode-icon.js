"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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

var ModeIcon =
/*#__PURE__*/
function (_Component) {
  _inherits(ModeIcon, _Component);

  function ModeIcon() {
    _classCallCheck(this, ModeIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModeIcon).apply(this, arguments));
  }

  _createClass(ModeIcon, [{
    key: "render",
    value: function render() {
      if (!this.props.mode) return null;

      switch (this.props.mode.toLowerCase()) {
        case 'bus':
          return _react.default.createElement(BusIcon, null);

        case 'tram':
        case 'rail':
        case 'subway':
          return _react.default.createElement(TramIcon, null);

        case 'walk':
          return _react.default.createElement(WalkIcon, null);

        case 'bicycle':
        case 'bicycle_rent':
          return _react.default.createElement(BicycleIcon, null);

        case 'ferry':
          return _react.default.createElement(FerryIcon, null);

        case 'gondola':
          return _react.default.createElement(GondolaIcon, null);

        case 'car':
          return _react.default.createElement(CarIcon, null);

        case 'micromobility':
        case 'micromobility_rent':
          return _react.default.createElement(MicromobilityIcon, null);
      }

      return null;
    }
  }]);

  return ModeIcon;
}(_react.Component);

exports.default = ModeIcon;

_defineProperty(ModeIcon, "propTypes", {
  mode: _react.PropTypes.string
});

var BusIcon =
/*#__PURE__*/
function (_Component2) {
  _inherits(BusIcon, _Component2);

  function BusIcon() {
    _classCallCheck(this, BusIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(BusIcon).apply(this, arguments));
  }

  _createClass(BusIcon, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.0",
        viewBox: "0 0 81.59 99.992",
        height: "100%",
        width: "100%"
      }, _react.default.createElement("path", {
        d: "M68.848,68.51"
      }), _react.default.createElement("path", {
        d: "M12.687,68.51"
      }), _react.default.createElement("g", null, _react.default.createElement("path", {
        d: "M77.619,14.775c-1.098-5.528-4.622-7.731-9.931-9.93C62.499,2.668,50.02,0.079,40.794,0 c-9.243,0.079-21.722,2.668-26.948,4.846c-5.271,2.199-8.795,4.402-9.875,9.93L0,45.284v42.091h6.84v6.564 c-0.027,8.071,11.745,8.071,11.75,0v-6.564h21.737h0.054H63v6.564c-0.014,8.071,11.759,8.071,11.75,0v-6.564h6.84V45.284 L77.619,14.775z M23.996,7.715h16.385h17.212c3.286-0.009,3.286,4.949,0,4.965H40.327H23.996 C20.694,12.664,20.694,7.706,23.996,7.715z M12.687,74.191c-3.101-0.015-5.631-2.542-5.627-5.682 c-0.004-3.099,2.526-5.627,5.627-5.627c3.136,0,5.665,2.528,5.683,5.627C18.352,71.649,15.823,74.177,12.687,74.191z M40.381,48.482H10.426c-2.925,0.028-3.54-2.081-3.253-4.192l3.088-22.177c0.425-2.67,1.336-4.443,4.854-4.468h25.213h26.149 c3.498,0.025,4.412,1.797,4.854,4.468l3.09,22.177c0.266,2.112-0.348,4.22-3.256,4.192H40.381z M68.848,74.191 c-3.1-0.015-5.628-2.542-5.628-5.682c0-3.099,2.528-5.627,5.628-5.627c3.137,0,5.667,2.528,5.681,5.627 C74.515,71.649,71.985,74.177,68.848,74.191z"
      }), _react.default.createElement("path", {
        d: "M40.381-0.007c0.135,0,0.277,0.006,0.414,0.007c0.137-0.001,0.278-0.007,0.414-0.007H40.381z"
      })));
    }
  }]);

  return BusIcon;
}(_react.Component);

var TramIcon =
/*#__PURE__*/
function (_Component3) {
  _inherits(TramIcon, _Component3);

  function TramIcon() {
    _classCallCheck(this, TramIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(TramIcon).apply(this, arguments));
  }

  _createClass(TramIcon, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.0",
        viewBox: "0 0 66.461 100",
        height: "100%",
        width: "100%"
      }, _react.default.createElement("path", {
        d: "M28.549,7.023c-1.933-0.007-3.508-1.582-3.512-3.511C25.041,1.555,26.616-0.021,28.549,0  c1.952-0.021,3.526,1.555,3.511,3.512C32.075,5.441,30.5,7.016,28.549,7.023L28.549,7.023z"
      }), _react.default.createElement("path", {
        d: "M37.913,7.023c1.936-0.007,3.512-1.582,3.512-3.511c0-1.957-1.576-3.532-3.512-3.512c-1.95-0.021-3.525,1.555-3.512,3.512  C34.388,5.441,35.963,7.016,37.913,7.023L37.913,7.023z"
      }), _react.default.createElement("path", {
        d: "M51.856,78.064c4.872-0.809,9.73-5.898,9.719-12.109V20.611C61.587,14.218,56.2,8.34,48.903,8.347H33.281H17.606  C10.265,8.34,4.878,14.218,4.885,20.611v45.344c-0.007,6.211,4.852,11.301,9.719,12.109L0,100h8.446l10.432-15.37H33.23h14.351  L58.063,100h8.397L51.856,78.064z M24.986,13.031c0.002-1.136,0.969-2.072,2.085-2.088h6.158h6.159  c1.117,0.016,2.088,0.952,2.088,2.088v3.559c0,1.133-0.916,2.092-2.088,2.088H33.23h-6.158c-1.167,0.004-2.083-0.955-2.085-2.088  V13.031z M17.301,71.45c-3.059-0.023-5.553-2.517-5.546-5.598c-0.007-3.071,2.487-5.562,5.546-5.547  c3.09-0.016,5.584,2.476,5.598,5.547C22.886,68.934,20.391,71.427,17.301,71.45z M18.014,41.986  c-3.508-0.021-6.369-2.421-6.362-6.363v-8.141c0.025-3.396,2.219-6.356,6.362-6.363H33.23h15.215  c4.148,0.007,6.343,2.967,6.363,6.363v8.141c0.011,3.942-2.85,6.343-6.363,6.363H33.23H18.014z M43.46,65.853  c-0.009-3.071,2.482-5.562,5.545-5.547c3.09-0.016,5.584,2.476,5.6,5.547c-0.016,3.081-2.51,5.574-5.6,5.598  C45.942,71.427,43.451,68.934,43.46,65.853z"
      }));
    }
  }]);

  return TramIcon;
}(_react.Component);

var WalkIcon =
/*#__PURE__*/
function (_Component4) {
  _inherits(WalkIcon, _Component4);

  function WalkIcon() {
    _classCallCheck(this, WalkIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(WalkIcon).apply(this, arguments));
  }

  _createClass(WalkIcon, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.0",
        x: "0px",
        y: "0px",
        viewBox: "0 0 55.74 100",
        height: "100%",
        width: "100%"
      }, _react.default.createElement("path", {
        d: "M31.269,13.769c3.862,0,6.884-3.025,6.884-6.885C38.153,3.022,35.131,0,31.269,0c-3.86,0-6.885,3.022-6.885,6.884  C24.384,10.744,27.409,13.769,31.269,13.769z"
      }), _react.default.createElement("path", {
        d: "M1.249,51.724l4.512-0.421L5.863,35.25l8.224-5.204c0,0-1.333,10.545-1.333,16.085c0,4.831-0.172,8.736-0.172,8.736  L2.054,96.918L9.489,100L21.28,61.549l8.195,10.424l9.339,26.337l8.394-3.355l-9.425-27.965L27.446,50.665l2.901-21.399l6.46,13.544  l16.622,5.708l2.311-4.199l-15.234-8.887c0,0-3.691-9.819-6.711-15.962c-1.027-2.091-5.196-2.774-6.894-2.901  c-4.896-0.362-7.428,1.296-11.488,3.432C11.358,22.131,0,30.728,0,30.728L1.249,51.724z"
      }));
    }
  }]);

  return WalkIcon;
}(_react.Component);

var BicycleIcon =
/*#__PURE__*/
function (_Component5) {
  _inherits(BicycleIcon, _Component5);

  function BicycleIcon() {
    _classCallCheck(this, BicycleIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(BicycleIcon).apply(this, arguments));
  }

  _createClass(BicycleIcon, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        viewBox: "0 0 100 61.3",
        height: "100%",
        width: "100%"
      }, _react.default.createElement("path", {
        d: "M0,41.6C0,52.3,8.7,61,19.4,61c9.4,0,17.2-6.7,19-15.5c0.1,0,0.1,0,0.2,0c15.3-0.6,4.6,4.2,33-25.7c0.5,1.5,0.9,2.9,1.4,4.3  c-6.9,3-11.8,9.8-11.8,17.9c0,10.7,8.7,19.4,19.4,19.4c10.7,0,19.4-8.7,19.4-19.4s-8.7-19.4-19.4-19.4c-1.2,0-2.4,0.1-3.6,0.3  C69.5-1.5,71.9,0.1,57.9,0v3.9c10.2,0,8.9-0.6,11.2,7.3H35.3L34,7.5c7.6-1.7,9.7-1.7,8.2-3.7H25.1v3.8l4.5,0.1l1.3,3.6  c-2.1,4.6-3.8,8.5-5.3,11.9c-2-0.7-4-1-6.2-1C8.7,22.2,0,30.9,0,41.6z M74.4,28.4c4.8,15.4,4.4,15.1,6.3,15.3c1.1-0.1,1.9-0.9,1.9-2  c0-1.3,0.5,0.4-4.2-14.5c0.7-0.1,1.4-0.2,2.2-0.2c8.2,0,14.9,6.7,14.9,14.9s-6.7,14.9-14.9,14.9s-14.9-6.7-14.9-14.9  C65.7,35.9,69.3,30.7,74.4,28.4z M37,15.3l33,0.1L46.6,41L37,15.3z M29.4,24.9l3.6-8.1l9.4,24.6l-3.6,0C38.8,34.5,35,28.3,29.4,24.9  z M34.3,41.5l-12.3,0l5.6-12.4C31.6,31.8,34.2,36.3,34.3,41.5z M4.5,41.6c0-8.2,6.7-14.9,14.9-14.9c1.5,0,3,0.2,4.3,0.6  c-6.7,14.9-7,15.4-7,16.2c0.2,2.7,1.6,1.9,17.1,1.9c-1.7,6.3-7.5,11-14.3,11C11.2,56.4,4.5,49.8,4.5,41.6z"
      }));
    }
  }]);

  return BicycleIcon;
}(_react.Component);

var FerryIcon =
/*#__PURE__*/
function (_Component6) {
  _inherits(FerryIcon, _Component6);

  function FerryIcon() {
    _classCallCheck(this, FerryIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(FerryIcon).apply(this, arguments));
  }

  _createClass(FerryIcon, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.0",
        viewBox: "0 0 100 68.932",
        height: "100%",
        width: "100%"
      }, _react.default.createElement("path", {
        d: "M98.634,68.932c-2.155,0-4.226-0.486-6.058-1.335c-1.904-0.882-4.036-1.402-6.263-1.402  c-2.226,0-4.37,0.521-6.25,1.402c-1.855,0.849-3.916,1.335-6.082,1.335c-2.143,0-4.213-0.486-6.081-1.335  c-1.892-0.882-4.023-1.402-6.239-1.402c-2.238,0-4.357,0.521-6.273,1.402c-1.831,0.849-3.914,1.335-6.059,1.335  c-2.155,0-4.238-0.486-6.07-1.335c-1.905-0.882-4.036-1.402-6.262-1.402c-2.227,0-4.371,0.521-6.25,1.402  c-1.843,0.849-3.916,1.335-6.071,1.335c-2.167,0-4.226-0.486-6.095-1.335c-1.879-0.882-4.022-1.402-6.237-1.402  c-2.229,0-4.359,0.521-6.263,1.402c-1.843,0.849-3.915,1.335-6.07,1.335v-9.2c2.156,0,4.228-0.496,6.07-1.333  c1.904-0.881,4.034-1.402,6.263-1.402c2.214,0,4.358,0.521,6.237,1.402c1.869,0.837,3.927,1.333,6.095,1.333  c2.155,0,4.228-0.496,6.071-1.333c1.879-0.881,4.023-1.402,6.25-1.402c2.226,0,4.357,0.521,6.262,1.402  c1.832,0.837,3.915,1.333,6.07,1.333c2.145,0,4.228-0.496,6.059-1.333c1.916-0.881,4.035-1.402,6.273-1.402  c2.214,0,4.348,0.521,6.239,1.402c1.868,0.837,3.938,1.333,6.081,1.333c2.166,0,4.227-0.496,6.082-1.333  c1.88-0.881,4.024-1.402,6.25-1.402c2.227,0,4.358,0.521,6.263,1.402c1.832,0.837,3.902,1.333,6.058,1.333V68.932z"
      }), _react.default.createElement("path", {
        d: "M0.048,29.398L0.013,51.125c2.156,0,4.228-0.483,6.07-1.318c1.904-0.885,4.034-1.405,6.263-1.405  c2.214,0,4.358,0.521,6.237,1.405c1.869,0.835,3.927,1.318,6.095,1.318c2.155,0,4.228-0.483,6.071-1.318  c1.879-0.885,4.023-1.405,6.25-1.405c2.226,0,4.357,0.521,6.262,1.405c1.832,0.835,3.915,1.318,6.07,1.318  c2.145,0,4.228-0.483,6.059-1.318c1.916-0.885,4.035-1.405,6.273-1.405c2.214,0,4.348,0.521,6.239,1.405  c1.868,0.835,3.938,1.318,6.081,1.318c0.612,0,1.197-0.133,1.795-0.193c1.08-0.242,2.18-0.352,3.233-0.774l0.072-0.037  c7.83-3.207,14.596-11.171,18.811-17.103L100,29.398H0.048z"
      }), _react.default.createElement("path", {
        d: "M78.22,4.948C75.814-0.45,69.336,0.01,69.336,0.01H0.013L0,25.803h86.913L78.22,4.948z M33.274,20.211  c0,0.993-0.814,1.817-1.808,1.817h-8.009c-0.994,0-1.796-0.824-1.796-1.817V7.864c0-0.991,0.802-1.802,1.796-1.802h8.009  c0.994,0,1.808,0.812,1.808,1.802V20.211z M49.929,20.211c0,0.993-0.802,1.817-1.785,1.817h-8.071c-0.993,0-1.795-0.824-1.795-1.817  V7.864c0-0.991,0.802-1.802,1.795-1.802h8.071c0.982,0,1.785,0.812,1.785,1.802V20.211z M16.679,20.211  c0,0.993-0.813,1.817-1.796,1.817H6.814c-0.994,0-1.795-0.824-1.795-1.817V7.864c0-0.991,0.801-1.802,1.795-1.802h8.069  c0.982,0,1.796,0.812,1.796,1.802V20.211z M55.842,6.062h14.452l0.12-0.011h0.097c0.153-0.012,3.961-0.159,5.244,2.711l5.518,13.267  H62.465L55.842,6.062z"
      }));
    }
  }]);

  return FerryIcon;
}(_react.Component);

var GondolaIcon =
/*#__PURE__*/
function (_Component7) {
  _inherits(GondolaIcon, _Component7);

  function GondolaIcon() {
    _classCallCheck(this, GondolaIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(GondolaIcon).apply(this, arguments));
  }

  _createClass(GondolaIcon, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.0",
        viewBox: "0 0 100 89.383",
        height: "100%",
        width: "100%"
      }, _react.default.createElement("polygon", {
        points: "100,3.417 100,0 0,38.239 0,41.663 "
      }), _react.default.createElement("path", {
        d: "M43.871,16.965c2.986,0,5.425-2.467,5.425-5.507c0-3.034-2.439-5.476-5.425-5.476c-3.009,0-5.448,2.442-5.448,5.476  C38.424,14.498,40.864,16.965,43.871,16.965z"
      }), _react.default.createElement("path", {
        d: "M77.553,45.469H53.319V25.603l-3.385,1.364v18.502H25.477c-1.915,0-3.477,1.576-3.477,3.516V85.86  c0,1.939,1.562,3.523,3.477,3.523h52.077c1.916,0,3.484-1.584,3.484-3.523V48.984C81.038,47.045,79.469,45.469,77.553,45.469z   M40.583,65.495c0,1.052-0.832,1.916-1.871,1.916H27.249c-1.038,0-1.891-0.864-1.891-1.916V53.94c0-1.051,0.854-1.915,1.891-1.915  h11.462c1.038,0,1.871,0.864,1.871,1.915V65.495z M59.211,65.351c0,1.057-0.848,1.892-1.893,1.892H45.887  c-1.047,0-1.893-0.835-1.893-1.892v-11.58c0-1.049,0.846-1.884,1.893-1.884h11.432c1.045,0,1.893,0.835,1.893,1.884V65.351z   M77.696,65.351c0,1.057-0.825,1.892-1.872,1.892H64.371c-1.038,0-1.893-0.835-1.893-1.892v-11.58c0-1.049,0.854-1.884,1.893-1.884  h11.453c1.047,0,1.872,0.835,1.872,1.884V65.351z"
      }), _react.default.createElement("path", {
        d: "M56.848,12.063c3,0,5.439-2.467,5.439-5.507s-2.439-5.507-5.439-5.507c-2.985,0-5.424,2.467-5.424,5.507  S53.863,12.063,56.848,12.063z"
      }));
    }
  }]);

  return GondolaIcon;
}(_react.Component);

var CarIcon =
/*#__PURE__*/
function (_Component8) {
  _inherits(CarIcon, _Component8);

  function CarIcon() {
    _classCallCheck(this, CarIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(CarIcon).apply(this, arguments));
  }

  _createClass(CarIcon, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        height: "100%",
        width: "100%"
      }, _react.default.createElement("path", {
        d: "M499.991 168h-54.815l-7.854-20.944c-9.192-24.513-25.425-45.351-46.942-60.263S343.651 64 317.472 64H194.528c-26.18 0-51.391 7.882-72.908 22.793-21.518 14.912-37.75 35.75-46.942 60.263L66.824 168H12.009c-8.191 0-13.974 8.024-11.384 15.795l8 24A12 12 0 0 0 20.009 216h28.815l-.052.14C29.222 227.093 16 247.997 16 272v48c0 16.225 6.049 31.029 16 42.309V424c0 13.255 10.745 24 24 24h48c13.255 0 24-10.745 24-24v-40h256v40c0 13.255 10.745 24 24 24h48c13.255 0 24-10.745 24-24v-61.691c9.951-11.281 16-26.085 16-42.309v-48c0-24.003-13.222-44.907-32.772-55.86l-.052-.14h28.815a12 12 0 0 0 11.384-8.205l8-24c2.59-7.771-3.193-15.795-11.384-15.795zm-365.388 1.528C143.918 144.689 168 128 194.528 128h122.944c26.528 0 50.61 16.689 59.925 41.528L391.824 208H120.176l14.427-38.472zM88 328c-17.673 0-32-14.327-32-32 0-17.673 14.327-32 32-32s48 30.327 48 48-30.327 16-48 16zm336 0c-17.673 0-48 1.673-48-16 0-17.673 30.327-48 48-48s32 14.327 32 32c0 17.673-14.327 32-32 32z"
      }));
    }
  }]);

  return CarIcon;
}(_react.Component);
/**
 * Icons made by Freepik (https://www.freepik.com/)
 * from Flaticon (https://www.flaticon.com/)
 * licensed by Creative Commons BY 3.0 (http://creativecommons.org/licenses/by/3.0/)
 */


var MicromobilityIcon =
/*#__PURE__*/
function (_Component9) {
  _inherits(MicromobilityIcon, _Component9);

  function MicromobilityIcon() {
    _classCallCheck(this, MicromobilityIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(MicromobilityIcon).apply(this, arguments));
  }

  _createClass(MicromobilityIcon, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("svg", {
        height: "100%",
        viewBox: "0 0 512 512",
        width: "100%",
        xmlns: "http://www.w3.org/2000/svg"
      }, _react.default.createElement("path", {
        d: "m464.027344 393.210938-47.425782-341.464844c-4.097656-29.5-29.648437-51.746094-59.429687-51.746094h-68.171875v40h68.171875c9.929687 0 18.441406 7.414062 19.808594 17.246094l36.148437 260.25c-52.128906 15.089844-91.835937 59.722656-99.703125 114.503906h-196.867187c-8.253906-23.277344-30.484375-40-56.558594-40-33.085938 0-60 26.914062-60 60s26.914062 60 60 60c26.074219 0 48.304688-16.722656 56.558594-40h235.441406v-20c0-43.472656 27.886719-80.550781 66.710938-94.296875l5.699218 41.042969c-19.234375 10.003906-32.410156 30.113281-32.410156 53.253906 0 33.085938 26.914062 60 60 60s60-26.914062 60-60c0-28.964844-20.632812-53.203125-47.972656-58.789062zm-404.027344 78.789062c-11.027344 0-20-8.972656-20-20s8.972656-20 20-20 20 8.972656 20 20-8.972656 20-20 20zm392 0c-11.027344 0-20-8.972656-20-20s8.972656-20 20-20 20 8.972656 20 20-8.972656 20-20 20zm0 0"
      }));
    }
  }]);

  return MicromobilityIcon;
}(_react.Component);

module.exports = exports.default;

//# sourceMappingURL=mode-icon.js