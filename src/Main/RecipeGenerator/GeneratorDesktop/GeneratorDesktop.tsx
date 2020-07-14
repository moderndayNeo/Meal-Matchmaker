import React from 'react'
import './GeneratorDesktop.css'
import { IMeal } from '../../../IMeal'

interface GeneratorDesktopProps {
    meal: IMeal
    onClick: () => void
}

export default function GeneratorDesktop({meal, onClick}: GeneratorDesktopProps) {
    return (
        <div className="GeneratorDesktop">
            
        </div>
    )
}
