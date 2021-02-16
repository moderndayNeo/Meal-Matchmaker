import React from 'react'
import './NewRecipeButton.css'
import regenerateIcon from '../../../../media/Icons_regenerate_dark.svg'
import { Link } from 'react-router-dom'

interface NewRecipeButtonProps {
    onClick: () => void
}

export default function NewRecipeButton({ onClick }: NewRecipeButtonProps) {
    return (
        <Link
            to="/recipe-generator"
            className="NewRecipeButton generate-button"
            onClick={onClick}
            title="new-recipe-button"
        >
            <div className="text-container">
                <p className="text">Generate Again</p>
                <img src={regenerateIcon} alt="regenerate icon" />
            </div>
        </Link>
    )
}
