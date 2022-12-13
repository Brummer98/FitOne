import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/users`).then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  }

  editUser(id, e) {
    axios
      .put(`http://localhost:4000/user/${id}`, {
        userName:
          // 'Bremsel',
          document.getElementById("userNameEdit").value,
        password:
          // 'Passss',
          document.getElementById("passwordEdit").value,
        age:
          // 24,
          document.getElementById("ageEdit").value,
        weight:
          // 85,
          document.getElementById("weightEdit").value,
        calories:
          // 2345,
          document.getElementById("caloriesEdit").value,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);

        const users = this.state.users.filter((item) => item.id !== id);
        this.setState({ users });
        window.location.href = "personal";
      });
  }

  render() {
    const { users } = this.state;
    return (
      <>
        {users.map((item) => (
          <Container>
            <h3>Edit {item.userName}</h3>
            <Form onSubmit={(e) => this.editUser(users._id, e)}>
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
                Update {item.userName}
              </Button>
            </Form>
          </Container>
        ))}
      </>
    );
  }
}

export default UserForm;
