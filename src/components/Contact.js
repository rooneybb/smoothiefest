import React, { Component } from 'react';
import './Contact.css';
import Image from 'react-bootstrap/Image';
import stillLife from '../resources/images/stillLife.jpg';

class Contact extends Component {
    render() {
        return (
            <div>
                <h2 className="routeHeader">Contact</h2>
                <h2 className="subHeader1">Please send emails to:</h2>
                <div className="email">
                    <a href="mailto: katrinafroehlich@gmail.com?subject=Smoothiefest Email">
                        katrinafroehlich@gmail.com
                    </a>
                </div>
                <h2 className="note">Note: Link will only work if email client is sent up</h2>
                <Image className="stillLife" src={stillLife} roundedCircle />
            </div>
        );
    }
}

export default Contact;
