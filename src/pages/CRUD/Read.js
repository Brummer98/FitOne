import React from "react";
import NavBar2 from "../../components/Navbar2.0";

// Bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UserList from "../../components/User/UserList";

function Read() {
    
  return (
    <>
      <style>{"body { background-color: #2A6892; }"}</style>
      <NavBar2 />
      <Container className="containerCreateUser">
      <UserList
            Users={this.state.Users}
            updateCurrentUser={this.updateCurrentUser}
        />
      </Container>
    </>
  );
}

export default Read;
