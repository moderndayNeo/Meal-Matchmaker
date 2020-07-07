import React from 'react'
import './ContactPage.css'
import backArrow from '../media/Icon_left_arrow.svg'
import { useHistory } from 'react-router-dom'

export default function ContactPage() {

    const history = useHistory()

    const goBack = (): void => {
        history.goBack()
    }

    return (
        <div className="ContactPage">
            <div className="contact-nav">
                <img
                    src={backArrow}
                    alt="back arrow"
                    className="back-arrow"
                    onClick={goBack}
                />
            </div>

            <div className="main-wrapper">
                <main>
                    <h1>Our Story</h1>
                    <p className="summary">
                        Design: Putra Nasara Developer: Adam Zdrzalka We are
                        growing digital team who focus on UI, UX & web
                        development. We love to make enjoyable website & apps.
                        Contact us to say Hi or to ask about projects.
                    </p>
                </main>
            </div>
        </div>
    )
}
