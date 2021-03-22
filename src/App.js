import React, { Component } from 'react';
import { HashRouter, Route } from "react-router-dom";
import './App.css';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import MyHeader from "./components/Header";
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";


function App() {
  return (
    <HashRouter basename="/">
    <MyHeader/>
    <MyNavbar/>
    <Container>
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
    </Container>
    <Footer/>
    </HashRouter>
  );
}

export default App;
