import React from 'react'
import './ViewRecipeButton.css'
import { IoMdArrowRoundForward } from 'react-icons/io'
export default function ViewRecipeButton() {
    return (
        <button className="ViewRecipeButton">
            <p>View Recipe</p>
            <IoMdArrowRoundForward className="right-arrow" />
        </button>
    )
}
