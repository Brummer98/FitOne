// React imports
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  withRouter,
} from "react-router-dom";

// CSS import
import "./App.css";

// Bootstrap import
import "bootstrap/dist/css/bootstrap.min.css";

// Page imports
import Home from "./pages/Home";
import Personal from "./pages/PersonalPage";
import Login from "./pages/Login";
import Create from "./pages/CRUD/Create";
import Read from "./pages/CRUD/Read";
import Edit from "./pages/Edit";

// App function
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/createUser" element={<Create />} />
          <Route path="/users" element={<Read />} />
          <Route path="/edit" element={<Edit />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
