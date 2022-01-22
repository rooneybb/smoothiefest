import React, { Component } from 'react';
import './Home.css';
import Image from 'react-bootstrap/Image';
import smoothieHome from '../resources/images/smoothieHome.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <h2 className="smoothieFestHeader">Mr. and Mrs. Rooney!</h2>
                <Image className="mainPic" src={smoothieHome} rounded />
                <h2 className="smoothieFestHeader">September 18th 2021</h2>
            </div>
        );
    }
}

export default Home;
