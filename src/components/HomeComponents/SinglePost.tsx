import {
  Col,
  Row,
  Form,
  Button,
  Dropdown,
  Modal,
  InputGroup,
} from "react-bootstrap";

import { store } from "../../redux/store/store";
import type { RootState } from "../../redux/store/store";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { editPost, deletePost } from "../../redux/actions/feedActions";
import { Post } from "../../types/feedTypes";

const SinglePost = ({ _id, image, text, username, user, createdAt }: Post) => {
  const [expanded, setExpanded] = useState(false);

  const myProfile = useSelector((state: RootState) => state.profile.me);

  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const dispatch = store.dispatch;
  const [isItMine, setIsItMine] = useState(false);
  const handleCloseDelete = () => {
    setShowDelete(false);
  };

  const handleShowDelete = () => setShowDelete(true);

  const [editPostduo, setEditPostduo] = useState({
    _id,
    image,
    text,
    username,
    user,
    createdAt,
  });

  const handleSave = () => {
    text = editPostduo.text;
    dispatch(
      editPost({
        _id,
        username,
        createdAt,
        text,
        image,
        user,
      })
    );
    handleClose();
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (text.length < 200) {
      setExpanded(true);
    }
    if (user?._id === myProfile?._id) {
      setIsItMine(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="sectionContainer">
      <Row>
        <Col xs={12}>
          <Row className="g-3 align-items-center">
            <Col xs={2}>
              <Link to={`/profile/${user?._id}`}>
                <img
                  src={user?.image}
                  alt="Foto profilo"
                  className="postProfileImage"
                />
              </Link>
            </Col>
            <Col xs={8} className="postProfile">
              <Link to={`/profile/${user?._id}`}>
                <span className="d-inline-block">
                  {user?.name} {user?.surname}
                </span>
              </Link>
              <p className="d-inline-block">• Già segui</p>
              <p className="textCutter">{user?.title}</p>
              <p>
                {createdAt?.slice(0, 10)} •{" "}
                <i className="bi bi-globe-americas text-black"></i>
              </p>
            </Col>
            {isItMine && (
              <Col xs={1}>
                <Dropdown>
                  <Dropdown.Toggle
                    id="dropdown-autoclose-true"
                    className="unstyledDropdown"
                  >
                    <i className="bi bi-three-dots" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={isItMine ? "modify" : "d-none"}>
                    <Dropdown.Item onClick={handleShow}>
                      <i className="bi bi-pencil me-2" /> Modifica post
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleShowDelete}>
                      <i className="bi bi-trash me-2" /> Elimina post
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Modal show={showDelete} onHide={handleCloseDelete}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      Sei sicuro di eliminare questo Post?
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={() => setShowDelete(false)}
                    >
                      Close
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => {
                        handleCloseDelete();
                        dispatch(deletePost(_id!));
                      }}
                    >
                      Delete
                    </Button>
                  </Modal.Footer>
                </Modal>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Modifica questo post</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <InputGroup>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        value={editPostduo.text}
                        onChange={(e) =>
                          setEditPostduo({
                            ...editPostduo,
                            text: e.target.value,
                          })
                        }
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
                      disabled={editPostduo ? false : true}
                      onClick={handleSave}
                    >
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Col>
            )}
          </Row>
          <Row className="postText">
            <p className={expanded ? "expanded" : "collapsed"}>{text}</p>
            {!expanded && (
              <p
                className="linkBehave text-center w-100"
                onClick={toggleExpand}
              >
                Mostra tutto
              </p>
            )}
          </Row>
          <Row
            className={
              image === undefined
                ? "text-center mb-2 d-none"
                : "text-center mb-2 d-block"
            }
          >
            <img className="w-100" src={image} alt="Foto post" />
          </Row>
          <Row className="commentSection justify-content-between">
            <Col>
              <p>
                <i className="bi bi-hand-thumbs-up-fill" /> 104
              </p>
            </Col>
            <Col className="text-end">
              <p> 880 commenti • 202 diffusioni post</p>
            </Col>
          </Row>
          <hr />
          <Row className="btnSection" xs={4}>
            <Col className="px-0">
              <Button className="text-secondary">
                <i className="bi bi-hand-thumbs-up"></i>
                <p>Consiglia</p>
              </Button>
            </Col>
            <Col className="px-0">
              <Button className="text-secondary">
                <i className="bi bi-chat-dots-fill"></i>
                <p>Commenta</p>
              </Button>
            </Col>
            <Col className="px-0">
              <Button className="text-secondary">
                <i className="bi bi-arrow-repeat"></i>
                <p>Diffondi</p>
              </Button>
            </Col>
            <Col className="px-0">
              <Button className="text-secondary">
                <i className="bi bi-send-fill"></i>
                <p>Invia</p>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default SinglePost;
