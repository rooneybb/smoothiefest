// running from index.js because otherwise background color is not honored
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import About from './components/About';
import Registry from './components/Registry';
import RSVP from './components/RSVP';
import WeddingPhotos from './components/WeddingPhotos';
import HoneymoonPhotos from './components/HoneymoonPhotos';
import WeddingVideo from './components/WeddingVideo';

class App extends Component {
    render() {
        return (
            <React.StrictMode>
                <Router>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/About" component={About} />
                        <Route path="/Registry" component={Registry} />
                        <Route path="/RSVP" component={RSVP} />
                        <Route path="/WeddingPhotos" component={WeddingPhotos} />
                        <Route path="/HoneymoonPhotos" component={HoneymoonPhotos} />
                        <Route path="/WeddingVideo" component={WeddingVideo} />
                    </Switch>
                </Router>
            </React.StrictMode>
        );
    }
}

export default App;
