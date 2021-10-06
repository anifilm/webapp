import React from 'react';
import { Navbar, Container, NavbarToggler, Collapse, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

const AppNavBar = () => {
  return (
    <>
      <Navbar color="dark" expand="lg" className="sticky-top">
        <Container>
          <Link to="/" className="text-white text-decoration-none"><h4>React Blog</h4></Link>
          <NavbarToggler></NavbarToggler>
          <Collapse isOpen={true} navbar>
            <Nav className="ml-auto d-flex justify-content-around" navbar>
              { true ? <h5 className="text-white">authLink</h5> : <h5 className="text-white">guestLink</h5> }
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavBar;
