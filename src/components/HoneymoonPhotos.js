import React, { Component } from 'react';
import './HoneymoonPhotos.css';
import Image from 'react-bootstrap/Image';
import badlands from '../resources/honeymoonImages/badlands.jpg';
import beautifulBizarre from '../resources/honeymoonImages/beautifulBizarre.jpg';
import buffalo from '../resources/honeymoonImages/buffalo.jpg';
import canyon from '../resources/honeymoonImages/canyon.jpg';
import geyser from '../resources/honeymoonImages/geyser.jpg';
import grandTetonSign from '../resources/honeymoonImages/grandTetonSign.jpg';
import hikerTreen from '../resources/honeymoonImages/hikerTreen.jpg';
import kiss from '../resources/honeymoonImages/kiss.jpg';
import landing from '../resources/honeymoonImages/landing.jpg';
import mooseAntlers from '../resources/honeymoonImages/mooseAntlers.jpg';
import mooseFamily from '../resources/honeymoonImages/mooseFamily.jpg';
import mormonRow from '../resources/honeymoonImages/mormonRow.jpg';
//  import needles from '../resources/honeymoonImages/needles.jpg';
import norris from '../resources/honeymoonImages/norris.jpg';
import oldFaithful from '../resources/honeymoonImages/oldFaithful.jpg';
import roomMorning from '../resources/honeymoonImages/roomMorning.jpg';
import rushmore from '../resources/honeymoonImages/rushmore.jpg';
import siouxFalls from '../resources/honeymoonImages/siouxFalls.jpg';
import snakeRiver from '../resources/honeymoonImages/snakeRiver.jpg';
import trinaUpClose from '../resources/honeymoonImages/trinaUpClose.jpg';
import waterfall from '../resources/honeymoonImages/waterfall.jpg';
import waterfall2 from '../resources/honeymoonImages/waterfall2.jpg';
import waterfallCanyon from '../resources/honeymoonImages/waterfallCanyon.jpg';
import yellowstoneLake from '../resources/honeymoonImages/yellowstoneLake.jpg';
import yellowstoneSign from '../resources/honeymoonImages/yellowstoneSign.jpg';

class HoneymoonPhotos extends Component {
    render() {
        return (
            <div>
                <h2 className="routeHeader">The Honeymoon Photos</h2>

                <div className="allPicsContainer">
                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Badlands">
                            <Image className="image1" src={badlands} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Beautiful and Bizarre">
                            <Image className="image1" src={beautifulBizarre} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Where the Buffalo Roam">
                            <Image className="image1" src={buffalo} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Canyon">
                            <Image className="image1" src={canyon} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Grand Geyser">
                            <Image className="image1" src={geyser} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Sup from Grand Teton">
                            <Image className="image1" src={grandTetonSign} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Doin' Thangz">
                            <Image className="image1" src={hikerTreen} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Smoochie Kiss">
                            <Image className="image1" src={kiss} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="landing">
                            <Image className="image1" src={landing} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Stumbled across these">
                            <Image className="image1" src={mooseAntlers} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Bunch of Meese">
                            <Image className="image1" src={mooseFamily} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Mormon Row">
                            <Image className="image1" src={mormonRow} rounded />
                        </div>
                    </div>
                    {/* 
                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Needles Hwy Black Hills">
                            <Image className="image1" src={needles} rounded />
                        </div>
                    </div> */}

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Norris Geyser Basin">
                            <Image className="image1" src={norris} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="The most famous geyser of all">
                            <Image className="image1" src={oldFaithful} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div
                            className="polaroid"
                            polaroid-caption="A view from our Grand Teton room"
                        >
                            <Image className="image1" src={roomMorning} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="From sea to shining sea">
                            <Image className="image1" src={rushmore} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Sioux Falls">
                            <Image className="image1" src={siouxFalls} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Snake River">
                            <Image className="image1" src={snakeRiver} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Treeny Breathes">
                            <Image className="image1" src={trinaUpClose} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Waterfall!">
                            <Image className="image1" src={waterfall} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Another Waterfall!">
                            <Image className="image1" src={waterfall2} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="So many waterfalls!">
                            <Image className="image1" src={waterfallCanyon} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Yellowstone Lake">
                            <Image className="image1" src={yellowstoneLake} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Sup from Yellowstone">
                            <Image className="image1" src={yellowstoneSign} rounded />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HoneymoonPhotos;
