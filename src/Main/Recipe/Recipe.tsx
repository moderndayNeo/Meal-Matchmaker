import React from 'react'
import './Recipe.css'
import { IMeal } from '../../IMeal'
import RecipeComponentsMobile from './RecipeComponentsMobile/RecipeComponentsMobile'
import RecipeComponentsDesktop from './RecipeComponentsDesktop/RecipeComponentsDesktop'

interface RecipeProps {
    meal: IMeal
}

export default function Recipe({ meal }: RecipeProps) {
    return (
        <div className="Recipe">
            <RecipeComponentsMobile meal={meal} />
            <RecipeComponentsDesktop meal={meal} />
        </div>
    )
}
