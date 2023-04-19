import { Container, Row, Col, Button } from "react-bootstrap";
import { MyFooter } from "./../components/MyFooter";
import { useState, useEffect } from "react";
import {
  fetchExperiences,
  addExperience,
  deleteExperience,
  fetchExperience,
  editExperience,
} from "./../redux/actions/experiences";
import { fetchProfile, editProfile, fetchProfiles } from "../redux/actions/profileActions";
import { useSelector } from "react-redux";
import type { RootState } from "./../redux/store/store";
import { store } from "./../redux/store/store";
import { Experience } from "../types/expCardTypes";
import LinkedinMain from "../components/LinkedinMain";
import BoxInfo from "../components/BoxInfo";


const Profile = () => {
  const dispatch = store.dispatch;
  const profile = useSelector(
    (state: RootState) => state.profile.selected
  );
  const userExperiences = useSelector(
    (state: RootState) => state.experience.list
  );
  const selectedExperience = useSelector(
    (state: RootState) => state.experience.selected)

  useEffect(() => {
    dispatch(fetchProfile('me'));
    dispatch(fetchExperiences(profile!._id!));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePut = () => {
    const profile_tmp = JSON.parse(JSON.stringify(profile));
    profile_tmp.bio = 'ciao sara';
    dispatch(editProfile(profile_tmp!));
  }

  const handleAddExp = () => {
    const roles = ["developer", "engineer", "manager", "designer"];
    const companies = ["Google", "Apple", "Microsoft", "Amazon"];
    const areas = ["San Francisco", "New York", "London", "Tokyo"];
    const descriptions = [
      "Developed new features", "Managed a team of developers",
      "Designed UI/UX", "Optimized performance"];
    const endYears = ["2020", "2021", "2022"]
    const startYears = ["2010", "2011", "2012"];
    const months = [
      "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const days = Array.from({ length: 28 }, (_, index) => index + 1);

    const startDate = `${startYears[Math.floor(Math.random() * startYears.length)]
      }-${months[Math.floor(Math.random() * months.length)]}-${days[Math.floor(Math.random() * days.length)]}`;
    const endDate = `${endYears[Math.floor(Math.random() * endYears.length)]
      }-${months[Math.floor(Math.random() * months.length)]}-${days[Math.floor(Math.random() * days.length)]}`;

    const exp: Experience = {
      role: roles[Math.floor(Math.random() * roles.length)],
      company: companies[Math.floor(Math.random() * companies.length)],
      startDate: startDate,
      endDate: endDate,
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      area: areas[Math.floor(Math.random() * areas.length)],
      username: "andrearagalzi",
      image: "https://picsum.photos/48/48"
    };

    dispatch(addExperience(profile!._id, exp));
  }

  const handleDeleteExp = () => {
    dispatch(deleteExperience(profile!._id, '6440504f405be40014e76715'));
  }

  const handleEditExp = () => {
    dispatch(fetchExperience(profile!._id, '64405428405be40014e7671c'));
    dispatch(editExperience(profile!._id, selectedExperience!));
  }

  return (
    <Container className="pageContainer">
      <Row>
        <Col xs={12} md={9} className="mainColumn">
          <Row className="g-3">
            <Button
              className="btn btn-primary"
              onClick={handlePut}
            >EDIT PROFILE</Button>
            <Button
              className="btn btn-primary"
              onClick={handleAddExp}
            >ADD EXPERIENCE</Button>
            <Button
              className="btn btn-primary"
              onClick={handleDeleteExp}
            >DELETE EXPERIENCE</Button>
            <Button
              className="btn btn-primary"
              onClick={handleEditExp}
            >EDIT EXPERIENCE</Button>
            {userExperiences?.length <= 0 && <p>no experiences</p>}
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

                <Row className="mt-5 mx-4 row">

                {profile? <div className="col-8">

                    <h2>{profile.name} {profile.surname} </h2>
                    <p>{profile.title}</p>
                    <p>{profile.area}</p>
                  </div>:<></>}
                  <Col className="col-4">
                    <ul>
                      <li>image : azienda</li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
           {profile? <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white' }} className="border border-1 border-secondary rounded-3">
                <BoxInfo title='Informazioni' />
                <p>{profile.bio}</p>
              </div>
            </Col>:<></>}
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