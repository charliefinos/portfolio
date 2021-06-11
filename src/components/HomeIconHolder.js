import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomeIconHolder = ({ link, icon, classicon }) => {

    return (
        <a target="_blank" rel="noreferrer" href={link} className="icon-holder">
            <FontAwesomeIcon icon={icon} className={classicon} />
        </a>
    )
}

export default HomeIconHolder
