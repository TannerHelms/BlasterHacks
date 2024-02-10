import { useEffect, useState } from 'react';
import './App.css';
import SignIn from "./componets/signIn/sign_in.jsx";
import Home from "./componets/home/home.jsx";
import NavBar from "./componets/navBar/navBar.jsx";
import { useGeo } from "./hooks/geoFunc.js"

function App() {
  const [signIn, setSignIn] = useState(true)
  const [home, setHome] = useState(false)
  const [navBar, setNavBar] = useState(false)
  const { location, fetchData } = useGeo();

  function handleLogIn() {
    setSignIn(false)
    setHome(true)
    setNavBar(true)
  }

  const handleButtonClick = () => {
    fetchData();
  };

  const html = (
    < div >
      <h2>Your Location:</h2>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
      <p>City: {location.city}</p>
      <p>State: {location.state}</p>
      <button onClick={handleButtonClick}>Get Location</button>
    </div >
  );

  return (
    <>
      <div className="main">
        {signIn ? <SignIn signInFunc={handleLogIn}></SignIn> : []}
        {home ? <Home></Home> : []}
        {navBar ? <NavBar></NavBar> : []}
      </div>
    </>
  )
}

export default App
