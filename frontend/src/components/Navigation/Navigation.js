import React from 'react'
import {Navbar, Nav} from "react-bootstrap"

import LoggedIn from "./LoggedIn"
import LoggedOut from "./LoggedOut"

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
                        {this.props.User.username?
                            <LoggedIn user={this.props.User} />
                            :
                            <LoggedOut />
                        }
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