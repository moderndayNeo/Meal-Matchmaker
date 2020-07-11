import React from 'react'
import './TeamMember.css'
import ContactLink from '../ContactLink/ContactLink'
import GithubIcon from '../../../media/Icons_Github_dark.svg'
import LinkedInIcon from '../../../media/Icons_Linkedin_dark.svg'
import FacebookIcon from '../../../media/Icons_Facebook_dark.svg'
import EmailButton from './EmailButton/EmailButton'

interface TeamMemberProps {
    name: string
    github: string
    facebook: string
    linkedin: string
    mailto: string
}

export default function TeamMember({
    name,
    github,
    facebook,
    linkedin,
    mailto,
}: TeamMemberProps) {
    return (
        <div className="TeamMember">
            <h3 className="name">{name}</h3>
            <div className="links">
                {facebook && (
                    <ContactLink
                        href={facebook}
                        src={FacebookIcon}
                        alt="facebook icon"
                    />
                )}
                {github && (
                    <ContactLink
                        href={github}
                        src={GithubIcon}
                        alt="github icon"
                    />
                )}
                {linkedin && (
                    <ContactLink
                        href={linkedin}
                        src={LinkedInIcon}
                        alt="linkedin icon"
                    />
                )}
            </div>
            <EmailButton mailto={mailto} name={name} />
        </div>
    )
}
