import React from 'react'
import './Recipe.css'
import { meal } from '../media/response-example'
import RecipeDetails from './RecipeDetails/RecipeDetails'

export default function Recipe() {
    return (
        <div className="Recipe">
            <img src={meal.strMealThumb} className="recipe-image" alt="meal" />
            {/* <RecipeDetails meal={meal} /> */}
        </div>
    )
}
