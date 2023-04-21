import Button from "react-bootstrap/Button";
import { Post } from "../../types/feedTypes";
import { Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SinglePost = ({ image, text, username, user, createdAt }: Post) => {
  const [expanded, setExpanded] = useState(false);
  const [timePassed, setTimePassed] = useState("");

  function dateDistance() {
    const data = new Date(createdAt!);
    const oggi = new Date();
    const distanzaInMsec = oggi.getTime() - data.getTime();
    const distanzaInGiorni = Math.floor(distanzaInMsec / (1000 * 60 * 60 * 24));
    let tempo: string = "";
    if (distanzaInGiorni === 0) {
      tempo = "oggi";
    } else if (distanzaInGiorni === 1) {
      tempo = "ieri";
    } else {
      tempo = `${distanzaInGiorni} giorni fa`;
    }
    setTimePassed(tempo);
  }

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    if (text.length < 200) {
      setExpanded(true);
      dateDistance();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                {timePassed} •{" "}
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
            <Col xs={3}>
              <p>
                <i className="bi bi-hand-thumbs-up-fill"></i> 104
              </p>
            </Col>
            <Col className="text-end">
              <p> 880 commenti • 202 diffusioni post</p>
            </Col>
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
                <span>Invia</span>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default SinglePost;
