import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className="Header">
            <h2 className="title">Meal Matchmaker</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    )
}
