import React from 'react'
import { connect } from 'react-redux'

import { Nav, Navbar } from "react-bootstrap"

import { logoutUser } from '../../redux/Actions';

class LoggedIn extends React.Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout(){
        this.props.logoutUser();
    }

    render() {
        return (
            <React.Fragment>
                < Nav >
                    <Navbar.Text>
                        Signed In as: {this.props.user.username}
                    </Navbar.Text>
                    <Nav.Link href="/" onClick={this.logout}>
                        LogOut
                    </Nav.Link>
                </Nav >
            </React.Fragment>
        )
    }
}

export default connect(null, {logoutUser})(LoggedIn)