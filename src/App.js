
import React, { Component } from 'react';

import { LoginPanel, LeftPanel, SignupPanel, Button, CreateOverlay } from './components';
import Map from "./components/Map";

export default class App extends Component {
  state = {
    loginShown: false,
    signupShown: false,
    isLoggedIn: true,
    addingVehicle: false,
    createVehicleActive: false
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

        <div className="login-panel-container">
          <LoginPanel visible={this.state.loginShown} />   
          <SignupPanel visible={this.state.signupShown} />   
        </div>
          
        <div className="left-panel-container" style={{ display: this.state.isLoggedIn ? 'flex' : 'none' }}>      
          <LeftPanel toggleCreateVehicle={() => this._toggleCreateVehicleActive()} />
        </div>

        <CreateOverlay active={this.state.createVehicleActive} toggleCreateVehicle={() => this._toggleCreateVehicleActive()} />

        <div style={{ height: '100vh', width: '100vw' }}>
          <Map />
        </div>
        
      </div>

      
    );
  }
}