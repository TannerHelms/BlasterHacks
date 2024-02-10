import { useEffect, useState } from "react";
import "./App.css";
import SignIn from "./componets/signIn/sign_in.jsx";
import Home from "./componets/home/home.jsx";
import NavBar from "./componets/navBar/navbar.jsx";
import { useGeo } from "./hooks/geoFunc.js"
import * as firebase from "firebase/app"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import SignUp from './componets/signUp/sign_up.jsx';




function App() {
  const [signIn, setSignIn] = useState(true)
  const [signUp, setSignUp] = useState(false)
  const [home, setHome] = useState(false)
  const [navBar, setNavBar] = useState(false)
  const { location, fetchData } = useGeo();
  const [notification, setNotification] = useState('')

  function handleLogIn() {
    setSignIn(false);
    setHome(true);
    setNavBar(true);
  }

  function handleSignUp() {
    setSignIn(false)
    setSignUp(true)
  }

  function handleSignUpBack() {
    setSignIn(true)
    setSignUp(false)
  }

  const handleButtonClick = () => {
    fetchData();
  };

  function submitLogin(username, password) {
    setSignIn(false)
    setHome(true)
    setNavBar(true)
  }


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
        {signIn ? <SignIn signInFunc={submitLogin} signUpFunc={handleSignUp}></SignIn> : []}
        {signUp ? <SignUp signUpFunc={handleSignUp} backButtonFunc={handleSignUpBack}></SignUp> : []}
        {home ? <Home></Home> : []}
        {navBar ? <NavBar></NavBar> : []}
      </div>
    </>
  );
}

export default App;
