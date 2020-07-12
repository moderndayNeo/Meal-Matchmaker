import React, { useState } from 'react'
import './Loader.css'

const messages: string[] = [
    'Sit tight, we’re choosing your recipe...',
    'The Recipe Gods are making their choice...',
    'Loading recipe…',
    'Your recipe is on the way!',
    'And the Best Recipe Award goes to...',
    `Tonight I'm going to eat...`,
    `Chef Ramsay has chosen...`,
    `The results are in!`,
    `I WILL NEVER RUN OUT OF RECIPES
    I WILL NEVER RUN OUT OF RECIPES
    I WILL NEVER RUN OUT OF RECIPES`
]

export default function Loader() {
    const [message] = useState(
        messages[Math.floor(Math.random() * messages.length)]
    )

    return (
        <div className="Loader">
            <div className="loading-icon"></div>
            <div className="text">{message}</div>
            <div className="expanding-overlay"></div>
        </div>
    )
}
