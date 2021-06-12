import React from "react";
import { Col, Row, Container, Form, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container className="footer">
        <Row>
          <Col sm={12} md={6} lg={6}>
            <h1>Contacts</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua
            </p>
            <h3>thatokamomotaung@gmail.com</h3>
            <h3>+27 79 280 7777</h3>
            <div>
              <a href="https://twitter.com/_thatomotaung">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/thato-motaung-3a727814a/">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/ThisThato">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <Form>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label> Email Address</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label> Name</Form.Label>
                    <Form.Control />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group>
                <Form.Label> Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
