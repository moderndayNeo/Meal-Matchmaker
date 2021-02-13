import React from 'react'
import './RecipeGenerator.css'
import RecipePreview from './RecipePreview/RecipePreview'
import NewRecipeButton from './NewRecipeButton/NewRecipeButton'
import Navbar from '../../Navbar/Navbar'
import { IMeal } from '../../../IMeal'
import GeneratorDesktop from './GeneratorDesktop/GeneratorDesktop'
import { Link } from 'react-router-dom'
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
            <div className="generator-mobile">
                <Navbar />
                <Link to="/recipe">
                    <RecipePreview meal={meal} />
                </Link>
                <NewRecipeButton onClick={onClick} />
            </div>
            <GeneratorDesktop meal={meal} onClick={onClick} />
        </div>
    )
}
