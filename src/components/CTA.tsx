'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const CTA = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 rounded-2xl p-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          ¿Listo para <span className="text-accent">Transformar</span> tu Negocio?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Contacta conmigo para hablar sobre cómo puedo ayudarte con tus necesidades de BI y consultoría.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="mailto:ic.avm22@gmail.com"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-accent text-primary font-semibold rounded-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
          >
            <FaEnvelope /> Email
          </a>
          <a
            href="https://wa.me/18123995470"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-accent text-accent rounded-lg hover:bg-accent hover:text-primary transition-all duration-300"
          >
            <FaWhatsapp /> WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;