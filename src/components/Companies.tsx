'use client';

import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  { id: 1, name: 'Desarrollos Mafersa', logo: '🏗️' },
  { id: 2, name: 'Alora Desarrollos', logo: '🏢' },
  { id: 3, name: 'Sepsa Prefabricados', logo: '⚙️' },
  { id: 4, name: 'PIAS SA', logo: '📊' },
  { id: 5, name: 'American Industries', logo: '🔧' },
];

export default function Companies() {
  return (
    <section id="companies" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-light mb-4">Empresas con las que hemos trabajado</h2>
          <p className="text-text-muted text-lg">Experiencia con líderes de la industria de construcción e ingeniería</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}
              className="bg-primary border border-secondary rounded-lg p-8 flex flex-col items-center justify-center h-40 hover:border-accent transition-all cursor-pointer"
            >
              <div className="text-5xl mb-3">{company.logo}</div>
              <p className="text-text-light font-semibold text-center text-sm">{company.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
