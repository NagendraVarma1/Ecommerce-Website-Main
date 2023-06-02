import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import CartContext from "../../Store/CartContext/cart-context";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  const productsArr = [
    {
      title: "Formal Shirt",

      price: 500,

      imageUrl:
        "https://i.pinimg.com/236x/40/4d/c6/404dc6afc276e7b9f12f3e036a55b0a2.jpg",
    },

    {
      title: "denim Jacket",

      price: 1500,

      imageUrl:
        "https://i.pinimg.com/236x/2d/f1/ff/2df1ff98686f4e25ebdfd5f19c34bff3.jpg",
    },

    {
      title: "Boxer",

      price: 450,

      imageUrl:
        "https://i.pinimg.com/236x/5c/25/30/5c2530d090009fa698442a46b1dd9095.jpg",
    },

    {
      title: "Joggers",

      price: 950,

      imageUrl:
        "https://i.pinimg.com/236x/ec/4a/00/ec4a00abf8bbc65ad2f4d39b08d17463.jpg",
    },

    {
      title: "T-Shirt(Casual Wear)",

      price: 299,

      imageUrl:
        "https://i.pinimg.com/236x/1f/5d/46/1f5d467fdf9e2b5740b9ad7f42b385b6.jpg",
    },

    {
      title: "Printed Shirt",

      price: 599,

      imageUrl:
        "https://i.pinimg.com/236x/2c/35/42/2c35420974899c618a020b04e2f985e2.jpg",
    },
  ];

  const cartCtx = useContext(CartContext);

  const cartItemHandler = (product) => {
    cartCtx.addCartItems(product);
  };

  return (
    <>
      <Header />
      <Container className="text-center">
        <ul className="list-unstyled">
          {productsArr.map((product) => (
            <li key={product.title} className="my-3 py-3">
              <h2>{product.title}</h2>
              <Link to={`/${product.title}`}><img src={product.imageUrl} alt="Product" /></Link>
              <Container
                className="mt-3"
                style={{
                  width: "50%",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p>${product.price}</p>
                <Button onClick={() => cartItemHandler(product)}>
                  Add To Cart
                </Button>
              </Container>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
};

export default ProductList;
