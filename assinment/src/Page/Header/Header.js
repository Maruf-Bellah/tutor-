import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from './ycfazg-tutor.png'

const Header = () => {
     const [user] = useAuthState(auth)

     const handleSignOut = () =>{
          signOut(auth);
     }

     return (
          <div className=' bg-light mb-2 sticky-top'>
            <Navbar  expand="lg">
  <Container fluid>
  <Navbar.Brand as={Link} to="/home">
      <img
        src={logo}
        width="150"
        height="70"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
        {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}

      <Nav
        className="ms-auto my-3 text-center my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >


      <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
        <Nav.Link as={Link} to="/about" >
          About
        </Nav.Link>
        {  user ? 
     <button className='btn btn-link text-decoration-none' onClick={handleSignOut}>Sign Out</button>
     :

<Nav.Link as={Link} to="/log">Blog</Nav.Link>}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
          
          </div>
     );
};

export default Header;