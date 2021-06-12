import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import data from "../services/data";
import { Timeline } from "react-timeline-scribble";
import Education from "../components/Education";

const educationScreen = () => {
  return (
    <>
      <Container className="education">
        <h1>Education And Certifications</h1>
        <Row>
          <Col md={6}>
            <Timeline>
              {data.education.map((education) => (
                <Education education={education} />
              ))}
            </Timeline>
          </Col>
          <Col md={6}>
            <Timeline>
              {data.courses.map((courses) => (
                <Education courses={courses} />
              ))}
            </Timeline>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default educationScreen;
