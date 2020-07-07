import React from 'react'
import './Recipe.css'
import RecipeDetails from './RecipeDetails/RecipeDetails'
import { IMeal } from '../IMeal'
import backArrow from '../media/Icons_left_arrow_white.svg'
import { useHistory } from 'react-router-dom'

export type RecipeProps = {
    meal: IMeal
}

export default function Recipe({ meal }: RecipeProps) {
    const history = useHistory()

    const goBack = (): void => {
        history.goBack()
    }

    return (
        <div className="Recipe">
            <nav className="overlay">
                <img
                    src={backArrow}
                    alt="back arrow"
                    className="back-arrow"
                    onClick={goBack}
                />
            </nav>
            <img src={meal.strMealThumb} className="recipe-image" alt="meal" />
            <RecipeDetails meal={meal} />
        </div>
    )
}
