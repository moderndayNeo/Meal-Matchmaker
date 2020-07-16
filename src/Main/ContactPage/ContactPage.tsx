import React from 'react'
import './ContactPage.css'
import backArrow from '../../media/Icon_left_arrow.svg'
import { useHistory } from 'react-router-dom'
import TeamMember from './TeamMember/TeamMember'
import ContactPageSummary from './ContactPageSummary/ContactPageSummary'
import ContactPageImage from './ContactPageImage/ContactPageImage'

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
                    <article>
                        <h2 className="title">Our Team</h2>
                        <ContactPageSummary />
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
                    </article>

                    <ContactPageImage />
                </main>
            </div>
        </div>
    )
}
