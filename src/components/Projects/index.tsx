import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  const projects = [
    {
      title: "FrontEnd",
      description: "Reactjs",
      imgUrl: "/assets/img/project-img1.png",
    },
    {
      title: "FrontEnd",
      description: "Reactjs",
      imgUrl: "/assets/img/project-img1.png",
    },
    {
      title: "FrontEnd",
      description: "Reactjs",
      imgUrl: "/assets/img/project-img1.png",
    },
    {
      title: "FrontEnd",
      description: "Reactjs",
      imgUrl: "/assets/img/project-img1.png",
    },
    {
      title: "FrontEnd",
      description: "Reactjs",
      imgUrl: "/assets/img/project-img1.png",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                  <h2>Projetos</h2>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum, veritatis.
                  </p>
                </div>
              )}
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"></Tab.Pane>
                <Tab.Pane eventKey="third"></Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src="/assets/img/color-sharp2.png"
        alt="background img"
      />
    </section>
  );
}
