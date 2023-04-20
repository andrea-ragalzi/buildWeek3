import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const PNF = () => {
  return (
    <Container fluid className="container404">
      <Row className="row404-1">
        <Col>
        <div className="error404">
          <h1>Page not found</h1>
          <h3>
            Uh oh, we can't seem to find the page you're looking for. Try going
            back to the previous page or see our
            <a href="#">
              <strong> Help center </strong>
            </a>
            for more information.
          </h3>
          <Link to="/" className="bntFeed">Go to your feed</Link>
        </div>
        </Col>
        </Row>
      <Row className="footer404"> <img src="C:\Users\Dekan\OneDrive\Desktop\buildWeek3\src\assets\img\bg404.png" alt="bg404"/></Row>
    </Container>
  );
};

export default PNF;
