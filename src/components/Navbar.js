import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// Image imports
import logoFitOne from "../img/FitOneLogo.png";

import "../App.css";

function NavBar() {
  return (
    <Navbar className="navBarTop">
      <Container fluid>
        <Col xs={2}>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logoFitOne}
              className="d-inline-block align-top imagelogo"
            />
          </Navbar.Brand>
        </Col>
        <Col xs={10}>
      	  
        </Col>
      </Container>
    </Navbar>
  );
}

export default NavBar;
