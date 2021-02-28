import React, { Component } from 'react';
import './Home.css';
import Image from 'react-bootstrap/Image';
import smoothieHome from '../resources/images/smoothieHome.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <h2 className="smoothieFestHeader">09-18-2021</h2>
                <Image className="stillLife" src={smoothieHome} rounded />
            </div>
        );
    }
}

export default Home;
