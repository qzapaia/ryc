import { Cook, CookName, CookIcon, Stars } from "./cook.styled";

export default () => (
  <Cook>
    <div>
      <CookIcon />
    </div>
    <div>
      <CookName>Mariana Fernandez</CookName>
      <Stars value={3} edit={false} />
    </div>
  </Cook>
);
