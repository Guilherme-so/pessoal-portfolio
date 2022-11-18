import { Col, Container, Row } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center justify-content-center">
          <Col sm={6}>
            <h1>Guilherme</h1>
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/guilherme-so/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img src="assets/img/nav-icon1.svg" alt="nav-icon1" />
              </a>
              <a href="https://github.com/Guilherme013S" target={"_blank"} rel="noreferrer">
                <img src="assets/img/github.svg" alt="nav-icon2" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
