import { useState } from "react"
import styles from "./inputs.module.css"

export default function Input({ text, placeholder, onChangeFunc }) {
    const [inputV, setinputV] = useState('')

    function handleChange(e) {
        setinputV(e.target.value)
        onChangeFunc(e.target.value)
    }

    return (
        <div className={`${styles.inputV}`}>
            <label htmlFor="">{text}</label>
            <input type="text" placeholder={placeholder} onChange={handleChange} value={inputV} />
        </div>
    )
}