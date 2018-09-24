import ReactMapGL, { StaticMap as MBStaticMap } from "react-map-gl";
import Dimensions from "react-dimensions";
import {pure} from "recompose"


export const DefaultMapComp = props => (
  <ReactMapGL
    {...props}
    width={props.containerWidth}
    mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
  />
);
export const StaticMapComp = props => (
  <MBStaticMap
    {...props}
    width={props.containerWidth}
    mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
  />
);

// los wrapeo en pure porque Dimensions no es amigo de los function components

export const DefaultMap = Dimensions()(pure(DefaultMapComp));
export const StaticMap = Dimensions()(pure(StaticMapComp));

export default DefaultMap;
