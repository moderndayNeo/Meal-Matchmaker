import React from 'react'
import './Recipe.css'
import {responseExample} from '../media/response-example'

const meal = responseExample.meals[0]

export default function Recipe() {
    return (
        <div className="Recipe">
            <img src={meal.strMealThumb} className="recipe-image" alt="meal"/>
            Recipe
        </div>
    )
}
