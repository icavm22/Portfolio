'use client'

import Hero from '@/src/components/Hero'
import Services from '@/src/components/Services'
import Projects from '@/src/components/Projects'
import Companies from '@/src/components/Companies'
import Dashboards from '@/src/components/Dashboards'
import Testimonials from '@/src/components/Testimonials'
import CTA from '@/src/components/CTA'
import Navigation from '@/src/components/Navigation'

export default function Home() {
  return (
    <main className="bg-primary text-white">
      <Navigation />
      <Hero />
      <Services />
      <Projects />
      <Companies />
      <Dashboards />
      <Testimonials />
      <CTA />
    </main>
  )
}