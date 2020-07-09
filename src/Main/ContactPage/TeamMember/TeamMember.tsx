import React from 'react'
import './TeamMember.css'
import ContactLink from '../ContactLink/ContactLink'
import GithubIcon from '../../../media/Icons_Github_dark.svg'
import LinkedInIcon from '../../../media/Icons_Linkedin_dark.svg'
import FacebookIcon from '../../../media/Icons_Facebook_dark.svg'

interface TeamMemberProps {
    title: string
    github: string
    facebook: string
    linkedin: string
}

export default function TeamMember({
    title,
    github,
    facebook,
    linkedin,
}: TeamMemberProps) {
    return (
        <div className="TeamMember">
            <h3>{title}</h3>

            <div className="links">
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
        </div>
    )
}
