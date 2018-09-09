import { client as algoliaClient } from 'lib/algolia';
import { resolveAddress, getCurrentPosition } from 'lib/geo';

const foodsIndex = algoliaClient.initIndex('ryc_foods');

export const getFoodsNearAddress = async address => {
    const resGeo = await resolveAddress(address);
    const geoCoded = await resGeo.json();
    const firstGeoResult = geoCoded[0];
    const error = firstGeoResult ? null : 'No reconocemos esa dirección';

    console.log('geo address', address);
    console.log('geo resolved', firstGeoResult && `${firstGeoResult.lat}, ${firstGeoResult.lon}`);
    console.log('geo error', error);
    
    const foods = firstGeoResult ? await getFoodsNearCoords({
      lat:firstGeoResult.lat,
      lng:firstGeoResult.lon
    }) : [];

    return {
      foods,
      error
    }
}

export const getFoodsNearCoords = async  (coords) => {
  const algoliaResults = await foodsIndex.search({
    query: '',
    aroundLatLng: `${coords.lat}, ${coords.lng}`,
    aroundRadius: 2000,
    getRankingInfo: true,
    // "facetFilters": "delivery_dates.date:2018-09-02",
  });

  return algoliaResults ? algoliaResults.hits : [];
}

export const getFoodsNearHere = async address => {
  const currentCoods = await getCurrentLocation();
  console.log('currentCoods', currentCoods);
  const foods = await getFoodsNearCoords(currentCoods);

  return {
    foods
  }
};

export const getCurrentLocation = async () => {
  const response  = await getCurrentPosition();
  return {
    lat:response.coords.latitude,
    lng: response.coords.longitude
  }
}