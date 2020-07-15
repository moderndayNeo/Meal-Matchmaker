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
                <div className="text-links">
                    <Link to="/">
                        <span
                            className={
                                location.pathname === '/' ? 'bold' : undefined
                            }
                        >
                            Home
                        </span>
                    </Link>
                    <Link to="/recipe">
                        <span
                            className={
                                location.pathname === '/recipe'
                                    ? 'bold'
                                    : undefined
                            }
                        >
                            Recipe
                        </span>
                    </Link>
                    <Link to="/contact">
                        <span
                            className={
                                location.pathname === '/contact'
                                    ? 'bold'
                                    : undefined
                            }
                        >
                            Contact
                        </span>
                    </Link>
                </div>
                {!hideButtonURLs.includes(location.pathname) && (
                    <NewRecipeButton onClick={onClick} />
                )}
            </nav>
        </div>
    )
}
