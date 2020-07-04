import React from 'react'
import './Navbar.css'
import infoIcon from '../media/Icons_info_dark.svg'

export default function Navbar() {
    return (
        <div className="Navbar">
            <p className="title">Meal Matchmaker</p>
            <img className="infoIcon" src={infoIcon} alt="info icon" />
        </div>
    )
}
