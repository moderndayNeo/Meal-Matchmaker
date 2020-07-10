import React from 'react'
import './RecipeComponentsMobile.css'
import RecipeDetails from '../RecipeDetails/RecipeDetails'
import { IMeal } from '../../../IMeal'
import { ReactComponent as BackButton } from '../../../media/Icons_left_arrow_white.svg'
import { useHistory } from 'react-router-dom'

interface RecipeComponentsMobileProps {
    meal: IMeal
    setRandomRecipe: (meal: IMeal) => void
}

export default function RecipeComponentsMobile({
    meal,
    setRandomRecipe,
}: RecipeComponentsMobileProps) {
    const history = useHistory()

    const goBack = (): void => {
        history.goBack()
    }

    return (
        <div className="RecipeComponentsMobile">
            <nav className="overlay">
                <BackButton className="back-button" onClick={goBack} />
            </nav>
            <img src={meal.strMealThumb} className="recipe-image" alt="meal" />
            <RecipeDetails meal={meal} setRandomRecipe={setRandomRecipe} />
        </div>
    )
}
