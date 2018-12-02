import ReactMapGL, {
  StaticMap as MBStaticMap,
  Marker as MBMarker
} from "react-map-gl";
// dimensions es para que el mapa ocupe todo el espacio
import Dimensions from "react-dimensions";

import { pure } from "recompose";
import LocationIcon from "components/icons/location.svg"
import styled from "styled-components"

export const DefaultMapComp = props => (
  <ReactMapGL
    {...props}
    width={props.containerWidth}
    mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
  />
);
export const StaticMapComp = props => (
  <MBStaticMap
    mapStyle='mapbox://styles/mapbox/streets-v9'
    height={375}
    {...props}
    width={props.containerWidth}
    mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
  />
);

const StyledLocationIcon = styled(LocationIcon)`
  height:30px;
  width:30px;
  *{
    fill:${props=>props.theme.colors.coral};
  }
`

export const StyledMarker = (props) => (
  <MBMarker {...props}>
    <StyledLocationIcon />
  </MBMarker>
);

const Circle = styled.div`
  height:300px;
  width:300px;
  border-radius:50%;
  margin:-50% 0 0 -50%;
  opacity:.3;
  background-color:${props=>props.theme.colors.coral};
`

const LittleCircle = styled(Circle)`
  width: 40px;
  height: 40px;
`

export const ZoneMarker = (props) => (
  <MBMarker {...props}>
    <Circle />
  </MBMarker>
);

export const PointMarker = (props) => (
  <MBMarker {...props}>
    <LittleCircle />
  </MBMarker>
);

// los wrapeo en pure porque Dimensions no es amigo de los function components

export const DefaultMap = Dimensions()(pure(DefaultMapComp));
export const StaticMap = Dimensions()(pure(StaticMapComp));

export default DefaultMap;
