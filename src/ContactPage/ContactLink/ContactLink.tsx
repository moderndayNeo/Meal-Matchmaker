import React from 'react'
import './ContactLink.css'

interface ContactLinkProps {
    href: string
    src: string
    alt: string
    className: string
}

export default function ContactLink({
    href,
    src,
    alt,
    className,
}: ContactLinkProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={alt} className={className} />
        </a>
    )
}
