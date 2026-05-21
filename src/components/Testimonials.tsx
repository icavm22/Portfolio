'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';

const testimonials = [
  {
    id: 1,
    name: 'Carlos Rodriguez',
    role: 'Gerente de Proyectos',
    company: 'Desarrollos Mafersa',
    testimonial: 'Antonio transformo completamente nuestro control de proyectos.',
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
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary border border-secondary rounded-lg p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-text-light mb-6 italic">"{testimonial.testimonial}"</p>
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
