import React from 'react'
import './RecipeDetails.css'
import DetailsHeader from './DetailsHeader/DetailsHeader'
import Instructions from './Instructions/Instructions'
// import { IMeal } from '../../IMeal'
// import { meal } from '../../media/response-example'

// type RecipeDetailsProps = {
//     meal: IMeal
// }

export default function RecipeDetails({ meal }: any) {
    // export default function RecipeDetails({ meal }: RecipeDetailsProps) {

    const ingredients = Object.keys(meal)
        .filter((key) => key.includes('strIngredient') && meal[key])
        .map((ingredient) => meal[ingredient])

    const measures = Object.keys(meal)
        .filter((key) => key.includes('strMeasure') && meal[key])
        .map((measure) => meal[measure])

    return (
        <div className="RecipeDetails">
            <DetailsHeader meal={meal} />

            
            
            <section className="ingredients">
                <h3 className="ingredients-title">Ingredients</h3>

                {ingredients.map((ingredient, index) => (
                    <div key={index} className="ingred-and-qty">
                        <p className="measure">{measures[index]}</p>
                        <p className="ingredient">{ingredient}</p>
                    </div>
                ))}
            </section>

                <Instructions meal={meal}/>
           
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
