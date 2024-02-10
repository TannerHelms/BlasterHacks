import { useEffect, useState } from 'react';
import './App.css';
import SignIn from "./componets/signIn/sign_in.jsx";
import Home from "./componets/home/home.jsx";
import NavBar from "./componets/navBar/navbar.jsx";
import { useGeo } from "./hooks/geoFunc.js"

function App() {
  const [signIn, setSignIn] = useState(true)
  const [home, setHome] = useState(false)
  const [navBar, setNavBar] = useState(false)

  function handleLogIn() {
    setSignIn(false)
    setHome(true)
    setNavBar(true)
  }

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
