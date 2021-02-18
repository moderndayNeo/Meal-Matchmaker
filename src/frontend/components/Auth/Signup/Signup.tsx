import React from 'react'
import './Signup.css'
import APIUtil from '../../../util/api.utils'
import { useHistory } from 'react-router-dom'

export default function Signup() {
    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const history = useHistory()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        APIUtil.createUser({ username }).then((res) => handleResponse(res))
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
