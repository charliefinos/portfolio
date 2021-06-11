import React from 'react'

const About = ({ data }) => {
    return (
        <div className="about-page">
            <div className="about-image">
                <img alt="gitProfile" src={data.photo}>
                </img>
            </div>
            <div className="about-text">
                <h1 className="hero-text">About Me:</h1>
                <p className="hero-sub-text">Hi, I am <strong>{data.name}</strong> from <strong>{data.country}, {data.province}</strong>.</p>
                <p>{data.summary}</p>
            </div>
        </div>
    )
}

export default About
