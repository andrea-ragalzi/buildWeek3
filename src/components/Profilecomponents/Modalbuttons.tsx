import { useState } from "react";
import { Collapse } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { Modal } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';

export const Modalbuttons = () => {
    const [open, setOpen] = useState(false);
    const [opensecond, setOpensec] = useState(false);
    const [openthird, setOpenthir] = useState(false);
    const [lgShow, setLgShow] = useState(false);


    return (<div className="ps-0 ms-0 d-flex">

        <Dropdown className="">
            <Dropdown.Toggle className="btnBlue ps-0 ms-0" id="dropdown-basic">
                <span className="mx-2">Disponibile per</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <button className="btnBlue ps-0 ms-0" onClick={() => setLgShow(true)}>
            <span className="mx-2"> Aggiungi <span className="d-none d-md-none d-lg-block d-xl-inline"> sezione al profilo </span></span>
        </button>

        <Dropdown>
            <Dropdown.Toggle className="btnGrey ps-0 ms-0" id="dropdown-basic">
                <span className="mx-3">Altro</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Modal
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    Aggiungi <span className="d-md-none"> sezione al profilo </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <button
                        className="unstyledbtn"
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                    >
                        Sezioni Principali
                    </button>

                    <Collapse in={open}>
                        <ListGroup id="example-collapse-text">
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi foto del profilo</button></ListGroup.Item>
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi informazioni</button></ListGroup.Item>
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi grado di formazione</button></ListGroup.Item>
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi posizione lavorativa</button></ListGroup.Item>
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi pausa lavorativa</button></ListGroup.Item>
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi competenze</button></ListGroup.Item>
                        </ListGroup>


                    </Collapse>

                </div>
                <div>
                    <button
                        className="unstyledbtn"
                        onClick={() => setOpensec(!opensecond)}
                        aria-controls="example-collapse-text"
                        aria-expanded={opensecond}
                    >
                        Sezioni consigliate
                    </button>
                    <Collapse in={opensecond}>
                        <ListGroup id="example-collapse-text">
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi elementi in primo piano</button></ListGroup.Item>
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi licenze e certificazioni</button></ListGroup.Item>
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi Aggiungi corsi</button></ListGroup.Item>
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi Aggiungi referenze</button></ListGroup.Item>
                        </ListGroup>

                    </Collapse>

                </div>
                <div>
                    <button
                        className="unstyledbtn"
                        onClick={() => setOpenthir(!openthird)}
                        aria-controls="example-collapse-text"
                        aria-expanded={openthird}
                    >
                        Altro
                    </button>

                    <Collapse in={openthird}>
                        <ListGroup id="example-collapse-text">
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi esperienza di volontariato</button></ListGroup.Item>
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi pubblicazioni</button></ListGroup.Item>
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi brevetti</button></ListGroup.Item>
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi progetti</button></ListGroup.Item>
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi votazioni esame </button></ListGroup.Item>
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi lingue </button></ListGroup.Item>
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi organizzazioni </button></ListGroup.Item>
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi cause </button></ListGroup.Item>
                            <ListGroup.Item><button className="unstyledbtn py-0 my-0 px-0">Aggiungi informazioni di contatto </button></ListGroup.Item>
                        </ListGroup>

                    </Collapse>

                </div>
            </Modal.Body>
        </Modal>

    </div>)
}