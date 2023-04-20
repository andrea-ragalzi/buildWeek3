import { Container, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react"
import { Postmaker } from "../components/Postmaker";
import { useSelector } from "react-redux";
import type { RootState } from "./../redux/store/store";
import { store } from "./../redux/store/store";
import { fetchProfile } from "../redux/actions/profileActions";
import { Link } from "react-router-dom"

const Home = () => {
  const dispatch = store.dispatch;
  const [Showlist, setShowlist] = useState(false)
  const myProfile = useSelector(
    (state: RootState) => state.profile.me
  );

  useEffect(() => {
    dispatch(fetchProfile('me'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="pageContainer ">
      <Row className="g-3">
        <Col lg={2} md={4} xs={12} className="h-100" >
          <div className="sectionContainer">
          <img className="homeProfileBanner rounded w-100 " src="https://picsum.photos/200/300" alt="Home profile" />
            <Link className="linkProfileCard" to="/profile/me">
              <div>
                <button className="homeprofileButton">
                  <Image
                    src={myProfile?.image}
                    alt="profile"
                    className="profilePic"
                  ></Image>
                </button>
              </div>
              <h6 className="linkBehave">{myProfile?.name} {myProfile?.surname}</h6>
            </Link>
            <hr className="my-2"></hr>
            <div className="text-start ms-2 list-unstyled Second-List-collapse fw-bold Homelist border-secondary">
              Analisi e strumenti <br></br>
              <p className="fw-normal Collapse-p text-secondary mb-2">
                200 visualizzazioni del profilo{" "}
              </p>
            </div>
            <hr />
            <div className="Benvenuto text-start ms-2 list-unstyled Second-List-collapse Homelist border-secondary">
              Accedi a strumenti e informazioni in esclusiva <br></br>
              <p className="fw-bold   text-secondary mb-2">
                🟨Prova Premium gratis {" "}
              </p>
            </div>
            <hr className="my-2"></hr>
            <div className="Benvenuto mb-2 text-start ms-2 list-unstyled Second-List-collapse fw-bold Homelist border-secondary">
              <i className="bi bi-bookmark-fill me-1"></i> I miei elementi <br></br>
            </div>
          </div>
          <div className="border rounded p-0 w-100 h-100 bg-white">
            <ul className="list-unstyled HomeList fw-bold text-primary ms-2">
              <li className="mb-3 mt-2">Gruppi</li>
              <li className="mb-3 d-flex justify-content-between">Eventi <i className="bi bi-plus-lg text-black me-2"></i> </li>
              <li>Hashtag seguiti</li>
            </ul>
            <hr />
            <h6 className="text-center mb-3 text-secondary">Scopri di più</h6>
          </div>
        </Col>




        <Postmaker />



        <Col lg={3} md={8} xs={12} className="offset-0 offset-md-4 offset-lg-0">

          <div>
            <div className="sectionContainer ">
              <b className="bBottom text-secondary ms-2 ">
                LinkedIn Notizie
              </b>
              <div>
                <ul className=" Secondhover">
                  <li className="Second-List-collapse mt-1 fw-bold Homelist pe-3">
                    Le Top Companies del 2023 in Italia <br></br>
                    <p className="fw-normal Collapse-p text-secondary">
                      Notizie principali • 534 lettori{" "}
                    </p>
                  </li>
                  <li className="Second-List-collapse fw-bold Homelist">
                    Ucraina: gli ultimi aggiornamenti <br></br>
                    <p className="fw-normal Collapse-p text-secondary">
                      6 ore fa • 414 lettori{" "}
                    </p>
                  </li>
                  <li className="Second-List-collapse fw-bold Homelist">
                    Che cosa succede al Salone del Mobile <br></br>
                    <p className="fw-normal Collapse-p text-secondary">
                      1 ora fa • 364 lettori{" "}
                    </p>
                  </li>
                  <li className="Second-List-collapse fw-bold Homelist">
                    Un nuovo modello contrattuale per la ricerca <br></br>
                    <p className="fw-normal Collapse-p text-secondary">
                      19 ore fa
                    </p>
                  </li>
                  <li className="Second-List-collapse fw-bold Homelist">
                    Learning Solutions <br></br>
                    <p className="fw-normal Collapse-p text-secondary">
                      3 ore fa • 164 lettori
                    </p>
                  </li>


                  <div className={Showlist ? "Homecollapse Show" : "Homecollapse"} ><li className="Second-List-collapse fw-bold Homelist">
                    Apple sfida le banche <br></br>
                    <p className="fw-normal Collapse-p text-secondary">
                      6 ore fa • 212 lettori{" "}
                    </p>
                  </li>
                    <li className="Second-List-collapse fw-bold Homelist">
                      SONDAGGIO: cosa guardi di un'azienda quando cerchi lavoro? <br></br>
                      <p className="fw-normal Collapse-p text-secondary">
                        5 giorni fa • 606 lettori{" "}
                      </p>
                    </li>
                    <li className="Second-List-collapse fw-bold Homelist">
                      Frena il venture capital <br></br>
                      <p className="fw-normal Collapse-p text-secondary">
                        1 giorno fa
                      </p>
                    </li>
                    <li className="Second-List-collapse fw-bold Homelist">
                      L'importanza di mettersi in ascolto <br></br>
                      <p className="fw-normal Collapse-p text-secondary">
                        1 giorno fa
                      </p>
                    </li>
                    <li className="Second-List-collapse fw-bold Homelist">
                      Arrivano i tutor in classe<br></br>
                      <p className="fw-normal Collapse-p text-secondary">
                        1 ora fa
                      </p>
                    </li>
                    <li className="Second-List-collapse fw-bold Homelist">
                      Learning Solutions <br></br>
                      <p className="fw-normal Collapse-p text-secondary">
                        3 ore fa • 164 lettori
                      </p>
                    </li></div>


                </ul>
              </div>
              <button onClick={() => { setShowlist(!Showlist) }} className="ms-2 Btnseemore"> {Showlist ? "vedi meno" : "vedi piu"} </button>
            </div>
          </div>
          <div>HOLA sono futer dio po</div>

        </Col>
      </Row>
    </Container >
  );
};

export default Home;






/* 

*/