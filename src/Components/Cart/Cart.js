import React, { useEffect, useState } from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [allCartProducts, setAllCartProducts] = useState([]);
  const [remove, setRemove] = useState(true)

  const navigate = useNavigate()

  let updatedEmail;
  const email = localStorage.getItem("email");
  if (email) {
    updatedEmail = email.replace("@", "").replace(".", "");
  }

  async function fetchData() {
    setRemove(false)
    const response = await axios.get(
      `https://ecommerce-website-19771-default-rtdb.firebaseio.com//${updatedEmail}.json`
    );
    const data = await response.data;
    
    if (data) {
      const allProducts = Object.keys(data).map((product) => ({
        id: product,  //in product we will get the index of the item in array
        title: data[product].title,
        imageUrl: data[product].imageUrl,
        price: data[product].price,
        quantity: 1
      }));
      setAllCartProducts(allProducts)
    }
    else {
      setAllCartProducts([])
    }
  }

  useEffect(() => {
    if(remove){
      fetchData();
    }
    
  }, [remove]);

  async function removeItemHandler (item) {
    await axios.delete(`https://ecommerce-website-19771-default-rtdb.firebaseio.com//${updatedEmail}/${item.id}.json`)
    setRemove(true)
  };

  const cartCloseHandler = () => {
    navigate('/')
  }

  if(allCartProducts.length === 0){
    return (
      <Container fluid className="text-center mt-5" style={{display: 'flex', justifyContent: 'space-around'}}>
        <h2>No products in the Cart!!!</h2>
        <Button onClick={cartCloseHandler}>x</Button>
        </Container>
      
    )
  }

  let totalAmount = 0;

  return (
      <Container className="mt-3" style={{border: '2px solid black', width: '60%'}}>
      <Row>
        <Container style={{ display: "flex", justifyContent: "space-around" , padding: '10px'}}>
          <h2 >Cart</h2>
          <Button onClick={cartCloseHandler}>x</Button>
        </Container>
        <ul className="list-unstyle" style={{}}>
          {allCartProducts.map((item) => {
            totalAmount =
              totalAmount + Number(item.price) * Number(item.quantity);
            return (
              <li
                key={item.id}
                style={{
                  display: "flex",
                  borderTop: "1px Solid black",
                  borderBottom: "1px Solid black",
                  paddingLeft: '30px',
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
                    width: "auto",
                    height: "20%",
                    marginLeft: '40px',
                    marginRight: '20px',
                  }}
                >
                  {/* <QuantityForm itemQuantity={item.quantity} /> */}
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
            );
          })}
        </ul>
      </Row>
      <Container style={{ textAlign: "right" }}>
        <h2 style={{ fontSize: "large", marginBottom: '30px' }}>Total Amount: {totalAmount}</h2>
      </Container>

      <Button style={{ marginLeft: "45%", marginBottom: '10px' }}>PURCHASE</Button>
      
      </Container>
  );
};

export default Cart;
