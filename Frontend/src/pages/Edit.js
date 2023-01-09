import React from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// Bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useLocation } from 'react-router-dom'
import NavBar2 from "../components/Navbar2.0";
import UserEditForm from "../components/User/UserEditForm";

class Edit extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     users: [],
  //   };
  // }

  // componentDidMount() {
  //   axios.get(`http://localhost:4000/users`).then((res) => {
  //     const users = res.data;
  //     this.setState({ users });
  //   });
  // }

  // editUser(id) {
  //   console.log('Im working!');
  //   // event.preventDefault();
  //   axios
  //     .put(`http://localhost:4000/user/${id}`, {
  //       userName: 
  //       'Brammer', 
  //       // document.getElementById("userNameEdit").value,
  //       password: 
  //       'Password', 
  //       // document.getElementById("passwordEdit").value,
  //       age: 
  //       24, 
  //       // document.getElementById("ageEdit").value,
  //       weight: 
  //       85, 
  //       // document.getElementById("weightEdit").value,
  //       calories: 
  //       3245, 
  //       // document.getElementById("caloriesEdit").value,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //       // const users = this.state.users.filter((item) => item.id !== id);
  //       // this.setState({ users });
  //       window.location.href = "personal";
  //       console.log('HELP SOS');
  //     });
  // }

  render() {
    return (
      <>
        <NavBar2 />
        <UserEditForm 
            // users={this.state.users}
        />
      </>
    );
  }
}

export default Edit;
