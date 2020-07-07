import React from 'react'
import './ContactPage.css'
import backArrow from '../media/Icon_left_arrow.svg'
import { useHistory } from 'react-router-dom'
import GithubIcon from '../media/Icons_Github_dark.svg'
import LinkedInIcon from '../media/Icons_Linkedin_dark.svg'
import FacebookIcon from '../media/Icons_Facebook_dark.svg'
import developmentImage from '../media/contact-page-developer.jpg'

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
                        <p>Design: Putra Nasara</p>
                        <p>Developer: Adam Zdrzalka</p>
                        We are growing digital team who focus on UI, UX & web
                        development. We love to make enjoyable websites & apps.
                        Contact us to say Hi or to ask about projects.
                    </p>
                    <div className="links">
                        <img
                            src={GithubIcon}
                            alt="github icon"
                            className="github-icon"
                        />
                        <img
                            src={LinkedInIcon}
                            alt="linkedin icon"
                            className="linkedin-icon"
                        />
                        <img
                            src={FacebookIcon}
                            alt="facebook icon"
                            className="facebook-icon"
                        />
                    </div>

                    <img
                        src={developmentImage}
                        alt="development team"
                        className="developer-image"
                    />
                </main>
            </div>
        </div>
    )
}
