import React from 'react'
import './FooterContact.css'
import ContactLink from '../../Main/ContactPage/ContactLink/ContactLink'
import GithubIcon from '../../media/Icons_Github_dark.svg'
import LinkedInIcon from '../../media/Icons_Linkedin_dark.svg'
import FacebookIcon from '../../media/Icons_Facebook_dark.svg'

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
            <p className="title">Name</p>
            {facebook && (
                <ContactLink
                    href={facebook}
                    src={FacebookIcon}
                    alt="facebook icon"
                    className="facebook-icon"
                />
            )}
            {github && (
                <ContactLink
                    href={github}
                    src={GithubIcon}
                    alt="github icon"
                    className="github-icon"
                />
            )}
            {linkedin && (
                <ContactLink
                    href={linkedin}
                    src={LinkedInIcon}
                    alt="linkedin icon"
                    className="linkedin-icon"
                />
            )}
        </div>
    )
}
