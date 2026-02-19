const OPENTRIPMAP_KEY = "5ae2e3f221c38a28845f05b6199dbd78d05a055a0f280bc1f19af6a6";
const UNSPLASH_KEY = "o0w61pStB8M-9k_wsYV7StP_7sbBfrT_Vl6LExOUuvg";

// =========================
// 📍 Obtener coordenadas ciudad
// =========================
export async function getCityCoordinates(city) {
  const url = `https://api.opentripmap.com/0.1/en/places/geoname?name=${city}&apikey=${OPENTRIPMAP_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return { lat: data.lat, lon: data.lon };
}

// =========================
// 🏛️ Obtener atracciones
// =========================
export async function getAttractions(lat, lon) {
  const url = `https://api.opentripmap.com/0.1/en/places/radius?radius=5000&lat=${lat}&lon=${lon}&limit=10&apikey=${OPENTRIPMAP_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.features;
}

// =========================
// 🖼️ Fotos ciudad
// =========================
export async function getCityPhotos(city) {
  const url = `https://api.unsplash.com/search/photos?query=${city}&client_id=${UNSPLASH_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.results;
}
