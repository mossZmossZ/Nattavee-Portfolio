import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, Everyone. I'm <span className="purple">Nattavee Narischat </span> from <span className="purple"> Bangkok, Thialand.</span>
            <br />
            I'm currently in my fourth year of <span className="purple">Computer Engineering</span> at 
            <br />
            from <span className="purple">King Mongkut's University of Technology North Bangkok</span>
            , and I'm really interested in <span className="purple">networking, cloud computing, and infrastructure. </span>
            <br />
            Beyond academia, I pursue these interests through hands-on <span className="purple">initiatives and collaborations. </span>
            My objective is to use my knowledge and enthusiasm to make a meaningful contribution to creative breakthroughs in these areas.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Teamwork and Collaboration
            </li>
            <li className="about-activity">
              <ImPointRight /> Flexibility
            </li>
            <li className="about-activity">
              <ImPointRight /> Curiosity
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Rome not built in a day"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
