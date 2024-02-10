import axios from "axios";

export async function TextSearch(location) {
  const url = "https://places.googleapis.com/v1/places:searchText";

  const data = {
    textQuery: `Homeless Shelters in ${location.city}, ${location.state}`,
  };

  const headers = {
    "Content-Type": "application/json",
    "X-Goog-FieldMask":
      "places.displayName,places.formattedAddress,places.location",
    "X-Goog-Api-Key": "AIzaSyCjEOMJ2ztU5Ne3rGD2kSVXBmrasLVcuiY",
  };

  const response = await axios.post(url, data, { headers });

  return response.data;
}
