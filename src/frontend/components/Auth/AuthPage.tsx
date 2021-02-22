import React from 'react'
import './AuthPage.css'
import ReturnNavbar from '../common/ReturnNavbar/ReturnNavbar'
import { Link } from 'react-router-dom'
import AuthContext from '../../contexts/Auth/AuthContext'
// import UIContext from '../../../contexts/UI/UIContext'

const AuthPage: React.FC<{ children: React.ReactNode; title: string }> = ({
    children,
    title,
}) => {
    const { signIn } = React.useContext(AuthContext)

    return (
        <div className="AuthPage">
            <ReturnNavbar />
            <main className="auth-container">
                <h1 className="title">{title}</h1>
                {children}

                <div className="or-separator">
                    <div className="separator-line"></div>
                    <p>OR</p>
                    <div className="separator-line"></div>
                </div>

                <button
                    className="generate-button login-button"
                    // onClick={() =>
                    //     signIn({ username: 'Guest', password: 'guestaccount' })
                    // }
                >
                    Continue as Guest
                </button>

                {/* <section className="sign-up-link">
                    <p>{alternateText} have an account?</p>
                    <Link to={alternateHref}>{alternateLinkText}</Link>
                </section> */}
            </main>
        </div>
    )
}

export default AuthPage
