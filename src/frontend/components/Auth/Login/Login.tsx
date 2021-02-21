import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'

export default function Login() {
    const { signIn } = React.useContext(AuthContext)

    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')

    const handleSubmit = (e: any) => {
        e.preventDefault()

        signIn({ username, password })
    }

    return (
        <div className="Login">
            <h1 className="title">Sign in to your account</h1>
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

                <button className="generate-button" onClick={handleSubmit}>
                    Log In
                </button>
            </form>
            <hr />
            --- Or ---
            <hr />
            <Link className="generate-button" to="/sign-up">
                Return to Sign Up
            </Link>
        </div>
    )
}
