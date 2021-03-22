
import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

function MyProject(props) {
    return(
        <div className="project">
            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.image} wdith="400" height="200"/>
                    <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.description} <br/> Langugages used: {props.languages}
                    </Card.Text>
                    <Card.Link href={props.repoLink}>Repository</Card.Link>
                    <Card.Link href={props.liveLink}>Live Application</Card.Link>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default MyProject;