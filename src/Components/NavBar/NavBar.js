import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar style={{position: 'sticky', top: '0'}} bg='dark' expand='sm' variant='dark' className='shadow-lg' >
            <Container fluid>
                <Nav className='mx-5 text-center'>
                    <Nav.Link href='/' className='mx-3 text-light'>Home</Nav.Link>
                    <Nav.Link href='/' className='mx-3 text-light'>Store</Nav.Link>
                    <Nav.Link href='/' className='mx-3 text-light'>About</Nav.Link>
                </Nav>
                <Button variant='outline-primary' className='text-light'>Cart</Button>
            </Container>
            <h5 className='text-primary'>0</h5>
        </Navbar>
    )
}

export default NavBar;