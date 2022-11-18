import { Col } from "react-bootstrap";

interface ProjectCard {
  title: string;
  description: string;
  imgUrl: any;
  link: string;
}

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  link,
}: ProjectCard) => {
  const handleredirect = (url: string) => {
    window.open(`${url}`);
  };

  return (
    <Col sm={6} md={4} onClick={() => handleredirect(link)}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
