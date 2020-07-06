import React from 'react'
import './RecipeDetails.css'
import { IMeal } from '../../RecipeGenerator/RecipeGenerator'

type RecipeDetailsProps = {
    meal: IMeal
}

export default function RecipeDetails({ meal }: RecipeDetailsProps) {
    return (
        <div className="RecipeDetails">
            <section className="title-and-category">
                <h1 className="title">{meal.strMeal}</h1>
                <h4 className="recipe-category">{meal.strCategory}</h4>
            </section>
        </div>
    )
}
