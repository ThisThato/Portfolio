import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const Titles = () => {
  return (
    <Container className="title">
      <Row>
        <Col lg={4} md={4} sm={12}>
          <Card className="title-card border-0">
            <Card.Body>
              <div>
                <i className="fas fa-palette fa-2x"></i>
              </div>
              <div className="title-card-text">
                <Card.Title>
                  <h2>UI / UX </h2>
                </Card.Title>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                </Card.Text>
                <i className="fas fa-arrow-right fa-2x" style={{ fontSize: "1.5rem" }}></i>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={4} sm={12}>
          <Card className="title-card border-0">
            <Card.Body>
              <div>
                <i className="fas fa-code fa-2x"></i>
              </div>
              <div className="title-card-text">
                <Card.Title>
                  <h2>Developer</h2>
                </Card.Title>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                </Card.Text>
                <i className="fas fa-arrow-right fa-2x" style={{ fontSize: "1.5rem" }}></i>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={4} sm={12}>
          <Card className="title-card border-0">
            <Card.Body>
              <div>
                <i className="fas fa-database fa-2x"></i>
              </div>
              <div className="title-card-text">
                <Card.Title>
                  <h2>Database </h2>
                </Card.Title>
                <Card.Text>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing
                  </p>
                </Card.Text>
                <i className="fas fa-arrow-right fa-2x" style={{ fontSize: "1.5rem" }}></i>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Titles;
