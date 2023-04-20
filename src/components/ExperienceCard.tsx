import { Experience } from "../types/expCardTypes";

import { Container, Row, Col } from "react-bootstrap";
import { employmentTime } from "../helpers";
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
        <img src={image} alt="pic" className="rounded-5 mx-4" />
      </Col>
      <Col xs="10" className="p-0">
        <Container>
          <Row>
            <Col></Col>
            <Col></Col>
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
              <p>{`${startDate} - ${endDate} · ${employmentTime(
                startDate,
                finishDate
              )}`}</p>
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
