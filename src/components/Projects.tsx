'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const projectsData = {
  consultoría: [
    {
      id: 1,
      title: 'Dashboard de Control de Costos',
      description: 'Plataforma integral para monitoreo de costos en tiempo real con análisis de variaciones y proyecciones presupuestarias.',
      tags: ['Power BI', 'SQL', 'DAX', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      client: 'American Industries',
    },
    {
      id: 2,
      title: 'Sistema de Seguimiento de Avance Físico',
      description: 'Solución de tracking automático de progreso en proyectos con KPIs visuales y alertas de desviación.',
      tags: ['Power BI', 'Power Automate', 'SharePoint'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop',
      client: 'Desarrollos Mafersa',
    },
  ],
  empresas: [
    {
      id: 3,
      title: 'Automatización de Reportes Presupuestarios',
      description: 'Generación automática de reportes mensuales con Excel VBA y Power BI para análisis comparativo.',
      tags: ['Excel VBA', 'Power BI', 'Automatización'],
      image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=500&h=300&fit=crop',
      client: 'Desarrollos Mafersa',
    },
    {
      id: 4,
      title: 'Análisis Predictivo de Materiales',
      description: 'Modelo predictivo para optimización de compra y almacenamiento de materiales en construcción.',
      tags: ['Python', 'Machine Learning', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8a0c5?w=500&h=300&fit=crop',
      client: 'Alora Desarrollos',
    },
    {
      id: 5,
      title: 'Control de Cronograma y Recursos',
      description: 'Sistema integrado de planificación con visualización de tiempos, asignación de recursos y gestión de hitos.',
      tags: ['Project Management', 'Power BI', 'SQL'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      client: 'Sepsa Prefabricados',
    },
    {
      id: 6,
      title: 'Plataforma de Gestión Multiproyecto',
      description: 'Solución centralizada para coordinación y seguimiento de múltiples proyectos con visibilidad ejecutiva.',
      tags: ['Power BI', 'SQL Server', 'Power Automate'],
      image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=500&h=300&fit=crop',
      client: 'PIAS SA',
    },
  ],
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('consultoría');

  const currentProjects = projectsData[activeTab as keyof typeof projectsData];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-light mb-4">Proyectos</h2>
          <p className="text-text-muted text-lg">
            Casos de éxito en consultoría y experiencia empresarial
          </p>
        </motion.div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(projectsData).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-accent to-accent-light text-primary shadow-glow'
                  : 'border-2 border-secondary text-text-light hover:border-accent'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-secondary border border-secondary rounded-lg overflow-hidden hover:border-accent transition-all group"
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-accent/20 to-accent-light/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-accent text-sm font-semibold mb-2">{project.client}</p>
                  <h3 className="text-xl font-bold text-text-light mb-3">{project.title}</h3>
                  <p className="text-text-muted text-sm mb-4">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary border border-accent/30 text-accent text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
