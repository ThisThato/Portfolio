import React from "react";
import { Container, Image } from "react-bootstrap";

const landing = () => {
  return (
    <Container className="landing">
      <div className="landing-text">
        <h1>
          Thato Motaung <span>resume</span>
        </h1>
        <h3>What i do</h3>
      </div>
      <div>
        <Image className="landing-image" src="./images/landing-2.jpg" />
      </div>
    </Container>
  );
};

export default landing;
