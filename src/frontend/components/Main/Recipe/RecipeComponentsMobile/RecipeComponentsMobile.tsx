import React from 'react'
import './RecipeComponentsMobile.css'
import RecipeDetails from '../RecipeDetails/RecipeDetails'
import { IMeal } from '../../../../IMeal'
import { ReactComponent as BackButton } from '../../../../media/Icons_left_arrow_white.svg'
import { ReactComponent as UnfilledStarIcon } from '../../../../media/Icons_star_unfilled.svg'
import { Link } from 'react-router-dom'

interface RecipeComponentsMobileProps {
    meal: IMeal
    setRandomRecipe: (meal: IMeal) => void
}

export default function RecipeComponentsMobile({
    meal,
    setRandomRecipe,
}: RecipeComponentsMobileProps) {
    return (
        <div className="RecipeComponentsMobile">
            <nav className="recipe-nav">
                <Link to="/recipe-generator">
                    <BackButton
                        className="back-button"
                        onClick={() => setRandomRecipe(meal)}
                    />
                </Link>
                <UnfilledStarIcon className="save-recipe-icon" />
            </nav>
            <img src={meal.strMealThumb} className="recipe-image" alt="meal" />
            <RecipeDetails meal={meal} setRandomRecipe={setRandomRecipe} />
        </div>
    )
}
