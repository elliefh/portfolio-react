import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import "./style.css";

function MyHeader() {
    return(
        <Jumbotron className="Header">
            <Container className="Content">
                <h1>Ellie Fu-Hinthorn</h1>
            </Container>
        </Jumbotron>
    )
}

export default MyHeader;