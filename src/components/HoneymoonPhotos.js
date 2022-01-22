import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import './HoneymoonPhotos.css';

// main photos
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
import needles from '../resources/honeymoonImages/needles.jpg';
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
import funBuns from '../resources/honeymoonImages/funBuns.jpg';
import jennyLake from '../resources/honeymoonImages/jennyLake.jpg';
import jackson from '../resources/honeymoonImages/jackson.jpg';
import silentLove from '../resources/honeymoonImages/silentLove.jpg';
import coolCar from '../resources/honeymoonImages/coolCar.jpg';

// thumbnails
import badlandsThumbnail from '../resources/honeymoonImages/thumbnails/badlands.jpg';
import beautifulBizarreThumbnail from '../resources/honeymoonImages/thumbnails/beautifulBizarre.jpg';
import buffaloThumbnail from '../resources/honeymoonImages/thumbnails/buffalo.jpg';
import canyonThumbnail from '../resources/honeymoonImages/thumbnails/canyon.jpg';
import geyserThumbnail from '../resources/honeymoonImages/thumbnails/geyser.jpg';
import grandTetonSignThumbnail from '../resources/honeymoonImages/thumbnails/grandTetonSign.jpg';
import hikerTreenThumbnail from '../resources/honeymoonImages/thumbnails/hikerTreen.jpg';
import kissThumbnail from '../resources/honeymoonImages/thumbnails/kiss.jpg';
import landingThumbnail from '../resources/honeymoonImages/thumbnails/landing.jpg';
import mooseAntlersThumbnail from '../resources/honeymoonImages/thumbnails/mooseAntlers.jpg';
import mooseFamilyThumbnail from '../resources/honeymoonImages/thumbnails/mooseFamily.jpg';
import mormonRowThumbnail from '../resources/honeymoonImages/thumbnails/mormonRow.jpg';
import needlesThumbnail from '../resources/honeymoonImages/thumbnails/needles.jpg';
import norrisThumbnail from '../resources/honeymoonImages/thumbnails/norris.jpg';
import oldFaithfulThumbnail from '../resources/honeymoonImages/thumbnails/oldFaithful.jpg';
import roomMorningThumbnail from '../resources/honeymoonImages/thumbnails/roomMorning.jpg';
import rushmoreThumbnail from '../resources/honeymoonImages/thumbnails/rushmore.jpg';
import siouxFallsThumbnail from '../resources/honeymoonImages/thumbnails/siouxFalls.jpg';
import snakeRiverThumbnail from '../resources/honeymoonImages/thumbnails/snakeRiver.jpg';
import trinaUpCloseThumbnail from '../resources/honeymoonImages/thumbnails/trinaUpClose.jpg';
import waterfallThumbnail from '../resources/honeymoonImages/thumbnails/waterfall.jpg';
import waterfall2Thumbnail from '../resources/honeymoonImages/thumbnails/waterfall2.jpg';
import waterfallCanyonThumbnail from '../resources/honeymoonImages/thumbnails/waterfallCanyon.jpg';
import yellowstoneLakeThumbnail from '../resources/honeymoonImages/thumbnails/yellowstoneLake.jpg';
import yellowstoneSignThumbnail from '../resources/honeymoonImages/thumbnails/yellowstoneSign.jpg';
import funBunsThumbnail from '../resources/honeymoonImages/thumbnails/funBuns.jpg';
import jennyLakeThumbnail from '../resources/honeymoonImages/thumbnails/jennyLake.jpg';
import jacksonThumbnail from '../resources/honeymoonImages/thumbnails/jackson.jpg';
import silentLoveThumbnail from '../resources/honeymoonImages/thumbnails/silentLove.jpg';
import coolCarThumbnail from '../resources/honeymoonImages/thumbnails/coolCar.jpg';

const IMAGES = [
    {
        src: siouxFalls,
        thumbnail: siouxFallsThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Sioux Falls'
    },
    {
        src: badlands,
        thumbnail: badlandsThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'The Badlands'
    },
    {
        src: needles,
        thumbnail: needlesThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'The Needles Highway'
    },
    {
        src: rushmore,
        thumbnail: rushmoreThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'From sea to shining sea'
    },
    {
        src: yellowstoneSign,
        thumbnail: yellowstoneSignThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Welcome To Yellowstone!'
    },
    {
        src: yellowstoneLake,
        thumbnail: yellowstoneLakeThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Yellowstone Lake'
    },
    {
        src: oldFaithful,
        thumbnail: oldFaithfulThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Old Faithful'
    },
    {
        src: geyser,
        thumbnail: geyserThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 350,
        caption: 'The Grand Geyser'
    },
    {
        src: trinaUpClose,
        thumbnail: trinaUpCloseThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Treeny Breathes'
    },
    {
        src: canyon,
        thumbnail: canyonThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Grand Canyon of Yellowstone'
    },
    {
        src: kiss,
        thumbnail: kissThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Smoochie Kiss'
    },
    {
        src: mooseAntlers,
        thumbnail: mooseAntlersThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Safari in the Lamar Valley'
    },
    {
        src: norris,
        thumbnail: norrisThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Norris Geyser Basin'
    },
    {
        src: silentLove,
        thumbnail: silentLoveThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'They Love Each Other'
    },
    {
        src: beautifulBizarre,
        thumbnail: beautifulBizarreThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Beautiful and Bizarre'
    },
    {
        src: buffalo,
        thumbnail: buffaloThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Where the Buffalo Roam'
    },
    {
        src: coolCar,
        thumbnail: coolCarThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Hot Wheelz'
    },
    {
        src: hikerTreen,
        thumbnail: hikerTreenThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: "Doin' Thangz"
    },
    {
        src: waterfall,
        thumbnail: waterfallThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Waterfall!'
    },
    {
        src: waterfall2,
        thumbnail: waterfall2Thumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Another Waterfall!'
    },
    {
        src: waterfallCanyon,
        thumbnail: waterfallCanyonThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Sooo many waterfalls!'
    },
    {
        src: grandTetonSign,
        thumbnail: grandTetonSignThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Welcome to Grand Teton!'
    },
    {
        src: funBuns,
        thumbnail: funBunsThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Fun Buns entering Grand Teton'
    },
    {
        src: jackson,
        thumbnail: jacksonThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Jackson Hole'
    },
    {
        src: mormonRow,
        thumbnail: mormonRowThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Mormon Row'
    },
    {
        src: landing,
        thumbnail: landingThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Schwabacher Landing'
    },
    {
        src: mooseFamily,
        thumbnail: mooseFamilyThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Bunch of Meese'
    },
    {
        src: snakeRiver,
        thumbnail: snakeRiverThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Snake River'
    },
    {
        src: jennyLake,
        thumbnail: jennyLakeThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Jenny Lake'
    },
    {
        src: roomMorning,
        thumbnail: roomMorningThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'A view from our Grand Teton room'
    }
];

class HoneymoonPhotos extends Component {
    render() {
        return (
            <div>
                <h2 className="smoothieFestHeader">The Honeymoon Photos</h2>
                <div className="allPicsContainer">
                    <Gallery
                        images={IMAGES}
                        margin={2}
                        rowHeight={243}
                        enableImageSelection={false}
                        backdropClosesModal={false}
                        showImageCount={false}
                        showCloseButton={true}
                    />
                </div>
            </div>
        );
    }
}
export default HoneymoonPhotos;
