import styles from "./home.module.css";
import { useGeo } from "../../hooks/geoFunc.js";
import { useSearch } from "../../hooks/textSearchFunc.js";
import { useDistance } from "../../hooks/distanceFunc.js";

export default function Home() {
    const { distance, fetchDistance } = useDistance();

    const { location, fetchData } = useGeo();
    const handleButtonClick = () => {
        fetchData();
    };
    const handleDistanceClick = () => {
        fetchDistance();
    };
    const { search, fetchSearchData } = useSearch(location);

    const searchButtonClick = () => {
        fetchSearchData();
    };

    return (
        <div className={`${styles.home}`}>
            <p>Home Page</p>
            <div>
                {distance}
                <button onClick={handleDistanceClick}>Get Distance</button>
            </div>
            <div>
                <h2>Your Location:</h2>
                <p>Latitude: {location.latitude}</p>
                <p>Longitude: {location.longitude}</p>
                <p>City: {location.city}</p>
                <p>State: {location.state}</p>
                <button onClick={handleButtonClick}>Get Location</button>
            </div>
            <div>
                <h2> HOMELESS SHELTERS</h2>
                <ul>
                    {search.places.map((place, index) => (
                        <li key={index}>
                            <p>Name: {place.displayName.text}</p>
                            <p>Address: {place.formattedAddress}</p>
                            <p>Language Code: {place.languageCode}</p>
                        </li>
                    ))}
                </ul>
                <button onClick={searchButtonClick}> Get Shelters</button>
            </div>
        </div>
    );
}
