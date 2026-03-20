"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Parallax con scroll
  const imageY = useTransform(scrollY, [0, 500], [0, 150]);
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const contentY = useTransform(scrollY, [0, 500], [0, -50]);
  const contentOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Grid de fondo animado */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Imagen de fondo con parallax de scroll y mouse */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-40 grayscale will-change-transform"
        style={{ 
          backgroundImage: "url('/scorpion.jpeg')",
          y: imageY,
          scale: imageScale,
          x: mousePosition.x,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

      {/* Efecto de luz radial que sigue al cursor */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${50 + mousePosition.x / 10}% ${50 + mousePosition.y / 10}%, rgba(255,255,255,0.05), transparent 50%)`,
        }}
      />

      {/* Partículas flotantes mejoradas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Líneas decorativas animadas */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Contenido con parallax */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 max-w-4xl px-6 text-center"
      >
        {/* Badge animado - Oculto en móviles */}
        <motion.div
          variants={item}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="hidden md:inline-block mb-6"
        >
          <div className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm text-gray-300">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            Disponible para nuevos proyectos
          </div>
        </motion.div>

        <motion.h1
          variants={item}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            DevOps · Infraestructura
          </span>
          <br />
          <span className="text-white">y despliegue confiable</span>
        </motion.h1>

        <motion.p
          variants={item}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Ayudo a negocios y proyectos digitales a{" "}
          <span className="text-white font-medium">desplegar, escalar y mantener</span>{" "}
          sistemas modernos de forma segura y eficiente.
        </motion.p>

        <motion.div
          variants={item}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          {["Docker", "Linux", "Nginx", "CI/CD", "Cloud", "Next.js"].map((tech, i) => (
            <motion.span
              key={tech}
              className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-md text-sm text-gray-400 hover:bg-white/10 hover:text-white transition-all cursor-default"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ delay: i * 0.05 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          variants={item}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contacto"
            className="group relative px-8 py-4 bg-white text-black font-medium rounded-lg overflow-hidden"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Hablemos de tu proyecto</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#proyectos"
            className="px-8 py-4 border border-white/20 rounded-lg hover:bg-white/5 backdrop-blur-sm transition-all group"
            whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.4)" }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="group-hover:text-white transition-colors">Ver proyectos</span>
          </motion.a>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ height: ["20%", "80%", "20%"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 bg-white/40 rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}