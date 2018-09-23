import { Dates, DatesIcon } from "./dates.styled";

export default () => (
  <Dates>
    <div>
      <DatesIcon />
    </div>
    <div>
      <span>Pedidos hasta las 11:00</span>
      <span> – </span>
      <span>Reparto a las 13:00</span>
    </div>
  </Dates>
);
