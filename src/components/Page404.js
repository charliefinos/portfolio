import React from 'react'
import { NavLink } from 'react-router-dom'

const Page404 = () => {
    return (
        <div className="not-found">
            <h1>Error 404: Page Not Found.</h1>
            <NavLink className="link" to="/"><button>Go To Home Page</button></NavLink>
        </div>
    )
}

export default Page404
