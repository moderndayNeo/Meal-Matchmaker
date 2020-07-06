import React from 'react'
import './RecipeGenerator.css'
import RecipePreview from './RecipePreview/RecipePreview'
import NewRecipeButton from './NewRecipeButton/NewRecipeButton'
import Navbar from '../Navbar/Navbar'
import { IMeal } from '../IMeal'

interface RecipeGeneratorProps {
    meal: IMeal
}

export default function RecipeGenerator({ meal }: RecipeGeneratorProps) {
    return (
        <div className="RecipeGenerator">
            <Navbar />
            <RecipePreview meal={meal} />
            <NewRecipeButton />
        </div>
    )
}
