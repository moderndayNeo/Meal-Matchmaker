import * as React from 'react'
import './WelcomePage.css'
import coffee from '../../media/welcome_page_coffee.svg'
import WelcomePageButton from './WelcomePageButton/WelcomePageButton'

interface WelcomePageProps {
    onClick: () => void
}

export default function WelcomePage({ onClick }: WelcomePageProps) {
    return (
        <div className="WelcomePage">
            <div className="text-and-image">
                <div className="text-container">
                    <h1 className="title">Meal Matchmaker</h1>
                    <p className="subtext">
                        Get inspiration at the click of a button
                    </p>
                </div>
                <img src={coffee} alt="man hugging coffee cup" />
            </div>
            <WelcomePageButton onClick={onClick} />
        </div>
    )
}
