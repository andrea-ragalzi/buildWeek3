import { Col } from "react-bootstrap"
import BoxInfo from "../BoxInfo"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"
import { Profile } from "../../types/profileTypes"

export const Info = ({
    bio,
}: Profile) => {


    return (<div>{bio ? (
        <Col xs={12}>
            <div
                style={{ width: "100%", backgroundColor: "white" }}
                className="border border-1 border-secondary rounded-3"
            >
                <BoxInfo title="Informazioni" />
                <p className="ms-3">{bio} </p>
            </div>
        </Col>
    ) : (<></>)}</div>)
}