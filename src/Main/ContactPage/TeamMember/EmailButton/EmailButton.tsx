import React from 'react'
import './EmailButton.css'

interface EmailButtonProps {
    mailto: string
    name: string
}

export default function EmailButton({ mailto, name }: EmailButtonProps) {
    return (
        <a className="EmailButton" href={`mailto:${mailto}`}>
            Email {name.split(' ')[0]}
        </a>
    )
}
