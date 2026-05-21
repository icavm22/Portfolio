'use client';

import React from 'react';
import { motion } from 'framer-motion';

const companies = [
  { id: 1, name: 'Desarrollos Mafersa' },
  { id: 2, name: 'Alora Desarrollos' },
  { id: 3, name: 'Sepsa Prefabricados' },
  { id: 4, name: 'PIAS SA' },
  { id: 5, name: 'American Industries' },
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
          <h2 className="text-4xl sm:text-5xl font-bold text-text-light mb-4">Empresas</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={company.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary border border-secondary rounded-lg p-8 flex items-center justify-center h-40"
            >
              <p className="text-text-light font-semibold text-center text-sm">{company.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
