import React, { Component } from 'react';
 import { GoogleMap, LoadScript } from '@react-google-maps/api';

  const containerStyle = {
   width: '100vw',
   height: '100vh'
 };

  const center = {
   lat: 25.648265,
   lng: -100.328451
 };

  function MyComponent() {
   return (
     <LoadScript
       googleMapsApiKey="AIzaSyD3ycRHGWUFzJ07Q5FnVuOYMCjpQIWnDzc"
     >
       <GoogleMap
         mapContainerStyle={containerStyle}
         center={center}
         zoom={10}
         options={{fullscreenControl: false}}
       >
         { /* Child components, such as markers, info windows, etc. */ }
         <></>
       </GoogleMap>
     </LoadScript>
   )
 }

  export default React.memo(MyComponent)