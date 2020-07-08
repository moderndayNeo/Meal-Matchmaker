import React from 'react'
import './ContactPage.css'
import backArrow from '../../media/Icon_left_arrow.svg'
import { useHistory } from 'react-router-dom'
import GithubIcon from '../../media/Icons_Github_dark.svg'
import LinkedInIcon from '../../media/Icons_Linkedin_dark.svg'
import FacebookIcon from '../../media/Icons_Facebook_dark.svg'
import developers from '../../media/developers.jpeg'
import ContactLink from './ContactLink/ContactLink'

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
                        <p>Putra Narassa (Design)</p>
                        <p>Adam Zdrzalka (Developer)</p>
                        <p>
                            We are growing digital team who focus on UI, UX &
                            web development. We love to make enjoyable websites
                            & apps. Contact us to say Hi or to ask about
                            projects.
                        </p>
                    </div>
                    <div className="links">
                        <ContactLink
                            href="https://github.com/moderndayNeo?tab=repositories"
                            src={GithubIcon}
                            alt="github icon"
                            className="github-icon"
                        />
                        <ContactLink
                            href="https://www.linkedin.com/in/adamzdrzalka/"
                            src={LinkedInIcon}
                            alt="linkedin icon"
                            className="linkedin-icon"
                        />
                        <ContactLink
                            href="https://www.facebook.com/putra.narassa"
                            src={FacebookIcon}
                            alt="facebook icon"
                            className="facebook-icon"
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
