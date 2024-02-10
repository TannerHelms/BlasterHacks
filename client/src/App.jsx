import { useEffect, useState } from "react";
import "./App.css";
import { io } from "socket.io-client";
import { Quote } from "./requests/quote.js";
import { useGeo } from "./hooks/geoFunc.js";
import { useSearch } from "./hooks/textSearchFunc.js";
import { TextSearch } from "./requests/textSearch";
function App() {
  const { location, fetchData } = useGeo();
  const { search, fetchSearchData } = useSearch(location);

  const searchButtonClick = () => {
    fetchSearchData();
  };

  return (
    <>
      <p>hello, world</p>
      <div>
        <h2> HOMELESS SHELTERS</h2>
        <ul>
          {search.places.map((place, index) => (
            <li key={index}>
              <p>Name: {place.displayName.text}</p>
              <p>Address: {place.formattedAddress}</p>
              <p>Language Code: {place.languageCode}</p>
            </li>
          ))}
        </ul>
        <button onClick={searchButtonClick}> Get Shelters</button>
      </div>
    </>
  );
}

export default App;
