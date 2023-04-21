import React from "react";
import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export const MyFooter: React.FC = function () {
  return (
    <Container>
      <footer className="footerContainer">
        <Row>
          <Col xs={12} sm={6} className="leftCol">
            <Row>
              <Col xs={12} md={6} lg={4}>
                <ul>
                  <li className="linkWrap">
                    <Link to={"/"}>Informazioni</Link>
                  </li>
                  <li className="linkWrap">
                    <Link to={"/"}>Linee guida della community</Link>
                  </li>
                  <li className="linkWrap">
                    <Dropdown>
                      <Dropdown.Toggle
                        id="privacy-dropdown"
                        variant="link"
                        className="linkWrap"
                      >
                        Privacy e condizioni
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to={"/privacy"}>
                          Informativa sulla privacy
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to={"/contratto"}>
                          Contratto di licenza
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to={"/cookie"}>
                          Informativa sui cookie
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to={"/copyright"}>
                          Informativa sul copyright
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </ul>
                <ul>
                  <li className="linkWrap">
                    <Link to={"/"}>Sales Solutions</Link>
                  </li>
                  <li className="linkWrap">
                    <Link to={"/"}>Centro sicurezza</Link>
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <ul>
                  <li className="linkWrap">
                    <Link to={"/"}>Accessibilità</Link>
                  </li>
                  <li className="linkWrap">
                    <Link to={"/"}>Carriera</Link>
                  </li>
                  <li className="linkWrap">
                    <Link to={"/"}>Opzioni per gli annunci pubblicitari</Link>
                  </li>
                  <li className="linkWrap">
                    <Link to={"/"}>Mobile</Link>
                  </li>
                </ul>
              </Col>
              <Col xs={12} md={6} lg={4}>
                <ul>
                  <li className="linkWrap">
                    <Link to={"/"}>Talent Solutions</Link>
                  </li>
                  <li className="linkWrap">
                    <Link to={"/"}>Soluzioni di marketing</Link>
                  </li>
                  <li className="linkWrap">
                    <Link to={"/"}>Pubblicità</Link>
                  </li>
                </ul>
                <ul>
                  <li className="linkWrap">
                    <Link to={"/"}>Piccole imprese</Link>
                  </li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <p>LinkedIn Corporation © 2023</p>
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6}>
            <Row>
              <Col xs={12} md={6}>
                <Row>
                  <Col xs={2}>
                    <i className="bi bi-question-circle-fill fs-2"></i>
                  </Col>
                  <Col>
                    <h5 className="linkWrap">
                      <Link to={"/"}>Domande?</Link>
                    </h5>
                    <p>Visita il nostro Centro Assistenza</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2}>
                    <i className="bi bi-gear-fill fs-2"></i>
                  </Col>
                  <Col>
                    <h5 className="linkWrap">
                      <Link to={"/"}>
                        Gestisci il tuo account e la tua privacy
                      </Link>
                    </h5>
                    <p>Vai alle impostazioni</p>
                  </Col>
                </Row>
                <Row>
                  <Col xs={2}>
                    <i className="bi bi-shield-shaded fs-2"></i>
                  </Col>
                  <Col>
                    <h5 className="linkWrap">
                      <Link to={"/"}>
                        Trasparenza sui contenuti consigliati
                      </Link>
                    </h5>
                    <p>Scopri di più sui contenuti consigliati.</p>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group controlId="formLanguageSelect">
                  <Form.Label>Seleziona Lingua</Form.Label>
                  <Form.Select aria-label="Select Language">
                    <option value="italian">Italiano</option>
                    <option value="english">English</option>
                    <option value="spanish">Español</option>
                    <option value="french">Français</option>
                    <option value="german">Deutsch</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </footer>
    </Container>
  );
};

export const MiniFooter: React.FC = function () {
  return (
    <footer className="miniFooter">
      <Container fluid>
        <Row>
          <ul className="d-flex flex-wrap justify-content-center">
            <li className="linkWrap">
              <Link to={"/"}>Informazioni</Link>
            </li>
            <li className="linkWrap">
              <Link to={"/"}>Accessibilità</Link>
            </li>
            <li className="linkWrap">
              <Link to={"/"}>Centro Ass.</Link>
            </li>
            <li className="linkWrap">
              <Dropdown>
                <Dropdown.Toggle
                  id="privacy-dropdown"
                  variant="link"
                  className="Benvenuto"
                >
                  Privacy e condizioni
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to={"/privacy"}>
                    Informativa sulla privacy
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to={"/contratto"}>
                    Contratto di licenza
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to={"/cookie"}>
                    Informativa sui cookie
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to={"/copyright"}>
                    Informativa sul copyright
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li className="linkWrap">
              <Link to={"/"}>Sales Solutions</Link>
            </li>
            <li className="linkWrap">
              <Link to={"/"}>Soluzioni di marketing</Link>
            </li>
            <li className="linkWrap">
              <Link to={"/"}>Pubblicità</Link>
            </li>
            <li className="linkWrap">
              <Link to={"/"}>Piccole imprese</Link>
            </li>
          </ul>
        </Row>
        <Row>
          <Col xs={12} className=" d-flex justify-content-center">
            <img
              src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg"
              alt="logo"
              height={"20px"}
              className="me-3"
            />
            <p className="Benvenuto">LinkedIn Corporation © 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
