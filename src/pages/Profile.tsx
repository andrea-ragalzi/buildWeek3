import { Container, Row, Col } from "react-bootstrap";
import { MyFooter } from "./../components/MyFooter";
import { useState, useEffect } from "react";
import { fetchExperiences } from "../redux/actions/experienceActions";
import { fetchProfile } from "../redux/actions/profileActions";
import { useSelector } from "react-redux";
import type { RootState } from "./../redux/store/store";
import { store } from "./../redux/store/store";
import BoxInfo from "../components/BoxInfo";
import { Modalbuttons } from "../components/Profilecomponents/Modalbuttons";
import { Ads } from "../components/Profilecomponents/Ads";
import { Info } from "../components/Profilecomponents/Info";
import { useParams } from "react-router-dom";

const Profile = () => {
  const dispatch = store.dispatch;
  const profile = useSelector((state: RootState) => state.profile.selected);
  const userExperiences = useSelector(
    (state: RootState) => state.experience.list
  );

  const params = useParams();
  const user: string = params.id!;

  useEffect(() => {
    dispatch(fetchProfile("me"));
    dispatch(fetchExperiences(profile!._id));
    checkexperiece();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

                <Row className="mt-5 mb-3 mx-3 row">
                  <div className="col-8">
                    <h2>
                      {profile?.name} {profile?.surname}
                    </h2>
                    <p>{profile?.title}</p>
                    <p>{profile?.area}</p>
                    <div>
                      <Modalbuttons />
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

            {profile ? <Info {...profile} /> : <></>}

            <Col xs={12}>
              <div className="sectionContainer">
                <h2>Esperienza</h2>
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

        <Ads />
      </Row>
      <Row>
        <MyFooter></MyFooter>
      </Row>
    </Container>
  );
};

export default Profile;
