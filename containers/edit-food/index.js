import InputText from "../../components/input-text";
import InputSelect from "../../components/input-select";
import OnlyUsers from "containers/only-users";

const LOGIN_MESSAGE = "Para publicar tus comidas primero debés ingresár"

export default ({ id }) => (
  <OnlyUsers loginMessage={LOGIN_MESSAGE}>
    <h1>{id ? "Editar" : "Publicar"} Comida</h1>

    <hr />
    <h3>Nombre</h3>
    <InputText type="text" />

    <hr />
    <h3>Descripción</h3>
    <InputText type="text" />

    <hr />
    <h3>¿Cuando lo cocinás?</h3>
    <div>
      <input type="radio" /> Lo voy a cocinar:
      <div>
        <InputSelect>
          <option value="">hoy</option>
          <option value="">mañana</option>
          <option value="">este miércoles</option>
          <option value="">este jueves</option>
          <option value="">este viernes</option>
          <option value="">el 16 de Julio</option>
          <option value="">el 17 de Julio</option>
        </InputSelect>
      </div>
      <div>
        <h4>Lo reparto a las</h4>
        <InputSelect>
          <option value="">9:00 hs</option>
          <option value="">10:00 hs</option>
          <option value="">11:00 hs</option>
          <option value="">12:00 hs</option>
          <option value="">13:00 hs</option>
          <option value="">14:00 hs</option>
          <option value="">15:00 hs</option>
        </InputSelect>
      </div>
      <div>
        <h4>Tomo pedidos hasta las</h4>
        <InputSelect>
          <option value="">9:00 hs</option>
          <option value="">10:00 hs</option>
          <option value="">11:00 hs</option>
          <option value="">12:00 hs</option>
          <option value="">13:00 hs</option>
        </InputSelect>
      </div>
    </div>
    <hr />

    <div>
      <input type="radio" /> Lo puedo cocinar a pedido
      <input type="radio" /> No lo cocino a pedido
      <div>
        <span>Cuanto tiempo de anticipación necesitás? </span>
        <InputSelect>
          <option value="">1 hora</option>
          <option value="">2 horas</option>
          <option value="">4 horas</option>
          <option value="">1 día</option>
          <option value="">2 días</option>
          <option value="">una semana</option>
          <option value="">dos semanas</option>
          <option value="">tres semanas</option>
        </InputSelect>
      </div>
    </div>
  </OnlyUsers>
);
