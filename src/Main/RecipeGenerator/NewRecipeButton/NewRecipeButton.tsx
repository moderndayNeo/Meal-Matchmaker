import React from 'react'
import './NewRecipeButton.css'
import regenerateIcon from '../../../media/Icons_regenerate_dark.svg'

interface NewRecipeButtonProps {
    onClick: () => void;
}

export default function NewRecipeButton({ onClick }: NewRecipeButtonProps) {
    return (
        <div className="NewRecipeButton generate-button" onClick={onClick}>
            <div className="text-container">
                <p className="text">Generate Again</p>
                <img src={regenerateIcon} alt="regenerate icon" />
            </div>
        </div>
    )
}
