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
    setLoading: (arg0: boolean) => void
}

export default function RecipeGenerator({
    meal,
    onClick,
    loading,
    setLoading
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
