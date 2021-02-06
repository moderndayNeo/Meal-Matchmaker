import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import NewRecipeButton from '../Main/RecipeGenerator/NewRecipeButton/NewRecipeButton'
import './Header.css'
import HeaderLink from './HeaderLink/HeaderLink'

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
                <div className="text-links">
                    <HeaderLink destination="/" text="Home" />
                    <HeaderLink destination="/recipe" text="Recipe" />
                    <HeaderLink destination="/contact" text="Contact" />
                </div>
                {!hideButtonURLs.includes(location.pathname) && (
                    <NewRecipeButton onClick={onClick} />
                )}
            </nav>
        </div>
    )
}
