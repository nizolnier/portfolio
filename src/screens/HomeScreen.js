import React from 'react'
import AboutMe from '../components/AboutMe/AboutMe'
import HeyThere from '../components/HeyThere/HeyThere'
import Education from '../components/Education/Education'
import Skills from '../components/Skills/Skills'
import Contact from '../components/Contact/Contact'
import Projects from '../components/Projects/Projects'
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