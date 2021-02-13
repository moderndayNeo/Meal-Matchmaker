import React from 'react'
import './ViewRecipeButton.css'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { useHistory } from 'react-router-dom'

export default function ViewRecipeButton() {
    const history = useHistory()

    return (
        <button
            onClick={(e) => history.push('/recipe')}
            className="ViewRecipeButton"
        >
            <p>View Recipe</p>
            <IoMdArrowRoundForward className="right-arrow" />
        </button>
    )
}
