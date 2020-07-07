import React from 'react'
import './Instructions.css'
import { IMeal } from '../../../IMeal'

interface InstructionsProps {
    meal: IMeal
}

export default function Instructions({ meal }: InstructionsProps) {
    return (
        <section className="instructions">
            <h3 className="instructions-title">Instructions</h3>

            {meal.strInstructions
                .split('\n')
                .map((instruction: string, index: number) => (
                    <div key={index} className="instruction-and-number">
                        <p className="instruction-number">{index + 1}. </p>
                        <p className="instruction">{instruction}</p>
                    </div>
                ))}
        </section>
    )
}
