import React from "react";
import { Container } from "react-bootstrap";

const Header = () => {
    return (
        <Container fluid style={{backgroundColor: 'gray'}} className=" my-1 py-5 text-center shadow-lg " >
            <h1 style={{fontSize: '80px', color: 'white', fontFamily: 'fantasy'}}>The Generics</h1>
        </Container>
    )
}

export default Header;