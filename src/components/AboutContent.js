import "./AboutContentStyles.css"
import react1 from "../assets/react1.jpg"
import react2 from "../assets/react2.webp"
import React from 'react'
import { Link } from "react-router-dom"

export const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who AM I?</h1>
            <p>I'm a React Front-End Developer. I create responsive secure website for my clients.</p>
            <Link to='/contact'>
                <button className="btn">Contact</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="true"></img>
                </div>
                <div className="img-stack bottom">
                    <img src={react2} className="img" alt="true"></img>
                </div>
            </div>
        </div>
    </div>
  )
}
