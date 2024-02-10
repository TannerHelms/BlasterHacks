import { useEffect, useState } from "react";
import "./App.css";
import SignIn from "./componets/signIn/sign_in.jsx";
import Home from "./componets/home/home.jsx";
import NavBar from "./componets/navBar/navbar.jsx";
import { useGeo } from "./hooks/geoFunc.js"
import * as firebase from "firebase/app"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import SignUp from './componets/signUp/sign_up.jsx';
import Notification from "./componets/notification/notification.jsx";




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

  async function submitLogin(username, password) {
    setNotification()
    await signInWithEmailAndPassword(getAuth(), username, password)
      .then((userCredential) => {
        setNotification('Login Success!')
        setSignIn(false)
        setHome(true)
        setNavBar(true)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setNotification(`Failed to login: ${error.message}`)
      });

  }

  function handleSignUpNotification(text) {
    if (text == "Account Created Sucessfully") {
      setNotification("Account Created Sucessfully")
      setSignUp(false)
      setSignIn(true)
    } else {
      setNotification(text)
    }
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
      {notification && <Notification text={notification}></Notification>}
      <div className="main">
        {signIn ? <SignIn signInFunc={submitLogin} signUpFunc={handleSignUp}></SignIn> : []}
        {signUp ? <SignUp signUpFunc={handleSignUp} notificationFunc={handleSignUpNotification}></SignUp> : []}
        {home ? <Home></Home> : []}
        {navBar ? <NavBar></NavBar> : []}
      </div>
    </>
  );
}

export default App;
