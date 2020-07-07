import React from 'react'
import './RecipeDetails.css'
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

    console.log(measures)

    return (
        <div className="RecipeDetails">
            <section className="title-and-category">
                <h1 className="title">{meal.strMeal}</h1>
                <h4 className="category">{meal.strCategory}</h4>
            </section>
            <section className="ingredients">
                <h3 className="ingredients-title">Ingredients</h3>

                {ingredients.map((ingredient, index) => (
                    <div key={index} className="ingred-and-qty">
                        <p className="measure">{measures[index]}</p>
                        <p className="ingredient">{ingredient}</p>
                    </div>
                ))}
            </section>
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
