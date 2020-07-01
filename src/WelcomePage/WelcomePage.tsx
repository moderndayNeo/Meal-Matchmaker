import React from 'react'
import './WelcomePage.css'
import foodImage from '../media/healthy-meal.jpg'

export default function WelcomePage() {
    return (
        <div className="WelcomePage">
            <h1 className="title">Meal Matchmaker</h1>
            <p className="subtext">Inspiration at the click of a button</p>
            <img src={foodImage} alt="pancakes"/>
            <button className="black-button">Give me a new recipe</button>
        </div>
    )
}
