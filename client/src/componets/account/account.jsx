import classes from './account.module.css';
import { getAuth } from 'firebase/auth';

export default function Account() {
    const user = getAuth().currentUser.email.split('@')[0]
    const email = getAuth().currentUser.email
    return (
        <div className={classes.account}>
            <h2>ACCOUNT</h2>
            <div className={classes.tile}>
                <div className={classes.second}>
                    <p> {user} </p>
                    <p> {email} </p>
                </div>
            </div>   
        </div>
    )
}