import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { RootState, store } from "./../redux/store/store";
import { Button, Form } from "react-bootstrap";
import { addPost } from "../redux/actions/feedActions";
import { FormEvent } from "react";

export const Postmaker = () => {
  const [Photo, setPhoto] = useState(false);
  const [Video, setVideo] = useState(false);
  const [Event, setEvent] = useState(false);
  const [Article, setArticle] = useState(false);
  const [show, setShow] = useState(false);
  const [textPost, setTextPost] = useState('');

  const myProfile = useSelector((state: RootState) => state.profile.me);

  const handleClose = () => setShow(!show);
  const handleShow = () => setShow(!show);

  const dispatch = store.dispatch;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newPost = { text: textPost }
    dispatch(addPost(newPost));
    setShow(false);
    setTextPost('');
  };


  return (
    <div>
      <div className="sectionContainer position-relative">
        <div className="d-flex">
          <img
            src={myProfile?.image}
            alt="avatar"
            className="rounded-circle d-inline position-absolute"
            width={50}
            height={50}
          />
          <button onClick={handleShow} className="Bigbutton">
            <span className="ms-2">Avvia un post</span>
          </button>
        </div>
        <div className="d-flex no-wrap justify-content-around mt-2 Btnsection">
          <button
            onClick={() => {
              setPhoto(!Photo);
            }}
          >
            <i className="bi bi-image picture"></i> <span>foto</span>
          </button>
          <button
            onClick={() => {
              setVideo(!Video);
            }}
          >
            <i className="bi bi-play-btn-fill picture"></i> <span>Video</span>
          </button>
          <button
            onClick={() => {
              setEvent(!Event);
            }}
          >
            <i className="bi bi-calendar-date picture"></i> <span>Evento</span>
          </button>
          <button
            onClick={() => {
              setArticle(!Article);
            }}
          >
            <i className="bi bi-journal-text picture"></i>
            <span>Scrivi un articolo</span>
          </button>
        </div>
        <Modal show={show} onHide={handleClose}> <Modal.Header closeButton>
          <Modal.Title>Crea un post</Modal.Title>
        </Modal.Header>
          <Modal.Body> <div className="linkBehave">
            <img src={myProfile?.image}
              alt="avatar" className="rounded-circle" width={50} height={50} />
            <div>
              <p> {myProfile?.name} {myProfile?.surname} </p>
              <p className="text-muted">
                <small>Pubblica: Chiunque</small>
              </p> </div> </div>
            <Form onSubmit={handleSubmit}>
              <Form.Label>Scrivi qualcosa!</Form.Label>
              <Form.Control as="textarea" rows={2} value={textPost}
                onChange={(e) => setTextPost(e.target.value)}
                placeholder="Inserisci qui il tuo messaggio" />
              <button type="submit" className="btnBlue"> Pubblica
              </button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};
