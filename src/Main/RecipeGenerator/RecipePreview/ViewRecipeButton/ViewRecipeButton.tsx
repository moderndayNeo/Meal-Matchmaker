import React from 'react'
import './ViewRecipeButton.css'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { meal } from '../../../../media/response-example'

export default function ViewRecipeButton() {
    return (
        <Link to="/recipe" className="ViewRecipeButton" onClick={setRandomRecipe(meal)}>
            <p>View Recipe</p>
            <IoMdArrowRoundForward className="right-arrow" />
        </Link>
    )
}
