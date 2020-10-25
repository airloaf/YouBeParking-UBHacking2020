import './App.css';

import React from 'react';
import Home from './pages/Home';
import Navigation from './components/Navigation/Navigation';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import OfferVerify from './pages/OfferVerify';
import RequestOffer from './pages/RequestOffer';
import Offer from './pages/Offer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.notify = this.notify.bind(this)
  }

  notify() {
    toast("Wow so easy !");
  }

  render() {
    const isAuthenticated = this.props.User && this.props.User['username'];

    return (
      <div className="App">
        <Navigation />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />

        <Router>
          <Switch>
            <PrivateRoute isAuthenticated={isAuthenticated} component={Offer} path="/offer" exact />
            <PrivateRoute isAuthenticated={isAuthenticated} component={Dashboard} path="/dashboard" exact />
            <PrivateRoute isAuthenticated={isAuthenticated} component={OfferVerify} path="/offerverify/:id/" exact />
            <PrivateRoute isAuthenticated={isAuthenticated} component={RequestOffer} path="/requestoffer" exact />
            <PublicRoute restricted={true} isAuthenticated={isAuthenticated} component={Home} path="/" exact />
            <PublicRoute restricted={true} isAuthenticated={isAuthenticated} component={Login} path="/login" exact />
            <PublicRoute restricted={true} isAuthenticated={isAuthenticated} component={Register} path="/register" exact />
          </Switch>
        </Router>

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    User: state.User
  }
}

export default connect(mapStateToProps)(App)