import React from 'react'
import './RecipePreview.css'
import pancakes from '../../media/welcome-page-pancakes.jpg'
import { Link } from 'react-router-dom'
import IoMdArrowRoundForward from 'react-icons/io'

export default function RecipePreview() {
    return (
        <div className="RecipePreview">
            <h1 className="preview-title">Roast Duck</h1>
            <h4 className="preview-category">Duck</h4>
            <img src={pancakes} alt=""/>
            <Link to="/view-recipe">View Recipe</Link>
        </div>
    )
}
