import React from 'react'
import './WelcomePageButton.css'
import { Link } from 'react-router-dom'

interface WelcomePageButtonProps {
    onClick: () => void
}

export default function WelcomePageButton({ onClick }: WelcomePageButtonProps) {
    return (
        <Link
            className="WelcomePageButton generate-button"
            to="/recipe-generator"
            onClick={onClick}
            title="welcome-page-button"
        >
            Find My Match!
        </Link>
    )
}
