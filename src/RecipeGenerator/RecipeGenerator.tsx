import React from 'react'
import './RecipeGenerator.css'
import InfoIcon from './InfoIcon/InfoIcon'
import RecipePreview from './RecipePreview/RecipePreview'
import NewRecipeButton from './NewRecipeButton/NewRecipeButton'
import {meal} from '../media/response-example'

export default function RecipeGenerator() {
    return (
        <div className="RecipeGenerator">
            <p className="header-text">Meal Matchmaker</p>
            <InfoIcon />
            {/* <RecipePreview meal={meal} /> */}
            <NewRecipeButton />
        </div>
    )
}
