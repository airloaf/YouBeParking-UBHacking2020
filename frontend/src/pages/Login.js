import React from 'react'

import {ButtonGroup, Button, Col, Row, Form} from 'react-bootstrap'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Form class="form-signin">
                    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
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
                </Form>
                <ButtonGroup>
                    <Button variant="primary" type="submit">Sign in</Button>
                    <Button variant="primary" href="register">Register</Button>
                </ButtonGroup>
            </React.Fragment>
        )
    }

}