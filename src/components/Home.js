import React, { Component } from 'react';
import './Home.css';
import Image from 'react-bootstrap/Image';
import stillLife3 from '../resources/images/stillLife3.jpg';

class Home extends Component {
    render() {
        return (
            <div>
                <h2 className="routeHeader">Katrina and Brendan welcome you to...</h2>
                <br></br>
                <h2 className="smoothieFestHeader">Smoothiefest</h2>
                <h2 className="subHeader1">09-18-2021</h2>
                <Image className="stillLife" src={stillLife3} roundedCircle />
            </div>
        );
    }
}

export default Home;
