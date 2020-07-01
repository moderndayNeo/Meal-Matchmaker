import React from 'react'
import './ViewRecipeButton.css'
import { Link } from 'react-router-dom'
import {IoMdArrowRoundForward} from 'react-icons/io'

export default function ViewRecipeButton() {
    return (
        <Link to="/recipe" className="ViewRecipeButton">
            <p>View Recipe</p>
            <IoMdArrowRoundForward className="icon" />
        </Link>
    )
}
