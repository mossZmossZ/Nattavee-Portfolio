import React from "react";
import { Container, Row} from "react-bootstrap";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Contact <strong className="purple">Me ! </strong>
        </h1>
        <p style={{ color: "white" }}>
          Sent Email to Contact me.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "500px" }}>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
