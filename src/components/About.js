import React, { Component } from 'react';
import './About.css';
import Image from 'react-bootstrap/Image';
import groovy from '../resources/images/groovy.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <Image className="headerPic" src={groovy} roundedCircle />

                <h2 className="blurb1">
                    Our love story began in the digital frontier. Katrina thought she was making a
                    connection with a witty guy named Chip Douglas. She soon came to find out that
                    Brendan’s online dating alias was a character from ‘The Cable Guy’ played by Jim
                    Carrey, who ironically was one of Katrina’s favorite comedic actors and
                    childhood idols. It was meant to be!
                </h2>
                <h2 className="blurb1">
                    On our first date at Mystic Celt, an Irish pub on Southport Avenue in Chicago,
                    magic quickly blossomed. Finding out that we grew up only minutes apart from
                    each other in the suburbs was just the beginning of our common interests. Over
                    the years we’ve evolved into kindred souls, sharing in our favorite activities,
                    such as hiking, going to concerts, exploring the Renaissance Faire and taking
                    road trips all over the U.S.
                </h2>
                <h2 className="blurb1">
                    On December 20th 2019 Brendan took Katrina on a romantic winter hike at Starved
                    Rock State Park. He led her behind a frozen waterfall and got down on one
                    knee...seemingly to get a PBJ out of his backpack. He actually reached for a
                    diamond ring and Katrina was literally swept off her feet, slipping on the icy
                    ground below. From that very moment, we have been so excited to tie the knot and
                    celebrate our love!
                </h2>
            </div>
        );
    }
}

export default About;
