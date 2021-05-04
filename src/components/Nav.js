import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';

 function Nav() {
    return (
        <div className="Nav">
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <ReactBootStrap.Navbar.Brand href="#home">Meqdad</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto">
            <ReactBootStrap.Nav.Link href="#travel-destination">Travel Destinations</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#about-me">About Meqdad</ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
      </div>
    )
}

export default Nav; 
