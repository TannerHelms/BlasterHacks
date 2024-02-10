import { useState } from "react"
import styles from "./sign_up.module.css"
import Input from "../inputs/input"
import Button from "../button/button"
import Notification from "../notification/notification"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp({ signUpFunc }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [notification, setNotification] = useState()

    function handleSignUp() {
        createUserWithEmailAndPassword(getAuth(), username, password)
            .then((userCredential) => {
                setNotification('Account Created Sucessfully')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setNotification(`Not able to create account: ${error.message}`)
            });
    }

    function handleUsername(username) {
        setUsername(username)
    }

    function handlePassword(password) {
        setPassword(password)
    }

    return (
        <>
            {notification && <Notification text={notification}></Notification>}

            <div className={`${styles.sign_in}`}>
                <h1>Sign Up</h1>
                <Input text='Username' placeholder='Enter Username' onChangeFunc={handleUsername}></Input>
                <Input text='Password' placeholder='Enter Password' onChangeFunc={handlePassword}></Input>
                <Button text='Sign Up' onClickFunc={handleSignUp}></Button>
            </div>
        </>
    )
}