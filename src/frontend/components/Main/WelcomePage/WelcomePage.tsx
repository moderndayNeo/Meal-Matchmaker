import * as React from 'react'
import './WelcomePage.css'
import coffee from '../../../media/welcome_page_coffee.svg'
import WelcomePageButton from './WelcomePageButton/WelcomePageButton'

interface WelcomePageProps {
    onClick: () => void
}

export default function WelcomePage({ onClick }: WelcomePageProps) {
    return (
        <div className="WelcomePage">
            <div className="text-and-image">
                <div className="text-and-button">
                    <div className="text-only">
                        <h1 className="title">Get today's recipe idea</h1>
                        <p className="subtext">
                            Inspiration at the click of a button
                        </p>
                    </div>
                    <WelcomePageButton onClick={onClick} />
                </div>
                <img src={coffee} alt="man hugging coffee cup" />
            </div>
        </div>
    )
}
