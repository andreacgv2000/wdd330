import { saveFavorite } from "./storage.js";

export function showResults(attractions, photos) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  attractions.forEach((place, index) => {
    const p = place.properties;
    const img = photos[index]?.urls?.small || "https://via.placeholder.com/200";

    // Formatea los tipos de lugar para que no salgan juntos
    const kindsFormatted = (p.kinds || "No category")
      .split(",")
      .map(k => k.replace(/_/g, " ")) // reemplaza guiones bajos por espacios
      .join(", ");                     // separados por comas

    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img class="card-img" src="${img}" alt="${p.name || "Place"}">
      <div class="card-content">
        <h3>${p.name || "Unknown place"}</h3>
        <p>📍 ${kindsFormatted}</p>
        <div class="rating">⭐ Rating: ${p.rate || "N/A"}</div>
        <button>Save</button>
      </div>
    `;

    // Evento para guardar en favoritos
    card.querySelector("button").addEventListener("click", () => {
      saveFavorite(p);
    });

    container.appendChild(card);
  });
}
