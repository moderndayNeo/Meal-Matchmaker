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
        .filter((key) => key.includes('strIngredient'))
        .map((ingredient) => meal[ingredient])

    console.log(ingredients)

    const measures = Object.keys(meal)
        .filter((key) => key.includes('strMeasure'))
        .map((measure) => meal[measure])

    console.log(measures)

    return (
        <div className="RecipeDetails">
            <section className="title-and-category">
                <h1 className="title">{meal.strMeal}</h1>
                <h4 className="recipe-category">{meal.strCategory}</h4>
            </section>
            <section>
                {ingredients.map((ingredient, index) => (
                    <div key={index}>
                        <p>{measures[index]}</p>
                        <p>{ingredient}</p>
                    </div>
                ))}
            </section>
        </div>
    )
}

/*
interface Cars {
    car1: string
    car2: string
    car3: string
}

const cars: Cars = {
    car1: 'mercedes',
    car2: 'bmw',
    car3: 'audi',
}

const keys = Object.keys(cars)
cars[keys[0]]
*/
