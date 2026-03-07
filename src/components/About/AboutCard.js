import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Salma Ramadan</span>{" "}
            from <span className="purple">Cairo, Egypt</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Web Instructor</span> at{" "}
            <span className="purple">thaki</span>.
            <br />I graduated with a degree in 
            <span className="purple">Information Systems</span>.
            I am a passionate 
            <span className="purple">Front-End Developer</span> who enjoys building modern web applications using 
            <span className="purple">Angular</span>, 
            <span className="purple">JavaScript</span>, and other modern web technologies.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Salma</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
