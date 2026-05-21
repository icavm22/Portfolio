'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projectsData = {
  consultoria: [
    {
      id: 1,
      title: 'Dashboard de Control de Costos',
      description: 'Plataforma integral para monitoreo de costos en tiempo real.',
      tags: ['Power BI', 'SQL', 'DAX', 'Analytics'],
      client: 'American Industries',
    },
  ],
  empresas: [
    {
      id: 2,
      title: 'Automatizacion de Reportes',
      description: 'Generacion automatica de reportes mensuales.',
      tags: ['Excel VBA', 'Power BI'],
      client: 'Desarrollos Mafersa',
    },
  ],
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState('consultoria');
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
        </motion.div>

        <div className="flex justify-center gap-4 mb-12">
          {Object.keys(projectsData).map((tab) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-accent to-accent-light text-primary'
                  : 'border-2 border-secondary text-text-light'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {currentProjects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-secondary border border-secondary rounded-lg p-6"
              >
                <p className="text-accent text-sm font-semibold mb-2">{project.client}</p>
                <h3 className="text-xl font-bold text-text-light mb-3">{project.title}</h3>
                <p className="text-text-muted text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary border border-accent/30 text-accent text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
