'use client';

import { motion } from 'framer-motion';

const Companies = () => {
  const companies = [
    { name: 'Empresa Fortune 500', role: 'Senior BI Consultant' },
    { name: 'Startup Tech', role: 'Data Analyst Lead' },
    { name: 'Grupo Empresarial', role: 'Business Intelligence' },
    { name: 'Consultora Global', role: 'Consultor Senior' },
    { name: 'Fintech Company', role: 'Analytics Manager' },
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
          Empresas con las que he <span className="text-accent">Trabajado</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-primary/50 border border-accent/20 rounded-lg text-center hover:border-accent/50 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-accent mb-2">{company.name}</h3>
              <p className="text-gray-400 text-sm">{company.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;