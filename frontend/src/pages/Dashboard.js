import React from 'react'
import { Button } from 'react-bootstrap'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div><Button href="/request" variant="outline-primary" block><h1>Request a Spot</h1></Button></div>
                <div><Button href="/offer" variant="outline-success" block><h1>Offer a Spot</h1></Button></div>
            </React.Fragment>
        )
    }
}