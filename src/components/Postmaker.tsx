import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useSelector } from "react-redux";
import { RootState, store } from "./../redux/store/store";

export const Postmaker = () => {
  const [Photo, setPhoto] = useState(false);
  const [Video, setVideo] = useState(false);
  const [Event, setEvent] = useState(false);
  const [Article, setArticle] = useState(false);
  const [show, setShow] = useState(false);

  const myProfile = useSelector((state: RootState) => state.profile.me);

  const handleClose = () => setShow(!show);
  const handleShow = () => setShow(!show);

  const dispatch = store.dispatch;

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
            {" "}
            <i className="bi bi-image picture"></i> <span>foto</span>
          </button>
          <button
            onClick={() => {
              setVideo(!Video);
            }}
          >
            {" "}
            <i className="bi bi-play-btn-fill picture"></i> <span>Video</span>
          </button>
          <button
            onClick={() => {
              setEvent(!Event);
            }}
          >
            {" "}
            <i className="bi bi-calendar-date picture"></i> <span>Evento</span>
          </button>
          <button
            onClick={() => {
              setArticle(!Article);
            }}
          >
            {" "}
            <i className="bi bi-journal-text picture"></i>{" "}
            <span>Scrivi un articolo</span>
          </button>
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Crea un post</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={myProfile?.image}
              alt="avatar"
              className="rounded-circle"
              width={50}
              height={50}
            />
            <span>
              {myProfile?.name} {myProfile?.surname}
            </span>
            <input type="text" className="inputfield" />
          </Modal.Body>

          <Modal.Footer>
            <div className="d-flex justify-content-between">
              <i className="bi bi-clock"></i>{" "}
              <button className="ms-3 btnGrey">Pubbilca</button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
