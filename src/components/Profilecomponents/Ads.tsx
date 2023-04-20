import { Row, Col } from "react-bootstrap"

export const Ads = () => {
    return (<Col md={3} className="d-none d-md-block">
        <Row className="g-3">
            <Col xs={12}>
                <div className="sectionContainer d-flex flex-column text-secondary">
                    <div className="d-flex flex-row">
                        <h6>Modifica il profilo pubblico e l'URL</h6>
                        <i className="bi bi-question-circle-fill ms-3"></i>
                    </div>
                    <hr />
                    <div className="d-flex flex-row ">
                        <h6>Aggiungi il tuo profilo in un'altra lingua</h6>
                        <i className="bi bi-question-circle-fill ms-5"></i>
                    </div>
                </div>
            </Col>
            <Col xs={12}>
                <div className="sectionContainer">
                    <h2>Esperienza</h2>
                </div>
            </Col>
            <Col xs={12}>
                <div className="sectionContainer">
                    <h2>Esperienza</h2>
                </div>
            </Col>
        </Row >
    </Col >)
}