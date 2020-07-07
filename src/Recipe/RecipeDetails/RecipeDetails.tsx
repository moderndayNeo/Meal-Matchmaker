import React from 'react'
import './RecipeDetails.css'
import DetailsHeader from './DetailsHeader/DetailsHeader'
import Instructions from './Instructions/Instructions'
import Ingredients from './Ingredients/Ingredients'
import { IMeal } from '../../IMeal'

type RecipeDetailsProps = {
    meal: IMeal
}

export default function RecipeDetails({ meal }: RecipeDetailsProps) {
    return (
        <div className="RecipeDetails">
            <DetailsHeader meal={meal} />
            <Ingredients meal={meal} />
            <Instructions meal={meal} />
        </div>
    )
}
