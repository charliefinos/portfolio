import React from 'react'
import { faGithubSquare, faTwitterSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="home-page">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Carlos E. Finos</span>
                </h1>
                <p className="home-sub-text">
                    alskdjaskld alskdaslkjd asdlkjasldkj alskdjalskjd ajklsdjalsk alskdjaskld alskdaslkjd asdlkjasldkj alskdjalskjd ajklsdjalsk alskdjaskld alskdaslkjd asdlkjasldkj alskdjalskjd ajklsdjalsk
                </p>
                <div className="icons">

                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithubSquare} className="icon gh" />
                    </Link>

                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                    </Link>

                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faInstagramSquare} className="icon ig" />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage
