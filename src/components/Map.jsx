import React, { Component } from 'react'

import { HEREMap, RouteLine, Marker } from 'here-maps-react'

export default class Map extends Component {
  state = {
    shape: [
      "25.646804, -100.190796",
      "25.655411, -100.201327",
    ]
  }

  _renderLocations () {
    if (this.props.markers) {
      return (
        this.props.markers.map(location => (
          <Marker 
            lat={location.Latitude || location.latitude}
            lng={location.Longitude || location.longitude}
          />
        ))
      )
    }
  }

  render () {
    return (
      <HEREMap 
        hidpi={true}
        animateZoom
        appId="LlyS3WDheEmAhXd7FFZR"
        apikey="MlTmlELGjE4wdzZg97MUVJmp3cUi3rYErHDk1ol4aqg"
        center={{ lat: 25.647703, lng: -100.191461 }}
        zoom={12}
        interactive={true}
      >
        {this._renderLocations()}
      </HEREMap>
    )
  }
}