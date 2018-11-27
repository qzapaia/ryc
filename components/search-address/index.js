import { withState, withProps, withHandlers, compose } from "recompose";
import { InputDarkFullWidth } from "components/input-text";
import { geoCode } from "lib/geo";
import { StaticMap, ZoneMarker } from "components/map";
import { InputContainer, IsTheCorrectAddress } from "./styled";

const defaultMapParams = {
  height: 400,
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 14
};

let to;

const enhacer = compose(
  withState("address", "setAddress", ""),
  withState("selectedResultIndex", "setSelectedResultIndex", 0),
  withState("results", "setResults", []),
  withState("mapParams", "setMapParams", defaultMapParams),
  withHandlers({
    showNextResult: props => event => {
      const { setSelectedResultIndex, selectedResultIndex, results } = props;
      console.log(results, selectedResultIndex)
      const indexPlusOne = selectedResultIndex + 1;
      const newIndex = indexPlusOne < results.length ? indexPlusOne : 0;
      setSelectedResultIndex(newIndex);
    },
    onAddressChange: props => event => {
      const { value } = event.target;
      const { setResults, setAddress, setSelectedResultIndex } = props;

      clearTimeout(to);
      setAddress(value);

      to = setTimeout(() => {
        geoCode(value).then(results => {
          if(results){
            setResults(results);
            setSelectedResultIndex(0);
          }
        });
      }, 800);
    }
  })
);

const View = ({
  address,
  onAddressChange,
  showNextResult,
  results,
  selectedResultIndex
}) => {
  const selectedResult = results[selectedResultIndex];
  console.log(selectedResult)
  const mapProps = selectedResult
    ? {
        ...defaultMapParams,
        latitude: parseFloat(selectedResult.geometry.location.lat),
        longitude: parseFloat(selectedResult.geometry.location.lng)
      }
    : defaultMapParams;

  return (
    <div>
      <InputContainer>
        <InputDarkFullWidth
          placeholder="Ej: Cabildo 500"
          onChange={onAddressChange}
          value={address}
        />
      </InputContainer>
      <StaticMap {...mapProps}>
        <ZoneMarker longitude={mapProps.longitude} latitude={mapProps.latitude}>
          <div>Hi There</div>
        </ZoneMarker>
      </StaticMap>
      <div>
        ¿Esta es la zona?
        <IsTheCorrectAddress onClick={showNextResult}>No</IsTheCorrectAddress>
      </div>
    </div>
  );
};

export default enhacer(View);
