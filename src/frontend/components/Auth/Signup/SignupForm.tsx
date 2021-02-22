import React from 'react'
import './SignupForm.css'
import APIUtil from '../../../util/api.utils'
import { useHistory, Link } from 'react-router-dom'

export default function SignupForm() {
    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [confirmPassword, setConfirmPassword] = React.useState<string>('')
    const history = useHistory()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        APIUtil.createUser({ username, password }).then((res) =>
            handleResponse(res)
        )
        // use auth context for this
    }

    interface ResObject {
        status: number
    }

    const handleResponse = (res: ResObject) => {
        if (res.status === 200) {
            // handle success - login user and re-route to recipe page or profile page
            history.push('/recipe-generator')
        } else {
            console.log(res)
        }
    }

    const allFieldsEntered = [username, password, confirmPassword].every(
        (field) => field
    )
    const passwordsDontMatch = password !== confirmPassword

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
                // disabled
            />
            <br />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                // disabled
            />
            {passwordsDontMatch && <p>Passwords must match</p>}

            <br />
            <button
                disabled={!allFieldsEntered || passwordsDontMatch}
                className="generate-button"
                onClick={handleSubmit}
            >
                Sign Up
            </button>
        </form>
    )
}
