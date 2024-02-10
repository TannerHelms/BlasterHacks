import styles from "./home.module.css"
import { useGeo } from "../../hooks/geoFunc.js"


export default function Home() {
    const { location, fetchData } = useGeo();
    const handleButtonClick = () => {
        fetchData();
    };

    return (
        <div className={`${styles.home}`}>
            <p>Home Page</p>
            < div >
                <h2>Your Location:</h2>
                <p>Latitude: {location.latitude}</p>
                <p>Longitude: {location.longitude}</p>
                <p>City: {location.city}</p>
                <p>State: {location.state}</p>
                <button onClick={handleButtonClick}>Get Location</button>
            </div >
        </div>
    )
}