import React from 'react'

import axios from 'axios'

import { connect } from 'react-redux'
import { loginUser } from '../redux/Actions';

import { withRouter } from "react-router-dom";
import { compose } from 'recompose'

import { ButtonGroup, Button, Col, Row, Form } from 'react-bootstrap'
import { Formik } from 'formik'

import { toast } from 'react-toastify'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            username: null,
            password: null,
            confirmPassword: null,
        };

        this.validate = this.validate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    validate(values) {
        const errors = {};
        if (!values.email) {
            errors.email = 'Required';
        }
        if (!values.username) {
            errors.username = 'Required';
        }
        if (!values.password) {
            errors.password = "Required";
        }
        if (!values.confirmPass) {
            errors.confirmPass = "Required";
        }
        if (values.confirmPass != values.password) {
            errors.confirmPass = "Passwords do not match!"
        }
        return errors;
    }

    onSubmit(values, { setSubmitting }) {
        console.log(JSON.stringify(values, null, 2));
        axios.post('/users/register', {
            email: values.email,
            username: values.username,
            password: values.password,
            confirm: values.confirmPass
        })
            .then((res) => {
                toast.info('Account Registered', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                this.props.history.push("/")
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        return (
            <React.Fragment>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <Formik
                    initialValues={{
                        email: '',
                        username: '',
                        password: '',
                        confirmPass: ''
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
                                    <Form.Label column sm="2">email</Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="email" name="email" placeholder="example@email.com" onChange={handleChange} onBlur={handleBlur} value={values.email} isInvalid={!!errors.email} />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.email}
                                        </Form.Control.Feedback>
                                    </Col>
                                    <Col sm="1" />
                                </Form.Row>
                                <br />
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
                                <br />
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
                                <br />
                                <Form.Row>
                                    <Col sm="1" />
                                    <Form.Label column sm="2">Confirm Password</Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="password" placeholder="Confirm Password" name="confirmPass" onChange={handleChange} onBlur={handleBlur} value={values.confirmPass} isInvalid={!!errors.confirmPass} />
                                        <Form.Control.Feedback type="invalid">
                                            {errors.confirmPass}
                                        </Form.Control.Feedback>
                                    </Col>
                                    <Col sm="1" />
                                </Form.Row>
                                <br />
                                <Button variant="primary" type="submit" disabled={isSubmitting} >Register</Button>
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

const mapDispatchToProps = { loginUser }

export default connect(mapStateToProps, mapDispatchToProps)
    (
        compose(withRouter)(Register)
    )