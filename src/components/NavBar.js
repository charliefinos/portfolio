import React from 'react'
import { Link, Route } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navbar">
            <nav className="nav">

                <ul className="nav-items">
                    <li className="nav-item" >

                        <Link to="/" data-testid="link-1">
                            Home
                        </Link>

                    </li>
                    <li className="nav-item">

                        <Link to="/about" >
                            About
                        </Link>

                    </li>
                    <li className="nav-item">

                        <Link to="/portfolio" >
                            Portfolio
                        </Link>

                    </li>
                    <li className="nav-item">

                        <Link to="/contact" >
                            Contact
                        </Link>

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
