import classes from "./hospital.module.css";
import { useGeo } from "../../hooks/geoFunc.js";
import { useSearch } from "../../hooks/textSearchFunc.js";
import Tile from "../tiles/tile.jsx";
import { useState, CSSProperties, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
export default function Hospital() {
    const [search, setSearch] = useState()

    useEffect(() => {
        useSearch("Hospitals").then(resp => setSearch(resp))
    }, [])


    return (
        <>
            {!search && <FaSpinner className={classes.spin} size='50px' />}
            <div className={classes.hospital}>
                <div className={classes.list}>
                    <h2>HOSPITALS</h2>
                    {search && (
                        <div className={classes.tiles}>
                            {
                                search.map((place, index) => (
                                    <Tile key={index} place={place} identity={index + 'hospitals'} />
                                ))
                            }

                        </div>
                    )}
                </div >
            </div >
        </>
    );
}
