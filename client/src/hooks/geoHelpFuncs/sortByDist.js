import { retrieveDistance } from "../../requests/retrieveDistance.js"

export const calculateDistances = (places, location) => {
    const distancePromises = places.map((place) => {
        return retrieveDistance(location.latitude, location.longitude, place.location.latitude, place.location.longitude)
            .then((distResponse) => {
                place.distanceString = distResponse.data.routes.foot.distance.text;
                place.distanceInt = distResponse.data.routes.foot.distance.value;
            });
    });

    // Return a promise that resolves when all asynchronous operations are complete
    return Promise.all(distancePromises);
};