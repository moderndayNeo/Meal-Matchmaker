import React from 'react'
import './NewRecipeButton.css'
// import { MdSwapVerticalCircle } from 'react-icons/md'
import regenerateIcon from '../../media/Icons_regenerate_dark.svg'


export default function NewRecipeButton() {
    return (
        <div className="NewRecipeButton generate-button">
            <div className="text-container">
                <p className="text">Generate Again</p>
                {/* <MdSwapVerticalCircle /> */}
                <img src={regenerateIcon} alt="regenerate icon"/>
            </div>
        </div>
    )
}
