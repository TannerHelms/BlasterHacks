import { retrieveDistance } from "../../requests/retrieveDistance.js"

export async function calculateDistances(places, location) {
    const promises = places.map((place) => {
        return retrieveDistance(location.latitude, location.longitude, place.location.latitude, place.location.longitude)
            .then(resp => {
                place.distanceString = resp.data.routes.foot.distance.text;
                place.distanceInt = resp.data.routes.foot.distance.value;
                return place
            })

    })
    return Promise.all(promises)

};