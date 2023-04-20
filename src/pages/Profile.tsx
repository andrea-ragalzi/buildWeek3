import { Container, Row, Col, Button } from "react-bootstrap";
import { MyFooter } from "./../components/MyFooter";
import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Collapse } from "react-bootstrap";
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
import ListGroup from 'react-bootstrap/ListGroup';
import BoxInfo from "../components/BoxInfo";

const Profile = () => {
  const dispatch = store.dispatch;
  const [showexperience, setshowexperience] = useState(false);
  const [open, setOpen] = useState(false);
  const [opensecond, setOpensec] = useState(false);
  const [openthird, setOpenthir] = useState(false);
  const [lgShow, setLgShow] = useState(false);
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
                  {profile ? (
                    <div className="col-8">
                      <h2>
                        {profile.name} {profile.surname}{" "}
                      </h2>
                      <p>{profile.title}</p>
                      <p>{profile.area}</p>
                      <div>
                        {" "}
                        <button onClick={() => setLgShow(true)}>
                          Aggiungi sezione del profilo
                        </button>{" "}
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}

                  <Col className="col-4">
                    <ul>
                      <li>image : azienda</li>
                    </ul>
                  </Col>
                  <Modal
                    show={lgShow}
                    onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-modal-sizes-title-lg">
                        Aggiungi sezione al profilo
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div>
                        <button
                          className="unstyledbtn"
                          onClick={() => setOpen(!open)}
                          aria-controls="example-collapse-text"
                          aria-expanded={open}
                        >
                          Sezioni Principali
                        </button>
                        <Collapse in={open}>
                          <ListGroup id="example-collapse-text">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item><button>Aggiungi Competenze</button></ListGroup.Item>
                          </ListGroup>


                        </Collapse>
                      </div>
                      <div>
                        <button
                          className="unstyledbtn"
                          onClick={() => setOpensec(!opensecond)}
                          aria-controls="example-collapse-text"
                          aria-expanded={opensecond}
                        >
                          Sezioni consigliate
                        </button>
                        <Collapse in={opensecond}>
                        <ListGroup id="example-collapse-text">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                          </ListGroup>

                        </Collapse>
                      </div>
                      <div>
                        <button
                          className="unstyledbtn"
                          onClick={() => setOpenthir(!openthird)}
                          aria-controls="example-collapse-text"
                          aria-expanded={openthird}
                        >
                          Altro
                        </button>
                        <Collapse in={openthird}>
                        <ListGroup id="example-collapse-text">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                          </ListGroup>

                        </Collapse>
                      </div>
                    </Modal.Body>
                  </Modal>
                </Row>
              </div>
            </Col>
            {profile ? (
              <Col xs={12}>
                <div
                  style={{ width: "100%", backgroundColor: "white" }}
                  className="border border-1 border-secondary rounded-3"
                >
                  <BoxInfo title="Informazioni" />
                  <p>{profile.bio}</p>
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
