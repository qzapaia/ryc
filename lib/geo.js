import Mapbox from "mapbox";
import qs from "query-string";
const baseURL = 'https://nominatim.openstreetmap.org/search';

var MapboxClient = new Mapbox(process.env.MAPBOX_ACCESS_TOKEN);

export const resolveAddress = async ({address, city="Buenos Aires", country="Argentina"}) => {
  const response = await fetch(baseURL + '?' + qs.stringify({
    format: 'json',
    q: `${address}, ${city}, ${country}`
  }))  
  return response.json();
}

export function getCurrentPosition (options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}