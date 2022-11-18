// React imports
import React, { useEffect, useState } from "react";
import axios from "axios";

// CSS import
import "./App.css";

// Bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";

// Component imports
import NavBar from "./components/Navbar";
import ProgressBarMain from "./components/Progressbar";
import ChartsContainer from "./components/Charts.js";
import ProductsList from "./components/ProductsList";
import Footer from "./components/Footer";
import MyComponent from "./components/API";

// User imports
import UserForm from "./components/User/UserForm";
import UserList from "./components/User/UserList";
import UserSingle from "./components/User/UserSingle";

// App function
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Users: [],
      CurrentUser: {},
    }

    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  componentDidMount() {
    const url = 'http://localhost:4000/users';

    axios.get(url)
      .then((Response) => {
        this.setState({
          Users: Response.data
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  updateCurrentUser(item) {
    this.setState({
      CurrentUser: item,
    })
  }
  
  render() {
    return (
      <>
        {/* Testing below */}

        {/* <div className="container-fluid">
          <div className="row">
            <NavBar />
          </div>
          <div className="row">
            <div className="col s3">
              <UserList Users={this.state.Users}
              updateCurrentUser={this.updateCurrentUser}/>
            </div>
            <div className="col s9">
              <UserSingle user={this.state.CurrentUser}/>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <UserForm />
            </div>
          </div>
        </div> */}

      <style>{"body { background-color: #2A6892; }"}</style>
      <NavBar />
      <ProgressBarMain />
      <ChartsContainer />
      <ProductsList />
      <Footer /> 
        {/* Testing API */}
        <MyComponent />
      </>
    );
  }
}
export default App;
