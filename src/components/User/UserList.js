// React imports
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button';

// Bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";

const UserList = (props) => {
  
  return (
    <>
      <h4>Users</h4>
      {props.Users.map((item) => (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Username</th>
              <th>Age</th>
              <th>Weight</th>
              <th>Calories</th>
              <th>Delete</th>
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
                <Button variant="warning">Delete</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      ))}

      {/* <ListGroup>
        {props.Users.map((item) => (
          <>
            <ListGroup.Item>
              <a
                href="#!"
                className="collection-item"
                key={item._id}
                onClick={props.updateCurrentUser.bind(this, item)}
              >
                {item._id}
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              Username:
              <a
                href="#!"
                className="collection-item"
                key={item._id}
                onClick={props.updateCurrentUser.bind(this, item)}
              >
                {item.userName}
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              Age:
              <a
                href="#!"
                className="collection-item"
                key={item._id}
                onClick={props.updateCurrentUser.bind(this, item)}
              >
                {item.age}
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              Weight:
              <a
                href="#!"
                className="collection-item"
                key={item._id}
                onClick={props.updateCurrentUser.bind(this, item)}
              >
                {item.weight}
              </a>
            </ListGroup.Item>
            <ListGroup.Item>
              Calories:
              <a
                href="#!"
                className="collection-item"
                key={item._id}
                onClick={props.updateCurrentUser.bind(this, item)}
              >
                {item.calories}
              </a>
            </ListGroup.Item>
          </>
        ))}
      </ListGroup> */}
    </>
  );
};

export default UserList;
