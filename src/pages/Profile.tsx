import { Container, Row, Col } from "react-bootstrap";
import { MyFooter } from './../components/MyFooter'
import LinkedinMain from "../components/LinkedinMain";
import BoxInfo from "../components/BoxInfo";

const Profile = () => {
  return (
    <Container className="pageContainer" fluid>
      <Row>
        <Col xs={12} md={8}>
          <Row className="g-3">
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white', aspectRatio: '4/3' }} className="border border-1 border-secondary rounded-3">
                <h2>Hero</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white'}} className="border border-1 border-secondary rounded-3">
              <BoxInfo title='Esperienza' />
              <LinkedinMain />
              <hr />
              <LinkedinMain />
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white', aspectRatio: '4/3' }} className="border border-1 border-secondary rounded-3">
              <BoxInfo title='Formazione' />
              <LinkedinMain />
              <hr />
              <LinkedinMain />
              <hr />
              <LinkedinMain />
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white', aspectRatio: '4/3' }} className="border border-1 border-secondary rounded-3">
                <h2>Competenze</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white', aspectRatio: '4/3' }} className="border border-1 border-secondary rounded-3">
                <h2>Lingue</h2>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4} className="d-none d-md-block">
          <Row className="g-3">
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white', aspectRatio: '4/3' }}>
                <h2>Esperienza</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white', aspectRatio: '4/3' }}>
                <h2>Esperienza</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white', aspectRatio: '4/3' }}>
                <h2>Esperienza</h2>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <MyFooter></MyFooter>
      </Row>
    </Container>
  )
};

export default Profile;
