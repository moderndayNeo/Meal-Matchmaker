import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import NewRecipeButton from '../RecipeGenerator/NewRecipeButton/NewRecipeButton'

interface HeaderProps {
    onClick: () => void
}

export default function Header({ onClick}: HeaderProps) {
    return (
        <div className="Header">
            <h2 className="title">Meal Matchmaker</h2>
            <NewRecipeButton onClick={onClick} />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </div>
    )
}
