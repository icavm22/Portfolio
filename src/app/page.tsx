'use client';

import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Companies from '@/components/Companies';
import Dashboards from '@/components/Dashboards';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Projects />
      <Companies />
      <Dashboards />
      <Testimonials />
      <CTA />
    </main>
  );
}
