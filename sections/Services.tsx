"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    title: "Despliegue y automatización",
    description:
      "Configuración de pipelines y procesos automatizados para llevar aplicaciones a producción de forma segura y repetible.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    features: ["CI/CD pipelines", "Deploy automatizado", "Rollback seguro", "Zero downtime"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Infraestructura con Docker",
    description:
      "Diseño de entornos aislados y mantenibles usando contenedores para aplicaciones web y sistemas internos.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    features: ["Containerización", "Docker Compose", "Orquestación", "Aislamiento"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Servidores Linux",
    description:
      "Administración, hardening y mantenimiento de servidores enfocados en estabilidad, rendimiento y seguridad.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    features: ["Hardening", "Optimización", "Seguridad", "Monitoreo"],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Soporte y mantenimiento",
    description:
      "Monitoreo, backups y ajustes continuos para mantener sistemas en operación sin sorpresas.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    features: ["Backups automáticos", "Monitoreo 24/7", "Logs centralizados", "Alertas"],
    color: "from-orange-500 to-red-500",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="servicios" className="relative py-32 bg-black text-white overflow-hidden">
      {/* Grid de fondo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Efectos de luz */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"
          />

          <p className="text-xs tracking-[0.3em] text-gray-400 mb-4 uppercase">
            Servicios
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Soluciones enfocadas
            </span>
            <br />
            <span className="text-white">en estabilidad y despliegue</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Servicios DevOps diseñados para que tu infraestructura sea predecible, escalable y fácil de mantener
          </p>
        </motion.div>

        {/* Grid de servicios */}
        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <div className="relative h-full border border-white/10 rounded-2xl p-8 bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                {/* Efecto de gradiente en hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, rgba(96,165,250,0.05), transparent 70%)`,
                  }}
                />

                {/* Número del servicio */}
                <div className="absolute top-4 right-4 text-7xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="relative z-10">
                  {/* Ícono con gradiente */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.2 + i * 0.1 
                    }}
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-6`}
                  >
                    <div className="w-full h-full bg-black rounded-xl flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                  </motion.div>

                  <h3 className={`text-2xl font-semibold mb-4 transition-all duration-300 ${
                    hoveredIndex === i 
                      ? `bg-gradient-to-r ${service.color} bg-clip-text text-transparent` 
                      : ''
                  }`}>
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Features con checkmarks */}
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                        className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-gray-400 transition-colors"
                      >
                        <motion.div
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          transition={{ duration: 0.3 }}
                          className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} p-0.5 flex-shrink-0`}
                        >
                          <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </motion.div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Borde decorativo animado */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity`}
                  animate={hoveredIndex === i ? {
                    width: ["0%", "100%"],
                  } : { width: "0%" }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proceso de trabajo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-bold mb-12">Proceso de trabajo</h3>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Análisis", desc: "Entiendo tu proyecto y necesidades" },
              { step: "02", title: "Diseño", desc: "Propongo arquitectura escalable" },
              { step: "03", title: "Implementación", desc: "Despliego con las mejores prácticas" },
              { step: "04", title: "Soporte", desc: "Monitoreo y mantenimiento continuo" },
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Línea conectora */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}

                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="relative"
                >
                  <div className="text-5xl font-bold bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent mb-4">
                    {phase.step}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{phase.title}</h4>
                  <p className="text-sm text-gray-400">{phase.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}