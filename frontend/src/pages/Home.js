import React from 'react'

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <header class="masthead bg-success text-white text-center">
                    <div class="container d-flex align-items-center flex-column">
                        <h1 class="masthead-heading mb-0"><br/>YouBeParking!</h1>
                        <p class="masthead-subheading font-weight-light mb-5">A parksharing service for UB's North Campus</p>
                    </div>
                </header>
                <section class="page-section portfolio m-3" id="portfolio" >
                    <div class="container">
                        <h2 class="page-section-heading text-center text-secondary m-5">How It Works</h2>
                        <p class="masthead-subheading font-weight-light mb-0">Offer up your parking spot for people who need it.</p>
                        <p class="masthead-subheading font-weight-light mb-0">- or -</p>
                        <p class="masthead-subheading font-weight-light mb-5">Request a spot from the list of current offers.</p>
                        <h1 class="page-section-heading text-center text-secondary mt-3">Create an account and start sharing!</h1>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}