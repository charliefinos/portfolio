import React from 'react'
import { motion } from 'framer-motion'
import { DiGitBranch } from 'react-icons/di'
import { CgScreen } from 'react-icons/cg'

const PortfolioPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="portfolio__content">
                <h1>Portfolio</h1>
                <div className="portfolio__cards">
                    <div className="card">
                        <img alt="social-media" src="http://res.cloudinary.com/dxb7leok1/image/upload/v1622245176/xvqgccd35incpyozvg6m.png"></img>
                        <h3>Social Media</h3>
                        <p>This is a simple social media to share and comment photos, follow friends and see their posts.</p>
                        <p> Build with Node, Express and Images on Cloudinary cloud on Backend. Client side build with React, Redux, React-Router, React-Bootstrap, Scss.</p>
                        <div className="card__icons">
                            <a rel="noreferrer" target="_blank" href="https://github.com/charlyfinos/social-media" ><DiGitBranch /></a>
                            <a rel="noreferrer" target="_blank" href="https://social-media-smpl.herokuapp.com/"><CgScreen /></a>
                        </div>
                    </div>
                    <div className="card">
                        <img alt="memory-card" src="https://res.cloudinary.com/dxb7leok1/image/upload/v1622142956/hd0uonvzja784mh5j6an.png"></img>
                        <h3>Fruits Memory Card Game</h3>
                        <p>Simple memory game</p>
                        <p>Every time you click the cards renders on a random way, and the goal of the game is to click on each fruit without repeating.</p>
                        <p> Build with React, React-Router, React-Bootstrap.</p>
                        <div className="card__icons">
                            <a rel="noreferrer" target="_blank" href="https://github.com/charlyfinos/memory-card" ><DiGitBranch /></a>
                            <a rel="noreferrer" target="_blank" href="https://memory-card-game-1.herokuapp.com/"><CgScreen /></a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="http://res.cloudinary.com/dxb7leok1/image/upload/v1622244866/rvwsncwrj0rmx7s7ffsx.png"></img>
                        <h3>E-commerce</h3>
                        <p>This is an ecommerce project from a Udemy course, where I learned how to use <strong>react</strong>, <strong>redux</strong>, <strong>node</strong> and how to organize a full-stack project from start to finish.</p>
                        <div className="card__icons">
                            <a rel="noreferrer" target="_blank" href="https://github.com/charlyfinos/creaciones-app" ><DiGitBranch /></a>
                            <a rel="noreferrer" target="_blank" href="https://creaciones-de-colores.herokuapp.com/"><CgScreen /></a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default PortfolioPage