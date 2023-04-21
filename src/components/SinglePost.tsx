import Button from "react-bootstrap/Button";
import { Post } from "../types/feedTypes";
import { Col, Row, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { Modal } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import { store } from "../redux/store/store";
import { editPost } from "../redux/actions/feedActions";
import { deletePost } from "../redux/actions/feedActions";

const SinglePost = ({ _id, image, text, username, user, createdAt }: Post) => {
  const [expanded, setExpanded] = useState(false);

  const [show, setShow] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const dispatch = store.dispatch;

  const handleCloseDelete = () => {
      
    dispatch(deletePost(_id!))
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /*   <button onClick={handleShow} className="unstyledbtn me-3">
{" "}
<i className="bi bi-pencil"></i>
</button>*/
  /*   <button onClick={handleShow} className="unstyledbtn me-3">
{" "}
<i className="bi bi-pencil"></i>
</button>*/
  return (
    <div className="sectionContainer">
      <Row>
        <Col xs={12}>
          <Row>
            <Col xs={2}>
              <Link to={`/profile/${user?._id}`}>
                <img
                  src={user?.image}
                  alt="Foto profilo"
                  className="postProfileImage"
                />
              </Link>

              <Dropdown className="d-inline mx-2 p-0">
                <Dropdown.Toggle
                  id="dropdown-autoclose-true"
                  className="p-0 unstyledDropdown"
                >
                  ...
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item onClick={handleShow}>
                    <i className="bi bi-pencil"></i>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={handleShowDelete}>
                    Menu Item
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
                  <Button variant="secondary" onClick={()=>setShowDelete(false)}>
                    Close
                  </Button>
                  <Button variant="danger" onClick={handleCloseDelete}>
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
                        setEditPostduo({ ...editPostduo, text: e.target.value })
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
            <Col className="postProfile">
              <Link to={`/profile/${user?._id}`}>
                <span className="d-inline-block">
                  {user?.name} {user?.surname}
                </span>
              </Link>
              <p className="d-inline-block">• Già segui</p>
              <p>{user?.title}</p>
              <p>
                {createdAt} •{" "}
                <i className="bi bi-globe-americas text-black"></i>
              </p>
            </Col>
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
          <Row className="commentSection d-flex justify-content-between">
            <p>
              <i className="bi bi-hand-thumbs-up-fill"></i> 104
            </p>
            <p> 880 commenti • 202 diffusioni post</p>
          </Row>
          <hr />
          <Row className="btnSection text-center" xs={4}>
            <Col className="px-0">
              <Button className="text-secondary">
                <i className="bi bi-hand-thumbs-up"></i> <br />
                <span>Consiglia</span>
              </Button>
            </Col>
            <Col className="px-0">
              <Button className="text-secondary">
                <i className="bi bi-chat-dots-fill"></i> <br />
                <span>Commenta</span>
              </Button>
            </Col>
            <Col className="px-0">
              <Button className="text-secondary">
                <i className="bi bi-arrow-repeat"></i>
                <br />
                <span>Diffondi</span>
              </Button>
            </Col>
            <Col className="px-0">
              <Button className="text-secondary">
                <i className="bi bi-send-fill"></i>
                <br />
                <span> Invia</span>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default SinglePost;

/* <Button
                   variant="primary"
                    onClick={() => {
                      setEditPost({
                        _id:"",
                        image:"",
                        text:"",
                        username:""
                        user:"", 
                        createdAt:"",});
                      handleSave();
                    }}
                  >
                    Delete Bio
                  </Button> */
