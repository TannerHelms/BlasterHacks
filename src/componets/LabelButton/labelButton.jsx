import React, { useCallback, useState } from "react"
import styles from "./labelButton.module.css";

export default function LabelButton({ title, placeholder, func, inputV }) {

    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
        func(e.target.value)
    }

    function handleInputV(e) {
        inputV = null;
        setInputValue(e.target.value)
    }

    return (
        <div>
            <p className={`${styles.p}`}>{title}</p>
            {
                inputValue == null ? <input className={`${styles.input}`} type="text" placeholder={placeholder} onChange={handleInput} />
                    : <input className={`${styles.input}`} type="text" placeholder={placeholder} onChange={handleInputV} value={inputV} />
            }

        </div>);
}