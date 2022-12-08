// React imports
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { BrowserRouter as Router, Link } from "react-router-dom";

// Bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import { get } from "mongoose";
import { data } from "../Charts";

class UserList extends React.Component {
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

  deleteRow(id, e) {
    axios.delete(`http://localhost:4000/user/${id}`).then((res) => {
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
        <h4>Users</h4>
        {users.map((item) => (
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Age</th>
                <th>Weight</th>
                <th>Calories</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{item._id}</td>
                <td>{item.userName}</td>
                <td>{item.age}</td>
                <td>{item.weight}</td>
                <td>{item.calories}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={(e) => this.deleteRow(item._id, e)}
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Link to="/edit" state={item._id}>
                    <Button variant="warning">Edit</Button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        ))}
      </>
    );
  }
}

export default UserList;
