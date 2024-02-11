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
                <h2>HOSPITALS</h2>
                {
                    !search ? <button onClick={searchButtonClick}>Search</button> : (
                        <div className={classes.tiles}>
                            {
                                search.map((place, index) => (
                                    <Tile key={index} placeIndex={place} />
                                ))
                            }

                        </div>
                    )
                }
            </div>
        </div>
    );
}
