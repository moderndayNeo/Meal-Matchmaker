import React from 'react'
import './RecipeDetails.css'
import DetailsHeader from './DetailsHeader/DetailsHeader'
import Instructions from './Instructions/Instructions'
import Ingredients from './Ingredients/Ingredients'
import { IMeal } from '../../../../IMeal'
import RelatedRecipes from '../RelatedRecipes/RelatedRecipes'

type RecipeDetailsProps = {
    meal: IMeal
    setRandomRecipe: (meal: IMeal) => void
}

export default function RecipeDetails({
    meal,
    setRandomRecipe,
}: RecipeDetailsProps) {
    return (
        <div className="RecipeDetails">
            <DetailsHeader meal={meal} />
            <Ingredients meal={meal} />
            <Instructions meal={meal} />
            <RelatedRecipes meal={meal} setRandomRecipe={setRandomRecipe} />
        </div>
    )
}
