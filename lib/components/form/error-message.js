import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { getActiveSearch } from '../../util/state'

class ErrorMessage extends Component {
  static propTypes = {
    itineraries: PropTypes.array
  }

  render () {
    const { error } = this.props
    if (!error) return null

    return (
      <div className='error'>
        <div className='header'>Error!</div>
        <div className='message'>{error.msg}</div>
      </div>
    )
  }
}

// connect to the redux store

const mapStateToProps = (state, ownProps) => {
  const activeSearch = getActiveSearch(state.otp)
  return {
    error: activeSearch && activeSearch.planResponse && activeSearch.planResponse.error
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorMessage)
