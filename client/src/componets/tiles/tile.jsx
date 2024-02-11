import { useState } from "react";
import styles from "./tile.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";

export default function Tile({ placeIndex, identity}) {
    const firstCommaIndex = placeIndex.formattedAddress.indexOf(',');

    const [clicked, isClicked] = useState(false);
    const [favoriteClicked, isFavoriteClicked] = useState(false);


    const firstLine = placeIndex.formattedAddress.slice(0, firstCommaIndex);
    const secondLine = placeIndex.formattedAddress.slice(firstCommaIndex + 1).trim();
    return (
        <>
            {
                clicked ?
                    <div id={identity} className={`${styles.tile_container}`}>
                        <div className={`${styles.tile}`}>
                        <h3 className={`${styles.tileHeader}`}>
                            {placeIndex.displayName.text}
                        </h3>
                        <div>
                                {favoriteClicked ? (
                                    <FaStar className={`${styles.star}`} onClick={() => isFavoriteClicked(!favoriteClicked)} />
                                ) : (
                                    <FaRegStar className={`${styles.star}`} onClick={() => isFavoriteClicked(!favoriteClicked)} />
                                )} 
                            </div>
                            <div className={`${styles.border}`}></div>
                            <div className={`${styles.tileAddress}`}> <h5>{firstLine}</h5> <h5>{secondLine}</h5> </div>
                            <div>Distance {placeIndex.distanceString}</div>
                            <div> {placeIndex.nationalPhoneNumber} </div>
                            {placeIndex.websiteUri ? (
                                <div>
                                    <a href={`${placeIndex.websiteUri}`} target="_blank"> {placeIndex.websiteUri} </a>
                                </div>
                            ) : (
                                <div>No Website Listed</div>
                            )}
                            {placeIndex.regularOpeningHours ? (
                                <div>
                                    {placeIndex.regularOpeningHours.openNow ? "Currently Open" : "Currently Closed"}
                                    {placeIndex.regularOpeningHours.weekdayDescriptions.map((weekday, index) => (
                                        <div key={index}>{weekday}</div>
                                    ))}
                                </div>
                            ) : (
                                <div>No Opening Hours Listed</div>
                            )}
                            <button onClick={() => isClicked(false)}> Minimize </button>
                        </div>
                    </div>
                    :
                    <div id={identity} className={`${styles.tile_container}`}>
                        <div className={`${styles.tile}`}>
                            <h3> {placeIndex.name} </h3>
                            <h3 className={`${styles.tileHeader}`}> 
                                {placeIndex.displayName.text}
                            </h3>
                            <div>
                                {favoriteClicked ? (
                                    <FaStar className={`${styles.star}`} onClick={() => isFavoriteClicked(!favoriteClicked)} />
                                ) : (
                                    <FaRegStar className={`${styles.star}`} onClick={() => isFavoriteClicked(!favoriteClicked)} />
                                )} 
                            </div>
                            <div className={`${styles.border}`}></div>
                            <div className={`${styles.tileAddress}`}> <h5>{firstLine}</h5> <h5>{secondLine}</h5> </div>
                            <div>Distance {placeIndex.distanceString}</div>
                            <button onClick={() => isClicked(true)}> More Details </button>
                        </div>
                    </div>
            }
        </>
    );
}