import { Row, Col } from "react-bootstrap";
import { Modal, Button } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { Experience } from "../../types/expCardTypes";
import { store } from "../../redux/store/store";
import { useState, useEffect } from "react";
import { addExperience, fetchExperiences } from "../../redux/actions/experienceActions";
import { Profile } from "./../../types/profileTypes"

const ExperienceSection = (myProfile: Profile) => {
    const handleClose = () => setShow(false);
    const dispatch = store.dispatch;
    const handleShow = () => setShow(true);
    const [show, setShow] = useState(false);
    const [newExperience, setNewExperience] = useState({
        role: '',
        company: '',
        startDate: '',
        endDate: '',
        description: '',
        area: '',
        username: '',
        image: ''
    });

    const handleSave = () => {
        dispatch(addExperience(myProfile._id, newExperience));
        dispatch(fetchExperiences(myProfile._id));
        handleClose();
    };

    useEffect(() => {
        dispatch(fetchExperiences(myProfile._id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [newExperience]);

    return (

        <Row>
            <Col xs={12}>
                <div className="d-flex justify-content-between">
                    <h2>Esperienza</h2>
                    <h4 className="d-flex justify-content-between">
                        <button onClick={handleShow} className=" unstyledbtn z-1">
                            {" "}
                            <i className="bi bi-plus-lg"></i>{" "}
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
                        {/*<span className="text-muted">Immagine : </span>
                        <input
                            type="text"
                            className="w-100"
                            onChange={(e) =>
                                setNewExperience({
                                    ...newExperience,
                                    image: e.target.value,
                                })
                            }
                        />*/}
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
                        <span className="text-muted">Username : </span>
                        <input
                            type="text"
                            className="w-100"
                            onChange={(e) =>
                                setNewExperience({
                                    ...newExperience,
                                    username: e.target.value,
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