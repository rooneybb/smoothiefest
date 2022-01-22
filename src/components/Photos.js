import React, { Component } from 'react';
import './Photos.css';
import Image from 'react-bootstrap/Image';
import acadiaCropped from '../resources/images/acadiaCropped.jpg';
import alpineCropped from '../resources/images/alpineCropped.jpg';
import amazonCropped from '../resources/images/amazonCropped.jpg';
import cloudBridgeCropped from '../resources/images/cloudBridgeCropped.jpg';
import dominicanCropped from '../resources/images/dominicanCropped.jpg';
import encinoHalloweenoCropped from '../resources/images/encinoHalloweenoCropped.jpg';
import engageCropped from '../resources/images/engageCropped.jpg';
import fallCanyonCropped from '../resources/images/fallCanyonCropped.jpg';
import fallFallCropped from '../resources/images/fallFallCropped.jpg';
import fallHugsCropped from '../resources/images/fallHugsCropped.jpg';
import fallKissesCropped from '../resources/images/fallKissesCropped.jpg';
import frisbeeCropped from '../resources/images/frisbeeCropped.jpg';
import ghiradelliCropped from '../resources/images/ghiradelliCropped.jpg';
import GoofyHalloweenCropped from '../resources/images/GoofyHalloweenCropped.jpg';
import gothamCropped from '../resources/images/gothamCropped.jpg';
import initialsCropped from '../resources/images/initialsCropped.jpg';
import nightmareB4XmasCropped from '../resources/images/nightmareB4XmasCropped.jpg';
import porcupineCropped from '../resources/images/porcupineCropped.jpg';
import portlandCropped from '../resources/images/portlandCropped.jpg';
import renFaireCropped from '../resources/images/renFaireCropped.jpg';
import SeinfeldHalloweenCropped from '../resources/images/SeinfeldHalloweenCropped.jpg';
import waterfallCropped from '../resources/images/waterfallCropped.jpg';
import weirdFacesCropped from '../resources/images/weirdFacesCropped.jpg';
import scoobOWeenCropped from '../resources/images/scoobOWeenCropped.jpg';

class Photos extends Component {
    render() {
        return (
            <div>
                <h2 className="smoothieFestHeader">Oldies</h2>

                <div className="allPicsContainer">
                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Encino Man + Lola Bunny">
                            <Image className="image1" src={encinoHalloweenoCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Faces of Wrigleyville">
                            <Image className="image1" src={weirdFacesCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Frolfin' the North Woods">
                            <Image className="image1" src={frisbeeCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Ye Olde Renn Faire">
                            <Image className="image1" src={renFaireCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="The Leaning Tower of Cheezaaa">
                            <Image className="image1" src={GoofyHalloweenCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Punta Cana - Schedin Wedding">
                            <Image className="image1" src={dominicanCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Goodbye Mystic Celt">
                            <Image className="image1" src={amazonCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div
                            className="polaroid"
                            polaroid-caption="Nightmare Before Xmas Orchestra"
                        >
                            <Image className="image1" src={nightmareB4XmasCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div
                            className="polaroid"
                            polaroid-caption="After Sundaes in Ghiradelli Square"
                        >
                            <Image className="image1" src={ghiradelliCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Allagash Brewing, Portland, ME">
                            <Image className="image1" src={portlandCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Zoinks Scoob">
                            <Image className="image1" src={scoobOWeenCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Phish at Alpine Valley">
                            <Image className="image1" src={alpineCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Chicago - Miller Wedding">
                            <Image className="image1" src={gothamCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div
                            className="polaroid"
                            polaroid-caption="Elaine and Kramer (Contest winners!)"
                        >
                            <Image className="image1" src={SeinfeldHalloweenCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Acadia National Park">
                            <Image className="image1" src={acadiaCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Cloud Forest Costa Rica">
                            <Image className="image1" src={cloudBridgeCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Tastee freez">
                            <Image className="image1" src={waterfallCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="She said yes!!!">
                            <Image className="image1" src={engageCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Marking our territory">
                            <Image className="image1" src={initialsCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div
                            className="polaroid"
                            polaroid-caption="Roughin' it in the Porcupine Mountains"
                        >
                            <Image className="image1" src={porcupineCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Proposal Canyon in Fall">
                            <Image className="image1" src={fallCanyonCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Proposal Waterfall in Autumn">
                            <Image className="image1" src={fallFallCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Proposal Revisited">
                            <Image className="image1" src={fallHugsCropped} rounded />
                        </div>
                    </div>

                    <div className="pictureContainer">
                        <div className="polaroid" polaroid-caption="Young Lovahs in Autumn">
                            <Image className="image1" src={fallKissesCropped} rounded />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Photos;
