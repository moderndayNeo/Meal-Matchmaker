import React from 'react'
import './Navbar.css'
import infoIcon from '../../media/Icons_info_dark.svg'
import homeIcon from '../../media/icons_home.svg'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export default function Navbar() {
    const { isLoggedIn } = React.useContext(AuthContext)
    return (
        <div className="Navbar">
            <Link to="/">
                <p className="title">Meal Matchmaker</p>
            </Link>

            <div className="navbar-icons">
                <Link to="/contact">
                    <img
                        className="icon infoIcon"
                        src={infoIcon}
                        alt="info icon"
                    />
                </Link>
                <Link to={isLoggedIn ? '/profile' : '/login'}>
                    <img
                        className="icon homeIcon"
                        src={homeIcon}
                        alt="home icon"
                    />
                </Link>
            </div>
        </div>
    )
}
