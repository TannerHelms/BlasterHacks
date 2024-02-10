import classes from "./navbar.module.css";

export default function NavBar( {NavClicks} ) {
    return (
        <nav className={classes.navbar}>
            <ul className={classes.ul}>
                <li className={classes.li}><a onClick={NavClicks['home']} className={classes.a}>Home</a></li>
                <li className={classes.li}><a onClick={NavClicks['chat']} className={classes.a}>Chat</a></li>
                <li className={classes.li}><a onClick={NavClicks['shelters']} className={classes.a}>Shelters</a></li>
                <li className={classes.li}><a onClick={NavClicks['hospitals']} className={classes.a}>Hospitals</a></li>
                <li className={classes.li}><a onClick={NavClicks['account']} className={classes.a}>Account</a></li>
                <li className={classes.li}><a onClick={NavClicks['sign-out']} className={classes.a}>Sign-Out</a></li>
            </ul>
        </nav>
    )
}
