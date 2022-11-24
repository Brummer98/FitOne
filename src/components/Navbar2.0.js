import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// Image imports
import logoFitOne from "../img/FitOneLogo.png";
// CSS imports
import "../App.css";
// Component imports
import LoginButton from "./Login/LoginButton";

function NavBar2() {
  // const { user, isAuthenticated } = useAuth0();

  return (
    <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="/home">
        <img
          alt=""
          src={logoFitOne}
          className="d-inline-block align-top imagelogo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/personal">Personal Page</Nav.Link>
          <Nav.Link href="/login">Login/Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavBar2;
