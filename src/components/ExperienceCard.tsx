import { Experience } from "../types/expCardTypes";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import type { RootState } from "./../redux/store/store";

const ExperienceCard = ({
  role,
  company,
  startDate,
  endDate,
  description,
  area,
  image,
}: Experience) => {
  const finishDate: string = endDate ? endDate : "Presente";

  const selectedExperience = useSelector(
    (state: RootState) => state.experience.selected
  );

  return (
    <Row>
      <Col xs="2">
        <img src={image} alt="pic" className="rounded w-100" />
      </Col>
      <Col xs="10" className="p-0">
        <Container>
          <Row>
            <Col xs={12}>
              <h4>
                <strong>{role}</strong>
              </h4>
            </Col>
            <Col xs={12}>
              <p>
                {company} - {area}
              </p>
            </Col>
            <Col xs={12}>
              <p>{description}</p>
            </Col>
            <Col xs={12}>
              <p>{`${startDate} - ${finishDate}`}</p>
            </Col>
            <Col xs={12}>
              <p>{area}</p>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default ExperienceCard;
