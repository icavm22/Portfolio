'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiBarChart3, FiTrendingUp, FiZap, FiDatabase } from 'react-icons/fi';

const services = [
  {
    icon: FiBarChart3,
    title: 'Business Intelligence',
    description: 'Diseno e implementacion de soluciones BI avanzadas con Power BI, dashboards interactivos y analisis predictivo.',
  },
  {
    icon: FiTrendingUp,
    title: 'Gestion de Proyectos',
    description: 'Control integral de proyectos de construccion con seguimiento de presupuesto, cronograma y recursos.',
  },
  {
    icon: FiZap,
    title: 'Automatizacion de Procesos',
    description: 'Eliminacion de procesos manuales mediante automatizacion inteligente, reduciendo errores y aumentando eficiencia.',
  },
  {
    icon: FiDatabase,
    title: 'Consultoria Estrategica',
    description: 'Asesoramiento especializado en transformacion digital, integracion de sistemas y optimizacion de operaciones.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-light mb-4">Servicios</h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Soluciones integrales de Business Intelligence y gestion de proyectos
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)' }}
                className="bg-primary border border-secondary rounded-lg p-8 hover:border-accent transition-all"
              >
                <Icon className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-xl font-bold text-text-light mb-3">{service.title}</h3>
                <p className="text-text-muted">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
