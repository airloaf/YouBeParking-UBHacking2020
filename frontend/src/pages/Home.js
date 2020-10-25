import React from 'react'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <header class="masthead bg-info text-dark text-center">
                    <div class="container d-flex align-items-center flex-column">
                        <h1 class="masthead-heading mb-0"><br/>YouBeParking!</h1>
                        <h3 class="masthead-subheading font-weight-light mb-5">A parksharing service for UB's North Campus</h3>
                    </div>
                </header>
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