import React from "react";
import './App.css';
import MyNavbar from "./components/Navbar";
import MyHeader from "./components/Header";
import Container from 'react-bootstrap/Container';
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <MyHeader/>
      <MyNavbar/>
      <Footer/>
    </div>
  );
}

export default App;
