import React from 'react'
import Skills from '../components/Skills'
import { motion } from 'framer-motion'
import avatar from '../img/avatar.png'

const AboutPage = () => {
    return (
        <div >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="about"
            >
                <div className="about-page">
                    <div className="about-image">
                        <img src="https://avatars.githubusercontent.com/u/60705940?s=400&u=6e2047a1bb81cace747d1b9772fe4c459e748165&v=4">
                        </img>
                    </div>
                    <div className="about-text">
                        <h1 className="hero-text">About Me:</h1>
                        <p className="hero-sub-text">Hi, I am <strong>Carlos Finos</strong> from <strong>Chaco, Argentina</strong>.</p>
                        <p>Enthusiastic software developer eager to contribute to team success through hard work, attention to detail and excellent communication skills. Clear understanding of <strong>MERN</strong> stack and training in problem solving skills and UX design. Motivated to learn, grow and excel in software development.</p>

                        <p>I am also a photographer and crypto enthusiast.</p>
                    </div>
                </div>
                <Skills />
            </motion.div>
        </div>
    )
}

export default AboutPage
