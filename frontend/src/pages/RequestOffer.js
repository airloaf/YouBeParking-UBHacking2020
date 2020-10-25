import React from 'react'
import { Button, ListGroup ,Container, Row,Col} from "react-bootstrap"
import axios from "axios"
import {Link, withRouter, Redirect} from "react-router-dom";
import history from './../history';
import { Offer } from '../redux/Actions'; 
import { compose } from 'recompose'
import { connect } from 'react-redux'

class RequestOffer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            offer: [],
            offers: [],
            offer_id: null,
            username: '',
            lot: '',
            description: '',
        }
        this.generateListGroup = this.generateListGroup.bind(this)
    }

    componentDidMount() {
        axios.get('/users/alloffers/20')
        .then((res)=>{
            console.log(res);
            this.setState({
                offers: res.data.offers,
                error: false
            });
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    render(){
            return(
                <React.Fragment>
                <ListGroup>
                <ListGroup.Item variant = 'dark'>
                <Row>
                        <Col>Username</Col>
                        <Col>Lot</Col>
                        <Col>Description</Col>
                    </Row>
                </ListGroup.Item>
                {this.generateListGroup(this.state.offers)}
                </ListGroup>
                </React.Fragment>
            )

        }

    submitForm(offer) {
        console.log(offer)
        this.props.Offer(offer)
        this.props.history.push('/offerverify'+'/'+offer.offer_id); // <--- The page you want to redirect your user to.
        
    }

    generateListGroup(offers) {
        const histList = [];
        for (const [index, offer] of offers.entries()) {
            histList.push(
            <ListGroup.Item variant = 'primary' action key={offer.offer_id}  onClick={() => this.submitForm(offer)}>
                    <Row>
                        <Col>{offer.username}</Col>
                        <Col>{offer.lot}</Col>
                        <Col>{offer.description}</Col>
                    </Row>
                 </ListGroup.Item>);
        }
        return histList;
    }


}

const mapStateToProps = (state) => {
    const {User} = state;
    return {
        User
    }
}

const mapDispatchToProps = {Offer}

export default connect(mapStateToProps, mapDispatchToProps)
(
    compose(withRouter)(RequestOffer)
)
