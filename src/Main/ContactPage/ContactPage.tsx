import React from 'react'
import './ContactPage.css'
import backArrow from '../../media/Icon_left_arrow.svg'
import { useHistory } from 'react-router-dom'
import developers from '../../media/developers.jpeg'
import TeamMember from './TeamMember/TeamMember'

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
                    <h2>Our Team</h2>
                    <p className="summary">
                        Meal Matchmaker is a random recipe generator so you
                        never run out of ideas in the kitchen. Meal Matchmaker
                        is made by Putra and Adam. Feel free to contact us to
                        talk about projects or discuss UX and web-mobile
                        development.
                    </p>
                    <TeamMember
                        title="Putra Narassa (UI Designer)"
                        github=""
                        facebook="https://www.facebook.com/putra.narassa"
                        linkedin=""
                    />
                    <TeamMember
                        title="Adam Zdrzalka (Web Developer)"
                        github="https://github.com/moderndayNeo?tab=repositories"
                        facebook=""
                        linkedin="https://www.linkedin.com/in/adamzdrzalka/"
                    />

                    <img
                        src={developers}
                        alt="development team"
                        className="developer-image"
                    />
                </main>
            </div>
        </div>
    )
}
