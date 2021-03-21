import React from "react";
import './App.css';
import MyNavbar from "./components/Navbar";
import MyHeader from "./components/Header";
import Container from 'react-bootstrap/Container';
import Footer from "./components/Footer";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <MyHeader/>
      <MyNavbar/>
      <Container>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </Container>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
