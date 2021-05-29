import React from 'react'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

const HomePage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="home-page">
            <header className="hero">
                <h1 className="hero-text">
                    <span>Carlos E. Finos</span>
                </h1>
                <p className="home-sub-text">
                    Software Developer
                </p>
                <div className="icons">

                    <a target="_blank" rel="noreferrer" href="https://github.com/charlyfinos" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>

                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/carlosefinos/" className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                    </a>

                    <a target="_blank" rel="noreferrer" href="https://instagram.com/charliefinos" className="icon-holder">
                        <FontAwesomeIcon icon={faInstagram} className="icon ig" />
                    </a>
                </div>
            </header>
        </motion.div>
    )
}

export default HomePage
