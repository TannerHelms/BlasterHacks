import { useState } from "react"
import styles from "./sign_in.module.css"
import Input from "../inputs/input"
import Button from "../button/button"

export default function SignIn({ signInFunc }) {
    const [username, setUsername] = useState('');
    const [password, setPassowrd] = useState('');

    return (
        <div className={`${styles.sign_in}`}>
            <h1>Log In</h1>
            <Input text='Username' placeholder='Enter Username'></Input>
            <Input text='Password' placeholder='Enter Password'></Input>
            <Button text='Log In' onClickFunc={signInFunc}></Button>
        </div>
    )
}