import React from 'react'
import './FooterContact.css'
import GithubIcon from '../../media/Icons_Github_white.svg'
import LinkedInIcon from '../../media/Icons_Linkedin_white.svg'
import FacebookIcon from '../../media/Icons_Facebook_white.svg'
import ContactLink from '../../Main/ContactPage/ContactLink/ContactLink'

interface FooterContactProps {
    github: string
    facebook: string
    linkedin: string
    mailto: string
}

export default function FooterContact({
    facebook,
    github,
    linkedin,
    mailto,
}: FooterContactProps) {
    return (
        <div className="FooterContact">
            <a className="email" href={`mailto:${mailto}`}>
                <p>{mailto}</p>
            </a>
            <div className="links">
                {facebook && (
                    <ContactLink
                        src={FacebookIcon}
                        alt="facebook icon"
                        href={facebook}
                    />
                )}
                {github && (
                    <ContactLink
                        src={GithubIcon}
                        alt="github icon"
                        href={github}
                    />
                )}
                {linkedin && (
                    <ContactLink
                        src={LinkedInIcon}
                        alt="linkedin icon"
                        href={linkedin}
                    />
                )}
            </div>
        </div>
    )
}
