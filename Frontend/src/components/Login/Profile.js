import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";
import { json } from 'react-router-dom';

// Bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Profile = () => {
    const { user, isAuthenticated } = useAuth0();
    // const { user } = useAuth0();

    return (
        isAuthenticated && (
        <Container fluid className='containerProgress'>
            {/* {JSON.stringify(user, null, 2)} */}
            <h3>Hello {user.nickname}</h3>
            {/* <p>{user.email}</p> */}
            {/* <JSONPretty data={user} /> */}
        </Container>
    )
  )
}

export default Profile