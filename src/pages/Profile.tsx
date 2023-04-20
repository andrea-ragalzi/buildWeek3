import { Container, Row, Col, Button } from "react-bootstrap";
import { MyFooter } from "./../components/MyFooter";
import { useState, useEffect } from "react";
import {
  fetchExperiences,
  addExperience,
  deleteExperience,
  fetchExperience,
  editExperience,
} from "../redux/actions/experienceActions";
import {
  fetchProfile,
  editProfile,
  fetchProfiles,
} from "../redux/actions/profileActions";
import { useSelector } from "react-redux";
import type { RootState } from "./../redux/store/store";
import { store } from "./../redux/store/store";
import BoxInfo from "../components/BoxInfo";
import { Modalbuttons } from "../components/Profilecomponents/Modalbuttons";


const Profile = () => {
  const dispatch = store.dispatch;
  const [showexperience, setshowexperience] = useState(false);
  const profile = useSelector((state: RootState) => state.profile.me);
  const userExperiences = useSelector(
    (state: RootState) => state.experience.list
  );
  const selectedExperience = useSelector(
    (state: RootState) => state.experience.selected
  );

  const checkexperiece = () => {
    if (userExperiences.length <= 0) {
    } else {
      setshowexperience(!showexperience);
    }
  };

  useEffect(() => {
    dispatch(fetchProfile("me"));
    dispatch(fetchExperiences("me"));
    checkexperiece();
  }, []);

  console.log(userExperiences);
  return (
    <Container className="pageContainer">
      <Row>
        <Col xs={12} md={9} className="mainColumn">
          <Row className="g-3">
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

                <Row className="mt-5 mx-3 row">
                  <div className="col-8">
                    <h2>
                      {profile?.name} {profile?.surname}{" "}
                    </h2>
                    <p>{profile?.title}</p>
                    <p>{profile?.area}</p>
                    <div>
                      <Modalbuttons />{" "}
                    </div>
                  </div>

                  <Col className="col-4">
                    <ul>
                      <li>image : azienda</li>
                    </ul>
                  </Col>

                </Row>
              </div>
            </Col>
            {profile?.bio ? (
              <Col xs={12}>
                <div
                  style={{ width: "100%", backgroundColor: "white" }}
                  className="border border-1 border-secondary rounded-3"
                >
                  <BoxInfo title="Informazioni" />
                  <p className="ms-3">{profile.bio} </p>
                </div>
              </Col>
            ) : (
              <></>
            )}
            <Col xs={12}>
              <div className="sectionContainer">
                <BoxInfo title="Esperienza" />
              </div>
            </Col>
            <Col xs={12}>
              <div className="sectionContainer">
                <BoxInfo title="Formazione" />
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
