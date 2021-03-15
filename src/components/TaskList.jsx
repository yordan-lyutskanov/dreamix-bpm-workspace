import { Container } from "react-bootstrap";
import styled from "styled-components";
import Task from "./Task";

const TaskContainer = styled(Container)`
  margin-bottom: 60px;
  padding: 0px;
`;

function TaskList(props) {
  return (
    <TaskContainer fluid>
      {props.tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </TaskContainer>
  );
}

export default TaskList;
