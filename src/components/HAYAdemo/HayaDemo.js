import React, { useState, useEffect } from "react";
import { Container} from "react-bootstrap";

import Particle from "../Particle";

function HayaDemos() {
  const [videoURL, setVideoURL] = useState("");
  useEffect(() => {
    fetchVideo();
  }, []);

  const fetchVideo = async () => {
    try {
      const response = await fetch("http://localhost:8000/video/CPF-AI-project.mp4");
      if (response.ok) {
        setVideoURL(URL.createObjectURL(await response.blob()));
      } else {
        console.error("Failed to fetch video:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching video:", error);
    }
  };
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
        <Container>
        <div>
          {videoURL && (
            <video width="800" controls>
              <source src={videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {!videoURL && <p>Loading...</p>}
        </div>
      </Container>
      </Container>
    </Container>
  );
}

export default HayaDemos;