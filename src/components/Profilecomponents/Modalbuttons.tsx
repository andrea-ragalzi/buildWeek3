import { useState } from "react";
import { Collapse } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { Modal, Button } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import { Profile } from "../../types/profileTypes";
import { store } from "../../redux/store/store";
import { editProfile } from "../../redux/actions/profileActions";

export const Modalbuttons = ({
  _id,
  name,
  surname,
  email,
  bio,
  title,
  area,
  image,
  username,
}: Profile) => {
  const [open, setOpen] = useState(false);
  const [opensecond, setOpensec] = useState(false);
  const [openthird, setOpenthir] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [newProfile, setNewProfile] = useState({
    _id,
    name,
    surname,
    email,
    bio,
    title,
    area,
    image,
    username,
  });

  const dispatch = store.dispatch;
  console.log("sono name", newProfile);
  const handleSave = () => {
    name = newProfile.name;
    surname = newProfile.surname;
    title = newProfile.title;
    area = newProfile.area;
    dispatch(
      editProfile({
        _id,
        name,
        surname,
        email,
        bio,
        title,
        area,
        image,
        username,
      })
    );
    handleClose();
  };

  return (
    <div className="ps-0 ms-0 d-flex">
      <Dropdown className="">
        <Dropdown.Toggle className="btnBlue ps-0 ms-0" id="dropdown-basic">
          <span className="mx-2">Disponibile per</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <button className="btnBlue ps-0 ms-0" onClick={() => setLgShow(true)}>
        <span className="mx-2">
          {" "}
          Aggiungi{" "}
          <span className="d-none d-md-none d-lg-block d-xl-inline">
            {" "}
            sezione al profilo{" "}
          </span>
        </span>
      </button>

      <Dropdown>
        <Dropdown.Toggle className="btnGrey ps-0 ms-0" id="dropdown-basic">
          <span className="mx-3">Altro</span>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <button onClick={handleShow} className="ms-3 unstyledbtn z-1">
        {" "}
        <i className="bi bi-pencil"> </i>{" "}
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        size="lg"
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <InputGroup>
            <span className="text-muted">Nome : </span>
            <input
              type="text"
              className="w-100"
              value={newProfile.name}
              onChange={(e) =>
                setNewProfile({ ...newProfile, name: e.target.value })
              }
            />
            <span className="text-muted">Cognome : </span>
            <input
              type="text"
              className="w-100"
              value={newProfile.surname}
              onChange={(e) =>
                setNewProfile({ ...newProfile, surname: e.target.value })
              }
            />
            <span className="text-muted">Professione : </span>
            <input
              type="text"
              className="w-100"
              value={newProfile.title}
              onChange={(e) =>
                setNewProfile({ ...newProfile, title: e.target.value })
              }
            />
            <span className="text-muted">Indirizzo : </span>
            <input
              type="text"
              className="w-100"
              value={newProfile.area}
              onChange={(e) =>
                setNewProfile({ ...newProfile, area: e.target.value })
              }
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Aggiungi <span className="d-lg-none"> sezione al profilo </span>
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
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi foto del profilo
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi informazioni
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi grado di formazione
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi posizione lavorativa
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi pausa lavorativa
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi competenze
                  </button>
                </ListGroup.Item>
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
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi elementi in primo piano
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi licenze e certificazioni
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi Aggiungi corsi
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi Aggiungi referenze
                  </button>
                </ListGroup.Item>
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
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi esperienza di volontariato
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi pubblicazioni
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi brevetti
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi progetti
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi votazioni esame{" "}
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi lingue{" "}
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi organizzazioni{" "}
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi cause{" "}
                  </button>
                </ListGroup.Item>
                <ListGroup.Item>
                  <button className="unstyledbtn py-0 my-0 px-0">
                    Aggiungi informazioni di contatto{" "}
                  </button>
                </ListGroup.Item>
              </ListGroup>
            </Collapse>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
