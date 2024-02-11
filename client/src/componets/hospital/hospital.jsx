import classes from "./hospital.module.css";
import { useGeo } from "../../hooks/geoFunc.js";
import { useSearch } from "../../hooks/textSearchFunc.js";
import Tile from "../tiles/tile.jsx";
import { useState } from "react";
export default function Hospital() {
    const [clicked, isClicked] = useState(false)
    const { location, fetchData } = useGeo();
    const handleGetLocationClick = () => {
        fetchData();
    };
    const { search, fetchSearchData } = useSearch(location, "Hospitals");

    const searchButtonClick = () => {
        isClicked(true);
        fetchSearchData();
    };

    return (
        <div className={classes.hospital}>
            <p>Home Page</p>
            <div>
                <button onClick={handleGetLocationClick}>Get Location</button>
            </div>
            <div className={classes.list}>
                <h2> HOSPITALS NEARBY</h2>
                <ul>
                    {search.places.map((place, index) => (
                        <Tile key={index} placeIndex={place} identity={index + "hospitals"} />
                    ))}
                </ul>
                {clicked ? "" : <button onClick={searchButtonClick}> Get Hosptials</button>}
            </div>
        </div>
    );
}
