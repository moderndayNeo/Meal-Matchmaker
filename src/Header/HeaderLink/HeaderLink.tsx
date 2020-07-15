import React from 'react'
import './HeaderLink.css'
import { Link, useLocation } from 'react-router-dom'

interface HeaderLinkProps {
    destination: string
    text: string
}

export default function HeaderLink({ destination, text }: HeaderLinkProps) {
    const location = useLocation()
    return (
        <Link className="HeaderLink" to={destination}>
            <span
                className={
                    location.pathname === `${destination}` ? 'bold' : undefined
                }
            >
                {text}
            </span>
        </Link>
    )
}
