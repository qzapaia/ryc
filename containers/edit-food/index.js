import WithMe from "containers/with-me";
import OnlyCook from "containers/only-cook"
import EditBasics from "./basics"
import EditDates from "./dates"
import Show from "components/show"

const LOGIN_MESSAGE = "Para publicar tus comidas primero debés ingresár"

const EditFood = ({ id, edit }) => (
  <WithMe loginMessage={LOGIN_MESSAGE} askLogin={true}>
    <OnlyCook>
      <Show show={edit=="basics"}>
        <EditBasics id={id} />
      </Show>
      <Show show={edit=="dates"}>
        <EditDates id={id} />
      </Show>
    </OnlyCook>
  </WithMe>
);

EditFood.defaultProps = {
  edit: "basics"
}
export default EditFood