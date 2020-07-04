import * as React from 'react'
import './WelcomePage.css'
import foodImage from '../media/healthy-meal.jpg'
import { Link } from 'react-router-dom'
import arrow from '../media/Icons_right_arrow_dark.svg'

export default function WelcomePage() {
    return (
        <div className="WelcomePage">
            <h1 className="title">Meal Matchmaker</h1>
            <p className="subtext">Inspiration at the click of a button</p>
            <img src={foodImage} alt="man hugging coffee cup"/>
            <img src={arrow} alt=""/>
            <Link className="black-button" to="/recipe-generator">Find My Match!</Link>
        </div>
    )
}


