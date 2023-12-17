import React from 'react'
import Hero from './Sections/Hero'
import Intro from './Sections/Intro'
import Token from './Sections/Token'
import Roadmap from './Sections/Roadmap'
import Navbar from '../../Components/Navbar'
import Footer from './Sections/Footer'

function LandingPage() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Intro/>
        <Token/>
        <Roadmap/>
        <Footer/>
    </div>
  )
}

export default LandingPage