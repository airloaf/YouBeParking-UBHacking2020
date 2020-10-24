import React from 'react'

import {ButtonGroup, Button, Col, Row, Form} from 'react-bootstrap'

export default class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Form class="form-signin">
                    <h1 class="h3 mb-3 font-weight-normal">Please Register</h1>
                    <Form.Group>
                        <Row>
                            <Col sm="1" />
                            <Form.Label column sm="2">Email Address</Form.Label>
                            <Col sm="8">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Col>
                            <Col sm="1" />
                        </Row>
                    </Form.Group>
                    <br />
                    <Form.Group>
                        <Row>
                            <Col sm="1" />
                            <Form.Label column sm="2">Username</Form.Label>
                            <Col sm="8">
                                <Form.Control type="username" placeholder="Enter username" />
                            </Col>
                            <Col sm="1" />
                        </Row>
                    </Form.Group>
                    <br />
                    <Form.Group controlId="formBasicPassword">
                        <Row>
                            <Col sm="1" />
                            <Form.Label column sm="2">Password</Form.Label>
                            <Col sm="8">
                                <Form.Control type="password" placeholder="Password" />
                            </Col>
                            <Col sm="1" />
                        </Row>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Row>
                            <Col sm="1" />
                            <Form.Label column sm="2">Confirm Password</Form.Label>
                            <Col sm="8">
                                <Form.Control type="password" placeholder="Confirm Password" />
                            </Col>
                            <Col sm="1" />
                        </Row>
                        <Form.Text className="text-muted">
                            Password has a minimum of 6 characters and a maximum of 20
                        </Form.Text>
                    </Form.Group>
                </Form>
                <Button variant="primary" type="submit">Register</Button>
            </React.Fragment>
        )
    }

}