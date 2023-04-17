import { Row } from "react-bootstrap"
import * as Icon from 'react-bootstrap-icons';

interface BoxInfoProps {
    title: string
}

const BoxInfo = ({title}:BoxInfoProps) => {
    return (
            <Row>
                <h2>{title}</h2>
                <Icon.Pencil />
                <Icon.Gear />
            </Row>
    )
}

export default BoxInfo