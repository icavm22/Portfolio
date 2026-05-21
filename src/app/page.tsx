'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Companies from '@/components/Companies';
import Dashboards from '@/components/Dashboards';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Companies />
        <Dashboards />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
