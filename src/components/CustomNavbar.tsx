import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/App.scss";

export const CustomNavbar = () => {
  const [Rightcollapse, setRightcollapse] = useState(false);

  return (
    <Navbar className="p-0 position-relative" bg="light" expand="lg">
      <Container className="justify-content-around">
        <Navbar.Brand href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="mercado-match ms-5"
            width="40"
            height="40"
            focusable="false"
          >
            <path
              className="text-primary"
              d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"
            ></path>
          </svg>
        </Navbar.Brand>
        <Form className="d-flex w-50">
          <Form.Control
            type="search"
            placeholder="Search"
            className="w-75 me-5 h-100 rounded-0"
            aria-label="Search"
          />
        </Form>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-around">
          <Nav
            className="my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link
              href="#action1"
              onClick={() => {
                setRightcollapse(false);
              }}
              className="text-center p-0 flex-column align-items-center justify-content-end d-flex  mx-4 mt-1 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="10x10"
                fill="currentColor"
                className="mercado-match"
                width="25"
                height="25"
                focusable="false"
              >
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
              </svg>
              <p style={{ fontSize: "12px" }}>Home</p>
            </Nav.Link>
            <Nav.Link
              href="#action2"
              onClick={() => {
                setRightcollapse(false);
              }}
              className="text-center p-0 flex-column align-items-center justify-content-end d-flex  mx-4 mt-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="10x10"
                fill="currentColor"
                className="mercado-match"
                width="25"
                height="25"
                focusable="false"
              >
                <path d="M12 6.5a4.5 4.5 0 114.5 4.5A4.49 4.49 0 0112 6.5zm6 6.5h-3a3 3 0 00-3 3v6h9v-6a3 3 0 00-3-3zM6.5 6A3.5 3.5 0 1010 9.5 3.5 3.5 0 006.5 6zm1 9h-2A2.5 2.5 0 003 17.5V22h7v-4.5A2.5 2.5 0 007.5 15z"></path>
              </svg>
              <p style={{ fontSize: "12px" }}>Rete</p>
            </Nav.Link>
            <Nav.Link
              href="#action3"
              onClick={() => {
                setRightcollapse(false);
              }}
              className="text-center p-0 flex-column align-items-center justify-content-end d-flex  mx-4 mt-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="10x10"
                fill="currentColor"
                className="mercado-match"
                width="25"
                height="25"
                focusable="false"
              >
                <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
              </svg>
              <p style={{ fontSize: "12px" }}>Lavoro</p>
            </Nav.Link>
            <Nav.Link
              href="#action4"
              onClick={() => {
                setRightcollapse(false);
              }}
              className="text-center p-0 flex-column align-items-center justify-content-end d-flex  mx-2 mt-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="10x10"
                fill="currentColor"
                className="mercado-match"
                width="25"
                height="25"
                focusable="false"
              >
                <path d="M12 6.5a4.5 4.5 0 114.5 4.5A4.49 4.49 0 0112 6.5zm6 6.5h-3a3 3 0 00-3 3v6h9v-6a3 3 0 00-3-3zM6.5 6A3.5 3.5 0 1010 9.5 3.5 3.5 0 006.5 6zm1 9h-2A2.5 2.5 0 003 17.5V22h7v-4.5A2.5 2.5 0 007.5 15z"></path>
              </svg>
              <p style={{ fontSize: "12px" }}>Messaggistica</p>
            </Nav.Link>
            <Nav.Link
              href="#action5"
              onClick={() => {
                setRightcollapse(false);
              }}
              className="text-center p-0 flex-column align-items-center justify-content-end d-flex  mx-4 mt-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="10x10"
                fill="currentColor"
                className="mercado-match"
                width="25"
                height="25"
                focusable="false"
              >
                <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
              </svg>
              <p style={{ fontSize: "12px" }}>Notifiche</p>
            </Nav.Link>
            <Nav.Link
              href="#action6"
              onClick={() => {
                setRightcollapse(false);
              }}
              className="text-center pb-0 flex-column align-items-center justify-content-end d-flex mt-1 mx-4"
            >
              <img
                className="rounded-circle"
                src="https://picsum.photos/24/24"
                alt="foto profilo"
              ></img>
              <NavDropdown
                id="nav-dropdown-dark"
                title="Tu"
                menuVariant="light"
                style={{ height: "33.4px" }}
                className="Tutto"
              >
                <NavDropdown.Item
                  className="d-flex flex-row align-items-center"
                  href="#action/3.1"
                >
                  <img
                    src="https://picsum.photos/50/50"
                    alt="Foto dropdowns"
                    className="rounded-circle mb-3 me-3"
                  ></img>
                  <div>
                    <h5 className="mt-2">Martin Linke-din</h5>
                    <p>--</p>
                  </div>
                </NavDropdown.Item>
                <Button
                  style={{ height: "25px", fontSize: "12px", width: "14.5rem" }}
                  variant="outline-primary"
                  className="ms-2 fw-bold"
                >
                  {" "}
                  Visualizza profilo
                </Button>
                <hr className="mt-2"></hr>
                <Row>
                  <h5 className="text-black ms-3">Account</h5>
                  <ul
                    style={{ fontSize: "14px" }}
                    className="ms-3 mb-0 list-unstyled"
                  >
                    <li className="premium mb-1">
                      <Link
                        className="text-decoration-none text-secondary"
                        to="/"
                      >
                        🟨<b>Prova Premium gratis</b>{" "}
                      </Link>
                    </li>
                    <li className="mb-1 underline">
                      <Link
                        className="text-decoration-none text-secondary"
                        to="/"
                      >
                        Impostazioni e Privacy
                      </Link>
                    </li>
                    <li className="mb-1 underline">
                      <Link
                        className="text-decoration-none text-secondary"
                        to="/"
                      >
                        Guida
                      </Link>
                    </li>
                    <li className="mb-1 underline">
                      <Link
                        className="text-decoration-none text-secondary"
                        to="/"
                      >
                        Lingua
                      </Link>
                    </li>
                  </ul>
                  <hr style={{ width: "92% ", marginLeft: "4%" }} className="mt-0"></hr>
                </Row>
                <Row>
                  <h5 className="text-black ms-3">Gestisci</h5>
                  <ul
                    style={{ fontSize: "14px" }}
                    className="ms-3 mb-1 list-unstyled"
                  >
                    <li className="underline">
                      <Link
                        className="text-decoration-none text-secondary"
                        to="/"
                      >
                        Post e attività
                      </Link>
                    </li>
                    <li className="underline">
                      <Link
                        className="text-decoration-none text-secondary"
                        to="/"
                      >
                        Account per la pubblicazione di off...
                      </Link>
                    </li>
                    <li className="underline">
                      <Link
                        className="text-decoration-none text-secondary"
                        to="/"
                      >
                        Lingua
                      </Link>
                    </li>
                  </ul>
                  <hr style={{ width: "92% ", marginLeft: "4%" }} className="mt-0"></hr>
                </Row>
                <Row>
                  <Link
                    style={{ fontSize: "14px" }}
                    className="text-decoration-none text-secondary ms-3 mb-0 pb-0 underline"
                    to="/"
                  >
                    Esci
                  </Link>
                </Row>
              </NavDropdown>
            </Nav.Link>

            <Nav.Link
              onClick={() => setRightcollapse(!Rightcollapse)}
              className="text-center p-0 flex-column align-items-center justify-content-end d-flex  mx-2 mt-1"
              style={{ borderLeft: "1px solid #e3dcdc", width: "120px" }}
              data-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="10x10"
                fill="currentColor"
                className="mercado-match"
                width="30"
                height="25"
                focusable="false"
              >
                <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
              </svg>
              <p style={{ whiteSpace: "nowrap", fontSize: "12px" }}>
                Per le aziende{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  className="mercado-match"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8 11L3 6h10z" fillRule="evenodd"></path>
                </svg>
              </p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {Rightcollapse ? (
        <div
          className="scure border"
          onClick={() => {
            setRightcollapse(!Rightcollapse);
          }}
        ></div>
      ) : (
        <div className="noscure"></div>
      )}
      {Rightcollapse ? (
        <div className="Contentggs">
          <Container>
            <h3> Per le aziende</h3>
            <div className="Collapse border rounded p-3">
              <b className="bBottom text-secondary">Scopri altri prodotti Linkedin</b>
              <hr className="my-2"></hr>
              <div className="fs-2 d-flex justify-content-center align-items-center h-75">
                <ul className="List-collapse list-unstyled d-flex flex-wrap">
                  <li className="text-secondary d-flex flex-column justify-content-center align-items-center mt-3 w-25"><i className="d-inline-block text-primary bi bi-play-btn-fill"></i><span className="text-center">Learning</span></li>
                  <li className="text-secondary d-flex flex-column justify-content-center align-items-center mt-3 w-25"><i className="d-inline-block text-primary bi bi-file-bar-graph-fill"></i><span className="text-center"> Insight</span></li>
                  <li className="text-secondary d-flex flex-column justify-content-center align-items-center mt-5 w-25"><i className="d-inline-block text-primary bi bi-image"></i><span className="text-center">Pubblica un'offerda di lavoro</span></li>
                  <li className="text-secondary d-flex flex-column justify-content-center align-items-center mt-3 w-25"><i className="d-inline-block text-primary bi bi-bullseye"></i><span className="text-center">Pubblicizza</span></li>
                  <li className="text-secondary d-flex flex-column justify-content-center align-items-center mt-2 w-25"><i className="d-inline-block text-primary bi bi-browser-safari"></i><span className="text-center">Trova Lead</span></li>
                  <li className="text-secondary d-flex flex-column justify-content-center align-items-center mt-2 w-25"><i className="d-inline-block text-primary bi bi-people-fill"></i><span className="text-center"> Gruppi</span></li>
                  <li className="text-secondary d-flex flex-column justify-content-center align-items-center mt-4 w-25"><i className="d-inline-block text-primary bi bi-person-fill-check"></i><span className="text-center"> Marketplace dei servizi</span></li>
                </ul>
              </div>
            </div>
            <div className="Second-Collapse border rounded p-3 mt-2 ">
              <b className="bBottom text-secondary">Assistenza alle aziende di Linkedin</b>
              <hr className="my-2"></hr>
              <div className="fs-2 d-flex justify-content-start align-items-center h-10">
                <ul className="list-unstyled ">
                  <li className="Second-List-collapse mt-1 fw-bold">Talent solutions <br></br><p className="fw-normal Collapse-p text-secondary">Trova, attrai e assumi </p></li>
                  <li className="Second-List-collapse fw-bold">Sales Solutions  <br></br><p className="fw-normal Collapse-p text-secondary">Sblocca nuove opportunità di vendita </p></li>
                  <li className="Second-List-collapse fw-bold">Pubblica offerta di lavoro gratuita  <br></br><p className="fw-normal Collapse-p text-secondary">Raggiungi i migliori candidati con la tua offerta di lavoro </p></li>
                  <li className="Second-List-collapse fw-bold">Marketing Solutions  <br></br><p className="fw-normal Collapse-p text-secondary">Acquisisci clienti e fai crescere la tua azienda</p></li>
                  <li className="Second-List-collapse fw-bold">Learning Solutions  <br></br><p className="fw-normal Collapse-p text-secondary">Promuovi l'acquisizione di competenze nella tua organizzazione</p></li>
                </ul>
              </div>
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
  );
};
