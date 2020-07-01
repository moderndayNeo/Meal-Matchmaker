import React from 'react'
import './RecipePreview.css'
import pancakes from '../../media/welcome-page-pancakes.jpg'
import ViewRecipeButton from './ViewRecipeButton/ViewRecipeButton'

export default function RecipePreview() {
    return (
        <div className="RecipePreview">
            <h1 className="preview-title">Roast Duck</h1>
            <h4 className="preview-category">Duck</h4>
            <img src={pancakes} alt="" />
            <ViewRecipeButton />
        </div>
    )
}
