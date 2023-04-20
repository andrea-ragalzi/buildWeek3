import { Col } from "react-bootstrap"
import BoxInfo from "../BoxInfo"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store/store"

export const Info = () => {

    const profile = useSelector((state: RootState) => state.profile.me);

    console.log(profile)
    return (<div>{profile ? (
        <Col xs={12}>
            <div
                style={{ width: "100%", backgroundColor: "white" }}
                className="border border-1 border-secondary rounded-3"
            >
                <BoxInfo title="Informazioni" />
                <p className="ms-3">{profile.bio} </p>
            </div>
        </Col>
    ) : (<></>)}</div>)
}