import { withState, withProps, withHandlers, compose } from "recompose";
import ReactMapGL from "react-map-gl";
import { InputDark } from "components/input-text";
import { resolveAddress } from "lib/geo";

const defaultMapParams = {
  width: 400,
  height: 400,
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 15,
  mapboxApiAccessToken: process.env.MAPBOX_ACCESS_TOKEN
};

let to

const enhacer = compose(
  withState("address", "setAddress", ""),
  withState("mapParams", "setMapParams", defaultMapParams),
  withHandlers({
    onAddressChange: props => event => {
      const {value} = event.target;
      clearTimeout(to)
      props.setAddress(value);

      to = setTimeout(()=>{
        resolveAddress({address: value}).then(response => console.log(response))
      }, 800)
    }
  })
);

const View = ({ address, onAddressChange, mapParams }) => (
  <div>
    <InputDark onChange={onAddressChange} value={address} />
    <ReactMapGL {...mapParams} />
  </div>
);

export default enhacer(View);
