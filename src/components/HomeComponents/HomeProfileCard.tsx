import { Col, Image, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../redux/store/store";

const HomeProfileCard = () => {
  const myProfile = useSelector((state: RootState) => state.profile.me);
  return (
    <div className="sectionContainer homeProfileCard">
      <Col xs={12}>
        <Row className="m-0 p-0">
          <div className="imgHomeContainer">
            <img
              className="homeProfileBanner"
              src="https://picsum.photos/400/400"
              alt="Home profile"
            />
            <Link to="/profile/me">
              <button className="homeProfileButton">
                <Image
                  src={myProfile?.image}
                  alt="profile"
                  className="profilePic"
                ></Image>
              </button>
            </Link>
          </div>
          <Link className="linkProfileCard linkBehave" to="/profile/me">
            <h6>
              {myProfile?.name} {myProfile?.surname}
            </h6>
            <p>
              <small>{myProfile?.title}</small>
            </p>
          </Link>
        </Row>
        <hr />
        <Row className="fixMyPad">
          <Col xs={12}>
            <b> Analisi e strumenti </b>
            <br />
            <p>200 visualizzazioni del profilo</p>
          </Col>
          <hr />
          <Col xs={12}>
            Accedi a strumenti e informazioni in esclusiva <br></br>
            <p className="text-secondary ">
              <b>🟨Prova Premium gratis</b>
            </p>
          </Col>
          <hr />
          <Col xs={12}>
            <i className="bi bi-bookmark-fill me-1 text-secondary"></i>
            <p className="d-inline text-dark">
              <b>I miei elementi</b>
            </p>
            <div>
              <br />
            </div>
          </Col>
        </Row>
      </Col>
    </div>
  );
};

export default HomeProfileCard;
