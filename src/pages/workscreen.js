import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

const workscreen = () => {
  return (
    <Container>
      <div className="work-header">
        <h2>Free-lancer</h2>
        <p>Currently doing free lance projects as a mobile / web developer</p>
      </div>
      <div>
        <blockquote className="blockquote mb-0 card-body">
          <h2 className=" mb-3">
            "Failure is an option here.
            <br /> If things are not failing, <span>you are </span>not innovating <span>enough</span>."
          </h2>
          <footer className="blockquote-footer">
            <small className="text-muted mt-2">Elon Musk</small>
          </footer>
        </blockquote>
      </div>
      <div className="my-work">
        <h1>My Work</h1>
      </div>
    </Container>
  );
};

export default workscreen;
