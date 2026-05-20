'use client';

import Navigation from '@/src/components/Navigation';
import Hero from '@/src/components/Hero';
import Services from '@/src/components/Services';
import Projects from '@/src/components/Projects';
import Companies from '@/src/components/Companies';
import Dashboards from '@/src/components/Dashboards';
import Testimonials from '@/src/components/Testimonials';
import CTA from '@/src/components/CTA';

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-primary via-secondary to-primary">
      <Navigation />
      <Hero />
      <Services />
      <Projects />
      <Companies />
      <Dashboards />
      <Testimonials />
      <CTA />
    </div>
  );
}