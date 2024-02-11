import { useSearch } from "../../hooks/textSearchFunc.js";
import Tile from "../tiles/tile";
import { useState, useEffect } from "react";
import classes from "./shelters.module.css"
import { FaSpinner } from "react-icons/fa";
export default function Shelters() {
    const [search, setSearch] = useState()

    useEffect(() => {
        useSearch("homeless Shelters").then(resp => setSearch(resp))
    }, [])



    return (
        <>
            {!search && <FaSpinner className={classes.spin} size='50px' />}
            <div className={classes.shelters}>
                <div className={classes.list}>
                    <h2>Shelters</h2>
                    {search && (
                        <div className={classes.tiles}>
                            {
                                search.map((place, index) => (
                                    <Tile key={index} place={place} identity={index + 'shelters'} />
                                ))
                            }

                        </div>
                    )}
                </div >
            </div >
        </>
    );
}
