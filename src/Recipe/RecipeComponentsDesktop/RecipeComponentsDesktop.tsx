import React from 'react'
import './RecipeComponentsDesktop.css'
import { IMeal } from '../../IMeal'
import Ingredients from '../RecipeDetails/Ingredients/Ingredients'
import Instructions from '../RecipeDetails/Instructions/Instructions'
import RecipeDesktopImage from './RecipeDesktopImage/RecipeDesktopImage'

interface RecipeComponentsDesktopProps {
    meal: IMeal
}

export default function RecipeComponentsDesktop({
    meal,
}: RecipeComponentsDesktopProps) {
    return (
        <div className="RecipeComponentsDesktop">
            <h1 className="title">{meal.strMeal}</h1>
            <RecipeDesktopImage meal={meal} />
            <div className="details-container">
                <Ingredients meal={meal} />
                <Instructions meal={meal} />
            </div>
        </div>
    )
}
