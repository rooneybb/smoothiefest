import React, { Component } from 'react';
import './About.css';
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

class About extends Component {
    render() {
        return (
            <div>
                <h2 className="routeHeader">Love Story</h2>
                <h2 className="aboutHeader">The Story of Katrina and Brendan</h2>

                <h2 className="blurb1">
                    Our romantic fairy tale began virtually, in the depths of the digital frontier.
                    Katrina thought she was connecting with a nice young chap by the name of Chip
                    Douglas. Brendan thought he was meeting up with a professional cat trainer.
                    Thankfully it turns out there was no cable-installing stalker nor feline
                    ettiquette enforcer.
                </h2>
                <h2 className="blurb1">
                    Our first date was at Mystic Celt, an Irish Pub on Southport Ave in Chicago and
                    magic quickly blossomed. Almost immediately it was apparent we had a lot in
                    common. One of the more interesting things we uncovered was that we had grown up
                    just minutes apart from each other. Our common interests led us to experience
                    many great times together over the years. Some of our favorite activities have
                    come to include hiking, going to concerts, and hitting the open road. Through
                    these moments together we have evolved into kindered souls!
                </h2>
                <h2 className="blurb1">
                    These magical moments would eventually lead us on a winter&#39;s hike in
                    December of 2019 at Starved Rock State Park. Brendan led Katrina behind a frozen
                    waterfall where he had planned for them to nibble on some PB&#38;J&#39;s he had
                    in his backpack. However, Brendan did not reach for a sandwich that day. Rather,
                    a shiny ring appeared, one to symbolize two young lovers and their commitment to
                    one another. Katrina was literally swept off of her feet as the icy ground, even
                    in spite of beautiful surprises, was merciless that day. We have been
                    impassioned to tie the knot ever since!
                </h2>
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

export default About;
