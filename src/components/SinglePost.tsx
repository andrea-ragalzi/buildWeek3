import Button from "react-bootstrap/Button";
import { Post } from "../types/feedTypes";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";

const SinglePost = ({ image, text, username, user, createdAt }: Post) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="sectionContainer">
      <Row>
        <Col xs={12}>
          <Row>
            <Col xs={2}>
              <img
                src={user?.image}
                alt="Foto profilo"
                className="postProfileImage"
              />
            </Col>
            <Col className="postProfile">
              <span className="d-inline-block">
                {user?.name} {user?.surname}
              </span>
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
              <p className="linkBehave" onClick={toggleExpand}>
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
