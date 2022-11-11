import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navegation = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrolled = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", scrolled);

    return () => window.removeEventListener("scroll", scrolled);
  }, []);

  function updateActiveLink(value: string) {
    setActiveLink(value);
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">Guilherme</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toogle-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink == "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink == "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink == "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => updateActiveLink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="#">
                <img src="assets/img/nav-icon1.svg" alt="nav-icon1" />
              </a>
              <a href="#">
                <img src="assets/img/nav-icon2.svg" alt="nav-icon2" />
              </a>
              <a href="#">
                <img src="assets/img/nav-icon3.svg" alt="nav-icon3" />
              </a>

              <button className="vvd">
                <span>let's connect</span>
              </button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegation;
