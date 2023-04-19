import { useState } from "react";
import { ListGroup } from "react-bootstrap";

export const Messages = () => {
  const [onoff, setOnoff] = useState(true);

  return (
    <div>
      {onoff ? (
        <div className="Collapsedmessage" onClick={() => setOnoff(!onoff)}>
          <div className="d-flex justify-content-around mt-2">
            <span>
              {" "}
              <img
                src="https://picsum.photos/50/50"
                width="30px"
                height="30px"
                className="rounded-circle"
                alt="avatar_small"
              />
              Messaggistica{" "}
            </span>

            <div>
              <i className="bi bi-three-dots Msghover"></i>
              <i className="bi bi-pencil-square mx-3 Msghover"></i>
              <i className="bi bi-caret-up Msghover"></i>
            </div>
          </div>
        </div>
      ) : (
        <div className="Uncollapsedmessage">
          <div
            className="d-flex justify-content-around mt-2 border-bottom"
            style={{ height: "35px" }}
          >
            <span onClick={() => setOnoff(!onoff)}>
              {" "}
              <img
                src="https://picsum.photos/50/50"
                width="30px"
                height="30px"
                className="rounded-circle"
                alt="avatar_small"
              />
              Messaggistica{" "}
            </span>

            <div>
              <i className="bi bi-three-dots Msghover"></i>
              <i className="bi bi-pencil-square mx-3 Msghover"></i>
              <i
                onClick={() => setOnoff(!onoff)}
                className="bi bi-caret-down Msghover"
              ></i>
            </div>
          </div>
          <div className="">
            <input
              type="search"
              className="my-2 ms-2"
              placeholder="Write Here..."
              style={{
                width: "283px",
                backgroundColor: "lightgrey",
                border: "none",
              }}
            ></input>
          </div>

          <ListGroup>
            <ListGroup.Item className="Msghoverdue">
              <img
                src="https://picsum.photos/70/70"
                width="45px"
                height="45px"
                className="rounded-circle floatable border-bottom"
                alt="avatar_small"
              />
              <div className="Users"> Mario </div> <div> </div>
            </ListGroup.Item>
          </ListGroup>
        </div>
      )}
    </div>
  );
};
