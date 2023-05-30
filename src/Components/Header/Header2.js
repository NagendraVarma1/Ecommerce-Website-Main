import React from "react";
import { Button, Container } from "react-bootstrap";

const HeaderTwo = () => {
  return (
    <Container
      fluid
      style={{ backgroundColor: "gray", justifyContent: "center" }}
      className=" my-1 py-5 text-center shadow-lg "
    >
      <h1 style={{ fontSize: "80px", color: "white", fontFamily: "fantasy" }}>
        The Generics
      </h1>
      <div className="mt-4">
        <Button variant="outline-dark text-light">Get Our Latest Album</Button>
      </div>
      <div className="mt-4">
        <Button variant="outline-light">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="black"
            class="bi bi-play-circle"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
          </svg>
        </Button>
      </div>
    </Container>
  );
};

export default HeaderTwo;
