import { useState } from "react";
import { TextSearch } from "../requests/textSearch";
import { calculateDistances } from "./geoHelpFuncs/sortByDist";

export function useSearch(location) {
  const [search, setPlaceDetails] = useState({
    places: [],
  });

  const fetchSearchData = () => {
    TextSearch(location).then((resp) => {
      calculateDistances(resp.places, location)
        .then(() => {
          resp.places.sort((a, b) => a.distanceInt - b.distanceInt)
          setPlaceDetails({
            places: resp.places,
          });
        })
    });
  };

  return { search, fetchSearchData };
}
