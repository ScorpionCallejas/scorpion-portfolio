"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo animado */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center"
        >
          <span className="text-white font-bold text-3xl">S</span>
        </motion.div>

        {/* Texto */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-white text-lg font-semibold mb-4"
        >
          Scorpion<span className="text-gray-400">.cyco.tech</span>
        </motion.p>

        {/* Barra de progreso */}
        <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
          />
        </div>
      </div>
    </motion.div>
  );
}