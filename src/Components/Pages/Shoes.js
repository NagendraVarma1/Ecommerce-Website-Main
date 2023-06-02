import React, { useContext } from "react";
import CartContext from "../../Store/CartContext/cart-context";
import Header from "../Header/Header";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Shoes = () => {
    const productsArr = [
        {
          title: "White Sneakers",
    
          price: 2799,
    
          imageUrl:
            "https://i.pinimg.com/236x/d8/df/e3/d8dfe3b151896731653a8df50abf5d46.jpg",
        },
    
        {
          title: "Sports Shoes",
    
          price: 1500,
    
          imageUrl:
            "https://i.pinimg.com/236x/de/2d/02/de2d021e61235ccfcd81fa355f6790fc.jpg",
        },
    
        {
          title: "Black Formal Shoes",
    
          price: 699,
    
          imageUrl:
            "https://i.pinimg.com/236x/c0/7e/37/c07e37a9d154469f2c0d3288b44ea582.jpg",
        },
    
        
    
        {
          title: "Loafer",
    
          price: 699,
    
          imageUrl:
            "https://i.pinimg.com/236x/4d/ae/3b/4dae3b114c5333d8fe56c574e9ed3e04.jpg",
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
                  <Link to={`/shoes/${product.title}`}><img src={product.imageUrl} alt="Product" /></Link>
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

export default Shoes;