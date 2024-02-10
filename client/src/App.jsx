import { useEffect, useState } from 'react'
import LabelButton from "./componets/LabelButton/labelButton"
import Button from "./componets/Button/button"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {

  const [username, setUsername] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [inputVal, setInputVal] = useState('');

  function handlgeSubmit(e) {

  }

  useEffect(() => {
    if (submitted) [
      alert('Form Submitted')
    ]
    setSubmitted(false)
  }, [submitted])


  return (
    <>
      <LabelButton title='Username' placeholder='Enter Username' func={(uname) => { setInputVal(uname) }}></LabelButton>
      <LabelButton title='Password' placeholder='Enter Password' inputV={inputVal}></LabelButton>
      <LabelButton title='Email' placeholder='Enter Email'></LabelButton>
      <br />
      <Button text="Submit" onClickFunc={() => setSubmitted(true)}></Button>
    </>
  )
}

export default App
