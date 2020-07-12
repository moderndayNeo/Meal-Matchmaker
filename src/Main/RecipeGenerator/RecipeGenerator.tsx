import React from 'react'
import './RecipeGenerator.css'
import RecipePreview from './RecipePreview/RecipePreview'
import NewRecipeButton from './NewRecipeButton/NewRecipeButton'
import Navbar from '../../Navbar/Navbar'
import { IMeal } from '../../IMeal'

interface RecipeGeneratorProps {
    meal: IMeal
    onClick: () => void
}

export default function RecipeGenerator({
    meal,
    onClick,
}: RecipeGeneratorProps) {
    return (
        <div className="RecipeGenerator">
            <Navbar />
            <RecipePreview meal={meal} />
            <NewRecipeButton onClick={onClick} />
        </div>
    )
}
