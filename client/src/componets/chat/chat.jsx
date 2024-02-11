import styles from "./chat.module.css"
import Inputs from "../inputs/input"
import Input from "../inputs/input"
import { useState, useEffect, useMemo, createRef } from "react"
import { io } from "socket.io-client"
import Message from "../message/message"
import Button from "../button/button"

export default function Chat({ userEmail }) {
    const [message, setMessage] = useState()
    const [messages, setMessages] = useState([])
    const [socket, setSocket] = useState()
    const divRef = createRef();

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.keyCode === 13) {
                setMessage()
                sendMessage();
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [message])

    useEffect(() => {
        const s = io();
        setSocket(s);
        s.emit('username', userEmail.split('@')[0])
        return () => {
            s.disconnect();
        }
    }, []);

    useEffect(() => {
        if (!socket) return;
        socket.on('msg', (msg) => {
            console.log(msg);
        })

        socket.on("message", (message) => {
            setMessages((currentMessages) => currentMessages.concat(message));
        });
    }, [socket]);

    useEffect(() => {
        if (!divRef.current) return;
        divRef.current.scrollTop = divRef.current.scrollHeight;
    }, [divRef]);

    function handleMessage(text) {
        setMessage(text)
    }

    function sendMessage() {
        socket.emit('msg', {
            "username": userEmail,
            "message": message,
        })
    }

    return (
        <div className={`${styles.chat}`}>

            <div className={`${styles.messageContainer}`} ref={divRef}>
                {messages &&
                    messages.map((message, idx) => {
                        return (
                            <Message key={idx} msg={message} currentUser={userEmail}></Message>
                        );
                    })}
            </div>
            <Input onChangeFunc={handleMessage}></Input>
            <br />
            <Button text='Send Message' onClickFunc={sendMessage}></Button>
        </div >
    )
}