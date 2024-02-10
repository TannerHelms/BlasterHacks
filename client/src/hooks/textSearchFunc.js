import { useState } from "react";
import { TextSearch } from "../requests/textSearch";
import { retrieveDistance } from "../requests/retrieveDistance.js"
export function useSearch(location) {
  const [search, setPlaceDetails] = useState({
    places: [],
  });

  const fetchSearchData = () => {
    TextSearch(location).then((resp) => {
      const distancePromises = resp.places.map((place) => {
        return retrieveDistance(location.latitude, location.longitude, place.location.latitude, place.location.longitude)
          .then((distResponse) => {
            console.log(distResponse.data.routes.foot.distance.text);
            place.distance = distResponse.data.routes.foot.distance.text;
          });
      });

      // Wait for all asynchronous operations to complete
      Promise.all(distancePromises).then(() => {
        console.log(resp.places[0].distance);
        setPlaceDetails({
          places: resp.places,
        });
      })
    });
  };

  return { search, fetchSearchData };
}
