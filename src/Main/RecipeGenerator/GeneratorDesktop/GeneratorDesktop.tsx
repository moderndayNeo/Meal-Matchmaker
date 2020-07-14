import React from 'react'
import './GeneratorDesktop.css'
import { IMeal } from '../../../IMeal'
import NewRecipeButton from '../NewRecipeButton/NewRecipeButton'
import ViewRecipeButton from '../RecipePreview/ViewRecipeButton/ViewRecipeButton'

interface GeneratorDesktopProps {
    meal: IMeal
    onClick: () => void
}

export default function GeneratorDesktop({
    meal,
    onClick,
}: GeneratorDesktopProps) {
    return (
        <div className="GeneratorDesktop">
            <div className="title-and-buttons">
                <h1 className="title">{meal.strMeal}</h1>
                <div className="buttons">
                    <NewRecipeButton onClick={onClick} />
                    <ViewRecipeButton meal={meal} />
                </div>
            </div>

            <div className="image-container">
                <img src={meal.strMealThumb} alt="meal" />
            </div>
        </div>
    )
}
