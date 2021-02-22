import React from 'react'
import './SignInModal.css'
import { Link } from 'react-router-dom'
import UIContext from '../../../contexts/UI/UIContext'

export default function SignInModal() {
    const { setSignInModal } = React.useContext(UIContext)

    return (
        <div className="SignInModal">
            <div className="modal">
                <p className="title">Sign In to save your favourite recipes</p>
                <Link to="/login" className="login-link generate-button">
                    Sign In
                </Link>
                <p
                    className="cancel-button"
                    onClick={() => setSignInModal(false)}
                >
                    Cancel
                </p>
            </div>
        </div>
    )
}
