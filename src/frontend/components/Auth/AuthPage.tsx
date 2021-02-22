import React from 'react'
import './AuthPage.css'
import ReturnNavbar from '../common/ReturnNavbar/ReturnNavbar'
import { Link } from 'react-router-dom'
import AuthContext from '../../contexts/Auth/AuthContext'

const AuthPage: React.FC<{
    children: React.ReactNode
    title: string
    alternate: string
}> = ({ children, title, alternate }) => {
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
                    className="generate-button auth-button"
                    // onClick={() =>
                    //     signIn({ username: 'Guest', password: 'guestaccount' })
                    // }
                >
                    Continue as Guest
                </button>

                {alternate === 'signup' ? (
                    <section className="alternate-link">
                        <p>Don't have an account?</p>
                        <Link to="/sign-up">Sign Up</Link>
                    </section>
                ) : (
                    <section className="alternate-link">
                        <p>Already have an account?</p>
                        <Link to="/login">Log In</Link>
                    </section>
                )}
            </main>
        </div>
    )
}

export default AuthPage
