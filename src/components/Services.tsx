'use client';

import { motion } from 'framer-motion';
import { BarChart3, Lightbulb, Users, TrendingUp } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description: 'Soluciones BI personalizadas con Power BI y análisis de datos avanzado',
    },
    {
      icon: TrendingUp,
      title: 'Análisis de Datos',
      description: 'Transformación de datos en insights accionables para tu negocio',
    },
    {
      icon: Lightbulb,
      title: 'Consultoría Estratégica',
      description: 'Asesoramiento en procesos y estrategia empresarial',
    },
    {
      icon: Users,
      title: 'Capacitación',
      description: 'Entrenamiento en herramientas de BI y análisis de datos',
    },
  ];

  return (
    <section id="services" className="py-20 px-6 md:px-12 lg:px-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Mis <span className="text-accent">Servicios</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-primary/50 border border-accent/20 rounded-lg hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
              >
                <Icon className="text-accent text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;