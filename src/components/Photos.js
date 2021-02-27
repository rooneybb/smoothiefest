import React, { Component } from 'react';
import './Photos.css';
import Image from 'react-bootstrap/Image';
import alpine from '../resources/images/alpine.jpg';
import engage from '../resources/images/engage.jpg';
import amazon from '../resources/images/amazon.jpg';
import fallCanyon from '../resources/images/fallCanyon.jpg';
import fallFall from '../resources/images/fallFall.jpg';
import fallHugs from '../resources/images/fallHugs.jpg';
import fallKisses from '../resources/images/fallKisses.jpg';
import gotham from '../resources/images/gotham.jpg';
import initials from '../resources/images/initials.jpg';
import nightmareB4Xmas from '../resources/images/nightmareB4Xmas.jpg';
import porcupine from '../resources/images/porcupine.jpg';
import portland from '../resources/images/portland.jpg';
import waterfall from '../resources/images/waterfall.jpg';

class Photos extends Component {
    render() {
        return (
            <div>
                <h2 className="routeHeader">Photos</h2>
                <Image className="imageGeneral" src={portland} rounded />
                <Image className="imageGeneral" src={nightmareB4Xmas} rounded />
                <Image className="imageGeneral" src={amazon} rounded />
                <Image className="imageGeneral" src={gotham} rounded />
                <Image className="imageGeneral" src={alpine} rounded />
                <Image className="imageGeneral" src={waterfall} rounded />
                <Image className="imageGeneral" src={initials} rounded />
                <Image className="imageGeneral" src={engage} rounded />
                <Image className="imageGeneral" src={porcupine} rounded />
                <Image className="imageGeneral" src={fallCanyon} rounded />
                <Image className="imageGeneral" src={fallFall} rounded />
                <Image className="imageGeneral" src={fallHugs} rounded />
                <Image className="imageGeneral" src={fallKisses} rounded />
            </div>
        );
    }
}
export default Photos;
