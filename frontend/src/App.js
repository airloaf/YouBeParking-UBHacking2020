import './App.css';

import Home from './pages/Home';
import Navigation from './components/Navigation';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Offer from './pages/Offer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/offer">
            <Offer />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
