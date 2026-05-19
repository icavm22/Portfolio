'use client'

import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const testimonials = [
  {
    name: 'Carlos Rodríguez',
    position: 'Gerente de Proyectos',
    company: 'Desarrollos Mafersa',
    text: 'Antonio transformó completamente nuestra forma de controlar proyectos. Los dashboards que implementó nos dieron visibilidad real y redujeron significativamente los retrasos.',
    avatar: '👨‍💼',
  },
  {
    name: 'María González',
    position: 'Directora Financiera',
    company: 'Alora Desarrollos',
    text: 'Su expertise en BI permitió automatizar nuestros reportes mensuales. Ahora tenemos información confiable al instante en lugar de esperar días.',
    avatar: '👩‍💼',
  },
  {
    name: 'Juan Pérez',
    position: 'CEO',
    company: 'PIAS SA',
    text: 'La consultoría estratégica de Antonio fue clave para optimizar nuestras operaciones. Recomendado 100% para cualquier empresa que busque transformación digital.',
    avatar: '👨‍💻',
  },
  {
    name: 'Laura Martínez',
    position: 'Coordinadora Operativa',
    company: 'Sepsa Prefabricados',
    text: 'Profesional, dedicado y con un profundo conocimiento técnico. El sistema que implementó sigue siendo fundamental en nuestras operaciones.',
    avatar: '👩‍🔬',
  },
  {
    name: 'Roberto López',
    position: 'Superintendent',
    company: 'American Industries',
    text: 'Excelente gestor de proyectos. Entiende tanto la parte técnica como operativa. Definitivamente volveríamos a trabajar con Antonio.',
    avatar: '👨‍🏫',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="section bg-secondary/50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Testimonios de Clientes
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Lo que dicen de mi trabajo profesionales en el sector
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-primary/50 border border-accent/20 rounded-2xl p-8 hover:border-accent/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-accent fill-current" size={18} />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic leading-relaxed">\"{testimonial.text}\"</p>
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-accent">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}