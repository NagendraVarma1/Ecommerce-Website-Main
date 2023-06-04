import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../Store/AuthContext/auth-context';

const NavBar = (props) => {
    const authCtx = useContext(AuthContext)

    const deleteTokenHandler = () => {
        authCtx.logOut();
        
    }

    return (
        <Navbar style={{position: 'sticky', top: '0'}} bg='dark' expand='sm' variant='dark' className='shadow-lg' >
            <Container fluid className='justify-content-center'>
                <Nav className='mx-sm-5 text-center' style={{fontSize: 'large'}}>
                    <NavLink to='/home' className='mx-sm-1 mx-md-3 mx-lg-5 text-light'>Home</NavLink>
                    {authCtx.loggedIn && <NavLink to='/' className='mx-sm-1 mx-md-3 mx-lg-5 text-light'>Store</NavLink>}
                    <NavLink to='/about' className='mx-sm-1 mx-md-3 mx-lg-5 text-light'>About</NavLink>
                    {authCtx.loggedIn && <NavLink to='/contactUs' className='mx-sm-1 mx-md-3 mx-lg-5 text-light'>Contact Us</NavLink>}
                    {!authCtx.loggedIn && <NavLink to='/login' className='mx-sm-1 mx-md-3 mx-lg-5 text-light'>Login</NavLink>}
                    {authCtx.loggedIn && <NavLink to='/login' className='mx-sm-1 mx-md-3 mx-lg-5 text-light' onClick={deleteTokenHandler}>Logout</NavLink>}
                </Nav>
            </Container>
            {authCtx.loggedIn && <Button variant='outline-primary' className='text-light' onClick={props.onCartClick}>Cart</Button>}
        </Navbar>
    )
}

export default NavBar;