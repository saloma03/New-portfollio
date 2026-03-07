import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Eshop from "../../Assets/Projects/Eshop.png";
import EcommerceBackend from "../../Assets/Projects/EcommerceBackend.jpg";
import gitExplorer from "../../Assets/Projects/gitExplorer.png";
import Ecommerce from "../../Assets/Projects/Ecommerce.png";
import events from "../../Assets/Projects/events.png";
import Roomly from "../../Assets/Projects/Roomly.png";

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
              imgPath={Ecommerce}
              isBlog={false}
              title="Ecommerce"
              description=" e-commerce platform with SSR to improve initial load time and
                                          SEO, featuring secure authentication, a responsive UI, and a fully managed cart system."
              ghLink="https://github.com/saloma03/E-commerce"
              demoLink="https://66e04c47f9201430036a0043--storied-cannoli-406da5.netlify.app/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Roomly}
              isBlog={false}
              title="Roomly"
              description="Contributed to a room-rental platform with interactive map search, cloud media upload, and
visual analytics dashboards."
              ghLink="https://github.com/Al-Mansori/Roomly"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gitExplorer}
              isBlog={false}
              title="GitHub User Explorer"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/saloma03/github-user-explorer"
              demoLink="https://unrivaled-cendol-421626.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Eshop}
              isBlog={false}
              title="EshopModularMonoliths"
              description="Designed a scalable e-commerce platform using .NET 8 with Modular Monolith, CQRS, DDD, async messaging
(RabbitMQ), Redis caching, and full Dockerized infrastructure.
"
              ghLink="https://github.com/saloma03/EshopModularMonoliths"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={events}
              isBlog={false}
              title="Events system"
              description="Built a full-stack ASP.NET Core MVC event booking system using 3-Tier Architecture, SQL Server, EF Core, and ASP.NET
Identity with role-based access control"
              ghLink="https://github.com/saloma03/Events-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={EcommerceBackend}
              isBlog={false}
              title="wep api E-commerce project"
              description="Developing .NET e-commerce application using layered architecture, implementing core domain logic for products,
cart, and orders with strong OOP principles."
              ghLink="https://github.com/saloma03/E-commerce-"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
