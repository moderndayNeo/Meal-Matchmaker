import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import AuthContext from '../../../contexts/Auth/AuthContext'
import UIContext from '../../../contexts/UI/UIContext'
import ReturnNavbar from '../../common/ReturnNavbar/ReturnNavbar'

export default function Login() {
    const { signIn } = React.useContext(AuthContext)
    const { setSignInModal } = React.useContext(UIContext)

    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    React.useEffect(() => setSignInModal(false))

    const handleSubmit = (e: any) => {
        e.preventDefault()

        signIn({ username, password })
    }

    return (
        <div className="Login">
            <ReturnNavbar />
            <main className="login-container">
                <h1 className="title">Sign In to your account</h1>
                <form>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button
                        className="generate-button login-button"
                        onClick={handleSubmit}
                    >
                        Log In
                    </button>
                </form>

                <div className="or-separator">
                    <div className="separator-line"></div>
                    <p>OR</p>
                    <div className="separator-line"></div>
                </div>

                <button
                    className="generate-button login-button"
                    // onClick={login with guest account}
                >
                    Continue as Guest
                </button>
                <section className="sign-up-link">
                    <p>Don't have an account?</p>
                    <Link to="/sign-up">Sign Up</Link>
                </section>
            </main>
        </div>
    )
}
