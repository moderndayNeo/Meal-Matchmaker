import React from 'react'
import './ProfileLink.css'
import { Link } from 'react-router-dom'
import { ReactComponent as ProfileIcon } from '../../../media/Icons_profile.svg'
import AuthContext from '../../../contexts/Auth/AuthContext'

export default function ProfileLink() {
    const { isLoggedIn } = React.useContext(AuthContext)

    return (
        <Link className="ProfileLink" to={isLoggedIn ? '/profile' : '/login'}>
            <ProfileIcon />
        </Link>
    )
}
