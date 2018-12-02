import { StaticMap, PointMarker } from "components/map";
const location = {
  latitude: -34.571691,
  longitude: -58.4420088
};
export default () => (
  <StaticMap zoom={16} {...location}>
    <PointMarker {...location}>
      <div>Hi There</div>
    </PointMarker>
  </StaticMap>
);
