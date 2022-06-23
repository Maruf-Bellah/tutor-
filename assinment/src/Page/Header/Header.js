import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from './ycfazg-tutor.png'

const Header = () => {
  const [user] = useAuthState(auth)

  const handleSignOut = () => {
    signOut(auth);
  }

  return (
    <div className=' bg-light  mb-2 sticky-top'>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/home">
            <h3 style={{ fontWeight: 'bold' }} className='text-primary uppercase'>Tutor</h3>
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/checkout">
            <small style={{ fontWeight: 'bold' }}>    Students</small>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* <Nav.Link as={Link} to="/">Home</Nav.Link> */}

            <Nav
              className="ms-auto my-3 text-center my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >


              <Nav.Link as={Link} to="/blog" style={{ fontWeight: 'bold' }}>Blog</Nav.Link>
              <Nav.Link as={Link} to="/about" style={{ fontWeight: 'bold' }} >
                About
              </Nav.Link>
              {user ?
                <button style={{ fontWeight: 'bold' }} className='btn btn-link text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                :

                <Nav.Link as={Link} to="/login" style={{ fontWeight: 'bold' }}>Login</Nav.Link>}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
};

export default Header;