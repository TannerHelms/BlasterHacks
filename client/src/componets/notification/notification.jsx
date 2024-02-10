import styles from "./notification.module.css"

export default function Notification({ text }) {
    return (
        <div className={`${styles.notification} `}>
            <span>{text}</span>
        </div>
    )
}