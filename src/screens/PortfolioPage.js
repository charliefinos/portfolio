import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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
                        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/192611633_1234553740332131_3874880960635280550_n.png?_nc_cat=111&ccb=1-3&_nc_sid=58c789&_nc_ohc=CSQMw1EeZikAX-2Vb7T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=a130f7b8606aaac7834bbecb3871b751&oe=60D4CDF9"></img>
                        <h3>Social Media</h3>
                        <p>This is a simple social media to share and comment photos, follow friends and see their posts.</p>
                        <p> Build with Node, Express and Images on Cloudinary cloud on Backend. Client side build with React, Redux, React-Router, React-Bootstrap, Scss.</p>
                        <div className="card__icons">
                            <a rel="noreferrer" target="_blank" href="https://github.com/charlyfinos/social-media" ><DiGitBranch /></a>
                            <a rel="noreferrer" target="_blank" href="https://social-media-smpl.herokuapp.com/"><CgScreen /></a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/192611633_1234553740332131_3874880960635280550_n.png?_nc_cat=111&ccb=1-3&_nc_sid=58c789&_nc_ohc=CSQMw1EeZikAX-2Vb7T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=a130f7b8606aaac7834bbecb3871b751&oe=60D4CDF9"></img>
                        <h3>Social Media</h3>
                        <p>This is a simple social media to share and comment photos, follow friends and see their posts.</p>
                        <p> Build with Node, Express and Images on Cloudinary cloud on Backend. Client side build with React, Redux, React-Router, React-Bootstrap, Scss.</p>
                        <div className="card__icons">
                            <a rel="noreferrer" target="_blank" href="https://github.com/charlyfinos/social-media" ><DiGitBranch /></a>
                            <a rel="noreferrer" target="_blank" href="https://social-media-smpl.herokuapp.com/"><CgScreen /></a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/192611633_1234553740332131_3874880960635280550_n.png?_nc_cat=111&ccb=1-3&_nc_sid=58c789&_nc_ohc=CSQMw1EeZikAX-2Vb7T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=a130f7b8606aaac7834bbecb3871b751&oe=60D4CDF9"></img>
                        <h3>Social Media</h3>
                        <p>This is a simple social media to share and comment photos, follow friends and see their posts.</p>
                        <p> Build with Node, Express and Images on Cloudinary cloud on Backend. Client side build with React, Redux, React-Router, React-Bootstrap, Scss.</p>
                        <div className="card__icons">
                            <a rel="noreferrer" target="_blank" href="https://github.com/charlyfinos/social-media" ><DiGitBranch /></a>
                            <a rel="noreferrer" target="_blank" href="https://social-media-smpl.herokuapp.com/"><CgScreen /></a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://scontent.xx.fbcdn.net/v/t1.15752-0/p206x206/192611633_1234553740332131_3874880960635280550_n.png?_nc_cat=111&ccb=1-3&_nc_sid=58c789&_nc_ohc=CSQMw1EeZikAX-2Vb7T&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&tp=30&oh=a130f7b8606aaac7834bbecb3871b751&oe=60D4CDF9"></img>
                        <h3>Social Media</h3>
                        <p>This is a simple social media to share and comment photos, follow friends and see their posts.</p>
                        <p> Build with Node, Express and Images on Cloudinary cloud on Backend. Client side build with React, Redux, React-Router, React-Bootstrap, Scss.</p>
                        <div className="card__icons">
                            <a rel="noreferrer" target="_blank" href="https://github.com/charlyfinos/social-media" ><DiGitBranch /></a>
                            <a rel="noreferrer" target="_blank" href="https://social-media-smpl.herokuapp.com/"><CgScreen /></a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default PortfolioPage