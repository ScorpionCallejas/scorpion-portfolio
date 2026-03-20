"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contacto" className="relative py-32 bg-gradient-to-b from-black via-zinc-950 to-black text-white overflow-hidden">
      {/* Grid de fondo */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Efectos de luz */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Columna izquierda - Información */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "60px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-6"
            />

            <p className="text-xs tracking-[0.3em] text-gray-400 mb-4 uppercase">
              Contacto
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Hablemos de
              </span>
              <br />
              <span className="text-white">tu proyecto</span>
            </h2>

            <p className="text-gray-400 leading-relaxed mb-8">
              Cuéntame qué necesitas y vemos cómo llevarlo a producción de forma{" "}
              <span className="text-white font-medium">segura, escalable y mantenible</span>.
            </p>

            {/* Info de contacto */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 p-0.5 flex-shrink-0">
                  <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a href="mailto:scorpion@cyco.tech" className="text-white group-hover:text-blue-400 transition-colors">
                    scorpion@cyco.tech
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 flex-shrink-0">
                  <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Tiempo de respuesta</p>
                  <p className="text-white">24-48 horas</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-0.5 flex-shrink-0">
                  <div className="w-full h-full bg-black rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Ubicación</p>
                  <p className="text-white">México · Remoto</p>
                </div>
              </motion.div>
            </div>

            {/* Disponibilidad */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 p-6 border border-white/10 rounded-xl bg-white/[0.02] backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <p className="text-sm font-medium text-white">Disponible para nuevos proyectos</p>
              </div>
              <p className="text-xs text-gray-400">
                Actualmente acepto proyectos de infraestructura y DevOps
              </p>
            </motion.div>
          </motion.div>

          {/* Columna derecha - Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative border border-white/10 rounded-2xl p-8 bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-sm">
              {/* Efecto de brillo */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />

              <form onSubmit={handleSubmit} className="relative space-y-6">
                {/* Campo Nombre */}
                <div className="relative">
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Nombre completo
                  </label>
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      required
                      placeholder="Tu nombre"
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-600"
                    />
                    <AnimatePresence>
                      {focusedField === "name" && (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Campo Email */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Correo electrónico
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@email.com"
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-600"
                    />
                    <AnimatePresence>
                      {focusedField === "email" && (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Campo Mensaje */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Cuéntame sobre tu proyecto
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Describe qué necesitas: tipo de proyecto, stack tecnológico, plazos estimados..."
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all resize-none placeholder:text-gray-600"
                    />
                    <AnimatePresence>
                      {focusedField === "message" && (
                        <motion.div
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.8, opacity: 0 }}
                          className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full"
                        />
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Botón de envío */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="group relative w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-lg font-medium overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </span>
                  {!loading && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>

                {/* Mensajes de estado */}
                <AnimatePresence mode="wait">
                  {status === "ok" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
                    >
                      <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-green-400 text-sm">
                        ¡Mensaje enviado! Te responderé pronto.
                      </p>
                    </motion.div>
                  )}

                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
                    >
                      <svg className="w-5 h-5 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-red-400 text-sm">
                        Error al enviar. Intenta de nuevo o escríbeme directamente.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}