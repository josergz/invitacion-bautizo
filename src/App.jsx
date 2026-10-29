import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { SvgDefs } from './assets/SvgDefs'
import { Hero } from './components/Hero'
import { CountdownSection } from './components/Countdown'
import { Program } from './components/Program'
import { MapSection } from './components/MapSection'
import { Family } from './components/Family'
import { RsvpForm } from './components/RsvpForm'

export function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })
  }, [])

  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-[#fcf8ee]">
      <SvgDefs />

      <Hero />
      <CountdownSection />
      <Program />
      <MapSection />
      <Family />
      <RsvpForm />

      <footer className="w-full py-12 px-4 text-center bg-gradient-to-b from-[#4a3519] to-[#3f2d14] text-[#f1dfa5] font-italic text-lg">
        <svg
          className="w-16 mx-auto mb-3"
          viewBox="0 0 150 110"
          aria-hidden="true"
        >
          <use href="#rays" />
        </svg>
        Gracias por acompañarnos en este día tan especial
      </footer>
    </main>
  )
}

export default App
