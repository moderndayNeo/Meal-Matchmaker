import React from 'react'
import './Login.css'
import { useHistory, Link } from 'react-router-dom'

export default function Login() {
    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const history = useHistory()

    const handleSubmit = (e: any) => {
        e.preventDefault()

        // attempt to login the user, handle response
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
                    disabled
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
