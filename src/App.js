import React from "react";
import './App.css';
import { HashRouter, HashRouter as Router } from 'react-router-dom';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import MyHeader from "./components/Header";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";


function App() {
  return (
    <HashRouter>
    <MyHeader/>
    <MyNavbar/>
    <Container>
        <Router exact path="/" component={About} />
        <Router exact path="/portfolio" component={Portfolio} />
        <Router exact path="/contact" component={Contact} />
    </Container>
    <Footer/>
    </HashRouter>
  );
}

export default App;
