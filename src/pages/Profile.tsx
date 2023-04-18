import { Container, Row, Col } from "react-bootstrap";
import { MyFooter } from "./../components/MyFooter";
import { useEffect } from "react";
import { fetchExperiences } from "./../redux/actions/experiences";
import { useSelector } from "react-redux";
import type { RootState } from "./../redux/store/store";
import { store } from "./../redux/store/store";
import { Experience } from "../types/expCardTypes";

const Profile = () => {
  const userExperiences = useSelector(
    (state: RootState) => state.experience.experiences
  );

  useEffect(() => {
    store.dispatch(fetchExperiences("1d84937222b7b54d838ed31a"));
    console.log("nello state, da profile:", userExperiences);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="pageContainer" fluid>
      <Row>
        <Col xs={12} md={8}>
          <Row className="g-3">
            {userExperiences.length > 0 &&
              userExperiences.map((exp: Experience) => {
                return (
                  <div>
                    <p>{exp.description}</p>
                    <p>ciao</p>
                  </div>
                );
              })}
            {userExperiences.length <= 0 && <p>no experiences</p>}
            <Col xs={12}>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "grey",
                  aspectRatio: "4/3",
                }}
              >
                <h2>Hero</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "grey",
                  aspectRatio: "4/3",
                }}
              >
                <h2>Esperienza</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "grey",
                  aspectRatio: "4/3",
                }}
              >
                <h2>Formazione</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "grey",
                  aspectRatio: "4/3",
                }}
              >
                <h2>Competenze</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "grey",
                  aspectRatio: "4/3",
                }}
              >
                <h2>Lingue</h2>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4} className="d-none d-md-block">
          <Row className="g-3">
            <Col xs={12}>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "grey",
                  aspectRatio: "4/3",
                }}
              >
                <h2>Esperienza</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "grey",
                  aspectRatio: "4/3",
                }}
              >
                <h2>Esperienza</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div
                style={{
                  width: "100%",
                  backgroundColor: "grey",
                  aspectRatio: "4/3",
                }}
              >
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
  );
};

export default Profile;
