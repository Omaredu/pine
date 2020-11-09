
import React, { Component } from 'react';

import { LoginPanel, LeftPanel, SignupPanel, Button, CreateOverlay } from './components';
import Map from "./components/Map";

function ResultsPanel(props) {
  return (
    <div className="results">
      <p className="distance">Distancia: {props.distance/1000} km</p>
      <p className="cost">Costo aproximado (combustible): ${props.cost}</p>
    </div>
  )
}

export default class App extends Component {
  state = {
    loginShown: false,
    signupShown: false,
    isLoggedIn: true,
    addingVehicle: false,
    createVehicleActive: false,
    locations: [],
    
    distance: 0,
    cost: 0,
  }

  _toggleLoginPanel = () => {
    this.setState({ loginShown: !this.state.loginShown, signupShown: false })
  }

  _toggleSignupPanel = () => {
    this.setState({ signupShown: !this.state.signupShown, loginShown: false })
  }

  _toggleCreateVehicleActive = () => {
    this.setState({ createVehicleActive: !this.state.createVehicleActive })
  }

  _updateLocations = (locations) => {
    this.setState({ locations: [] })
    this.setState({ locations })
  }

  _setResults = (distance) => {
    this.setState({ distance, cost: ((distance/1000)/2.5) * 19 })
  }

  render () {
    return (
      <div>
        {/* <div className="buttons-container" style={{ display: !this.state.isLoggedIn ? 'flex' : 'none' }}>
          <Button onClick={this._toggleLoginPanel}>Iniciar Sesión</Button>
          <Button onClick={this._toggleSignupPanel}>Registrarse</Button>
        </div>
        <div className="buttons-container" style={{ display: this.state.isLoggedIn ? 'flex' : 'none' }}>
          <Button onClick={() => {}}>Cerrar Sesión</Button>
        </div> */}

        <ResultsPanel distance={this.state.distance} cost={this.state.cost} />

        <div className="login-panel-container">
          <LoginPanel visible={this.state.loginShown} />   
          <SignupPanel visible={this.state.signupShown} />   
        </div>
          
        <div className="left-panel-container" style={{ display: this.state.isLoggedIn ? 'flex' : 'none' }}>      
          <LeftPanel setResults={this._setResults} updateLocations={this._updateLocations} />
        </div>

        <CreateOverlay active={this.state.createVehicleActive} toggleCreateVehicle={() => this._toggleCreateVehicleActive()} />

        <div style={{ height: '100vh', width: '100vw' }}>
          <Map markers={this.state.locations || null} />
        </div>
        
      </div>

      
    );
  }
}