import React from 'react'
import './RecipeDetails.css'
import {IMeal} from '../../RecipeGenerator/RecipeGenerator'

type RecipeDetailsProps = {
    meal: IMeal
}

export default function RecipeDetails(props: RecipeDetailsProps) {
    return (
        <div className="RecipeDetails">
            {/* <h1 className="title">{meal.strMealThumb}</h1> */}
            {/* <h4 className="recipe-category">{meal.strMealThumb}</h4> */}
            <p>RecipeDetails</p>
        </div>
    )
}
