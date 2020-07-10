import React from 'react'
import './FooterLink.css'

interface FooterLinkProps {
    href: string
    src: string
    alt: string
    className: string
}

export default function FooterLink({ href, src, alt, className}: FooterLinkProps) {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="FooterLink">
            <img src={src} alt={alt} className={className} />
        </a>
    )
}
