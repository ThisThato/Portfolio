import React, { Fragment } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

const Header = () => {
  return (
    <Fragment>
      <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand></Navbar.Brand>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
