'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Rodríguez',
    role: 'Gerente de Proyectos',
    company: 'Desarrollos Mafersa',
    testimonial:
      'Antonio transformó completamente nuestro control de proyectos. Sus dashboards nos dieron visibilidad real en tiempo real y hemos reducido desviaciones presupuestarias en 30%.',
    rating: 5,
  },
  {
    id: 2,
    name: 'María González',
    role: 'Directora Financiera',
    company: 'Alora Desarrollos',
    testimonial:
      'La automatización de reportes que implementó nos ahorró 20 horas semanales. Su expertise en BI es excepcional y su comunicación muy clara.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Juan Pérez',
    role: 'CEO',
    company: 'Sepsa Prefabricados',
    testimonial:
      'Antonio entiende profundamente los desafíos operacionales de construcción. No solo implementa tecnología, sino que piensa en soluciones estratégicas.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Laura Martínez',
    role: 'Coordinadora Operativa',
    company: 'PIAS SA',
    testimonial:
      'Su capacidad para analizar procesos complejos y simplificarlos es impresionante. Ha sido fundamental en mejorar nuestra eficiencia operacional.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Roberto López',
    role: 'Superintendent',
    company: 'American Industries',
    testimonial:
      'Los dashboards que creó nos permiten tomar decisiones basadas en datos en tiempo real. Altamente recomendado para cualquier proyecto de BI.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-light mb-4">Testimonios</h2>
          <p className="text-text-muted text-lg">Lo que dicen mis clientes y colegas</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 0 30px rgba(0, 212, 255, 0.2)' }}
              className="bg-primary border border-secondary rounded-lg p-8 hover:border-accent transition-all"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-text-light mb-6 italic leading-relaxed">
                "{testimonial.testimonial}"
              </p>

              {/* Author */}
              <div className="border-t border-secondary pt-4">
                <p className="font-semibold text-text-light">{testimonial.name}</p>
                <p className="text-accent text-sm">{testimonial.role}</p>
                <p className="text-text-muted text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
