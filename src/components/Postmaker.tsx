import {Col} from "react-bootstrap"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Postmaker = () =>{
    const [Photo, setPhoto] = useState(false)
    const [Video, setVideo] = useState(false)
    const [Event, setEvent] = useState(false)
    const [Article, setArticle] = useState(false)
    const [Post, setPost] = useState(false)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  



    return(
    <Col lg={6}  md={8} xs={12}>

          <div className="sectionContainer position-relative">
             <div className="d-flex">
                <img src="https://picsum.photos/200/300" alt="avatar" className="rounded-circle d-inline position-absolute" width={50} height={50} />
              <button onClick={handleShow} className="Bigbutton">Avvia un post</button></div>
             <div className="d-flex no-wrap justify-content-around mt-2 Btnsection"> 
                <button onClick={()=>{setPhoto(!Photo)}}> <i className="bi bi-image picture"></i> <span>foto</span></button>
                <button onClick={()=>{setVideo(!Video)}}> <i className="bi bi-play-btn-fill picture"></i> <span>Video</span></button>
                <button onClick={()=>{setEvent(!Event)}}> <i className="bi bi-calendar-date picture"></i> <span>Evento</span></button> 
                <button onClick={()=>{setArticle(!Article)}}> <i className="bi bi-journal-text picture"></i> <span>Scrivi un articolo</span></button> 
            </div>
               
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crea un post</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
            </div>
    </Col>
    
    )
}