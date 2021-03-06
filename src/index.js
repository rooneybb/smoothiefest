import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
// import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Home from './components/Home';
import About from './components/About';
import Photos from './components/Photos';
import Registry from './components/Registry';
import RSVP from './components/RSVP';
import Attendees from './components/Attendees';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/About" component={About} />
                <Route path="/Photos" component={Photos} />
                <Route path="/Registry" component={Registry} />
                <Route path="/RSVP" component={RSVP} />
                <Route path="/Attendees" component={Attendees} />
            </Switch>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
