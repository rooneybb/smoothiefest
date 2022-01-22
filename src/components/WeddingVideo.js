import React, { Component } from 'react';
import './WeddingVideo.css';

class WeddingVideo extends Component {
    render() {
        return (
            <div>
                <h2 className="smoothieFestHeader">The Wedding Video</h2>
                <div className="weddingVideoWrapper">
                    <iframe
                        className="weddingVideo"
                        text-align="center"
                        vertical-align="middle"
                        display="table-cell"
                        margin-left="auto"
                        margin-right="auto"
                        src="https://www.youtube.com/embed/8k1GYkk1RqQ"
                        title="YouTube video player"
                        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    >
                        Hello
                    </iframe>
                </div>
            </div>
        );
    }
}

export default WeddingVideo;
