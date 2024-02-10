import styles from "./tile.module.css";

export default function Tile({ placeIndex }) {
    const firstCommaIndex = placeIndex.formattedAddress.indexOf(',');


    const firstLine = placeIndex.formattedAddress.slice(0, firstCommaIndex);
    const secondLine = placeIndex.formattedAddress.slice(firstCommaIndex + 1).trim();
    return (
        <div className={`${styles.tile_container}`}>
            <div className={`${styles.tile}`}>
                <h3 className={`${styles.tileHeader}`}> {placeIndex.displayName.text} </h3>
                <div className={`${styles.border}`}></div>
                <div className={`${styles.tileAddress}`}> <h5>{firstLine}</h5> <h5>{secondLine}</h5> </div>
                <div> {placeIndex.location.longitude} : {placeIndex.location.latitude} </div>
                <div>Distance {placeIndex.distance}</div>
            </div>
        </div>
    );
}