import { Experience } from "../../types/expCardTypes";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store/store";
import { Modal, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import {
  editExperience,
  fetchExperiences,
  deleteExperience,
} from "../../redux/actions/experienceActions";
import { store } from "../../redux/store/store";

const ExperienceCard = ({
  _id,
  role,
  company,
  startDate,
  endDate,
  description,
  area,
  username,
  createdAt,
  updatedAt,
  __v,
  image,
}: Experience) => {
  const finishDate = endDate ? endDate : "Presente";
  const handleClose = () => setShow(false);
  const dispatch = store.dispatch;

  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);

  const [showDelete, setShowDelete] = useState(false);

  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);
  const [newEditExperience, setNewEditExperience] = useState({
    _id,
    role,
    company,
    startDate,
    endDate,
    description,
    area,
    username,
    createdAt,
    updatedAt,
    __v,
    image,
  });

  const myProfile = useSelector((state: RootState) => state.profile.me);

  const handleSave = () => {
    role = newEditExperience.role;
    company = newEditExperience.company;
    description = newEditExperience.description;
    area = newEditExperience.area;

    dispatch(editExperience(myProfile!._id, newEditExperience));
    dispatch(fetchExperiences(myProfile!._id));
    handleClose();
  };

  const handleDelete = () => {
    dispatch(deleteExperience(myProfile!._id, _id!));
    dispatch(fetchExperiences(myProfile!._id));
    handleCloseDelete();
  };

  return (
    <Row>
      <Col xs="2">
        <img src={image} alt="pic" className="rounded w-100" />
      </Col>
      <Col xs="10" className="p-0">
        <Container>
          <Row>
            <Col xs={12}>
              <h4 className="d-flex justify-content-between">
                <strong>{role}</strong>
                <div>
                  <button onClick={handleShowDelete} className=" unstyledbtn">
                    <i className="bi bi-trash"></i>
                  </button>

                  <button onClick={handleShow} className=" unstyledbtn">
                    {" "}
                    <i className="bi bi-pencil"> </i>
                  </button>
                </div>
              </h4>
            </Col>
            <Col xs={12}>
              <p>
                {company} - {area}
              </p>
            </Col>
            <Col xs={12}>
              <p>{description}</p>
            </Col>
            <Col xs={12}>
              <p>{`${startDate} - ${finishDate}`}</p>
            </Col>
            <Col xs={12}>
              <p>{area}</p>
            </Col>
          </Row>
        </Container>
      </Col>

      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Sei sicuro di eliminare questa esperienza?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>

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
            <span className="text-muted">Role : </span>
            <input
              type="text"
              className="w-100"
              value={newEditExperience.role}
              onChange={(e) =>
                setNewEditExperience({
                  ...newEditExperience,
                  role: e.target.value,
                })
              }
            />
            <span className="text-muted">Company : </span>

            <input
              type="text"
              className="w-100"
              value={newEditExperience.company}
              onChange={(e) =>
                setNewEditExperience({
                  ...newEditExperience,
                  company: e.target.value,
                })
              }
            />
            <span className="text-muted">Indirizzo : </span>

            <input
              type="text"
              className="w-100"
              value={newEditExperience.area}
              onChange={(e) =>
                setNewEditExperience({
                  ...newEditExperience,
                  area: e.target.value,
                })
              }
            />
            <span className="text-muted">Descrizione : </span>

            <input
              type="text"
              className="w-100"
              value={newEditExperience.description}
              onChange={(e) =>
                setNewEditExperience({
                  ...newEditExperience,
                  description: e.target.value,
                })
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
    </Row>
  );
};

export default ExperienceCard;
