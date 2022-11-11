import { Col } from "react-bootstrap"

interface ProjectCard {
    title: string,
    description: string,
    imgUrl: any,
}

export const ProjectCard = ({title, description, imgUrl}: ProjectCard) => {
  return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
    )
}

