import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Resumecard from "./ResumeCards";
import Particle from "../Particle";
import HAYAIMG from "../../Assets/Projects/HAYA.png";

function Resumes() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Resumecard
              imgPath={HAYAIMG}
              isBlog={false}
              title="HAYA-Application"
              description="Use Flutter for cross-platform mobile app and integrated Ai tensorflow mobile for recognize image."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Resumes;
