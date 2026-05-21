'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const dashboards = [
  {
    id: 1,
    title: 'Dashboard de Control de Proyectos',
    description: 'Seguimiento integral de proyectos con KPIs de avance, presupuesto y recursos.',
    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=ejemplo1&autoAuth=true&ctid=ejemplo',
  },
  {
    id: 2,
    title: 'Análisis Financiero Multiproyecto',
    description: 'Análisis comparativo de costos, variaciones presupuestarias y proyecciones financieras.',
    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=ejemplo2&autoAuth=true&ctid=ejemplo',
  },
  {
    id: 3,
    title: 'Gestión de Recursos',
    description: 'Optimización de asignación de recursos, disponibilidad de equipos y utilización.',
    embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=ejemplo3&autoAuth=true&ctid=ejemplo',
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
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            Visualización interactiva de datos con análisis en tiempo real
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dashboards.map((dashboard, index) => (
            <motion.div
              key={dashboard.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-secondary border border-secondary rounded-lg overflow-hidden hover:border-accent transition-all group"
            >
              {/* Placeholder for Dashboard */}
              <div className="bg-gradient-to-br from-accent/10 to-accent-light/10 h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">📊</div>
                  <p className="text-text-muted text-sm">Dashboard Power BI</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-text-light mb-2">{dashboard.title}</h3>
                <p className="text-text-muted text-sm mb-4">{dashboard.description}</p>
                <motion.a
                  href={dashboard.embedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-semibold"
                >
                  Ver Dashboard
                  <FiExternalLink />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 bg-primary border border-secondary rounded-lg p-8 text-center"
        >
          <p className="text-text-muted mb-2">
            💡 <strong>Nota:</strong> Los dashboards mostrados son ejemplos. Reemplaza las URLs con tus dashboards publicados de Power BI.
          </p>
          <p className="text-text-muted text-sm">
            Para obtener el embed link: Publica tu reporte → Compartir → Obtener enlace embed
          </p>
        </motion.div>
      </div>
    </section>
  );
}
