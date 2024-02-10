import { useState, useEffect } from "react"
import styles from "./sign_in.module.css"
import Input from "../inputs/input"
import Button from "../button/button"

export default function SignIn({ signInFunc, signUpFunc }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    const handleKeyDown = event => {
        const { key, keyCode } = event;
        if (keyCode === 13) {
            handleSignIn();
        }
    }

    function handleSignIn() {
        signInFunc(email, password)
    }

    function handleEmail(email) {
        setEmail(email)
    }

    function handlePassword(password) {
        setPassword(password)
    }

    return (
        <div className={`${styles.sign_in}`}>
            <h1>Log In</h1>
            <Input text='Email' placeholder='Enter Email' onChangeFunc={handleEmail}></Input>
            <Input text='Password' inputType="password" placeholder='Enter Password' onChangeFunc={handlePassword}></Input>
            <p onClick={signUpFunc}>Dont have an account? Sign up</p>
            <Button text='Log In' onClickFunc={handleSignIn}></Button>
        </div>
    )
}