import React from "react";
import { Container } from "react-bootstrap";

const infoScreen = () => {
  return (
    <Container>
      <div className="info-header">
        <h2>d e v e l o p e r</h2>
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
    </Container>
  );
};

export default infoScreen;
