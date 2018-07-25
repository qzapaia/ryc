const baseURL = 'https://nominatim.openstreetmap.org/search';
const qs = require('query-string');


export const resolveAddress = address_str => {
  return fetch(baseURL + '?' + qs.stringify({
    format: 'json',
    q: address_str,
    country: 'Argentina',
    city: 'Buenos Aires'
  }))  
}

export function getCurrentPosition (options) {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}