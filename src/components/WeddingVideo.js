import React, { Component } from 'react';
import './WeddingVideo.css';

class WeddingVideo extends Component {
    render() {
        return (
            <div>
                <h2 className="smoothieFestHeader">The Wedding Video</h2>
                <div className="weddingVideo">
                    <iframe
                        text-align="center"
                        vertical-align="middle"
                        display="table-cell"
                        margin-left="auto"
                        margin-right="auto"
                        width="1920px"
                        height="1080px"
                        src="https://www.youtube.com/embed/8k1GYkk1RqQ"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        );
    }
}

export default WeddingVideo;
