import React from 'react'

import {ButtonGroup, Button, Col, Row, Form} from 'react-bootstrap'

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "" 
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        console.log(e.target.id);
        console.log(e.target.value);
        var newState = {};
        newState[e.target.id] = e.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <React.Fragment>
                <Form className="form-signin">
                    <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                    <Form.Group controlId="username">
                        <Row>
                            <Col sm="1" />
                            <Form.Label column sm="2">username</Form.Label>
                            <Col sm="8">
                                <Form.Control controlid="username" type="username" placeholder="Enter username" onChange={this.handleChange} />
                            </Col>
                            <Col sm="1" />
                        </Row>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Row>
                            <Col sm="1" />
                            <Form.Label column sm="2">Password</Form.Label>
                            <Col sm="8">
                                <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                            </Col>
                            <Col sm="1" />
                        </Row>
                    </Form.Group>
                </Form>
                <ButtonGroup>
                    <Button variant="primary" type="submit" onSubmit={()=>{console.log("Submitted")}}>Sign in</Button>
                    <Button variant="primary" href="register">Register</Button>
                </ButtonGroup>
            </React.Fragment>
        )
    }

}