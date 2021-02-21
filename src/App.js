// running from index.js because otherwise background color is not honored
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Registry from './components/Registry';
import RSVP from './components/RSVP';

class App extends Component {
    render() {
        return (
            <React.StrictMode>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/About" component={About} />
                        <Route path="/Contact" component={Contact} />
                        <Route path="/Registry" component={Registry} />
                        <Route path="/RSVP" component={RSVP} />
                    </Switch>
                </Router>
            </React.StrictMode>
        );
    }
}

export default App;
