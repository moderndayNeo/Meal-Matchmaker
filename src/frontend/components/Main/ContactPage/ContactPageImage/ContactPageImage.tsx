import React from 'react'
import './ContactPageImage.css'
import developers from '../../../../media/developers-mobile.jpeg'
import developersDesktopImg from '../../../../media/developers-desktop.jpg'

export default function ContactPageImage() {
    return (
        <div className="ContactPageImage">
            <img
                src={developers}
                alt="development team"
                className="mobile-image"
            />
            <img
                src={developersDesktopImg}
                alt="development team"
                className="desktop-image"
            />
        </div>
    )
}
