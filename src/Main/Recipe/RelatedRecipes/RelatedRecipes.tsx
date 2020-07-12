import React, { useState, useEffect } from 'react'
import './RelatedRecipes.css'
import RecipePreview from '../../RecipeGenerator/RecipePreview/RecipePreview'
import { IMeal } from '../../../IMeal'
import getRandomValues from './getRandomValues'

interface RelatedRecipesProps {
    meal: IMeal
    setRandomRecipe: (meal: IMeal) => void
}

export default function RelatedRecipes({
    meal,
    setRandomRecipe,
}: RelatedRecipesProps) {
    const category = meal.strCategory
    const [relatedMealsList, setRelatedMealsList] = useState<IMeal[]>([])

    useEffect(() => {
        ;(async function getRelatedRecipes() {
            const response = await fetch(
                `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
            )
            const data = await response.json()
            const mealsList = await data.meals
            const randomIndexes = getRandomValues(await data.meals.length)

            setRelatedMealsList(
                await Promise.all(
                    randomIndexes.map(async (index) => {
                        const mealId = await mealsList[index].idMeal
                        const meal = await fetch(
                            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${await mealId}`
                        )
                        const response = await meal.json()
                        return response.meals[0]
                    })
                )
            )
        })()
    }, [meal, category])

    return (
        <section className="RelatedRecipes">
            <h3 className="section-title">Related recipes</h3>
            <div className="slider-container">
                {relatedMealsList.map((meal) => (
                    <RecipePreview
                        key={meal.idMeal}
                        meal={meal}
                        setRandomRecipe={setRandomRecipe}
                    />
                ))}
            </div>
        </section>
    )
}
