import * as React from 'react'
import './WelcomePage.css'
import { Link } from 'react-router-dom'
import coffee from '../media/welcome_page_coffee.svg'

export default function WelcomePage() {
    return (
        <div className="WelcomePage">
            <h1 className="title">Meal Matchmaker</h1>
            <p className="subtext">Inspiration at the click of a button</p>
            <img src={coffee} alt="man hugging coffee cup"/>
            <Link className="black-button" to="/recipe-generator">Find My Match!</Link>
        </div>
    )
}


