import classes from './account.module.css';
import { getAuth, updateEmail, sendEmailVerification } from 'firebase/auth';
import Button from '../button/button';
import { useState } from 'react';

export default function Account() {
    const auth = getAuth().currentUser;
    const user = auth.email.split('@')[0];
    const email = auth.email


    return (
        <div className={classes.account}>
            <h2>ACCOUNT</h2>
            <div className={classes.tile}>
                <div className={classes.second}>
                    <p> Email </p>
                    <p> {auth.email} </p>
                </div>
                <div className={classes.second}>
                    <p> User </p>
                    <p> {user} </p>
                </div>
                <div className={classes.second}>
                    <p> Last Login </p>
                    <p> {auth.metadata.lastSignInTime} </p>
                </div>
                <div className={classes.second}>
                    <p> Account Created </p>
                    <p> {auth.metadata.creationTime} </p>
                </div>
            </div>
        </div>
    );
}
