import classes from "./hospital.module.css";
import { useGeo } from "../../hooks/geoFunc.js";
import { useSearch } from "../../hooks/textSearchFunc.js";
import Tile from "../tiles/tile.jsx";
import { useState } from "react";
export default function Hospital() {
    const [search, setSearch] = useState()

    async function searchButtonClick() {
        var res = await useSearch("Hospitals")
        setSearch(res)
    };

    return (
        <div className={classes.hospital}>
            <div className={classes.list}>
                <h2> HOSPITALS SHELTERS</h2>
                <button onClick={searchButtonClick}>Search</button>
                <ul>
                    {
                        !search ? '' : search.map((place, index) => (
                            <Tile key={index} placeIndex={place} identity={index + 'hospitals'}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
