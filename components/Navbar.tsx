"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0.6)", "rgba(0, 0, 0, 0.9)"]
  );

  // Calcular el progreso del scroll
  const scrollProgress = useTransform(scrollY, (value) => {
    if (typeof window === 'undefined') return 0;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    return height > 0 ? value / height : 0;
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detectar sección activa
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        style={{ backgroundColor }}
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b transition-all duration-300 ${
          isScrolled ? "border-white/20 shadow-lg shadow-black/20" : "border-white/10"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="group flex items-center gap-2"
          >
            <div className="relative">
              <motion.div
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-white font-bold text-sm">S</span>
              </motion.div>
              {/* Punto de estado */}
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-black animate-pulse" />
            </div>
            <div className="text-sm font-semibold tracking-wide">
              <span className="text-white group-hover:text-blue-400 transition-colors">Scorpion</span>
              <span className="text-gray-400">.cyco.tech</span>
            </div>
          </motion.a>

          {/* Links Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative px-4 py-2 text-sm transition-colors ${
                  activeSection === link.href
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.label}
                {/* Indicador de sección activa */}
                {activeSection === link.href && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}

            {/* Botón CTA */}
            <motion.a
              href="#contacto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:shadow-[0_0_20px_rgba(96,165,250,0.3)] transition-shadow"
            >
              Trabajemos juntos
            </motion.a>
          </div>

          {/* Botón menú móvil */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-white/10 hover:border-white/20 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white rounded-full transition-all"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-full h-0.5 bg-white rounded-full transition-all"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-full h-0.5 bg-white rounded-full transition-all"
              />
            </div>
          </motion.button>
        </nav>

        {/* Línea de progreso de scroll */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left"
          style={{ scaleX: scrollProgress }}
        />
      </motion.header>

      {/* Menú móvil */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-16 right-0 bottom-0 w-full max-w-sm bg-black/95 backdrop-blur-xl border-l border-white/10 z-40 md:hidden"
      >
        <div className="p-6 space-y-2">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, x: 20 }}
              animate={mobileMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base transition-all ${
                activeSection === link.href
                  ? "bg-white/10 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {link.label}
            </motion.a>
          ))}

          <motion.a
            href="#contacto"
            initial={{ opacity: 0, y: 20 }}
            animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            onClick={() => setMobileMenuOpen(false)}
            className="block mt-4 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center font-medium rounded-lg"
          >
            Trabajemos juntos
          </motion.a>

          {/* Info adicional en menú móvil */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={mobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            className="pt-8 mt-8 border-t border-white/10"
          >
            <p className="text-xs text-gray-500 mb-2">Contacto directo</p>
            <a href="mailto:scorpion@cyco.tech" className="text-sm text-gray-400 hover:text-white transition-colors">
              scorpion@cyco.tech
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Overlay del menú móvil */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </>
  );
}