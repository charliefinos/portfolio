import React from 'react'
import Skills from '../components/Skills'
import { motion } from 'framer-motion'
import avatar from '../img/avatar.png'

const AboutPage = () => {
    return (
        <div className="about">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <div className="about-page">
                    <div className="about-image">
                        <img src={avatar}>
                        </img>
                    </div>
                    <div className="about-text">
                        <h1 className="hero-text">About Me:</h1>
                        <p className="hero-sub-text">Hi, I am Carlos Finos from Chaco, Argentina.</p>
                        <p>I am a developer working with Mern stack building responsive sites and a good user experience.</p>
                        <p>I am also a photographer and crypto enthusiast.</p>
                    </div>
                </div>
                <Skills />
            </motion.div>
        </div>
    )
}

export default AboutPage
