import qs from "query-string";
const baseURL = "https://nominatim.openstreetmap.org/search";
// import Mapbox from "mapbox";
// var MapboxClient = new Mapbox(process.env.MAPBOX_ACCESS_TOKEN);

export const resolveAddress = async ({
  address,
  city = "Buenos Aires",
  country = "Argentina"
}) => {
  const response = await fetch(
    baseURL +
      "?" +
      qs.stringify({
        format: "json",
        q: `${address}, ${city}, ${country}`
      })
  );
  return response.json();
};
//TODO normalizar los resultados de estos dos metodos o unificarlos
export const geoCode = async address => {
  const response = await fetch(`/geocode?address=${address}`);
  const data = await response.json();
  return data
};

export function getCurrentPosition(options) {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}
