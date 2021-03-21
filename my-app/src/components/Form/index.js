import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GithubIcon from '../Form/github.png';
import EmailIcon from '../Form/email.png';
import LinkedinIcon from '../Form/linkedin.png';
import PhoneIcon from '../Form/phone.png';
import './style.css';

function MyContactForm() {
    return (
    <div>
        <Row>
            <Col sm={8}>
                Connect with me through Github, Email, LinkedIn, or Phone; You can also reach out to me through the form below!
            </Col>
            <Col sm={1}>
                <Button variant="link" href="https://github.com/elliefh" target="_blank"> 
                    <img src= {GithubIcon} alt="logo" height="40px" width="40px"/>
                </Button>
            </Col>
            <Col sm={1}>
                <Button variant="link" href="#">
                <img src= {EmailIcon} alt="logo"height="40px" width="40px"/>
                </Button>
            </Col>
            <Col sm={1}>
                <Button variant="link" href="https://www.linkedin.com/in/ellie-fu-138ba3208/" target="_blank">
                    <img src= {LinkedinIcon} alt="logo"height="40px" width="40px"/>
                </Button>
            </Col>
            <Col sm={1}>
                <Button variant="link" href="#">
                    <img src= {PhoneIcon} alt="logo"height="40px" width="40px"/>
                </Button>
            </Col>
        </Row>
        <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="" />
            </Form.Group>            

            <Form.Group controlId="exampleForm.ControlInput2">
            <Form.Label>Your Email</Form.Label>
            <Form.Control type="email" placeholder="" />
            </Form.Group>
            
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your Inquiry/Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Button variant="primary" type="submit" className="submitBtn">
            Submit
            </Button>

        </Form>
    </div>
)}

export default MyContactForm;