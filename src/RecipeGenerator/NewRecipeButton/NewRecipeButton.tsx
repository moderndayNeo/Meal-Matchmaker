import React from 'react'
import './NewRecipeButton.css'
import { MdSwapVerticalCircle } from 'react-icons/md'

export default function NewRecipeButton() {
    return (
        <div className="NewRecipeButton black-button">
            <div className="text-container">
                <p className="text">Generate Again</p>
                <MdSwapVerticalCircle />
            </div>
        </div>
    )
}
