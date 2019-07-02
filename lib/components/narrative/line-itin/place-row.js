import React, { Component, PureComponent } from 'react'

import LocationIcon from '../../icons/location-icon'
import ViewStopButton from '../../viewers/view-stop-button'
import { getPlaceName, isTransit } from '../../../util/itinerary'
import { formatTime } from '../../../util/time'

import TransitLegBody from './transit-leg-body'
import AccessLegBody from './access-leg-body'

// TODO: make this a prop
const defaultRouteColor = '#008'

export default class PlaceRow extends Component {
  _createLegLine (leg) {
    switch (leg.mode) {
      case 'WALK': return <div className='leg-line leg-line-walk' />
      case 'BICYCLE':
      case 'BICYCLE_RENT':
        return <div className='leg-line leg-line-bicycle' />
      case 'CAR': return <div className='leg-line leg-line-car' />
      case 'MICROMOBILITY':
      case 'MICROMOBILITY_RENT':
        return <div className='leg-line leg-line-micromobility' />
      default:
        return <div className='leg-line leg-line-transit' style={{
          backgroundColor: leg.routeColor ? '#' + leg.routeColor : defaultRouteColor
        }} />
    }
  }

  /* eslint-disable complexity */
  render () {
    const { customIcons, leg, legIndex, place, time, timeOptions, followsTransit, previousLeg } = this.props
    const stackIcon = (name, color, size) => <i className={`fa fa-${name} fa-stack-1x`} style={{ color, fontSize: size + 'px' }} />

    let icon
    if (!leg) { // This is the itinerary destination
      icon = (
        <span className='fa-stack place-icon-group'>
          {stackIcon('circle', 'white', 26)}
          <LocationIcon type='to' className='fa-stack-1x' style={{ fontSize: 20 }} />
        </span>
      )
    } else if (legIndex === 0) { // The is the origin
      icon = (
        <span className='fa-stack place-icon-group'>
          {stackIcon('circle', 'white', 26)}
          <LocationIcon type='from' className='fa-stack-1x' style={{ fontSize: 20 }} />
        </span>
      )
    } else { // This is an intermediate place
      icon = (
        <span className='fa-stack place-icon-group'>
          {stackIcon('circle', 'white', 22)}
          {stackIcon('circle-o', 'black', 22)}
        </span>
      )
    }

    const interline = leg && leg.interlineWithPreviousLeg
    const changeVehicles = previousLeg && previousLeg.to.stopId === leg.from.stopId && isTransit(previousLeg.mode) && isTransit(leg.mode)
    const special = interline || changeVehicles
    return (
      <div className='place-row' key={this.rowKey++}>
        <div className='time'>
          {time && formatTime(time, timeOptions)}
        </div>
        <div className='line-container'>
          {leg && this._createLegLine(leg) }
          <div>{!special && icon}</div>
        </div>
        <div className='place-details'>
          {/* Dot separating interlined segments, if applicable */}
          {special && <div className='interline-dot'>&bull;</div>}

          {/* The place name */}
          <div className='place-name'>
            {interline
              ? <div className='interline-name'>Stay on Board at <b>{place.name}</b></div>
              : changeVehicles
                ? <div className='interline-name'>Change Vehicles at <b>{place.name}</b></div>
                : <div>{getPlaceName(place)}</div>
            }
          </div>

          {/* Place subheading: Transit stop */}
          {place.stopId && !special && (
            <div className='place-subheader'>
              <span>Stop ID {place.stopId.split(':')[1]}</span>
              <ViewStopButton stopId={place.stopId} />
            </div>
          )}

          {/* Place subheading: rented bike pickup */}
          {leg && leg.rentedBike && (
            <div className='place-subheader'>
              Pick up shared bike
            </div>
          )}

          {/* Place subheading: rented car pickup */}
          {leg && leg.rentedCar && (
            <div className='place-subheader'>
              Pick up {leg.from.networks ? leg.from.networks.join('/') : 'rented car'} {leg.from.name}
            </div>
          )}

          <RentedVehicleLeg leg={leg} />

          {/* Show the leg, if present */}
          {leg && (
            leg.transitLeg
              ? (/* This is a transit leg */
                <TransitLegBody
                  leg={leg}
                  legIndex={legIndex}
                  setActiveLeg={this.props.setActiveLeg}
                  customIcons={customIcons}
                />
              )
              : (/* This is an access (e.g. walk/bike/etc.) leg */
                <AccessLegBody
                  customIcons={customIcons}
                  followsTransit={followsTransit}
                  leg={leg}
                  legIndex={legIndex}
                  routingType={this.props.routingType}
                  setActiveLeg={this.props.setActiveLeg}
                  timeOptions={timeOptions}
                />
              )
          )}
        </div>
      </div>
    )
  }
}

/**
 * A component to display vehicle rental data. The word "Vehicle" has been used
 * because a future refactor is intended to combine car rental, bike rental
 * and micromobility rental all within this component. The future refactor is
 * assuming that the leg.rentedCar and leg.rentedBike response elements from OTP
 * will eventually be merged into the leg.rentedVehicle element.
 */
class RentedVehicleLeg extends PureComponent {
  render () {
    const {leg} = this.props
    if (!leg || !leg.rentedVehicle) return null
    if (leg.mode === 'WALK') {
      return (
        <div className='place-subheader'>
          Walk vehicle along {leg.from.name}
        </div>
      )
    }

    if (leg.rentedVehicleData) {
      return (
        <div className='place-subheader'>
          Pick up {leg.rentedVehicleData.companies.join('/')} vehicle {leg.from.name}
        </div>
      )
    }

    return (
      <div className='place-subheader'>
        Continue riding from {leg.from.name}
      </div>
    )
  }
}