import React from "react";
// import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

function MyNavbar() {
    return(
        <Navbar bg="dark" variant="dark" className="Navbar">
            <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="https://docs.google.com/document/d/1EFb6fD7jt9nr4023E_L3wkIkPHb7o3mSGsQcHiFlllY/edit?usp=sharing" target="_blank">Resume</Nav.Link>
        </Nav>
    </Navbar>
    )
}

export default MyNavbar;