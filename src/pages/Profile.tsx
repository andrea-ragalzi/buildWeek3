import { Container, Row, Col } from "react-bootstrap";
import { MyFooter } from "./../components/MyFooter";
import { useEffect } from "react";
import { fetchExperiences } from "./../redux/actions/experiences";
import { fetchProfile, fetchProfiles } from "../redux/actions/profileActions";
import { useSelector } from "react-redux";
import type { RootState } from "./../redux/store/store";
import { store } from "./../redux/store/store";
import { Experience } from "../types/expCardTypes";
import LinkedinMain from "../components/LinkedinMain";
import BoxInfo from "../components/BoxInfo";

const Profile = () => {
  const dispatch = store.dispatch;
  const profile = useSelector(
    (state: RootState) => state.profile.profile
  );
  const userExperiences = useSelector(
    (state: RootState) => state.experience.experiences
  );

  useEffect(() => {
      dispatch(fetchProfile('643d139522a6ab00141a8568'));
      dispatch(fetchExperiences("63fc85ebf193e60013807f65"));
      dispatch(fetchProfiles())
      console.log('in profile', userExperiences);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="pageContainer" fluid>
      <Row>
        <Col xs={0} md={1} className="d-none d-md-flex"></Col>
        <Col md={1} className="d-none d-lg-flex"></Col>
        <Col xs={12} md={6}>
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
              <div style={{ width: '100%', backgroundColor: 'white', aspectRatio: '4/3' }} className="border border-1 border-secondary rounded-3">
                <div className="w-100 position-relative z-0 "><img src="https://picsum.photos/800/200" className="w-100 z-0" alt="banner" />
                  <button className="p-0 rounded-circle ms-4 profile-button" style={{ width: "152px", height: "152px" }}> <img src="https://picsum.photos/800/200" className="w-100 h-100 rounded-circle" alt="profile"></img> </button>
                </div>

                <div className="mt-5 mx-4 row">

                {profile? <div className="col-8">

                    <h2>{profile.name} {profile.surname} </h2>
                    <p>{profile.title}</p>
                    <p>{profile.area}</p>
                  </div>:<></>}
                  <div className="col-4">
                    <ul>
                      <li>image : azienda</li>
                    </ul>
                  </div>

                </div>


              </div>
            </Col>
           {profile? <Col xs={12}>
              <div style={{ width: '100%', backgroundColor: 'white' }} className="border border-1 border-secondary rounded-3">
                <BoxInfo title='Informazioni' />
                <p>{profile.bio}</p>
              </div>
            </Col>:<></>}
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