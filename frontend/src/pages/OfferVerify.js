import Iframe from 'react-iframe'
import React from 'react'
import axios from "axios"
import mapDict from "../utils/LotFrames";

import { Button, ListGroup, Container, Row, Col, Form } from "react-bootstrap"
import { Offer } from '../redux/Actions';
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { toast } from 'react-toastify';
import { withRouter } from "react-router-dom";

class OfferVerify extends React.Component {
  constructor(props) {
    super(props);
  }

  submitForm() {
    console.log(this.props.User.offer.offer_id)
    axios.post('/users/offerSuccess', {
      offer_id: this.props.User.offer.offer_id,
    })
      .then((response) => {
        console.log(response)
        toast.success('Parking spot reserved', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        this.props.history.push("/")
      })
      .catch((err) => {
        console.log(err)
      })

  }

  render() {
    return (
      <React.Fragment>
        <ListGroup>

          <Form.Label><h2>{this.props.User.offer.lot}</h2></Form.Label>
          <Iframe
            url={mapDict[this.props.User.offer.lot]}
            width="100%"
            height="450px"
            display="initial"
            position="relative"
          />
          <h1>{this.props.User.offer.description}</h1>
          <ListGroup.Item variant='primary' action onClick={() => this.submitForm()}>
            <Button variant="primary">Complete Transaction</Button>{' '}
          </ListGroup.Item>

        </ListGroup>
      </React.Fragment>
    )
  }

}


const mapStateToProps = (state) => {
  const { User } = state;
  return {
    User
  }
}

const mapDispatchToProps = { Offer }

export default connect(mapStateToProps, mapDispatchToProps)
  (
    compose(withRouter)(OfferVerify)
  )