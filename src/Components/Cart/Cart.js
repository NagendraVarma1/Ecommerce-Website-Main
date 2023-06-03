import React, { useContext } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import QuantityForm from "../QuantityForm/QuantityForm";
import Modal from "../UI/Modal/Modal";
import CartContext from "../../Store/CartContext/cart-context";

const Cart = (props) => {

  const cartCtx = useContext(CartContext)
  
  const removeItemHandler = (item) => {
    cartCtx.removeCartItems(item)
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
          {cartCtx.cartItems.map((item) => {
            totalAmount = totalAmount + ( Number(item.price) * Number(item.quantity))
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
                  width: "40%",
                  height: "20%",
                  display: " flex",
                  justifyContent: "space-between",
                }}
              >
                <QuantityForm itemQuantity={item.quantity}/>
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
