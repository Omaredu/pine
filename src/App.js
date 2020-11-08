import React, { Component } from 'react';
import { LoginPanel, LeftPanel, Button } from './components';
import Map from "./components/Map.jsx"

export default class App extends Component {
  render () {
    return (
      <div>
        <div class="rectangulo">
          <Button onClick={() => console.log(":)")}>Iniciar Sesión</Button>
          <Button onClick={() => console.log(":)")}>Registrarse</Button>
          <Map class="map"></Map>
          <LoginPanel />    
          <LeftPanel />
        </div>
      </div>
    );
  }
}
