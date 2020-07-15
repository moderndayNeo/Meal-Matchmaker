import React from 'react'
import './RecipePreview.css'
import ViewRecipeButton from './ViewRecipeButton/ViewRecipeButton'
import { IMeal } from '../../../IMeal'
// import { Link } from 'react-router-dom'

type RecipePreviewProps = {
    meal: IMeal
    setRandomRecipe?: (meal: IMeal) => void
    loading?: boolean
}

export default function RecipePreview({
    meal,
    setRandomRecipe,
    loading,
}: RecipePreviewProps) {
    const shorten = (str: string) => {
        return str.length < 30 ? str : str.slice(0, 30).trim() + '...'
    }

    return (
        <div className="RecipePreview">
            <div className="text">
                <h2 className="title">{shorten(meal.strMeal)}</h2>
                <h4 className="category">{meal.strCategory}</h4>
            </div>
            {/* <Link to="/recipe"> */}
            <img src={meal.strMealThumb} alt={meal.idMeal} />
            {/* </Link> */}
            <ViewRecipeButton setRandomRecipe={setRandomRecipe} meal={meal} />
        </div>
    )
}
