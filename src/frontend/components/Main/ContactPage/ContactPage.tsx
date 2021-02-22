import React from 'react'
import './ContactPage.css'
import TeamMember from './TeamMember/TeamMember'
import ContactPageSummary from './ContactPageSummary/ContactPageSummary'
import ContactPageImage from './ContactPageImage/ContactPageImage'
import ReturnNavbar from '../../common/ReturnNavbar/ReturnNavbar'

export default function ContactPage() {
    return (
        <div className="ContactPage">
            <ReturnNavbar />

            <div className="main-wrapper">
                <main>
                    <article>
                        <h2 className="title">Our Team</h2>
                        <ContactPageSummary />
                        <div className="team-members">
                            <TeamMember
                                name="Putra Narassa (UI Designer)"
                                github=""
                                facebook="https://www.facebook.com/putra.rassa12"
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
