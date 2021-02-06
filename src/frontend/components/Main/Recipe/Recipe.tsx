import React from 'react'
import './Recipe.css'
import { IMeal } from '../../../IMeal'
import RecipeComponentsMobile from './RecipeComponentsMobile/RecipeComponentsMobile'
import RecipeComponentsDesktop from './RecipeComponentsDesktop/RecipeComponentsDesktop'

interface RecipeProps {
    meal: IMeal
    setRandomRecipe: (meal: IMeal) => void
}

export default function Recipe({ meal, setRandomRecipe }: RecipeProps) {
    return (
        <div className="Recipe">
            <RecipeComponentsMobile
                meal={meal}
                setRandomRecipe={setRandomRecipe}
            />
            <RecipeComponentsDesktop
                meal={meal}
                setRandomRecipe={setRandomRecipe}
            />
        </div>
    )
}
