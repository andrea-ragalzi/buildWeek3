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
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';


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
    <Container className="pageContainer" fluid>
      <Row>
        <Col xs={0} md={1} className="d-none d-md-flex"></Col>
        <Col md={1} className="d-none d-lg-flex"></Col>
        <Col xs={12} md={6}>
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
              <div style={{ width: '100%', backgroundColor: 'white', aspectRatio: '4/3' }} className="border border-1 border-secondary rounded-3">
                <div className="w-100 position-relative z-0 "><img src="https://picsum.photos/800/200" className="w-100 z-0" alt="banner" />
                  <button className="p-0 rounded-circle ms-4 profile-button" style={{ width: "152px", height: "152px" }}>
                    <img src="https://picsum.photos/800/200" className="w-100 h-100 rounded-circle" alt="profile"></img> 
                    </button>
                </div>

                <div className="mt-5 mx-4 row">

                  <div className="col-8">

                    <h2>Aonna Ragazzi</h2>
                    <p>Managing Director at TNA Building Services Ltd -- Providing Building maintenance solutions to the block management,
                      social housing and commercial sectors, operating across the country 24 hours a day.</p>
                  </div>
                  <div className="col-4">
                    <ul>
                      <li>image : azienda</li>
                    </ul>
                  </div>

                </div>


              </div>
            </Col>
            <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white' }} className="border border-1 border-secondary rounded-3">
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
        <Col xs={12} md={2} className="d-none d-md-block">
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
        <Col md={1} className="d-none d-md-flex"></Col>
        <Col md={1} className="d-none d-lg-flex"></Col>
      </Row>
      <Row>
        <MyFooter></MyFooter>
      </Row>
    </Container>
  );
};

export default Profile;