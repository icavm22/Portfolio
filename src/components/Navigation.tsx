'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Empresas', href: '#companies' },
    { name: 'Dashboards', href: '#dashboards' },
    { name: 'Testimonios', href: '#testimonials' },
  ];

  return (
    <nav className="fixed w-full top-0 z-50 bg-primary/80 backdrop-blur-md border-b border-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent">
              AVM
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ color: '#00d4ff' }}
                className="text-text-light hover:text-accent transition-colors text-sm font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:inline-block px-6 py-2 bg-gradient-to-r from-accent to-accent-light text-primary rounded-lg font-semibold hover:shadow-glow-lg transition-all"
          >
            Contactar
          </motion.a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-accent"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden pb-4"
          >
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-text-light hover:text-accent transition-colors"
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
}
