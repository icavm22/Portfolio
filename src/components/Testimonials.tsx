'use client';

import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos García',
      company: 'Tech Corp',
      text: 'Antonio transformó nuestros datos en decisiones estratégicas. Increíble profesional.',
      rating: 5,
    },
    {
      name: 'María López',
      company: 'Financial Group',
      text: 'Su expertise en Power BI nos ahorro miles en implementación. Lo recomiendo 100%.',
      rating: 5,
    },
    {
      name: 'Juan Martínez',
      company: 'E-Commerce Plus',
      text: 'Profesional serio, entrega a tiempo y resultados excepcionales.',
      rating: 5,
    },
    {
      name: 'Ana Rodríguez',
      company: 'Startup Ventures',
      text: 'Antonio fue clave en nuestro crecimiento. Su asesoramiento fue invaluable.',
      rating: 5,
    },
    {
      name: 'Roberto Silva',
      company: 'Manufacturing Inc',
      text: 'Excelente consultor. Entiende el negocio, no solo la tecnología.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-16 text-center"
        >
          Testimonios de <span className="text-accent">Clientes</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-primary/50 border border-accent/20 rounded-lg hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-accent text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <div className="border-t border-accent/20 pt-4">
                <p className="font-semibold text-accent">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;