import React from 'react'
import './Navbar.css'
import infoIcon from '../media/Icons_info_dark.svg'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="Navbar">
            <p className="title">Meal Matchmaker</p>
            <Link to="/contact">
                <img className="infoIcon" src={infoIcon} alt="info icon" />
            </Link>
        </div>
    )
}
