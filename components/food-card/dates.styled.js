import styled from "styled-components";
import CalendarIcon from "components/icons/calendar.svg";

export const Dates = styled.div`
  display: flex;
  margin-top:5px;
  font-size: 14px;
`;

export const DatesIcon = styled(CalendarIcon)`
  height: 17px;
  margin-right: 5px;
  * {
    fill:black;
  }
`;
