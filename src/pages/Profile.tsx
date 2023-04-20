import { Container, Row, Col } from "react-bootstrap";
import { MyFooter } from "./../components/MyFooter";
import ExperienceCard from "../components/ExperienceCard";
import { Modalbuttons } from "../components/Profilecomponents/Modalbuttons";
import { Ads } from "../components/Profilecomponents/Ads";
import { Info } from "../components/Profilecomponents/Info";

import { store } from "./../redux/store/store";
import type { RootState } from "./../redux/store/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { fetchExperiences } from "../redux/actions/experienceActions";
import { fetchMyProfile, fetchProfile } from "../redux/actions/profileActions";

const Profile = () => {
  const dispatch = store.dispatch;
  const profile = useSelector((state: RootState) => state.profile.selected);
  const myProfile = useSelector((state: RootState) => state.profile.me);
  const userExperiences = useSelector(
    (state: RootState) => state.experience.list
  );

  const [isItMe, setIsItMe] = useState(false);

  const modify: string = (isItMe === true ? 'd-inline-block' : 'd-none')

  const params = useParams();
  const userId: string = params.id!;

  useEffect(() => {
    dispatch(fetchMyProfile());
    dispatch(fetchProfile(userId));
    if(userId==='me'){
      dispatch(fetchExperiences(myProfile!._id));
      setIsItMe(true);
    }
    else{
      dispatch(fetchExperiences(userId));
      setIsItMe(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  useEffect(()=>{    
    dispatch(fetchMyProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile])

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
              <Row>
                <Col xs={12}>
                <h2>Esperienza</h2>
                </Col>
                {userExperiences.length > 0 
                ? (
                <>
                {userExperiences.map((exp) => {
                  return (
                  <Col xs={12} key={exp._id}>
                    <ExperienceCard {...exp}/>
                  </Col>)}
                  )} 
                </>)
                : (<Col xs={12}><h2>Ancora nessuna esperienza!</h2></Col>)}
              </Row>
              </div>
            </Col>
            <Col xs={12}>
              <div className="sectionContainer">
                <Row>
                  <Col xs={12}>
                  <h2>Lingue</h2>
                </Col>
              </Row>
              </div>
            </Col>
          </Row>
        </Col>

        <Ads />
      </Row>
      <Row>
        <MyFooter/>
      </Row>
    </Container>
  );
};

export default Profile;
