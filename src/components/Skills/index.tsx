import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__slideInRight" : ""
                  }
                >
                  <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>
                      HTML, CSS(Styled-Components,CSS-Modules,Tailwind-CSS),
                      Python, Javascript, Typescript, ReactJs, NextJs, Recoil, 
                      Redux, Rest-API, GraphQl, NodeJs, Expressjs, Dart, Flutter{" "}
                    </p>
                    <Carousel
                      responsive={responsive}
                      infinite={true}
                      className="skill-slider"
                    >
                      <div className="item">
                        <img src="/assets/img/meter1.svg" alt="image" />
                        <h5>Frontend</h5>
                      </div>
                      <div className="item">
                        <img src="/assets/img/meter2.svg" alt="image" />
                        <h5>Backend</h5>
                      </div>
                      <div className="item">
                        <img src="/assets/img/meter3.svg" alt="image" />
                        <h5>Mobile</h5>
                      </div>
                      {/* <div className="item">
                  <img src="/assets/img/meter1.svg" alt="image" />
                  <h5>Web developer</h5>
                </div> */}
                    </Carousel>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src="/assets/img/color-sharp.png"
        alt=""
      />
    </section>
  );
};
