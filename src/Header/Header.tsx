import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import NewRecipeButton from '../Main/RecipeGenerator/NewRecipeButton/NewRecipeButton'
import './Header.css'

interface HeaderProps {
    onClick: () => void
}

export default function Header({ onClick }: HeaderProps) {
    const location = useLocation()
    const hideButtonURLs = ['/', '/recipe-generator']

    return (
        <div className="Header">
            <Link to="/">
                <h2 className="title">Meal Matchmaker</h2>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                {!hideButtonURLs.includes(location.pathname) && (
                    <NewRecipeButton onClick={onClick} />
                )}
            </nav>
        </div>
    )
}
