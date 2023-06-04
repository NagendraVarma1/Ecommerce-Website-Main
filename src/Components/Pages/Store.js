import React from "react";
import { Carousel, Container } from "react-bootstrap";
import shoes from '../../Assests/shoes.jpg';
import clothes from '../../Assests/clothes.jpg'

const Store = () => {
    return (
        <Container fluid className=" h-50 mt-5 shadow-lg">
        <Carousel >
      <Carousel.Item style={{position: 'sticky', top: '30'}}>
        <img
          className="w-100"
          src={clothes}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Trending!!!</h3>
          <p>Get the Best Fashion Here</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="w-100 h-50"
          src={shoes}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
    )
}

export default Store;