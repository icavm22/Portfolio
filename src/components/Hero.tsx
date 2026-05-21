'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary z-0" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent opacity-5 rounded-full blur-3xl" />

      <motion.div
        className="max-w-4xl mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-text-light mb-6 leading-tight">
            Antonio Victoriano
            <span className="bg-gradient-to-r from-accent via-accent-light to-accent bg-clip-text text-transparent">
              {' '}Maldonado
            </span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl text-accent font-semibold mb-6">
            Business Intelligence Specialist & Civil Engineer
          </h2>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg text-text-muted mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Especialista en Business Intelligence y Control de Proyectos con solida formacion en Ingenieria Civil. Transformo
          operaciones de construccion mediante la implementacion de sistemas de informacion avanzados, automatizacion de
          procesos y analytics en tiempo real.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-accent to-accent-light text-primary rounded-lg font-semibold hover:shadow-glow-lg transition-all flex items-center justify-center gap-2"
          >
            Ver Proyectos
            <FiArrowRight />
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-accent text-accent rounded-lg font-semibold hover:shadow-glow transition-all"
          >
            Contactar
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-center justify-center">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
}
