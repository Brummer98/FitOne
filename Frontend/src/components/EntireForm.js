// React imports
import React, { useEffect, useState } from "react";
import axios from "axios";

// CSS import
import "..";

// Bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// User imports
import UserForm from "./User/UserForm";
import EditForm from "./User/UserEditForm";
import UserList from "./User/UserList";
import UserSingle from "./User/UserSingle";

// App function
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
      CurrentUser: {},
    };

    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  componentDidMount() {
    const url = "http://localhost:4000/users";

    axios
      .get(url)
      .then((Response) => {
        this.setState({
          Users: Response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateCurrentUser(item) {
    this.setState({
      CurrentUser: item,
    });
  }

  render() {
    return (
      <>
         <Container fluid className="formContainer">
          <Row className="formRow">
            <Col xs={6}>
              <UserList Users={this.state.Users}
              updateCurrentUser={this.updateCurrentUser}/>
            </Col>
            <Col xs={2}></Col>
            <Col xs={4}>
              <UserSingle user={this.state.CurrentUser}/>
            </Col>
          </Row>
          <Row className="row">
            <Col xs={6}>
              <UserForm />
            </Col>
            <Col xs={6}>
              <EditForm />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default App;
