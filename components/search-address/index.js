import { withState, withProps, withHandlers, compose } from "recompose";
import { InputDarkFullWidth } from "components/input-text";
import { geoCode } from "lib/geo";
import { StaticMap, PointMarker } from "components/map";
import { InputContainer, MapPlaceHolder } from "./styled";

const defaultMapParams = {
  zoom: 16
};

let to;

const enhacer = compose(
  withState("address", "setAddress", ""),
  withHandlers({
    onAddressChange: props => event => {
      const { onChange, value } = props;
      const address = event.target.value;

      clearTimeout(to);
      onChange({
        ...value,
        address
      });

      to = setTimeout(() => {
        geoCode(address).then(results => {
          const first = results[0]
          if (first) {
            onChange({
              address,
              location:{
                latitude: first.geometry.location.lat,
                longitude: first.geometry.location.lng
              }
            })
          }
        });
      }, 800);
    }
  })
);

const View = ({ value, onBlur, onAddressChange, name }) => {
  return (
    <label>
      <InputContainer>
        <InputDarkFullWidth
          placeholder="Ej: Cabildo 500"
          name={name}
          onBlur={onBlur}
          onChange={onAddressChange}
          value={value.address}
          autoComplete="off"
        />
      </InputContainer>
      {value.location ? (
        <StaticMap {...defaultMapParams} {...value.location}>
          <PointMarker {...value.location}>
            <div>Hi There</div>
          </PointMarker>
        </StaticMap>
      ) : (
        <MapPlaceHolder />
      )}
    </label>
  );
};

const Enhaced = enhacer(View);

Enhaced.defaultProps = {
  onChange: () => {}
};

export default Enhaced;
