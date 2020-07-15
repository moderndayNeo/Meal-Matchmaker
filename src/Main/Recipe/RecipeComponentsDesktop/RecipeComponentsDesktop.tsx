import React from 'react'
import './RecipeComponentsDesktop.css'
import { IMeal } from '../../../IMeal'
import Ingredients from '../RecipeDetails/Ingredients/Ingredients'
import Instructions from '../RecipeDetails/Instructions/Instructions'
import RecipeDesktopImage from './RecipeDesktopImage/RecipeDesktopImage'
import RelatedRecipes from '../RelatedRecipes/RelatedRecipes'

interface RecipeComponentsDesktopProps {
    meal: IMeal
    setRandomRecipe: (meal: IMeal) => void
}

export default function RecipeComponentsDesktop({
    meal,
    setRandomRecipe,
}: RecipeComponentsDesktopProps) {
    return (
        <div className="RecipeComponentsDesktop">
            <h2 className="title">{meal.strMeal}</h2>
            <RecipeDesktopImage meal={meal} />
            <div className="details-container">
                <Ingredients meal={meal} />
                <Instructions meal={meal} />
            </div>
            <RelatedRecipes meal={meal} setRandomRecipe={setRandomRecipe} />
        </div>
    )
}
