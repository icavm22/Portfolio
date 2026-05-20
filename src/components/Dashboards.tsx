'use client';

import { motion } from 'framer-motion';
import { BarChart3 } from 'react-icons/fa';

const Dashboards = () => {
  const dashboards = [
    {
      title: 'Dashboard Ventas',
      description: 'Seguimiento de ventas, leads y conversiones en tiempo real',
      metrics: ['Ventas Totales', 'Conversión', 'Revenue'],
    },
    {
      title: 'Dashboard Financiero',
      description: 'Estado financiero, flujo de caja y proyecciones',
      metrics: ['Cash Flow', 'Rentabilidad', 'Presupuesto'],
    },
    {
      title: 'Dashboard Operacional',
      description: 'KPIs operacionales y eficiencia de procesos',
      metrics: ['Eficiencia', 'Producción', 'Costos'],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Dashboards Power <span className="text-accent">BI</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dashboards.map((dashboard, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-primary/50 border border-accent/20 rounded-lg hover:border-accent/50 transition-all duration-300"
            >
              <BarChart3 className="text-accent text-4xl mb-4" />
              <h3 className="text-xl font-semibold mb-3">{dashboard.title}</h3>
              <p className="text-gray-400 mb-6">{dashboard.description}</p>
              <div className="space-y-2">
                {dashboard.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span className="text-gray-300">{metric}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboards;