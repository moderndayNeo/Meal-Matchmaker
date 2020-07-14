import React from 'react'
import './Footer.css'
import FooterContact from './FooterContact/FooterContact'

export default function Footer() {
    return (
        <div className="Footer">
            <div className="text-container">
                <h2 className="title">Meal Matchmaker</h2>
                <div className="developers">
                    <FooterContact
                        github="https://github.com/moderndayNeo?tab=repositories"
                        facebook=""
                        linkedin="https://www.linkedin.com/in/adamzdrzalka/"
                        mailto="adamzdrzalka@outlook.com"
                    />
                    <FooterContact
                        github=""
                        facebook="https://www.facebook.com/putra.narassa"
                        linkedin=""
                        mailto="putraanrss20@gmail.com"
                    />
                </div>
                <p className="copyright">© Copyright 2020. Meal Matchmaker</p>
            </div>
        </div>
    )
}
