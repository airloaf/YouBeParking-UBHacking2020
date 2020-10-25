import React from 'react'
import { connect } from 'react-redux'
import { Nav } from "react-bootstrap"

class LoggedOut extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                < Nav >
                    <Nav.Link href="/login" onClick={this.logout}>
                        LogIn
                    </Nav.Link>
                </Nav >
        )
    }
}

export default connect(null, null)(LoggedOut)