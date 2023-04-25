import { Col, Form, InputGroup, Button, Modal } from "react-bootstrap";

import BoxInfo from "./BoxInfo";

import { store } from "./../../redux/store/store";
import { useState } from "react";

import { Profile } from "../../types/profileTypes";
import { editProfile } from "../../redux/actions/profileActions";

export const Info = ({
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
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const dispatch = store.dispatch;

  const [newBio, setNewBio] = useState(bio);

  const handleSave = () => {
    bio = newBio;
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
    <Col xs={12}>
      <div className="sectionContainer">
        <div className="d-flex justify-content-between">
          <BoxInfo title="Informazioni" />
          <button onClick={handleShow} className="unstyledbtn me-3">
            <i className="bi bi-pencil"></i>
          </button>
        </div>
        <p className="ms-3">{bio} </p>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modifica Bio</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup>
              <Form.Control
                as="textarea"
                rows={2}
                value={newBio}
                onChange={(e) => setNewBio(e.target.value)}
                placeholder="Inserisci qui il tuo messaggio"
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              disabled={newBio ? false : true}
              onClick={handleSave}
            >
              Save Changes
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setNewBio("");
                handleSave();
              }}
            >
              Delete Bio
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Col>
  );
};
