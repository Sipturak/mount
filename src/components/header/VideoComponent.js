import React from 'react'
import VideoComponentCss from '../header/VideoComponentCss.css'
export const VideoComponent = () => {
    return (
        <div className="body-div">
            <section className="showcase">
                <div className="video-container">
                    <video autoPlay muted loop>
                        <source src="header_video.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="content">
                    <h1>Explore nature</h1>
                    <h3>Everything in nature invites us constantly to be what we are. </h3>
                    <a href="#about" className="video-btn">Read More</a>
                </div>
            </section>
        </div>
    )
}