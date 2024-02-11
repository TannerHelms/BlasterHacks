import styles from "./shelters.module.css";
import { useGeo } from "../../hooks/geoFunc.js";
import { useSearch } from "../../hooks/textSearchFunc.js";
import Tile from "../tiles/tile";
import { useState } from "react";
export default function Shelters() {
    const [search, setSearch] = useState()

    async function searchButtonClick() {
        var res = await useSearch("Homeless Shelters")
        setSearch(res)
    };

    return (
        <div className={`${styles.shelters}`}>
            <div className={`${styles.list}`}>
                <h2> HOMELESS SHELTERS</h2>
                <button onClick={searchButtonClick}>Search</button>
                <ul>
                    {
                        !search ? '' : search.map((place, index) => (
                            <Tile key={index} placeIndex={place} />
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
