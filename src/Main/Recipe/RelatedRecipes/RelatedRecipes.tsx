import React, { useState, useEffect} from 'react'
import './RelatedRecipes.css'
import RecipePreview from '../../RecipeGenerator/RecipePreview/RecipePreview'
import { IMeal } from '../../../IMeal'
import {meal as myMeal } from '../../../media/response-example'
import getRandomValues from './getRandomValues'

interface RelatedRecipesProps {
    meal: IMeal
}

export default function RelatedRecipes({ meal }: RelatedRecipesProps) {

const category = meal.strCategory

// const [related1, setrelated1] = useState('')
// const [related2, setrelated2] = useState('')
// const [related3, setrelated3] = useState('')
const [relatedMealsList, setRelatedMealsList] = useState<IMeal[]>([]) // type the state


useEffect(() => {
    ;(async function getRelatedRecipes() {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        )
        const data = await response.json()
        const mealsList = await data.meals
        const randomIndexes = getRandomValues(
            await data.meals.length
        )

        // const firstId = mealsList[await randomIndexes[0]].idMeal
        // const secondId = mealsList[await randomIndexes[1]].idMeal
        // const thirdId = mealsList[await randomIndexes[2]].idMeal

        // const firstMeal = await fetch(
        //     `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${await firstId}`
        // )
        // const secondMeal = await fetch(
        //     `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${await secondId}`
        // )
        // const thirdMeal = await fetch(
        //     `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${await thirdId}`
        // )
        // const firstMealResponse = await firstMeal.json()
        // const secondMealResponse = await secondMeal.json()
        // const thirdMealResponse = await thirdMeal.json()

        // setrelated1(firstMealResponse.meals[0])
        // setrelated2(secondMealResponse.meals[0])
        // setrelated3(thirdMealResponse.meals[0])

        // setRelatedMealsList(
        //     await Promise.all(
        //         randomIndexes.map(async (index) => {
        //             const mealId = await mealsList[index].idMeal
        //             const meal = await fetch(
        //                 `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${await mealId}`
        //             )
        //             const response = await meal.json()
        //             return response.meals[0]
        //         })
        //     )
        // )

        const relatedList = await Promise.all(
            randomIndexes.map(async (index) => {
                const mealId = await mealsList[index].idMeal
                const meal = await fetch(
                    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${await mealId}`
                )
                const response = await meal.json()
                return response.meals[0]
            })
        )

        setRelatedMealsList(relatedList)
        console.log(relatedList)

    })()
}, [meal, category])


    return (
        <section className="RelatedRecipes">
            <h3 className="title">Related recipes</h3>
            <div className="slider-container">
                <RecipePreview meal={myMeal} />
                <RecipePreview meal={meal} />
                <RecipePreview meal={meal} />
            </div>
        </section>
    )
}
