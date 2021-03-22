import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

function MyCarousel(props) {
    return(
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={props.image}
            alt="Project Screenshot"
            />
            <Carousel.Caption>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            </Carousel.Caption>
            <Button variant="link" href="#">{props.repoLink}</Button>
            <Button variant="link" href="#">{props.liveLink}</Button>
        </Carousel.Item>
    )
}

export default MyCarousel;