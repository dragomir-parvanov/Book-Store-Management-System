import React from "react";

import { Navbar, Nav } from "react-bootstrap";

export default class AppNavbar extends React.Component {
  render(): JSX.Element {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Book store management system</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Add book</Nav.Link>
            <Nav.Link href="#link">Clear filters</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
