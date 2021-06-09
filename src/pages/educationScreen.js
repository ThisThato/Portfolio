import React from "react";
import { Container } from "react-bootstrap";
import Education from "../components/Education";
import Work from "../components/Work";
import data from "../services/data";

const educationScreen = () => {
  return (
    <>
      <Container className="education">
        <h1>Education And Certifications</h1>
      </Container>
    </>
  );
};

export default educationScreen;
