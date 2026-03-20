"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const skills = [
  { name: "Docker", level: 95 },
  { name: "Linux", level: 90 },
  { name: "CI/CD", level: 85 },
  { name: "Cloud", level: 80 },
  { name: "Nginx", level: 90 },
  { name: "Observabilidad", level: 75 },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-hidden"
    >
      {/* Grid de fondo animado */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Línea vertical decorativa animada */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-24 left-1/2 w-px h-32 bg-gradient-to-b from-white/0 via-white/20 to-white/0 origin-top"
      />

      {/* Efectos de luz */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16"
      >
        {/* Columna izquierda */}
        <motion.div variants={item} className="space-y-6">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-white to-transparent"
          />

          <p className="text-sm uppercase tracking-widest text-gray-400">
            Sobre mí
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Pienso en{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              infraestructura
            </span>
            <br />
            antes que en código
          </h2>

          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Me especializo en construir entornos{" "}
              <span className="text-white font-medium">estables, seguros y escalables</span>{" "}
              para proyectos digitales que necesitan algo más que "funcionar".
              Mi enfoque está en{" "}
              <span className="text-white font-medium">prevenir problemas</span>{" "}
              antes de que ocurran.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Trabajo con contenedores, automatización y servidores Linux para que
              los despliegues sean{" "}
              <span className="text-gray-300">repetibles, predecibles y fáciles de mantener</span>{" "}
              en el tiempo.
            </p>
          </div>

          {/* Estadísticas */}
          <motion.div
            variants={item}
            className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10"
          >
            <div>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                5+
              </motion.p>
              <p className="text-sm text-gray-400 mt-1">Años de experiencia</p>
            </div>
            <div>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                30+
              </motion.p>
              <p className="text-sm text-gray-400 mt-1">Proyectos</p>
            </div>
            <div>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                99%
              </motion.p>
              <p className="text-sm text-gray-400 mt-1">Uptime</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Columna derecha */}
        <motion.div variants={item} className="space-y-8">
          <div>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-1 bg-gradient-to-r from-white to-transparent mb-6"
            />
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">
              En la práctica
            </p>

            <ul className="space-y-5">
              {[
                "Diseño infraestructuras pensadas para crecimiento real",
                "Automatizo despliegues para reducir errores humanos",
                "Trabajo bajo principios DevOps: observabilidad, control y confiabilidad",
                "Documentación clara y sistemas fáciles de mantener",
              ].map((text, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="group flex items-start gap-3 text-gray-300 hover:text-white transition-colors cursor-default"
                >
                  <motion.span
                    whileHover={{ scale: 1.5 }}
                    className="mt-1.5 h-1.5 w-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full group-hover:shadow-[0_0_10px_rgba(96,165,250,0.5)] transition-shadow"
                  />
                  <span className="flex-1">{text}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Skills con barras de progreso */}
          <div className="pt-6">
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">
              Stack técnico
            </p>
            <div className="space-y-4">
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}