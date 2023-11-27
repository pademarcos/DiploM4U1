import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";
import "../../styles/components/layout/Nav.css"

function Navegador() {
  return (
    <Fragment>
      
      <Navbar className="navBg" expand="lg" > 
        <Container>
          <Navbar.Brand as={Link} to="/">TechTrend</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Novedades">Novedades</Nav.Link>
              <Nav.Link as={Link} to="/Productos">Productos</Nav.Link>
              <Nav.Link as={Link} to="/Contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet>

        </Outlet>
      </section>
    </Fragment>
  );
}

export default Navegador;
