import React, { Component } from 'react'

import { HEREMap, RouteLine, Marker } from 'here-maps-react'

export default class Map extends Component {
  state = {
    shape: [
      "25.646804, -100.190796",
      "25.655411, -100.201327",
    ]
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
        <Marker lat={25.646804} lng={-100.190796} />
        <Marker lat={25.655411} lng={-100.201327} />
        <RouteLine shape={this.state.shape} strokeColor="#ff9900" lineWidth={3} />
      </HEREMap>
    )
  }
}