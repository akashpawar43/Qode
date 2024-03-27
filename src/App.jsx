import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Tools from './components/Tools'
import Trust from './components/Trust'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Price from './components/Price'
import Projects from './components/Projects'
import Trial from './components/Trial'
import NewsLetter from './components/NewsLetter'
import Alert from './components/Alert'

export default function App() {
  return (
    <>
      <Alert />
      <Header />
      <Hero />
      <Brands />
      <Tools />
      <Trust />
      <Testimonials />
      <Price />
      <Projects />
      <Trial />
      <NewsLetter />
      <Footer />
    </>
  )
}
