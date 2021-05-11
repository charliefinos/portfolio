import React from 'react'
import { motion } from 'framer-motion'
import avatar from '../img/avatar.png'

const AboutPage = () => {
    return (
        <div >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="about-page">
                <div className="about-image">
                    <img src={avatar}>
                    </img>
                </div>
                <div className="about-text">
                    <h1 className="hero-text">About Me:</h1>
                    <p className="hero-sub-text">I'm Carlos. I am a react developer. I'm Carlos. I am a react developer. I'm Carlos. I am a react developer.I'm Carlos. I am a react developer.I'm Carlos. I am a react developer.I'm Carlos. I am a react developer.I'm Carlos. I am a react developer.</p>
                </div>


            </motion.div>
        </div>
    )
}

export default AboutPage
