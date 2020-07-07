import React from 'react'
import './Ingredients.css'

export default function Ingredients({ meal }: any) {
    const ingredients = Object.keys(meal)
        .filter((key) => key.includes('strIngredient') && meal[key])
        .map((ingredient) => meal[ingredient])

    const measures = Object.keys(meal)
        .filter((key) => key.includes('strMeasure') && meal[key])
        .map((measure) => meal[measure])

    return (
        <section className="Ingredients">
            <h3 className="ingredients-title">Ingredients</h3>

            {ingredients.map((ingredient, index) => (
                <div key={index} className="ingred-and-qty">
                    <p className="measure">{measures[index]}</p>
                    <p className="ingredient">{ingredient}</p>
                </div>
            ))}
        </section>
    )
}
