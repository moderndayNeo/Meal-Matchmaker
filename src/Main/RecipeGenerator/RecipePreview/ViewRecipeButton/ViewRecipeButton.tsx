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
    const handleClick = () => {
        window.focus()
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
        return setRandomRecipe ? setRandomRecipe(meal) : undefined
    }

    // setRandomRecipe ? () => setRandomRecipe(meal) : undefined

    return (
        <Link to="/recipe" className="ViewRecipeButton" onClick={handleClick}>
            <p>View Recipe</p>
            <IoMdArrowRoundForward className="right-arrow" />
        </Link>
    )
}
