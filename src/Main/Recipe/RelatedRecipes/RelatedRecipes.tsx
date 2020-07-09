import React from 'react'
import './RelatedRecipes.css'
import RecipePreview from '../../RecipeGenerator/RecipePreview/RecipePreview'
import { IMeal } from '../../../IMeal'

interface RelatedRecipesProps {
    meal: IMeal
}

export default function RelatedRecipes({ meal }: RelatedRecipesProps) {
    return (
        <section className="RelatedRecipes">
            <h3 className="title">Related recipes</h3>
            <div className="slider-container">
                <RecipePreview meal={meal} />
                <RecipePreview meal={meal} />
                <RecipePreview meal={meal} />
            </div>
        </section>
    )
}
