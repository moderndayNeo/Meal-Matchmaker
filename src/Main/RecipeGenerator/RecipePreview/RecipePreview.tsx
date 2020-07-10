import React from 'react'
import './RecipePreview.css'
import ViewRecipeButton from './ViewRecipeButton/ViewRecipeButton'
import { IMeal } from '../../../IMeal'

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

/*
Recipe RecipePreview takes a meal
Click View Recipe, take that meal, set it to the meal in app, which then gets passed down to recipe, which should re-render.
Hopefully the user gets sent to the top of the page again (can code this.)

What do I want?
User clicks View Recipe -> Is sent to the top of the Recipe page with the new recipe now displayed.

*/