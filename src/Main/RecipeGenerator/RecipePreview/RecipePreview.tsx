import React from 'react'
import './RecipePreview.css'
import ViewRecipeButton from './ViewRecipeButton/ViewRecipeButton'
import { IMeal } from '../../../IMeal'

type RecipePreviewProps = {
    meal: IMeal
    setRandomRecipe?: (meal: IMeal) => void
}

export default function RecipePreview({
    meal,
    setRandomRecipe,
}: RecipePreviewProps) {
    return (
        <div className="RecipePreview">
            <h1 className="title">{meal.strMeal}</h1>
            <h4 className="category">{meal.strCategory}</h4>
            <img src={meal.strMealThumb} alt={meal.idMeal} />
            <ViewRecipeButton setRandomRecipe={setRandomRecipe} meal={meal} />
        </div>
    )
}
