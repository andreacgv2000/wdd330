// Guarda un lugar en LocalStorage
export function saveFavorite(place) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Evitar duplicados
  if (!favorites.some(fav => fav.name === place.name)) {
    favorites.push({
      name: place.name,
      kinds: place.kinds,
      rate: place.rate,
      location: place.location || "Unknown",
      img: place.img || ""
    });
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(`${place.name} guardado en favoritos ✅`);
  } else {
    alert(`${place.name} ya está en favoritos ⚠️`);
  }
}

// Recupera los favoritos
export function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

// Limpiar favoritos (opcional)
export function clearFavorites() {
  localStorage.removeItem("favorites");
}
