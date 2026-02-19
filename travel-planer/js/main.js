import { getImages } from "./api.js";
import { showResults } from "./ui.js";

const searchBtn = document.getElementById("searchBtn");
const input = document.getElementById("searchInput");

searchBtn.addEventListener("click", async () => {
  const city = input.value;

  const photos = await getImages(city);
  showResults(photos);
});
