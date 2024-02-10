import classes from "./message.module.css"

export default function Message({ msg, currentUser }) {

    return (
        <>
            <div className={classes.message}>
                <div className={classes.first}>
                    <p className={classes.uname}>{msg.username.split('@')[0]} : </p>
                    <p>{msg.message}</p>
                </div>
                <div className={classes.second}>
                    <p>{msg.timestamp}</p>
                </div>

            </div>
        </>
    )
}