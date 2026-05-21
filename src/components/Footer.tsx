'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-secondary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold text-text-light mb-4">AVM Consultoria</h3>
            <p className="text-text-muted">
              Especializado en Business Intelligence y Gestion de Proyectos.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-text-light mb-4">Enlaces</h3>
            <ul className="space-y-2 text-text-muted">
              <li><a href="#hero" className="hover:text-accent transition-colors">Inicio</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Proyectos</a></li>
              <li><a href="#dashboards" className="hover:text-accent transition-colors">Dashboards</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-text-light mb-4">Contacto</h3>
            <div className="space-y-3 text-text-muted">
              <motion.a href="mailto:ic.avm22@gmail.com" className="flex items-center gap-2 hover:text-accent">
                <FiMail /> ic.avm22@gmail.com
              </motion.a>
              <motion.a href="tel:+18123995470" className="flex items-center gap-2 hover:text-accent">
                <FiPhone /> +1 812-399-5470
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/antoniovic/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent">
                <FiLinkedin /> LinkedIn
              </motion.a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary pt-8 text-center text-text-muted">
          <p>Antonio Victoriano Maldonado {currentYear}</p>
        </div>
      </div>
    </footer>
  );
}
