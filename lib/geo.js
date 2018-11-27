import Mapbox from "mapbox";
import qs from "query-string";
import gMapsClient from "@google/maps";
const baseURL = "https://nominatim.openstreetmap.org/search";
var MapboxClient = new Mapbox(process.env.MAPBOX_ACCESS_TOKEN);

const googleApiKey = 'AIzaSyDv4sjY05F3Zj4BAojAS3e0tJwwN5WU4BM'

const googleMapsClient = require("@google/maps").createClient({
  key: googleApiKey,
  Promise: Promise
});


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
// normalizar los resultados de estos dos metodos o unificarlos
export const geoCode = async address => {
  const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleApiKey}`)
  const data = await response.json()
  return data.results || null;
}

export function getCurrentPosition(options) {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}
