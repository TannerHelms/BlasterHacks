import classes from "./home.module.css";
import { useGeo } from "../../hooks/geoFunc.js";
import { useSearch } from "../../hooks/textSearchFunc.js";
import Tile from "../tiles/tile";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../config/firebase-config.js';
import { getAuth } from "firebase/auth";
import { FaSpinner } from "react-icons/fa";


export default function Home() {

    const [tile, setTiles] = useState([])

    useEffect(() => {

        setTiles([])
        getDocs(collection(db, "favorites"))
            .then((doc) => {
                const places = doc.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));

                places.forEach(place => {
                    if (place.user_id === getAuth().currentUser.uid) {
                        setTiles((currentTiles) => [...currentTiles, place])
                    }
                });
            })
    }, [])

    const handleRemoveItem = (id) => {
        setTiles(currentTiles => currentTiles.filter(tile => tile.id !== id))
    }

    return (
        <div className={classes.home}>
            <div className={classes.list}>
                <h2>FAVORITES</h2>
                {
                    !tile ? <FaSpinner className={classes.spin} size='50px' /> : (
                        <div className={classes.tiles}>
                            {
                                tile.map((place, index) => (
                                    <Tile key={place.id} place={place.place} identity={index + "shelters"} select={true} tileId={place.id} onDelete={(id) => handleRemoveItem(id)} />
                                ))
                            }

                        </div>
                    )
                }

            </div>
        </div>
    );
}
