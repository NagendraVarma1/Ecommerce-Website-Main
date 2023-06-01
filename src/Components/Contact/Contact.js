import axios from "axios";
import React, { useRef } from "react";
import { Button, Container, Form } from "react-bootstrap";

const Contact = () => {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneInputRef = useRef();

  async function formSubmitHandler(event) {
    event.preventDefault();

    let name = nameInputRef.current.value;
    let email = emailInputRef.current.value;
    let phoneNumber = phoneInputRef.current.value;

    let details = {
      name,
      email,
      phoneNumber,
    };
    //   const response = await fetch('https://react-project-4e5e7-default-rtdb.firebaseio.com/details.json', {
    //     method: 'POST',
    //     body: JSON.stringify(details),
    //     headers : {
    //         "Content-Type" : 'application/json'
    //     }
    //   });
    //   await response.json();

    //This is another way to store data in the server using 'axios'.
    //To use axios first we have to do 'npm install axios' and import it where it is needed.

    const response = await axios.post(
      "https://react-project-4e5e7-default-rtdb.firebaseio.com/details.json",
      details
    );

    const data = response.data;
    console.log(data);

    nameInputRef.current.value = "";
    phoneInputRef.current.value = "";
    emailInputRef.current.value = "";
  }
  return (
    <Container
      className="shadow-lg"
      style={{
        width: "50%",
        border: "2px solid black",
        borderRadius: "10px",
        marginTop: "50px",
      }}
    >
      <Form className="m-3 p-2" onSubmit={formSubmitHandler}>
        <Form.Group className="m-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={nameInputRef} />
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Label>Email Id</Form.Label>
          <Form.Control type="email" ref={emailInputRef} />
        </Form.Group>
        <Form.Group className="m-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" pattern="[0-9]{10}" ref={phoneInputRef} />
        </Form.Group>
        <div style={{ textAlign: "center" }}>
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </Container>
  );
};

export default Contact;
