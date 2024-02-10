import { useState } from "react"
import styles from "./sign_in.module.css"
import Input from "../inputs/input"
import Button from "../button/button"

export default function SignIn({ signInFunc, signUpFunc }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn() {
        signInFunc(username, password)
    }

    function handleUsername(username) {
        setUsername(username)
    }

    function handlePassword(password) {
        setPassword(password)
    }

    return (
        <div className={`${styles.sign_in}`}>
            <h1>Log In</h1>
            <Input text='Username' placeholder='Enter Username' onChangeFunc={handleUsername}></Input>
            <Input text='Password' placeholder='Enter Password' onChangeFunc={handlePassword}></Input>
            <p onClick={signUpFunc}>Dont have an account? Sign up</p>
            <Button text='Log In' onClickFunc={handleSignIn}></Button>
        </div>
    )
}