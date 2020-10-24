import React from 'react'

import axios from 'axios'

import { connect } from 'react-redux'
import { loginUser } from '../redux/Actions';

import { ButtonGroup, Button, Col, Row, Form } from 'react-bootstrap'
import { Formik } from 'formik'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    validate(values) {
        const errors = {};
        if (!values.username) {
            errors.username = 'Required';
        }
        if (!values.password) {
            errors.password = "Required";
        }
        return errors;
    }

    onSubmit(values, { setSubmitting }) {
        axios.post('/users/login', {
            username: values.username,
            password: values.password
        })
        .then((res)=>{
            console.log("logging ing");
            this.props.loginUser(values.username)
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    validate={this.validate}
                    onSubmit={this.onSubmit}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Row>
                                    <Col sm="1" />
                                    <Form.Label column sm="2">username</Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="username" name="username" placeholder="Username" onChange={handleChange} onBlur={handleBlur} value={values.username} isInvalid={!!errors.username} />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.username}
                                        </Form.Control.Feedback>
                                    </Col>
                                    <Col sm="1" />
                                </Form.Row>
                                <Form.Row>
                                    <Col sm="1" />
                                    <Form.Label column sm="2">Password</Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} isInvalid={!!errors.username} />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.password}
                                        </Form.Control.Feedback>
                                    </Col>
                                    <Col sm="1" />
                                </Form.Row>
                                <ButtonGroup>
                                    <Button variant="primary" type="submit" disabled={isSubmitting} >Sign in</Button>
                                    <Button variant="primary" href="register" >Register</Button>
                                </ButtonGroup>
                            </Form>
                        )}
                </Formik>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {loginUser}

export default connect(mapStateToProps, mapDispatchToProps)(Login)