// React imports
import React, { useEffect, useState } from 'react';

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

// App function
function App() {
  return (
    <>
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
export default App;