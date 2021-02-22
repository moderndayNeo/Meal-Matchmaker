import React from 'react'
import './ReturnNavbar.css'
import backArrow from '../../../media/Icon_left_arrow.svg'
import { useHistory } from 'react-router-dom'

export default function ReturnNavbar() {
    const history = useHistory()

    const goBack = (): void => {
        history.goBack()
    }

    return (
        <nav className="ReturnNavbar">
            <img
                src={backArrow}
                alt="back arrow"
                className="back-arrow"
                onClick={goBack}
            />
        </nav>
    )
}
