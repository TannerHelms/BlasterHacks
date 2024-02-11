import { useSearch } from "../../hooks/textSearchFunc.js";
import Tile from "../tiles/tile";
import { useState, useEffect } from "react";
import classes from "./search.module.css"
import { FaSpinner } from "react-icons/fa";
import Input from "../inputs/input.jsx";
import Button from "../button/button.jsx";
export default function Search() {
    const [search, setSearch] = useState()
    const [val, setVal] = useState()

    function handleSubmit() {
        useSearch(val).then(resp => setSearch(resp))
    }

    useEffect(() => {
        function handleKeyDown(e) {
            if (e.keyCode === 13) {
                handleSubmit();
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [val])

    return (
        <>
            {!search && (
                <div className={classes.searchBox}>
                    <Input placeholder={'Enter Query'} onChangeFunc={(v) => setVal(v)}></Input>
                    <Button text={'Submit'} onClickFunc={handleSubmit}></Button>
                </div>
            )}
            <div className={classes.shelters}>
                <div className={classes.list}>
                    <h2>Search</h2>
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
