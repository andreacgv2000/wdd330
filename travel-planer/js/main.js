import { getCityCoordinates, getAttractions, getCityPhotos } from "./api.js";
import { showResults } from "./ui.js";

const searchBtn = document.getElementById("searchBtn");
const input = document.getElementById("searchInput");

searchBtn.addEventListener("click", async () => {
  const city = input.value;

  const coords = await getCityCoordinates(city);
  const attractions = await getAttractions(coords.lat, coords.lon);
  const photos = await getCityPhotos(city);

  showResults(attractions, photos);
});
