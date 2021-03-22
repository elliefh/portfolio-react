import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';
import './style.css';

function MyCarousel(props) {
    return(
    <Carousel className="carousel">

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1595853035070-59a39fe84de3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8d2VsY29tZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="First slide"
            width="720"
            height="540"
            />
            <Carousel.Caption>
            <h3>Welcome</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
            alt="Second slide"
            width="720"
            height="540"
            />
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>

    </Carousel>
    )
}

export default MyCarousel;