// In distanceFunc.js
import { useState } from 'react';
import { retrieveDistance } from '../requests/retrieveDistance.js';

export function useDistance() {
    const [location, setLocation] = useState({
        response: ''
    });

    const fetchData = () => {
        retrieveDistance().then(resp => {
            setLocation({
                response: resp
            });
        });
    };

    // Add fetchDistance to the hook
    const fetchDistance = () => {
        retrieveDistance().then(resp => {
            setLocation({
                response: resp
            });
        });
        console.log("Fetching distance...");
    };

    // Return both fetchData and fetchDistance
    return { location, fetchData, fetchDistance };
}
