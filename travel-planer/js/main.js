import { getCityCoordinates, getAttractions, getCityPhotos } from "./api.js";
import { showResults } from "./ui.js";

const searchBtn = document.getElementById("searchBtn");
const input = document.getElementById("searchInput");

searchBtn.addEventListener("click", async () => {
  const city = input.value;

  // 1. coordenadas
  const coords = await getCityCoordinates(city);

  // 2. atracciones
  const attractions = await getAttractions(coords.lat, coords.lon);

  // 3. fotos
  const photos = await getCityPhotos(city);

  showResults(attractions, photos);
});
