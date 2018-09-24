import { withState, withProps, withHandlers, compose } from "recompose";
import { InputDark } from "components/input-text";
import { resolveAddress } from "lib/geo";
import {StaticMap} from "components/map"

const defaultMapParams = {
  height: 400,
  latitude: 37.7577,
  longitude: -122.4376,
  zoom: 15
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
    <StaticMap {...mapParams} />
  </div>
);

export default enhacer(View);
