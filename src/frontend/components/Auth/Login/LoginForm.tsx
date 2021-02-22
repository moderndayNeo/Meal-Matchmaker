import React from 'react'
import AuthContext from '../../../contexts/Auth/AuthContext'

export default function LoginForm() {
    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const { signIn } = React.useContext(AuthContext)

    const handleSubmit = (e: any) => {
        e.preventDefault()

        signIn({ username, password })
    }

    return (
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
                className="generate-button auth-button"
                onClick={handleSubmit}
            >
                Log In
            </button>
        </form>
    )
}
