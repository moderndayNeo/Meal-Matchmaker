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
    location: string
    mailto: string
}

export default function TeamMember({
    name,
    github,
    facebook,
    linkedin,
    location,
    mailto
}: TeamMemberProps) {
    return (
        <div className="TeamMember">
            <h3 className="name">{name}</h3>
            <h4 className="location">{location}</h4>

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
                <EmailButton mailto={mailto} name={name}  />
            </div>
        </div>
    )
}
