import React from "react";
// import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyNavbar() {
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Ellie Fu-Hinthorn</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/resume">Resume</Nav.Link>
        </Nav>
    </Navbar>
    )
}

export default MyNavbar;