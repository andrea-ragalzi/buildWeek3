import { Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const PNF = () => {
  return (
    <Container fluid className="container404">
      <Row className="row404-1">
        <Col>
          <div className="error404">
            <h1>Page not found</h1>
            <h3>
              Uh oh, we can't seem to find the page you're looking for. Try
              going back to
              <Link to={"/"} className="strong404">
                <strong> Home </strong>
              </Link>
              for more information.
            </h3>
            <Link to="/">
             <button className="btnFeed">Go to your feed</button> 
            </Link>
          </div>
        </Col>
      </Row>
      <Row className="footer404">
        <Image src="/img/pagenotfound.png" alt="bg404" />
      </Row>
    </Container>
  );
};

export default PNF;
