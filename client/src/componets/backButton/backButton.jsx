import React from 'react';
import classes from './backButton.module.css';

function BackButton({ onClickFunc }) {
    return (
	    <button className={classes.back} onClick={onClickFunc}>Back</button>
    )
}

export default BackButton