import React, { useContext } from "react";
import CartContext from "../../Store/CartContext/cart-context";
import Header from "../Header/Header";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const KidWare = () => {
    const productsArr = [
        {
          title: "Shorts",
    
          price: 399,
    
          imageUrl:
            "https://i.pinimg.com/236x/38/bf/2f/38bf2f827cadaa025f198b04b5188d1d.jpg",
        },
    
        {
          title: "Jeans",
    
          price: 500,
    
          imageUrl:
            "https://i.pinimg.com/236x/17/ba/68/17ba68288e303bcc46f5daf3187ddbb3.jpg",
        },
    
        {
          title: "Lehanga",
    
          price: 599,
    
          imageUrl:
            "https://i.pinimg.com/236x/ce/c5/33/cec533d4fba82dcb67e67048683cfb2f.jpg",
        },
    
        
    
        {
          title: "Ethenic wear)",
    
          price: 699,
    
          imageUrl:
            "https://i.pinimg.com/236x/22/d4/eb/22d4ebabe6f29c1919adb5091a792369.jpg",
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
                  <Link to={`/kidWare/${product.title}`}><img src={product.imageUrl} alt="Product" /></Link>
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
}

export default KidWare;