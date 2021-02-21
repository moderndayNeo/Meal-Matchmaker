import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import NewRecipeButton from '../Main/RecipeGenerator/NewRecipeButton/NewRecipeButton'
import './Header.css'
import HeaderLink from './HeaderLink/HeaderLink'

interface HeaderProps {
    onClick: () => void
}

export default function Header({ onClick }: HeaderProps) {
    const location = useLocation()
    const hideButtonURLs = ['/', '/recipe-generator']
    const { isLoggedIn, user, signOut } = React.useContext(AuthContext)

    return (
        <div className="Header">
            <div className="header-left">
                <Link to="/">
                    <h2 className="title">Meal Matchmaker</h2>
                </Link>
                {isLoggedIn ? (
                    <div className="logged-in-display">
                        <p className="username">Welcome, {user.username}</p>
                        <p className="sign-out-button" onClick={signOut}>
                            Sign Out
                        </p>
                    </div>
                ) : (
                    <HeaderLink destination="/login" text="Sign In" />
                )}
            </div>
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
