import React, { Fragment } from "react";

import { Navbar, Container } from "react-bootstrap";

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
