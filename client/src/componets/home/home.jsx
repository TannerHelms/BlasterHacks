import styles from "./home.module.css";
import { useGeo } from "../../hooks/geoFunc.js";
import { useSearch } from "../../hooks/textSearchFunc.js";
import Tile from "../tiles/tile";
import { useState } from "react";
export default function Home() {

    return (
        <div className={`${styles.home}`}>
            <p>Home Page</p>

        </div>
    );
}
