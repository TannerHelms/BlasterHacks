import { useState } from "react";
import { TextSearch } from "../requests/textSearch";
import { calculateDistances } from "./geoHelpFuncs/sortByDist";
import { useGeo } from "./geoFunc";

export async function useSearch(topic) {
  var location = await useGeo()
  var txtSearch = await TextSearch(location, topic)
  var distanceSeach = await calculateDistances(txtSearch.places, location)
  distanceSeach.sort((a, b) => a.distanceInt - b.distanceInt)
  return distanceSeach;
}
