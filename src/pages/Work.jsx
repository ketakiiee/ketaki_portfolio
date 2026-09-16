import React from 'react'
import Header from '../components/Header'
import ProjectsSection from '../components/ProjectsSection'
import MarqueeTicker from '../components/MarqueeTicker'
import Footer from '../components/Footer'

export default function Work() {
  return (
    <div className="min-h-screen bg-[#FBFBFB] text-[#111111] overflow-x-hidden pt-20">
      <Header />
      <main>
        <ProjectsSection />
        <MarqueeTicker />
      </main>
      <Footer />
    </div>
  )
}
