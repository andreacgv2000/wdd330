import { getCityCoordinates, getAttractions } from "./api.js";
import { displayResults } from "./ui.js";

document.getElementById("searchBtn").addEventListener("click", searchCity);

async function searchCity() {
  const city = document.getElementById("searchInput").value;

  const coords = await getCityCoordinates(city);
  const places = await getAttractions(coords.lat, coords.lon);

  displayResults(places);
}
