import React from 'react'
import {Navbar, Nav} from "react-bootstrap"

import { connect } from 'react-redux'

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.User)
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">YouBeParking</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto" />
                    <Nav>
                        <Nav.Link href="/login">
                            {this.props.User.username?
                                "Logged in as: " + this.props.User.username
                                :
                                "Login"
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        User: state.User
    }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)