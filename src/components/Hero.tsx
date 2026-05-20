'use client';

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-6 md:px-12 lg:px-20 min-h-screen flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
            Hola, soy <span className="text-accent">Antonio Victoriano</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl">
            Especialista en Business Intelligence, Power BI y consultoría empresarial.
            Ayudo a empresas a transformar datos en decisiones estratégicas.
          </p>
          <div className="flex gap-4 pt-8">
            <button className="button-primary">
              Ver Proyectos
            </button>
            <button className="button-secondary">
              Contactarme
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;