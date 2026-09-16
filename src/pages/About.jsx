import React from 'react'
import Header from '../components/Header'
import AboutSection from '../components/AboutSection'
import DesignProcess from '../components/DesignProcess'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-[#FBFBFB] text-[#111111] overflow-x-hidden pt-20">
      <Header />
      <main>
        <AboutSection />
        <DesignProcess />
      </main>
      <Footer />
    </div>
  )
}
