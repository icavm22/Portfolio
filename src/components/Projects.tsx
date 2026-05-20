'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('consultoria');

  const projectsByTab = {
    consultoria: [
      {
        title: 'Optimización de Procesos Empresa X',
        description: 'Análisis y mejora de procesos empresariales resultando en 30% de eficiencia',
        tech: ['Power BI', 'Excel', 'SQL'],
      },
      {
        title: 'Dashboard de Ventas',
        description: 'Sistema de seguimiento de ventas en tiempo real para 50+ usuarios',
        tech: ['Power BI', 'DAX', 'SQL'],
      },
      {
        title: 'Análisis Financiero',
        description: 'Proyecciones financieras y análisis de rentabilidad',
        tech: ['Power BI', 'Python', 'Excel'],
      },
    ],
    empresas: [
      {
        title: 'Soluciones BI Empresa Fortune 500',
        description: 'Implementación de BI para múltiples departamentos',
        tech: ['Power BI', 'Azure', 'SQL Server'],
      },
      {
        title: 'Migración de Datos',
        description: 'Migración de sistemas legacy a cloud',
        tech: ['Azure', 'SQL', 'Power BI'],
      },
      {
        title: 'Dashboard Ejecutivo',
        description: 'Métricas clave para C-level executives',
        tech: ['Power BI', 'DAX', 'Excel'],
      },
    ],
  };

  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Mis <span className="text-accent">Proyectos</span>
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {['consultoria', 'empresas'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-accent text-primary'
                  : 'bg-secondary text-text hover:bg-secondary/80'
              }`}
            >
              {tab === 'consultoria' ? 'Consultoría' : 'Empresas'}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsByTab[activeTab as keyof typeof projectsByTab].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-primary/50 border border-accent/20 rounded-lg hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-3 text-accent">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;