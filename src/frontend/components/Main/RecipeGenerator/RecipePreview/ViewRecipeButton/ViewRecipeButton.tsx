import React from 'react'
import './ViewRecipeButton.css'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { IMeal } from '../../../../../IMeal'
import { useHistory } from 'react-router-dom'

interface ViewRecipeButtonProps {
    setRandomRecipe?: (meal: IMeal) => void
    meal: IMeal
}

export default function ViewRecipeButton({
    setRandomRecipe,
    meal,
}: ViewRecipeButtonProps) {
    const history = useHistory()

    return (
        <button
            onClick={(e) => history.push('/recipe')}
            className="ViewRecipeButton"
        >
            <p>View Recipe</p>
            <IoMdArrowRoundForward className="right-arrow" />
        </button>
    )
}
