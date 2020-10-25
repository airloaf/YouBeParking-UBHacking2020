import './App.css';

import React from 'react';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import Register from './pages/Register';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from 'react-redux'

import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

function Dashboard() {
  return (
    <h1>Dashboard</h1>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const isAuthenticated = this.props.User && this.props.User['username'];

    return (
      <div className="App">
        <Navigation />

        <Router>
          <Switch>
            <PrivateRoute isAuthenticated={isAuthenticated} component={Dashboard} path="/dashboard" exact />
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