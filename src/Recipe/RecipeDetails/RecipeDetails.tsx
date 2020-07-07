import React from 'react'
import './RecipeDetails.css'
import DetailsHeader from './DetailsHeader/DetailsHeader'
import Instructions from './Instructions/Instructions'
import Ingredients from './Ingredients/Ingredients'
import { IMeal } from '../../IMeal'
// import { meal } from '../../media/response-example'

type RecipeDetailsProps = {
    meal: IMeal
}

// export default function RecipeDetails({ meal }: any) {
export default function RecipeDetails({ meal }: RecipeDetailsProps) {
    return (
        <div className="RecipeDetails">
            <DetailsHeader meal={meal} />
            <Ingredients meal={meal} />
            <Instructions meal={meal} />
        </div>
    )
}

/*
interface IMeal {
    strIngredient1: string,
    strIngredient2: string
    strIngredient3: string
    dateModified: null
}

const meal: IMeal = {
    strIngredient1: 'Vegetable Oil',
    strIngredient2: 'Minced Beef',
    strIngredient3: 'Onion',
    dateModified: null
}

const ingredientKeys = Object.keys(meal).filter(key => key.includes('strIngredient'))
const ingredients = ingredientKeys.map(key => meal[key])
*/
