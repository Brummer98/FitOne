import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/Login/LoginButton";
import LogoutButton from "../components/Login/LogoutButton";
import Profile from "../components/Login/Profile";
import NavBar2 from "../components/Navbar2.0";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

class Login extends React.Component {
  submitUser(event) {
    event.preventDefault();

    axios
      .post("http://localhost:4000/Users", {
        userName: document.getElementById("userName").value,
        password: document.getElementById("password").value,
        age: document.getElementById("age").value,
        weight: document.getElementById("weight").value,
        calories: document.getElementById("calories").value,
      })
      .then((Response) => {
        console.log(Response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
      <style>{"body { background-color: #2A6892; }"}</style>
        {/* <h3>Login to FitOne</h3>
        <Form onSubmit={this.submitUser.bind(this)}>
          <Form.Group className="mb-3" controlId="userName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="Password" placeholder="Enter password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form> */}
        <NavBar2 />
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          redirectUri={window.location.origin}
        >
          <Container>
            <Row className="rowButtonsLog">
              <Col xs={2}></Col>
              <Col xs={3}>
                <LoginButton />
              </Col>
              <Col xs={2}></Col>
              <Col xs={3}>
                <LogoutButton />
              </Col>
              <Col xs={2}></Col>
            </Row>
            {/* <Row>
            <Profile />
            </Row> */}
          </Container>
        </Auth0Provider>
      </>
    );
  }
}

export default Login;
