import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import CartContext from '../../Store/CartContext/cart-context';

const NavBar = (props) => {

    const cartCtx = useContext(CartContext);
    let totalQuantity = 0;
    cartCtx.cartItems.forEach((item) => {
        totalQuantity = totalQuantity + Number(item.quantity)
    })

    return (
        <Navbar style={{position: 'sticky', top: '0'}} bg='dark' expand='sm' variant='dark' className='shadow-lg' >
            <Container fluid className='justify-content-center'>
                <Nav className='mx-sm-5 text-center' style={{fontSize: 'large'}}>
                    <Nav.Link href='/' className='mx-sm-1 mx-md-3 mx-lg-5 text-light'>Home</Nav.Link>
                    <Nav.Link href='/' className='mx-sm-1 mx-md-3 mx-lg-5 text-light'>Store</Nav.Link>
                    <Nav.Link href='/about' className='mx-sm-1 mx-md-3 mx-lg-5 text-light'>About</Nav.Link>
                </Nav>
            </Container>
            <Button variant='outline-primary' className='text-light' onClick={props.onCartClick}>Cart</Button>
            <h5 className='text-primary mx-2'>{totalQuantity}</h5>
        </Navbar>
    )
}

export default NavBar;