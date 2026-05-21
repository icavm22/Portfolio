'use client';

import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import Companies from '@/components/Companies';
import Dashboards from '@/components/Dashboards';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin } from 'react-icons/fi';

function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-light/5" />
      <div className="absolute top-20 -right-40 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-light mb-6">
            Listo para transformar tu operacion?
          </h2>
          <p className="text-text-muted text-lg mb-12 max-w-2xl mx-auto">
            Estoy disponible para discutir tus necesidades especificas en Business Intelligence,
            gestion de proyectos o consultoria estrategica.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.a
            href="mailto:ic.avm22@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary border border-secondary rounded-lg p-8 hover:border-accent hover:shadow-glow transition-all group"
          >
            <FiMail className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-text-light mb-2">Email</h3>
            <p className="text-accent font-semibold">ic.avm22@gmail.com</p>
          </motion.a>

          <motion.a
            href="tel:+18123995470"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary border border-secondary rounded-lg p-8 hover:border-accent hover:shadow-glow transition-all group"
          >
            <FiPhone className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-text-light mb-2">Telefono</h3>
            <p className="text-accent font-semibold">+1 812-399-5470</p>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/antoniovic/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary border border-secondary rounded-lg p-8 hover:border-accent hover:shadow-glow transition-all group"
          >
            <FiLinkedin className="w-12 h-12 text-accent mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold text-text-light mb-2">LinkedIn</h3>
            <p className="text-accent font-semibold">Conectar</p>
          </motion.a>
        </div>

        <motion.a
          href="mailto:ic.avm22@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-10 py-4 bg-gradient-to-r from-accent to-accent-light text-primary rounded-lg font-semibold hover:shadow-glow-lg transition-all text-lg"
        >
          Agendar Consulta
        </motion.a>
      </div>
    </section>
  );
}

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
        <Contact />
      </main>
      <Footer />
    </>
  );
}