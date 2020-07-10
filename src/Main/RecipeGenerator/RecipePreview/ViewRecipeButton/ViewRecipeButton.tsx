import React from 'react'
import './ViewRecipeButton.css'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IMeal } from '../../../../IMeal'

interface ViewRecipeButtonProps {
    setRandomRecipe?: (meal: IMeal) => void
    meal: IMeal
}

export default function ViewRecipeButton({
    setRandomRecipe,
    meal,
}: ViewRecipeButtonProps) {
    return (
        <Link
            to="/recipe"
            className="ViewRecipeButton"
            onClick={setRandomRecipe ? () => setRandomRecipe(meal) : undefined}
        >
            <p>View Recipe</p>
            <IoMdArrowRoundForward className="right-arrow" />
        </Link>
    )
}
