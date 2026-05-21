"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    title: "Plataforma Web en Producción",
    description:
      "Infraestructura para un sitio web profesional con despliegue automatizado, aislamiento por contenedores y proxy reverso.",
    stack: ["Docker", "Nginx", "Linux", "SSL"],
    site: "https://example.com",
    repo: "https://github.com/usuario/proyecto",
    metrics: [
      { label: "Uptime", value: "99.9%", color: "text-green-400" },
      { label: "Deploys", value: "50+", color: "text-blue-400" },
      { label: "Users", value: "1K+", color: "text-purple-400" },
    ],
  },
  {
    title: "Sistema Interno Autohospedado",
    description:
      "Diseño de entorno seguro para una aplicación interna, enfocado en estabilidad, backups y facilidad de mantenimiento.",
    stack: ["Docker Compose", "Linux", "Networking", "Backups"],
    site: "https://example.com",
    repo: "https://github.com/usuario/proyecto",
    metrics: [
      { label: "Uptime", value: "99.8%", color: "text-green-400" },
      { label: "Deploys", value: "30+", color: "text-blue-400" },
      { label: "Users", value: "500+", color: "text-purple-400" },
    ],
  },
  {
    title: "Portafolio e Infraestructura Personal",
    description:
      "Arquitectura modular pensada para escalar proyectos personales bajo una misma base técnica.",
    stack: ["Next.js", "Docker", "CI/CD", "Traefik"],
    site: "https://example.com",
    repo: "https://github.com/usuario/proyecto",
    metrics: [
      { label: "Uptime", value: "99.9%", color: "text-green-400" },
      { label: "Deploys", value: "100+", color: "text-blue-400" },
      { label: "Users", value: "2K+", color: "text-purple-400" },
    ],
  },
  {
    title: "PyCore ERP",
    description:
      "Sistema ERP multi-tenant completo con API REST en Django y frontend React/TypeScript. Cubre ventas, compras, inventario, facturación electrónica, RRHH, CXC/CXP, auditoría y storefront público.",
    stack: ["Django", "React", "TypeScript", "Docker", "PostgreSQL", "Redis", "WebSockets"],
    site: "https://pycore.app",
    repo: "https://github.com/Cyber-Core-Technology/pycore",
    metrics: [
      { label: "Módulos", value: "17", color: "text-green-400" },
      { label: "Commits", value: "111+", color: "text-blue-400" },
      { label: "Features", value: "23", color: "text-purple-400" },
    ],
  },
];

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="proyectos" className="relative py-32 bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-hidden">
      {/* Grid de fondo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Efectos de luz */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative">
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
            Proyectos
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Infraestructura aplicada
            </span>
            <br />
            <span className="text-white">a proyectos reales</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Casos de uso donde la infraestructura marca la diferencia entre un deploy exitoso y uno problemático
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
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
              {/* Card con efecto de brillo en hover */}
              <div className="relative h-full border border-white/10 rounded-2xl p-8 bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                {/* Efecto de luz en hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at 50% 0%, rgba(96,165,250,0.1), transparent 50%)",
                  }}
                />

                {/* Número del proyecto */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-white/5 group-hover:text-white/10 transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Badge de estado */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.1 }}
                    className="inline-flex items-center gap-2 self-start px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-400 mb-6"
                  >
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                    En producción
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Métricas */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-white/5">
                    {project.metrics.map((metric) => (
                      <div key={metric.label}>
                        <p className="text-xs text-gray-500 mb-1">{metric.label}</p>
                        <p className={`text-sm font-semibold ${metric.color}`}>{metric.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Stack tecnológico */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech, idx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + idx * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-gray-400 hover:text-white hover:border-white/20 transition-all cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Botones */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="group/btn flex-1 relative px-4 py-2.5 bg-white text-black text-sm font-medium rounded-lg overflow-hidden text-center"
                    >
                      <span className="relative z-10">Ver sitio</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>

                    <motion.a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      className="px-4 py-2.5 border border-white/20 text-sm rounded-lg hover:bg-white/5 transition-all text-center"
                    >
                      <svg
                        className="w-4 h-4 inline"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Borde animado en hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.2), transparent)",
                  backgroundSize: "200% 100%",
                }}
                animate={hoveredIndex === i ? {
                  backgroundPosition: ["0% 0%", "200% 0%"],
                } : {}}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-6">
            ¿Tienes un proyecto en mente?
          </p>
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:shadow-[0_0_30px_rgba(96,165,250,0.3)] transition-shadow"
          >
            Hablemos de infraestructura
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}