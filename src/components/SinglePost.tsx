import Button from "react-bootstrap/Button";
import { Post } from "../types/feedTypes";
const SinglePost = ({ _id, image, text, username, createdAt }: Post) => {
  return (
    <div className="sectionContainer">
      <div>
        <div className="PostButton d-inline-block">
          <img src="https://picsum.photos/48/48" alt="Foto profilo" />
        </div>
        <div className="PostProfile d-inline-block ms-3">
          <span className="d-inline-block">{username}</span>{" "}
          <p className="d-inline-block">• Già segui</p>
          <p>Avvocato direttore di leggepertutti.it</p>
          <p>
            {createdAt} • <i className="bi bi-globe-americas text-black"></i>{" "}
          </p>
        </div>
        <div className="PostText">
          <p>{text}</p>
        </div>
        <div
          className={
            image === undefined
              ? "text-center mb-2 d-none"
              : "text-center mb-2 d-block"
          }
        >
          <img className="w-100" src={image} alt="Foto post" />
        </div>
        <div className="CommentSection d-flex justify-content-between">
          <p>
            <i className="bi bi-hand-thumbs-up-fill"></i> {_id}
          </p>
          <p> 880 commenti • 202 diffusioni post</p>
        </div>
        <hr />
        <div className="Btnsection d-flex justify-content-evenly align-items-center">
          <Button className="text-secondary" variant="ms-1">
            <i className=" fs-5 me-1 bi bi-hand-thumbs-up"></i> Consiglia
          </Button>{" "}
          <Button className="text-secondary" variant="ms-1">
            <i className=" fs-5 me-1 bi bi-chat-dots-fill"></i> Commenta
          </Button>{" "}
          <Button className="text-secondary" variant="ms-1">
            <i className=" fs-5 me-1 bi bi-arrow-repeat"></i> Diffondi il post
          </Button>{" "}
          <Button className="text-secondary" variant="ms-1">
            <i className=" fs-5 me-1 bi bi-send-fill"></i> Invia
          </Button>{" "}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
