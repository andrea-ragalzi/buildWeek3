import { Col } from "react-bootstrap"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Row} from "react-bootstrap";
//import EmojiPicker from 'emoji-picker-react';

export const Postmaker = () => {
    const [Photo, setPhoto] = useState(false)
    const [Video, setVideo] = useState(false)
    const [Event, setEvent] = useState(false)
    const [Article, setArticle] = useState(false)


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(!show);
    const handleShow = () => setShow(!show);




    return (
        <Col lg={6} md={8} xs={12}>

            <div className="sectionContainer position-relative">
                <div className="d-flex">
                    <img src="https://picsum.photos/200/300" alt="avatar" className="rounded-circle d-inline position-absolute" width={50} height={50} />
                    <button onClick={handleShow} className="Bigbutton"><span className="ms-2">Avvia un post</span></button></div>
                <div className="d-flex no-wrap justify-content-around mt-2 Btnsection">
                    <button onClick={() => { setPhoto(!Photo) }}> <i className="bi bi-image picture"></i> <span>foto</span></button>
                    <button onClick={() => { setVideo(!Video) }}> <i className="bi bi-play-btn-fill picture"></i> <span>Video</span></button>
                    <button onClick={() => { setEvent(!Event) }}> <i className="bi bi-calendar-date picture"></i> <span>Evento</span></button>
                    <button onClick={() => { setArticle(!Article) }}> <i className="bi bi-journal-text picture"></i> <span>Scrivi un articolo</span></button>
                </div>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Crea un post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex">
                            <img src="https://picsum.photos/200/300" alt="avatar" className="rounded-circle" width={50} height={50}/>

                            <div>
                                <span className="ms-1 d-block">Profile.name  Profile.surname</span>
                        
                                <button className="ms-1  btnGrey Modalbutton"><i className="bi bi-globe-americas"></i> Chiunque <i className="bi bi-caret-down-fill"></i></button>
                            </div>
                            </div>
                            <input type="text" className="inputfield" />
                        </Modal.Body>
                            
                        <Modal.Footer>
                            <div className="d-flex justify-content-between"><i className="bi bi-clock"></i> <button className="ms-3 btnGrey">Pubbilca</button></div>
                        </Modal.Footer>
                </Modal>
            </div>
        </Col>

    )
}