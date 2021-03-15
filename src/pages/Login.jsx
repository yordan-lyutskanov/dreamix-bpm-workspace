import styled from "styled-components";
import LoginCard from "../components/LoginCard";
import { COLOR_FONT_NORMAL, COLOR_PRIMARY } from "../themes/Theme";

const HeadingContainer = styled.div`
  margin: 17px;
  border-bottom: 2px solid ${COLOR_PRIMARY};
  color: ${COLOR_FONT_NORMAL};
`;

const LoginCardContainer = styled.div`
  width: 50vh;
  margin: 10vh auto;
`;

const LoginPage = styled.div`
  min-height: 100%;
`;

function Login() {
  return (
    <LoginPage>
      <HeadingContainer>
        <h1>Login</h1>
      </HeadingContainer>
      <LoginCardContainer>
        <LoginCard />
      </LoginCardContainer>
    </LoginPage>
  );
}

export default Login;
