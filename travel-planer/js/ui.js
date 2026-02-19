import { saveFavorite } from "./storage.js";

const container = document.getElementById("results");

export function showResults(attractions, photos) {
  container.innerHTML = "";

  attractions.forEach((place, index) => {
    const p = place.properties;

    const img = photos[index]?.urls?.small || "https://via.placeholder.com/200";

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${img}">
      <h3>${p.name || "Unknown place"}</h3>
      <p>📍 ${p.kinds}</p>
      <p>⭐ Rating: ${p.rate || "N/A"}</p>
      <button>Save</button>
    `;

    card.querySelector("button").addEventListener("click", () => {
      saveFavorite(p);
    });

    container.appendChild(card);
  });
}

