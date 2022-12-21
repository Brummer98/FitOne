// React imports
import React, { useEffect, useState } from "react";
import axios from "axios";

// Auth0 imports
import { Auth0Provider } from "@auth0/auth0-react";

// CSS import
import "../App.css";

// Routes import
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Component imports
import NavBar from "../components/Navbar";
import NavBar2 from "../components/Navbar2.0";
import ProgressBarMain from "../components/Progressbar";
import ChartsContainer from "../components/Charts.js";
import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer";
import MyComponent from "../components/API";
import EntireForm from "../components/EntireForm";
import Profile from "../components/Login/Profile";

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

// App function
class Home extends React.Component {
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
        <style>{"body { background-color: #2A6892; }"}</style>
        <NavBar2 />
        {/* <EntireForm /> */}
        <Auth0Provider
          domain={domain}
          clientId={clientId}
          redirectUri={window.location.origin}
        >
        <Profile />
        <ProgressBarMain />
        <ChartsContainer />
        <ProductsList />
        <Footer />
        {/* Testing API */}
        <MyComponent />
        </Auth0Provider>
      </>
    );
  }
}
export default Home;
