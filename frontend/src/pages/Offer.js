import React from 'react'
import Iframe from 'react-iframe'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import mapDict from '../utils/LotFrames'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col sm={1}></Col>
                        <Col sm={10}>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label><h2>Lot</h2></Form.Label>
                                <Form.Control as="select">
                                    <option value="arena">Arena</option>
                                    <option value="alumni">Alumni A, B & C</option>
                                    <option value="bairdA">Baird A</option>
                                    <option value="bairdB">Baird B</option>
                                    <option value="cook">Cooke A & B</option>
                                    <option value="crofts">Crofts</option>
                                    <option value="fargo">Fargo</option>
                                    <option value="furnas">Furnas</option>
                                    <option value="governorsA">Governors A</option>
                                    <option value="governorsBCD">Governors B, C & D</option>
                                    <option value="governorsE">Governors E</option>
                                    <option value="hotchA">Hochstetter A</option>
                                    <option value="hotchB">Hochstetter B</option>
                                    <option value="jacobsA">Jacobs A</option>
                                    <option value="jacobsBC">Jacobs B & C</option>
                                    <option value="jarvisA">Jarvis A</option>
                                    <option value="jarvisB">Jarvis B</option>
                                    <option value="ketter">Ketter</option>
                                    <option value="laSalle">Lake LaSalle</option>
                                    <option value="redJacket">Red Jacket</option>
                                    <option value="richmondA">Richmond A</option>
                                    <option value="richmondB">Richmond B</option>
                                    <option value="specialEvents">Special Event Parking</option>
                                    <option value="stadium">Stadium</option>
                                    <option value="sleeAB">Slee A & B</option>
                                </Form.Control>
                            </Form.Group>
                            <Iframe
                                url={mapDict['jarvisB']}
                                width="100%"
                                height="450px"
                                display="initial"
                                position="relative"
                            />
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label><h2>Description of your spot</h2></Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <div><Button href="/offer" variant="outline-success" block><h1>Offer a Spot</h1></Button></div>
                        </Col>
                        <Col sm={1}></Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}