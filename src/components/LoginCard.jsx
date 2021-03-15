import { useState } from "react";
import { Alert, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import styled from "styled-components";
import {
  COLOR_CARD,
  COLOR_FONT_NORMAL,
  COLOR_LIGHT,
  COLOR_PRIMARY,
} from "../themes/Theme";
import BtnPrimary from "./BtnPrimary";
import { callLogIn } from "../api/BPMApi";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";

const LoginContainer = styled(Container)`
  background-color: ${COLOR_CARD};
  padding: 10px;
  border: 0px solid;
  border: 1px solid ${COLOR_LIGHT};
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;

const StatusContainer = styled(Container)`
  text-align: center;
`;

const StyledRow = styled(Row)`
  color: ${COLOR_FONT_NORMAL};
  margin: 10px;
`;

const StyledInput = styled(Form.Control)`
  margin-bottom: 10px;
  
  &:focus {
  border-color: ${COLOR_PRIMARY};
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(255, 0, 0, 0.6);
`;

const StyledAlert = styled(Alert)`
  margin: 10px;
`;

function LoginCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState();
  const history = useHistory();

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePassChange(event) {
    setPassword(event.target.value);
  }

  function loginCallback(success, response, username) {
    if (success && response.status === 200) {
      setAlert(
        <StyledAlert variant="success">
          User logged in succesfully. Redirecting...
        </StyledAlert>
      );
      new Cookies().set("user", username);
      setTimeout(() => {
        history.push("/workspace");
        window.location.reload();
      }, 2000);
    } else {
      setAlert(<StyledAlert variant="danger">Login failed.</StyledAlert>);
      setTimeout(() => setAlert(null), 3000);
    }
  }

  function login() {
    callLogIn(username, password, setLoading, loginCallback);
  }

  return (
    <>
      <LoginContainer fluid>
        <StyledRow>
          <Col>
            <StyledInput
              size="lg"
              type="text"
              placeholder="Username"
              onChange={handleUsernameChange}
            />
            <StyledInput
              size="lg"
              type="password"
              placeholder="Password"
              onChange={handlePassChange}
            />
            <BtnPrimary variant="dark" size="lg" block onClick={login}>
              Login
            </BtnPrimary>
          </Col>
        </StyledRow>
      </LoginContainer>
      <StatusContainer>
        {alert}
        {loading && <Spinner animation="border" />}
      </StatusContainer>
    </>
  );
}

export default LoginCard;
