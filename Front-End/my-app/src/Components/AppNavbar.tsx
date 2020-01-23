import React from "react";

import { Navbar, Nav } from "react-bootstrap";
import currentBookQuery from "../Observables/currentBookQueryObservable";

export default class AppNavbar extends React.Component {
  render(): JSX.Element {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Book store management system</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" onClick={() => currentBookQuery.next({})}>
              Clear filters
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
