import { useEffect, useState } from "react"
import styles from "./sign_up.module.css"
import Input from "../inputs/input"
import Button from "../button/button"
import BackButton from "../backButton/backButton"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function SignUp({ notificationFunc, backButtonFunc }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp() {
        notificationFunc()
        createUserWithEmailAndPassword(getAuth(), email, password)
            .then((userCredential) => {
                notificationFunc('Account Created Sucessfully')
                setEmail('')
                setPassword('')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                notificationFunc(`Not able to create account: ${error.message}`)
            });
    }

    function handleEmail(email) {
        setEmail(email)
    }

    function handlePassword(password) {
        setPassword(password)
    }

    return (
        <>
            <BackButton onClickFunc={backButtonFunc}></BackButton>
            <div className={`${styles.sign_in}`}>
                <h1>Sign Up</h1>
                <Input text='Email' placeholder='Enter Email' onChangeFunc={handleEmail}></Input>
                <Input text='Password' inputType="password" placeholder='Enter Password' onChangeFunc={handlePassword}></Input>
                <Button text='Sign Up' onClickFunc={handleSignUp}></Button>
            </div>
        </>
    )
}