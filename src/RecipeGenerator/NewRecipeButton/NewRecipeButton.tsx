import React from 'react'
import './NewRecipeButton.css'
import regenerateIcon from '../../media/Icons_regenerate_dark.svg'

export default function NewRecipeButton() {
    return (
        <div className="NewRecipeButton generate-button">
            <div className="text-container">
                <p className="text">Generate Again</p>
                <img src={regenerateIcon} alt="regenerate icon" />
            </div>
        </div>
    )
}
