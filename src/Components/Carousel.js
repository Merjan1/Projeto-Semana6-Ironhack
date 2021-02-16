import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Avengers from './Images/avengersEndGame.jpg';
import Joker from './Images/joker.jpeg';
import Judge from './Images/theJudge.jpeg';
import './Carousel.css'

function CarouselMove() {
    return (
        <div className='w-50 m-auto p-25'>
        <Carousel className='text-right'>
  <Carousel.Item>
    <img 
      className="img"
      src={Avengers}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img"
      src={Joker}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="img"
      src={Judge}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
    )
}

export default CarouselMove;