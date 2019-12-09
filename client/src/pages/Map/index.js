import React from "react";
import ReactDOM from "react-dom";
import Map from "./Map";
import places from "./places.json";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Map
    center={{ lat: 38.835220, lng: -104.819801 }}
    zoom={7}
    places={places}
  />,
  rootElement
);
