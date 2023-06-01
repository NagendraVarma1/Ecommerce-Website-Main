import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import HeaderTwo from "../Header/Header2";

const Home = () => {
  const tours = [
    {
      date: "JUL 16",
      city: "DETROIT, MI",
      location: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL 19",
      city: "TORONTO,ON",
      location: "BUDWEISER STAGE",
    },
    {
      date: "JUL 22",
      city: "BRISTOW, VA",
      location: "JIGGY LUBE LIVE",
    },
    {
      date: "JUL 29",
      city: "PHOENIX, AZ",
      location: "AK-CHIN PAVILION",
    },
    {
      date: "AUG 2",
      city: "LAS VEGAS, NV",
      location: "T-MOBILE ARENA",
    },
    {
      date: "AUG 7",
      city: "CONCORD, CA",
      location: "CONCORD PAVILION",
    },
  ];
  return (
    <>
      <HeaderTwo />
      <Container className="text-center">
        <h1 className="my-3">Tours</h1>
        {tours.map((tour) => (
          <Row key={tour.city} style={{borderBottom: '1px solid black', marginTop: '10px'}}>
            <Col>
              <p style={{fontSize: 'medium', fontFamily: 'sans-serif'}}>{tour.date}</p>
            </Col>
            <Col>
              <p style={{fontSize: 'medium', fontFamily: 'sans-serif'}}>{tour.city}</p>
            </Col>
            <Col>
              <p style={{fontSize: 'medium', fontFamily: 'sans-serif'}}>{tour.location}</p>
            </Col>
            <Col>
              <Button>Buy Tickets</Button>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default Home;
