import React, { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import CartContext from "../../Store/CartContext/cart-context";

const ProductList = (props) => {
  const productsArr = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const cartCtx = useContext(CartContext);

  const cartItemHandler = (product) => {
    cartCtx.addCartItems(product);
    props.getQuantity();
  }

  
  return (
    <Container className="text-center">
      <ul className="list-unstyled">
        {productsArr.map((product) => (
          <li
            key={product.title}
            className="my-3 py-3"
          >
            <h2>{product.title}</h2>
            <img src={product.imageUrl} alt="Product" />
            <Container
            className="mt-3"
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p>${product.price}</p>
              <Button onClick={() => cartItemHandler(product)}>Add To Cart</Button>
            </Container>
          </li>
        ))}
      </ul>
      <Button className="btn btn-secondary">See the Cart</Button>
    </Container>
  );
};

export default ProductList;