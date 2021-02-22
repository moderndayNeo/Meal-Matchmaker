import React from 'react'
import './Navbar.css'
import infoIcon from '../../media/Icons_info_dark.svg'
import profileIcon from '../../media/Icons_profile.svg'
import { Link } from 'react-router-dom'
import AuthContext from '../../contexts/Auth/AuthContext'

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
                        className="icon info-icon"
                        src={infoIcon}
                        alt="info icon"
                    />
                </Link>
                <Link to={isLoggedIn ? '/profile' : '/login'}>
                    <img
                        className="icon profile-icon"
                        src={profileIcon}
                        alt="profile icon"
                    />
                </Link>
            </div>
        </div>
    )
}
