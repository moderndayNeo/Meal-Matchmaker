import React from 'react'
import './WelcomePageButton.css'
import { Link } from 'react-router-dom'

export default function WelcomePageButton() {
    return (
        <Link className="WelcomePageButton generate-button" to="/recipe-generator">
            Find My Match!
        </Link>
    )
}
