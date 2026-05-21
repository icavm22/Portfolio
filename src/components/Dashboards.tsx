'use client';

import React from 'react';
import { motion } from 'framer-motion';

const dashboards = [
  {
    id: 1,
    title: 'Dashboard de Control de Proyectos',
    description: 'Seguimiento integral de proyectos con KPIs.',
  },
  {
    id: 2,
    title: 'Analisis Financiero Multiproyecto',
    description: 'Analisis comparativo de costos y variaciones.',
  },
  {
    id: 3,
    title: 'Gestion de Recursos',
    description: 'Optimizacion de asignacion de recursos.',
  },
];

export default function Dashboards() {
  return (
    <section id="dashboards" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-light mb-4">Dashboards Power BI</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dashboards.map((dashboard, index) => (
            <motion.div
              key={dashboard.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary border border-secondary rounded-lg overflow-hidden"
            >
              <div className="bg-gradient-to-br from-accent/10 to-accent-light/10 h-48 flex items-center justify-center">
                <p className="text-text-muted text-sm">Dashboard Power BI</p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-text-light mb-2">{dashboard.title}</h3>
                <p className="text-text-muted text-sm">{dashboard.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
