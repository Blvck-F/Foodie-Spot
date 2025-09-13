import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

export default function Home({ toggleBooking }) {
  return (
    <>
      <Navbar toggleBooking={toggleBooking} />
      <Hero toggleBooking={toggleBooking} />
      <About />
      <Menu />
      <Services />
      <Footer />
    </>
  )
}
