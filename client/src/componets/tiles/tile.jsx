import { useState } from "react";
import classes from "./tile.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import Button from "../button/button";
import Modal from "../modal/modal";

export default function Tile({ place, identity }) {
    const [favorite, setFavorite] = useState(false);
    const [modal, setModal] = useState(false)

    const firstCommaIndex = place.formattedAddress.indexOf(',');
    const address = place.formattedAddress.slice(0, firstCommaIndex) + " " + place.formattedAddress.slice(firstCommaIndex + 1).trim();

    const name = place.name;
    const title = place.displayName.text;
    const distance = place.distanceString;
    function handleButton() {
        setModal(true)
    }

    function handleFavorite() {
        setFavorite((old) => !old)
    }
    return (
        <>
            {modal ? <Modal place={place} closeFunc={() => setModal(false)}></Modal> : ''}
            <div className={classes.tile}>
                {
                    favorite ? <FaStar className={classes.star} onClick={handleFavorite} /> : <FaRegStar className={classes.star} onClick={handleFavorite} />
                }

                <h3>{title}</h3>
                <div className={classes.border}></div>
                <div className={classes.second}>
                    <p>{address}</p>
                    <p>{distance}</p>
                </div>
                <Button text='More Details' onClickFunc={handleButton}></Button>
            </div>
        </>
    );
}