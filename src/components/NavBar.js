import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
            <nav className="nav">

                <ul className="nav-items">

                    <li className="nav-item" >
                        <NavLink to="/" exact data-testid="link-1">
                            Home
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/about" >
                            About
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/portfolio" >
                            Portfolio
                        </NavLink>
                    </li>

                </ul>

                <footer className="footer">
                    <p>
                        @2021 Carlos Finos
                    </p>
                </footer>

            </nav>
        </div >
    )
}

export default NavBar
