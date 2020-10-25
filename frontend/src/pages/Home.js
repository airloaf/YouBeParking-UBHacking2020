import React from 'react'
import Iframe from 'react-iframe'
import { Row, Col } from 'react-bootstrap'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <header class="masthead bg-info text-dark text-center">
                    <div class="container d-flex align-items-center flex-column">
                        <h1 class="masthead-heading mb-0"><br />YouBeParking!</h1>
                        <h3 class="masthead-subheading font-weight-light mb-5">A parksharing service for UB's North Campus</h3>
                    </div>
                </header>
                <Row>
                    <Iframe
                        url={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4907.196971209903!2d-78.78765820609024!3d43.00277140421098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d373d2261b049f%3A0x2868694d4fc4f56f!2sUniversity%20at%20Buffalo!5e0!3m2!1sen!2sus!4v1603609735004!5m2!1sen!2sus"}
                        width="100%"
                        height="500px"
                        display="initial"
                        position="relative"
                    />
                </Row>

                <section class="page-section portfolio m-3" id="portfolio" >
                    <div class="container">
                        <h2 class="page-section-heading text-center text-muted m-5">How It Works</h2>
                        <h3 class="masthead-subheading text-info font-weight-light mb-0">Offer up your parking spot for people who need it.</h3>
                        <h3 class="masthead-subheading text-info font-weight-light mb-0">- or -</h3>
                        <h3 class="masthead-subheading text-info font-weight-light mb-5">Request a spot from the list of current offers.</h3>
                        <h1 class="page-section-heading text-center text-muted mt-3">Create an account and start sharing!</h1>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}