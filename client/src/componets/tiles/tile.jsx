import styles from "./tile.module.css";

export default function Tile({ name, formattedAddress, longitude, latitude, distance }) {
    const firstCommaIndex = formattedAddress.indexOf(',');


    const firstLine = formattedAddress.slice(0, firstCommaIndex);
    const secondLine = formattedAddress.slice(firstCommaIndex + 1).trim();
    return (
        <div className={`${styles.tile_container}`}>
            <div className={`${styles.tile}`}>
                <h3 className={`${styles.tileHeader}`}> {name} </h3>
                <div className={`${styles.border}`}></div>
                <div className={`${styles.tileAddress}`}> <h5>{firstLine}</h5> <h5>{secondLine}</h5> </div>
                <div> {longitude} : {latitude} </div>
                <div>Distance {distance}</div>
            </div>
        </div>
    );
}