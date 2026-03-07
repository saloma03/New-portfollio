import { Col, Row } from "react-bootstrap";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import PostgreSQL from "../../Assets/TechIcons/postgresql.svg";
import Angular from "../../Assets/TechIcons/angular.svg";
import DotNet from "../../Assets/TechIcons/dotnet.svg";
import HTML from "../../Assets/TechIcons/html.svg";
import css from "../../Assets/TechIcons/css.svg";

import Tailwind from "../../Assets/TechIcons/Tailwind.svg";


function Techstack() {
  return (
<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
  <Col xs={4} md={2} className="tech-icons">
    <img src={HTML} alt="html" />
    <div className="tech-icons-text">HTML5</div>
  </Col>

  <Col xs={4} md={2} className="tech-icons">
    <img src={css} alt="css" />
    <div className="tech-icons-text">CSS3</div>
  </Col>

  <Col xs={4} md={2} className="tech-icons">
    <img src={Javascript} alt="javascript" />
    <div className="tech-icons-text">JavaScript</div>
  </Col>

  <Col xs={4} md={2} className="tech-icons">
    <img src={Typescript} alt="typescript" />
    <div className="tech-icons-text">TypeScript</div>
  </Col>

  <Col xs={4} md={2} className="tech-icons">
    <img src={Angular} alt="angular" />
    <div className="tech-icons-text">Angular</div>
  </Col>

  <Col xs={4} md={2} className="tech-icons">
    <img src={ReactIcon} alt="react" />
    <div className="tech-icons-text">React</div>
  </Col>

  <Col xs={4} md={2} className="tech-icons">
    <img src={DotNet} alt=".net" />
    <div className="tech-icons-text">.NET / ASP.NET Core</div>
  </Col>

  <Col xs={4} md={2} className="tech-icons">
    <img src={SQL} alt="sql" />
    <div className="tech-icons-text">SQL</div>
  </Col>

  <Col xs={4} md={2} className="tech-icons">
    <img src={PostgreSQL} alt="postgresql" />
    <div className="tech-icons-text">PostgreSQL</div>
  </Col>

  <Col xs={4} md={2} className="tech-icons">
    <img src={Redis} alt="redis" />
    <div className="tech-icons-text">Redis</div>
  </Col>

  <Col xs={4} md={2} className="tech-icons">
    <img src={Docker} alt="docker" />
    <div className="tech-icons-text">Docker</div>
  </Col>

  <Col xs={4} md={2} className="tech-icons">
    <img src={Git} alt="git" />
    <div className="tech-icons-text">Git</div>
  </Col>

  <Col xs={4} md={2} className="tech-icons">
    <img src={Tailwind} alt="tailwind" />
    <div className="tech-icons-text">Tailwind CSS</div>
  </Col>
</Row>
  );
}

export default Techstack;
