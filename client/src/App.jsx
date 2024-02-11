import { useEffect, useState } from "react";
import "./App.css";
import SignIn from "./componets/signIn/sign_in.jsx";
import Hospital from "./componets/hospital/hospital.jsx";
import Home from "./componets/home/home.jsx";
import NavBar from "./componets/navBar/navbar.jsx";
import * as firebase from "firebase/app"
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import SignUp from './componets/signUp/sign_up.jsx';
import Notification from "./componets/notification/notification.jsx";
import Chat from "./componets/chat/chat.jsx";
import Shelters from "./componets/shelters/shelters.jsx";
import { io } from "socket.io-client"


function App() {
  const [signIn, setSignIn] = useState(true)
  const [signUp, setSignUp] = useState(false)
  const [home, setHome] = useState(false)
  const [chat, setChat] = useState(false)
  const [shelters, setShelters] = useState(false)
  const [hospitals, setHospitals] = useState(false)
  const [navBar, setNavBar] = useState(false)
  const [notification, setNotification] = useState()
  const [userEmail, setUserEmail] = useState('')
  const [socket, setSocket] = useState()




  // List of state setters for every page within the application
  const setPages = [setSignIn, setSignUp, setHome, setChat, setShelters, setHospitals, setNavBar];

  async function submitLogin(username, password) {
    setNotification()
    await signInWithEmailAndPassword(getAuth(), username, password)
      .then((userCredential) => {
        setUserEmail(userCredential.user.email)
        setNotification('Login Success!')
        navSwitch('home')
      })
      .catch((error) => {
        setNotification(`Failed to login: ${error.message}`)
      });
  }


  useEffect(() => {
    const s = io();
    setSocket(s);
    return () => {
      s.disconnect();
    }
  }, []);

  useEffect(() => {
    if (!socket) return;
    const callback = (data) => {
      var user = userEmail.split('@')[0]
      var message = data.message;
      if (message.includes(user)) return;
      console.log('')
      setNotification(`${data.message} - ${data.timestamp}`);
    }
    socket.on('join', callback)
  }, [socket]);

  function handleSignUpNotification(text) {
    if (text == "Account Created Successfully") {
      setNotification("Account Created Successfully")
      setSignUp(false)
      setSignIn(true)
    } else {
      setNotification(text)
    }
  }
  function navSwitch(page) {
    switch (page) {
      case 'home':
        setPages.forEach((set) => {
          (set === setHome || set === setNavBar)
            ? set(true)
            : set(false)
        });
        break;
      case 'chat':
        setPages.forEach((set) => {
          (set === setChat || set === setNavBar)
            ? set(true)
            : set(false)
        });
        break;
      case 'shelters':
        setPages.forEach((set) => {
          (set === setShelters || set === setNavBar)
            ? set(true)
            : set(false)
        });
        break;
      case 'hospitals':
        setPages.forEach((set) => {
          (set === setHospitals || set === setNavBar)
            ? set(true)
            : set(false)
        });
        break;
      case 'signIn':
        setPages.forEach((set) => {
          (set === setSignIn)
            ? set(true)
            : set(false)
        });
        break;
      case 'signUp':
        setPages.forEach((set) => {
          (set === setSignUp)
            ? set(true)
            : set(false)
        });
        break;
      default:
        break;
    }
  }

  const NavClicks = {
    'home': () => navSwitch('home'),
    'chat': () => navSwitch('chat'),
    'shelters': () => navSwitch('shelters'),
    'hospitals': () => navSwitch('hospitals'),
    'account': () => navSwitch('account'),
    'sign-out': () => navSwitch('signIn'),
  };

  return (
    <>
      {notification && <Notification text={notification}></Notification>}
      <div className="main">
        {signIn ? <SignIn signInFunc={submitLogin} signUpFunc={() => navSwitch('signUp')}></SignIn> : []}
        {signUp ? <SignUp notificationFunc={handleSignUpNotification} backButtonFunc={() => navSwitch('signIn')}></SignUp> : []}
        {home ? <Home></Home> : []}
        {chat ? <Chat userEmail={userEmail}></Chat> : []}
        {shelters ? <Shelters></Shelters> : []}
        {hospitals ? <Hospital></Hospital> : []}
        {navBar ? <NavBar NavClicks={NavClicks}></NavBar> : []}
      </div >
    </>
  );
}

export default App;
