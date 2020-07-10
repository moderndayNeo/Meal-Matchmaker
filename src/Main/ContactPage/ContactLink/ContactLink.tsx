import React from 'react'
import './ContactLink.css'

interface ContactLinkProps {
    href: string
    src: string
    alt: string
}

export default function ContactLink({ href, src, alt }: ContactLinkProps) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="ContactLink"
        >
            <img src={src} alt={alt} />
        </a>
    )
}
