import React from 'react'
import AboutMe from '../components/AboutMe'
import HeyThere from '../components/HeyThere'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <HeyThere />
      <AboutMe />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomeScreen;