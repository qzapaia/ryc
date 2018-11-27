import styled from "styled-components";
import { InputButtonBox } from "components/boxes";

const InputSelect = styled(InputButtonBox)`
  -webkit-appearance: none;
  background-color: ${props => props.theme.colors.grayLight};
`;

InputSelect.defaultProps = {
  as: "select"
};

export default InputSelect;
