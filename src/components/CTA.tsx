'use client'

import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiLinkedin, FiArrowRight } from 'react-icons/fi'

export default function CTA() {
  return (
    <section id="contacto" className="section bg-gradient-to-b from-secondary/50 to-primary">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-accent/10 to-cyan-500/10 border border-accent/30 rounded-3xl p-12 md:p-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Listo para transformar tu operación?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contáctame para discutir cómo puedo ayudarte a optimizar tus procesos, implementar soluciones de BI o llevar tu proyecto al siguiente nivel.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center mb-12 flex-wrap">
            <a
              href="mailto:ic.avm22@gmail.com"
              className="flex items-center justify-center gap-3 px-8 py-4 bg-accent text-primary font-bold rounded-lg hover:bg-cyan-400 transition-all transform hover:scale-105"
            >
              <FiMail size={20} />
              Enviar Email
            </a>
            <a
              href="https://wa.me/18123995470"
              target="_blank"
              className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent/10 transition-all"
            >
              <FiPhone size={20} />
              WhatsApp: +1 (812) 399-5470
            </a>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a
              href="https://www.linkedin.com/in/antoniovic/"
              target="_blank"
              className="flex items-center justify-center gap-2 text-accent hover:text-cyan-400 transition-colors font-semibold"
            >
              <FiLinkedin size={20} />
              linkedin.com/in/antoniovic
              <FiArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12 text-gray-500 text-sm"
        >
          <p>© 2025 Antonio Victoriano. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </section>
  )
}