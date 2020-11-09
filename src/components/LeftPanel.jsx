import React, { Component } from 'react'

import Vehicle from './Vehicle'
import Destiny from './Destiny'

import './styles/left_panel.css'

function GuideLine() {
  return (
    <div className="guide-line">
    </div>
  )
}

export default class LeftPanel extends Component {
  state = {
    origin: "",
    locationOne: "",
    locationTwo: "",
    locationThree: "",
    
    originCoords: "",
    locationOneCoords: "",
    locationTwoCoords: "",
    locationThreeCoords: "",
  }

  _searchLocations = async () => {
    const apiKey = "MlTmlELGjE4wdzZg97MUVJmp3cUi3rYErHDk1ol4aqg"

    console.log(this.state)

    try {
      let origin = await fetch(`https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=${apiKey}&query=${this.state.origin}&beginHighlight=%3Cb%3E&endHighlight=%3C%2Fb%3E`)
      let locationOne = await fetch(`https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=${apiKey}&query=${this.state.locationOne}&beginHighlight=%3Cb%3E&endHighlight=%3C%2Fb%3E`)
      let locationTwo = await fetch(`https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=${apiKey}&query=${this.state.locationTwo}&beginHighlight=%3Cb%3E&endHighlight=%3C%2Fb%3E`)
      let locationThree = await fetch(`https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=${apiKey}&query=${this.state.locationThree}&beginHighlight=%3Cb%3E&endHighlight=%3C%2Fb%3E`)
      
      let jsonDataOrigin = await origin.json()
      let jsonDataOne = await locationOne.json()
      let jsonDataTwo = await locationTwo.json()
      let jsonDataThree = await locationThree.json()

      let dataId = {
        origin: jsonDataOrigin.suggestions[0].locationId,
        one: jsonDataOne.suggestions[0].locationId,
        two: jsonDataTwo.suggestions[0].locationId,
        three: jsonDataThree.suggestions[0].locationId,
      }

      let originLat = await fetch(`https://geocoder.ls.hereapi.com/6.2/geocode.json?locationid=${dataId.origin}&gen=9&apiKey=${apiKey}`)
      let locationOneLat = await fetch(`https://geocoder.ls.hereapi.com/6.2/geocode.json?locationid=${dataId.one}&jsonattributes=1&gen=9&apiKey=${apiKey}`)
      let locationTwoLat = await fetch(`https://geocoder.ls.hereapi.com/6.2/geocode.json?locationid=${dataId.two}&jsonattributes=1&gen=9&apiKey=${apiKey}`)
      let locationThreeLat = await fetch(`https://geocoder.ls.hereapi.com/6.2/geocode.json?locationid=${dataId.three}&jsonattributes=1&gen=9&apiKey=${apiKey}`)
      
      let jsonDataOriginLat = await originLat.json()
      let jsonDataOneLat = await locationOneLat.json()
      let jsonDataTwoLat = await locationTwoLat.json()
      let jsonDataThreeLat = await locationThreeLat.json() 

      let lat = {
        origin: jsonDataOriginLat.Response.View[0].Result[0].Location.DisplayPosition,
        one: jsonDataOneLat.response.view[0].result[0].location.displayPosition,
        two: jsonDataTwoLat.response.view[0].result[0].location.displayPosition,
        three: jsonDataThreeLat.response.view[0].result[0].location.displayPosition
      }

      let locations = [ lat.origin, lat.one, lat.two, lat.three ]
      
      let route = await fetch(`https://route.ls.hereapi.com/routing/7.2/calculateroute.json?apiKey=${apiKey}&waypoint0=geo!${lat.origin.Latitude},${lat.origin.Longitude}&waypoint1=geo!${lat.one.latitude},${lat.one.longitude}&waypoint2=geo!${lat.two.latitude},${lat.two.longitude}&waypoint3=geo!${lat.three.latitude},${lat.three.longitude}&mode=fastest;truck;traffic:disabled`)
      let routeCosts = await fetch(`https://matrix.route.ls.hereapi.com/routing/7.2/calculatematrix.json?apiKey=${apiKey}&start0=${lat.origin.Latitude},${lat.origin.Longitude}&destination0=${lat.one.latitude},${lat.one.longitude}&destination1=${lat.two.latitude},${lat.two.longitude}&destination2=${lat.three.latitude},${lat.three.longitude}&mode=fastest;truck;traffic:disabled`)
      let jsonRoute = await route.json()
      let jsonRouteCosts = await routeCosts.json()
      
      console.log(jsonRoute)
      //this.props.setCostFactors()
      
      console.log(jsonRoute.response)
      this.props.setResults(jsonRoute.response.route[0].summary.distance)
      this.props.updateLocations(locations)
  
      console.log(lat)
    } catch (err) { console.log(err) }
  }

  render () {
      return (
          <div className="left-panel">
            <strong className="left-panel-title">Unidades</strong>
            <div className="vehicle-list">
              <div className="left-hide-gradient"/>
              <div className="vehicle-list-margin">&nbsp;</div>
              <Vehicle name="Principal" />
              {/* <Vehicle add onClick={this.props.toggleCreateVehicle}/> */}
              <div className="vehicle-list-margin">&nbsp;</div>
              <div className="right-hide-gradient"/>
            </div>

            <div className="separator" />

            <input type="text" onChange={evt=>this.setState({ origin: evt.target.value })} className="text-input" placeholder="Origen: Nombre de estado o dirección" />
            <div className="section">  
              <strong>Destinos</strong>
                <div className="destiny-list">
                  <Destiny index={1} value={evt=>this.setState({ locationOne: evt.target.value })} />
                  <GuideLine />
                  <Destiny index={2} value={evt=>this.setState({ locationTwo: evt.target.value })} />
                  <GuideLine />
                  <Destiny index={3} value={evt=>this.setState({ locationThree: evt.target.value})} />
                </div>
              </div>

              <input 
                type="submit"
                className="submit-button"
                onClick={this._searchLocations}
                value="Cotizar"
              />
            </div>
        )
    }
}