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
import { useEffect } from "react";
import { fetchExperiences } from "../redux/actions/experienceActions";
import { fetchMyProfile, fetchProfile } from "../redux/actions/profileActions";
import ExperienceSection from "../components/Profilecomponents/ExperienceSection";

const Profile = () => {
  const dispatch = store.dispatch;
  const profile = useSelector((state: RootState) => state.profile.selected);
  const myProfile = useSelector((state: RootState) => state.profile.me);
  const userExperiences = useSelector(
    (state: RootState) => state.experience.list
  );

  const params = useParams();
  const userId: string = params.id!;

  useEffect(() => {

    dispatch(fetchMyProfile());
    dispatch(fetchProfile(userId));

    if (userId === "me") {
      dispatch(fetchExperiences("me"));
    } else {
      dispatch(fetchExperiences(userId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(fetchMyProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile || myProfile]);

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
                      src={profile?.image}
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
                      <Modalbuttons {...myProfile!} />
                    </div>
                  </div>
                </Row>
              </div>
            </Col>
            <Col xs={12}>
              {profile ? <Info {...profile} /> : <></>}

              <div className="sectionContainer">
                <ExperienceSection {...myProfile!} />
                {userExperiences.length > 0 ? (
                  <>
                    {userExperiences
                      .slice()
                      .reverse()
                      .map((exp) => {
                        return (
                          <Col xs={12} key={exp._id}>
                            <ExperienceCard {...exp} />
                          </Col>
                        );
                      })}
                  </>
                ) : (
                  <Col xs={12}>
                    <h2>Ancora nessuna esperienza!</h2>
                  </Col>
                )}
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
        <MyFooter />
      </Row>
    </Container>
  );
};

export default Profile;
