import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {
     const [user] = useAuthState(auth)

     const handleSignOut = () =>{
          signOut(auth);
     }

     return (
          <div className='container'>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand as={Link} to="/home">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}

      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
{  user ? 
     <button className='btn btn-link text-decoration-none' onClick={handleSignOut}>Sign Out</button>
     :

<Nav.Link as={Link} to="/login">Login</Nav.Link>}
        <Nav.Link as={Link} to="/register" >
          Register
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
          
          </div>
     );
};

export default Header;