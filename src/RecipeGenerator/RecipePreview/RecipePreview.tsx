import React from 'react'
import './RecipePreview.css'
import ViewRecipeButton from './ViewRecipeButton/ViewRecipeButton'
import { meal } from '../../media/response-example'
import {IMeal} from '../RecipeGenerator'

type RecipePreviewProps = {
    meal: IMeal
}

export default function RecipePreview({ meal }: RecipePreviewProps) {

    return (
        <div className="RecipePreview">
            <h1 className="title">{meal.strMeal}</h1>
            <h4 className="category">{meal.strCategory}</h4>
            <img src={meal.strMealThumb} alt={meal.idMeal} />
            <ViewRecipeButton />
        </div>
    )
}
