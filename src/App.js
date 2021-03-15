import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Workspace from "./pages/Workspace";
import Login from "./pages/Login";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    height: 100%;
  }

  #root {
    height: inherit;
  }
`;

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: strech;
  height: 100%;
`;

const PagesConatiner = styled.div`
  flex: 1;
`;

function App() {
  return (
    <StyledApp className="App">
      <GlobalStyle />
      <Header />
      <PagesConatiner>
        <Router>
          <Switch>
            <Route path="/workspace">
              <Workspace />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Router>
      </PagesConatiner>
    </StyledApp>
  );
}

export default App;
