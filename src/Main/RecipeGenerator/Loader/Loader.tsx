import React from 'react'
import './Loader.css'

interface LoaderProps {
    loading: boolean
}

export default function Loader({ loading}: LoaderProps) {
    return (
        <div className={`Loader ${loading && "loading"}`}>
            <div className="loading-icon"></div>
            <div className="text">Relax & sit tight. Our recipe idea will come in a second</div>
        </div>
    )
}
