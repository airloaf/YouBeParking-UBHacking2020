import Iframe from 'react-iframe'
import React from 'react'
import axios from 'axios'
import mapDict from '../utils/LotFrames'

import { Container, Button, Row, Col, Form } from 'react-bootstrap'
import { Formik } from 'formik'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values, { setSubmitting }) {
        axios.post('/users/offer', {
            username: this.props.User.username,
            lot: values.lot,
            time: "0",
            description: values.description
        })
        .then((res)=>{
            console.log(res)
            this.props.history.push("/")
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render() {
        return (
            <React.Fragment>

                <Formik
                    initialValues={{
                        lot: 'jarvisB',
                        description: ""
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
                                <h1>Offer your parking spot</h1>
                                <Form.Label column sm="2"><h2>Select Lot</h2></Form.Label>
                                <Form.Row>
                                    <Col sm="1" />
                                    <Col sm="10">
                                        <Form.Control
                                            as="select"
                                            name="lot"
                                            value={values.lot}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        >
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
                                    </Col>
                                    <Col sm="1" />
                                </Form.Row>
                                <Form.Row>
                                    <Col sm={1} />
                                    <Col sm={10}>
                                        <Iframe
                                            url={mapDict[values.lot]}
                                            width="100%"
                                            height="450px"
                                            display="initial"
                                            position="relative"
                                        />
                                    </Col>
                                    <Col sm={1} />
                                </Form.Row>
                                <Form.Row>
                                    <Col sm={1}></Col>
                                    <Col sm={10}>
                                        <Form.Group controlId="exampleForm.ControlTextarea1">
                                            <Form.Label><h2>Description of your spot</h2></Form.Label>
                                            <Form.Control
                                                as="textarea"
                                                name="description"
                                                value={values.description}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                rows={5}
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={1}></Col>
                                </Form.Row>
                                <Row>
                                    <Col sm={1} />
                                    <Button type="submit" variant="outline-success" block><h1>Offer a Spot</h1></Button>
                                    <Col sm={1} />
                                </Row>
                            </Form>
                        )}
                </Formik>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        User: state.User
    }
}

export default connect(mapStateToProps, null)
(
    compose(withRouter)(Home)
)