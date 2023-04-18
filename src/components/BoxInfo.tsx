import { Container, Row } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

interface BoxInfoProps {
  title: string;
}

const BoxInfo = ({ title }: BoxInfoProps) => {
  return (
    <div className="d-flex justify-content-between py-2 px-3">
        <h2>{title}</h2>
        <div className="p-2 ">
        <Link to={""}><Icon.PlusLg className="CardIcons mx-3 fs-4 text-dark"/></Link>
        <Link to={""}><Icon.Pencil className="CardIcons mx-3 fs-4 text-dark"/></Link>
        </div>
     </div>
  );
};

export default BoxInfo;
