import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Postmaker } from "../components/HomeComponents/Postmaker";
import { useSelector } from "react-redux";
import type { RootState } from "./../redux/store/store";
import { store } from "./../redux/store/store";
import { fetchMyProfile } from "../redux/actions/profileActions";
import { MiniFooter } from "../components/MyFooter";
import SinglePost from "../components/HomeComponents/SinglePost";
import { fetchPosts } from "../redux/actions/feedActions";
import HomeProfileCard from "../components/HomeProfileCard";
import { CustomNavbar } from "../components/CustomNavbar";

const Home = () => {
  const dispatch = store.dispatch;
  const [Showlist, setShowlist] = useState(false);
  const [counterPosts, setCounterPosts] = useState(30);
  const allPosts = useSelector((state: RootState) => state.feed.list);

  useEffect(() => {
    dispatch(fetchMyProfile());
    dispatch(fetchPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="pageContainer ">
      <CustomNavbar />
      <Row>
        <Col xs={12} md={4} lg={3} className="sxColumn">
          <Row>
            <HomeProfileCard />
            <div className="sectionContainer">
              <Col xs={12}>
                <div className="secondElement">
                  <p>Gruppi</p>
                  <p>
                    Eventi <i className="bi bi-plus-lg text-black"></i>
                  </p>
                  <p>Hashtag seguiti</p>
                </div>
                <hr />
                <Row className="w-100 seeMore">
                  <p>
                    <b>Scopri di più</b>
                  </p>
                </Row>
              </Col>
            </div>
          </Row>
        </Col>

        <Col xs={12} md={8} lg={5} className="mainColumn">
          <Row>
            <Postmaker />
          </Row>
          <Row>
            {allPosts.length > 0 ? (
              <>
                {allPosts
                  .slice()
                  .reverse()
                  .slice(0, counterPosts)
                  .map((post) => {
                    return (
                      <SinglePost
                        key={post._id}
                        _id={post._id}
                        image={post.image}
                        text={post.text}
                        username={post.username}
                        user={post.user}
                        createdAt={post.createdAt}
                      />
                    );
                  })}
              </>
            ) : (
              <></>
            )}
            <Col xs={12} className="seeMore">
              <p onClick={() => setCounterPosts(counterPosts + 30)}>
                Mostra Altri Post
              </p>
            </Col>
          </Row>
        </Col>

        <Col
          xs={12}
          md={8}
          lg={4}
          className="dxColumn offset-0 offset-md-4 offset-lg-0"
        >
          <Row className="sticky-lg-top">
            <div className="sectionContainer linkedinNotizie">
              <Col xs={12}>
                <b className="text-secondary">LinkedIn Notizie</b>
                <div>
                  <ul className="secondHover">
                    <li>
                      <p>
                        <b> Le Top Companies del 2023 in Italia</b>
                      </p>
                      <p>Notizie principali • 534 lettori</p>
                    </li>
                    <li>
                      <p>
                        <b>Ucraina: gli ultimi aggiornamenti </b>
                      </p>
                      <p>6 ore fa • 414 lettori</p>
                    </li>
                    <li>
                      <p>
                        <b>Che cosa succede al Salone del Mobile </b>
                      </p>
                      <p>1 ora fa • 364 lettori</p>
                    </li>
                    <li>
                      <p>
                        <b>Un nuovo modello contrattuale per la ricerca </b>
                      </p>
                      <p>19 ore fa</p>
                    </li>
                    <li>
                      <p>
                        <b>Learning Solutions </b>
                      </p>
                      <p>3 ore fa • 164 lettori</p>
                    </li>
                  </ul>
                  <div
                    className={Showlist ? "homeCollapse show" : "homeCollapse"}
                  >
                    <ul>
                      <li>
                        <p>
                          <b>Apple sfida le banche</b>
                        </p>
                        <p>6 ore fa • 212 lettori</p>
                      </li>
                      <li>
                        <p>
                          <b>
                            SONDAGGIO: cosa guardi di un'azienda quando cerchi
                            lavoro?
                          </b>
                        </p>
                        <p>5 giorni fa • 606 lettori</p>
                      </li>
                      <li>
                        <p>
                          <b>Frena il venture capital</b>
                        </p>
                        <p>1 giorno fa</p>
                      </li>
                      <li>
                        <p>
                          <b>L'importanza di mettersi in ascolto</b>
                        </p>
                        <p>1 giorno fa</p>
                      </li>
                      <li>
                        <p>
                          <b>Arrivano i tutor in classe</b>
                        </p>
                        <p>1 ora fa</p>
                      </li>
                      <li>
                        <p>
                          <b>Learning Solutions</b>
                        </p>
                        <p>3 ore fa • 164 lettori</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
              <Col xs={12} className="seeMore">
                <p
                  onClick={() => {
                    setShowlist(!Showlist);
                  }}
                >
                  {Showlist ? (
                    <span>
                      Meno dettagli<i className="bi bi-caret-up-fill"></i>
                    </span>
                  ) : (
                    <span>
                      Visualizza altro <i className="bi bi-caret-down-fill"></i>
                    </span>
                  )}
                </p>
              </Col>
            </div>

            <MiniFooter />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

/* 

*/
