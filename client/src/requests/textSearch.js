import axios from "axios";

export async function TextSearch() {
  const url = "https://places.googleapis.com/v1/places:searchText";

  const data = {
    textQuery: "Homeless Shelters in Logan, Utah",
  };

  const headers = {
    "Content-Type": "application/json",
    "X-Goog-FieldMask":
      "places.displayName,places.formattedAddress,places.priceLevel",
    "X-Goog-Api-Key": "AIzaSyCjEOMJ2ztU5Ne3rGD2kSVXBmrasLVcuiY",
  };

  const response = await axios.post(url, data, { headers });

  return response.data;
}
