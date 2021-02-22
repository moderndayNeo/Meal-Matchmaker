import React from 'react'
import './Navbar.css'
import infoIcon from '../../media/Icons_info_dark.svg'
import ProfileLink from '../common/ProfileLink/ProfileLink'
import { Link } from 'react-router-dom'

export default function Navbar() {
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
                <ProfileLink />
            </div>
        </div>
    )
}
