import { withState, withProps, withHandlers, compose } from "recompose";
import { InputDarkFullWidth } from "components/input-text";
import { geoCode } from "lib/geo";
import { StaticMap, PointMarker } from "components/map";
import { InputContainer, MapPlaceHolder } from "./styled";

const defaultMapParams = {
  zoom: 14
};

let to;

const enhacer = compose(
  withState("address", "setAddress", ""),
  withHandlers({
    onAddressChange: props => event => {
      const { onChange, value } = props;
      const address = event.target.value;

      onChange({
        ...value,
        address
      });
      
      clearTimeout(to);
      to = setTimeout(() => {
        geoCode(address).then(results => {
          onChange({
            address,
            location: results[0] || null
          });
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
