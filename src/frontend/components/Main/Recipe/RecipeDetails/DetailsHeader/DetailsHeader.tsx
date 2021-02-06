import React from 'react'
import './DetailsHeader.css'
import { IMeal } from '../../../../../IMeal'

interface DetailsHeaderProps {
    meal: IMeal
}

export default function DetailsHeader({ meal }: DetailsHeaderProps) {
    return (
        <section className="DetailsHeader">
            <h2 className="title">{meal.strMeal}</h2>
            <h4 className="category">{meal.strCategory}</h4>
        </section>
    )
}
