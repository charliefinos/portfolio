import React from 'react'

const About = ({ about }) => {
    return (
        <div className="about-page">
            <div className="about-image">
                <img alt="gitProfile" src={about.photo}>
                </img>
            </div>
            <div className="about-text">
                <h1 className="hero-text">About Me:</h1>
                <p className="hero-sub-text">Hi, I am <strong>{about.name}</strong> from <strong>{about.country}, {about.province}</strong>.</p>
                <p>{about.summary}</p>
            </div>
        </div>
    )
}

export default About
