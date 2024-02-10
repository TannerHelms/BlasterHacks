import styles from "./shelters.module.css";
import { useGeo } from "../../hooks/geoFunc.js";
import { useSearch } from "../../hooks/textSearchFunc.js";
import Tile from "../tiles/tile";
import { useState } from "react";
export default function Shelters() {
    const [clicked, isClicked] = useState(false)
    const { location, fetchData } = useGeo();

    const handleGetLocationClick = () => {
        fetchData();
    };
    const { search, fetchSearchData } = useSearch(location, "Homeless Shelters");

    const searchButtonClick = () => {
        isClicked(true);
        fetchSearchData();
    };

    return (
        <div className={`${styles.shelters}`}>
            <div>
                <button onClick={handleGetLocationClick}>Get Location</button>
            </div>
            <div className={`${styles.list}`}>
                <h2> HOMELESS SHELTERS</h2>
                <ul>
                    {search.places.map((place, index) => (
                        <Tile key={index} placeIndex={place} />
                    ))}
                </ul>
                {clicked ? "" : <button onClick={searchButtonClick}> Get Shelters</button>}
            </div>
        </div>
    );
}
