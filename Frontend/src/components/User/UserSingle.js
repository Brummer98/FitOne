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
          <p>Age: {props.user.age}</p>
          <p>Weight: {props.user.weight}</p>
          <p>Calories: {props.user.calories}</p>
          {/* <p>Signup date: {props.user.created_date}</p> */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserSingle;
