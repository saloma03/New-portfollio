import { Col, Row } from "react-bootstrap";
import Windows from "../../Assets/TechIcons/windows.svg";

import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import visual from "../../Assets/TechIcons/visual-studio.svg";
import chatgpt from "../../Assets/TechIcons/chatgpt-icon.svg";
import claude from "../../Assets/TechIcons/claude-color.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Windows} alt="macOs" className="tech-icon-images" />
        <div className="tech-icons-text">Windows</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={visual} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Visual studio</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons ">
        <img src={claude} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Claude</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chatgpt} alt="go" className="tech-icon-images" />
        <div className="tech-icons-text">Chatgpt</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
