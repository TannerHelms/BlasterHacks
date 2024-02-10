import { useEffect, useState } from "react";
import "./App.css";
import { io } from "socket.io-client";
import { Quote } from "./requests/quote.js";
import { TextSearch } from "./requests/textSearch";
function App() {
  return (
    <>
      <p>hello, world</p>
      <p>
        <TextSearch />
      </p>
    </>
  );
}

export default App;
