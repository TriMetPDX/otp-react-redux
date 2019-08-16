"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es7.array.includes");

require("core-js/modules/es6.string.includes");

require("core-js/modules/es6.function.name");

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _reactLeaflet = require("react-leaflet");

var _leaflet = require("leaflet");

var _setFromTo = _interopRequireDefault(require("./set-from-to"));

var _map = require("../../actions/map");

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

var VehicleRentalOverlay =
/*#__PURE__*/
function (_MapLayer) {
  _inherits(VehicleRentalOverlay, _MapLayer);

  function VehicleRentalOverlay() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, VehicleRentalOverlay);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(VehicleRentalOverlay)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_renderPopupForStation", function (station) {
      var stationName = "".concat(station.networks.join('/'), " ").concat(station.name || station.id);
      return _react.default.createElement(_reactLeaflet.Popup, null, _react.default.createElement("div", {
        className: "map-overlay-popup"
      }, _react.default.createElement("div", {
        className: "popup-title"
      }, "Floating vehicle ", stationName), _react.default.createElement("div", {
        className: "popup-row"
      }, _react.default.createElement(_setFromTo.default, {
        map: _this.context.map,
        location: {
          lat: station.y,
          lon: station.x,
          name: stationName
        },
        setLocation: _this.props.setLocation
      }))));
    });

    _defineProperty(_assertThisInitialized(_this), "_renderStationAsCircle", function (station, symbolDef) {
      var strokeColor = symbolDef.strokeColor || symbolDef.fillColor;

      if (!station.isFloatingBike) {
        strokeColor = symbolDef.dockStrokeColor || strokeColor;
      }

      return _react.default.createElement(_reactLeaflet.CircleMarker, {
        key: station.id,
        center: [station.y, station.x],
        color: strokeColor,
        fillColor: symbolDef.fillColor,
        fillOpacity: 1,
        radius: symbolDef.pixels - (station.isFloatingBike ? 1 : 0),
        weight: 1
      }, _this._renderPopupForStation(station));
    });

    _defineProperty(_assertThisInitialized(_this), "_renderStationAsHubAndFloatingBike", function (station) {
      var icon;

      if (station.isFloatingBike) {
        icon = (0, _leaflet.divIcon)({
          iconSize: [24, 24],
          iconAnchor: [12, 24],
          popupAnchor: [0, -12],
          html: "<div class=\"bike-rental-hub-icon bike-rental-out-of-hub\"></div>",
          className: ''
        });
      } else {
        var pctFull = station.bikesAvailable / (station.bikesAvailable + station.spacesAvailable);
        var i = Math.round(pctFull * 9);
        icon = (0, _leaflet.divIcon)({
          iconSize: [24, 24],
          iconAnchor: [12, 24],
          popupAnchor: [0, -12],
          html: "<div class=\"bike-rental-hub-icon bike-rental-hub-icon-".concat(i, "\"></div>"),
          className: ''
        });
      }

      return _react.default.createElement(_reactLeaflet.Marker, {
        icon: icon,
        key: station.id,
        position: [station.y, station.x]
      }, _react.default.createElement(_reactLeaflet.Popup, null, _react.default.createElement("div", {
        className: "map-overlay-popup"
      }, _react.default.createElement("div", {
        className: "popup-title"
      }, station.isFloatingBike ? _react.default.createElement("span", null, "Floating bike: ", station.name) : _react.default.createElement("span", null, station.name)), !station.isFloatingBike && _react.default.createElement("div", {
        className: "popup-row"
      }, _react.default.createElement("div", null, "Available bikes: ", station.bikesAvailable), _react.default.createElement("div", null, "Available docks: ", station.spacesAvailable)), _react.default.createElement("div", {
        className: "popup-row"
      }, _react.default.createElement(_setFromTo.default, {
        map: _this.context.map,
        location: {
          lat: station.y,
          lon: station.x,
          name: station.name
        },
        setLocation: _this.props.setLocation
      })))));
    });

    _defineProperty(_assertThisInitialized(_this), "_renderStationAsMarker", function (station, symbolDef) {
      var baseIconClass = _this.props.baseIconClass;
      var classes = "fa fa-map-marker ".concat(baseIconClass); // If this station is exclusive to a single network, apply the the class for that network

      if (station.networks.length === 1) {
        classes += " ".concat(baseIconClass, "-").concat(station.networks[0].toLowerCase());
      }

      var color = symbolDef && symbolDef.fillColor ? symbolDef.fillColor : 'gray';
      var markerIcon = (0, _leaflet.divIcon)({
        className: '',
        iconSize: [11, 16],
        popupAnchor: [0, -6],
        html: "<i class=\"".concat(classes, "\" style=\"color: ").concat(color, "\"/>")
      });
      return _react.default.createElement(_reactLeaflet.Marker, {
        icon: markerIcon,
        key: station.id,
        position: [station.y, station.x]
      }, _this._renderPopupForStation(station));
    });

    _defineProperty(_assertThisInitialized(_this), "_renderStation", function (station) {
      // render the station according to any map symbol configuration
      var mapSymbols = _this.props.mapSymbols; // no config set, just render a default marker

      if (!mapSymbols) return _this._renderStationAsMarker(station); // get zoom to check which symbol to render

      var zoom = _this.context.map.getZoom();

      for (var i = 0; i < mapSymbols.length; i++) {
        var symbolDef = mapSymbols[i];

        if (symbolDef.minZoom <= zoom && symbolDef.maxZoom >= zoom) {
          switch (symbolDef.type) {
            case 'circle':
              return _this._renderStationAsCircle(station, symbolDef);

            case 'hubAndFloatingBike':
              return _this._renderStationAsHubAndFloatingBike(station);

            default:
              return _this._renderStationAsMarker(station, symbolDef);
          }
        }
      } // no matching symbol definition, render default marker


      return _this._renderStationAsMarker(station);
    });

    return _this;
  }

  _createClass(VehicleRentalOverlay, [{
    key: "createLeafletElement",
    value: function createLeafletElement() {}
  }, {
    key: "updateLeafletElement",
    value: function updateLeafletElement() {}
  }, {
    key: "_startRefreshing",
    value: function _startRefreshing() {
      var _this2 = this;

      // ititial station retrieval
      this.props.refreshVehicles(); // set up timer to refresh stations periodically

      this._refreshTimer = setInterval(function () {
        _this2.props.refreshVehicles();
      }, 30000); // defaults to every 30 sec. TODO: make this configurable?*/
    }
  }, {
    key: "_stopRefreshing",
    value: function _stopRefreshing() {
      if (this._refreshTimer) clearInterval(this._refreshTimer);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          companies = _this$props.companies,
          mapSymbols = _this$props.mapSymbols,
          name = _this$props.name,
          visible = _this$props.visible;
      if (visible) this._startRefreshing();
      if (!mapSymbols) console.warn("No map symbols provided for layer ".concat(name), companies);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._stopRefreshing();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!this.props.visible && nextProps.visible) {
        this._startRefreshing();
      } else if (this.props.visible && !nextProps.visible) {
        this._stopRefreshing();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          stations = _this$props2.stations,
          companies = _this$props2.companies;
      var filteredStations = stations;

      if (companies) {
        filteredStations = stations.filter(function (station) {
          return station.networks.filter(function (value) {
            return companies.includes(value);
          }).length > 0;
        });
      }

      if (!filteredStations || filteredStations.length === 0) return _react.default.createElement(_reactLeaflet.FeatureGroup, null);
      return _react.default.createElement(_reactLeaflet.FeatureGroup, null, filteredStations.map(this._renderStation));
    }
  }]);

  return VehicleRentalOverlay;
}(_reactLeaflet.MapLayer); // connect to the redux store


_defineProperty(VehicleRentalOverlay, "propTypes", {
  queryMode: _react.PropTypes.string,
  vehicles: _react.PropTypes.array,
  refreshVehicles: _react.PropTypes.func
});

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    zoom: state.otp.config.map.initZoom
  };
};

var mapDispatchToProps = {
  setLocation: _map.setLocation
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(VehicleRentalOverlay);

exports.default = _default;
module.exports = exports.default;

//# sourceMappingURL=vehicle-rental-overlay.js