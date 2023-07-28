import "./HeroImgStyles.css"
import IntroImg from "../assets/intro-bg.jpg"

import React from 'react'
import { Link } from "react-router-dom"

export const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt='IntroImg'/>
        </div>

         <div className="content">
            <p>Hi, I'm Pruthviraj Sharma</p>
            <h1>Software Developer</h1>
            <div>
                <Link to='/project' className="btn">projects</Link>
                <Link to='/contact' className="btn btn-light">contact</Link>
            </div>

         </div>
    </div>
  )
}
