
import React, { Component } from 'react';
<<<<<<< HEAD

import { LoginPanel, LeftPanel, SignupPanel, Button, CreateOverlay } from './components';
=======
import { LoginPanel, LeftPanel, SignupPanel, Button, Addingpanel } from './components';
>>>>>>> 48a62ee05ee6bc30cf478a57c75887d0d5e95500
import Map from "./components/Map";

export default class App extends Component {
  state = {
    loginShown: false,
    signupShown: false,
    isLoggedIn: true,
<<<<<<< HEAD
    addingVehicle: false,
    createVehicleActive: false
=======
    adding: false
>>>>>>> 48a62ee05ee6bc30cf478a57c75887d0d5e95500
  }

  _toggleLoginPanel = () => {
    this.setState({ loginShown: !this.state.loginShown, signupShown: false })
  
  }

  _toggleSignupPanel = () => {
    this.setState({ signupShown: !this.state.signupShown, loginShown: false })
  }
<<<<<<< HEAD

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

      
=======
  render () {
    return (
      <div>
        <div class="rectangulo">

          <div className="buttons-container" style={{ display: !this.state.isLoggedIn ? 'flex' : 'none' }}>
            <Button onClick={this._toggleLoginPanel}>Iniciar Sesión</Button>
            <Button onClick={this._toggleSignupPanel}>Registrarse</Button>
          </div>

          <div className="buttons-container" style={{ display: this.state.isLoggedIn ? 'flex' : 'none' }}>
            <Button onClick={() => {}}>Cerrar Sesión</Button>
          </div>

          <div className="login-panel-container">
            <LoginPanel visible={this.state.loginShown} />   
            <SignupPanel visible={this.state.signupShown} />   
          </div>
          
          <div className="left-panel-container" style={{ display: this.state.isLoggedIn ? 'flex' : 'none' }}>      
            <LeftPanel />
          </div>
          <div className="adding-panel-container">            
            <Addingpanel />
          </div>
  
          <Map/>
        </div>
      </div>
>>>>>>> 48a62ee05ee6bc30cf478a57c75887d0d5e95500
    );
  }
}