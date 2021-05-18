import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Work from "../components/Work";
import data from "../services/data";

const WorkScreen = () => {
  return (
    <>
      <Container className="work">
        <h1>My Work</h1>
        <div className="work-item">
          <Row>
            {data.projects.map((project) => (
              <Col key={project.id} sm={12} md={4} lg={4}>
                <Work project={project} />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default WorkScreen;
