import React from 'react'
import './Signup.css'

export default function Signup() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')

    const handleSubmit = () => {
        // create user
    }

    return (
        <div className="Signup">
            <h1 className="title">Create your account</h1>
            <p className="subtext">
                Sign up to save your favourite recipes and add your own
            </p>

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
                    Sign Up
                </button>
            </form>
        </div>
    )
}
