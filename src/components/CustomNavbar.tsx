import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Col, Image, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../style/App.scss";
import { useState } from "react";

export const CustomNavbar = () => {
  const [Rightcollapse, setRightcollapse] = useState(false);

  return (
    <header className="myNavbar">
      <Navbar bg="light" expand="sm">
        <Container>
          <Container>
            <Row className="innerNavbar">
              <Col xs={8} sm={3} lg={6} className="justify-content-start">
                <Navbar.Brand>
                  <NavLink to={"/"}>
                    <Image
                      src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                      alt="linkedin"
                      id="logoNavbar"
                    />
                  </NavLink>
                </Navbar.Brand>
                <Form>
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </Form>
              </Col>
              <Col xs={4} sm={9} lg={6} className="justify-content-end">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="linkWrap">
                    <NavLink
                      to={"/"}
                      className={
                        "justify-content-center justify-content-lg-between"
                      }
                      onClick={() => {
                        setRightcollapse(false);
                      }}
                    >
                      <i className="bi bi-house-fill"></i>
                      <p className="d-none d-lg-block">Home</p>
                    </NavLink>
                    <NavLink
                      to={"/"}
                      className={
                        "justify-content-center justify-content-lg-between"
                      }
                      onClick={() => {
                        setRightcollapse(false);
                      }}
                    >
                      <i className="bi bi-people-fill"></i>
                      <p className="d-none d-lg-block">Rete</p>
                    </NavLink>
                    <NavLink
                      to={"/"}
                      className={
                        "justify-content-center justify-content-lg-between"
                      }
                      onClick={() => {
                        setRightcollapse(false);
                      }}
                    >
                      <i className="bi bi-briefcase-fill"></i>
                      <p className="d-none d-lg-block">Lavoro</p>
                    </NavLink>
                    <NavLink
                      to={"/"}
                      className={
                        "justify-content-center justify-content-lg-between"
                      }
                      onClick={() => {
                        setRightcollapse(false);
                      }}
                    >
                      <i className="bi bi-chat-dots-fill"></i>
                      <p className="d-none d-lg-block">Messaggistica</p>
                    </NavLink>
                    <NavLink
                      to={"/"}
                      className={
                        "justify-content-center justify-content-lg-between"
                      }
                      onClick={() => {
                        setRightcollapse(false);
                      }}
                    >
                      <i className="bi bi-bell-fill"></i>
                      <p className="d-none d-lg-block">Notifiche</p>
                    </NavLink>
                    <NavDropdown
                      title={
                        <div className="dropdown-title">
                          <Image
                            id="myProfile"
                            src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                          ></Image>
                          <p>Tu</p>
                        </div>
                      }
                      className={
                        "justify-content-center justify-content-lg-between"
                      }
                      onClick={() => {
                        setRightcollapse(false);
                      }}
                      id="basic-nav-dropdown"
                    >
                      <Row>
                        <Col xs={3} className="p-0">
                          <img
                            src="https://picsum.photos/50/50"
                            alt="Foto dropdowns"
                          />
                        </Col>
                        <Col xs={8} className="offset-1">
                          <div>
                            <p>
                              <b>Martin Linke-din</b>
                            </p>
                            <p>Ruolo Lavorativo</p>
                          </div>
                        </Col>
                        <Col xs={12}>
                          <NavDropdown.Item className="d-flex justify-content-center">
                            <Button className="btnWhite px-2">
                              Visualizza profilo
                            </Button>
                          </NavDropdown.Item>
                        </Col>
                      </Row>
                      <NavDropdown.Divider />
                      <Row>
                        <Col xs={12}>
                          <p>
                            <b>Account</b>
                          </p>
                        </Col>
                        <Col xs={12}>
                          <NavDropdown.Item>
                            <p className="linkBehave">
                              {" "}
                              🟨<b>Prova Premium gratis</b>
                            </p>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <p className="linkBehave">Impostazioni e Privacy</p>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <p className="linkBehave">Guida</p>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <p className="linkBehave">Lingua</p>
                          </NavDropdown.Item>
                        </Col>
                      </Row>
                      <NavDropdown.Divider />
                      <Row>
                        <Col xs={12}>
                          <p>
                            <b>Gestisci</b>
                          </p>
                        </Col>
                        <Col xs={12}>
                          <NavDropdown.Item>
                            <p className="linkBehave">Post e attività</p>
                          </NavDropdown.Item>
                          <NavDropdown.Item>
                            <p className="linkBehave textCutter w-100">
                              Account per la pubblicazione di offerte
                            </p>
                          </NavDropdown.Item>
                        </Col>
                      </Row>
                      <NavDropdown.Divider />
                      <Row>
                        <Col xs={12}>
                          <NavDropdown.Item>
                            <p className="linkBehave">Esci</p>
                          </NavDropdown.Item>
                        </Col>
                      </Row>
                    </NavDropdown>
                    <Nav.Link
                      onClick={() => setRightcollapse(!Rightcollapse)}
                      id="aziendeToggle"
                    >
                      <i className="bi bi-grid-3x3-gap-fill"></i>
                      <p className="d-none d-lg-block">Per le aziende</p>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Col>
            </Row>
          </Container>
        </Container>
        {Rightcollapse ? (
          <div
            className="shadower"
            onClick={() => {
              setRightcollapse(!Rightcollapse);
            }}
          ></div>
        ) : (
          <></>
        )}
        {Rightcollapse ? (
          <div className="aziendeContent">
            <Container>
              <h3 className="ms-2"> Per le aziende</h3>
              <div className="Collapse border rounded p-3">
                <b className="bBottom text-secondary">
                  Scopri altri prodotti Linkedin
                </b>
                <hr className="my-2"></hr>
                <div className="fs-2 d-flex justify-content-center align-items-center h-75">
                  <ul className="List-collapse list-unstyled d-flex flex-wrap">
                    <li className="text-secondary d-flex flex-column justify-content-center align-items-center mt-3 w-25">
                      <i className="d-inline-block text-primary bi bi-play-btn-fill"></i>
                      <span className="text-center">Learning</span>
                    </li>
                    <li className="text-secondary d-flex flex-column justify-content-center align-items-center mt-3 w-25">
                      <i className="d-inline-block text-primary bi bi-file-bar-graph-fill"></i>
                      <span className="text-center"> Insight</span>
                    </li>
                    <li className="text-secondary d-flex flex-column justify-content-center align-items-center mt-5 w-25">
                      <i className="d-inline-block text-primary bi bi-image"></i>
                      <span className="text-center">
                        Pubblica un'offerda di lavoro
                      </span>
                    </li>
                    <li className="text-secondary d-flex flex-column justify-content-center align-items-center mt-3 w-25">
                      <i className="d-inline-block text-primary bi bi-bullseye"></i>
                      <span className="text-center">Pubblicizza</span>
                    </li>
                    <li className="text-secondary d-flex flex-column justify-content-center align-items-center mt-2 w-25">
                      <i className="d-inline-block text-primary bi bi-browser-safari"></i>
                      <span className="text-center">Trova Lead</span>
                    </li>
                    <li className="text-secondary d-flex flex-column justify-content-center align-items-center mt-2 w-25">
                      <i className="d-inline-block text-primary bi bi-people-fill"></i>
                      <span className="text-center"> Gruppi</span>
                    </li>
                    <li className="text-secondary d-flex flex-column justify-content-center align-items-center mt-4 w-25">
                      <i className="d-inline-block text-primary bi bi-person-fill-check"></i>
                      <span className="text-center">
                        {" "}
                        Marketplace dei servizi
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Second-Collapse border rounded p-3 mt-2 ">
                <b className="bBottom text-secondary">
                  Assistenza alle aziende di Linkedin
                </b>
                <hr className="my-2"></hr>
                <div className="fs-2 d-flex justify-content-start align-items-center h-10">
                  <ul className="list-unstyled ms-1 Secondhover">
                    <li className="Second-List-collapse mt-1 fw-bold">
                      Talent solutions <br></br>
                      <p className="fw-normal Collapse-p text-secondary">
                        Trova, attrai e assumi{" "}
                      </p>
                    </li>
                    <li className="Second-List-collapse fw-bold">
                      Sales Solutions <br></br>
                      <p className="fw-normal Collapse-p text-secondary">
                        Sblocca nuove opportunità di vendita{" "}
                      </p>
                    </li>
                    <li className="Second-List-collapse fw-bold">
                      Pubblica offerta di lavoro gratuita <br></br>
                      <p className="fw-normal Collapse-p text-secondary">
                        Raggiungi i migliori candidati con la tua offerta di
                        lavoro{" "}
                      </p>
                    </li>
                    <li className="Second-List-collapse fw-bold">
                      Marketing Solutions <br></br>
                      <p className="fw-normal Collapse-p text-secondary">
                        Acquisisci clienti e fai crescere la tua azienda
                      </p>
                    </li>
                    <li className="Second-List-collapse fw-bold">
                      Learning Solutions <br></br>
                      <p className="fw-normal Collapse-p text-secondary">
                        Promuovi l'acquisizione di competenze nella tua
                        organizzazione
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Third-Collapse border rounded p-3">
                <b className="fs-6">
                  Crea una pagina aziendale{" "}
                  <i className="fs-5 bi bi-plus-lg"></i>
                </b>
              </div>
            </Container>
          </div>
        ) : (
          <div className="Content">
            {" "}
            <Container>
              <h3>Per le aziende</h3>
            </Container>
          </div>
        )}
      </Navbar>
    </header>
  );
};
