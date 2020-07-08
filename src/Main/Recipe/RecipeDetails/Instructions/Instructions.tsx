import React from 'react'
import './Instructions.css'
import { IMeal } from '../../../../IMeal'

interface InstructionsProps {
    meal: IMeal
}

export default function Instructions({ meal }: InstructionsProps) {
    return (
        <section className="Instructions">
            <h3 className="title">Instructions</h3>

            {/* {meal.strInstructions
                .split('\n')
                .map((instruction: string, index: number) => (
                    <div key={index} className="instruction-and-number">
                        <p className="number">{index + 1}. </p>
                        <p className="instruction">{instruction}</p>
                    </div>
                ))} */}
            {
                meal.strInstructions
                    .split('\n')
                    .map((instruction: string, index: number) => (
                        <div key={index}>
                            <p>
                                {instruction}
                            </p>
                        </div>
                    ))
            }
        </section>
    )
}
