import React, { Component } from 'react';
import './Registry.css';
import Image from 'react-bootstrap/Image';
import stillLife2 from '../resources/images/stillLife2.jpg';

class Registry extends Component {
    render() {
        return (
            <div>
                <h2 className="routeHeader">Registry Links</h2>
                <div className="regLink1">
                    <a href="https://www.crateandbarrel.com/gift-registry/katrina-froehlich-and-brendan-rooney/r6229049">
                        Crate and Barrel
                    </a>
                </div>
                <div className="regLink2">
                    <a href="https://www.williams-sonoma.com/registry/q5nmnwrz6x/registry-list.html">
                        Williams Sonoma
                    </a>
                </div>
                <div className="regLink2">
                    <a href="https://www.myregistry.com/wedding-registry/katrina-froehlich-and-brendan-rooney-lake-barrington-il/2756445/giftlist">
                        Other
                    </a>
                </div>
                <Image className="stillLife" src={stillLife2} roundedCircle />
            </div>
        );
    }
}

export default Registry;
