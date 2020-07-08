import React from 'react'
import './DetailsHeader.css'
import { IMeal } from '../../../../IMeal'

interface DetailsHeaderProps {
    meal: IMeal
}

export default function DetailsHeader({ meal }: DetailsHeaderProps) {
    return (
        <section className="DetailsHeader">
            <h1 className="title">{meal.strMeal}</h1>
            <h4 className="category">{meal.strCategory}</h4>
        </section>
    )
}
