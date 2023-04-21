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
                <div className="sectionContainer p-0 border border-none">
                    <img src="/img/fotoLinkedin.png" className="img-fluid" alt="foto linkedin"></img>
                </div>
            </Col>
            <Col xs={12}>
                <div className="sectionContainer">
                    <h6 className="text-secondary">Altri profili consultati</h6>
                    <div className="d-flex flex-row fs-6 ">
                        <div className="me-3"><img src="https://picsum.photos/48/48" className="postProfileImage" alt="" /> </div>
                        <div className="profileRightSection"><p> <b> David Scattone </b>• 3°+ <br></br>Impiegato presso TRE ESSE <br></br>ITALIA Srl</p></div>
                    </div>
                </div>
            </Col>
        </Row >
    </Col >)
}