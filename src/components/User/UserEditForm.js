import React from "react";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


class UserForm extends React.Component {
    submitUser(event) {
        event.preventDefault();
        
        axios.put('http://localhost:4000/user/637dff32fdffb5feb8e475b8', {
            userName: document.getElementById("userNameEdit").value,
            password: document.getElementById("passwordEdit").value,
            age: document.getElementById("ageEdit").value,
            weight: document.getElementById("weightEdit").value,
            calories: document.getElementById("caloriesEdit").value,
        })
        .then((Response) => {
            console.log(Response);
        })
        .catch((error) => {
            console.log(error);
        })
    }

  render() {
    return (
      <>
      <h3>Edit user</h3>
      <Form onSubmit={this.submitUser.bind(this)}>
        <Form.Group className="mb-3" controlId="userNameEdit">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="passwordEdit">
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password" placeholder="Enter password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="ageEdit">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" placeholder="Enter age" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="weightEdit">
          <Form.Label>Weight</Form.Label>
          <Form.Control type="number" placeholder="Enter weight" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="caloriesEdit">
          <Form.Label>Calories</Form.Label>
          <Form.Control type="number" placeholder="Enter calories" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update data
        </Button>
      </Form>
      </>
    );
  }
}

export default UserForm;
