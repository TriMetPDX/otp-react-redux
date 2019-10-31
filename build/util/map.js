"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.latlngToString = latlngToString;
exports.coordsToString = coordsToString;
exports.stringToCoords = stringToCoords;
exports.constructLocation = constructLocation;
exports.formatStoredPlaceName = formatStoredPlaceName;
exports.getDetailText = getDetailText;
exports.matchLatLon = matchLatLon;
exports.itineraryToTransitive = itineraryToTransitive;
exports.isBikeshareStation = isBikeshareStation;

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.object.to-string");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.regexp.split");

var _moment = _interopRequireDefault(require("moment"));

var _itinerary = require("./itinerary");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function latlngToString(latlng) {
  return latlng && "".concat(latlng.lat.toFixed(5), ", ").concat((latlng.lng || latlng.lon).toFixed(5));
}

function coordsToString(coords) {
  return coords.length && coords.map(function (c) {
    return (+c).toFixed(5);
  }).join(', ');
}

function stringToCoords(str) {
  return str && str.split(',').map(function (c) {
    return +c;
  }) || [];
}

function constructLocation(latlng) {
  return {
    name: latlngToString(latlng),
    lat: latlng.lat,
    lon: latlng.lng
  };
}

function formatStoredPlaceName(location) {
  var withDetails = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var displayName = location.type === 'home' || location.type === 'work' ? (0, _itinerary.toSentenceCase)(location.type) : location.name;

  if (withDetails) {
    var detailText = getDetailText(location);
    if (detailText) displayName += " (".concat(detailText, ")");
  }

  return displayName;
}

function getDetailText(location) {
  var detailText;

  if (location.type === 'home' || location.type === 'work') {
    detailText = location.name;
  }

  if (location.type === 'stop') {
    detailText = location.id;
  } else if (location.type === 'recent' && location.timestamp) {
    detailText = (0, _moment.default)(location.timestamp).fromNow();
  }

  return detailText;
}

function matchLatLon(location1, location2) {
  if (!location1 || !location2) return location1 === location2;
  return location1.lat === location2.lat && location1.lon === location2.lon;
}

function itineraryToTransitive(itin, includeGeometry) {
  // console.log('itineraryToTransitive', itin);
  var tdata = {
    journeys: [],
    streetEdges: [],
    places: [],
    patterns: [],
    routes: [],
    stops: []
  };
  var routes = {};
  var stops = {};
  var streetEdgeId = 0;
  var patternId = 0;
  var journey = {
    journey_id: 'itin',
    journey_name: 'Iterarary-derived Journey',
    segments: []
  }; // add 'from' and 'to' places to the tdata places array

  tdata.places.push({
    place_id: 'from',
    place_lat: itin.legs[0].from.lat,
    place_lon: itin.legs[0].from.lon
  });
  tdata.places.push({
    place_id: 'to',
    place_lat: itin.legs[itin.legs.length - 1].to.lat,
    place_lon: itin.legs[itin.legs.length - 1].to.lon
  });
  itin.legs.forEach(function (leg) {
    if (leg.mode === 'WALK' || leg.mode === 'BICYCLE' || leg.mode === 'CAR' || leg.mode === 'MICROMOBILITY') {
      var fromPlaceId = leg.from.bikeShareId ? "bicycle_rent_station_".concat(leg.from.bikeShareId) : "itin_street_".concat(streetEdgeId, "_from");
      var toPlaceId = leg.to.bikeShareId ? "bicycle_rent_station_".concat(leg.to.bikeShareId) : "itin_street_".concat(streetEdgeId, "_to");
      var segment = {
        type: leg.mode,
        streetEdges: [streetEdgeId],
        from: {
          type: 'PLACE',
          place_id: fromPlaceId
        },
        to: {
          type: 'PLACE',
          place_id: toPlaceId
        }
      }; // For TNC segments, draw using an arc

      if (leg.mode === 'CAR' && leg.hailedCar) segment.arc = true;
      journey.segments.push(segment);
      tdata.streetEdges.push({
        edge_id: streetEdgeId,
        geometry: leg.legGeometry
      });
      tdata.places.push({
        place_id: fromPlaceId,
        // Do not label the from place in addition to the to place. Otherwise,
        // in some cases (bike rental station) the label for a single place will
        // appear twice on the rendered transitive view.
        // See https://github.com/conveyal/trimet-mod-otp/issues/152
        // place_name: leg.from.name,
        place_lat: leg.from.lat,
        place_lon: leg.from.lon
      });
      tdata.places.push({
        place_id: toPlaceId,
        place_name: leg.to.name,
        place_lat: leg.to.lat,
        place_lon: leg.to.lon
      });
      streetEdgeId++;
    }

    if ((0, _itinerary.isTransit)(leg.mode)) {
      // determine if we have valid inter-stop geometry
      var hasInterStopGeometry = leg.interStopGeometry && leg.interStopGeometry.length === leg.intermediateStops.length + 1; // create leg-specific pattern

      var ptnId = 'ptn_' + patternId;
      var pattern = {
        pattern_id: ptnId,
        pattern_name: 'Pattern ' + patternId,
        route_id: leg.routeId,
        stops: []
      }; // add 'from' stop to stops dictionary and pattern object

      stops[leg.from.stopId] = {
        stop_id: leg.from.stopId,
        stop_name: leg.from.name,
        stop_lat: leg.from.lat,
        stop_lon: leg.from.lon
      };
      pattern.stops.push({
        stop_id: leg.from.stopId
      }); // add intermediate stops to stops dictionary and pattern object

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = leg.intermediateStops.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              i = _step$value[0],
              stop = _step$value[1];

          stops[stop.stopId] = {
            stop_id: stop.stopId,
            stop_name: stop.name,
            stop_lat: stop.lat,
            stop_lon: stop.lon
          };
          pattern.stops.push({
            stop_id: stop.stopId,
            geometry: hasInterStopGeometry && leg.interStopGeometry[i].points
          });
        } // add 'to' stop to stops dictionary and pattern object

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      stops[leg.to.stopId] = {
        stop_id: leg.to.stopId,
        stop_name: leg.to.name,
        stop_lat: leg.to.lat,
        stop_lon: leg.to.lon
      };
      pattern.stops.push({
        stop_id: leg.to.stopId,
        geometry: hasInterStopGeometry && leg.interStopGeometry[leg.interStopGeometry.length - 1].points
      }); // add route to the route dictionary

      routes[leg.routeId] = {
        agency_id: leg.agencyId,
        route_id: leg.routeId,
        route_short_name: leg.routeShortName || '',
        route_long_name: leg.routeLongName || '',
        route_type: leg.routeType,
        route_color: leg.routeColor
      }; // add the pattern to the tdata patterns array

      tdata.patterns.push(pattern); // add the pattern refrerence to the journey object

      journey.segments.push({
        type: 'TRANSIT',
        patterns: [{
          pattern_id: ptnId,
          from_stop_index: 0,
          to_stop_index: leg.intermediateStops.length + 2 - 1
        }]
      });
      patternId++;
    }
  }); // add the routes and stops to the tdata arrays

  for (var k in routes) {
    tdata.routes.push(routes[k]);
  }

  for (var _k in stops) {
    tdata.stops.push(stops[_k]);
  } // add the journey to the tdata journeys array


  tdata.journeys.push(journey); // console.log('derived tdata', tdata);

  return tdata;
}

function isBikeshareStation(place) {
  return place.place_id.lastIndexOf('bicycle_rent_station') !== -1;
}

//# sourceMappingURL=map.js