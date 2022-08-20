import React from 'react'
import About from '../components/About'
import Facts from '../components/Facts'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Team from '../components/Team'

function Home() {
  return (
    <div >
        <Intro />
        <Facts />
        <About/>
        <Features/>
        <Services/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default Home