import React from 'react'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { motion } from 'framer-motion'
import HomeIconHolder from '../components/HomeIconHolder'

const HomePage = ({ home }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="home-page">
            <header className="hero">
                <h1 className="hero-text">
                    <span>{home.name}</span>
                </h1>
                <p className="home-sub-text">
                    {home.role}
                </p>
                <div className="icons">

                    <HomeIconHolder
                        link={home.github.link}
                        icon={faGithub}
                        classicon="icon gh"
                    />

                    <HomeIconHolder
                        link={home.linkedin.link}
                        icon={faLinkedin}
                        classicon="icon li"
                    />

                    <HomeIconHolder
                        link={home.instagram.link}
                        icon={faInstagram}
                        classicon="icon ig"
                    />
                </div>
            </header>
        </motion.div>
    )
}

export default HomePage
