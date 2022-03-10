import React from 'react';


var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
mapboxgl.accessToken =
  "pk.eyJ1Ijoic25vdzA0IiwiYSI6ImNsMGw2MXg1ZzB0OXMzYnA3OWg2YXFudjcifQ.LP0Hat6q0c6GUJ2B7hRdbw";
var map = new mapboxgl.Map({
  container: "YOUR_CONTAINER_ELEMENT_ID",
  style: "mapbox://styles/mapbox/streets-v11",
});

function App() {
  return (
    <div>
      
    </div>
  )
}

export default  App
