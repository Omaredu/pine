import React, { Component } from 'react'

import Vehicle from './Vehicle'
import Destiny from './Destiny'

import './styles/left_panel.css'
import QuantityInput from './QuantityInput'

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
    locationThreeCoords: ""
  }
  
  _searchLocations = async () => {
    let origin = await fetch(`https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=MlTmlELGjE4wdzZg97MUVJmp3cUi3rYErHDk1ol4aqg&query=${this.state.origin}&beginHighlight=%3Cb%3E&endHighlight=%3C%2Fb%3E`)
    let locationOne = await fetch(`https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=MlTmlELGjE4wdzZg97MUVJmp3cUi3rYErHDk1ol4aqg&query=${this.state.origin}&beginHighlight=%3Cb%3E&endHighlight=%3C%2Fb%3E`)
    let locationTwo = await fetch(`https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=MlTmlELGjE4wdzZg97MUVJmp3cUi3rYErHDk1ol4aqg&query=${this.state.origin}&beginHighlight=%3Cb%3E&endHighlight=%3C%2Fb%3E`)
    let locationThree = await fetch(`https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=MlTmlELGjE4wdzZg97MUVJmp3cUi3rYErHDk1ol4aqg&query=${this.state.origin}&beginHighlight=%3Cb%3E&endHighlight=%3C%2Fb%3E`)
    
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

    let originLat = await fetch(`https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=MlTmlELGjE4wdzZg97MUVJmp3cUi3rYErHDk1ol4aqg&query=${this.state.origin}&beginHighlight=%3Cb%3E&endHighlight=%3C%2Fb%3E`)
    let locationOneLat = await fetch(`https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=MlTmlELGjE4wdzZg97MUVJmp3cUi3rYErHDk1ol4aqg&query=${this.state.origin}&beginHighlight=%3Cb%3E&endHighlight=%3C%2Fb%3E`)
    let locationTwoLat = await fetch(`https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=MlTmlELGjE4wdzZg97MUVJmp3cUi3rYErHDk1ol4aqg&query=${this.state.origin}&beginHighlight=%3Cb%3E&endHighlight=%3C%2Fb%3E`)
    let locationThreeLat = await fetch(`https://autocomplete.geocoder.ls.hereapi.com/6.2/suggest.json?apiKey=MlTmlELGjE4wdzZg97MUVJmp3cUi3rYErHDk1ol4aqg&query=${this.state.origin}&beginHighlight=%3Cb%3E&endHighlight=%3C%2Fb%3E`)
    
    let jsonDataOriginLat = await originLat.json()
    let jsonDataOneLat = await locationOneLat.json()
    let jsonDataTwoLat = await locationTwoLat.json()
    let jsonDataThreeLat = await locationThreeLat.json() 

    let lat = {
      origin: jsonDataOriginLat,
      one: jsonDataOneLat,
      two: jsonDataTwoLat,
      three: jsonDataThreeLat
    }

    console.log(lat)
  }

  render () {
      return (
          <div className="left-panel">
            <strong className="left-panel-title">Unidades</strong>
            <div className="vehicle-list">
              <div className="left-hide-gradient"/>
              <div className="vehicle-list-margin">&nbsp;</div>
              <Vehicle name="Camión Suministros" />
              <Vehicle icon={2} name="Trailer-12X" />
              <Vehicle icon={1} name="Car-15D" />
              <Vehicle icon={2} name="Admin" />
              {/* <Vehicle add onClick={this.props.toggleCreateVehicle}/> */}
              <div className="vehicle-list-margin">&nbsp;</div>
              <div className="right-hide-gradient"/>
            </div>

            <div className="separator" />


            <input type="text" onChange={evt=>this.setState({ origin: evt.target.value })} className="text-input" placeholder="Lugar de origen..." />
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