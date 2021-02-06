import React from 'react'
import './RecipeDesktopImage.css'
import { IMeal } from '../../../../../IMeal'

interface RecipeDesktopImageProps {
    meal: IMeal
}

export default function RecipeDesktopImage({ meal }: RecipeDesktopImageProps) {
    return (
        <div className="RecipeDesktopImage">
            <img src={meal.strMealThumb} alt="meal" className="recipe-image" />
        </div>
    )
}
