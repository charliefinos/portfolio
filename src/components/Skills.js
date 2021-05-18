import React from 'react'
import {
    DiJavascript1,
    DiMongodb,
    DiReact,
    DiNodejs,
    DiGit,
    DiVisualstudio
} from 'react-icons/di'
import { SiRedux } from 'react-icons/si'

const Skills = () => {

    return (
        <div className="skills">

            <div className="skills-title">
                <h1>What technologies do i use?</h1>
            </div>

            <div className="skills-icons">
                <DiJavascript1 className="icon-holder" />
                <DiReact className="icon-holder" />
                <SiRedux className="icon-holder" />
                <DiNodejs className="icon-holder" />
                <DiMongodb className="icon-holder" />
                <DiGit className="icon-holder" />
                <DiVisualstudio className="icon-holder" />
            </div>

        </div>
    )
}

export default Skills