import { useState } from "react";
import { TextSearch } from "../requests/textSearch";

export function useSearch(location) {
  const [search, setPlaceDetails] = useState({
    places: [],
  });

  const fetchSearchData = () => {
    TextSearch(location).then((resp) => {
      setPlaceDetails({
        places: resp.places,
      });
    });
  };

  return { search, fetchSearchData };
}
