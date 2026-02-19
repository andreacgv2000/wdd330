import { saveFavorite } from "./storage.js";

export function showResults(attractions, photos) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  attractions.forEach((place, index) => {
    const p = place.properties;
    const img = photos[index]?.urls?.small || "https://via.placeholder.com/200";
    const kindsFormatted = (p.kinds || "No category")
  .split(",")
  .map(k => k.replace(/_/g, " "))  // reemplaza guiones bajos por espacios
  .join(", ");                      // o "\n" si quieres salto de línea

    const card = document.createElement("div");
    card.className = "card";

<<<<<<< HEAD
    card.innerHTML = `
  <img class="card-img" src="${img}" alt="${p.name || "Place"}">
  <div class="card-content">
    <h3>${p.name || "Unknown place"}</h3>
    <p>📍 ${p.kinds || "No category"}</p>
=======
  card.innerHTML = `
  <img class="card-img" src="${img}" alt="${p.name || "Place"}">
  <div class="card-content">
    <h3>${p.name || "Unknown place"}</h3>
    <p>📍 ${kindsFormatted}</p>
>>>>>>> 27f4f075f1746dadffb000122e4672d25b94d36b
    <div class="rating">⭐ Rating: ${p.rate || "N/A"}</div>
    <button>Save</button>
  </div>
`;

<<<<<<< HEAD
=======
`;

>>>>>>> 27f4f075f1746dadffb000122e4672d25b94d36b

    card.querySelector("button").addEventListener("click", () => {
      saveFavorite(p);
    });

    container.appendChild(card);
  });
}


