import React from 'react'
import './SaveRecipeButton.css'
import { ReactComponent as UnfilledStarIcon } from '../../../media/Icons_star_unfilled.svg'
import AuthContext from '../../../contexts/Auth/AuthContext'
import UIContext from '../../../contexts/UI/UIContext'

export default function SaveRecipeButton() {
    const { isLoggedIn } = React.useContext(AuthContext)
    const { setSignInModal } = React.useContext(UIContext)

    const handleClick = () => {
        if (isLoggedIn) {
            // save recipe
            console.log('saving recipe')
        } else {
            // show sign in modal
            setSignInModal(true)
        }
    }

    return (
        <UnfilledStarIcon className="SaveRecipeButton" onClick={handleClick} />
    )
}
