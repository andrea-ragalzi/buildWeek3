import { Container, Row, Col } from "react-bootstrap";

import { CustomNavbar } from "../components/CustomNavbar";
import HomeProfileCard from "../components/HomeComponents/HomeProfileCard";
import { Postmaker } from "../components/HomeComponents/Postmaker";
import SinglePost from "../components/HomeComponents/SinglePost";
import { MiniFooter } from "../components/MyFooter";

import { store } from "./../redux/store/store";
import type { RootState } from "./../redux/store/store";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { fetchMyProfile } from "../redux/actions/profileActions";
import { fetchPosts } from "../redux/actions/feedActions";

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
              <Col xs={12} className="p-0 m-0">
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
              </Col>
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
          <Row>
            <div className="sectionContainer linkedinNotizie">
              <Col xs={12}>
                <b className="text-secondary">LinkedIn Notizie</b>
                <div>
                  <ul>
                    <li>
                      <p className="mb-1 mt-2">
                        <b> Le Top Companies del 2023 in Italia</b>
                      </p>
                      <p>Notizie principali • 534 lettori</p>
                    </li>
                    <li>
                      <p className="mb-1">
                        <b>Ucraina: gli ultimi aggiornamenti </b>
                      </p>
                      <p>6 ore fa • 414 lettori</p>
                    </li>
                    <li>
                      <p className="mb-1">
                        <b>Che cosa succede al Salone del Mobile </b>
                      </p>
                      <p>1 ora fa • 364 lettori</p>
                    </li>
                    <li>
                      <p className="mb-1">
                        <b>Un nuovo modello contrattuale per la ricerca </b>
                      </p>
                      <p>19 ore fa</p>
                    </li>
                    <li>
                      <p className="mb-1">
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
                        <p className="mb-1">
                          <b>Apple sfida le banche</b>
                        </p>
                        <p>6 ore fa • 212 lettori</p>
                      </li>
                      <li>
                        <p className="mb-1">
                          <b>
                            SONDAGGIO: cosa guardi di un'azienda quando cerchi
                            lavoro?
                          </b>
                        </p>
                        <p>5 giorni fa • 606 lettori</p>
                      </li>
                      <li>
                        <p className="mb-1">
                          <b>Frena il venture capital</b>
                        </p>
                        <p>1 giorno fa</p>
                      </li>
                      <li>
                        <p className="mb-1">
                          <b>L'importanza di mettersi in ascolto</b>
                        </p>
                        <p>1 giorno fa</p>
                      </li>
                      <li>
                        <p className="mb-1">
                          <b>Arrivano i tutor in classe</b>
                        </p>
                        <p>1 ora fa</p>
                      </li>
                      <li>
                        <p className="mb-1">
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
            <Col xs={12} className="footerCol">
              <MiniFooter />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;

/* 

*/
