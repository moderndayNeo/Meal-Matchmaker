import * as React from 'react'
import './WelcomePage.css'
import foodImage from '../media/healthy-meal.jpg'
import { Link } from 'react-router-dom'

export default function WelcomePage() {
    return (
        <div className="WelcomePage">
            <h1 className="title">Meal Matchmaker</h1>
            <p className="subtext">Inspiration at the click of a button</p>
            <img src={foodImage} alt="pancakes"/>
            <Link className="black-button" to="/recipe-generator">Find My Match!</Link>
        </div>
    )
}
