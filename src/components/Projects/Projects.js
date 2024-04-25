import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import EMBEDDEDIMG from "../../Assets/Projects/EMBEDDED.png";
import COVIDWEBIMG from "../../Assets/Projects/COVIDWEB.png";
import TPAKIMG from "../../Assets/Projects/TPAK.png";
import NONEIMG from "../../Assets/Projects/NONE.png";
import PYQTIMG from "../../Assets/Projects/PYQT.png";
import HAYAIMG from "../../Assets/Projects/HAYA.png";

function Projects() {
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
            <ProjectCard
              imgPath={HAYAIMG}
              isBlog={false}
              title="HAYA-Application"
              description="Use Flutter for cross-platform mobile app and integrated Ai tensorflow mobile for recognize image."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TPAKIMG}
              isBlog={false}
              title="T-pak matching dormitory platform"
              description="Web Application for matching dormitory by React JS and Node JS MongoDB."
              ghLink="https://github.com/mossZmossZ/t-pak"
              demoLink="https://tpak.nattavee.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PYQTIMG}
              isBlog={false}
              title="Search Engine Desktop program"
              description="Scaping a data from internet and corrected data use NLP (NLTK,PythaiNLP) , Inverse index and Data Visualization in Tableau , Make GUI  By Python PyQT and integrated multithreading."
              ghLink="https://github.com/mossZmossZ/Search_Engine_with_Python"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={COVIDWEBIMG}
              isBlog={false}
              title="React Js for Visualize data and Node Js for api JSON data , Python to make a Graph Data."
              description="React Js for Visualize data and Node Js for api JSON data , Python to make a Graph Data."
              ghLink="https://github.com/mossZmossZ/DataVisualizationWebApp"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EMBEDDEDIMG}
              isBlog={false}
              title="Equipment borrowing system"
              description="None."
              ghLink="https://github.com/mossZmossZ/Project-Embedded"
              demoLink="https://project.embed.nattavee.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NONEIMG}
              isBlog={false}
              title="Home-assistant"
              description="None."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NONEIMG}
              isBlog={false}
              title="proxmox in mini pc"
              description="None."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NONEIMG}
              isBlog={false}
              title="Home lab network"
              description="None."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NONEIMG}
              isBlog={false}
              title="Personal Domain"
              description="None."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
