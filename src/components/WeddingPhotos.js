import React, { Component } from 'react';
import Gallery from 'react-grid-gallery';
import './WeddingPhotos.css';

// main photos
import banner from '../resources/weddingImages/banner.jpg';
import beezsh from '../resources/weddingImages/beezsh.jpg';
import blackAndWhite from '../resources/weddingImages/blackAndWhite.jpg';
import bouquet from '../resources/weddingImages/bouquet.jpg';
import cake from '../resources/weddingImages/cake.jpg';
import cake2 from '../resources/weddingImages/cake2.jpg';
import circle from '../resources/weddingImages/circle.jpg';
import danceFloor from '../resources/weddingImages/danceFloor.jpg';
import deckPic from '../resources/weddingImages/deckPic.jpg';
import elm from '../resources/weddingImages/elm.jpg';
import fatherDaughter from '../resources/weddingImages/fatherDaughter.jpg';
import firstDance from '../resources/weddingImages/firstDance.jpg';
import firstDance2 from '../resources/weddingImages/firstDance2.jpg';
import firstSight from '../resources/weddingImages/firstSight.jpg';
import froehlichs from '../resources/weddingImages/froehlichs.jpg';
import froehlichSOs from '../resources/weddingImages/froehlichSOs.jpg';
import generations from '../resources/weddingImages/generations.jpg';
import glass from '../resources/weddingImages/glass.jpg';
import hanlon from '../resources/weddingImages/hanlon.jpg';
import jumping from '../resources/weddingImages/jumping.jpg';
import justMarried from '../resources/weddingImages/justMarried.jpg';
import kiss from '../resources/weddingImages/kiss.jpg';
import lounge from '../resources/weddingImages/lounge.jpg';
import mcPeg from '../resources/weddingImages/mcPeg.jpg';
import motherSon from '../resources/weddingImages/motherSon.jpg';
import movieStars from '../resources/weddingImages/movieStars.jpg';
import movieStars2 from '../resources/weddingImages/movieStars2.jpg';
import otherAngle from '../resources/weddingImages/otherAngle.jpg';
import pete from '../resources/weddingImages/pete.jpg';
import peteAndTreen from '../resources/weddingImages/peteAndTreen.jpg';
import peteAndTreen2 from '../resources/weddingImages/peteAndTreen2.jpg';
import preWedding from '../resources/weddingImages/preWedding.jpg';
import records from '../resources/weddingImages/records.jpg';
import revisiting from '../resources/weddingImages/revisiting.jpg';
import rings from '../resources/weddingImages/rings.jpg';
import rooneyMen from '../resources/weddingImages/rooneyMen.jpg';
import rooneys from '../resources/weddingImages/rooneys.jpg';
import sundown from '../resources/weddingImages/sundown.jpg';
import table from '../resources/weddingImages/table.jpg';
import tiger from '../resources/weddingImages/tiger.jpg';
import uncleBill from '../resources/weddingImages/uncleBill.jpg';
import vows from '../resources/weddingImages/vows.jpg';
import vows2 from '../resources/weddingImages/vows2.jpg';
import withMinister from '../resources/weddingImages/withMinister.jpg';
import bwSpin from '../resources/weddingImages/bwSpin.jpg';
import christensen from '../resources/weddingImages/christensen.jpg';
import frontDoorLook from '../resources/weddingImages/frontDoorLook.jpg';
import goldenWalk from '../resources/weddingImages/goldenWalk.jpg';
import goldenWalk2 from '../resources/weddingImages/goldenWalk2.jpg';
import loungeAlternate from '../resources/weddingImages/loungeAlternate.jpg';
import nightScene from '../resources/weddingImages/nightScene.jpg';
import saysYes from '../resources/weddingImages/saysYes.jpg';
import rooneySibs from '../resources/weddingImages/rooneySibs.jpg';

// thumbnails
import bannerThumbnail from '../resources/weddingImages/thumbnails/banner.jpg';
import beezshThumbnail from '../resources/weddingImages/thumbnails/beezsh.jpg';
import blackAndWhiteThumbnail from '../resources/weddingImages/thumbnails/blackAndWhite.jpg';
import bouquetThumbnail from '../resources/weddingImages/thumbnails/bouquet.jpg';
import cakeThumbnail from '../resources/weddingImages/thumbnails/cake.jpg';
import cake2Thumbnail from '../resources/weddingImages/thumbnails/cake2.jpg';
import circleThumbnail from '../resources/weddingImages/thumbnails/circle.jpg';
import danceFloorThumbnail from '../resources/weddingImages/thumbnails/danceFloor.jpg';
import deckPicThumbnail from '../resources/weddingImages/thumbnails/deckPic.jpg';
import elmThumbnail from '../resources/weddingImages/thumbnails/elm.jpg';
import fatherDaughterThumbnail from '../resources/weddingImages/thumbnails/fatherDaughter.jpg';
import firstDanceThumbnail from '../resources/weddingImages/thumbnails/firstDance.jpg';
import firstDance2Thumbnail from '../resources/weddingImages/thumbnails/firstDance2.jpg';
import firstSightThumbnail from '../resources/weddingImages/thumbnails/firstSight.jpg';
import froehlichsThumbnail from '../resources/weddingImages/thumbnails/froehlichs.jpg';
import froehlichSOsThumbnail from '../resources/weddingImages/thumbnails/froehlichSOs.jpg';
import generationsThumbnail from '../resources/weddingImages/thumbnails/generations.jpg';
import glassThumbnail from '../resources/weddingImages/thumbnails/glass.jpg';
import hanlonThumbnail from '../resources/weddingImages/thumbnails/hanlon.jpg';
import jumpingThumbnail from '../resources/weddingImages/thumbnails/jumping.jpg';
import justMarriedThumbnail from '../resources/weddingImages/thumbnails/justMarried.jpg';
import kissThumbnail from '../resources/weddingImages/thumbnails/kiss.jpg';
import loungeThumbnail from '../resources/weddingImages/thumbnails/lounge.jpg';
import mcPegThumbnail from '../resources/weddingImages/thumbnails/mcPeg.jpg';
import motherSonThumbnail from '../resources/weddingImages/thumbnails/motherSon.jpg';
import movieStarsThumbnail from '../resources/weddingImages/thumbnails/movieStars.jpg';
import movieStars2Thumbnail from '../resources/weddingImages/thumbnails/movieStars2.jpg';
import otherAngleThumbnail from '../resources/weddingImages/thumbnails/otherAngle.jpg';
import peteThumbnail from '../resources/weddingImages/thumbnails/pete.jpg';
import peteAndTreenThumbnail from '../resources/weddingImages/thumbnails/peteAndTreen.jpg';
import peteAndTreen2Thumbnail from '../resources/weddingImages/thumbnails/peteAndTreen2.jpg';
import preWeddingThumbnail from '../resources/weddingImages/thumbnails/preWedding.jpg';
import recordsThumbnail from '../resources/weddingImages/thumbnails/records.jpg';
import revisitingThumbnail from '../resources/weddingImages/thumbnails/revisiting.jpg';
import ringsThumbnail from '../resources/weddingImages/thumbnails/rings.jpg';
import rooneyMenThumbnail from '../resources/weddingImages/thumbnails/rooneyMen.jpg';
import rooneysThumbnail from '../resources/weddingImages/thumbnails/rooneys.jpg';
import sundownThumbnail from '../resources/weddingImages/thumbnails/sundown.jpg';
import tableThumbnail from '../resources/weddingImages/thumbnails/table.jpg';
import tigerThumbnail from '../resources/weddingImages/thumbnails/tiger.jpg';
import uncleBillThumbnail from '../resources/weddingImages/thumbnails/uncleBill.jpg';
import vowsThumbnail from '../resources/weddingImages/thumbnails/vows.jpg';
import vows2Thumbnail from '../resources/weddingImages/thumbnails/vows2.jpg';
import withMinisterThumbnail from '../resources/weddingImages/thumbnails/withMinister.jpg';
import bwSpinThumbnail from '../resources/weddingImages/thumbnails/bwSpin.jpg';
import christensenThumbnail from '../resources/weddingImages/thumbnails/christensen.jpg';
import frontDoorLookThumbnail from '../resources/weddingImages/thumbnails/frontDoorLook.jpg';
import goldenWalkThumbnail from '../resources/weddingImages/thumbnails/goldenWalk.jpg';
import goldenWalk2Thumbnail from '../resources/weddingImages/thumbnails/goldenWalk2.jpg';
import loungeAlternateThumbnail from '../resources/weddingImages/thumbnails/loungeAlternate.jpg';
import nightSceneThumbnail from '../resources/weddingImages/thumbnails/nightScene.jpg';
import saysYesThumbnail from '../resources/weddingImages/thumbnails/saysYes.jpg';
import rooneySibsThumbnail from '../resources/weddingImages/thumbnails/rooneySibs.jpg';

const IMAGES = [
    {
        src: banner,
        thumbnail: bannerThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: "We've got a groovy Rooney kind of love"
    },
    {
        src: lounge,
        thumbnail: loungeThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: "Treen's Lounge"
    },
    {
        src: loungeAlternate,
        thumbnail: loungeAlternateThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Sweet Digs'
    },
    {
        src: generations,
        thumbnail: generationsThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Generations of Love'
    },
    {
        src: rings,
        thumbnail: ringsThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Something Blue'
    },
    {
        src: preWedding,
        thumbnail: preWeddingThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Tree of life'
    },
    {
        src: records,
        thumbnail: recordsThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Fam Jamz'
    },
    {
        src: bouquet,
        thumbnail: bouquetThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: "Bride's beautiful bouquet"
    },
    {
        src: pete,
        thumbnail: peteThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Father of the Bride'
    },
    {
        src: peteAndTreen,
        thumbnail: peteAndTreenThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Dad and me!'
    },
    {
        src: firstSight,
        thumbnail: firstSightThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'First look'
    },
    {
        src: peteAndTreen2,
        thumbnail: peteAndTreen2Thumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Here comes the bride'
    },
    {
        src: elm,
        thumbnail: elmThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: "Minister ministerin'"
    },
    {
        src: otherAngle,
        thumbnail: otherAngleThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Forever grateful'
    },
    {
        src: vows,
        thumbnail: vowsThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: "Groom's vows"
    },
    {
        src: vows2,
        thumbnail: vows2Thumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: "Bride's vows"
    },
    {
        src: saysYes,
        thumbnail: saysYesThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'With this Ring...'
    },
    {
        src: kiss,
        thumbnail: kissThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'First kiss'
    },
    {
        src: justMarried,
        thumbnail: justMarriedThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'The Newest Rooneys'
    },
    {
        src: movieStars,
        thumbnail: movieStarsThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Bride and Groom'
    },
    {
        src: movieStars2,
        thumbnail: movieStars2Thumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Vogue'
    },
    {
        src: frontDoorLook,
        thumbnail: frontDoorLookThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'You make me smile'
    },
    {
        src: sundown,
        thumbnail: sundownThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Party on!'
    },
    {
        src: rooneys,
        thumbnail: rooneysThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Rooney Fam'
    },
    {
        src: froehlichs,
        thumbnail: froehlichsThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Froehlich Fam'
    },
    {
        src: hanlon,
        thumbnail: hanlonThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Hanlons'
    },
    {
        src: froehlichSOs,
        thumbnail: froehlichSOsThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: "Bride's siblings"
    },
    {
        src: rooneySibs,
        thumbnail: rooneySibsThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: "Groom's siblings"
    },
    {
        src: rooneyMen,
        thumbnail: rooneyMenThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Rooney dudes'
    },
    {
        src: revisiting,
        thumbnail: revisitingThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: "I've got you babe"
    },
    {
        src: tiger,
        thumbnail: tigerThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Mystical Medallion'
    },
    {
        src: jumping,
        thumbnail: jumpingThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Jump for joy'
    },
    {
        src: uncleBill,
        thumbnail: uncleBillThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Hanging with Uncle Bill'
    },
    {
        src: withMinister,
        thumbnail: withMinisterThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Our lovely minister'
    },
    {
        src: mcPeg,
        thumbnail: mcPegThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'M.C. Peg'
    },
    {
        src: beezsh,
        thumbnail: beezshThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Treena Coladas'
    },
    {
        src: blackAndWhite,
        thumbnail: blackAndWhiteThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Strawberry Brendananas'
    },
    {
        src: circle,
        thumbnail: circleThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: "Grand ole' time"
    },
    {
        src: deckPic,
        thumbnail: deckPicThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Out on the porch'
    },
    {
        src: christensen,
        thumbnail: christensenThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Matriarch Evelyn'
    },
    {
        src: table,
        thumbnail: tableThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Sweetheart table'
    },
    {
        src: firstDance2,
        thumbnail: firstDance2Thumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'First Dance'
    },
    {
        src: firstDance,
        thumbnail: firstDanceThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Into the Mystic'
    },
    {
        src: fatherDaughter,
        thumbnail: fatherDaughterThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Father Daughter Dance'
    },
    {
        src: motherSon,
        thumbnail: motherSonThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Mother Son Shake It'
    },
    {
        src: glass,
        thumbnail: glassThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Festival of Love'
    },
    {
        src: danceFloor,
        thumbnail: danceFloorThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Grandma Grooves'
    },
    {
        src: nightScene,
        thumbnail: nightSceneThumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Ambiance of the night'
    },
    {
        src: cake,
        thumbnail: cakeThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Cut the cake'
    },
    {
        src: cake2,
        thumbnail: cake2Thumbnail,
        thumbnailWidth: 350,
        thumbnailHeight: 233,
        caption: 'Pistachio cake in ya face'
    },
    {
        src: goldenWalk2,
        thumbnail: goldenWalk2Thumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Introducing...'
    },
    {
        src: bwSpin,
        thumbnail: bwSpinThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Swirl the girl'
    },
    {
        src: goldenWalk,
        thumbnail: goldenWalkThumbnail,
        thumbnailWidth: 233,
        thumbnailHeight: 350,
        caption: 'Unforgettable'
    }
];
class WeddingPhotos extends Component {
    render() {
        return (
            <div>
                <h2 className="smoothieFestHeader">The Wedding Photos</h2>
                <div className="allPicsContainer">
                    <Gallery
                        images={IMAGES}
                        margin={2}
                        rowHeight={250}
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
export default WeddingPhotos;
