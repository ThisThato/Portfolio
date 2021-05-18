import React from "react";
import { Card } from "react-bootstrap";

const Work = ({ project }) => {
  return (
    <>
      <div className="image-flip" ontouchstart="this.classList.toggle('hover')">
        <div className="mainflip">
          <div class="frontside">
            <Card className="my-3 rounded">
              <Card.Img src={project.image} className="img-fluid" style={{ marginBottom: "4rem" }} />
              <Card.Body>
                <i className="fas fa-arrow-right" style={{ float: "right" }}></i>
              </Card.Body>
            </Card>
          </div>
          <div class="backside">
            <Card>
              <Card.Body>
                <Card.Title>{project.projectName}</Card.Title>
                <Card.Text>
                  <p>{project.description}</p>
                  <div>
                    {project.stack.map((item) => (
                      <span className="item bage bg-dark m-2">{item}</span>
                    ))}
                  </div>
                  <a href={project.link}>
                    <i className="fas fa-globe"></i>
                  </a>
                  <a href={project.repo}>
                    <i className="fab fa-github"></i>
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
