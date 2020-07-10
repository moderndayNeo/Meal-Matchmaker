import React from 'react'
import './FooterContact.css'
import FooterLink from './FooterLink/FooterLink'
import GithubIcon from '../../media/Icons_Github_white.svg'
import LinkedInIcon from '../../media/Icons_Linkedin_white.svg'
import FacebookIcon from '../../media/Icons_Facebook_white.svg'

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
                <h3>

                {mailto}
                </h3>
            </a>
            <div className="links">
                {facebook && (
                    <FooterLink
                        src={FacebookIcon}
                        alt="facebook icon"
                        className="facebook-icon"
                        href={facebook}
                    />
                )}
                {github && (
                    <FooterLink
                        src={GithubIcon}
                        alt="github icon"
                        className="github-icon"
                        href={github}
                    />
                )}
                {linkedin && (
                    <FooterLink
                        src={LinkedInIcon}
                        alt="linkedin icon"
                        className="linkedin-icon"
                        href={linkedin}
                    />
                )}
            </div>
        </div>
    )
}
