import React from "react";
import { Navbar, Nav, Container, Button, NavDropdown } from "react-bootstrap";

export default function AppNavbar() {
  return (
    <Navbar expand="md" bg="white" className="border-bottom">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src="https://cdn-caretutors.sgp1.cdn.digitaloceanspaces.com/assets/img/logo/caretutors-blue.svg"
            width="178"
            height="37"
            className="d-inline-block align-top"
            alt="caretutors.com"
          />
        </Navbar.Brand>

        {/* Hamburger toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="/signin" className="text-dark">
              Sign In
            </Nav.Link>
            <Nav.Link href="/job/list" className="text-dark">
              Job Board
            </Nav.Link>
            <Nav.Link href="/blog" className="text-dark">
              Blog
            </Nav.Link>
            <Nav.Link
              href="/signup/tutor"
              className="btn btn-primary text-white rounded-xl px-4 ms-md-3"
            >
              Become a Tutor
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
