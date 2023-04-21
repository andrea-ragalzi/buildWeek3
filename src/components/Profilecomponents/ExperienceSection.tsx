import { Row, Col } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { RootState, store } from "../../redux/store/store";
import { useState, useEffect, ChangeEvent } from "react";
import {
  addExperience,
  fetchExperiences,
} from "../../redux/actions/experienceActions";
import { Profile } from "./../../types/profileTypes";
import { addImageExperience } from "../../redux/actions/imageActions";
import { useSelector } from "react-redux";
import { Experience } from "../../types/expCardTypes";

const ExperienceSection = (myProfile: Profile) => {
  const handleClose = () => {setShow(false)};
  const dispatch = store.dispatch;
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const [newExperience, setNewExperience] = useState({
    _id: '',
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    username: "",
    image: "",
    area: "",
  });

  const [newExpImg, setNewExpImg] = useState('');
  const expList = useSelector((state: RootState) => state.experience.list)
  const newExp: Experience = expList[-1]


  const handleFile = (ev: ChangeEvent<HTMLInputElement>) => {
    setNewExpImg((img) => {
    //per cambiare i formData, bisogna "appendere" una nuova coppia chiave/valore, usando il metodo .append()
      img.delete("post") //ricordatevi di svuotare il FormData prima :)
      img.append("post", ev.target.files![0]) //L'API richiede un "nome" diverso per ogni rotta, per caricare un'immagine ad un post, nel form data andra' inserito un valore con nome "post"
      return img
    })
  }

  const handleSave = () => {
    dispatch(addExperience(myProfile._id, newExperience));

    handleClose();
    dispatch(fetchExperiences(myProfile._id));
    //dispatch(addImageExperience(myProfile._id, newExp._id, newExpImg))
  };

  useEffect(() => {
    dispatch(fetchExperiences(myProfile._id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newExperience]);

  useEffect(() => {
    dispatch(fetchExperiences(myProfile._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newExpImg]);

  return (
    <Row>
      <Col xs={12}>
        <div className="d-flex justify-content-between">
          <h2>Esperienza</h2>
          <h4 className="d-flex justify-content-between">
            <button onClick={handleShow} className=" unstyledbtn z-1">
              <i className="bi bi-plus-lg"></i>
            </button>
          </h4>
        </div>
      </Col>
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
            <span className="text-muted">Ruolo nell Azienda : </span>
            <input
              type="text"
              className="w-100"
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  role: e.target.value,
                })
              }
            />
            <span className="text-muted">Azienda : </span>
            <input
              type="text"
              className="w-100"
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  company: e.target.value,
                })
              }
            />
            <span className="text-muted">Immagine : </span>
            <input
              type="file"
              className="w-100"
              onChange={(e) => {handleFile(e)}
            />

            <span className="text-muted">Descrizione : </span>
            <input
              type="text"
              className="w-100"
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  description: e.target.value,
                })
              }
            />
            <span className="text-muted">Indirizzo : </span>
            <input
              type="text"
              className="w-100"
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  area: e.target.value,
                })
              }
            />
            <span className="text-muted">Data d'inizio : </span>
            <input
              type="text"
              className="w-100"
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  startDate: e.target.value,
                })
              }
            />
            <span className="text-muted">Data fine : </span>
            <input
              type="text"
              className="w-100"
              onChange={(e) =>
                setNewExperience({
                  ...newExperience,
                  endDate: e.target.value,
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

export default ExperienceSection;
