import React, { Component } from 'react';
import { LoginPanel, LeftPanel, Button } from './components';
import Map from "./components/Map"

export default class App extends Component {
  state = {
    loginShown: false,
  }

  _toggleLoginPanel = () => {
    this.setState({ loginShown: !this.state.loginShown})
  }

  render () {
    return (
      <div>
        <div class="rectangulo">
          <div className="buttons-container">
            <Button onClick={this._toggleLoginPanel}>Iniciar Sesión</Button>
            <Button onClick={() => console.log(":)")}>Registrarse</Button>
          </div>
          <div className="login-panel-container">
            <LoginPanel visible={this.state.loginShown} />    
          </div>

          <Map/>
          
          <LeftPanel />
        </div>
      </div>
    );
  }
}
