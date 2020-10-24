import React from 'react'
import '../styles.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <header class="masthead bg-primary text-white text-center">
                    <div class="container d-flex align-items-center flex-column">
                        <img class="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="" />
                        <h1 class="masthead-heading text-uppercase mb-0">YouBeParking!</h1>
                        <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <p class="masthead-subheading font-weight-light mb-0">A parksharing service for UB's North Campus</p>
                    </div>
                </header>
                <section class="page-section portfolio" id="portfolio">
                    <div class="container">
                        <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">How it works</h2>
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <div class="row">
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/cabin.png" alt="" />
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/cake.png" alt="" />
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-5">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/circus.png" alt="" />
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/game.png" alt="" />
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/safe.png" alt="" />
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-4">
                                <div class="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                                    <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                        <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i></div>
                                    </div>
                                    <img class="img-fluid" src="assets/img/portfolio/submarine.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="page-section bg-primary text-white mb-0" id="about">
                    <div class="container">
                        <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
                        <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 ml-auto"><p class="lead">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p></div>
                            <div class="col-lg-4 mr-auto"><p class="lead">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p></div>
                        </div>
                        <div class="text-center mt-4">
                            <a class="btn btn-xl btn-outline-light" href="https://startbootstrap.com/themes/freelancer/">
                                <i class="fas fa-download mr-2"></i>
                            </a>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}