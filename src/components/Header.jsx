import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import styled from "styled-components";
import {
  COLOR_FONT_LIGHT,
  COLOR_DARK,
  SHADOW,
  COLOR_PRIMARY,
} from "../themes/Theme";
import Cookies from "universal-cookie";
import { logOut as logUserOut } from "../api/BPMApi";

const StlyedNavbar = styled(Navbar)`
  background-color: ${COLOR_DARK};
  box-shadow: 0px 1px ${SHADOW};
  font-size: 1.2rem;
  padding-top: 15px;
  padding-bottom: 15px;
  box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const StyledNavlink = styled(Nav.Link)`
  color: ${COLOR_FONT_LIGHT};

  &:hover {
    color: ${COLOR_PRIMARY}!important;
  }
`;

const StyledNavDropdown = styled(NavDropdown)`
  margin-right: 50px;

  &:hover {
    #basic-nav-dropdown {
      color: ${COLOR_PRIMARY} !important;
    }
  }
`;

const StyledLogo = styled.img`
  display: block;
  height: 80px;
  width: 150px;
`;

function logOut() {
  logUserOut();
  new Cookies().remove("user");
  window.location.reload();
}

function Header() {
  const user = new Cookies().get("user");

  return (
    <StlyedNavbar variant="dark" expand="lg">
      <Navbar.Brand>
        <StyledLogo src="./dreamix-logo-icon.svg" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <StyledNavlink href="/workspace">Workspace</StyledNavlink>
        </Nav>
        <Nav>
          {user ? (
            <StyledNavDropdown title={user} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={logOut}>Log out</NavDropdown.Item>
            </StyledNavDropdown>
          ) : (
            <StyledNavlink href="/login">Login</StyledNavlink>
          )}
        </Nav>
      </Navbar.Collapse>
    </StlyedNavbar>
  );
}

export default Header;
