import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MarqueeTicker from '../components/MarqueeTicker'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import DesignProcess from '../components/DesignProcess'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FBFBFB] text-[#111111] overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <MarqueeTicker />
        <ServicesSection />
        <AboutSection />
        <ProjectsSection />
        <DesignProcess />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
