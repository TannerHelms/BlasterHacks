import { useEffect, useState } from "react";
import "./App.css";
import { io } from "socket.io-client";
<<<<<<< HEAD
import { Quote } from "./requests/quote.js";
import { TextSearch } from "./requests/textSearch";
function App() {
  return (
    <>
      <p>hello, world</p>
      <p>
        <TextSearch />
      </p>
=======
import Button from "./componets/button/button"
import { Quote } from "./requests/quote.js"
import {useGeo} from "./hooks/geoFunc.js"
function App() {
  const { location, fetchData } = useGeo();
  const handleButtonClick = () => {
    fetchData();
  };


  return (
    <>
      <p>hello, world</p>
      <div>
          <h2>Your Location:</h2>
          <p>Latitude: {location.latitude}</p>
          <p>Longitude: {location.longitude}</p>
          <p>City: {location.city}</p>
          <p>State: {location.state}</p>
          <button onClick={handleButtonClick}>Get Location</button>
      </div>
>>>>>>> tanner/dev
    </>
  );
}

export default App;
