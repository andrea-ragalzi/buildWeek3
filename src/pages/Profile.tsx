import { Container, Row, Col } from "react-bootstrap";
import { MyFooter } from './../components/MyFooter'
import { useEffect } from "react";
import { fetchExperiences } from './../redux/actions/experiences'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from './../redux/store/store'
import { store } from "./../redux/store/store"

const Profile = () => {
  const experiences = useSelector((state: RootState) => state.experience.experiences);

  useEffect(() => {
    store.dispatch(fetchExperiences('5d84937322b7b54d848eb41b'));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <Container className="pageContainer" fluid>
      <Row>
        <Col xs={12} md={8}>
          <Row className="g-3">
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'grey', aspectRatio: '4/3' }}>
                <h2>Hero</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'grey', aspectRatio: '4/3' }}>
                <h2>Esperienza</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'grey', aspectRatio: '4/3' }}>
                <h2>Formazione</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'grey', aspectRatio: '4/3' }}>
                <h2>Competenze</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'grey', aspectRatio: '4/3' }}>
                <h2>Lingue</h2>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4} className="d-none d-md-block">
          <Row className="g-3">
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'grey', aspectRatio: '4/3' }}>
                <h2>Esperienza</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'grey', aspectRatio: '4/3' }}>
                <h2>Esperienza</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'grey', aspectRatio: '4/3' }}>
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
