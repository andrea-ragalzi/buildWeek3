import { Container, Row, Col } from "react-bootstrap";
import { MyFooter } from "./../components/MyFooter";
import { useEffect } from "react";
import { fetchExperiences } from "./../redux/actions/experiences";
import { useSelector } from "react-redux";
import type { RootState } from "./../redux/store/store";
import { store } from "./../redux/store/store";
import { Experience } from "../types/expCardTypes";
import LinkedinMain from "../components/LinkedinMain";
import BoxInfo from "../components/BoxInfo";

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
    <Container className="pageContainer">
      <Row>
        <Col xs={12} md={9} className="mainColumn">
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
              <div className="sectionContainer profileHero">
                <div className="profileImgs">
                  <img
                    src="https://picsum.photos/800/200"
                    className="profileBanner"
                    alt="banner"
                  />
                  <button className="profileButton">
                    <img
                      src="https://picsum.photos/800/200"
                      alt="profile"
                      className="profilePic"
                    ></img>
                  </button>
                </div>

                <Row className="profileHeroText">
                  <Col xs={8}>
                    <h2>Aonna Ragazzi</h2>
                    <p>
                      Managing Director at TNA Building Services Ltd --
                      Providing Building maintenance solutions to the block
                      management, social housing and commercial sectors,
                      operating across the country 24 hours a day.
                    </p>
                  </Col>
                  <Col xs={4}>
                    <ul>
                      <li>image : azienda</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs={12}>
              <div className="sectionContainer">
                <BoxInfo title="Esperienza" />
                <LinkedinMain />
                <LinkedinMain />
              </div>
            </Col>
            <Col xs={12}>
              <div className="sectionContainer">
                <BoxInfo title="Formazione" />
                <LinkedinMain />
                <LinkedinMain />
                <LinkedinMain />
              </div>
            </Col>
            <Col xs={12}>
              <div className="sectionContainer">
                <h2>Competenze</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div className="sectionContainer">
                <h2>Lingue</h2>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={3} className="d-none d-md-block">
          <Row className="g-3">
            <Col xs={12}>
              <div className="sectionContainer">
                <h2>Esperienza</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div className="sectionContainer">
                <h2>Esperienza</h2>
              </div>
            </Col>
            <Col xs={12}>
              <div className="sectionContainer">
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
