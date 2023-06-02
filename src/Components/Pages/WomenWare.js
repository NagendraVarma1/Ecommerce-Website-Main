import React, { useContext } from "react";
import CartContext from "../../Store/CartContext/cart-context";
import Header from "../Header/Header";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const WomenWare = () => {
    const productsArr = [
        {
          title: "Kurta",
    
          price: 799,
    
          imageUrl:
            "https://i.pinimg.com/236x/36/2b/28/362b28d874e972744d9167e6748eda83.jpg",
        },
    
        {
          title: "Saree",
    
          price: 1500,
    
          imageUrl:
            "https://i.pinimg.com/236x/39/73/04/3973043d96da35daefce9bb663342389.jpg",
        },
    
        {
          title: "Trouser",
    
          price: 699,
    
          imageUrl:
            "https://i.pinimg.com/236x/63/91/f1/6391f15d7acc444575903a7371aac4fa.jpg",
        },
    
        
    
        {
          title: "T-Shirt(Casual Wear)",
    
          price: 299,
    
          imageUrl:
            "https://i.pinimg.com/236x/49/6a/8c/496a8c050d0a86d1cb7173d4123c40c4.jpg",
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
                  <Link to={`/womenWare/${product.title}`}><img src={product.imageUrl} alt="Product" /></Link>
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

export default WomenWare;