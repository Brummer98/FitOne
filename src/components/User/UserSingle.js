import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const UserSingle = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{props.user.userName}</Card.Title>
        <Card.Text>
            <p>Username: {props.user.userName}</p>
            <p>Password: {props.user.password}</p>
            <p>Signup date: {props.user.created_date}</p>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};

export default UserSingle;
