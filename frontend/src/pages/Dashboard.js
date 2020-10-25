import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <br />
                <Row>
                    <Col sm={2} />
                    <Col>
                        <Button href="/requestoffer" variant="primary" block 
                            style = {{
                                padding: '100px'
                            }}
                        ><h1>Request a Spot</h1></Button>
                    </Col>
                    <Col sm={2} />
                </Row>

                <br />

                <Row>
                    <Col sm={2} />
                    <Col>
                        <Button href="/offer" variant="success" block
                            style = {{
                                padding: '100px'
                            }}
                        ><h1>Offer a Spot</h1></Button>
                    </Col>
                    <Col sm={2} />
                </Row>
            </React.Fragment>
        )
    }
}