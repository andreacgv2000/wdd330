import { saveFavorite } from "./storage.js";

export function displayResults(places) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  places.forEach(place => {
    const p = place.properties;

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
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
