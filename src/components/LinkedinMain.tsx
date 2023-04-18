import { Col, Row } from "react-bootstrap";
import ExpCard from "./ExpCard";

const LinkedinMain = () => {
    return (
        <>
        <Row>
        <Col xs='2'>
        <img src="https://placekitten.com/g/80" alt="pic" className="rounded-5 mx-4" />
        </Col>
        <Col xs='10' className="p-0">
        <ExpCard
        company={"Epicode"}
        position={"Rome"}
        employmentType={""}
        startDate={"2 "}
        endDate={"3 "}
        location={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
        skills={["Html", "Css", "JS", "React"]}
      /></Col></Row>
          </>

    )
}

export default LinkedinMain