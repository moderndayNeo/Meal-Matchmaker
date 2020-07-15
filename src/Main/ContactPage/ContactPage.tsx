import React from 'react'
import './ContactPage.css'
import backArrow from '../../media/Icon_left_arrow.svg'
import { useHistory } from 'react-router-dom'
import developers from '../../media/developers-mobile.jpeg'
import developersDesktopImg from '../../media/developers-desktop.jpg'
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
                    <h2 className="title">Our Team</h2>
                    <div className="summary">
                        <p>
                            Meal Matchmaker is a random recipe generator so you
                            never run out of ideas in the kitchen. After
                            discussing ideas on a UI Forum, Putra and Adam
                            teamed up to build the app; overcoming timezones and
                            lockdown.
                        </p>
                        <p>
                            Feel free to contact us for work or to discuss UX
                            and web-mobile development.
                        </p>
                    </div>
                    <div className="team-members">
                        <TeamMember
                            name="Putra Narassa (UI Designer)"
                            github=""
                            facebook="https://www.facebook.com/putra.narassa"
                            linkedin=""
                            mailto="putraanrss20@gmail.com"
                        />
                        <TeamMember
                            name="Adam Zdrzalka (Web Developer)"
                            github="https://github.com/moderndayNeo?tab=repositories"
                            facebook=""
                            linkedin="https://www.linkedin.com/in/adamzdrzalka/"
                            mailto="adamzdrzalka@outlook.com"
                        />
                    </div>

                    <img
                        src={developers}
                        alt="development team"
                        className="developer-image mobile-image"
                    />
                    <img
                        src={developersDesktopImg}
                        alt="development team"
                        className="developer-image desktop-image"
                    />
                </main>
            </div>
        </div>
    )
}
