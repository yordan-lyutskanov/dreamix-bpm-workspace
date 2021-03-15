import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import {
  COLOR_FONT_NORMAL,
  COLOR_FONT_DARK,
  COLOR_CARD,
  COLOR_LIGHT,
  COLOR_PRIMARY,
} from "../themes/Theme";

const TaskContainer = styled(Container)`
  padding: 10px;
  background-color: ${COLOR_CARD};
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid ${COLOR_LIGHT};
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

  &:hover {
    box-shadow: 5px 5px 2px rgba(0, 0, 0, 0.5);
    border-left: 5px solid ${COLOR_PRIMARY};
    cursor: pointer;
  }

  &:active {
    box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5);
    color: ${COLOR_FONT_DARK};
  }
`;

const StyledCol = styled(Col)`
  color: ${COLOR_FONT_NORMAL};
`;

const TitleCol = styled(StyledCol)`
  font-weight: bold;
`;

const ID_TO_PROCESS = {
  find_talent: "Find Talent",
};

function checkProcessName(processDefinitionId) {
  let processId = processDefinitionId.split(":")[0];
  console.log(processId);
  return ID_TO_PROCESS[processId];
}

function formatDate(dateString) {
  if (!dateString) {
    return "No due date.";
  }

  const date = Date.parse(dateString);

  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("en-GB", options).format(date);
}

function Task(props) {
  return (
    <TaskContainer fluid>
      <Row>
        <TitleCol>{checkProcessName(props.processDefinitionId)}</TitleCol>
        <StyledCol sm={12} md="auto">
          Created: {formatDate(props.created)}
        </StyledCol>
      </Row>
      <Row>
        <StyledCol>{props.name}</StyledCol>
        <StyledCol sm={12} md="auto">
          Due: {formatDate(props.due)}
        </StyledCol>
      </Row>
    </TaskContainer>
  );
}

export default Task;
