import React from 'react'
import './RecipeGenerator.css'
import RecipePreview from './RecipePreview/RecipePreview'
import NewRecipeButton from './NewRecipeButton/NewRecipeButton'
import Navbar from '../../Navbar/Navbar'
import { IMeal } from '../../IMeal'
import Loader from './Loader/Loader'

interface RecipeGeneratorProps {
    meal: IMeal
    onClick: () => void
    loading: boolean
}

export default function RecipeGenerator({
    meal,
    onClick,
    loading,
}: RecipeGeneratorProps) {
    return (
        <div className="RecipeGenerator">
            <Navbar />
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <RecipePreview meal={meal} />
                    <NewRecipeButton onClick={onClick} />
                </div>
            )}
        </div>
    )
}
