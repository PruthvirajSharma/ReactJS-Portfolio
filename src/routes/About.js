import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { HeroImg2 } from '../components/HeroImg2'
import { AboutContent } from '../components/AboutContent'
export const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT" text="I'm friendly Software Developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}
