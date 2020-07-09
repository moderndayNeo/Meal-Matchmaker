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
                    <h1>Our Team</h1>
                    <div className="summary">
                        <p>
                            We are growing digital team who focus on UI, UX &
                            web development. We love to make enjoyable websites
                            & apps. Contact us to say Hi or to ask about
                            projects.
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
                    </div>

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
