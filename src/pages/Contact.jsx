import React from 'react'
import Header from '../components/Header'
import ContactSection from '../components/ContactSection'
import TestimonialsSection from '../components/TestimonialsSection'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FBFBFB] text-[#111111] overflow-x-hidden pt-20">
      <Header />
      <main>
        <ContactSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
