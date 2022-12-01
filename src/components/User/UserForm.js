import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import NavBar2 from "../Navbar2.0";

import { Link } from "react-router-dom";

class UserForm extends React.Component {
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
        window.location.href = "/personal";
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <h3>Create user</h3>
        <Form onSubmit={this.submitUser.bind(this)}>
          <Form.Group className="mb-3" controlId="userName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control type="Password" placeholder="Enter password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="age">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter age" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="weight">
            <Form.Label>Weight</Form.Label>
            <Form.Control type="number" placeholder="Enter weight" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="calories">
            <Form.Label>Calories</Form.Label>
            <Form.Control type="number" placeholder="Enter calories" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Create user
          </Button>
        </Form>
      </>
    );
  }
}

export default UserForm;
