import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label><h2>Lot</h2></Form.Label>
                            <Form.Control type="email" placeholder="Which parking lot are you in?" />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label><h2>Description of your spot</h2></Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <div><Button href="/offer" variant="outline-success" block><h1>Offer a Spot</h1></Button></div>
                    </Col>
                    <Col></Col>
                </Row>
                </Container>
            </React.Fragment>
        )
    }
}