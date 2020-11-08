import React, { Component } from 'react';
import { LoginPanel, LeftPanel, Button } from './components';

export default class App extends Component {
          
  render () {
    return (
      <div>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=default%22%3E"/>
        <script
      src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap&libraries=&v=weekly"
      defer
      ></script>
      <script>
      let map;

      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: -34.397, lng: 150.644 },
          zoom: 8,
        })
      }
      </script>
      <div id="map"></div>

        <div class="rectangulo">
          
          <Button onClick={() => console.log(":)")}>Iniciar Sesión</Button>
          <Button onClick={() => console.log(":)")}>Registrarse</Button>

          <LoginPanel />    
          <LeftPanel />

        </div>
      </div>
    );
  }
}