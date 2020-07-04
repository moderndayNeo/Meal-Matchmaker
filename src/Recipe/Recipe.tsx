import React from 'react'
import './Recipe.css'
import RecipeDetails from './RecipeDetails/RecipeDetails'
import {IMeal} from '../RecipeGenerator/RecipeGenerator'

export type RecipeProps = {
    meal: IMeal
}

export default function Recipe({ meal }: RecipeProps) {
    return (
        <div className="Recipe">
            <img src={meal.strMealThumb} className="recipe-image" alt="meal" />
            <RecipeDetails meal={meal} />
        </div>
    )
}
