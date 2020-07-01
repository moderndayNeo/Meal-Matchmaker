import React from 'react'
import './RecipePreview.css'
import ViewRecipeButton from './ViewRecipeButton/ViewRecipeButton'
import { meal } from '../../media/response-example'

export default function RecipePreview() {

    return (
        <div className="RecipePreview">
            <h1 className="preview-title">{meal.strMeal}</h1>
            <h4 className="preview-category">{meal.strCategory}</h4>
            <img src={meal.strMealThumb} alt={meal.idMeal} />
            <ViewRecipeButton />
        </div>
    )
}

/*


*/