import React from 'react'
import { faGithub, faJs, faNodeJs } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skills = () => {

    return (
        <div className="skills">
            <div className="skills-title">
                <h1>Skills</h1>
            </div>
            <div className="skills-icons">
                <FontAwesomeIcon icon={faGithub} className="icon-holder" />
                <FontAwesomeIcon icon={faJs} className="icon-holder" />
                <FontAwesomeIcon icon={faNodeJs} className="icon-holder" />
                <FontAwesomeIcon icon={faGithub} className="icon-holder" />
                <FontAwesomeIcon icon={faGithub} className="icon-holder" />
                <FontAwesomeIcon icon={faGithub} className="icon-holder" />
                <FontAwesomeIcon icon={faGithub} className="icon-holder" />
                <FontAwesomeIcon icon={faGithub} className="icon-holder" />
                <FontAwesomeIcon icon={faGithub} className="icon-holder" />
                <FontAwesomeIcon icon={faGithub} className="icon-holder" />
                <FontAwesomeIcon icon={faGithub} className="icon-holder" />
                <FontAwesomeIcon icon={faGithub} className="icon-holder" />
            </div>
        </div>
    )
}

export default Skills