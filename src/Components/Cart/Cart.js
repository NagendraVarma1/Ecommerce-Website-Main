import React, { useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import QuantityForm from "../QuantityForm/QuantityForm";
import Modal from "../UI/Modal/Modal";

const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];
  const [cartItems, setCartItems] = useState(cartElements);

  const removeItemHandler = (item) => {
    let updatedItems = cartItems.filter(
      (cartItem) => cartItem.title !== item.title
    );
    setCartItems(updatedItems);
  };

  let totalAmount = 0;

  return (
    <Modal>
      <Row>
        <Container style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Cart</h2>
          <Button onClick={props.onCloseClick}>x</Button>
        </Container>
        <ul className="list-unstyle">
          {cartItems.map((item) => {
            totalAmount = totalAmount + Number(item.price)
            return (
            <li
              key={item.title}
              style={{
                display: "flex",
                borderTop: "1px Solid black",
                borderBottom: "1px Solid black",
              }}
              className="m-3"
            >
              <Col className="m-1">
                <img
                  src={item.imageUrl}
                  alt="color"
                  style={{ width: "100px", height: "100px" }}
                />
              </Col>
              <Col className="mt-3">
                <h2 style={{ fontSize: "medium" }}>{item.title}</h2>
              </Col>
              <Col className="m-3">
                <p>{item.price}</p>
              </Col>

              <Container
                style={{
                  width: "50%",
                  height: "20%",
                  display: " flex",
                  justifyContent: "space-between",
                }}
              >
                <QuantityForm />
                <Button
                  variant="warning"
                  className="my-3"
                  style={{ height: "50%" }}
                  onClick={() => removeItemHandler(item)}
                >
                  Remove
                </Button>
              </Container>
            </li>
            )
          })}
        </ul>
      </Row>
      <Container style={{ textAlign: "right" }}>
        <h2 style={{ fontSize: "medium" }}>Total Amount: {totalAmount}</h2>
      </Container>

      <Button style={{ marginLeft: "45%" }}>PURCHASE</Button>
    </Modal>
  );
};

export default Cart;
